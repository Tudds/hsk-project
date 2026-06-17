((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,E,B={
bfm(d,e,f){return new B.XQ(d,e,f,null)},
aSA:function aSA(d,e){this.a=d
this.b=e},
XQ:function XQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.r=f
_.a=g},
aQi:function aQi(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5){var _=this
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
aQj:function aQj(d){this.a=d},
a1q:function a1q(d,e,f){this.d=d
this.z=e
this.a=f},
aX9:function aX9(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5){var _=this
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
aXa:function aXa(d){this.a=d},
Cg:function Cg(d){this.b=d
this.c=null},
aql:function aql(d){this.a=d},
bgF(d){var w,v,u,t,s,r,q,p,o="cultureTip",n=x.Y,m=n.a(d.i(0,"speakers"))
if(m==null)m=C.p
w=x.P
m=J.c6(m,w)
v=A.l(m).h("L<R.E,Ch>")
m=A.N(new A.L(m,B.bIb(),v),v.h("a8.E"))
m.$flags=1
m=n.a(d.i(0,"lines"))
u=J.c6(m==null?C.p:m,w)
A.aj(d.i(0,"id"))
m=A.fO(d.i(0,"level"))
m=m==null?null:C.d.dD(m)
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
s.push(new B.a_i(p,q==null?"":q))}q=A.ad(d.i(0,o))
q=q==null?null:C.c.dl(q).length===0
if(q===!1)A.aj(d.i(0,o))
q=n.a(d.i(0,"relatedGrammar"))
if(q==null)q=C.p
A.dT(q,!0,x.N)
n=n.a(d.i(0,"vocabulary"))
n=J.c6(n==null?C.p:n,w)
w=A.l(n).h("L<R.E,Ci>")
n=A.N(new A.L(n,B.bIc(),w),w.h("a8.E"))
n.$flags=1
return new B.x6(m,v,t,s,n)},
buY(d){var w,v,u=A.ad(d.i(0,"zh"))
if(u==null)u=""
w=A.ad(d.i(0,"pinyin"))
if(w==null)w=""
v=A.ad(d.i(0,"vi"))
if(v==null)v=""
A.ad(d.i(0,"pos"))
return new B.Ci(u,w,v)},
buX(d){A.ad(d.i(0,"code"))
A.ad(d.i(0,"nameVi"))
A.ad(d.i(0,"role"))
B.bJM(A.ad(d.i(0,"avatarColor")))
return new B.Ch()},
bJM(d){var w,v,u=null
if(d==null)return u
w=C.c.dl(d)
if(w.length===0)return u
if(C.c.b1(w,"#"))w=C.c.bG(w,1)
if(w.length===6)w="FF"+w
if(w.length!==8)return u
v=A.uH(w,16)
if(v==null)return u
return A.bC(v)},
x6:function x6(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.f=f
_.y=g
_.as=h},
Ci:function Ci(d,e,f){this.a=d
this.b=e
this.c=f},
Ch:function Ch(){},
a_i:function a_i(d,e){this.c=d
this.e=e},
b7T:function b7T(){},
bog(d){var w,v,u,t=new A.cY("")
for(w=new A.z4(d);w.t();){v=w.d
u=A.dK(v>=65281&&v<=65374?v-65248:v)
if(C.c.dl(u).length===0)continue
if(D.a3g.q(0,u))continue
t.a+=u}w=t.a
return w.charCodeAt(0)==0?w:w},
bId(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=x.K.h("z.E"),a2=A.iQ(new A.it(a3),B.bnI(),a1,a0)
a2=A.N(a2,A.l(a2).h("z.E"))
a2.$flags=1
w=a2
a0=A.iQ(new A.it(a4),B.bnI(),a1,a0)
a0=A.N(a0,A.l(a0).h("z.E"))
a0.$flags=1
v=a0
u=w.length+1
t=J.lO(u,x.I)
for(a0=x.S,s=0;s<u;++s)t[s]=A.be(v.length+1,0,!1,a0)
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
if(a1===a2){n.push(new B.mX(a2,D.u4));++r;++q}else{m=r+1
p=q+1
if(t[m][q]>=t[r][p]){n.push(new B.mX(a1,D.eX))
r=m}else{n.push(new B.mX(a2,D.eY))
q=p}}}for(;r<w.length;r=m){m=r+1
n.push(new B.mX(w[r],D.eX))}for(;q<v.length;q=p){p=q+1
n.push(new B.mX(v[q],D.eY))}l=A.b([],a0)
for(k=0;a1=n.length,k<a1;++k){j=n[k]
i=k+1
h=i<a1?n[i]:null
if(h!=null){a1=j.b
if(!(a1===D.eX&&h.b===D.eY)){a1=a1===D.eY&&h.b===D.eX
g=a1}else g=!0}else g=!1
if(g){l.push(new B.mX((j.b===D.eY?j:h).a,D.u5))
k=i}else l.push(j)}f=A.b([],a0)
for(a0=l.length,e=0;e<l.length;l.length===a0||(0,A.x)(l),++e){d=l[e]
if(f.length!==0&&C.b.ga3(f).b===d.b)f[f.length-1]=new B.mX(C.b.ga3(f).a+d.a,d.b)
else f.push(d)}return f},
CN:function CN(d,e){this.a=d
this.b=e},
mX:function mX(d,e){this.a=d
this.b=e},
bwl(){return new B.tK()},
bwm(d){var w,v,u,t
switch(d.a){case 0:w=D.u_
break
case 3:w=D.u0
break
case 2:w=D.nd
break
case 1:w=D.ne
break
default:w=null}v=A.b([w],x.W)
for(u=0;u<5;++u){t=D.UC[u]
if(t!==w)v.push(t)}return v},
lL:function lL(d,e){this.a=d
this.b=e},
tK:function tK(){this.x=0
this.b=null},
Cj:function Cj(d){this.b=d},
b7U:function b7U(){},
De:function De(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b85:function b85(){},
b84:function b84(){},
a_j:function a_j(d,e){this.a=d
this.b=e},
x7:function x7(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
Z_:function Z_(d,e){this.a=d
this.b=e},
xx:function xx(d,e,f){this.b=d
this.c=e
this.d=f},
lK:function lK(){},
lD:function lD(d){this.a=d},
FQ:function FQ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
L8:function L8(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
Nf:function Nf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
OD:function OD(d,e,f){this.a=d
this.b=e
this.c=f},
K5:function K5(d){this.a=d},
zA:function zA(d){this.a=d},
mV:function mV(d,e){this.a=d
this.b=e},
btV(){return new B.ti(null)},
ti:function ti(d){this.a=d},
Rq:function Rq(){this.d=$
this.c=this.a=null},
aSv:function aSv(){},
aSu:function aSu(d){this.a=d},
aSt:function aSt(d){this.a=d},
aSs:function aSs(d,e){this.a=d
this.b=e},
acZ:function acZ(d,e,f){this.c=d
this.d=e
this.a=f},
a8Q:function a8Q(d,e,f){this.c=d
this.d=e
this.a=f},
aiC:function aiC(d,e){this.c=d
this.a=e},
a8C:function a8C(d,e){this.c=d
this.a=e},
aiM:function aiM(d,e){this.c=d
this.a=e},
abH:function abH(d,e){this.c=d
this.a=e},
TG:function TG(d,e){this.c=d
this.a=e},
aen:function aen(){this.c=this.a=this.d=null},
b_g:function b_g(d,e){this.a=d
this.b=e},
b_f:function b_f(d,e){this.a=d
this.b=e},
UQ:function UQ(d,e){this.c=d
this.a=e},
ags:function ags(d){var _=this
_.d=$
_.e=d
_.f=!1
_.c=_.a=null},
b2_:function b2_(d,e){this.a=d
this.b=e},
b1Z:function b1Z(d,e){this.a=d
this.b=e},
b20:function b20(d,e){this.a=d
this.b=e},
b1Y:function b1Y(d,e){this.a=d
this.b=e},
b21:function b21(d){this.a=d},
b1X:function b1X(d){this.a=d},
ah7:function ah7(d,e,f){this.c=d
this.d=e
this.a=f},
b3a:function b3a(d,e){this.a=d
this.b=e},
Ga:function Ga(d,e){this.d=d
this.a=e},
a9r:function a9r(){var _=this
_.d=_.w=$
_.c=_.a=null},
aT4:function aT4(d){this.a=d},
ail:function ail(d){this.a=d},
b4o:function b4o(d){this.a=d},
b4p:function b4p(){},
Al:function Al(d,e){this.c=d
this.a=e},
K6:function K6(d,e){this.c=d
this.a=e},
RZ:function RZ(d){var _=this
_.d=$
_.w=_.r=_.f=_.e=!1
_.x=d
_.c=_.a=null},
aUm:function aUm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aUn:function aUn(d){this.a=d},
aUp:function aUp(d){this.a=d},
aUq:function aUq(d){this.a=d},
aUo:function aUo(d){this.a=d},
aan:function aan(d,e){this.c=d
this.a=e},
an0:function an0(){},
bAY(d){return A.dK(d)}},D,I,M,G,F,H,K
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
B.aSA.prototype={
J(){return"_ChipVariant."+this.b}}
B.XQ.prototype={
F(d){var w,v,u=null
A.A(d)
w=this.r
v=w!=null
return A.a3I(!1,this.c,C.dg,u,u,u,u,C.m,u,new B.aQi(d,v,D.fE,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,C.hN,u,u,u,u,u,u,u,u),u,u,u,u,u,u,u,u,v,this.d,u,u,u,u,u,w,u,u,u,!1,u,u,u,u,u,u,u,!0,u,u)}}
B.aQi.prototype={
goj(){var w,v=this,u=v.go
if(u===$){w=A.A(v.fr)
v.go!==$&&A.ay()
u=v.go=w.ax}return u},
gdh(){if(this.fy===D.fE)var w=0
else w=this.fx?1:0
return w},
guB(){return 1},
ghf(){var w,v=this,u=v.id
if(u===$){w=A.A(v.fr)
v.id!==$&&A.ay()
u=v.id=w.ok}w=u.as
if(w==null)w=null
else w=w.bm(v.fx?v.goj().k3:v.goj().k3)
return w},
gbL(){return new A.bW(new B.aQj(this),x.b)},
gbj(){if(this.fy===D.fE)var w=C.D
else{w=this.goj().x1
if(w==null)w=C.n}return w},
gbD(){return C.D},
goO(){return null},
goS(){return null},
geZ(){var w,v,u=this
if(u.fy===D.fE)if(u.fx){w=u.goj()
v=w.to
if(v==null){v=w.u
w=v==null?w.k3:v}else w=v
w=new A.ba(w,1,C.z,-1)}else{w=u.goj().k3
w=new A.ba(A.aX(31,w.I()>>>16&255,w.I()>>>8&255,w.I()&255),1,C.z,-1)}else w=C.lF
return w},
gfp(){var w=null
return new A.dS(18,w,w,w,w,this.fx?this.goj().b:this.goj().k3,w,w,w)},
gce(){return C.dk},
gp7(){var w=this.ghf(),v=w==null?null:w.r
if(v==null)v=14
w=A.bH(this.fr,C.aY)
w=w==null?null:w.gcL()
w=A.mO(C.dV,C.co,A.E((w==null?C.as:w).aT(v)/14-1,0,1))
w.toString
return w}}
B.a1q.prototype={
F(d){var w,v,u=null
A.A(d)
A.A(d)
w=this.z
v=w!=null
return A.a3I(!1,u,C.dg,u,u,u,u,C.m,u,new B.aX9(d,!0,!1,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,C.hN,u,u,u,0,u,u,u,u),u,C.um,u,u,u,u,u,u,v,this.d,u,u,u,u,w,u,u,u,u,!1,u,u,u,u,u,u,u,!0,u,u)}}
B.aX9.prototype={
gtc(){var w,v=this,u=v.go
if(u===$){w=A.A(v.fr)
v.go!==$&&A.ay()
u=v.go=w.ax}return u},
ghf(){var w,v,u,t=this,s=t.id
if(s===$){w=A.A(t.fr)
t.id!==$&&A.ay()
s=t.id=w.ok}w=s.as
if(w==null)w=null
else{v=t.gtc()
u=v.rx
v=u==null?v.k3:u
v=w.bm(v)
w=v}return w},
gbL(){return new A.bW(new B.aXa(this),x.b)},
gbj(){return C.D},
gbD(){return C.D},
goO(){var w=this.gtc(),v=w.rx
w=v==null?w.k3:v
return w},
goS(){var w=this.gtc(),v=w.rx
w=v==null?w.k3:v
return w},
geZ(){var w=this.gtc(),v=w.to
if(v==null){v=w.u
w=v==null?w.k3:v}else w=v
w=new A.ba(w,1,C.z,-1)
return w},
gfp(){var w=null,v=this.gtc(),u=v.rx
v=u==null?v.k3:u
return new A.dS(18,w,w,w,w,v,w,w,w)},
gce(){return C.dk},
gp7(){var w=this.ghf(),v=w==null?null:w.r
if(v==null)v=14
w=A.bH(this.fr,C.aY)
w=w==null?null:w.gcL()
w=A.mO(C.dV,C.co,A.E((w==null?C.as:w).aT(v)/14-1,0,1))
w.toString
return w}}
B.Cg.prototype={
J7(){var w=0,v=A.q(x.Q),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$J7=A.r(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:i=t.c
if(i!=null){u=i
w=1
break}s=$.lw()
h=J
g=x.j
f=C.P
w=3
return A.i(s.nK("assets/data/conversation.json"),$async$J7)
case 3:r=h.c6(g.a(f.ht(e,null)),x.P)
q=A.w(x.N,x.y)
for(p=A.l(r),o=new A.aN(r,r.gE(r),p.h("aN<R.E>")),p=p.h("R.E");o.t();){n=o.d
if(n==null)n=p.a(n)
m=n.i(0,"id")
if(typeof m=="string")q.m(0,m,B.bgF(n))}if(t.b)for(l=0;l<1;++l){k=D.Vs[l]
j=k.i(0,"id")
if(typeof j=="string")q.bc(j,new B.aql(k))}u=t.c=q
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$J7,v)}}
B.x6.prototype={}
B.Ci.prototype={}
B.Ch.prototype={}
B.a_i.prototype={}
B.CN.prototype={
J(){return"HanziDiffKind."+this.b}}
B.mX.prototype={
k(d,e){if(e==null)return!1
return e instanceof B.mX&&e.a===this.a&&e.b===this.b},
gp(d){return A.P(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"HanziDiffSegment("+this.b.b+', "'+this.a+'")'}}
B.lL.prototype={}
B.tK.prototype={
d2(){var w=0,v=A.q(x.s),u,t=this,s
var $async$d2=A.r(function(d,e){if(d===1)return A.n(e,v)
for(;;)switch(w){case 0:s=A.jT(t).cu($.mA(),x.L)
t.Oq()
u=new B.lL(A.b([new B.xx(D.ri,"",A.b([D.LK,new B.zA(B.bwm(s.c))],x.A))],x.r),!1)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$d2,v)},
yv(d){return this.ahB(d)},
ahB(d){var w=0,v=A.q(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$yv=A.r(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:f=C.c.dl(d)
if(J.bl(f)===0){w=1
break}k=r.gbN().gn()
w=k==null?3:4
break
case 3:w=5
return A.i(r.d2(),$async$yv)
case 5:k=a1
case 4:r.Oq()
j=k.a
i=x.B
h=A.N(j,i)
h.push(new B.xx(D.rh,f,D.Wo))
q=h
h=q
j=h==null?j:h
h=x.s
r.sbN(A.Bh(new B.lL(j,!0),h))
t=7
w=10
return A.i(A.jT(r).cu($.bsD(),x.M).xV(f),$async$yv)
case 10:p=a1
r.Oq()
o=new B.xx(D.ri,"",p)
j=A.N(q,i)
n=j
J.da(n,o)
r.sbN(A.Bh(new B.lL(n,!1),h))
t=2
w=9
break
case 7:t=6
e=s.pop()
m=A.a2(e)
l=A.ah(e)
r.sbN(A.ba_(m,l,null,h))
w=9
break
case 6:w=2
break
case 9:case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$yv,v)},
Oq(){return"chat_"+ ++this.x}}
B.Cj.prototype={
C6(d,e){return this.aSO(d,e)},
aSO(d,e){var w=0,v=A.q(x.a),u,t=this,s,r,q,p
var $async$C6=A.r(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:w=3
return A.i(t.E3(e,d),$async$C6)
case 3:s=g
r=J.aO(s)
w=r.gE(s)<10?4:5
break
case 4:q=r
p=s
w=6
return A.i(t.Gq(e,d),$async$C6)
case 6:q.B(p,g)
case 5:if(r.ga_(s)){u=null
w=1
break}u=r.i(s,C.bn.l1(r.gE(s)))
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$C6,v)},
E3(d,e){return this.aqW(d,e)},
aqW(d,e){var w=0,v=A.q(x.g),u,t,s,r,q,p,o,n,m
var $async$E3=A.r(function(f,g){if(f===1)return A.n(g,v)
for(;;)switch(w){case 0:w=3
return A.i(D.TO.acU(e),$async$E3)
case 3:n=g
m=A.b([],x.V)
for(t=J.az(n),s=d===D.j9,r=d===D.mh;t.t();){q=t.gK()
p=q.d
o=!1
if(p.length!==0)if(new A.it(p).gE(0)<=16)if(!s||q.Q!=null)o=!r||q.f.length!==0
if(o)m.push(new B.x7(d,p,q.e,q.f,q.b,q.Q))}u=m
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$E3,v)},
Gq(d,e){return this.aIv(d,e)},
aIv(d,e){var w=0,v=A.q(x.g),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Gq=A.r(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=null
t=4
w=7
return A.i(r.b.Ui(e),$async$Gq)
case 7:j=g
t=2
w=6
break
case 4:t=3
i=s.pop()
u=D.Wp
w=1
break
w=6
break
case 3:w=2
break
case 6:p=A.b([],x.V)
for(o=J.az(j),n=d===D.mh;o.t();){m=o.gK()
l=m.r
k=!1
if(l.length!==0)if(C.b.gM(l).a.length!==0)if(new A.it(C.b.gM(l).a).gE(0)<=16)k=!n||C.b.gM(l).c.length!==0
if(k)p.push(new B.x7(d,C.b.gM(l).a,C.b.gM(l).b,C.b.gM(l).c,m.w,"https://pub-7d5fb452d3c14b469b1d630f885dfa87.r2.dev/audio/v1/vocab/"+m.a+"_E0.mp3"))}u=p
w=1
break
case 1:return A.o(u,v)
case 2:return A.n(s.at(-1),v)}})
return A.p($async$Gq,v)}}
B.De.prototype={
xV(d){return this.aVW(d)},
aVW(d){var w=0,v=A.q(x.U),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$xV=A.r(function(a0,a1){if(a0===1)return A.n(a1,v)
for(;;)switch(w){case 0:e=C.c.dl(d).toLowerCase()
if(C.c.q(e,"luy\u1ec7n nghe")||C.c.q(e,"ch\xe9p ch\xednh t\u1ea3")||C.c.q(e,"nghe vi\u1ebft")||C.c.q(e,"nghe g\xf5")||C.c.q(e,"nghe r\u1ed3i vi\u1ebft")||C.c.q(e,"dictation")){u=t.zb(D.j9)
w=1
break}if(C.c.q(e,"luy\u1ec7n d\u1ecbch")||C.c.q(e,"d\u1ecbch vi\u1ec7t")||C.c.q(e,"d\u1ecbch sang ti\u1ebfng trung")||C.c.q(e,"vi\u1ec7t-trung")||C.c.q(e,"vi\u1ec7t trung")){u=t.zb(D.mh)
w=1
break}s=t.a
w=3
return A.i(s.Uh(),$async$xV)
case 3:r=a1
w=4
return A.i(s.Ug(),$async$xV)
case 4:q=a1
w=5
return A.i(t.b.J7(),$async$xV)
case 5:p=a1
o=J.hB(p.geW())?null:J.wn(p.geW())
n=t.atZ(r,e)
if(n==null){s=J.aO(r)
n=s.ga_(r)?null:s.gM(r)}m=t.atY(q,e)
if(m==null){s=J.aO(q)
m=s.ga_(q)?null:s.gM(q)}l=A.b([],x.A)
if(C.c.q(e,"quiz")||C.c.q(e,"luy\u1ec7n")||C.c.q(e,"\xf4n")||C.c.q(e,"kiem tra")||C.c.q(e,"ki\u1ec3m tra")){if(n==null){s=J.aO(r)
k=s.ga_(r)?null:s.gM(r)}else k=n
if(k!=null){l.push(new B.lD("M\xecnh t\u1ea1o nhanh m\u1ed9t quiz local t\u1eeb d\u1eef li\u1ec7u HSK."))
l.push(t.aDu(k,r))
j=t.aFx(k)
if(j!=null)l.push(j)}}else if(C.c.q(e,"ng\u1eef ph\xe1p")||C.c.q(e,"grammar")){if(m!=null){l.push(new B.lD("\u0110\xe2y l\xe0 \u0111i\u1ec3m ng\u1eef ph\xe1p ph\xf9 h\u1ee3p nh\u1ea5t m\xecnh t\xecm th\u1ea5y."))
l.push(t.a1G(m))}}else if((C.c.q(e,"h\u1ed9i tho\u1ea1i")||C.c.q(e,"\u0111\u1ed1i tho\u1ea1i")||C.c.q(e,"dialogue")||C.c.q(e,"conversation"))&&o!=null){s=o.y
i=s.length===0?null:C.b.gM(s)
l.push(new B.lD(i==null?o.f:o.c+": "+i.c+" - "+i.e))
for(s=o.as,s=A.de(s,0,A.eu(2,"count",x.S),A.X(s).c),h=s.$ti,s=new A.aN(s,s.gE(0),h.h("aN<a8.E>")),g=o.b,h=h.h("a8.E");s.t();){f=s.d
if(f==null)f=h.a(f)
l.push(new B.FQ(f.a,f.b,f.c,g))}}else{s=n==null
if(!s){l.push(new B.lD("M\xecnh t\xecm th\u1ea5y t\u1eeb g\u1ea7n v\u1edbi c\xe2u h\u1ecfi c\u1ee7a b\u1ea1n."))
h=n.b
g=n.c
f=n.f
f=f.length===0?"":C.b.gM(f).b
l.push(new B.FQ(h,g,f,n.w))}h=m==null
if(!h)l.push(t.a1G(m))
if(s&&h)l.push(D.LJ)}l.push(D.a5h)
u=l
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$xV,v)},
zb(d){return this.as7(d)},
as7(d){var w=0,v=A.q(x.U),u,t=this,s,r,q,p,o,n,m
var $async$zb=A.r(function(e,f){if(e===1)return A.n(f,v)
for(;;)switch(w){case 0:s=t.d
w=3
return A.i(t.c.C6(s,d),$async$zb)
case 3:r=f
q=d===D.j9
p=q?"Luy\u1ec7n nghe ch\xe9p ch\xednh t\u1ea3":"Luy\u1ec7n d\u1ecbch Vi\u1ec7t-Trung"
o=q?"Luy\u1ec7n d\u1ecbch":"Luy\u1ec7n nghe"
n=q?"Luy\u1ec7n d\u1ecbch Vi\u1ec7t-Trung":"Luy\u1ec7n nghe ch\xe9p ch\xednh t\u1ea3"
m=new B.zA(A.b([new B.mV("C\xe2u kh\xe1c",p),new B.mV(o,n)],x.W))
if(r==null){u=A.b([new B.lD("Ch\u01b0a c\xf3 c\xe2u luy\u1ec7n ph\xf9 h\u1ee3p cho HSK "+s+"."),m],x.A)
w=1
break}u=A.b([new B.lD(q?"Nghe audio r\u1ed3i g\xf5 l\u1ea1i c\xe2u b\u1eb1ng ch\u1eef H\xe1n nh\xe9.":"D\u1ecbch c\xe2u sau sang ti\u1ebfng Trung nh\xe9."),new B.K5(r),m],x.A)
w=1
break
case 1:return A.o(u,v)}})
return A.p($async$zb,v)},
atZ(d,e){var w,v,u,t,s,r
for(w=J.az(d);w.t();){v=w.gK()
if(C.c.q(e,v.b.toLowerCase())||C.c.q(e,v.d.toLowerCase())||C.c.q(e,v.c.toLowerCase()))return v
for(u=v.f,t=u.length,s=0;s<t;++s){r=u[s].b
if(r.length!==0&&C.c.q(e,r.toLowerCase()))return v}}return null},
atY(d,e){var w,v
for(w=J.az(d);w.t();){v=w.gK()
if(C.c.q(e,v.b.toLowerCase())||C.c.q(e,v.c.toLowerCase()))return v}return null},
a1G(d){return new B.L8(d.b,d.c,d.d,d.e)},
aDu(d,e){var w,v,u,t,s=d.f,r=A.cl([s.length===0?"":C.b.gM(s).b],x.N)
for(w=J.az(e),v=d.a;w.t();){u=w.gK()
if(u.a!==v){t=u.f
t=(t.length===0?"":C.b.gM(t).b).length!==0}else t=!1
if(t){u=u.f
r.v(0,u.length===0?"":C.b.gM(u).b)}}r=A.PD(r,4,r.$ti.c)
r=A.N(r,A.l(r).h("z.E"))
r.$flags=1
s=s.length===0?"":C.b.gM(s).b
w=d.r
w=w.length===0?"T\u1eeb n\xe0y thu\u1ed9c HSK "+d.w+".":C.b.gM(w).c
return new B.Nf(d.b+" ngh\u0129a l\xe0 g\xec?",r,s,w)},
aFx(d){var w,v,u,t,s=d.r
if(s.length===0)return null
w=C.b.gM(s)
s=A.b([],x.T)
for(v=new A.z4(w.a);v.t();){u=A.dK(v.d)
if(C.c.dl(u).length!==0)s.push(u)}v=s.length
if(v<2||v>12)return null
t=A.N(s,x.N)
C.b.Du(t)
return new B.OD(w.c,t,C.b.hW(s))},
$ibhp:1}
B.a_j.prototype={
J(){return"DictationMode."+this.b}}
B.x7.prototype={}
B.Z_.prototype={
J(){return"ChatMessageRole."+this.b}}
B.xx.prototype={}
B.lK.prototype={}
B.lD.prototype={}
B.FQ.prototype={}
B.L8.prototype={}
B.Nf.prototype={}
B.OD.prototype={}
B.K5.prototype={}
B.zA.prototype={}
B.mV.prototype={}
B.ti.prototype={
a7(){return new B.Rq()}}
B.Rq.prototype={
F(d){return A.pA(this.gcj().c7($.bf0(),x.J),new B.aSt(this),new B.aSu(this),new B.aSv())},
aqi(d){var w=C.c.dl(d)
if(w.length===0)return
A.e_()
this.gcj().cu($.bf0().gjB(),x.i).yv(w)}}
B.acZ.prototype={
F(d){var w,v,u=null,t=this.c
if(t.b===D.rh)return new B.aiC(t.c,u)
w=A.b([],x.p)
for(t=J.az(t.d),v=this.d;t.t();)w.push(new A.aQ(C.eN,new B.a8Q(t.gK(),v,u),u))
return new A.aQ(D.R1,A.bj(w,C.F,C.j,C.l),u)}}
B.a8Q.prototype={
F(d){var w,v=null,u=this.c
A:{if(u instanceof B.lD){w=new B.a8C(u.a,v)
break A}if(u instanceof B.FQ){w=new B.aiM(u,v)
break A}if(u instanceof B.L8){w=new B.abH(u,v)
break A}if(u instanceof B.Nf){w=new B.TG(u,v)
break A}if(u instanceof B.OD){w=new B.UQ(u,v)
break A}if(u instanceof B.K5){w=new B.K6(u,v)
break A}if(u instanceof B.zA){w=new B.ah7(u.a,this.d,v)
break A}w=v}return w}}
B.aiC.prototype={
F(d){var w=null,v=A.A(d).ax,u=A.b2(18)
return new A.eH(C.lv,w,w,A.bM(w,A.U(this.c,w,w,w,w,A.aR(w,w,v.c,w,w,w,w,w,w,w,w,w,w,w,C.ak,w,w,!0,w,w,w,w,w,w,w,w),w,w),C.m,w,w,new A.b3(v.b,w,w,u,w,w,C.w),w,w,w,D.Rb,E.mt,w,w,w),w)}}
B.a8C.prototype={
F(d){var w,v,u=null,t=A.A(d).ax,s=t.R8
if(s==null)s=t.k2
w=A.b2(18)
v=t.to
if(v==null){v=t.u
if(v==null)v=t.k3}v=A.dx(v.aY(0.45),1)
return A.bM(u,A.U(this.c,u,u,u,u,u,u,u),C.m,u,u,new A.b3(s,u,v,w,u,u,C.w),u,u,u,u,E.mt,u,u,u)}}
B.aiM.prototype={
F(d){var w,v,u,t,s=null,r=A.A(d).ax,q=r.d
if(q==null)q=r.b
w=A.b2(14)
v=this.c
u=r.e
q=A.bM(C.G,A.U("H"+v.e,s,s,s,s,A.aR(s,s,u==null?r.c:u,s,s,s,s,s,s,s,s,s,s,s,C.a5,s,s,!0,s,s,s,s,s,s,s,s),s,s),C.m,s,s,new A.b3(q,s,s,w,s,s,C.w),s,52,s,s,s,s,s,52)
w=A.A(d).ok.f
w=w==null?s:w.hs(C.a5)
u=x.p
w=A.b([A.U(v.b,s,s,s,s,w,s,s)],u)
t=v.c
if(t.length!==0)w.push(A.U(t,s,s,s,s,A.aR(s,s,r.b,s,s,s,s,s,s,s,s,s,s,s,C.a4,s,s,!0,s,s,s,s,s,s,s,s),s,s))
v=v.d
if(v.length!==0){t=r.rx
w.push(A.U(v,2,C.an,s,s,A.aR(s,s,t==null?r.k3:t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s))}return new B.Al(A.bK(A.b([q,H.oH,A.cO(A.bj(w,C.F,C.j,C.l),1,s)],u),C.t,s,C.j,C.l,0),s)}}
B.abH.prototype={
F(d){var w,v,u=null,t=A.A(d).ax,s=A.ec(D.S6,t.y,u,u,u),r=this.c,q=A.A(d).ok.w
q=q==null?u:q.hs(C.a5)
w=x.p
q=A.bK(A.b([s,C.bc,A.cO(A.U(r.b,1,C.an,u,u,q,u,u),1,u),A.U("HSK "+r.e,u,u,u,u,u,u,u)],w),C.t,u,C.j,C.l,0)
s=A.U(r.c,u,u,u,u,A.aR(u,u,t.b,u,u,u,u,u,u,u,u,u,u,u,C.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u)
v=t.rx
return new B.Al(A.bj(A.b([q,C.b3,s,C.dw,A.U(r.d,3,C.an,u,u,A.aR(u,u,v==null?t.k3:v,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u)],w),C.F,C.j,C.l),u)}}
B.TG.prototype={
a7(){return new B.aen()}}
B.aen.prototype={
F(d){var w,v,u,t,s,r,q=this,p=null,o=A.A(d).ax,n=q.d,m=o.CW
m=A.ec(D.So,m==null?o.y:m,p,p,p)
w=q.a.c
v=A.A(d).ok.w
v=v==null?p:v.hs(C.a5)
u=x.p
u=A.b([A.bK(A.b([m,C.bc,A.cO(A.U(w.a,p,p,p,p,v,p,p),1,p)],u),C.t,p,C.j,C.l,0),C.at],u)
for(m=q.a.c.b,w=m.length,v=n==null,t=0;t<m.length;m.length===w||(0,A.x)(m),++t){s=m[t]
r=v?new B.b_g(q,s):p
u.push(new A.aQ(C.mr,new L.ME(!1,r,p,p,p,A.byr(p,p,p,p,p,p,p,p,p,q.a_j(o,s,n),p,D.a4r,p,p,p,new A.ba(q.a_j(o,s,n),1,C.z,-1),p,p,p,p),p,p,!1,p,!0,p,A.U(s,p,p,p,p,p,p,p),p),p))}if(!v){m=q.a.c
w=m.c
m=m.d
m=n===w?"\u0110\xfang r\u1ed3i. "+m:"\u0110\xe1p \xe1n \u0111\xfang: "+w+". "+m
w=o.rx
u.push(A.U(m,p,p,p,p,A.aR(p,p,w==null?o.k3:w,p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p))}return new B.Al(A.bj(u,C.F,C.j,C.l),p)},
a_j(d,e,f){var w
if(f==null){w=d.ry
if(w==null){w=d.u
if(w==null)w=d.k3}return w}if(e===this.a.c.c)return d.b
if(e===f)return d.fy
w=d.to
if(w==null){w=d.u
if(w==null)w=d.k3}return w}}
B.UQ.prototype={
a7(){return new B.ags(A.b([],x.T))}}
B.ags.prototype={
gMt(){var w,v=this,u=v.d
if(u===$){w=A.N(v.a.c.b,x.N)
v.d!==$&&A.ay()
v.d=w
u=w}return u},
F(d){var w,v,u,t,s,r,q=this,p=null,o=A.A(d).ax,n=q.e,m=C.b.hW(n)===q.a.c.c,l=A.ec(E.uh,o.y,p,p,p),k=A.A(d).ok.w,j=x.p
k=A.b([A.bK(A.b([l,C.bc,A.cO(A.U("S\u1eafp x\u1ebfp c\xe2u",p,p,p,p,k==null?p:k.hs(C.a5),p,p),1,p)],j),C.t,p,C.j,C.l,0)],j)
l=q.a.c.a
if(l.length!==0)C.b.B(k,A.b([C.aw,A.U(l,p,p,p,p,p,p,p)],j))
k.push(C.at)
l=A.b2(12)
if(q.f)w=m?o.b:o.fy
else{w=o.to
if(w==null){w=o.u
if(w==null)w=o.k3}}w=A.dx(w,1)
v=A.b([],j)
for(u=0;u<n.length;++u){t=A.U(n[u],p,p,p,p,p,p,p)
v.push(new B.a1q(t,q.f?p:new B.b2_(q,u),p))}k.push(A.bM(p,A.kq(v,C.bV,6,6),C.m,p,D.Jq,new A.b3(o.k2,p,w,l,p,p,C.w),p,p,p,p,D.QG,p,p,1/0))
k.push(C.b3)
l=A.b([],j)
for(j=q.gMt(),w=j.length,s=0;s<j.length;j.length===w||(0,A.x)(j),++s){r=j[s]
v=A.U(r,p,p,p,p,p,p,p)
l.push(B.bfm(p,v,q.f?p:new B.b20(q,r)))}k.push(A.kq(l,C.bV,8,8))
k.push(C.at)
k.push(A.xk(E.pf,n.length===0||q.f?p:new B.b21(q),p))
if(q.f){n=m?"C\xe2u \u0111\xfang.":"\u0110\xe1p \xe1n: "+q.a.c.c
k.push(A.U(n,p,p,p,p,A.aR(p,p,m?o.b:o.fy,p,p,p,p,p,p,p,p,p,p,p,C.a4,p,p,!0,p,p,p,p,p,p,p,p),p,p))}return new B.Al(A.bj(k,C.F,C.j,C.l),p)}}
B.ah7.prototype={
F(d){var w,v,u,t,s=null,r=A.b([],x.p)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.x)(w),++u){t=w[u]
r.push(B.bfm(D.SL,A.U(t.a,s,s,s,s,s,s,s),new B.b3a(this,t)))}return A.kq(r,C.bV,8,8)}}
B.Ga.prototype={
a7(){return new B.a9r()},
aTy(d){return this.d.$1(d)}}
B.a9r.prototype={
gN3(){var w=this.w
if(w===$)w=this.w=new A.zG(C.kI,$.aA())
return w},
l(){var w=this.gN3()
w.aB$=$.aA()
w.ap$=0
this.az()},
F(d){var w,v,u=null,t=A.A(d).ax,s=t.R8
if(s==null)s=t.k2
w=A.b2(22)
v=t.to
if(v==null){v=t.u
if(v==null)v=t.k3}v=A.dx(v.aY(0.45),1)
return new A.aQ(D.R3,A.jg(A.bK(A.b([A.cO(F.bc5(u,this.gN3(),D.Tc,!0,u,4,1,u,this.a.d,u,C.Gk),1,u),new A.aQ(D.Qy,new A.xH(u,u,u,D.SM,u,new B.aT4(this),"G\u1eedi",u,u,u,C.adH,u),u)],x.p),C.dT,u,C.j,C.l,0),new A.b3(s,u,v,w,u,u,C.w),C.bo),u)}}
B.ail.prototype={
fj(d,e){var w,v,u,t,s,r,q,p=null,o="\u0110ang d\u1ef1ng GenUI...",n=A.A(d).ax
if(A.jL(e)){w=A.U("\u25cf \u25cf \u25cf",p,p,p,p,A.aR(p,p,n.b,p,p,p,p,p,p,p,p,16,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p)
v=n.rx
return A.bK(A.b([w,C.i3,A.U(o,p,p,p,p,A.aR(p,p,v==null?n.k3:v,p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p)],x.p),C.t,p,C.j,C.a6,0)}w=new B.b4o(n)
v=n.R8
if(v==null)v=n.k2
u=A.b2(16)
t=n.to
if(t==null){t=n.u
if(t==null)t=n.k3}t=A.dx(t.aY(0.3),1)
s=w.$1(0)
r=w.$1(1)
w=w.$1(2)
q=n.rx
return A.bM(p,A.bK(A.b([s,C.ft,r,C.ft,w,C.fs,A.U(o,p,p,p,p,A.aR(p,p,q==null?n.k3:q,p,p,p,p,p,p,p,p,13,p,p,C.a2,p,p,!0,p,p,p,p,p,p,p,p),p,p)],x.p),C.t,p,C.j,C.a6,0),C.m,p,p,new A.b3(v,p,t,u,p,p,C.w),p,p,p,p,E.tm,p,p,p)}}
B.Al.prototype={
F(d){var w,v,u=null,t=A.A(d).ax,s=t.R8
if(s==null)s=t.k2
w=A.b2(18)
v=t.to
if(v==null){v=t.u
if(v==null)v=t.k3}return A.bM(u,this.c,C.m,u,u,new A.b3(s,u,A.dx(v.aY(0.45),1),w,u,u,C.w),u,u,u,u,C.dj,u,u,1/0)},
gN(){return this.c}}
B.K6.prototype={
a7(){return new B.RZ(D.uY)}}
B.RZ.prototype={
gNl(){var w=this.d
if(w===$)w=this.d=new A.zG(C.kI,$.aA())
return w},
l(){var w=this.gNl()
w.aB$=$.aA()
w.ap$=0
this.az()},
a05(){var w,v=this,u=B.bog(v.a.c.a.c),t=B.bog(v.gNl().a.a)
if(t.length===0)return
w=t===u
if(w)A.qb()
else A.xB()
v.T(new B.aUm(v,w,u,t))},
aEx(){A.e_()
this.T(new B.aUn(this))},
F(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Noto Serif SC",h=A.A(a0).ax,g=k.a.c.a,f=g.b===D.j9,e=k.f||k.w,d=h.R8
if(d==null)d=h.k2
w=A.b2(18)
v=h.to
if(v==null){v=h.u
if(v==null)v=h.k3}v=A.dx(v.aY(0.45),1)
u=f?D.Se:C.uj
t=h.CW
s=t==null
u=A.ec(u,s?h.y:t,j,j,j)
r=f?"Nghe vi\u1ebft H\xe1n t\u1ef1":"D\u1ecbch Vi\u1ec7t \u2192 Trung"
q=A.A(a0).ok.w
r=A.cO(A.U(r,j,j,j,j,q==null?j:q.hs(C.a5),j,j),1,j)
q=h.rx
p=q==null
o=x.p
r=A.b([A.bK(A.b([u,C.bc,r,A.U("HSK "+g.f,j,j,j,j,A.aR(j,j,p?h.k3:q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j)],o),C.t,j,C.j,C.l,0),C.at],o)
if(f){u=A.kD(j,30,"Ph\xe1t audio",g.r)
r.push(A.bK(A.b([u,C.i3,A.cO(A.U("B\u1ea5m nghe (nghe l\u1ea1i \u0111\u01b0\u1ee3c nhi\u1ec1u l\u1ea7n) r\u1ed3i g\xf5 l\u1ea1i c\xe2u.",j,j,j,j,A.aR(j,j,p?h.k3:q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j),1,j)],o),C.t,j,C.j,C.l,0))}else r.push(A.U(g.e,j,j,j,j,A.A(a0).ok.w,j,j))
r.push(C.at)
u=k.gNl()
n=!e
m=h.k3
l=A.aR(j,j,m,j,j,j,j,j,i,C.cp,j,22,j,j,C.ak,j,1.15,!0,j,j,j,j,j,j,j,j)
r.push(F.bc5(!1,u,F.bb2(j,new F.l4(4,A.b2(12),H.qH),j,j,j,j,j,j,!0,j,j,j,j,j,j,h.k2,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,j,"G\xf5 ch\u1eef H\xe1n...",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),!1,n,2,1,j,new B.aUp(k),l,C.pc))
r.push(C.b3)
u=A.xk(E.pf,e?j:k.gas8(),j)
l=A.zD(D.aay,k.r?j:new B.aUq(k),j)
r.push(A.kq(A.b([u,l,A.zD(D.aaJ,k.w?j:k.gaEw(),j)],o),C.pR,8,8))
if(k.r&&n)C.b.B(r,A.b([C.dw,A.U(g.d,j,j,j,j,A.aR(j,j,h.b,j,j,j,j,j,"Inter",C.d0,j,16,j,j,C.ak,j,j,!0,j,0.2,j,j,j,j,j,j),j,j)],o))
if(k.e&&!k.f&&!k.w){u=A.U("Ch\u01b0a \u0111\xfang, \u0111\u1ed1i chi\u1ebfu t\u1eebng ch\u1eef:",j,j,j,j,A.aR(j,j,h.fy,j,j,j,j,j,j,j,j,j,j,j,C.a4,j,j,!0,j,j,j,j,j,j,j,j),j,j)
n=k.x
C.b.B(r,A.b([C.b3,u,C.aU,new B.aan(n,j),C.aU,A.U("S\u1eeda l\u1ea1i r\u1ed3i b\u1ea5m Ki\u1ec3m tra l\u1ea7n n\u1eefa nh\xe9.",j,j,j,j,A.aR(j,j,p?m:q,j,j,j,j,j,j,j,j,13,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j)],o))}if(e){u=k.f
n=u?C.jv:D.Si
if(u)t=h.b
else if(s)t=h.y
t=A.ec(n,t,j,j,20)
s=u?"Ch\xednh x\xe1c!":"\u0110\xe1p \xe1n:"
t=A.bK(A.b([t,C.oI,A.U(s,j,j,j,j,A.aR(j,j,u?h.b:m,j,j,j,j,j,j,j,j,j,j,j,C.a5,j,j,!0,j,j,j,j,j,j,j,j),j,j)],o),C.t,j,C.j,C.l,0)
s=A.b([A.U(g.c,j,j,j,j,A.aR(j,j,m,j,j,j,j,j,i,C.cp,j,24,j,j,C.ak,j,1.15,!0,j,j,j,j,j,j,j,j),j,j),A.U(g.d,j,j,j,j,A.aR(j,j,h.b,j,j,j,j,j,"Inter",C.d0,j,15,j,j,C.ak,j,j,!0,j,0.2,j,j,j,j,j,j),j,j)],o)
u=g.e
if(u.length!==0)s.push(A.U(u,j,j,j,j,A.aR(j,j,p?m:q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j))
u=A.b([A.cO(A.bj(s,C.F,C.j,C.l),1,j)],o)
s=g.r
if(s!=null&&!f)u.push(A.kD(j,24,j,s))
C.b.B(r,A.b([C.b3,t,C.dw,A.bK(u,C.F,j,C.j,C.l,0)],o))}return A.bM(j,A.bj(r,C.F,C.j,C.l),C.m,j,j,new A.b3(d,j,v,w,j,j,C.w),j,j,j,j,C.dj,j,j,1/0)}}
B.aan.prototype={
F(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=A.A(d).ax,i=A.b([],x.k)
for(w=this.c,v=w.length,u=x.N,t=j.rx,s=j.k3,r=j.fy,q=j.b,p=t==null,o=0;o<w.length;w.length===v||(0,A.x)(w),++o){n=w[o]
m=n.b
l=n.a
if(m===D.eX)l=C.b.hW(A.be(new A.it(l).gE(0),"\uff3f",!1,u))
A:{if(D.u4===m){m=new A.F(!0,q,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
break A}if(D.u5===m||D.eY===m){m=new A.F(!0,r,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.pa,r,k,k,k,k,k,k,k)
break A}if(D.eX===m){m=(p?s:t).aY(0.7)
m=new A.F(!0,m,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
break A}m=k}i.push(new A.hu(l,k,k,C.aR,k,k,k,k,k,k,m))}return A.bkf(A.eR(i,k,k,k,k,k,k,k,k,k,k),A.aR(k,k,s,k,k,k,k,k,"Noto Serif SC",C.cp,k,22,k,k,C.ak,k,1.15,!0,k,k,k,k,k,k,k,k),k)}}
B.an0.prototype={
$2$1(d,e,f){return A.bfx(d,null,!0,null,null,e,f)},
$1(d){return this.$2$1(d,x.O,x.C)}}
var z=a.updateTypes(["~()","x6()","Cg(cy)","O<lL>()","Cj(cy)","De(cy)","~(d)","hT()","hT(u,bz)","hT(lL)","Ci(Z<d,@>)","Ch(Z<d,@>)","tK()","d(k)"])
B.aQj.prototype={
$1(d){var w,v
if(d.q(0,C.C)){w=this.a
if(w.fy===D.fE)w=null
else{w=w.goj().k3
w=A.aX(31,w.I()>>>16&255,w.I()>>>8&255,w.I()&255)}return w}w=this.a
if(w.fy===D.fE)w=null
else{w=w.goj()
v=w.p3
w=v==null?w.k2:v}return w},
$S:45}
B.aXa.prototype={
$1(d){var w,v
if(d.q(0,C.ay)&&d.q(0,C.C)){w=this.a.gtc().k3
return A.aX(31,w.I()>>>16&255,w.I()>>>8&255,w.I()&255)}if(d.q(0,C.C))return null
if(d.q(0,C.ay)){w=this.a.gtc()
v=w.Q
return v==null?w.y:v}return null},
$S:45}
B.aql.prototype={
$0(){return B.bgF(this.a)},
$S:z+1}
B.b7T.prototype={
$1(d){return new B.Cg(!0)},
$S:z+2}
B.b7U.prototype={
$1(d){return new B.Cj(d.c7($.wl(),x.o))},
$S:z+4}
B.b85.prototype={
$1(d){var w=x.S
return new B.De(d.c7($.wl(),x.o),d.c7($.bsA(),x.z),d.c7($.bsB(),x.E),d.c7(A.qO($.mA(),new B.b84(),x.L,w),w))},
$S:z+5}
B.b84.prototype={
$1(d){return d.a},
$S:74}
B.aSv.prototype={
$0(){return D.a4D},
$S:z+7}
B.aSu.prototype={
$2(d,e){var w=null
return K.EW(C.d1,A.b([new I.EX(M.ug,"Kh\xf4ng ph\u1ea3n h\u1ed3i \u0111\u01b0\u1ee3c",A.j(d),w,w),new G.p_(new B.Ga(this.a.gMH(),w),w)],x.p),y.b,"Chat")},
$S:z+8}
B.aSt.prototype={
$1(d){var w=null,v=this.a,u=A.b([new A.EV(new A.P5(new B.aSs(v,d),d.a.length,!0,!0,!0,0,A.boC(),w),w)],x.p)
if(d.b)u.push(D.a4J)
u.push(new G.p_(new B.Ga(v.gMH(),w),w))
return K.EW(C.d1,u,y.b,"Chat")},
$S:z+9}
B.aSs.prototype={
$2(d,e){var w,v=null,u=this.a
u=A.eI(new B.acZ(this.b.a[e],u.gMH(),v),!A.jL(u.gcj()),v,v)
w=A.bO(0,18e4,0,0)
return A.ki(A.hK(u,v,A.bO(0,C.e.aE(e*40*1000),0,0),w),0.03,v,A.bO(0,22e4,0,0),0)},
$S:945}
B.b_g.prototype={
$0(){A.e_()
var w=this.a
w.T(new B.b_f(w,this.b))},
$S:0}
B.b_f.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.b2_.prototype={
$0(){var w=this.a
w.T(new B.b1Z(w,this.b))},
$S:0}
B.b1Z.prototype={
$0(){var w=this.a
w.gMt().push(C.b.hy(w.e,this.b))},
$S:0}
B.b20.prototype={
$0(){A.e_()
var w=this.a
w.T(new B.b1Y(w,this.b))},
$S:0}
B.b1Y.prototype={
$0(){var w=this.a,v=this.b
C.b.G(w.gMt(),v)
w.e.push(v)},
$S:0}
B.b21.prototype={
$0(){A.e_()
var w=this.a
w.T(new B.b1X(w))},
$S:0}
B.b1X.prototype={
$0(){return this.a.f=!0},
$S:0}
B.b3a.prototype={
$0(){return this.a.d.$1(this.b.b)},
$S:0}
B.aT4.prototype={
$0(){var w=this.a,v=w.gN3(),u=v.a.a
v.t4(C.Gg)
w.a.aTy(u)},
$S:0}
B.b4o.prototype={
$1(d){var w=null,v=A.eI(A.bM(w,w,C.m,w,w,new A.b3(this.a.b,w,w,w,w,w,C.ck),w,7,w,w,w,w,w,7),w,new B.b4p(),w),u=A.bO(0,38e4,0,0)
return A.biz(v,0,D.P6,A.bO(0,C.e.aE(d*130*1000),0,0),u,-5)},
$S:219}
B.b4p.prototype={
$1(d){return d.Vu(!0)},
$S:274}
B.aUm.prototype={
$0(){var w,v=this,u=v.a
u.e=!0
w=v.b
u.f=w
u.x=w?D.uY:B.bId(v.c,v.d)},
$S:0}
B.aUn.prototype={
$0(){var w=this.a
w.r=w.w=!0},
$S:0}
B.aUp.prototype={
$1(d){return this.a.a05()},
$S:33}
B.aUq.prototype={
$0(){A.e_()
var w=this.a
w.T(new B.aUo(w))},
$S:0}
B.aUo.prototype={
$0(){return this.a.r=!0},
$S:0};(function installTearOffs(){var w=a._static_1,v=a._static_0,u=a._instance_0u,t=a._instance_1u
w(B,"bIc","buY",10)
w(B,"bIb","buX",11)
v(B,"bHA","bwl",12)
u(B.tK.prototype,"glt","d2",3)
t(B.Rq.prototype,"gMH","aqi",6)
var s
u(s=B.RZ.prototype,"gas8","a05",0)
u(s,"gaEw","aEx",0)
w(B,"bnI","bAY",13)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.rF,[B.aSA,B.CN,B.a_j,B.Z_])
w(A.a3,[B.XQ,B.a1q,B.acZ,B.a8Q,B.aiC,B.a8C,B.aiM,B.abH,B.ah7,B.Al,B.aan])
w(A.wL,[B.aQi,B.aX9])
w(A.fU,[B.aQj,B.aXa,B.b7T,B.b7U,B.b85,B.b84,B.aSt,B.b4o,B.b4p,B.aUp])
w(A.u,[B.Cg,B.x6,B.Ci,B.Ch,B.a_i,B.mX,B.lL,B.Cj,B.De,B.x7,B.xx,B.lK,B.mV,B.an0])
w(A.mJ,[B.aql,B.aSv,B.b_g,B.b_f,B.b2_,B.b1Z,B.b20,B.b1Y,B.b21,B.b1X,B.b3a,B.aT4,B.aUm,B.aUn,B.aUq,B.aUo])
v(B.tK,A.wA)
w(B.lK,[B.lD,B.FQ,B.L8,B.Nf,B.OD,B.K5,B.zA])
w(A.o9,[B.ti,B.Ga])
w(A.pN,[B.Rq,B.a9r])
w(A.lE,[B.aSu,B.aSs])
w(A.a_,[B.TG,B.UQ,B.K6])
w(A.aa,[B.aen,B.ags,B.RZ])
v(B.ail,A.oa)})()
A.lm(b.typeUniverse,JSON.parse('{"XQ":{"a3":[],"c":[]},"a1q":{"a3":[],"c":[]},"tK":{"wA":["lL"]},"De":{"bhp":[]},"lD":{"lK":[]},"FQ":{"lK":[]},"L8":{"lK":[]},"Nf":{"lK":[]},"OD":{"lK":[]},"K5":{"lK":[]},"zA":{"lK":[]},"TG":{"a_":[],"c":[]},"UQ":{"a_":[],"c":[]},"Ga":{"a_":[],"c":[]},"ti":{"a_":[],"c":[]},"Rq":{"aa":["ti"]},"acZ":{"a3":[],"c":[]},"a8Q":{"a3":[],"c":[]},"aiC":{"a3":[],"c":[]},"a8C":{"a3":[],"c":[]},"aiM":{"a3":[],"c":[]},"abH":{"a3":[],"c":[]},"aen":{"aa":["TG"]},"ags":{"aa":["UQ"]},"ah7":{"a3":[],"c":[]},"a9r":{"aa":["Ga"]},"ail":{"a_":[],"c":[]},"Al":{"a3":[],"c":[]},"K6":{"a_":[],"c":[]},"RZ":{"aa":["K6"]},"aan":{"a3":[],"c":[]}}'))
var y={b:"H\u1ecfi \u0111\xe1p, tra t\u1eeb v\xe0 luy\u1ec7n t\u1eadp ngay trong cu\u1ed9c tr\xf2 chuy\u1ec7n."}
var x=(function rtii(){var w=A.Y
return{O:w("wA<@>"),J:w("bx<lL>"),w:w("b6<d,d>"),y:w("x6"),z:w("Cg"),E:w("Cj"),i:w("tK"),B:w("xx"),M:w("bhp"),s:w("lL"),X:w("v<a_i>"),V:w("v<x7>"),A:w("v<lK>"),r:w("v<xx>"),W:w("v<mV>"),R:w("v<mX>"),k:w("v<fE>"),m:w("v<Z<d,d>>"),T:w("v<d>"),p:w("v<c>"),o:w("qo"),g:w("B<x7>"),U:w("B<lK>"),j:w("B<@>"),I:w("B<k>"),Q:w("Z<d,x6>"),P:w("Z<d,@>"),K:w("it"),N:w("d"),L:w("ix"),b:w("bW<W?>"),C:w("@"),S:w("k"),a:w("x7?"),Y:w("B<@>?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Jq=new A.ag(0,1/0,52,1/0)
D.K9=new B.an0()
D.LJ=new B.lD("M\xecnh c\xf3 th\u1ec3 tra t\u1eeb, gi\u1ea3i th\xedch ng\u1eef ph\xe1p, t\u1ea1o quiz ho\u1eb7c g\u1ee3i \xfd c\xe2u h\u1ed9i tho\u1ea1i t\u1eeb d\u1eef li\u1ec7u local.")
D.LK=new B.lD("Ch\xe0o b\u1ea1n, m\xecnh l\xe0 Chat GenUI local. M\xecnh c\xf3 th\u1ec3 tra t\u1eeb, gi\u1ea3i th\xedch ng\u1eef ph\xe1p, t\u1ea1o quiz v\xe0 luy\u1ec7n nghe-vi\u1ebft ch\u1eef H\xe1n t\u1eeb d\u1eef li\u1ec7u offline.")
D.rh=new B.Z_(0,"user")
D.ri=new B.Z_(1,"assistant")
D.P6=new A.ey(0.455,0.03,0.515,0.955)
D.j9=new B.a_j(0,"listen")
D.mh=new B.a_j(1,"readVi")
D.Qy=new A.ak(0,0,8,7)
D.QG=new A.ak(10,10,10,10)
D.R1=new A.ak(20,6,20,12)
D.R3=new A.ak(20,8,20,18)
D.Rb=new A.ak(64,6,20,10)
D.nd=new B.mV("H\u1ed9i tho\u1ea1i","Cho m\xecnh h\u1ed9i tho\u1ea1i m\u1eabu")
D.u_=new B.mV("Luy\u1ec7n nghe","Luy\u1ec7n nghe ch\xe9p ch\xednh t\u1ea3")
D.ne=new B.mV("T\u1ea1o quiz","T\u1ea1o quiz HSK 2")
D.u0=new B.mV("Luy\u1ec7n d\u1ecbch","Luy\u1ec7n d\u1ecbch Vi\u1ec7t-Trung")
D.u4=new B.CN(0,"match")
D.u5=new B.CN(1,"wrong")
D.eX=new B.CN(2,"missing")
D.eY=new B.CN(3,"extra")
D.S6=new A.by(62876,"MaterialIcons",null,!1)
D.Se=new A.by(63457,"MaterialIcons",null,!1)
D.Si=new A.by(63573,"MaterialIcons",null,!1)
D.So=new A.by(983252,"MaterialIcons",null,!1)
D.SL=new A.fY(E.uc,18,null,null,null)
D.Ss=new A.by(983367,"MaterialIcons",null,!0)
D.SM=new A.fY(D.Ss,null,null,null,null)
D.QO=new A.ak(16,14,10,14)
D.Tc=new F.D2(null,null,null,null,null,null,null,null,null,null,"H\u1ecfi v\u1ec1 t\u1eeb v\u1ef1ng, ng\u1eef ph\xe1p ho\u1eb7c quiz...",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,D.QO,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,H.q2,!0,null,null,null,null)
D.TO=new A.LI(null)
D.RL=new B.mV("Tra t\u1eeb","Tra t\u1eeb \u5b66\u4e60")
D.UC=w([D.RL,D.ne,D.nd,D.u_,D.u0],x.W)
D.a_a={id:0,title:1,titleZh:2,titlePinyin:3,description:4,level:5,category:6,icon:7,lines:8,vocabulary:9,speakers:10,relatedGrammar:11,cultureTip:12}
D.fa={speaker:0,zh:1,pinyin:2,vi:3}
D.Zh=new A.b6(D.fa,["A","\u8001\u5e08\uff0c\u867d\u7136\u6211\u6bcf\u5929\u5b66\u4e60\uff0c\u4f46\u662f\u8fdb\u6b65\u4e0d\u592a\u5feb\u3002","L\u01ceosh\u012b, su\u012br\xe1n w\u01d2 m\u011biti\u0101n xu\xe9x\xed, d\xe0nsh\xec j\xecnb\xf9 b\xfa t\xe0i ku\xe0i.","C\xf4 \u01a1i, tuy ng\xe0y n\xe0o em c\u0169ng h\u1ecdc, nh\u01b0ng ti\u1ebfn b\u1ed9 kh\xf4ng nhanh l\u1eafm."],x.w)
D.Zj=new A.b6(D.fa,["B","\u522b\u7740\u6025\uff0c\u53ea\u8981\u4f60\u575a\u6301\u7ec3\u4e60\uff0c\u5c31\u4f1a\u8d8a\u6765\u8d8a\u597d\u3002","Bi\xe9 zh\xe1oj\xed, zh\u01d0y\xe0o n\u01d0 ji\u0101nch\xed li\xe0nx\xed, ji\xf9 hu\xec yu\xe8 l\xe1i yu\xe8 h\u01ceo.","\u0110\u1eebng s\u1ed1t ru\u1ed9t, ch\u1ec9 c\u1ea7n em ki\xean tr\xec luy\u1ec7n t\u1eadp th\xec s\u1ebd ng\xe0y c\xe0ng t\u1ed1t."],x.w)
D.Zg=new A.b6(D.fa,["A","\u5982\u679c\u6211\u5de5\u4f5c\u5f88\u5fd9\uff0c\u8fd8\u5e94\u8be5\u6bcf\u5929\u590d\u4e60\u5417\uff1f","R\xfagu\u01d2 w\u01d2 g\u014dngzu\xf2 h\u011bn m\xe1ng, h\xe1i y\u012bngg\u0101i m\u011biti\u0101n f\xf9x\xed ma?","N\u1ebfu c\xf4ng vi\u1ec7c b\u1eadn, em v\u1eabn n\xean \xf4n m\u1ed7i ng\xe0y kh\xf4ng?"],x.w)
D.Ze=new A.b6(D.fa,["B","\u5f53\u7136\u3002\u53ea\u6709\u628a\u4eca\u5929\u7684\u751f\u8bcd\u590d\u4e60\u5b8c\uff0c\u660e\u5929\u7684\u8bfe\u624d\u4f1a\u8f7b\u677e\u3002","D\u0101ngr\xe1n. Zh\u01d0y\u01d2u b\u01ce j\u012bnti\u0101n de sh\u0113ngc\xed f\xf9x\xed w\xe1n, m\xedngti\u0101n de k\xe8 c\xe1i hu\xec q\u012bngs\u014dng.","T\u1ea5t nhi\xean. Ch\u1ec9 khi \xf4n xong t\u1eeb m\u1edbi h\xf4m nay th\xec b\xe0i ng\xe0y mai m\u1edbi nh\u1eb9 h\u01a1n."],x.w)
D.Zi=new A.b6(D.fa,["A","\u90a3\u6211\u5148\u542c\u4e00\u904d\u5bf9\u8bdd\uff0c\u518d\u505a\u7ec3\u4e60\u3002","N\xe0 w\u01d2 xi\u0101n t\u012bng y\xed bi\xe0n du\xechu\xe0, z\xe0i zu\xf2 li\xe0nx\xed.","V\u1eady em nghe h\u1ed9i tho\u1ea1i m\u1ed9t l\u01b0\u1ee3t tr\u01b0\u1edbc, r\u1ed3i l\xe0m b\xe0i luy\u1ec7n t\u1eadp."],x.w)
D.Zf=new A.b6(D.fa,["B","\u5f88\u597d\uff0c\u867d\u7136\u65f6\u95f4\u4e0d\u591a\uff0c\u4f46\u662f\u65b9\u6cd5\u5bf9\u4e86\u5c31\u6709\u6548\u3002","H\u011bn h\u01ceo, su\u012br\xe1n sh\xedji\u0101n b\xf9 du\u014d, d\xe0nsh\xec f\u0101ngf\u01ce du\xec le ji\xf9 y\u01d2uxi\xe0o.","R\u1ea5t t\u1ed1t, tuy th\u1eddi gian kh\xf4ng nhi\u1ec1u nh\u01b0ng \u0111\xfang ph\u01b0\u01a1ng ph\xe1p th\xec hi\u1ec7u qu\u1ea3."],x.w)
D.W1=w([D.Zh,D.Zj,D.Zg,D.Ze,D.Zi,D.Zf],x.m)
D.f9={zh:0,pinyin:1,vi:2,pos:3}
D.YU=new A.b6(D.f9,["\u8fdb\u6b65","j\xecnb\xf9","ti\u1ebfn b\u1ed9","\u0111\u1ed9ng t\u1eeb/danh t\u1eeb"],x.w)
D.YW=new A.b6(D.f9,["\u575a\u6301","ji\u0101nch\xed","ki\xean tr\xec","\u0111\u1ed9ng t\u1eeb"],x.w)
D.YS=new A.b6(D.f9,["\u590d\u4e60","f\xf9x\xed","\xf4n t\u1eadp","\u0111\u1ed9ng t\u1eeb"],x.w)
D.YV=new A.b6(D.f9,["\u751f\u8bcd","sh\u0113ngc\xed","t\u1eeb m\u1edbi","danh t\u1eeb"],x.w)
D.YT=new A.b6(D.f9,["\u8f7b\u677e","q\u012bngs\u014dng","nh\u1eb9 nh\xe0ng","t\xednh t\u1eeb"],x.w)
D.YR=new A.b6(D.f9,["\u65b9\u6cd5","f\u0101ngf\u01ce","ph\u01b0\u01a1ng ph\xe1p","danh t\u1eeb"],x.w)
D.WJ=w([D.YU,D.YW,D.YS,D.YV,D.YT,D.YR],x.m)
D.Av={code:0,nameVi:1,role:2,avatarColor:3}
D.Zz=new A.b6(D.Av,["A","Vy","Ng\u01b0\u1eddi h\u1ecdc","#5E35B1"],x.w)
D.Zy=new A.b6(D.Av,["B","C\xf4 Mai","C\u1ed1 v\u1ea5n HSK3","#00897B"],x.w)
D.Vt=w([D.Zz,D.Zy],x.m)
D.VC=w(["g_suiran_danshi","g_zhiyao_jiu","g_zhiyou_cai"],x.T)
D.Z9=new A.b6(D.a_a,["conv_hsk3_conditions_01","L\u1eadp k\u1ebf ho\u1ea1ch \xf4n thi","\u51c6\u5907\u8003\u8bd5\u8ba1\u5212","Zh\u01d4nb\xe8i k\u01ceosh\xec j\xechu\xe0","Nh\u1edd c\u1ed1 v\u1ea5n HSK3 \u0111i\u1ec1u ch\u1ec9nh c\xe1ch \xf4n t\u1eadp khi th\u1eddi gian h\u1ea1n ch\u1ebf.",3,"study","\ud83d\udcda",D.W1,D.WJ,D.Vt,D.VC,"\u1ede l\u1edbp ti\u1ebfng Trung, ng\u01b0\u1eddi h\u1ecdc th\u01b0\u1eddng g\u1ecdi gi\xe1o vi\xean l\xe0 \u8001\u5e08 \u0111\u1ec3 gi\u1eef s\u1eafc th\xe1i l\u1ecbch s\u1ef1, k\u1ec3 c\u1ea3 khi trao \u0111\u1ed5i ri\xeang v\u1ec1 k\u1ebf ho\u1ea1ch h\u1ecdc."],A.Y("b6<d,u>"))
D.Vs=w([D.Z9],A.Y("v<Z<d,u>>"))
D.Wp=w([],x.V)
D.Wo=w([],x.A)
D.uY=w([],x.R)
D.a_e={"\u3002":0,"\u3001":1,"\u2026":2,"\xb7":3,"\u2014":4,"\uff5e":5,"\u2018":6,"\u2019":7,"\u201c":8,"\u201d":9,"\u300c":10,"\u300d":11,"\u300e":12,"\u300f":13,"\u300a":14,"\u300b":15,"\u3010":16,"\u3011":17,",":18,".":19,"!":20,"?":21,";":22,":":23,"'":24,'"':25,"(":26,")":27,"-":28,"~":29}
D.a3g=new A.fp(D.a_e,30,A.Y("fp<d>"))
D.a4r=new A.M(1/0,44)
D.Sd=new A.by(63389,"MaterialIcons",null,!1)
D.a4G=new I.EX(D.Sd,"\u0110ang m\u1edf chat","\u0110ang chu\u1ea9n b\u1ecb tr\u1ee3 l\xfd...","assets/images/gen_chat_empty.svg",null)
D.Vl=w([D.a4G],x.p)
D.a4D=new G.hT("Chat",y.b,C.d1,D.Vl,null)
D.R_=new A.ak(20,4,20,12)
D.af2=new B.ail(null)
D.a0m=new A.aQ(D.R_,D.af2,null)
D.a4J=new G.p_(D.a0m,null)
D.RK=new B.mV("Ng\u1eef ph\xe1p","Gi\u1ea3i th\xedch c\xe2u v\u1edbi \u4e86")
D.X5=w([D.ne,D.RK,D.nd],x.W)
D.a5h=new B.zA(D.X5)
D.aay=new A.di("G\u1ee3i \xfd pinyin",null,null,null,null,null,null,null,null,null)
D.aaJ=new A.di("Hi\u1ec7n \u0111\xe1p \xe1n",null,null,null,null,null,null,null,null,null)
D.fE=new B.aSA(0,"flat")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"bRv","bsA",()=>A.qN(new B.b7T(),x.z))
w($,"bRB","bf0",()=>D.K9.$2$1(B.bHA(),x.i,x.s))
w($,"bRw","bsB",()=>A.qN(new B.b7U(),x.E))
w($,"bRC","bsD",()=>A.qN(new B.b85(),x.M))})()};
(a=>{a["WfLnM/iuqrkZFGoys75Dith2EgY="]=a.current})($__dart_deferred_initializers__);