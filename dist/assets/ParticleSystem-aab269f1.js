import{q as zi,_ as bc,r as mn,o as yc,y as Ec,b as yi,c as Ei,J as gs,K as Tc,e as nt,f as tr,ac as mo,G as Ac,D as xo,t as wr,h as wc,w as Rc,ad as Cc,i as nr}from"./index-90bc0dbb.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const za="181",Pc=0,go=1,Dc=2,ml=1,Lc=2,In=3,ti=0,Jt=1,Nn=2,Bn=0,Vi=1,js=2,_o=3,vo=4,Uc=5,hi=100,Ic=101,Nc=102,Fc=103,Oc=104,Bc=200,zc=201,Vc=202,Gc=203,Ks=204,Zs=205,Hc=206,kc=207,Wc=208,Xc=209,qc=210,Yc=211,jc=212,Kc=213,Zc=214,$s=0,Js=1,Qs=2,Hi=3,ea=4,ta=5,na=6,ia=7,xl=0,$c=1,Jc=2,ei=0,Qc=1,eu=2,tu=3,nu=4,iu=5,ru=6,su=7,gl=300,ki=301,Wi=302,ra=303,sa=304,ss=306,aa=1e3,Fn=1001,oa=1002,an=1003,au=1004,Rr=1005,dn=1006,_s=1007,pi=1008,Vn=1009,_l=1010,vl=1011,ur=1012,Va=1013,xi=1014,On=1015,Yi=1016,Ga=1017,Ha=1018,fr=1020,Ml=35902,Sl=35899,bl=1021,yl=1022,Mn=1023,hr=1026,dr=1027,El=1028,ka=1029,Wa=1030,Xa=1031,qa=1033,$r=33776,Jr=33777,Qr=33778,es=33779,la=35840,ca=35841,ua=35842,fa=35843,ha=36196,da=37492,pa=37496,ma=37808,xa=37809,ga=37810,_a=37811,va=37812,Ma=37813,Sa=37814,ba=37815,ya=37816,Ea=37817,Ta=37818,Aa=37819,wa=37820,Ra=37821,Ca=36492,Pa=36494,Da=36495,La=36283,Ua=36284,Ia=36285,Na=36286,ou=3200,lu=3201,cu=0,uu=1,Jn="",fn="srgb",Xi="srgb-linear",ns="linear",Mt="srgb",Ti=7680,Mo=519,fu=512,hu=513,du=514,Tl=515,pu=516,mu=517,xu=518,gu=519,So=35044,bo="300 es",En=2e3,is=2001;function Al(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _u(){const i=rs("canvas");return i.style.display="block",i}const yo={};function Eo(...i){const e="THREE."+i.shift();console.log(e,...i)}function it(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Pt(...i){const e="THREE."+i.shift();console.error(e,...i)}function pr(...i){const e=i.join(" ");e in yo||(yo[e]=!0,it(...i))}function vu(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vs=Math.PI/180,Fa=180/Math.PI;function mr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function Mu(i,e){return(i%e+e)%e}function Ms(i,e,t){return(1-t)*i+t*e}function ir(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class St{constructor(e=0,t=0){St.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,l){let f=n[r+0],u=n[r+1],p=n[r+2],m=n[r+3],g=a[o+0],v=a[o+1],y=a[o+2],T=a[o+3];if(l<=0){e[t+0]=f,e[t+1]=u,e[t+2]=p,e[t+3]=m;return}if(l>=1){e[t+0]=g,e[t+1]=v,e[t+2]=y,e[t+3]=T;return}if(m!==T||f!==g||u!==v||p!==y){let _=f*g+u*v+p*y+m*T;_<0&&(g=-g,v=-v,y=-y,T=-T,_=-_);let d=1-l;if(_<.9995){const N=Math.acos(_),D=Math.sin(N);d=Math.sin(d*N)/D,l=Math.sin(l*N)/D,f=f*d+g*l,u=u*d+v*l,p=p*d+y*l,m=m*d+T*l}else{f=f*d+g*l,u=u*d+v*l,p=p*d+y*l,m=m*d+T*l;const N=1/Math.sqrt(f*f+u*u+p*p+m*m);f*=N,u*=N,p*=N,m*=N}}e[t]=f,e[t+1]=u,e[t+2]=p,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,r,a,o){const l=n[r],f=n[r+1],u=n[r+2],p=n[r+3],m=a[o],g=a[o+1],v=a[o+2],y=a[o+3];return e[t]=l*y+p*m+f*v-u*g,e[t+1]=f*y+p*g+u*m-l*v,e[t+2]=u*y+p*v+l*g-f*m,e[t+3]=p*y-l*m-f*g-u*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,o=e._order,l=Math.cos,f=Math.sin,u=l(n/2),p=l(r/2),m=l(a/2),g=f(n/2),v=f(r/2),y=f(a/2);switch(o){case"XYZ":this._x=g*p*m+u*v*y,this._y=u*v*m-g*p*y,this._z=u*p*y+g*v*m,this._w=u*p*m-g*v*y;break;case"YXZ":this._x=g*p*m+u*v*y,this._y=u*v*m-g*p*y,this._z=u*p*y-g*v*m,this._w=u*p*m+g*v*y;break;case"ZXY":this._x=g*p*m-u*v*y,this._y=u*v*m+g*p*y,this._z=u*p*y+g*v*m,this._w=u*p*m-g*v*y;break;case"ZYX":this._x=g*p*m-u*v*y,this._y=u*v*m+g*p*y,this._z=u*p*y-g*v*m,this._w=u*p*m+g*v*y;break;case"YZX":this._x=g*p*m+u*v*y,this._y=u*v*m+g*p*y,this._z=u*p*y-g*v*m,this._w=u*p*m-g*v*y;break;case"XZY":this._x=g*p*m-u*v*y,this._y=u*v*m-g*p*y,this._z=u*p*y+g*v*m,this._w=u*p*m+g*v*y;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],l=t[5],f=t[9],u=t[2],p=t[6],m=t[10],g=n+l+m;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(p-f)*v,this._y=(a-u)*v,this._z=(o-r)*v}else if(n>l&&n>m){const v=2*Math.sqrt(1+n-l-m);this._w=(p-f)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(a+u)/v}else if(l>m){const v=2*Math.sqrt(1+l-n-m);this._w=(a-u)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(f+p)/v}else{const v=2*Math.sqrt(1+m-n-l);this._w=(o-r)/v,this._x=(a+u)/v,this._y=(f+p)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,o=e._w,l=t._x,f=t._y,u=t._z,p=t._w;return this._x=n*p+o*l+r*u-a*f,this._y=r*p+o*f+a*l-n*u,this._z=a*p+o*u+n*f-r*l,this._w=o*p-n*l-r*f-a*u,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,a=e._z,o=e._w,l=this.dot(e);l<0&&(n=-n,r=-r,a=-a,o=-o,l=-l);let f=1-t;if(l<.9995){const u=Math.acos(l),p=Math.sin(u);f=Math.sin(f*u)/p,t=Math.sin(t*u)/p,this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+a*t,this._w=this._w*f+o*t,this._onChangeCallback()}else this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+a*t,this._w=this._w*f+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,n=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(To.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(To.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,l=e.z,f=e.w,u=2*(o*r-l*n),p=2*(l*t-a*r),m=2*(a*n-o*t);return this.x=t+f*u+o*m-l*p,this.y=n+f*p+l*u-a*m,this.z=r+f*m+a*p-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,o=t.x,l=t.y,f=t.z;return this.x=r*f-a*l,this.y=a*o-n*f,this.z=n*l-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ss.copy(this).projectOnVector(e),this.sub(Ss)}reflect(e){return this.sub(Ss.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ss=new Q,To=new xr;class rt{constructor(e,t,n,r,a,o,l,f,u){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,l,f,u)}set(e,t,n,r,a,o,l,f,u){const p=this.elements;return p[0]=e,p[1]=r,p[2]=l,p[3]=t,p[4]=a,p[5]=f,p[6]=n,p[7]=o,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],l=n[3],f=n[6],u=n[1],p=n[4],m=n[7],g=n[2],v=n[5],y=n[8],T=r[0],_=r[3],d=r[6],N=r[1],D=r[4],U=r[7],H=r[2],L=r[5],O=r[8];return a[0]=o*T+l*N+f*H,a[3]=o*_+l*D+f*L,a[6]=o*d+l*U+f*O,a[1]=u*T+p*N+m*H,a[4]=u*_+p*D+m*L,a[7]=u*d+p*U+m*O,a[2]=g*T+v*N+y*H,a[5]=g*_+v*D+y*L,a[8]=g*d+v*U+y*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],l=e[5],f=e[6],u=e[7],p=e[8];return t*o*p-t*l*u-n*a*p+n*l*f+r*a*u-r*o*f}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],l=e[5],f=e[6],u=e[7],p=e[8],m=p*o-l*u,g=l*f-p*a,v=u*a-o*f,y=t*m+n*g+r*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/y;return e[0]=m*T,e[1]=(r*u-p*n)*T,e[2]=(l*n-r*o)*T,e[3]=g*T,e[4]=(p*t-r*f)*T,e[5]=(r*a-l*t)*T,e[6]=v*T,e[7]=(n*f-u*t)*T,e[8]=(o*t-n*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,l){const f=Math.cos(a),u=Math.sin(a);return this.set(n*f,n*u,-n*(f*o+u*l)+o+e,-r*u,r*f,-r*(-u*o+f*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(bs.makeScale(e,t)),this}rotate(e){return this.premultiply(bs.makeRotation(-e)),this}translate(e,t){return this.premultiply(bs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bs=new rt,Ao=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wo=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Su(){const i={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(r,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===Mt&&(r.r=zn(r.r),r.g=zn(r.g),r.b=zn(r.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Mt&&(r.r=Gi(r.r),r.g=Gi(r.g),r.b=Gi(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Jn?ns:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,o){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xi]:{primaries:e,whitePoint:n,transfer:ns,toXYZ:Ao,fromXYZ:wo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fn},outputColorSpaceConfig:{drawingBufferColorSpace:fn}},[fn]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:Ao,fromXYZ:wo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fn}}}),i}const pt=Su();function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ai;class bu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ai===void 0&&(Ai=rs("canvas")),Ai.width=e.width,Ai.height=e.height;const r=Ai.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ai}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=rs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=zn(a[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yu=0;class Ya{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?a.push(ys(r[o].image)):a.push(ys(r[o]))}else a=ys(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function ys(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?bu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let Eu=0;const Es=new Q;class jt extends ji{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,n=Fn,r=Fn,a=dn,o=pi,l=Mn,f=Vn,u=jt.DEFAULT_ANISOTROPY,p=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=mr(),this.name="",this.source=new Ya(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=f,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Es).x}get height(){return this.source.getSize(Es).y}get depth(){return this.source.getSize(Es).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){it(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){it(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case aa:e.x=e.x-Math.floor(e.x);break;case Fn:e.x=e.x<0?0:1;break;case oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case aa:e.y=e.y-Math.floor(e.y);break;case Fn:e.y=e.y<0?0:1;break;case oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=gl;jt.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,r=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const f=e.elements,u=f[0],p=f[4],m=f[8],g=f[1],v=f[5],y=f[9],T=f[2],_=f[6],d=f[10];if(Math.abs(p-g)<.01&&Math.abs(m-T)<.01&&Math.abs(y-_)<.01){if(Math.abs(p+g)<.1&&Math.abs(m+T)<.1&&Math.abs(y+_)<.1&&Math.abs(u+v+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(u+1)/2,U=(v+1)/2,H=(d+1)/2,L=(p+g)/4,O=(m+T)/4,Y=(y+_)/4;return D>U&&D>H?D<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(D),r=L/n,a=O/n):U>H?U<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(U),n=L/r,a=Y/r):H<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(H),n=O/a,r=Y/a),this.set(n,r,a,t),this}let N=Math.sqrt((_-y)*(_-y)+(m-T)*(m-T)+(g-p)*(g-p));return Math.abs(N)<.001&&(N=1),this.x=(_-y)/N,this.y=(m-T)/N,this.z=(g-p)/N,this.w=Math.acos((u+v+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tu extends ji{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const r={width:e,height:t,depth:n.depth},a=new jt(r);this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ya(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends Tu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wl extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Au extends jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gr{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=a.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(a,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(e.matrixWorld),this.union(Cr)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),Pr.subVectors(this.max,rr),wi.subVectors(e.a,rr),Ri.subVectors(e.b,rr),Ci.subVectors(e.c,rr),qn.subVectors(Ri,wi),Yn.subVectors(Ci,Ri),si.subVectors(wi,Ci);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-si.z,si.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,si.z,0,-si.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-si.y,si.x,0];return!Ts(t,wi,Ri,Ci,Pr)||(t=[1,0,0,0,1,0,0,0,1],!Ts(t,wi,Ri,Ci,Pr))?!1:(Dr.crossVectors(qn,Yn),t=[Dr.x,Dr.y,Dr.z],Ts(t,wi,Ri,Ci,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Rn=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],xn=new Q,Cr=new gr,wi=new Q,Ri=new Q,Ci=new Q,qn=new Q,Yn=new Q,si=new Q,rr=new Q,Pr=new Q,Dr=new Q,ai=new Q;function Ts(i,e,t,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){ai.fromArray(i,a);const l=r.x*Math.abs(ai.x)+r.y*Math.abs(ai.y)+r.z*Math.abs(ai.z),f=e.dot(ai),u=t.dot(ai),p=n.dot(ai);if(Math.max(-Math.max(f,u,p),Math.min(f,u,p))>l)return!1}return!0}const wu=new gr,sr=new Q,As=new Q;class as{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wu.setFromPoints(e).getCenter(n);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(sr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(As.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(As)),this.expandByPoint(sr.copy(e.center).sub(As))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Cn=new Q,ws=new Q,Lr=new Q,jn=new Q,Rs=new Q,Ur=new Q,Cs=new Q;class Rl{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ws.copy(e).add(t).multiplyScalar(.5),Lr.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(ws);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Lr),l=jn.dot(this.direction),f=-jn.dot(Lr),u=jn.lengthSq(),p=Math.abs(1-o*o);let m,g,v,y;if(p>0)if(m=o*f-l,g=o*l-f,y=a*p,m>=0)if(g>=-y)if(g<=y){const T=1/p;m*=T,g*=T,v=m*(m+o*g+2*l)+g*(o*m+g+2*f)+u}else g=a,m=Math.max(0,-(o*g+l)),v=-m*m+g*(g+2*f)+u;else g=-a,m=Math.max(0,-(o*g+l)),v=-m*m+g*(g+2*f)+u;else g<=-y?(m=Math.max(0,-(-o*a+l)),g=m>0?-a:Math.min(Math.max(-a,-f),a),v=-m*m+g*(g+2*f)+u):g<=y?(m=0,g=Math.min(Math.max(-a,-f),a),v=g*(g+2*f)+u):(m=Math.max(0,-(o*a+l)),g=m>0?a:Math.min(Math.max(-a,-f),a),v=-m*m+g*(g+2*f)+u);else g=o>0?-a:a,m=Math.max(0,-(o*g+l)),v=-m*m+g*(g+2*f)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(ws).addScaledVector(Lr,g),v}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),r=Cn.dot(Cn)-n*n,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),l=n-o,f=n+o;return f<0?null:l<0?this.at(f,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,l,f;const u=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,g=this.origin;return u>=0?(n=(e.min.x-g.x)*u,r=(e.max.x-g.x)*u):(n=(e.max.x-g.x)*u,r=(e.min.x-g.x)*u),p>=0?(a=(e.min.y-g.y)*p,o=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,o=(e.min.y-g.y)*p),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),m>=0?(l=(e.min.z-g.z)*m,f=(e.max.z-g.z)*m):(l=(e.max.z-g.z)*m,f=(e.min.z-g.z)*m),n>f||l>r)||((l>n||n!==n)&&(n=l),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,r,a){Rs.subVectors(t,e),Ur.subVectors(n,e),Cs.crossVectors(Rs,Ur);let o=this.direction.dot(Cs),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;jn.subVectors(this.origin,e);const f=l*this.direction.dot(Ur.crossVectors(jn,Ur));if(f<0)return null;const u=l*this.direction.dot(Rs.cross(jn));if(u<0||f+u>o)return null;const p=-l*jn.dot(Cs);return p<0?null:this.at(p/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(e,t,n,r,a,o,l,f,u,p,m,g,v,y,T,_){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,l,f,u,p,m,g,v,y,T,_)}set(e,t,n,r,a,o,l,f,u,p,m,g,v,y,T,_){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=a,d[5]=o,d[9]=l,d[13]=f,d[2]=u,d[6]=p,d[10]=m,d[14]=g,d[3]=v,d[7]=y,d[11]=T,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Pi.setFromMatrixColumn(e,0).length(),a=1/Pi.setFromMatrixColumn(e,1).length(),o=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),l=Math.sin(n),f=Math.cos(r),u=Math.sin(r),p=Math.cos(a),m=Math.sin(a);if(e.order==="XYZ"){const g=o*p,v=o*m,y=l*p,T=l*m;t[0]=f*p,t[4]=-f*m,t[8]=u,t[1]=v+y*u,t[5]=g-T*u,t[9]=-l*f,t[2]=T-g*u,t[6]=y+v*u,t[10]=o*f}else if(e.order==="YXZ"){const g=f*p,v=f*m,y=u*p,T=u*m;t[0]=g+T*l,t[4]=y*l-v,t[8]=o*u,t[1]=o*m,t[5]=o*p,t[9]=-l,t[2]=v*l-y,t[6]=T+g*l,t[10]=o*f}else if(e.order==="ZXY"){const g=f*p,v=f*m,y=u*p,T=u*m;t[0]=g-T*l,t[4]=-o*m,t[8]=y+v*l,t[1]=v+y*l,t[5]=o*p,t[9]=T-g*l,t[2]=-o*u,t[6]=l,t[10]=o*f}else if(e.order==="ZYX"){const g=o*p,v=o*m,y=l*p,T=l*m;t[0]=f*p,t[4]=y*u-v,t[8]=g*u+T,t[1]=f*m,t[5]=T*u+g,t[9]=v*u-y,t[2]=-u,t[6]=l*f,t[10]=o*f}else if(e.order==="YZX"){const g=o*f,v=o*u,y=l*f,T=l*u;t[0]=f*p,t[4]=T-g*m,t[8]=y*m+v,t[1]=m,t[5]=o*p,t[9]=-l*p,t[2]=-u*p,t[6]=v*m+y,t[10]=g-T*m}else if(e.order==="XZY"){const g=o*f,v=o*u,y=l*f,T=l*u;t[0]=f*p,t[4]=-m,t[8]=u*p,t[1]=g*m+T,t[5]=o*p,t[9]=v*m-y,t[2]=y*m-v,t[6]=l*p,t[10]=T*m+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ru,e,Cu)}lookAt(e,t,n){const r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Kn.crossVectors(n,rn),Kn.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Kn.crossVectors(n,rn)),Kn.normalize(),Ir.crossVectors(rn,Kn),r[0]=Kn.x,r[4]=Ir.x,r[8]=rn.x,r[1]=Kn.y,r[5]=Ir.y,r[9]=rn.y,r[2]=Kn.z,r[6]=Ir.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],l=n[4],f=n[8],u=n[12],p=n[1],m=n[5],g=n[9],v=n[13],y=n[2],T=n[6],_=n[10],d=n[14],N=n[3],D=n[7],U=n[11],H=n[15],L=r[0],O=r[4],Y=r[8],A=r[12],x=r[1],E=r[5],G=r[9],k=r[13],K=r[2],ie=r[6],z=r[10],te=r[14],j=r[3],le=r[7],de=r[11],Ie=r[15];return a[0]=o*L+l*x+f*K+u*j,a[4]=o*O+l*E+f*ie+u*le,a[8]=o*Y+l*G+f*z+u*de,a[12]=o*A+l*k+f*te+u*Ie,a[1]=p*L+m*x+g*K+v*j,a[5]=p*O+m*E+g*ie+v*le,a[9]=p*Y+m*G+g*z+v*de,a[13]=p*A+m*k+g*te+v*Ie,a[2]=y*L+T*x+_*K+d*j,a[6]=y*O+T*E+_*ie+d*le,a[10]=y*Y+T*G+_*z+d*de,a[14]=y*A+T*k+_*te+d*Ie,a[3]=N*L+D*x+U*K+H*j,a[7]=N*O+D*E+U*ie+H*le,a[11]=N*Y+D*G+U*z+H*de,a[15]=N*A+D*k+U*te+H*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],l=e[5],f=e[9],u=e[13],p=e[2],m=e[6],g=e[10],v=e[14],y=e[3],T=e[7],_=e[11],d=e[15];return y*(+a*f*m-r*u*m-a*l*g+n*u*g+r*l*v-n*f*v)+T*(+t*f*v-t*u*g+a*o*g-r*o*v+r*u*p-a*f*p)+_*(+t*u*m-t*l*v-a*o*m+n*o*v+a*l*p-n*u*p)+d*(-r*l*p-t*f*m+t*l*g+r*o*m-n*o*g+n*f*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],l=e[5],f=e[6],u=e[7],p=e[8],m=e[9],g=e[10],v=e[11],y=e[12],T=e[13],_=e[14],d=e[15],N=m*_*u-T*g*u+T*f*v-l*_*v-m*f*d+l*g*d,D=y*g*u-p*_*u-y*f*v+o*_*v+p*f*d-o*g*d,U=p*T*u-y*m*u+y*l*v-o*T*v-p*l*d+o*m*d,H=y*m*f-p*T*f-y*l*g+o*T*g+p*l*_-o*m*_,L=t*N+n*D+r*U+a*H;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return e[0]=N*O,e[1]=(T*g*a-m*_*a-T*r*v+n*_*v+m*r*d-n*g*d)*O,e[2]=(l*_*a-T*f*a+T*r*u-n*_*u-l*r*d+n*f*d)*O,e[3]=(m*f*a-l*g*a-m*r*u+n*g*u+l*r*v-n*f*v)*O,e[4]=D*O,e[5]=(p*_*a-y*g*a+y*r*v-t*_*v-p*r*d+t*g*d)*O,e[6]=(y*f*a-o*_*a-y*r*u+t*_*u+o*r*d-t*f*d)*O,e[7]=(o*g*a-p*f*a+p*r*u-t*g*u-o*r*v+t*f*v)*O,e[8]=U*O,e[9]=(y*m*a-p*T*a-y*n*v+t*T*v+p*n*d-t*m*d)*O,e[10]=(o*T*a-y*l*a+y*n*u-t*T*u-o*n*d+t*l*d)*O,e[11]=(p*l*a-o*m*a-p*n*u+t*m*u+o*n*v-t*l*v)*O,e[12]=H*O,e[13]=(p*T*r-y*m*r+y*n*g-t*T*g-p*n*_+t*m*_)*O,e[14]=(y*l*r-o*T*r-y*n*f+t*T*f+o*n*_-t*l*_)*O,e[15]=(o*m*r-p*l*r+p*n*f-t*m*f-o*n*g+t*l*g)*O,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,l=e.y,f=e.z,u=a*o,p=a*l;return this.set(u*o+n,u*l-r*f,u*f+r*l,0,u*l+r*f,p*l+n,p*f-r*o,0,u*f-r*l,p*f+r*o,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,o=t._y,l=t._z,f=t._w,u=a+a,p=o+o,m=l+l,g=a*u,v=a*p,y=a*m,T=o*p,_=o*m,d=l*m,N=f*u,D=f*p,U=f*m,H=n.x,L=n.y,O=n.z;return r[0]=(1-(T+d))*H,r[1]=(v+U)*H,r[2]=(y-D)*H,r[3]=0,r[4]=(v-U)*L,r[5]=(1-(g+d))*L,r[6]=(_+N)*L,r[7]=0,r[8]=(y+D)*O,r[9]=(_-N)*O,r[10]=(1-(g+T))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Pi.set(r[0],r[1],r[2]).length();const o=Pi.set(r[4],r[5],r[6]).length(),l=Pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],gn.copy(this);const u=1/a,p=1/o,m=1/l;return gn.elements[0]*=u,gn.elements[1]*=u,gn.elements[2]*=u,gn.elements[4]*=p,gn.elements[5]*=p,gn.elements[6]*=p,gn.elements[8]*=m,gn.elements[9]*=m,gn.elements[10]*=m,t.setFromRotationMatrix(gn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,r,a,o,l=En,f=!1){const u=this.elements,p=2*a/(t-e),m=2*a/(n-r),g=(t+e)/(t-e),v=(n+r)/(n-r);let y,T;if(f)y=a/(o-a),T=o*a/(o-a);else if(l===En)y=-(o+a)/(o-a),T=-2*o*a/(o-a);else if(l===is)y=-o/(o-a),T=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=p,u[4]=0,u[8]=g,u[12]=0,u[1]=0,u[5]=m,u[9]=v,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=T,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,a,o,l=En,f=!1){const u=this.elements,p=2/(t-e),m=2/(n-r),g=-(t+e)/(t-e),v=-(n+r)/(n-r);let y,T;if(f)y=1/(o-a),T=o/(o-a);else if(l===En)y=-2/(o-a),T=-(o+a)/(o-a);else if(l===is)y=-1/(o-a),T=-a/(o-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=p,u[4]=0,u[8]=0,u[12]=g,u[1]=0,u[5]=m,u[9]=0,u[13]=v,u[2]=0,u[6]=0,u[10]=y,u[14]=T,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pi=new Q,gn=new Ut,Ru=new Q(0,0,0),Cu=new Q(1,1,1),Kn=new Q,Ir=new Q,rn=new Q,Ro=new Ut,Co=new xr;class Gn{constructor(e=0,t=0,n=0,r=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],o=r[4],l=r[8],f=r[1],u=r[5],p=r[9],m=r[2],g=r[6],v=r[10];switch(t){case"XYZ":this._y=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,v),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(g,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(l,v),this._z=Math.atan2(f,u)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(ct(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-ct(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(l,v));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,u),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-p,v),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ro.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ro,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Co.setFromEuler(this),this.setFromQuaternion(Co,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Cl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pu=0;const Po=new Q,Di=new xr,Pn=new Ut,Nr=new Q,ar=new Q,Du=new Q,Lu=new xr,Do=new Q(1,0,0),Lo=new Q(0,1,0),Uo=new Q(0,0,1),Io={type:"added"},Uu={type:"removed"},Li={type:"childadded",child:null},Ps={type:"childremoved",child:null};class Qt extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new Q,t=new Gn,n=new xr,r=new Q(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ut},normalMatrix:{value:new rt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(Do,e)}rotateY(e){return this.rotateOnAxis(Lo,e)}rotateZ(e){return this.rotateOnAxis(Uo,e)}translateOnAxis(e,t){return Po.copy(e).applyQuaternion(this.quaternion),this.position.add(Po.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Do,e)}translateY(e){return this.translateOnAxis(Lo,e)}translateZ(e){return this.translateOnAxis(Uo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nr.copy(e):Nr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(ar,Nr,this.up):Pn.lookAt(Nr,ar,this.up),this.quaternion.setFromRotationMatrix(Pn),r&&(Pn.extractRotation(r.matrixWorld),Di.setFromRotationMatrix(Pn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Io),Li.child=e,this.dispatchEvent(Li),Li.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Uu),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Io),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,Du),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,Lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(l,f){return l[f.uuid]===void 0&&(l[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const f=l.shapes;if(Array.isArray(f))for(let u=0,p=f.length;u<p;u++){const m=f[u];a(e.shapes,m)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let f=0,u=this.material.length;f<u;f++)l.push(a(e.materials,this.material[f]));r.material=l}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const f=this.animations[l];r.animations.push(a(e.animations,f))}}if(t){const l=o(e.geometries),f=o(e.materials),u=o(e.textures),p=o(e.images),m=o(e.shapes),g=o(e.skeletons),v=o(e.animations),y=o(e.nodes);l.length>0&&(n.geometries=l),f.length>0&&(n.materials=f),u.length>0&&(n.textures=u),p.length>0&&(n.images=p),m.length>0&&(n.shapes=m),g.length>0&&(n.skeletons=g),v.length>0&&(n.animations=v),y.length>0&&(n.nodes=y)}return n.object=r,n;function o(l){const f=[];for(const u in l){const p=l[u];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new Q(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new Q,Dn=new Q,Ds=new Q,Ln=new Q,Ui=new Q,Ii=new Q,No=new Q,Ls=new Q,Us=new Q,Is=new Q,Ns=new Dt,Fs=new Dt,Os=new Dt;class vn{constructor(e=new Q,t=new Q,n=new Q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),_n.subVectors(e,t),r.cross(_n);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){_n.subVectors(r,t),Dn.subVectors(n,t),Ds.subVectors(e,t);const o=_n.dot(_n),l=_n.dot(Dn),f=_n.dot(Ds),u=Dn.dot(Dn),p=Dn.dot(Ds),m=o*u-l*l;if(m===0)return a.set(0,0,0),null;const g=1/m,v=(u*f-l*p)*g,y=(o*p-l*f)*g;return a.set(1-v-y,y,v)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,r,a,o,l,f){return this.getBarycoord(e,t,n,r,Ln)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,Ln.x),f.addScaledVector(o,Ln.y),f.addScaledVector(l,Ln.z),f)}static getInterpolatedAttribute(e,t,n,r,a,o){return Ns.setScalar(0),Fs.setScalar(0),Os.setScalar(0),Ns.fromBufferAttribute(e,t),Fs.fromBufferAttribute(e,n),Os.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ns,a.x),o.addScaledVector(Fs,a.y),o.addScaledVector(Os,a.z),o}static isFrontFacing(e,t,n,r){return _n.subVectors(n,t),Dn.subVectors(e,t),_n.cross(Dn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),_n.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return vn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let o,l;Ui.subVectors(r,n),Ii.subVectors(a,n),Ls.subVectors(e,n);const f=Ui.dot(Ls),u=Ii.dot(Ls);if(f<=0&&u<=0)return t.copy(n);Us.subVectors(e,r);const p=Ui.dot(Us),m=Ii.dot(Us);if(p>=0&&m<=p)return t.copy(r);const g=f*m-p*u;if(g<=0&&f>=0&&p<=0)return o=f/(f-p),t.copy(n).addScaledVector(Ui,o);Is.subVectors(e,a);const v=Ui.dot(Is),y=Ii.dot(Is);if(y>=0&&v<=y)return t.copy(a);const T=v*u-f*y;if(T<=0&&u>=0&&y<=0)return l=u/(u-y),t.copy(n).addScaledVector(Ii,l);const _=p*y-v*m;if(_<=0&&m-p>=0&&v-y>=0)return No.subVectors(a,r),l=(m-p)/(m-p+(v-y)),t.copy(r).addScaledVector(No,l);const d=1/(_+T+g);return o=T*d,l=g*d,t.copy(n).addScaledVector(Ui,o).addScaledVector(Ii,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function Bs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class gt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=pt.workingColorSpace){if(e=Mu(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=Bs(o,a,e+1/3),this.g=Bs(o,a,e),this.b=Bs(o,a,e-1/3)}return pt.colorSpaceToWorking(this,r),this}setStyle(e,t=fn){function n(a){a!==void 0&&parseFloat(a)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:it("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fn){const n=Pl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=Gi(e.r),this.g=Gi(e.g),this.b=Gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fn){return pt.workingToColorSpace(Wt.copy(this),e),Math.round(ct(Wt.r*255,0,255))*65536+Math.round(ct(Wt.g*255,0,255))*256+Math.round(ct(Wt.b*255,0,255))}getHexString(e=fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(Wt.copy(this),t);const n=Wt.r,r=Wt.g,a=Wt.b,o=Math.max(n,r,a),l=Math.min(n,r,a);let f,u;const p=(l+o)/2;if(l===o)f=0,u=0;else{const m=o-l;switch(u=p<=.5?m/(o+l):m/(2-o-l),o){case n:f=(r-a)/m+(r<a?6:0);break;case r:f=(a-n)/m+2;break;case a:f=(n-r)/m+4;break}f/=6}return e.h=f,e.s=u,e.l=p,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=fn){pt.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,r=Wt.b;return e!==fn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(Fr);const n=Ms(Zn.h,Fr.h,t),r=Ms(Zn.s,Fr.s,t),a=Ms(Zn.l,Fr.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new gt;gt.NAMES=Pl;let Iu=0;class _r extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=Vi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ks,this.blendDst=Zs,this.blendEquation=hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ti,this.stencilZFail=Ti,this.stencilZPass=Ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){it(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){it(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ks&&(n.blendSrc=this.blendSrc),this.blendDst!==Zs&&(n.blendDst=this.blendDst),this.blendEquation!==hi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const l in a){const f=a[l];delete f.metadata,o.push(f)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Dl extends _r{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new Q,Or=new St;let Nu=0;class Sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=So,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ir(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),r=$t(r,this.array),a=$t(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==So&&(e.usage=this.usage),e}}class Ll extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ul extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mi extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Fu=0;const un=new Ut,zs=new Qt,Ni=new Q,sn=new gr,or=new gr,Ft=new Q;class Tn extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Al(e)?Ul:Ll)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new rt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return zs.lookAt(e),zs.updateMatrix(),this.applyMatrix4(zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new mi(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];sn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const l=t[a];or.setFromBufferAttribute(l),this.morphTargetsRelative?(Ft.addVectors(sn.min,or.min),sn.expandByPoint(Ft),Ft.addVectors(sn.max,or.max),sn.expandByPoint(Ft)):(sn.expandByPoint(or.min),sn.expandByPoint(or.max))}sn.getCenter(n);let r=0;for(let a=0,o=e.count;a<o;a++)Ft.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Ft));if(t)for(let a=0,o=t.length;a<o;a++){const l=t[a],f=this.morphTargetsRelative;for(let u=0,p=l.count;u<p;u++)Ft.fromBufferAttribute(l,u),f&&(Ni.fromBufferAttribute(e,u),Ft.add(Ni)),r=Math.max(r,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],f=[];for(let Y=0;Y<n.count;Y++)l[Y]=new Q,f[Y]=new Q;const u=new Q,p=new Q,m=new Q,g=new St,v=new St,y=new St,T=new Q,_=new Q;function d(Y,A,x){u.fromBufferAttribute(n,Y),p.fromBufferAttribute(n,A),m.fromBufferAttribute(n,x),g.fromBufferAttribute(a,Y),v.fromBufferAttribute(a,A),y.fromBufferAttribute(a,x),p.sub(u),m.sub(u),v.sub(g),y.sub(g);const E=1/(v.x*y.y-y.x*v.y);isFinite(E)&&(T.copy(p).multiplyScalar(y.y).addScaledVector(m,-v.y).multiplyScalar(E),_.copy(m).multiplyScalar(v.x).addScaledVector(p,-y.x).multiplyScalar(E),l[Y].add(T),l[A].add(T),l[x].add(T),f[Y].add(_),f[A].add(_),f[x].add(_))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let Y=0,A=N.length;Y<A;++Y){const x=N[Y],E=x.start,G=x.count;for(let k=E,K=E+G;k<K;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const D=new Q,U=new Q,H=new Q,L=new Q;function O(Y){H.fromBufferAttribute(r,Y),L.copy(H);const A=l[Y];D.copy(A),D.sub(H.multiplyScalar(H.dot(A))).normalize(),U.crossVectors(L,A);const E=U.dot(f[Y])<0?-1:1;o.setXYZW(Y,D.x,D.y,D.z,E)}for(let Y=0,A=N.length;Y<A;++Y){const x=N[Y],E=x.start,G=x.count;for(let k=E,K=E+G;k<K;k+=3)O(e.getX(k+0)),O(e.getX(k+1)),O(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let g=0,v=n.count;g<v;g++)n.setXYZ(g,0,0,0);const r=new Q,a=new Q,o=new Q,l=new Q,f=new Q,u=new Q,p=new Q,m=new Q;if(e)for(let g=0,v=e.count;g<v;g+=3){const y=e.getX(g+0),T=e.getX(g+1),_=e.getX(g+2);r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,T),o.fromBufferAttribute(t,_),p.subVectors(o,a),m.subVectors(r,a),p.cross(m),l.fromBufferAttribute(n,y),f.fromBufferAttribute(n,T),u.fromBufferAttribute(n,_),l.add(p),f.add(p),u.add(p),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(T,f.x,f.y,f.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let g=0,v=t.count;g<v;g+=3)r.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),o.fromBufferAttribute(t,g+2),p.subVectors(o,a),m.subVectors(r,a),p.cross(m),n.setXYZ(g+0,p.x,p.y,p.z),n.setXYZ(g+1,p.x,p.y,p.z),n.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(l,f){const u=l.array,p=l.itemSize,m=l.normalized,g=new u.constructor(f.length*p);let v=0,y=0;for(let T=0,_=f.length;T<_;T++){l.isInterleavedBufferAttribute?v=f[T]*l.data.stride+l.offset:v=f[T]*p;for(let d=0;d<p;d++)g[y++]=u[v++]}return new Sn(g,p,m)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tn,n=this.index.array,r=this.attributes;for(const l in r){const f=r[l],u=e(f,n);t.setAttribute(l,u)}const a=this.morphAttributes;for(const l in a){const f=[],u=a[l];for(let p=0,m=u.length;p<m;p++){const g=u[p],v=e(g,n);f.push(v)}t.morphAttributes[l]=f}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,f=o.length;l<f;l++){const u=o[l];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const u in f)f[u]!==void 0&&(e[u]=f[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const u=n[f];e.data.attributes[f]=u.toJSON(e.data)}const r={};let a=!1;for(const f in this.morphAttributes){const u=this.morphAttributes[f],p=[];for(let m=0,g=u.length;m<g;m++){const v=u[m];p.push(v.toJSON(e.data))}p.length>0&&(r[f]=p,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const u in r){const p=r[u];this.setAttribute(u,p.clone(t))}const a=e.morphAttributes;for(const u in a){const p=[],m=a[u];for(let g=0,v=m.length;g<v;g++)p.push(m[g].clone(t));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,p=o.length;u<p;u++){const m=o[u];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fo=new Ut,oi=new Rl,Br=new as,Oo=new Q,zr=new Q,Vr=new Q,Gr=new Q,Vs=new Q,Hr=new Q,Bo=new Q,kr=new Q;class ni extends Qt{constructor(e=new Tn,t=new Dl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(a&&l){Hr.set(0,0,0);for(let f=0,u=a.length;f<u;f++){const p=l[f],m=a[f];p!==0&&(Vs.fromBufferAttribute(m,e),o?Hr.addScaledVector(Vs,p):Hr.addScaledVector(Vs.sub(t),p))}t.add(Hr)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(a),oi.copy(e.ray).recast(e.near),!(Br.containsPoint(oi.origin)===!1&&(oi.intersectSphere(Br,Oo)===null||oi.origin.distanceToSquared(Oo)>(e.far-e.near)**2))&&(Fo.copy(a).invert(),oi.copy(e.ray).applyMatrix4(Fo),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,n){let r;const a=this.geometry,o=this.material,l=a.index,f=a.attributes.position,u=a.attributes.uv,p=a.attributes.uv1,m=a.attributes.normal,g=a.groups,v=a.drawRange;if(l!==null)if(Array.isArray(o))for(let y=0,T=g.length;y<T;y++){const _=g[y],d=o[_.materialIndex],N=Math.max(_.start,v.start),D=Math.min(l.count,Math.min(_.start+_.count,v.start+v.count));for(let U=N,H=D;U<H;U+=3){const L=l.getX(U),O=l.getX(U+1),Y=l.getX(U+2);r=Wr(this,d,e,n,u,p,m,L,O,Y),r&&(r.faceIndex=Math.floor(U/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const y=Math.max(0,v.start),T=Math.min(l.count,v.start+v.count);for(let _=y,d=T;_<d;_+=3){const N=l.getX(_),D=l.getX(_+1),U=l.getX(_+2);r=Wr(this,o,e,n,u,p,m,N,D,U),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(o))for(let y=0,T=g.length;y<T;y++){const _=g[y],d=o[_.materialIndex],N=Math.max(_.start,v.start),D=Math.min(f.count,Math.min(_.start+_.count,v.start+v.count));for(let U=N,H=D;U<H;U+=3){const L=U,O=U+1,Y=U+2;r=Wr(this,d,e,n,u,p,m,L,O,Y),r&&(r.faceIndex=Math.floor(U/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const y=Math.max(0,v.start),T=Math.min(f.count,v.start+v.count);for(let _=y,d=T;_<d;_+=3){const N=_,D=_+1,U=_+2;r=Wr(this,o,e,n,u,p,m,N,D,U),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function Ou(i,e,t,n,r,a,o,l){let f;if(e.side===Jt?f=n.intersectTriangle(o,a,r,!0,l):f=n.intersectTriangle(r,a,o,e.side===ti,l),f===null)return null;kr.copy(l),kr.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(kr);return u<t.near||u>t.far?null:{distance:u,point:kr.clone(),object:i}}function Wr(i,e,t,n,r,a,o,l,f,u){i.getVertexPosition(l,zr),i.getVertexPosition(f,Vr),i.getVertexPosition(u,Gr);const p=Ou(i,e,t,n,zr,Vr,Gr,Bo);if(p){const m=new Q;vn.getBarycoord(Bo,zr,Vr,Gr,m),r&&(p.uv=vn.getInterpolatedAttribute(r,l,f,u,m,new St)),a&&(p.uv1=vn.getInterpolatedAttribute(a,l,f,u,m,new St)),o&&(p.normal=vn.getInterpolatedAttribute(o,l,f,u,m,new Q),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const g={a:l,b:f,c:u,normal:new Q,materialIndex:0};vn.getNormal(zr,Vr,Gr,g.normal),p.face=g,p.barycoord=m}return p}class vr extends Tn{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const l=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const f=[],u=[],p=[],m=[];let g=0,v=0;y("z","y","x",-1,-1,n,t,e,o,a,0),y("z","y","x",1,-1,n,t,-e,o,a,1),y("x","z","y",1,1,e,n,t,r,o,2),y("x","z","y",1,-1,e,n,-t,r,o,3),y("x","y","z",1,-1,e,t,n,r,a,4),y("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(f),this.setAttribute("position",new mi(u,3)),this.setAttribute("normal",new mi(p,3)),this.setAttribute("uv",new mi(m,2));function y(T,_,d,N,D,U,H,L,O,Y,A){const x=U/O,E=H/Y,G=U/2,k=H/2,K=L/2,ie=O+1,z=Y+1;let te=0,j=0;const le=new Q;for(let de=0;de<z;de++){const Ie=de*E-k;for(let qe=0;qe<ie;qe++){const tt=qe*x-G;le[T]=tt*N,le[_]=Ie*D,le[d]=K,u.push(le.x,le.y,le.z),le[T]=0,le[_]=0,le[d]=L>0?1:-1,p.push(le.x,le.y,le.z),m.push(qe/O),m.push(1-de/Y),te+=1}}for(let de=0;de<Y;de++)for(let Ie=0;Ie<O;Ie++){const qe=g+Ie+ie*de,tt=g+Ie+ie*(de+1),ge=g+(Ie+1)+ie*(de+1),ae=g+(Ie+1)+ie*de;f.push(qe,tt,ae),f.push(tt,ge,ae),j+=6}l.addGroup(v,j,A),v+=j,g+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Yt(i){const e={};for(let t=0;t<i.length;t++){const n=qi(i[t]);for(const r in n)e[r]=n[r]}return e}function Bu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Il(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}const zu={clone:qi,merge:Yt};var Vu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends _r{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vu,this.fragmentShader=Gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qi(e.uniforms),this.uniformsGroups=Bu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nl extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new Q,zo=new St,Vo=new St;class hn extends Nl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,zo,Vo),t.subVectors(Vo,zo)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const f=o.fullWidth,u=o.fullHeight;a+=o.offsetX*r/f,t-=o.offsetY*n/u,r*=o.width/f,n*=o.height/u}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fi=-90,Oi=1;class Hu extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(Fi,Oi,e,t);r.layers=this.layers,this.add(r);const a=new hn(Fi,Oi,e,t);a.layers=this.layers,this.add(a);const o=new hn(Fi,Oi,e,t);o.layers=this.layers,this.add(o);const l=new hn(Fi,Oi,e,t);l.layers=this.layers,this.add(l);const f=new hn(Fi,Oi,e,t);f.layers=this.layers,this.add(f);const u=new hn(Fi,Oi,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,o,l,f]=t;for(const u of t)this.remove(u);if(e===En)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,l,f,u,p]=this.children,m=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,f),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=T,e.setRenderTarget(n,5,r),e.render(t,p),e.setRenderTarget(m,g,v),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Fl extends jt{constructor(e=[],t=ki,n,r,a,o,l,f,u,p){super(e,t,n,r,a,o,l,f,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ku extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Fl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new vr(5,5,5),a=new Hn({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Jt,blending:Bn});a.uniforms.tEquirect.value=t;const o=new ni(r,a),l=t.minFilter;return t.minFilter===pi&&(t.minFilter=dn),new Hu(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(a)}}class Xr extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wu={type:"move"};class Gs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null;const l=this._targetRay,f=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const T of e.hand.values()){const _=t.getJointPose(T,n),d=this._getHandJoint(u,T);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}const p=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],g=p.position.distanceTo(m.position),v=.02,y=.005;u.inputState.pinching&&g>v+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&g<=v-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Wu)))}return l!==null&&(l.visible=r!==null),f!==null&&(f.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Xu extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class qu extends jt{constructor(e=null,t=1,n=1,r,a,o,l,f,u=an,p=an,m,g){super(null,o,l,f,u,p,r,a,m,g),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hs=new Q,Yu=new Q,ju=new rt;class fi{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Hs.subVectors(n,t).cross(Yu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Hs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ju.getNormalMatrix(e),r=this.coplanarPoint(Hs).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new as,Ku=new St(.5,.5),qr=new Q;class Ol{constructor(e=new fi,t=new fi,n=new fi,r=new fi,a=new fi,o=new fi){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(a),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=En,n=!1){const r=this.planes,a=e.elements,o=a[0],l=a[1],f=a[2],u=a[3],p=a[4],m=a[5],g=a[6],v=a[7],y=a[8],T=a[9],_=a[10],d=a[11],N=a[12],D=a[13],U=a[14],H=a[15];if(r[0].setComponents(u-o,v-p,d-y,H-N).normalize(),r[1].setComponents(u+o,v+p,d+y,H+N).normalize(),r[2].setComponents(u+l,v+m,d+T,H+D).normalize(),r[3].setComponents(u-l,v-m,d-T,H-D).normalize(),n)r[4].setComponents(f,g,_,U).normalize(),r[5].setComponents(u-f,v-g,d-_,H-U).normalize();else if(r[4].setComponents(u-f,v-g,d-_,H-U).normalize(),t===En)r[5].setComponents(u+f,v+g,d+_,H+U).normalize();else if(t===is)r[5].setComponents(f,g,_,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){li.center.set(0,0,0);const t=Ku.distanceTo(e.center);return li.radius=.7071067811865476+t,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(qr.x=r.normal.x>0?e.max.x:e.min.x,qr.y=r.normal.y>0?e.max.y:e.min.y,qr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bl extends _r{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Go=new Ut,Oa=new Rl,Yr=new as,jr=new Q;class Zu extends Qt{constructor(e=new Tn,t=new Bl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),Yr.radius+=a,e.ray.intersectsSphere(Yr)===!1)return;Go.copy(r).invert(),Oa.copy(e.ray).applyMatrix4(Go);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=l*l,u=n.index,m=n.attributes.position;if(u!==null){const g=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let y=g,T=v;y<T;y++){const _=u.getX(y);jr.fromBufferAttribute(m,_),Ho(jr,_,f,r,e,t,this)}}else{const g=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let y=g,T=v;y<T;y++)jr.fromBufferAttribute(m,y),Ho(jr,y,f,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function Ho(i,e,t,n,r,a,o){const l=Oa.distanceSqToPoint(i);if(l<t){const f=new Q;Oa.closestPointToPoint(i,f),f.applyMatrix4(n);const u=r.ray.origin.distanceTo(f);if(u<r.near||u>r.far)return;a.push({distance:u,distanceToRay:Math.sqrt(l),point:f,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class zl extends jt{constructor(e,t,n=xi,r,a,o,l=an,f=an,u,p=hr,m=1){if(p!==hr&&p!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:m};super(g,r,a,o,l,f,p,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ya(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vl extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class os extends Tn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,o=t/2,l=Math.floor(n),f=Math.floor(r),u=l+1,p=f+1,m=e/l,g=t/f,v=[],y=[],T=[],_=[];for(let d=0;d<p;d++){const N=d*g-o;for(let D=0;D<u;D++){const U=D*m-a;y.push(U,-N,0),T.push(0,0,1),_.push(D/l),_.push(1-d/f)}}for(let d=0;d<f;d++)for(let N=0;N<l;N++){const D=N+u*d,U=N+u*(d+1),H=N+1+u*(d+1),L=N+1+u*d;v.push(D,U,L),v.push(U,H,L)}this.setIndex(v),this.setAttribute("position",new mi(y,3)),this.setAttribute("normal",new mi(T,3)),this.setAttribute("uv",new mi(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.widthSegments,e.heightSegments)}}class $u extends _r{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ju extends _r{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Qu extends Nl{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,o=n+e,l=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,l-=p*this.view.offsetY,f=l-p*this.view.height}this.projectionMatrix.makeOrthographic(a,o,l,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ef extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function ko(i,e,t,n){const r=tf(n);switch(t){case bl:return i*e;case El:return i*e/r.components*r.byteLength;case ka:return i*e/r.components*r.byteLength;case Wa:return i*e*2/r.components*r.byteLength;case Xa:return i*e*2/r.components*r.byteLength;case yl:return i*e*3/r.components*r.byteLength;case Mn:return i*e*4/r.components*r.byteLength;case qa:return i*e*4/r.components*r.byteLength;case $r:case Jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qr:case es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ca:case fa:return Math.max(i,16)*Math.max(e,8)/4;case la:case ua:return Math.max(i,8)*Math.max(e,8)/2;case ha:case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ga:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _a:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ba:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ca:case Pa:case Da:return Math.ceil(i/4)*Math.ceil(e/4)*16;case La:case Ua:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ia:case Na:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tf(i){switch(i){case Vn:case _l:return{byteLength:1,components:1};case ur:case vl:case Yi:return{byteLength:2,components:1};case Ga:case Ha:return{byteLength:2,components:4};case xi:case Va:case On:return{byteLength:4,components:1};case Ml:case Sl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:za}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=za);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Gl(){let i=null,e=!1,t=null,n=null;function r(a,o){t(a,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function nf(i){const e=new WeakMap;function t(l,f){const u=l.array,p=l.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(f,g),i.bufferData(f,u,p),l.onUploadCallback();let v;if(u instanceof Float32Array)v=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)v=i.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?v=i.HALF_FLOAT:v=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=i.SHORT;else if(u instanceof Uint32Array)v=i.UNSIGNED_INT;else if(u instanceof Int32Array)v=i.INT;else if(u instanceof Int8Array)v=i.BYTE;else if(u instanceof Uint8Array)v=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function n(l,f,u){const p=f.array,m=f.updateRanges;if(i.bindBuffer(u,l),m.length===0)i.bufferSubData(u,0,p);else{m.sort((v,y)=>v.start-y.start);let g=0;for(let v=1;v<m.length;v++){const y=m[g],T=m[v];T.start<=y.start+y.count+1?y.count=Math.max(y.count,T.start+T.count-y.start):(++g,m[g]=T)}m.length=g+1;for(let v=0,y=m.length;v<y;v++){const T=m[v];i.bufferSubData(u,T.start*p.BYTES_PER_ELEMENT,p,T.start,T.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const f=e.get(l);f&&(i.deleteBuffer(f.buffer),e.delete(l))}function o(l,f){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const p=e.get(l);(!p||p.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,t(l,f));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,l,f),u.version=l.version}}return{get:r,remove:a,update:o}}var rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,df=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_f=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Rf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,If="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$f=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,th=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nh=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ih=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ah=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ch=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ph=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_h=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vh=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Th=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ah=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ch=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ph=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Uh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ih=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$h=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const id=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ad=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ld=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ud=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,md=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_d=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Md=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ed=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Td=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ad=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Rd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ld=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ud=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:rf,alphahash_pars_fragment:sf,alphamap_fragment:af,alphamap_pars_fragment:of,alphatest_fragment:lf,alphatest_pars_fragment:cf,aomap_fragment:uf,aomap_pars_fragment:ff,batching_pars_vertex:hf,batching_vertex:df,begin_vertex:pf,beginnormal_vertex:mf,bsdfs:xf,iridescence_fragment:gf,bumpmap_pars_fragment:_f,clipping_planes_fragment:vf,clipping_planes_pars_fragment:Mf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:bf,color_fragment:yf,color_pars_fragment:Ef,color_pars_vertex:Tf,color_vertex:Af,common:wf,cube_uv_reflection_fragment:Rf,defaultnormal_vertex:Cf,displacementmap_pars_vertex:Pf,displacementmap_vertex:Df,emissivemap_fragment:Lf,emissivemap_pars_fragment:Uf,colorspace_fragment:If,colorspace_pars_fragment:Nf,envmap_fragment:Ff,envmap_common_pars_fragment:Of,envmap_pars_fragment:Bf,envmap_pars_vertex:zf,envmap_physical_pars_fragment:Zf,envmap_vertex:Vf,fog_vertex:Gf,fog_pars_vertex:Hf,fog_fragment:kf,fog_pars_fragment:Wf,gradientmap_pars_fragment:Xf,lightmap_pars_fragment:qf,lights_lambert_fragment:Yf,lights_lambert_pars_fragment:jf,lights_pars_begin:Kf,lights_toon_fragment:$f,lights_toon_pars_fragment:Jf,lights_phong_fragment:Qf,lights_phong_pars_fragment:eh,lights_physical_fragment:th,lights_physical_pars_fragment:nh,lights_fragment_begin:ih,lights_fragment_maps:rh,lights_fragment_end:sh,logdepthbuf_fragment:ah,logdepthbuf_pars_fragment:oh,logdepthbuf_pars_vertex:lh,logdepthbuf_vertex:ch,map_fragment:uh,map_pars_fragment:fh,map_particle_fragment:hh,map_particle_pars_fragment:dh,metalnessmap_fragment:ph,metalnessmap_pars_fragment:mh,morphinstance_vertex:xh,morphcolor_vertex:gh,morphnormal_vertex:_h,morphtarget_pars_vertex:vh,morphtarget_vertex:Mh,normal_fragment_begin:Sh,normal_fragment_maps:bh,normal_pars_fragment:yh,normal_pars_vertex:Eh,normal_vertex:Th,normalmap_pars_fragment:Ah,clearcoat_normal_fragment_begin:wh,clearcoat_normal_fragment_maps:Rh,clearcoat_pars_fragment:Ch,iridescence_pars_fragment:Ph,opaque_fragment:Dh,packing:Lh,premultiplied_alpha_fragment:Uh,project_vertex:Ih,dithering_fragment:Nh,dithering_pars_fragment:Fh,roughnessmap_fragment:Oh,roughnessmap_pars_fragment:Bh,shadowmap_pars_fragment:zh,shadowmap_pars_vertex:Vh,shadowmap_vertex:Gh,shadowmask_pars_fragment:Hh,skinbase_vertex:kh,skinning_pars_vertex:Wh,skinning_vertex:Xh,skinnormal_vertex:qh,specularmap_fragment:Yh,specularmap_pars_fragment:jh,tonemapping_fragment:Kh,tonemapping_pars_fragment:Zh,transmission_fragment:$h,transmission_pars_fragment:Jh,uv_pars_fragment:Qh,uv_pars_vertex:ed,uv_vertex:td,worldpos_vertex:nd,background_vert:id,background_frag:rd,backgroundCube_vert:sd,backgroundCube_frag:ad,cube_vert:od,cube_frag:ld,depth_vert:cd,depth_frag:ud,distanceRGBA_vert:fd,distanceRGBA_frag:hd,equirect_vert:dd,equirect_frag:pd,linedashed_vert:md,linedashed_frag:xd,meshbasic_vert:gd,meshbasic_frag:_d,meshlambert_vert:vd,meshlambert_frag:Md,meshmatcap_vert:Sd,meshmatcap_frag:bd,meshnormal_vert:yd,meshnormal_frag:Ed,meshphong_vert:Td,meshphong_frag:Ad,meshphysical_vert:wd,meshphysical_frag:Rd,meshtoon_vert:Cd,meshtoon_frag:Pd,points_vert:Dd,points_frag:Ld,shadow_vert:Ud,shadow_frag:Id,sprite_vert:Nd,sprite_frag:Fd},Te={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},yn={basic:{uniforms:Yt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Yt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new gt(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Yt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Yt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Yt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new gt(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Yt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Yt([Te.points,Te.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Yt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Yt([Te.common,Te.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Yt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Yt([Te.sprite,Te.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:Yt([Te.common,Te.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:Yt([Te.lights,Te.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};yn.physical={uniforms:Yt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Kr={r:0,b:0,g:0},ci=new Gn,Od=new Ut;function Bd(i,e,t,n,r,a,o){const l=new gt(0);let f=a===!0?0:1,u,p,m=null,g=0,v=null;function y(D){let U=D.isScene===!0?D.background:null;return U&&U.isTexture&&(U=(D.backgroundBlurriness>0?t:e).get(U)),U}function T(D){let U=!1;const H=y(D);H===null?d(l,f):H&&H.isColor&&(d(H,1),U=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||U)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(D,U){const H=y(U);H&&(H.isCubeTexture||H.mapping===ss)?(p===void 0&&(p=new ni(new vr(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:qi(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,O,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),ci.copy(U.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),p.material.uniforms.envMap.value=H,p.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Od.makeRotationFromEuler(ci)),p.material.toneMapped=pt.getTransfer(H.colorSpace)!==Mt,(m!==H||g!==H.version||v!==i.toneMapping)&&(p.material.needsUpdate=!0,m=H,g=H.version,v=i.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):H&&H.isTexture&&(u===void 0&&(u=new ni(new os(2,2),new Hn({name:"BackgroundMaterial",uniforms:qi(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=H,u.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,u.material.toneMapped=pt.getTransfer(H.colorSpace)!==Mt,H.matrixAutoUpdate===!0&&H.updateMatrix(),u.material.uniforms.uvTransform.value.copy(H.matrix),(m!==H||g!==H.version||v!==i.toneMapping)&&(u.material.needsUpdate=!0,m=H,g=H.version,v=i.toneMapping),u.layers.enableAll(),D.unshift(u,u.geometry,u.material,0,0,null))}function d(D,U){D.getRGB(Kr,Il(i)),n.buffers.color.setClear(Kr.r,Kr.g,Kr.b,U,o)}function N(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return l},setClearColor:function(D,U=1){l.set(D),f=U,d(l,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,d(l,f)},render:T,addToRenderList:_,dispose:N}}function zd(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=g(null);let a=r,o=!1;function l(x,E,G,k,K){let ie=!1;const z=m(k,G,E);a!==z&&(a=z,u(a.object)),ie=v(x,k,G,K),ie&&y(x,k,G,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,U(x,E,G,k),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function f(){return i.createVertexArray()}function u(x){return i.bindVertexArray(x)}function p(x){return i.deleteVertexArray(x)}function m(x,E,G){const k=G.wireframe===!0;let K=n[x.id];K===void 0&&(K={},n[x.id]=K);let ie=K[E.id];ie===void 0&&(ie={},K[E.id]=ie);let z=ie[k];return z===void 0&&(z=g(f()),ie[k]=z),z}function g(x){const E=[],G=[],k=[];for(let K=0;K<t;K++)E[K]=0,G[K]=0,k[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:G,attributeDivisors:k,object:x,attributes:{},index:null}}function v(x,E,G,k){const K=a.attributes,ie=E.attributes;let z=0;const te=G.getAttributes();for(const j in te)if(te[j].location>=0){const de=K[j];let Ie=ie[j];if(Ie===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(Ie=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(Ie=x.instanceColor)),de===void 0||de.attribute!==Ie||Ie&&de.data!==Ie.data)return!0;z++}return a.attributesNum!==z||a.index!==k}function y(x,E,G,k){const K={},ie=E.attributes;let z=0;const te=G.getAttributes();for(const j in te)if(te[j].location>=0){let de=ie[j];de===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(de=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(de=x.instanceColor));const Ie={};Ie.attribute=de,de&&de.data&&(Ie.data=de.data),K[j]=Ie,z++}a.attributes=K,a.attributesNum=z,a.index=k}function T(){const x=a.newAttributes;for(let E=0,G=x.length;E<G;E++)x[E]=0}function _(x){d(x,0)}function d(x,E){const G=a.newAttributes,k=a.enabledAttributes,K=a.attributeDivisors;G[x]=1,k[x]===0&&(i.enableVertexAttribArray(x),k[x]=1),K[x]!==E&&(i.vertexAttribDivisor(x,E),K[x]=E)}function N(){const x=a.newAttributes,E=a.enabledAttributes;for(let G=0,k=E.length;G<k;G++)E[G]!==x[G]&&(i.disableVertexAttribArray(G),E[G]=0)}function D(x,E,G,k,K,ie,z){z===!0?i.vertexAttribIPointer(x,E,G,K,ie):i.vertexAttribPointer(x,E,G,k,K,ie)}function U(x,E,G,k){T();const K=k.attributes,ie=G.getAttributes(),z=E.defaultAttributeValues;for(const te in ie){const j=ie[te];if(j.location>=0){let le=K[te];if(le===void 0&&(te==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),te==="instanceColor"&&x.instanceColor&&(le=x.instanceColor)),le!==void 0){const de=le.normalized,Ie=le.itemSize,qe=e.get(le);if(qe===void 0)continue;const tt=qe.buffer,ge=qe.type,ae=qe.bytesPerElement,V=ge===i.INT||ge===i.UNSIGNED_INT||le.gpuType===Va;if(le.isInterleavedBufferAttribute){const Z=le.data,re=Z.stride,pe=le.offset;if(Z.isInstancedInterleavedBuffer){for(let me=0;me<j.locationSize;me++)d(j.location+me,Z.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let me=0;me<j.locationSize;me++)_(j.location+me);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let me=0;me<j.locationSize;me++)D(j.location+me,Ie/j.locationSize,ge,de,re*ae,(pe+Ie/j.locationSize*me)*ae,V)}else{if(le.isInstancedBufferAttribute){for(let Z=0;Z<j.locationSize;Z++)d(j.location+Z,le.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Z=0;Z<j.locationSize;Z++)_(j.location+Z);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Z=0;Z<j.locationSize;Z++)D(j.location+Z,Ie/j.locationSize,ge,de,Ie*ae,Ie/j.locationSize*Z*ae,V)}}else if(z!==void 0){const de=z[te];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(j.location,de);break;case 3:i.vertexAttrib3fv(j.location,de);break;case 4:i.vertexAttrib4fv(j.location,de);break;default:i.vertexAttrib1fv(j.location,de)}}}}N()}function H(){Y();for(const x in n){const E=n[x];for(const G in E){const k=E[G];for(const K in k)p(k[K].object),delete k[K];delete E[G]}delete n[x]}}function L(x){if(n[x.id]===void 0)return;const E=n[x.id];for(const G in E){const k=E[G];for(const K in k)p(k[K].object),delete k[K];delete E[G]}delete n[x.id]}function O(x){for(const E in n){const G=n[E];if(G[x.id]===void 0)continue;const k=G[x.id];for(const K in k)p(k[K].object),delete k[K];delete G[x.id]}}function Y(){A(),o=!0,a!==r&&(a=r,u(a.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:Y,resetDefaultState:A,dispose:H,releaseStatesOfGeometry:L,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:_,disableUnusedAttributes:N}}function Vd(i,e,t){let n;function r(u){n=u}function a(u,p){i.drawArrays(n,u,p),t.update(p,n,1)}function o(u,p,m){m!==0&&(i.drawArraysInstanced(n,u,p,m),t.update(p,n,m))}function l(u,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,p,0,m);let v=0;for(let y=0;y<m;y++)v+=p[y];t.update(v,n,1)}function f(u,p,m,g){if(m===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let y=0;y<u.length;y++)o(u[y],p[y],g[y]);else{v.multiDrawArraysInstancedWEBGL(n,u,0,p,0,g,0,m);let y=0;for(let T=0;T<m;T++)y+=p[T]*g[T];t.update(y,n,1)}}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function Gd(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(O){return!(O!==Mn&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(O){const Y=O===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Vn&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==On&&!Y)}function f(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const p=f(u);p!==u&&(it("WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const m=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),D=i.getParameter(i.MAX_VARYING_VECTORS),U=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),H=y>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:o,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:m,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:y,maxTextureSize:T,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:U,vertexTextures:H,maxSamples:L}}function Hd(i){const e=this;let t=null,n=0,r=!1,a=!1;const o=new fi,l=new rt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(m,g){const v=m.length!==0||g||n!==0||r;return r=g,n=m.length,v},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(m,g){t=p(m,g,0)},this.setState=function(m,g,v){const y=m.clippingPlanes,T=m.clipIntersection,_=m.clipShadows,d=i.get(m);if(!r||y===null||y.length===0||a&&!_)a?p(null):u();else{const N=a?0:n,D=N*4;let U=d.clippingState||null;f.value=U,U=p(y,g,D,v);for(let H=0;H!==D;++H)U[H]=t[H];d.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function u(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(m,g,v,y){const T=m!==null?m.length:0;let _=null;if(T!==0){if(_=f.value,y!==!0||_===null){const d=v+T*4,N=g.matrixWorldInverse;l.getNormalMatrix(N),(_===null||_.length<d)&&(_=new Float32Array(d));for(let D=0,U=v;D!==T;++D,U+=4)o.copy(m[D]).applyMatrix4(N,l),o.normal.toArray(_,U),_[U+3]=o.constant}f.value=_,f.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,_}}function kd(i){let e=new WeakMap;function t(o,l){return l===ra?o.mapping=ki:l===sa&&(o.mapping=Wi),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===ra||l===sa)if(e.has(o)){const f=e.get(o).texture;return t(f,o.mapping)}else{const f=o.image;if(f&&f.height>0){const u=new ku(f.height);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const f=e.get(l);f!==void 0&&(e.delete(l),f.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Qn=4,Wo=[.125,.215,.35,.446,.526,.582],di=20,Wd=256,lr=new Qu,Xo=new gt;let ks=null,Ws=0,Xs=0,qs=!1;const Xd=new Q;class qo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:o=256,position:l=Xd}=a;ks=this._renderer.getRenderTarget(),Ws=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,r,f,l),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ks,Ws,Xs),this._renderer.xr.enabled=qs,e.scissorTest=!1,Bi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ks=this._renderer.getRenderTarget(),Ws=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Yi,format:Mn,colorSpace:Xi,depthBuffer:!1},r=Yo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yo(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qd(a)),this._blurMaterial=jd(a,e,t),this._ggxMaterial=Yd(a,e,t)}return r}_compileMaterial(e){const t=new ni(new Tn,e);this._renderer.compile(t,lr)}_sceneToCubeUV(e,t,n,r,a){const f=new hn(90,1,t,n),u=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(Xo),m.toneMapping=ei,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(r),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ni(new vr,new Dl({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,_=T.material;let d=!1;const N=e.background;N?N.isColor&&(_.color.copy(N),e.background=null,d=!0):(_.color.copy(Xo),d=!0);for(let D=0;D<6;D++){const U=D%3;U===0?(f.up.set(0,u[D],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+p[D],a.y,a.z)):U===1?(f.up.set(0,0,u[D]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+p[D],a.z)):(f.up.set(0,u[D],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+p[D]));const H=this._cubeSize;Bi(r,U*H,D>2?H:0,H,H),m.setRenderTarget(r),d&&m.render(T,f),m.render(e,f)}m.toneMapping=v,m.autoClear=g,e.background=N}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ki||e.mapping===Wi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jo());const a=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=a;const l=a.uniforms;l.envMap.value=e;const f=this._cubeSize;Bi(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(o,lr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;const f=o.uniforms,u=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),m=Math.sqrt(u*u-p*p),g=.05+u*.95,v=m*g,{_lodMax:y}=this,T=this._sizeLods[n],_=3*T*(n>y-Qn?n-y+Qn:0),d=4*(this._cubeSize-T);f.envMap.value=e.texture,f.roughness.value=v,f.mipInt.value=y-t,Bi(a,_,d,3*T,2*T),r.setRenderTarget(a),r.render(l,lr),f.envMap.value=a.texture,f.roughness.value=0,f.mipInt.value=y-n,Bi(e,_,d,3*T,2*T),r.setRenderTarget(e),r.render(l,lr)}_blur(e,t,n,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",a),this._halfBlur(o,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,o,l){const f=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const p=3,m=this._lodMeshes[r];m.material=u;const g=u.uniforms,v=this._sizeLods[n]-1,y=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*di-1),T=a/y,_=isFinite(a)?1+Math.floor(p*T):di;_>di&&it(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${di}`);const d=[];let N=0;for(let O=0;O<di;++O){const Y=O/T,A=Math.exp(-Y*Y/2);d.push(A),O===0?N+=A:O<_&&(N+=2*A)}for(let O=0;O<d.length;O++)d[O]=d[O]/N;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=d,g.latitudinal.value=o==="latitudinal",l&&(g.poleAxis.value=l);const{_lodMax:D}=this;g.dTheta.value=y,g.mipInt.value=D-n;const U=this._sizeLods[r],H=3*U*(r>D-Qn?r-D+Qn:0),L=4*(this._cubeSize-U);Bi(t,H,L,3*U,2*U),f.setRenderTarget(t),f.render(m,lr)}}function qd(i){const e=[],t=[],n=[];let r=i;const a=i-Qn+1+Wo.length;for(let o=0;o<a;o++){const l=Math.pow(2,r);e.push(l);let f=1/l;o>i-Qn?f=Wo[o-i+Qn-1]:o===0&&(f=0),t.push(f);const u=1/(l-2),p=-u,m=1+u,g=[p,p,m,p,m,m,p,p,m,m,p,m],v=6,y=6,T=3,_=2,d=1,N=new Float32Array(T*y*v),D=new Float32Array(_*y*v),U=new Float32Array(d*y*v);for(let L=0;L<v;L++){const O=L%3*2/3-1,Y=L>2?0:-1,A=[O,Y,0,O+2/3,Y,0,O+2/3,Y+1,0,O,Y,0,O+2/3,Y+1,0,O,Y+1,0];N.set(A,T*y*L),D.set(g,_*y*L);const x=[L,L,L,L,L,L];U.set(x,d*y*L)}const H=new Tn;H.setAttribute("position",new Sn(N,T)),H.setAttribute("uv",new Sn(D,_)),H.setAttribute("faceIndex",new Sn(U,d)),n.push(new ni(H,null)),r>Qn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Yo(i,e,t){const n=new gi(i,e,t);return n.texture.mapping=ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Yd(i,e,t){return new Hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wd,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ls(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function jd(i,e,t){const n=new Float32Array(di),r=new Q(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function jo(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function Ko(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ls(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function ls(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kd(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const f=l.mapping,u=f===ra||f===sa,p=f===ki||f===Wi;if(u||p){let m=e.get(l);const g=m!==void 0?m.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==g)return t===null&&(t=new qo(i)),m=u?t.fromEquirectangular(l,m):t.fromCubemap(l,m),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),m.texture;if(m!==void 0)return m.texture;{const v=l.image;return u&&v&&v.height>0||p&&v&&r(v)?(t===null&&(t=new qo(i)),m=u?t.fromEquirectangular(l):t.fromCubemap(l),m.texture.pmremVersion=l.pmremVersion,e.set(l,m),l.addEventListener("dispose",a),m.texture):null}}}return l}function r(l){let f=0;const u=6;for(let p=0;p<u;p++)l[p]!==void 0&&f++;return f===u}function a(l){const f=l.target;f.removeEventListener("dispose",a);const u=e.get(f);u!==void 0&&(e.delete(f),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Zd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&pr("WebGLRenderer: "+n+" extension not supported."),r}}}function $d(i,e,t,n){const r={},a=new WeakMap;function o(m){const g=m.target;g.index!==null&&e.remove(g.index);for(const y in g.attributes)e.remove(g.attributes[y]);g.removeEventListener("dispose",o),delete r[g.id];const v=a.get(g);v&&(e.remove(v),a.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function l(m,g){return r[g.id]===!0||(g.addEventListener("dispose",o),r[g.id]=!0,t.memory.geometries++),g}function f(m){const g=m.attributes;for(const v in g)e.update(g[v],i.ARRAY_BUFFER)}function u(m){const g=[],v=m.index,y=m.attributes.position;let T=0;if(v!==null){const N=v.array;T=v.version;for(let D=0,U=N.length;D<U;D+=3){const H=N[D+0],L=N[D+1],O=N[D+2];g.push(H,L,L,O,O,H)}}else if(y!==void 0){const N=y.array;T=y.version;for(let D=0,U=N.length/3-1;D<U;D+=3){const H=D+0,L=D+1,O=D+2;g.push(H,L,L,O,O,H)}}else return;const _=new(Al(g)?Ul:Ll)(g,1);_.version=T;const d=a.get(m);d&&e.remove(d),a.set(m,_)}function p(m){const g=a.get(m);if(g){const v=m.index;v!==null&&g.version<v.version&&u(m)}else u(m);return a.get(m)}return{get:l,update:f,getWireframeAttribute:p}}function Jd(i,e,t){let n;function r(g){n=g}let a,o;function l(g){a=g.type,o=g.bytesPerElement}function f(g,v){i.drawElements(n,v,a,g*o),t.update(v,n,1)}function u(g,v,y){y!==0&&(i.drawElementsInstanced(n,v,a,g*o,y),t.update(v,n,y))}function p(g,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,v,0,a,g,0,y);let _=0;for(let d=0;d<y;d++)_+=v[d];t.update(_,n,1)}function m(g,v,y,T){if(y===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let d=0;d<g.length;d++)u(g[d]/o,v[d],T[d]);else{_.multiDrawElementsInstancedWEBGL(n,v,0,a,g,0,T,0,y);let d=0;for(let N=0;N<y;N++)d+=v[N]*T[N];t.update(d,n,1)}}this.setMode=r,this.setIndex=l,this.render=f,this.renderInstances=u,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function Qd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(a/3);break;case i.LINES:t.lines+=l*(a/2);break;case i.LINE_STRIP:t.lines+=l*(a-1);break;case i.LINE_LOOP:t.lines+=l*a;break;case i.POINTS:t.points+=l*a;break;default:Pt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ep(i,e,t){const n=new WeakMap,r=new Dt;function a(o,l,f){const u=o.morphTargetInfluences,p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=p!==void 0?p.length:0;let g=n.get(l);if(g===void 0||g.count!==m){let A=function(){O.dispose(),n.delete(l),l.removeEventListener("dispose",A)};g!==void 0&&g.texture.dispose();const v=l.morphAttributes.position!==void 0,y=l.morphAttributes.normal!==void 0,T=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],d=l.morphAttributes.normal||[],N=l.morphAttributes.color||[];let D=0;v===!0&&(D=1),y===!0&&(D=2),T===!0&&(D=3);let U=l.attributes.position.count*D,H=1;U>e.maxTextureSize&&(H=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const L=new Float32Array(U*H*4*m),O=new wl(L,U,H,m);O.type=On,O.needsUpdate=!0;const Y=D*4;for(let x=0;x<m;x++){const E=_[x],G=d[x],k=N[x],K=U*H*4*x;for(let ie=0;ie<E.count;ie++){const z=ie*Y;v===!0&&(r.fromBufferAttribute(E,ie),L[K+z+0]=r.x,L[K+z+1]=r.y,L[K+z+2]=r.z,L[K+z+3]=0),y===!0&&(r.fromBufferAttribute(G,ie),L[K+z+4]=r.x,L[K+z+5]=r.y,L[K+z+6]=r.z,L[K+z+7]=0),T===!0&&(r.fromBufferAttribute(k,ie),L[K+z+8]=r.x,L[K+z+9]=r.y,L[K+z+10]=r.z,L[K+z+11]=k.itemSize===4?r.w:1)}}g={count:m,texture:O,size:new St(U,H)},n.set(l,g),l.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let v=0;for(let T=0;T<u.length;T++)v+=u[T];const y=l.morphTargetsRelative?1:1-v;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",u)}f.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:a}}function tp(i,e,t,n){let r=new WeakMap;function a(f){const u=n.render.frame,p=f.geometry,m=e.get(f,p);if(r.get(m)!==u&&(e.update(m),r.set(m,u)),f.isInstancedMesh&&(f.hasEventListener("dispose",l)===!1&&f.addEventListener("dispose",l),r.get(f)!==u&&(t.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,i.ARRAY_BUFFER),r.set(f,u))),f.isSkinnedMesh){const g=f.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return m}function o(){r=new WeakMap}function l(f){const u=f.target;u.removeEventListener("dispose",l),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Hl=new jt,Zo=new zl(1,1),kl=new wl,Wl=new Au,Xl=new Fl,$o=[],Jo=[],Qo=new Float32Array(16),el=new Float32Array(9),tl=new Float32Array(4);function Ki(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=$o[r];if(a===void 0&&(a=new Float32Array(r),$o[r]=a),e!==0){n.toArray(a,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(a,l)}return a}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function cs(i,e){let t=Jo[e];t===void 0&&(t=new Int32Array(e),Jo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function np(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function ap(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;tl.set(n),i.uniformMatrix2fv(this.addr,!1,tl),Nt(t,n)}}function op(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;el.set(n),i.uniformMatrix3fv(this.addr,!1,el),Nt(t,n)}}function lp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(It(t,n))return;Qo.set(n),i.uniformMatrix4fv(this.addr,!1,Qo),Nt(t,n)}}function cp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function dp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function gp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Zo.compareFunction=Tl,a=Zo):a=Hl,t.setTexture2D(e||a,r)}function _p(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Wl,r)}function vp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Xl,r)}function Mp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||kl,r)}function Sp(i){switch(i){case 5126:return np;case 35664:return ip;case 35665:return rp;case 35666:return sp;case 35674:return ap;case 35675:return op;case 35676:return lp;case 5124:case 35670:return cp;case 35667:case 35671:return up;case 35668:case 35672:return fp;case 35669:case 35673:return hp;case 5125:return dp;case 36294:return pp;case 36295:return mp;case 36296:return xp;case 35678:case 36198:case 36298:case 36306:case 35682:return gp;case 35679:case 36299:case 36307:return _p;case 35680:case 36300:case 36308:case 36293:return vp;case 36289:case 36303:case 36311:case 36292:return Mp}}function bp(i,e){i.uniform1fv(this.addr,e)}function yp(i,e){const t=Ki(e,this.size,2);i.uniform2fv(this.addr,t)}function Ep(i,e){const t=Ki(e,this.size,3);i.uniform3fv(this.addr,t)}function Tp(i,e){const t=Ki(e,this.size,4);i.uniform4fv(this.addr,t)}function Ap(i,e){const t=Ki(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wp(i,e){const t=Ki(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rp(i,e){const t=Ki(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cp(i,e){i.uniform1iv(this.addr,e)}function Pp(i,e){i.uniform2iv(this.addr,e)}function Dp(i,e){i.uniform3iv(this.addr,e)}function Lp(i,e){i.uniform4iv(this.addr,e)}function Up(i,e){i.uniform1uiv(this.addr,e)}function Ip(i,e){i.uniform2uiv(this.addr,e)}function Np(i,e){i.uniform3uiv(this.addr,e)}function Fp(i,e){i.uniform4uiv(this.addr,e)}function Op(i,e,t){const n=this.cache,r=e.length,a=cs(t,r);It(n,a)||(i.uniform1iv(this.addr,a),Nt(n,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Hl,a[o])}function Bp(i,e,t){const n=this.cache,r=e.length,a=cs(t,r);It(n,a)||(i.uniform1iv(this.addr,a),Nt(n,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Wl,a[o])}function zp(i,e,t){const n=this.cache,r=e.length,a=cs(t,r);It(n,a)||(i.uniform1iv(this.addr,a),Nt(n,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Xl,a[o])}function Vp(i,e,t){const n=this.cache,r=e.length,a=cs(t,r);It(n,a)||(i.uniform1iv(this.addr,a),Nt(n,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||kl,a[o])}function Gp(i){switch(i){case 5126:return bp;case 35664:return yp;case 35665:return Ep;case 35666:return Tp;case 35674:return Ap;case 35675:return wp;case 35676:return Rp;case 5124:case 35670:return Cp;case 35667:case 35671:return Pp;case 35668:case 35672:return Dp;case 35669:case 35673:return Lp;case 5125:return Up;case 36294:return Ip;case 36295:return Np;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return Vp}}class Hp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sp(t.type)}}class kp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gp(t.type)}}class Wp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const l=r[a];l.setValue(e,t[l.id],n)}}}const Ys=/(\w+)(\])?(\[|\.)?/g;function nl(i,e){i.seq.push(e),i.map[e.id]=e}function Xp(i,e,t){const n=i.name,r=n.length;for(Ys.lastIndex=0;;){const a=Ys.exec(n),o=Ys.lastIndex;let l=a[1];const f=a[2]==="]",u=a[3];if(f&&(l=l|0),u===void 0||u==="["&&o+2===r){nl(t,u===void 0?new Hp(l,i,e):new kp(l,i,e));break}else{let m=t.map[l];m===void 0&&(m=new Wp(l),nl(t,m)),t=m}}}class ts{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);Xp(a,o,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){const l=t[a],f=n[l.id];f.needsUpdate!==!1&&l.setValue(e,f.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function il(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const qp=37297;let Yp=0;function jp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}const rl=new rt;function Kp(i){pt._getMatrix(rl,pt.workingColorSpace,i);const e=`mat3( ${rl.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case ns:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+jp(i.getShaderSource(e),l)}else return a}function Zp(i,e){const t=Kp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $p(i,e){let t;switch(e){case Qc:t="Linear";break;case eu:t="Reinhard";break;case tu:t="Cineon";break;case nu:t="ACESFilmic";break;case ru:t="AgX";break;case su:t="Neutral";break;case iu:t="Custom";break;default:it("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zr=new Q;function Jp(){pt.getLuminanceCoefficients(Zr);const i=Zr.x.toFixed(4),e=Zr.y.toFixed(4),t=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cr).join(`
`)}function e0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function t0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),o=a.name;let l=1;a.type===i.FLOAT_MAT2&&(l=2),a.type===i.FLOAT_MAT3&&(l=3),a.type===i.FLOAT_MAT4&&(l=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function cr(i){return i!==""}function al(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ol(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ba(i){return i.replace(n0,r0)}const i0=new Map;function r0(i,e){let t=st[e];if(t===void 0){const n=i0.get(e);if(n!==void 0)t=st[n],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ba(t)}const s0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ll(i){return i.replace(s0,a0)}function a0(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function cl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function o0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ml?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(e="SHADOWMAP_TYPE_VSM"),e}function l0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ki:case Wi:e="ENVMAP_TYPE_CUBE";break;case ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function c0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wi:e="ENVMAP_MODE_REFRACTION";break}return e}function u0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xl:e="ENVMAP_BLENDING_MULTIPLY";break;case $c:e="ENVMAP_BLENDING_MIX";break;case Jc:e="ENVMAP_BLENDING_ADD";break}return e}function f0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function h0(i,e,t,n){const r=i.getContext(),a=t.defines;let o=t.vertexShader,l=t.fragmentShader;const f=o0(t),u=l0(t),p=c0(t),m=u0(t),g=f0(t),v=Qp(t),y=e0(a),T=r.createProgram();let _,d,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(cr).join(`
`),_.length>0&&(_+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(cr).join(`
`),d.length>0&&(d+=`
`)):(_=[cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),d=[cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMap?"#define "+m:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?st.tonemapping_pars_fragment:"",t.toneMapping!==ei?$p("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Zp("linearToOutputTexel",t.outputColorSpace),Jp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),o=Ba(o),o=al(o,t),o=ol(o,t),l=Ba(l),l=al(l,t),l=ol(l,t),o=ll(o),l=ll(l),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,_=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["#define varying in",t.glslVersion===bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const D=N+_+o,U=N+d+l,H=il(r,r.VERTEX_SHADER,D),L=il(r,r.FRAGMENT_SHADER,U);r.attachShader(T,H),r.attachShader(T,L),t.index0AttributeName!==void 0?r.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function O(E){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(T)||"",k=r.getShaderInfoLog(H)||"",K=r.getShaderInfoLog(L)||"",ie=G.trim(),z=k.trim(),te=K.trim();let j=!0,le=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,T,H,L);else{const de=sl(r,H,"vertex"),Ie=sl(r,L,"fragment");Pt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+ie+`
`+de+`
`+Ie)}else ie!==""?it("WebGLProgram: Program Info Log:",ie):(z===""||te==="")&&(le=!1);le&&(E.diagnostics={runnable:j,programLog:ie,vertexShader:{log:z,prefix:_},fragmentShader:{log:te,prefix:d}})}r.deleteShader(H),r.deleteShader(L),Y=new ts(r,T),A=t0(r,T)}let Y;this.getUniforms=function(){return Y===void 0&&O(this),Y};let A;this.getAttributes=function(){return A===void 0&&O(this),A};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(T,qp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yp++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=H,this.fragmentShader=L,this}let d0=0;class p0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new m0(e),t.set(e,n)),n}}class m0{constructor(e){this.id=d0++,this.code=e,this.usedTimes=0}}function x0(i,e,t,n,r,a,o){const l=new Cl,f=new p0,u=new Set,p=[],m=r.logarithmicDepthBuffer,g=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return u.add(A),A===0?"uv":`uv${A}`}function _(A,x,E,G,k){const K=G.fog,ie=k.geometry,z=A.isMeshStandardMaterial?G.environment:null,te=(A.isMeshStandardMaterial?t:e).get(A.envMap||z),j=te&&te.mapping===ss?te.image.height:null,le=y[A.type];A.precision!==null&&(v=r.getMaxPrecision(A.precision),v!==A.precision&&it("WebGLProgram.getParameters:",A.precision,"not supported, using",v,"instead."));const de=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ie=de!==void 0?de.length:0;let qe=0;ie.morphAttributes.position!==void 0&&(qe=1),ie.morphAttributes.normal!==void 0&&(qe=2),ie.morphAttributes.color!==void 0&&(qe=3);let tt,ge,ae,V;if(le){const ft=yn[le];tt=ft.vertexShader,ge=ft.fragmentShader}else tt=A.vertexShader,ge=A.fragmentShader,f.update(A),ae=f.getVertexShaderID(A),V=f.getFragmentShaderID(A);const Z=i.getRenderTarget(),re=i.state.buffers.depth.getReversed(),pe=k.isInstancedMesh===!0,me=k.isBatchedMesh===!0,Ue=!!A.map,xt=!!A.matcap,Pe=!!te,Qe=!!A.aoMap,I=!!A.lightMap,et=!!A.bumpMap,Je=!!A.normalMap,ut=!!A.displacementMap,Le=!!A.emissiveMap,bt=!!A.metalnessMap,ze=!!A.roughnessMap,$e=A.anisotropy>0,R=A.clearcoat>0,S=A.dispersion>0,q=A.iridescence>0,se=A.sheen>0,ce=A.transmission>0,ne=$e&&!!A.anisotropyMap,Oe=R&&!!A.clearcoatMap,Ee=R&&!!A.clearcoatNormalMap,Ge=R&&!!A.clearcoatRoughnessMap,Ne=q&&!!A.iridescenceMap,ue=q&&!!A.iridescenceThicknessMap,_e=se&&!!A.sheenColorMap,Xe=se&&!!A.sheenRoughnessMap,ke=!!A.specularMap,we=!!A.specularColorMap,Ye=!!A.specularIntensityMap,F=ce&&!!A.transmissionMap,be=ce&&!!A.thicknessMap,ve=!!A.gradientMap,Me=!!A.alphaMap,he=A.alphaTest>0,oe=!!A.alphaHash,Ce=!!A.extensions;let je=ei;A.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(je=i.toneMapping);const _t={shaderID:le,shaderType:A.type,shaderName:A.name,vertexShader:tt,fragmentShader:ge,defines:A.defines,customVertexShaderID:ae,customFragmentShaderID:V,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:v,batching:me,batchingColor:me&&k._colorsTexture!==null,instancing:pe,instancingColor:pe&&k.instanceColor!==null,instancingMorph:pe&&k.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Xi,alphaToCoverage:!!A.alphaToCoverage,map:Ue,matcap:xt,envMap:Pe,envMapMode:Pe&&te.mapping,envMapCubeUVHeight:j,aoMap:Qe,lightMap:I,bumpMap:et,normalMap:Je,displacementMap:g&&ut,emissiveMap:Le,normalMapObjectSpace:Je&&A.normalMapType===uu,normalMapTangentSpace:Je&&A.normalMapType===cu,metalnessMap:bt,roughnessMap:ze,anisotropy:$e,anisotropyMap:ne,clearcoat:R,clearcoatMap:Oe,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ge,dispersion:S,iridescence:q,iridescenceMap:Ne,iridescenceThicknessMap:ue,sheen:se,sheenColorMap:_e,sheenRoughnessMap:Xe,specularMap:ke,specularColorMap:we,specularIntensityMap:Ye,transmission:ce,transmissionMap:F,thicknessMap:be,gradientMap:ve,opaque:A.transparent===!1&&A.blending===Vi&&A.alphaToCoverage===!1,alphaMap:Me,alphaTest:he,alphaHash:oe,combine:A.combine,mapUv:Ue&&T(A.map.channel),aoMapUv:Qe&&T(A.aoMap.channel),lightMapUv:I&&T(A.lightMap.channel),bumpMapUv:et&&T(A.bumpMap.channel),normalMapUv:Je&&T(A.normalMap.channel),displacementMapUv:ut&&T(A.displacementMap.channel),emissiveMapUv:Le&&T(A.emissiveMap.channel),metalnessMapUv:bt&&T(A.metalnessMap.channel),roughnessMapUv:ze&&T(A.roughnessMap.channel),anisotropyMapUv:ne&&T(A.anisotropyMap.channel),clearcoatMapUv:Oe&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&T(A.sheenRoughnessMap.channel),specularMapUv:ke&&T(A.specularMap.channel),specularColorMapUv:we&&T(A.specularColorMap.channel),specularIntensityMapUv:Ye&&T(A.specularIntensityMap.channel),transmissionMapUv:F&&T(A.transmissionMap.channel),thicknessMapUv:be&&T(A.thicknessMap.channel),alphaMapUv:Me&&T(A.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Je||$e),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!ie.attributes.uv&&(Ue||Me),fog:!!K,useFog:A.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:re,skinning:k.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:qe,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,decodeVideoTexture:Ue&&A.map.isVideoTexture===!0&&pt.getTransfer(A.map.colorSpace)===Mt,decodeVideoTextureEmissive:Le&&A.emissiveMap.isVideoTexture===!0&&pt.getTransfer(A.emissiveMap.colorSpace)===Mt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Nn,flipSided:A.side===Jt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ce&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&A.extensions.multiDraw===!0||me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return _t.vertexUv1s=u.has(1),_t.vertexUv2s=u.has(2),_t.vertexUv3s=u.has(3),u.clear(),_t}function d(A){const x=[];if(A.shaderID?x.push(A.shaderID):(x.push(A.customVertexShaderID),x.push(A.customFragmentShaderID)),A.defines!==void 0)for(const E in A.defines)x.push(E),x.push(A.defines[E]);return A.isRawShaderMaterial===!1&&(N(x,A),D(x,A),x.push(i.outputColorSpace)),x.push(A.customProgramCacheKey),x.join()}function N(A,x){A.push(x.precision),A.push(x.outputColorSpace),A.push(x.envMapMode),A.push(x.envMapCubeUVHeight),A.push(x.mapUv),A.push(x.alphaMapUv),A.push(x.lightMapUv),A.push(x.aoMapUv),A.push(x.bumpMapUv),A.push(x.normalMapUv),A.push(x.displacementMapUv),A.push(x.emissiveMapUv),A.push(x.metalnessMapUv),A.push(x.roughnessMapUv),A.push(x.anisotropyMapUv),A.push(x.clearcoatMapUv),A.push(x.clearcoatNormalMapUv),A.push(x.clearcoatRoughnessMapUv),A.push(x.iridescenceMapUv),A.push(x.iridescenceThicknessMapUv),A.push(x.sheenColorMapUv),A.push(x.sheenRoughnessMapUv),A.push(x.specularMapUv),A.push(x.specularColorMapUv),A.push(x.specularIntensityMapUv),A.push(x.transmissionMapUv),A.push(x.thicknessMapUv),A.push(x.combine),A.push(x.fogExp2),A.push(x.sizeAttenuation),A.push(x.morphTargetsCount),A.push(x.morphAttributeCount),A.push(x.numDirLights),A.push(x.numPointLights),A.push(x.numSpotLights),A.push(x.numSpotLightMaps),A.push(x.numHemiLights),A.push(x.numRectAreaLights),A.push(x.numDirLightShadows),A.push(x.numPointLightShadows),A.push(x.numSpotLightShadows),A.push(x.numSpotLightShadowsWithMaps),A.push(x.numLightProbes),A.push(x.shadowMapType),A.push(x.toneMapping),A.push(x.numClippingPlanes),A.push(x.numClipIntersection),A.push(x.depthPacking)}function D(A,x){l.disableAll(),x.supportsVertexTextures&&l.enable(0),x.instancing&&l.enable(1),x.instancingColor&&l.enable(2),x.instancingMorph&&l.enable(3),x.matcap&&l.enable(4),x.envMap&&l.enable(5),x.normalMapObjectSpace&&l.enable(6),x.normalMapTangentSpace&&l.enable(7),x.clearcoat&&l.enable(8),x.iridescence&&l.enable(9),x.alphaTest&&l.enable(10),x.vertexColors&&l.enable(11),x.vertexAlphas&&l.enable(12),x.vertexUv1s&&l.enable(13),x.vertexUv2s&&l.enable(14),x.vertexUv3s&&l.enable(15),x.vertexTangents&&l.enable(16),x.anisotropy&&l.enable(17),x.alphaHash&&l.enable(18),x.batching&&l.enable(19),x.dispersion&&l.enable(20),x.batchingColor&&l.enable(21),x.gradientMap&&l.enable(22),A.push(l.mask),l.disableAll(),x.fog&&l.enable(0),x.useFog&&l.enable(1),x.flatShading&&l.enable(2),x.logarithmicDepthBuffer&&l.enable(3),x.reversedDepthBuffer&&l.enable(4),x.skinning&&l.enable(5),x.morphTargets&&l.enable(6),x.morphNormals&&l.enable(7),x.morphColors&&l.enable(8),x.premultipliedAlpha&&l.enable(9),x.shadowMapEnabled&&l.enable(10),x.doubleSided&&l.enable(11),x.flipSided&&l.enable(12),x.useDepthPacking&&l.enable(13),x.dithering&&l.enable(14),x.transmission&&l.enable(15),x.sheen&&l.enable(16),x.opaque&&l.enable(17),x.pointsUvs&&l.enable(18),x.decodeVideoTexture&&l.enable(19),x.decodeVideoTextureEmissive&&l.enable(20),x.alphaToCoverage&&l.enable(21),A.push(l.mask)}function U(A){const x=y[A.type];let E;if(x){const G=yn[x];E=zu.clone(G.uniforms)}else E=A.uniforms;return E}function H(A,x){let E;for(let G=0,k=p.length;G<k;G++){const K=p[G];if(K.cacheKey===x){E=K,++E.usedTimes;break}}return E===void 0&&(E=new h0(i,x,A,a),p.push(E)),E}function L(A){if(--A.usedTimes===0){const x=p.indexOf(A);p[x]=p[p.length-1],p.pop(),A.destroy()}}function O(A){f.remove(A)}function Y(){f.dispose()}return{getParameters:_,getProgramCacheKey:d,getUniforms:U,acquireProgram:H,releaseProgram:L,releaseShaderCache:O,programs:p,dispose:Y}}function g0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function r(o,l,f){i.get(o)[l]=f}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function _0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ul(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fl(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function o(m,g,v,y,T,_){let d=i[e];return d===void 0?(d={id:m.id,object:m,geometry:g,material:v,groupOrder:y,renderOrder:m.renderOrder,z:T,group:_},i[e]=d):(d.id=m.id,d.object=m,d.geometry=g,d.material=v,d.groupOrder=y,d.renderOrder=m.renderOrder,d.z=T,d.group=_),e++,d}function l(m,g,v,y,T,_){const d=o(m,g,v,y,T,_);v.transmission>0?n.push(d):v.transparent===!0?r.push(d):t.push(d)}function f(m,g,v,y,T,_){const d=o(m,g,v,y,T,_);v.transmission>0?n.unshift(d):v.transparent===!0?r.unshift(d):t.unshift(d)}function u(m,g){t.length>1&&t.sort(m||_0),n.length>1&&n.sort(g||ul),r.length>1&&r.sort(g||ul)}function p(){for(let m=e,g=i.length;m<g;m++){const v=i[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:l,unshift:f,finish:p,sort:u}}function v0(){let i=new WeakMap;function e(n,r){const a=i.get(n);let o;return a===void 0?(o=new fl,i.set(n,[o])):r>=a.length?(o=new fl,a.push(o)):o=a[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function M0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new gt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return i[e.id]=t,t}}}function S0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let b0=0;function y0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function E0(i){const e=new M0,t=S0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new Q);const r=new Q,a=new Ut,o=new Ut;function l(u){let p=0,m=0,g=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let v=0,y=0,T=0,_=0,d=0,N=0,D=0,U=0,H=0,L=0,O=0;u.sort(y0);for(let A=0,x=u.length;A<x;A++){const E=u[A],G=E.color,k=E.intensity,K=E.distance,ie=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)p+=G.r*k,m+=G.g*k,g+=G.b*k;else if(E.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(E.sh.coefficients[z],k);O++}else if(E.isDirectionalLight){const z=e.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const te=E.shadow,j=t.get(E);j.shadowIntensity=te.intensity,j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,n.directionalShadow[v]=j,n.directionalShadowMap[v]=ie,n.directionalShadowMatrix[v]=E.shadow.matrix,N++}n.directional[v]=z,v++}else if(E.isSpotLight){const z=e.get(E);z.position.setFromMatrixPosition(E.matrixWorld),z.color.copy(G).multiplyScalar(k),z.distance=K,z.coneCos=Math.cos(E.angle),z.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),z.decay=E.decay,n.spot[T]=z;const te=E.shadow;if(E.map&&(n.spotLightMap[H]=E.map,H++,te.updateMatrices(E),E.castShadow&&L++),n.spotLightMatrix[T]=te.matrix,E.castShadow){const j=t.get(E);j.shadowIntensity=te.intensity,j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,n.spotShadow[T]=j,n.spotShadowMap[T]=ie,U++}T++}else if(E.isRectAreaLight){const z=e.get(E);z.color.copy(G).multiplyScalar(k),z.halfWidth.set(E.width*.5,0,0),z.halfHeight.set(0,E.height*.5,0),n.rectArea[_]=z,_++}else if(E.isPointLight){const z=e.get(E);if(z.color.copy(E.color).multiplyScalar(E.intensity),z.distance=E.distance,z.decay=E.decay,E.castShadow){const te=E.shadow,j=t.get(E);j.shadowIntensity=te.intensity,j.shadowBias=te.bias,j.shadowNormalBias=te.normalBias,j.shadowRadius=te.radius,j.shadowMapSize=te.mapSize,j.shadowCameraNear=te.camera.near,j.shadowCameraFar=te.camera.far,n.pointShadow[y]=j,n.pointShadowMap[y]=ie,n.pointShadowMatrix[y]=E.shadow.matrix,D++}n.point[y]=z,y++}else if(E.isHemisphereLight){const z=e.get(E);z.skyColor.copy(E.color).multiplyScalar(k),z.groundColor.copy(E.groundColor).multiplyScalar(k),n.hemi[d]=z,d++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=m,n.ambient[2]=g;const Y=n.hash;(Y.directionalLength!==v||Y.pointLength!==y||Y.spotLength!==T||Y.rectAreaLength!==_||Y.hemiLength!==d||Y.numDirectionalShadows!==N||Y.numPointShadows!==D||Y.numSpotShadows!==U||Y.numSpotMaps!==H||Y.numLightProbes!==O)&&(n.directional.length=v,n.spot.length=T,n.rectArea.length=_,n.point.length=y,n.hemi.length=d,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.pointShadow.length=D,n.pointShadowMap.length=D,n.spotShadow.length=U,n.spotShadowMap.length=U,n.directionalShadowMatrix.length=N,n.pointShadowMatrix.length=D,n.spotLightMatrix.length=U+H-L,n.spotLightMap.length=H,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=O,Y.directionalLength=v,Y.pointLength=y,Y.spotLength=T,Y.rectAreaLength=_,Y.hemiLength=d,Y.numDirectionalShadows=N,Y.numPointShadows=D,Y.numSpotShadows=U,Y.numSpotMaps=H,Y.numLightProbes=O,n.version=b0++)}function f(u,p){let m=0,g=0,v=0,y=0,T=0;const _=p.matrixWorldInverse;for(let d=0,N=u.length;d<N;d++){const D=u[d];if(D.isDirectionalLight){const U=n.directional[m];U.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(_),m++}else if(D.isSpotLight){const U=n.spot[v];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(_),U.direction.setFromMatrixPosition(D.matrixWorld),r.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(r),U.direction.transformDirection(_),v++}else if(D.isRectAreaLight){const U=n.rectArea[y];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(_),o.identity(),a.copy(D.matrixWorld),a.premultiply(_),o.extractRotation(a),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(o),U.halfHeight.applyMatrix4(o),y++}else if(D.isPointLight){const U=n.point[g];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(_),g++}else if(D.isHemisphereLight){const U=n.hemi[T];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(_),T++}}}return{setup:l,setupView:f,state:n}}function hl(i){const e=new E0(i),t=[],n=[];function r(p){u.camera=p,t.length=0,n.length=0}function a(p){t.push(p)}function o(p){n.push(p)}function l(){e.setup(t)}function f(p){e.setupView(t,p)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:l,setupLightsView:f,pushLight:a,pushShadow:o}}function T0(i){let e=new WeakMap;function t(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new hl(i),e.set(r,[l])):a>=o.length?(l=new hl(i),o.push(l)):l=o[a],l}function n(){e=new WeakMap}return{get:t,dispose:n}}const A0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function R0(i,e,t){let n=new Ol;const r=new St,a=new St,o=new Dt,l=new $u({depthPacking:lu}),f=new Ju,u={},p=t.maxTextureSize,m={[ti]:Jt,[Jt]:ti,[Nn]:Nn},g=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:A0,fragmentShader:w0}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const y=new Tn;y.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ni(y,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ml;let d=this.type;this.render=function(L,O,Y){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||L.length===0)return;const A=i.getRenderTarget(),x=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Bn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const k=d!==In&&this.type===In,K=d===In&&this.type!==In;for(let ie=0,z=L.length;ie<z;ie++){const te=L[ie],j=te.shadow;if(j===void 0){it("WebGLShadowMap:",te,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const le=j.getFrameExtents();if(r.multiply(le),a.copy(j.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/le.x),r.x=a.x*le.x,j.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/le.y),r.y=a.y*le.y,j.mapSize.y=a.y)),j.map===null||k===!0||K===!0){const Ie=this.type!==In?{minFilter:an,magFilter:an}:{};j.map!==null&&j.map.dispose(),j.map=new gi(r.x,r.y,Ie),j.map.texture.name=te.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const de=j.getViewportCount();for(let Ie=0;Ie<de;Ie++){const qe=j.getViewport(Ie);o.set(a.x*qe.x,a.y*qe.y,a.x*qe.z,a.y*qe.w),G.viewport(o),j.updateMatrices(te,Ie),n=j.getFrustum(),U(O,Y,j.camera,te,this.type)}j.isPointLightShadow!==!0&&this.type===In&&N(j,Y),j.needsUpdate=!1}d=this.type,_.needsUpdate=!1,i.setRenderTarget(A,x,E)};function N(L,O){const Y=e.update(T);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,v.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new gi(r.x,r.y)),g.uniforms.shadow_pass.value=L.map.texture,g.uniforms.resolution.value=L.mapSize,g.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(O,null,Y,g,T,null),v.uniforms.shadow_pass.value=L.mapPass.texture,v.uniforms.resolution.value=L.mapSize,v.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(O,null,Y,v,T,null)}function D(L,O,Y,A){let x=null;const E=Y.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(E!==void 0)x=E;else if(x=Y.isPointLight===!0?f:l,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const G=x.uuid,k=O.uuid;let K=u[G];K===void 0&&(K={},u[G]=K);let ie=K[k];ie===void 0&&(ie=x.clone(),K[k]=ie,O.addEventListener("dispose",H)),x=ie}if(x.visible=O.visible,x.wireframe=O.wireframe,A===In?x.side=O.shadowSide!==null?O.shadowSide:O.side:x.side=O.shadowSide!==null?O.shadowSide:m[O.side],x.alphaMap=O.alphaMap,x.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,x.map=O.map,x.clipShadows=O.clipShadows,x.clippingPlanes=O.clippingPlanes,x.clipIntersection=O.clipIntersection,x.displacementMap=O.displacementMap,x.displacementScale=O.displacementScale,x.displacementBias=O.displacementBias,x.wireframeLinewidth=O.wireframeLinewidth,x.linewidth=O.linewidth,Y.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=i.properties.get(x);G.light=Y}return x}function U(L,O,Y,A,x){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&x===In)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,L.matrixWorld);const k=e.update(L),K=L.material;if(Array.isArray(K)){const ie=k.groups;for(let z=0,te=ie.length;z<te;z++){const j=ie[z],le=K[j.materialIndex];if(le&&le.visible){const de=D(L,le,A,x);L.onBeforeShadow(i,L,O,Y,k,de,j),i.renderBufferDirect(Y,null,k,de,L,j),L.onAfterShadow(i,L,O,Y,k,de,j)}}}else if(K.visible){const ie=D(L,K,A,x);L.onBeforeShadow(i,L,O,Y,k,ie,null),i.renderBufferDirect(Y,null,k,ie,L,null),L.onAfterShadow(i,L,O,Y,k,ie,null)}}const G=L.children;for(let k=0,K=G.length;k<K;k++)U(G[k],O,Y,A,x)}function H(L){L.target.removeEventListener("dispose",H);for(const Y in u){const A=u[Y],x=L.target.uuid;x in A&&(A[x].dispose(),delete A[x])}}}const C0={[$s]:Js,[Qs]:na,[ea]:ia,[Hi]:ta,[Js]:$s,[na]:Qs,[ia]:ea,[ta]:Hi};function P0(i,e){function t(){let F=!1;const be=new Dt;let ve=null;const Me=new Dt(0,0,0,0);return{setMask:function(he){ve!==he&&!F&&(i.colorMask(he,he,he,he),ve=he)},setLocked:function(he){F=he},setClear:function(he,oe,Ce,je,_t){_t===!0&&(he*=je,oe*=je,Ce*=je),be.set(he,oe,Ce,je),Me.equals(be)===!1&&(i.clearColor(he,oe,Ce,je),Me.copy(be))},reset:function(){F=!1,ve=null,Me.set(-1,0,0,0)}}}function n(){let F=!1,be=!1,ve=null,Me=null,he=null;return{setReversed:function(oe){if(be!==oe){const Ce=e.get("EXT_clip_control");oe?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),be=oe;const je=he;he=null,this.setClear(je)}},getReversed:function(){return be},setTest:function(oe){oe?Z(i.DEPTH_TEST):re(i.DEPTH_TEST)},setMask:function(oe){ve!==oe&&!F&&(i.depthMask(oe),ve=oe)},setFunc:function(oe){if(be&&(oe=C0[oe]),Me!==oe){switch(oe){case $s:i.depthFunc(i.NEVER);break;case Js:i.depthFunc(i.ALWAYS);break;case Qs:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case ea:i.depthFunc(i.EQUAL);break;case ta:i.depthFunc(i.GEQUAL);break;case na:i.depthFunc(i.GREATER);break;case ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=oe}},setLocked:function(oe){F=oe},setClear:function(oe){he!==oe&&(be&&(oe=1-oe),i.clearDepth(oe),he=oe)},reset:function(){F=!1,ve=null,Me=null,he=null,be=!1}}}function r(){let F=!1,be=null,ve=null,Me=null,he=null,oe=null,Ce=null,je=null,_t=null;return{setTest:function(ft){F||(ft?Z(i.STENCIL_TEST):re(i.STENCIL_TEST))},setMask:function(ft){be!==ft&&!F&&(i.stencilMask(ft),be=ft)},setFunc:function(ft,Xt,en){(ve!==ft||Me!==Xt||he!==en)&&(i.stencilFunc(ft,Xt,en),ve=ft,Me=Xt,he=en)},setOp:function(ft,Xt,en){(oe!==ft||Ce!==Xt||je!==en)&&(i.stencilOp(ft,Xt,en),oe=ft,Ce=Xt,je=en)},setLocked:function(ft){F=ft},setClear:function(ft){_t!==ft&&(i.clearStencil(ft),_t=ft)},reset:function(){F=!1,be=null,ve=null,Me=null,he=null,oe=null,Ce=null,je=null,_t=null}}}const a=new t,o=new n,l=new r,f=new WeakMap,u=new WeakMap;let p={},m={},g=new WeakMap,v=[],y=null,T=!1,_=null,d=null,N=null,D=null,U=null,H=null,L=null,O=new gt(0,0,0),Y=0,A=!1,x=null,E=null,G=null,k=null,K=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,te=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=te>=1):j.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=te>=2);let le=null,de={};const Ie=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),tt=new Dt().fromArray(Ie),ge=new Dt().fromArray(qe);function ae(F,be,ve,Me){const he=new Uint8Array(4),oe=i.createTexture();i.bindTexture(F,oe),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<ve;Ce++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(be+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return oe}const V={};V[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),Z(i.DEPTH_TEST),o.setFunc(Hi),et(!1),Je(go),Z(i.CULL_FACE),Qe(Bn);function Z(F){p[F]!==!0&&(i.enable(F),p[F]=!0)}function re(F){p[F]!==!1&&(i.disable(F),p[F]=!1)}function pe(F,be){return m[F]!==be?(i.bindFramebuffer(F,be),m[F]=be,F===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=be),F===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=be),!0):!1}function me(F,be){let ve=v,Me=!1;if(F){ve=g.get(be),ve===void 0&&(ve=[],g.set(be,ve));const he=F.textures;if(ve.length!==he.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ce=he.length;oe<Ce;oe++)ve[oe]=i.COLOR_ATTACHMENT0+oe;ve.length=he.length,Me=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,Me=!0);Me&&i.drawBuffers(ve)}function Ue(F){return y!==F?(i.useProgram(F),y=F,!0):!1}const xt={[hi]:i.FUNC_ADD,[Ic]:i.FUNC_SUBTRACT,[Nc]:i.FUNC_REVERSE_SUBTRACT};xt[Fc]=i.MIN,xt[Oc]=i.MAX;const Pe={[Bc]:i.ZERO,[zc]:i.ONE,[Vc]:i.SRC_COLOR,[Ks]:i.SRC_ALPHA,[qc]:i.SRC_ALPHA_SATURATE,[Wc]:i.DST_COLOR,[Hc]:i.DST_ALPHA,[Gc]:i.ONE_MINUS_SRC_COLOR,[Zs]:i.ONE_MINUS_SRC_ALPHA,[Xc]:i.ONE_MINUS_DST_COLOR,[kc]:i.ONE_MINUS_DST_ALPHA,[Yc]:i.CONSTANT_COLOR,[jc]:i.ONE_MINUS_CONSTANT_COLOR,[Kc]:i.CONSTANT_ALPHA,[Zc]:i.ONE_MINUS_CONSTANT_ALPHA};function Qe(F,be,ve,Me,he,oe,Ce,je,_t,ft){if(F===Bn){T===!0&&(re(i.BLEND),T=!1);return}if(T===!1&&(Z(i.BLEND),T=!0),F!==Uc){if(F!==_||ft!==A){if((d!==hi||U!==hi)&&(i.blendEquation(i.FUNC_ADD),d=hi,U=hi),ft)switch(F){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case js:i.blendFunc(i.ONE,i.ONE);break;case _o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pt("WebGLState: Invalid blending: ",F);break}else switch(F){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _o:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vo:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",F);break}N=null,D=null,H=null,L=null,O.set(0,0,0),Y=0,_=F,A=ft}return}he=he||be,oe=oe||ve,Ce=Ce||Me,(be!==d||he!==U)&&(i.blendEquationSeparate(xt[be],xt[he]),d=be,U=he),(ve!==N||Me!==D||oe!==H||Ce!==L)&&(i.blendFuncSeparate(Pe[ve],Pe[Me],Pe[oe],Pe[Ce]),N=ve,D=Me,H=oe,L=Ce),(je.equals(O)===!1||_t!==Y)&&(i.blendColor(je.r,je.g,je.b,_t),O.copy(je),Y=_t),_=F,A=!1}function I(F,be){F.side===Nn?re(i.CULL_FACE):Z(i.CULL_FACE);let ve=F.side===Jt;be&&(ve=!ve),et(ve),F.blending===Vi&&F.transparent===!1?Qe(Bn):Qe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),a.setMask(F.colorWrite);const Me=F.stencilWrite;l.setTest(Me),Me&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Le(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):re(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(F){x!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),x=F)}function Je(F){F!==Pc?(Z(i.CULL_FACE),F!==E&&(F===go?i.cullFace(i.BACK):F===Dc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):re(i.CULL_FACE),E=F}function ut(F){F!==G&&(z&&i.lineWidth(F),G=F)}function Le(F,be,ve){F?(Z(i.POLYGON_OFFSET_FILL),(k!==be||K!==ve)&&(i.polygonOffset(be,ve),k=be,K=ve)):re(i.POLYGON_OFFSET_FILL)}function bt(F){F?Z(i.SCISSOR_TEST):re(i.SCISSOR_TEST)}function ze(F){F===void 0&&(F=i.TEXTURE0+ie-1),le!==F&&(i.activeTexture(F),le=F)}function $e(F,be,ve){ve===void 0&&(le===null?ve=i.TEXTURE0+ie-1:ve=le);let Me=de[ve];Me===void 0&&(Me={type:void 0,texture:void 0},de[ve]=Me),(Me.type!==F||Me.texture!==be)&&(le!==ve&&(i.activeTexture(ve),le=ve),i.bindTexture(F,be||V[F]),Me.type=F,Me.texture=be)}function R(){const F=de[le];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function se(){try{i.texSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function ce(){try{i.texSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function ne(){try{i.compressedTexSubImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function Oe(){try{i.compressedTexSubImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function Ee(){try{i.texStorage2D(...arguments)}catch(F){F("WebGLState:",F)}}function Ge(){try{i.texStorage3D(...arguments)}catch(F){F("WebGLState:",F)}}function Ne(){try{i.texImage2D(...arguments)}catch(F){F("WebGLState:",F)}}function ue(){try{i.texImage3D(...arguments)}catch(F){F("WebGLState:",F)}}function _e(F){tt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),tt.copy(F))}function Xe(F){ge.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),ge.copy(F))}function ke(F,be){let ve=u.get(be);ve===void 0&&(ve=new WeakMap,u.set(be,ve));let Me=ve.get(F);Me===void 0&&(Me=i.getUniformBlockIndex(be,F.name),ve.set(F,Me))}function we(F,be){const Me=u.get(be).get(F);f.get(be)!==Me&&(i.uniformBlockBinding(be,Me,F.__bindingPointIndex),f.set(be,Me))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},le=null,de={},m={},g=new WeakMap,v=[],y=null,T=!1,_=null,d=null,N=null,D=null,U=null,H=null,L=null,O=new gt(0,0,0),Y=0,A=!1,x=null,E=null,G=null,k=null,K=null,tt.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:Z,disable:re,bindFramebuffer:pe,drawBuffers:me,useProgram:Ue,setBlending:Qe,setMaterial:I,setFlipSided:et,setCullFace:Je,setLineWidth:ut,setPolygonOffset:Le,setScissorTest:bt,activeTexture:ze,bindTexture:$e,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:q,texImage2D:Ne,texImage3D:ue,updateUBOMapping:ke,uniformBlockBinding:we,texStorage2D:Ee,texStorage3D:Ge,texSubImage2D:se,texSubImage3D:ce,compressedTexSubImage2D:ne,compressedTexSubImage3D:Oe,scissor:_e,viewport:Xe,reset:Ye}}function D0(i,e,t,n,r,a,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new St,p=new WeakMap;let m;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,S){return v?new OffscreenCanvas(R,S):rs("canvas")}function T(R,S,q){let se=1;const ce=$e(R);if((ce.width>q||ce.height>q)&&(se=q/Math.max(ce.width,ce.height)),se<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ne=Math.floor(se*ce.width),Oe=Math.floor(se*ce.height);m===void 0&&(m=y(ne,Oe));const Ee=S?y(ne,Oe):m;return Ee.width=ne,Ee.height=Oe,Ee.getContext("2d").drawImage(R,0,0,ne,Oe),it("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ne+"x"+Oe+")."),Ee}else return"data"in R&&it("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),R;return R}function _(R){return R.generateMipmaps}function d(R){i.generateMipmap(R)}function N(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function D(R,S,q,se,ce=!1){if(R!==null){if(i[R]!==void 0)return i[R];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ne=S;if(S===i.RED&&(q===i.FLOAT&&(ne=i.R32F),q===i.HALF_FLOAT&&(ne=i.R16F),q===i.UNSIGNED_BYTE&&(ne=i.R8)),S===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ne=i.R8UI),q===i.UNSIGNED_SHORT&&(ne=i.R16UI),q===i.UNSIGNED_INT&&(ne=i.R32UI),q===i.BYTE&&(ne=i.R8I),q===i.SHORT&&(ne=i.R16I),q===i.INT&&(ne=i.R32I)),S===i.RG&&(q===i.FLOAT&&(ne=i.RG32F),q===i.HALF_FLOAT&&(ne=i.RG16F),q===i.UNSIGNED_BYTE&&(ne=i.RG8)),S===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ne=i.RG8UI),q===i.UNSIGNED_SHORT&&(ne=i.RG16UI),q===i.UNSIGNED_INT&&(ne=i.RG32UI),q===i.BYTE&&(ne=i.RG8I),q===i.SHORT&&(ne=i.RG16I),q===i.INT&&(ne=i.RG32I)),S===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),q===i.UNSIGNED_INT&&(ne=i.RGB32UI),q===i.BYTE&&(ne=i.RGB8I),q===i.SHORT&&(ne=i.RGB16I),q===i.INT&&(ne=i.RGB32I)),S===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),q===i.UNSIGNED_INT&&(ne=i.RGBA32UI),q===i.BYTE&&(ne=i.RGBA8I),q===i.SHORT&&(ne=i.RGBA16I),q===i.INT&&(ne=i.RGBA32I)),S===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),S===i.RGBA){const Oe=ce?ns:pt.getTransfer(se);q===i.FLOAT&&(ne=i.RGBA32F),q===i.HALF_FLOAT&&(ne=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ne=Oe===Mt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function U(R,S){let q;return R?S===null||S===xi||S===fr?q=i.DEPTH24_STENCIL8:S===On?q=i.DEPTH32F_STENCIL8:S===ur&&(q=i.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===xi||S===fr?q=i.DEPTH_COMPONENT24:S===On?q=i.DEPTH_COMPONENT32F:S===ur&&(q=i.DEPTH_COMPONENT16),q}function H(R,S){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==an&&R.minFilter!==dn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function L(R){const S=R.target;S.removeEventListener("dispose",L),Y(S),S.isVideoTexture&&p.delete(S)}function O(R){const S=R.target;S.removeEventListener("dispose",O),x(S)}function Y(R){const S=n.get(R);if(S.__webglInit===void 0)return;const q=R.source,se=g.get(q);if(se){const ce=se[S.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&A(R),Object.keys(se).length===0&&g.delete(q)}n.remove(R)}function A(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const q=R.source,se=g.get(q);delete se[S.__cacheKey],o.memory.textures--}function x(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(S.__webglFramebuffer[se]))for(let ce=0;ce<S.__webglFramebuffer[se].length;ce++)i.deleteFramebuffer(S.__webglFramebuffer[se][ce]);else i.deleteFramebuffer(S.__webglFramebuffer[se]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[se])}else{if(Array.isArray(S.__webglFramebuffer))for(let se=0;se<S.__webglFramebuffer.length;se++)i.deleteFramebuffer(S.__webglFramebuffer[se]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let se=0;se<S.__webglColorRenderbuffer.length;se++)S.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[se]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const q=R.textures;for(let se=0,ce=q.length;se<ce;se++){const ne=n.get(q[se]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),o.memory.textures--),n.remove(q[se])}n.remove(R)}let E=0;function G(){E=0}function k(){const R=E;return R>=r.maxTextures&&it("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),E+=1,R}function K(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function ie(R,S){const q=n.get(R);if(R.isVideoTexture&&bt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&q.__version!==R.version){const se=R.image;if(se===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{V(q,R,S);return}}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+S)}function z(R,S){const q=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){V(q,R,S);return}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+S)}function te(R,S){const q=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){V(q,R,S);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+S)}function j(R,S){const q=n.get(R);if(R.version>0&&q.__version!==R.version){Z(q,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+S)}const le={[aa]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[oa]:i.MIRRORED_REPEAT},de={[an]:i.NEAREST,[au]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[_s]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},Ie={[fu]:i.NEVER,[gu]:i.ALWAYS,[hu]:i.LESS,[Tl]:i.LEQUAL,[du]:i.EQUAL,[xu]:i.GEQUAL,[pu]:i.GREATER,[mu]:i.NOTEQUAL};function qe(R,S){if(S.type===On&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===dn||S.magFilter===_s||S.magFilter===Rr||S.magFilter===pi||S.minFilter===dn||S.minFilter===_s||S.minFilter===Rr||S.minFilter===pi)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,le[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,le[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,le[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,de[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ie[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===an||S.minFilter!==Rr&&S.minFilter!==pi||S.type===On&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function tt(R,S){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",L));const se=S.source;let ce=g.get(se);ce===void 0&&(ce={},g.set(se,ce));const ne=K(S);if(ne!==R.__cacheKey){ce[ne]===void 0&&(ce[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ce[ne].usedTimes++;const Oe=ce[R.__cacheKey];Oe!==void 0&&(ce[R.__cacheKey].usedTimes--,Oe.usedTimes===0&&A(S)),R.__cacheKey=ne,R.__webglTexture=ce[ne].texture}return q}function ge(R,S,q){return Math.floor(Math.floor(R/q)/S)}function ae(R,S,q,se){const ne=R.updateRanges;if(ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,q,se,S.data);else{ne.sort((ue,_e)=>ue.start-_e.start);let Oe=0;for(let ue=1;ue<ne.length;ue++){const _e=ne[Oe],Xe=ne[ue],ke=_e.start+_e.count,we=ge(Xe.start,S.width,4),Ye=ge(_e.start,S.width,4);Xe.start<=ke+1&&we===Ye&&ge(Xe.start+Xe.count-1,S.width,4)===we?_e.count=Math.max(_e.count,Xe.start+Xe.count-_e.start):(++Oe,ne[Oe]=Xe)}ne.length=Oe+1;const Ee=i.getParameter(i.UNPACK_ROW_LENGTH),Ge=i.getParameter(i.UNPACK_SKIP_PIXELS),Ne=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ue=0,_e=ne.length;ue<_e;ue++){const Xe=ne[ue],ke=Math.floor(Xe.start/4),we=Math.ceil(Xe.count/4),Ye=ke%S.width,F=Math.floor(ke/S.width),be=we,ve=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Ye,F,be,ve,q,se,S.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Ee),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ge),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ne)}}function V(R,S,q){let se=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=i.TEXTURE_3D);const ce=tt(R,S),ne=S.source;t.bindTexture(se,R.__webglTexture,i.TEXTURE0+q);const Oe=n.get(ne);if(ne.version!==Oe.__version||ce===!0){t.activeTexture(i.TEXTURE0+q);const Ee=pt.getPrimaries(pt.workingColorSpace),Ge=S.colorSpace===Jn?null:pt.getPrimaries(S.colorSpace),Ne=S.colorSpace===Jn||Ee===Ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let ue=T(S.image,!1,r.maxTextureSize);ue=ze(S,ue);const _e=a.convert(S.format,S.colorSpace),Xe=a.convert(S.type);let ke=D(S.internalFormat,_e,Xe,S.colorSpace,S.isVideoTexture);qe(se,S);let we;const Ye=S.mipmaps,F=S.isVideoTexture!==!0,be=Oe.__version===void 0||ce===!0,ve=ne.dataReady,Me=H(S,ue);if(S.isDepthTexture)ke=U(S.format===dr,S.type),be&&(F?t.texStorage2D(i.TEXTURE_2D,1,ke,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,ke,ue.width,ue.height,0,_e,Xe,null));else if(S.isDataTexture)if(Ye.length>0){F&&be&&t.texStorage2D(i.TEXTURE_2D,Me,ke,Ye[0].width,Ye[0].height);for(let he=0,oe=Ye.length;he<oe;he++)we=Ye[he],F?ve&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,we.width,we.height,_e,Xe,we.data):t.texImage2D(i.TEXTURE_2D,he,ke,we.width,we.height,0,_e,Xe,we.data);S.generateMipmaps=!1}else F?(be&&t.texStorage2D(i.TEXTURE_2D,Me,ke,ue.width,ue.height),ve&&ae(S,ue,_e,Xe)):t.texImage2D(i.TEXTURE_2D,0,ke,ue.width,ue.height,0,_e,Xe,ue.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){F&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,ke,Ye[0].width,Ye[0].height,ue.depth);for(let he=0,oe=Ye.length;he<oe;he++)if(we=Ye[he],S.format!==Mn)if(_e!==null)if(F){if(ve)if(S.layerUpdates.size>0){const Ce=ko(we.width,we.height,S.format,S.type);for(const je of S.layerUpdates){const _t=we.data.subarray(je*Ce/we.data.BYTES_PER_ELEMENT,(je+1)*Ce/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,je,we.width,we.height,1,_e,_t)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,ue.depth,_e,we.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,he,ke,we.width,we.height,ue.depth,0,we.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,he,0,0,0,we.width,we.height,ue.depth,_e,Xe,we.data):t.texImage3D(i.TEXTURE_2D_ARRAY,he,ke,we.width,we.height,ue.depth,0,_e,Xe,we.data)}else{F&&be&&t.texStorage2D(i.TEXTURE_2D,Me,ke,Ye[0].width,Ye[0].height);for(let he=0,oe=Ye.length;he<oe;he++)we=Ye[he],S.format!==Mn?_e!==null?F?ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,he,0,0,we.width,we.height,_e,we.data):t.compressedTexImage2D(i.TEXTURE_2D,he,ke,we.width,we.height,0,we.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ve&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,we.width,we.height,_e,Xe,we.data):t.texImage2D(i.TEXTURE_2D,he,ke,we.width,we.height,0,_e,Xe,we.data)}else if(S.isDataArrayTexture)if(F){if(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,ke,ue.width,ue.height,ue.depth),ve)if(S.layerUpdates.size>0){const he=ko(ue.width,ue.height,S.format,S.type);for(const oe of S.layerUpdates){const Ce=ue.data.subarray(oe*he/ue.data.BYTES_PER_ELEMENT,(oe+1)*he/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,ue.width,ue.height,1,_e,Xe,Ce)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,_e,Xe,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,ue.width,ue.height,ue.depth,0,_e,Xe,ue.data);else if(S.isData3DTexture)F?(be&&t.texStorage3D(i.TEXTURE_3D,Me,ke,ue.width,ue.height,ue.depth),ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,_e,Xe,ue.data)):t.texImage3D(i.TEXTURE_3D,0,ke,ue.width,ue.height,ue.depth,0,_e,Xe,ue.data);else if(S.isFramebufferTexture){if(be)if(F)t.texStorage2D(i.TEXTURE_2D,Me,ke,ue.width,ue.height);else{let he=ue.width,oe=ue.height;for(let Ce=0;Ce<Me;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,ke,he,oe,0,_e,Xe,null),he>>=1,oe>>=1}}else if(Ye.length>0){if(F&&be){const he=$e(Ye[0]);t.texStorage2D(i.TEXTURE_2D,Me,ke,he.width,he.height)}for(let he=0,oe=Ye.length;he<oe;he++)we=Ye[he],F?ve&&t.texSubImage2D(i.TEXTURE_2D,he,0,0,_e,Xe,we):t.texImage2D(i.TEXTURE_2D,he,ke,_e,Xe,we);S.generateMipmaps=!1}else if(F){if(be){const he=$e(ue);t.texStorage2D(i.TEXTURE_2D,Me,ke,he.width,he.height)}ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Xe,ue)}else t.texImage2D(i.TEXTURE_2D,0,ke,_e,Xe,ue);_(S)&&d(se),Oe.__version=ne.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Z(R,S,q){if(S.image.length!==6)return;const se=tt(R,S),ce=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+q);const ne=n.get(ce);if(ce.version!==ne.__version||se===!0){t.activeTexture(i.TEXTURE0+q);const Oe=pt.getPrimaries(pt.workingColorSpace),Ee=S.colorSpace===Jn?null:pt.getPrimaries(S.colorSpace),Ge=S.colorSpace===Jn||Oe===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const Ne=S.isCompressedTexture||S.image[0].isCompressedTexture,ue=S.image[0]&&S.image[0].isDataTexture,_e=[];for(let oe=0;oe<6;oe++)!Ne&&!ue?_e[oe]=T(S.image[oe],!0,r.maxCubemapSize):_e[oe]=ue?S.image[oe].image:S.image[oe],_e[oe]=ze(S,_e[oe]);const Xe=_e[0],ke=a.convert(S.format,S.colorSpace),we=a.convert(S.type),Ye=D(S.internalFormat,ke,we,S.colorSpace),F=S.isVideoTexture!==!0,be=ne.__version===void 0||se===!0,ve=ce.dataReady;let Me=H(S,Xe);qe(i.TEXTURE_CUBE_MAP,S);let he;if(Ne){F&&be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Ye,Xe.width,Xe.height);for(let oe=0;oe<6;oe++){he=_e[oe].mipmaps;for(let Ce=0;Ce<he.length;Ce++){const je=he[Ce];S.format!==Mn?ke!==null?F?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce,0,0,je.width,je.height,ke,je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce,Ye,je.width,je.height,0,je.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce,0,0,je.width,je.height,ke,we,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce,Ye,je.width,je.height,0,ke,we,je.data)}}}else{if(he=S.mipmaps,F&&be){he.length>0&&Me++;const oe=$e(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,Ye,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ue){F?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,_e[oe].width,_e[oe].height,ke,we,_e[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ye,_e[oe].width,_e[oe].height,0,ke,we,_e[oe].data);for(let Ce=0;Ce<he.length;Ce++){const _t=he[Ce].image[oe].image;F?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce+1,0,0,_t.width,_t.height,ke,we,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce+1,Ye,_t.width,_t.height,0,ke,we,_t.data)}}else{F?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ke,we,_e[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Ye,ke,we,_e[oe]);for(let Ce=0;Ce<he.length;Ce++){const je=he[Ce];F?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce+1,0,0,ke,we,je.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce+1,Ye,ke,we,je.image[oe])}}}_(S)&&d(i.TEXTURE_CUBE_MAP),ne.__version=ce.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function re(R,S,q,se,ce,ne){const Oe=a.convert(q.format,q.colorSpace),Ee=a.convert(q.type),Ge=D(q.internalFormat,Oe,Ee,q.colorSpace),Ne=n.get(S),ue=n.get(q);if(ue.__renderTarget=S,!Ne.__hasExternalTextures){const _e=Math.max(1,S.width>>ne),Xe=Math.max(1,S.height>>ne);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,ne,Ge,_e,Xe,S.depth,0,Oe,Ee,null):t.texImage2D(ce,ne,Ge,_e,Xe,0,Oe,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Le(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ce,ue.__webglTexture,0,ut(S)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,ce,ue.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(R,S,q){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const se=S.depthTexture,ce=se&&se.isDepthTexture?se.type:null,ne=U(S.stencilBuffer,ce),Oe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=ut(S);Le(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,ne,S.width,S.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,ne,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ne,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Oe,i.RENDERBUFFER,R)}else{const se=S.textures;for(let ce=0;ce<se.length;ce++){const ne=se[ce],Oe=a.convert(ne.format,ne.colorSpace),Ee=a.convert(ne.type),Ge=D(ne.internalFormat,Oe,Ee,ne.colorSpace),Ne=ut(S);q&&Le(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Ge,S.width,S.height):Le(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,Ge,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ge,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function me(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(S.depthTexture);se.__renderTarget=S,(!se.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ie(S.depthTexture,0);const ce=se.__webglTexture,ne=ut(S);if(S.depthTexture.format===hr)Le(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(S.depthTexture.format===dr)Le(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Ue(R){const S=n.get(R),q=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const se=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),se){const ce=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,se.removeEventListener("dispose",ce)};se.addEventListener("dispose",ce),S.__depthDisposeCallback=ce}S.__boundDepthTexture=se}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const se=R.texture.mipmaps;se&&se.length>0?me(S.__webglFramebuffer[0],R):me(S.__webglFramebuffer,R)}else if(q){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]===void 0)S.__webglDepthbuffer[se]=i.createRenderbuffer(),pe(S.__webglDepthbuffer[se],R,!1);else{const ce=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ne)}}else{const se=R.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),pe(S.__webglDepthbuffer,R,!1);else{const ce=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,ne)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(R,S,q){const se=n.get(R);S!==void 0&&re(se.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Ue(R)}function Pe(R){const S=R.texture,q=n.get(R),se=n.get(S);R.addEventListener("dispose",O);const ce=R.textures,ne=R.isWebGLCubeRenderTarget===!0,Oe=ce.length>1;if(Oe||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=S.version,o.memory.textures++),ne){q.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer[Ee]=[];for(let Ge=0;Ge<S.mipmaps.length;Ge++)q.__webglFramebuffer[Ee][Ge]=i.createFramebuffer()}else q.__webglFramebuffer[Ee]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)q.__webglFramebuffer[Ee]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Oe)for(let Ee=0,Ge=ce.length;Ee<Ge;Ee++){const Ne=n.get(ce[Ee]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Le(R)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ce.length;Ee++){const Ge=ce[Ee];q.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Ee]);const Ne=a.convert(Ge.format,Ge.colorSpace),ue=a.convert(Ge.type),_e=D(Ge.internalFormat,Ne,ue,Ge.colorSpace,R.isXRRenderTarget===!0),Xe=ut(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,_e,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,q.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(q.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),qe(i.TEXTURE_CUBE_MAP,S);for(let Ee=0;Ee<6;Ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ge=0;Ge<S.mipmaps.length;Ge++)re(q.__webglFramebuffer[Ee][Ge],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ge);else re(q.__webglFramebuffer[Ee],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);_(S)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let Ee=0,Ge=ce.length;Ee<Ge;Ee++){const Ne=ce[Ee],ue=n.get(Ne);let _e=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,ue.__webglTexture),qe(_e,Ne),re(q.__webglFramebuffer,R,Ne,i.COLOR_ATTACHMENT0+Ee,_e,0),_(Ne)&&d(_e)}t.unbindTexture()}else{let Ee=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ee=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,se.__webglTexture),qe(Ee,S),S.mipmaps&&S.mipmaps.length>0)for(let Ge=0;Ge<S.mipmaps.length;Ge++)re(q.__webglFramebuffer[Ge],R,S,i.COLOR_ATTACHMENT0,Ee,Ge);else re(q.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,Ee,0);_(S)&&d(Ee),t.unbindTexture()}R.depthBuffer&&Ue(R)}function Qe(R){const S=R.textures;for(let q=0,se=S.length;q<se;q++){const ce=S[q];if(_(ce)){const ne=N(R),Oe=n.get(ce).__webglTexture;t.bindTexture(ne,Oe),d(ne),t.unbindTexture()}}}const I=[],et=[];function Je(R){if(R.samples>0){if(Le(R)===!1){const S=R.textures,q=R.width,se=R.height;let ce=i.COLOR_BUFFER_BIT;const ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=n.get(R),Ee=S.length>1;if(Ee)for(let Ne=0;Ne<S.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Ge=R.texture.mipmaps;Ge&&Ge.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ne=0;Ne<S.length;Ne++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),Ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ne]);const ue=n.get(S[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,q,se,0,0,q,se,ce,i.NEAREST),f===!0&&(I.length=0,et.length=0,I.push(i.COLOR_ATTACHMENT0+Ne),R.depthBuffer&&R.resolveDepthBuffer===!1&&(I.push(ne),et.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let Ne=0;Ne<S.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ne]);const ue=n.get(S[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&f){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ut(R){return Math.min(r.maxSamples,R.samples)}function Le(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function bt(R){const S=o.render.frame;p.get(R)!==S&&(p.set(R,S),R.update())}function ze(R,S){const q=R.colorSpace,se=R.format,ce=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||q!==Xi&&q!==Jn&&(pt.getTransfer(q)===Mt?(se!==Mn||ce!==Vn)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",q)),S}function $e(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.setTexture2D=ie,this.setTexture2DArray=z,this.setTexture3D=te,this.setTextureCube=j,this.rebindTextures=xt,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Le}function L0(i,e){function t(n,r=Jn){let a;const o=pt.getTransfer(r);if(n===Vn)return i.UNSIGNED_BYTE;if(n===Ga)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ha)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ml)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_l)return i.BYTE;if(n===vl)return i.SHORT;if(n===ur)return i.UNSIGNED_SHORT;if(n===Va)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Yi)return i.HALF_FLOAT;if(n===bl)return i.ALPHA;if(n===yl)return i.RGB;if(n===Mn)return i.RGBA;if(n===hr)return i.DEPTH_COMPONENT;if(n===dr)return i.DEPTH_STENCIL;if(n===El)return i.RED;if(n===ka)return i.RED_INTEGER;if(n===Wa)return i.RG;if(n===Xa)return i.RG_INTEGER;if(n===qa)return i.RGBA_INTEGER;if(n===$r||n===Jr||n===Qr||n===es)if(o===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===$r)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===es)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===$r)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===es)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===la||n===ca||n===ua||n===fa)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===la)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ca)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ua)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ha||n===da||n===pa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ha||n===da)return o===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===pa)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ma||n===xa||n===ga||n===_a||n===va||n===Ma||n===Sa||n===ba||n===ya||n===Ea||n===Ta||n===Aa||n===wa||n===Ra)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===ma)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xa)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ga)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_a)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===va)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sa)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ba)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ya)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ea)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ta)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Aa)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wa)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ra)return o===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ca||n===Pa||n===Da)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Ca)return o===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pa)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===La||n===Ua||n===Ia||n===Na)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===La)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ia)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Na)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const U0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class N0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Vl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Hn({vertexShader:U0,fragmentShader:I0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ni(new os(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class F0 extends ji{constructor(e,t){super();const n=this;let r=null,a=1,o=null,l="local-floor",f=1,u=null,p=null,m=null,g=null,v=null,y=null;const T=typeof XRWebGLBinding<"u",_=new N0,d={},N=t.getContextAttributes();let D=null,U=null;const H=[],L=[],O=new St;let Y=null;const A=new hn;A.viewport=new Dt;const x=new hn;x.viewport=new Dt;const E=[A,x],G=new ef;let k=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Z=H[V];return Z===void 0&&(Z=new Gs,H[V]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(V){let Z=H[V];return Z===void 0&&(Z=new Gs,H[V]=Z),Z.getGripSpace()},this.getHand=function(V){let Z=H[V];return Z===void 0&&(Z=new Gs,H[V]=Z),Z.getHandSpace()};function ie(V){const Z=L.indexOf(V.inputSource);if(Z===-1)return;const re=H[Z];re!==void 0&&(re.update(V.inputSource,V.frame,u||o),re.dispatchEvent({type:V.type,data:V.inputSource}))}function z(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",te);for(let V=0;V<H.length;V++){const Z=L[V];Z!==null&&(L[V]=null,H[V].disconnect(Z))}k=null,K=null,_.reset();for(const V in d)delete d[V];e.setRenderTarget(D),v=null,g=null,m=null,r=null,U=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(Y),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){a=V,n.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){l=V,n.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return m===null&&T&&(m=new XRWebGLBinding(r,t)),m},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(D=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",z),r.addEventListener("inputsourceschange",te),N.xrCompatible!==!0&&await t.makeXRCompatible(),Y=e.getPixelRatio(),e.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,pe=null,me=null;N.depth&&(me=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=N.stencil?dr:hr,pe=N.stencil?fr:xi);const Ue={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:a};m=this.getBinding(),g=m.createProjectionLayer(Ue),r.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),U=new gi(g.textureWidth,g.textureHeight,{format:Mn,type:Vn,depthTexture:new zl(g.textureWidth,g.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const re={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),U=new gi(v.framebufferWidth,v.framebufferHeight,{format:Mn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(f),u=null,o=await r.requestReferenceSpace(l),ae.setContext(r),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function te(V){for(let Z=0;Z<V.removed.length;Z++){const re=V.removed[Z],pe=L.indexOf(re);pe>=0&&(L[pe]=null,H[pe].disconnect(re))}for(let Z=0;Z<V.added.length;Z++){const re=V.added[Z];let pe=L.indexOf(re);if(pe===-1){for(let Ue=0;Ue<H.length;Ue++)if(Ue>=L.length){L.push(re),pe=Ue;break}else if(L[Ue]===null){L[Ue]=re,pe=Ue;break}if(pe===-1)break}const me=H[pe];me&&me.connect(re)}}const j=new Q,le=new Q;function de(V,Z,re){j.setFromMatrixPosition(Z.matrixWorld),le.setFromMatrixPosition(re.matrixWorld);const pe=j.distanceTo(le),me=Z.projectionMatrix.elements,Ue=re.projectionMatrix.elements,xt=me[14]/(me[10]-1),Pe=me[14]/(me[10]+1),Qe=(me[9]+1)/me[5],I=(me[9]-1)/me[5],et=(me[8]-1)/me[0],Je=(Ue[8]+1)/Ue[0],ut=xt*et,Le=xt*Je,bt=pe/(-et+Je),ze=bt*-et;if(Z.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ze),V.translateZ(bt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),me[10]===-1)V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const $e=xt+bt,R=Pe+bt,S=ut-ze,q=Le+(pe-ze),se=Qe*Pe/R*$e,ce=I*Pe/R*$e;V.projectionMatrix.makePerspective(S,q,se,ce,$e,R),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Ie(V,Z){Z===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Z.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let Z=V.near,re=V.far;_.texture!==null&&(_.depthNear>0&&(Z=_.depthNear),_.depthFar>0&&(re=_.depthFar)),G.near=x.near=A.near=Z,G.far=x.far=A.far=re,(k!==G.near||K!==G.far)&&(r.updateRenderState({depthNear:G.near,depthFar:G.far}),k=G.near,K=G.far),G.layers.mask=V.layers.mask|6,A.layers.mask=G.layers.mask&3,x.layers.mask=G.layers.mask&5;const pe=V.parent,me=G.cameras;Ie(G,pe);for(let Ue=0;Ue<me.length;Ue++)Ie(me[Ue],pe);me.length===2?de(G,A,x):G.projectionMatrix.copy(A.projectionMatrix),qe(V,G,pe)};function qe(V,Z,re){re===null?V.matrix.copy(Z.matrixWorld):(V.matrix.copy(re.matrixWorld),V.matrix.invert(),V.matrix.multiply(Z.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Z.projectionMatrix),V.projectionMatrixInverse.copy(Z.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Fa*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(g===null&&v===null))return f},this.setFoveation=function(V){f=V,g!==null&&(g.fixedFoveation=V),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(G)},this.getCameraTexture=function(V){return d[V]};let tt=null;function ge(V,Z){if(p=Z.getViewerPose(u||o),y=Z,p!==null){const re=p.views;v!==null&&(e.setRenderTargetFramebuffer(U,v.framebuffer),e.setRenderTarget(U));let pe=!1;re.length!==G.cameras.length&&(G.cameras.length=0,pe=!0);for(let Pe=0;Pe<re.length;Pe++){const Qe=re[Pe];let I=null;if(v!==null)I=v.getViewport(Qe);else{const Je=m.getViewSubImage(g,Qe);I=Je.viewport,Pe===0&&(e.setRenderTargetTextures(U,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(U))}let et=E[Pe];et===void 0&&(et=new hn,et.layers.enable(Pe),et.viewport=new Dt,E[Pe]=et),et.matrix.fromArray(Qe.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(Qe.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(I.x,I.y,I.width,I.height),Pe===0&&(G.matrix.copy(et.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),pe===!0&&G.cameras.push(et)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){m=n.getBinding();const Pe=m.getDepthInformation(re[0]);Pe&&Pe.isValid&&Pe.texture&&_.init(Pe,r.renderState)}if(me&&me.includes("camera-access")&&T){e.state.unbindTexture(),m=n.getBinding();for(let Pe=0;Pe<re.length;Pe++){const Qe=re[Pe].camera;if(Qe){let I=d[Qe];I||(I=new Vl,d[Qe]=I);const et=m.getCameraImage(Qe);I.sourceTexture=et}}}}for(let re=0;re<H.length;re++){const pe=L[re],me=H[re];pe!==null&&me!==void 0&&me.update(pe,Z,u||o)}tt&&tt(V,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),y=null}const ae=new Gl;ae.setAnimationLoop(ge),this.setAnimationLoop=function(V){tt=V},this.dispose=function(){}}}const ui=new Gn,O0=new Ut;function B0(i,e){function t(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function n(_,d){d.color.getRGB(_.fogColor.value,Il(i)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function r(_,d,N,D,U){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(_,d):d.isMeshToonMaterial?(a(_,d),m(_,d)):d.isMeshPhongMaterial?(a(_,d),p(_,d)):d.isMeshStandardMaterial?(a(_,d),g(_,d),d.isMeshPhysicalMaterial&&v(_,d,U)):d.isMeshMatcapMaterial?(a(_,d),y(_,d)):d.isMeshDepthMaterial?a(_,d):d.isMeshDistanceMaterial?(a(_,d),T(_,d)):d.isMeshNormalMaterial?a(_,d):d.isLineBasicMaterial?(o(_,d),d.isLineDashedMaterial&&l(_,d)):d.isPointsMaterial?f(_,d,N,D):d.isSpriteMaterial?u(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,t(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===Jt&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,t(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===Jt&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,t(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,t(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const N=e.get(d),D=N.envMap,U=N.envMapRotation;D&&(_.envMap.value=D,ui.copy(U),ui.x*=-1,ui.y*=-1,ui.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),_.envMapRotation.value.setFromMatrix4(O0.makeRotationFromEuler(ui)),_.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap&&(_.lightMap.value=d.lightMap,_.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,_.lightMapTransform)),d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,_.aoMapTransform))}function o(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform))}function l(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function f(_,d,N,D){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*N,_.scale.value=D*.5,d.map&&(_.map.value=d.map,t(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function u(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function p(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function m(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function g(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,_.roughnessMapTransform)),d.envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function v(_,d,N){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Jt&&_.clearcoatNormalScale.value.negate())),d.dispersion>0&&(_.dispersion.value=d.dispersion),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=N.texture,_.transmissionSamplerSize.value.set(N.width,N.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,d){d.matcap&&(_.matcap.value=d.matcap)}function T(_,d){const N=e.get(d).light;_.referencePosition.value.setFromMatrixPosition(N.matrixWorld),_.nearDistance.value=N.shadow.camera.near,_.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function z0(i,e,t,n){let r={},a={},o=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(N,D){const U=D.program;n.uniformBlockBinding(N,U)}function u(N,D){let U=r[N.id];U===void 0&&(y(N),U=p(N),r[N.id]=U,N.addEventListener("dispose",_));const H=D.program;n.updateUBOMapping(N,H);const L=e.render.frame;a[N.id]!==L&&(g(N),a[N.id]=L)}function p(N){const D=m();N.__bindingPointIndex=D;const U=i.createBuffer(),H=N.__size,L=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,U),i.bufferData(i.UNIFORM_BUFFER,H,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,U),U}function m(){for(let N=0;N<l;N++)if(o.indexOf(N)===-1)return o.push(N),N;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(N){const D=r[N.id],U=N.uniforms,H=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let L=0,O=U.length;L<O;L++){const Y=Array.isArray(U[L])?U[L]:[U[L]];for(let A=0,x=Y.length;A<x;A++){const E=Y[A];if(v(E,L,A,H)===!0){const G=E.__offset,k=Array.isArray(E.value)?E.value:[E.value];let K=0;for(let ie=0;ie<k.length;ie++){const z=k[ie],te=T(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,G+K,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,K),K+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function v(N,D,U,H){const L=N.value,O=D+"_"+U;if(H[O]===void 0)return typeof L=="number"||typeof L=="boolean"?H[O]=L:H[O]=L.clone(),!0;{const Y=H[O];if(typeof L=="number"||typeof L=="boolean"){if(Y!==L)return H[O]=L,!0}else if(Y.equals(L)===!1)return Y.copy(L),!0}return!1}function y(N){const D=N.uniforms;let U=0;const H=16;for(let O=0,Y=D.length;O<Y;O++){const A=Array.isArray(D[O])?D[O]:[D[O]];for(let x=0,E=A.length;x<E;x++){const G=A[x],k=Array.isArray(G.value)?G.value:[G.value];for(let K=0,ie=k.length;K<ie;K++){const z=k[K],te=T(z),j=U%H,le=j%te.boundary,de=j+le;U+=le,de!==0&&H-de<te.storage&&(U+=H-de),G.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=U,U+=te.storage}}}const L=U%H;return L>0&&(U+=H-L),N.__size=U,N.__cache={},this}function T(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):it("WebGLRenderer: Unsupported uniform value type.",N),D}function _(N){const D=N.target;D.removeEventListener("dispose",_);const U=o.indexOf(D.__bindingPointIndex);o.splice(U,1),i.deleteBuffer(r[D.id]),delete r[D.id],delete a[D.id]}function d(){for(const N in r)i.deleteBuffer(r[N]);o=[],r={},a={}}return{bind:f,update:u,dispose:d}}const V0=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Un=null;function G0(){return Un===null&&(Un=new qu(V0,32,32,Wa,Yi),Un.minFilter=dn,Un.magFilter=dn,Un.wrapS=Fn,Un.wrapT=Fn,Un.generateMipmaps=!1,Un.needsUpdate=!0),Un}class H0{constructor(e={}){const{canvas:t=_u(),context:n=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=o;const y=new Set([qa,Xa,ka]),T=new Set([Vn,xi,ur,fr,Ga,Ha]),_=new Uint32Array(4),d=new Int32Array(4);let N=null,D=null;const U=[],H=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let O=!1;this._outputColorSpace=fn;let Y=0,A=0,x=null,E=-1,G=null;const k=new Dt,K=new Dt;let ie=null;const z=new gt(0);let te=0,j=t.width,le=t.height,de=1,Ie=null,qe=null;const tt=new Dt(0,0,j,le),ge=new Dt(0,0,j,le);let ae=!1;const V=new Ol;let Z=!1,re=!1;const pe=new Ut,me=new Q,Ue=new Dt,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function Qe(){return x===null?de:1}let I=n;function et(b,W){return t.getContext(b,W)}try{const b={alpha:!0,depth:r,stencil:a,antialias:l,premultipliedAlpha:f,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${za}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",Ce,!1),I===null){const W="webgl2";if(I=et(W,b),I===null)throw et(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw b("WebGLRenderer: "+b.message),b}let Je,ut,Le,bt,ze,$e,R,S,q,se,ce,ne,Oe,Ee,Ge,Ne,ue,_e,Xe,ke,we,Ye,F,be;function ve(){Je=new Zd(I),Je.init(),Ye=new L0(I,Je),ut=new Gd(I,Je,e,Ye),Le=new P0(I,Je),ut.reversedDepthBuffer&&g&&Le.buffers.depth.setReversed(!0),bt=new Qd(I),ze=new g0,$e=new D0(I,Je,Le,ze,ut,Ye,bt),R=new kd(L),S=new Kd(L),q=new nf(I),F=new zd(I,q),se=new $d(I,q,bt,F),ce=new tp(I,se,q,bt),Xe=new ep(I,ut,$e),Ne=new Hd(ze),ne=new x0(L,R,S,Je,ut,F,Ne),Oe=new B0(L,ze),Ee=new v0,Ge=new T0(Je),_e=new Bd(L,R,S,Le,ce,v,f),ue=new R0(L,ce,ut),be=new z0(I,bt,ut,Le),ke=new Vd(I,Je,bt),we=new Jd(I,Je,bt),bt.programs=ne.programs,L.capabilities=ut,L.extensions=Je,L.properties=ze,L.renderLists=Ee,L.shadowMap=ue,L.state=Le,L.info=bt}ve();const Me=new F0(L,I);this.xr=Me,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=Je.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Je.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(b){b!==void 0&&(de=b,this.setSize(j,le,!1))},this.getSize=function(b){return b.set(j,le)},this.setSize=function(b,W,J=!0){if(Me.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,le=W,t.width=Math.floor(b*de),t.height=Math.floor(W*de),J===!0&&(t.style.width=b+"px",t.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(j*de,le*de).floor()},this.setDrawingBufferSize=function(b,W,J){j=b,le=W,de=J,t.width=Math.floor(b*J),t.height=Math.floor(W*J),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(k)},this.getViewport=function(b){return b.copy(tt)},this.setViewport=function(b,W,J,ee){b.isVector4?tt.set(b.x,b.y,b.z,b.w):tt.set(b,W,J,ee),Le.viewport(k.copy(tt).multiplyScalar(de).round())},this.getScissor=function(b){return b.copy(ge)},this.setScissor=function(b,W,J,ee){b.isVector4?ge.set(b.x,b.y,b.z,b.w):ge.set(b,W,J,ee),Le.scissor(K.copy(ge).multiplyScalar(de).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(b){Le.setScissorTest(ae=b)},this.setOpaqueSort=function(b){Ie=b},this.setTransparentSort=function(b){qe=b},this.getClearColor=function(b){return b.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(b=!0,W=!0,J=!0){let ee=0;if(b){let X=!1;if(x!==null){const xe=x.texture.format;X=y.has(xe)}if(X){const xe=x.texture.type,Se=T.has(xe),De=_e.getClearColor(),Re=_e.getClearAlpha(),Fe=De.r,We=De.g,Ve=De.b;Se?(_[0]=Fe,_[1]=We,_[2]=Ve,_[3]=Re,I.clearBufferuiv(I.COLOR,0,_)):(d[0]=Fe,d[1]=We,d[2]=Ve,d[3]=Re,I.clearBufferiv(I.COLOR,0,d))}else ee|=I.COLOR_BUFFER_BIT}W&&(ee|=I.DEPTH_BUFFER_BIT),J&&(ee|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",Ce,!1),_e.dispose(),Ee.dispose(),Ge.dispose(),ze.dispose(),R.dispose(),S.dispose(),ce.dispose(),F.dispose(),be.dispose(),ne.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Mr),Me.removeEventListener("sessionend",on),qt.stop()};function he(b){b.preventDefault(),Eo("WebGLRenderer: Context Lost."),O=!0}function oe(){Eo("WebGLRenderer: Context Restored."),O=!1;const b=bt.autoReset,W=ue.enabled,J=ue.autoUpdate,ee=ue.needsUpdate,X=ue.type;ve(),bt.autoReset=b,ue.enabled=W,ue.autoUpdate=J,ue.needsUpdate=ee,ue.type=X}function Ce(b){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function je(b){const W=b.target;W.removeEventListener("dispose",je),_t(W)}function _t(b){ft(b),ze.remove(b)}function ft(b){const W=ze.get(b).programs;W!==void 0&&(W.forEach(function(J){ne.releaseProgram(J)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,J,ee,X,xe){W===null&&(W=xt);const Se=X.isMesh&&X.matrixWorld.determinant()<0,De=ri(b,W,J,ee,X);Le.setMaterial(ee,Se);let Re=J.index,Fe=1;if(ee.wireframe===!0){if(Re=se.getWireframeAttribute(J),Re===void 0)return;Fe=2}const We=J.drawRange,Ve=J.attributes.position;let at=We.start*Fe,ht=(We.start+We.count)*Fe;xe!==null&&(at=Math.max(at,xe.start*Fe),ht=Math.min(ht,(xe.start+xe.count)*Fe)),Re!==null?(at=Math.max(at,0),ht=Math.min(ht,Re.count)):Ve!=null&&(at=Math.max(at,0),ht=Math.min(ht,Ve.count));const Rt=ht-at;if(Rt<0||Rt===1/0)return;F.setup(X,ee,De,J,Re);let Ct,mt=ke;if(Re!==null&&(Ct=q.get(Re),mt=we,mt.setIndex(Ct)),X.isMesh)ee.wireframe===!0?(Le.setLineWidth(ee.wireframeLinewidth*Qe()),mt.setMode(I.LINES)):mt.setMode(I.TRIANGLES);else if(X.isLine){let He=ee.linewidth;He===void 0&&(He=1),Le.setLineWidth(He*Qe()),X.isLineSegments?mt.setMode(I.LINES):X.isLineLoop?mt.setMode(I.LINE_LOOP):mt.setMode(I.LINE_STRIP)}else X.isPoints?mt.setMode(I.POINTS):X.isSprite&&mt.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)pr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))mt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const He=X._multiDrawStarts,yt=X._multiDrawCounts,lt=X._multiDrawCount,vt=Re?q.get(Re).bytesPerElement:1,wn=ze.get(ee).currentProgram.getUniforms();for(let Ht=0;Ht<lt;Ht++)wn.setValue(I,"_gl_DrawID",Ht),mt.render(He[Ht]/vt,yt[Ht])}else if(X.isInstancedMesh)mt.renderInstances(at,Rt,X.count);else if(J.isInstancedBufferGeometry){const He=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,yt=Math.min(J.instanceCount,He);mt.renderInstances(at,Rt,yt)}else mt.render(at,Rt)};function Xt(b,W,J){b.transparent===!0&&b.side===Nn&&b.forceSinglePass===!1?(b.side=Jt,b.needsUpdate=!0,An(b,W,J),b.side=ti,b.needsUpdate=!0,An(b,W,J),b.side=Nn):An(b,W,J)}this.compile=function(b,W,J=null){J===null&&(J=b),D=Ge.get(J),D.init(W),H.push(D),J.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(D.pushLight(X),X.castShadow&&D.pushShadow(X))}),b!==J&&b.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(D.pushLight(X),X.castShadow&&D.pushShadow(X))}),D.setupLights();const ee=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xe=X.material;if(xe)if(Array.isArray(xe))for(let Se=0;Se<xe.length;Se++){const De=xe[Se];Xt(De,J,X),ee.add(De)}else Xt(xe,J,X),ee.add(xe)}),D=H.pop(),ee},this.compileAsync=function(b,W,J=null){const ee=this.compile(b,W,J);return new Promise(X=>{function xe(){if(ee.forEach(function(Se){ze.get(Se).currentProgram.isReady()&&ee.delete(Se)}),ee.size===0){X(b);return}setTimeout(xe,10)}Je.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let en=null;function kn(b){en&&en(b)}function Mr(){qt.stop()}function on(){qt.start()}const qt=new Gl;qt.setAnimationLoop(kn),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(b){en=b,Me.setAnimationLoop(b),b===null?qt.stop():qt.start()},Me.addEventListener("sessionstart",Mr),Me.addEventListener("sessionend",on),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(W),W=Me.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,W,x),D=Ge.get(b,H.length),D.init(W),H.push(D),pe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),V.setFromProjectionMatrix(pe,En,W.reversedDepth),re=this.localClippingEnabled,Z=Ne.init(this.clippingPlanes,re),N=Ee.get(b,U.length),N.init(),U.push(N),Me.enabled===!0&&Me.isPresenting===!0){const xe=L.xr.getDepthSensingMesh();xe!==null&&_i(xe,W,-1/0,L.sortObjects)}_i(b,W,0,L.sortObjects),N.finish(),L.sortObjects===!0&&N.sort(Ie,qe),Pe=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,Pe&&_e.addToRenderList(N,b),this.info.render.frame++,Z===!0&&Ne.beginShadows();const J=D.state.shadowsArray;ue.render(J,b,W),Z===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=N.opaque,X=N.transmissive;if(D.setupLights(),W.isArrayCamera){const xe=W.cameras;if(X.length>0)for(let Se=0,De=xe.length;Se<De;Se++){const Re=xe[Se];tn(ee,X,b,Re)}Pe&&_e.render(b);for(let Se=0,De=xe.length;Se<De;Se++){const Re=xe[Se];wt(N,b,Re,Re.viewport)}}else X.length>0&&tn(ee,X,b,W),Pe&&_e.render(b),wt(N,b,W);x!==null&&A===0&&($e.updateMultisampleRenderTarget(x),$e.updateRenderTargetMipmap(x)),b.isScene===!0&&b.onAfterRender(L,b,W),F.resetDefaultState(),E=-1,G=null,H.pop(),H.length>0?(D=H[H.length-1],Z===!0&&Ne.setGlobalState(L.clippingPlanes,D.state.camera)):D=null,U.pop(),U.length>0?N=U[U.length-1]:N=null};function _i(b,W,J,ee){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)D.pushLight(b),b.castShadow&&D.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||V.intersectsSprite(b)){ee&&Ue.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pe);const Se=ce.update(b),De=b.material;De.visible&&N.push(b,Se,De,J,Ue.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||V.intersectsObject(b))){const Se=ce.update(b),De=b.material;if(ee&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ue.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ue.copy(Se.boundingSphere.center)),Ue.applyMatrix4(b.matrixWorld).applyMatrix4(pe)),Array.isArray(De)){const Re=Se.groups;for(let Fe=0,We=Re.length;Fe<We;Fe++){const Ve=Re[Fe],at=De[Ve.materialIndex];at&&at.visible&&N.push(b,Se,at,J,Ue.z,Ve)}}else De.visible&&N.push(b,Se,De,J,Ue.z,null)}}const xe=b.children;for(let Se=0,De=xe.length;Se<De;Se++)_i(xe[Se],W,J,ee)}function wt(b,W,J,ee){const{opaque:X,transmissive:xe,transparent:Se}=b;D.setupLightsView(J),Z===!0&&Ne.setGlobalState(L.clippingPlanes,J),ee&&Le.viewport(k.copy(ee)),X.length>0&&Wn(X,W,J),xe.length>0&&Wn(xe,W,J),Se.length>0&&Wn(Se,W,J),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function tn(b,W,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[ee.id]===void 0&&(D.state.transmissionRenderTarget[ee.id]=new gi(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Yi:Vn,minFilter:pi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace}));const xe=D.state.transmissionRenderTarget[ee.id],Se=ee.viewport||k;xe.setSize(Se.z*L.transmissionResolutionScale,Se.w*L.transmissionResolutionScale);const De=L.getRenderTarget(),Re=L.getActiveCubeFace(),Fe=L.getActiveMipmapLevel();L.setRenderTarget(xe),L.getClearColor(z),te=L.getClearAlpha(),te<1&&L.setClearColor(16777215,.5),L.clear(),Pe&&_e.render(J);const We=L.toneMapping;L.toneMapping=ei;const Ve=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),D.setupLightsView(ee),Z===!0&&Ne.setGlobalState(L.clippingPlanes,ee),Wn(b,J,ee),$e.updateMultisampleRenderTarget(xe),$e.updateRenderTargetMipmap(xe),Je.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let ht=0,Rt=W.length;ht<Rt;ht++){const Ct=W[ht],{object:mt,geometry:He,material:yt,group:lt}=Ct;if(yt.side===Nn&&mt.layers.test(ee.layers)){const vt=yt.side;yt.side=Jt,yt.needsUpdate=!0,Sr(mt,J,ee,He,yt,lt),yt.side=vt,yt.needsUpdate=!0,at=!0}}at===!0&&($e.updateMultisampleRenderTarget(xe),$e.updateRenderTargetMipmap(xe))}L.setRenderTarget(De,Re,Fe),L.setClearColor(z,te),Ve!==void 0&&(ee.viewport=Ve),L.toneMapping=We}function Wn(b,W,J){const ee=W.isScene===!0?W.overrideMaterial:null;for(let X=0,xe=b.length;X<xe;X++){const Se=b[X],{object:De,geometry:Re,group:Fe}=Se;let We=Se.material;We.allowOverride===!0&&ee!==null&&(We=ee),De.layers.test(J.layers)&&Sr(De,W,J,Re,We,Fe)}}function Sr(b,W,J,ee,X,xe){b.onBeforeRender(L,W,J,ee,X,xe),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(L,W,J,ee,b,xe),X.transparent===!0&&X.side===Nn&&X.forceSinglePass===!1?(X.side=Jt,X.needsUpdate=!0,L.renderBufferDirect(J,W,ee,X,b,xe),X.side=ti,X.needsUpdate=!0,L.renderBufferDirect(J,W,ee,X,b,xe),X.side=Nn):L.renderBufferDirect(J,W,ee,X,b,xe),b.onAfterRender(L,W,J,ee,X,xe)}function An(b,W,J){W.isScene!==!0&&(W=xt);const ee=ze.get(b),X=D.state.lights,xe=D.state.shadowsArray,Se=X.state.version,De=ne.getParameters(b,X.state,xe,W,J),Re=ne.getProgramCacheKey(De);let Fe=ee.programs;ee.environment=b.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(b.isMeshStandardMaterial?S:R).get(b.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,Fe===void 0&&(b.addEventListener("dispose",je),Fe=new Map,ee.programs=Fe);let We=Fe.get(Re);if(We!==void 0){if(ee.currentProgram===We&&ee.lightsStateVersion===Se)return ii(b,De),We}else De.uniforms=ne.getUniforms(b),b.onBeforeCompile(De,L),We=ne.acquireProgram(De,Re),Fe.set(Re,We),ee.uniforms=De.uniforms;const Ve=ee.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ve.clippingPlanes=Ne.uniform),ii(b,De),ee.needsLights=Zi(b),ee.lightsStateVersion=Se,ee.needsLights&&(Ve.ambientLightColor.value=X.state.ambient,Ve.lightProbe.value=X.state.probe,Ve.directionalLights.value=X.state.directional,Ve.directionalLightShadows.value=X.state.directionalShadow,Ve.spotLights.value=X.state.spot,Ve.spotLightShadows.value=X.state.spotShadow,Ve.rectAreaLights.value=X.state.rectArea,Ve.ltc_1.value=X.state.rectAreaLTC1,Ve.ltc_2.value=X.state.rectAreaLTC2,Ve.pointLights.value=X.state.point,Ve.pointLightShadows.value=X.state.pointShadow,Ve.hemisphereLights.value=X.state.hemi,Ve.directionalShadowMap.value=X.state.directionalShadowMap,Ve.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ve.spotShadowMap.value=X.state.spotShadowMap,Ve.spotLightMatrix.value=X.state.spotLightMatrix,Ve.spotLightMap.value=X.state.spotLightMap,Ve.pointShadowMap.value=X.state.pointShadowMap,Ve.pointShadowMatrix.value=X.state.pointShadowMatrix),ee.currentProgram=We,ee.uniformsList=null,We}function vi(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=ts.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function ii(b,W){const J=ze.get(b);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function ri(b,W,J,ee,X){W.isScene!==!0&&(W=xt),$e.resetTextureUnits();const xe=W.fog,Se=ee.isMeshStandardMaterial?W.environment:null,De=x===null?L.outputColorSpace:x.isXRRenderTarget===!0?x.texture.colorSpace:Xi,Re=(ee.isMeshStandardMaterial?S:R).get(ee.envMap||Se),Fe=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,We=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ve=!!J.morphAttributes.position,at=!!J.morphAttributes.normal,ht=!!J.morphAttributes.color;let Rt=ei;ee.toneMapped&&(x===null||x.isXRRenderTarget===!0)&&(Rt=L.toneMapping);const Ct=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,mt=Ct!==void 0?Ct.length:0,He=ze.get(ee),yt=D.state.lights;if(Z===!0&&(re===!0||b!==G)){const Bt=b===G&&ee.id===E;Ne.setState(ee,b,Bt)}let lt=!1;ee.version===He.__version?(He.needsLights&&He.lightsStateVersion!==yt.state.version||He.outputColorSpace!==De||X.isBatchedMesh&&He.batching===!1||!X.isBatchedMesh&&He.batching===!0||X.isBatchedMesh&&He.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&He.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&He.instancing===!1||!X.isInstancedMesh&&He.instancing===!0||X.isSkinnedMesh&&He.skinning===!1||!X.isSkinnedMesh&&He.skinning===!0||X.isInstancedMesh&&He.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&He.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&He.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&He.instancingMorph===!1&&X.morphTexture!==null||He.envMap!==Re||ee.fog===!0&&He.fog!==xe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Ne.numPlanes||He.numIntersection!==Ne.numIntersection)||He.vertexAlphas!==Fe||He.vertexTangents!==We||He.morphTargets!==Ve||He.morphNormals!==at||He.morphColors!==ht||He.toneMapping!==Rt||He.morphTargetsCount!==mt)&&(lt=!0):(lt=!0,He.__version=ee.version);let vt=He.currentProgram;lt===!0&&(vt=An(ee,W,X));let wn=!1,Ht=!1,bn=!1;const Et=vt.getUniforms(),Ot=He.uniforms;if(Le.useProgram(vt.program)&&(wn=!0,Ht=!0,bn=!0),ee.id!==E&&(E=ee.id,Ht=!0),wn||G!==b){Le.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Et.setValue(I,"projectionMatrix",b.projectionMatrix),Et.setValue(I,"viewMatrix",b.matrixWorldInverse);const zt=Et.map.cameraPosition;zt!==void 0&&zt.setValue(I,me.setFromMatrixPosition(b.matrixWorld)),ut.logarithmicDepthBuffer&&Et.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Et.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),G!==b&&(G=b,Ht=!0,bn=!0)}if(X.isSkinnedMesh){Et.setOptional(I,X,"bindMatrix"),Et.setOptional(I,X,"bindMatrixInverse");const Bt=X.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Et.setValue(I,"boneTexture",Bt.boneTexture,$e))}X.isBatchedMesh&&(Et.setOptional(I,X,"batchingTexture"),Et.setValue(I,"batchingTexture",X._matricesTexture,$e),Et.setOptional(I,X,"batchingIdTexture"),Et.setValue(I,"batchingIdTexture",X._indirectTexture,$e),Et.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&Et.setValue(I,"batchingColorTexture",X._colorsTexture,$e));const Kt=J.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&Xe.update(X,J,vt),(Ht||He.receiveShadow!==X.receiveShadow)&&(He.receiveShadow=X.receiveShadow,Et.setValue(I,"receiveShadow",X.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Ot.envMap.value=Re,Ot.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&W.environment!==null&&(Ot.envMapIntensity.value=W.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=G0()),Ht&&(Et.setValue(I,"toneMappingExposure",L.toneMappingExposure),He.needsLights&&br(Ot,bn),xe&&ee.fog===!0&&Oe.refreshFogUniforms(Ot,xe),Oe.refreshMaterialUniforms(Ot,ee,de,le,D.state.transmissionRenderTarget[b.id]),ts.upload(I,vi(He),Ot,$e)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(ts.upload(I,vi(He),Ot,$e),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Et.setValue(I,"center",X.center),Et.setValue(I,"modelViewMatrix",X.modelViewMatrix),Et.setValue(I,"normalMatrix",X.normalMatrix),Et.setValue(I,"modelMatrix",X.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Bt=ee.uniformsGroups;for(let zt=0,Mi=Bt.length;zt<Mi;zt++){const ln=Bt[zt];be.update(ln,vt),be.bind(ln,vt)}}return vt}function br(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function Zi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(b,W,J){const ee=ze.get(b);ee.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),ze.get(b.texture).__webglTexture=W,ze.get(b.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:J,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,W){const J=ze.get(b);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0};const $i=I.createFramebuffer();this.setRenderTarget=function(b,W=0,J=0){x=b,Y=W,A=J;let ee=!0,X=null,xe=!1,Se=!1;if(b){const Re=ze.get(b);if(Re.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(I.FRAMEBUFFER,null),ee=!1;else if(Re.__webglFramebuffer===void 0)$e.setupRenderTarget(b);else if(Re.__hasExternalTextures)$e.rebindTextures(b,ze.get(b.texture).__webglTexture,ze.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ve=b.depthTexture;if(Re.__boundDepthTexture!==Ve){if(Ve!==null&&ze.has(Ve)&&(b.width!==Ve.image.width||b.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(b)}}const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Se=!0);const We=ze.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(We[W])?X=We[W][J]:X=We[W],xe=!0):b.samples>0&&$e.useMultisampledRTT(b)===!1?X=ze.get(b).__webglMultisampledFramebuffer:Array.isArray(We)?X=We[J]:X=We,k.copy(b.viewport),K.copy(b.scissor),ie=b.scissorTest}else k.copy(tt).multiplyScalar(de).floor(),K.copy(ge).multiplyScalar(de).floor(),ie=ae;if(J!==0&&(X=$i),Le.bindFramebuffer(I.FRAMEBUFFER,X)&&ee&&Le.drawBuffers(b,X),Le.viewport(k),Le.scissor(K),Le.setScissorTest(ie),xe){const Re=ze.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,Re.__webglTexture,J)}else if(Se){const Re=W;for(let Fe=0;Fe<b.textures.length;Fe++){const We=ze.get(b.textures[Fe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Fe,We.__webglTexture,J,Re)}}else if(b!==null&&J!==0){const Re=ze.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Re.__webglTexture,J)}E=-1},this.readRenderTargetPixels=function(b,W,J,ee,X,xe,Se,De=0){if(!(b&&b.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re){Le.bindFramebuffer(I.FRAMEBUFFER,Re);try{const Fe=b.textures[De],We=Fe.format,Ve=Fe.type;if(!ut.textureFormatReadable(We)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Ve)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-ee&&J>=0&&J<=b.height-X&&(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+De),I.readPixels(W,J,ee,X,Ye.convert(We),Ye.convert(Ve),xe))}finally{const Fe=x!==null?ze.get(x).__webglFramebuffer:null;Le.bindFramebuffer(I.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(b,W,J,ee,X,xe,Se,De=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=ze.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Re=Re[Se]),Re)if(W>=0&&W<=b.width-ee&&J>=0&&J<=b.height-X){Le.bindFramebuffer(I.FRAMEBUFFER,Re);const Fe=b.textures[De],We=Fe.format,Ve=Fe.type;if(!ut.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,at),I.bufferData(I.PIXEL_PACK_BUFFER,xe.byteLength,I.STREAM_READ),b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+De),I.readPixels(W,J,ee,X,Ye.convert(We),Ye.convert(Ve),0);const ht=x!==null?ze.get(x).__webglFramebuffer:null;Le.bindFramebuffer(I.FRAMEBUFFER,ht);const Rt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await vu(I,Rt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,at),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,xe),I.deleteBuffer(at),I.deleteSync(Rt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,W=null,J=0){const ee=Math.pow(2,-J),X=Math.floor(b.image.width*ee),xe=Math.floor(b.image.height*ee),Se=W!==null?W.x:0,De=W!==null?W.y:0;$e.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,J,0,0,Se,De,X,xe),Le.unbindTexture()};const yr=I.createFramebuffer(),nn=I.createFramebuffer();this.copyTextureToTexture=function(b,W,J=null,ee=null,X=0,xe=null){xe===null&&(X!==0?(pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=X,X=0):xe=0);let Se,De,Re,Fe,We,Ve,at,ht,Rt;const Ct=b.isCompressedTexture?b.mipmaps[xe]:b.image;if(J!==null)Se=J.max.x-J.min.x,De=J.max.y-J.min.y,Re=J.isBox3?J.max.z-J.min.z:1,Fe=J.min.x,We=J.min.y,Ve=J.isBox3?J.min.z:0;else{const Kt=Math.pow(2,-X);Se=Math.floor(Ct.width*Kt),De=Math.floor(Ct.height*Kt),b.isDataArrayTexture?Re=Ct.depth:b.isData3DTexture?Re=Math.floor(Ct.depth*Kt):Re=1,Fe=0,We=0,Ve=0}ee!==null?(at=ee.x,ht=ee.y,Rt=ee.z):(at=0,ht=0,Rt=0);const mt=Ye.convert(W.format),He=Ye.convert(W.type);let yt;W.isData3DTexture?($e.setTexture3D(W,0),yt=I.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?($e.setTexture2DArray(W,0),yt=I.TEXTURE_2D_ARRAY):($e.setTexture2D(W,0),yt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);const lt=I.getParameter(I.UNPACK_ROW_LENGTH),vt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),wn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ht=I.getParameter(I.UNPACK_SKIP_ROWS),bn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ct.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ct.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Fe),I.pixelStorei(I.UNPACK_SKIP_ROWS,We),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ve);const Et=b.isDataArrayTexture||b.isData3DTexture,Ot=W.isDataArrayTexture||W.isData3DTexture;if(b.isDepthTexture){const Kt=ze.get(b),Bt=ze.get(W),zt=ze.get(Kt.__renderTarget),Mi=ze.get(Bt.__renderTarget);Le.bindFramebuffer(I.READ_FRAMEBUFFER,zt.__webglFramebuffer),Le.bindFramebuffer(I.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let ln=0;ln<Re;ln++)Et&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ze.get(b).__webglTexture,X,Ve+ln),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ze.get(W).__webglTexture,xe,Rt+ln)),I.blitFramebuffer(Fe,We,Se,De,at,ht,Se,De,I.DEPTH_BUFFER_BIT,I.NEAREST);Le.bindFramebuffer(I.READ_FRAMEBUFFER,null),Le.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||ze.has(b)){const Kt=ze.get(b),Bt=ze.get(W);Le.bindFramebuffer(I.READ_FRAMEBUFFER,yr),Le.bindFramebuffer(I.DRAW_FRAMEBUFFER,nn);for(let zt=0;zt<Re;zt++)Et?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Kt.__webglTexture,X,Ve+zt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Kt.__webglTexture,X),Ot?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Bt.__webglTexture,xe,Rt+zt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Bt.__webglTexture,xe),X!==0?I.blitFramebuffer(Fe,We,Se,De,at,ht,Se,De,I.COLOR_BUFFER_BIT,I.NEAREST):Ot?I.copyTexSubImage3D(yt,xe,at,ht,Rt+zt,Fe,We,Se,De):I.copyTexSubImage2D(yt,xe,at,ht,Fe,We,Se,De);Le.bindFramebuffer(I.READ_FRAMEBUFFER,null),Le.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ot?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(yt,xe,at,ht,Rt,Se,De,Re,mt,He,Ct.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(yt,xe,at,ht,Rt,Se,De,Re,mt,Ct.data):I.texSubImage3D(yt,xe,at,ht,Rt,Se,De,Re,mt,He,Ct):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,xe,at,ht,Se,De,mt,He,Ct.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,xe,at,ht,Ct.width,Ct.height,mt,Ct.data):I.texSubImage2D(I.TEXTURE_2D,xe,at,ht,Se,De,mt,He,Ct);I.pixelStorei(I.UNPACK_ROW_LENGTH,lt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,vt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,wn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ht),I.pixelStorei(I.UNPACK_SKIP_IMAGES,bn),xe===0&&W.generateMipmaps&&I.generateMipmap(yt),Le.unbindTexture()},this.initRenderTarget=function(b){ze.get(b).__webglFramebuffer===void 0&&$e.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?$e.setTextureCube(b,0):b.isData3DTexture?$e.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$e.setTexture2DArray(b,0):$e.setTexture2D(b,0),Le.unbindTexture()},this.resetState=function(){Y=0,A=0,x=null,Le.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}}var k0={};(function(){var i;function e(s){var c=0;return function(){return c<s.length?{done:!1,value:s[c++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,c,h){return s==Array.prototype||s==Object.prototype||(s[c]=h.value),s};function n(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof zi=="object"&&zi];for(var c=0;c<s.length;++c){var h=s[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function a(s,c){if(c)e:{var h=r;s=s.split(".");for(var M=0;M<s.length-1;M++){var w=s[M];if(!(w in h))break e;h=h[w]}s=s[s.length-1],M=h[s],c=c(M),c!=M&&c!=null&&t(h,s,{configurable:!0,writable:!0,value:c})}}a("Symbol",function(s){function c(P){if(this instanceof c)throw new TypeError("Symbol is not a constructor");return new h(M+(P||"")+"_"+w++,P)}function h(P,C){this.h=P,t(this,"description",{configurable:!0,writable:!0,value:C})}if(s)return s;h.prototype.toString=function(){return this.h};var M="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",w=0;return c}),a("Symbol.iterator",function(s){if(s)return s;s=Symbol("Symbol.iterator");for(var c="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),h=0;h<c.length;h++){var M=r[c[h]];typeof M=="function"&&typeof M.prototype[s]!="function"&&t(M.prototype,s,{configurable:!0,writable:!0,value:function(){return o(e(this))}})}return s});function o(s){return s={next:s},s[Symbol.iterator]=function(){return this},s}function l(s){var c=typeof Symbol<"u"&&Symbol.iterator&&s[Symbol.iterator];return c?c.call(s):{next:e(s)}}function f(s){if(!(s instanceof Array)){s=l(s);for(var c,h=[];!(c=s.next()).done;)h.push(c.value);s=h}return s}var u=typeof Object.assign=="function"?Object.assign:function(s,c){for(var h=1;h<arguments.length;h++){var M=arguments[h];if(M)for(var w in M)Object.prototype.hasOwnProperty.call(M,w)&&(s[w]=M[w])}return s};a("Object.assign",function(s){return s||u});var p=typeof Object.create=="function"?Object.create:function(s){function c(){}return c.prototype=s,new c},m;if(typeof Object.setPrototypeOf=="function")m=Object.setPrototypeOf;else{var g;e:{var v={a:!0},y={};try{y.__proto__=v,g=y.a;break e}catch{}g=!1}m=g?function(s,c){if(s.__proto__=c,s.__proto__!==c)throw new TypeError(s+" is not extensible");return s}:null}var T=m;function _(s,c){if(s.prototype=p(c.prototype),s.prototype.constructor=s,T)T(s,c);else for(var h in c)if(h!="prototype")if(Object.defineProperties){var M=Object.getOwnPropertyDescriptor(c,h);M&&Object.defineProperty(s,h,M)}else s[h]=c[h];s.ya=c.prototype}function d(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function N(s){if(s.m)throw new TypeError("Generator is already running");s.m=!0}d.prototype.u=function(s){this.i=s};function D(s,c){s.l={ma:c,na:!0},s.h=s.s||s.v}d.prototype.return=function(s){this.l={return:s},this.h=this.v};function U(s,c,h){return s.h=h,{value:c}}function H(s){this.h=new d,this.i=s}function L(s,c){N(s.h);var h=s.h.j;return h?O(s,"return"in h?h.return:function(M){return{value:M,done:!0}},c,s.h.return):(s.h.return(c),Y(s))}function O(s,c,h,M){try{var w=c.call(s.h.j,h);if(!(w instanceof Object))throw new TypeError("Iterator result "+w+" is not an object");if(!w.done)return s.h.m=!1,w;var P=w.value}catch(C){return s.h.j=null,D(s.h,C),Y(s)}return s.h.j=null,M.call(s.h,P),Y(s)}function Y(s){for(;s.h.h;)try{var c=s.i(s.h);if(c)return s.h.m=!1,{value:c.value,done:!1}}catch(h){s.h.i=void 0,D(s.h,h)}if(s.h.m=!1,s.h.l){if(c=s.h.l,s.h.l=null,c.na)throw c.ma;return{value:c.return,done:!0}}return{value:void 0,done:!0}}function A(s){this.next=function(c){return N(s.h),s.h.j?c=O(s,s.h.j.next,c,s.h.u):(s.h.u(c),c=Y(s)),c},this.throw=function(c){return N(s.h),s.h.j?c=O(s,s.h.j.throw,c,s.h.u):(D(s.h,c),c=Y(s)),c},this.return=function(c){return L(s,c)},this[Symbol.iterator]=function(){return this}}function x(s){function c(M){return s.next(M)}function h(M){return s.throw(M)}return new Promise(function(M,w){function P(C){C.done?M(C.value):Promise.resolve(C.value).then(c,h).then(P,w)}P(s.next())})}function E(s){return x(new A(new H(s)))}a("Promise",function(s){function c(C){this.i=0,this.j=void 0,this.h=[],this.u=!1;var B=this.l();try{C(B.resolve,B.reject)}catch($){B.reject($)}}function h(){this.h=null}function M(C){return C instanceof c?C:new c(function(B){B(C)})}if(s)return s;h.prototype.i=function(C){if(this.h==null){this.h=[];var B=this;this.j(function(){B.m()})}this.h.push(C)};var w=r.setTimeout;h.prototype.j=function(C){w(C,0)},h.prototype.m=function(){for(;this.h&&this.h.length;){var C=this.h;this.h=[];for(var B=0;B<C.length;++B){var $=C[B];C[B]=null;try{$()}catch(fe){this.l(fe)}}}this.h=null},h.prototype.l=function(C){this.j(function(){throw C})},c.prototype.l=function(){function C(fe){return function(ye){$||($=!0,fe.call(B,ye))}}var B=this,$=!1;return{resolve:C(this.I),reject:C(this.m)}},c.prototype.I=function(C){if(C===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(C instanceof c)this.L(C);else{e:switch(typeof C){case"object":var B=C!=null;break e;case"function":B=!0;break e;default:B=!1}B?this.F(C):this.s(C)}},c.prototype.F=function(C){var B=void 0;try{B=C.then}catch($){this.m($);return}typeof B=="function"?this.M(B,C):this.s(C)},c.prototype.m=function(C){this.v(2,C)},c.prototype.s=function(C){this.v(1,C)},c.prototype.v=function(C,B){if(this.i!=0)throw Error("Cannot settle("+C+", "+B+"): Promise already settled in state"+this.i);this.i=C,this.j=B,this.i===2&&this.K(),this.H()},c.prototype.K=function(){var C=this;w(function(){if(C.D()){var B=r.console;typeof B<"u"&&B.error(C.j)}},1)},c.prototype.D=function(){if(this.u)return!1;var C=r.CustomEvent,B=r.Event,$=r.dispatchEvent;return typeof $>"u"?!0:(typeof C=="function"?C=new C("unhandledrejection",{cancelable:!0}):typeof B=="function"?C=new B("unhandledrejection",{cancelable:!0}):(C=r.document.createEvent("CustomEvent"),C.initCustomEvent("unhandledrejection",!1,!0,C)),C.promise=this,C.reason=this.j,$(C))},c.prototype.H=function(){if(this.h!=null){for(var C=0;C<this.h.length;++C)P.i(this.h[C]);this.h=null}};var P=new h;return c.prototype.L=function(C){var B=this.l();C.T(B.resolve,B.reject)},c.prototype.M=function(C,B){var $=this.l();try{C.call(B,$.resolve,$.reject)}catch(fe){$.reject(fe)}},c.prototype.then=function(C,B){function $(Be,Ae){return typeof Be=="function"?function(Ze){try{fe(Be(Ze))}catch(ot){ye(ot)}}:Ae}var fe,ye,Ke=new c(function(Be,Ae){fe=Be,ye=Ae});return this.T($(C,fe),$(B,ye)),Ke},c.prototype.catch=function(C){return this.then(void 0,C)},c.prototype.T=function(C,B){function $(){switch(fe.i){case 1:C(fe.j);break;case 2:B(fe.j);break;default:throw Error("Unexpected state: "+fe.i)}}var fe=this;this.h==null?P.i($):this.h.push($),this.u=!0},c.resolve=M,c.reject=function(C){return new c(function(B,$){$(C)})},c.race=function(C){return new c(function(B,$){for(var fe=l(C),ye=fe.next();!ye.done;ye=fe.next())M(ye.value).T(B,$)})},c.all=function(C){var B=l(C),$=B.next();return $.done?M([]):new c(function(fe,ye){function Ke(Ze){return function(ot){Be[Ze]=ot,Ae--,Ae==0&&fe(Be)}}var Be=[],Ae=0;do Be.push(void 0),Ae++,M($.value).T(Ke(Be.length-1),ye),$=B.next();while(!$.done)})},c});function G(s,c){s instanceof String&&(s+="");var h=0,M=!1,w={next:function(){if(!M&&h<s.length){var P=h++;return{value:c(P,s[P]),done:!1}}return M=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}a("Array.prototype.keys",function(s){return s||function(){return G(this,function(c){return c})}}),a("Array.prototype.fill",function(s){return s||function(c,h,M){var w=this.length||0;for(0>h&&(h=Math.max(0,w+h)),(M==null||M>w)&&(M=w),M=Number(M),0>M&&(M=Math.max(0,w+M)),h=Number(h||0);h<M;h++)this[h]=c;return this}});function k(s){return s||Array.prototype.fill}a("Int8Array.prototype.fill",k),a("Uint8Array.prototype.fill",k),a("Uint8ClampedArray.prototype.fill",k),a("Int16Array.prototype.fill",k),a("Uint16Array.prototype.fill",k),a("Int32Array.prototype.fill",k),a("Uint32Array.prototype.fill",k),a("Float32Array.prototype.fill",k),a("Float64Array.prototype.fill",k),a("Object.is",function(s){return s||function(c,h){return c===h?c!==0||1/c===1/h:c!==c&&h!==h}}),a("Array.prototype.includes",function(s){return s||function(c,h){var M=this;M instanceof String&&(M=String(M));var w=M.length;for(h=h||0,0>h&&(h=Math.max(h+w,0));h<w;h++){var P=M[h];if(P===c||Object.is(P,c))return!0}return!1}}),a("String.prototype.includes",function(s){return s||function(c,h){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(c instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(c,h||0)!==-1}});var K=this||self;function ie(s,c){s=s.split(".");var h=K;s[0]in h||typeof h.execScript>"u"||h.execScript("var "+s[0]);for(var M;s.length&&(M=s.shift());)s.length||c===void 0?h[M]&&h[M]!==Object.prototype[M]?h=h[M]:h=h[M]={}:h[M]=c}function z(s){var c;e:{if((c=K.navigator)&&(c=c.userAgent))break e;c=""}return c.indexOf(s)!=-1}var te=Array.prototype.map?function(s,c){return Array.prototype.map.call(s,c,void 0)}:function(s,c){for(var h=s.length,M=Array(h),w=typeof s=="string"?s.split(""):s,P=0;P<h;P++)P in w&&(M[P]=c.call(void 0,w[P],P,s));return M},j={},le=null;function de(s){var c=s.length,h=3*c/4;h%3?h=Math.floor(h):"=.".indexOf(s[c-1])!=-1&&(h="=.".indexOf(s[c-2])!=-1?h-2:h-1);var M=new Uint8Array(h),w=0;return Ie(s,function(P){M[w++]=P}),w!==h?M.subarray(0,w):M}function Ie(s,c){function h($){for(;M<s.length;){var fe=s.charAt(M++),ye=le[fe];if(ye!=null)return ye;if(!/^[\s\xa0]*$/.test(fe))throw Error("Unknown base64 encoding at char: "+fe)}return $}qe();for(var M=0;;){var w=h(-1),P=h(0),C=h(64),B=h(64);if(B===64&&w===-1)break;c(w<<2|P>>4),C!=64&&(c(P<<4&240|C>>2),B!=64&&c(C<<6&192|B))}}function qe(){if(!le){le={};for(var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),c=["+/=","+/","-_=","-_.","-_"],h=0;5>h;h++){var M=s.concat(c[h].split(""));j[h]=M;for(var w=0;w<M.length;w++){var P=M[w];le[P]===void 0&&(le[P]=w)}}}}var tt=typeof Uint8Array<"u",ge=!(z("Trident")||z("MSIE"))&&typeof K.btoa=="function";function ae(s){if(!ge){var c;c===void 0&&(c=0),qe(),c=j[c];for(var h=Array(Math.floor(s.length/3)),M=c[64]||"",w=0,P=0;w<s.length-2;w+=3){var C=s[w],B=s[w+1],$=s[w+2],fe=c[C>>2];C=c[(C&3)<<4|B>>4],B=c[(B&15)<<2|$>>6],$=c[$&63],h[P++]=fe+C+B+$}switch(fe=0,$=M,s.length-w){case 2:fe=s[w+1],$=c[(fe&15)<<2]||M;case 1:s=s[w],h[P]=c[s>>2]+c[(s&3)<<4|fe>>4]+$+M}return h.join("")}for(c="";10240<s.length;)c+=String.fromCharCode.apply(null,s.subarray(0,10240)),s=s.subarray(10240);return c+=String.fromCharCode.apply(null,s),btoa(c)}var V=RegExp("[-_.]","g");function Z(s){switch(s){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function re(s){if(!ge)return de(s);V.test(s)&&(s=s.replace(V,Z)),s=atob(s);for(var c=new Uint8Array(s.length),h=0;h<s.length;h++)c[h]=s.charCodeAt(h);return c}var pe;function me(){return pe||(pe=new Uint8Array(0))}var Ue={},xt=typeof Uint8Array.prototype.slice=="function",Pe=0,Qe=0;function I(s){var c=0>s;s=Math.abs(s);var h=s>>>0;s=Math.floor((s-h)/4294967296),c&&(h=l(Je(h,s)),c=h.next().value,s=h.next().value,h=c),Pe=h>>>0,Qe=s>>>0}var et=typeof BigInt=="function";function Je(s,c){return c=~c,s?s=~s+1:c+=1,[s,c]}function ut(s,c){this.i=s>>>0,this.h=c>>>0}function Le(s){if(!s)return bt||(bt=new ut(0,0));if(!/^-?\d+$/.test(s))return null;if(16>s.length)I(Number(s));else if(et)s=BigInt(s),Pe=Number(s&BigInt(4294967295))>>>0,Qe=Number(s>>BigInt(32)&BigInt(4294967295));else{var c=+(s[0]==="-");Qe=Pe=0;for(var h=s.length,M=c,w=(h-c)%6+c;w<=h;M=w,w+=6)M=Number(s.slice(M,w)),Qe*=1e6,Pe=1e6*Pe+M,4294967296<=Pe&&(Qe+=Pe/4294967296|0,Pe%=4294967296);c&&(c=l(Je(Pe,Qe)),s=c.next().value,c=c.next().value,Pe=s,Qe=c)}return new ut(Pe,Qe)}var bt;function ze(s,c){return Error("Invalid wire type: "+s+" (at position "+c+")")}function $e(){return Error("Failed to read varint, encoding is invalid.")}function R(s,c){return Error("Tried to read past the end of the data "+c+" > "+s)}function S(){throw Error("Invalid UTF8")}function q(s,c){return c=String.fromCharCode.apply(null,c),s==null?c:s+c}var se=void 0,ce,ne=typeof TextDecoder<"u",Oe,Ee=typeof TextEncoder<"u",Ge;function Ne(s){if(s!==Ue)throw Error("illegal external caller")}function ue(s,c){if(Ne(c),this.V=s,s!=null&&s.length===0)throw Error("ByteString should be constructed with non-empty values")}function _e(){return Ge||(Ge=new ue(null,Ue))}function Xe(s){Ne(Ue);var c=s.V;return c=c==null||tt&&c!=null&&c instanceof Uint8Array?c:typeof c=="string"?re(c):null,c==null?c:s.V=c}function ke(s){if(typeof s=="string")return{buffer:re(s),C:!1};if(Array.isArray(s))return{buffer:new Uint8Array(s),C:!1};if(s.constructor===Uint8Array)return{buffer:s,C:!1};if(s.constructor===ArrayBuffer)return{buffer:new Uint8Array(s),C:!1};if(s.constructor===ue)return{buffer:Xe(s)||me(),C:!0};if(s instanceof Uint8Array)return{buffer:new Uint8Array(s.buffer,s.byteOffset,s.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function we(s,c){this.i=null,this.m=!1,this.h=this.j=this.l=0,Ye(this,s,c)}function Ye(s,c,h){h=h===void 0?{}:h,s.S=h.S===void 0?!1:h.S,c&&(c=ke(c),s.i=c.buffer,s.m=c.C,s.l=0,s.j=s.i.length,s.h=s.l)}we.prototype.reset=function(){this.h=this.l};function F(s,c){if(s.h=c,c>s.j)throw R(s.j,c)}function be(s){var c=s.i,h=s.h,M=c[h++],w=M&127;if(M&128&&(M=c[h++],w|=(M&127)<<7,M&128&&(M=c[h++],w|=(M&127)<<14,M&128&&(M=c[h++],w|=(M&127)<<21,M&128&&(M=c[h++],w|=M<<28,M&128&&c[h++]&128&&c[h++]&128&&c[h++]&128&&c[h++]&128&&c[h++]&128)))))throw $e();return F(s,h),w}function ve(s,c){if(0>c)throw Error("Tried to read a negative byte length: "+c);var h=s.h,M=h+c;if(M>s.j)throw R(c,s.j-h);return s.h=M,h}var Me=[];function he(){this.h=[]}he.prototype.length=function(){return this.h.length},he.prototype.end=function(){var s=this.h;return this.h=[],s};function oe(s,c,h){for(;0<h||127<c;)s.h.push(c&127|128),c=(c>>>7|h<<25)>>>0,h>>>=7;s.h.push(c)}function Ce(s,c){for(;127<c;)s.h.push(c&127|128),c>>>=7;s.h.push(c)}function je(s,c){if(Me.length){var h=Me.pop();Ye(h,s,c),s=h}else s=new we(s,c);this.h=s,this.j=this.h.h,this.i=this.l=-1,this.setOptions(c)}je.prototype.setOptions=function(s){s=s===void 0?{}:s,this.ca=s.ca===void 0?!1:s.ca},je.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function _t(s){var c=s.h;if(c.h==c.j)return!1;s.j=s.h.h;var h=be(s.h)>>>0;if(c=h>>>3,h&=7,!(0<=h&&5>=h))throw ze(h,s.j);if(1>c)throw Error("Invalid field number: "+c+" (at position "+s.j+")");return s.l=c,s.i=h,!0}function ft(s){switch(s.i){case 0:if(s.i!=0)ft(s);else e:{s=s.h;for(var c=s.h,h=c+10,M=s.i;c<h;)if(!(M[c++]&128)){F(s,c);break e}throw $e()}break;case 1:s=s.h,F(s,s.h+8);break;case 2:s.i!=2?ft(s):(c=be(s.h)>>>0,s=s.h,F(s,s.h+c));break;case 5:s=s.h,F(s,s.h+4);break;case 3:c=s.l;do{if(!_t(s))throw Error("Unmatched start-group tag: stream EOF");if(s.i==4){if(s.l!=c)throw Error("Unmatched end-group tag");break}ft(s)}while(1);break;default:throw ze(s.i,s.j)}}var Xt=[];function en(){this.j=[],this.i=0,this.h=new he}function kn(s,c){c.length!==0&&(s.j.push(c),s.i+=c.length)}function Mr(s,c){if(c=c.R){kn(s,s.h.end());for(var h=0;h<c.length;h++)kn(s,Xe(c[h])||me())}}var on=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function qt(s,c){return on?s[on]|=c:s.A!==void 0?s.A|=c:(Object.defineProperties(s,{A:{value:c,configurable:!0,writable:!0,enumerable:!1}}),c)}function _i(s,c){on?s[on]&&(s[on]&=~c):s.A!==void 0&&(s.A&=~c)}function wt(s){var c;return on?c=s[on]:c=s.A,c??0}function tn(s,c){on?s[on]=c:s.A!==void 0?s.A=c:Object.defineProperties(s,{A:{value:c,configurable:!0,writable:!0,enumerable:!1}})}function Wn(s){return qt(s,1),s}function Sr(s,c){tn(c,(s|0)&-51)}function An(s,c){tn(c,(s|18)&-41)}var vi={};function ii(s){return s!==null&&typeof s=="object"&&!Array.isArray(s)&&s.constructor===Object}var ri,br=[];tn(br,23),ri=Object.freeze(br);function Zi(s){if(wt(s.o)&2)throw Error("Cannot mutate an immutable Message")}function $i(s){var c=s.length;(c=c?s[c-1]:void 0)&&ii(c)?c.g=1:(c={},s.push((c.g=1,c)))}function yr(s){var c=s.i+s.G;return s.B||(s.B=s.o[c]={})}function nn(s,c){return c===-1?null:c>=s.i?s.B?s.B[c]:void 0:s.o[c+s.G]}function b(s,c,h,M){Zi(s),W(s,c,h,M)}function W(s,c,h,M){s.j&&(s.j=void 0),c>=s.i||M?yr(s)[c]=h:(s.o[c+s.G]=h,(s=s.B)&&c in s&&delete s[c])}function J(s,c,h,M){var w=nn(s,c);Array.isArray(w)||(w=ri);var P=wt(w);if(P&1||Wn(w),M)P&2||qt(w,2),h&1||Object.freeze(w);else{M=!(h&2);var C=P&2;h&1||!C?M&&P&16&&!C&&_i(w,16):(w=Wn(Array.prototype.slice.call(w)),W(s,c,w))}return w}function ee(s,c){var h=nn(s,c),M=h==null?h:typeof h=="number"||h==="NaN"||h==="Infinity"||h==="-Infinity"?Number(h):void 0;return M!=null&&M!==h&&W(s,c,M),M}function X(s,c,h,M,w){s.h||(s.h={});var P=s.h[h],C=J(s,h,3,w);if(!P){var B=C;P=[];var $=!!(wt(s.o)&16);C=!!(wt(B)&2);var fe=B;!w&&C&&(B=Array.prototype.slice.call(B));for(var ye=C,Ke=0;Ke<B.length;Ke++){var Be=B[Ke],Ae=c,Ze=!1;if(Ze=Ze===void 0?!1:Ze,Be=Array.isArray(Be)?new Ae(Be):Ze?new Ae:void 0,Be!==void 0){Ae=Be.o;var ot=Ze=wt(Ae);C&&(ot|=2),$&&(ot|=16),ot!=Ze&&tn(Ae,ot),Ae=ot,ye=ye||!!(2&Ae),P.push(Be)}}return s.h[h]=P,$=wt(B),c=$|33,c=ye?c&-9:c|8,$!=c&&(ye=B,Object.isFrozen(ye)&&(ye=Array.prototype.slice.call(ye)),tn(ye,c),B=ye),fe!==B&&W(s,h,B),(w||M&&C)&&qt(P,2),M&&Object.freeze(P),P}return w||(w=Object.isFrozen(P),M&&!w?Object.freeze(P):!M&&w&&(P=Array.prototype.slice.call(P),s.h[h]=P)),P}function xe(s,c,h){var M=!!(wt(s.o)&2);if(c=X(s,c,h,M,M),s=J(s,h,3,M),!(M||wt(s)&8)){for(M=0;M<c.length;M++){if(h=c[M],wt(h.o)&2){var w=lt(h,!1);w.j=h}else w=h;h!==w&&(c[M]=w,s[M]=w.o)}qt(s,8)}return c}function Se(s,c,h){if(h!=null&&typeof h!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof h+": "+h);b(s,c,h)}function De(s,c,h,M,w){Zi(s);var P=X(s,h,c,!1,!1);return h=M??new h,s=J(s,c,2,!1),w!=null?(P.splice(w,0,h),s.splice(w,0,h.o)):(P.push(h),s.push(h.o)),h.C()&&_i(s,8),h}function Re(s,c){return s??c}function Fe(s,c,h){return h=h===void 0?0:h,Re(ee(s,c),h)}var We;function Ve(s){switch(typeof s){case"number":return isFinite(s)?s:String(s);case"object":if(s)if(Array.isArray(s)){if(wt(s)&128)return s=Array.prototype.slice.call(s),$i(s),s}else{if(tt&&s!=null&&s instanceof Uint8Array)return ae(s);if(s instanceof ue){var c=s.V;return c==null?"":typeof c=="string"?c:s.V=ae(c)}}}return s}function at(s,c,h,M){if(s!=null){if(Array.isArray(s))s=ht(s,c,h,M!==void 0);else if(ii(s)){var w={},P;for(P in s)w[P]=at(s[P],c,h,M);s=w}else s=c(s,M);return s}}function ht(s,c,h,M){var w=wt(s);M=M?!!(w&16):void 0,s=Array.prototype.slice.call(s);for(var P=0;P<s.length;P++)s[P]=at(s[P],c,h,M);return h(w,s),s}function Rt(s){return s.ja===vi?s.toJSON():Ve(s)}function Ct(s,c){s&128&&$i(c)}function mt(s,c,h){if(h=h===void 0?An:h,s!=null){if(tt&&s instanceof Uint8Array)return s.length?new ue(new Uint8Array(s),Ue):_e();if(Array.isArray(s)){var M=wt(s);return M&2?s:c&&!(M&32)&&(M&16||M===0)?(tn(s,M|2),s):(s=ht(s,mt,M&4?An:h,!0),c=wt(s),c&4&&c&2&&Object.freeze(s),s)}return s.ja===vi?yt(s):s}}function He(s,c,h,M,w,P,C){if(s=s.h&&s.h[h]){if(M=wt(s),M&2?M=s:(P=te(s,yt),An(M,P),Object.freeze(P),M=P),Zi(c),C=M==null?ri:Wn([]),M!=null){for(P=!!M.length,s=0;s<M.length;s++){var B=M[s];P=P&&!(wt(B.o)&2),C[s]=B.o}P=(P?8:0)|1,s=wt(C),(s&P)!==P&&(Object.isFrozen(C)&&(C=Array.prototype.slice.call(C)),tn(C,s|P)),c.h||(c.h={}),c.h[h]=M}else c.h&&(c.h[h]=void 0);W(c,h,C,w)}else b(c,h,mt(M,P,C),w)}function yt(s){return wt(s.o)&2||(s=lt(s,!0),qt(s.o,2)),s}function lt(s,c){var h=s.o,M=[];qt(M,16);var w=s.constructor.h;if(w&&M.push(w),w=s.B,w){M.length=h.length,M.fill(void 0,M.length,h.length);var P={};M[M.length-1]=P}wt(h)&128&&$i(M),c=c||s.C()?An:Sr,P=s.constructor,We=M,M=new P(M),We=void 0,s.R&&(M.R=s.R.slice()),P=!!(wt(h)&16);for(var C=w?h.length-1:h.length,B=0;B<C;B++)He(s,M,B-s.G,h[B],!1,P,c);if(w)for(var $ in w)He(s,M,+$,w[$],!0,P,c);return M}function vt(s,c,h){s==null&&(s=We),We=void 0;var M=this.constructor.i||0,w=0<M,P=this.constructor.h,C=!1;if(s==null){s=P?[P]:[];var B=48,$=!0;w&&(M=0,B|=128),tn(s,B)}else{if(!Array.isArray(s)||P&&P!==s[0])throw Error();var fe=B=qt(s,0);if(($=(16&fe)!==0)&&((C=(32&fe)!==0)||(fe|=32)),w){if(128&fe)M=0;else if(0<s.length){var ye=s[s.length-1];if(ii(ye)&&"g"in ye){M=0,fe|=128,delete ye.g;var Ke=!0,Be;for(Be in ye){Ke=!1;break}Ke&&s.pop()}}}else if(128&fe)throw Error();B!==fe&&tn(s,fe)}this.G=(P?0:-1)-M,this.h=void 0,this.o=s;e:{if(P=this.o.length,M=P-1,P&&(P=this.o[M],ii(P))){this.B=P,this.i=M-this.G;break e}c!==void 0&&-1<c?(this.i=Math.max(c,M+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!w&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(h){c=$&&!C&&!0,w=this.i;var Ae;for($=0;$<h.length;$++)C=h[$],C<w?(C+=this.G,(M=s[C])?wn(M,c):s[C]=ri):(Ae||(Ae=yr(this)),(M=Ae[C])?wn(M,c):Ae[C]=ri)}}vt.prototype.toJSON=function(){return ht(this.o,Rt,Ct)},vt.prototype.C=function(){return!!(wt(this.o)&2)};function wn(s,c){if(Array.isArray(s)){var h=wt(s),M=1;!c||h&2||(M|=16),(h&M)!==M&&tn(s,h|M)}}vt.prototype.ja=vi,vt.prototype.toString=function(){return this.o.toString()};function Ht(s,c,h){if(h){var M={},w;for(w in h){var P=h[w],C=P.qa;C||(M.J=P.wa||P.oa.W,P.ia?(M.aa=ja(P.ia),C=function(B){return function($,fe,ye){return B.J($,fe,ye,B.aa)}}(M)):P.ka?(M.Z=Ka(P.da.P,P.ka),C=function(B){return function($,fe,ye){return B.J($,fe,ye,B.Z)}}(M)):C=M.J,P.qa=C),C(c,s,P.da),M={J:M.J,aa:M.aa,Z:M.Z}}}Mr(c,s)}var bn=Symbol();function Et(s,c,h){return s[bn]||(s[bn]=function(M,w){return c(M,w,h)})}function Ot(s){var c=s[bn];if(!c){var h=fs(s);c=function(M,w){return Za(M,w,h)},s[bn]=c}return c}function Kt(s){var c=s.ia;if(c)return Ot(c);if(c=s.va)return Et(s.da.P,c,s.ka)}function Bt(s){var c=Kt(s),h=s.da,M=s.oa.U;return c?function(w,P){return M(w,P,h,c)}:function(w,P){return M(w,P,h)}}function zt(s,c){var h=s[c];return typeof h=="function"&&h.length===0&&(h=h(),s[c]=h),Array.isArray(h)&&(Qi in h||Ji in h||0<h.length&&typeof h[0]=="function")?h:void 0}function Mi(s,c,h,M,w,P){c.P=s[0];var C=1;if(s.length>C&&typeof s[C]!="number"){var B=s[C++];h(c,B)}for(;C<s.length;){h=s[C++];for(var $=C+1;$<s.length&&typeof s[$]!="number";)$++;switch(B=s[C++],$-=C,$){case 0:M(c,h,B);break;case 1:($=zt(s,C))?(C++,w(c,h,B,$)):M(c,h,B,s[C++]);break;case 2:$=C++,$=zt(s,$),w(c,h,B,$,s[C++]);break;case 3:P(c,h,B,s[C++],s[C++],s[C++]);break;case 4:P(c,h,B,s[C++],s[C++],s[C++],s[C++]);break;default:throw Error("unexpected number of binary field arguments: "+$)}}return c}var ln=Symbol();function ja(s){var c=s[ln];if(!c){var h=us(s);c=function(M,w){return $a(M,w,h)},s[ln]=c}return c}function Ka(s,c){var h=s[ln];return h||(h=function(M,w){return Ht(M,w,c)},s[ln]=h),h}var Ji=Symbol();function ql(s,c){s.push(c)}function Yl(s,c,h){s.push(c,h.W)}function jl(s,c,h,M){var w=ja(M),P=us(M).P,C=h.W;s.push(c,function(B,$,fe){return C(B,$,fe,P,w)})}function Kl(s,c,h,M,w,P){var C=Ka(M,P),B=h.W;s.push(c,function($,fe,ye){return B($,fe,ye,M,C)})}function us(s){var c=s[Ji];return c||(c=Mi(s,s[Ji]=[],ql,Yl,jl,Kl),Qi in s&&Ji in s&&(s.length=0),c)}var Qi=Symbol();function Zl(s,c){s[0]=c}function $l(s,c,h,M){var w=h.U;s[c]=M?function(P,C,B){return w(P,C,B,M)}:w}function Jl(s,c,h,M,w){var P=h.U,C=Ot(M),B=fs(M).P;s[c]=function($,fe,ye){return P($,fe,ye,B,C,w)}}function Ql(s,c,h,M,w,P,C){var B=h.U,$=Et(M,w,P);s[c]=function(fe,ye,Ke){return B(fe,ye,Ke,M,$,C)}}function fs(s){var c=s[Qi];return c||(c=Mi(s,s[Qi]={},Zl,$l,Jl,Ql),Qi in s&&Ji in s&&(s.length=0),c)}function Za(s,c,h){for(;_t(c)&&c.i!=4;){var M=c.l,w=h[M];if(!w){var P=h[0];P&&(P=P[M])&&(w=h[M]=Bt(P))}if(!w||!w(c,s,M)){w=c,M=s,P=w.j,ft(w);var C=w;if(!C.ca){if(w=C.h.h-P,C.h.h=P,C=C.h,w==0)w=_e();else{if(P=ve(C,w),C.S&&C.m)w=C.i.subarray(P,P+w);else{C=C.i;var B=P;w=P+w,w=B===w?me():xt?C.slice(B,w):new Uint8Array(C.subarray(B,w))}w=w.length==0?_e():new ue(w,Ue)}(P=M.R)?P.push(w):M.R=[w]}}}return s}function $a(s,c,h){for(var M=h.length,w=M%2==1,P=w?1:0;P<M;P+=2)(0,h[P+1])(c,s,h[P]);Ht(s,c,w?h[0]:void 0)}function er(s,c){return{U:s,W:c}}var pn=er(function(s,c,h){if(s.i!==5)return!1;s=s.h;var M=s.i,w=s.h,P=M[w],C=M[w+1],B=M[w+2];return M=M[w+3],F(s,s.h+4),C=(P<<0|C<<8|B<<16|M<<24)>>>0,s=2*(C>>31)+1,P=C>>>23&255,C&=8388607,b(c,h,P==255?C?NaN:1/0*s:P==0?s*Math.pow(2,-149)*C:s*Math.pow(2,P-150)*(C+Math.pow(2,23))),!0},function(s,c,h){if(c=ee(c,h),c!=null){Ce(s.h,8*h+5),s=s.h;var M=+c;M===0?0<1/M?Pe=Qe=0:(Qe=0,Pe=2147483648):isNaN(M)?(Qe=0,Pe=2147483647):(M=(h=0>M?-2147483648:0)?-M:M,34028234663852886e22<M?(Qe=0,Pe=(h|2139095040)>>>0):11754943508222875e-54>M?(M=Math.round(M/Math.pow(2,-149)),Qe=0,Pe=(h|M)>>>0):(c=Math.floor(Math.log(M)/Math.LN2),M*=Math.pow(2,-c),M=Math.round(8388608*M),16777216<=M&&++c,Qe=0,Pe=(h|c+127<<23|M&8388607)>>>0)),h=Pe,s.h.push(h>>>0&255),s.h.push(h>>>8&255),s.h.push(h>>>16&255),s.h.push(h>>>24&255)}}),ec=er(function(s,c,h){if(s.i!==0)return!1;var M=s.h,w=0,P=s=0,C=M.i,B=M.h;do{var $=C[B++];w|=($&127)<<P,P+=7}while(32>P&&$&128);for(32<P&&(s|=($&127)>>4),P=3;32>P&&$&128;P+=7)$=C[B++],s|=($&127)<<P;if(F(M,B),128>$)M=w>>>0,$=s>>>0,(s=$&2147483648)&&(M=~M+1>>>0,$=~$>>>0,M==0&&($=$+1>>>0)),M=4294967296*$+(M>>>0);else throw $e();return b(c,h,s?-M:M),!0},function(s,c,h){c=nn(c,h),c!=null&&(typeof c=="string"&&Le(c),c!=null&&(Ce(s.h,8*h),typeof c=="number"?(s=s.h,I(c),oe(s,Pe,Qe)):(h=Le(c),oe(s.h,h.i,h.h))))}),tc=er(function(s,c,h){return s.i!==0?!1:(b(c,h,be(s.h)),!0)},function(s,c,h){if(c=nn(c,h),c!=null&&c!=null)if(Ce(s.h,8*h),s=s.h,h=c,0<=h)Ce(s,h);else{for(c=0;9>c;c++)s.h.push(h&127|128),h>>=7;s.h.push(1)}}),Ja=er(function(s,c,h){if(s.i!==2)return!1;var M=be(s.h)>>>0;s=s.h;var w=ve(s,M);if(s=s.i,ne){var P=s,C;(C=ce)||(C=ce=new TextDecoder("utf-8",{fatal:!0})),s=w+M,P=w===0&&s===P.length?P:P.subarray(w,s);try{var B=C.decode(P)}catch(Ke){if(se===void 0){try{C.decode(new Uint8Array([128]))}catch{}try{C.decode(new Uint8Array([97])),se=!0}catch{se=!1}}throw!se&&(ce=void 0),Ke}}else{B=w,M=B+M,w=[];for(var $=null,fe,ye;B<M;)fe=s[B++],128>fe?w.push(fe):224>fe?B>=M?S():(ye=s[B++],194>fe||(ye&192)!==128?(B--,S()):w.push((fe&31)<<6|ye&63)):240>fe?B>=M-1?S():(ye=s[B++],(ye&192)!==128||fe===224&&160>ye||fe===237&&160<=ye||((P=s[B++])&192)!==128?(B--,S()):w.push((fe&15)<<12|(ye&63)<<6|P&63)):244>=fe?B>=M-2?S():(ye=s[B++],(ye&192)!==128||(fe<<28)+(ye-144)>>30||((P=s[B++])&192)!==128||((C=s[B++])&192)!==128?(B--,S()):(fe=(fe&7)<<18|(ye&63)<<12|(P&63)<<6|C&63,fe-=65536,w.push((fe>>10&1023)+55296,(fe&1023)+56320))):S(),8192<=w.length&&($=q($,w),w.length=0);B=q($,w)}return b(c,h,B),!0},function(s,c,h){if(c=nn(c,h),c!=null){var M=!1;if(M=M===void 0?!1:M,Ee){if(M&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(c))throw Error("Found an unpaired surrogate");c=(Oe||(Oe=new TextEncoder)).encode(c)}else{for(var w=0,P=new Uint8Array(3*c.length),C=0;C<c.length;C++){var B=c.charCodeAt(C);if(128>B)P[w++]=B;else{if(2048>B)P[w++]=B>>6|192;else{if(55296<=B&&57343>=B){if(56319>=B&&C<c.length){var $=c.charCodeAt(++C);if(56320<=$&&57343>=$){B=1024*(B-55296)+$-56320+65536,P[w++]=B>>18|240,P[w++]=B>>12&63|128,P[w++]=B>>6&63|128,P[w++]=B&63|128;continue}else C--}if(M)throw Error("Found an unpaired surrogate");B=65533}P[w++]=B>>12|224,P[w++]=B>>6&63|128}P[w++]=B&63|128}}c=w===P.length?P:P.subarray(0,w)}Ce(s.h,8*h+2),Ce(s.h,c.length),kn(s,s.h.end()),kn(s,c)}}),Qa=er(function(s,c,h,M,w){if(s.i!==2)return!1;c=De(c,h,M),h=s.h.j,M=be(s.h)>>>0;var P=s.h.h+M,C=P-h;if(0>=C&&(s.h.j=P,w(c,s,void 0,void 0,void 0),C=P-s.h.h),C)throw Error("Message parsing ended unexpectedly. Expected to read "+(M+" bytes, instead read "+(M-C)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return s.h.h=P,s.h.j=h,!0},function(s,c,h,M,w){if(c=xe(c,M,h),c!=null)for(M=0;M<c.length;M++){var P=s;Ce(P.h,8*h+2);var C=P.h.end();kn(P,C),C.push(P.i),P=C,w(c[M],s),C=s;var B=P.pop();for(B=C.i+C.h.length()-B;127<B;)P.push(B&127|128),B>>>=7,C.i++;P.push(B),C.i++}});function hs(s){return function(c,h){e:{if(Xt.length){var M=Xt.pop();M.setOptions(h),Ye(M.h,c,h),c=M}else c=new je(c,h);try{var w=fs(s),P=Za(new w.P,c,w);break e}finally{w=c.h,w.i=null,w.m=!1,w.l=0,w.j=0,w.h=0,w.S=!1,c.l=-1,c.i=-1,100>Xt.length&&Xt.push(c)}P=void 0}return P}}function ds(s){return function(){var c=new en;$a(this,c,us(s)),kn(c,c.h.end());for(var h=new Uint8Array(c.i),M=c.j,w=M.length,P=0,C=0;C<w;C++){var B=M[C];h.set(B,P),P+=B.length}return c.j=[h],h}}function Si(s){vt.call(this,s)}_(Si,vt);var eo=[Si,1,tc,2,pn,3,Ja,4,Ja];Si.prototype.l=ds(eo);function ps(s){vt.call(this,s,-1,nc)}_(ps,vt),ps.prototype.addClassification=function(s,c){return De(this,1,Si,s,c),this};var nc=[1],to=hs([ps,1,Qa,eo]);function bi(s){vt.call(this,s)}_(bi,vt);var no=[bi,1,pn,2,pn,3,pn,4,pn,5,pn];bi.prototype.l=ds(no);function io(s){vt.call(this,s,-1,ic)}_(io,vt);var ic=[1],ro=hs([io,1,Qa,no]);function Er(s){vt.call(this,s)}_(Er,vt);var so=[Er,1,pn,2,pn,3,pn,4,pn,5,pn,6,ec],rc=hs(so);Er.prototype.l=ds(so);function ao(s,c,h){if(h=s.createShader(h===0?s.VERTEX_SHADER:s.FRAGMENT_SHADER),s.shaderSource(h,c),s.compileShader(h),!s.getShaderParameter(h,s.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+s.getShaderInfoLog(h));return h}function oo(s){return xe(s,Si,1).map(function(c){var h=nn(c,1);return{index:h??0,score:Fe(c,2),label:nn(c,3)!=null?Re(nn(c,3),""):void 0,displayName:nn(c,4)!=null?Re(nn(c,4),""):void 0}})}function lo(s){return{x:Fe(s,1),y:Fe(s,2),z:Fe(s,3),visibility:ee(s,4)!=null?Fe(s,4):void 0}}function co(s){return s.map(function(c){return xe(ro(c),bi,1).map(lo)})}function ms(s,c){this.i=s,this.h=c,this.m=0}function uo(s,c,h){return sc(s,c),typeof s.h.canvas.transferToImageBitmap=="function"?Promise.resolve(s.h.canvas.transferToImageBitmap()):h?Promise.resolve(s.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(s.h.canvas):(s.j===void 0&&(s.j=document.createElement("canvas")),new Promise(function(M){s.j.height=s.h.canvas.height,s.j.width=s.h.canvas.width,s.j.getContext("2d",{}).drawImage(s.h.canvas,0,0,s.h.canvas.width,s.h.canvas.height),M(s.j)}))}function sc(s,c){var h=s.h;if(s.s===void 0){var M=ao(h,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),w=ao(h,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),P=h.createProgram();if(h.attachShader(P,M),h.attachShader(P,w),h.linkProgram(P),!h.getProgramParameter(P,h.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+h.getProgramInfoLog(P));M=s.s=P,h.useProgram(M),w=h.getUniformLocation(M,"sampler0"),s.l={O:h.getAttribLocation(M,"aVertex"),N:h.getAttribLocation(M,"aTex"),xa:w},s.v=h.createBuffer(),h.bindBuffer(h.ARRAY_BUFFER,s.v),h.enableVertexAttribArray(s.l.O),h.vertexAttribPointer(s.l.O,2,h.FLOAT,!1,0,0),h.bufferData(h.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),h.STATIC_DRAW),h.bindBuffer(h.ARRAY_BUFFER,null),s.u=h.createBuffer(),h.bindBuffer(h.ARRAY_BUFFER,s.u),h.enableVertexAttribArray(s.l.N),h.vertexAttribPointer(s.l.N,2,h.FLOAT,!1,0,0),h.bufferData(h.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),h.STATIC_DRAW),h.bindBuffer(h.ARRAY_BUFFER,null),h.uniform1i(w,0)}M=s.l,h.useProgram(s.s),h.canvas.width=c.width,h.canvas.height=c.height,h.viewport(0,0,c.width,c.height),h.activeTexture(h.TEXTURE0),s.i.bindTexture2d(c.glName),h.enableVertexAttribArray(M.O),h.bindBuffer(h.ARRAY_BUFFER,s.v),h.vertexAttribPointer(M.O,2,h.FLOAT,!1,0,0),h.enableVertexAttribArray(M.N),h.bindBuffer(h.ARRAY_BUFFER,s.u),h.vertexAttribPointer(M.N,2,h.FLOAT,!1,0,0),h.bindFramebuffer(h.DRAW_FRAMEBUFFER?h.DRAW_FRAMEBUFFER:h.FRAMEBUFFER,null),h.clearColor(0,0,0,0),h.clear(h.COLOR_BUFFER_BIT),h.colorMask(!0,!0,!0,!0),h.drawArrays(h.TRIANGLE_FAN,0,4),h.disableVertexAttribArray(M.O),h.disableVertexAttribArray(M.N),h.bindBuffer(h.ARRAY_BUFFER,null),s.i.bindTexture2d(0)}function ac(s){this.h=s}var oc=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function lc(s,c){return c+s}function fo(s,c){window[s]=c}function cc(s){var c=document.createElement("script");return c.setAttribute("src",s),c.setAttribute("crossorigin","anonymous"),new Promise(function(h){c.addEventListener("load",function(){h()},!1),c.addEventListener("error",function(){h()},!1),document.body.appendChild(c)})}function uc(){return E(function(s){switch(s.h){case 1:return s.s=2,U(s,WebAssembly.instantiate(oc),4);case 4:s.h=3,s.s=0;break;case 2:return s.s=0,s.l=null,s.return(!1);case 3:return s.return(!0)}})}function xs(s){if(this.h=s,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=s&&s.locateFile||lc,typeof window=="object")var c=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")c=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=c,s.options){c=l(Object.keys(s.options));for(var h=c.next();!h.done;h=c.next()){h=h.value;var M=s.options[h].default;M!==void 0&&(this.l[h]=typeof M=="function"?M():M)}}}i=xs.prototype,i.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function fc(s){var c,h,M,w,P,C,B,$,fe,ye,Ke;return E(function(Be){switch(Be.h){case 1:return s.ga?(c=s.h.files===void 0?[]:typeof s.h.files=="function"?s.h.files(s.l):s.h.files,U(Be,uc(),2)):Be.return();case 2:if(h=Be.i,typeof window=="object")return fo("createMediapipeSolutionsWasm",{locateFile:s.locateFile}),fo("createMediapipeSolutionsPackedAssets",{locateFile:s.locateFile}),C=c.filter(function(Ae){return Ae.data!==void 0}),B=c.filter(function(Ae){return Ae.data===void 0}),$=Promise.all(C.map(function(Ae){var Ze=Tr(s,Ae.url);if(Ae.path!==void 0){var ot=Ae.path;Ze=Ze.then(function(At){return s.overrideFile(ot,At),Promise.resolve(At)})}return Ze})),fe=Promise.all(B.map(function(Ae){return Ae.simd===void 0||Ae.simd&&h||!Ae.simd&&!h?cc(s.locateFile(Ae.url,s.ha)):Promise.resolve()})).then(function(){var Ae,Ze,ot;return E(function(At){if(At.h==1)return Ae=window.createMediapipeSolutionsWasm,Ze=window.createMediapipeSolutionsPackedAssets,ot=s,U(At,Ae(Ze),2);ot.i=At.i,At.h=0})}),ye=function(){return E(function(Ae){return s.h.graph&&s.h.graph.url?Ae=U(Ae,Tr(s,s.h.graph.url),0):(Ae.h=0,Ae=void 0),Ae})}(),U(Be,Promise.all([fe,$,ye]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return M=c.filter(function(Ae){return Ae.simd===void 0||Ae.simd&&h||!Ae.simd&&!h}).map(function(Ae){return s.locateFile(Ae.url,s.ha)}),importScripts.apply(null,f(M)),w=s,U(Be,createMediapipeSolutionsWasm(Module),6);case 6:w.i=Be.i,s.m=new OffscreenCanvas(1,1),s.i.canvas=s.m,P=s.i.GL.createContext(s.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),s.i.GL.makeContextCurrent(P),Be.h=4;break;case 7:if(s.m=document.createElement("canvas"),Ke=s.m.getContext("webgl2",{}),!Ke&&(Ke=s.m.getContext("webgl",{}),!Ke))return alert("Failed to create WebGL canvas context when passing video frame."),Be.return();s.K=Ke,s.i.canvas=s.m,s.i.createContext(s.m,!0,!0,{});case 4:s.j=new s.i.SolutionWasm,s.ga=!1,Be.h=0}})}function hc(s){var c,h,M,w,P,C,B,$;return E(function(fe){if(fe.h==1){if(s.h.graph&&s.h.graph.url&&s.fa===s.h.graph.url)return fe.return();if(s.u=!0,!s.h.graph||!s.h.graph.url){fe.h=2;return}return s.fa=s.h.graph.url,U(fe,Tr(s,s.h.graph.url),3)}for(fe.h!=2&&(c=fe.i,s.j.loadGraph(c)),h=l(Object.keys(s.D)),M=h.next();!M.done;M=h.next())w=M.value,s.j.overrideFile(w,s.D[w]);if(s.D={},s.h.listeners)for(P=l(s.h.listeners),C=P.next();!C.done;C=P.next())B=C.value,xc(s,B);$=s.l,s.l={},s.setOptions($),fe.h=0})}i.reset=function(){var s=this;return E(function(c){s.j&&(s.j.reset(),s.s={},s.v={}),c.h=0})},i.setOptions=function(s,c){var h=this;if(c=c||this.h.options){for(var M=[],w=[],P={},C=l(Object.keys(s)),B=C.next();!B.done;P={X:P.X,Y:P.Y},B=C.next())if(B=B.value,!(B in this.l&&this.l[B]===s[B])){this.l[B]=s[B];var $=c[B];$!==void 0&&($.onChange&&(P.X=$.onChange,P.Y=s[B],M.push(function(fe){return function(){var ye;return E(function(Ke){if(Ke.h==1)return U(Ke,fe.X(fe.Y),2);ye=Ke.i,ye===!0&&(h.u=!0),Ke.h=0})}}(P))),$.graphOptionXref&&(B=Object.assign({},{calculatorName:"",calculatorIndex:0},$.graphOptionXref,{valueNumber:$.type===1?s[B]:0,valueBoolean:$.type===0?s[B]:!1,valueString:$.type===2?s[B]:""}),w.push(B)))}(M.length!==0||w.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(w),this.F=(this.F===void 0?[]:this.F).concat(M))}};function dc(s){var c,h,M,w,P,C,B;return E(function($){switch($.h){case 1:if(!s.u)return $.return();if(!s.F){$.h=2;break}c=l(s.F),h=c.next();case 3:if(h.done){$.h=5;break}return M=h.value,U($,M(),4);case 4:h=c.next(),$.h=3;break;case 5:s.F=void 0;case 2:if(s.H){for(w=new s.i.GraphOptionChangeRequestList,P=l(s.H),C=P.next();!C.done;C=P.next())B=C.value,w.push_back(B);s.j.changeOptions(w),w.delete(),s.H=void 0}s.u=!1,$.h=0}})}i.initialize=function(){var s=this;return E(function(c){return c.h==1?U(c,fc(s),2):c.h!=3?U(c,hc(s),3):U(c,dc(s),0)})};function Tr(s,c){var h,M;return E(function(w){return c in s.L?w.return(s.L[c]):(h=s.locateFile(c,""),M=fetch(h).then(function(P){return P.arrayBuffer()}),s.L[c]=M,w.return(M))})}i.overrideFile=function(s,c){this.j?this.j.overrideFile(s,c):this.D[s]=c},i.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},i.send=function(s,c){var h=this,M,w,P,C,B,$,fe,ye,Ke;return E(function(Be){switch(Be.h){case 1:return h.h.inputs?(M=1e3*(c??performance.now()),U(Be,h.I,2)):Be.return();case 2:return U(Be,h.initialize(),3);case 3:for(w=new h.i.PacketDataList,P=l(Object.keys(s)),C=P.next();!C.done;C=P.next())if(B=C.value,$=h.h.inputs[B]){e:{var Ae=s[B];switch($.type){case"video":var Ze=h.s[$.stream];if(Ze||(Ze=new ms(h.i,h.K),h.s[$.stream]=Ze),Ze.m===0&&(Ze.m=Ze.i.createTexture()),typeof HTMLVideoElement<"u"&&Ae instanceof HTMLVideoElement)var ot=Ae.videoWidth,At=Ae.videoHeight;else typeof HTMLImageElement<"u"&&Ae instanceof HTMLImageElement?(ot=Ae.naturalWidth,At=Ae.naturalHeight):(ot=Ae.width,At=Ae.height);At={glName:Ze.m,width:ot,height:At},ot=Ze.h,ot.canvas.width=At.width,ot.canvas.height=At.height,ot.activeTexture(ot.TEXTURE0),Ze.i.bindTexture2d(Ze.m),ot.texImage2D(ot.TEXTURE_2D,0,ot.RGBA,ot.RGBA,ot.UNSIGNED_BYTE,Ae),Ze.i.bindTexture2d(0),Ze=At;break e;case"detections":for(Ze=h.s[$.stream],Ze||(Ze=new ac(h.i),h.s[$.stream]=Ze),Ze.data||(Ze.data=new Ze.h.DetectionListData),Ze.data.reset(Ae.length),At=0;At<Ae.length;++At){ot=Ae[At];var Tt=Ze.data,Vt=Tt.setBoundingBox,cn=At,Zt=ot.la,dt=new Er;if(Se(dt,1,Zt.ra),Se(dt,2,Zt.sa),Se(dt,3,Zt.height),Se(dt,4,Zt.width),Se(dt,5,Zt.rotation),b(dt,6,Zt.pa),Zt=dt.l(),Vt.call(Tt,cn,Zt),ot.ea)for(Tt=0;Tt<ot.ea.length;++Tt){dt=ot.ea[Tt],Vt=Ze.data,cn=Vt.addNormalizedLandmark,Zt=At,dt=Object.assign({},dt,{visibility:dt.visibility?dt.visibility:0});var Gt=new bi;Se(Gt,1,dt.x),Se(Gt,2,dt.y),Se(Gt,3,dt.z),dt.visibility&&Se(Gt,4,dt.visibility),dt=Gt.l(),cn.call(Vt,Zt,dt)}if(ot.ba)for(Tt=0;Tt<ot.ba.length;++Tt)Vt=Ze.data,cn=Vt.addClassification,Zt=At,dt=ot.ba[Tt],Gt=new Si,Se(Gt,2,dt.score),dt.index&&b(Gt,1,dt.index),dt.label&&b(Gt,3,dt.label),dt.displayName&&b(Gt,4,dt.displayName),dt=Gt.l(),cn.call(Vt,Zt,dt)}Ze=Ze.data;break e;default:Ze={}}}switch(fe=Ze,ye=$.stream,$.type){case"video":w.pushTexture2d(Object.assign({},fe,{stream:ye,timestamp:M}));break;case"detections":Ke=fe,Ke.stream=ye,Ke.timestamp=M,w.pushDetectionList(Ke);break;default:throw Error("Unknown input config type: '"+$.type+"'")}}return h.j.send(w),U(Be,h.I,4);case 4:w.delete(),Be.h=0}})};function pc(s,c,h){var M,w,P,C,B,$,fe,ye,Ke,Be,Ae,Ze,ot,At;return E(function(Tt){switch(Tt.h){case 1:if(!h)return Tt.return(c);for(M={},w=0,P=l(Object.keys(h)),C=P.next();!C.done;C=P.next())B=C.value,$=h[B],typeof $!="string"&&$.type==="texture"&&c[$.stream]!==void 0&&++w;1<w&&(s.M=!1),fe=l(Object.keys(h)),C=fe.next();case 2:if(C.done){Tt.h=4;break}if(ye=C.value,Ke=h[ye],typeof Ke=="string")return ot=M,At=ye,U(Tt,mc(s,ye,c[Ke]),14);if(Be=c[Ke.stream],Ke.type==="detection_list"){if(Be){for(var Vt=Be.getRectList(),cn=Be.getLandmarksList(),Zt=Be.getClassificationsList(),dt=[],Gt=0;Gt<Vt.size();++Gt){var Xn=rc(Vt.get(Gt)),gc=Fe(Xn,1),_c=Fe(Xn,2),vc=Fe(Xn,3),Mc=Fe(Xn,4),Sc=Fe(Xn,5,0),Ar=void 0;Ar=Ar===void 0?0:Ar,Xn={la:{ra:gc,sa:_c,height:vc,width:Mc,rotation:Sc,pa:Re(nn(Xn,6),Ar)},ea:xe(ro(cn.get(Gt)),bi,1).map(lo),ba:oo(to(Zt.get(Gt)))},dt.push(Xn)}Vt=dt}else Vt=[];M[ye]=Vt,Tt.h=7;break}if(Ke.type==="proto_list"){if(Be){for(Vt=Array(Be.size()),cn=0;cn<Be.size();cn++)Vt[cn]=Be.get(cn);Be.delete()}else Vt=[];M[ye]=Vt,Tt.h=7;break}if(Be===void 0){Tt.h=3;break}if(Ke.type==="float_list"){M[ye]=Be,Tt.h=7;break}if(Ke.type==="proto"){M[ye]=Be,Tt.h=7;break}if(Ke.type!=="texture")throw Error("Unknown output config type: '"+Ke.type+"'");return Ae=s.v[ye],Ae||(Ae=new ms(s.i,s.K),s.v[ye]=Ae),U(Tt,uo(Ae,Be,s.M),13);case 13:Ze=Tt.i,M[ye]=Ze;case 7:Ke.transform&&M[ye]&&(M[ye]=Ke.transform(M[ye])),Tt.h=3;break;case 14:ot[At]=Tt.i;case 3:C=fe.next(),Tt.h=2;break;case 4:return Tt.return(M)}})}function mc(s,c,h){var M;return E(function(w){return typeof h=="number"||h instanceof Uint8Array||h instanceof s.i.Uint8BlobList?w.return(h):h instanceof s.i.Texture2dDataOut?(M=s.v[c],M||(M=new ms(s.i,s.K),s.v[c]=M),w.return(uo(M,h,s.M))):w.return(void 0)})}function xc(s,c){for(var h=c.name||"$",M=[].concat(f(c.wants)),w=new s.i.StringList,P=l(c.wants),C=P.next();!C.done;C=P.next())w.push_back(C.value);P=s.i.PacketListener.implement({onResults:function(B){for(var $={},fe=0;fe<c.wants.length;++fe)$[M[fe]]=B.get(fe);var ye=s.listeners[h];ye&&(s.I=pc(s,$,c.outs).then(function(Ke){Ke=ye(Ke);for(var Be=0;Be<c.wants.length;++Be){var Ae=$[M[Be]];typeof Ae=="object"&&Ae.hasOwnProperty&&Ae.hasOwnProperty("delete")&&Ae.delete()}Ke&&(s.I=Ke)}))}}),s.j.attachMultiListener(w,P),w.delete()}i.onResults=function(s,c){this.listeners[c||"$"]=s},ie("Solution",xs),ie("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function ho(s){return s===void 0&&(s=0),s===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function po(s){var c=this;s=s||{},this.h=new xs({locateFile:s.locateFile,files:function(h){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:ho(h.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:co},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:co},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(h){return h.map(function(M){return oo(to(M))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(h){var M,w,P;return E(function(C){return C.h==1?(M=ho(h),w="third_party/mediapipe/modules/hand_landmark/"+M,U(C,Tr(c.h,M),2)):(P=C.i,c.h.overrideFile(w,P),C.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}i=po.prototype,i.close=function(){return this.h.close(),Promise.resolve()},i.onResults=function(s){this.h.onResults(s)},i.initialize=function(){var s=this;return E(function(c){return U(c,s.h.initialize(),0)})},i.reset=function(){this.h.reset()},i.send=function(s){var c=this;return E(function(h){return U(h,c.h.send(s),0)})},i.setOptions=function(s){this.h.setOptions(s)},ie("Hands",po),ie("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),ie("VERSION","0.4.1675469240")}).call(zi);var W0={};(function(){function i(x){var E=0;return function(){return E<x.length?{done:!1,value:x[E++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(x,E,G){return x==Array.prototype||x==Object.prototype||(x[E]=G.value),x};function t(x){x=[typeof globalThis=="object"&&globalThis,x,typeof window=="object"&&window,typeof self=="object"&&self,typeof zi=="object"&&zi];for(var E=0;E<x.length;++E){var G=x[E];if(G&&G.Math==Math)return G}throw Error("Cannot find global object")}var n=t(this);function r(x,E){if(E)e:{var G=n;x=x.split(".");for(var k=0;k<x.length-1;k++){var K=x[k];if(!(K in G))break e;G=G[K]}x=x[x.length-1],k=G[x],E=E(k),E!=k&&E!=null&&e(G,x,{configurable:!0,writable:!0,value:E})}}r("Symbol",function(x){function E(ie){if(this instanceof E)throw new TypeError("Symbol is not a constructor");return new G(k+(ie||"")+"_"+K++,ie)}function G(ie,z){this.g=ie,e(this,"description",{configurable:!0,writable:!0,value:z})}if(x)return x;G.prototype.toString=function(){return this.g};var k="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",K=0;return E}),r("Symbol.iterator",function(x){if(x)return x;x=Symbol("Symbol.iterator");for(var E="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),G=0;G<E.length;G++){var k=n[E[G]];typeof k=="function"&&typeof k.prototype[x]!="function"&&e(k.prototype,x,{configurable:!0,writable:!0,value:function(){return a(i(this))}})}return x});function a(x){return x={next:x},x[Symbol.iterator]=function(){return this},x}function o(x){var E=typeof Symbol<"u"&&Symbol.iterator&&x[Symbol.iterator];return E?E.call(x):{next:i(x)}}function l(){this.i=!1,this.g=null,this.o=void 0,this.j=1,this.m=0,this.h=null}function f(x){if(x.i)throw new TypeError("Generator is already running");x.i=!0}l.prototype.l=function(x){this.o=x};function u(x,E){x.h={F:E,G:!0},x.j=x.m}l.prototype.return=function(x){this.h={return:x},this.j=this.m};function p(x){this.g=new l,this.h=x}function m(x,E){f(x.g);var G=x.g.g;return G?g(x,"return"in G?G.return:function(k){return{value:k,done:!0}},E,x.g.return):(x.g.return(E),v(x))}function g(x,E,G,k){try{var K=E.call(x.g.g,G);if(!(K instanceof Object))throw new TypeError("Iterator result "+K+" is not an object");if(!K.done)return x.g.i=!1,K;var ie=K.value}catch(z){return x.g.g=null,u(x.g,z),v(x)}return x.g.g=null,k.call(x.g,ie),v(x)}function v(x){for(;x.g.j;)try{var E=x.h(x.g);if(E)return x.g.i=!1,{value:E.value,done:!1}}catch(G){x.g.o=void 0,u(x.g,G)}if(x.g.i=!1,x.g.h){if(E=x.g.h,x.g.h=null,E.G)throw E.F;return{value:E.return,done:!0}}return{value:void 0,done:!0}}function y(x){this.next=function(E){return f(x.g),x.g.g?E=g(x,x.g.g.next,E,x.g.l):(x.g.l(E),E=v(x)),E},this.throw=function(E){return f(x.g),x.g.g?E=g(x,x.g.g.throw,E,x.g.l):(u(x.g,E),E=v(x)),E},this.return=function(E){return m(x,E)},this[Symbol.iterator]=function(){return this}}function T(x){function E(k){return x.next(k)}function G(k){return x.throw(k)}return new Promise(function(k,K){function ie(z){z.done?k(z.value):Promise.resolve(z.value).then(E,G).then(ie,K)}ie(x.next())})}r("Promise",function(x){function E(z){this.h=0,this.i=void 0,this.g=[],this.o=!1;var te=this.j();try{z(te.resolve,te.reject)}catch(j){te.reject(j)}}function G(){this.g=null}function k(z){return z instanceof E?z:new E(function(te){te(z)})}if(x)return x;G.prototype.h=function(z){if(this.g==null){this.g=[];var te=this;this.i(function(){te.l()})}this.g.push(z)};var K=n.setTimeout;G.prototype.i=function(z){K(z,0)},G.prototype.l=function(){for(;this.g&&this.g.length;){var z=this.g;this.g=[];for(var te=0;te<z.length;++te){var j=z[te];z[te]=null;try{j()}catch(le){this.j(le)}}}this.g=null},G.prototype.j=function(z){this.i(function(){throw z})},E.prototype.j=function(){function z(le){return function(de){j||(j=!0,le.call(te,de))}}var te=this,j=!1;return{resolve:z(this.A),reject:z(this.l)}},E.prototype.A=function(z){if(z===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(z instanceof E)this.C(z);else{e:switch(typeof z){case"object":var te=z!=null;break e;case"function":te=!0;break e;default:te=!1}te?this.v(z):this.m(z)}},E.prototype.v=function(z){var te=void 0;try{te=z.then}catch(j){this.l(j);return}typeof te=="function"?this.D(te,z):this.m(z)},E.prototype.l=function(z){this.u(2,z)},E.prototype.m=function(z){this.u(1,z)},E.prototype.u=function(z,te){if(this.h!=0)throw Error("Cannot settle("+z+", "+te+"): Promise already settled in state"+this.h);this.h=z,this.i=te,this.h===2&&this.B(),this.H()},E.prototype.B=function(){var z=this;K(function(){if(z.I()){var te=n.console;typeof te<"u"&&te.error(z.i)}},1)},E.prototype.I=function(){if(this.o)return!1;var z=n.CustomEvent,te=n.Event,j=n.dispatchEvent;return typeof j>"u"?!0:(typeof z=="function"?z=new z("unhandledrejection",{cancelable:!0}):typeof te=="function"?z=new te("unhandledrejection",{cancelable:!0}):(z=n.document.createEvent("CustomEvent"),z.initCustomEvent("unhandledrejection",!1,!0,z)),z.promise=this,z.reason=this.i,j(z))},E.prototype.H=function(){if(this.g!=null){for(var z=0;z<this.g.length;++z)ie.h(this.g[z]);this.g=null}};var ie=new G;return E.prototype.C=function(z){var te=this.j();z.s(te.resolve,te.reject)},E.prototype.D=function(z,te){var j=this.j();try{z.call(te,j.resolve,j.reject)}catch(le){j.reject(le)}},E.prototype.then=function(z,te){function j(qe,tt){return typeof qe=="function"?function(ge){try{le(qe(ge))}catch(ae){de(ae)}}:tt}var le,de,Ie=new E(function(qe,tt){le=qe,de=tt});return this.s(j(z,le),j(te,de)),Ie},E.prototype.catch=function(z){return this.then(void 0,z)},E.prototype.s=function(z,te){function j(){switch(le.h){case 1:z(le.i);break;case 2:te(le.i);break;default:throw Error("Unexpected state: "+le.h)}}var le=this;this.g==null?ie.h(j):this.g.push(j),this.o=!0},E.resolve=k,E.reject=function(z){return new E(function(te,j){j(z)})},E.race=function(z){return new E(function(te,j){for(var le=o(z),de=le.next();!de.done;de=le.next())k(de.value).s(te,j)})},E.all=function(z){var te=o(z),j=te.next();return j.done?k([]):new E(function(le,de){function Ie(ge){return function(ae){qe[ge]=ae,tt--,tt==0&&le(qe)}}var qe=[],tt=0;do qe.push(void 0),tt++,k(j.value).s(Ie(qe.length-1),de),j=te.next();while(!j.done)})},E});var _=typeof Object.assign=="function"?Object.assign:function(x,E){for(var G=1;G<arguments.length;G++){var k=arguments[G];if(k)for(var K in k)Object.prototype.hasOwnProperty.call(k,K)&&(x[K]=k[K])}return x};r("Object.assign",function(x){return x||_});var d=this||self,N={facingMode:"user",width:640,height:480};function D(x,E){this.video=x,this.i=0,this.h=Object.assign(Object.assign({},N),E)}D.prototype.stop=function(){var x=this,E,G,k,K;return T(new y(new p(function(ie){if(x.g){for(E=x.g.getTracks(),G=o(E),k=G.next();!k.done;k=G.next())K=k.value,K.stop();x.g=void 0}ie.j=0})))},D.prototype.start=function(){var x=this,E;return T(new y(new p(function(G){return navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists."),E=x.h,G.return(navigator.mediaDevices.getUserMedia({video:{facingMode:E.facingMode,width:E.width,height:E.height}}).then(function(k){H(x,k)}).catch(function(k){var K="Failed to acquire camera feed: "+k;throw console.error(K),alert(K),k}))})))};function U(x){window.requestAnimationFrame(function(){L(x)})}function H(x,E){x.g=E,x.video.srcObject=E,x.video.onloadedmetadata=function(){x.video.play(),U(x)}}function L(x){var E=null;x.video.paused||x.video.currentTime===x.i||(x.i=x.video.currentTime,E=x.h.onFrame()),E?E.then(function(){U(x)}):U(x)}var O=["Camera"],Y=d;O[0]in Y||typeof Y.execScript>"u"||Y.execScript("var "+O[0]);for(var A;O.length&&(A=O.shift());)O.length||D===void 0?Y[A]&&Y[A]!==Object.prototype[A]?Y=Y[A]:Y=Y[A]={}:Y[A]=D}).call(zi);const X0={class:"particle-container"},q0={class:"top-bar"},Y0={key:0,class:"help-panel"},j0={key:1,class:"camera-view"},K0={class:"camera-header"},Z0={class:"gesture-text"},$0={key:0,class:"scale-text"},J0={class:"video-wrapper"},dl=.3,pl=.2,Q0=16,em={__name:"ParticleSystem",setup(i){const e=mn(null),t=mn(null),n=mn(null),r=mn(null),a=mn("heart"),o=mn(!1),l=mn(1),f=mn(!1),u=mn("gesture"),p=mn("等待手势"),m=mn(!1);let g,v,y,T,_,d,N=1,D=.002,U=0,H=0,L=0,O=null,Y=null,A=0;const x={heart:"#ff1744",flower:"#ff4081",saturn:"#00bcd4",buddha:"#ffd700",firework:"#ff6b35",spiral:"#7c4dff",star:"#ffd700",cube:"#00e676",dna:"#00bfa5",wave:"#2979ff"},E={heart:()=>{const ge=[];for(let ae=0;ae<3e3;ae++){const V=ae/3e3*Math.PI*2,Z=16*Math.pow(Math.sin(V),3),re=13*Math.cos(V)-5*Math.cos(2*V)-2*Math.cos(3*V)-Math.cos(4*V),pe=(Math.random()-.5)*5;ge.push(new Q(Z*.3,re*.3,pe))}return ge},flower:()=>{const ge=[];for(let ae=0;ae<3e3;ae++){const V=ae/3e3*Math.PI*2,Z=5*(1+.5*Math.sin(5*V)),re=Z*Math.cos(V),pe=Z*Math.sin(V),me=(Math.random()-.5)*3;ge.push(new Q(re,pe,me))}return ge},saturn:()=>{const ge=[];for(let ae=0;ae<1500;ae++){const V=Math.acos(2*Math.random()-1),Z=Math.random()*Math.PI*2,re=4,pe=re*Math.sin(V)*Math.cos(Z),me=re*Math.sin(V)*Math.sin(Z),Ue=re*Math.cos(V);ge.push(new Q(pe,me,Ue))}for(let ae=0;ae<500;ae++){const V=Math.random()*Math.PI*2,Z=6+Math.random()*2,re=Z*Math.cos(V),pe=(Math.random()-.5)*.5,me=Z*Math.sin(V);ge.push(new Q(re,pe,me))}return ge},buddha:()=>{const ge=[];for(let ae=0;ae<3e3;ae++){const V=Math.acos(2*Math.random()-1),Z=Math.random()*Math.PI*2,re=3+Math.abs(Math.sin(V*3))*2,pe=re*Math.sin(V)*Math.cos(Z),me=re*Math.cos(V)+2,Ue=re*Math.sin(V)*Math.sin(Z);ge.push(new Q(pe,me,Ue))}return ge},firework:()=>{const ge=[];for(let ae=0;ae<3e3;ae++){const V=Math.random()*Math.PI*2,Z=Math.random()*Math.PI,re=Math.pow(Math.random(),.5)*8,pe=re*Math.sin(Z)*Math.cos(V),me=re*Math.sin(Z)*Math.sin(V),Ue=re*Math.cos(Z);ge.push(new Q(pe,me,Ue))}return ge},spiral:()=>{const ge=[];for(let ae=0;ae<3e3;ae++){const V=ae/3e3*Math.PI*8,Z=V*.5,re=Z*Math.cos(V),pe=V*.3-6,me=Z*Math.sin(V);ge.push(new Q(re,pe,me))}return ge},star:()=>{const ge=[];for(let ae=0;ae<3e3;ae++){const V=ae/3e3*Math.PI*2,Z=5,re=6,pe=2.5,xt=Math.floor(ae/3e3*Z*2)%2===0?re:pe,Pe=V*Z,Qe=xt*Math.cos(Pe),I=xt*Math.sin(Pe),et=(Math.random()-.5)*2;ge.push(new Q(Qe,I,et))}return ge},cube:()=>{const ge=[];for(let V=0;V<3e3;V++){const Z=Math.floor(Math.random()*6);let re,pe,me;switch(Z){case 0:re=5,pe=(Math.random()-.5)*5*2,me=(Math.random()-.5)*5*2;break;case 1:re=-5,pe=(Math.random()-.5)*5*2,me=(Math.random()-.5)*5*2;break;case 2:pe=5,re=(Math.random()-.5)*5*2,me=(Math.random()-.5)*5*2;break;case 3:pe=-5,re=(Math.random()-.5)*5*2,me=(Math.random()-.5)*5*2;break;case 4:me=5,re=(Math.random()-.5)*5*2,pe=(Math.random()-.5)*5*2;break;case 5:me=-5,re=(Math.random()-.5)*5*2,pe=(Math.random()-.5)*5*2;break}ge.push(new Q(re,pe,me))}return ge},dna:()=>{const ge=[];for(let ae=0;ae<3e3;ae++){const V=ae/3e3*Math.PI*10,Z=3,re=Z*Math.cos(V),pe=Z*Math.sin(V),me=Z*Math.cos(V+Math.PI),Ue=Z*Math.sin(V+Math.PI),xt=ae/3e3*20-10;ae%2===0?ge.push(new Q(re,xt,pe)):ge.push(new Q(me,xt,Ue))}return ge},wave:()=>{const ge=[];for(let V=0;V<50;V++)for(let Z=0;Z<50;Z++){const re=(V-25)*.5,pe=(Z-50/2)*.5,me=Math.sqrt(re*re+pe*pe),Ue=Math.sin(me*.5)*3;ge.push(new Q(re,Ue,pe))}return ge}},G=()=>{g=new Xu,v=new hn(75,window.innerWidth/window.innerHeight,.1,1e3),v.position.z=20,y=new H0({canvas:e.value,antialias:!0,alpha:!0}),y.setSize(window.innerWidth,window.innerHeight),y.setClearColor(0,1),k(),K()},k=()=>{T&&g.remove(T);const ge=E[a.value](),ae=new Tn,V=new Float32Array(ge.length*3);ge.forEach((re,pe)=>{V[pe*3]=re.x,V[pe*3+1]=re.y,V[pe*3+2]=re.z}),ae.setAttribute("position",new Sn(V,3));const Z=new Bl({color:x[a.value],size:.2,transparent:!0,opacity:.9,sizeAttenuation:!0,blending:js});T=new Zu(ae,Z),g.add(T)},K=()=>{requestAnimationFrame(K),T&&u.value!=="draw"&&(T.rotation.y+=D,T.scale.set(l.value,l.value,l.value)),y.render(g,v)},ie=async()=>{_=new k0.Hands({locateFile:ae=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1646424915/${ae}`}),_.setOptions({maxNumHands:1,modelComplexity:1,minDetectionConfidence:.7,minTrackingConfidence:.7}),_.onResults(u.value==="draw"?te:z);const ge=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480}});t.value.srcObject=ge,d=new W0.Camera(t.value,{onFrame:async()=>{await _.send({image:t.value})},width:640,height:480}),d.start()},z=ge=>{const ae=n.value,V=ae.getContext("2d");if(ae.width=t.value.videoWidth,ae.height=t.value.videoHeight,V.clearRect(0,0,ae.width,ae.height),ge.multiHandLandmarks&&ge.multiHandLandmarks.length>=1){f.value=!0;const Z=ge.multiHandLandmarks[0],re=Z[4],pe=Z[8];Z[0];const me=Math.sqrt(Math.pow(re.x-pe.x,2)+Math.pow(re.y-pe.y,2)),Ue=U*(1-dl)+me*dl;U=Ue;const xt=Math.atan2(pe.y-re.y,pe.x-re.x);let Pe=xt-H;if(Pe>Math.PI&&(Pe-=2*Math.PI),Pe<-Math.PI&&(Pe+=2*Math.PI),Ue<.05?(p.value="🤏 捏合缩小",l.value=Math.max(.3,l.value-.02)):Ue>.15?(p.value="🖐️ 张开放大",l.value=Math.min(3,l.value+.02)):p.value="✋ 保持",Math.abs(Pe)>.04){const I=Pe*.25;L=L*(1-pl)+I*pl,D=L}else L*=.95,D=L;H=xt,V.beginPath(),V.moveTo(re.x*ae.width,re.y*ae.height),V.lineTo(pe.x*ae.width,pe.y*ae.height),V.strokeStyle=Ue<.08?"#ff3366":"#00ff88",V.lineWidth=5,V.stroke(),[re,pe].forEach((I,et)=>{const Je=I.x*ae.width,ut=I.y*ae.height;V.beginPath(),V.arc(Je,ut,8,0,2*Math.PI),V.fillStyle=Ue<.08?"#ff3366":"#00ff88",V.fill()}),[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]].forEach(([I,et])=>{const Je=Z[I],ut=Z[et];V.beginPath(),V.moveTo(Je.x*ae.width,Je.y*ae.height),V.lineTo(ut.x*ae.width,ut.y*ae.height),V.strokeStyle="rgba(255, 255, 255, 0.3)",V.lineWidth=2,V.stroke()})}else f.value=!1,p.value="等待手势",D=.002},te=ge=>{const ae=n.value,V=ae.getContext("2d");if(ae.width=t.value.videoWidth,ae.height=t.value.videoHeight,V.clearRect(0,0,ae.width,ae.height),!O&&r.value&&(O=r.value.getContext("2d"),r.value.width=window.innerWidth,r.value.height=window.innerHeight),ge.multiHandLandmarks&&ge.multiHandLandmarks.length>=1){f.value=!0;const re=ge.multiHandLandmarks[0][8];p.value="✍️ 绘制中";const pe=(1-re.x)*window.innerWidth,me=re.y*window.innerHeight,Ue=Date.now();O&&Ue-A>Q0&&(A=Ue,Y?Math.sqrt(Math.pow(pe-Y.x,2)+Math.pow(me-Y.y,2))>3&&(O.beginPath(),O.moveTo(Y.x,Y.y),O.lineTo(pe,me),O.strokeStyle=x[a.value],O.lineWidth=8,O.lineCap="round",O.lineJoin="round",O.stroke(),Y={x:pe,y:me}):Y={x:pe,y:me}),V.beginPath(),V.arc(re.x*ae.width,re.y*ae.height,10,0,2*Math.PI),V.fillStyle=x[a.value],V.fill()}else f.value=!1,p.value="等待手势",Y=null},j=()=>{Y=null,O&&r.value&&O.clearRect(0,0,r.value.width,r.value.height)},le=()=>{k(),u.value==="draw"&&j()},de=()=>{document.fullscreenElement?(document.exitFullscreen(),o.value=!1):(document.documentElement.requestFullscreen(),o.value=!0)},Ie=()=>{v.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),y.setSize(window.innerWidth,window.innerHeight)},qe=ge=>{if(u.value==="mouse"){ge.preventDefault();const ae=ge.deltaY*-.001;N=Math.max(.3,Math.min(3,N+ae)),l.value=N}},tt=()=>{u.value!=="mouse"?(d&&d.stop(),_&&_.close(),t.value&&t.value.srcObject&&t.value.srcObject.getTracks().forEach(ge=>ge.stop()),ie()):(d&&d.stop(),_&&_.close(),t.value&&t.value.srcObject&&t.value.srcObject.getTracks().forEach(ge=>ge.stop()),f.value=!1,p.value="等待手势")};return yc(()=>{G(),u.value==="gesture"&&ie(),window.addEventListener("resize",Ie),window.addEventListener("wheel",qe,{passive:!1})}),Ec(()=>{window.removeEventListener("resize",Ie),window.removeEventListener("wheel",qe),d&&d.stop(),_&&_.close(),y&&y.dispose()}),(ge,ae)=>(yi(),Ei("div",X0,[gs(nt("canvas",{ref_key:"canvasRef",ref:e},null,512),[[Tc,u.value!=="draw"]]),u.value==="draw"?(yi(),Ei("canvas",{key:0,ref_key:"drawCanvasRef",ref:r,class:"draw-canvas"},null,512)):tr("",!0),nt("div",q0,[gs(nt("select",{"onUpdate:modelValue":ae[0]||(ae[0]=V=>a.value=V),onChange:le,class:"model-select"},[...ae[3]||(ae[3]=[Ac('<option value="heart" data-v-8b51e5da>❤️ 爱心</option><option value="flower" data-v-8b51e5da>🌸 花朵</option><option value="saturn" data-v-8b51e5da>🪐 土星</option><option value="buddha" data-v-8b51e5da>🧘 佛像</option><option value="firework" data-v-8b51e5da>🎆 烟花</option><option value="spiral" data-v-8b51e5da>🌀 螺旋</option><option value="star" data-v-8b51e5da>⭐ 星星</option><option value="cube" data-v-8b51e5da>🎲 魔方</option><option value="dna" data-v-8b51e5da>🧬 DNA</option><option value="wave" data-v-8b51e5da>🌊 波浪</option>',10)])],544),[[mo,a.value]]),nt("button",{onClick:ae[1]||(ae[1]=V=>m.value=!m.value),class:xo(["icon-btn",{active:m.value}]),title:"操作说明"},wr(m.value?"✕":"❓"),3),nt("button",{onClick:de,class:"icon-btn",title:"全屏"},wr(o.value?"🔙":"🖥️"),1),gs(nt("select",{"onUpdate:modelValue":ae[2]||(ae[2]=V=>u.value=V),onChange:tt,class:"mode-select"},[...ae[4]||(ae[4]=[nt("option",{value:"gesture"},"🤏 手势",-1),nt("option",{value:"draw"},"✍️ 写字",-1),nt("option",{value:"mouse"},"🖱️ 鼠标",-1)])],544),[[mo,u.value]]),u.value==="draw"?(yi(),Ei("button",{key:0,onClick:j,class:"icon-btn",title:"清空画布"}," 🗑️ ")):tr("",!0)]),wc(Cc,{name:"fade"},{default:Rc(()=>[m.value?(yi(),Ei("div",Y0,[...ae[5]||(ae[5]=[nt("h3",null,"🎮 操作说明",-1),nt("div",{class:"help-content"},[nt("div",{class:"help-section"},[nt("h4",null,"🤏 手势控制"),nt("ul",null,[nt("li",null,[nt("strong",null,"捏合/张开："),nr("控制粒子缩放")]),nt("li",null,[nt("strong",null,"旋转手指："),nr("旋转粒子")])])]),nt("div",{class:"help-section"},[nt("h4",null,"✍️ 写字模式"),nt("ul",null,[nt("li",null,[nt("strong",null,"伸出食指："),nr("开始绘制轨迹")]),nt("li",null,[nt("strong",null,"点击🗑️按钮："),nr("清空画板")])])]),nt("div",{class:"help-section"},[nt("h4",null,"🖱️ 鼠标控制"),nt("ul",null,[nt("li",null,[nt("strong",null,"滚轮滚动："),nr("缩放粒子")])])]),nt("div",{class:"help-section"},[nt("h4",null,"� 提示"),nt("ul",null,[nt("li",null,"保持手距离摄像头30-50cm"),nt("li",null,"确保光线充足"),nt("li",null,"手掌正面朝向摄像头")])])],-1)])])):tr("",!0)]),_:1}),u.value!=="mouse"?(yi(),Ei("div",j0,[nt("div",K0,[nt("span",{class:xo(["status-dot",{active:f.value}])},null,2),nt("span",Z0,wr(p.value),1),u.value==="gesture"?(yi(),Ei("span",$0,wr(l.value.toFixed(1))+"x",1)):tr("",!0)]),nt("div",J0,[nt("video",{ref_key:"videoRef",ref:t,autoplay:"",playsinline:""},null,512),nt("canvas",{ref_key:"handCanvasRef",ref:n},null,512)])])):tr("",!0)]))}},nm=bc(em,[["__scopeId","data-v-8b51e5da"]]);export{nm as default};
