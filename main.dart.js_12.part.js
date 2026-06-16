((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,E,B={
bf9(d,e,f){return new B.XN(d,e,f,null)},
aSu:function aSu(d,e){this.a=d
this.b=e},
XN:function XN(d,e,f,g){var _=this
_.c=d
_.d=e
_.r=f
_.a=g},
aQc:function aQc(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5){var _=this
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
aQd:function aQd(d){this.a=d},
a1o:function a1o(d,e,f){this.d=d
this.z=e
this.a=f},
aX2:function aX2(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5){var _=this
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
aX3:function aX3(d){this.a=d},
Cb:function Cb(d){this.b=d
this.c=null},
aqc:function aqc(d){this.a=d},
bgt(d){var w,v,u,t,s,r,q,p,o="cultureTip",n=x.Y,m=n.a(d.i(0,"speakers"))
if(m==null)m=C.p
w=x.P
m=J.c6(m,w)
v=A.l(m).h("L<Q.E,Cc>")
m=A.M(new A.L(m,B.bI4(),v),v.h("a8.E"))
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
s.push(new B.a_f(p,q==null?"":q))}q=A.ad(d.i(0,o))
q=q==null?null:C.c.dl(q).length===0
if(q===!1)A.aj(d.i(0,o))
q=n.a(d.i(0,"relatedGrammar"))
if(q==null)q=C.p
A.dT(q,!0,x.N)
n=n.a(d.i(0,"vocabulary"))
n=J.c6(n==null?C.p:n,w)
w=A.l(n).h("L<Q.E,Cd>")
n=A.M(new A.L(n,B.bI5(),w),w.h("a8.E"))
n.$flags=1
return new B.x5(m,v,t,s,n)},
buM(d){var w,v,u=A.ad(d.i(0,"zh"))
if(u==null)u=""
w=A.ad(d.i(0,"pinyin"))
if(w==null)w=""
v=A.ad(d.i(0,"vi"))
if(v==null)v=""
A.ad(d.i(0,"pos"))
return new B.Cd(u,w,v)},
buL(d){A.ad(d.i(0,"code"))
A.ad(d.i(0,"nameVi"))
A.ad(d.i(0,"role"))
B.bJF(A.ad(d.i(0,"avatarColor")))
return new B.Cc()},
bJF(d){var w,v,u=null
if(d==null)return u
w=C.c.dl(d)
if(w.length===0)return u
if(C.c.b2(w,"#"))w=C.c.bG(w,1)
if(w.length===6)w="FF"+w
if(w.length!==8)return u
v=A.uH(w,16)
if(v==null)return u
return A.bB(v)},
x5:function x5(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.f=f
_.y=g
_.as=h},
Cd:function Cd(d,e,f){this.a=d
this.b=e
this.c=f},
Cc:function Cc(){},
a_f:function a_f(d,e){this.c=d
this.e=e},
b7K:function b7K(){},
bo2(d){var w,v,u,t=new A.cW("")
for(w=new A.z0(d);w.t();){v=w.d
u=A.dJ(v>=65281&&v<=65374?v-65248:v)
if(C.c.dl(u).length===0)continue
if(D.a3k.q(0,u))continue
t.a+=u}w=t.a
return w.charCodeAt(0)==0?w:w},
bI6(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=x.K.h("z.E"),a2=A.iN(new A.ir(a3),B.bnu(),a1,a0)
a2=A.M(a2,A.l(a2).h("z.E"))
a2.$flags=1
w=a2
a0=A.iN(new A.ir(a4),B.bnu(),a1,a0)
a0=A.M(a0,A.l(a0).h("z.E"))
a0.$flags=1
v=a0
u=w.length+1
t=J.lM(u,x.I)
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
if(a1===a2){n.push(new B.mW(a2,D.tY));++r;++q}else{m=r+1
p=q+1
if(t[m][q]>=t[r][p]){n.push(new B.mW(a1,D.eY))
r=m}else{n.push(new B.mW(a2,D.eZ))
q=p}}}for(;r<w.length;r=m){m=r+1
n.push(new B.mW(w[r],D.eY))}for(;q<v.length;q=p){p=q+1
n.push(new B.mW(v[q],D.eZ))}l=A.b([],a0)
for(k=0;a1=n.length,k<a1;++k){j=n[k]
i=k+1
h=i<a1?n[i]:null
if(h!=null){a1=j.b
if(!(a1===D.eY&&h.b===D.eZ)){a1=a1===D.eZ&&h.b===D.eY
g=a1}else g=!0}else g=!1
if(g){l.push(new B.mW((j.b===D.eZ?j:h).a,D.tZ))
k=i}else l.push(j)}f=A.b([],a0)
for(a0=l.length,e=0;e<l.length;l.length===a0||(0,A.x)(l),++e){d=l[e]
if(f.length!==0&&C.b.ga3(f).b===d.b)f[f.length-1]=new B.mW(C.b.ga3(f).a+d.a,d.b)
else f.push(d)}return f},
CJ:function CJ(d,e){this.a=d
this.b=e},
mW:function mW(d,e){this.a=d
this.b=e},
bw9(){return new B.tJ()},
bwa(d){var w,v,u,t
switch(d.a){case 0:w=D.tT
break
case 3:w=D.tU
break
case 2:w=D.ne
break
case 1:w=D.nf
break
default:w=null}v=A.b([w],x.W)
for(u=0;u<5;++u){t=D.Uz[u]
if(t!==w)v.push(t)}return v},
lJ:function lJ(d,e){this.a=d
this.b=e},
tJ:function tJ(){this.x=0
this.b=null},
Ce:function Ce(d){this.b=d},
b7L:function b7L(){},
D9:function D9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b7Y:function b7Y(){},
b7X:function b7X(){},
a_g:function a_g(d,e){this.a=d
this.b=e},
x6:function x6(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
YX:function YX(d,e){this.a=d
this.b=e},
xv:function xv(d,e,f){this.b=d
this.c=e
this.d=f},
lI:function lI(){},
lB:function lB(d){this.a=d},
FO:function FO(d,e,f,g){var _=this
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
zw:function zw(d){this.a=d},
mU:function mU(d,e){this.a=d
this.b=e},
btJ(){return new B.tg(null)},
tg:function tg(d){this.a=d},
Rq:function Rq(){this.d=$
this.c=this.a=null},
aSp:function aSp(){},
aSo:function aSo(d){this.a=d},
aSn:function aSn(d){this.a=d},
aSm:function aSm(d,e){this.a=d
this.b=e},
acV:function acV(d,e,f){this.c=d
this.d=e
this.a=f},
a8L:function a8L(d,e,f){this.c=d
this.d=e
this.a=f},
aiv:function aiv(d,e){this.c=d
this.a=e},
a8x:function a8x(d,e){this.c=d
this.a=e},
aiF:function aiF(d,e){this.c=d
this.a=e},
abD:function abD(d,e){this.c=d
this.a=e},
TF:function TF(d,e){this.c=d
this.a=e},
aej:function aej(){this.c=this.a=this.d=null},
b_9:function b_9(d,e){this.a=d
this.b=e},
b_8:function b_8(d,e){this.a=d
this.b=e},
UO:function UO(d,e){this.c=d
this.a=e},
ago:function ago(d){var _=this
_.d=$
_.e=d
_.f=!1
_.c=_.a=null},
b1Q:function b1Q(d,e){this.a=d
this.b=e},
b1P:function b1P(d,e){this.a=d
this.b=e},
b1R:function b1R(d,e){this.a=d
this.b=e},
b1O:function b1O(d,e){this.a=d
this.b=e},
b1S:function b1S(d){this.a=d},
b1N:function b1N(d){this.a=d},
ah2:function ah2(d,e,f){this.c=d
this.d=e
this.a=f},
b3_:function b3_(d,e){this.a=d
this.b=e},
G9:function G9(d,e){this.d=d
this.a=e},
a9n:function a9n(){var _=this
_.d=_.w=$
_.c=_.a=null},
aSZ:function aSZ(d){this.a=d},
aie:function aie(d){this.a=d},
b4c:function b4c(d){this.a=d},
b4d:function b4d(){},
Ag:function Ag(d,e){this.c=d
this.a=e},
K6:function K6(d,e){this.c=d
this.a=e},
RY:function RY(d){var _=this
_.d=$
_.w=_.r=_.f=_.e=!1
_.x=d
_.c=_.a=null},
aUf:function aUf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aUg:function aUg(d){this.a=d},
aUi:function aUi(d){this.a=d},
aUj:function aUj(d){this.a=d},
aUh:function aUh(d){this.a=d},
aaj:function aaj(d,e){this.c=d
this.a=e},
amS:function amS(){},
bAN(d){return A.dJ(d)}},D,I,M,G,F,H,K
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
B.aSu.prototype={
J(){return"_ChipVariant."+this.b}}
B.XN.prototype={
F(d){var w,v,u=null
A.B(d)
w=this.r
v=w!=null
return A.a3E(!1,this.c,C.de,u,u,u,u,C.l,u,new B.aQc(d,v,D.fE,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,C.hM,u,u,u,u,u,u,u,u),u,u,u,u,u,u,u,u,v,this.d,u,u,u,u,u,w,u,u,u,!1,u,u,u,u,u,u,u,!0,u,u)}}
B.aQc.prototype={
goh(){var w,v=this,u=v.go
if(u===$){w=A.B(v.fr)
v.go!==$&&A.ay()
u=v.go=w.ax}return u},
gdh(){if(this.fy===D.fE)var w=0
else w=this.fx?1:0
return w},
guz(){return 1},
ghd(){var w,v=this,u=v.id
if(u===$){w=A.B(v.fr)
v.id!==$&&A.ay()
u=v.id=w.ok}w=u.as
if(w==null)w=null
else w=w.bp(v.fx?v.goh().k3:v.goh().k3)
return w},
gbL(){return new A.bW(new B.aQd(this),x.b)},
gbj(){if(this.fy===D.fE)var w=C.D
else{w=this.goh().x1
if(w==null)w=C.n}return w},
gbD(){return C.D},
goL(){return null},
goP(){return null},
geY(){var w,v,u=this
if(u.fy===D.fE)if(u.fx){w=u.goh()
v=w.to
if(v==null){v=w.u
w=v==null?w.k3:v}else w=v
w=new A.ba(w,1,C.z,-1)}else{w=u.goh().k3
w=new A.ba(A.aX(31,w.I()>>>16&255,w.I()>>>8&255,w.I()&255),1,C.z,-1)}else w=C.lD
return w},
gfo(){var w=null
return new A.dS(18,w,w,w,w,this.fx?this.goh().b:this.goh().k3,w,w,w)},
gcd(){return C.dh},
gp0(){var w=this.ghd(),v=w==null?null:w.r
if(v==null)v=14
w=A.bH(this.fr,C.aX)
w=w==null?null:w.gcL()
w=A.mO(C.dT,C.co,A.E((w==null?C.as:w).aT(v)/14-1,0,1))
w.toString
return w}}
B.a1o.prototype={
F(d){var w,v,u=null
A.B(d)
A.B(d)
w=this.z
v=w!=null
return A.a3E(!1,u,C.de,u,u,u,u,C.l,u,new B.aX2(d,!0,!1,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,C.hM,u,u,u,0,u,u,u,u),u,C.ub,u,u,u,u,u,u,v,this.d,u,u,u,u,w,u,u,u,u,!1,u,u,u,u,u,u,u,!0,u,u)}}
B.aX2.prototype={
gt9(){var w,v=this,u=v.go
if(u===$){w=A.B(v.fr)
v.go!==$&&A.ay()
u=v.go=w.ax}return u},
ghd(){var w,v,u,t=this,s=t.id
if(s===$){w=A.B(t.fr)
t.id!==$&&A.ay()
s=t.id=w.ok}w=s.as
if(w==null)w=null
else{v=t.gt9()
u=v.rx
v=u==null?v.k3:u
v=w.bp(v)
w=v}return w},
gbL(){return new A.bW(new B.aX3(this),x.b)},
gbj(){return C.D},
gbD(){return C.D},
goL(){var w=this.gt9(),v=w.rx
w=v==null?w.k3:v
return w},
goP(){var w=this.gt9(),v=w.rx
w=v==null?w.k3:v
return w},
geY(){var w=this.gt9(),v=w.to
if(v==null){v=w.u
w=v==null?w.k3:v}else w=v
w=new A.ba(w,1,C.z,-1)
return w},
gfo(){var w=null,v=this.gt9(),u=v.rx
v=u==null?v.k3:u
return new A.dS(18,w,w,w,w,v,w,w,w)},
gcd(){return C.dh},
gp0(){var w=this.ghd(),v=w==null?null:w.r
if(v==null)v=14
w=A.bH(this.fr,C.aX)
w=w==null?null:w.gcL()
w=A.mO(C.dT,C.co,A.E((w==null?C.as:w).aT(v)/14-1,0,1))
w.toString
return w}}
B.Cb.prototype={
J5(){var w=0,v=A.p(x.Q),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$J5=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:i=t.c
if(i!=null){u=i
w=1
break}s=$.lt()
h=J
g=x.j
f=C.P
w=3
return A.i(s.nK("assets/data/conversation.json"),$async$J5)
case 3:r=h.c6(g.a(f.hr(e,null)),x.P)
q=A.w(x.N,x.y)
for(p=A.l(r),o=new A.aN(r,r.gE(r),p.h("aN<Q.E>")),p=p.h("Q.E");o.t();){n=o.d
if(n==null)n=p.a(n)
m=n.i(0,"id")
if(typeof m=="string")q.m(0,m,B.bgt(n))}if(t.b)for(l=0;l<1;++l){k=D.Vp[l]
j=k.i(0,"id")
if(typeof j=="string")q.bc(j,new B.aqc(k))}u=t.c=q
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$J5,v)}}
B.x5.prototype={}
B.Cd.prototype={}
B.Cc.prototype={}
B.a_f.prototype={}
B.CJ.prototype={
J(){return"HanziDiffKind."+this.b}}
B.mW.prototype={
k(d,e){if(e==null)return!1
return e instanceof B.mW&&e.a===this.a&&e.b===this.b},
gp(d){return A.P(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"HanziDiffSegment("+this.b.b+', "'+this.a+'")'}}
B.lJ.prototype={}
B.tJ.prototype={
d1(){var w=0,v=A.p(x.s),u,t=this,s
var $async$d1=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:s=A.jS(t).cw($.mz(),x.L)
t.Oo()
u=new B.lJ(A.b([new B.xv(D.rc,"",A.b([D.LC,new B.zw(B.bwa(s.c))],x.A))],x.r),!1)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$d1,v)},
yv(d){return this.ahw(d)},
ahw(d){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$yv=A.q(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:f=C.c.dl(d)
if(J.bm(f)===0){w=1
break}k=r.gbN().gn()
w=k==null?3:4
break
case 3:w=5
return A.i(r.d1(),$async$yv)
case 5:k=a1
case 4:r.Oo()
j=k.a
i=x.B
h=A.M(j,i)
h.push(new B.xv(D.rb,f,D.Wg))
q=h
h=q
j=h==null?j:h
h=x.s
r.sbN(A.Bc(new B.lJ(j,!0),h))
t=7
w=10
return A.i(A.jS(r).cw($.bsq(),x.M).xU(f),$async$yv)
case 10:p=a1
r.Oo()
o=new B.xv(D.rc,"",p)
j=A.M(q,i)
n=j
J.da(n,o)
r.sbN(A.Bc(new B.lJ(n,!1),h))
t=2
w=9
break
case 7:t=6
e=s.pop()
m=A.a2(e)
l=A.ah(e)
r.sbN(A.b9O(m,l,null,h))
w=9
break
case 6:w=2
break
case 9:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$yv,v)},
Oo(){return"chat_"+ ++this.x}}
B.Ce.prototype={
C3(d,e){return this.aSz(d,e)},
aSz(d,e){var w=0,v=A.p(x.a),u,t=this,s,r,q,p
var $async$C3=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:w=3
return A.i(t.E2(e,d),$async$C3)
case 3:s=g
r=J.aO(s)
w=r.gE(s)<10?4:5
break
case 4:q=r
p=s
w=6
return A.i(t.Gp(e,d),$async$C3)
case 6:q.B(p,g)
case 5:if(r.ga_(s)){u=null
w=1
break}u=r.i(s,C.bn.l1(r.gE(s)))
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$C3,v)},
E2(d,e){return this.aqH(d,e)},
aqH(d,e){var w=0,v=A.p(x.g),u,t,s,r,q,p,o,n,m
var $async$E2=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:w=3
return A.i(D.TJ.acP(e),$async$E2)
case 3:n=g
m=A.b([],x.V)
for(t=J.aF(n),s=d===D.jc,r=d===D.mf;t.t();){q=t.gK()
p=q.d
o=!1
if(p.length!==0)if(new A.ir(p).gE(0)<=16)if(!s||q.Q!=null)o=!r||q.f.length!==0
if(o)m.push(new B.x6(d,p,q.e,q.f,q.b,q.Q))}u=m
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$E2,v)},
Gp(d,e){return this.aIk(d,e)},
aIk(d,e){var w=0,v=A.p(x.g),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Gp=A.q(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=null
t=4
w=7
return A.i(r.b.Ug(e),$async$Gp)
case 7:j=g
t=2
w=6
break
case 4:t=3
i=s.pop()
u=D.Wh
w=1
break
w=6
break
case 3:w=2
break
case 6:p=A.b([],x.V)
for(o=J.aF(j),n=d===D.mf;o.t();){m=o.gK()
l=m.r
k=!1
if(l.length!==0)if(C.b.gM(l).a.length!==0)if(new A.ir(C.b.gM(l).a).gE(0)<=16)k=!n||C.b.gM(l).c.length!==0
if(k)p.push(new B.x6(d,C.b.gM(l).a,C.b.gM(l).b,C.b.gM(l).c,m.w,"https://pub-7d5fb452d3c14b469b1d630f885dfa87.r2.dev/audio/v1/vocab/"+m.a+"_E0.mp3"))}u=p
w=1
break
case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$Gp,v)}}
B.D9.prototype={
xU(d){return this.aVH(d)},
aVH(d){var w=0,v=A.p(x.U),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$xU=A.q(function(a0,a1){if(a0===1)return A.m(a1,v)
for(;;)switch(w){case 0:e=C.c.dl(d).toLowerCase()
if(C.c.q(e,"luy\u1ec7n nghe")||C.c.q(e,"ch\xe9p ch\xednh t\u1ea3")||C.c.q(e,"nghe vi\u1ebft")||C.c.q(e,"nghe g\xf5")||C.c.q(e,"nghe r\u1ed3i vi\u1ebft")||C.c.q(e,"dictation")){u=t.za(D.jc)
w=1
break}if(C.c.q(e,"luy\u1ec7n d\u1ecbch")||C.c.q(e,"d\u1ecbch vi\u1ec7t")||C.c.q(e,"d\u1ecbch sang ti\u1ebfng trung")||C.c.q(e,"vi\u1ec7t-trung")||C.c.q(e,"vi\u1ec7t trung")){u=t.za(D.mf)
w=1
break}s=t.a
w=3
return A.i(s.Uf(),$async$xU)
case 3:r=a1
w=4
return A.i(s.Ue(),$async$xU)
case 4:q=a1
w=5
return A.i(t.b.J5(),$async$xU)
case 5:p=a1
o=J.i4(p.geV())?null:J.wm(p.geV())
n=t.atv(r,e)
if(n==null){s=J.aO(r)
n=s.ga_(r)?null:s.gM(r)}m=t.att(q,e)
if(m==null){s=J.aO(q)
m=s.ga_(q)?null:s.gM(q)}l=A.b([],x.A)
if(C.c.q(e,"quiz")||C.c.q(e,"luy\u1ec7n")||C.c.q(e,"\xf4n")||C.c.q(e,"kiem tra")||C.c.q(e,"ki\u1ec3m tra")){if(n==null){s=J.aO(r)
k=s.ga_(r)?null:s.gM(r)}else k=n
if(k!=null){l.push(new B.lB("M\xecnh t\u1ea1o nhanh m\u1ed9t quiz local t\u1eeb d\u1eef li\u1ec7u HSK."))
l.push(t.aDe(k,r))
j=t.aFf(k)
if(j!=null)l.push(j)}}else if(C.c.q(e,"ng\u1eef ph\xe1p")||C.c.q(e,"grammar")){if(m!=null){l.push(new B.lB("\u0110\xe2y l\xe0 \u0111i\u1ec3m ng\u1eef ph\xe1p ph\xf9 h\u1ee3p nh\u1ea5t m\xecnh t\xecm th\u1ea5y."))
l.push(t.a1y(m))}}else if((C.c.q(e,"h\u1ed9i tho\u1ea1i")||C.c.q(e,"\u0111\u1ed1i tho\u1ea1i")||C.c.q(e,"dialogue")||C.c.q(e,"conversation"))&&o!=null){s=o.y
i=s.length===0?null:C.b.gM(s)
l.push(new B.lB(i==null?o.f:o.c+": "+i.c+" - "+i.e))
for(s=o.as,s=A.de(s,0,A.et(2,"count",x.S),A.X(s).c),h=s.$ti,s=new A.aN(s,s.gE(0),h.h("aN<a8.E>")),g=o.b,h=h.h("a8.E");s.t();){f=s.d
if(f==null)f=h.a(f)
l.push(new B.FO(f.a,f.b,f.c,g))}}else{s=n==null
if(!s){l.push(new B.lB("M\xecnh t\xecm th\u1ea5y t\u1eeb g\u1ea7n v\u1edbi c\xe2u h\u1ecfi c\u1ee7a b\u1ea1n."))
h=n.b
g=n.c
f=n.f
f=f.length===0?"":C.b.gM(f).b
l.push(new B.FO(h,g,f,n.w))}h=m==null
if(!h)l.push(t.a1y(m))
if(s&&h)l.push(D.LB)}l.push(D.a5j)
u=l
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$xU,v)},
za(d){return this.arV(d)},
arV(d){var w=0,v=A.p(x.U),u,t=this,s,r,q,p,o,n,m
var $async$za=A.q(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:s=t.d
w=3
return A.i(t.c.C3(s,d),$async$za)
case 3:r=f
q=d===D.jc
p=q?"Luy\u1ec7n nghe ch\xe9p ch\xednh t\u1ea3":"Luy\u1ec7n d\u1ecbch Vi\u1ec7t-Trung"
o=q?"Luy\u1ec7n d\u1ecbch":"Luy\u1ec7n nghe"
n=q?"Luy\u1ec7n d\u1ecbch Vi\u1ec7t-Trung":"Luy\u1ec7n nghe ch\xe9p ch\xednh t\u1ea3"
m=new B.zw(A.b([new B.mU("C\xe2u kh\xe1c",p),new B.mU(o,n)],x.W))
if(r==null){u=A.b([new B.lB("Ch\u01b0a c\xf3 c\xe2u luy\u1ec7n ph\xf9 h\u1ee3p cho HSK "+s+"."),m],x.A)
w=1
break}u=A.b([new B.lB(q?"Nghe audio r\u1ed3i g\xf5 l\u1ea1i c\xe2u b\u1eb1ng ch\u1eef H\xe1n nh\xe9.":"D\u1ecbch c\xe2u sau sang ti\u1ebfng Trung nh\xe9."),new B.K5(r),m],x.A)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$za,v)},
atv(d,e){var w,v,u,t,s,r
for(w=J.aF(d);w.t();){v=w.gK()
if(C.c.q(e,v.b.toLowerCase())||C.c.q(e,v.d.toLowerCase())||C.c.q(e,v.c.toLowerCase()))return v
for(u=v.f,t=u.length,s=0;s<t;++s){r=u[s].b
if(r.length!==0&&C.c.q(e,r.toLowerCase()))return v}}return null},
att(d,e){var w,v
for(w=J.aF(d);w.t();){v=w.gK()
if(C.c.q(e,v.b.toLowerCase())||C.c.q(e,v.c.toLowerCase()))return v}return null},
a1y(d){return new B.L8(d.b,d.c,d.d,d.e)},
aDe(d,e){var w,v,u,t,s=d.f,r=A.cl([s.length===0?"":C.b.gM(s).b],x.N)
for(w=J.aF(e),v=d.a;w.t();){u=w.gK()
if(u.a!==v){t=u.f
t=(t.length===0?"":C.b.gM(t).b).length!==0}else t=!1
if(t){u=u.f
r.v(0,u.length===0?"":C.b.gM(u).b)}}r=A.PD(r,4,r.$ti.c)
r=A.M(r,A.l(r).h("z.E"))
r.$flags=1
s=s.length===0?"":C.b.gM(s).b
w=d.r
w=w.length===0?"T\u1eeb n\xe0y thu\u1ed9c HSK "+d.w+".":C.b.gM(w).c
return new B.Nf(d.b+" ngh\u0129a l\xe0 g\xec?",r,s,w)},
aFf(d){var w,v,u,t,s=d.r
if(s.length===0)return null
w=C.b.gM(s)
s=A.b([],x.T)
for(v=new A.z0(w.a);v.t();){u=A.dJ(v.d)
if(C.c.dl(u).length!==0)s.push(u)}v=s.length
if(v<2||v>12)return null
t=A.M(s,x.N)
C.b.Dr(t)
return new B.OD(w.c,t,C.b.hV(s))},
$ibhd:1}
B.a_g.prototype={
J(){return"DictationMode."+this.b}}
B.x6.prototype={}
B.YX.prototype={
J(){return"ChatMessageRole."+this.b}}
B.xv.prototype={}
B.lI.prototype={}
B.lB.prototype={}
B.FO.prototype={}
B.L8.prototype={}
B.Nf.prototype={}
B.OD.prototype={}
B.K5.prototype={}
B.zw.prototype={}
B.mU.prototype={}
B.tg.prototype={
a8(){return new B.Rq()}}
B.Rq.prototype={
F(d){return A.pz(this.gcp().ci($.beN(),x.J),new B.aSn(this),new B.aSo(this),new B.aSp())},
aq3(d){var w=C.c.dl(d)
if(w.length===0)return
A.eb()
this.gcp().cw($.beN().gjA(),x.i).yv(w)}}
B.acV.prototype={
F(d){var w,v,u=null,t=this.c
if(t.b===D.rb)return new B.aiv(t.c,u)
w=A.b([],x.p)
for(t=J.aF(t.d),v=this.d;t.t();)w.push(new A.aT(C.eN,new B.a8L(t.gK(),v,u),u))
return new A.aT(D.QT,A.bl(w,C.F,C.j,C.m),u)}}
B.a8L.prototype={
F(d){var w,v=null,u=this.c
A:{if(u instanceof B.lB){w=new B.a8x(u.a,v)
break A}if(u instanceof B.FO){w=new B.aiF(u,v)
break A}if(u instanceof B.L8){w=new B.abD(u,v)
break A}if(u instanceof B.Nf){w=new B.TF(u,v)
break A}if(u instanceof B.OD){w=new B.UO(u,v)
break A}if(u instanceof B.K5){w=new B.K6(u,v)
break A}if(u instanceof B.zw){w=new B.ah2(u.a,this.d,v)
break A}w=v}return w}}
B.aiv.prototype={
F(d){var w=null,v=A.B(d).ax,u=A.b7(18)
return new A.ex(C.fN,w,w,A.bR(w,A.U(this.c,w,w,w,w,A.aQ(w,w,v.c,w,w,w,w,w,w,w,w,w,w,w,C.ah,w,w,!0,w,w,w,w,w,w,w,w),w,w),C.l,w,w,new A.b8(v.b,w,w,u,w,w,C.w),w,w,w,D.R2,E.mu,w,w,w),w)}}
B.a8x.prototype={
F(d){var w,v,u=null,t=A.B(d).ax,s=t.R8
if(s==null)s=t.k2
w=A.b7(18)
v=t.to
if(v==null){v=t.u
if(v==null)v=t.k3}v=A.dO(v.aY(0.45),1)
return A.bR(u,A.U(this.c,u,u,u,u,u,u,u),C.l,u,u,new A.b8(s,u,v,w,u,u,C.w),u,u,u,u,E.mu,u,u,u)}}
B.aiF.prototype={
F(d){var w,v,u,t,s=null,r=A.B(d).ax,q=r.d
if(q==null)q=r.b
w=A.b7(14)
v=this.c
u=r.e
q=A.bR(C.H,A.U("H"+v.e,s,s,s,s,A.aQ(s,s,u==null?r.c:u,s,s,s,s,s,s,s,s,s,s,s,C.a5,s,s,!0,s,s,s,s,s,s,s,s),s,s),C.l,s,s,new A.b8(q,s,s,w,s,s,C.w),s,52,s,s,s,s,s,52)
w=A.B(d).ok.f
w=w==null?s:w.hO(C.a5)
u=x.p
w=A.b([A.U(v.b,s,s,s,s,w,s,s)],u)
t=v.c
if(t.length!==0)w.push(A.U(t,s,s,s,s,A.aQ(s,s,r.b,s,s,s,s,s,s,s,s,s,s,s,C.a4,s,s,!0,s,s,s,s,s,s,s,s),s,s))
v=v.d
if(v.length!==0){t=r.rx
w.push(A.U(v,2,C.aq,s,s,A.aQ(s,s,t==null?r.k3:t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s))}return new B.Ag(A.bP(A.b([q,H.oH,A.cZ(A.bl(w,C.F,C.j,C.m),1,s)],u),C.t,s,C.j,C.m,0),s)}}
B.abD.prototype={
F(d){var w,v,u=null,t=A.B(d).ax,s=A.eA(D.RZ,t.y,u,u,u),r=this.c,q=A.B(d).ok.w
q=q==null?u:q.hO(C.a5)
w=x.p
q=A.bP(A.b([s,C.bh,A.cZ(A.U(r.b,1,C.aq,u,u,q,u,u),1,u),A.U("HSK "+r.e,u,u,u,u,u,u,u)],w),C.t,u,C.j,C.m,0)
s=A.U(r.c,u,u,u,u,A.aQ(u,u,t.b,u,u,u,u,u,u,u,u,u,u,u,C.a4,u,u,!0,u,u,u,u,u,u,u,u),u,u)
v=t.rx
return new B.Ag(A.bl(A.b([q,C.b2,s,C.eg,A.U(r.d,3,C.aq,u,u,A.aQ(u,u,v==null?t.k3:v,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u)],w),C.F,C.j,C.m),u)}}
B.TF.prototype={
a8(){return new B.aej()}}
B.aej.prototype={
F(d){var w,v,u,t,s,r,q=this,p=null,o=A.B(d).ax,n=q.d,m=o.CW
m=A.eA(C.u7,m==null?o.y:m,p,p,p)
w=q.a.c
v=A.B(d).ok.w
v=v==null?p:v.hO(C.a5)
u=x.p
u=A.b([A.bP(A.b([m,C.bh,A.cZ(A.U(w.a,p,p,p,p,v,p,p),1,p)],u),C.t,p,C.j,C.m,0),C.av],u)
for(m=q.a.c.b,w=m.length,v=n==null,t=0;t<m.length;m.length===w||(0,A.x)(m),++t){s=m[t]
r=v?new B.b_9(q,s):p
u.push(new A.aT(C.mr,new L.ME(!1,r,p,p,p,A.byg(p,p,p,p,p,p,p,p,p,q.a_g(o,s,n),p,D.a4u,p,p,p,new A.ba(q.a_g(o,s,n),1,C.z,-1),p,p,p,p),p,p,!1,p,!0,p,A.U(s,p,p,p,p,p,p,p),p),p))}if(!v){m=q.a.c
w=m.c
m=m.d
m=n===w?"\u0110\xfang r\u1ed3i. "+m:"\u0110\xe1p \xe1n \u0111\xfang: "+w+". "+m
w=o.rx
u.push(A.U(m,p,p,p,p,A.aQ(p,p,w==null?o.k3:w,p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p))}return new B.Ag(A.bl(u,C.F,C.j,C.m),p)},
a_g(d,e,f){var w
if(f==null){w=d.ry
if(w==null){w=d.u
if(w==null)w=d.k3}return w}if(e===this.a.c.c)return d.b
if(e===f)return d.fy
w=d.to
if(w==null){w=d.u
if(w==null)w=d.k3}return w}}
B.UO.prototype={
a8(){return new B.ago(A.b([],x.T))}}
B.ago.prototype={
gMs(){var w,v=this,u=v.d
if(u===$){w=A.M(v.a.c.b,x.N)
v.d!==$&&A.ay()
v.d=w
u=w}return u},
F(d){var w,v,u,t,s,r,q=this,p=null,o=A.B(d).ax,n=q.e,m=C.b.hV(n)===q.a.c.c,l=A.eA(E.u8,o.y,p,p,p),k=A.B(d).ok.w,j=x.p
k=A.b([A.bP(A.b([l,C.bh,A.cZ(A.U("S\u1eafp x\u1ebfp c\xe2u",p,p,p,p,k==null?p:k.hO(C.a5),p,p),1,p)],j),C.t,p,C.j,C.m,0)],j)
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
v.push(new B.a1o(t,q.f?p:new B.b1Q(q,u),p))}k.push(A.bR(p,A.ko(v,C.bV,6,6),C.l,p,D.Jj,new A.b8(o.k2,p,w,l,p,p,C.w),p,p,p,p,D.Qx,p,p,1/0))
k.push(C.b2)
l=A.b([],j)
for(j=q.gMs(),w=j.length,s=0;s<j.length;j.length===w||(0,A.x)(j),++s){r=j[s]
v=A.U(r,p,p,p,p,p,p,p)
l.push(B.bf9(p,v,q.f?p:new B.b1R(q,r)))}k.push(A.ko(l,C.bV,8,8))
k.push(C.av)
k.push(A.tD(E.pb,n.length===0||q.f?p:new B.b1S(q),p))
if(q.f){n=m?"C\xe2u \u0111\xfang.":"\u0110\xe1p \xe1n: "+q.a.c.c
k.push(A.U(n,p,p,p,p,A.aQ(p,p,m?o.b:o.fy,p,p,p,p,p,p,p,p,p,p,p,C.a4,p,p,!0,p,p,p,p,p,p,p,p),p,p))}return new B.Ag(A.bl(k,C.F,C.j,C.m),p)}}
B.ah2.prototype={
F(d){var w,v,u,t,s=null,r=A.b([],x.p)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.x)(w),++u){t=w[u]
r.push(B.bf9(D.SE,A.U(t.a,s,s,s,s,s,s,s),new B.b3_(this,t)))}return A.ko(r,C.bV,8,8)}}
B.G9.prototype={
a8(){return new B.a9n()},
aTj(d){return this.d.$1(d)}}
B.a9n.prototype={
gN1(){var w=this.w
if(w===$)w=this.w=new A.zB(C.kI,$.az())
return w},
l(){var w=this.gN1()
w.aA$=$.az()
w.ap$=0
this.aB()},
F(d){var w,v,u=null,t=A.B(d).ax,s=t.R8
if(s==null)s=t.k2
w=A.b7(22)
v=t.to
if(v==null){v=t.u
if(v==null)v=t.k3}v=A.dO(v.aY(0.45),1)
return new A.aT(D.QV,A.jf(A.bP(A.b([A.cZ(F.bbS(u,this.gN1(),D.T5,!0,u,4,1,u,this.a.d,u,C.Gc),1,u),new A.aT(D.Qp,new A.xF(u,u,u,D.SF,u,new B.aSZ(this),"G\u1eedi",u,u,u,C.adL,u),u)],x.p),C.dQ,u,C.j,C.m,0),new A.b8(s,u,v,w,u,u,C.w),C.bo),u)}}
B.aie.prototype={
fW(d,e){var w,v,u,t,s,r,q,p=null,o="\u0110ang d\u1ef1ng GenUI...",n=A.B(d).ax
if(A.jL(e)){w=A.U("\u25cf \u25cf \u25cf",p,p,p,p,A.aQ(p,p,n.b,p,p,p,p,p,p,p,p,16,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p)
v=n.rx
return A.bP(A.b([w,C.i2,A.U(o,p,p,p,p,A.aQ(p,p,v==null?n.k3:v,p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p)],x.p),C.t,p,C.j,C.a6,0)}w=new B.b4c(n)
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
return A.bR(p,A.bP(A.b([s,C.ft,r,C.ft,w,C.i3,A.U(o,p,p,p,p,A.aQ(p,p,q==null?n.k3:q,p,p,p,p,p,p,p,p,13,p,p,C.a2,p,p,!0,p,p,p,p,p,p,p,p),p,p)],x.p),C.t,p,C.j,C.a6,0),C.l,p,p,new A.b8(v,p,t,u,p,p,C.w),p,p,p,p,E.tf,p,p,p)}}
B.Ag.prototype={
F(d){var w,v,u=null,t=A.B(d).ax,s=t.R8
if(s==null)s=t.k2
w=A.b7(18)
v=t.to
if(v==null){v=t.u
if(v==null)v=t.k3}return A.bR(u,this.c,C.l,u,u,new A.b8(s,u,A.dO(v.aY(0.45),1),w,u,u,C.w),u,u,u,u,C.dS,u,u,1/0)},
gN(){return this.c}}
B.K6.prototype={
a8(){return new B.RY(D.uL)}}
B.RY.prototype={
gNj(){var w=this.d
if(w===$)w=this.d=new A.zB(C.kI,$.az())
return w},
l(){var w=this.gNj()
w.aA$=$.az()
w.ap$=0
this.aB()},
a00(){var w,v=this,u=B.bo2(v.a.c.a.c),t=B.bo2(v.gNj().a.a)
if(t.length===0)return
w=t===u
if(w)A.tN()
else A.xz()
v.U(new B.aUf(v,w,u,t))},
aEf(){A.eb()
this.U(new B.aUg(this))},
F(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Noto Serif SC",h=A.B(a0).ax,g=k.a.c.a,f=g.b===D.jc,e=k.f||k.w,d=h.R8
if(d==null)d=h.k2
w=A.b7(18)
v=h.to
if(v==null){v=h.u
if(v==null)v=h.k3}v=A.dO(v.aY(0.45),1)
u=f?D.S6:C.u9
t=h.CW
s=t==null
u=A.eA(u,s?h.y:t,j,j,j)
r=f?"Nghe vi\u1ebft H\xe1n t\u1ef1":"D\u1ecbch Vi\u1ec7t \u2192 Trung"
q=A.B(a0).ok.w
r=A.cZ(A.U(r,j,j,j,j,q==null?j:q.hO(C.a5),j,j),1,j)
q=h.rx
p=q==null
o=x.p
r=A.b([A.bP(A.b([u,C.bh,r,A.U("HSK "+g.f,j,j,j,j,A.aQ(j,j,p?h.k3:q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j)],o),C.t,j,C.j,C.m,0),C.av],o)
if(f){u=A.kB(j,30,"Ph\xe1t audio",g.r)
r.push(A.bP(A.b([u,C.i2,A.cZ(A.U("B\u1ea5m nghe (nghe l\u1ea1i \u0111\u01b0\u1ee3c nhi\u1ec1u l\u1ea7n) r\u1ed3i g\xf5 l\u1ea1i c\xe2u.",j,j,j,j,A.aQ(j,j,p?h.k3:q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j),1,j)],o),C.t,j,C.j,C.m,0))}else r.push(A.U(g.e,j,j,j,j,A.B(a0).ok.w,j,j))
r.push(C.av)
u=k.gNj()
n=!e
m=h.k3
l=A.aQ(j,j,m,j,j,j,j,j,i,C.cp,j,22,j,j,C.ah,j,1.15,!0,j,j,j,j,j,j,j,j)
r.push(F.bbS(!1,u,F.baQ(j,new F.l3(4,A.b7(12),H.qA),j,j,j,j,j,j,!0,j,j,j,j,j,j,h.k2,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,j,"G\xf5 ch\u1eef H\xe1n...",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),!1,n,2,1,j,new B.aUi(k),l,C.p8))
r.push(C.b2)
u=A.tD(E.pb,e?j:k.garW(),j)
l=A.Fj(D.aaB,k.r?j:new B.aUj(k),j)
r.push(A.ko(A.b([u,l,A.Fj(D.aaN,k.w?j:k.gaEe(),j)],o),C.pN,8,8))
if(k.r&&n)C.b.B(r,A.b([C.eg,A.U(g.d,j,j,j,j,A.aQ(j,j,h.b,j,j,j,j,j,"Inter",C.d_,j,16,j,j,C.ah,j,j,!0,j,0.2,j,j,j,j,j,j),j,j)],o))
if(k.e&&!k.f&&!k.w){u=A.U("Ch\u01b0a \u0111\xfang, \u0111\u1ed1i chi\u1ebfu t\u1eebng ch\u1eef:",j,j,j,j,A.aQ(j,j,h.fy,j,j,j,j,j,j,j,j,j,j,j,C.a4,j,j,!0,j,j,j,j,j,j,j,j),j,j)
n=k.x
C.b.B(r,A.b([C.b2,u,C.aM,new B.aaj(n,j),C.aM,A.U("S\u1eeda l\u1ea1i r\u1ed3i b\u1ea5m Ki\u1ec3m tra l\u1ea7n n\u1eefa nh\xe9.",j,j,j,j,A.aQ(j,j,p?m:q,j,j,j,j,j,j,j,j,13,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j)],o))}if(e){u=k.f
n=u?C.jw:D.S9
if(u)t=h.b
else if(s)t=h.y
t=A.eA(n,t,j,j,20)
s=u?"Ch\xednh x\xe1c!":"\u0110\xe1p \xe1n:"
t=A.bP(A.b([t,C.kE,A.U(s,j,j,j,j,A.aQ(j,j,u?h.b:m,j,j,j,j,j,j,j,j,j,j,j,C.a5,j,j,!0,j,j,j,j,j,j,j,j),j,j)],o),C.t,j,C.j,C.m,0)
s=A.b([A.U(g.c,j,j,j,j,A.aQ(j,j,m,j,j,j,j,j,i,C.cp,j,24,j,j,C.ah,j,1.15,!0,j,j,j,j,j,j,j,j),j,j),A.U(g.d,j,j,j,j,A.aQ(j,j,h.b,j,j,j,j,j,"Inter",C.d_,j,15,j,j,C.ah,j,j,!0,j,0.2,j,j,j,j,j,j),j,j)],o)
u=g.e
if(u.length!==0)s.push(A.U(u,j,j,j,j,A.aQ(j,j,p?m:q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j))
u=A.b([A.cZ(A.bl(s,C.F,C.j,C.m),1,j)],o)
s=g.r
if(s!=null&&!f)u.push(A.kB(j,24,j,s))
C.b.B(r,A.b([C.b2,t,C.eg,A.bP(u,C.F,j,C.j,C.m,0)],o))}return A.bR(j,A.bl(r,C.F,C.j,C.m),C.l,j,j,new A.b8(d,j,v,w,j,j,C.w),j,j,j,j,C.dS,j,j,1/0)}}
B.aaj.prototype={
F(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=A.B(d).ax,i=A.b([],x.k)
for(w=this.c,v=w.length,u=x.N,t=j.rx,s=j.k3,r=j.fy,q=j.b,p=t==null,o=0;o<w.length;w.length===v||(0,A.x)(w),++o){n=w[o]
m=n.b
l=n.a
if(m===D.eY)l=C.b.hV(A.be(new A.ir(l).gE(0),"\uff3f",!1,u))
A:{if(D.tY===m){m=new A.F(!0,q,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
break A}if(D.tZ===m||D.eZ===m){m=new A.F(!0,r,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p6,r,k,k,k,k,k,k,k)
break A}if(D.eY===m){m=(p?s:t).aY(0.7)
m=new A.F(!0,m,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
break A}m=k}i.push(new A.ht(l,k,k,C.aR,k,k,k,k,k,k,m))}return A.bk2(A.eQ(i,k,k,k,k,k,k,k,k,k,k),A.aQ(k,k,s,k,k,k,k,k,"Noto Serif SC",C.cp,k,22,k,k,C.ah,k,1.15,!0,k,k,k,k,k,k,k,k),k)}}
B.amS.prototype={
$2$1(d,e,f){return A.bfl(d,null,!0,null,null,e,f)},
$1(d){return this.$2$1(d,x.O,x.C)}}
var z=a.updateTypes(["~()","x5()","Cb(cy)","O<lJ>()","Ce(cy)","D9(cy)","~(d)","hQ()","hQ(u,by)","hQ(lJ)","Cd(Z<d,@>)","Cc(Z<d,@>)","tJ()","d(k)"])
B.aQd.prototype={
$1(d){var w,v
if(d.q(0,C.C)){w=this.a
if(w.fy===D.fE)w=null
else{w=w.goh().k3
w=A.aX(31,w.I()>>>16&255,w.I()>>>8&255,w.I()&255)}return w}w=this.a
if(w.fy===D.fE)w=null
else{w=w.goh()
v=w.p3
w=v==null?w.k2:v}return w},
$S:46}
B.aX3.prototype={
$1(d){var w,v
if(d.q(0,C.ay)&&d.q(0,C.C)){w=this.a.gt9().k3
return A.aX(31,w.I()>>>16&255,w.I()>>>8&255,w.I()&255)}if(d.q(0,C.C))return null
if(d.q(0,C.ay)){w=this.a.gt9()
v=w.Q
return v==null?w.y:v}return null},
$S:46}
B.aqc.prototype={
$0(){return B.bgt(this.a)},
$S:z+1}
B.b7K.prototype={
$1(d){return new B.Cb(!0)},
$S:z+2}
B.b7L.prototype={
$1(d){return new B.Ce(d.ci($.wk(),x.o))},
$S:z+4}
B.b7Y.prototype={
$1(d){var w=x.S
return new B.D9(d.ci($.wk(),x.o),d.ci($.bsn(),x.z),d.ci($.bso(),x.E),d.ci(A.qM($.mz(),new B.b7X(),x.L,w),w))},
$S:z+5}
B.b7X.prototype={
$1(d){return d.a},
$S:75}
B.aSp.prototype={
$0(){return D.a4H},
$S:z+7}
B.aSo.prototype={
$2(d,e){var w=null
return K.ET(C.d0,"assets/images/gen_header_chat.svg",A.b([new I.EU(M.u5,"Kh\xf4ng ph\u1ea3n h\u1ed3i \u0111\u01b0\u1ee3c",A.j(d),w,w),new G.r9(new B.G9(this.a.gMF(),w),w)],x.p),y.b,"Chat")},
$S:z+8}
B.aSn.prototype={
$1(d){var w=null,v=this.a,u=A.b([new A.ES(new A.P5(new B.aSm(v,d),d.a.length,!0,!0,!0,0,A.boo(),w),w)],x.p)
if(d.b)u.push(D.a4M)
u.push(new G.r9(new B.G9(v.gMF(),w),w))
return K.ET(C.d0,"assets/images/gen_header_chat.svg",u,"GenUI local tr\u01b0\u1edbc, LLM remote c\xf3 th\u1ec3 c\u1eafm sau.","Chat")},
$S:z+9}
B.aSm.prototype={
$2(d,e){var w,v=null,u=this.a
u=A.eH(new B.acV(this.b.a[e],u.gMF(),v),!A.jL(u.gcp()),v,v)
w=A.bM(0,18e4,0,0)
return A.kg(A.hI(u,v,A.bM(0,C.e.aF(e*40*1000),0,0),w),0.03,v,A.bM(0,22e4,0,0),0)},
$S:943}
B.b_9.prototype={
$0(){A.eb()
var w=this.a
w.U(new B.b_8(w,this.b))},
$S:0}
B.b_8.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.b1Q.prototype={
$0(){var w=this.a
w.U(new B.b1P(w,this.b))},
$S:0}
B.b1P.prototype={
$0(){var w=this.a
w.gMs().push(C.b.hw(w.e,this.b))},
$S:0}
B.b1R.prototype={
$0(){A.eb()
var w=this.a
w.U(new B.b1O(w,this.b))},
$S:0}
B.b1O.prototype={
$0(){var w=this.a,v=this.b
C.b.G(w.gMs(),v)
w.e.push(v)},
$S:0}
B.b1S.prototype={
$0(){A.eb()
var w=this.a
w.U(new B.b1N(w))},
$S:0}
B.b1N.prototype={
$0(){return this.a.f=!0},
$S:0}
B.b3_.prototype={
$0(){return this.a.d.$1(this.b.b)},
$S:0}
B.aSZ.prototype={
$0(){var w=this.a,v=w.gN1(),u=v.a.a
v.t2(C.G8)
w.a.aTj(u)},
$S:0}
B.b4c.prototype={
$1(d){var w=null,v=A.eH(A.bR(w,w,C.l,w,w,new A.b8(this.a.b,w,w,w,w,w,C.cj),w,7,w,w,w,w,w,7),w,new B.b4d(),w),u=A.bM(0,38e4,0,0)
return A.bin(v,0,D.OZ,A.bM(0,C.e.aF(d*130*1000),0,0),u,-5)},
$S:219}
B.b4d.prototype={
$1(d){return d.Vs(!0)},
$S:268}
B.aUf.prototype={
$0(){var w,v=this,u=v.a
u.e=!0
w=v.b
u.f=w
u.x=w?D.uL:B.bI6(v.c,v.d)},
$S:0}
B.aUg.prototype={
$0(){var w=this.a
w.r=w.w=!0},
$S:0}
B.aUi.prototype={
$1(d){return this.a.a00()},
$S:34}
B.aUj.prototype={
$0(){A.eb()
var w=this.a
w.U(new B.aUh(w))},
$S:0}
B.aUh.prototype={
$0(){return this.a.r=!0},
$S:0};(function installTearOffs(){var w=a._static_1,v=a._static_0,u=a._instance_0u,t=a._instance_1u
w(B,"bI5","buM",10)
w(B,"bI4","buL",11)
v(B,"bHt","bw9",12)
u(B.tJ.prototype,"gls","d1",3)
t(B.Rq.prototype,"gMF","aq3",6)
var s
u(s=B.RY.prototype,"garW","a00",0)
u(s,"gaEe","aEf",0)
w(B,"bnu","bAN",13)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.rD,[B.aSu,B.CJ,B.a_g,B.YX])
w(A.a3,[B.XN,B.a1o,B.acV,B.a8L,B.aiv,B.a8x,B.aiF,B.abD,B.ah2,B.Ag,B.aaj])
w(A.wK,[B.aQc,B.aX2])
w(A.hf,[B.aQd,B.aX3,B.b7K,B.b7L,B.b7Y,B.b7X,B.aSn,B.b4c,B.b4d,B.aUi])
w(A.u,[B.Cb,B.x5,B.Cd,B.Cc,B.a_f,B.mW,B.lJ,B.Ce,B.D9,B.x6,B.xv,B.lI,B.mU,B.amS])
w(A.mI,[B.aqc,B.aSp,B.b_9,B.b_8,B.b1Q,B.b1P,B.b1R,B.b1O,B.b1S,B.b1N,B.b3_,B.aSZ,B.aUf,B.aUg,B.aUj,B.aUh])
v(B.tJ,A.wz)
w(B.lI,[B.lB,B.FO,B.L8,B.Nf,B.OD,B.K5,B.zw])
w(A.o9,[B.tg,B.G9])
w(A.pL,[B.Rq,B.a9n])
w(A.mJ,[B.aSo,B.aSm])
w(A.a_,[B.TF,B.UO,B.K6])
w(A.aa,[B.aej,B.ago,B.RY])
v(B.aie,A.oa)})()
A.mo(b.typeUniverse,JSON.parse('{"XN":{"a3":[],"c":[]},"a1o":{"a3":[],"c":[]},"tJ":{"wz":["lJ"]},"D9":{"bhd":[]},"lB":{"lI":[]},"FO":{"lI":[]},"L8":{"lI":[]},"Nf":{"lI":[]},"OD":{"lI":[]},"K5":{"lI":[]},"zw":{"lI":[]},"TF":{"a_":[],"c":[]},"UO":{"a_":[],"c":[]},"G9":{"a_":[],"c":[]},"tg":{"a_":[],"c":[]},"Rq":{"aa":["tg"]},"acV":{"a3":[],"c":[]},"a8L":{"a3":[],"c":[]},"aiv":{"a3":[],"c":[]},"a8x":{"a3":[],"c":[]},"aiF":{"a3":[],"c":[]},"abD":{"a3":[],"c":[]},"aej":{"aa":["TF"]},"ago":{"aa":["UO"]},"ah2":{"a3":[],"c":[]},"a9n":{"aa":["G9"]},"aie":{"a_":[],"c":[]},"Ag":{"a3":[],"c":[]},"K6":{"a_":[],"c":[]},"RY":{"aa":["K6"]},"aaj":{"a3":[],"c":[]}}'))
var y={b:"GenUI local v\u1edbi t\u1eeb v\u1ef1ng, ng\u1eef ph\xe1p v\xe0 quiz."}
var x=(function rtii(){var w=A.Y
return{O:w("wz<@>"),J:w("bx<lJ>"),w:w("b4<d,d>"),y:w("x5"),z:w("Cb"),E:w("Ce"),i:w("tJ"),B:w("xv"),M:w("bhd"),s:w("lJ"),X:w("v<a_f>"),V:w("v<x6>"),A:w("v<lI>"),r:w("v<xv>"),W:w("v<mU>"),R:w("v<mW>"),k:w("v<fE>"),m:w("v<Z<d,d>>"),T:w("v<d>"),p:w("v<c>"),o:w("qm"),g:w("A<x6>"),U:w("A<lI>"),j:w("A<@>"),I:w("A<k>"),Q:w("Z<d,x5>"),P:w("Z<d,@>"),K:w("ir"),N:w("d"),L:w("iu"),b:w("bW<W?>"),C:w("@"),S:w("k"),a:w("x6?"),Y:w("A<@>?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Jj=new A.ag(0,1/0,52,1/0)
D.K1=new B.amS()
D.LB=new B.lB("M\xecnh c\xf3 th\u1ec3 tra t\u1eeb, gi\u1ea3i th\xedch ng\u1eef ph\xe1p, t\u1ea1o quiz ho\u1eb7c g\u1ee3i \xfd c\xe2u h\u1ed9i tho\u1ea1i t\u1eeb d\u1eef li\u1ec7u local.")
D.LC=new B.lB("Ch\xe0o b\u1ea1n, m\xecnh l\xe0 Chat GenUI local. M\xecnh c\xf3 th\u1ec3 tra t\u1eeb, gi\u1ea3i th\xedch ng\u1eef ph\xe1p, t\u1ea1o quiz v\xe0 luy\u1ec7n nghe-vi\u1ebft ch\u1eef H\xe1n t\u1eeb d\u1eef li\u1ec7u offline.")
D.rb=new B.YX(0,"user")
D.rc=new B.YX(1,"assistant")
D.OZ=new A.ey(0.455,0.03,0.515,0.955)
D.jc=new B.a_g(0,"listen")
D.mf=new B.a_g(1,"readVi")
D.Qp=new A.al(0,0,8,7)
D.Qx=new A.al(10,10,10,10)
D.QT=new A.al(20,6,20,12)
D.QV=new A.al(20,8,20,18)
D.R2=new A.al(64,6,20,10)
D.ne=new B.mU("H\u1ed9i tho\u1ea1i","Cho m\xecnh h\u1ed9i tho\u1ea1i m\u1eabu")
D.tT=new B.mU("Luy\u1ec7n nghe","Luy\u1ec7n nghe ch\xe9p ch\xednh t\u1ea3")
D.nf=new B.mU("T\u1ea1o quiz","T\u1ea1o quiz HSK 2")
D.tU=new B.mU("Luy\u1ec7n d\u1ecbch","Luy\u1ec7n d\u1ecbch Vi\u1ec7t-Trung")
D.tY=new B.CJ(0,"match")
D.tZ=new B.CJ(1,"wrong")
D.eY=new B.CJ(2,"missing")
D.eZ=new B.CJ(3,"extra")
D.RZ=new A.bD(62876,"MaterialIcons",null,!1)
D.S6=new A.bD(63457,"MaterialIcons",null,!1)
D.S9=new A.bD(63573,"MaterialIcons",null,!1)
D.SE=new A.fX(E.u3,18,null,null,null)
D.Sj=new A.bD(983367,"MaterialIcons",null,!0)
D.SF=new A.fX(D.Sj,null,null,null,null)
D.QF=new A.al(16,14,10,14)
D.T5=new F.CZ(null,null,null,null,null,null,null,null,null,null,"H\u1ecfi v\u1ec1 t\u1eeb v\u1ef1ng, ng\u1eef ph\xe1p ho\u1eb7c quiz...",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,D.QF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,H.pZ,!0,null,null,null,null)
D.TJ=new A.LJ(null)
D.RC=new B.mU("Tra t\u1eeb","Tra t\u1eeb \u5b66\u4e60")
D.Uz=w([D.RC,D.nf,D.ne,D.tT,D.tU],x.W)
D.a_a={id:0,title:1,titleZh:2,titlePinyin:3,description:4,level:5,category:6,icon:7,lines:8,vocabulary:9,speakers:10,relatedGrammar:11,cultureTip:12}
D.fb={speaker:0,zh:1,pinyin:2,vi:3}
D.Zh=new A.b4(D.fb,["A","\u8001\u5e08\uff0c\u867d\u7136\u6211\u6bcf\u5929\u5b66\u4e60\uff0c\u4f46\u662f\u8fdb\u6b65\u4e0d\u592a\u5feb\u3002","L\u01ceosh\u012b, su\u012br\xe1n w\u01d2 m\u011biti\u0101n xu\xe9x\xed, d\xe0nsh\xec j\xecnb\xf9 b\xfa t\xe0i ku\xe0i.","C\xf4 \u01a1i, tuy ng\xe0y n\xe0o em c\u0169ng h\u1ecdc, nh\u01b0ng ti\u1ebfn b\u1ed9 kh\xf4ng nhanh l\u1eafm."],x.w)
D.Zj=new A.b4(D.fb,["B","\u522b\u7740\u6025\uff0c\u53ea\u8981\u4f60\u575a\u6301\u7ec3\u4e60\uff0c\u5c31\u4f1a\u8d8a\u6765\u8d8a\u597d\u3002","Bi\xe9 zh\xe1oj\xed, zh\u01d0y\xe0o n\u01d0 ji\u0101nch\xed li\xe0nx\xed, ji\xf9 hu\xec yu\xe8 l\xe1i yu\xe8 h\u01ceo.","\u0110\u1eebng s\u1ed1t ru\u1ed9t, ch\u1ec9 c\u1ea7n em ki\xean tr\xec luy\u1ec7n t\u1eadp th\xec s\u1ebd ng\xe0y c\xe0ng t\u1ed1t."],x.w)
D.Zg=new A.b4(D.fb,["A","\u5982\u679c\u6211\u5de5\u4f5c\u5f88\u5fd9\uff0c\u8fd8\u5e94\u8be5\u6bcf\u5929\u590d\u4e60\u5417\uff1f","R\xfagu\u01d2 w\u01d2 g\u014dngzu\xf2 h\u011bn m\xe1ng, h\xe1i y\u012bngg\u0101i m\u011biti\u0101n f\xf9x\xed ma?","N\u1ebfu c\xf4ng vi\u1ec7c b\u1eadn, em v\u1eabn n\xean \xf4n m\u1ed7i ng\xe0y kh\xf4ng?"],x.w)
D.Ze=new A.b4(D.fb,["B","\u5f53\u7136\u3002\u53ea\u6709\u628a\u4eca\u5929\u7684\u751f\u8bcd\u590d\u4e60\u5b8c\uff0c\u660e\u5929\u7684\u8bfe\u624d\u4f1a\u8f7b\u677e\u3002","D\u0101ngr\xe1n. Zh\u01d0y\u01d2u b\u01ce j\u012bnti\u0101n de sh\u0113ngc\xed f\xf9x\xed w\xe1n, m\xedngti\u0101n de k\xe8 c\xe1i hu\xec q\u012bngs\u014dng.","T\u1ea5t nhi\xean. Ch\u1ec9 khi \xf4n xong t\u1eeb m\u1edbi h\xf4m nay th\xec b\xe0i ng\xe0y mai m\u1edbi nh\u1eb9 h\u01a1n."],x.w)
D.Zi=new A.b4(D.fb,["A","\u90a3\u6211\u5148\u542c\u4e00\u904d\u5bf9\u8bdd\uff0c\u518d\u505a\u7ec3\u4e60\u3002","N\xe0 w\u01d2 xi\u0101n t\u012bng y\xed bi\xe0n du\xechu\xe0, z\xe0i zu\xf2 li\xe0nx\xed.","V\u1eady em nghe h\u1ed9i tho\u1ea1i m\u1ed9t l\u01b0\u1ee3t tr\u01b0\u1edbc, r\u1ed3i l\xe0m b\xe0i luy\u1ec7n t\u1eadp."],x.w)
D.Zf=new A.b4(D.fb,["B","\u5f88\u597d\uff0c\u867d\u7136\u65f6\u95f4\u4e0d\u591a\uff0c\u4f46\u662f\u65b9\u6cd5\u5bf9\u4e86\u5c31\u6709\u6548\u3002","H\u011bn h\u01ceo, su\u012br\xe1n sh\xedji\u0101n b\xf9 du\u014d, d\xe0nsh\xec f\u0101ngf\u01ce du\xec le ji\xf9 y\u01d2uxi\xe0o.","R\u1ea5t t\u1ed1t, tuy th\u1eddi gian kh\xf4ng nhi\u1ec1u nh\u01b0ng \u0111\xfang ph\u01b0\u01a1ng ph\xe1p th\xec hi\u1ec7u qu\u1ea3."],x.w)
D.VZ=w([D.Zh,D.Zj,D.Zg,D.Ze,D.Zi,D.Zf],x.m)
D.fa={zh:0,pinyin:1,vi:2,pos:3}
D.YU=new A.b4(D.fa,["\u8fdb\u6b65","j\xecnb\xf9","ti\u1ebfn b\u1ed9","\u0111\u1ed9ng t\u1eeb/danh t\u1eeb"],x.w)
D.YW=new A.b4(D.fa,["\u575a\u6301","ji\u0101nch\xed","ki\xean tr\xec","\u0111\u1ed9ng t\u1eeb"],x.w)
D.YS=new A.b4(D.fa,["\u590d\u4e60","f\xf9x\xed","\xf4n t\u1eadp","\u0111\u1ed9ng t\u1eeb"],x.w)
D.YV=new A.b4(D.fa,["\u751f\u8bcd","sh\u0113ngc\xed","t\u1eeb m\u1edbi","danh t\u1eeb"],x.w)
D.YT=new A.b4(D.fa,["\u8f7b\u677e","q\u012bngs\u014dng","nh\u1eb9 nh\xe0ng","t\xednh t\u1eeb"],x.w)
D.YR=new A.b4(D.fa,["\u65b9\u6cd5","f\u0101ngf\u01ce","ph\u01b0\u01a1ng ph\xe1p","danh t\u1eeb"],x.w)
D.WH=w([D.YU,D.YW,D.YS,D.YV,D.YT,D.YR],x.m)
D.Aj={code:0,nameVi:1,role:2,avatarColor:3}
D.Zz=new A.b4(D.Aj,["A","Vy","Ng\u01b0\u1eddi h\u1ecdc","#5E35B1"],x.w)
D.Zy=new A.b4(D.Aj,["B","C\xf4 Mai","C\u1ed1 v\u1ea5n HSK3","#00897B"],x.w)
D.Vq=w([D.Zz,D.Zy],x.m)
D.Vz=w(["g_suiran_danshi","g_zhiyao_jiu","g_zhiyou_cai"],x.T)
D.Z9=new A.b4(D.a_a,["conv_hsk3_conditions_01","L\u1eadp k\u1ebf ho\u1ea1ch \xf4n thi","\u51c6\u5907\u8003\u8bd5\u8ba1\u5212","Zh\u01d4nb\xe8i k\u01ceosh\xec j\xechu\xe0","Nh\u1edd c\u1ed1 v\u1ea5n HSK3 \u0111i\u1ec1u ch\u1ec9nh c\xe1ch \xf4n t\u1eadp khi th\u1eddi gian h\u1ea1n ch\u1ebf.",3,"study","\ud83d\udcda",D.VZ,D.WH,D.Vq,D.Vz,"\u1ede l\u1edbp ti\u1ebfng Trung, ng\u01b0\u1eddi h\u1ecdc th\u01b0\u1eddng g\u1ecdi gi\xe1o vi\xean l\xe0 \u8001\u5e08 \u0111\u1ec3 gi\u1eef s\u1eafc th\xe1i l\u1ecbch s\u1ef1, k\u1ec3 c\u1ea3 khi trao \u0111\u1ed5i ri\xeang v\u1ec1 k\u1ebf ho\u1ea1ch h\u1ecdc."],A.Y("b4<d,u>"))
D.Vp=w([D.Z9],A.Y("v<Z<d,u>>"))
D.Wh=w([],x.V)
D.Wg=w([],x.A)
D.uL=w([],x.R)
D.a_e={"\u3002":0,"\u3001":1,"\u2026":2,"\xb7":3,"\u2014":4,"\uff5e":5,"\u2018":6,"\u2019":7,"\u201c":8,"\u201d":9,"\u300c":10,"\u300d":11,"\u300e":12,"\u300f":13,"\u300a":14,"\u300b":15,"\u3010":16,"\u3011":17,",":18,".":19,"!":20,"?":21,";":22,":":23,"'":24,'"':25,"(":26,")":27,"-":28,"~":29}
D.a3k=new A.fn(D.a_e,30,A.Y("fn<d>"))
D.a4u=new A.N(1/0,44)
D.a4J=new I.EU(C.u6,"\u0110ang m\u1edf chat","Chu\u1ea9n b\u1ecb GenUI local...","assets/images/gen_chat_empty.svg",null)
D.Xc=w([D.a4J],x.p)
D.a4H=new G.hQ("Chat",y.b,"assets/images/gen_header_chat.svg",C.d0,D.Xc,null)
D.QS=new A.al(20,4,20,12)
D.af3=new B.aie(null)
D.a0m=new A.aT(D.QS,D.af3,null)
D.a4M=new G.r9(D.a0m,null)
D.RB=new B.mU("Ng\u1eef ph\xe1p","Gi\u1ea3i th\xedch c\xe2u v\u1edbi \u4e86")
D.X5=w([D.nf,D.RB,D.ne],x.W)
D.a5j=new B.zw(D.X5)
D.aaB=new A.ds("G\u1ee3i \xfd pinyin",null,null,null,null,null,null,null,null,null)
D.aaN=new A.ds("Hi\u1ec7n \u0111\xe1p \xe1n",null,null,null,null,null,null,null,null,null)
D.fE=new B.aSu(0,"flat")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"bRt","bsn",()=>A.qL(new B.b7K(),x.z))
w($,"bRz","beN",()=>D.K1.$2$1(B.bHt(),x.i,x.s))
w($,"bRu","bso",()=>A.qL(new B.b7L(),x.E))
w($,"bRA","bsq",()=>A.qL(new B.b7Y(),x.M))})()};
(a=>{a["QLX/Xvk2xyb5gH4BHQw1OHXPFGo="]=a.current})($__dart_deferred_initializers__);