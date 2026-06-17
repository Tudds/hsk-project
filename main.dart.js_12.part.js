((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,E,B={
beQ(d,e,f){return new B.XE(d,e,f,null)},
aSe:function aSe(d,e){this.a=d
this.b=e},
XE:function XE(d,e,f,g){var _=this
_.c=d
_.d=e
_.r=f
_.a=g},
aPY:function aPY(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5){var _=this
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
aPZ:function aPZ(d){this.a=d},
a1f:function a1f(d,e,f){this.d=d
this.z=e
this.a=f},
aWI:function aWI(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5){var _=this
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
aWJ:function aWJ(d){this.a=d},
Cb:function Cb(d){this.b=d
this.c=null},
aq2:function aq2(d){this.a=d},
bg6(d){var w,v,u,t,s,r,q,p,o="cultureTip",n=x.Y,m=n.a(d.i(0,"speakers"))
if(m==null)m=C.p
w=x.P
m=J.c3(m,w)
v=A.l(m).h("L<Q.E,Cc>")
m=A.N(new A.L(m,B.bHz(),v),v.h("a8.E"))
m.$flags=1
m=n.a(d.i(0,"lines"))
u=J.c3(m==null?C.p:m,w)
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
s.push(new B.a_6(p,q==null?"":q))}q=A.ad(d.i(0,o))
q=q==null?null:C.c.dk(q).length===0
if(q===!1)A.aj(d.i(0,o))
q=n.a(d.i(0,"relatedGrammar"))
if(q==null)q=C.p
A.dS(q,!0,x.N)
n=n.a(d.i(0,"vocabulary"))
n=J.c3(n==null?C.p:n,w)
w=A.l(n).h("L<Q.E,Cd>")
n=A.N(new A.L(n,B.bHA(),w),w.h("a8.E"))
n.$flags=1
return new B.x1(m,v,t,s,n)},
bun(d){var w,v,u=A.ad(d.i(0,"zh"))
if(u==null)u=""
w=A.ad(d.i(0,"pinyin"))
if(w==null)w=""
v=A.ad(d.i(0,"vi"))
if(v==null)v=""
A.ad(d.i(0,"pos"))
return new B.Cd(u,w,v)},
bum(d){A.ad(d.i(0,"code"))
A.ad(d.i(0,"nameVi"))
A.ad(d.i(0,"role"))
B.bJ9(A.ad(d.i(0,"avatarColor")))
return new B.Cc()},
bJ9(d){var w,v,u=null
if(d==null)return u
w=C.c.dk(d)
if(w.length===0)return u
if(C.c.b0(w,"#"))w=C.c.bF(w,1)
if(w.length===6)w="FF"+w
if(w.length!==8)return u
v=A.uE(w,16)
if(v==null)return u
return A.bB(v)},
x1:function x1(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.f=f
_.y=g
_.as=h},
Cd:function Cd(d,e,f){this.a=d
this.b=e
this.c=f},
Cc:function Cc(){},
a_6:function a_6(d,e){this.c=d
this.e=e},
b7u:function b7u(){},
bnH(d){var w,v,u,t=new A.cV("")
for(w=new A.z2(d);w.t();){v=w.d
u=A.dI(v>=65281&&v<=65374?v-65248:v)
if(C.c.dk(u).length===0)continue
if(D.a33.q(0,u))continue
t.a+=u}w=t.a
return w.charCodeAt(0)==0?w:w},
bHB(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=x.K.h("z.E"),a2=A.iN(new A.ip(a3),B.bn5(),a1,a0)
a2=A.N(a2,A.l(a2).h("z.E"))
a2.$flags=1
w=a2
a0=A.iN(new A.ip(a4),B.bn5(),a1,a0)
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
if(a1===a2){n.push(new B.mX(a2,D.u0));++r;++q}else{m=r+1
p=q+1
if(t[m][q]>=t[r][p]){n.push(new B.mX(a1,D.eV))
r=m}else{n.push(new B.mX(a2,D.eW))
q=p}}}for(;r<w.length;r=m){m=r+1
n.push(new B.mX(w[r],D.eV))}for(;q<v.length;q=p){p=q+1
n.push(new B.mX(v[q],D.eW))}l=A.b([],a0)
for(k=0;a1=n.length,k<a1;++k){j=n[k]
i=k+1
h=i<a1?n[i]:null
if(h!=null){a1=j.b
if(!(a1===D.eV&&h.b===D.eW)){a1=a1===D.eW&&h.b===D.eV
g=a1}else g=!0}else g=!1
if(g){l.push(new B.mX((j.b===D.eW?j:h).a,D.u1))
k=i}else l.push(j)}f=A.b([],a0)
for(a0=l.length,e=0;e<l.length;l.length===a0||(0,A.x)(l),++e){d=l[e]
if(f.length!==0&&C.b.ga3(f).b===d.b)f[f.length-1]=new B.mX(C.b.ga3(f).a+d.a,d.b)
else f.push(d)}return f},
CJ:function CJ(d,e){this.a=d
this.b=e},
mX:function mX(d,e){this.a=d
this.b=e},
bvL(){return new B.tI()},
bvM(d){var w,v,u,t
switch(d.a){case 0:w=D.tW
break
case 3:w=D.tX
break
case 2:w=D.n9
break
case 1:w=D.na
break
default:w=null}v=A.b([w],x.W)
for(u=0;u<5;++u){t=D.Up[u]
if(t!==w)v.push(t)}return v},
lM:function lM(d,e){this.a=d
this.b=e},
tI:function tI(){this.x=0
this.b=null},
Ce:function Ce(d){this.b=d},
b7v:function b7v(){},
D9:function D9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b7H:function b7H(){},
b7G:function b7G(){},
a_7:function a_7(d,e){this.a=d
this.b=e},
x2:function x2(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
YO:function YO(d,e){this.a=d
this.b=e},
xr:function xr(d,e,f){this.b=d
this.c=e
this.d=f},
lL:function lL(){},
lE:function lE(d){this.a=d},
FK:function FK(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
KZ:function KZ(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
N4:function N4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Os:function Os(d,e,f){this.a=d
this.b=e
this.c=f},
JX:function JX(d){this.a=d},
zx:function zx(d){this.a=d},
mU:function mU(d,e){this.a=d
this.b=e},
btm(){return new B.tf(null)},
tf:function tf(d){this.a=d},
Rf:function Rf(){this.d=$
this.c=this.a=null},
aS9:function aS9(){},
aS8:function aS8(d){this.a=d},
aS7:function aS7(d){this.a=d},
aS6:function aS6(d,e){this.a=d
this.b=e},
acH:function acH(d,e,f){this.c=d
this.d=e
this.a=f},
a8C:function a8C(d,e,f){this.c=d
this.d=e
this.a=f},
aik:function aik(d,e){this.c=d
this.a=e},
a8o:function a8o(d,e){this.c=d
this.a=e},
aiu:function aiu(d,e){this.c=d
this.a=e},
abp:function abp(d,e){this.c=d
this.a=e},
Tu:function Tu(d,e){this.c=d
this.a=e},
ae5:function ae5(){this.c=this.a=this.d=null},
aZO:function aZO(d,e){this.a=d
this.b=e},
aZN:function aZN(d,e){this.a=d
this.b=e},
UE:function UE(d,e){this.c=d
this.a=e},
aga:function aga(d){var _=this
_.d=$
_.e=d
_.f=!1
_.c=_.a=null},
b1x:function b1x(d,e){this.a=d
this.b=e},
b1w:function b1w(d,e){this.a=d
this.b=e},
b1y:function b1y(d,e){this.a=d
this.b=e},
b1v:function b1v(d,e){this.a=d
this.b=e},
b1z:function b1z(d){this.a=d},
b1u:function b1u(d){this.a=d},
agQ:function agQ(d,e,f){this.c=d
this.d=e
this.a=f},
b2K:function b2K(d,e){this.a=d
this.b=e},
G5:function G5(d,e){this.d=d
this.a=e},
a9d:function a9d(){var _=this
_.d=_.w=$
_.c=_.a=null},
aSJ:function aSJ(d){this.a=d},
ai3:function ai3(d){this.a=d},
b4_:function b4_(d){this.a=d},
b40:function b40(){},
Ah:function Ah(d,e){this.c=d
this.a=e},
JY:function JY(d,e){this.c=d
this.a=e},
RN:function RN(d){var _=this
_.d=$
_.w=_.r=_.f=_.e=!1
_.x=d
_.c=_.a=null},
aTV:function aTV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aTW:function aTW(d){this.a=d},
aTY:function aTY(d){this.a=d},
aTZ:function aTZ(d){this.a=d},
aTX:function aTX(d){this.a=d},
aa6:function aa6(d,e){this.c=d
this.a=e},
amK:function amK(){},
bAm(d){return A.dI(d)}},D,I,M,G,F,H,K
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
B.aSe.prototype={
J(){return"_ChipVariant."+this.b}}
B.XE.prototype={
F(d){var w,v,u=null
A.C(d)
w=this.r
v=w!=null
return A.a3w(!1,this.c,C.df,u,u,u,u,C.l,u,new B.aPY(d,v,D.fB,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,C.hJ,u,u,u,u,u,u,u,u),u,u,u,u,u,u,u,u,v,this.d,u,u,u,u,u,w,u,u,u,!1,u,u,u,u,u,u,u,!0,u,u)}}
B.aPY.prototype={
god(){var w,v=this,u=v.go
if(u===$){w=A.C(v.fr)
v.go!==$&&A.ax()
u=v.go=w.ax}return u},
gdh(){if(this.fy===D.fB)var w=0
else w=this.fx?1:0
return w},
guw(){return 1},
ghe(){var w,v=this,u=v.id
if(u===$){w=A.C(v.fr)
v.id!==$&&A.ax()
u=v.id=w.ok}w=u.as
if(w==null)w=null
else w=w.bo(v.fx?v.god().k3:v.god().k3)
return w},
gbL(){return new A.bV(new B.aPZ(this),x.b)},
gbB(){if(this.fy===D.fB)var w=C.D
else{w=this.god().x1
if(w==null)w=C.o}return w},
gbQ(){return C.D},
goG(){return null},
goJ(){return null},
geW(){var w,v,u=this
if(u.fy===D.fB)if(u.fx){w=u.god()
v=w.to
if(v==null){v=w.u
w=v==null?w.k3:v}else w=v
w=new A.ba(w,1,C.z,-1)}else{w=u.god().k3
w=new A.ba(A.aW(31,w.I()>>>16&255,w.I()>>>8&255,w.I()&255),1,C.z,-1)}else w=C.lC
return w},
gfn(){var w=null
return new A.dR(18,w,w,w,w,this.fx?this.god().b:this.god().k3,w,w,w)},
gce(){return C.di},
goU(){var w=this.ghe(),v=w==null?null:w.r
if(v==null)v=14
w=A.bG(this.fr,C.aW)
w=w==null?null:w.gcJ()
w=A.mN(C.dR,C.cn,A.E((w==null?C.aq:w).aT(v)/14-1,0,1))
w.toString
return w}}
B.a1f.prototype={
F(d){var w,v,u=null
A.C(d)
A.C(d)
w=this.z
v=w!=null
return A.a3w(!1,u,C.df,u,u,u,u,C.l,u,new B.aWI(d,!0,!1,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,C.hJ,u,u,u,0,u,u,u,u),u,C.uf,u,u,u,u,u,u,v,this.d,u,u,u,u,w,u,u,u,u,!1,u,u,u,u,u,u,u,!0,u,u)}}
B.aWI.prototype={
gt4(){var w,v=this,u=v.go
if(u===$){w=A.C(v.fr)
v.go!==$&&A.ax()
u=v.go=w.ax}return u},
ghe(){var w,v,u,t=this,s=t.id
if(s===$){w=A.C(t.fr)
t.id!==$&&A.ax()
s=t.id=w.ok}w=s.as
if(w==null)w=null
else{v=t.gt4()
u=v.rx
v=u==null?v.k3:u
v=w.bo(v)
w=v}return w},
gbL(){return new A.bV(new B.aWJ(this),x.b)},
gbB(){return C.D},
gbQ(){return C.D},
goG(){var w=this.gt4(),v=w.rx
w=v==null?w.k3:v
return w},
goJ(){var w=this.gt4(),v=w.rx
w=v==null?w.k3:v
return w},
geW(){var w=this.gt4(),v=w.to
if(v==null){v=w.u
w=v==null?w.k3:v}else w=v
w=new A.ba(w,1,C.z,-1)
return w},
gfn(){var w=null,v=this.gt4(),u=v.rx
v=u==null?v.k3:u
return new A.dR(18,w,w,w,w,v,w,w,w)},
gce(){return C.di},
goU(){var w=this.ghe(),v=w==null?null:w.r
if(v==null)v=14
w=A.bG(this.fr,C.aW)
w=w==null?null:w.gcJ()
w=A.mN(C.dR,C.cn,A.E((w==null?C.aq:w).aT(v)/14-1,0,1))
w.toString
return w}}
B.Cb.prototype={
J2(){var w=0,v=A.p(x.Q),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$J2=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:i=t.c
if(i!=null){u=i
w=1
break}s=$.lw()
h=J
g=x.j
f=C.P
w=3
return A.i(s.nE("assets/data/conversation.json"),$async$J2)
case 3:r=h.c3(g.a(f.hr(e,null)),x.P)
q=A.w(x.N,x.y)
for(p=A.l(r),o=new A.aN(r,r.gE(r),p.h("aN<Q.E>")),p=p.h("Q.E");o.t();){n=o.d
if(n==null)n=p.a(n)
m=n.i(0,"id")
if(typeof m=="string")q.m(0,m,B.bg6(n))}if(t.b)for(l=0;l<1;++l){k=D.Vf[l]
j=k.i(0,"id")
if(typeof j=="string")q.bc(j,new B.aq2(k))}u=t.c=q
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$J2,v)}}
B.x1.prototype={}
B.Cd.prototype={}
B.Cc.prototype={}
B.a_6.prototype={}
B.CJ.prototype={
J(){return"HanziDiffKind."+this.b}}
B.mX.prototype={
k(d,e){if(e==null)return!1
return e instanceof B.mX&&e.a===this.a&&e.b===this.b},
gp(d){return A.P(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"HanziDiffSegment("+this.b.b+', "'+this.a+'")'}}
B.lM.prototype={}
B.tI.prototype={
cN(){var w=0,v=A.p(x.s),u,t=this,s
var $async$cN=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:s=A.jM(t).ck($.lx(),x.L)
t.Om()
u=new B.lM(A.b([new B.xr(D.rd,"",A.b([D.Lz,new B.zx(B.bvM(s.c))],x.A))],x.r),!1)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$cN,v)},
ys(d){return this.ahr(d)},
ahr(d){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ys=A.q(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:f=C.c.dk(d)
if(J.bi(f)===0){w=1
break}k=r.gbJ().gn()
w=k==null?3:4
break
case 3:w=5
return A.i(r.cN(),$async$ys)
case 5:k=a1
case 4:r.Om()
j=k.a
i=x.B
h=A.N(j,i)
h.push(new B.xr(D.rc,f,D.Wb))
q=h
h=q
j=h==null?j:h
h=x.s
r.sbJ(A.Be(new B.lM(j,!0),h))
t=7
w=10
return A.i(A.jM(r).ck($.bs3(),x.M).xR(f),$async$ys)
case 10:p=a1
r.Om()
o=new B.xr(D.rd,"",p)
j=A.N(q,i)
n=j
J.d8(n,o)
r.sbJ(A.Be(new B.lM(n,!1),h))
t=2
w=9
break
case 7:t=6
e=s.pop()
m=A.a2(e)
l=A.ah(e)
r.sbJ(A.b9x(m,l,null,h))
w=9
break
case 6:w=2
break
case 9:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$ys,v)},
Om(){return"chat_"+ ++this.x}}
B.Ce.prototype={
C3(d,e){return this.aSH(d,e)},
aSH(d,e){var w=0,v=A.p(x.a),u,t=this,s,r,q,p
var $async$C3=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:w=3
return A.i(t.DX(e,d),$async$C3)
case 3:s=g
r=J.aO(s)
w=r.gE(s)<10?4:5
break
case 4:q=r
p=s
w=6
return A.i(t.Gl(e,d),$async$C3)
case 6:q.C(p,g)
case 5:if(r.ga_(s)){u=null
w=1
break}u=r.i(s,C.bm.kY(r.gE(s)))
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$C3,v)},
DX(d,e){return this.aqM(d,e)},
aqM(d,e){var w=0,v=A.p(x.g),u,t,s,r,q,p,o,n,m
var $async$DX=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:w=3
return A.i(D.TB.acL(e),$async$DX)
case 3:n=g
m=A.b([],x.V)
for(t=J.ay(n),s=d===D.j6,r=d===D.me;t.t();){q=t.gK()
p=q.d
o=!1
if(p.length!==0)if(new A.ip(p).gE(0)<=16)if(!s||q.Q!=null)o=!r||q.f.length!==0
if(o)m.push(new B.x2(d,p,q.e,q.f,q.b,q.Q))}u=m
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$DX,v)},
Gl(d,e){return this.aIn(d,e)},
aIn(d,e){var w=0,v=A.p(x.g),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Gl=A.q(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=null
t=4
w=7
return A.i(r.b.Ue(e),$async$Gl)
case 7:j=g
t=2
w=6
break
case 4:t=3
i=s.pop()
u=D.Wc
w=1
break
w=6
break
case 3:w=2
break
case 6:p=A.b([],x.V)
for(o=J.ay(j),n=d===D.me;o.t();){m=o.gK()
l=m.r
k=!1
if(l.length!==0)if(C.b.gM(l).a.length!==0)if(new A.ip(C.b.gM(l).a).gE(0)<=16)k=!n||C.b.gM(l).c.length!==0
if(k)p.push(new B.x2(d,C.b.gM(l).a,C.b.gM(l).b,C.b.gM(l).c,m.w,"https://pub-7d5fb452d3c14b469b1d630f885dfa87.r2.dev/audio/v1/vocab/"+m.a+"_E0.mp3"))}u=p
w=1
break
case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$Gl,v)}}
B.D9.prototype={
xR(d){return this.aVM(d)},
aVM(d){var w=0,v=A.p(x.U),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$xR=A.q(function(a0,a1){if(a0===1)return A.m(a1,v)
for(;;)switch(w){case 0:e=C.c.dk(d).toLowerCase()
if(C.c.q(e,"luy\u1ec7n nghe")||C.c.q(e,"ch\xe9p ch\xednh t\u1ea3")||C.c.q(e,"nghe vi\u1ebft")||C.c.q(e,"nghe g\xf5")||C.c.q(e,"nghe r\u1ed3i vi\u1ebft")||C.c.q(e,"dictation")){u=t.z8(D.j6)
w=1
break}if(C.c.q(e,"luy\u1ec7n d\u1ecbch")||C.c.q(e,"d\u1ecbch vi\u1ec7t")||C.c.q(e,"d\u1ecbch sang ti\u1ebfng trung")||C.c.q(e,"vi\u1ec7t-trung")||C.c.q(e,"vi\u1ec7t trung")){u=t.z8(D.me)
w=1
break}s=t.a
w=3
return A.i(s.Ud(),$async$xR)
case 3:r=a1
w=4
return A.i(s.Uc(),$async$xR)
case 4:q=a1
w=5
return A.i(t.b.J2(),$async$xR)
case 5:p=a1
o=J.hz(p.geT())?null:J.wj(p.geT())
n=t.atO(r,e)
if(n==null){s=J.aO(r)
n=s.ga_(r)?null:s.gM(r)}m=t.atN(q,e)
if(m==null){s=J.aO(q)
m=s.ga_(q)?null:s.gM(q)}l=A.b([],x.A)
if(C.c.q(e,"quiz")||C.c.q(e,"luy\u1ec7n")||C.c.q(e,"\xf4n")||C.c.q(e,"kiem tra")||C.c.q(e,"ki\u1ec3m tra")){if(n==null){s=J.aO(r)
k=s.ga_(r)?null:s.gM(r)}else k=n
if(k!=null){l.push(new B.lE("M\xecnh t\u1ea1o nhanh m\u1ed9t quiz local t\u1eeb d\u1eef li\u1ec7u HSK."))
l.push(t.aDk(k,r))
j=t.aFp(k)
if(j!=null)l.push(j)}}else if(C.c.q(e,"ng\u1eef ph\xe1p")||C.c.q(e,"grammar")){if(m!=null){l.push(new B.lE("\u0110\xe2y l\xe0 \u0111i\u1ec3m ng\u1eef ph\xe1p ph\xf9 h\u1ee3p nh\u1ea5t m\xecnh t\xecm th\u1ea5y."))
l.push(t.a1A(m))}}else if((C.c.q(e,"h\u1ed9i tho\u1ea1i")||C.c.q(e,"\u0111\u1ed1i tho\u1ea1i")||C.c.q(e,"dialogue")||C.c.q(e,"conversation"))&&o!=null){s=o.y
i=s.length===0?null:C.b.gM(s)
l.push(new B.lE(i==null?o.f:o.c+": "+i.c+" - "+i.e))
for(s=o.as,s=A.dc(s,0,A.es(2,"count",x.S),A.X(s).c),h=s.$ti,s=new A.aN(s,s.gE(0),h.h("aN<a8.E>")),g=o.b,h=h.h("a8.E");s.t();){f=s.d
if(f==null)f=h.a(f)
l.push(new B.FK(f.a,f.b,f.c,g))}}else{s=n==null
if(!s){l.push(new B.lE("M\xecnh t\xecm th\u1ea5y t\u1eeb g\u1ea7n v\u1edbi c\xe2u h\u1ecfi c\u1ee7a b\u1ea1n."))
h=n.b
g=n.c
f=n.f
f=f.length===0?"":C.b.gM(f).b
l.push(new B.FK(h,g,f,n.w))}h=m==null
if(!h)l.push(t.a1A(m))
if(s&&h)l.push(D.Ly)}l.push(D.a54)
u=l
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$xR,v)},
z8(d){return this.arY(d)},
arY(d){var w=0,v=A.p(x.U),u,t=this,s,r,q,p,o,n,m
var $async$z8=A.q(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:s=t.d
w=3
return A.i(t.c.C3(s,d),$async$z8)
case 3:r=f
q=d===D.j6
p=q?"Luy\u1ec7n nghe ch\xe9p ch\xednh t\u1ea3":"Luy\u1ec7n d\u1ecbch Vi\u1ec7t-Trung"
o=q?"Luy\u1ec7n d\u1ecbch":"Luy\u1ec7n nghe"
n=q?"Luy\u1ec7n d\u1ecbch Vi\u1ec7t-Trung":"Luy\u1ec7n nghe ch\xe9p ch\xednh t\u1ea3"
m=new B.zx(A.b([new B.mU("C\xe2u kh\xe1c",p),new B.mU(o,n)],x.W))
if(r==null){u=A.b([new B.lE("Ch\u01b0a c\xf3 c\xe2u luy\u1ec7n ph\xf9 h\u1ee3p cho HSK "+s+"."),m],x.A)
w=1
break}u=A.b([new B.lE(q?"Nghe audio r\u1ed3i g\xf5 l\u1ea1i c\xe2u b\u1eb1ng ch\u1eef H\xe1n nh\xe9.":"D\u1ecbch c\xe2u sau sang ti\u1ebfng Trung nh\xe9."),new B.JX(r),m],x.A)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$z8,v)},
atO(d,e){var w,v,u,t,s,r
for(w=J.ay(d);w.t();){v=w.gK()
if(C.c.q(e,v.b.toLowerCase())||C.c.q(e,v.d.toLowerCase())||C.c.q(e,v.c.toLowerCase()))return v
for(u=v.f,t=u.length,s=0;s<t;++s){r=u[s].b
if(r.length!==0&&C.c.q(e,r.toLowerCase()))return v}}return null},
atN(d,e){var w,v
for(w=J.ay(d);w.t();){v=w.gK()
if(C.c.q(e,v.b.toLowerCase())||C.c.q(e,v.c.toLowerCase()))return v}return null},
a1A(d){return new B.KZ(d.b,d.c,d.d,d.e)},
aDk(d,e){var w,v,u,t,s=d.f,r=A.ck([s.length===0?"":C.b.gM(s).b],x.N)
for(w=J.ay(e),v=d.a;w.t();){u=w.gK()
if(u.a!==v){t=u.f
t=(t.length===0?"":C.b.gM(t).b).length!==0}else t=!1
if(t){u=u.f
r.v(0,u.length===0?"":C.b.gM(u).b)}}r=A.Ps(r,4,r.$ti.c)
r=A.N(r,A.l(r).h("z.E"))
r.$flags=1
s=s.length===0?"":C.b.gM(s).b
w=d.r
w=w.length===0?"T\u1eeb n\xe0y thu\u1ed9c HSK "+d.w+".":C.b.gM(w).c
return new B.N4(d.b+" ngh\u0129a l\xe0 g\xec?",r,s,w)},
aFp(d){var w,v,u,t,s=d.r
if(s.length===0)return null
w=C.b.gM(s)
s=A.b([],x.T)
for(v=new A.z2(w.a);v.t();){u=A.dI(v.d)
if(C.c.dk(u).length!==0)s.push(u)}v=s.length
if(v<2||v>12)return null
t=A.N(s,x.N)
C.b.Dn(t)
return new B.Os(w.c,t,C.b.hS(s))},
$ibgS:1}
B.a_7.prototype={
J(){return"DictationMode."+this.b}}
B.x2.prototype={}
B.YO.prototype={
J(){return"ChatMessageRole."+this.b}}
B.xr.prototype={}
B.lL.prototype={}
B.lE.prototype={}
B.FK.prototype={}
B.KZ.prototype={}
B.N4.prototype={}
B.Os.prototype={}
B.JX.prototype={}
B.zx.prototype={}
B.mU.prototype={}
B.tf.prototype={
a8(){return new B.Rf()}}
B.Rf.prototype={
F(d){return A.pz(this.gcf().c_($.beu(),x.J),new B.aS7(this),new B.aS8(this),new B.aS9())},
aq8(d){var w=C.c.dk(d)
if(w.length===0)return
A.dZ()
this.gcf().ck($.beu().gix(),x.i).ys(w)}}
B.acH.prototype={
F(d){var w,v,u=null,t=this.c
if(t.b===D.rc)return new B.aik(t.c,u)
w=A.b([],x.p)
for(t=J.ay(t.d),v=this.d;t.t();)w.push(new A.aT(C.eM,new B.a8C(t.gK(),v,u),u))
return new A.aT(D.QR,A.bs(w,C.F,C.j,C.m),u)}}
B.a8C.prototype={
F(d){var w,v=null,u=this.c
A:{if(u instanceof B.lE){w=new B.a8o(u.a,v)
break A}if(u instanceof B.FK){w=new B.aiu(u,v)
break A}if(u instanceof B.KZ){w=new B.abp(u,v)
break A}if(u instanceof B.N4){w=new B.Tu(u,v)
break A}if(u instanceof B.Os){w=new B.UE(u,v)
break A}if(u instanceof B.JX){w=new B.JY(u,v)
break A}if(u instanceof B.zx){w=new B.agQ(u.a,this.d,v)
break A}w=v}return w}}
B.aik.prototype={
F(d){var w=null,v=A.C(d).ax,u=A.b5(18)
return new A.eV(C.ls,w,w,A.bO(w,A.V(this.c,w,w,w,w,A.aQ(w,w,v.c,w,w,w,w,w,w,w,w,w,w,w,C.aj,w,w,!0,w,w,w,w,w,w,w,w),w,w),C.l,w,w,new A.b6(v.b,w,w,u,w,w,C.w),w,w,w,D.R_,E.mq,w,w,w),w)}}
B.a8o.prototype={
F(d){var w,v,u=null,t=A.C(d).ax,s=t.R8
if(s==null)s=t.k2
w=A.b5(18)
v=t.to
if(v==null){v=t.u
if(v==null)v=t.k3}v=A.dO(v.b3(0.45),1)
return A.bO(u,A.V(this.c,u,u,u,u,u,u,u),C.l,u,u,new A.b6(s,u,v,w,u,u,C.w),u,u,u,u,E.mq,u,u,u)}}
B.aiu.prototype={
F(d){var w,v,u,t,s=null,r=A.C(d).ax,q=r.d
if(q==null)q=r.b
w=A.b5(14)
v=this.c
u=r.e
q=A.bO(C.H,A.V("H"+v.e,s,s,s,s,A.aQ(s,s,u==null?r.c:u,s,s,s,s,s,s,s,s,s,s,s,C.a8,s,s,!0,s,s,s,s,s,s,s,s),s,s),C.l,s,s,new A.b6(q,s,s,w,s,s,C.w),s,52,s,s,s,s,s,52)
w=A.C(d).ok.f
w=w==null?s:w.ik(C.a8)
u=x.p
w=A.b([A.V(v.b,s,s,s,s,w,s,s)],u)
t=v.c
if(t.length!==0)w.push(A.V(t,s,s,s,s,A.aQ(s,s,r.b,s,s,s,s,s,s,s,s,s,s,s,C.a4,s,s,!0,s,s,s,s,s,s,s,s),s,s))
v=v.d
if(v.length!==0){t=r.rx
w.push(A.V(v,2,C.al,s,s,A.aQ(s,s,t==null?r.k3:t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s))}return new B.Ah(A.bM(A.b([q,H.oD,A.cO(A.bs(w,C.F,C.j,C.m),1,s)],u),C.t,s,C.j,C.m,0),s)}}
B.abp.prototype={
F(d){var w,v,u=null,t=A.C(d).ax,s=A.ey(D.RW,t.y,u,u,u),r=this.c,q=A.C(d).ok.w
q=q==null?u:q.ik(C.a8)
w=x.p
q=A.bM(A.b([s,C.b9,A.cO(A.V(r.b,1,C.al,u,u,q,u,u),1,u),A.V("HSK "+r.e,u,u,u,u,u,u,u)],w),C.t,u,C.j,C.m,0)
s=A.V(r.c,u,u,u,u,A.aQ(u,u,t.b,u,u,u,u,u,u,u,u,u,u,u,C.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u)
v=t.rx
return new B.Ah(A.bs(A.b([q,C.bQ,s,C.ef,A.V(r.d,3,C.al,u,u,A.aQ(u,u,v==null?t.k3:v,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u)],w),C.F,C.j,C.m),u)}}
B.Tu.prototype={
a8(){return new B.ae5()}}
B.ae5.prototype={
F(d){var w,v,u,t,s,r,q=this,p=null,o=A.C(d).ax,n=q.d,m=o.CW
m=A.ey(D.Sb,m==null?o.y:m,p,p,p)
w=q.a.c
v=A.C(d).ok.w
v=v==null?p:v.ik(C.a8)
u=x.p
u=A.b([A.bM(A.b([m,C.b9,A.cO(A.V(w.a,p,p,p,p,v,p,p),1,p)],u),C.t,p,C.j,C.m,0),C.at],u)
for(m=q.a.c.b,w=m.length,v=n==null,t=0;t<m.length;m.length===w||(0,A.x)(m),++t){s=m[t]
r=v?new B.aZO(q,s):p
u.push(new A.aT(C.mo,new L.Mv(!1,r,p,p,p,A.bxR(p,p,p,p,p,p,p,p,p,q.a_e(o,s,n),p,D.a4e,p,p,p,new A.ba(q.a_e(o,s,n),1,C.z,-1),p,p,p,p),p,p,!1,p,!0,p,A.V(s,p,p,p,p,p,p,p),p),p))}if(!v){m=q.a.c
w=m.c
m=m.d
m=n===w?"\u0110\xfang r\u1ed3i. "+m:"\u0110\xe1p \xe1n \u0111\xfang: "+w+". "+m
w=o.rx
u.push(A.V(m,p,p,p,p,A.aQ(p,p,w==null?o.k3:w,p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p))}return new B.Ah(A.bs(u,C.F,C.j,C.m),p)},
a_e(d,e,f){var w
if(f==null){w=d.ry
if(w==null){w=d.u
if(w==null)w=d.k3}return w}if(e===this.a.c.c)return d.b
if(e===f)return d.fy
w=d.to
if(w==null){w=d.u
if(w==null)w=d.k3}return w}}
B.UE.prototype={
a8(){return new B.aga(A.b([],x.T))}}
B.aga.prototype={
gMp(){var w,v=this,u=v.d
if(u===$){w=A.N(v.a.c.b,x.N)
v.d!==$&&A.ax()
v.d=w
u=w}return u},
F(d){var w,v,u,t,s,r,q=this,p=null,o=A.C(d).ax,n=q.e,m=C.b.hS(n)===q.a.c.c,l=A.ey(E.ub,o.y,p,p,p),k=A.C(d).ok.w,j=x.p
k=A.b([A.bM(A.b([l,C.b9,A.cO(A.V("S\u1eafp x\u1ebfp c\xe2u",p,p,p,p,k==null?p:k.ik(C.a8),p,p),1,p)],j),C.t,p,C.j,C.m,0)],j)
l=q.a.c.a
if(l.length!==0)C.b.C(k,A.b([C.aw,A.V(l,p,p,p,p,p,p,p)],j))
k.push(C.at)
l=A.b5(12)
if(q.f)w=m?o.b:o.fy
else{w=o.to
if(w==null){w=o.u
if(w==null)w=o.k3}}w=A.dO(w,1)
v=A.b([],j)
for(u=0;u<n.length;++u){t=A.V(n[u],p,p,p,p,p,p,p)
v.push(new B.a1f(t,q.f?p:new B.b1x(q,u),p))}k.push(A.bO(p,A.kk(v,C.bS,6,6),C.l,p,D.Jg,new A.b6(o.k2,p,w,l,p,p,C.w),p,p,p,p,D.Qv,p,p,1/0))
k.push(C.bQ)
l=A.b([],j)
for(j=q.gMp(),w=j.length,s=0;s<j.length;j.length===w||(0,A.x)(j),++s){r=j[s]
v=A.V(r,p,p,p,p,p,p,p)
l.push(B.beQ(p,v,q.f?p:new B.b1y(q,r)))}k.push(A.kk(l,C.bS,8,8))
k.push(C.at)
k.push(A.Cy(E.pa,n.length===0||q.f?p:new B.b1z(q),p))
if(q.f){n=m?"C\xe2u \u0111\xfang.":"\u0110\xe1p \xe1n: "+q.a.c.c
k.push(A.V(n,p,p,p,p,A.aQ(p,p,m?o.b:o.fy,p,p,p,p,p,p,p,p,p,p,p,C.a4,p,p,!0,p,p,p,p,p,p,p,p),p,p))}return new B.Ah(A.bs(k,C.F,C.j,C.m),p)}}
B.agQ.prototype={
F(d){var w,v,u,t,s=null,r=A.b([],x.p)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.x)(w),++u){t=w[u]
r.push(B.beQ(D.Sy,A.V(t.a,s,s,s,s,s,s,s),new B.b2K(this,t)))}return A.kk(r,C.bS,8,8)}}
B.G5.prototype={
a8(){return new B.a9d()},
aTr(d){return this.d.$1(d)}}
B.a9d.prototype={
gN_(){var w=this.w
if(w===$)w=this.w=new A.zD(C.kG,$.aC())
return w},
l(){var w=this.gN_()
w.aB$=$.aC()
w.ao$=0
this.az()},
F(d){var w,v,u=null,t=A.C(d).ax,s=t.R8
if(s==null)s=t.k2
w=A.b5(22)
v=t.to
if(v==null){v=t.u
if(v==null)v=t.k3}v=A.dO(v.b3(0.45),1)
return new A.aT(D.QT,A.jP(A.bM(A.b([A.cO(F.bbB(u,this.gN_(),D.T_,!0,u,4,1,u,this.a.d,u,C.Gc),1,u),new A.aT(D.Qn,new A.xB(u,u,u,D.Sz,u,new B.aSJ(this),"G\u1eedi",u,u,u,C.adu,u),u)],x.p),C.dP,u,C.j,C.m,0),new A.b6(s,u,v,w,u,u,C.w),C.bA),u)}}
B.ai3.prototype={
fi(d,e){var w,v,u,t,s,r,q,p=null,o="\u0110ang d\u1ef1ng GenUI...",n=A.C(d).ax
if(A.jE(e)){w=A.V("\u25cf \u25cf \u25cf",p,p,p,p,A.aQ(p,p,n.b,p,p,p,p,p,p,p,p,16,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p)
v=n.rx
return A.bM(A.b([w,C.hZ,A.V(o,p,p,p,p,A.aQ(p,p,v==null?n.k3:v,p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p)],x.p),C.t,p,C.j,C.aa,0)}w=new B.b4_(n)
v=n.R8
if(v==null)v=n.k2
u=A.b5(16)
t=n.to
if(t==null){t=n.u
if(t==null)t=n.k3}t=A.dO(t.b3(0.3),1)
s=w.$1(0)
r=w.$1(1)
w=w.$1(2)
q=n.rx
return A.bO(p,A.bM(A.b([s,C.fq,r,C.fq,w,C.fp,A.V(o,p,p,p,p,A.aQ(p,p,q==null?n.k3:q,p,p,p,p,p,p,p,p,13,p,p,C.a2,p,p,!0,p,p,p,p,p,p,p,p),p,p)],x.p),C.t,p,C.j,C.aa,0),C.l,p,p,new A.b6(v,p,t,u,p,p,C.w),p,p,p,p,E.th,p,p,p)}}
B.Ah.prototype={
F(d){var w,v,u=null,t=A.C(d).ax,s=t.R8
if(s==null)s=t.k2
w=A.b5(18)
v=t.to
if(v==null){v=t.u
if(v==null)v=t.k3}return A.bO(u,this.c,C.l,u,u,new A.b6(s,u,A.dO(v.b3(0.45),1),w,u,u,C.w),u,u,u,u,C.dh,u,u,1/0)},
gN(){return this.c}}
B.JY.prototype={
a8(){return new B.RN(D.uQ)}}
B.RN.prototype={
gNh(){var w=this.d
if(w===$)w=this.d=new A.zD(C.kG,$.aC())
return w},
l(){var w=this.gNh()
w.aB$=$.aC()
w.ao$=0
this.az()},
a_Z(){var w,v=this,u=B.bnH(v.a.c.a.c),t=B.bnH(v.gNh().a.a)
if(t.length===0)return
w=t===u
if(w)A.q9()
else A.xv()
v.T(new B.aTV(v,w,u,t))},
aEo(){A.dZ()
this.T(new B.aTW(this))},
F(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Noto Serif SC",h=A.C(a0).ax,g=k.a.c.a,f=g.b===D.j6,e=k.f||k.w,d=h.R8
if(d==null)d=h.k2
w=A.b5(18)
v=h.to
if(v==null){v=h.u
if(v==null)v=h.k3}v=A.dO(v.b3(0.45),1)
u=f?D.S3:D.Si
t=h.CW
s=t==null
u=A.ey(u,s?h.y:t,j,j,j)
r=f?"Nghe vi\u1ebft H\xe1n t\u1ef1":"D\u1ecbch Vi\u1ec7t \u2192 Trung"
q=A.C(a0).ok.w
r=A.cO(A.V(r,j,j,j,j,q==null?j:q.ik(C.a8),j,j),1,j)
q=h.rx
p=q==null
o=x.p
r=A.b([A.bM(A.b([u,C.b9,r,A.V("HSK "+g.f,j,j,j,j,A.aQ(j,j,p?h.k3:q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j)],o),C.t,j,C.j,C.m,0),C.at],o)
if(f){u=A.kx(j,30,"Ph\xe1t audio",g.r)
r.push(A.bM(A.b([u,C.hZ,A.cO(A.V("B\u1ea5m nghe (nghe l\u1ea1i \u0111\u01b0\u1ee3c nhi\u1ec1u l\u1ea7n) r\u1ed3i g\xf5 l\u1ea1i c\xe2u.",j,j,j,j,A.aQ(j,j,p?h.k3:q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j),1,j)],o),C.t,j,C.j,C.m,0))}else r.push(A.V(g.e,j,j,j,j,A.C(a0).ok.w,j,j))
r.push(C.at)
u=k.gNh()
n=!e
m=h.k3
l=A.aQ(j,j,m,j,j,j,j,j,i,C.co,j,22,j,j,C.aj,j,1.15,!0,j,j,j,j,j,j,j,j)
r.push(F.bbB(!1,u,F.baz(j,new F.l2(4,A.b5(12),H.qC),j,j,j,j,j,j,!0,j,j,j,j,j,j,h.k2,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,j,"G\xf5 ch\u1eef H\xe1n...",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),!1,n,2,1,j,new B.aTY(k),l,C.p7))
r.push(C.bQ)
u=A.Cy(E.pa,e?j:k.garZ(),j)
l=A.zA(D.aal,k.r?j:new B.aTZ(k),j)
r.push(A.kk(A.b([u,l,A.zA(D.aav,k.w?j:k.gaEn(),j)],o),C.pL,8,8))
if(k.r&&n)C.b.C(r,A.b([C.ef,A.V(g.d,j,j,j,j,A.aQ(j,j,h.b,j,j,j,j,j,"Inter",C.d0,j,16,j,j,C.aj,j,j,!0,j,0.2,j,j,j,j,j,j),j,j)],o))
if(k.e&&!k.f&&!k.w){u=A.V("Ch\u01b0a \u0111\xfang, \u0111\u1ed1i chi\u1ebfu t\u1eebng ch\u1eef:",j,j,j,j,A.aQ(j,j,h.fy,j,j,j,j,j,j,j,j,j,j,j,C.a4,j,j,!0,j,j,j,j,j,j,j,j),j,j)
n=k.x
C.b.C(r,A.b([C.bQ,u,C.b0,new B.aa6(n,j),C.b0,A.V("S\u1eeda l\u1ea1i r\u1ed3i b\u1ea5m Ki\u1ec3m tra l\u1ea7n n\u1eefa nh\xe9.",j,j,j,j,A.aQ(j,j,p?m:q,j,j,j,j,j,j,j,j,13,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j)],o))}if(e){u=k.f
n=u?C.nc:D.S5
if(u)t=h.b
else if(s)t=h.y
t=A.ey(n,t,j,j,20)
s=u?"Ch\xednh x\xe1c!":"\u0110\xe1p \xe1n:"
t=A.bM(A.b([t,C.Fr,A.V(s,j,j,j,j,A.aQ(j,j,u?h.b:m,j,j,j,j,j,j,j,j,j,j,j,C.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j)],o),C.t,j,C.j,C.m,0)
s=A.b([A.V(g.c,j,j,j,j,A.aQ(j,j,m,j,j,j,j,j,i,C.co,j,24,j,j,C.aj,j,1.15,!0,j,j,j,j,j,j,j,j),j,j),A.V(g.d,j,j,j,j,A.aQ(j,j,h.b,j,j,j,j,j,"Inter",C.d0,j,15,j,j,C.aj,j,j,!0,j,0.2,j,j,j,j,j,j),j,j)],o)
u=g.e
if(u.length!==0)s.push(A.V(u,j,j,j,j,A.aQ(j,j,p?m:q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j))
u=A.b([A.cO(A.bs(s,C.F,C.j,C.m),1,j)],o)
s=g.r
if(s!=null&&!f)u.push(A.kx(j,24,j,s))
C.b.C(r,A.b([C.bQ,t,C.ef,A.bM(u,C.F,j,C.j,C.m,0)],o))}return A.bO(j,A.bs(r,C.F,C.j,C.m),C.l,j,j,new A.b6(d,j,v,w,j,j,C.w),j,j,j,j,C.dh,j,j,1/0)}}
B.aa6.prototype={
F(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=A.C(d).ax,i=A.b([],x.k)
for(w=this.c,v=w.length,u=x.N,t=j.rx,s=j.k3,r=j.fy,q=j.b,p=t==null,o=0;o<w.length;w.length===v||(0,A.x)(w),++o){n=w[o]
m=n.b
l=n.a
if(m===D.eV)l=C.b.hS(A.be(new A.ip(l).gE(0),"\uff3f",!1,u))
A:{if(D.u0===m){m=new A.F(!0,q,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
break A}if(D.u1===m||D.eW===m){m=new A.F(!0,r,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p5,r,k,k,k,k,k,k,k)
break A}if(D.eV===m){m=(p?s:t).b3(0.7)
m=new A.F(!0,m,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
break A}m=k}i.push(new A.hs(l,k,k,C.aQ,k,k,k,k,k,k,m))}return A.bjG(A.eP(i,k,k,k,k,k,k,k,k,k,k),A.aQ(k,k,s,k,k,k,k,k,"Noto Serif SC",C.co,k,22,k,k,C.aj,k,1.15,!0,k,k,k,k,k,k,k,k),k)}}
B.amK.prototype={
$2$1(d,e,f){return A.bf0(d,null,!0,null,null,e,f)},
$1(d){return this.$2$1(d,x.O,x.C)}}
var z=a.updateTypes(["~()","x1()","Cb(cy)","O<lM>()","Ce(cy)","D9(cy)","~(c)","hR()","hR(u,by)","hR(lM)","Cd(Z<c,@>)","Cc(Z<c,@>)","tI()","c(k)"])
B.aPZ.prototype={
$1(d){var w,v
if(d.q(0,C.C)){w=this.a
if(w.fy===D.fB)w=null
else{w=w.god().k3
w=A.aW(31,w.I()>>>16&255,w.I()>>>8&255,w.I()&255)}return w}w=this.a
if(w.fy===D.fB)w=null
else{w=w.god()
v=w.p3
w=v==null?w.k2:v}return w},
$S:46}
B.aWJ.prototype={
$1(d){var w,v
if(d.q(0,C.ay)&&d.q(0,C.C)){w=this.a.gt4().k3
return A.aW(31,w.I()>>>16&255,w.I()>>>8&255,w.I()&255)}if(d.q(0,C.C))return null
if(d.q(0,C.ay)){w=this.a.gt4()
v=w.Q
return v==null?w.y:v}return null},
$S:46}
B.aq2.prototype={
$0(){return B.bg6(this.a)},
$S:z+1}
B.b7u.prototype={
$1(d){return new B.Cb(!0)},
$S:z+2}
B.b7v.prototype={
$1(d){return new B.Ce(d.c_($.wh(),x.o))},
$S:z+4}
B.b7H.prototype={
$1(d){var w=x.S
return new B.D9(d.c_($.wh(),x.o),d.c_($.bs0(),x.z),d.c_($.bs1(),x.E),d.c_(A.oI($.lx(),new B.b7G(),x.L,w),w))},
$S:z+5}
B.b7G.prototype={
$1(d){return d.a},
$S:65}
B.aS9.prototype={
$0(){return D.a4q},
$S:z+7}
B.aS8.prototype={
$2(d,e){var w=null
return K.EQ(C.d1,A.b([new I.ER(M.ua,"Kh\xf4ng ph\u1ea3n h\u1ed3i \u0111\u01b0\u1ee3c",A.j(d),w,w),new G.oY(new B.G5(this.a.gMD(),w),w)],x.p),y.b,"Chat")},
$S:z+8}
B.aS7.prototype={
$1(d){var w=null,v=this.a,u=A.b([new A.EP(new A.OV(new B.aS6(v,d),d.a.length,!0,!0,!0,0,A.bo2(),w),w)],x.p)
if(d.b)u.push(D.a4w)
u.push(new G.oY(new B.G5(v.gMD(),w),w))
return K.EQ(C.d1,u,y.b,"Chat")},
$S:z+9}
B.aS6.prototype={
$2(d,e){var w,v=null,u=this.a
u=A.f6(new B.acH(this.b.a[e],u.gMD(),v),!A.jE(u.gcf()),v,v)
w=A.bK(0,18e4,0,0)
return A.l9(A.iH(u,v,A.bK(0,C.e.aE(e*40*1000),0,0),w),0.03,v,A.bK(0,22e4,0,0),0)},
$S:936}
B.aZO.prototype={
$0(){A.dZ()
var w=this.a
w.T(new B.aZN(w,this.b))},
$S:0}
B.aZN.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.b1x.prototype={
$0(){var w=this.a
w.T(new B.b1w(w,this.b))},
$S:0}
B.b1w.prototype={
$0(){var w=this.a
w.gMp().push(C.b.hw(w.e,this.b))},
$S:0}
B.b1y.prototype={
$0(){A.dZ()
var w=this.a
w.T(new B.b1v(w,this.b))},
$S:0}
B.b1v.prototype={
$0(){var w=this.a,v=this.b
C.b.G(w.gMp(),v)
w.e.push(v)},
$S:0}
B.b1z.prototype={
$0(){A.dZ()
var w=this.a
w.T(new B.b1u(w))},
$S:0}
B.b1u.prototype={
$0(){return this.a.f=!0},
$S:0}
B.b2K.prototype={
$0(){return this.a.d.$1(this.b.b)},
$S:0}
B.aSJ.prototype={
$0(){var w=this.a,v=w.gN_(),u=v.a.a
v.rX(C.G8)
w.a.aTr(u)},
$S:0}
B.b4_.prototype={
$1(d){var w=null,v=A.f6(A.bO(w,w,C.l,w,w,new A.b6(this.a.b,w,w,w,w,w,C.cx),w,7,w,w,w,w,w,7),w,new B.b40(),w),u=A.bK(0,38e4,0,0)
return A.bi_(v,0,D.OV,A.bK(0,C.e.aE(d*130*1000),0,0),u,-5)},
$S:217}
B.b40.prototype={
$1(d){return d.Vq(!0)},
$S:183}
B.aTV.prototype={
$0(){var w,v=this,u=v.a
u.e=!0
w=v.b
u.f=w
u.x=w?D.uQ:B.bHB(v.c,v.d)},
$S:0}
B.aTW.prototype={
$0(){var w=this.a
w.r=w.w=!0},
$S:0}
B.aTY.prototype={
$1(d){return this.a.a_Z()},
$S:33}
B.aTZ.prototype={
$0(){A.dZ()
var w=this.a
w.T(new B.aTX(w))},
$S:0}
B.aTX.prototype={
$0(){return this.a.r=!0},
$S:0};(function installTearOffs(){var w=a._static_1,v=a._static_0,u=a._instance_0u,t=a._instance_1u
w(B,"bHA","bun",10)
w(B,"bHz","bum",11)
v(B,"bGZ","bvL",12)
u(B.tI.prototype,"gkL","cN",3)
t(B.Rf.prototype,"gMD","aq8",6)
var s
u(s=B.RN.prototype,"garZ","a_Z",0)
u(s,"gaEn","aEo",0)
w(B,"bn5","bAm",13)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.rC,[B.aSe,B.CJ,B.a_7,B.YO])
w(A.a4,[B.XE,B.a1f,B.acH,B.a8C,B.aik,B.a8o,B.aiu,B.abp,B.agQ,B.Ah,B.aa6])
w(A.wH,[B.aPY,B.aWI])
w(A.fU,[B.aPZ,B.aWJ,B.b7u,B.b7v,B.b7H,B.b7G,B.aS7,B.b4_,B.b40,B.aTY])
w(A.u,[B.Cb,B.x1,B.Cd,B.Cc,B.a_6,B.mX,B.lM,B.Ce,B.D9,B.x2,B.xr,B.lL,B.mU,B.amK])
w(A.mI,[B.aq2,B.aS9,B.aZO,B.aZN,B.b1x,B.b1w,B.b1y,B.b1v,B.b1z,B.b1u,B.b2K,B.aSJ,B.aTV,B.aTW,B.aTZ,B.aTX])
v(B.tI,A.ww)
w(B.lL,[B.lE,B.FK,B.KZ,B.N4,B.Os,B.JX,B.zx])
w(A.o6,[B.tf,B.G5])
w(A.pM,[B.Rf,B.a9d])
w(A.lF,[B.aS8,B.aS6])
w(A.a_,[B.Tu,B.UE,B.JY])
w(A.aa,[B.ae5,B.aga,B.RN])
v(B.ai3,A.o7)})()
A.lm(b.typeUniverse,JSON.parse('{"XE":{"a4":[],"d":[]},"a1f":{"a4":[],"d":[]},"tI":{"ww":["lM"]},"D9":{"bgS":[]},"lE":{"lL":[]},"FK":{"lL":[]},"KZ":{"lL":[]},"N4":{"lL":[]},"Os":{"lL":[]},"JX":{"lL":[]},"zx":{"lL":[]},"Tu":{"a_":[],"d":[]},"UE":{"a_":[],"d":[]},"G5":{"a_":[],"d":[]},"tf":{"a_":[],"d":[]},"Rf":{"aa":["tf"]},"acH":{"a4":[],"d":[]},"a8C":{"a4":[],"d":[]},"aik":{"a4":[],"d":[]},"a8o":{"a4":[],"d":[]},"aiu":{"a4":[],"d":[]},"abp":{"a4":[],"d":[]},"ae5":{"aa":["Tu"]},"aga":{"aa":["UE"]},"agQ":{"a4":[],"d":[]},"a9d":{"aa":["G5"]},"ai3":{"a_":[],"d":[]},"Ah":{"a4":[],"d":[]},"JY":{"a_":[],"d":[]},"RN":{"aa":["JY"]},"aa6":{"a4":[],"d":[]}}'))
var y={b:"H\u1ecfi \u0111\xe1p, tra t\u1eeb v\xe0 luy\u1ec7n t\u1eadp ngay trong cu\u1ed9c tr\xf2 chuy\u1ec7n."}
var x=(function rtii(){var w=A.Y
return{O:w("ww<@>"),J:w("bw<lM>"),w:w("b3<c,c>"),y:w("x1"),z:w("Cb"),E:w("Ce"),i:w("tI"),B:w("xr"),M:w("bgS"),s:w("lM"),X:w("v<a_6>"),V:w("v<x2>"),A:w("v<lL>"),r:w("v<xr>"),W:w("v<mU>"),R:w("v<mX>"),k:w("v<fE>"),m:w("v<Z<c,c>>"),T:w("v<c>"),p:w("v<d>"),o:w("qm"),g:w("A<x2>"),U:w("A<lL>"),j:w("A<@>"),I:w("A<k>"),Q:w("Z<c,x1>"),P:w("Z<c,@>"),K:w("ip"),N:w("c"),L:w("it"),b:w("bV<W?>"),C:w("@"),S:w("k"),a:w("x2?"),Y:w("A<@>?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Jg=new A.ag(0,1/0,52,1/0)
D.JZ=new B.amK()
D.Ly=new B.lE("M\xecnh c\xf3 th\u1ec3 tra t\u1eeb, gi\u1ea3i th\xedch ng\u1eef ph\xe1p, t\u1ea1o quiz ho\u1eb7c g\u1ee3i \xfd c\xe2u h\u1ed9i tho\u1ea1i t\u1eeb d\u1eef li\u1ec7u local.")
D.Lz=new B.lE("Ch\xe0o b\u1ea1n, m\xecnh l\xe0 Chat GenUI local. M\xecnh c\xf3 th\u1ec3 tra t\u1eeb, gi\u1ea3i th\xedch ng\u1eef ph\xe1p, t\u1ea1o quiz v\xe0 luy\u1ec7n nghe-vi\u1ebft ch\u1eef H\xe1n t\u1eeb d\u1eef li\u1ec7u offline.")
D.rc=new B.YO(0,"user")
D.rd=new B.YO(1,"assistant")
D.OV=new A.ew(0.455,0.03,0.515,0.955)
D.j6=new B.a_7(0,"listen")
D.me=new B.a_7(1,"readVi")
D.Qn=new A.al(0,0,8,7)
D.Qv=new A.al(10,10,10,10)
D.QR=new A.al(20,6,20,12)
D.QT=new A.al(20,8,20,18)
D.R_=new A.al(64,6,20,10)
D.n9=new B.mU("H\u1ed9i tho\u1ea1i","Cho m\xecnh h\u1ed9i tho\u1ea1i m\u1eabu")
D.tW=new B.mU("Luy\u1ec7n nghe","Luy\u1ec7n nghe ch\xe9p ch\xednh t\u1ea3")
D.na=new B.mU("T\u1ea1o quiz","T\u1ea1o quiz HSK 2")
D.tX=new B.mU("Luy\u1ec7n d\u1ecbch","Luy\u1ec7n d\u1ecbch Vi\u1ec7t-Trung")
D.u0=new B.CJ(0,"match")
D.u1=new B.CJ(1,"wrong")
D.eV=new B.CJ(2,"missing")
D.eW=new B.CJ(3,"extra")
D.RW=new A.bF(62876,"MaterialIcons",null,!1)
D.S3=new A.bF(63457,"MaterialIcons",null,!1)
D.S5=new A.bF(63573,"MaterialIcons",null,!1)
D.Sb=new A.bF(983252,"MaterialIcons",null,!1)
D.Si=new A.bF(983632,"MaterialIcons",null,!1)
D.Sy=new A.fY(E.u7,18,null,null,null)
D.Sf=new A.bF(983367,"MaterialIcons",null,!0)
D.Sz=new A.fY(D.Sf,null,null,null,null)
D.QD=new A.al(16,14,10,14)
D.T_=new F.CY(null,null,null,null,null,null,null,null,null,null,"H\u1ecfi v\u1ec1 t\u1eeb v\u1ef1ng, ng\u1eef ph\xe1p ho\u1eb7c quiz...",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,D.QD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,H.pY,!0,null,null,null,null)
D.TB=new A.Lz(null)
D.Rz=new B.mU("Tra t\u1eeb","Tra t\u1eeb \u5b66\u4e60")
D.Up=w([D.Rz,D.na,D.n9,D.tW,D.tX],x.W)
D.a__={id:0,title:1,titleZh:2,titlePinyin:3,description:4,level:5,category:6,icon:7,lines:8,vocabulary:9,speakers:10,relatedGrammar:11,cultureTip:12}
D.f8={speaker:0,zh:1,pinyin:2,vi:3}
D.Z6=new A.b3(D.f8,["A","\u8001\u5e08\uff0c\u867d\u7136\u6211\u6bcf\u5929\u5b66\u4e60\uff0c\u4f46\u662f\u8fdb\u6b65\u4e0d\u592a\u5feb\u3002","L\u01ceosh\u012b, su\u012br\xe1n w\u01d2 m\u011biti\u0101n xu\xe9x\xed, d\xe0nsh\xec j\xecnb\xf9 b\xfa t\xe0i ku\xe0i.","C\xf4 \u01a1i, tuy ng\xe0y n\xe0o em c\u0169ng h\u1ecdc, nh\u01b0ng ti\u1ebfn b\u1ed9 kh\xf4ng nhanh l\u1eafm."],x.w)
D.Z8=new A.b3(D.f8,["B","\u522b\u7740\u6025\uff0c\u53ea\u8981\u4f60\u575a\u6301\u7ec3\u4e60\uff0c\u5c31\u4f1a\u8d8a\u6765\u8d8a\u597d\u3002","Bi\xe9 zh\xe1oj\xed, zh\u01d0y\xe0o n\u01d0 ji\u0101nch\xed li\xe0nx\xed, ji\xf9 hu\xec yu\xe8 l\xe1i yu\xe8 h\u01ceo.","\u0110\u1eebng s\u1ed1t ru\u1ed9t, ch\u1ec9 c\u1ea7n em ki\xean tr\xec luy\u1ec7n t\u1eadp th\xec s\u1ebd ng\xe0y c\xe0ng t\u1ed1t."],x.w)
D.Z5=new A.b3(D.f8,["A","\u5982\u679c\u6211\u5de5\u4f5c\u5f88\u5fd9\uff0c\u8fd8\u5e94\u8be5\u6bcf\u5929\u590d\u4e60\u5417\uff1f","R\xfagu\u01d2 w\u01d2 g\u014dngzu\xf2 h\u011bn m\xe1ng, h\xe1i y\u012bngg\u0101i m\u011biti\u0101n f\xf9x\xed ma?","N\u1ebfu c\xf4ng vi\u1ec7c b\u1eadn, em v\u1eabn n\xean \xf4n m\u1ed7i ng\xe0y kh\xf4ng?"],x.w)
D.Z3=new A.b3(D.f8,["B","\u5f53\u7136\u3002\u53ea\u6709\u628a\u4eca\u5929\u7684\u751f\u8bcd\u590d\u4e60\u5b8c\uff0c\u660e\u5929\u7684\u8bfe\u624d\u4f1a\u8f7b\u677e\u3002","D\u0101ngr\xe1n. Zh\u01d0y\u01d2u b\u01ce j\u012bnti\u0101n de sh\u0113ngc\xed f\xf9x\xed w\xe1n, m\xedngti\u0101n de k\xe8 c\xe1i hu\xec q\u012bngs\u014dng.","T\u1ea5t nhi\xean. Ch\u1ec9 khi \xf4n xong t\u1eeb m\u1edbi h\xf4m nay th\xec b\xe0i ng\xe0y mai m\u1edbi nh\u1eb9 h\u01a1n."],x.w)
D.Z7=new A.b3(D.f8,["A","\u90a3\u6211\u5148\u542c\u4e00\u904d\u5bf9\u8bdd\uff0c\u518d\u505a\u7ec3\u4e60\u3002","N\xe0 w\u01d2 xi\u0101n t\u012bng y\xed bi\xe0n du\xechu\xe0, z\xe0i zu\xf2 li\xe0nx\xed.","V\u1eady em nghe h\u1ed9i tho\u1ea1i m\u1ed9t l\u01b0\u1ee3t tr\u01b0\u1edbc, r\u1ed3i l\xe0m b\xe0i luy\u1ec7n t\u1eadp."],x.w)
D.Z4=new A.b3(D.f8,["B","\u5f88\u597d\uff0c\u867d\u7136\u65f6\u95f4\u4e0d\u591a\uff0c\u4f46\u662f\u65b9\u6cd5\u5bf9\u4e86\u5c31\u6709\u6548\u3002","H\u011bn h\u01ceo, su\u012br\xe1n sh\xedji\u0101n b\xf9 du\u014d, d\xe0nsh\xec f\u0101ngf\u01ce du\xec le ji\xf9 y\u01d2uxi\xe0o.","R\u1ea5t t\u1ed1t, tuy th\u1eddi gian kh\xf4ng nhi\u1ec1u nh\u01b0ng \u0111\xfang ph\u01b0\u01a1ng ph\xe1p th\xec hi\u1ec7u qu\u1ea3."],x.w)
D.VP=w([D.Z6,D.Z8,D.Z5,D.Z3,D.Z7,D.Z4],x.m)
D.f7={zh:0,pinyin:1,vi:2,pos:3}
D.YJ=new A.b3(D.f7,["\u8fdb\u6b65","j\xecnb\xf9","ti\u1ebfn b\u1ed9","\u0111\u1ed9ng t\u1eeb/danh t\u1eeb"],x.w)
D.YL=new A.b3(D.f7,["\u575a\u6301","ji\u0101nch\xed","ki\xean tr\xec","\u0111\u1ed9ng t\u1eeb"],x.w)
D.YH=new A.b3(D.f7,["\u590d\u4e60","f\xf9x\xed","\xf4n t\u1eadp","\u0111\u1ed9ng t\u1eeb"],x.w)
D.YK=new A.b3(D.f7,["\u751f\u8bcd","sh\u0113ngc\xed","t\u1eeb m\u1edbi","danh t\u1eeb"],x.w)
D.YI=new A.b3(D.f7,["\u8f7b\u677e","q\u012bngs\u014dng","nh\u1eb9 nh\xe0ng","t\xednh t\u1eeb"],x.w)
D.YG=new A.b3(D.f7,["\u65b9\u6cd5","f\u0101ngf\u01ce","ph\u01b0\u01a1ng ph\xe1p","danh t\u1eeb"],x.w)
D.Wy=w([D.YJ,D.YL,D.YH,D.YK,D.YI,D.YG],x.m)
D.Am={code:0,nameVi:1,role:2,avatarColor:3}
D.Zo=new A.b3(D.Am,["A","Vy","Ng\u01b0\u1eddi h\u1ecdc","#5E35B1"],x.w)
D.Zn=new A.b3(D.Am,["B","C\xf4 Mai","C\u1ed1 v\u1ea5n HSK3","#00897B"],x.w)
D.Vg=w([D.Zo,D.Zn],x.m)
D.Vp=w(["g_suiran_danshi","g_zhiyao_jiu","g_zhiyou_cai"],x.T)
D.YZ=new A.b3(D.a__,["conv_hsk3_conditions_01","L\u1eadp k\u1ebf ho\u1ea1ch \xf4n thi","\u51c6\u5907\u8003\u8bd5\u8ba1\u5212","Zh\u01d4nb\xe8i k\u01ceosh\xec j\xechu\xe0","Nh\u1edd c\u1ed1 v\u1ea5n HSK3 \u0111i\u1ec1u ch\u1ec9nh c\xe1ch \xf4n t\u1eadp khi th\u1eddi gian h\u1ea1n ch\u1ebf.",3,"study","\ud83d\udcda",D.VP,D.Wy,D.Vg,D.Vp,"\u1ede l\u1edbp ti\u1ebfng Trung, ng\u01b0\u1eddi h\u1ecdc th\u01b0\u1eddng g\u1ecdi gi\xe1o vi\xean l\xe0 \u8001\u5e08 \u0111\u1ec3 gi\u1eef s\u1eafc th\xe1i l\u1ecbch s\u1ef1, k\u1ec3 c\u1ea3 khi trao \u0111\u1ed5i ri\xeang v\u1ec1 k\u1ebf ho\u1ea1ch h\u1ecdc."],A.Y("b3<c,u>"))
D.Vf=w([D.YZ],A.Y("v<Z<c,u>>"))
D.Wc=w([],x.V)
D.Wb=w([],x.A)
D.uQ=w([],x.R)
D.a_3={"\u3002":0,"\u3001":1,"\u2026":2,"\xb7":3,"\u2014":4,"\uff5e":5,"\u2018":6,"\u2019":7,"\u201c":8,"\u201d":9,"\u300c":10,"\u300d":11,"\u300e":12,"\u300f":13,"\u300a":14,"\u300b":15,"\u3010":16,"\u3011":17,",":18,".":19,"!":20,"?":21,";":22,":":23,"'":24,'"':25,"(":26,")":27,"-":28,"~":29}
D.a33=new A.fo(D.a_3,30,A.Y("fo<c>"))
D.a4e=new A.M(1/0,44)
D.S2=new A.bF(63389,"MaterialIcons",null,!1)
D.a4t=new I.ER(D.S2,"\u0110ang m\u1edf chat","\u0110ang chu\u1ea9n b\u1ecb tr\u1ee3 l\xfd...","assets/images/gen_chat_empty.svg",null)
D.V8=w([D.a4t],x.p)
D.a4q=new G.hR("Chat",y.b,C.d1,D.V8,null)
D.QP=new A.al(20,4,20,12)
D.aeR=new B.ai3(null)
D.a0a=new A.aT(D.QP,D.aeR,null)
D.a4w=new G.oY(D.a0a,null)
D.Ry=new B.mU("Ng\u1eef ph\xe1p","Gi\u1ea3i th\xedch c\xe2u v\u1edbi \u4e86")
D.WV=w([D.na,D.Ry,D.n9],x.W)
D.a54=new B.zx(D.WV)
D.aal=new A.dq("G\u1ee3i \xfd pinyin",null,null,null,null,null,null,null,null,null)
D.aav=new A.dq("Hi\u1ec7n \u0111\xe1p \xe1n",null,null,null,null,null,null,null,null,null)
D.fB=new B.aSe(0,"flat")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"bQR","bs0",()=>A.qL(new B.b7u(),x.z))
w($,"bQX","beu",()=>D.JZ.$2$1(B.bGZ(),x.i,x.s))
w($,"bQS","bs1",()=>A.qL(new B.b7v(),x.E))
w($,"bQY","bs3",()=>A.qL(new B.b7H(),x.M))})()};
(a=>{a["Tce+m3Ctdru4n+PFpKX2gEifutY="]=a.current})($__dart_deferred_initializers__);