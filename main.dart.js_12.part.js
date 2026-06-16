((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,E,B={
bfH(d,e,f){return new B.XZ(d,e,f,null)},
aSS:function aSS(d,e){this.a=d
this.b=e},
XZ:function XZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.r=f
_.a=g},
aQA:function aQA(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5){var _=this
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
aQB:function aQB(d){this.a=d},
a1z:function a1z(d,e,f){this.d=d
this.z=e
this.a=f},
aXr:function aXr(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5){var _=this
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
aXs:function aXs(d){this.a=d},
Ck:function Ck(d){this.b=d
this.c=null},
aqt:function aqt(d){this.a=d},
bh_(d){var w,v,u,t,s,r,q,p,o="cultureTip",n=x.Y,m=n.a(d.i(0,"speakers"))
if(m==null)m=C.p
w=x.P
m=J.c6(m,w)
v=A.l(m).h("L<R.E,Cl>")
m=A.M(new A.L(m,B.bIC(),v),v.h("a8.E"))
m.$flags=1
m=n.a(d.i(0,"lines"))
u=J.c6(m==null?C.p:m,w)
A.aj(d.i(0,"id"))
m=A.fP(d.i(0,"level"))
m=m==null?null:C.d.dE(m)
if(m==null)m=0
v=A.ad(d.i(0,"title"))
if(v==null)v=""
A.ad(d.i(0,"titleZh"))
A.ad(d.i(0,"titlePinyin"))
t=A.ad(d.i(0,"description"))
if(t==null)t=""
A.ad(d.i(0,"category"))
A.ad(d.i(0,"icon"))
s=A.b([],x.X)
for(r=0;r<u.gE(u);++r){q=u.i(0,r)
A.ad(q.i(0,"speaker"))
p=A.ad(q.i(0,"zh"))
if(p==null)p=""
A.ad(q.i(0,"pinyin"))
q=A.ad(q.i(0,"vi"))
s.push(new B.a_q(p,q==null?"":q))}q=A.ad(d.i(0,o))
q=q==null?null:C.c.dl(q).length===0
if(q===!1)A.aj(d.i(0,o))
q=n.a(d.i(0,"relatedGrammar"))
if(q==null)q=C.p
A.dT(q,!0,x.N)
n=n.a(d.i(0,"vocabulary"))
n=J.c6(n==null?C.p:n,w)
w=A.l(n).h("L<R.E,Cm>")
n=A.M(new A.L(n,B.bID(),w),w.h("a8.E"))
n.$flags=1
return new B.xe(m,v,t,s,n)},
bvj(d){var w,v,u=A.ad(d.i(0,"zh"))
if(u==null)u=""
w=A.ad(d.i(0,"pinyin"))
if(w==null)w=""
v=A.ad(d.i(0,"vi"))
if(v==null)v=""
A.ad(d.i(0,"pos"))
return new B.Cm(u,w,v)},
bvi(d){A.ad(d.i(0,"code"))
A.ad(d.i(0,"nameVi"))
A.ad(d.i(0,"role"))
B.bKc(A.ad(d.i(0,"avatarColor")))
return new B.Cl()},
bKc(d){var w,v,u=null
if(d==null)return u
w=C.c.dl(d)
if(w.length===0)return u
if(C.c.b3(w,"#"))w=C.c.bH(w,1)
if(w.length===6)w="FF"+w
if(w.length!==8)return u
v=A.uL(w,16)
if(v==null)return u
return A.bB(v)},
xe:function xe(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.f=f
_.y=g
_.as=h},
Cm:function Cm(d,e,f){this.a=d
this.b=e
this.c=f},
Cl:function Cl(){},
a_q:function a_q(d,e){this.c=d
this.e=e},
b8d:function b8d(){},
boD(d){var w,v,u,t=new A.cW("")
for(w=new A.z9(d);w.t();){v=w.d
u=A.dJ(v>=65281&&v<=65374?v-65248:v)
if(C.c.dl(u).length===0)continue
if(D.a3e.q(0,u))continue
t.a+=u}w=t.a
return w.charCodeAt(0)==0?w:w},
bIE(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=x.K.h("A.E"),a2=A.iS(new A.iu(a3),B.bo3(),a1,a0)
a2=A.M(a2,A.l(a2).h("A.E"))
a2.$flags=1
w=a2
a0=A.iS(new A.iu(a4),B.bo3(),a1,a0)
a0=A.M(a0,A.l(a0).h("A.E"))
a0.$flags=1
v=a0
u=w.length+1
t=J.lO(u,x.I)
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
if(a1===a2){n.push(new B.n0(a2,D.tT));++r;++q}else{m=r+1
p=q+1
if(t[m][q]>=t[r][p]){n.push(new B.n0(a1,D.eW))
r=m}else{n.push(new B.n0(a2,D.eX))
q=p}}}for(;r<w.length;r=m){m=r+1
n.push(new B.n0(w[r],D.eW))}for(;q<v.length;q=p){p=q+1
n.push(new B.n0(v[q],D.eX))}l=A.b([],a0)
for(k=0;a1=n.length,k<a1;++k){j=n[k]
i=k+1
h=i<a1?n[i]:null
if(h!=null){a1=j.b
if(!(a1===D.eW&&h.b===D.eX)){a1=a1===D.eX&&h.b===D.eW
g=a1}else g=!0}else g=!1
if(g){l.push(new B.n0((j.b===D.eX?j:h).a,D.tU))
k=i}else l.push(j)}f=A.b([],a0)
for(a0=l.length,e=0;e<l.length;l.length===a0||(0,A.x)(l),++e){d=l[e]
if(f.length!==0&&C.b.ga3(f).b===d.b)f[f.length-1]=new B.n0(C.b.ga3(f).a+d.a,d.b)
else f.push(d)}return f},
CS:function CS(d,e){this.a=d
this.b=e},
n0:function n0(d,e){this.a=d
this.b=e},
bwH(){return new B.tN()},
bwI(d){var w,v,u,t
switch(d.a){case 0:w=D.tO
break
case 3:w=D.tP
break
case 2:w=D.n9
break
case 1:w=D.na
break
default:w=null}v=A.b([w],x.W)
for(u=0;u<5;++u){t=D.UC[u]
if(t!==w)v.push(t)}return v},
lL:function lL(d,e){this.a=d
this.b=e},
tN:function tN(){this.x=0
this.b=null},
Cn:function Cn(d){this.b=d},
b8e:function b8e(){},
Di:function Di(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b8r:function b8r(){},
b8q:function b8q(){},
a_r:function a_r(d,e){this.a=d
this.b=e},
xf:function xf(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
Z7:function Z7(d,e){this.a=d
this.b=e},
xE:function xE(d,e,f){this.b=d
this.c=e
this.d=f},
lK:function lK(){},
lE:function lE(d){this.a=d},
FX:function FX(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
Lh:function Lh(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
No:function No(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ON:function ON(d,e,f){this.a=d
this.b=e
this.c=f},
Kf:function Kf(d){this.a=d},
zG:function zG(d){this.a=d},
mZ:function mZ(d,e){this.a=d
this.b=e},
bug(){return new B.tk(null)},
tk:function tk(d){this.a=d},
Rz:function Rz(){this.d=$
this.c=this.a=null},
aSN:function aSN(){},
aSM:function aSM(d){this.a=d},
aSL:function aSL(d){this.a=d},
aSK:function aSK(d,e){this.a=d
this.b=e},
ad8:function ad8(d,e,f){this.c=d
this.d=e
this.a=f},
a8Y:function a8Y(d,e,f){this.c=d
this.d=e
this.a=f},
aiI:function aiI(d,e){this.c=d
this.a=e},
a8K:function a8K(d,e){this.c=d
this.a=e},
aiS:function aiS(d,e){this.c=d
this.a=e},
abR:function abR(d,e){this.c=d
this.a=e},
TO:function TO(d,e){this.c=d
this.a=e},
aex:function aex(){this.c=this.a=this.d=null},
b_y:function b_y(d,e){this.a=d
this.b=e},
b_x:function b_x(d,e){this.a=d
this.b=e},
V_:function V_(d,e){this.c=d
this.a=e},
agB:function agB(d){var _=this
_.d=$
_.e=d
_.f=!1
_.c=_.a=null},
b2h:function b2h(d,e){this.a=d
this.b=e},
b2g:function b2g(d,e){this.a=d
this.b=e},
b2i:function b2i(d,e){this.a=d
this.b=e},
b2f:function b2f(d,e){this.a=d
this.b=e},
b2j:function b2j(d){this.a=d},
b2e:function b2e(d){this.a=d},
ahf:function ahf(d,e,f){this.c=d
this.d=e
this.a=f},
b3s:function b3s(d,e){this.a=d
this.b=e},
Gi:function Gi(d,e){this.d=d
this.a=e},
a9B:function a9B(){var _=this
_.d=_.w=$
_.c=_.a=null},
aTm:function aTm(d){this.a=d},
air:function air(d){this.a=d},
b4E:function b4E(d){this.a=d},
b4F:function b4F(){},
Aq:function Aq(d,e){this.c=d
this.a=e},
Kg:function Kg(d,e){this.c=d
this.a=e},
S6:function S6(d){var _=this
_.d=$
_.w=_.r=_.f=_.e=!1
_.x=d
_.c=_.a=null},
aUE:function aUE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aUF:function aUF(d){this.a=d},
aUH:function aUH(d){this.a=d},
aUI:function aUI(d){this.a=d},
aUG:function aUG(d){this.a=d},
aax:function aax(d,e){this.c=d
this.a=e},
an8:function an8(){},
bBm(d){return A.dJ(d)}},D,I,M,G,F,H,K
J=c[1]
A=c[0]
C=c[2]
L=c[10]
E=c[18]
B=a.updateHolder(c[5],B)
D=c[17]
I=c[7]
M=c[20]
G=c[16]
F=c[8]
H=c[19]
K=c[15]
B.aSS.prototype={
J(){return"_ChipVariant."+this.b}}
B.XZ.prototype={
F(d){var w,v,u=null
A.B(d)
w=this.r
v=w!=null
return A.a3Q(!1,this.c,C.dd,u,u,u,u,C.m,u,new B.aQA(d,v,D.fC,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,C.hM,u,u,u,u,u,u,u,u),u,u,u,u,u,u,u,u,v,this.d,u,u,u,u,u,w,u,u,u,!1,u,u,u,u,u,u,u,!0,u,u)}}
B.aQA.prototype={
goj(){var w,v=this,u=v.go
if(u===$){w=A.B(v.fr)
v.go!==$&&A.ay()
u=v.go=w.ax}return u},
gdh(){if(this.fy===D.fC)var w=0
else w=this.fx?1:0
return w},
guG(){return 1},
ghg(){var w,v=this,u=v.id
if(u===$){w=A.B(v.fr)
v.id!==$&&A.ay()
u=v.id=w.ok}w=u.as
if(w==null)w=null
else w=w.bp(v.fx?v.goj().k3:v.goj().k3)
return w},
gbL(){return new A.bW(new B.aQB(this),x.b)},
gbj(){if(this.fy===D.fC)var w=C.D
else{w=this.goj().x1
if(w==null)w=C.n}return w},
gbD(){return C.D},
goO(){return null},
goS(){return null},
geZ(){var w,v,u=this
if(u.fy===D.fC)if(u.fx){w=u.goj()
v=w.to
if(v==null){v=w.u
w=v==null?w.k3:v}else w=v
w=new A.ba(w,1,C.z,-1)}else{w=u.goj().k3
w=new A.ba(A.aY(31,w.I()>>>16&255,w.I()>>>8&255,w.I()&255),1,C.z,-1)}else w=C.lz
return w},
gfn(){var w=null
return new A.dS(18,w,w,w,w,this.fx?this.goj().b:this.goj().k3,w,w,w)},
gcd(){return C.dg},
gp7(){var w=this.ghg(),v=w==null?null:w.r
if(v==null)v=14
w=A.bH(this.fr,C.aY)
w=w==null?null:w.gcL()
w=A.mS(C.dS,C.cn,A.E((w==null?C.as:w).aT(v)/14-1,0,1))
w.toString
return w}}
B.a1z.prototype={
F(d){var w,v,u=null
A.B(d)
A.B(d)
w=this.z
v=w!=null
return A.a3Q(!1,u,C.dd,u,u,u,u,C.m,u,new B.aXr(d,!0,!1,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,C.hM,u,u,u,0,u,u,u,u),u,C.u6,u,u,u,u,u,u,v,this.d,u,u,u,u,w,u,u,u,u,!1,u,u,u,u,u,u,u,!0,u,u)}}
B.aXr.prototype={
gtf(){var w,v=this,u=v.go
if(u===$){w=A.B(v.fr)
v.go!==$&&A.ay()
u=v.go=w.ax}return u},
ghg(){var w,v,u,t=this,s=t.id
if(s===$){w=A.B(t.fr)
t.id!==$&&A.ay()
s=t.id=w.ok}w=s.as
if(w==null)w=null
else{v=t.gtf()
u=v.rx
v=u==null?v.k3:u
v=w.bp(v)
w=v}return w},
gbL(){return new A.bW(new B.aXs(this),x.b)},
gbj(){return C.D},
gbD(){return C.D},
goO(){var w=this.gtf(),v=w.rx
w=v==null?w.k3:v
return w},
goS(){var w=this.gtf(),v=w.rx
w=v==null?w.k3:v
return w},
geZ(){var w=this.gtf(),v=w.to
if(v==null){v=w.u
w=v==null?w.k3:v}else w=v
w=new A.ba(w,1,C.z,-1)
return w},
gfn(){var w=null,v=this.gtf(),u=v.rx
v=u==null?v.k3:u
return new A.dS(18,w,w,w,w,v,w,w,w)},
gcd(){return C.dg},
gp7(){var w=this.ghg(),v=w==null?null:w.r
if(v==null)v=14
w=A.bH(this.fr,C.aY)
w=w==null?null:w.gcL()
w=A.mS(C.dS,C.cn,A.E((w==null?C.as:w).aT(v)/14-1,0,1))
w.toString
return w}}
B.Ck.prototype={
J9(){var w=0,v=A.q(x.Q),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$J9=A.r(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:i=t.c
if(i!=null){u=i
w=1
break}s=$.lx()
h=J
g=x.j
f=C.P
w=3
return A.i(s.nL("assets/data/conversation.json"),$async$J9)
case 3:r=h.c6(g.a(f.hv(e,null)),x.P)
q=A.w(x.N,x.y)
for(p=A.l(r),o=new A.aN(r,r.gE(r),p.h("aN<R.E>")),p=p.h("R.E");o.t();){n=o.d
if(n==null)n=p.a(n)
m=n.i(0,"id")
if(typeof m=="string")q.m(0,m,B.bh_(n))}if(t.b)for(l=0;l<1;++l){k=D.Vr[l]
j=k.i(0,"id")
if(typeof j=="string")q.bb(j,new B.aqt(k))}u=t.c=q
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$J9,v)}}
B.xe.prototype={}
B.Cm.prototype={}
B.Cl.prototype={}
B.a_q.prototype={}
B.CS.prototype={
J(){return"HanziDiffKind."+this.b}}
B.n0.prototype={
k(d,e){if(e==null)return!1
return e instanceof B.n0&&e.a===this.a&&e.b===this.b},
gp(d){return A.P(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"HanziDiffSegment("+this.b.b+', "'+this.a+'")'}}
B.lL.prototype={}
B.tN.prototype={
d1(){var w=0,v=A.q(x.s),u,t=this,s
var $async$d1=A.r(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=A.jV(t).cz($.mD(),x.L)
t.Ou()
u=new B.lL(A.b([new B.xE(D.r6,"",A.b([D.LF,new B.zG(B.bwI(s.c))],x.A))],x.r),!1)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$d1,v)},
yy(d){return this.ahI(d)},
ahI(d){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$yy=A.r(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:f=C.c.dl(d)
if(J.bh(f)===0){w=1
break}k=r.gbN().gn()
w=k==null?3:4
break
case 3:w=5
return A.i(r.d1(),$async$yy)
case 5:k=a1
case 4:r.Ou()
j=k.a
i=x.B
h=A.M(j,i)
h.push(new B.xE(D.r5,f,D.Wi))
q=h
h=q
j=h==null?j:h
h=x.s
r.sbN(A.Bl(new B.lL(j,!0),h))
t=7
w=10
return A.i(A.jV(r).cz($.bsZ(),x.M).xY(f),$async$yy)
case 10:p=a1
r.Ou()
o=new B.xE(D.r6,"",p)
j=A.M(q,i)
n=j
J.da(n,o)
r.sbN(A.Bl(new B.lL(n,!1),h))
t=2
w=9
break
case 7:t=6
e=s.pop()
m=A.a2(e)
l=A.ah(e)
r.sbN(A.baj(m,l,null,h))
w=9
break
case 6:w=2
break
case 9:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$yy,v)},
Ou(){return"chat_"+ ++this.x}}
B.Cn.prototype={
C8(d,e){return this.aT0(d,e)},
aT0(d,e){var w=0,v=A.q(x.a),u,t=this,s,r,q,p
var $async$C8=A.r(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:w=3
return A.i(t.E4(e,d),$async$C8)
case 3:s=g
r=J.aO(s)
w=r.gE(s)<10?4:5
break
case 4:q=r
p=s
w=6
return A.i(t.Gs(e,d),$async$C8)
case 6:q.B(p,g)
case 5:if(r.ga_(s)){u=null
w=1
break}u=r.i(s,C.bn.l1(r.gE(s)))
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$C8,v)},
E4(d,e){return this.ar6(d,e)},
ar6(d,e){var w=0,v=A.q(x.g),u,t,s,r,q,p,o,n,m
var $async$E4=A.r(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:w=3
return A.i(D.TN.ad_(e),$async$E4)
case 3:n=g
m=A.b([],x.V)
for(t=J.az(n),s=d===D.j8,r=d===D.mb;t.t();){q=t.gK()
p=q.d
o=!1
if(p.length!==0)if(new A.iu(p).gE(0)<=16)if(!s||q.Q!=null)o=!r||q.f.length!==0
if(o)m.push(new B.xf(d,p,q.e,q.f,q.b,q.Q))}u=m
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$E4,v)},
Gs(d,e){return this.aIF(d,e)},
aIF(d,e){var w=0,v=A.q(x.g),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Gs=A.r(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=null
t=4
w=7
return A.i(r.b.Ul(e),$async$Gs)
case 7:j=g
t=2
w=6
break
case 4:t=3
i=s.pop()
u=D.Wk
w=1
break
w=6
break
case 3:w=2
break
case 6:p=A.b([],x.V)
for(o=J.az(j),n=d===D.mb;o.t();){m=o.gK()
l=m.r
k=!1
if(l.length!==0)if(C.b.gM(l).a.length!==0)if(new A.iu(C.b.gM(l).a).gE(0)<=16)k=!n||C.b.gM(l).c.length!==0
if(k)p.push(new B.xf(d,C.b.gM(l).a,C.b.gM(l).b,C.b.gM(l).c,m.w,"https://pub-7d5fb452d3c14b469b1d630f885dfa87.r2.dev/audio/v1/vocab/"+m.a+"_E0.mp3"))}u=p
w=1
break
case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Gs,v)}}
B.Di.prototype={
xY(d){return this.aW8(d)},
aW8(d){var w=0,v=A.q(x.U),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$xY=A.r(function(a0,a1){if(a0===1)return A.n(a1,v)
for(;;)switch(w){case 0:e=C.c.dl(d).toLowerCase()
if(C.c.q(e,"luy\u1ec7n nghe")||C.c.q(e,"ch\xe9p ch\xednh t\u1ea3")||C.c.q(e,"nghe vi\u1ebft")||C.c.q(e,"nghe g\xf5")||C.c.q(e,"nghe r\u1ed3i vi\u1ebft")||C.c.q(e,"dictation")){u=t.zd(D.j8)
w=1
break}if(C.c.q(e,"luy\u1ec7n d\u1ecbch")||C.c.q(e,"d\u1ecbch vi\u1ec7t")||C.c.q(e,"d\u1ecbch sang ti\u1ebfng trung")||C.c.q(e,"vi\u1ec7t-trung")||C.c.q(e,"vi\u1ec7t trung")){u=t.zd(D.mb)
w=1
break}s=t.a
w=3
return A.i(s.Uk(),$async$xY)
case 3:r=a1
w=4
return A.i(s.Uj(),$async$xY)
case 4:q=a1
w=5
return A.i(t.b.J9(),$async$xY)
case 5:p=a1
o=J.hB(p.geW())?null:J.wt(p.geW())
n=t.atQ(r,e)
if(n==null){s=J.aO(r)
n=s.ga_(r)?null:s.gM(r)}m=t.atO(q,e)
if(m==null){s=J.aO(q)
m=s.ga_(q)?null:s.gM(q)}l=A.b([],x.A)
if(C.c.q(e,"quiz")||C.c.q(e,"luy\u1ec7n")||C.c.q(e,"\xf4n")||C.c.q(e,"kiem tra")||C.c.q(e,"ki\u1ec3m tra")){if(n==null){s=J.aO(r)
k=s.ga_(r)?null:s.gM(r)}else k=n
if(k!=null){l.push(new B.lE("M\xecnh t\u1ea1o nhanh m\u1ed9t quiz local t\u1eeb d\u1eef li\u1ec7u HSK."))
l.push(t.aDB(k,r))
j=t.aFB(k)
if(j!=null)l.push(j)}}else if(C.c.q(e,"ng\u1eef ph\xe1p")||C.c.q(e,"grammar")){if(m!=null){l.push(new B.lE("\u0110\xe2y l\xe0 \u0111i\u1ec3m ng\u1eef ph\xe1p ph\xf9 h\u1ee3p nh\u1ea5t m\xecnh t\xecm th\u1ea5y."))
l.push(t.a1G(m))}}else if((C.c.q(e,"h\u1ed9i tho\u1ea1i")||C.c.q(e,"\u0111\u1ed1i tho\u1ea1i")||C.c.q(e,"dialogue")||C.c.q(e,"conversation"))&&o!=null){s=o.y
i=s.length===0?null:C.b.gM(s)
l.push(new B.lE(i==null?o.f:o.c+": "+i.c+" - "+i.e))
for(s=o.as,s=A.dd(s,0,A.ev(2,"count",x.S),A.W(s).c),h=s.$ti,s=new A.aN(s,s.gE(0),h.h("aN<a8.E>")),g=o.b,h=h.h("a8.E");s.t();){f=s.d
if(f==null)f=h.a(f)
l.push(new B.FX(f.a,f.b,f.c,g))}}else{s=n==null
if(!s){l.push(new B.lE("M\xecnh t\xecm th\u1ea5y t\u1eeb g\u1ea7n v\u1edbi c\xe2u h\u1ecfi c\u1ee7a b\u1ea1n."))
h=n.b
g=n.c
f=n.f
f=f.length===0?"":C.b.gM(f).b
l.push(new B.FX(h,g,f,n.w))}h=m==null
if(!h)l.push(t.a1G(m))
if(s&&h)l.push(D.LE)}l.push(D.a5d)
u=l
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$xY,v)},
zd(d){return this.asi(d)},
asi(d){var w=0,v=A.q(x.U),u,t=this,s,r,q,p,o,n,m
var $async$zd=A.r(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:s=t.d
w=3
return A.i(t.c.C8(s,d),$async$zd)
case 3:r=f
q=d===D.j8
p=q?"Luy\u1ec7n nghe ch\xe9p ch\xednh t\u1ea3":"Luy\u1ec7n d\u1ecbch Vi\u1ec7t-Trung"
o=q?"Luy\u1ec7n d\u1ecbch":"Luy\u1ec7n nghe"
n=q?"Luy\u1ec7n d\u1ecbch Vi\u1ec7t-Trung":"Luy\u1ec7n nghe ch\xe9p ch\xednh t\u1ea3"
m=new B.zG(A.b([new B.mZ("C\xe2u kh\xe1c",p),new B.mZ(o,n)],x.W))
if(r==null){u=A.b([new B.lE("Ch\u01b0a c\xf3 c\xe2u luy\u1ec7n ph\xf9 h\u1ee3p cho HSK "+s+"."),m],x.A)
w=1
break}u=A.b([new B.lE(q?"Nghe audio r\u1ed3i g\xf5 l\u1ea1i c\xe2u b\u1eb1ng ch\u1eef H\xe1n nh\xe9.":"D\u1ecbch c\xe2u sau sang ti\u1ebfng Trung nh\xe9."),new B.Kf(r),m],x.A)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$zd,v)},
atQ(d,e){var w,v,u,t,s,r
for(w=J.az(d);w.t();){v=w.gK()
if(C.c.q(e,v.b.toLowerCase())||C.c.q(e,v.d.toLowerCase())||C.c.q(e,v.c.toLowerCase()))return v
for(u=v.f,t=u.length,s=0;s<t;++s){r=u[s].b
if(r.length!==0&&C.c.q(e,r.toLowerCase()))return v}}return null},
atO(d,e){var w,v
for(w=J.az(d);w.t();){v=w.gK()
if(C.c.q(e,v.b.toLowerCase())||C.c.q(e,v.c.toLowerCase()))return v}return null},
a1G(d){return new B.Lh(d.b,d.c,d.d,d.e)},
aDB(d,e){var w,v,u,t,s=d.f,r=A.cl([s.length===0?"":C.b.gM(s).b],x.N)
for(w=J.az(e),v=d.a;w.t();){u=w.gK()
if(u.a!==v){t=u.f
t=(t.length===0?"":C.b.gM(t).b).length!==0}else t=!1
if(t){u=u.f
r.v(0,u.length===0?"":C.b.gM(u).b)}}r=A.PM(r,4,r.$ti.c)
r=A.M(r,A.l(r).h("A.E"))
r.$flags=1
s=s.length===0?"":C.b.gM(s).b
w=d.r
w=w.length===0?"T\u1eeb n\xe0y thu\u1ed9c HSK "+d.w+".":C.b.gM(w).c
return new B.No(d.b+" ngh\u0129a l\xe0 g\xec?",r,s,w)},
aFB(d){var w,v,u,t,s=d.r
if(s.length===0)return null
w=C.b.gM(s)
s=A.b([],x.T)
for(v=new A.z9(w.a);v.t();){u=A.dJ(v.d)
if(C.c.dl(u).length!==0)s.push(u)}v=s.length
if(v<2||v>12)return null
t=A.M(s,x.N)
C.b.Dv(t)
return new B.ON(w.c,t,C.b.hW(s))},
$ibhL:1}
B.a_r.prototype={
J(){return"DictationMode."+this.b}}
B.xf.prototype={}
B.Z7.prototype={
J(){return"ChatMessageRole."+this.b}}
B.xE.prototype={}
B.lK.prototype={}
B.lE.prototype={}
B.FX.prototype={}
B.Lh.prototype={}
B.No.prototype={}
B.ON.prototype={}
B.Kf.prototype={}
B.zG.prototype={}
B.mZ.prototype={}
B.tk.prototype={
a6(){return new B.Rz()}}
B.Rz.prototype={
F(d){return A.pG(this.gcj().ck($.bfk(),x.J),new B.aSL(this),new B.aSM(this),new B.aSN())},
aqw(d){var w=C.c.dl(d)
if(w.length===0)return
A.ec()
this.gcj().cz($.bfk().gjD(),x.i).yy(w)}}
B.ad8.prototype={
F(d){var w,v,u=null,t=this.c
if(t.b===D.r5)return new B.aiI(t.c,u)
w=A.b([],x.p)
for(t=J.az(t.d),v=this.d;t.t();)w.push(new A.aT(C.eM,new B.a8Y(t.gK(),v,u),u))
return new A.aT(D.QX,A.bm(w,C.F,C.j,C.l),u)}}
B.a8Y.prototype={
F(d){var w,v=null,u=this.c
A:{if(u instanceof B.lE){w=new B.a8K(u.a,v)
break A}if(u instanceof B.FX){w=new B.aiS(u,v)
break A}if(u instanceof B.Lh){w=new B.abR(u,v)
break A}if(u instanceof B.No){w=new B.TO(u,v)
break A}if(u instanceof B.ON){w=new B.V_(u,v)
break A}if(u instanceof B.Kf){w=new B.Kg(u,v)
break A}if(u instanceof B.zG){w=new B.ahf(u.a,this.d,v)
break A}w=v}return w}}
B.aiI.prototype={
F(d){var w=null,v=A.B(d).ax,u=A.b7(18)
return new A.ez(C.fL,w,w,A.bS(w,A.U(this.c,w,w,w,w,A.aQ(w,w,v.c,w,w,w,w,w,w,w,w,w,w,w,C.ak,w,w,!0,w,w,w,w,w,w,w,w),w,w),C.m,w,w,new A.b8(v.b,w,w,u,w,w,C.w),w,w,w,D.R6,E.mp,w,w,w),w)}}
B.a8K.prototype={
F(d){var w,v,u=null,t=A.B(d).ax,s=t.R8
if(s==null)s=t.k2
w=A.b7(18)
v=t.to
if(v==null){v=t.u
if(v==null)v=t.k3}v=A.dO(v.aY(0.45),1)
return A.bS(u,A.U(this.c,u,u,u,u,u,u,u),C.m,u,u,new A.b8(s,u,v,w,u,u,C.w),u,u,u,u,E.mp,u,u,u)}}
B.aiS.prototype={
F(d){var w,v,u,t,s=null,r=A.B(d).ax,q=r.d
if(q==null)q=r.b
w=A.b7(14)
v=this.c
u=r.e
q=A.bS(C.J,A.U("H"+v.e,s,s,s,s,A.aQ(s,s,u==null?r.c:u,s,s,s,s,s,s,s,s,s,s,s,C.a5,s,s,!0,s,s,s,s,s,s,s,s),s,s),C.m,s,s,new A.b8(q,s,s,w,s,s,C.w),s,52,s,s,s,s,s,52)
w=A.B(d).ok.f
w=w==null?s:w.hQ(C.a5)
u=x.p
w=A.b([A.U(v.b,s,s,s,s,w,s,s)],u)
t=v.c
if(t.length!==0)w.push(A.U(t,s,s,s,s,A.aQ(s,s,r.b,s,s,s,s,s,s,s,s,s,s,s,C.a4,s,s,!0,s,s,s,s,s,s,s,s),s,s))
v=v.d
if(v.length!==0){t=r.rx
w.push(A.U(v,2,C.aq,s,s,A.aQ(s,s,t==null?r.k3:t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s))}return new B.Aq(A.bR(A.b([q,H.oC,A.cZ(A.bm(w,C.F,C.j,C.l),1,s)],u),C.t,s,C.j,C.l,0),s)}}
B.abR.prototype={
F(d){var w,v,u=null,t=A.B(d).ax,s=A.eC(D.S2,t.y,u,u),r=this.c,q=A.B(d).ok.w
q=q==null?u:q.hQ(C.a5)
w=x.p
q=A.bR(A.b([s,C.bh,A.cZ(A.U(r.b,1,C.aq,u,u,q,u,u),1,u),A.U("HSK "+r.e,u,u,u,u,u,u,u)],w),C.t,u,C.j,C.l,0)
s=A.U(r.c,u,u,u,u,A.aQ(u,u,t.b,u,u,u,u,u,u,u,u,u,u,u,C.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u)
v=t.rx
return new B.Aq(A.bm(A.b([q,C.b2,s,C.ef,A.U(r.d,3,C.aq,u,u,A.aQ(u,u,v==null?t.k3:v,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u)],w),C.F,C.j,C.l),u)}}
B.TO.prototype={
a6(){return new B.aex()}}
B.aex.prototype={
F(d){var w,v,u,t,s,r,q=this,p=null,o=A.B(d).ax,n=q.d,m=o.CW
m=A.eC(C.u2,m==null?o.y:m,p,p)
w=q.a.c
v=A.B(d).ok.w
v=v==null?p:v.hQ(C.a5)
u=x.p
u=A.b([A.bR(A.b([m,C.bh,A.cZ(A.U(w.a,p,p,p,p,v,p,p),1,p)],u),C.t,p,C.j,C.l,0),C.av],u)
for(m=q.a.c.b,w=m.length,v=n==null,t=0;t<m.length;m.length===w||(0,A.x)(m),++t){s=m[t]
r=v?new B.b_y(q,s):p
u.push(new A.aT(C.mm,new L.MN(!1,r,p,p,p,A.byN(p,p,p,p,p,p,p,p,p,q.a_m(o,s,n),p,D.a4o,p,p,p,new A.ba(q.a_m(o,s,n),1,C.z,-1),p,p,p,p),p,p,!1,p,!0,p,A.U(s,p,p,p,p,p,p,p),p),p))}if(!v){m=q.a.c
w=m.c
m=m.d
m=n===w?"\u0110\xfang r\u1ed3i. "+m:"\u0110\xe1p \xe1n \u0111\xfang: "+w+". "+m
w=o.rx
u.push(A.U(m,p,p,p,p,A.aQ(p,p,w==null?o.k3:w,p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p))}return new B.Aq(A.bm(u,C.F,C.j,C.l),p)},
a_m(d,e,f){var w
if(f==null){w=d.ry
if(w==null){w=d.u
if(w==null)w=d.k3}return w}if(e===this.a.c.c)return d.b
if(e===f)return d.fy
w=d.to
if(w==null){w=d.u
if(w==null)w=d.k3}return w}}
B.V_.prototype={
a6(){return new B.agB(A.b([],x.T))}}
B.agB.prototype={
gMw(){var w,v=this,u=v.d
if(u===$){w=A.M(v.a.c.b,x.N)
v.d!==$&&A.ay()
v.d=w
u=w}return u},
F(d){var w,v,u,t,s,r,q=this,p=null,o=A.B(d).ax,n=q.e,m=C.b.hW(n)===q.a.c.c,l=A.eC(E.u3,o.y,p,p),k=A.B(d).ok.w,j=x.p
k=A.b([A.bR(A.b([l,C.bh,A.cZ(A.U("S\u1eafp x\u1ebfp c\xe2u",p,p,p,p,k==null?p:k.hQ(C.a5),p,p),1,p)],j),C.t,p,C.j,C.l,0)],j)
l=q.a.c.a
if(l.length!==0)C.b.B(k,A.b([C.aw,A.U(l,p,p,p,p,p,p,p)],j))
k.push(C.av)
l=A.b7(12)
if(q.f)w=m?o.b:o.fy
else{w=o.to
if(w==null){w=o.u
if(w==null)w=o.k3}}w=A.dO(w,1)
v=A.b([],j)
for(u=0;u<n.length;++u){t=A.U(n[u],p,p,p,p,p,p,p)
v.push(new B.a1z(t,q.f?p:new B.b2h(q,u),p))}k.push(A.bS(p,A.kt(v,C.bV,6,6),C.m,p,D.Jl,new A.b8(o.k2,p,w,l,p,p,C.w),p,p,p,p,D.QB,p,p,1/0))
k.push(C.b2)
l=A.b([],j)
for(j=q.gMw(),w=j.length,s=0;s<j.length;j.length===w||(0,A.x)(j),++s){r=j[s]
v=A.U(r,p,p,p,p,p,p,p)
l.push(B.bfH(p,v,q.f?p:new B.b2i(q,r)))}k.push(A.kt(l,C.bV,8,8))
k.push(C.av)
k.push(A.tH(E.p6,n.length===0||q.f?p:new B.b2j(q),p))
if(q.f){n=m?"C\xe2u \u0111\xfang.":"\u0110\xe1p \xe1n: "+q.a.c.c
k.push(A.U(n,p,p,p,p,A.aQ(p,p,m?o.b:o.fy,p,p,p,p,p,p,p,p,p,p,p,C.a4,p,p,!0,p,p,p,p,p,p,p,p),p,p))}return new B.Aq(A.bm(k,C.F,C.j,C.l),p)}}
B.ahf.prototype={
F(d){var w,v,u,t,s=null,r=A.b([],x.p)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.x)(w),++u){t=w[u]
r.push(B.bfH(D.SI,A.U(t.a,s,s,s,s,s,s,s),new B.b3s(this,t)))}return A.kt(r,C.bV,8,8)}}
B.Gi.prototype={
a6(){return new B.a9B()},
aTL(d){return this.d.$1(d)}}
B.a9B.prototype={
gN7(){var w=this.w
if(w===$)w=this.w=new A.zL(C.kE,$.aA())
return w},
l(){var w=this.gN7()
w.az$=$.aA()
w.ap$=0
this.aw()},
F(d){var w,v,u=null,t=A.B(d).ax,s=t.R8
if(s==null)s=t.k2
w=A.b7(22)
v=t.to
if(v==null){v=t.u
if(v==null)v=t.k3}v=A.dO(v.aY(0.45),1)
return new A.aT(D.QZ,A.jj(A.bR(A.b([A.cZ(F.bco(u,this.gN7(),D.T9,!0,u,4,1,u,this.a.d,u,C.Ga),1,u),new A.aT(D.Qt,new A.xO(u,u,u,D.SJ,u,new B.aTm(this),"G\u1eedi",u,u,u,C.adG,u),u)],x.p),C.dP,u,C.j,C.l,0),new A.b8(s,u,v,w,u,u,C.w),C.bo),u)}}
B.air.prototype={
h8(d,e){var w,v,u,t,s,r,q,p=null,o="\u0110ang d\u1ef1ng GenUI...",n=A.B(d).ax
if(A.jO(e)){w=A.U("\u25cf \u25cf \u25cf",p,p,p,p,A.aQ(p,p,n.b,p,p,p,p,p,p,p,p,16,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p)
v=n.rx
return A.bR(A.b([w,C.i2,A.U(o,p,p,p,p,A.aQ(p,p,v==null?n.k3:v,p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p)],x.p),C.t,p,C.j,C.a6,0)}w=new B.b4E(n)
v=n.R8
if(v==null)v=n.k2
u=A.b7(16)
t=n.to
if(t==null){t=n.u
if(t==null)t=n.k3}t=A.dO(t.aY(0.3),1)
s=w.$1(0)
r=w.$1(1)
w=w.$1(2)
q=n.rx
return A.bS(p,A.bR(A.b([s,C.fr,r,C.fr,w,C.i3,A.U(o,p,p,p,p,A.aQ(p,p,q==null?n.k3:q,p,p,p,p,p,p,p,p,13,p,p,C.a2,p,p,!0,p,p,p,p,p,p,p,p),p,p)],x.p),C.t,p,C.j,C.a6,0),C.m,p,p,new A.b8(v,p,t,u,p,p,C.w),p,p,p,p,E.ta,p,p,p)}}
B.Aq.prototype={
F(d){var w,v,u=null,t=A.B(d).ax,s=t.R8
if(s==null)s=t.k2
w=A.b7(18)
v=t.to
if(v==null){v=t.u
if(v==null)v=t.k3}return A.bS(u,this.c,C.m,u,u,new A.b8(s,u,A.dO(v.aY(0.45),1),w,u,u,C.w),u,u,u,u,C.dR,u,u,1/0)},
gN(){return this.c}}
B.Kg.prototype={
a6(){return new B.S6(D.uI)}}
B.S6.prototype={
gNp(){var w=this.d
if(w===$)w=this.d=new A.zL(C.kE,$.aA())
return w},
l(){var w=this.gNp()
w.az$=$.aA()
w.ap$=0
this.aw()},
a07(){var w,v=this,u=B.boD(v.a.c.a.c),t=B.boD(v.gNp().a.a)
if(t.length===0)return
w=t===u
if(w)A.tR()
else A.xI()
v.T(new B.aUE(v,w,u,t))},
aEz(){A.ec()
this.T(new B.aUF(this))},
F(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Noto Serif SC",h=A.B(a0).ax,g=k.a.c.a,f=g.b===D.j8,e=k.f||k.w,d=h.R8
if(d==null)d=h.k2
w=A.b7(18)
v=h.to
if(v==null){v=h.u
if(v==null)v=h.k3}v=A.dO(v.aY(0.45),1)
u=f?D.Sa:C.u4
t=h.CW
s=t==null
u=A.eC(u,s?h.y:t,j,j)
r=f?"Nghe vi\u1ebft H\xe1n t\u1ef1":"D\u1ecbch Vi\u1ec7t \u2192 Trung"
q=A.B(a0).ok.w
r=A.cZ(A.U(r,j,j,j,j,q==null?j:q.hQ(C.a5),j,j),1,j)
q=h.rx
p=q==null
o=x.p
r=A.b([A.bR(A.b([u,C.bh,r,A.U("HSK "+g.f,j,j,j,j,A.aQ(j,j,p?h.k3:q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j)],o),C.t,j,C.j,C.l,0),C.av],o)
if(f){u=A.kG(j,30,"Ph\xe1t audio",g.r)
r.push(A.bR(A.b([u,C.i2,A.cZ(A.U("B\u1ea5m nghe (nghe l\u1ea1i \u0111\u01b0\u1ee3c nhi\u1ec1u l\u1ea7n) r\u1ed3i g\xf5 l\u1ea1i c\xe2u.",j,j,j,j,A.aQ(j,j,p?h.k3:q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j),1,j)],o),C.t,j,C.j,C.l,0))}else r.push(A.U(g.e,j,j,j,j,A.B(a0).ok.w,j,j))
r.push(C.av)
u=k.gNp()
n=!e
m=h.k3
l=A.aQ(j,j,m,j,j,j,j,j,i,C.cp,j,22,j,j,C.ak,j,1.15,!0,j,j,j,j,j,j,j,j)
r.push(F.bco(!1,u,F.bbk(j,new F.l6(4,A.b7(12),H.qv),j,j,j,j,j,j,!0,j,j,j,j,j,j,h.k2,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,j,"G\xf5 ch\u1eef H\xe1n...",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),!1,n,2,1,j,new B.aUH(k),l,C.p3))
r.push(C.b2)
u=A.tH(E.p6,e?j:k.gasj(),j)
l=A.Fs(D.aav,k.r?j:new B.aUI(k),j)
r.push(A.kt(A.b([u,l,A.Fs(D.aaH,k.w?j:k.gaEy(),j)],o),C.pI,8,8))
if(k.r&&n)C.b.B(r,A.b([C.ef,A.U(g.d,j,j,j,j,A.aQ(j,j,h.b,j,j,j,j,j,"Inter",C.d_,j,16,j,j,C.ak,j,j,!0,j,0.2,j,j,j,j,j,j),j,j)],o))
if(k.e&&!k.f&&!k.w){u=A.U("Ch\u01b0a \u0111\xfang, \u0111\u1ed1i chi\u1ebfu t\u1eebng ch\u1eef:",j,j,j,j,A.aQ(j,j,h.fy,j,j,j,j,j,j,j,j,j,j,j,C.a4,j,j,!0,j,j,j,j,j,j,j,j),j,j)
n=k.x
C.b.B(r,A.b([C.b2,u,C.aM,new B.aax(n,j),C.aM,A.U("S\u1eeda l\u1ea1i r\u1ed3i b\u1ea5m Ki\u1ec3m tra l\u1ea7n n\u1eefa nh\xe9.",j,j,j,j,A.aQ(j,j,p?m:q,j,j,j,j,j,j,j,j,13,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j)],o))}if(e){u=k.f
n=u?C.js:D.Sd
if(u)t=h.b
else if(s)t=h.y
t=A.eC(n,t,j,20)
s=u?"Ch\xednh x\xe1c!":"\u0110\xe1p \xe1n:"
t=A.bR(A.b([t,C.oD,A.U(s,j,j,j,j,A.aQ(j,j,u?h.b:m,j,j,j,j,j,j,j,j,j,j,j,C.a5,j,j,!0,j,j,j,j,j,j,j,j),j,j)],o),C.t,j,C.j,C.l,0)
s=A.b([A.U(g.c,j,j,j,j,A.aQ(j,j,m,j,j,j,j,j,i,C.cp,j,24,j,j,C.ak,j,1.15,!0,j,j,j,j,j,j,j,j),j,j),A.U(g.d,j,j,j,j,A.aQ(j,j,h.b,j,j,j,j,j,"Inter",C.d_,j,15,j,j,C.ak,j,j,!0,j,0.2,j,j,j,j,j,j),j,j)],o)
u=g.e
if(u.length!==0)s.push(A.U(u,j,j,j,j,A.aQ(j,j,p?m:q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j))
u=A.b([A.cZ(A.bm(s,C.F,C.j,C.l),1,j)],o)
s=g.r
if(s!=null&&!f)u.push(A.kG(j,24,j,s))
C.b.B(r,A.b([C.b2,t,C.ef,A.bR(u,C.F,j,C.j,C.l,0)],o))}return A.bS(j,A.bm(r,C.F,C.j,C.l),C.m,j,j,new A.b8(d,j,v,w,j,j,C.w),j,j,j,j,C.dR,j,j,1/0)}}
B.aax.prototype={
F(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=A.B(d).ax,i=A.b([],x.k)
for(w=this.c,v=w.length,u=x.N,t=j.rx,s=j.k3,r=j.fy,q=j.b,p=t==null,o=0;o<w.length;w.length===v||(0,A.x)(w),++o){n=w[o]
m=n.b
l=n.a
if(m===D.eW)l=C.b.hW(A.bf(new A.iu(l).gE(0),"\uff3f",!1,u))
A:{if(D.tT===m){m=new A.F(!0,q,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
break A}if(D.tU===m||D.eX===m){m=new A.F(!0,r,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p1,r,k,k,k,k,k,k,k)
break A}if(D.eW===m){m=(p?s:t).aY(0.7)
m=new A.F(!0,m,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
break A}m=k}i.push(new A.hu(l,k,k,C.aS,k,k,k,k,k,k,m))}return A.bkB(A.eR(i,k,k,k,k,k,k,k,k,k,k),A.aQ(k,k,s,k,k,k,k,k,"Noto Serif SC",C.cp,k,22,k,k,C.ak,k,1.15,!0,k,k,k,k,k,k,k,k),k)}}
B.an8.prototype={
$2$1(d,e,f){return A.bfS(d,null,!0,null,null,e,f)},
$1(d){return this.$2$1(d,x.O,x.C)}}
var z=a.updateTypes(["~()","xe()","Ck(cy)","O<lL>()","Cn(cy)","Di(cy)","~(d)","hU()","hU(u,by)","hU(lL)","Cm(Z<d,@>)","Cl(Z<d,@>)","tN()","d(k)"])
B.aQB.prototype={
$1(d){var w,v
if(d.q(0,C.C)){w=this.a
if(w.fy===D.fC)w=null
else{w=w.goj().k3
w=A.aY(31,w.I()>>>16&255,w.I()>>>8&255,w.I()&255)}return w}w=this.a
if(w.fy===D.fC)w=null
else{w=w.goj()
v=w.p3
w=v==null?w.k2:v}return w},
$S:45}
B.aXs.prototype={
$1(d){var w,v
if(d.q(0,C.ay)&&d.q(0,C.C)){w=this.a.gtf().k3
return A.aY(31,w.I()>>>16&255,w.I()>>>8&255,w.I()&255)}if(d.q(0,C.C))return null
if(d.q(0,C.ay)){w=this.a.gtf()
v=w.Q
return v==null?w.y:v}return null},
$S:45}
B.aqt.prototype={
$0(){return B.bh_(this.a)},
$S:z+1}
B.b8d.prototype={
$1(d){return new B.Ck(!0)},
$S:z+2}
B.b8e.prototype={
$1(d){return new B.Cn(d.ck($.wr(),x.o))},
$S:z+4}
B.b8r.prototype={
$1(d){var w=x.S
return new B.Di(d.ck($.wr(),x.o),d.ck($.bsW(),x.z),d.ck($.bsX(),x.E),d.ck(A.qS($.mD(),new B.b8q(),x.L,w),w))},
$S:z+5}
B.b8q.prototype={
$1(d){return d.a},
$S:74}
B.aSN.prototype={
$0(){return D.a4B},
$S:z+7}
B.aSM.prototype={
$2(d,e){var w=null
return K.F0(C.d0,"assets/images/gen_header_chat.svg",A.b([new I.F1(M.u0,"Kh\xf4ng ph\u1ea3n h\u1ed3i \u0111\u01b0\u1ee3c",A.j(d),w,w),new G.re(new B.Gi(this.a.gML(),w),w)],x.p),y.b,"Chat")},
$S:z+8}
B.aSL.prototype={
$1(d){var w=null,v=this.a,u=A.b([new A.F_(new A.Pe(new B.aSK(v,d),d.a.length,!0,!0,!0,0,A.boX(),w),w)],x.p)
if(d.b)u.push(D.a4G)
u.push(new G.re(new B.Gi(v.gML(),w),w))
return K.F0(C.d0,"assets/images/gen_header_chat.svg",u,"GenUI local tr\u01b0\u1edbc, LLM remote c\xf3 th\u1ec3 c\u1eafm sau.","Chat")},
$S:z+9}
B.aSK.prototype={
$2(d,e){var w,v=null,u=this.a
u=A.eK(new B.ad8(this.b.a[e],u.gML(),v),!A.jO(u.gcj()),v,v)
w=A.bO(0,18e4,0,0)
return A.kl(A.hK(u,v,A.bO(0,C.e.aE(e*40*1000),0,0),w),0.03,v,A.bO(0,22e4,0,0),0)},
$S:954}
B.b_y.prototype={
$0(){A.ec()
var w=this.a
w.T(new B.b_x(w,this.b))},
$S:0}
B.b_x.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.b2h.prototype={
$0(){var w=this.a
w.T(new B.b2g(w,this.b))},
$S:0}
B.b2g.prototype={
$0(){var w=this.a
w.gMw().push(C.b.hz(w.e,this.b))},
$S:0}
B.b2i.prototype={
$0(){A.ec()
var w=this.a
w.T(new B.b2f(w,this.b))},
$S:0}
B.b2f.prototype={
$0(){var w=this.a,v=this.b
C.b.G(w.gMw(),v)
w.e.push(v)},
$S:0}
B.b2j.prototype={
$0(){A.ec()
var w=this.a
w.T(new B.b2e(w))},
$S:0}
B.b2e.prototype={
$0(){return this.a.f=!0},
$S:0}
B.b3s.prototype={
$0(){return this.a.d.$1(this.b.b)},
$S:0}
B.aTm.prototype={
$0(){var w=this.a,v=w.gN7(),u=v.a.a
v.t8(C.G6)
w.a.aTL(u)},
$S:0}
B.b4E.prototype={
$1(d){var w=null,v=A.eK(A.bS(w,w,C.m,w,w,new A.b8(this.a.b,w,w,w,w,w,C.cj),w,7,w,w,w,w,w,7),w,new B.b4F(),w),u=A.bO(0,38e4,0,0)
return A.biU(v,0,D.P1,A.bO(0,C.e.aE(d*130*1000),0,0),u,-5)},
$S:221}
B.b4F.prototype={
$1(d){return d.Vx(!0)},
$S:277}
B.aUE.prototype={
$0(){var w,v=this,u=v.a
u.e=!0
w=v.b
u.f=w
u.x=w?D.uI:B.bIE(v.c,v.d)},
$S:0}
B.aUF.prototype={
$0(){var w=this.a
w.r=w.w=!0},
$S:0}
B.aUH.prototype={
$1(d){return this.a.a07()},
$S:33}
B.aUI.prototype={
$0(){A.ec()
var w=this.a
w.T(new B.aUG(w))},
$S:0}
B.aUG.prototype={
$0(){return this.a.r=!0},
$S:0};(function installTearOffs(){var w=a._static_1,v=a._static_0,u=a._instance_0u,t=a._instance_1u
w(B,"bID","bvj",10)
w(B,"bIC","bvi",11)
v(B,"bI0","bwH",12)
u(B.tN.prototype,"glt","d1",3)
t(B.Rz.prototype,"gML","aqw",6)
var s
u(s=B.S6.prototype,"gasj","a07",0)
u(s,"gaEy","aEz",0)
w(B,"bo3","bBm",13)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.rI,[B.aSS,B.CS,B.a_r,B.Z7])
w(A.a3,[B.XZ,B.a1z,B.ad8,B.a8Y,B.aiI,B.a8K,B.aiS,B.abR,B.ahf,B.Aq,B.aax])
w(A.wS,[B.aQA,B.aXr])
w(A.hg,[B.aQB,B.aXs,B.b8d,B.b8e,B.b8r,B.b8q,B.aSL,B.b4E,B.b4F,B.aUH])
w(A.u,[B.Ck,B.xe,B.Cm,B.Cl,B.a_q,B.n0,B.lL,B.Cn,B.Di,B.xf,B.xE,B.lK,B.mZ,B.an8])
w(A.mM,[B.aqt,B.aSN,B.b_y,B.b_x,B.b2h,B.b2g,B.b2i,B.b2f,B.b2j,B.b2e,B.b3s,B.aTm,B.aUE,B.aUF,B.aUI,B.aUG])
v(B.tN,A.wH)
w(B.lK,[B.lE,B.FX,B.Lh,B.No,B.ON,B.Kf,B.zG])
w(A.oe,[B.tk,B.Gi])
w(A.pS,[B.Rz,B.a9B])
w(A.mN,[B.aSM,B.aSK])
w(A.a_,[B.TO,B.V_,B.Kg])
w(A.a9,[B.aex,B.agB,B.S6])
v(B.air,A.of)})()
A.mr(b.typeUniverse,JSON.parse('{"XZ":{"a3":[],"c":[]},"a1z":{"a3":[],"c":[]},"tN":{"wH":["lL"]},"Di":{"bhL":[]},"lE":{"lK":[]},"FX":{"lK":[]},"Lh":{"lK":[]},"No":{"lK":[]},"ON":{"lK":[]},"Kf":{"lK":[]},"zG":{"lK":[]},"TO":{"a_":[],"c":[]},"V_":{"a_":[],"c":[]},"Gi":{"a_":[],"c":[]},"tk":{"a_":[],"c":[]},"Rz":{"a9":["tk"]},"ad8":{"a3":[],"c":[]},"a8Y":{"a3":[],"c":[]},"aiI":{"a3":[],"c":[]},"a8K":{"a3":[],"c":[]},"aiS":{"a3":[],"c":[]},"abR":{"a3":[],"c":[]},"aex":{"a9":["TO"]},"agB":{"a9":["V_"]},"ahf":{"a3":[],"c":[]},"a9B":{"a9":["Gi"]},"air":{"a_":[],"c":[]},"Aq":{"a3":[],"c":[]},"Kg":{"a_":[],"c":[]},"S6":{"a9":["Kg"]},"aax":{"a3":[],"c":[]}}'))
var y={b:"GenUI local v\u1edbi t\u1eeb v\u1ef1ng, ng\u1eef ph\xe1p v\xe0 quiz."}
var x=(function rtii(){var w=A.Y
return{O:w("wH<@>"),J:w("bx<lL>"),w:w("b4<d,d>"),y:w("xe"),z:w("Ck"),E:w("Cn"),i:w("tN"),B:w("xE"),M:w("bhL"),s:w("lL"),X:w("v<a_q>"),V:w("v<xf>"),A:w("v<lK>"),r:w("v<xE>"),W:w("v<mZ>"),R:w("v<n0>"),k:w("v<fG>"),m:w("v<Z<d,d>>"),T:w("v<d>"),p:w("v<c>"),o:w("qs"),g:w("z<xf>"),U:w("z<lK>"),j:w("z<@>"),I:w("z<k>"),Q:w("Z<d,xe>"),P:w("Z<d,@>"),K:w("iu"),N:w("d"),L:w("iy"),b:w("bW<X?>"),C:w("@"),S:w("k"),a:w("xf?"),Y:w("z<@>?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Jl=new A.ag(0,1/0,52,1/0)
D.K4=new B.an8()
D.LE=new B.lE("M\xecnh c\xf3 th\u1ec3 tra t\u1eeb, gi\u1ea3i th\xedch ng\u1eef ph\xe1p, t\u1ea1o quiz ho\u1eb7c g\u1ee3i \xfd c\xe2u h\u1ed9i tho\u1ea1i t\u1eeb d\u1eef li\u1ec7u local.")
D.LF=new B.lE("Ch\xe0o b\u1ea1n, m\xecnh l\xe0 Chat GenUI local. M\xecnh c\xf3 th\u1ec3 tra t\u1eeb, gi\u1ea3i th\xedch ng\u1eef ph\xe1p, t\u1ea1o quiz v\xe0 luy\u1ec7n nghe-vi\u1ebft ch\u1eef H\xe1n t\u1eeb d\u1eef li\u1ec7u offline.")
D.r5=new B.Z7(0,"user")
D.r6=new B.Z7(1,"assistant")
D.P1=new A.eA(0.455,0.03,0.515,0.955)
D.j8=new B.a_r(0,"listen")
D.mb=new B.a_r(1,"readVi")
D.Qt=new A.al(0,0,8,7)
D.QB=new A.al(10,10,10,10)
D.QX=new A.al(20,6,20,12)
D.QZ=new A.al(20,8,20,18)
D.R6=new A.al(64,6,20,10)
D.n9=new B.mZ("H\u1ed9i tho\u1ea1i","Cho m\xecnh h\u1ed9i tho\u1ea1i m\u1eabu")
D.tO=new B.mZ("Luy\u1ec7n nghe","Luy\u1ec7n nghe ch\xe9p ch\xednh t\u1ea3")
D.na=new B.mZ("T\u1ea1o quiz","T\u1ea1o quiz HSK 2")
D.tP=new B.mZ("Luy\u1ec7n d\u1ecbch","Luy\u1ec7n d\u1ecbch Vi\u1ec7t-Trung")
D.tT=new B.CS(0,"match")
D.tU=new B.CS(1,"wrong")
D.eW=new B.CS(2,"missing")
D.eX=new B.CS(3,"extra")
D.S2=new A.bD(62876,"MaterialIcons",null,!1)
D.Sa=new A.bD(63457,"MaterialIcons",null,!1)
D.Sd=new A.bD(63573,"MaterialIcons",null,!1)
D.SI=new A.fY(E.tZ,18,null,null,null)
D.Sn=new A.bD(983367,"MaterialIcons",null,!0)
D.SJ=new A.fY(D.Sn,null,null,null,null)
D.QJ=new A.al(16,14,10,14)
D.T9=new F.D7(null,null,null,null,null,null,null,null,null,null,"H\u1ecfi v\u1ec1 t\u1eeb v\u1ef1ng, ng\u1eef ph\xe1p ho\u1eb7c quiz...",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,D.QJ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,H.pU,!0,null,null,null,null)
D.TN=new A.LS(null)
D.RG=new B.mZ("Tra t\u1eeb","Tra t\u1eeb \u5b66\u4e60")
D.UC=w([D.RG,D.na,D.n9,D.tO,D.tP],x.W)
D.a_9={id:0,title:1,titleZh:2,titlePinyin:3,description:4,level:5,category:6,icon:7,lines:8,vocabulary:9,speakers:10,relatedGrammar:11,cultureTip:12}
D.f9={speaker:0,zh:1,pinyin:2,vi:3}
D.Zh=new A.b4(D.f9,["A","\u8001\u5e08\uff0c\u867d\u7136\u6211\u6bcf\u5929\u5b66\u4e60\uff0c\u4f46\u662f\u8fdb\u6b65\u4e0d\u592a\u5feb\u3002","L\u01ceosh\u012b, su\u012br\xe1n w\u01d2 m\u011biti\u0101n xu\xe9x\xed, d\xe0nsh\xec j\xecnb\xf9 b\xfa t\xe0i ku\xe0i.","C\xf4 \u01a1i, tuy ng\xe0y n\xe0o em c\u0169ng h\u1ecdc, nh\u01b0ng ti\u1ebfn b\u1ed9 kh\xf4ng nhanh l\u1eafm."],x.w)
D.Zj=new A.b4(D.f9,["B","\u522b\u7740\u6025\uff0c\u53ea\u8981\u4f60\u575a\u6301\u7ec3\u4e60\uff0c\u5c31\u4f1a\u8d8a\u6765\u8d8a\u597d\u3002","Bi\xe9 zh\xe1oj\xed, zh\u01d0y\xe0o n\u01d0 ji\u0101nch\xed li\xe0nx\xed, ji\xf9 hu\xec yu\xe8 l\xe1i yu\xe8 h\u01ceo.","\u0110\u1eebng s\u1ed1t ru\u1ed9t, ch\u1ec9 c\u1ea7n em ki\xean tr\xec luy\u1ec7n t\u1eadp th\xec s\u1ebd ng\xe0y c\xe0ng t\u1ed1t."],x.w)
D.Zg=new A.b4(D.f9,["A","\u5982\u679c\u6211\u5de5\u4f5c\u5f88\u5fd9\uff0c\u8fd8\u5e94\u8be5\u6bcf\u5929\u590d\u4e60\u5417\uff1f","R\xfagu\u01d2 w\u01d2 g\u014dngzu\xf2 h\u011bn m\xe1ng, h\xe1i y\u012bngg\u0101i m\u011biti\u0101n f\xf9x\xed ma?","N\u1ebfu c\xf4ng vi\u1ec7c b\u1eadn, em v\u1eabn n\xean \xf4n m\u1ed7i ng\xe0y kh\xf4ng?"],x.w)
D.Ze=new A.b4(D.f9,["B","\u5f53\u7136\u3002\u53ea\u6709\u628a\u4eca\u5929\u7684\u751f\u8bcd\u590d\u4e60\u5b8c\uff0c\u660e\u5929\u7684\u8bfe\u624d\u4f1a\u8f7b\u677e\u3002","D\u0101ngr\xe1n. Zh\u01d0y\u01d2u b\u01ce j\u012bnti\u0101n de sh\u0113ngc\xed f\xf9x\xed w\xe1n, m\xedngti\u0101n de k\xe8 c\xe1i hu\xec q\u012bngs\u014dng.","T\u1ea5t nhi\xean. Ch\u1ec9 khi \xf4n xong t\u1eeb m\u1edbi h\xf4m nay th\xec b\xe0i ng\xe0y mai m\u1edbi nh\u1eb9 h\u01a1n."],x.w)
D.Zi=new A.b4(D.f9,["A","\u90a3\u6211\u5148\u542c\u4e00\u904d\u5bf9\u8bdd\uff0c\u518d\u505a\u7ec3\u4e60\u3002","N\xe0 w\u01d2 xi\u0101n t\u012bng y\xed bi\xe0n du\xechu\xe0, z\xe0i zu\xf2 li\xe0nx\xed.","V\u1eady em nghe h\u1ed9i tho\u1ea1i m\u1ed9t l\u01b0\u1ee3t tr\u01b0\u1edbc, r\u1ed3i l\xe0m b\xe0i luy\u1ec7n t\u1eadp."],x.w)
D.Zf=new A.b4(D.f9,["B","\u5f88\u597d\uff0c\u867d\u7136\u65f6\u95f4\u4e0d\u591a\uff0c\u4f46\u662f\u65b9\u6cd5\u5bf9\u4e86\u5c31\u6709\u6548\u3002","H\u011bn h\u01ceo, su\u012br\xe1n sh\xedji\u0101n b\xf9 du\u014d, d\xe0nsh\xec f\u0101ngf\u01ce du\xec le ji\xf9 y\u01d2uxi\xe0o.","R\u1ea5t t\u1ed1t, tuy th\u1eddi gian kh\xf4ng nhi\u1ec1u nh\u01b0ng \u0111\xfang ph\u01b0\u01a1ng ph\xe1p th\xec hi\u1ec7u qu\u1ea3."],x.w)
D.W0=w([D.Zh,D.Zj,D.Zg,D.Ze,D.Zi,D.Zf],x.m)
D.f8={zh:0,pinyin:1,vi:2,pos:3}
D.YU=new A.b4(D.f8,["\u8fdb\u6b65","j\xecnb\xf9","ti\u1ebfn b\u1ed9","\u0111\u1ed9ng t\u1eeb/danh t\u1eeb"],x.w)
D.YW=new A.b4(D.f8,["\u575a\u6301","ji\u0101nch\xed","ki\xean tr\xec","\u0111\u1ed9ng t\u1eeb"],x.w)
D.YS=new A.b4(D.f8,["\u590d\u4e60","f\xf9x\xed","\xf4n t\u1eadp","\u0111\u1ed9ng t\u1eeb"],x.w)
D.YV=new A.b4(D.f8,["\u751f\u8bcd","sh\u0113ngc\xed","t\u1eeb m\u1edbi","danh t\u1eeb"],x.w)
D.YT=new A.b4(D.f8,["\u8f7b\u677e","q\u012bngs\u014dng","nh\u1eb9 nh\xe0ng","t\xednh t\u1eeb"],x.w)
D.YR=new A.b4(D.f8,["\u65b9\u6cd5","f\u0101ngf\u01ce","ph\u01b0\u01a1ng ph\xe1p","danh t\u1eeb"],x.w)
D.WI=w([D.YU,D.YW,D.YS,D.YV,D.YT,D.YR],x.m)
D.Ag={code:0,nameVi:1,role:2,avatarColor:3}
D.Zz=new A.b4(D.Ag,["A","Vy","Ng\u01b0\u1eddi h\u1ecdc","#5E35B1"],x.w)
D.Zy=new A.b4(D.Ag,["B","C\xf4 Mai","C\u1ed1 v\u1ea5n HSK3","#00897B"],x.w)
D.Vs=w([D.Zz,D.Zy],x.m)
D.VB=w(["g_suiran_danshi","g_zhiyao_jiu","g_zhiyou_cai"],x.T)
D.Z9=new A.b4(D.a_9,["conv_hsk3_conditions_01","L\u1eadp k\u1ebf ho\u1ea1ch \xf4n thi","\u51c6\u5907\u8003\u8bd5\u8ba1\u5212","Zh\u01d4nb\xe8i k\u01ceosh\xec j\xechu\xe0","Nh\u1edd c\u1ed1 v\u1ea5n HSK3 \u0111i\u1ec1u ch\u1ec9nh c\xe1ch \xf4n t\u1eadp khi th\u1eddi gian h\u1ea1n ch\u1ebf.",3,"study","\ud83d\udcda",D.W0,D.WI,D.Vs,D.VB,"\u1ede l\u1edbp ti\u1ebfng Trung, ng\u01b0\u1eddi h\u1ecdc th\u01b0\u1eddng g\u1ecdi gi\xe1o vi\xean l\xe0 \u8001\u5e08 \u0111\u1ec3 gi\u1eef s\u1eafc th\xe1i l\u1ecbch s\u1ef1, k\u1ec3 c\u1ea3 khi trao \u0111\u1ed5i ri\xeang v\u1ec1 k\u1ebf ho\u1ea1ch h\u1ecdc."],A.Y("b4<d,u>"))
D.Vr=w([D.Z9],A.Y("v<Z<d,u>>"))
D.Wk=w([],x.V)
D.Wi=w([],x.A)
D.uI=w([],x.R)
D.a_d={"\u3002":0,"\u3001":1,"\u2026":2,"\xb7":3,"\u2014":4,"\uff5e":5,"\u2018":6,"\u2019":7,"\u201c":8,"\u201d":9,"\u300c":10,"\u300d":11,"\u300e":12,"\u300f":13,"\u300a":14,"\u300b":15,"\u3010":16,"\u3011":17,",":18,".":19,"!":20,"?":21,";":22,":":23,"'":24,'"':25,"(":26,")":27,"-":28,"~":29}
D.a3e=new A.fo(D.a_d,30,A.Y("fo<d>"))
D.a4o=new A.N(1/0,44)
D.a4D=new I.F1(C.u1,"\u0110ang m\u1edf chat","Chu\u1ea9n b\u1ecb GenUI local...","assets/images/gen_chat_empty.svg",null)
D.Xc=w([D.a4D],x.p)
D.a4B=new G.hU("Chat",y.b,"assets/images/gen_header_chat.svg",C.d0,D.Xc,null)
D.QW=new A.al(20,4,20,12)
D.aeZ=new B.air(null)
D.a0l=new A.aT(D.QW,D.aeZ,null)
D.a4G=new G.re(D.a0l,null)
D.RF=new B.mZ("Ng\u1eef ph\xe1p","Gi\u1ea3i th\xedch c\xe2u v\u1edbi \u4e86")
D.X5=w([D.na,D.RF,D.n9],x.W)
D.a5d=new B.zG(D.X5)
D.aav=new A.ds("G\u1ee3i \xfd pinyin",null,null,null,null,null,null,null,null,null)
D.aaH=new A.ds("Hi\u1ec7n \u0111\xe1p \xe1n",null,null,null,null,null,null,null,null,null)
D.fC=new B.aSS(0,"flat")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"bRS","bsW",()=>A.qR(new B.b8d(),x.z))
w($,"bRY","bfk",()=>D.K4.$2$1(B.bI0(),x.i,x.s))
w($,"bRT","bsX",()=>A.qR(new B.b8e(),x.E))
w($,"bRZ","bsZ",()=>A.qR(new B.b8r(),x.M))})()};
(a=>{a["Jr/xDBZaT5Nae/H2eNvPyGfZ6nM="]=a.current})($__dart_deferred_initializers__);