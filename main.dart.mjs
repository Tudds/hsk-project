// Compiles a dart2wasm-generated main module from `source` which can then
// instantiatable via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(
      await WebAssembly.compileStreaming(source, builtins), builtins);
}

// Compiles a dart2wasm-generated wasm modules from `bytes` which is then
// instantiatable via the `instantiate` method.
export async function compile(bytes) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(await WebAssembly.compile(bytes, builtins), builtins);
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export async function instantiate(modulePromise, importObjectPromise) {
  var moduleOrCompiledApp = await modulePromise;
  if (!(moduleOrCompiledApp instanceof CompiledApp)) {
    moduleOrCompiledApp = new CompiledApp(moduleOrCompiledApp);
  }
  const instantiatedApp = await moduleOrCompiledApp.instantiate(await importObjectPromise);
  return instantiatedApp.instantiatedModule;
}

// DEPRECATED: Please use `compile` or `compileStreaming` to get a compiled app,
// use `instantiate` method to get an instantiated app and then call
// `invokeMain` to invoke the main function.
export const invoke = (moduleInstance, ...args) => {
  moduleInstance.exports.$invokeMain(args);
}

class CompiledApp {
  constructor(module, builtins) {
    this.module = module;
    this.builtins = builtins;
  }

  // The second argument is an options object containing:
  // `loadDeferredModules` is a JS function that takes an array of module names
  //   matching wasm files produced by the dart2wasm compiler. It also takes a
  //   callback that should be invoked for each loaded module with 2 arugments:
  //   (1) the module name, (2) the loaded module in a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`. The callback
  //   returns a Promise that resolves when the module is instantiated.
  //   loadDeferredModules should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  // `loadDeferredId` is a JS function that takes load ID produced by the
  //   compiler when the `load-ids` option is passed. Each load ID maps to one
  //   or more wasm files as specified in the emitted JSON file. It also takes a
  //   callback that should be invoked for each loaded module with 2 arugments:
  //   (1) the module name, (2) the loaded module in a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`. The callback
  //   returns a Promise that resolves when the module is instantiated.
  //   loadDeferredModules should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  // `loadDynamicModule` is a JS function that takes two string names matching,
  //   in order, a wasm file produced by the dart2wasm compiler during dynamic
  //   module compilation and a corresponding js file produced by the same
  //   compilation. It also takes a callback that should be invoked with the
  //   loaded module in a format supported by `WebAssembly.compile` or
  //   `WebAssembly.compileStreaming` and the result of using the JS 'import'
  //   API on the js file path. It should return a Promise that resolves when
  //   all the modules have been loaded and the callback promises have resolved.
  async instantiate(additionalImports,
      {loadDeferredModules, loadDynamicModule, loadDeferredId} = {}) {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + value;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {
            _1: (decoder, codeUnits) => decoder.decode(codeUnits),
      _2: () => new TextDecoder("utf-8", {fatal: true}),
      _3: () => new TextDecoder("utf-8", {fatal: false}),
      _4: (s) => +s,
      _5: x0 => new Uint8Array(x0),
      _6: (x0,x1,x2) => x0.set(x1,x2),
      _7: (x0,x1) => x0.transferFromImageBitmap(x1),
      _9: (x0,x1,x2) => x0.slice(x1,x2),
      _10: (x0,x1) => x0.decode(x1),
      _11: (x0,x1) => x0.segment(x1),
      _12: () => new TextDecoder(),
      _14: x0 => x0.buffer,
      _15: x0 => x0.wasmMemory,
      _16: () => globalThis.window._flutter_skwasmInstance,
      _17: x0 => x0.rasterStartMilliseconds,
      _18: x0 => x0.rasterEndMilliseconds,
      _19: x0 => x0.imageBitmaps,
      _135: (x0,x1) => x0.appendChild(x1),
      _166: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _167: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      _168: (x0,x1) => new OffscreenCanvas(x0,x1),
      _169: x0 => x0.remove(),
      _170: (x0,x1) => x0.append(x1),
      _172: x0 => x0.unlock(),
      _173: x0 => x0.getReader(),
      _174: (x0,x1) => x0.item(x1),
      _175: x0 => x0.next(),
      _176: x0 => x0.now(),
      _177: (x0,x1) => x0.revokeObjectURL(x1),
      _178: x0 => x0.close(),
      _179: (x0,x1,x2,x3,x4) => ({type: x0,data: x1,premultiplyAlpha: x2,colorSpaceConversion: x3,preferAnimation: x4}),
      _180: x0 => new window.ImageDecoder(x0),
      _181: (x0,x1) => ({frameIndex: x0,completeFramesOnly: x1}),
      _182: (x0,x1) => x0.decode(x1),
      _183: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._183(f,arguments.length,x0) }),
      _184: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _186: (x0,x1) => x0.getModifierState(x1),
      _187: x0 => x0.preventDefault(),
      _188: x0 => x0.stopPropagation(),
      _189: (x0,x1) => x0.removeProperty(x1),
      _190: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._190(f,arguments.length,x0) }),
      _191: x0 => new window.FinalizationRegistry(x0),
      _192: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      _194: (x0,x1) => x0.unregister(x1),
      _195: (x0,x1) => x0.prepend(x1),
      _196: x0 => new Intl.Locale(x0),
      _197: (x0,x1) => x0.observe(x1),
      _198: x0 => x0.disconnect(),
      _199: (x0,x1) => x0.getAttribute(x1),
      _200: (x0,x1) => x0.contains(x1),
      _201: (x0,x1) => x0.querySelector(x1),
      _202: (x0,x1) => x0.matchMedia(x1),
      _203: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._203(f,arguments.length,x0) }),
      _204: (x0,x1,x2) => x0.call(x1,x2),
      _205: x0 => x0.blur(),
      _206: x0 => x0.hasFocus(),
      _207: (x0,x1) => x0.removeAttribute(x1),
      _208: (x0,x1,x2) => x0.insertBefore(x1,x2),
      _209: (x0,x1) => x0.hasAttribute(x1),
      _210: (x0,x1) => x0.getModifierState(x1),
      _211: (x0,x1) => x0.createTextNode(x1),
      _212: x0 => x0.getBoundingClientRect(),
      _213: (x0,x1) => x0.replaceWith(x1),
      _214: (x0,x1) => x0.contains(x1),
      _215: (x0,x1) => x0.closest(x1),
      _216: () => new Array(),
      _653: x0 => new Uint8Array(x0),
      _656: () => globalThis.window.flutterConfiguration,
      _658: x0 => x0.assetBase,
      _663: x0 => x0.canvasKitMaximumSurfaces,
      _664: x0 => x0.debugShowSemanticsNodes,
      _665: x0 => x0.hostElement,
      _666: x0 => x0.multiViewEnabled,
      _667: x0 => x0.nonce,
      _669: x0 => x0.fontFallbackBaseUrl,
      _679: x0 => x0.console,
      _680: x0 => x0.devicePixelRatio,
      _681: x0 => x0.document,
      _682: x0 => x0.history,
      _683: x0 => x0.innerHeight,
      _684: x0 => x0.innerWidth,
      _685: x0 => x0.location,
      _686: x0 => x0.navigator,
      _687: x0 => x0.visualViewport,
      _688: x0 => x0.performance,
      _689: x0 => x0.parent,
      _691: x0 => x0.URL,
      _693: (x0,x1) => x0.getComputedStyle(x1),
      _694: x0 => x0.screen,
      _695: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._695(f,arguments.length,x0) }),
      _696: (x0,x1) => x0.requestAnimationFrame(x1),
      _700: (x0,x1) => x0.warn(x1),
      _702: (x0,x1) => x0.debug(x1),
      _703: x0 => globalThis.parseFloat(x0),
      _704: () => globalThis.window,
      _705: () => globalThis.Intl,
      _706: () => globalThis.Symbol,
      _707: (x0,x1,x2,x3,x4) => globalThis.createImageBitmap(x0,x1,x2,x3,x4),
      _709: x0 => x0.clipboard,
      _710: x0 => x0.maxTouchPoints,
      _711: x0 => x0.vendor,
      _712: x0 => x0.language,
      _713: x0 => x0.platform,
      _714: x0 => x0.userAgent,
      _715: (x0,x1) => x0.vibrate(x1),
      _716: x0 => x0.languages,
      _717: x0 => x0.documentElement,
      _718: (x0,x1) => x0.querySelector(x1),
      _719: (x0,x1) => x0.querySelectorAll(x1),
      _721: (x0,x1) => x0.createElement(x1),
      _724: (x0,x1) => x0.createEvent(x1),
      _725: x0 => x0.activeElement,
      _728: x0 => x0.head,
      _729: x0 => x0.body,
      _731: (x0,x1) => { x0.title = x1 },
      _734: x0 => x0.visibilityState,
      _735: () => globalThis.document,
      _736: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._736(f,arguments.length,x0) }),
      _737: (x0,x1) => x0.dispatchEvent(x1),
      _745: x0 => x0.target,
      _747: x0 => x0.timeStamp,
      _748: x0 => x0.type,
      _750: (x0,x1,x2,x3) => x0.initEvent(x1,x2,x3),
      _756: x0 => x0.baseURI,
      _757: x0 => x0.firstChild,
      _761: x0 => x0.parentElement,
      _763: (x0,x1) => { x0.textContent = x1 },
      _764: x0 => x0.parentNode,
      _765: x0 => x0.nextSibling,
      _766: (x0,x1) => x0.removeChild(x1),
      _767: x0 => x0.isConnected,
      _775: x0 => x0.clientHeight,
      _776: x0 => x0.clientWidth,
      _777: x0 => x0.offsetHeight,
      _778: x0 => x0.offsetWidth,
      _779: x0 => x0.id,
      _780: (x0,x1) => { x0.id = x1 },
      _783: (x0,x1) => { x0.spellcheck = x1 },
      _784: x0 => x0.tagName,
      _785: x0 => x0.style,
      _787: (x0,x1) => x0.querySelectorAll(x1),
      _788: (x0,x1,x2) => x0.setAttribute(x1,x2),
      _789: x0 => x0.tabIndex,
      _790: (x0,x1) => { x0.tabIndex = x1 },
      _791: (x0,x1) => x0.focus(x1),
      _792: x0 => x0.scrollTop,
      _793: (x0,x1) => { x0.scrollTop = x1 },
      _794: (x0,x1) => { x0.scrollLeft = x1 },
      _795: x0 => x0.scrollLeft,
      _796: x0 => x0.classList,
      _797: (x0,x1) => x0.scrollIntoView(x1),
      _800: (x0,x1) => { x0.className = x1 },
      _802: (x0,x1) => x0.getElementsByClassName(x1),
      _803: x0 => x0.click(),
      _804: (x0,x1) => x0.attachShadow(x1),
      _807: x0 => x0.computedStyleMap(),
      _808: (x0,x1) => x0.get(x1),
      _814: (x0,x1) => x0.getPropertyValue(x1),
      _815: (x0,x1,x2,x3) => x0.setProperty(x1,x2,x3),
      _816: x0 => x0.offsetLeft,
      _817: x0 => x0.offsetTop,
      _818: x0 => x0.offsetParent,
      _820: (x0,x1) => { x0.name = x1 },
      _821: x0 => x0.content,
      _822: (x0,x1) => { x0.content = x1 },
      _826: (x0,x1) => { x0.src = x1 },
      _827: x0 => x0.naturalWidth,
      _828: x0 => x0.naturalHeight,
      _832: (x0,x1) => { x0.crossOrigin = x1 },
      _834: (x0,x1) => { x0.decoding = x1 },
      _835: x0 => x0.decode(),
      _840: (x0,x1) => { x0.nonce = x1 },
      _845: (x0,x1) => { x0.width = x1 },
      _847: (x0,x1) => { x0.height = x1 },
      _850: (x0,x1) => x0.getContext(x1),
      _918: x0 => x0.width,
      _919: x0 => x0.height,
      _921: (x0,x1) => x0.fetch(x1),
      _922: x0 => x0.status,
      _924: x0 => x0.body,
      _925: x0 => x0.arrayBuffer(),
      _928: x0 => x0.read(),
      _929: x0 => x0.value,
      _930: x0 => x0.done,
      _937: x0 => x0.name,
      _938: x0 => x0.x,
      _939: x0 => x0.y,
      _942: x0 => x0.top,
      _943: x0 => x0.right,
      _944: x0 => x0.bottom,
      _945: x0 => x0.left,
      _955: x0 => x0.height,
      _956: x0 => x0.width,
      _957: x0 => x0.scale,
      _958: (x0,x1) => { x0.value = x1 },
      _961: (x0,x1) => { x0.placeholder = x1 },
      _963: (x0,x1) => { x0.name = x1 },
      _964: x0 => x0.selectionDirection,
      _965: x0 => x0.selectionStart,
      _966: x0 => x0.selectionEnd,
      _969: x0 => x0.value,
      _971: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      _972: x0 => x0.readText(),
      _973: (x0,x1) => x0.writeText(x1),
      _975: x0 => x0.altKey,
      _976: x0 => x0.code,
      _977: x0 => x0.ctrlKey,
      _978: x0 => x0.key,
      _979: x0 => x0.keyCode,
      _980: x0 => x0.location,
      _981: x0 => x0.metaKey,
      _982: x0 => x0.repeat,
      _983: x0 => x0.shiftKey,
      _984: x0 => x0.isComposing,
      _986: x0 => x0.state,
      _987: (x0,x1) => x0.go(x1),
      _989: (x0,x1,x2,x3) => x0.pushState(x1,x2,x3),
      _990: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      _991: x0 => x0.pathname,
      _992: x0 => x0.search,
      _993: x0 => x0.hash,
      _997: x0 => x0.state,
      _1000: (x0,x1) => x0.createObjectURL(x1),
      _1002: x0 => new Blob(x0),
      _1012: x0 => x0.matches,
      _1016: x0 => x0.matches,
      _1020: x0 => x0.relatedTarget,
      _1022: x0 => x0.clientX,
      _1023: x0 => x0.clientY,
      _1024: x0 => x0.offsetX,
      _1025: x0 => x0.offsetY,
      _1028: x0 => x0.button,
      _1029: x0 => x0.buttons,
      _1030: x0 => x0.ctrlKey,
      _1034: x0 => x0.pointerId,
      _1035: x0 => x0.pointerType,
      _1036: x0 => x0.pressure,
      _1037: x0 => x0.tiltX,
      _1038: x0 => x0.tiltY,
      _1039: x0 => x0.getCoalescedEvents(),
      _1042: x0 => x0.deltaX,
      _1043: x0 => x0.deltaY,
      _1044: x0 => x0.wheelDeltaX,
      _1045: x0 => x0.wheelDeltaY,
      _1046: x0 => x0.deltaMode,
      _1053: x0 => x0.changedTouches,
      _1056: x0 => x0.clientX,
      _1057: x0 => x0.clientY,
      _1060: x0 => x0.data,
      _1063: (x0,x1) => { x0.disabled = x1 },
      _1065: (x0,x1) => { x0.type = x1 },
      _1066: (x0,x1) => { x0.max = x1 },
      _1067: (x0,x1) => { x0.min = x1 },
      _1068: x0 => x0.value,
      _1069: (x0,x1) => { x0.value = x1 },
      _1070: x0 => x0.disabled,
      _1071: (x0,x1) => { x0.disabled = x1 },
      _1073: (x0,x1) => { x0.placeholder = x1 },
      _1075: (x0,x1) => { x0.name = x1 },
      _1076: (x0,x1) => { x0.autocomplete = x1 },
      _1078: x0 => x0.selectionDirection,
      _1079: x0 => x0.selectionStart,
      _1081: x0 => x0.selectionEnd,
      _1084: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      _1085: (x0,x1) => x0.add(x1),
      _1087: (x0,x1) => { x0.noValidate = x1 },
      _1088: (x0,x1) => { x0.method = x1 },
      _1089: (x0,x1) => { x0.action = x1 },
      _1114: x0 => x0.orientation,
      _1115: x0 => x0.width,
      _1116: x0 => x0.height,
      _1117: (x0,x1) => x0.lock(x1),
      _1136: x0 => new ResizeObserver(x0),
      _1139: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1139(f,arguments.length,x0,x1) }),
      _1147: x0 => x0.length,
      _1148: x0 => x0.iterator,
      _1149: x0 => x0.Segmenter,
      _1150: x0 => x0.v8BreakIterator,
      _1151: (x0,x1) => new Intl.Segmenter(x0,x1),
      _1154: x0 => x0.language,
      _1155: x0 => x0.script,
      _1156: x0 => x0.region,
      _1174: x0 => x0.done,
      _1175: x0 => x0.value,
      _1176: x0 => x0.index,
      _1180: (x0,x1) => new Intl.v8BreakIterator(x0,x1),
      _1181: (x0,x1) => x0.adoptText(x1),
      _1182: x0 => x0.first(),
      _1183: x0 => x0.next(),
      _1184: x0 => x0.current(),
      _1186: () => globalThis.window.FinalizationRegistry,
      _1197: x0 => x0.hostElement,
      _1198: x0 => x0.viewConstraints,
      _1201: x0 => x0.maxHeight,
      _1202: x0 => x0.maxWidth,
      _1203: x0 => x0.minHeight,
      _1204: x0 => x0.minWidth,
      _1205: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1205(f,arguments.length,x0) }),
      _1206: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1206(f,arguments.length,x0) }),
      _1207: (x0,x1) => ({addView: x0,removeView: x1}),
      _1210: x0 => x0.loader,
      _1211: () => globalThis._flutter,
      _1212: (x0,x1) => x0.didCreateEngineInitializer(x1),
      _1213: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1213(f,arguments.length,x0) }),
      _1214: (module,f) => finalizeWrapper(f, function() { return module.exports._1214(f,arguments.length) }),
      _1215: (x0,x1) => ({initializeEngine: x0,autoStart: x1}),
      _1218: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1218(f,arguments.length,x0) }),
      _1219: x0 => ({runApp: x0}),
      _1221: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1221(f,arguments.length,x0,x1) }),
      _1222: x0 => new Promise(x0),
      _1223: x0 => x0.length,
      _1224: () => globalThis.window.ImageDecoder,
      _1225: x0 => x0.tracks,
      _1227: x0 => x0.completed,
      _1229: x0 => x0.image,
      _1235: x0 => x0.displayWidth,
      _1236: x0 => x0.displayHeight,
      _1237: x0 => x0.duration,
      _1240: x0 => x0.ready,
      _1241: x0 => x0.selectedTrack,
      _1242: x0 => x0.repetitionCount,
      _1243: x0 => x0.frameCount,
      _1297: (x0,x1) => x0.createElement(x1),
      _1303: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _1305: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      _1306: (x0,x1,x2,x3) => x0.removeEventListener(x1,x2,x3),
      _1307: (x0,x1) => x0.createElement(x1),
      _1309: (x0,x1) => x0.removeAttribute(x1),
      _1314: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1318: x0 => x0.call(),
      _1319: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1319(f,arguments.length,x0) }),
      _1320: (x0,x1,x2) => x0.addEventListener(x1,x2),
      _1321: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1321(f,arguments.length,x0) }),
      _1322: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1322(f,arguments.length,x0) }),
      _1323: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1323(f,arguments.length,x0) }),
      _1324: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1324(f,arguments.length,x0) }),
      _1325: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1325(f,arguments.length,x0) }),
      _1326: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1326(f,arguments.length,x0) }),
      _1327: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1327(f,arguments.length,x0) }),
      _1328: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1328(f,arguments.length,x0) }),
      _1329: (x0,x1) => x0.end(x1),
      _1330: x0 => x0.pause(),
      _1331: x0 => x0.play(),
      _1332: x0 => x0.load(),
      _1333: (x0,x1) => x0.setSinkId(x1),
      _1334: x0 => x0.decode(),
      _1335: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      _1336: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      _1337: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1337(f,arguments.length,x0) }),
      _1338: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1338(f,arguments.length,x0) }),
      _1339: x0 => x0.send(),
      _1340: () => new XMLHttpRequest(),
      _1341: (x0,x1) => x0.getItem(x1),
      _1342: (x0,x1) => x0.removeItem(x1),
      _1343: (x0,x1,x2) => x0.setItem(x1,x2),
      _1347: Date.now,
      _1349: s => new Date(s * 1000).getTimezoneOffset() * 60,
      _1350: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      _1351: () => typeof dartUseDateNowForTicks !== "undefined",
      _1352: () => 1000 * performance.now(),
      _1353: () => Date.now(),
      _1354: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      _1355: () => {
        return typeof process != "undefined" &&
               Object.prototype.toString.call(process) == "[object process]" &&
               process.platform == "win32"
      },
      _1356: () => new WeakMap(),
      _1357: (map, o) => map.get(o),
      _1358: (map, o, v) => map.set(o, v),
      _1359: x0 => new WeakRef(x0),
      _1360: x0 => x0.deref(),
      _1361: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1361(f,arguments.length,x0) }),
      _1362: x0 => new FinalizationRegistry(x0),
      _1363: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      _1365: (x0,x1) => x0.unregister(x1),
      _1367: () => globalThis.WeakRef,
      _1368: () => globalThis.FinalizationRegistry,
      _1370: s => JSON.stringify(s),
      _1371: s => printToConsole(s),
      _1372: o => {
        if (o === null || o === undefined) return 0;
        if (typeof(o) === 'string') return 1;
        return 2;
      },
      _1373: (o, p, r) => o.replaceAll(p, () => r),
      _1374: (o, p, r) => o.replace(p, () => r),
      _1375: Function.prototype.call.bind(String.prototype.toLowerCase),
      _1376: s => s.toUpperCase(),
      _1377: s => s.trim(),
      _1378: s => s.trimLeft(),
      _1379: s => s.trimRight(),
      _1380: (string, times) => string.repeat(times),
      _1381: Function.prototype.call.bind(String.prototype.indexOf),
      _1382: (s, p, i) => s.lastIndexOf(p, i),
      _1383: (string, token) => string.split(token),
      _1384: Object.is,
      _1388: (o, t) => typeof o === t,
      _1389: (o, c) => o instanceof c,
      _1390: o => Object.keys(o),
      _1404: (o, a) => o == a,
      _1444: x0 => new Array(x0),
      _1446: x0 => x0.length,
      _1448: (x0,x1) => x0[x1],
      _1449: (x0,x1,x2) => { x0[x1] = x2 },
      _1452: (x0,x1,x2) => new DataView(x0,x1,x2),
      _1454: x0 => new Int8Array(x0),
      _1455: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      _1457: x0 => new Uint8ClampedArray(x0),
      _1459: x0 => new Int16Array(x0),
      _1461: x0 => new Uint16Array(x0),
      _1463: x0 => new Int32Array(x0),
      _1465: x0 => new Uint32Array(x0),
      _1467: x0 => new Float32Array(x0),
      _1469: x0 => new Float64Array(x0),
      _1493: x0 => x0.random(),
      _1494: (x0,x1) => x0.getRandomValues(x1),
      _1495: () => globalThis.crypto,
      _1496: () => globalThis.Math,
      _1509: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      _1510: (handle) => clearTimeout(handle),
      _1511: (ms, c) =>
      setInterval(() => dartInstance.exports.$invokeCallback(c), ms),
      _1512: (handle) => clearInterval(handle),
      _1513: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      _1514: () => Date.now(),
      _1515: () => new Error().stack,
      _1516: (exn) => {
        let stackString = exn.toString();
        let frames = stackString.split('\n');
        let drop = 4;
        if (frames[0].startsWith('Error')) {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      _1517: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      _1518: (x0,x1) => x0.exec(x1),
      _1519: (x0,x1) => x0.test(x1),
      _1520: x0 => x0.pop(),
      _1522: o => o === undefined,
      _1524: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      _1526: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      _1527: o => o instanceof RegExp,
      _1528: (l, r) => l === r,
      _1529: o => o,
      _1530: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'number') return 1;
        return 2;
      },
      _1531: o => o,
      _1532: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'boolean') return 1;
        return 2;
      },
      _1533: o => o,
      _1534: b => !!b,
      _1535: o => o.length,
      _1537: (o, i) => o[i],
      _1538: f => f.dartFunction,
      _1539: () => ({}),
      _1540: () => [],
      _1542: () => globalThis,
      _1543: (constructor, args) => {
        const factoryFunction = constructor.bind.apply(
            constructor, [null, ...args]);
        return new factoryFunction();
      },
      _1544: (o, p) => p in o,
      _1545: (o, p) => o[p],
      _1546: (o, p, v) => o[p] = v,
      _1547: (o, m, a) => o[m].apply(o, a),
      _1549: o => String(o),
      _1550: (p, s, f) => p.then(s, (e) => f(e, e === undefined)),
      _1551: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1551(f,arguments.length,x0) }),
      _1552: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1552(f,arguments.length,x0,x1) }),
      _1553: o => {
        if (o === undefined) return 1;
        var type = typeof o;
        if (type === 'boolean') return 2;
        if (type === 'number') return 3;
        if (type === 'string') return 4;
        if (o instanceof Array) return 5;
        if (ArrayBuffer.isView(o)) {
          if (o instanceof Int8Array) return 6;
          if (o instanceof Uint8Array) return 7;
          if (o instanceof Uint8ClampedArray) return 8;
          if (o instanceof Int16Array) return 9;
          if (o instanceof Uint16Array) return 10;
          if (o instanceof Int32Array) return 11;
          if (o instanceof Uint32Array) return 12;
          if (o instanceof Float32Array) return 13;
          if (o instanceof Float64Array) return 14;
          if (o instanceof DataView) return 15;
        }
        if (o instanceof ArrayBuffer) return 16;
        // Feature check for `SharedArrayBuffer` before doing a type-check.
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
            return 17;
        }
        if (o instanceof Promise) return 18;
        return 19;
      },
      _1554: o => [o],
      _1555: (o0, o1) => [o0, o1],
      _1556: (o0, o1, o2) => [o0, o1, o2],
      _1557: (o0, o1, o2, o3) => [o0, o1, o2, o3],
      _1558: (exn) => {
        if (exn instanceof Error) {
          return exn.stack;
        } else {
          return null;
        }
      },
      _1559: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1560: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1561: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI16ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1562: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI16ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1563: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1564: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1565: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1566: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1567: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF64ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      _1568: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF64ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      _1569: x0 => new ArrayBuffer(x0),
      _1570: s => {
        if (/[[\]{}()*+?.\\^$|]/.test(s)) {
            s = s.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
        }
        return s;
      },
      _1572: x0 => x0.index,
      _1573: x0 => x0.groups,
      _1574: x0 => x0.flags,
      _1575: x0 => x0.multiline,
      _1576: x0 => x0.ignoreCase,
      _1577: x0 => x0.unicode,
      _1578: x0 => x0.dotAll,
      _1579: (x0,x1) => { x0.lastIndex = x1 },
      _1580: (o, p) => p in o,
      _1581: (o, p) => o[p],
      _1582: (o, p, v) => o[p] = v,
      _1584: x0 => x0.arrayBuffer(),
      _1585: (x0,x1) => x0.sqlite3changeset_finalize(x1),
      _1586: (x0,x1) => x0.sqlite3session_delete(x1),
      _1587: (x0,x1) => x0.sqlite3_close_v2(x1),
      _1588: (x0,x1) => x0.sqlite3_finalize(x1),
      _1589: (x0,x1) => x0.dart_sqlite3_malloc(x1),
      _1590: (x0,x1) => x0.dart_sqlite3_free(x1),
      _1592: x0 => x0.sqlite3_initialize(),
      _1598: (x0,x1,x2,x3,x4) => x0.sqlite3_open_v2(x1,x2,x3,x4),
      _1599: (x0,x1) => x0.sqlite3_extended_errcode(x1),
      _1600: (x0,x1) => x0.sqlite3_errmsg(x1),
      _1601: (x0,x1) => x0.sqlite3_errstr(x1),
      _1602: (x0,x1) => x0.sqlite3_error_offset(x1),
      _1603: (x0,x1,x2) => x0.sqlite3_extended_result_codes(x1,x2),
      _1604: (x0,x1,x2) => x0.dart_sqlite3_updates(x1,x2),
      _1605: (x0,x1,x2) => x0.dart_sqlite3_commits(x1,x2),
      _1606: (x0,x1,x2) => x0.dart_sqlite3_rollbacks(x1,x2),
      _1607: (x0,x1,x2,x3,x4,x5) => x0.sqlite3_exec(x1,x2,x3,x4,x5),
      _1608: (x0,x1,x2,x3,x4,x5,x6) => x0.sqlite3_prepare_v3(x1,x2,x3,x4,x5,x6),
      _1609: (x0,x1) => x0.sqlite3_bind_parameter_count(x1),
      _1610: (x0,x1,x2) => x0.sqlite3_bind_null(x1,x2),
      _1611: (x0,x1,x2,x3) => x0.sqlite3_bind_int64(x1,x2,x3),
      _1612: (x0,x1,x2,x3) => x0.sqlite3_bind_double(x1,x2,x3),
      _1613: (x0,x1,x2,x3,x4) => x0.dart_sqlite3_bind_text(x1,x2,x3,x4),
      _1614: (x0,x1,x2,x3,x4) => x0.dart_sqlite3_bind_blob(x1,x2,x3,x4),
      _1616: (x0,x1) => x0.sqlite3_column_count(x1),
      _1617: (x0,x1,x2) => x0.sqlite3_column_name(x1,x2),
      _1618: (x0,x1,x2) => x0.sqlite3_column_type(x1,x2),
      _1619: (x0,x1,x2) => x0.sqlite3_column_int64(x1,x2),
      _1620: (x0,x1,x2) => x0.sqlite3_column_double(x1,x2),
      _1621: (x0,x1,x2) => x0.sqlite3_column_bytes(x1,x2),
      _1622: (x0,x1,x2) => x0.sqlite3_column_text(x1,x2),
      _1623: (x0,x1,x2) => x0.sqlite3_column_blob(x1,x2),
      _1624: (x0,x1) => x0.sqlite3_value_type(x1),
      _1626: (x0,x1) => x0.sqlite3_value_int64(x1),
      _1627: (x0,x1) => x0.sqlite3_value_double(x1),
      _1628: (x0,x1) => x0.sqlite3_value_bytes(x1),
      _1629: (x0,x1) => x0.sqlite3_value_text(x1),
      _1630: (x0,x1) => x0.sqlite3_value_blob(x1),
      _1631: (x0,x1) => x0.sqlite3_result_null(x1),
      _1632: (x0,x1,x2) => x0.sqlite3_result_int64(x1,x2),
      _1633: (x0,x1,x2) => x0.sqlite3_result_double(x1,x2),
      _1634: (x0,x1,x2,x3,x4) => x0.sqlite3_result_text(x1,x2,x3,x4),
      _1635: (x0,x1,x2,x3,x4) => x0.sqlite3_result_blob64(x1,x2,x3,x4),
      _1636: (x0,x1,x2,x3) => x0.sqlite3_result_error(x1,x2,x3),
      _1637: (x0,x1,x2) => x0.sqlite3_result_subtype(x1,x2),
      _1640: (x0,x1) => x0.sqlite3_step(x1),
      _1641: (x0,x1) => x0.sqlite3_reset(x1),
      _1642: (x0,x1) => x0.sqlite3_changes(x1),
      _1643: (x0,x1) => x0.sqlite3_stmt_isexplain(x1),
      _1645: (x0,x1) => x0.sqlite3_last_insert_rowid(x1),
      _1662: (x0,x1,x2,x3) => x0.dart_sqlite3_register_vfs(x1,x2,x3),
      _1665: (x0,x1,x2,x3,x4,x5,x6) => x0.dart_sqlite3_create_function_v2(x1,x2,x3,x4,x5,x6),
      _1667: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1667(f,arguments.length,x0) }),
      _1668: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1668(f,arguments.length,x0,x1) }),
      _1669: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3,x4) { return module.exports._1669(f,arguments.length,x0,x1,x2,x3,x4) }),
      _1670: (module,f) => finalizeWrapper(f, function(x0,x1,x2) { return module.exports._1670(f,arguments.length,x0,x1,x2) }),
      _1671: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return module.exports._1671(f,arguments.length,x0,x1,x2,x3) }),
      _1672: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return module.exports._1672(f,arguments.length,x0,x1,x2,x3) }),
      _1673: (module,f) => finalizeWrapper(f, function(x0,x1,x2) { return module.exports._1673(f,arguments.length,x0,x1,x2) }),
      _1674: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1674(f,arguments.length,x0,x1) }),
      _1675: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1675(f,arguments.length,x0,x1) }),
      _1676: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1676(f,arguments.length,x0) }),
      _1677: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return module.exports._1677(f,arguments.length,x0,x1,x2,x3) }),
      _1678: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return module.exports._1678(f,arguments.length,x0,x1,x2,x3) }),
      _1679: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1679(f,arguments.length,x0,x1) }),
      _1680: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1680(f,arguments.length,x0,x1) }),
      _1681: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1681(f,arguments.length,x0,x1) }),
      _1682: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1682(f,arguments.length,x0,x1) }),
      _1683: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1683(f,arguments.length,x0,x1) }),
      _1684: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1684(f,arguments.length,x0,x1) }),
      _1685: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1685(f,arguments.length,x0) }),
      _1686: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1686(f,arguments.length,x0) }),
      _1687: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1687(f,arguments.length,x0) }),
      _1688: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3,x4) { return module.exports._1688(f,arguments.length,x0,x1,x2,x3,x4) }),
      _1689: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return module.exports._1689(f,arguments.length,x0,x1,x2,x3) }),
      _1690: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return module.exports._1690(f,arguments.length,x0,x1,x2,x3) }),
      _1691: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3) { return module.exports._1691(f,arguments.length,x0,x1,x2,x3) }),
      _1692: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1692(f,arguments.length,x0,x1) }),
      _1693: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1693(f,arguments.length,x0,x1) }),
      _1694: (module,f) => finalizeWrapper(f, function(x0,x1,x2,x3,x4) { return module.exports._1694(f,arguments.length,x0,x1,x2,x3,x4) }),
      _1695: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1695(f,arguments.length,x0,x1) }),
      _1696: (module,f) => finalizeWrapper(f, function(x0,x1) { return module.exports._1696(f,arguments.length,x0,x1) }),
      _1697: (module,f) => finalizeWrapper(f, function(x0,x1,x2) { return module.exports._1697(f,arguments.length,x0,x1,x2) }),
      _1698: (x0,x1,x2) => x0.instantiateStreaming(x1,x2),
      _1702: (x0,x1) => new URL(x0,x1),
      _1703: (x0,x1) => globalThis.fetch(x0,x1),
      _1704: (x0,x1,x2) => x0.postMessage(x1,x2),
      _1705: (x0,x1,x2) => x0.postMessage(x1,x2),
      _1707: (x0,x1) => ({i: x0,p: x1}),
      _1708: (x0,x1) => ({c: x0,r: x1}),
      _1709: x0 => x0.i,
      _1710: x0 => x0.p,
      _1711: x0 => x0.c,
      _1712: x0 => x0.r,
      _1713: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1713(f,arguments.length,x0) }),
      _1714: (x0,x1) => x0.postMessage(x1),
      _1715: x0 => x0.close(),
      _1717: x0 => new Worker(x0),
      _1719: x0 => x0.getDirectory(),
      _1720: x0 => ({create: x0}),
      _1721: (x0,x1,x2) => x0.getFileHandle(x1,x2),
      _1722: x0 => x0.createSyncAccessHandle(),
      _1723: x0 => x0.close(),
      _1726: x0 => x0.close(),
      _1729: (x0,x1,x2) => x0.open(x1,x2),
      _1733: (x0,x1,x2) => x0.getDirectoryHandle(x1,x2),
      _1738: x0 => ({create: x0}),
      _1743: (x0,x1) => new SharedWorker(x0,x1),
      _1744: x0 => x0.start(),
      _1745: x0 => x0.terminate(),
      _1746: () => new MessageChannel(),
      _1750: (x0,x1) => globalThis.IDBKeyRange.bound(x0,x1),
      _1751: x0 => ({autoIncrement: x0}),
      _1752: (x0,x1,x2) => x0.createObjectStore(x1,x2),
      _1753: x0 => ({unique: x0}),
      _1754: (x0,x1,x2,x3) => x0.createIndex(x1,x2,x3),
      _1755: (x0,x1) => x0.createObjectStore(x1),
      _1756: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1756(f,arguments.length,x0) }),
      _1757: (x0,x1,x2) => x0.transaction(x1,x2),
      _1758: (x0,x1) => x0.objectStore(x1),
      _1760: (x0,x1) => x0.index(x1),
      _1761: x0 => x0.openKeyCursor(),
      _1762: (x0,x1) => x0.getKey(x1),
      _1763: (x0,x1) => ({name: x0,length: x1}),
      _1764: (x0,x1) => x0.put(x1),
      _1765: (x0,x1) => x0.get(x1),
      _1766: (x0,x1) => x0.openCursor(x1),
      _1767: x0 => globalThis.IDBKeyRange.only(x0),
      _1768: (x0,x1,x2) => x0.put(x1,x2),
      _1769: (x0,x1) => x0.update(x1),
      _1770: (x0,x1) => x0.delete(x1),
      _1771: x0 => x0.name,
      _1772: x0 => x0.length,
      _1774: (x0,x1) => x0.truncate(x1),
      _1776: x0 => x0.getSize(),
      _1777: x0 => ({at: x0}),
      _1778: x0 => x0.flush(),
      _1779: x0 => new BroadcastChannel(x0),
      _1780: x0 => globalThis.Array.isArray(x0),
      _1781: (x0,x1) => x0.postMessage(x1),
      _1782: x0 => x0.close(),
      _1783: (x0,x1) => ({kind: x0,table: x1}),
      _1784: x0 => x0.kind,
      _1785: x0 => x0.table,
      _1787: x0 => globalThis.BigInt(x0),
      _1788: x0 => globalThis.Number(x0),
      _1795: () => globalThis.navigator,
      _1796: (x0,x1) => x0.read(x1),
      _1797: (x0,x1,x2) => x0.read(x1,x2),
      _1798: (x0,x1) => x0.write(x1),
      _1799: (x0,x1,x2) => x0.write(x1,x2),
      _1803: x0 => x0.synchronizationBuffer,
      _1804: x0 => x0.communicationBuffer,
      _1805: (x0,x1,x2,x3) => ({clientVersion: x0,root: x1,synchronizationBuffer: x2,communicationBuffer: x3}),
      _1806: x0 => new SharedArrayBuffer(x0),
      _1807: x0 => x0.continue(),
      _1808: () => globalThis.indexedDB,
      _1809: (x0,x1,x2) => globalThis.Atomics.wait(x0,x1,x2),
      _1811: (x0,x1,x2) => globalThis.Atomics.notify(x0,x1,x2),
      _1812: (x0,x1,x2) => globalThis.Atomics.store(x0,x1,x2),
      _1813: (x0,x1) => globalThis.Atomics.load(x0,x1),
      _1814: () => globalThis.Int32Array,
      _1816: () => globalThis.Uint8Array,
      _1818: () => globalThis.DataView,
      _1820: x0 => x0.byteLength,
      _1829: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1829(f,arguments.length,x0) }),
      _1830: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1830(f,arguments.length,x0) }),
      _1835: (x0,x1) => new WebSocket(x0,x1),
      _1836: (x0,x1) => x0.send(x1),
      _1837: (x0,x1,x2) => x0.close(x1,x2),
      _1838: (x0,x1) => x0.close(x1),
      _1839: x0 => x0.close(),
      _1843: () => new AbortController(),
      _1844: x0 => x0.abort(),
      _1845: (x0,x1,x2,x3,x4,x5) => ({method: x0,headers: x1,body: x2,credentials: x3,redirect: x4,signal: x5}),
      _1846: (x0,x1) => globalThis.fetch(x0,x1),
      _1847: (x0,x1) => x0.get(x1),
      _1848: (module,f) => finalizeWrapper(f, function(x0,x1,x2) { return module.exports._1848(f,arguments.length,x0,x1,x2) }),
      _1849: (x0,x1) => x0.forEach(x1),
      _1850: x0 => x0.getReader(),
      _1851: x0 => x0.cancel(),
      _1852: x0 => x0.read(),
      _1853: (module,f) => finalizeWrapper(f, function(x0) { return module.exports._1853(f,arguments.length,x0) }),
      _1854: (x0,x1) => x0.key(x1),
      _1855: o => o instanceof Array,
      _1859: a => a.pop(),
      _1860: (a, i) => a.splice(i, 1),
      _1861: (a, s) => a.join(s),
      _1862: (a, s, e) => a.slice(s, e),
      _1864: (a, b) => a == b ? 0 : (a > b ? 1 : -1),
      _1865: a => a.length,
      _1867: (a, i) => a[i],
      _1868: (a, i, v) => a[i] = v,
      _1870: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof ArrayBuffer) return 1;
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
          return 2;
        }
        return 3;
      },
      _1871: (o, offsetInBytes, lengthInBytes) => {
        var dst = new ArrayBuffer(lengthInBytes);
        new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
        return new DataView(dst);
      },
      _1872: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof DataView) return 1;
        return 2;
      },
      _1873: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint8Array) return 1;
        return 2;
      },
      _1874: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      _1875: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int8Array) return 1;
        return 2;
      },
      _1876: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      _1877: o => o instanceof Uint8ClampedArray,
      _1878: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      _1879: o => o instanceof Uint16Array,
      _1880: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      _1881: o => o instanceof Int16Array,
      _1882: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      _1883: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      _1884: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      _1885: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      _1886: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      _1888: (o, start, length) => new BigInt64Array(o.buffer, o.byteOffset + start, length),
      _1889: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      _1890: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      _1891: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float64Array) return 1;
        return 2;
      },
      _1892: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      _1893: (a, i) => a.push(i),
      _1894: (t, s) => t.set(s),
      _1895: l => new DataView(new ArrayBuffer(l)),
      _1896: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      _1897: o => o.byteLength,
      _1898: o => o.buffer,
      _1899: o => o.byteOffset,
      _1900: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      _1901: (b, o) => new DataView(b, o),
      _1902: (b, o, l) => new DataView(b, o, l),
      _1903: Function.prototype.call.bind(DataView.prototype.getUint8),
      _1904: Function.prototype.call.bind(DataView.prototype.setUint8),
      _1905: Function.prototype.call.bind(DataView.prototype.getInt8),
      _1906: Function.prototype.call.bind(DataView.prototype.setInt8),
      _1907: Function.prototype.call.bind(DataView.prototype.getUint16),
      _1908: Function.prototype.call.bind(DataView.prototype.setUint16),
      _1909: Function.prototype.call.bind(DataView.prototype.getInt16),
      _1910: Function.prototype.call.bind(DataView.prototype.setInt16),
      _1911: Function.prototype.call.bind(DataView.prototype.getUint32),
      _1912: Function.prototype.call.bind(DataView.prototype.setUint32),
      _1913: Function.prototype.call.bind(DataView.prototype.getInt32),
      _1914: Function.prototype.call.bind(DataView.prototype.setInt32),
      _1917: Function.prototype.call.bind(DataView.prototype.getBigInt64),
      _1918: Function.prototype.call.bind(DataView.prototype.setBigInt64),
      _1919: Function.prototype.call.bind(DataView.prototype.getFloat32),
      _1920: Function.prototype.call.bind(DataView.prototype.setFloat32),
      _1921: Function.prototype.call.bind(DataView.prototype.getFloat64),
      _1922: Function.prototype.call.bind(DataView.prototype.setFloat64),
      _1923: Function.prototype.call.bind(Number.prototype.toString),
      _1924: Function.prototype.call.bind(BigInt.prototype.toString),
      _1925: Function.prototype.call.bind(Number.prototype.toString),
      _1926: (d, digits) => d.toFixed(digits),
      _1950: () => globalThis.document,
      _1952: () => globalThis.console,
      _1957: (x0,x1) => { x0.height = x1 },
      _1959: (x0,x1) => { x0.width = x1 },
      _1961: (x0,x1) => { x0.pointerEvents = x1 },
      _1970: x0 => x0.style,
      _1973: x0 => x0.src,
      _1974: (x0,x1) => { x0.src = x1 },
      _1975: x0 => x0.naturalWidth,
      _1976: x0 => x0.naturalHeight,
      _1991: (x0,x1) => x0.error(x1),
      _1996: x0 => x0.status,
      _1997: (x0,x1) => { x0.responseType = x1 },
      _1999: x0 => x0.response,
      _2728: x0 => x0.error,
      _2729: x0 => x0.src,
      _2730: (x0,x1) => { x0.src = x1 },
      _2738: (x0,x1) => { x0.preload = x1 },
      _2739: x0 => x0.buffered,
      _2742: x0 => x0.currentTime,
      _2743: (x0,x1) => { x0.currentTime = x1 },
      _2744: x0 => x0.duration,
      _2749: (x0,x1) => { x0.playbackRate = x1 },
      _2762: (x0,x1) => { x0.volume = x1 },
      _2779: x0 => x0.code,
      _2780: x0 => x0.message,
      _2854: x0 => x0.length,
      _3827: () => globalThis.window,
      _3870: x0 => x0.location,
      _3889: x0 => x0.navigator,
      _4153: x0 => x0.localStorage,
      _4161: x0 => x0.href,
      _4278: x0 => x0.userAgent,
      _4291: x0 => x0.storage,
      _4329: x0 => x0.data,
      _4359: x0 => x0.port1,
      _4360: x0 => x0.port2,
      _4362: (x0,x1) => { x0.onmessage = x1 },
      _4372: (x0,x1) => { x0.onmessage = x1 },
      _4440: x0 => x0.port,
      _4475: x0 => x0.length,
      _4692: x0 => x0.readyState,
      _4705: (x0,x1) => { x0.binaryType = x1 },
      _4708: x0 => x0.code,
      _4709: x0 => x0.reason,
      _6417: x0 => x0.signal,
      _6491: () => globalThis.document,
      _8253: x0 => x0.value,
      _8255: x0 => x0.done,
      _8935: x0 => x0.url,
      _8937: x0 => x0.status,
      _8939: x0 => x0.statusText,
      _8940: x0 => x0.headers,
      _8941: x0 => x0.body,
      _8953: x0 => x0.instance,
      _8955: () => globalThis.WebAssembly,
      _8977: x0 => x0.exports,
      _8985: x0 => x0.buffer,
      _10396: x0 => x0.result,
      _10397: x0 => x0.error,
      _10408: (x0,x1) => { x0.onupgradeneeded = x1 },
      _10410: x0 => x0.oldVersion,
      _10489: x0 => x0.key,
      _10490: x0 => x0.primaryKey,
      _10492: x0 => x0.value,
      _12552: x0 => x0.name,
      _12651: x0 => x0.href,
      _12666: x0 => x0.pathname,

    };

    const baseImports = {
      dart2wasm: dart2wasm,
      Math: Math,
      Date: Date,
      Object: Object,
      Array: Array,
      Reflect: Reflect,
      WebAssembly: {
        JSTag: WebAssembly.JSTag,
      },
      "": new Proxy({}, { get(_, prop) { return prop; } }),

    };

    const jsStringPolyfill = {
      "charCodeAt": (s, i) => s.charCodeAt(i),
      "compare": (s1, s2) => {
        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
      },
      "concat": (s1, s2) => s1 + s2,
      "equals": (s1, s2) => s1 === s2,
      "fromCharCode": (i) => String.fromCharCode(i),
      "length": (s) => s.length,
      "substring": (s, a, b) => s.substring(a, b),
      "fromCharCodeArray": (a, start, end) => {
        if (end <= start) return '';

        const read = dartInstance.exports.$wasmI16ArrayGet;
        let result = '';
        let index = start;
        const chunkLength = Math.min(end - index, 500);
        let array = new Array(chunkLength);
        while (index < end) {
          const newChunkLength = Math.min(end - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(a, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
      "intoCharCodeArray": (s, a, start) => {
        if (s === '') return 0;

        const write = dartInstance.exports.$wasmI16ArraySet;
        for (var i = 0; i < s.length; ++i) {
          write(a, start++, s.charCodeAt(i));
        }
        return s.length;
      },
      "test": (s) => typeof s == "string",
    };


    

    dartInstance = await WebAssembly.instantiate(this.module, {
      ...baseImports,
      ...additionalImports,
      
      "wasm:js-string": jsStringPolyfill,
    });
    dartInstance.exports.$setThisModule(dartInstance);

    return new InstantiatedApp(this, dartInstance);
  }
}

class InstantiatedApp {
  constructor(compiledApp, instantiatedModule) {
    this.compiledApp = compiledApp;
    this.instantiatedModule = instantiatedModule;
  }

  // Call the main function with the given arguments.
  invokeMain(...args) {
    this.instantiatedModule.exports.$invokeMain(args);
  }
}
