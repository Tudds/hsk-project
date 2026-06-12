((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,E,B={
bda(d,e,f){return new B.Xa(d,e,f,null)},
aR7:function aR7(d,e){this.a=d
this.b=e},
Xa:function Xa(d,e,f,g){var _=this
_.c=d
_.d=e
_.r=f
_.a=g},
aOQ:function aOQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5){var _=this
_.fr=d
_.fx=e
_.fy=f
_.id=_.go=$
_.a=g
_.b=h
_.c=i
_.d=j
_.e=k
_.f=l
_.r=m
_.w=n
_.x=o
_.y=p
_.z=q
_.Q=r
_.as=s
_.at=t
_.ax=u
_.ay=v
_.ch=w
_.CW=a0
_.cx=a1
_.cy=a2
_.db=a3
_.dx=a4
_.dy=a5},
aOR:function aOR(d){this.a=d},
a0N:function a0N(d,e,f){this.d=d
this.z=e
this.a=f},
aVp:function aVp(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5){var _=this
_.fr=d
_.fx=e
_.fy=f
_.id=_.go=$
_.a=g
_.b=h
_.c=i
_.d=j
_.e=k
_.f=l
_.r=m
_.w=n
_.x=o
_.y=p
_.z=q
_.Q=r
_.as=s
_.at=t
_.ax=u
_.ay=v
_.ch=w
_.CW=a0
_.cx=a1
_.cy=a2
_.db=a3
_.dx=a4
_.dy=a5},
aVq:function aVq(d){this.a=d},
BU:function BU(d){this.b=d
this.c=null},
api:function api(d){this.a=d},
beu(d){var w,v,u,t,s,r,q,p,o="cultureTip",n=x.Y,m=n.a(d.i(0,"speakers"))
if(m==null)m=C.p
w=x.P
m=J.cb(m,w)
v=A.l(m).h("L<R.E,BV>")
m=A.M(new A.L(m,B.bFO(),v),v.h("a9.E"))
m.$flags=1
m=n.a(d.i(0,"lines"))
u=J.cb(m==null?C.p:m,w)
A.ai(d.i(0,"id"))
m=A.jy(d.i(0,"level"))
m=m==null?null:C.d.ei(m)
if(m==null)m=0
v=A.al(d.i(0,"title"))
if(v==null)v=""
A.al(d.i(0,"titleZh"))
A.al(d.i(0,"titlePinyin"))
t=A.al(d.i(0,"description"))
if(t==null)t=""
A.al(d.i(0,"category"))
A.al(d.i(0,"icon"))
s=A.b([],x.X)
for(r=0;r<u.gE(u);++r){q=u.i(0,r)
A.al(q.i(0,"speaker"))
p=A.al(q.i(0,"zh"))
if(p==null)p=""
A.al(q.i(0,"pinyin"))
q=A.al(q.i(0,"vi"))
s.push(new B.ZG(p,q==null?"":q))}q=A.al(d.i(0,o))
q=q==null?null:C.c.di(q).length===0
if(q===!1)A.ai(d.i(0,o))
q=n.a(d.i(0,"relatedGrammar"))
if(q==null)q=C.p
A.dW(q,!0,x.N)
n=n.a(d.i(0,"vocabulary"))
n=J.cb(n==null?C.p:n,w)
w=A.l(n).h("L<R.E,BW>")
n=A.M(new A.L(n,B.bFP(),w),w.h("a9.E"))
n.$flags=1
return new B.wV(m,v,t,s,n)},
bsI(d){var w,v,u=A.al(d.i(0,"zh"))
if(u==null)u=""
w=A.al(d.i(0,"pinyin"))
if(w==null)w=""
v=A.al(d.i(0,"vi"))
if(v==null)v=""
A.al(d.i(0,"pos"))
return new B.BW(u,w,v)},
bsH(d){A.al(d.i(0,"code"))
A.al(d.i(0,"nameVi"))
A.al(d.i(0,"role"))
B.bHo(A.al(d.i(0,"avatarColor")))
return new B.BV()},
bHo(d){var w,v,u=null
if(d==null)return u
w=C.c.di(d)
if(w.length===0)return u
if(C.c.b2(w,"#"))w=C.c.bC(w,1)
if(w.length===6)w="FF"+w
if(w.length!==8)return u
v=A.uy(w,16)
if(v==null)return u
return A.bA(v)},
wV:function wV(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.f=f
_.y=g
_.as=h},
BW:function BW(d,e,f){this.a=d
this.b=e
this.c=f},
BV:function BV(){},
ZG:function ZG(d,e){this.c=d
this.e=e},
b5L:function b5L(){},
bm_(d){var w,v,u,t=new A.cV("")
for(w=new A.yQ(d);w.t();){v=w.d
u=A.dF(v>=65281&&v<=65374?v-65248:v)
if(C.c.di(u).length===0)continue
if(D.a35.q(0,u))continue
t.a+=u}w=t.a
return w.charCodeAt(0)==0?w:w},
bFQ(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=x.K.h("z.E"),a2=A.iH(new A.il(a3),B.blq(),a1,a0)
a2=A.M(a2,A.l(a2).h("z.E"))
a2.$flags=1
w=a2
a0=A.iH(new A.il(a4),B.blq(),a1,a0)
a0=A.M(a0,A.l(a0).h("z.E"))
a0.$flags=1
v=a0
u=w.length+1
t=J.lB(u,x.I)
for(a0=x.S,s=0;s<u;++s)t[s]=A.bf(v.length+1,0,!1,a0)
for(r=w.length-1,q=v.length-1;r>=0;--r)for(a0=r+1,p=q;p>=0;--p){a1=t[r]
if(w[r]===v[p])a2=t[a0][p+1]+1
else{a2=t[a0][p]
o=a1[p+1]
a2=a2>o?a2:o}a1[p]=a2}a0=x.R
n=A.b([],a0)
r=0
q=0
for(;;){if(!(r<w.length&&q<v.length))break
a1=w[r]
a2=v[q]
if(a1===a2){n.push(new B.mJ(a2,D.tO));++r;++q}else{m=r+1
p=q+1
if(t[m][q]>=t[r][p]){n.push(new B.mJ(a1,D.eT))
r=m}else{n.push(new B.mJ(a2,D.eU))
q=p}}}for(;r<w.length;r=m){m=r+1
n.push(new B.mJ(w[r],D.eT))}for(;q<v.length;q=p){p=q+1
n.push(new B.mJ(v[q],D.eU))}l=A.b([],a0)
for(k=0;a1=n.length,k<a1;++k){j=n[k]
i=k+1
h=i<a1?n[i]:null
if(h!=null){a1=j.b
if(!(a1===D.eT&&h.b===D.eU)){a1=a1===D.eU&&h.b===D.eT
g=a1}else g=!0}else g=!1
if(g){l.push(new B.mJ((j.b===D.eU?j:h).a,D.tP))
k=i}else l.push(j)}f=A.b([],a0)
for(a0=l.length,e=0;e<l.length;l.length===a0||(0,A.x)(l),++e){d=l[e]
if(f.length!==0&&C.b.ga2(f).b===d.b)f[f.length-1]=new B.mJ(C.b.ga2(f).a+d.a,d.b)
else f.push(d)}return f},
Cr:function Cr(d,e){this.a=d
this.b=e},
mJ:function mJ(d,e){this.a=d
this.b=e},
bu5(){return new B.tA()},
bu6(d){var w,v,u,t
switch(d.a){case 0:w=D.tJ
break
case 3:w=D.tK
break
case 2:w=D.n4
break
case 1:w=D.n5
break
default:w=null}v=A.b([w],x.W)
for(u=0;u<5;++u){t=D.Uk[u]
if(t!==w)v.push(t)}return v},
lz:function lz(d,e){this.a=d
this.b=e},
tA:function tA(){this.x=0
this.b=null},
BX:function BX(d){this.b=d},
b5M:function b5M(){},
CQ:function CQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b5Y:function b5Y(){},
b5X:function b5X(){},
ZH:function ZH(d,e){this.a=d
this.b=e},
wW:function wW(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
Ym:function Ym(d,e){this.a=d
this.b=e},
xk:function xk(d,e,f){this.b=d
this.c=e
this.d=f},
ly:function ly(){},
lq:function lq(d){this.a=d},
Fp:function Fp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
KH:function KH(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
ML:function ML(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
O7:function O7(d,e,f){this.a=d
this.b=e
this.c=f},
JG:function JG(d){this.a=d},
zj:function zj(d){this.a=d},
mH:function mH(d,e){this.a=d
this.b=e},
brG(){return new B.tb(null)},
tb:function tb(d){this.a=d},
QR:function QR(){this.d=$
this.c=this.a=null},
aR2:function aR2(){},
aR1:function aR1(d){this.a=d},
aR0:function aR0(d){this.a=d},
aR_:function aR_(d,e){this.a=d
this.b=e},
acb:function acb(d,e,f){this.c=d
this.d=e
this.a=f},
a87:function a87(d,e,f){this.c=d
this.d=e
this.a=f},
ahG:function ahG(d,e){this.c=d
this.a=e},
a7U:function a7U(d,e){this.c=d
this.a=e},
ahQ:function ahQ(d,e){this.c=d
this.a=e},
aaW:function aaW(d,e){this.c=d
this.a=e},
T3:function T3(d,e){this.c=d
this.a=e},
adw:function adw(){this.c=this.a=this.d=null},
aYs:function aYs(d,e){this.a=d
this.b=e},
aYr:function aYr(d,e){this.a=d
this.b=e},
Ub:function Ub(d,e){this.c=d
this.a=e},
afA:function afA(d){var _=this
_.d=$
_.e=d
_.f=!1
_.c=_.a=null},
b06:function b06(d,e){this.a=d
this.b=e},
b05:function b05(d,e){this.a=d
this.b=e},
b07:function b07(d,e){this.a=d
this.b=e},
b04:function b04(d,e){this.a=d
this.b=e},
b08:function b08(d){this.a=d},
b03:function b03(d){this.a=d},
agd:function agd(d,e,f){this.c=d
this.d=e
this.a=f},
b13:function b13(d,e){this.a=d
this.b=e},
FL:function FL(d,e){this.d=d
this.a=e},
a8J:function a8J(){var _=this
_.d=_.w=$
_.c=_.a=null},
aRA:function aRA(d){this.a=d},
aho:function aho(d){this.a=d},
b2f:function b2f(d){this.a=d},
b2g:function b2g(){},
A2:function A2(d,e){this.c=d
this.a=e},
JH:function JH(d,e){this.c=d
this.a=e},
Ro:function Ro(d){var _=this
_.d=$
_.w=_.r=_.f=_.e=!1
_.x=d
_.c=_.a=null},
aSR:function aSR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aSS:function aSS(d){this.a=d},
aSU:function aSU(d){this.a=d},
aSV:function aSV(d){this.a=d},
aST:function aST(d){this.a=d},
a9F:function a9F(d,e){this.c=d
this.a=e},
alY:function alY(){},
byC(d){return A.dF(d)}},D,I,M,G,F,H,K
J=c[1]
A=c[0]
C=c[2]
L=c[10]
E=c[19]
B=a.updateHolder(c[5],B)
D=c[17]
I=c[7]
M=c[20]
G=c[16]
F=c[8]
H=c[18]
K=c[15]
B.aR7.prototype={
J(){return"_ChipVariant."+this.b}}
B.Xa.prototype={
F(d){var w,v,u=null
A.C(d)
w=this.r
v=w!=null
return A.a3_(!1,this.c,C.db,u,u,u,u,C.o,u,new B.aOQ(d,v,D.fB,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,C.hI,u,u,u,u,u,u,u,u),u,u,u,u,u,u,u,u,v,this.d,u,u,u,u,u,w,u,u,u,!1,u,u,u,u,u,u,u,!0,u,u)}}
B.aOQ.prototype={
goa(){var w,v=this,u=v.go
if(u===$){w=A.C(v.fr)
v.go!==$&&A.ay()
u=v.go=w.ax}return u},
gdf(){if(this.fy===D.fB)var w=0
else w=this.fx?1:0
return w},
guq(){return 1},
gh7(){var w,v=this,u=v.id
if(u===$){w=A.C(v.fr)
v.id!==$&&A.ay()
u=v.id=w.ok}w=u.as
if(w==null)w=null
else w=w.bN(v.fx?v.goa().k3:v.goa().k3)
return w},
gbJ(){return new A.bU(new B.aOR(this),x.b)},
gbh(){if(this.fy===D.fB)var w=C.D
else{w=this.goa().x1
if(w==null)w=C.m}return w},
gby(){return C.D},
goE(){return null},
goK(){return null},
geW(){var w,v,u=this
if(u.fy===D.fB)if(u.fx){w=u.goa()
v=w.to
if(v==null){v=w.u
w=v==null?w.k3:v}else w=v
w=new A.b7(w,1,C.z,-1)}else{w=u.goa().k3
w=new A.b7(A.aR(31,w.H()>>>16&255,w.H()>>>8&255,w.H()&255),1,C.z,-1)}else w=C.ly
return w},
gfh(){var w=null
return new A.dN(18,w,w,w,w,this.fx?this.goa().b:this.goa().k3,w,w,w)},
gc8(){return C.de},
goX(){var w=this.gh7(),v=w==null?null:w.r
if(v==null)v=14
w=A.bI(this.fr,C.ba)
w=w==null?null:w.gcU()
w=A.mB(C.dQ,C.dd,A.E((w==null?C.av:w).aT(v)/14-1,0,1))
w.toString
return w}}
B.a0N.prototype={
F(d){var w,v,u=null
A.C(d)
A.C(d)
w=this.z
v=w!=null
return A.a3_(!1,u,C.db,u,u,u,u,C.o,u,new B.aVp(d,!0,!1,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,C.hI,u,u,u,0,u,u,u,u),u,C.u1,u,u,u,u,u,u,v,this.d,u,u,u,u,w,u,u,u,u,!1,u,u,u,u,u,u,u,!0,u,u)}}
B.aVp.prototype={
gt0(){var w,v=this,u=v.go
if(u===$){w=A.C(v.fr)
v.go!==$&&A.ay()
u=v.go=w.ax}return u},
gh7(){var w,v,u,t=this,s=t.id
if(s===$){w=A.C(t.fr)
t.id!==$&&A.ay()
s=t.id=w.ok}w=s.as
if(w==null)w=null
else{v=t.gt0()
u=v.rx
v=u==null?v.k3:u
v=w.bN(v)
w=v}return w},
gbJ(){return new A.bU(new B.aVq(this),x.b)},
gbh(){return C.D},
gby(){return C.D},
goE(){var w=this.gt0(),v=w.rx
w=v==null?w.k3:v
return w},
goK(){var w=this.gt0(),v=w.rx
w=v==null?w.k3:v
return w},
geW(){var w=this.gt0(),v=w.to
if(v==null){v=w.u
w=v==null?w.k3:v}else w=v
w=new A.b7(w,1,C.z,-1)
return w},
gfh(){var w=null,v=this.gt0(),u=v.rx
v=u==null?v.k3:u
return new A.dN(18,w,w,w,w,v,w,w,w)},
gc8(){return C.de},
goX(){var w=this.gh7(),v=w==null?null:w.r
if(v==null)v=14
w=A.bI(this.fr,C.ba)
w=w==null?null:w.gcU()
w=A.mB(C.dQ,C.dd,A.E((w==null?C.av:w).aT(v)/14-1,0,1))
w.toString
return w}}
B.BU.prototype={
IP(){var w=0,v=A.q(x.Q),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$IP=A.r(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:i=t.c
if(i!=null){u=i
w=1
break}s=$.lk()
h=J
g=x.j
f=C.Q
w=3
return A.i(s.nD("assets/data/conversation.json"),$async$IP)
case 3:r=h.cb(g.a(f.hH(e,null)),x.P)
q=A.w(x.N,x.y)
for(p=A.l(r),o=new A.aO(r,r.gE(r),p.h("aO<R.E>")),p=p.h("R.E");o.t();){n=o.d
if(n==null)n=p.a(n)
m=n.i(0,"id")
if(typeof m=="string")q.m(0,m,B.beu(n))}if(t.b)for(l=0;l<1;++l){k=D.Va[l]
j=k.i(0,"id")
if(typeof j=="string")q.bf(j,new B.api(k))}u=t.c=q
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$IP,v)}}
B.wV.prototype={}
B.BW.prototype={}
B.BV.prototype={}
B.ZG.prototype={}
B.Cr.prototype={
J(){return"HanziDiffKind."+this.b}}
B.mJ.prototype={
k(d,e){if(e==null)return!1
return e instanceof B.mJ&&e.a===this.a&&e.b===this.b},
gp(d){return A.P(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"HanziDiffSegment("+this.b.b+', "'+this.a+'")'}}
B.lz.prototype={}
B.tA.prototype={
cZ(){var w=0,v=A.q(x.s),u,t=this,s
var $async$cZ=A.r(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=A.kt(t).dt($.nP(),x.L)
t.O4()
u=new B.lz(A.b([new B.xk(D.r0,"",A.b([D.Ll,new B.zj(B.bu6(s.c))],x.A))],x.r),!1)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$cZ,v)},
yl(d){return this.agZ(d)},
agZ(d){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$yl=A.r(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:f=C.c.di(d)
if(J.bk(f)===0){w=1
break}k=r.gbL().gn()
w=k==null?3:4
break
case 3:w=5
return A.i(r.cZ(),$async$yl)
case 5:k=a1
case 4:r.O4()
j=k.a
i=x.B
h=A.M(j,i)
h.push(new B.xk(D.r_,f,D.W1))
q=h
h=q
j=h==null?j:h
h=x.s
r.sbL(A.AX(new B.lz(j,!0),h))
t=7
w=10
return A.i(A.kt(r).dt($.bqo(),x.M).xK(f),$async$yl)
case 10:p=a1
r.O4()
o=new B.xk(D.r0,"",p)
j=A.M(q,i)
n=j
J.db(n,o)
r.sbL(A.AX(new B.lz(n,!1),h))
t=2
w=9
break
case 7:t=6
e=s.pop()
m=A.a2(e)
l=A.ah(e)
r.sbL(A.b7M(m,l,null,h))
w=9
break
case 6:w=2
break
case 9:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$yl,v)},
O4(){return"chat_"+ ++this.x}}
B.BX.prototype={
BP(d,e){return this.aRF(d,e)},
aRF(d,e){var w=0,v=A.q(x.a),u,t=this,s,r,q,p
var $async$BP=A.r(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:w=3
return A.i(t.DO(e,d),$async$BP)
case 3:s=g
r=J.aN(s)
w=r.gE(s)<10?4:5
break
case 4:q=r
p=s
w=6
return A.i(t.G9(e,d),$async$BP)
case 6:q.D(p,g)
case 5:if(r.ga0(s)){u=null
w=1
break}u=r.i(s,C.bm.kZ(r.gE(s)))
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$BP,v)},
DO(d,e){return this.aq5(d,e)},
aq5(d,e){var w=0,v=A.q(x.g),u,t,s,r,q,p,o,n,m
var $async$DO=A.r(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:w=3
return A.i(D.Tu.acg(e),$async$DO)
case 3:n=g
m=A.b([],x.V)
for(t=J.aF(n),s=d===D.j9,r=d===D.mb;t.t();){q=t.gK()
p=q.d
o=!1
if(p.length!==0)if(new A.il(p).gE(0)<=16)if(!s||q.Q!=null)o=!r||q.f.length!==0
if(o)m.push(new B.wW(d,p,q.e,q.f,q.b,q.Q))}u=m
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$DO,v)},
G9(d,e){return this.aHq(d,e)},
aHq(d,e){var w=0,v=A.q(x.g),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$G9=A.r(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=null
t=4
w=7
return A.i(r.b.TV(e),$async$G9)
case 7:j=g
t=2
w=6
break
case 4:t=3
i=s.pop()
u=D.W2
w=1
break
w=6
break
case 3:w=2
break
case 6:p=A.b([],x.V)
for(o=J.aF(j),n=d===D.mb;o.t();){m=o.gK()
l=m.r
k=!1
if(l.length!==0)if(C.b.gM(l).a.length!==0)if(new A.il(C.b.gM(l).a).gE(0)<=16)k=!n||C.b.gM(l).c.length!==0
if(k)p.push(new B.wW(d,C.b.gM(l).a,C.b.gM(l).b,C.b.gM(l).c,m.w,"https://pub-7d5fb452d3c14b469b1d630f885dfa87.r2.dev/audio/v1/vocab/"+m.a+"_E0.mp3"))}u=p
w=1
break
case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$G9,v)}}
B.CQ.prototype={
xK(d){return this.aUH(d)},
aUH(d){var w=0,v=A.q(x.U),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$xK=A.r(function(a0,a1){if(a0===1)return A.n(a1,v)
for(;;)switch(w){case 0:e=C.c.di(d).toLowerCase()
if(C.c.q(e,"luy\u1ec7n nghe")||C.c.q(e,"ch\xe9p ch\xednh t\u1ea3")||C.c.q(e,"nghe vi\u1ebft")||C.c.q(e,"nghe g\xf5")||C.c.q(e,"nghe r\u1ed3i vi\u1ebft")||C.c.q(e,"dictation")){u=t.z0(D.j9)
w=1
break}if(C.c.q(e,"luy\u1ec7n d\u1ecbch")||C.c.q(e,"d\u1ecbch vi\u1ec7t")||C.c.q(e,"d\u1ecbch sang ti\u1ebfng trung")||C.c.q(e,"vi\u1ec7t-trung")||C.c.q(e,"vi\u1ec7t trung")){u=t.z0(D.mb)
w=1
break}s=t.a
w=3
return A.i(s.TU(),$async$xK)
case 3:r=a1
w=4
return A.i(s.TT(),$async$xK)
case 4:q=a1
w=5
return A.i(t.b.IP(),$async$xK)
case 5:p=a1
o=J.i1(p.gfX())?null:J.wa(p.gfX())
n=t.asR(r,e)
if(n==null){s=J.aN(r)
n=s.ga0(r)?null:s.gM(r)}m=t.asP(q,e)
if(m==null){s=J.aN(q)
m=s.ga0(q)?null:s.gM(q)}l=A.b([],x.A)
if(C.c.q(e,"quiz")||C.c.q(e,"luy\u1ec7n")||C.c.q(e,"\xf4n")||C.c.q(e,"kiem tra")||C.c.q(e,"ki\u1ec3m tra")){if(n==null){s=J.aN(r)
k=s.ga0(r)?null:s.gM(r)}else k=n
if(k!=null){l.push(new B.lq("M\xecnh t\u1ea1o nhanh m\u1ed9t quiz local t\u1eeb d\u1eef li\u1ec7u HSK."))
l.push(t.aCq(k,r))
j=t.aEp(k)
if(j!=null)l.push(j)}}else if(C.c.q(e,"ng\u1eef ph\xe1p")||C.c.q(e,"grammar")){if(m!=null){l.push(new B.lq("\u0110\xe2y l\xe0 \u0111i\u1ec3m ng\u1eef ph\xe1p ph\xf9 h\u1ee3p nh\u1ea5t m\xecnh t\xecm th\u1ea5y."))
l.push(t.a15(m))}}else if((C.c.q(e,"h\u1ed9i tho\u1ea1i")||C.c.q(e,"\u0111\u1ed1i tho\u1ea1i")||C.c.q(e,"dialogue")||C.c.q(e,"conversation"))&&o!=null){s=o.y
i=s.length===0?null:C.b.gM(s)
l.push(new B.lq(i==null?o.f:o.c+": "+i.c+" - "+i.e))
for(s=o.as,s=A.de(s,0,A.er(2,"count",x.S),A.W(s).c),h=s.$ti,s=new A.aO(s,s.gE(0),h.h("aO<a9.E>")),g=o.b,h=h.h("a9.E");s.t();){f=s.d
if(f==null)f=h.a(f)
l.push(new B.Fp(f.a,f.b,f.c,g))}}else{s=n==null
if(!s){l.push(new B.lq("M\xecnh t\xecm th\u1ea5y t\u1eeb g\u1ea7n v\u1edbi c\xe2u h\u1ecfi c\u1ee7a b\u1ea1n."))
h=n.b
g=n.c
f=n.f
f=f.length===0?"":C.b.gM(f).b
l.push(new B.Fp(h,g,f,n.w))}h=m==null
if(!h)l.push(t.a15(m))
if(s&&h)l.push(D.Lk)}l.push(D.a55)
u=l
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$xK,v)},
z0(d){return this.arh(d)},
arh(d){var w=0,v=A.q(x.U),u,t=this,s,r,q,p,o,n,m
var $async$z0=A.r(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:s=t.d
w=3
return A.i(t.c.BP(s,d),$async$z0)
case 3:r=f
q=d===D.j9
p=q?"Luy\u1ec7n nghe ch\xe9p ch\xednh t\u1ea3":"Luy\u1ec7n d\u1ecbch Vi\u1ec7t-Trung"
o=q?"Luy\u1ec7n d\u1ecbch":"Luy\u1ec7n nghe"
n=q?"Luy\u1ec7n d\u1ecbch Vi\u1ec7t-Trung":"Luy\u1ec7n nghe ch\xe9p ch\xednh t\u1ea3"
m=new B.zj(A.b([new B.mH("C\xe2u kh\xe1c",p),new B.mH(o,n)],x.W))
if(r==null){u=A.b([new B.lq("Ch\u01b0a c\xf3 c\xe2u luy\u1ec7n ph\xf9 h\u1ee3p cho HSK "+s+"."),m],x.A)
w=1
break}u=A.b([new B.lq(q?"Nghe audio r\u1ed3i g\xf5 l\u1ea1i c\xe2u b\u1eb1ng ch\u1eef H\xe1n nh\xe9.":"D\u1ecbch c\xe2u sau sang ti\u1ebfng Trung nh\xe9."),new B.JG(r),m],x.A)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$z0,v)},
asR(d,e){var w,v,u,t,s,r
for(w=J.aF(d);w.t();){v=w.gK()
if(C.c.q(e,v.b.toLowerCase())||C.c.q(e,v.d.toLowerCase())||C.c.q(e,v.c.toLowerCase()))return v
for(u=v.f,t=u.length,s=0;s<t;++s){r=u[s].b
if(r.length!==0&&C.c.q(e,r.toLowerCase()))return v}}return null},
asP(d,e){var w,v
for(w=J.aF(d);w.t();){v=w.gK()
if(C.c.q(e,v.b.toLowerCase())||C.c.q(e,v.c.toLowerCase()))return v}return null},
a15(d){return new B.KH(d.b,d.c,d.d,d.e)},
aCq(d,e){var w,v,u,t,s=d.f,r=A.ci([s.length===0?"":C.b.gM(s).b],x.N)
for(w=J.aF(e),v=d.a;w.t();){u=w.gK()
if(u.a!==v){t=u.f
t=(t.length===0?"":C.b.gM(t).b).length!==0}else t=!1
if(t){u=u.f
r.v(0,u.length===0?"":C.b.gM(u).b)}}r=A.P5(r,4,r.$ti.c)
r=A.M(r,A.l(r).h("z.E"))
r.$flags=1
s=s.length===0?"":C.b.gM(s).b
w=d.r
w=w.length===0?"T\u1eeb n\xe0y thu\u1ed9c HSK "+d.w+".":C.b.gM(w).c
return new B.ML(d.b+" ngh\u0129a l\xe0 g\xec?",r,s,w)},
aEp(d){var w,v,u,t,s=d.r
if(s.length===0)return null
w=C.b.gM(s)
s=A.b([],x.T)
for(v=new A.yQ(w.a);v.t();){u=A.dF(v.d)
if(C.c.di(u).length!==0)s.push(u)}v=s.length
if(v<2||v>12)return null
t=A.M(s,x.N)
C.b.Dd(t)
return new B.O7(w.c,t,C.b.hN(s))},
$ibfe:1}
B.ZH.prototype={
J(){return"DictationMode."+this.b}}
B.wW.prototype={}
B.Ym.prototype={
J(){return"ChatMessageRole."+this.b}}
B.xk.prototype={}
B.ly.prototype={}
B.lq.prototype={}
B.Fp.prototype={}
B.KH.prototype={}
B.ML.prototype={}
B.O7.prototype={}
B.JG.prototype={}
B.zj.prototype={}
B.mH.prototype={}
B.tb.prototype={
a6(){return new B.QR()}}
B.QR.prototype={
F(d){return A.pv(this.gd5().ca($.bcN(),x.J),new B.aR0(this),new B.aR1(this),new B.aR2())},
apr(d){var w=C.c.di(d)
if(w.length===0)return
A.e7()
this.gd5().dt($.bcN().gjs(),x.i).yl(w)}}
B.acb.prototype={
F(d){var w,v,u=null,t=this.c
if(t.b===D.r_)return new B.ahG(t.c,u)
w=A.b([],x.p)
for(t=J.aF(t.d),v=this.d;t.t();)w.push(new A.aS(C.eK,new B.a87(t.gK(),v,u),u))
return new A.aS(D.QC,A.bu(w,C.H,C.k,C.l),u)}}
B.a87.prototype={
F(d){var w,v=null,u=this.c
A:{if(u instanceof B.lq){w=new B.a7U(u.a,v)
break A}if(u instanceof B.Fp){w=new B.ahQ(u,v)
break A}if(u instanceof B.KH){w=new B.aaW(u,v)
break A}if(u instanceof B.ML){w=new B.T3(u,v)
break A}if(u instanceof B.O7){w=new B.Ub(u,v)
break A}if(u instanceof B.JG){w=new B.JH(u,v)
break A}if(u instanceof B.zj){w=new B.agd(u.a,this.d,v)
break A}w=v}return w}}
B.ahG.prototype={
F(d){var w=null,v=A.C(d).ax,u=A.be(18)
return new A.et(C.fK,w,w,A.bZ(w,A.Y(this.c,w,w,w,w,A.aU(w,w,v.c,w,w,w,w,w,w,w,w,w,w,w,C.ay,w,w,!0,w,w,w,w,w,w,w,w),w,w),C.o,w,w,new A.b8(v.b,w,w,u,w,w,C.x),w,w,w,D.QN,D.t4,w,w,w),w)}}
B.a7U.prototype={
F(d){var w,v,u=null,t=A.C(d).ax,s=t.R8
if(s==null)s=t.k2
w=A.be(18)
v=t.to
if(v==null){v=t.u
if(v==null)v=t.k3}v=A.dT(v.b_(0.45),1)
return A.bZ(u,A.Y(this.c,u,u,u,u,u,u,u),C.o,u,u,new A.b8(s,u,v,w,u,u,C.x),u,u,u,u,D.t4,u,u,u)}}
B.ahQ.prototype={
F(d){var w,v,u,t,s=null,r=A.C(d).ax,q=r.d
if(q==null)q=r.b
w=A.be(14)
v=this.c
u=r.e
q=A.bZ(C.F,A.Y("H"+v.e,s,s,s,s,A.aU(s,s,u==null?r.c:u,s,s,s,s,s,s,s,s,s,s,s,C.a7,s,s,!0,s,s,s,s,s,s,s,s),s,s),C.o,s,s,new A.b8(q,s,s,w,s,s,C.x),s,52,s,s,s,s,s,52)
w=A.C(d).ok.f
w=w==null?s:w.ji(C.a7)
u=x.p
w=A.b([A.Y(v.b,s,s,s,s,w,s,s)],u)
t=v.c
if(t.length!==0)w.push(A.Y(t,s,s,s,s,A.aU(s,s,r.b,s,s,s,s,s,s,s,s,s,s,s,C.a6,s,s,!0,s,s,s,s,s,s,s,s),s,s))
v=v.d
if(v.length!==0){t=r.rx
w.push(A.Y(v,2,C.aj,s,s,A.aU(s,s,t==null?r.k3:t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s))}return new B.A2(A.c_(A.b([q,H.ov,A.cL(A.bu(w,C.H,C.k,C.l),1,s)],u),C.v,s,C.k,C.l,0),s)}}
B.aaW.prototype={
F(d){var w,v,u=null,t=A.C(d).ax,s=A.eW(D.RF,t.y,u,u,u),r=this.c,q=A.C(d).ok.w
q=q==null?u:q.ji(C.a7)
w=x.p
q=A.c_(A.b([s,C.bR,A.cL(A.Y(r.b,1,C.aj,u,u,q,u,u),1,u),A.Y("HSK "+r.e,u,u,u,u,u,u,u)],w),C.v,u,C.k,C.l,0)
s=A.Y(r.c,u,u,u,u,A.aU(u,u,t.b,u,u,u,u,u,u,u,u,u,u,u,C.a6,u,u,!0,u,u,u,u,u,u,u,u),u,u)
v=t.rx
return new B.A2(A.bu(A.b([q,C.aQ,s,C.ee,A.Y(r.d,3,C.aj,u,u,A.aU(u,u,v==null?t.k3:v,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u)],w),C.H,C.k,C.l),u)}}
B.T3.prototype={
a6(){return new B.adw()}}
B.adw.prototype={
F(d){var w,v,u,t,s,r,q=this,p=null,o=A.C(d).ax,n=q.d,m=o.CW
m=A.eW(C.tY,m==null?o.y:m,p,p,p)
w=q.a.c
v=A.C(d).ok.w
v=v==null?p:v.ji(C.a7)
u=x.p
u=A.b([A.c_(A.b([m,C.bR,A.cL(A.Y(w.a,p,p,p,p,v,p,p),1,p)],u),C.v,p,C.k,C.l,0),C.b6],u)
for(m=q.a.c.b,w=m.length,v=n==null,t=0;t<m.length;m.length===w||(0,A.x)(m),++t){s=m[t]
r=v?new B.aYs(q,s):p
u.push(new A.aS(C.ml,new L.Mc(!1,r,p,p,p,A.bgC(p,p,p,p,p,p,p,p,p,q.ZP(o,s,n),p,D.a4e,p,p,p,new A.b7(q.ZP(o,s,n),1,C.z,-1),p,p,p,p),p,p,!1,p,!0,p,A.Y(s,p,p,p,p,p,p,p),p),p))}if(!v){m=q.a.c
w=m.c
m=m.d
m=n===w?"\u0110\xfang r\u1ed3i. "+m:"\u0110\xe1p \xe1n \u0111\xfang: "+w+". "+m
w=o.rx
u.push(A.Y(m,p,p,p,p,A.aU(p,p,w==null?o.k3:w,p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p))}return new B.A2(A.bu(u,C.H,C.k,C.l),p)},
ZP(d,e,f){var w
if(f==null){w=d.ry
if(w==null){w=d.u
if(w==null)w=d.k3}return w}if(e===this.a.c.c)return d.b
if(e===f)return d.fy
w=d.to
if(w==null){w=d.u
if(w==null)w=d.k3}return w}}
B.Ub.prototype={
a6(){return new B.afA(A.b([],x.T))}}
B.afA.prototype={
gM8(){var w,v=this,u=v.d
if(u===$){w=A.M(v.a.c.b,x.N)
v.d!==$&&A.ay()
v.d=w
u=w}return u},
F(d){var w,v,u,t,s,r,q=this,p=null,o=A.C(d).ax,n=q.e,m=C.b.hN(n)===q.a.c.c,l=A.eW(E.tZ,o.y,p,p,p),k=A.C(d).ok.w,j=x.p
k=A.b([A.c_(A.b([l,C.bR,A.cL(A.Y("S\u1eafp x\u1ebfp c\xe2u",p,p,p,p,k==null?p:k.ji(C.a7),p,p),1,p)],j),C.v,p,C.k,C.l,0)],j)
l=q.a.c.a
if(l.length!==0)C.b.D(k,A.b([C.aH,A.Y(l,p,p,p,p,p,p,p)],j))
k.push(C.b6)
l=A.be(12)
if(q.f)w=m?o.b:o.fy
else{w=o.to
if(w==null){w=o.u
if(w==null)w=o.k3}}w=A.dT(w,1)
v=A.b([],j)
for(u=0;u<n.length;++u){t=A.Y(n[u],p,p,p,p,p,p,p)
v.push(new B.a0N(t,q.f?p:new B.b06(q,u),p))}k.push(A.bZ(p,A.m1(v,C.cd,6,6),C.o,p,D.J2,new A.b8(o.k2,p,w,l,p,p,C.x),p,p,p,p,D.Qf,p,p,1/0))
k.push(C.aQ)
l=A.b([],j)
for(j=q.gM8(),w=j.length,s=0;s<j.length;j.length===w||(0,A.x)(j),++s){r=j[s]
v=A.Y(r,p,p,p,p,p,p,p)
l.push(B.bda(p,v,q.f?p:new B.b07(q,r)))}k.push(A.m1(l,C.cd,8,8))
k.push(C.b6)
k.push(A.of(E.p_,n.length===0||q.f?p:new B.b08(q),p))
if(q.f){n=m?"C\xe2u \u0111\xfang.":"\u0110\xe1p \xe1n: "+q.a.c.c
k.push(A.Y(n,p,p,p,p,A.aU(p,p,m?o.b:o.fy,p,p,p,p,p,p,p,p,p,p,p,C.a6,p,p,!0,p,p,p,p,p,p,p,p),p,p))}return new B.A2(A.bu(k,C.H,C.k,C.l),p)}}
B.agd.prototype={
F(d){var w,v,u,t,s=null,r=A.b([],x.p)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.x)(w),++u){t=w[u]
r.push(B.bda(D.So,A.Y(t.a,s,s,s,s,s,s,s),new B.b13(this,t)))}return A.m1(r,C.cd,8,8)}}
B.FL.prototype={
a6(){return new B.a8J()},
aSp(d){return this.d.$1(d)}}
B.a8J.prototype={
gMI(){var w=this.w
if(w===$)w=this.w=new A.zo(C.kD,$.az())
return w},
l(){var w=this.gMI()
w.az$=$.az()
w.ap$=0
this.aD()},
F(d){var w,v,u=null,t=A.C(d).ax,s=t.R8
if(s==null)s=t.k2
w=A.be(22)
v=t.to
if(v==null){v=t.u
if(v==null)v=t.k3}v=A.dT(v.b_(0.45),1)
return new A.aS(D.QE,A.iz(A.c_(A.b([A.cL(F.b9T(u,this.gMI(),D.SQ,!0,u,4,1,u,this.a.d,u,C.FW),1,u),new A.aS(D.Q7,new A.xu(u,u,u,D.Sp,u,new B.aRA(this),"G\u1eedi",u,u,u,C.adx,u),u)],x.p),C.dM,u,C.k,C.l,0),new A.b8(s,u,v,w,u,u,C.x),C.bd),u)}}
B.aho.prototype={
fS(d,e){var w,v,u,t,s,r,q,p=null,o="\u0110ang d\u1ef1ng GenUI...",n=A.C(d).ax
if(A.jC(e)){w=A.Y("\u25cf \u25cf \u25cf",p,p,p,p,A.aU(p,p,n.b,p,p,p,p,p,p,p,p,16,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p)
v=n.rx
return A.c_(A.b([w,C.ed,A.Y(o,p,p,p,p,A.aU(p,p,v==null?n.k3:v,p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p)],x.p),C.v,p,C.k,C.ao,0)}w=new B.b2f(n)
v=n.R8
if(v==null)v=n.k2
u=A.be(16)
t=n.to
if(t==null){t=n.u
if(t==null)t=n.k3}t=A.dT(t.b_(0.3),1)
s=w.$1(0)
r=w.$1(1)
w=w.$1(2)
q=n.rx
return A.bZ(p,A.c_(A.b([s,C.kz,r,C.kz,w,C.fp,A.Y(o,p,p,p,p,A.aU(p,p,q==null?n.k3:q,p,p,p,p,p,p,p,p,13,p,p,C.X,p,p,!0,p,p,p,p,p,p,p,p),p,p)],x.p),C.v,p,C.k,C.ao,0),C.o,p,p,new A.b8(v,p,t,u,p,p,C.x),p,p,p,p,E.t3,p,p,p)}}
B.A2.prototype={
F(d){var w,v,u=null,t=A.C(d).ax,s=t.R8
if(s==null)s=t.k2
w=A.be(18)
v=t.to
if(v==null){v=t.u
if(v==null)v=t.k3}return A.bZ(u,this.c,C.o,u,u,new A.b8(s,u,A.dT(v.b_(0.45),1),w,u,u,C.x),u,u,u,u,C.dP,u,u,1/0)},
gN(){return this.c}}
B.JH.prototype={
a6(){return new B.Ro(D.uy)}}
B.Ro.prototype={
gN_(){var w=this.d
if(w===$)w=this.d=new A.zo(C.kD,$.az())
return w},
l(){var w=this.gN_()
w.az$=$.az()
w.ap$=0
this.aD()},
a_y(){var w,v=this,u=B.bm_(v.a.c.a.c),t=B.bm_(v.gN_().a.a)
if(t.length===0)return
w=t===u
if(w)A.tE()
else A.xo()
v.Y(new B.aSR(v,w,u,t))},
aDp(){A.e7()
this.Y(new B.aSS(this))},
F(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Noto Serif SC",h=A.C(a0).ax,g=k.a.c.a,f=g.b===D.j9,e=k.f||k.w,d=h.R8
if(d==null)d=h.k2
w=A.be(18)
v=h.to
if(v==null){v=h.u
if(v==null)v=h.k3}v=A.dT(v.b_(0.45),1)
u=f?D.RO:C.u_
t=h.CW
s=t==null
u=A.eW(u,s?h.y:t,j,j,j)
r=f?"Nghe vi\u1ebft H\xe1n t\u1ef1":"D\u1ecbch Vi\u1ec7t \u2192 Trung"
q=A.C(a0).ok.w
r=A.cL(A.Y(r,j,j,j,j,q==null?j:q.ji(C.a7),j,j),1,j)
q=h.rx
p=q==null
o=x.p
r=A.b([A.c_(A.b([u,C.bR,r,A.Y("HSK "+g.f,j,j,j,j,A.aU(j,j,p?h.k3:q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j)],o),C.v,j,C.k,C.l,0),C.b6],o)
if(f){u=A.pw(j,30,"Ph\xe1t audio",g.r)
r.push(A.c_(A.b([u,C.ed,A.cL(A.Y("B\u1ea5m nghe (nghe l\u1ea1i \u0111\u01b0\u1ee3c nhi\u1ec1u l\u1ea7n) r\u1ed3i g\xf5 l\u1ea1i c\xe2u.",j,j,j,j,A.aU(j,j,p?h.k3:q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j),1,j)],o),C.v,j,C.k,C.l,0))}else r.push(A.Y(g.e,j,j,j,j,A.C(a0).ok.w,j,j))
r.push(C.b6)
u=k.gN_()
n=!e
m=h.k3
l=A.aU(j,j,m,j,j,j,j,j,i,C.df,j,22,j,j,C.ay,j,1.15,!0,j,j,j,j,j,j,j,j)
r.push(F.b9T(!1,u,F.b8R(j,new F.kV(4,A.be(12),H.qo),j,j,j,j,j,j,!0,j,j,j,j,j,j,h.k2,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,j,"G\xf5 ch\u1eef H\xe1n...",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),!1,n,2,1,j,new B.aSU(k),l,C.oX))
r.push(C.aQ)
u=A.of(E.p_,e?j:k.gari(),j)
l=A.EX(D.aaq,k.r?j:new B.aSV(k),j)
r.push(A.m1(A.b([u,l,A.EX(D.aaC,k.w?j:k.gaDo(),j)],o),C.pB,8,8))
if(k.r&&n)C.b.D(r,A.b([C.ee,A.Y(g.d,j,j,j,j,A.aU(j,j,h.b,j,j,j,j,j,"Inter",C.eZ,j,16,j,j,C.ay,j,j,!0,j,0.2,j,j,j,j,j,j),j,j)],o))
if(k.e&&!k.f&&!k.w){u=A.Y("Ch\u01b0a \u0111\xfang, \u0111\u1ed1i chi\u1ebfu t\u1eebng ch\u1eef:",j,j,j,j,A.aU(j,j,h.fy,j,j,j,j,j,j,j,j,j,j,j,C.a6,j,j,!0,j,j,j,j,j,j,j,j),j,j)
n=k.x
C.b.D(r,A.b([C.aQ,u,C.bf,new B.a9F(n,j),C.bf,A.Y("S\u1eeda l\u1ea1i r\u1ed3i b\u1ea5m Ki\u1ec3m tra l\u1ea7n n\u1eefa nh\xe9.",j,j,j,j,A.aU(j,j,p?m:q,j,j,j,j,j,j,j,j,13,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j)],o))}if(e){u=k.f
n=u?C.jv:D.RT
if(u)t=h.b
else if(s)t=h.y
t=A.eW(n,t,j,j,20)
s=u?"Ch\xednh x\xe1c!":"\u0110\xe1p \xe1n:"
t=A.c_(A.b([t,C.i_,A.Y(s,j,j,j,j,A.aU(j,j,u?h.b:m,j,j,j,j,j,j,j,j,j,j,j,C.a7,j,j,!0,j,j,j,j,j,j,j,j),j,j)],o),C.v,j,C.k,C.l,0)
s=A.b([A.Y(g.c,j,j,j,j,A.aU(j,j,m,j,j,j,j,j,i,C.df,j,24,j,j,C.ay,j,1.15,!0,j,j,j,j,j,j,j,j),j,j),A.Y(g.d,j,j,j,j,A.aU(j,j,h.b,j,j,j,j,j,"Inter",C.eZ,j,15,j,j,C.ay,j,j,!0,j,0.2,j,j,j,j,j,j),j,j)],o)
u=g.e
if(u.length!==0)s.push(A.Y(u,j,j,j,j,A.aU(j,j,p?m:q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j))
u=A.b([A.cL(A.bu(s,C.H,C.k,C.l),1,j)],o)
s=g.r
if(s!=null&&!f)u.push(A.pw(j,24,j,s))
C.b.D(r,A.b([C.aQ,t,C.ee,A.c_(u,C.H,j,C.k,C.l,0)],o))}return A.bZ(j,A.bu(r,C.H,C.k,C.l),C.o,j,j,new A.b8(d,j,v,w,j,j,C.x),j,j,j,j,C.dP,j,j,1/0)}}
B.a9F.prototype={
F(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=A.C(d).ax,i=A.b([],x.k)
for(w=this.c,v=w.length,u=x.N,t=j.rx,s=j.k3,r=j.fy,q=j.b,p=t==null,o=0;o<w.length;w.length===v||(0,A.x)(w),++o){n=w[o]
m=n.b
l=n.a
if(m===D.eT)l=C.b.hN(A.bf(new A.il(l).gE(0),"\uff3f",!1,u))
A:{if(D.tO===m){m=new A.F(!0,q,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
break A}if(D.tP===m||D.eU===m){m=new A.F(!0,r,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.oV,r,k,k,k,k,k,k,k)
break A}if(D.eT===m){m=(p?s:t).b_(0.7)
m=new A.F(!0,m,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
break A}m=k}i.push(new A.hq(l,k,k,C.aX,k,k,k,k,k,k,m))}return A.bi1(A.eN(i,k,k,k,k,k,k,k,k,k,k),A.aU(k,k,s,k,k,k,k,k,"Noto Serif SC",C.df,k,22,k,k,C.ay,k,1.15,!0,k,k,k,k,k,k,k,k),k)}}
B.alY.prototype={
$2$1(d,e,f){return A.bdm(d,null,!0,null,null,e,f)},
$1(d){return this.$2$1(d,x.O,x.C)}}
var z=a.updateTypes(["~()","wV()","BU(cG)","O<lz>()","BX(cG)","CQ(cG)","~(c)","hN()","hN(u,bB)","hN(lz)","BW(a_<c,@>)","BV(a_<c,@>)","tA()","c(k)"])
B.aOR.prototype={
$1(d){var w,v
if(d.q(0,C.C)){w=this.a
if(w.fy===D.fB)w=null
else{w=w.goa().k3
w=A.aR(31,w.H()>>>16&255,w.H()>>>8&255,w.H()&255)}return w}w=this.a
if(w.fy===D.fB)w=null
else{w=w.goa()
v=w.p3
w=v==null?w.k2:v}return w},
$S:45}
B.aVq.prototype={
$1(d){var w,v
if(d.q(0,C.at)&&d.q(0,C.C)){w=this.a.gt0().k3
return A.aR(31,w.H()>>>16&255,w.H()>>>8&255,w.H()&255)}if(d.q(0,C.C))return null
if(d.q(0,C.at)){w=this.a.gt0()
v=w.Q
return v==null?w.y:v}return null},
$S:45}
B.api.prototype={
$0(){return B.beu(this.a)},
$S:z+1}
B.b5L.prototype={
$1(d){return new B.BU(!0)},
$S:z+2}
B.b5M.prototype={
$1(d){return new B.BX(d.ca($.w8(),x.o))},
$S:z+4}
B.b5Y.prototype={
$1(d){var w=x.S
return new B.CQ(d.ca($.w8(),x.o),d.ca($.bql(),x.z),d.ca($.bqm(),x.E),d.ca(A.oF($.nP(),new B.b5X(),x.L,w),w))},
$S:z+5}
B.b5X.prototype={
$1(d){return d.a},
$S:72}
B.aR2.prototype={
$0(){return D.a4u},
$S:z+7}
B.aR1.prototype={
$2(d,e){var w=null
return K.Ew(C.cX,"assets/images/gen_header_chat.svg",A.b([new I.Ex(M.tW,"Kh\xf4ng ph\u1ea3n h\u1ed3i \u0111\u01b0\u1ee3c",A.j(d),w,w),new G.r6(new B.FL(this.a.gMl(),w),w)],x.p),y.b,"Chat")},
$S:z+8}
B.aR0.prototype={
$1(d){var w=null,v=this.a,u=A.b([new A.Ev(new A.Oy(new B.aR_(v,d),d.a.length,!0,!0,!0,0,A.bml(),w),w)],x.p)
if(d.b)u.push(D.a4z)
u.push(new G.r6(new B.FL(v.gMl(),w),w))
return K.Ew(C.cX,"assets/images/gen_header_chat.svg",u,"GenUI local tr\u01b0\u1edbc, LLM remote c\xf3 th\u1ec3 c\u1eafm sau.","Chat")},
$S:z+9}
B.aR_.prototype={
$2(d,e){var w,v=null,u=this.a
u=A.eE(new B.acb(this.b.a[e],u.gMl(),v),!A.jC(u.gd5()),v,v)
w=A.bJ(0,18e4,0,0)
return A.k6(A.hc(u,v,A.bJ(0,C.e.aC(e*40*1000),0,0),w),0.03,v,A.bJ(0,22e4,0,0),0)},
$S:299}
B.aYs.prototype={
$0(){A.e7()
var w=this.a
w.Y(new B.aYr(w,this.b))},
$S:0}
B.aYr.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.b06.prototype={
$0(){var w=this.a
w.Y(new B.b05(w,this.b))},
$S:0}
B.b05.prototype={
$0(){var w=this.a
w.gM8().push(C.b.ho(w.e,this.b))},
$S:0}
B.b07.prototype={
$0(){A.e7()
var w=this.a
w.Y(new B.b04(w,this.b))},
$S:0}
B.b04.prototype={
$0(){var w=this.a,v=this.b
C.b.G(w.gM8(),v)
w.e.push(v)},
$S:0}
B.b08.prototype={
$0(){A.e7()
var w=this.a
w.Y(new B.b03(w))},
$S:0}
B.b03.prototype={
$0(){return this.a.f=!0},
$S:0}
B.b13.prototype={
$0(){return this.a.d.$1(this.b.b)},
$S:0}
B.aRA.prototype={
$0(){var w=this.a,v=w.gMI(),u=v.a.a
v.rV(C.FS)
w.a.aSp(u)},
$S:0}
B.b2f.prototype={
$1(d){var w=null,v=A.eE(A.bZ(w,w,C.o,w,w,new A.b8(this.a.b,w,w,w,w,w,C.cg),w,7,w,w,w,w,w,7),w,new B.b2g(),w),u=A.bJ(0,38e4,0,0)
return A.bgl(v,0,D.OI,A.bJ(0,C.e.aC(d*130*1000),0,0),u,-5)},
$S:256}
B.b2g.prototype={
$1(d){return d.V4(!0)},
$S:297}
B.aSR.prototype={
$0(){var w,v=this,u=v.a
u.e=!0
w=v.b
u.f=w
u.x=w?D.uy:B.bFQ(v.c,v.d)},
$S:0}
B.aSS.prototype={
$0(){var w=this.a
w.r=w.w=!0},
$S:0}
B.aSU.prototype={
$1(d){return this.a.a_y()},
$S:34}
B.aSV.prototype={
$0(){A.e7()
var w=this.a
w.Y(new B.aST(w))},
$S:0}
B.aST.prototype={
$0(){return this.a.r=!0},
$S:0};(function installTearOffs(){var w=a._static_1,v=a._static_0,u=a._instance_0u,t=a._instance_1u
w(B,"bFP","bsI",10)
w(B,"bFO","bsH",11)
v(B,"bFd","bu5",12)
u(B.tA.prototype,"glo","cZ",3)
t(B.QR.prototype,"gMl","apr",6)
var s
u(s=B.Ro.prototype,"gari","a_y",0)
u(s,"gaDo","aDp",0)
w(B,"blq","byC",13)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.rA,[B.aR7,B.Cr,B.ZH,B.Ym])
w(A.a5,[B.Xa,B.a0N,B.acb,B.a87,B.ahG,B.a7U,B.ahQ,B.aaW,B.agd,B.A2,B.a9F])
w(A.wz,[B.aOQ,B.aVp])
w(A.hC,[B.aOR,B.aVq,B.b5L,B.b5M,B.b5Y,B.b5X,B.aR0,B.b2f,B.b2g,B.aSU])
w(A.u,[B.BU,B.wV,B.BW,B.BV,B.ZG,B.mJ,B.lz,B.BX,B.CQ,B.wW,B.xk,B.ly,B.mH,B.alY])
w(A.mw,[B.api,B.aR2,B.aYs,B.aYr,B.b06,B.b05,B.b07,B.b04,B.b08,B.b03,B.b13,B.aRA,B.aSR,B.aSS,B.aSV,B.aST])
v(B.tA,A.wn)
w(B.ly,[B.lq,B.Fp,B.KH,B.ML,B.O7,B.JG,B.zj])
w(A.o2,[B.tb,B.FL])
w(A.pJ,[B.QR,B.a8J])
w(A.lr,[B.aR1,B.aR_])
w(A.a0,[B.T3,B.Ub,B.JH])
w(A.ab,[B.adw,B.afA,B.Ro])
v(B.aho,A.o3)})()
A.nF(b.typeUniverse,JSON.parse('{"Xa":{"a5":[],"d":[]},"a0N":{"a5":[],"d":[]},"tA":{"wn":["lz"]},"CQ":{"bfe":[]},"lq":{"ly":[]},"Fp":{"ly":[]},"KH":{"ly":[]},"ML":{"ly":[]},"O7":{"ly":[]},"JG":{"ly":[]},"zj":{"ly":[]},"T3":{"a0":[],"d":[]},"Ub":{"a0":[],"d":[]},"FL":{"a0":[],"d":[]},"tb":{"a0":[],"d":[]},"QR":{"ab":["tb"]},"acb":{"a5":[],"d":[]},"a87":{"a5":[],"d":[]},"ahG":{"a5":[],"d":[]},"a7U":{"a5":[],"d":[]},"ahQ":{"a5":[],"d":[]},"aaW":{"a5":[],"d":[]},"adw":{"ab":["T3"]},"afA":{"ab":["Ub"]},"agd":{"a5":[],"d":[]},"a8J":{"ab":["FL"]},"aho":{"a0":[],"d":[]},"A2":{"a5":[],"d":[]},"JH":{"a0":[],"d":[]},"Ro":{"ab":["JH"]},"a9F":{"a5":[],"d":[]}}'))
var y={b:"GenUI local v\u1edbi t\u1eeb v\u1ef1ng, ng\u1eef ph\xe1p v\xe0 quiz."}
var x=(function rtii(){var w=A.X
return{O:w("wn<@>"),J:w("bx<lz>"),w:w("b_<c,c>"),y:w("wV"),z:w("BU"),E:w("BX"),i:w("tA"),B:w("xk"),M:w("bfe"),s:w("lz"),X:w("v<ZG>"),V:w("v<wW>"),A:w("v<ly>"),r:w("v<xk>"),W:w("v<mH>"),R:w("v<mJ>"),k:w("v<fC>"),m:w("v<a_<c,c>>"),T:w("v<c>"),p:w("v<d>"),o:w("qn"),g:w("A<wW>"),U:w("A<ly>"),j:w("A<@>"),I:w("A<k>"),Q:w("a_<c,wV>"),P:w("a_<c,@>"),K:w("il"),N:w("c"),L:w("jp"),b:w("bU<V?>"),C:w("@"),S:w("k"),a:w("wW?"),Y:w("A<@>?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.J2=new A.ad(0,1/0,52,1/0)
D.JL=new B.alY()
D.Lk=new B.lq("M\xecnh c\xf3 th\u1ec3 tra t\u1eeb, gi\u1ea3i th\xedch ng\u1eef ph\xe1p, t\u1ea1o quiz ho\u1eb7c g\u1ee3i \xfd c\xe2u h\u1ed9i tho\u1ea1i t\u1eeb d\u1eef li\u1ec7u local.")
D.Ll=new B.lq("Ch\xe0o b\u1ea1n, m\xecnh l\xe0 Chat GenUI local. M\xecnh c\xf3 th\u1ec3 tra t\u1eeb, gi\u1ea3i th\xedch ng\u1eef ph\xe1p, t\u1ea1o quiz v\xe0 luy\u1ec7n nghe-vi\u1ebft ch\u1eef H\xe1n t\u1eeb d\u1eef li\u1ec7u offline.")
D.r_=new B.Ym(0,"user")
D.r0=new B.Ym(1,"assistant")
D.OI=new A.ej(0.455,0.03,0.515,0.955)
D.j9=new B.ZH(0,"listen")
D.mb=new B.ZH(1,"readVi")
D.Q7=new A.aj(0,0,8,7)
D.Qf=new A.aj(10,10,10,10)
D.t4=new A.aj(16,12,16,12)
D.QC=new A.aj(20,6,20,12)
D.QE=new A.aj(20,8,20,18)
D.QN=new A.aj(64,6,20,10)
D.n4=new B.mH("H\u1ed9i tho\u1ea1i","Cho m\xecnh h\u1ed9i tho\u1ea1i m\u1eabu")
D.tJ=new B.mH("Luy\u1ec7n nghe","Luy\u1ec7n nghe ch\xe9p ch\xednh t\u1ea3")
D.n5=new B.mH("T\u1ea1o quiz","T\u1ea1o quiz HSK 2")
D.tK=new B.mH("Luy\u1ec7n d\u1ecbch","Luy\u1ec7n d\u1ecbch Vi\u1ec7t-Trung")
D.tO=new B.Cr(0,"match")
D.tP=new B.Cr(1,"wrong")
D.eT=new B.Cr(2,"missing")
D.eU=new B.Cr(3,"extra")
D.RF=new A.bG(62876,"MaterialIcons",null,!1)
D.RO=new A.bG(63457,"MaterialIcons",null,!1)
D.RT=new A.bG(63573,"MaterialIcons",null,!1)
D.So=new A.fb(E.tU,18,null,null,null)
D.S2=new A.bG(983367,"MaterialIcons",null,!0)
D.Sp=new A.fb(D.S2,null,null,null,null)
D.Qo=new A.aj(16,14,10,14)
D.SQ=new F.CF(null,null,null,null,null,null,null,null,null,null,"H\u1ecfi v\u1ec1 t\u1eeb v\u1ef1ng, ng\u1eef ph\xe1p ho\u1eb7c quiz...",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,D.Qo,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,H.pN,!0,null,null,null,null)
D.Tu=new A.Lh(null)
D.Rm=new B.mH("Tra t\u1eeb","Tra t\u1eeb \u5b66\u4e60")
D.Uk=w([D.Rm,D.n5,D.n4,D.tJ,D.tK],x.W)
D.a__={id:0,title:1,titleZh:2,titlePinyin:3,description:4,level:5,category:6,icon:7,lines:8,vocabulary:9,speakers:10,relatedGrammar:11,cultureTip:12}
D.f7={speaker:0,zh:1,pinyin:2,vi:3}
D.Z2=new A.b_(D.f7,["A","\u8001\u5e08\uff0c\u867d\u7136\u6211\u6bcf\u5929\u5b66\u4e60\uff0c\u4f46\u662f\u8fdb\u6b65\u4e0d\u592a\u5feb\u3002","L\u01ceosh\u012b, su\u012br\xe1n w\u01d2 m\u011biti\u0101n xu\xe9x\xed, d\xe0nsh\xec j\xecnb\xf9 b\xfa t\xe0i ku\xe0i.","C\xf4 \u01a1i, tuy ng\xe0y n\xe0o em c\u0169ng h\u1ecdc, nh\u01b0ng ti\u1ebfn b\u1ed9 kh\xf4ng nhanh l\u1eafm."],x.w)
D.Z4=new A.b_(D.f7,["B","\u522b\u7740\u6025\uff0c\u53ea\u8981\u4f60\u575a\u6301\u7ec3\u4e60\uff0c\u5c31\u4f1a\u8d8a\u6765\u8d8a\u597d\u3002","Bi\xe9 zh\xe1oj\xed, zh\u01d0y\xe0o n\u01d0 ji\u0101nch\xed li\xe0nx\xed, ji\xf9 hu\xec yu\xe8 l\xe1i yu\xe8 h\u01ceo.","\u0110\u1eebng s\u1ed1t ru\u1ed9t, ch\u1ec9 c\u1ea7n em ki\xean tr\xec luy\u1ec7n t\u1eadp th\xec s\u1ebd ng\xe0y c\xe0ng t\u1ed1t."],x.w)
D.Z1=new A.b_(D.f7,["A","\u5982\u679c\u6211\u5de5\u4f5c\u5f88\u5fd9\uff0c\u8fd8\u5e94\u8be5\u6bcf\u5929\u590d\u4e60\u5417\uff1f","R\xfagu\u01d2 w\u01d2 g\u014dngzu\xf2 h\u011bn m\xe1ng, h\xe1i y\u012bngg\u0101i m\u011biti\u0101n f\xf9x\xed ma?","N\u1ebfu c\xf4ng vi\u1ec7c b\u1eadn, em v\u1eabn n\xean \xf4n m\u1ed7i ng\xe0y kh\xf4ng?"],x.w)
D.Z_=new A.b_(D.f7,["B","\u5f53\u7136\u3002\u53ea\u6709\u628a\u4eca\u5929\u7684\u751f\u8bcd\u590d\u4e60\u5b8c\uff0c\u660e\u5929\u7684\u8bfe\u624d\u4f1a\u8f7b\u677e\u3002","D\u0101ngr\xe1n. Zh\u01d0y\u01d2u b\u01ce j\u012bnti\u0101n de sh\u0113ngc\xed f\xf9x\xed w\xe1n, m\xedngti\u0101n de k\xe8 c\xe1i hu\xec q\u012bngs\u014dng.","T\u1ea5t nhi\xean. Ch\u1ec9 khi \xf4n xong t\u1eeb m\u1edbi h\xf4m nay th\xec b\xe0i ng\xe0y mai m\u1edbi nh\u1eb9 h\u01a1n."],x.w)
D.Z3=new A.b_(D.f7,["A","\u90a3\u6211\u5148\u542c\u4e00\u904d\u5bf9\u8bdd\uff0c\u518d\u505a\u7ec3\u4e60\u3002","N\xe0 w\u01d2 xi\u0101n t\u012bng y\xed bi\xe0n du\xechu\xe0, z\xe0i zu\xf2 li\xe0nx\xed.","V\u1eady em nghe h\u1ed9i tho\u1ea1i m\u1ed9t l\u01b0\u1ee3t tr\u01b0\u1edbc, r\u1ed3i l\xe0m b\xe0i luy\u1ec7n t\u1eadp."],x.w)
D.Z0=new A.b_(D.f7,["B","\u5f88\u597d\uff0c\u867d\u7136\u65f6\u95f4\u4e0d\u591a\uff0c\u4f46\u662f\u65b9\u6cd5\u5bf9\u4e86\u5c31\u6709\u6548\u3002","H\u011bn h\u01ceo, su\u012br\xe1n sh\xedji\u0101n b\xf9 du\u014d, d\xe0nsh\xec f\u0101ngf\u01ce du\xec le ji\xf9 y\u01d2uxi\xe0o.","R\u1ea5t t\u1ed1t, tuy th\u1eddi gian kh\xf4ng nhi\u1ec1u nh\u01b0ng \u0111\xfang ph\u01b0\u01a1ng ph\xe1p th\xec hi\u1ec7u qu\u1ea3."],x.w)
D.VL=w([D.Z2,D.Z4,D.Z1,D.Z_,D.Z3,D.Z0],x.m)
D.f6={zh:0,pinyin:1,vi:2,pos:3}
D.YF=new A.b_(D.f6,["\u8fdb\u6b65","j\xecnb\xf9","ti\u1ebfn b\u1ed9","\u0111\u1ed9ng t\u1eeb/danh t\u1eeb"],x.w)
D.YH=new A.b_(D.f6,["\u575a\u6301","ji\u0101nch\xed","ki\xean tr\xec","\u0111\u1ed9ng t\u1eeb"],x.w)
D.YD=new A.b_(D.f6,["\u590d\u4e60","f\xf9x\xed","\xf4n t\u1eadp","\u0111\u1ed9ng t\u1eeb"],x.w)
D.YG=new A.b_(D.f6,["\u751f\u8bcd","sh\u0113ngc\xed","t\u1eeb m\u1edbi","danh t\u1eeb"],x.w)
D.YE=new A.b_(D.f6,["\u8f7b\u677e","q\u012bngs\u014dng","nh\u1eb9 nh\xe0ng","t\xednh t\u1eeb"],x.w)
D.YC=new A.b_(D.f6,["\u65b9\u6cd5","f\u0101ngf\u01ce","ph\u01b0\u01a1ng ph\xe1p","danh t\u1eeb"],x.w)
D.Ws=w([D.YF,D.YH,D.YD,D.YG,D.YE,D.YC],x.m)
D.A1={code:0,nameVi:1,role:2,avatarColor:3}
D.Zk=new A.b_(D.A1,["A","Vy","Ng\u01b0\u1eddi h\u1ecdc","#5E35B1"],x.w)
D.Zj=new A.b_(D.A1,["B","C\xf4 Mai","C\u1ed1 v\u1ea5n HSK3","#00897B"],x.w)
D.Vb=w([D.Zk,D.Zj],x.m)
D.Vl=w(["g_suiran_danshi","g_zhiyao_jiu","g_zhiyou_cai"],x.T)
D.YV=new A.b_(D.a__,["conv_hsk3_conditions_01","L\u1eadp k\u1ebf ho\u1ea1ch \xf4n thi","\u51c6\u5907\u8003\u8bd5\u8ba1\u5212","Zh\u01d4nb\xe8i k\u01ceosh\xec j\xechu\xe0","Nh\u1edd c\u1ed1 v\u1ea5n HSK3 \u0111i\u1ec1u ch\u1ec9nh c\xe1ch \xf4n t\u1eadp khi th\u1eddi gian h\u1ea1n ch\u1ebf.",3,"study","\ud83d\udcda",D.VL,D.Ws,D.Vb,D.Vl,"\u1ede l\u1edbp ti\u1ebfng Trung, ng\u01b0\u1eddi h\u1ecdc th\u01b0\u1eddng g\u1ecdi gi\xe1o vi\xean l\xe0 \u8001\u5e08 \u0111\u1ec3 gi\u1eef s\u1eafc th\xe1i l\u1ecbch s\u1ef1, k\u1ec3 c\u1ea3 khi trao \u0111\u1ed5i ri\xeang v\u1ec1 k\u1ebf ho\u1ea1ch h\u1ecdc."],A.X("b_<c,u>"))
D.Va=w([D.YV],A.X("v<a_<c,u>>"))
D.W2=w([],x.V)
D.W1=w([],x.A)
D.uy=w([],x.R)
D.a_3={"\u3002":0,"\u3001":1,"\u2026":2,"\xb7":3,"\u2014":4,"\uff5e":5,"\u2018":6,"\u2019":7,"\u201c":8,"\u201d":9,"\u300c":10,"\u300d":11,"\u300e":12,"\u300f":13,"\u300a":14,"\u300b":15,"\u3010":16,"\u3011":17,",":18,".":19,"!":20,"?":21,";":22,":":23,"'":24,'"':25,"(":26,")":27,"-":28,"~":29}
D.a35=new A.fR(D.a_3,30,A.X("fR<c>"))
D.a4e=new A.N(1/0,44)
D.a4w=new I.Ex(C.tX,"\u0110ang m\u1edf chat","Chu\u1ea9n b\u1ecb GenUI local...","assets/images/gen_chat_empty.svg",null)
D.WY=w([D.a4w],x.p)
D.a4u=new G.hN("Chat",y.b,"assets/images/gen_header_chat.svg",C.cX,D.WY,null)
D.QB=new A.aj(20,4,20,12)
D.aeQ=new B.aho(null)
D.a0b=new A.aS(D.QB,D.aeQ,null)
D.a4z=new G.r6(D.a0b,null)
D.Rl=new B.mH("Ng\u1eef ph\xe1p","Gi\u1ea3i th\xedch c\xe2u v\u1edbi \u4e86")
D.WR=w([D.n5,D.Rl,D.n4],x.W)
D.a55=new B.zj(D.WR)
D.aaq=new A.df("G\u1ee3i \xfd pinyin",null,null,null,null,null,null,null,null,null)
D.aaC=new A.df("Hi\u1ec7n \u0111\xe1p \xe1n",null,null,null,null,null,null,null,null,null)
D.fB=new B.aR7(0,"flat")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"bPe","bql",()=>A.uA(new B.b5L(),x.z))
w($,"bPk","bcN",()=>D.JL.$2$1(B.bFd(),x.i,x.s))
w($,"bPf","bqm",()=>A.uA(new B.b5M(),x.E))
w($,"bPl","bqo",()=>A.uA(new B.b5Y(),x.M))})()};
(a=>{a["H10FbBG/S3PGDSO3uYeVHt125mE="]=a.current})($__dart_deferred_initializers__);