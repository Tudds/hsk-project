((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,L,E,B={
bf0(d,e,f){return new B.XE(d,e,f,null)},
aSm:function aSm(d,e){this.a=d
this.b=e},
XE:function XE(d,e,f,g){var _=this
_.c=d
_.d=e
_.r=f
_.a=g},
aQ5:function aQ5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5){var _=this
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
aQ6:function aQ6(d){this.a=d},
a1g:function a1g(d,e,f){this.d=d
this.z=e
this.a=f},
aWQ:function aWQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5){var _=this
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
aWR:function aWR(d){this.a=d},
Ce:function Ce(d){this.b=d
this.c=null},
aq8:function aq8(d){this.a=d},
bgg(d){var w,v,u,t,s,r,q,p,o="cultureTip",n=x.Y,m=n.a(d.i(0,"speakers"))
if(m==null)m=C.p
w=x.P
m=J.c2(m,w)
v=A.l(m).h("L<Q.E,Cf>")
m=A.O(new A.L(m,B.bHK(),v),v.h("a8.E"))
m.$flags=1
m=n.a(d.i(0,"lines"))
u=J.c2(m==null?C.p:m,w)
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
q=q==null?null:C.c.dl(q).length===0
if(q===!1)A.aj(d.i(0,o))
q=n.a(d.i(0,"relatedGrammar"))
if(q==null)q=C.p
A.dT(q,!0,x.N)
n=n.a(d.i(0,"vocabulary"))
n=J.c2(n==null?C.p:n,w)
w=A.l(n).h("L<Q.E,Cg>")
n=A.O(new A.L(n,B.bHL(),w),w.h("a8.E"))
n.$flags=1
return new B.x3(m,v,t,s,n)},
buy(d){var w,v,u=A.ad(d.i(0,"zh"))
if(u==null)u=""
w=A.ad(d.i(0,"pinyin"))
if(w==null)w=""
v=A.ad(d.i(0,"vi"))
if(v==null)v=""
A.ad(d.i(0,"pos"))
return new B.Cg(u,w,v)},
bux(d){A.ad(d.i(0,"code"))
A.ad(d.i(0,"nameVi"))
A.ad(d.i(0,"role"))
B.bJk(A.ad(d.i(0,"avatarColor")))
return new B.Cf()},
bJk(d){var w,v,u=null
if(d==null)return u
w=C.c.dl(d)
if(w.length===0)return u
if(C.c.b1(w,"#"))w=C.c.bG(w,1)
if(w.length===6)w="FF"+w
if(w.length!==8)return u
v=A.qM(w,16)
if(v==null)return u
return A.bC(v)},
x3:function x3(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.f=f
_.y=g
_.as=h},
Cg:function Cg(d,e,f){this.a=d
this.b=e
this.c=f},
Cf:function Cf(){},
a_6:function a_6(d,e){this.c=d
this.e=e},
b7D:function b7D(){},
bnP(d){var w,v,u,t=new A.cW("")
for(w=new A.z5(d);w.t();){v=w.d
u=A.dL(v>=65281&&v<=65374?v-65248:v)
if(C.c.dl(u).length===0)continue
if(D.a3D.q(0,u))continue
t.a+=u}w=t.a
return w.charCodeAt(0)==0?w:w},
bHM(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=x.N,a1=x.K.h("z.E"),a2=A.iR(new A.iq(a3),B.bnd(),a1,a0)
a2=A.O(a2,A.l(a2).h("z.E"))
a2.$flags=1
w=a2
a0=A.iR(new A.iq(a4),B.bnd(),a1,a0)
a0=A.O(a0,A.l(a0).h("z.E"))
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
if(a1===a2){n.push(new B.mY(a2,D.u4));++r;++q}else{m=r+1
p=q+1
if(t[m][q]>=t[r][p]){n.push(new B.mY(a1,D.eW))
r=m}else{n.push(new B.mY(a2,D.eX))
q=p}}}for(;r<w.length;r=m){m=r+1
n.push(new B.mY(w[r],D.eW))}for(;q<v.length;q=p){p=q+1
n.push(new B.mY(v[q],D.eX))}l=A.b([],a0)
for(k=0;a1=n.length,k<a1;++k){j=n[k]
i=k+1
h=i<a1?n[i]:null
if(h!=null){a1=j.b
if(!(a1===D.eW&&h.b===D.eX)){a1=a1===D.eX&&h.b===D.eW
g=a1}else g=!0}else g=!1
if(g){l.push(new B.mY((j.b===D.eX?j:h).a,D.u5))
k=i}else l.push(j)}f=A.b([],a0)
for(a0=l.length,e=0;e<l.length;l.length===a0||(0,A.x)(l),++e){d=l[e]
if(f.length!==0&&C.b.ga3(f).b===d.b)f[f.length-1]=new B.mY(C.b.ga3(f).a+d.a,d.b)
else f.push(d)}return f},
CL:function CL(d,e){this.a=d
this.b=e},
mY:function mY(d,e){this.a=d
this.b=e},
bvW(){return new B.tL()},
bvX(d){var w,v,u,t
switch(d.a){case 0:w=D.u_
break
case 3:w=D.u0
break
case 2:w=D.nd
break
case 1:w=D.ne
break
default:w=null}v=A.b([w],x.W)
for(u=0;u<5;++u){t=D.UW[u]
if(t!==w)v.push(t)}return v},
lM:function lM(d,e){this.a=d
this.b=e},
tL:function tL(){this.x=0
this.b=null},
Ch:function Ch(d){this.b=d},
b7E:function b7E(){},
Db:function Db(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
b7Q:function b7Q(){},
b7P:function b7P(){},
a_7:function a_7(d,e){this.a=d
this.b=e},
x4:function x4(d,e,f,g,h,i){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i},
YO:function YO(d,e){this.a=d
this.b=e},
xs:function xs(d,e,f){this.b=d
this.c=e
this.d=f},
lL:function lL(){},
lE:function lE(d){this.a=d},
FL:function FL(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
L1:function L1(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.e=g},
N4:function N4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ot:function Ot(d,e,f){this.a=d
this.b=e
this.c=f},
JZ:function JZ(d){this.a=d},
zB:function zB(d){this.a=d},
mV:function mV(d,e){this.a=d
this.b=e},
btx(){return new B.th(null)},
th:function th(d){this.a=d},
Rg:function Rg(){this.d=$
this.c=this.a=null},
aSh:function aSh(){},
aSg:function aSg(d){this.a=d},
aSf:function aSf(d){this.a=d},
aSe:function aSe(d,e){this.a=d
this.b=e},
acJ:function acJ(d,e,f){this.c=d
this.d=e
this.a=f},
a8E:function a8E(d,e,f){this.c=d
this.d=e
this.a=f},
aim:function aim(d,e){this.c=d
this.a=e},
a8q:function a8q(d,e){this.c=d
this.a=e},
aiw:function aiw(d,e){this.c=d
this.a=e},
abr:function abr(d,e){this.c=d
this.a=e},
Tv:function Tv(d,e){this.c=d
this.a=e},
ae7:function ae7(){this.c=this.a=this.d=null},
aZW:function aZW(d,e){this.a=d
this.b=e},
aZV:function aZV(d,e){this.a=d
this.b=e},
UE:function UE(d,e){this.c=d
this.a=e},
agc:function agc(d){var _=this
_.d=$
_.e=d
_.f=!1
_.c=_.a=null},
b1F:function b1F(d,e){this.a=d
this.b=e},
b1E:function b1E(d,e){this.a=d
this.b=e},
b1G:function b1G(d,e){this.a=d
this.b=e},
b1D:function b1D(d,e){this.a=d
this.b=e},
b1H:function b1H(d){this.a=d},
b1C:function b1C(d){this.a=d},
agS:function agS(d,e,f){this.c=d
this.d=e
this.a=f},
b2T:function b2T(d,e){this.a=d
this.b=e},
G6:function G6(d,e){this.d=d
this.a=e},
a9f:function a9f(){var _=this
_.d=_.w=$
_.c=_.a=null},
aSR:function aSR(d){this.a=d},
ai5:function ai5(d){this.a=d},
b48:function b48(d){this.a=d},
b49:function b49(){},
Al:function Al(d,e){this.c=d
this.a=e},
K_:function K_(d,e){this.c=d
this.a=e},
RO:function RO(d){var _=this
_.d=$
_.w=_.r=_.f=_.e=!1
_.x=d
_.c=_.a=null},
aU2:function aU2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aU3:function aU3(d){this.a=d},
aU5:function aU5(d){this.a=d},
aU6:function aU6(d){this.a=d},
aU4:function aU4(d){this.a=d},
aa8:function aa8(d,e){this.c=d
this.a=e},
amP:function amP(){},
bAx(d){return A.dL(d)}},D,H,M,F,G,I,K
J=c[1]
A=c[0]
C=c[2]
L=c[10]
E=c[19]
B=a.updateHolder(c[5],B)
D=c[17]
H=c[7]
M=c[21]
F=c[16]
G=c[8]
I=c[20]
K=c[18]
B.aSm.prototype={
J(){return"_ChipVariant."+this.b}}
B.XE.prototype={
F(d){var w,v,u=null
A.B(d)
w=this.r
v=w!=null
return A.a3y(!1,this.c,C.df,u,u,u,u,C.l,u,new B.aQ5(d,v,D.fB,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,C.hK,u,u,u,u,u,u,u,u),u,u,u,u,u,u,u,u,v,this.d,u,u,u,u,u,w,u,u,u,!1,u,u,u,u,u,u,u,!0,u,u)}}
B.aQ5.prototype={
goe(){var w,v=this,u=v.go
if(u===$){w=A.B(v.fr)
v.go!==$&&A.ax()
u=v.go=w.ax}return u},
gdi(){if(this.fy===D.fB)var w=0
else w=this.fx?1:0
return w},
gux(){return 1},
ghe(){var w,v=this,u=v.id
if(u===$){w=A.B(v.fr)
v.id!==$&&A.ax()
u=v.id=w.ok}w=u.as
if(w==null)w=null
else w=w.bg(v.fx?v.goe().k3:v.goe().k3)
return w},
gbL(){return new A.bV(new B.aQ6(this),x.b)},
gbC(){if(this.fy===D.fB)var w=C.D
else{w=this.goe().x1
if(w==null)w=C.o}return w},
gbR(){return C.D},
goH(){return null},
goK(){return null},
geW(){var w,v,u=this
if(u.fy===D.fB)if(u.fx){w=u.goe()
v=w.to
if(v==null){v=w.u
w=v==null?w.k3:v}else w=v
w=new A.b9(w,1,C.y,-1)}else{w=u.goe().k3
w=new A.b9(A.aX(31,w.I()>>>16&255,w.I()>>>8&255,w.I()&255),1,C.y,-1)}else w=C.lF
return w},
gfn(){var w=null
return new A.dS(18,w,w,w,w,this.fx?this.goe().b:this.goe().k3,w,w,w)},
gce(){return C.dh},
goV(){var w=this.ghe(),v=w==null?null:w.r
if(v==null)v=14
w=A.bG(this.fr,C.aY)
w=w==null?null:w.gcJ()
w=A.mO(C.dU,C.co,A.E((w==null?C.aq:w).aT(v)/14-1,0,1))
w.toString
return w}}
B.a1g.prototype={
F(d){var w,v,u=null
A.B(d)
A.B(d)
w=this.z
v=w!=null
return A.a3y(!1,u,C.df,u,u,u,u,C.l,u,new B.aWQ(d,!0,!1,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,C.hK,u,u,u,0,u,u,u,u),u,C.uk,u,u,u,u,u,u,v,this.d,u,u,u,u,w,u,u,u,u,!1,u,u,u,u,u,u,u,!0,u,u)}}
B.aWQ.prototype={
gt5(){var w,v=this,u=v.go
if(u===$){w=A.B(v.fr)
v.go!==$&&A.ax()
u=v.go=w.ax}return u},
ghe(){var w,v,u,t=this,s=t.id
if(s===$){w=A.B(t.fr)
t.id!==$&&A.ax()
s=t.id=w.ok}w=s.as
if(w==null)w=null
else{v=t.gt5()
u=v.rx
v=u==null?v.k3:u
v=w.bg(v)
w=v}return w},
gbL(){return new A.bV(new B.aWR(this),x.b)},
gbC(){return C.D},
gbR(){return C.D},
goH(){var w=this.gt5(),v=w.rx
w=v==null?w.k3:v
return w},
goK(){var w=this.gt5(),v=w.rx
w=v==null?w.k3:v
return w},
geW(){var w=this.gt5(),v=w.to
if(v==null){v=w.u
w=v==null?w.k3:v}else w=v
w=new A.b9(w,1,C.y,-1)
return w},
gfn(){var w=null,v=this.gt5(),u=v.rx
v=u==null?v.k3:u
return new A.dS(18,w,w,w,w,v,w,w,w)},
gce(){return C.dh},
goV(){var w=this.ghe(),v=w==null?null:w.r
if(v==null)v=14
w=A.bG(this.fr,C.aY)
w=w==null?null:w.gcJ()
w=A.mO(C.dU,C.co,A.E((w==null?C.aq:w).aT(v)/14-1,0,1))
w.toString
return w}}
B.Ce.prototype={
J6(){var w=0,v=A.p(x.Q),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$J6=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:i=t.c
if(i!=null){u=i
w=1
break}s=$.lw()
h=J
g=x.j
f=C.P
w=3
return A.i(s.nF("assets/data/conversation.json"),$async$J6)
case 3:r=h.c2(g.a(f.hs(e,null)),x.P)
q=A.w(x.N,x.y)
for(p=A.l(r),o=new A.aN(r,r.gE(r),p.h("aN<Q.E>")),p=p.h("Q.E");o.t();){n=o.d
if(n==null)n=p.a(n)
m=n.i(0,"id")
if(typeof m=="string")q.m(0,m,B.bgg(n))}if(t.b)for(l=0;l<1;++l){k=D.VL[l]
j=k.i(0,"id")
if(typeof j=="string")q.bc(j,new B.aq8(k))}u=t.c=q
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$J6,v)}}
B.x3.prototype={}
B.Cg.prototype={}
B.Cf.prototype={}
B.a_6.prototype={}
B.CL.prototype={
J(){return"HanziDiffKind."+this.b}}
B.mY.prototype={
k(d,e){if(e==null)return!1
return e instanceof B.mY&&e.a===this.a&&e.b===this.b},
gp(d){return A.P(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d){return"HanziDiffSegment("+this.b.b+', "'+this.a+'")'}}
B.lM.prototype={}
B.tL.prototype={
cN(){var w=0,v=A.p(x.s),u,t=this,s
var $async$cN=A.q(function(d,e){if(d===1)return A.m(e,v)
for(;;)switch(w){case 0:s=A.jN(t).ck($.lx(),x.L)
t.Oq()
u=new B.lM(A.b([new B.xs(D.rh,"",A.b([D.LG,new B.zB(B.bvX(s.c))],x.A))],x.r),!1)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$cN,v)},
ys(d){return this.ahs(d)},
ahs(d){var w=0,v=A.p(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ys=A.q(function(a0,a1){if(a0===1){s.push(a1)
w=t}for(;;)switch(w){case 0:f=C.c.dl(d)
if(J.bi(f)===0){w=1
break}k=r.gbJ().gn()
w=k==null?3:4
break
case 3:w=5
return A.i(r.cN(),$async$ys)
case 5:k=a1
case 4:r.Oq()
j=k.a
i=x.B
h=A.O(j,i)
h.push(new B.xs(D.rg,f,D.WI))
q=h
h=q
j=h==null?j:h
h=x.s
r.sbJ(A.Bh(new B.lM(j,!0),h))
t=7
w=10
return A.i(A.jN(r).ck($.bsb(),x.M).xR(f),$async$ys)
case 10:p=a1
r.Oq()
o=new B.xs(D.rh,"",p)
j=A.O(q,i)
n=j
J.d9(n,o)
r.sbJ(A.Bh(new B.lM(n,!1),h))
t=2
w=9
break
case 7:t=6
e=s.pop()
m=A.a2(e)
l=A.ah(e)
r.sbJ(A.b9I(m,l,null,h))
w=9
break
case 6:w=2
break
case 9:case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$ys,v)},
Oq(){return"chat_"+ ++this.x}}
B.Ch.prototype={
C4(d,e){return this.aSI(d,e)},
aSI(d,e){var w=0,v=A.p(x.a),u,t=this,s,r,q,p
var $async$C4=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:w=3
return A.i(t.E_(e,d),$async$C4)
case 3:s=g
r=J.aO(s)
w=r.gE(s)<10?4:5
break
case 4:q=r
p=s
w=6
return A.i(t.Go(e,d),$async$C4)
case 6:q.C(p,g)
case 5:if(r.ga_(s)){u=null
w=1
break}u=r.i(s,C.bn.kY(r.gE(s)))
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$C4,v)},
E_(d,e){return this.aqN(d,e)},
aqN(d,e){var w=0,v=A.p(x.g),u,t,s,r,q,p,o,n,m
var $async$E_=A.q(function(f,g){if(f===1)return A.m(g,v)
for(;;)switch(w){case 0:w=3
return A.i(D.U7.acN(e),$async$E_)
case 3:n=g
m=A.b([],x.V)
for(t=J.ay(n),s=d===D.j7,r=d===D.mi;t.t();){q=t.gK()
p=q.d
o=!1
if(p.length!==0)if(new A.iq(p).gE(0)<=16)if(!s||q.Q!=null)o=!r||q.f.length!==0
if(o)m.push(new B.x4(d,p,q.e,q.f,q.b,q.Q))}u=m
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$E_,v)},
Go(d,e){return this.aIn(d,e)},
aIn(d,e){var w=0,v=A.p(x.g),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Go=A.q(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=null
t=4
w=7
return A.i(r.b.J9(e),$async$Go)
case 7:j=g
t=2
w=6
break
case 4:t=3
i=s.pop()
u=D.WJ
w=1
break
w=6
break
case 3:w=2
break
case 6:p=A.b([],x.V)
for(o=J.ay(j),n=d===D.mi;o.t();){m=o.gK()
l=m.r
k=!1
if(l.length!==0)if(C.b.gM(l).a.length!==0)if(new A.iq(C.b.gM(l).a).gE(0)<=16)k=!n||C.b.gM(l).c.length!==0
if(k)p.push(new B.x4(d,C.b.gM(l).a,C.b.gM(l).b,C.b.gM(l).c,m.w,"https://pub-7d5fb452d3c14b469b1d630f885dfa87.r2.dev/audio/v1/vocab/"+m.a+"_E0.mp3"))}u=p
w=1
break
case 1:return A.n(u,v)
case 2:return A.m(s.at(-1),v)}})
return A.o($async$Go,v)}}
B.Db.prototype={
xR(d){return this.aVN(d)},
aVN(d){var w=0,v=A.p(x.U),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$xR=A.q(function(a0,a1){if(a0===1)return A.m(a1,v)
for(;;)switch(w){case 0:e=C.c.dl(d).toLowerCase()
if(C.c.q(e,"luy\u1ec7n nghe")||C.c.q(e,"ch\xe9p ch\xednh t\u1ea3")||C.c.q(e,"nghe vi\u1ebft")||C.c.q(e,"nghe g\xf5")||C.c.q(e,"nghe r\u1ed3i vi\u1ebft")||C.c.q(e,"dictation")){u=t.z9(D.j7)
w=1
break}if(C.c.q(e,"luy\u1ec7n d\u1ecbch")||C.c.q(e,"d\u1ecbch vi\u1ec7t")||C.c.q(e,"d\u1ecbch sang ti\u1ebfng trung")||C.c.q(e,"vi\u1ec7t-trung")||C.c.q(e,"vi\u1ec7t trung")){u=t.z9(D.mi)
w=1
break}s=t.a
w=3
return A.i(s.Ug(),$async$xR)
case 3:r=a1
w=4
return A.i(s.Uf(),$async$xR)
case 4:q=a1
w=5
return A.i(t.b.J6(),$async$xR)
case 5:p=a1
o=J.i4(p.geU())?null:J.wk(p.geU())
n=t.atP(r,e)
if(n==null){s=J.aO(r)
n=s.ga_(r)?null:s.gM(r)}m=t.atO(q,e)
if(m==null){s=J.aO(q)
m=s.ga_(q)?null:s.gM(q)}l=A.b([],x.A)
if(C.c.q(e,"quiz")||C.c.q(e,"luy\u1ec7n")||C.c.q(e,"\xf4n")||C.c.q(e,"kiem tra")||C.c.q(e,"ki\u1ec3m tra")){if(n==null){s=J.aO(r)
k=s.ga_(r)?null:s.gM(r)}else k=n
if(k!=null){l.push(new B.lE("M\xecnh t\u1ea1o nhanh m\u1ed9t quiz local t\u1eeb d\u1eef li\u1ec7u HSK."))
l.push(t.aDl(k,r))
j=t.aFp(k)
if(j!=null)l.push(j)}}else if(C.c.q(e,"ng\u1eef ph\xe1p")||C.c.q(e,"grammar")){if(m!=null){l.push(new B.lE("\u0110\xe2y l\xe0 \u0111i\u1ec3m ng\u1eef ph\xe1p ph\xf9 h\u1ee3p nh\u1ea5t m\xecnh t\xecm th\u1ea5y."))
l.push(t.a1C(m))}}else if((C.c.q(e,"h\u1ed9i tho\u1ea1i")||C.c.q(e,"\u0111\u1ed1i tho\u1ea1i")||C.c.q(e,"dialogue")||C.c.q(e,"conversation"))&&o!=null){s=o.y
i=s.length===0?null:C.b.gM(s)
l.push(new B.lE(i==null?o.f:o.c+": "+i.c+" - "+i.e))
for(s=o.as,s=A.dd(s,0,A.et(2,"count",x.S),A.X(s).c),h=s.$ti,s=new A.aN(s,s.gE(0),h.h("aN<a8.E>")),g=o.b,h=h.h("a8.E");s.t();){f=s.d
if(f==null)f=h.a(f)
l.push(new B.FL(f.a,f.b,f.c,g))}}else{s=n==null
if(!s){l.push(new B.lE("M\xecnh t\xecm th\u1ea5y t\u1eeb g\u1ea7n v\u1edbi c\xe2u h\u1ecfi c\u1ee7a b\u1ea1n."))
h=n.b
g=n.c
f=n.f
f=f.length===0?"":C.b.gM(f).b
l.push(new B.FL(h,g,f,n.w))}h=m==null
if(!h)l.push(t.a1C(m))
if(s&&h)l.push(D.LF)}l.push(D.a5D)
u=l
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$xR,v)},
z9(d){return this.arZ(d)},
arZ(d){var w=0,v=A.p(x.U),u,t=this,s,r,q,p,o,n,m
var $async$z9=A.q(function(e,f){if(e===1)return A.m(f,v)
for(;;)switch(w){case 0:s=t.d
w=3
return A.i(t.c.C4(s,d),$async$z9)
case 3:r=f
q=d===D.j7
p=q?"Luy\u1ec7n nghe ch\xe9p ch\xednh t\u1ea3":"Luy\u1ec7n d\u1ecbch Vi\u1ec7t-Trung"
o=q?"Luy\u1ec7n d\u1ecbch":"Luy\u1ec7n nghe"
n=q?"Luy\u1ec7n d\u1ecbch Vi\u1ec7t-Trung":"Luy\u1ec7n nghe ch\xe9p ch\xednh t\u1ea3"
m=new B.zB(A.b([new B.mV("C\xe2u kh\xe1c",p),new B.mV(o,n)],x.W))
if(r==null){u=A.b([new B.lE("Ch\u01b0a c\xf3 c\xe2u luy\u1ec7n ph\xf9 h\u1ee3p cho HSK "+s+"."),m],x.A)
w=1
break}u=A.b([new B.lE(q?"Nghe audio r\u1ed3i g\xf5 l\u1ea1i c\xe2u b\u1eb1ng ch\u1eef H\xe1n nh\xe9.":"D\u1ecbch c\xe2u sau sang ti\u1ebfng Trung nh\xe9."),new B.JZ(r),m],x.A)
w=1
break
case 1:return A.n(u,v)}})
return A.o($async$z9,v)},
atP(d,e){var w,v,u,t,s,r
for(w=J.ay(d);w.t();){v=w.gK()
if(C.c.q(e,v.b.toLowerCase())||C.c.q(e,v.d.toLowerCase())||C.c.q(e,v.c.toLowerCase()))return v
for(u=v.f,t=u.length,s=0;s<t;++s){r=u[s].b
if(r.length!==0&&C.c.q(e,r.toLowerCase()))return v}}return null},
atO(d,e){var w,v
for(w=J.ay(d);w.t();){v=w.gK()
if(C.c.q(e,v.b.toLowerCase())||C.c.q(e,v.c.toLowerCase()))return v}return null},
a1C(d){return new B.L1(d.b,d.c,d.d,d.e)},
aDl(d,e){var w,v,u,t,s=d.f,r=A.ck([s.length===0?"":C.b.gM(s).b],x.N)
for(w=J.ay(e),v=d.a;w.t();){u=w.gK()
if(u.a!==v){t=u.f
t=(t.length===0?"":C.b.gM(t).b).length!==0}else t=!1
if(t){u=u.f
r.v(0,u.length===0?"":C.b.gM(u).b)}}r=A.Pt(r,4,r.$ti.c)
r=A.O(r,A.l(r).h("z.E"))
r.$flags=1
s=s.length===0?"":C.b.gM(s).b
w=d.r
w=w.length===0?"T\u1eeb n\xe0y thu\u1ed9c HSK "+d.w+".":C.b.gM(w).c
return new B.N4(d.b+" ngh\u0129a l\xe0 g\xec?",r,s,w)},
aFp(d){var w,v,u,t,s=d.r
if(s.length===0)return null
w=C.b.gM(s)
s=A.b([],x.T)
for(v=new A.z5(w.a);v.t();){u=A.dL(v.d)
if(C.c.dl(u).length!==0)s.push(u)}v=s.length
if(v<2||v>12)return null
t=A.O(s,x.N)
C.b.Dp(t)
return new B.Ot(w.c,t,C.b.hU(s))},
$ibh1:1}
B.a_7.prototype={
J(){return"DictationMode."+this.b}}
B.x4.prototype={}
B.YO.prototype={
J(){return"ChatMessageRole."+this.b}}
B.xs.prototype={}
B.lL.prototype={}
B.lE.prototype={}
B.FL.prototype={}
B.L1.prototype={}
B.N4.prototype={}
B.Ot.prototype={}
B.JZ.prototype={}
B.zB.prototype={}
B.mV.prototype={}
B.th.prototype={
a8(){return new B.Rg()}}
B.Rg.prototype={
F(d){return A.pD(this.gcf().bZ($.beF(),x.J),new B.aSf(this),new B.aSg(this),new B.aSh())},
aq9(d){var w=C.c.dl(d)
if(w.length===0)return
A.dZ()
this.gcf().ck($.beF().giy(),x.i).ys(w)}}
B.acJ.prototype={
F(d){var w,v,u=null,t=this.c
if(t.b===D.rg)return new B.aim(t.c,u)
w=A.b([],x.p)
for(t=J.ay(t.d),v=this.d;t.t();)w.push(new A.aT(C.eM,new B.a8E(t.gK(),v,u),u))
return new A.aT(D.Rg,A.bs(w,C.F,C.j,C.m),u)}}
B.a8E.prototype={
F(d){var w,v=null,u=this.c
A:{if(u instanceof B.lE){w=new B.a8q(u.a,v)
break A}if(u instanceof B.FL){w=new B.aiw(u,v)
break A}if(u instanceof B.L1){w=new B.abr(u,v)
break A}if(u instanceof B.N4){w=new B.Tv(u,v)
break A}if(u instanceof B.Ot){w=new B.UE(u,v)
break A}if(u instanceof B.JZ){w=new B.K_(u,v)
break A}if(u instanceof B.zB){w=new B.agS(u.a,this.d,v)
break A}w=v}return w}}
B.aim.prototype={
F(d){var w=null,v=A.B(d).ax,u=A.aW(18)
return new A.f5(C.lv,w,w,A.bM(w,A.W(this.c,w,w,w,w,A.aU(w,w,v.c,w,w,w,w,w,w,w,w,w,w,w,C.ah,w,w,!0,w,w,w,w,w,w,w,w),w,w),C.l,w,w,new A.b4(v.b,w,w,u,w,w,C.v),w,w,w,D.Rp,K.jd,w,w,w),w)}}
B.a8q.prototype={
F(d){var w,v,u=null,t=A.B(d).ax,s=t.R8
if(s==null)s=t.k2
w=A.aW(18)
v=t.to
if(v==null){v=t.u
if(v==null)v=t.k3}v=A.dG(v.aW(0.45),1)
return A.bM(u,A.W(this.c,u,u,u,u,u,u,u),C.l,u,u,new A.b4(s,u,v,w,u,u,C.v),u,u,u,u,K.jd,u,u,u)}}
B.aiw.prototype={
F(d){var w,v,u,t,s=null,r=A.B(d).ax,q=r.d
if(q==null)q=r.b
w=A.aW(14)
v=this.c
u=r.e
q=A.bM(C.J,A.W("H"+v.e,s,s,s,s,A.aU(s,s,u==null?r.c:u,s,s,s,s,s,s,s,s,s,s,s,C.a8,s,s,!0,s,s,s,s,s,s,s,s),s,s),C.l,s,s,new A.b4(q,s,s,w,s,s,C.v),s,52,s,s,s,s,s,52)
w=A.B(d).ok.f
w=w==null?s:w.hP(C.a8)
u=x.p
w=A.b([A.W(v.b,s,s,s,s,w,s,s)],u)
t=v.c
if(t.length!==0)w.push(A.W(t,s,s,s,s,A.aU(s,s,r.b,s,s,s,s,s,s,s,s,s,s,s,C.a1,s,s,!0,s,s,s,s,s,s,s,s),s,s))
v=v.d
if(v.length!==0){t=r.rx
w.push(A.W(v,2,C.al,s,s,A.aU(s,s,t==null?r.k3:t,s,s,s,s,s,s,s,s,s,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s))}return new B.Al(A.bK(A.b([q,E.Fv,A.cK(A.bs(w,C.F,C.j,C.m),1,s)],u),C.t,s,C.j,C.m,0),s)}}
B.abr.prototype={
F(d){var w,v,u=null,t=A.B(d).ax,s=A.em(D.Sp,t.y,u,u,u),r=this.c,q=A.B(d).ok.w
q=q==null?u:q.hP(C.a8)
w=x.p
q=A.bK(A.b([s,C.bb,A.cK(A.W(r.b,1,C.al,u,u,q,u,u),1,u),A.W("HSK "+r.e,u,u,u,u,u,u,u)],w),C.t,u,C.j,C.m,0)
s=A.W(r.c,u,u,u,u,A.aU(u,u,t.b,u,u,u,u,u,u,u,u,u,u,u,C.a1,u,u,!0,u,u,u,u,u,u,u,u),u,u)
v=t.rx
return new B.Al(A.bs(A.b([q,C.bQ,s,C.eh,A.W(r.d,3,C.al,u,u,A.aU(u,u,v==null?t.k3:v,u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),u,u)],w),C.F,C.j,C.m),u)}}
B.Tv.prototype={
a8(){return new B.ae7()}}
B.ae7.prototype={
F(d){var w,v,u,t,s,r,q=this,p=null,o=A.B(d).ax,n=q.d,m=o.CW
m=A.em(D.SG,m==null?o.y:m,p,p,p)
w=q.a.c
v=A.B(d).ok.w
v=v==null?p:v.hP(C.a8)
u=x.p
u=A.b([A.bK(A.b([m,C.bb,A.cK(A.W(w.a,p,p,p,p,v,p,p),1,p)],u),C.t,p,C.j,C.m,0),C.aB],u)
for(m=q.a.c.b,w=m.length,v=n==null,t=0;t<m.length;m.length===w||(0,A.x)(m),++t){s=m[t]
r=v?new B.aZW(q,s):p
u.push(new A.aT(C.mt,new L.Mv(!1,r,p,p,p,A.by1(p,p,p,p,p,p,p,p,p,q.a_g(o,s,n),p,D.a4O,p,p,p,new A.b9(q.a_g(o,s,n),1,C.y,-1),p,p,p,p),p,p,!1,p,!0,p,A.W(s,p,p,p,p,p,p,p),p),p))}if(!v){m=q.a.c
w=m.c
m=m.d
m=n===w?"\u0110\xfang r\u1ed3i. "+m:"\u0110\xe1p \xe1n \u0111\xfang: "+w+". "+m
w=o.rx
u.push(A.W(m,p,p,p,p,A.aU(p,p,w==null?o.k3:w,p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p))}return new B.Al(A.bs(u,C.F,C.j,C.m),p)},
a_g(d,e,f){var w
if(f==null){w=d.ry
if(w==null){w=d.u
if(w==null)w=d.k3}return w}if(e===this.a.c.c)return d.b
if(e===f)return d.fy
w=d.to
if(w==null){w=d.u
if(w==null)w=d.k3}return w}}
B.UE.prototype={
a8(){return new B.agc(A.b([],x.T))}}
B.agc.prototype={
gMt(){var w,v=this,u=v.d
if(u===$){w=A.O(v.a.c.b,x.N)
v.d!==$&&A.ax()
v.d=w
u=w}return u},
F(d){var w,v,u,t,s,r,q=this,p=null,o=A.B(d).ax,n=q.e,m=C.b.hU(n)===q.a.c.c,l=A.em(E.ug,o.y,p,p,p),k=A.B(d).ok.w,j=x.p
k=A.b([A.bK(A.b([l,C.bb,A.cK(A.W("S\u1eafp x\u1ebfp c\xe2u",p,p,p,p,k==null?p:k.hP(C.a8),p,p),1,p)],j),C.t,p,C.j,C.m,0)],j)
l=q.a.c.a
if(l.length!==0)C.b.C(k,A.b([C.at,A.W(l,p,p,p,p,p,p,p)],j))
k.push(C.aB)
l=A.aW(12)
if(q.f)w=m?o.b:o.fy
else{w=o.to
if(w==null){w=o.u
if(w==null)w=o.k3}}w=A.dG(w,1)
v=A.b([],j)
for(u=0;u<n.length;++u){t=A.W(n[u],p,p,p,p,p,p,p)
v.push(new B.a1g(t,q.f?p:new B.b1F(q,u),p))}k.push(A.bM(p,A.kl(v,C.bS,6,6),C.l,p,D.Jn,new A.b4(o.k2,p,w,l,p,p,C.v),p,p,p,p,D.QU,p,p,1/0))
k.push(C.bQ)
l=A.b([],j)
for(j=q.gMt(),w=j.length,s=0;s<j.length;j.length===w||(0,A.x)(j),++s){r=j[s]
v=A.W(r,p,p,p,p,p,p,p)
l.push(B.bf0(p,v,q.f?p:new B.b1G(q,r)))}k.push(A.kl(l,C.bS,8,8))
k.push(C.aB)
k.push(A.KB(E.pe,n.length===0||q.f?p:new B.b1H(q),p))
if(q.f){n=m?"C\xe2u \u0111\xfang.":"\u0110\xe1p \xe1n: "+q.a.c.c
k.push(A.W(n,p,p,p,p,A.aU(p,p,m?o.b:o.fy,p,p,p,p,p,p,p,p,p,p,p,C.a1,p,p,!0,p,p,p,p,p,p,p,p),p,p))}return new B.Al(A.bs(k,C.F,C.j,C.m),p)}}
B.agS.prototype={
F(d){var w,v,u,t,s=null,r=A.b([],x.p)
for(w=this.c,v=w.length,u=0;u<w.length;w.length===v||(0,A.x)(w),++u){t=w[u]
r.push(B.bf0(D.T4,A.W(t.a,s,s,s,s,s,s,s),new B.b2T(this,t)))}return A.kl(r,C.bS,8,8)}}
B.G6.prototype={
a8(){return new B.a9f()},
aTs(d){return this.d.$1(d)}}
B.a9f.prototype={
gN3(){var w=this.w
if(w===$)w=this.w=new A.zH(C.kJ,$.aD())
return w},
l(){var w=this.gN3()
w.aB$=$.aD()
w.ao$=0
this.az()},
F(d){var w,v,u=null,t=A.B(d).ax,s=t.R8
if(s==null)s=t.k2
w=A.aW(22)
v=t.to
if(v==null){v=t.u
if(v==null)v=t.k3}v=A.dG(v.aW(0.45),1)
return new A.aT(D.Ri,A.jQ(A.bK(A.b([A.cK(G.bbL(u,this.gN3(),D.Tw,!0,u,4,1,u,this.a.d,u,C.Gi),1,u),new A.aT(D.QM,new A.xC(u,u,u,D.T5,u,new B.aSR(this),"G\u1eedi",u,u,u,C.ae1,u),u)],x.p),C.dQ,u,C.j,C.m,0),new A.b4(s,u,v,w,u,u,C.v),C.bA),u)}}
B.ai5.prototype={
eZ(d,e){var w,v,u,t,s,r,q,p=null,o="\u0110ang d\u1ef1ng GenUI...",n=A.B(d).ax
if(A.jF(e)){w=A.W("\u25cf \u25cf \u25cf",p,p,p,p,A.aU(p,p,n.b,p,p,p,p,p,p,p,p,16,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p)
v=n.rx
return A.bK(A.b([w,C.i_,A.W(o,p,p,p,p,A.aU(p,p,v==null?n.k3:v,p,p,p,p,p,p,p,p,13,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p)],x.p),C.t,p,C.j,C.aa,0)}w=new B.b48(n)
v=n.R8
if(v==null)v=n.k2
u=A.aW(16)
t=n.to
if(t==null){t=n.u
if(t==null)t=n.k3}t=A.dG(t.aW(0.3),1)
s=w.$1(0)
r=w.$1(1)
w=w.$1(2)
q=n.rx
return A.bM(p,A.bK(A.b([s,C.fq,r,C.fq,w,C.dr,A.W(o,p,p,p,p,A.aU(p,p,q==null?n.k3:q,p,p,p,p,p,p,p,p,13,p,p,C.a0,p,p,!0,p,p,p,p,p,p,p,p),p,p)],x.p),C.t,p,C.j,C.aa,0),C.l,p,p,new A.b4(v,p,t,u,p,p,C.v),p,p,p,p,E.tl,p,p,p)}}
B.Al.prototype={
F(d){var w,v,u=null,t=A.B(d).ax,s=t.R8
if(s==null)s=t.k2
w=A.aW(18)
v=t.to
if(v==null){v=t.u
if(v==null)v=t.k3}return A.bM(u,this.c,C.l,u,u,new A.b4(s,u,A.dG(v.aW(0.45),1),w,u,u,C.v),u,u,u,u,C.dT,u,u,1/0)},
gN(){return this.c}}
B.K_.prototype={
a8(){return new B.RO(D.uV)}}
B.RO.prototype={
gNl(){var w=this.d
if(w===$)w=this.d=new A.zH(C.kJ,$.aD())
return w},
l(){var w=this.gNl()
w.aB$=$.aD()
w.ao$=0
this.az()},
a00(){var w,v=this,u=B.bnP(v.a.c.a.c),t=B.bnP(v.gNl().a.a)
if(t.length===0)return
w=t===u
if(w)A.qd()
else A.xw()
v.T(new B.aU2(v,w,u,t))},
aEp(){A.dZ()
this.T(new B.aU3(this))},
F(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Noto Serif SC",h=A.B(a0).ax,g=k.a.c.a,f=g.b===D.j7,e=k.f||k.w,d=h.R8
if(d==null)d=h.k2
w=A.aW(18)
v=h.to
if(v==null){v=h.u
if(v==null)v=h.k3}v=A.dG(v.aW(0.45),1)
u=f?D.Sy:D.SN
t=h.CW
s=t==null
u=A.em(u,s?h.y:t,j,j,j)
r=f?"Nghe vi\u1ebft H\xe1n t\u1ef1":"D\u1ecbch Vi\u1ec7t \u2192 Trung"
q=A.B(a0).ok.w
r=A.cK(A.W(r,j,j,j,j,q==null?j:q.hP(C.a8),j,j),1,j)
q=h.rx
p=q==null
o=x.p
r=A.b([A.bK(A.b([u,C.bb,r,A.W("HSK "+g.f,j,j,j,j,A.aU(j,j,p?h.k3:q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j)],o),C.t,j,C.j,C.m,0),C.aB],o)
if(f){u=A.kx(j,30,"Ph\xe1t audio",g.r)
r.push(A.bK(A.b([u,C.i_,A.cK(A.W("B\u1ea5m nghe (nghe l\u1ea1i \u0111\u01b0\u1ee3c nhi\u1ec1u l\u1ea7n) r\u1ed3i g\xf5 l\u1ea1i c\xe2u.",j,j,j,j,A.aU(j,j,p?h.k3:q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j),1,j)],o),C.t,j,C.j,C.m,0))}else r.push(A.W(g.e,j,j,j,j,A.B(a0).ok.w,j,j))
r.push(C.aB)
u=k.gNl()
n=!e
m=h.k3
l=A.aU(j,j,m,j,j,j,j,j,i,C.cp,j,22,j,j,C.ah,j,1.15,!0,j,j,j,j,j,j,j,j)
r.push(G.bbL(!1,u,G.baI(j,new G.l3(4,A.aW(12),I.qG),j,j,j,j,j,j,!0,j,j,j,j,j,j,h.k2,!0,j,j,j,j,j,j,j,j,j,j,j,j,j,j,"G\xf5 ch\u1eef H\xe1n...",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),!1,n,2,1,j,new B.aU5(k),l,C.pb))
r.push(C.bQ)
u=A.KB(E.pe,e?j:k.gas_(),j)
l=A.zE(D.aaU,k.r?j:new B.aU6(k),j)
r.push(A.kl(A.b([u,l,A.zE(D.ab3,k.w?j:k.gaEo(),j)],o),C.pP,8,8))
if(k.r&&n)C.b.C(r,A.b([C.eh,A.W(g.d,j,j,j,j,A.aU(j,j,h.b,j,j,j,j,j,"Inter",C.d0,j,16,j,j,C.ah,j,j,!0,j,0.2,j,j,j,j,j,j),j,j)],o))
if(k.e&&!k.f&&!k.w){u=A.W("Ch\u01b0a \u0111\xfang, \u0111\u1ed1i chi\u1ebfu t\u1eebng ch\u1eef:",j,j,j,j,A.aU(j,j,h.fy,j,j,j,j,j,j,j,j,j,j,j,C.a1,j,j,!0,j,j,j,j,j,j,j,j),j,j)
n=k.x
C.b.C(r,A.b([C.bQ,u,C.aV,new B.aa8(n,j),C.aV,A.W("S\u1eeda l\u1ea1i r\u1ed3i b\u1ea5m Ki\u1ec3m tra l\u1ea7n n\u1eefa nh\xe9.",j,j,j,j,A.aU(j,j,p?m:q,j,j,j,j,j,j,j,j,13,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j)],o))}if(e){u=k.f
n=u?C.ng:D.Sz
if(u)t=h.b
else if(s)t=h.y
t=A.em(n,t,j,j,20)
s=u?"Ch\xednh x\xe1c!":"\u0110\xe1p \xe1n:"
t=A.bK(A.b([t,C.Fx,A.W(s,j,j,j,j,A.aU(j,j,u?h.b:m,j,j,j,j,j,j,j,j,j,j,j,C.a8,j,j,!0,j,j,j,j,j,j,j,j),j,j)],o),C.t,j,C.j,C.m,0)
s=A.b([A.W(g.c,j,j,j,j,A.aU(j,j,m,j,j,j,j,j,i,C.cp,j,24,j,j,C.ah,j,1.15,!0,j,j,j,j,j,j,j,j),j,j),A.W(g.d,j,j,j,j,A.aU(j,j,h.b,j,j,j,j,j,"Inter",C.d0,j,15,j,j,C.ah,j,j,!0,j,0.2,j,j,j,j,j,j),j,j)],o)
u=g.e
if(u.length!==0)s.push(A.W(u,j,j,j,j,A.aU(j,j,p?m:q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,!0,j,j,j,j,j,j,j,j),j,j))
u=A.b([A.cK(A.bs(s,C.F,C.j,C.m),1,j)],o)
s=g.r
if(s!=null&&!f)u.push(A.kx(j,24,j,s))
C.b.C(r,A.b([C.bQ,t,C.eh,A.bK(u,C.F,j,C.j,C.m,0)],o))}return A.bM(j,A.bs(r,C.F,C.j,C.m),C.l,j,j,new A.b4(d,j,v,w,j,j,C.v),j,j,j,j,C.dT,j,j,1/0)}}
B.aa8.prototype={
F(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=A.B(d).ax,i=A.b([],x.k)
for(w=this.c,v=w.length,u=x.N,t=j.rx,s=j.k3,r=j.fy,q=j.b,p=t==null,o=0;o<w.length;w.length===v||(0,A.x)(w),++o){n=w[o]
m=n.b
l=n.a
if(m===D.eW)l=C.b.hU(A.be(new A.iq(l).gE(0),"\uff3f",!1,u))
A:{if(D.u4===m){m=new A.F(!0,q,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
break A}if(D.u5===m||D.eX===m){m=new A.F(!0,r,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,C.p9,r,k,k,k,k,k,k,k)
break A}if(D.eW===m){m=(p?s:t).aW(0.7)
m=new A.F(!0,m,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
break A}m=k}i.push(new A.ht(l,k,k,C.aT,k,k,k,k,k,k,m))}return A.bjP(A.eP(i,k,k,k,k,k,k,k,k,k,k),A.aU(k,k,s,k,k,k,k,k,"Noto Serif SC",C.cp,k,22,k,k,C.ah,k,1.15,!0,k,k,k,k,k,k,k,k),k)}}
B.amP.prototype={
$2$1(d,e,f){return A.bfa(d,null,!0,null,null,e,f)},
$1(d){return this.$2$1(d,x.O,x.C)}}
var z=a.updateTypes(["~()","x3()","Ce(cp)","N<lM>()","Ch(cp)","Db(cp)","~(c)","is()","is(u,bz)","is(lM)","Cg(Z<c,@>)","Cf(Z<c,@>)","tL()","c(k)"])
B.aQ6.prototype={
$1(d){var w,v
if(d.q(0,C.C)){w=this.a
if(w.fy===D.fB)w=null
else{w=w.goe().k3
w=A.aX(31,w.I()>>>16&255,w.I()>>>8&255,w.I()&255)}return w}w=this.a
if(w.fy===D.fB)w=null
else{w=w.goe()
v=w.p3
w=v==null?w.k2:v}return w},
$S:44}
B.aWR.prototype={
$1(d){var w,v
if(d.q(0,C.ax)&&d.q(0,C.C)){w=this.a.gt5().k3
return A.aX(31,w.I()>>>16&255,w.I()>>>8&255,w.I()&255)}if(d.q(0,C.C))return null
if(d.q(0,C.ax)){w=this.a.gt5()
v=w.Q
return v==null?w.y:v}return null},
$S:44}
B.aq8.prototype={
$0(){return B.bgg(this.a)},
$S:z+1}
B.b7D.prototype={
$1(d){return new B.Ce(!0)},
$S:z+2}
B.b7E.prototype={
$1(d){return new B.Ch(d.bZ($.t3(),x.o))},
$S:z+4}
B.b7Q.prototype={
$1(d){var w=x.S
return new B.Db(d.bZ($.t3(),x.o),d.bZ($.bs8(),x.z),d.bZ($.bs9(),x.E),d.bZ(A.oL($.lx(),new B.b7P(),x.L,w),w))},
$S:z+5}
B.b7P.prototype={
$1(d){return d.a},
$S:60}
B.aSh.prototype={
$0(){return D.a5_},
$S:z+7}
B.aSg.prototype={
$2(d,e){var w=null
return F.zt(C.d1,E.nO,A.b([new H.ES(M.uf,"Kh\xf4ng ph\u1ea3n h\u1ed3i \u0111\u01b0\u1ee3c",A.j(d),w,w),new F.p0(new B.G6(this.a.gMH(),w),w)],x.p),y.b,"Chat")},
$S:z+8}
B.aSf.prototype={
$1(d){var w=null,v=this.a,u=A.b([new A.ER(new A.OW(new B.aSe(v,d),d.a.length,!0,!0,!0,0,A.boa(),w),w)],x.p)
if(d.b)u.push(D.a54)
u.push(new F.p0(new B.G6(v.gMH(),w),w))
return F.zt(C.d1,E.nO,u,y.b,"Chat")},
$S:z+9}
B.aSe.prototype={
$2(d,e){var w,v=null,u=this.a
u=A.f6(new B.acJ(this.b.a[e],u.gMH(),v),!A.jF(u.gcf()),v,v)
w=A.bN(0,18e4,0,0)
return A.la(A.iK(u,v,A.bN(0,C.e.aF(e*40*1000),0,0),w),0.03,v,A.bN(0,22e4,0,0),0)},
$S:937}
B.aZW.prototype={
$0(){A.dZ()
var w=this.a
w.T(new B.aZV(w,this.b))},
$S:0}
B.aZV.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.b1F.prototype={
$0(){var w=this.a
w.T(new B.b1E(w,this.b))},
$S:0}
B.b1E.prototype={
$0(){var w=this.a
w.gMt().push(C.b.hx(w.e,this.b))},
$S:0}
B.b1G.prototype={
$0(){A.dZ()
var w=this.a
w.T(new B.b1D(w,this.b))},
$S:0}
B.b1D.prototype={
$0(){var w=this.a,v=this.b
C.b.G(w.gMt(),v)
w.e.push(v)},
$S:0}
B.b1H.prototype={
$0(){A.dZ()
var w=this.a
w.T(new B.b1C(w))},
$S:0}
B.b1C.prototype={
$0(){return this.a.f=!0},
$S:0}
B.b2T.prototype={
$0(){return this.a.d.$1(this.b.b)},
$S:0}
B.aSR.prototype={
$0(){var w=this.a,v=w.gN3(),u=v.a.a
v.rY(C.Ge)
w.a.aTs(u)},
$S:0}
B.b48.prototype={
$1(d){var w=null,v=A.f6(A.bM(w,w,C.l,w,w,new A.b4(this.a.b,w,w,w,w,w,C.cx),w,7,w,w,w,w,w,7),w,new B.b49(),w),u=A.bN(0,38e4,0,0)
return A.bi8(v,0,D.Pj,A.bN(0,C.e.aF(d*130*1000),0,0),u,-5)},
$S:263}
B.b49.prototype={
$1(d){return d.Vs(!0)},
$S:304}
B.aU2.prototype={
$0(){var w,v=this,u=v.a
u.e=!0
w=v.b
u.f=w
u.x=w?D.uV:B.bHM(v.c,v.d)},
$S:0}
B.aU3.prototype={
$0(){var w=this.a
w.r=w.w=!0},
$S:0}
B.aU5.prototype={
$1(d){return this.a.a00()},
$S:33}
B.aU6.prototype={
$0(){A.dZ()
var w=this.a
w.T(new B.aU4(w))},
$S:0}
B.aU4.prototype={
$0(){return this.a.r=!0},
$S:0};(function installTearOffs(){var w=a._static_1,v=a._static_0,u=a._instance_0u,t=a._instance_1u
w(B,"bHL","buy",10)
w(B,"bHK","bux",11)
v(B,"bH9","bvW",12)
u(B.tL.prototype,"gkL","cN",3)
t(B.Rg.prototype,"gMH","aq9",6)
var s
u(s=B.RO.prototype,"gas_","a00",0)
u(s,"gaEo","aEp",0)
w(B,"bnd","bAx",13)})();(function inheritance(){var w=a.inheritMany,v=a.inherit
w(A.rE,[B.aSm,B.CL,B.a_7,B.YO])
w(A.a4,[B.XE,B.a1g,B.acJ,B.a8E,B.aim,B.a8q,B.aiw,B.abr,B.agS,B.Al,B.aa8])
w(A.wI,[B.aQ5,B.aWQ])
w(A.hh,[B.aQ6,B.aWR,B.b7D,B.b7E,B.b7Q,B.b7P,B.aSf,B.b48,B.b49,B.aU5])
w(A.u,[B.Ce,B.x3,B.Cg,B.Cf,B.a_6,B.mY,B.lM,B.Ch,B.Db,B.x4,B.xs,B.lL,B.mV,B.amP])
w(A.mJ,[B.aq8,B.aSh,B.aZW,B.aZV,B.b1F,B.b1E,B.b1G,B.b1D,B.b1H,B.b1C,B.b2T,B.aSR,B.aU2,B.aU3,B.aU6,B.aU4])
v(B.tL,A.wx)
w(B.lL,[B.lE,B.FL,B.L1,B.N4,B.Ot,B.JZ,B.zB])
w(A.o7,[B.th,B.G6])
w(A.pQ,[B.Rg,B.a9f])
w(A.lF,[B.aSg,B.aSe])
w(A.a_,[B.Tv,B.UE,B.K_])
w(A.aa,[B.ae7,B.agc,B.RO])
v(B.ai5,A.o8)})()
A.mr(b.typeUniverse,JSON.parse('{"XE":{"a4":[],"d":[]},"a1g":{"a4":[],"d":[]},"tL":{"wx":["lM"]},"Db":{"bh1":[]},"lE":{"lL":[]},"FL":{"lL":[]},"L1":{"lL":[]},"N4":{"lL":[]},"Ot":{"lL":[]},"JZ":{"lL":[]},"zB":{"lL":[]},"Tv":{"a_":[],"d":[]},"UE":{"a_":[],"d":[]},"G6":{"a_":[],"d":[]},"th":{"a_":[],"d":[]},"Rg":{"aa":["th"]},"acJ":{"a4":[],"d":[]},"a8E":{"a4":[],"d":[]},"aim":{"a4":[],"d":[]},"a8q":{"a4":[],"d":[]},"aiw":{"a4":[],"d":[]},"abr":{"a4":[],"d":[]},"ae7":{"aa":["Tv"]},"agc":{"aa":["UE"]},"agS":{"a4":[],"d":[]},"a9f":{"aa":["G6"]},"ai5":{"a_":[],"d":[]},"Al":{"a4":[],"d":[]},"K_":{"a_":[],"d":[]},"RO":{"aa":["K_"]},"aa8":{"a4":[],"d":[]}}'))
var y={b:"H\u1ecfi \u0111\xe1p, tra t\u1eeb v\xe0 luy\u1ec7n t\u1eadp ngay trong cu\u1ed9c tr\xf2 chuy\u1ec7n."}
var x=(function rtii(){var w=A.Y
return{O:w("wx<@>"),J:w("bw<lM>"),w:w("b5<c,c>"),y:w("x3"),z:w("Ce"),E:w("Ch"),i:w("tL"),B:w("xs"),M:w("bh1"),s:w("lM"),X:w("v<a_6>"),V:w("v<x4>"),A:w("v<lL>"),r:w("v<xs>"),W:w("v<mV>"),R:w("v<mY>"),k:w("v<fE>"),m:w("v<Z<c,c>>"),T:w("v<c>"),p:w("v<d>"),o:w("ov"),g:w("A<x4>"),U:w("A<lL>"),j:w("A<@>"),I:w("A<k>"),Q:w("Z<c,x3>"),P:w("Z<c,@>"),K:w("iq"),N:w("c"),L:w("iu"),b:w("bV<S?>"),C:w("@"),S:w("k"),a:w("x4?"),Y:w("A<@>?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.Jn=new A.ag(0,1/0,52,1/0)
D.K5=new B.amP()
D.LF=new B.lE("M\xecnh c\xf3 th\u1ec3 tra t\u1eeb, gi\u1ea3i th\xedch ng\u1eef ph\xe1p, t\u1ea1o quiz ho\u1eb7c g\u1ee3i \xfd c\xe2u h\u1ed9i tho\u1ea1i t\u1eeb d\u1eef li\u1ec7u local.")
D.LG=new B.lE("Ch\xe0o b\u1ea1n, m\xecnh l\xe0 Chat GenUI local. M\xecnh c\xf3 th\u1ec3 tra t\u1eeb, gi\u1ea3i th\xedch ng\u1eef ph\xe1p, t\u1ea1o quiz v\xe0 luy\u1ec7n nghe-vi\u1ebft ch\u1eef H\xe1n t\u1eeb d\u1eef li\u1ec7u offline.")
D.rg=new B.YO(0,"user")
D.rh=new B.YO(1,"assistant")
D.Pj=new A.ex(0.455,0.03,0.515,0.955)
D.j7=new B.a_7(0,"listen")
D.mi=new B.a_7(1,"readVi")
D.QM=new A.al(0,0,8,7)
D.QU=new A.al(10,10,10,10)
D.Rg=new A.al(20,6,20,12)
D.Ri=new A.al(20,8,20,18)
D.Rp=new A.al(64,6,20,10)
D.nd=new B.mV("H\u1ed9i tho\u1ea1i","Cho m\xecnh h\u1ed9i tho\u1ea1i m\u1eabu")
D.u_=new B.mV("Luy\u1ec7n nghe","Luy\u1ec7n nghe ch\xe9p ch\xednh t\u1ea3")
D.ne=new B.mV("T\u1ea1o quiz","T\u1ea1o quiz HSK 2")
D.u0=new B.mV("Luy\u1ec7n d\u1ecbch","Luy\u1ec7n d\u1ecbch Vi\u1ec7t-Trung")
D.u4=new B.CL(0,"match")
D.u5=new B.CL(1,"wrong")
D.eW=new B.CL(2,"missing")
D.eX=new B.CL(3,"extra")
D.Sp=new A.bt(62876,"MaterialIcons",null,!1)
D.Sy=new A.bt(63457,"MaterialIcons",null,!1)
D.Sz=new A.bt(63573,"MaterialIcons",null,!1)
D.SG=new A.bt(983252,"MaterialIcons",null,!1)
D.SN=new A.bt(983632,"MaterialIcons",null,!1)
D.T4=new A.fX(E.ub,18,null,null,null)
D.SK=new A.bt(983367,"MaterialIcons",null,!0)
D.T5=new A.fX(D.SK,null,null,null,null)
D.R2=new A.al(16,14,10,14)
D.Tw=new G.D_(null,null,null,null,null,null,null,null,null,null,"H\u1ecfi v\u1ec1 t\u1eeb v\u1ef1ng, ng\u1eef ph\xe1p ho\u1eb7c quiz...",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,D.R2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,I.q1,!0,null,null,null,null)
D.U7=new A.LB(null)
D.RZ=new B.mV("Tra t\u1eeb","Tra t\u1eeb \u5b66\u4e60")
D.UW=w([D.RZ,D.ne,D.nd,D.u_,D.u0],x.W)
D.a_y={id:0,title:1,titleZh:2,titlePinyin:3,description:4,level:5,category:6,icon:7,lines:8,vocabulary:9,speakers:10,relatedGrammar:11,cultureTip:12}
D.f9={speaker:0,zh:1,pinyin:2,vi:3}
D.ZD=new A.b5(D.f9,["A","\u8001\u5e08\uff0c\u867d\u7136\u6211\u6bcf\u5929\u5b66\u4e60\uff0c\u4f46\u662f\u8fdb\u6b65\u4e0d\u592a\u5feb\u3002","L\u01ceosh\u012b, su\u012br\xe1n w\u01d2 m\u011biti\u0101n xu\xe9x\xed, d\xe0nsh\xec j\xecnb\xf9 b\xfa t\xe0i ku\xe0i.","C\xf4 \u01a1i, tuy ng\xe0y n\xe0o em c\u0169ng h\u1ecdc, nh\u01b0ng ti\u1ebfn b\u1ed9 kh\xf4ng nhanh l\u1eafm."],x.w)
D.ZF=new A.b5(D.f9,["B","\u522b\u7740\u6025\uff0c\u53ea\u8981\u4f60\u575a\u6301\u7ec3\u4e60\uff0c\u5c31\u4f1a\u8d8a\u6765\u8d8a\u597d\u3002","Bi\xe9 zh\xe1oj\xed, zh\u01d0y\xe0o n\u01d0 ji\u0101nch\xed li\xe0nx\xed, ji\xf9 hu\xec yu\xe8 l\xe1i yu\xe8 h\u01ceo.","\u0110\u1eebng s\u1ed1t ru\u1ed9t, ch\u1ec9 c\u1ea7n em ki\xean tr\xec luy\u1ec7n t\u1eadp th\xec s\u1ebd ng\xe0y c\xe0ng t\u1ed1t."],x.w)
D.ZC=new A.b5(D.f9,["A","\u5982\u679c\u6211\u5de5\u4f5c\u5f88\u5fd9\uff0c\u8fd8\u5e94\u8be5\u6bcf\u5929\u590d\u4e60\u5417\uff1f","R\xfagu\u01d2 w\u01d2 g\u014dngzu\xf2 h\u011bn m\xe1ng, h\xe1i y\u012bngg\u0101i m\u011biti\u0101n f\xf9x\xed ma?","N\u1ebfu c\xf4ng vi\u1ec7c b\u1eadn, em v\u1eabn n\xean \xf4n m\u1ed7i ng\xe0y kh\xf4ng?"],x.w)
D.ZA=new A.b5(D.f9,["B","\u5f53\u7136\u3002\u53ea\u6709\u628a\u4eca\u5929\u7684\u751f\u8bcd\u590d\u4e60\u5b8c\uff0c\u660e\u5929\u7684\u8bfe\u624d\u4f1a\u8f7b\u677e\u3002","D\u0101ngr\xe1n. Zh\u01d0y\u01d2u b\u01ce j\u012bnti\u0101n de sh\u0113ngc\xed f\xf9x\xed w\xe1n, m\xedngti\u0101n de k\xe8 c\xe1i hu\xec q\u012bngs\u014dng.","T\u1ea5t nhi\xean. Ch\u1ec9 khi \xf4n xong t\u1eeb m\u1edbi h\xf4m nay th\xec b\xe0i ng\xe0y mai m\u1edbi nh\u1eb9 h\u01a1n."],x.w)
D.ZE=new A.b5(D.f9,["A","\u90a3\u6211\u5148\u542c\u4e00\u904d\u5bf9\u8bdd\uff0c\u518d\u505a\u7ec3\u4e60\u3002","N\xe0 w\u01d2 xi\u0101n t\u012bng y\xed bi\xe0n du\xechu\xe0, z\xe0i zu\xf2 li\xe0nx\xed.","V\u1eady em nghe h\u1ed9i tho\u1ea1i m\u1ed9t l\u01b0\u1ee3t tr\u01b0\u1edbc, r\u1ed3i l\xe0m b\xe0i luy\u1ec7n t\u1eadp."],x.w)
D.ZB=new A.b5(D.f9,["B","\u5f88\u597d\uff0c\u867d\u7136\u65f6\u95f4\u4e0d\u591a\uff0c\u4f46\u662f\u65b9\u6cd5\u5bf9\u4e86\u5c31\u6709\u6548\u3002","H\u011bn h\u01ceo, su\u012br\xe1n sh\xedji\u0101n b\xf9 du\u014d, d\xe0nsh\xec f\u0101ngf\u01ce du\xec le ji\xf9 y\u01d2uxi\xe0o.","R\u1ea5t t\u1ed1t, tuy th\u1eddi gian kh\xf4ng nhi\u1ec1u nh\u01b0ng \u0111\xfang ph\u01b0\u01a1ng ph\xe1p th\xec hi\u1ec7u qu\u1ea3."],x.w)
D.Wl=w([D.ZD,D.ZF,D.ZC,D.ZA,D.ZE,D.ZB],x.m)
D.f8={zh:0,pinyin:1,vi:2,pos:3}
D.Zf=new A.b5(D.f8,["\u8fdb\u6b65","j\xecnb\xf9","ti\u1ebfn b\u1ed9","\u0111\u1ed9ng t\u1eeb/danh t\u1eeb"],x.w)
D.Zh=new A.b5(D.f8,["\u575a\u6301","ji\u0101nch\xed","ki\xean tr\xec","\u0111\u1ed9ng t\u1eeb"],x.w)
D.Zd=new A.b5(D.f8,["\u590d\u4e60","f\xf9x\xed","\xf4n t\u1eadp","\u0111\u1ed9ng t\u1eeb"],x.w)
D.Zg=new A.b5(D.f8,["\u751f\u8bcd","sh\u0113ngc\xed","t\u1eeb m\u1edbi","danh t\u1eeb"],x.w)
D.Ze=new A.b5(D.f8,["\u8f7b\u677e","q\u012bngs\u014dng","nh\u1eb9 nh\xe0ng","t\xednh t\u1eeb"],x.w)
D.Zc=new A.b5(D.f8,["\u65b9\u6cd5","f\u0101ngf\u01ce","ph\u01b0\u01a1ng ph\xe1p","danh t\u1eeb"],x.w)
D.X4=w([D.Zf,D.Zh,D.Zd,D.Zg,D.Ze,D.Zc],x.m)
D.Ar={code:0,nameVi:1,role:2,avatarColor:3}
D.ZV=new A.b5(D.Ar,["A","Vy","Ng\u01b0\u1eddi h\u1ecdc","#5E35B1"],x.w)
D.ZU=new A.b5(D.Ar,["B","C\xf4 Mai","C\u1ed1 v\u1ea5n HSK3","#00897B"],x.w)
D.VM=w([D.ZV,D.ZU],x.m)
D.VW=w(["g_suiran_danshi","g_zhiyao_jiu","g_zhiyou_cai"],x.T)
D.Zv=new A.b5(D.a_y,["conv_hsk3_conditions_01","L\u1eadp k\u1ebf ho\u1ea1ch \xf4n thi","\u51c6\u5907\u8003\u8bd5\u8ba1\u5212","Zh\u01d4nb\xe8i k\u01ceosh\xec j\xechu\xe0","Nh\u1edd c\u1ed1 v\u1ea5n HSK3 \u0111i\u1ec1u ch\u1ec9nh c\xe1ch \xf4n t\u1eadp khi th\u1eddi gian h\u1ea1n ch\u1ebf.",3,"study","\ud83d\udcda",D.Wl,D.X4,D.VM,D.VW,"\u1ede l\u1edbp ti\u1ebfng Trung, ng\u01b0\u1eddi h\u1ecdc th\u01b0\u1eddng g\u1ecdi gi\xe1o vi\xean l\xe0 \u8001\u5e08 \u0111\u1ec3 gi\u1eef s\u1eafc th\xe1i l\u1ecbch s\u1ef1, k\u1ec3 c\u1ea3 khi trao \u0111\u1ed5i ri\xeang v\u1ec1 k\u1ebf ho\u1ea1ch h\u1ecdc."],A.Y("b5<c,u>"))
D.VL=w([D.Zv],A.Y("v<Z<c,u>>"))
D.WJ=w([],x.V)
D.WI=w([],x.A)
D.uV=w([],x.R)
D.a_C={"\u3002":0,"\u3001":1,"\u2026":2,"\xb7":3,"\u2014":4,"\uff5e":5,"\u2018":6,"\u2019":7,"\u201c":8,"\u201d":9,"\u300c":10,"\u300d":11,"\u300e":12,"\u300f":13,"\u300a":14,"\u300b":15,"\u3010":16,"\u3011":17,",":18,".":19,"!":20,"?":21,";":22,":":23,"'":24,'"':25,"(":26,")":27,"-":28,"~":29}
D.a3D=new A.fo(D.a_C,30,A.Y("fo<c>"))
D.a4O=new A.M(1/0,44)
D.Sx=new A.bt(63389,"MaterialIcons",null,!1)
D.a51=new H.ES(D.Sx,"\u0110ang m\u1edf chat","\u0110ang chu\u1ea9n b\u1ecb tr\u1ee3 l\xfd...","assets/images/gen_chat_empty.svg",null)
D.VE=w([D.a51],x.p)
D.a5_=new F.is("Chat",y.b,C.d1,D.VE,E.nO,null)
D.Re=new A.al(20,4,20,12)
D.afo=new B.ai5(null)
D.a0J=new A.aT(D.Re,D.afo,null)
D.a54=new F.p0(D.a0J,null)
D.RY=new B.mV("Ng\u1eef ph\xe1p","Gi\u1ea3i th\xedch c\xe2u v\u1edbi \u4e86")
D.Xr=w([D.ne,D.RY,D.nd],x.W)
D.a5D=new B.zB(D.Xr)
D.aaU=new A.dr("G\u1ee3i \xfd pinyin",null,null,null,null,null,null,null,null,null)
D.ab3=new A.dr("Hi\u1ec7n \u0111\xe1p \xe1n",null,null,null,null,null,null,null,null,null)
D.fB=new B.aSm(0,"flat")})();(function lazyInitializers(){var w=a.lazyFinal
w($,"bR1","bs8",()=>A.qO(new B.b7D(),x.z))
w($,"bR7","beF",()=>D.K5.$2$1(B.bH9(),x.i,x.s))
w($,"bR2","bs9",()=>A.qO(new B.b7E(),x.E))
w($,"bR8","bsb",()=>A.qO(new B.b7Q(),x.M))})()};
(a=>{a["XQFuDs2lez97bIqJ2B4DYbEYN58="]=a.current})($__dart_deferred_initializers__);