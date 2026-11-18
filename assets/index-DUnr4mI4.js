(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1014,d=1015,f=1016,p=1020,m=1023,h=1026,g=1027,_=2300,v=2301,y=2302,b=2400,x=2401,S=2402,C=3e3,w=3001,T=3200,ee=3201,E=`srgb`,te=`srgb-linear`,ne=`display-p3`,D=`display-p3-linear`,re=`linear`,ie=`srgb`,ae=`rec709`,oe=7680,se=35044,ce=1035,le=2e3,ue=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},de=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),fe=Math.PI/180,pe=180/Math.PI;function me(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(de[e&255]+de[e>>8&255]+de[e>>16&255]+de[e>>24&255]+`-`+de[t&255]+de[t>>8&255]+`-`+de[t>>16&15|64]+de[t>>24&255]+`-`+de[n&63|128]+de[n>>8&255]+`-`+de[n>>16&255]+de[n>>24&255]+de[r&255]+de[r>>8&255]+de[r>>16&255]+de[r>>24&255]).toLowerCase()}function he(e,t,n){return Math.max(t,Math.min(n,e))}function ge(e,t){return(e%t+t)%t}function _e(e,t,n){return(1-n)*e+n*t}function ve(e){return!(e&e-1)&&e!==0}function ye(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function be(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function xe(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var O=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(he(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},k=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Se.makeScale(e,t)),this}rotate(e){return this.premultiply(Se.makeRotation(-e)),this}translate(e,t){return this.premultiply(Se.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Se=new k;function Ce(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function A(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function we(){let e=A(`canvas`);return e.style.display=`block`,e}var Te={};function Ee(e){e in Te||(Te[e]=!0,console.warn(e))}var De=new k().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),j=new k().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oe={[te]:{transfer:re,primaries:ae,toReference:e=>e,fromReference:e=>e},[E]:{transfer:ie,primaries:ae,toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[D]:{transfer:re,primaries:`p3`,toReference:e=>e.applyMatrix3(j),fromReference:e=>e.applyMatrix3(De)},[ne]:{transfer:ie,primaries:`p3`,toReference:e=>e.convertSRGBToLinear().applyMatrix3(j),fromReference:e=>e.applyMatrix3(De).convertLinearToSRGB()}},ke=new Set([te,D]),M={enabled:!0,_workingColorSpace:te,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!ke.has(e))throw Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;let r=Oe[t].toReference,i=Oe[n].fromReference;return i(r(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Oe[e].primaries},getTransfer:function(e){return e===``?re:Oe[e].transfer}};function Ae(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function je(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Me,Ne=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Me===void 0&&(Me=A(`canvas`)),Me.width=e.width,Me.height=e.height;let n=Me.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Me}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=A(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ae(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ae(t[e]/255)*255):t[e]=Ae(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Pe=0,Fe=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Pe++}),this.uuid=me(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ie(r[t].image)):e.push(Ie(r[t]))}else e=Ie(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ie(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ne.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var Le=0,Re=class r extends ue{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=m,f=l,p=r.DEFAULT_ANISOTROPY,h=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Le++}),this.uuid=me(),this.name=``,this.source=new Fe(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new O(0,0),this.repeat=new O(1,1),this.center=new O(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new k,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h==`string`?this.colorSpace=h:(Ee(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace=h===3001?E:``),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ee(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace===`srgb`?w:C}set encoding(e){Ee(`THREE.Texture: Property .encoding has been replaced by .colorSpace.`),this.colorSpace=e===3001?E:``}};Re.DEFAULT_IMAGE=null,Re.DEFAULT_MAPPING=300,Re.DEFAULT_ANISOTROPY=1;var ze=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Be=class extends ue{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ze(0,0,e,t),this.scissorTest=!1,this.viewport=new ze(0,0,e,t);let r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ee(`THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace.`),n.colorSpace=n.encoding===3001?E:``),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Re(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Fe(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ve=class extends Be{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},He=class extends Re{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ue=class extends Re{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},We=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0)e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;else if(o===1)e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else{if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(he(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ke.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ke.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ge.copy(this).projectOnVector(e),this.sub(Ge)}reflect(e){return this.sub(Ge.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(he(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ge=new N,Ke=new We,qe=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ye.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ye.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ye.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Ye):Ye.fromBufferAttribute(r,t),Ye.applyMatrix4(e.matrixWorld),this.expandByPoint(Ye);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Xe.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Xe.copy(e.boundingBox)),Xe.applyMatrix4(e.matrixWorld),this.union(Xe)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ye),Ye.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rt),it.subVectors(this.max,rt),Ze.subVectors(e.a,rt),Qe.subVectors(e.b,rt),$e.subVectors(e.c,rt),et.subVectors(Qe,Ze),tt.subVectors($e,Qe),nt.subVectors(Ze,$e);let t=[0,-et.z,et.y,0,-tt.z,tt.y,0,-nt.z,nt.y,et.z,0,-et.x,tt.z,0,-tt.x,nt.z,0,-nt.x,-et.y,et.x,0,-tt.y,tt.x,0,-nt.y,nt.x,0];return!st(t,Ze,Qe,$e,it)||(t=[1,0,0,0,1,0,0,0,1],!st(t,Ze,Qe,$e,it))?!1:(at.crossVectors(et,tt),t=[at.x,at.y,at.z],st(t,Ze,Qe,$e,it))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ye).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ye).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Je)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Je=[new N,new N,new N,new N,new N,new N,new N,new N],Ye=new N,Xe=new qe,Ze=new N,Qe=new N,$e=new N,et=new N,tt=new N,nt=new N,rt=new N,it=new N,at=new N,ot=new N;function st(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){ot.fromArray(e,a);let o=i.x*Math.abs(ot.x)+i.y*Math.abs(ot.y)+i.z*Math.abs(ot.z),s=t.dot(ot),c=n.dot(ot),l=r.dot(ot);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ct=new qe,lt=new N,ut=new N,dt=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?ct.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lt.subVectors(e,this.center);let t=lt.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(lt,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ut.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lt.copy(e.center).add(ut)),this.expandByPoint(lt.copy(e.center).sub(ut))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ft=new N,pt=new N,mt=new N,ht=new N,gt=new N,_t=new N,vt=new N,yt=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ft)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ft.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ft.copy(this.origin).addScaledVector(this.direction,t),ft.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){pt.copy(e).add(t).multiplyScalar(.5),mt.copy(t).sub(e).normalize(),ht.copy(this.origin).sub(pt);let i=e.distanceTo(t)*.5,a=-this.direction.dot(mt),o=ht.dot(this.direction),s=-ht.dot(mt),c=ht.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(pt).addScaledVector(mt,d),f}intersectSphere(e,t){ft.subVectors(e.center,this.origin);let n=ft.dot(this.direction),r=ft.dot(ft)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ft)!==null}intersectTriangle(e,t,n,r,i){gt.subVectors(t,e),_t.subVectors(n,e),vt.crossVectors(gt,_t);let a=this.direction.dot(vt),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ht.subVectors(this.origin,e);let s=o*this.direction.dot(_t.crossVectors(ht,_t));if(s<0)return null;let c=o*this.direction.dot(gt.cross(ht));if(c<0||s+c>a)return null;let l=-o*ht.dot(vt);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/xt.setFromMatrixColumn(e,0).length(),i=1/xt.setFromMatrixColumn(e,1).length(),a=1/xt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ct,e,wt)}lookAt(e,t,n){let r=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),Tt.crossVectors(n,Dt),Tt.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),Tt.crossVectors(n,Dt)),Tt.normalize(),Et.crossVectors(Dt,Tt),r[0]=Tt.x,r[4]=Et.x,r[8]=Dt.x,r[1]=Tt.y,r[5]=Et.y,r[9]=Dt.y,r[2]=Tt.z,r[6]=Et.z,r[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],ee=r[5],E=r[9],te=r[13],ne=r[2],D=r[6],re=r[10],ie=r[14],ae=r[3],oe=r[7],se=r[11],ce=r[15];return i[0]=a*x+o*T+s*ne+c*ae,i[4]=a*S+o*ee+s*D+c*oe,i[8]=a*C+o*E+s*re+c*se,i[12]=a*w+o*te+s*ie+c*ce,i[1]=l*x+u*T+d*ne+f*ae,i[5]=l*S+u*ee+d*D+f*oe,i[9]=l*C+u*E+d*re+f*se,i[13]=l*w+u*te+d*ie+f*ce,i[2]=p*x+m*T+h*ne+g*ae,i[6]=p*S+m*ee+h*D+g*oe,i[10]=p*C+m*E+h*re+g*se,i[14]=p*w+m*te+h*ie+g*ce,i[3]=_*x+v*T+y*ne+b*ae,i[7]=_*S+v*ee+y*D+b*oe,i[11]=_*C+v*E+y*re+b*se,i[15]=_*w+v*te+y*ie+b*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=xt.set(r[0],r[1],r[2]).length(),a=xt.set(r[4],r[5],r[6]).length(),o=xt.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],St.copy(this);let s=1/i,c=1/a,l=1/o;return St.elements[0]*=s,St.elements[1]*=s,St.elements[2]*=s,St.elements[4]*=c,St.elements[5]*=c,St.elements[6]*=c,St.elements[8]*=l,St.elements[9]*=l,St.elements[10]*=l,t.setFromRotationMatrix(St),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=le){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=le){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},xt=new N,St=new bt,Ct=new N(0,0,0),wt=new N(1,1,1),Tt=new N,Et=new N,Dt=new N,Ot=new bt,kt=new We,At=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-he(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(he(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(he(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ot.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ot,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kt.setFromEuler(this),this.setFromQuaternion(kt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};At.DEFAULT_ORDER=`XYZ`;var jt=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Mt=0,Nt=new N,Pt=new We,Ft=new bt,It=new N,Lt=new N,Rt=new N,zt=new We,Bt=new N(1,0,0),Vt=new N(0,1,0),Ht=new N(0,0,1),Ut={type:`added`},Wt={type:`removed`},Gt=class e extends ue{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mt++}),this.uuid=me(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new N,n=new At,r=new We,i=new N(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new bt},normalMatrix:{value:new k}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pt.setFromAxisAngle(e,t),this.quaternion.multiply(Pt),this}rotateOnWorldAxis(e,t){return Pt.setFromAxisAngle(e,t),this.quaternion.premultiply(Pt),this}rotateX(e){return this.rotateOnAxis(Bt,e)}rotateY(e){return this.rotateOnAxis(Vt,e)}rotateZ(e){return this.rotateOnAxis(Ht,e)}translateOnAxis(e,t){return Nt.copy(e).applyQuaternion(this.quaternion),this.position.add(Nt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bt,e)}translateY(e){return this.translateOnAxis(Vt,e)}translateZ(e){return this.translateOnAxis(Ht,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ft.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?It.copy(e):It.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Lt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ft.lookAt(Lt,It,this.up):Ft.lookAt(It,Lt,this.up),this.quaternion.setFromRotationMatrix(Ft),r&&(Ft.extractRotation(r.matrixWorld),Pt.setFromRotationMatrix(Ft),this.quaternion.premultiply(Pt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ut)):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wt)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ft.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ft.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ft),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lt,e,Rt),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lt,zt,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++){let n=e[t];n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Gt.DEFAULT_UP=new N(0,1,0),Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kt=new N,qt=new N,Jt=new N,Yt=new N,Xt=new N,Zt=new N,Qt=new N,$t=new N,en=new N,tn=new N,nn=!1,rn=class e{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Kt.subVectors(e,t),r.cross(Kt);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Kt.subVectors(r,t),qt.subVectors(n,t),Jt.subVectors(e,t);let a=Kt.dot(Kt),o=Kt.dot(qt),s=Kt.dot(Jt),c=qt.dot(qt),l=qt.dot(Jt),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Yt)!==null&&Yt.x>=0&&Yt.y>=0&&Yt.x+Yt.y<=1}static getUV(e,t,n,r,i,a,o,s){return nn===!1&&(console.warn(`THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().`),nn=!0),this.getInterpolation(e,t,n,r,i,a,o,s)}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Yt)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Yt.x),s.addScaledVector(a,Yt.y),s.addScaledVector(o,Yt.z),s)}static isFrontFacing(e,t,n,r){return Kt.subVectors(n,t),qt.subVectors(e,t),Kt.cross(qt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),qt.subVectors(this.a,this.b),Kt.cross(qt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,r,i,a){return nn===!1&&(console.warn(`THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation().`),nn=!0),e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Xt.subVectors(r,n),Zt.subVectors(i,n),$t.subVectors(e,n);let s=Xt.dot($t),c=Zt.dot($t);if(s<=0&&c<=0)return t.copy(n);en.subVectors(e,r);let l=Xt.dot(en),u=Zt.dot(en);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Xt,a);tn.subVectors(e,i);let f=Xt.dot(tn),p=Zt.dot(tn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Zt,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Qt.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Qt,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Xt,a).addScaledVector(Zt,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},an={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},on={h:0,s:0,l:0},sn={h:0,s:0,l:0};function cn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var P=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=E){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,M.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=M.workingColorSpace){return this.r=e,this.g=t,this.b=n,M.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=M.workingColorSpace){if(e=ge(e,1),t=he(t,0,1),n=he(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=cn(i,r,e+1/3),this.g=cn(i,r,e),this.b=cn(i,r,e-1/3)}return M.toWorkingColorSpace(this,r),this}setStyle(e,t=E){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=E){let n=an[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ae(e.r),this.g=Ae(e.g),this.b=Ae(e.b),this}copyLinearToSRGB(e){return this.r=je(e.r),this.g=je(e.g),this.b=je(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=E){return M.fromWorkingColorSpace(ln.copy(this),e),Math.round(he(ln.r*255,0,255))*65536+Math.round(he(ln.g*255,0,255))*256+Math.round(he(ln.b*255,0,255))}getHexString(e=E){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=M.workingColorSpace){M.fromWorkingColorSpace(ln.copy(this),t);let n=ln.r,r=ln.g,i=ln.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=M.workingColorSpace){return M.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=E){M.fromWorkingColorSpace(ln.copy(this),e);let t=ln.r,n=ln.g,r=ln.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(on),this.setHSL(on.h+e,on.s+t,on.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(on),e.getHSL(sn);let n=_e(on.h,sn.h,t),r=_e(on.s,sn.s,t),i=_e(on.l,sn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new P;P.NAMES=an;var un=0,dn=class extends ue{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:un++}),this.uuid=me(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new P(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oe,this.stencilZFail=oe,this.stencilZPass=oe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},fn=class extends dn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new P(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},pn=new N,mn=new O,hn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=se,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=d,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn(`THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXY(t,mn.x,mn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=be(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=be(t,this.array)),t}setX(e,t){return this.normalized&&(t=xe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=be(t,this.array)),t}setY(e,t){return this.normalized&&(t=xe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=be(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=be(t,this.array)),t}setW(e,t){return this.normalized&&(t=xe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xe(t,this.array),n=xe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=xe(t,this.array),n=xe(n,this.array),r=xe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=xe(t,this.array),n=xe(n,this.array),r=xe(r,this.array),i=xe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},gn=class extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},_n=class extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},vn=class extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}},yn=0,bn=new bt,xn=new Gt,Sn=new N,Cn=new qe,wn=new qe,Tn=new N,En=class e extends ue{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yn++}),this.uuid=me(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ce(e)?_n:gn)(e,1):e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new k().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return xn.lookAt(e),xn.updateMatrix(),this.applyMatrix4(xn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sn).negate(),this.translate(Sn.x,Sn.y,Sn.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new vn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qe);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Cn.setFromBufferAttribute(n),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingSphere.set(new N,1/0);else if(e){let n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];wn.setFromBufferAttribute(n),this.morphTargetsRelative?(Tn.addVectors(Cn.min,wn.min),Cn.expandByPoint(Tn),Tn.addVectors(Cn.max,wn.max),Cn.expandByPoint(Tn)):(Cn.expandByPoint(wn.min),Cn.expandByPoint(wn.max))}Cn.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Tn.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Tn));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Tn.fromBufferAttribute(a,t),o&&(Sn.fromBufferAttribute(e,t),Tn.add(Sn)),r=Math.max(r,n.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=e.array,r=t.position.array,i=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new hn(new Float32Array(4*o),4));let s=this.getAttribute(`tangent`).array,c=[],l=[];for(let e=0;e<o;e++)c[e]=new N,l[e]=new N;let u=new N,d=new N,f=new N,p=new O,m=new O,h=new O,g=new N,_=new N;function v(e,t,n){u.fromArray(r,e*3),d.fromArray(r,t*3),f.fromArray(r,n*3),p.fromArray(a,e*2),m.fromArray(a,t*2),h.fromArray(a,n*2),d.sub(u),f.sub(u),m.sub(p),h.sub(p);let i=1/(m.x*h.y-h.x*m.y);isFinite(i)&&(g.copy(d).multiplyScalar(h.y).addScaledVector(f,-m.y).multiplyScalar(i),_.copy(f).multiplyScalar(m.x).addScaledVector(d,-h.x).multiplyScalar(i),c[e].add(g),c[t].add(g),c[n].add(g),l[e].add(_),l[t].add(_),l[n].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)v(n[e+0],n[e+1],n[e+2])}let b=new N,x=new N,S=new N,C=new N;function w(e){S.fromArray(i,e*3),C.copy(S);let t=c[e];b.copy(t),b.sub(S.multiplyScalar(S.dot(t))).normalize(),x.crossVectors(C,t);let n=x.dot(l[e])<0?-1:1;s[e*4]=b.x,s[e*4+1]=b.y,s[e*4+2]=b.z,s[e*4+3]=n}for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)w(n[e+0]),w(n[e+1]),w(n[e+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new hn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new N,i=new N,a=new N,o=new N,s=new N,c=new N,l=new N,u=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tn.fromBufferAttribute(e,t),Tn.normalize(),e.setXYZ(t,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new hn(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Dn=new bt,On=new yt,kn=new dt,An=new N,jn=new N,Mn=new N,Nn=new N,Pn=new N,Fn=new N,In=new O,Ln=new O,Rn=new O,zn=new N,Bn=new N,Vn=new N,Hn=new N,Un=new N,Wn=class extends Gt{constructor(e=new En,t=new fn){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Fn.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Pn.fromBufferAttribute(s,e),a?Fn.addScaledVector(Pn,r):Fn.addScaledVector(Pn.sub(t),r))}t.add(Fn)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),kn.copy(n.boundingSphere),kn.applyMatrix4(i),On.copy(e.ray).recast(e.near),kn.containsPoint(On.origin)===!1&&(On.intersectSphere(kn,An)===null||On.origin.distanceToSquared(An)>(e.far-e.near)**2)||(Dn.copy(i).invert(),On.copy(e.ray).applyMatrix4(Dn),(n.boundingBox===null||On.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,On)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Kn(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Kn(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Kn(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Kn(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Gn(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Un.copy(s),Un.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Un);return l<n.near||l>n.far?null:{distance:l,point:Un.clone(),object:e}}function Kn(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,jn),e.getVertexPosition(c,Mn),e.getVertexPosition(l,Nn);let u=Gn(e,t,n,r,jn,Mn,Nn,Hn);if(u){i&&(In.fromBufferAttribute(i,s),Ln.fromBufferAttribute(i,c),Rn.fromBufferAttribute(i,l),u.uv=rn.getInterpolation(Hn,jn,Mn,Nn,In,Ln,Rn,new O)),a&&(In.fromBufferAttribute(a,s),Ln.fromBufferAttribute(a,c),Rn.fromBufferAttribute(a,l),u.uv1=rn.getInterpolation(Hn,jn,Mn,Nn,In,Ln,Rn,new O),u.uv2=u.uv1),o&&(zn.fromBufferAttribute(o,s),Bn.fromBufferAttribute(o,c),Vn.fromBufferAttribute(o,l),u.normal=rn.getInterpolation(Hn,jn,Mn,Nn,zn,Bn,Vn,new N),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let e={a:s,b:c,c:l,normal:new N,materialIndex:0};rn.getNormal(jn,Mn,Nn,e.normal),u.face=e}return u}var qn=class e extends En{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new vn(c,3)),this.setAttribute(`normal`,new vn(l,3)),this.setAttribute(`uv`,new vn(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,ee=0,E=new N;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)E[e]=(s*v-b)*r,E[t]=o*i,E[n]=S,c.push(E.x,E.y,E.z),E[e]=0,E[t]=0,E[n]=m>0?1:-1,l.push(E.x,E.y,E.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),ee+=6}o.addGroup(f,ee,_),f+=ee,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Jn(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Yn(e){let t={};for(let n=0;n<e.length;n++){let r=Jn(e[n]);for(let e in r)t[e]=r[e]}return t}function Xn(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Zn(e){return e.getRenderTarget()===null?e.outputColorSpace:M.workingColorSpace}var Qn={clone:Jn,merge:Yn},$n=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,er=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tr=class extends dn{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$n,this.fragmentShader=er,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jn(e.uniforms),this.uniformsGroups=Xn(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},nr=class extends Gt{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=le}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},rr=class extends nr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=pe*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fe*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pe*2*Math.atan(Math.tan(fe*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fe*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ir=-90,ar=1,or=class extends Gt{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new rr(ir,ar,e,t);r.layers=this.layers,this.add(r);let i=new rr(ir,ar,e,t);i.layers=this.layers,this.add(i);let a=new rr(ir,ar,e,t);a.layers=this.layers,this.add(a);let o=new rr(ir,ar,e,t);o.layers=this.layers,this.add(o);let s=new rr(ir,ar,e,t);s.layers=this.layers,this.add(s);let c=new rr(ir,ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},sr=class extends Re{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cr=class extends Ve{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ee(`THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace.`),t.colorSpace=t.encoding===3001?E:``),this.texture=new sr(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?o:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qn(5,5,5),i=new tr({name:`CubemapFromEquirect`,uniforms:Jn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Wn(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new or(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},lr=new N,ur=new N,dr=new k,fr=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=lr.subVectors(n,t).cross(ur.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(lr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||dr.getNormalMatrix(e),r=this.coplanarPoint(lr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},pr=new dt,mr=new N,hr=class{constructor(e=new fr,t=new fr,n=new fr,r=new fr,i=new fr,a=new fr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=le){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(mr.x=r.normal.x>0?e.max.x:e.min.x,mr.y=r.normal.y>0?e.max.y:e.min.y,mr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function gr(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function _r(e,t){let n=t.isWebGL2,r=new WeakMap;function i(t,r){let i=t.array,a=t.usage,o=i.byteLength,s=e.createBuffer();e.bindBuffer(r,s),e.bufferData(r,i,a),t.onUploadCallback();let c;if(i instanceof Float32Array)c=e.FLOAT;else if(i instanceof Uint16Array){if(t.isFloat16BufferAttribute){if(n)c=e.HALF_FLOAT;else throw Error(`THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.`)}else c=e.UNSIGNED_SHORT}else if(i instanceof Int16Array)c=e.SHORT;else if(i instanceof Uint32Array)c=e.UNSIGNED_INT;else if(i instanceof Int32Array)c=e.INT;else if(i instanceof Int8Array)c=e.BYTE;else if(i instanceof Uint8Array)c=e.UNSIGNED_BYTE;else if(i instanceof Uint8ClampedArray)c=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+i);return{buffer:s,type:c,bytesPerElement:i.BYTES_PER_ELEMENT,version:t.version,size:o}}function a(t,r,i){let a=r.array,o=r._updateRange,s=r.updateRanges;if(e.bindBuffer(i,t),o.count===-1&&s.length===0&&e.bufferSubData(i,0,a),s.length!==0){for(let t=0,r=s.length;t<r;t++){let r=s[t];n?e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a,r.start,r.count):e.bufferSubData(i,r.start*a.BYTES_PER_ELEMENT,a.subarray(r.start,r.start+r.count))}r.clearUpdateRanges()}o.count!==-1&&(n?e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a,o.offset,o.count):e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a.subarray(o.offset,o.offset+o.count)),o.count=-1),r.onUploadCallback()}function o(e){return e.isInterleavedBufferAttribute&&(e=e.data),r.get(e)}function s(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=r.get(t);n&&(e.deleteBuffer(n.buffer),r.delete(t))}function c(e,t){if(e.isGLBufferAttribute){let t=r.get(e);(!t||t.version<e.version)&&r.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);let n=r.get(e);if(n===void 0)r.set(e,i(e,t));else if(n.version<e.version){if(n.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);a(n.buffer,e,t),n.version=e.version}}return{get:o,remove:s,update:c}}var vr=class e extends En{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new vn(p,3)),this.setAttribute(`normal`,new vn(m,3)),this.setAttribute(`uv`,new vn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},yr={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,lights_fragment_begin:`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`},F={common:{diffuse:{value:new P(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new k},alphaMap:{value:null},alphaMapTransform:{value:new k},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new k}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new k}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new k}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new k},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new k},normalScale:{value:new O(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new k},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new k}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new k}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new k}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new P(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new P(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new k},alphaTest:{value:0},uvTransform:{value:new k}},sprite:{diffuse:{value:new P(16777215)},opacity:{value:1},center:{value:new O(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new k},alphaMap:{value:null},alphaMapTransform:{value:new k},alphaTest:{value:0}}},br={basic:{uniforms:Yn([F.common,F.specularmap,F.envmap,F.aomap,F.lightmap,F.fog]),vertexShader:yr.meshbasic_vert,fragmentShader:yr.meshbasic_frag},lambert:{uniforms:Yn([F.common,F.specularmap,F.envmap,F.aomap,F.lightmap,F.emissivemap,F.bumpmap,F.normalmap,F.displacementmap,F.fog,F.lights,{emissive:{value:new P(0)}}]),vertexShader:yr.meshlambert_vert,fragmentShader:yr.meshlambert_frag},phong:{uniforms:Yn([F.common,F.specularmap,F.envmap,F.aomap,F.lightmap,F.emissivemap,F.bumpmap,F.normalmap,F.displacementmap,F.fog,F.lights,{emissive:{value:new P(0)},specular:{value:new P(1118481)},shininess:{value:30}}]),vertexShader:yr.meshphong_vert,fragmentShader:yr.meshphong_frag},standard:{uniforms:Yn([F.common,F.envmap,F.aomap,F.lightmap,F.emissivemap,F.bumpmap,F.normalmap,F.displacementmap,F.roughnessmap,F.metalnessmap,F.fog,F.lights,{emissive:{value:new P(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yr.meshphysical_vert,fragmentShader:yr.meshphysical_frag},toon:{uniforms:Yn([F.common,F.aomap,F.lightmap,F.emissivemap,F.bumpmap,F.normalmap,F.displacementmap,F.gradientmap,F.fog,F.lights,{emissive:{value:new P(0)}}]),vertexShader:yr.meshtoon_vert,fragmentShader:yr.meshtoon_frag},matcap:{uniforms:Yn([F.common,F.bumpmap,F.normalmap,F.displacementmap,F.fog,{matcap:{value:null}}]),vertexShader:yr.meshmatcap_vert,fragmentShader:yr.meshmatcap_frag},points:{uniforms:Yn([F.points,F.fog]),vertexShader:yr.points_vert,fragmentShader:yr.points_frag},dashed:{uniforms:Yn([F.common,F.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yr.linedashed_vert,fragmentShader:yr.linedashed_frag},depth:{uniforms:Yn([F.common,F.displacementmap]),vertexShader:yr.depth_vert,fragmentShader:yr.depth_frag},normal:{uniforms:Yn([F.common,F.bumpmap,F.normalmap,F.displacementmap,{opacity:{value:1}}]),vertexShader:yr.meshnormal_vert,fragmentShader:yr.meshnormal_frag},sprite:{uniforms:Yn([F.sprite,F.fog]),vertexShader:yr.sprite_vert,fragmentShader:yr.sprite_frag},background:{uniforms:{uvTransform:{value:new k},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yr.background_vert,fragmentShader:yr.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:yr.backgroundCube_vert,fragmentShader:yr.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yr.cube_vert,fragmentShader:yr.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yr.equirect_vert,fragmentShader:yr.equirect_frag},distanceRGBA:{uniforms:Yn([F.common,F.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yr.distanceRGBA_vert,fragmentShader:yr.distanceRGBA_frag},shadow:{uniforms:Yn([F.lights,F.fog,{color:{value:new P(0)},opacity:{value:1}}]),vertexShader:yr.shadow_vert,fragmentShader:yr.shadow_frag}};br.physical={uniforms:Yn([br.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new k},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new k},clearcoatNormalScale:{value:new O(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new k},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new k},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new k},sheen:{value:0},sheenColor:{value:new P(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new k},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new k},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new k},transmissionSamplerSize:{value:new O},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new k},attenuationDistance:{value:0},attenuationColor:{value:new P(0)},specularColor:{value:new P(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new k},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new k},anisotropyVector:{value:new O},anisotropyMap:{value:null},anisotropyMapTransform:{value:new k}}]),vertexShader:yr.meshphysical_vert,fragmentShader:yr.meshphysical_frag};var xr={r:0,b:0,g:0};function Sr(e,t,n,r,i,a,o){let s=new P(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(a,m){let g=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?n:t).get(_)),_===null?h(s,c):_&&_.isColor&&(h(_,1),g=!0);let v=e.xr.getEnvironmentBlendMode();v===`additive`?r.buffers.color.setClear(0,0,0,1,o):v===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||g)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),_&&(_.isCubeTexture||_.mapping===306)?(u===void 0&&(u=new Wn(new qn(1,1,1),new tr({name:`BackgroundCubeMaterial`,uniforms:Jn(br.backgroundCube.uniforms),vertexShader:br.backgroundCube.vertexShader,fragmentShader:br.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=M.getTransfer(_.colorSpace)!==ie,(d!==_||f!==_.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),u.layers.enableAll(),a.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Wn(new vr(2,2),new tr({name:`BackgroundMaterial`,uniforms:Jn(br.background.uniforms),vertexShader:br.background.vertexShader,fragmentShader:br.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=M.getTransfer(_.colorSpace)!==ie,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||f!==_.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=_,f=_.version,p=e.toneMapping),l.layers.enableAll(),a.unshift(l,l.geometry,l.material,0,0,null))}function h(t,n){t.getRGB(xr,Zn(e)),r.buffers.color.setClear(xr.r,xr.g,xr.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,h(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,h(s,c)},render:m}}function Cr(e,t,n,r){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:t.get(`OES_vertex_array_object`),o=r.isWebGL2||a!==null,s={},c=g(null),l=c,u=!1;function d(t,r,i,a,s){let c=!1;if(o){let e=h(a,i,r);l!==e&&(l=e,p(l.object)),c=_(t,a,i,s),c&&v(t,a,i,s)}else{let e=r.wireframe===!0;(l.geometry!==a.id||l.program!==i.id||l.wireframe!==e)&&(l.geometry=a.id,l.program=i.id,l.wireframe=e,c=!0)}s!==null&&n.update(s,e.ELEMENT_ARRAY_BUFFER),(c||u)&&(u=!1,w(t,r,i,a),s!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(s).buffer))}function f(){return r.isWebGL2?e.createVertexArray():a.createVertexArrayOES()}function p(t){return r.isWebGL2?e.bindVertexArray(t):a.bindVertexArrayOES(t)}function m(t){return r.isWebGL2?e.deleteVertexArray(t):a.deleteVertexArrayOES(t)}function h(e,t,n){let r=n.wireframe===!0,i=s[e.id];i===void 0&&(i={},s[e.id]=i);let a=i[t.id];a===void 0&&(a={},i[t.id]=a);let o=a[r];return o===void 0&&(o=g(f()),a[r]=o),o}function g(e){let t=[],n=[],r=[];for(let e=0;e<i;e++)t[e]=0,n[e]=0,r[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:n,attributeDivisors:r,object:e,attributes:{},index:null}}function _(e,t,n,r){let i=l.attributes,a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=i[t],r=a[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;o++}return l.attributesNum!==o||l.index!==r}function v(e,t,n,r){let i={},a=t.attributes,o=0,s=n.getAttributes();for(let t in s)if(s[t].location>=0){let n=a[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,o++}l.attributes=i,l.attributesNum=o,l.index=r}function y(){let e=l.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function b(e){x(e,0)}function x(n,i){let a=l.newAttributes,o=l.enabledAttributes,s=l.attributeDivisors;a[n]=1,o[n]===0&&(e.enableVertexAttribArray(n),o[n]=1),s[n]!==i&&((r.isWebGL2?e:t.get(`ANGLE_instanced_arrays`))[r.isWebGL2?`vertexAttribDivisor`:`vertexAttribDivisorANGLE`](n,i),s[n]=i)}function S(){let t=l.newAttributes,n=l.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function C(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function w(i,a,o,s){if(r.isWebGL2===!1&&(i.isInstancedMesh||s.isInstancedBufferGeometry)&&t.get(`ANGLE_instanced_arrays`)===null)return;y();let c=s.attributes,l=o.getAttributes(),u=a.defaultAttributeValues;for(let t in l){let a=l[t];if(a.location>=0){let o=c[t];if(o===void 0&&(t===`instanceMatrix`&&i.instanceMatrix&&(o=i.instanceMatrix),t===`instanceColor`&&i.instanceColor&&(o=i.instanceColor)),o!==void 0){let t=o.normalized,c=o.itemSize,l=n.get(o);if(l===void 0)continue;let u=l.buffer,d=l.type,f=l.bytesPerElement,p=r.isWebGL2===!0&&(d===e.INT||d===e.UNSIGNED_INT||o.gpuType===1013);if(o.isInterleavedBufferAttribute){let n=o.data,r=n.stride,l=o.offset;if(n.isInstancedInterleavedBuffer){for(let e=0;e<a.locationSize;e++)x(a.location+e,n.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=n.meshPerAttribute*n.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,r*f,(l+c/a.locationSize*e)*f,p)}else{if(o.isInstancedBufferAttribute){for(let e=0;e<a.locationSize;e++)x(a.location+e,o.meshPerAttribute);i.isInstancedMesh!==!0&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=o.meshPerAttribute*o.count)}else for(let e=0;e<a.locationSize;e++)b(a.location+e);e.bindBuffer(e.ARRAY_BUFFER,u);for(let e=0;e<a.locationSize;e++)C(a.location+e,c/a.locationSize,d,t,c*f,c/a.locationSize*e*f,p)}}else if(u!==void 0){let n=u[t];if(n!==void 0)switch(n.length){case 2:e.vertexAttrib2fv(a.location,n);break;case 3:e.vertexAttrib3fv(a.location,n);break;case 4:e.vertexAttrib4fv(a.location,n);break;default:e.vertexAttrib1fv(a.location,n)}}}}S()}function T(){te();for(let e in s){let t=s[e];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e]}}function ee(e){if(s[e.id]===void 0)return;let t=s[e.id];for(let e in t){let n=t[e];for(let e in n)m(n[e].object),delete n[e];delete t[e]}delete s[e.id]}function E(e){for(let t in s){let n=s[t];if(n[e.id]===void 0)continue;let r=n[e.id];for(let e in r)m(r[e].object),delete r[e];delete n[e.id]}}function te(){ne(),u=!0,l!==c&&(l=c,p(l.object))}function ne(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:te,resetDefaultState:ne,dispose:T,releaseStatesOfGeometry:ee,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:b,disableUnusedAttributes:S}}function wr(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}function s(t,r){e.drawArrays(a,t,r),n.update(r,a,1)}function c(r,o,s){if(s===0)return;let c,l;if(i)c=e,l=`drawArraysInstanced`;else if(c=t.get(`ANGLE_instanced_arrays`),l=`drawArraysInstancedANGLE`,c===null){console.error(`THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}c[l](a,r,o,s),n.update(o,a,s)}function l(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t],r[t]);else{o.multiDrawArraysWEBGL(a,e,0,r,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.render=s,this.renderInstances=c,this.renderMultiDraw=l}function Tr(e,t,n){let r;function i(){if(r!==void 0)return r;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);r=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let o=typeof WebGL2RenderingContext<`u`&&e.constructor.name===`WebGL2RenderingContext`,s=n.precision===void 0?`highp`:n.precision,c=a(s);c!==s&&(console.warn(`THREE.WebGLRenderer:`,s,`not supported, using`,c,`instead.`),s=c);let l=o||t.has(`WEBGL_draw_buffers`),u=n.logarithmicDepthBuffer===!0,d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),f=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,b=o||t.has(`OES_texture_float`),x=y&&b,S=o?e.getParameter(e.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:S}}function Er(e){let t=this,n=null,r=0,i=!1,a=!1,o=new fr,s=new k,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Dr(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new cr(a.height/2);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var Or=class extends nr{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kr=4,Ar=[.125,.215,.35,.446,.526,.582],jr=20,Mr=new Or,Nr=new P,Pr=null,Fr=0,Ir=0,Lr=(1+Math.sqrt(5))/2,Rr=1/Lr,zr=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Lr,Rr),new N(0,Lr,-Rr),new N(Rr,0,Lr),new N(-Rr,0,Lr),new N(Lr,Rr,0),new N(-Lr,Rr,0)],Br=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Pr=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),Ir=this._renderer.getActiveMipmapLevel(),this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pr,Fr,Ir),e.scissorTest=!1,Ur(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pr=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),Ir=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:f,format:m,colorSpace:te,depthBuffer:!1},r=Hr(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hr(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vr(r)),this._blurMaterial=Wr(r,e,t)}return r}_compileMaterial(e){let t=new Wn(this._lodPlanes[0],e);this._renderer.compile(t,Mr)}_sceneToCubeUV(e,t,n,r){let i=new rr(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(Nr),s.toneMapping=0,s.autoClear=!1;let u=new fn({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new Wn(new qn,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(Nr),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Ur(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gr());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new Wn(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Ur(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Mr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let t=1;t<this._lodPlanes.length;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),r=zr[(t-1)%zr.length];this._blur(e,t-1,t,n,r)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new Wn(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):jr;m>jr&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jr}`);let h=[],g=0;for(let e=0;e<jr;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Ur(t,3*v*(r>_-kr?r-_+kr:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Mr)}};function Vr(e){let t=[],n=[],r=[],i=e,a=e-kr+1+Ar.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-kr?s=Ar[o-e+kr-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new En;h.setAttribute(`position`,new hn(f,3)),h.setAttribute(`uv`,new hn(p,2)),h.setAttribute(`faceIndex`,new hn(m,1)),t.push(h),i>kr&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Hr(e,t,n){let r=new Ve(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Ur(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Wr(e,t,n){let r=new Float32Array(jr),i=new N(0,1,0);return new tr({name:`SphericalGaussianBlur`,defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Gr(){return new tr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:qr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Kr(){return new tr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qr(){return`

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
	`}function Jr(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let i=t.get(r);return n===null&&(n=new Br(e)),i=s?n.fromEquirectangular(r,i):n.fromCubemap(r,i),t.set(r,i),i.texture}if(t.has(r))return t.get(r).texture;{let o=r.image;if(s&&o&&o.height>0||c&&o&&i(o)){n===null&&(n=new Br(e));let i=s?n.fromEquirectangular(r):n.fromCubemap(r);return t.set(r,i),r.addEventListener(`dispose`,a),i.texture}return null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Yr(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(e){e.isWebGL2?(n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`)):(n(`WEBGL_depth_texture`),n(`OES_texture_float`),n(`OES_texture_half_float`),n(`OES_texture_half_float_linear`),n(`OES_standard_derivatives`),n(`OES_element_index_uint`),n(`OES_vertex_array_object`),n(`ANGLE_instanced_arrays`)),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`)},get:function(e){let t=n(e);return t===null&&console.warn(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function Xr(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(Ce(n)?_n:gn)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Zr(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}let s,c;function l(e){s=e.type,c=e.bytesPerElement}function u(t,r){e.drawElements(a,r,s,t*c),n.update(r,a,1)}function d(r,o,l){if(l===0)return;let u,d;if(i)u=e,d=`drawElementsInstanced`;else if(u=t.get(`ANGLE_instanced_arrays`),d=`drawElementsInstancedANGLE`,u===null){console.error(`THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}u[d](a,o,s,r*c,l),n.update(o,a,l)}function f(e,r,i){if(i===0)return;let o=t.get(`WEBGL_multi_draw`);if(o===null)for(let t=0;t<i;t++)this.render(e[t]/c,r[t]);else{o.multiDrawElementsWEBGL(a,r,0,s,e,0,i);let t=0;for(let e=0;e<i;e++)t+=r[e];n.update(t,a,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=f}function Qr(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function $r(e,t){return e[0]-t[0]}function ei(e,t){return Math.abs(t[1])-Math.abs(e[1])}function ti(e,t,n){let r={},i=new Float32Array(8),a=new WeakMap,o=new ze,s=[];for(let e=0;e<8;e++)s[e]=[e,0];function c(c,l,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let r=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,i=r===void 0?0:r.length,s=a.get(l);if(s===void 0||s.count!==i){s!==void 0&&s.texture.dispose();let e=l.morphAttributes.position!==void 0,n=l.morphAttributes.normal!==void 0,r=l.morphAttributes.color!==void 0,c=l.morphAttributes.position||[],u=l.morphAttributes.normal||[],f=l.morphAttributes.color||[],p=0;e===!0&&(p=1),n===!0&&(p=2),r===!0&&(p=3);let m=l.attributes.position.count*p,h=1;m>t.maxTextureSize&&(h=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);let g=new Float32Array(m*h*4*i),_=new He(g,m,h,i);_.type=d,_.needsUpdate=!0;let v=p*4;for(let t=0;t<i;t++){let i=c[t],a=u[t],s=f[t],l=m*h*4*t;for(let t=0;t<i.count;t++){let c=t*v;e===!0&&(o.fromBufferAttribute(i,t),g[l+c+0]=o.x,g[l+c+1]=o.y,g[l+c+2]=o.z,g[l+c+3]=0),n===!0&&(o.fromBufferAttribute(a,t),g[l+c+4]=o.x,g[l+c+5]=o.y,g[l+c+6]=o.z,g[l+c+7]=0),r===!0&&(o.fromBufferAttribute(s,t),g[l+c+8]=o.x,g[l+c+9]=o.y,g[l+c+10]=o.z,g[l+c+11]=s.itemSize===4?o.w:1)}}s={count:i,texture:_,size:new O(m,h)},a.set(l,s);function y(){_.dispose(),a.delete(l),l.removeEventListener(`dispose`,y)}l.addEventListener(`dispose`,y)}let c=0;for(let e=0;e<f.length;e++)c+=f[e];let p=l.morphTargetsRelative?1:1-c;u.getUniforms().setValue(e,`morphTargetBaseInfluence`,p),u.getUniforms().setValue(e,`morphTargetInfluences`,f),u.getUniforms().setValue(e,`morphTargetsTexture`,s.texture,n),u.getUniforms().setValue(e,`morphTargetsTextureSize`,s.size)}else{let t=f===void 0?0:f.length,n=r[l.id];if(n===void 0||n.length!==t){n=[];for(let e=0;e<t;e++)n[e]=[e,0];r[l.id]=n}for(let e=0;e<t;e++){let t=n[e];t[0]=e,t[1]=f[e]}n.sort(ei);for(let e=0;e<8;e++)e<t&&n[e][1]?(s[e][0]=n[e][0],s[e][1]=n[e][1]):(s[e][0]=2**53-1,s[e][1]=0);s.sort($r);let a=l.morphAttributes.position,o=l.morphAttributes.normal,c=0;for(let e=0;e<8;e++){let t=s[e],n=t[0],r=t[1];n!==2**53-1&&r?(a&&l.getAttribute(`morphTarget`+e)!==a[n]&&l.setAttribute(`morphTarget`+e,a[n]),o&&l.getAttribute(`morphNormal`+e)!==o[n]&&l.setAttribute(`morphNormal`+e,o[n]),i[e]=r,c+=r):(a&&l.hasAttribute(`morphTarget`+e)===!0&&l.deleteAttribute(`morphTarget`+e),o&&l.hasAttribute(`morphNormal`+e)===!0&&l.deleteAttribute(`morphNormal`+e),i[e]=0)}let d=l.morphTargetsRelative?1:1-c;u.getUniforms().setValue(e,`morphTargetBaseInfluence`,d),u.getUniforms().setValue(e,`morphTargetInfluences`,i)}}return{update:c}}function ni(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var ri=class extends Re{constructor(e,t,n,i,a,o,s,c,l,d){if(d=d===void 0?h:d,d!==1026&&d!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&d===1026&&(n=u),n===void 0&&d===1027&&(n=p),super(null,i,a,o,s,c,d,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s===void 0?r:s,this.minFilter=c===void 0?r:c,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ii=new Re,ai=new ri(1,1);ai.compareFunction=515;var oi=new He,si=new Ue,ci=new sr,li=[],ui=[],di=new Float32Array(16),fi=new Float32Array(9),pi=new Float32Array(4);function mi(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=li[i];if(a===void 0&&(a=new Float32Array(i),li[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function hi(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function gi(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function _i(e,t){let n=ui[t];n===void 0&&(n=new Int32Array(t),ui[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function vi(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function yi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hi(n,t))return;e.uniform2fv(this.addr,t),gi(n,t)}}function bi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(hi(n,t))return;e.uniform3fv(this.addr,t),gi(n,t)}}function xi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hi(n,t))return;e.uniform4fv(this.addr,t),gi(n,t)}}function Si(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hi(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),gi(n,t)}else{if(hi(n,r))return;pi.set(r),e.uniformMatrix2fv(this.addr,!1,pi),gi(n,r)}}function Ci(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hi(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),gi(n,t)}else{if(hi(n,r))return;fi.set(r),e.uniformMatrix3fv(this.addr,!1,fi),gi(n,r)}}function wi(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(hi(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),gi(n,t)}else{if(hi(n,r))return;di.set(r),e.uniformMatrix4fv(this.addr,!1,di),gi(n,r)}}function Ti(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ei(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hi(n,t))return;e.uniform2iv(this.addr,t),gi(n,t)}}function Di(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hi(n,t))return;e.uniform3iv(this.addr,t),gi(n,t)}}function Oi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hi(n,t))return;e.uniform4iv(this.addr,t),gi(n,t)}}function ki(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ai(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(hi(n,t))return;e.uniform2uiv(this.addr,t),gi(n,t)}}function ji(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(hi(n,t))return;e.uniform3uiv(this.addr,t),gi(n,t)}}function Mi(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(hi(n,t))return;e.uniform4uiv(this.addr,t),gi(n,t)}}function Ni(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a=this.type===e.SAMPLER_2D_SHADOW?ai:ii;n.setTexture2D(t||a,i)}function Pi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||si,i)}function Fi(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ci,i)}function Ii(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||oi,i)}function Li(e){switch(e){case 5126:return vi;case 35664:return yi;case 35665:return bi;case 35666:return xi;case 35674:return Si;case 35675:return Ci;case 35676:return wi;case 5124:case 35670:return Ti;case 35667:case 35671:return Ei;case 35668:case 35672:return Di;case 35669:case 35673:return Oi;case 5125:return ki;case 36294:return Ai;case 36295:return ji;case 36296:return Mi;case 35678:case 36198:case 36298:case 36306:case 35682:return Ni;case 35679:case 36299:case 36307:return Pi;case 35680:case 36300:case 36308:case 36293:return Fi;case 36289:case 36303:case 36311:case 36292:return Ii}}function Ri(e,t){e.uniform1fv(this.addr,t)}function zi(e,t){let n=mi(t,this.size,2);e.uniform2fv(this.addr,n)}function Bi(e,t){let n=mi(t,this.size,3);e.uniform3fv(this.addr,n)}function Vi(e,t){let n=mi(t,this.size,4);e.uniform4fv(this.addr,n)}function Hi(e,t){let n=mi(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ui(e,t){let n=mi(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Wi(e,t){let n=mi(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Gi(e,t){e.uniform1iv(this.addr,t)}function Ki(e,t){e.uniform2iv(this.addr,t)}function qi(e,t){e.uniform3iv(this.addr,t)}function Ji(e,t){e.uniform4iv(this.addr,t)}function Yi(e,t){e.uniform1uiv(this.addr,t)}function Xi(e,t){e.uniform2uiv(this.addr,t)}function Zi(e,t){e.uniform3uiv(this.addr,t)}function Qi(e,t){e.uniform4uiv(this.addr,t)}function $i(e,t,n){let r=this.cache,i=t.length,a=_i(n,i);hi(r,a)||(e.uniform1iv(this.addr,a),gi(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||ii,a[e])}function ea(e,t,n){let r=this.cache,i=t.length,a=_i(n,i);hi(r,a)||(e.uniform1iv(this.addr,a),gi(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||si,a[e])}function ta(e,t,n){let r=this.cache,i=t.length,a=_i(n,i);hi(r,a)||(e.uniform1iv(this.addr,a),gi(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ci,a[e])}function na(e,t,n){let r=this.cache,i=t.length,a=_i(n,i);hi(r,a)||(e.uniform1iv(this.addr,a),gi(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||oi,a[e])}function ra(e){switch(e){case 5126:return Ri;case 35664:return zi;case 35665:return Bi;case 35666:return Vi;case 35674:return Hi;case 35675:return Ui;case 35676:return Wi;case 5124:case 35670:return Gi;case 35667:case 35671:return Ki;case 35668:case 35672:return qi;case 35669:case 35673:return Ji;case 5125:return Yi;case 36294:return Xi;case 36295:return Zi;case 36296:return Qi;case 35678:case 36198:case 36298:case 36306:case 35682:return $i;case 35679:case 36299:case 36307:return ea;case 35680:case 36300:case 36308:case 36293:return ta;case 36289:case 36303:case 36311:case 36292:return na}}var ia=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Li(t.type)}},aa=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ra(t.type)}},oa=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},sa=/(\w+)(\])?(\[|\.)?/g;function ca(e,t){e.seq.push(t),e.map[t.id]=t}function la(e,t,n){let r=e.name,i=r.length;for(sa.lastIndex=0;;){let a=sa.exec(r),o=sa.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){ca(n,l===void 0?new ia(s,e,t):new aa(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new oa(s),ca(n,e)),n=e}}}var ua=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);la(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function da(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var fa=37297,pa=0;function ma(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}function ha(e){let t=M.getPrimaries(M.workingColorSpace),n=M.getPrimaries(e),r;switch(t===n?r=``:t===`p3`&&n===`rec709`?r=`LinearDisplayP3ToLinearSRGB`:t===`rec709`&&n===`p3`&&(r=`LinearSRGBToLinearDisplayP3`),e){case te:case D:return[r,`LinearTransferOETF`];case E:case ne:return[r,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space:`,e),[r,`LinearTransferOETF`]}}function ga(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+ma(e.getShaderSource(t),r)}return i}function _a(e,t){let n=ha(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function va(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`OptimizedCineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function ya(e){return[e.extensionDerivatives||e.envMapCubeUVHeight||e.bumpMap||e.normalMapTangentSpace||e.clearcoatNormalMap||e.flatShading||e.shaderID===`physical`?`#extension GL_OES_standard_derivatives : enable`:``,(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?`#extension GL_EXT_frag_depth : enable`:``,e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?`#extension GL_EXT_draw_buffers : require`:``,(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?`#extension GL_EXT_shader_texture_lod : enable`:``].filter(Ca).join(`
`)}function ba(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``].filter(Ca).join(`
`)}function xa(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Sa(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Ca(e){return e!==``}function wa(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ta(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ea=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(e){return e.replace(Ea,ka)}var Oa=new Map([[`encodings_fragment`,`colorspace_fragment`],[`encodings_pars_fragment`,`colorspace_pars_fragment`],[`output_fragment`,`opaque_fragment`]]);function ka(e,t){let n=yr[t];if(n===void 0){let e=Oa.get(t);if(e!==void 0)n=yr[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return Da(n)}var Aa=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ja(e){return e.replace(Aa,Ma)}function Ma(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Na(e){let t=`precision `+e.precision+` float;
precision `+e.precision+` int;`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Pa(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Fa(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Ia(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function La(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function Ra(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function za(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Pa(n),l=Fa(n),u=Ia(n),d=La(n),f=Ra(n),p=n.isWebGL2?``:ya(n),m=ba(n),h=xa(a),g=i.createProgram(),_,v,y=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Ca).join(`
`),_.length>0&&(_+=`
`),v=[p,`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h].filter(Ca).join(`
`),v.length>0&&(v+=`
`)):(_=[Na(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors&&n.isWebGL2?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE`:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0&&n.isWebGL2?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )`,`	attribute vec3 morphTarget0;`,`	attribute vec3 morphTarget1;`,`	attribute vec3 morphTarget2;`,`	attribute vec3 morphTarget3;`,`	#ifdef USE_MORPHNORMALS`,`		attribute vec3 morphNormal0;`,`		attribute vec3 morphNormal1;`,`		attribute vec3 morphNormal2;`,`		attribute vec3 morphNormal3;`,`	#else`,`		attribute vec3 morphTarget4;`,`		attribute vec3 morphTarget5;`,`		attribute vec3 morphTarget6;`,`		attribute vec3 morphTarget7;`,`	#endif`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Ca).join(`
`),v=[p,Na(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,h,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.useLegacyLights?`#define LEGACY_LIGHTS`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:yr.tonemapping_pars_fragment,n.toneMapping===0?``:va(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,yr.colorspace_pars_fragment,_a(`linearToOutputTexel`,n.outputColorSpace),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Ca).join(`
`)),o=Da(o),o=wa(o,n),o=Ta(o,n),s=Da(s),s=wa(s,n),s=Ta(s,n),o=ja(o),s=ja(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[m,`precision mediump sampler2DArray;`,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+_,v=[`precision mediump sampler2DArray;`,`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+v);let b=y+_+o,x=y+v+s,S=da(i,i.VERTEX_SHADER,b),C=da(i,i.FRAGMENT_SHADER,x);i.attachShader(g,S),i.attachShader(g,C),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(g,0,`position`):i.bindAttribLocation(g,0,n.index0AttributeName),i.linkProgram(g);function w(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(g).trim(),r=i.getShaderInfoLog(S).trim(),a=i.getShaderInfoLog(C).trim(),o=!0,s=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,g,S,C);else{let e=ga(i,S,`vertex`),t=ga(i,C,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+n+`
`+e+`
`+t)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:_},fragmentShader:{log:a,prefix:v}})}i.deleteShader(S),i.deleteShader(C),T=new ua(i,g),ee=Sa(i,g)}let T;this.getUniforms=function(){return T===void 0&&w(this),T};let ee;this.getAttributes=function(){return ee===void 0&&w(this),ee};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(g,fa)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pa++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var Ba=0,Va=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ha(e),t.set(e,n)),n}},Ha=class{constructor(e){this.id=Ba++,this.code=e,this.usedTimes=0}};function Ua(e,t,n,r,i,a,o){let s=new jt,c=new Va,l=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return e===0?`uv`:`uv${e}`}function g(a,s,l,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,ee=0;y.morphAttributes.position!==void 0&&(ee=1),y.morphAttributes.normal!==void 0&&(ee=2),y.morphAttributes.color!==void 0&&(ee=3);let E,ne,D,re;if(C){let e=br[C];E=e.vertexShader,ne=e.fragmentShader}else E=a.vertexShader,ne=a.fragmentShader,c.update(a),D=c.getVertexShaderID(a),re=c.getFragmentShaderID(a);let ie=e.getRenderTarget(),ae=_.isInstancedMesh===!0,oe=_.isBatchedMesh===!0,se=!!a.map,ce=!!a.matcap,le=!!x,ue=!!a.aoMap,de=!!a.lightMap,fe=!!a.bumpMap,pe=!!a.normalMap,me=!!a.displacementMap,he=!!a.emissiveMap,ge=!!a.metalnessMap,_e=!!a.roughnessMap,ve=a.anisotropy>0,ye=a.clearcoat>0,be=a.iridescence>0,xe=a.sheen>0,O=a.transmission>0,k=ve&&!!a.anisotropyMap,Se=ye&&!!a.clearcoatMap,Ce=ye&&!!a.clearcoatNormalMap,A=ye&&!!a.clearcoatRoughnessMap,we=be&&!!a.iridescenceMap,Te=be&&!!a.iridescenceThicknessMap,Ee=xe&&!!a.sheenColorMap,De=xe&&!!a.sheenRoughnessMap,j=!!a.specularMap,Oe=!!a.specularColorMap,ke=!!a.specularIntensityMap,Ae=O&&!!a.transmissionMap,je=O&&!!a.thicknessMap,Me=!!a.gradientMap,Ne=!!a.alphaMap,Pe=a.alphaTest>0,Fe=!!a.alphaHash,Ie=!!a.extensions,Le=!!y.attributes.uv1,Re=!!y.attributes.uv2,ze=!!y.attributes.uv3,Be=0;return a.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Be=e.toneMapping),{isWebGL2:u,shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:E,fragmentShader:ne,defines:a.defines,customVertexShaderID:D,customFragmentShaderID:re,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:oe,instancing:ae,instancingColor:ae&&_.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ie===null?e.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:te,map:se,matcap:ce,envMap:le,envMapMode:le&&x.mapping,envMapCubeUVHeight:S,aoMap:ue,lightMap:de,bumpMap:fe,normalMap:pe,displacementMap:f&&me,emissiveMap:he,normalMapObjectSpace:pe&&a.normalMapType===1,normalMapTangentSpace:pe&&a.normalMapType===0,metalnessMap:ge,roughnessMap:_e,anisotropy:ve,anisotropyMap:k,clearcoat:ye,clearcoatMap:Se,clearcoatNormalMap:Ce,clearcoatRoughnessMap:A,iridescence:be,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:xe,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:j,specularColorMap:Oe,specularIntensityMap:ke,transmission:O,transmissionMap:Ae,thicknessMap:je,gradientMap:Me,opaque:a.transparent===!1&&a.blending===1,alphaMap:Ne,alphaTest:Pe,alphaHash:Fe,combine:a.combine,mapUv:se&&h(a.map.channel),aoMapUv:ue&&h(a.aoMap.channel),lightMapUv:de&&h(a.lightMap.channel),bumpMapUv:fe&&h(a.bumpMap.channel),normalMapUv:pe&&h(a.normalMap.channel),displacementMapUv:me&&h(a.displacementMap.channel),emissiveMapUv:he&&h(a.emissiveMap.channel),metalnessMapUv:ge&&h(a.metalnessMap.channel),roughnessMapUv:_e&&h(a.roughnessMap.channel),anisotropyMapUv:k&&h(a.anisotropyMap.channel),clearcoatMapUv:Se&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:A&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:De&&h(a.sheenRoughnessMap.channel),specularMapUv:j&&h(a.specularMap.channel),specularColorMapUv:Oe&&h(a.specularColorMap.channel),specularIntensityMapUv:ke&&h(a.specularIntensityMap.channel),transmissionMapUv:Ae&&h(a.transmissionMap.channel),thicknessMapUv:je&&h(a.thicknessMap.channel),alphaMapUv:Ne&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(pe||ve),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,vertexUv1s:Le,vertexUv2s:Re,vertexUv3s:ze,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(se||Ne),fog:!!v,useFog:a.fog===!0,fogExp2:v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:ee,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Be,useLegacyLights:e._useLegacyLights,decodeVideoTexture:se&&a.map.isVideoTexture===!0&&M.getTransfer(a.map.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionDerivatives:Ie&&a.extensions.derivatives===!0,extensionFragDepth:Ie&&a.extensions.fragDepth===!0,extensionDrawBuffers:Ie&&a.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ie&&a.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ie&&a.extensions.clipCullDistance&&r.has(`WEBGL_clip_cull_distance`),rendererExtensionFragDepth:u||r.has(`EXT_frag_depth`),rendererExtensionDrawBuffers:u||r.has(`WEBGL_draw_buffers`),rendererExtensionShaderTextureLod:u||r.has(`EXT_shader_texture_lod`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()}}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.isWebGL2&&s.enable(0),t.supportsVertexTextures&&s.enable(1),t.instancing&&s.enable(2),t.instancingColor&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.skinning&&s.enable(4),t.morphTargets&&s.enable(5),t.morphNormals&&s.enable(6),t.morphColors&&s.enable(7),t.premultipliedAlpha&&s.enable(8),t.shadowMapEnabled&&s.enable(9),t.useLegacyLights&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=br[t];n=Qn.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new za(e,n,t,a),l.push(r)),r}function S(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:w}}function Wa(){let e=new WeakMap;function t(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function n(t){e.delete(t)}function r(t,n,r){e.get(t)[n]=r}function i(){e=new WeakMap}return{get:t,remove:n,update:r,dispose:i}}function Ga(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ka(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function qa(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Ga),r.length>1&&r.sort(t||Ka),i.length>1&&i.sort(t||Ka)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function Ja(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new qa,e.set(t,[i])):n>=r.length?(i=new qa,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ya(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new N,color:new P};break;case`SpotLight`:n={position:new N,direction:new N,color:new P,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new N,color:new P,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new N,skyColor:new P,groundColor:new P};break;case`RectAreaLight`:n={color:new P,position:new N,halfWidth:new N,halfHeight:new N}}return e[t.id]=n,n}}}function Xa(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new O};break;case`SpotLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new O};break;case`PointLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new O,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Za=0;function Qa(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function $a(e,t){let n=new Ya,r=Xa(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)i.probe.push(new N);let a=new N,o=new bt,s=new bt;function c(a,o){let s=0,c=0,l=0;for(let e=0;e<9;e++)i.probe[e].set(0,0,0);let u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0;a.sort(Qa);let x=o===!0?Math.PI:1;for(let e=0,t=a.length;e<t;e++){let t=a[e],o=t.color,S=t.intensity,C=t.distance,w=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)s+=o.r*S*x,c+=o.g*S*x,l+=o.b*S*x;else if(t.isLightProbe){for(let e=0;e<9;e++)i.probe[e].addScaledVector(t.sh.coefficients[e],S);b++}else if(t.isDirectionalLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,i.directionalShadow[u]=n,i.directionalShadowMap[u]=w,i.directionalShadowMatrix[u]=t.shadow.matrix,h++}i.directional[u]=e,u++}else if(t.isSpotLight){let e=n.get(t);e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(o).multiplyScalar(S*x),e.distance=C,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,i.spot[f]=e;let a=t.shadow;if(t.map&&(i.spotLightMap[v]=t.map,v++,a.updateMatrices(t),t.castShadow&&y++),i.spotLightMatrix[f]=a.matrix,t.castShadow){let e=r.get(t);e.shadowBias=a.bias,e.shadowNormalBias=a.normalBias,e.shadowRadius=a.radius,e.shadowMapSize=a.mapSize,i.spotShadow[f]=e,i.spotShadowMap[f]=w,_++}f++}else if(t.isRectAreaLight){let e=n.get(t);e.color.copy(o).multiplyScalar(S),e.halfWidth.set(t.width*.5,0,0),e.halfHeight.set(0,t.height*.5,0),i.rectArea[p]=e,p++}else if(t.isPointLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*x),e.distance=t.distance,e.decay=t.decay,t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,n.shadowCameraNear=e.camera.near,n.shadowCameraFar=e.camera.far,i.pointShadow[d]=n,i.pointShadowMap[d]=w,i.pointShadowMatrix[d]=t.shadow.matrix,g++}i.point[d]=e,d++}else if(t.isHemisphereLight){let e=n.get(t);e.skyColor.copy(t.color).multiplyScalar(S*x),e.groundColor.copy(t.groundColor).multiplyScalar(S*x),i.hemi[m]=e,m++}}p>0&&(t.isWebGL2?e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=F.LTC_FLOAT_1,i.rectAreaLTC2=F.LTC_FLOAT_2):(i.rectAreaLTC1=F.LTC_HALF_1,i.rectAreaLTC2=F.LTC_HALF_2):e.has(`OES_texture_float_linear`)===!0?(i.rectAreaLTC1=F.LTC_FLOAT_1,i.rectAreaLTC2=F.LTC_FLOAT_2):e.has(`OES_texture_half_float_linear`)===!0?(i.rectAreaLTC1=F.LTC_HALF_1,i.rectAreaLTC2=F.LTC_HALF_2):console.error(`THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.`)),i.ambient[0]=s,i.ambient[1]=c,i.ambient[2]=l;let S=i.hash;(S.directionalLength!==u||S.pointLength!==d||S.spotLength!==f||S.rectAreaLength!==p||S.hemiLength!==m||S.numDirectionalShadows!==h||S.numPointShadows!==g||S.numSpotShadows!==_||S.numSpotMaps!==v||S.numLightProbes!==b)&&(i.directional.length=u,i.spot.length=f,i.rectArea.length=p,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=h,i.directionalShadowMap.length=h,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=h,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=_+v-y,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=b,S.directionalLength=u,S.pointLength=d,S.spotLength=f,S.rectAreaLength=p,S.hemiLength=m,S.numDirectionalShadows=h,S.numPointShadows=g,S.numSpotShadows=_,S.numSpotMaps=v,S.numLightProbes=b,i.version=Za++)}function l(e,t){let n=0,r=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=i.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=i.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=i.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s.identity(),o.copy(f.matrixWorld),o.premultiply(d),s.extractRotation(o),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),l++}else if(f.isPointLight){let e=i.point[r];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),r++}else if(f.isHemisphereLight){let e=i.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:c,setupView:l,state:i}}function eo(e,t){let n=new $a(e,t),r=[],i=[];function a(){r.length=0,i.length=0}function o(e){r.push(e)}function s(e){i.push(e)}function c(e){n.setup(r,e)}function l(e){n.setupView(r,e)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function to(e,t){let n=new WeakMap;function r(r,i=0){let a=n.get(r),o;return a===void 0?(o=new eo(e,t),n.set(r,[o])):i>=a.length?(o=new eo(e,t),a.push(o)):o=a[i],o}function i(){n=new WeakMap}return{get:r,dispose:i}}var no=class extends dn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=T,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ro=class extends dn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},io=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ao=`uniform sampler2D shadow_pass;
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
}`;function oo(e,t,n){let i=new hr,a=new O,o=new O,s=new ze,c=new no({depthPacking:ee}),l=new ro,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new O},radius:{value:4}},vertexShader:io,fragmentShader:ao}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new En;h.setAttribute(`position`,new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Wn(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;a.copy(f.mapSize);let g=f.getFrameExtents();if(a.multiply(g),o.copy(f.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/g.x),a.x=o.x*g.x,f.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/g.y),a.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:r,magFilter:r};f.map!==null&&f.map.dispose(),f.map=new Ve(a.x,a.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),i=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let i=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Ve(a.x,a.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],r,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function so(e,t,n){let r=n.isWebGL2;function i(){let t=!1,n=new ze,r=null,i=new ze(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function a(){let t=!1,n=null,r=null,i=null;return{setTest:function(t){t?_e(e.DEPTH_TEST):ve(e.DEPTH_TEST)},setMask:function(r){n!==r&&!t&&(e.depthMask(r),n=r)},setFunc:function(t){if(r!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}r=t}},setLocked:function(e){t=e},setClear:function(t){i!==t&&(e.clearDepth(t),i=t)},reset:function(){t=!1,n=null,r=null,i=null}}}function o(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?_e(e.STENCIL_TEST):ve(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let s=new i,c=new a,l=new o,u=new WeakMap,d=new WeakMap,f={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new P(0,0,0),ee=0,E=!1,te=null,ne=null,D=null,re=null,ie=null,ae=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),oe=!1,se=0,ce=e.getParameter(e.VERSION);ce.indexOf(`WebGL`)===-1?ce.indexOf(`OpenGL ES`)!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),oe=se>=2):(se=parseFloat(/^WebGL (\d)/.exec(ce)[1]),oe=se>=1);let le=null,ue={},de=e.getParameter(e.SCISSOR_BOX),fe=e.getParameter(e.VIEWPORT),pe=new ze().fromArray(de),me=new ze().fromArray(fe);function he(t,n,i,a){let o=new Uint8Array(4),s=e.createTexture();e.bindTexture(t,s),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let s=0;s<i;s++)r&&(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)?e.texImage3D(n,0,e.RGBA,1,1,a,0,e.RGBA,e.UNSIGNED_BYTE,o):e.texImage2D(n+s,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,o);return s}let ge={};ge[e.TEXTURE_2D]=he(e.TEXTURE_2D,e.TEXTURE_2D,1),ge[e.TEXTURE_CUBE_MAP]=he(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ge[e.TEXTURE_2D_ARRAY]=he(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ge[e.TEXTURE_3D]=he(e.TEXTURE_3D,e.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),_e(e.DEPTH_TEST),c.setFunc(3),A(!1),we(1),_e(e.CULL_FACE),Se(0);function _e(t){f[t]!==!0&&(e.enable(t),f[t]=!0)}function ve(t){f[t]!==!1&&(e.disable(t),f[t]=!1)}function ye(t,n){return p[t]!==n&&(e.bindFramebuffer(t,n),p[t]=n,r&&(t===e.DRAW_FRAMEBUFFER&&(p[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(p[e.DRAW_FRAMEBUFFER]=n)),!0)}function be(r,i){let a=h,o=!1;if(r){if(a=m.get(i),a===void 0&&(a=[],m.set(i,a)),r.isWebGLMultipleRenderTargets){let t=r.texture;if(a.length!==t.length||a[0]!==e.COLOR_ATTACHMENT0){for(let n=0,r=t.length;n<r;n++)a[n]=e.COLOR_ATTACHMENT0+n;a.length=t.length,o=!0}}else a[0]!==e.COLOR_ATTACHMENT0&&(a[0]=e.COLOR_ATTACHMENT0,o=!0)}else a[0]!==e.BACK&&(a[0]=e.BACK,o=!0);o&&(n.isWebGL2?e.drawBuffers(a):t.get(`WEBGL_draw_buffers`).drawBuffersWEBGL(a))}function xe(t){return g!==t&&(e.useProgram(t),g=t,!0)}let O={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};if(r)O[103]=e.MIN,O[104]=e.MAX;else{let e=t.get(`EXT_blend_minmax`);e!==null&&(O[103]=e.MIN_EXT,O[104]=e.MAX_EXT)}let k={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function Se(t,n,r,i,a,o,s,c,l,u){if(t===0)_===!0&&(ve(e.BLEND),_=!1);else if(_===!1&&(_e(e.BLEND),_=!0),t!==5){if(t!==v||u!==E){if((y!==100||S!==100)&&(e.blendEquation(e.FUNC_ADD),y=100,S=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}b=null,x=null,C=null,w=null,T.set(0,0,0),ee=0,v=t,E=u}}else a||=n,o||=r,s||=i,(n!==y||a!==S)&&(e.blendEquationSeparate(O[n],O[a]),y=n,S=a),(r!==b||i!==x||o!==C||s!==w)&&(e.blendFuncSeparate(k[r],k[i],k[o],k[s]),b=r,x=i,C=o,w=s),(c.equals(T)===!1||l!==ee)&&(e.blendColor(c.r,c.g,c.b,l),T.copy(c),ee=l),v=t,E=!1}function Ce(t,n){t.side===2?ve(e.CULL_FACE):_e(e.CULL_FACE);let r=t.side===1;n&&(r=!r),A(r),t.blending===1&&t.transparent===!1?Se(0):Se(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),c.setFunc(t.depthFunc),c.setTest(t.depthTest),c.setMask(t.depthWrite),s.setMask(t.colorWrite);let i=t.stencilWrite;l.setTest(i),i&&(l.setMask(t.stencilWriteMask),l.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),l.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ee(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?_e(e.SAMPLE_ALPHA_TO_COVERAGE):ve(e.SAMPLE_ALPHA_TO_COVERAGE)}function A(t){te!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),te=t)}function we(t){t===0?ve(e.CULL_FACE):(_e(e.CULL_FACE),t!==ne&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ne=t}function Te(t){t!==D&&(oe&&e.lineWidth(t),D=t)}function Ee(t,n,r){t?(_e(e.POLYGON_OFFSET_FILL),(re!==n||ie!==r)&&(e.polygonOffset(n,r),re=n,ie=r)):ve(e.POLYGON_OFFSET_FILL)}function De(t){t?_e(e.SCISSOR_TEST):ve(e.SCISSOR_TEST)}function j(t){t===void 0&&(t=e.TEXTURE0+ae-1),le!==t&&(e.activeTexture(t),le=t)}function Oe(t,n,r){r===void 0&&(r=le===null?e.TEXTURE0+ae-1:le);let i=ue[r];i===void 0&&(i={type:void 0,texture:void 0},ue[r]=i),(i.type!==t||i.texture!==n)&&(le!==r&&(e.activeTexture(r),le=r),e.bindTexture(t,n||ge[t]),i.type=t,i.texture=n)}function ke(){let t=ue[le];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function M(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function je(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Me(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Pe(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Fe(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ie(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Le(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Re(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Be(t){pe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),pe.copy(t))}function Ve(t){me.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),me.copy(t))}function He(t,n){let r=d.get(n);r===void 0&&(r=new WeakMap,d.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ue(t,n){let r=d.get(n).get(t);u.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),u.set(n,r))}function We(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),r===!0&&(e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),f={},le=null,ue={},p={},m=new WeakMap,h=[],g=null,_=!1,v=null,y=null,b=null,x=null,S=null,C=null,w=null,T=new P(0,0,0),ee=0,E=!1,te=null,ne=null,D=null,re=null,ie=null,pe.set(0,0,e.canvas.width,e.canvas.height),me.set(0,0,e.canvas.width,e.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:_e,disable:ve,bindFramebuffer:ye,drawBuffers:be,useProgram:xe,setBlending:Se,setMaterial:Ce,setFlipSided:A,setCullFace:we,setLineWidth:Te,setPolygonOffset:Ee,setScissorTest:De,activeTexture:j,bindTexture:Oe,unbindTexture:ke,compressedTexImage2D:M,compressedTexImage3D:Ae,texImage2D:Le,texImage3D:Re,updateUBOMapping:He,uniformBlockBinding:Ue,texStorage2D:Fe,texStorage3D:Ie,texSubImage2D:je,texSubImage3D:Me,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Pe,scissor:Be,viewport:Ve,reset:We}}function co(l,d,f,m,h,g,_){let v=h.isWebGL2,y=d.has(`WEBGL_multisampled_render_to_texture`)?d.get(`WEBGL_multisampled_render_to_texture`):null,b=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap,S,C=new WeakMap,w=!1;try{w=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function T(e,t){return w?new OffscreenCanvas(e,t):A(`canvas`)}function ee(e,t,n,r){let i=1;if((e.width>r||e.height>r)&&(i=r/Math.max(e.width,e.height)),i<1||t===!0){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let r=t?ye:Math.floor,a=r(i*e.width),o=r(i*e.height);S===void 0&&(S=T(a,o));let s=n?T(a,o):S;return s.width=a,s.height=o,s.getContext(`2d`).drawImage(e,0,0,a,o),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+e.width+`x`+e.height+`) to (`+a+`x`+o+`).`),s}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+e.width+`x`+e.height+`).`),e}return e}function E(e){return ve(e.width)&&ve(e.height)}function te(e){return v?!1:e.wrapS!==1001||e.wrapT!==1001||e.minFilter!==1003&&e.minFilter!==1006}function ne(e,t){return e.generateMipmaps&&t&&e.minFilter!==1003&&e.minFilter!==1006}function D(e){l.generateMipmap(e)}function ie(e,t,n,r,i=!1){if(v===!1)return t;if(e!==null){if(l[e]!==void 0)return l[e];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let a=t;if(t===l.RED&&(n===l.FLOAT&&(a=l.R32F),n===l.HALF_FLOAT&&(a=l.R16F),n===l.UNSIGNED_BYTE&&(a=l.R8)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.R8UI),n===l.UNSIGNED_SHORT&&(a=l.R16UI),n===l.UNSIGNED_INT&&(a=l.R32UI),n===l.BYTE&&(a=l.R8I),n===l.SHORT&&(a=l.R16I),n===l.INT&&(a=l.R32I)),t===l.RG&&(n===l.FLOAT&&(a=l.RG32F),n===l.HALF_FLOAT&&(a=l.RG16F),n===l.UNSIGNED_BYTE&&(a=l.RG8)),t===l.RGBA){let e=i?re:M.getTransfer(r);n===l.FLOAT&&(a=l.RGBA32F),n===l.HALF_FLOAT&&(a=l.RGBA16F),n===l.UNSIGNED_BYTE&&(a=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT_4_4_4_4&&(a=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(a=l.RGB5_A1)}return(a===l.R16F||a===l.R32F||a===l.RG16F||a===l.RG32F||a===l.RGBA16F||a===l.RGBA32F)&&d.get(`EXT_color_buffer_float`),a}function ae(e,t,n){return ne(e,n)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function oe(e){return e===1003||e===1004||e===1005?l.NEAREST:l.LINEAR}function se(e){let t=e.target;t.removeEventListener(`dispose`,se),ue(t),t.isVideoTexture&&x.delete(t)}function le(e){let t=e.target;t.removeEventListener(`dispose`,le),fe(t)}function ue(e){let t=m.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=C.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&de(e),Object.keys(r).length===0&&C.delete(n)}m.remove(e)}function de(e){let t=m.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=C.get(n);delete r[t.__cacheKey],_.memory.textures--}function fe(e){let t=e.texture,n=m.get(e),r=m.get(t);if(r.__webglTexture!==void 0&&(l.deleteTexture(r.__webglTexture),_.memory.textures--),e.depthTexture&&e.depthTexture.dispose(),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(n.__webglFramebuffer[e]))for(let t=0;t<n.__webglFramebuffer[e].length;t++)l.deleteFramebuffer(n.__webglFramebuffer[e][t]);else l.deleteFramebuffer(n.__webglFramebuffer[e]);n.__webglDepthbuffer&&l.deleteRenderbuffer(n.__webglDepthbuffer[e])}else{if(Array.isArray(n.__webglFramebuffer))for(let e=0;e<n.__webglFramebuffer.length;e++)l.deleteFramebuffer(n.__webglFramebuffer[e]);else l.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&l.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&l.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let e=0;e<n.__webglColorRenderbuffer.length;e++)n.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(n.__webglColorRenderbuffer[e]);n.__webglDepthRenderbuffer&&l.deleteRenderbuffer(n.__webglDepthRenderbuffer)}if(e.isWebGLMultipleRenderTargets)for(let e=0,n=t.length;e<n;e++){let n=m.get(t[e]);n.__webglTexture&&(l.deleteTexture(n.__webglTexture),_.memory.textures--),m.remove(t[e])}m.remove(t),m.remove(e)}let pe=0;function me(){pe=0}function he(){let e=pe;return e>=h.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+h.maxTextures),pe+=1,e}function ge(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function _e(e,t){let n=m.get(e);if(e.isVideoTexture&&Re(e),e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{Ee(n,e,t);return}}f.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function be(e,t){let n=m.get(e);e.version>0&&n.__version!==e.version?Ee(n,e,t):f.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function xe(e,t){let n=m.get(e);e.version>0&&n.__version!==e.version?Ee(n,e,t):f.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function O(e,t){let n=m.get(e);e.version>0&&n.__version!==e.version?De(n,e,t):f.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let k={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},Se={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},Ce={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function we(e,t,n){if(n?(l.texParameteri(e,l.TEXTURE_WRAP_S,k[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,k[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,k[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,Se[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,Se[t.minFilter])):(l.texParameteri(e,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(e,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,l.CLAMP_TO_EDGE),(t.wrapS!==1001||t.wrapT!==1001)&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.`),l.texParameteri(e,l.TEXTURE_MAG_FILTER,oe(t.magFilter)),l.texParameteri(e,l.TEXTURE_MIN_FILTER,oe(t.minFilter)),t.minFilter!==1003&&t.minFilter!==1006&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.`)),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,Ce[t.compareFunction])),d.has(`EXT_texture_filter_anisotropic`)===!0){let n=d.get(`EXT_texture_filter_anisotropic`);if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&d.has(`OES_texture_float_linear`)===!1||v===!1&&t.type===1016&&d.has(`OES_texture_half_float_linear`)===!1)return;(t.anisotropy>1||m.get(t).__currentAnisotropy)&&(l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,h.getMaxAnisotropy())),m.get(t).__currentAnisotropy=t.anisotropy)}}function Te(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,se));let r=t.source,i=C.get(r);i===void 0&&(i={},C.set(r,i));let a=ge(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},_.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&de(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function Ee(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=Te(e,t),a=t.source;f.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=m.get(a);if(a.version!==o.__version||i===!0){f.activeTexture(l.TEXTURE0+n);let e=M.getPrimaries(M.workingColorSpace),s=t.colorSpace===``?null:M.getPrimaries(t.colorSpace),c=t.colorSpace===``||e===s?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let d=te(t)&&E(t.image)===!1,m=ee(t.image,d,!1,h.maxTextureSize);m=ze(t,m);let _=E(m)||v,y=g.convert(t.format,t.colorSpace),b=g.convert(t.type),x=ie(t.internalFormat,y,b,t.colorSpace,t.isVideoTexture);we(r,t,_);let S,C=t.mipmaps,w=v&&t.isVideoTexture!==!0&&x!==36196,T=o.__version===void 0||i===!0,re=ae(t,m,_);if(t.isDepthTexture)x=l.DEPTH_COMPONENT,v?x=t.type===1015?l.DEPTH_COMPONENT32F:t.type===1014?l.DEPTH_COMPONENT24:t.type===1020?l.DEPTH24_STENCIL8:l.DEPTH_COMPONENT16:t.type===1015&&console.error(`WebGLRenderer: Floating point depth texture requires WebGL2.`),t.format===1026&&x===l.DEPTH_COMPONENT&&t.type!==1012&&t.type!==1014&&(console.warn(`THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.`),t.type=u,b=g.convert(t.type)),t.format===1027&&x===l.DEPTH_COMPONENT&&(x=l.DEPTH_STENCIL,t.type!==1020&&(console.warn(`THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.`),t.type=p,b=g.convert(t.type))),T&&(w?f.texStorage2D(l.TEXTURE_2D,1,x,m.width,m.height):f.texImage2D(l.TEXTURE_2D,0,x,m.width,m.height,0,y,b,null));else if(t.isDataTexture){if(C.length>0&&_){w&&T&&f.texStorage2D(l.TEXTURE_2D,re,x,C[0].width,C[0].height);for(let e=0,t=C.length;e<t;e++)S=C[e],w?f.texSubImage2D(l.TEXTURE_2D,e,0,0,S.width,S.height,y,b,S.data):f.texImage2D(l.TEXTURE_2D,e,x,S.width,S.height,0,y,b,S.data);t.generateMipmaps=!1}else w?(T&&f.texStorage2D(l.TEXTURE_2D,re,x,m.width,m.height),f.texSubImage2D(l.TEXTURE_2D,0,0,0,m.width,m.height,y,b,m.data)):f.texImage2D(l.TEXTURE_2D,0,x,m.width,m.height,0,y,b,m.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){w&&T&&f.texStorage3D(l.TEXTURE_2D_ARRAY,re,x,C[0].width,C[0].height,m.depth);for(let e=0,n=C.length;e<n;e++)S=C[e],t.format===1023?w?f.texSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,S.width,S.height,m.depth,y,b,S.data):f.texImage3D(l.TEXTURE_2D_ARRAY,e,x,S.width,S.height,m.depth,0,y,b,S.data):y===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):w?f.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,S.width,S.height,m.depth,y,S.data,0,0):f.compressedTexImage3D(l.TEXTURE_2D_ARRAY,e,x,S.width,S.height,m.depth,0,S.data,0,0)}else{w&&T&&f.texStorage2D(l.TEXTURE_2D,re,x,C[0].width,C[0].height);for(let e=0,n=C.length;e<n;e++)S=C[e],t.format===1023?w?f.texSubImage2D(l.TEXTURE_2D,e,0,0,S.width,S.height,y,b,S.data):f.texImage2D(l.TEXTURE_2D,e,x,S.width,S.height,0,y,b,S.data):y===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):w?f.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,S.width,S.height,y,S.data):f.compressedTexImage2D(l.TEXTURE_2D,e,x,S.width,S.height,0,S.data)}}else if(t.isDataArrayTexture)w?(T&&f.texStorage3D(l.TEXTURE_2D_ARRAY,re,x,m.width,m.height,m.depth),f.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,m.width,m.height,m.depth,y,b,m.data)):f.texImage3D(l.TEXTURE_2D_ARRAY,0,x,m.width,m.height,m.depth,0,y,b,m.data);else if(t.isData3DTexture)w?(T&&f.texStorage3D(l.TEXTURE_3D,re,x,m.width,m.height,m.depth),f.texSubImage3D(l.TEXTURE_3D,0,0,0,0,m.width,m.height,m.depth,y,b,m.data)):f.texImage3D(l.TEXTURE_3D,0,x,m.width,m.height,m.depth,0,y,b,m.data);else if(t.isFramebufferTexture){if(T){if(w)f.texStorage2D(l.TEXTURE_2D,re,x,m.width,m.height);else{let e=m.width,t=m.height;for(let n=0;n<re;n++)f.texImage2D(l.TEXTURE_2D,n,x,e,t,0,y,b,null),e>>=1,t>>=1}}}else if(C.length>0&&_){w&&T&&f.texStorage2D(l.TEXTURE_2D,re,x,C[0].width,C[0].height);for(let e=0,t=C.length;e<t;e++)S=C[e],w?f.texSubImage2D(l.TEXTURE_2D,e,0,0,y,b,S):f.texImage2D(l.TEXTURE_2D,e,x,y,b,S);t.generateMipmaps=!1}else w?(T&&f.texStorage2D(l.TEXTURE_2D,re,x,m.width,m.height),f.texSubImage2D(l.TEXTURE_2D,0,0,0,y,b,m)):f.texImage2D(l.TEXTURE_2D,0,x,y,b,m);ne(t,_)&&D(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function De(e,t,n){if(t.image.length!==6)return;let r=Te(e,t),i=t.source;f.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=m.get(i);if(i.version!==a.__version||r===!0){f.activeTexture(l.TEXTURE0+n);let e=M.getPrimaries(M.workingColorSpace),o=t.colorSpace===``?null:M.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,d=[];for(let e=0;e<6;e++)!c&&!u?d[e]=ee(t.image[e],!1,!0,h.maxCubemapSize):d[e]=u?t.image[e].image:t.image[e],d[e]=ze(t,d[e]);let p=d[0],m=E(p)||v,_=g.convert(t.format,t.colorSpace),y=g.convert(t.type),b=ie(t.internalFormat,_,y,t.colorSpace),x=v&&t.isVideoTexture!==!0,S=a.__version===void 0||r===!0,C=ae(t,p,m);we(l.TEXTURE_CUBE_MAP,t,m);let w;if(c){x&&S&&f.texStorage2D(l.TEXTURE_CUBE_MAP,C,b,p.width,p.height);for(let e=0;e<6;e++){w=d[e].mipmaps;for(let n=0;n<w.length;n++){let r=w[n];t.format===1023?x?f.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,_,y,r.data):f.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,b,r.width,r.height,0,_,y,r.data):_===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):x?f.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,_,r.data):f.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,b,r.width,r.height,0,r.data)}}}else{w=t.mipmaps,x&&S&&(w.length>0&&C++,f.texStorage2D(l.TEXTURE_CUBE_MAP,C,b,d[0].width,d[0].height));for(let e=0;e<6;e++)if(u){x?f.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,d[e].width,d[e].height,_,y,d[e].data):f.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,b,d[e].width,d[e].height,0,_,y,d[e].data);for(let t=0;t<w.length;t++){let n=w[t].image[e].image;x?f.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,_,y,n.data):f.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,b,n.width,n.height,0,_,y,n.data)}}else{x?f.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,_,y,d[e]):f.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,b,_,y,d[e]);for(let t=0;t<w.length;t++){let n=w[t];x?f.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,_,y,n.image[e]):f.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,b,_,y,n.image[e])}}}ne(t,m)&&D(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function j(e,t,n,r,i,a){let o=g.convert(n.format,n.colorSpace),s=g.convert(n.type),c=ie(n.internalFormat,o,s,n.colorSpace);if(!m.get(t).__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?f.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):f.texImage2D(i,a,c,e,n,0,o,s,null)}f.bindFramebuffer(l.FRAMEBUFFER,e),Le(t)?y.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,m.get(n).__webglTexture,0,Ie(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,m.get(n).__webglTexture,a),f.bindFramebuffer(l.FRAMEBUFFER,null)}function Oe(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer&&!t.stencilBuffer){let r=v===!0?l.DEPTH_COMPONENT24:l.DEPTH_COMPONENT16;if(n||Le(t)){let e=t.depthTexture;e&&e.isDepthTexture&&(e.type===1015?r=l.DEPTH_COMPONENT32F:e.type===1014&&(r=l.DEPTH_COMPONENT24));let n=Ie(t);Le(t)?y.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,n,r,t.width,t.height):l.renderbufferStorageMultisample(l.RENDERBUFFER,n,r,t.width,t.height)}else l.renderbufferStorage(l.RENDERBUFFER,r,t.width,t.height);l.framebufferRenderbuffer(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.RENDERBUFFER,e)}else if(t.depthBuffer&&t.stencilBuffer){let r=Ie(t);n&&Le(t)===!1?l.renderbufferStorageMultisample(l.RENDERBUFFER,r,l.DEPTH24_STENCIL8,t.width,t.height):Le(t)?y.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,r,l.DEPTH24_STENCIL8,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,l.DEPTH_STENCIL,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.RENDERBUFFER,e)}else{let e=t.isWebGLMultipleRenderTargets===!0?t.texture:[t.texture];for(let r=0;r<e.length;r++){let i=e[r],a=g.convert(i.format,i.colorSpace),o=g.convert(i.type),s=ie(i.internalFormat,a,o,i.colorSpace),c=Ie(t);n&&Le(t)===!1?l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,t.width,t.height):Le(t)?y.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,c,s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function ke(e,t){if(t&&t.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(f.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);m.get(t.depthTexture).__webglTexture&&t.depthTexture.image.width===t.width&&t.depthTexture.image.height===t.height||(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),_e(t.depthTexture,0);let n=m.get(t.depthTexture).__webglTexture,r=Ie(t);if(t.depthTexture.format===1026)Le(t)?y.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,n,0,r):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,n,0);else if(t.depthTexture.format===1027)Le(t)?y.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,n,0,r):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,n,0);else throw Error(`Unknown depthTexture format`)}function Ae(e){let t=m.get(e),n=e.isWebGLCubeRenderTarget===!0;if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)throw Error(`target.depthTexture not supported in Cube render targets`);ke(t.__webglFramebuffer,e)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)f.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]=l.createRenderbuffer(),Oe(t.__webglDepthbuffer[n],e,!1)}else f.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer=l.createRenderbuffer(),Oe(t.__webglDepthbuffer,e,!1);f.bindFramebuffer(l.FRAMEBUFFER,null)}function je(e,t,n){let r=m.get(e);t!==void 0&&j(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Ae(e)}function Me(e){let t=e.texture,n=m.get(e),r=m.get(t);e.addEventListener(`dispose`,le),e.isWebGLMultipleRenderTargets!==!0&&(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,_.memory.textures++);let i=e.isWebGLCubeRenderTarget===!0,a=e.isWebGLMultipleRenderTargets===!0,o=E(e)||v;if(i){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(v&&t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(v&&t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(a){if(h.drawBuffers){let t=e.texture;for(let e=0,n=t.length;e<n;e++){let n=m.get(t[e]);n.__webglTexture===void 0&&(n.__webglTexture=l.createTexture(),_.memory.textures++)}}else console.warn(`THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.`)}if(v&&e.samples>0&&Le(e)===!1){let r=a?t:[t];n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],f.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<r.length;t++){let i=r[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=g.convert(i.format,i.colorSpace),o=g.convert(i.type),s=ie(i.internalFormat,a,o,i.colorSpace,e.isXRRenderTarget===!0),c=Ie(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Oe(n.__webglDepthRenderbuffer,e,!0)),f.bindFramebuffer(l.FRAMEBUFFER,null)}}if(i){f.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),we(l.TEXTURE_CUBE_MAP,t,o);for(let r=0;r<6;r++)if(v&&t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)j(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else j(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);ne(t,o)&&D(l.TEXTURE_CUBE_MAP),f.unbindTexture()}else if(a){let t=e.texture;for(let r=0,i=t.length;r<i;r++){let i=t[r],a=m.get(i);f.bindTexture(l.TEXTURE_2D,a.__webglTexture),we(l.TEXTURE_2D,i,o),j(n.__webglFramebuffer,e,i,l.COLOR_ATTACHMENT0+r,l.TEXTURE_2D,0),ne(i,o)&&D(l.TEXTURE_2D)}f.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(v?i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY:console.error(`THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.`)),f.bindTexture(i,r.__webglTexture),we(i,t,o),v&&t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)j(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else j(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);ne(t,o)&&D(i),f.unbindTexture()}e.depthBuffer&&Ae(e)}function Pe(e){let t=E(e)||v,n=e.isWebGLMultipleRenderTargets===!0?e.texture:[e.texture];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(ne(i,t)){let t=e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:l.TEXTURE_2D,n=m.get(i).__webglTexture;f.bindTexture(t,n),D(t),f.unbindTexture()}}}function Fe(e){if(v&&e.samples>0&&Le(e)===!1){let t=e.isWebGLMultipleRenderTargets?e.texture:[e.texture],n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=[],o=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,s=m.get(e),c=e.isWebGLMultipleRenderTargets===!0;if(c)for(let e=0;e<t.length;e++)f.bindFramebuffer(l.FRAMEBUFFER,s.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),f.bindFramebuffer(l.FRAMEBUFFER,s.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);f.bindFramebuffer(l.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer),f.bindFramebuffer(l.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let u=0;u<t.length;u++){a.push(l.COLOR_ATTACHMENT0+u),e.depthBuffer&&a.push(o);let d=s.__ignoreDepthValues!==void 0&&s.__ignoreDepthValues;if(d===!1&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),c&&l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,s.__webglColorRenderbuffer[u]),d===!0&&(l.invalidateFramebuffer(l.READ_FRAMEBUFFER,[o]),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[o])),c){let e=m.get(t[u]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),b&&l.invalidateFramebuffer(l.READ_FRAMEBUFFER,a)}if(f.bindFramebuffer(l.READ_FRAMEBUFFER,null),f.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),c)for(let e=0;e<t.length;e++){f.bindFramebuffer(l.FRAMEBUFFER,s.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,s.__webglColorRenderbuffer[e]);let n=m.get(t[e]).__webglTexture;f.bindFramebuffer(l.FRAMEBUFFER,s.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}f.bindFramebuffer(l.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}}function Ie(e){return Math.min(h.maxSamples,e.samples)}function Le(e){let t=m.get(e);return v&&e.samples>0&&d.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Re(e){let t=_.render.frame;x.get(e)!==t&&(x.set(e,t),e.update())}function ze(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||e.format===1035||n!==`srgb-linear`&&n!==``&&(M.getTransfer(n)===`srgb`?v===!1?d.has(`EXT_sRGB`)===!0&&r===1023?(e.format=ce,e.minFilter=o,e.generateMipmaps=!1):t=Ne.sRGBToLinear(t):(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}this.allocateTextureUnit=he,this.resetTextureUnits=me,this.setTexture2D=_e,this.setTexture2DArray=be,this.setTexture3D=xe,this.setTextureCube=O,this.rebindTextures=je,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Le}function lo(e,t,n){let r=n.isWebGL2;function i(n,i=``){let a,o=M.getTransfer(i);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return r?e.HALF_FLOAT:(a=t.get(`OES_texture_half_float`),a===null?null:a.HALF_FLOAT_OES);if(n===1021)return e.ALPHA;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1035)return a=t.get(`EXT_sRGB`),a===null?null:a.SRGB_ALPHA_EXT;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(o===`srgb`){if(a=t.get(`WEBGL_compressed_texture_s3tc_srgb`),a!==null){if(n===33776)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(a=t.get(`WEBGL_compressed_texture_s3tc`),a!==null){if(n===33776)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(a=t.get(`WEBGL_compressed_texture_pvrtc`),a!==null){if(n===35840)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196)return a=t.get(`WEBGL_compressed_texture_etc1`),a===null?null:a.COMPRESSED_RGB_ETC1_WEBGL;if(n===37492||n===37496){if(a=t.get(`WEBGL_compressed_texture_etc`),a!==null){if(n===37492)return o===`srgb`?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===37496)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(a=t.get(`WEBGL_compressed_texture_astc`),a!==null){if(n===37808)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return o===`srgb`?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(a=t.get(`EXT_texture_compression_bptc`),a!==null){if(n===36492)return o===`srgb`?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(a=t.get(`EXT_texture_compression_rgtc`),a!==null){if(n===36492)return a.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?r?e.UNSIGNED_INT_24_8:(a=t.get(`WEBGL_depth_texture`),a===null?null:a.UNSIGNED_INT_24_8_WEBGL):e[n]===void 0?null:e[n]}return{convert:i}}var uo=class extends rr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},fo=class extends Gt{constructor(){super(),this.isGroup=!0,this.type=`Group`}},po={type:`move`},mo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(po)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ho=class extends ue{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,d=null,f=null,_=null,v=null,y=null,b=t.getContextAttributes(),x=null,S=null,C=[],w=[],T=new O,ee=null,E=new rr;E.layers.enable(1),E.viewport=new ze;let te=new rr;te.layers.enable(2),te.viewport=new ze;let ne=[E,te],D=new uo;D.layers.enable(1),D.layers.enable(2);let re=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new mo,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new mo,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new mo,C[e]=t),t.getHandSpace()};function ae(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,ae),r.removeEventListener(`selectstart`,ae),r.removeEventListener(`selectend`,ae),r.removeEventListener(`squeeze`,ae),r.removeEventListener(`squeezestart`,ae),r.removeEventListener(`squeezeend`,ae),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}re=null,ie=null,e.setRenderTarget(x),v=null,_=null,f=null,r=null,S=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(ee),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return _===null?v:_},this.getBinding=function(){return f},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(d){if(r=d,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ae),r.addEventListener(`selectstart`,ae),r.addEventListener(`selectend`,ae),r.addEventListener(`squeeze`,ae),r.addEventListener(`squeezestart`,ae),r.addEventListener(`squeezeend`,ae),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),b.xrCompatible!==!0&&await t.makeXRCompatible(),ee=e.getPixelRatio(),e.getSize(T),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let n={antialias:r.renderState.layers!==void 0||b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};v=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),S=new Ve(v.framebufferWidth,v.framebufferHeight,{format:m,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?g:h,a=b.stencil?p:u);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};f=new XRWebGLBinding(r,t),_=f.createProjectionLayer(s),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),S=new Ve(_.textureWidth,_.textureHeight,{format:m,type:l,depthTexture:new ri(_.textureWidth,_.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let c=e.properties.get(S);c.__ignoreDepthValues=_.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ge.setContext(r),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}let ce=new N,le=new N;function ue(e,t,n){ce.setFromMatrixPosition(t.matrixWorld),le.setFromMatrixPosition(n.matrixWorld);let r=ce.distanceTo(le),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();let g=o+m,_=s+m,v=f-h,y=p+(r-h),b=c*s/_*g,x=l*s/_*g;e.projectionMatrix.makePerspective(v,y,b,x,g,_),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}function de(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;D.near=te.near=E.near=e.near,D.far=te.far=E.far=e.far,(re!==D.near||ie!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),re=D.near,ie=D.far);let t=e.parent,n=D.cameras;de(D,t);for(let e=0;e<n.length;e++)de(n[e],t);n.length===2?ue(D,E,te):D.projectionMatrix.copy(E.projectionMatrix),fe(e,D,t)};function fe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=pe*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(_!==null||v!==null)return s},this.setFoveation=function(e){s=e,_!==null&&(_.fixedFoveation=e),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=e)};let me=null;function he(t,r){if(d=r.getViewerPose(c||a),y=r,d!==null){let t=d.views;v!==null&&(e.setRenderTargetFramebuffer(S,v.framebuffer),e.setRenderTarget(S));let n=!1;t.length!==D.cameras.length&&(D.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(v!==null)a=v.getViewport(i);else{let t=f.getViewSubImage(_,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(S,t.colorTexture,_.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(S))}let o=ne[r];o===void 0&&(o=new rr,o.layers.enable(r),o.viewport=new ze,ne[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(D.matrix.copy(o.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),n===!0&&D.cameras.push(o)}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,r,c||a)}me&&me(t,r),r.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:r}),y=null}let ge=new gr;ge.setAnimationLoop(he),this.setAnimationLoop=function(e){me=e},this.dispose=function(){}}};function go(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Zn(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(r,i){r.opacity.value=i.opacity,i.color&&r.diffuse.value.copy(i.color),i.emissive&&r.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity),i.map&&(r.map.value=i.map,n(i.map,r.mapTransform)),i.alphaMap&&(r.alphaMap.value=i.alphaMap,n(i.alphaMap,r.alphaMapTransform)),i.bumpMap&&(r.bumpMap.value=i.bumpMap,n(i.bumpMap,r.bumpMapTransform),r.bumpScale.value=i.bumpScale,i.side===1&&(r.bumpScale.value*=-1)),i.normalMap&&(r.normalMap.value=i.normalMap,n(i.normalMap,r.normalMapTransform),r.normalScale.value.copy(i.normalScale),i.side===1&&r.normalScale.value.negate()),i.displacementMap&&(r.displacementMap.value=i.displacementMap,n(i.displacementMap,r.displacementMapTransform),r.displacementScale.value=i.displacementScale,r.displacementBias.value=i.displacementBias),i.emissiveMap&&(r.emissiveMap.value=i.emissiveMap,n(i.emissiveMap,r.emissiveMapTransform)),i.specularMap&&(r.specularMap.value=i.specularMap,n(i.specularMap,r.specularMapTransform)),i.alphaTest>0&&(r.alphaTest.value=i.alphaTest);let a=t.get(i).envMap;if(a&&(r.envMap.value=a,r.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=i.reflectivity,r.ior.value=i.ior,r.refractionRatio.value=i.refractionRatio),i.lightMap){r.lightMap.value=i.lightMap;let t=e._useLegacyLights===!0?Math.PI:1;r.lightMapIntensity.value=i.lightMapIntensity*t,n(i.lightMap,r.lightMapTransform)}i.aoMap&&(r.aoMap.value=i.aoMap,r.aoMapIntensity.value=i.aoMapIntensity,n(i.aoMap,r.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,r){e.metalness.value=r.metalness,r.metalnessMap&&(e.metalnessMap.value=r.metalnessMap,n(r.metalnessMap,e.metalnessMapTransform)),e.roughness.value=r.roughness,r.roughnessMap&&(e.roughnessMap.value=r.roughnessMap,n(r.roughnessMap,e.roughnessMapTransform)),t.get(r).envMap&&(e.envMapIntensity.value=r.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function _o(e,t,n,r){let i={},a={},o=[],s=n.isWebGL2?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16;o!==0&&16-o<a.boundary&&(n+=16-o),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var vo=class{constructor(e={}){let{canvas:t=we(),context:n=null,depth:r=!0,stencil:i=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;m=n===null?a:n.getContextAttributes().alpha;let h=new Uint32Array(4),g=new Int32Array(4),_=null,v=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=E,this._useLegacyLights=!1,this.toneMapping=0,this.toneMappingExposure=1;let x=this,S=!1,C=0,w=0,T=null,ee=-1,ne=null,D=new ze,re=new ze,ie=null,ae=new P(0),oe=0,se=t.width,ce=t.height,le=1,ue=null,de=null,fe=new ze(0,0,se,ce),pe=new ze(0,0,se,ce),me=!1,he=new hr,ge=!1,_e=!1,ve=null,be=new bt,xe=new O,k=new N,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ce(){return T===null?le:1}let A=n;function Te(e,n){for(let r=0;r<e.length;r++){let i=e[r],a=t.getContext(i,n);if(a!==null)return a}return null}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r160`),t.addEventListener(`webglcontextlost`,Qe,!1),t.addEventListener(`webglcontextrestored`,$e,!1),t.addEventListener(`webglcontextcreationerror`,et,!1),A===null){let t=[`webgl2`,`webgl`,`experimental-webgl`];if(x.isWebGL1Renderer===!0&&t.shift(),A=Te(t,e),A===null)throw Te(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}typeof WebGLRenderingContext<`u`&&A instanceof WebGLRenderingContext&&console.warn(`THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.`),A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let Ee,De,j,Oe,ke,M,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,Be,He,Ue,We,Ge,Ke,qe,Je,Ye;function Xe(){Ee=new Yr(A),De=new Tr(A,Ee,e),Ee.init(De),qe=new lo(A,Ee,De),j=new so(A,Ee,De),Oe=new Qr(A),ke=new Wa,M=new co(A,Ee,j,ke,De,qe,Oe),Ae=new Dr(x),je=new Jr(x),Me=new _r(A,De),Je=new Cr(A,Ee,Me,De),Ne=new Xr(A,Me,Oe,Je),Pe=new ni(A,Ne,Me,Oe),We=new ti(A,De,M),Be=new Er(ke),Fe=new Ua(x,Ae,je,Ee,De,Je,Be),Ie=new go(x,ke),Le=new Ja,Re=new to(Ee,De),Ue=new Sr(x,Ae,je,j,Pe,m,s),He=new oo(x,Pe,De),Ye=new _o(A,Oe,De,j),Ge=new wr(A,Ee,Oe,De),Ke=new Zr(A,Ee,Oe,De),Oe.programs=Fe.programs,x.capabilities=De,x.extensions=Ee,x.properties=ke,x.renderLists=Le,x.shadowMap=He,x.state=j,x.info=Oe}Xe();let Ze=new ho(x,A);this.xr=Ze,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let e=Ee.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ee.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(e){e!==void 0&&(le=e,this.setSize(se,ce,!1))},this.getSize=function(e){return e.set(se,ce)},this.setSize=function(e,n,r=!0){Ze.isPresenting?console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`):(se=e,ce=n,t.width=Math.floor(e*le),t.height=Math.floor(n*le),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(se*le,ce*le).floor()},this.setDrawingBufferSize=function(e,n,r){se=e,ce=n,le=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(D)},this.getViewport=function(e){return e.copy(fe)},this.setViewport=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),j.viewport(D.copy(fe).multiplyScalar(le).floor())},this.getScissor=function(e){return e.copy(pe)},this.setScissor=function(e,t,n,r){e.isVector4?pe.set(e.x,e.y,e.z,e.w):pe.set(e,t,n,r),j.scissor(re.copy(pe).multiplyScalar(le).floor())},this.getScissorTest=function(){return me},this.setScissorTest=function(e){j.setScissorTest(me=e)},this.setOpaqueSort=function(e){ue=e},this.setTransparentSort=function(e){de=e},this.getClearColor=function(e){return e.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(T!==null){let t=T.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=T.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=Ue.getClearColor(),r=Ue.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(h[0]=i,h[1]=a,h[2]=o,h[3]=r,A.clearBufferuiv(A.COLOR,0,h)):(g[0]=i,g[1]=a,g[2]=o,g[3]=r,A.clearBufferiv(A.COLOR,0,g))}else r|=A.COLOR_BUFFER_BIT}t&&(r|=A.DEPTH_BUFFER_BIT),n&&(r|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Qe,!1),t.removeEventListener(`webglcontextrestored`,$e,!1),t.removeEventListener(`webglcontextcreationerror`,et,!1),Le.dispose(),Re.dispose(),ke.dispose(),Ae.dispose(),je.dispose(),Pe.dispose(),Je.dispose(),Ye.dispose(),Fe.dispose(),Ze.dispose(),Ze.removeEventListener(`sessionstart`,st),Ze.removeEventListener(`sessionend`,ct),ve&&=(ve.dispose(),null),lt.stop()};function Qe(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),S=!0}function $e(){console.log(`THREE.WebGLRenderer: Context Restored.`),S=!1;let e=Oe.autoReset,t=He.enabled,n=He.autoUpdate,r=He.needsUpdate,i=He.type;Xe(),Oe.autoReset=e,He.enabled=t,He.autoUpdate=n,He.needsUpdate=r,He.type=i}function et(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function tt(e){let t=e.target;t.removeEventListener(`dispose`,tt),nt(t)}function nt(e){rt(e),ke.remove(e)}function rt(e){let t=ke.get(e).programs;t!==void 0&&(t.forEach(function(e){Fe.releaseProgram(e)}),e.isShaderMaterial&&Fe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Se);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=vt(e,t,n,r,i);j.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ne.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Je.setup(i,r,s,n,c);let h,g=Ge;if(c!==null&&(h=Me.get(c),g=Ke,g.setIndex(h)),i.isMesh)r.wireframe===!0?(j.setLineWidth(r.wireframeLinewidth*Ce()),g.setMode(A.LINES)):g.setMode(A.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),j.setLineWidth(e*Ce()),i.isLineSegments?g.setMode(A.LINES):i.isLineLoop?g.setMode(A.LINE_LOOP):g.setMode(A.LINE_STRIP)}else i.isPoints?g.setMode(A.POINTS):i.isSprite&&g.setMode(A.TRIANGLES);if(i.isBatchedMesh)g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function it(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ht(e,t,n),e.side=0,e.needsUpdate=!0,ht(e,t,n),e.side=2):ht(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),v=Re.get(n),v.init(),b.push(v),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),v.setupLights(x._useLegacyLights);let r=new Set;return e.traverse(function(e){let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];it(a,n,e),r.add(a)}else it(t,n,e),r.add(t)}}),b.pop(),v=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){ke.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ee.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let at=null;function ot(e){at&&at(e)}function st(){lt.stop()}function ct(){lt.start()}let lt=new gr;lt.setAnimationLoop(ot),typeof self<`u`&&lt.setContext(self),this.setAnimationLoop=function(e){at=e,Ze.setAnimationLoop(e),e===null?lt.stop():lt.start()},Ze.addEventListener(`sessionstart`,st),Ze.addEventListener(`sessionend`,ct),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(S===!0)return;e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(t),t=Ze.getCamera()),e.isScene===!0&&e.onBeforeRender(x,e,t,T),v=Re.get(e,b.length),v.init(),b.push(v),be.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),he.setFromProjectionMatrix(be),_e=this.localClippingEnabled,ge=Be.init(this.clippingPlanes,_e),_=Le.get(e,y.length),_.init(),y.push(_),ut(e,t,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(ue,de),this.info.render.frame++,ge===!0&&Be.beginShadows();let n=v.state.shadowsArray;if(He.render(n,e,t),ge===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ue.render(_,e),v.setupLights(x._useLegacyLights),t.isArrayCamera){let n=t.cameras;for(let t=0,r=n.length;t<r;t++){let r=n[t];dt(_,e,r,r.viewport)}}else dt(_,e,t);T!==null&&(M.updateMultisampleRenderTarget(T),M.updateRenderTargetMipmap(T)),e.isScene===!0&&e.onAfterRender(x,e,t),Je.resetDefaultState(),ee=-1,ne=null,b.pop(),v=b.length>0?b[b.length-1]:null,y.pop(),_=y.length>0?y[y.length-1]:null};function ut(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)v.pushLight(e),e.castShadow&&v.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||he.intersectsSprite(e)){r&&k.setFromMatrixPosition(e.matrixWorld).applyMatrix4(be);let t=Pe.update(e),i=e.material;i.visible&&_.push(e,t,i,n,k.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||he.intersectsObject(e))){let t=Pe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),k.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),k.copy(e.boundingSphere.center)),k.applyMatrix4(e.matrixWorld).applyMatrix4(be)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&_.push(e,t,s,n,k.z,o)}}else i.visible&&_.push(e,t,i,n,k.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ut(i[e],t,n,r)}function dt(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;v.setupLightsView(n),ge===!0&&Be.setGlobalState(x.clippingPlanes,n),a.length>0&&ft(i,a,t,n),r&&j.viewport(D.copy(r)),i.length>0&&pt(i,t,n),a.length>0&&pt(a,t,n),o.length>0&&pt(o,t,n),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function ft(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;let i=De.isWebGL2;ve===null&&(ve=new Ve(1,1,{generateMipmaps:!0,type:Ee.has(`EXT_color_buffer_half_float`)?f:l,minFilter:c,samples:i?4:0})),x.getDrawingBufferSize(xe),i?ve.setSize(xe.x,xe.y):ve.setSize(ye(xe.x),ye(xe.y));let a=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(ae),oe=x.getClearAlpha(),oe<1&&x.setClearColor(16777215,.5),x.clear();let o=x.toneMapping;x.toneMapping=0,pt(e,n,r),M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve);let s=!1;for(let e=0,i=t.length;e<i;e++){let i=t[e],a=i.object,o=i.geometry,c=i.material,l=i.group;if(c.side===2&&a.layers.test(r.layers)){let e=c.side;c.side=1,c.needsUpdate=!0,mt(a,n,r,o,c,l),c.side=e,c.needsUpdate=!0,s=!0}}s===!0&&(M.updateMultisampleRenderTarget(ve),M.updateRenderTargetMipmap(ve)),x.setRenderTarget(a),x.setClearColor(ae,oe),x.toneMapping=o}function pt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&mt(o,t,n,s,c,l)}}function mt(e,t,n,r,i,a){e.onBeforeRender(x,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(x,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=2):x.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(x,t,n,r,i,a)}function ht(e,t,n){t.isScene!==!0&&(t=Se);let r=ke.get(e),i=v.state.lights,a=v.state.shadowsArray,o=i.state.version,s=Fe.getParameters(e,i.state,a,t,n),c=Fe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?je:Ae).get(e.envMap||r.environment),l===void 0&&(e.addEventListener(`dispose`,tt),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return _t(e,s),u}else s.uniforms=Fe.getUniforms(e),e.onBuild(n,s,x),e.onBeforeCompile(s,x),u=Fe.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Be.uniform),_t(e,s),r.needsLights=xt(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function gt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ua.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function _t(e,t){let n=ke.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function vt(e,t,n,r,i){t.isScene!==!0&&(t=Se),M.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:te,c=(r.isMeshStandardMaterial?je:Ae).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(m=x.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=ke.get(r),y=v.state.lights;if(ge===!0&&(_e===!0||e!==ne)){let t=e===ne&&r.id===ee;Be.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==y.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Be.numPlanes||_.numIntersection!==Be.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?De.isWebGL2===!0&&_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let S=_.currentProgram;b===!0&&(S=ht(r,t,i));let C=!1,w=!1,E=!1,D=S.getUniforms(),re=_.uniforms;if(j.useProgram(S.program)&&(C=!0,w=!0,E=!0),r.id!==ee&&(ee=r.id,w=!0),C||ne!==e){D.setValue(A,`projectionMatrix`,e.projectionMatrix),D.setValue(A,`viewMatrix`,e.matrixWorldInverse);let t=D.map.cameraPosition;t!==void 0&&t.setValue(A,k.setFromMatrixPosition(e.matrixWorld)),De.logarithmicDepthBuffer&&D.setValue(A,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&D.setValue(A,`isOrthographic`,e.isOrthographicCamera===!0),ne!==e&&(ne=e,w=!0,E=!0)}if(i.isSkinnedMesh){D.setOptional(A,i,`bindMatrix`),D.setOptional(A,i,`bindMatrixInverse`);let e=i.skeleton;e&&(De.floatVertexTextures?(e.boneTexture===null&&e.computeBoneTexture(),D.setValue(A,`boneTexture`,e.boneTexture,M)):console.warn(`THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.`))}i.isBatchedMesh&&(D.setOptional(A,i,`batchingTexture`),D.setValue(A,`batchingTexture`,i._matricesTexture,M));let ie=n.morphAttributes;if((ie.position!==void 0||ie.normal!==void 0||ie.color!==void 0&&De.isWebGL2===!0)&&We.update(i,n,S),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,D.setValue(A,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(re.envMap.value=c,re.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),w&&(D.setValue(A,`toneMappingExposure`,x.toneMappingExposure),_.needsLights&&yt(re,E),a&&r.fog===!0&&Ie.refreshFogUniforms(re,a),Ie.refreshMaterialUniforms(re,r,le,ce,ve),ua.upload(A,gt(_),re,M)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ua.upload(A,gt(_),re,M),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&D.setValue(A,`center`,i.center),D.setValue(A,`modelViewMatrix`,i.modelViewMatrix),D.setValue(A,`normalMatrix`,i.normalMatrix),D.setValue(A,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++)if(De.isWebGL2){let n=e[t];Ye.update(n,S),Ye.bind(n,S)}else console.warn(`THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.`)}return S}function yt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function xt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(e,t,n){ke.get(e.texture).__webglTexture=t,ke.get(e.depthTexture).__webglTexture=n;let r=ke.get(e);r.__hasExternalTextures=!0,r.__hasExternalTextures&&(r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||Ee.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(e,t){let n=ke.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){T=e,C=t,w=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=ke.get(e);s.__useDefaultFramebuffer===void 0?s.__webglFramebuffer===void 0?M.setupRenderTarget(e):s.__hasExternalTextures&&M.rebindTextures(e,ke.get(e.texture).__webglTexture,ke.get(e.depthTexture).__webglTexture):(j.bindFramebuffer(A.FRAMEBUFFER,null),r=!1);let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=ke.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=De.isWebGL2&&e.samples>0&&M.useMultisampledRTT(e)===!1?ke.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,D.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest}else D.copy(fe).multiplyScalar(le).floor(),re.copy(pe).multiplyScalar(le).floor(),ie=me;if(j.bindFramebuffer(A.FRAMEBUFFER,i)&&De.drawBuffers&&r&&j.drawBuffers(e,i),j.viewport(D),j.scissor(re),j.setScissorTest(ie),a){let r=ke.get(e.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=ke.get(e.texture),i=t||0;A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}ee=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=ke.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){j.bindFramebuffer(A.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(s!==1023&&qe.convert(s)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}let l=c===1016&&(Ee.has(`EXT_color_buffer_half_float`)||De.isWebGL2&&Ee.has(`EXT_color_buffer_float`));if(c!==1009&&qe.convert(c)!==A.getParameter(A.IMPLEMENTATION_COLOR_READ_TYPE)&&!(c===1015&&(De.isWebGL2||Ee.has(`OES_texture_float`)||Ee.has(`WEBGL_color_buffer_float`)))&&!l){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&A.readPixels(t,n,r,i,qe.convert(s),qe.convert(c),a)}finally{let e=T===null?null:ke.get(T).__webglFramebuffer;j.bindFramebuffer(A.FRAMEBUFFER,e)}}},this.copyFramebufferToTexture=function(e,t,n=0){let r=2**-n,i=Math.floor(t.image.width*r),a=Math.floor(t.image.height*r);M.setTexture2D(t,0),A.copyTexSubImage2D(A.TEXTURE_2D,n,0,0,e.x,e.y,i,a),j.unbindTexture()},this.copyTextureToTexture=function(e,t,n,r=0){let i=t.image.width,a=t.image.height,o=qe.convert(n.format),s=qe.convert(n.type);M.setTexture2D(n,0),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,n.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,n.unpackAlignment),t.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,r,e.x,e.y,i,a,o,s,t.image.data):t.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,r,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,o,t.mipmaps[0].data):A.texSubImage2D(A.TEXTURE_2D,r,e.x,e.y,o,s,t.image),r===0&&n.generateMipmaps&&A.generateMipmap(A.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n,r,i=0){if(x.isWebGL1Renderer){console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.`);return}let a=e.max.x-e.min.x+1,o=e.max.y-e.min.y+1,s=e.max.z-e.min.z+1,c=qe.convert(r.format),l=qe.convert(r.type),u;if(r.isData3DTexture)M.setTexture3D(r,0),u=A.TEXTURE_3D;else if(r.isDataArrayTexture||r.isCompressedArrayTexture)M.setTexture2DArray(r,0),u=A.TEXTURE_2D_ARRAY;else{console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,r.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,r.unpackAlignment);let d=A.getParameter(A.UNPACK_ROW_LENGTH),f=A.getParameter(A.UNPACK_IMAGE_HEIGHT),p=A.getParameter(A.UNPACK_SKIP_PIXELS),m=A.getParameter(A.UNPACK_SKIP_ROWS),h=A.getParameter(A.UNPACK_SKIP_IMAGES),g=n.isCompressedTexture?n.mipmaps[i]:n.image;A.pixelStorei(A.UNPACK_ROW_LENGTH,g.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,g.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,e.min.x),A.pixelStorei(A.UNPACK_SKIP_ROWS,e.min.y),A.pixelStorei(A.UNPACK_SKIP_IMAGES,e.min.z),n.isDataTexture||n.isData3DTexture?A.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g.data):n.isCompressedArrayTexture?(console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.`),A.compressedTexSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,g.data)):A.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,g),A.pixelStorei(A.UNPACK_ROW_LENGTH,d),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,f),A.pixelStorei(A.UNPACK_SKIP_PIXELS,p),A.pixelStorei(A.UNPACK_SKIP_ROWS,m),A.pixelStorei(A.UNPACK_SKIP_IMAGES,h),i===0&&r.generateMipmaps&&A.generateMipmap(u),j.unbindTexture()},this.initTexture=function(e){e.isCubeTexture?M.setTextureCube(e,0):e.isData3DTexture?M.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?M.setTexture2DArray(e,0):M.setTexture2D(e,0),j.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,j.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return le}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===`display-p3`?`display-p3`:`srgb`,t.unpackColorSpace=M.workingColorSpace===`display-p3-linear`?`display-p3`:`srgb`}get outputEncoding(){return console.warn(`THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.`),this.outputColorSpace===`srgb`?w:C}set outputEncoding(e){console.warn(`THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead.`),this.outputColorSpace=e===3001?E:te}get useLegacyLights(){return console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights}set useLegacyLights(e){console.warn(`THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.`),this._useLegacyLights=e}},yo=class extends vo{};yo.prototype.isWebGL1Renderer=!0;var bo=class extends Gt{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},xo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=se,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=me()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn(`THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.`),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=me()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=me()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},So=new N,Co=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)So.fromBufferAttribute(this,t),So.applyMatrix4(e),this.setXYZ(t,So.x,So.y,So.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)So.fromBufferAttribute(this,t),So.applyNormalMatrix(e),this.setXYZ(t,So.x,So.y,So.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)So.fromBufferAttribute(this,t),So.transformDirection(e),this.setXYZ(t,So.x,So.y,So.z);return this}setX(e,t){return this.normalized&&(t=xe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=be(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=be(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=be(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=be(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xe(t,this.array),n=xe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xe(t,this.array),n=xe(n,this.array),r=xe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xe(t,this.array),n=xe(n,this.array),r=xe(r,this.array),i=xe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},wo=class extends dn{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new P(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},To,Eo=new N,Do=new N,Oo=new N,ko=new O,Ao=new O,jo=new bt,Mo=new N,No=new N,Po=new N,Fo=new O,Io=new O,Lo=new O,Ro=class extends Gt{constructor(e=new wo){if(super(),this.isSprite=!0,this.type=`Sprite`,To===void 0){To=new En;let e=new xo(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);To.setIndex([0,1,2,0,2,3]),To.setAttribute(`position`,new Co(e,3,0,!1)),To.setAttribute(`uv`,new Co(e,2,3,!1))}this.geometry=To,this.material=e,this.center=new O(.5,.5)}raycast(e,t){e.camera===null&&console.error(`THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Do.setFromMatrixScale(this.matrixWorld),jo.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Oo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Do.multiplyScalar(-Oo.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;zo(Mo.set(-.5,-.5,0),Oo,a,Do,r,i),zo(No.set(.5,-.5,0),Oo,a,Do,r,i),zo(Po.set(.5,.5,0),Oo,a,Do,r,i),Fo.set(0,0),Io.set(1,0),Lo.set(1,1);let o=e.ray.intersectTriangle(Mo,No,Po,!1,Eo);if(o===null&&(zo(No.set(-.5,.5,0),Oo,a,Do,r,i),Io.set(0,1),o=e.ray.intersectTriangle(Mo,Po,No,!1,Eo),o===null))return;let s=e.ray.origin.distanceTo(Eo);s<e.near||s>e.far||t.push({distance:s,point:Eo.clone(),uv:rn.getInterpolation(Eo,Mo,No,Po,Fo,Io,Lo,new O),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function zo(e,t,n,r,i,a){ko.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Ao.copy(ko):(Ao.x=a*ko.x-i*ko.y,Ao.y=i*ko.x+a*ko.y),e.copy(t),e.x+=Ao.x,e.y+=Ao.y,e.applyMatrix4(jo)}var Bo=class extends hn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vo=new bt,Ho=new bt,Uo=[],Wo=new qe,Go=new bt,Ko=new Wn,qo=new dt,Jo=class extends Wn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Go)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qe),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vo),Wo.copy(e.boundingBox).applyMatrix4(Vo),this.boundingBox.union(Wo)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new dt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vo),qo.copy(e.boundingSphere).applyMatrix4(Vo),this.boundingSphere.union(qo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ko.geometry=this.geometry,Ko.material=this.material,Ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qo.copy(this.boundingSphere),qo.applyMatrix4(n),e.ray.intersectsSphere(qo)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Vo),Ho.multiplyMatrices(n,Vo),Ko.matrixWorld=Ho,Ko.raycast(e,Uo);for(let e=0,n=Uo.length;e<n;e++){let n=Uo[e];n.instanceId=i,n.object=this,t.push(n)}Uo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bo(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`})}},Yo=class extends dn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new P(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xo=new N,Zo=new N,Qo=new bt,$o=new yt,es=new dt,ts=class extends Gt{constructor(e=new En,t=new Yo){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Xo.fromBufferAttribute(t,e-1),Zo.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Xo.distanceTo(Zo);e.setAttribute(`lineDistance`,new vn(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(r),es.radius+=i,e.ray.intersectsSphere(es)===!1)return;Qo.copy(r).invert(),$o.copy(e.ray).applyMatrix4(Qo);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=new N,l=new N,u=new N,d=new N,f=this.isLineSegments?2:1,p=n.index,m=n.attributes.position;if(p!==null){let n=Math.max(0,a.start),r=Math.min(p.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=f){let n=p.getX(i),r=p.getX(i+1);if(c.fromBufferAttribute(m,n),l.fromBufferAttribute(m,r),$o.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let a=e.ray.origin.distanceTo(d);a<e.near||a>e.far||t.push({distance:a,point:u.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}else{let n=Math.max(0,a.start),r=Math.min(m.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=f){if(c.fromBufferAttribute(m,i),l.fromBufferAttribute(m,i+1),$o.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let n=e.ray.origin.distanceTo(d);n<e.near||n>e.far||t.push({distance:n,point:u.clone().applyMatrix4(this.matrixWorld),index:i,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}},ns=new N,rs=new N,is=class extends ts{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)ns.fromBufferAttribute(t,e),rs.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+ns.distanceTo(rs);e.setAttribute(`lineDistance`,new vn(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}},as=class extends Re{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},os=class e extends En{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new vn(u,3)),this.setAttribute(`normal`,new vn(d,3)),this.setAttribute(`uv`,new vn(f,2));function _(){let a=new N,_=new N,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let e=0;e<r;e++)for(let t=0;t<i;t++){let n=m[t][e],r=m[t+1][e],i=m[t+1][e+1],a=m[t][e+1];l.push(n,r,a),l.push(r,i,a),v+=6}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new O,m=new N,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ss=new N,cs=new N,ls=new N,us=new rn,ds=class extends En{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=1e4,r=Math.cos(fe*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=us;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),us.getNormal(ls),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=us[c[e]],o=us[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(ls.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:ls.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];ss.fromBufferAttribute(a,t),cs.fromBufferAttribute(a,n),d.push(ss.x,ss.y,ss.z),d.push(cs.x,cs.y,cs.z)}this.setAttribute(`position`,new vn(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},fs=class e extends En{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new N,p=new O;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new vn(s,3)),this.setAttribute(`normal`,new vn(c,3)),this.setAttribute(`uv`,new vn(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ps=class extends dn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new P(16777215),this.specular=new P(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new P(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new O(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ms=class extends dn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new P(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new P(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new O(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function hs(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function gs(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var _s=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},vs=class extends _s{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:b,endingEnd:b}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case x:i=e,o=2*t-n;break;case S:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case x:a=e,s=2*n-t;break;case S:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ys=class extends _s{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},bs=class extends _s{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},xs=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=hs(t,this.TimeBufferType),this.values=hs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hs(e.times,Array),values:hs(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bs(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ys(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vs(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _:t=this.InterpolantFactoryMethodDiscrete;break;case v:t=this.InterpolantFactoryMethodLinear;break;case y:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _;case this.InterpolantFactoryMethodLinear:return v;case this.InterpolantFactoryMethodSmooth:return y}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&gs(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===y,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};xs.prototype.TimeBufferType=Float32Array,xs.prototype.ValueBufferType=Float32Array,xs.prototype.DefaultInterpolation=v;var Ss=class extends xs{};Ss.prototype.ValueTypeName=`bool`,Ss.prototype.ValueBufferType=Array,Ss.prototype.DefaultInterpolation=_,Ss.prototype.InterpolantFactoryMethodLinear=void 0,Ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends xs{};Cs.prototype.ValueTypeName=`color`;var ws=class extends xs{};ws.prototype.ValueTypeName=`number`;var Ts=class extends _s{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)We.slerpFlat(i,0,a,c-o,a,c,s);return i}},Es=class extends xs{InterpolantFactoryMethodLinear(e){return new Ts(this.times,this.values,this.getValueSize(),e)}};Es.prototype.ValueTypeName=`quaternion`,Es.prototype.DefaultInterpolation=v,Es.prototype.InterpolantFactoryMethodSmooth=void 0;var Ds=class extends xs{};Ds.prototype.ValueTypeName=`string`,Ds.prototype.ValueBufferType=Array,Ds.prototype.DefaultInterpolation=_,Ds.prototype.InterpolantFactoryMethodLinear=void 0,Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Os=class extends xs{};Os.prototype.ValueTypeName=`vector`;var ks=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new P(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},As=class extends ks{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new P(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},js=new bt,Ms=new N,Ns=new N,Ps=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new O(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new O(1,1),this._viewportCount=1,this._viewports=[new ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ms.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ms),Ns.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ns),t.updateMatrixWorld(),js.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(js),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(js)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fs=new bt,Is=new N,Ls=new N,Rs=class extends Ps{constructor(){super(new rr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new O(4,2),this._viewportCount=6,this._viewports=[new ze(2,1,1,1),new ze(0,1,1,1),new ze(3,1,1,1),new ze(1,1,1,1),new ze(3,0,1,1),new ze(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),Is.setFromMatrixPosition(e.matrixWorld),n.position.copy(Is),Ls.copy(n.position),Ls.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ls),n.updateMatrixWorld(),r.makeTranslation(-Is.x,-Is.y,-Is.z),Fs.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fs)}},zs=class extends ks{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Rs}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Bs=class extends Ps{constructor(){super(new Or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Vs=class extends ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Bs}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Hs=`\\[\\]\\.:\\/`,Us=RegExp(`[\\[\\]\\.:\\/]`,`g`),Ws=`[^\\[\\]\\.:\\/]`,Gs=`[^`+Hs.replace(`\\.`,``)+`]`,Ks=`((?:WC+[\\/:])*)`.replace(`WC`,Ws),qs=`(WCOD+)?`.replace(`WCOD`,Gs),Js=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Ws),Ys=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Ws),Xs=RegExp(`^`+Ks+qs+Js+Ys+`$`),Zs=[`material`,`materials`,`bones`,`map`],Qs=class{constructor(e,t,n){let r=n||$s.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},$s=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Us,``)}static parseTrackName(e){let t=Xs.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Zs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$s.Composite=Qs,$s.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},$s.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},$s.prototype.GetterByBindingType=[$s.prototype._getValue_direct,$s.prototype._getValue_array,$s.prototype._getValue_arrayElement,$s.prototype._getValue_toArray],$s.prototype.SetterByBindingTypeAndVersioning=[[$s.prototype._setValue_direct,$s.prototype._setValue_direct_setNeedsUpdate,$s.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$s.prototype._setValue_array,$s.prototype._setValue_array_setNeedsUpdate,$s.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$s.prototype._setValue_arrayElement,$s.prototype._setValue_arrayElement_setNeedsUpdate,$s.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$s.prototype._setValue_fromArray,$s.prototype._setValue_fromArray_setNeedsUpdate,$s.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ec=class{constructor(e,t,n=0,r=1/0){this.ray=new yt(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new jt,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error(`THREE.Raycaster: Unsupported camera type: `+t.type)}intersectObject(e,t=!0,n=[]){return nc(e,this,n,t),n.sort(tc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)nc(e[r],this,n,t);return n.sort(tc),n}};function tc(e,t){return e.distance-t.distance}function nc(e,t,n,r){if(e.layers.test(t.layers)&&e.raycast(t,n),r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)nc(r[e],t,n,!0)}}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`160`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`160`);function rc(e,t,n,r){let i=e.index?e.toNonIndexed():e,a=new bt().compose(new N(n[0],n[1],n[2]),new We().setFromEuler(new At(r?r[0]:0,r?r[1]:0,r?r[2]:0)),new N(1,1,1));i.applyMatrix4(a);let o=i.attributes.position.count,s=new Float32Array(o*3),c=new P(t);for(let e=0;e<o;e++)s[e*3]=c.r,s[e*3+1]=c.g,s[e*3+2]=c.b;return i.setAttribute(`color`,new hn(s,3)),i}var I=(e,t,n,r,i,a,o,s)=>rc(new qn(e,t,n),r,[i,-.5+a+t/2,o],s),ic=(e,t,n,r,i,a)=>rc(new os(e,t,n,a||8),r,[0,-.5+i+n/2,0]);function L(e){let t=0;e.forEach(e=>t+=e.attributes.position.count);let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*3),a=0;e.forEach(e=>{n.set(e.attributes.position.array,a),r.set(e.attributes.normal.array,a),i.set(e.attributes.color.array,a),a+=e.attributes.position.count*3,e.dispose()});let o=new En;return o.setAttribute(`position`,new hn(n,3)),o.setAttribute(`normal`,new hn(r,3)),o.setAttribute(`color`,new hn(i,3)),o.computeBoundingBox(),o.computeBoundingSphere(),o}var ac=e=>L([I(1,1,1,e,0,0,0)]),oc=3971653,sc=5748826,cc=16184042,lc=9425908,uc=13129021,dc=11880495,R=2826560,fc=11565637,z=9067059,pc=[15022139,16765514,5223258,3827414,10186710],mc=(e,t,n,r)=>[I(r||.06,n,r||.06,oc,e,0,t),I(.16,.04,.09,sc,e+.09,n*.4,t)],hc=[[-.22,-.16,.34],[.2,-.04,.46],[-.03,.22,.28]],gc=e=>(e.translate(0,.5,0),e.scale(1.25,1.35,1.25),e.translate(0,-.5,0),e.computeBoundingBox(),e.computeBoundingSphere(),e),_c=e=>gc(L(hc.flatMap(t=>e(t[0],t[1],t[2])))),vc=(e,t,n,r,i,a)=>[I(a,.05,a,r,e+i,n,t),I(a,.05,a,r,e-i,n,t),I(a,.05,a,r,e,n,t+i),I(a,.05,a,r,e,n,t-i)],B=16777215,yc=9067059,bc=11102266;function xc(e,t,n,r,i,a){let o=-.5,s=e-.5,c=[];return n>o&&c.push(I(n-o,t,1,cc,(n+o)/2,0,0)),r<s&&c.push(I(s-r,t,1,cc,(r+s)/2,0,0)),i>0&&c.push(I(r-n,i,1,cc,(n+r)/2,0,0)),a<t&&c.push(I(r-n,t-a,1,cc,(n+r)/2,a,0)),c}function Sc(e,t,n,r){let i=[I(.05,r-n,1.04,B,e+.025,n,0),I(.05,r-n,1.04,B,t-.025,n,0),I(t-e,.05,1.04,B,(e+t)/2,r-.05,0)];return n>0&&i.push(I(t-e,.05,1.04,B,(e+t)/2,n,0)),i}function Cc(e,t,n,r,i){let a=[];for(let[o,s]of[[.1,.3],[.2,.15]])a.push(I(o,s,1,cc,e+o/2,r-s,0),I(o,s,1,cc,t-o/2,r-s,0)),i&&a.push(I(o,s,1,cc,e+o/2,n,0),I(o,s,1,cc,t-o/2,n,0));return a}var wc=(e,t,n,r)=>L([I(t-e,r-n,.04,lc,(e+t)/2,n,0)]),Tc=(e,t,n)=>I(.05,n-t,.07,B,e,t,0),Ec=(e,t,n)=>I(t-e,.05,.07,B,(e+t)/2,n-.025,0),Dc=(e,t,n,r=yc,i=bc)=>L([I(t,1.96,.08,r,e,0,0),I(t-.24,.66,.1,i,e,1.1,0),I(t-.24,.66,.1,i,e,.22,0),I(.06,.06,.14,16765514,e+n*(t/2-.11),.98,0)]),Oc=e=>L([I(.89,1.97,.08,11876399,e,0,0),I(.89,.1,.1,B,e,0,0),I(.89,.1,.1,B,e,1.87,0),I(.89,.1,.1,B,e,.94,0),I(.1,1.97,.1,B,e-.395,0,0),I(.1,1.97,.1,B,e+.395,0,0)]);function kc(e,t,n,r){let i=[];for(let e of n)for(let n=1;n<e.length-1;n++){let a=t[e[0]],o=t[e[n]],s=t[e[n+1]],c=o[0]-a[0],l=o[1]-a[1],u=o[2]-a[2],d=s[0]-a[0],f=s[1]-a[1],p=s[2]-a[2],m=l*p-u*f,h=u*d-c*p,g=c*f-l*d,_=(a[0]+o[0]+s[0])/3-r[0],v=(a[1]+o[1]+s[1])/3-r[1],y=(a[2]+o[2]+s[2])/3-r[2];if(m*_+h*v+g*y<0){let e=o;o=s,s=e}i.push(a[0],a[1]-.5,a[2],o[0],o[1]-.5,o[2],s[0],s[1]-.5,s[2])}let a=new En;a.setAttribute(`position`,new vn(i,3)),a.computeVertexNormals();let o=new P(e),s=new Float32Array(i.length);for(let e=0;e<s.length;e+=3)s[e]=o.r,s[e+1]=o.g,s[e+2]=o.b;return a.setAttribute(`color`,new hn(s,3)),a}var Ac=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5]],jc=(e=uc)=>kc(e,[...Ac,[-.5,1,-.5],[.5,1,-.5]],[[0,1,2,3],[0,1,5,4],[3,2,5,4],[0,3,4],[1,2,5]],[0,.2,-.2]),Mc=(e=uc)=>kc(e,[...Ac,[-.5,.5,0],[.5,.5,0]],[[0,1,2,3],[3,2,5,4],[0,1,5,4],[0,3,4],[1,2,5]],[0,.1,0]),Nc=[[``,uc],[`Wood`,10119999],[`Slate`,7041664]],V={grass:{name:`عشب`,cat:`cube`,color:6469711,geo:()=>L([I(1,.78,1,10119999,0,0,0),I(1,.22,1,6469711,0,.78,0)])},stone:{name:`حجر`,cat:`cube`,color:11119030,geo:()=>ac(11119030)},wood:{name:`خشب`,cat:`cube`,color:11565637,geo:()=>ac(11565637)},white:{name:`أبيض`,cat:`cube`,color:16184042,geo:()=>ac(16184042)},pink:{name:`وردي`,cat:`cube`,color:15765430,geo:()=>ac(15765430)},purple:{name:`بنفسجي`,cat:`cube`,color:10186710,geo:()=>ac(10186710)},yellow:{name:`أصفر`,cat:`cube`,color:16765514,geo:()=>ac(16765514)},brick:{name:`طوب`,cat:`cube`,color:12082244,geo:()=>L([I(1,1,1,12082244,0,0,0),I(1.004,.03,1.004,14268579,0,.31,0),I(1.004,.03,1.004,14268579,0,.65,0)])},barn:{name:`خشب أحمر`,cat:`cube`,color:11876399,geo:()=>L([I(1,1,1,11876399,0,0,0),I(.02,1,1.004,9382435,.25,0,0),I(.02,1,1.004,9382435,-.25,0,0),I(1.004,1,.02,9382435,0,0,.25),I(1.004,1,.02,9382435,0,0,-.25)])},water:{name:`ماء`,cat:`cube`,color:5224430,geo:()=>ac(5224430)},rose:{name:`وردة`,cat:`flower`,geo:()=>_c((e,t,n)=>mc(e,t,n).concat([I(.2,.14,.2,14691651,e,n,t),I(.12,.09,.12,12066101,e,n+.14,t)]))},tulip:{name:`توليب`,cat:`flower`,geo:()=>_c((e,t,n)=>mc(e,t,n).concat([I(.16,.2,.16,16764718,e,n,t),I(.08,.06,.08,16751150,e,n+.2,t)]))},daisy:{name:`أقحوان`,cat:`flower`,geo:()=>_c((e,t,n)=>mc(e,t,n).concat([I(.1,.08,.1,16762161,e,n,t)],vc(e,t,n,16777215,.11,.11)))},violet:{name:`بنفسج`,cat:`flower`,geo:()=>_c((e,t,n)=>mc(e,t,n*.7).concat([I(.08,.08,.08,16769126,e,n*.7,t)],vc(e,t,n*.7,8014040,.1,.12)))},carnation:{name:`قرنفل`,cat:`flower`,geo:()=>_c((e,t,n)=>mc(e,t,n).concat([I(.2,.1,.2,16744368,e,n,t),I(.26,.05,.26,16732051,e,n+.03,t),I(.1,.08,.1,16766694,e,n+.1,t)]))},sunflower:{name:`عبّاد الشمس`,cat:`flower`,geo:()=>L(mc(0,0,.8,.08).concat([I(.2,.05,.1,sc,-.12,.5,0),I(.24,.09,.24,7029795,0,.8,0)],[[.2,0],[-.2,0],[0,.2],[0,-.2]].map(e=>I(.18,.06,.18,16762910,e[0],.8,e[1])),[[.16,.16],[-.16,.16],[.16,-.16],[-.16,-.16]].map(e=>I(.13,.06,.13,16768341,e[0],.8,e[1]))))},bench:{name:`مقعد`,cat:`decor`,geo:()=>L([I(.92,.07,.36,13208139,0,.26,.02),I(.92,.3,.06,13208139,0,.36,-.17),I(.07,.26,.07,7227946,-.38,0,.14),I(.07,.26,.07,7227946,.38,0,.14),I(.07,.4,.07,7227946,-.38,0,-.17),I(.07,.4,.07,7227946,.38,0,-.17),I(.07,.05,.36,7227946,-.42,.42,.02),I(.07,.05,.36,7227946,.42,.42,.02)])},tree:{name:`شجرة`,cat:`decor`,geo:()=>L([I(.22,.9,.22,9067059,0,0,0),I(1.1,.5,1.1,4168523,0,.8,0),I(.8,.42,.8,5223258,0,1.3,0),I(.45,.3,.45,6735212,0,1.72,0)])},blossom:{name:`شجرة مزهرة`,cat:`decor`,geo:()=>L([I(.22,.9,.22,9067059,0,0,0),I(1.1,.5,1.1,16027576,0,.8,0),I(.8,.42,.8,16361929,0,1.3,0),I(.45,.3,.45,16565980,0,1.72,0)])},bush:{name:`شجيرة`,cat:`decor`,geo:()=>L([I(.84,.4,.84,4168523,0,0,0),I(.54,.24,.54,5617246,0,.4,0),I(.1,.1,.1,16744368,.3,.4,.3),I(.1,.1,.1,16744368,-.32,.4,-.2)])},fence:{name:`سياج`,cat:`decor`,geo:()=>L([I(1,.07,.05,16777215,0,.16,0),I(1,.07,.05,16777215,0,.4,0)].concat([-.4,-.2,0,.2,.4].map(e=>I(.1,.56,.07,16513007,e,0,0))))},tile:{name:`بلاطة`,cat:`decor`,flat:!0,geo:()=>L([I(.98,.06,.98,14272419,0,0,0),I(.8,.075,.8,15260088,0,0,0)])},fountain:{name:`نافورة`,cat:`decor`,stars:1,geo:()=>L([ic(.48,.5,.24,12171718,0),ic(.4,.4,.03,5619186,.24),ic(.07,.1,.5,13224404,.24),ic(.26,.12,.1,12171718,.7),ic(.21,.21,.03,5619186,.8),I(.08,.14,.08,10148858,0,.83,0)])},lantern:{name:`فانوس`,cat:`decor`,stars:2,glow:!0,geo:()=>L([I(.22,.06,.22,4867160,0,0,0),I(.08,.8,.08,4867160,0,.06,0),I(.24,.24,.24,16769930,0,.86,0),I(.3,.05,.3,4867160,0,1.1,0)])},bunny:{name:`أرنب`,cat:`animal`,stars:3,geo:()=>L([I(.3,.26,.4,16777215,0,.05,-.04),I(.1,.05,.14,15920352,-.1,0,.1),I(.1,.05,.14,15920352,.1,0,.1),I(.26,.24,.24,16777215,0,.28,.14),I(.07,.26,.05,16777215,-.07,.52,.12),I(.07,.26,.05,16777215,.07,.52,.12),I(.03,.18,.02,16230596,-.07,.55,.146),I(.03,.18,.02,16230596,.07,.55,.146),I(.1,.1,.1,16777215,0,.14,-.28),I(.04,.05,.02,2826560,-.07,.4,.26),I(.04,.05,.02,2826560,.07,.4,.26),I(.05,.04,.02,15755931,0,.33,.26)])},window:{name:`نافذة مربعة`,cat:`open`,solid:!0,opening:!0,keep:[B],geo:()=>L([...xc(1,1,-.38,.38,.1,.9),...Sc(-.38,.38,.1,.9),Tc(0,.1,.9),Ec(-.38,.38,.5)]),glass:()=>wc(-.38,.38,.1,.9)},winWide:{name:`نافذة عريضة`,cat:`open`,solid:!0,opening:!0,size:[2,1,1],keep:[B],geo:()=>L([...xc(2,1,-.38,1.38,.1,.9),...Sc(-.38,1.38,.1,.9),Tc(.5,.1,.9)]),glass:()=>wc(-.38,1.38,.1,.9)},winTall:{name:`نافذة طويلة`,cat:`open`,solid:!0,opening:!0,size:[1,2,1],keep:[B],geo:()=>L([...xc(1,2,-.38,.38,.5,1.95),...Sc(-.38,.38,.5,1.95),Ec(-.38,.38,1.22)]),glass:()=>wc(-.38,.38,.5,1.95)},winArch:{name:`نافذة مقوّسة`,cat:`open`,solid:!0,opening:!0,size:[1,2,1],keep:[B],geo:()=>L([...xc(1,2,-.38,.38,.5,1.98),...Cc(-.38,.38,.5,1.98),Tc(0,.5,1.98),Ec(-.38,.38,1.5)]),glass:()=>wc(-.38,.38,.5,1.98)},winRound:{name:`نافذة دائرية`,cat:`open`,solid:!0,opening:!0,keep:[B],geo:()=>L([...xc(1,1,-.34,.34,.16,.84),...Cc(-.34,.34,.16,.84,!0),Tc(0,.16,.84),Ec(-.34,.34,.5)]),glass:()=>wc(-.34,.34,.16,.84)},winShutter:{name:`نافذة بمصاريع`,cat:`open`,solid:!0,opening:!0,keep:[B,4168523,3112250],geo:()=>L([...xc(1,1,-.26,.26,.1,.9),...Sc(-.26,.26,.1,.9),Ec(-.26,.26,.5),I(.2,.82,.05,4168523,.37,.09,.52),I(.2,.82,.05,4168523,-.37,.09,.52),...[.25,.48,.71].flatMap(e=>[I(.15,.03,.06,3112250,.37,e,.525),I(.15,.03,.06,3112250,-.37,e,.525)])]),glass:()=>wc(-.2,.2,.2,.8)},winBig:{name:`نافذة كبيرة`,cat:`open`,solid:!0,opening:!0,size:[2,2,1],keep:[B],geo:()=>L([...xc(2,2,-.38,1.38,.7,1.95),...Sc(-.38,1.38,.7,1.95),Tc(.5,.7,1.95),Ec(-.38,1.38,1.3)]),glass:()=>wc(-.38,1.38,.7,1.95)},door:{name:`باب خشبي`,cat:`open`,solid:!0,opening:!0,door:!0,size:[1,2,1],keep:[B],geo:()=>L([...xc(1,2,-.38,.38,0,1.98),...Sc(-.38,.38,0,1.98)]),leaves:[{geo:()=>Dc(0,.74,1),hinge:[-.37,0],dir:1}]},doorGlass:{name:`باب زجاجي`,cat:`open`,solid:!0,opening:!0,door:!0,size:[1,2,1],keep:[B],geo:()=>L([...xc(1,2,-.38,.38,0,1.98),...Sc(-.38,.38,0,1.98)]),leaves:[{geo:()=>L([I(.1,1.96,.08,B,.32,0,0),I(.1,1.96,.08,B,-.32,0,0),I(.54,.14,.08,B,0,0,0),I(.54,.14,.08,B,0,1.82,0),I(.54,.06,.08,B,0,.95,0),I(.04,.2,.14,9211033,.3,.9,0)]),hinge:[-.37,0],dir:1},{geo:()=>L([I(.54,1.68,.03,lc,0,.14,0)]),glass:!0,hinge:[-.37,0],dir:1}]},doorDouble:{name:`باب مزدوج`,cat:`open`,solid:!0,opening:!0,door:!0,size:[2,2,1],keep:[B],geo:()=>L([...xc(2,2,-.3,1.3,0,1.98),...Sc(-.3,1.3,0,1.98)]),leaves:[{geo:()=>Dc(.1,.78,1),hinge:[-.29,0],dir:1},{geo:()=>Dc(.9,.78,-1),hinge:[1.29,0],dir:-1}]},doorArch:{name:`باب مقوّس`,cat:`open`,solid:!0,opening:!0,door:!0,size:[1,2,1],keep:[B],geo:()=>L([...xc(1,2,-.38,.38,0,2),...Cc(-.38,.38,0,2)]),leaves:[{geo:()=>Dc(0,.74,1,3116931,4172187),hinge:[-.37,0],dir:1}]},barnDoor:{name:`باب حظيرة`,cat:`open`,solid:!0,opening:!0,door:!0,size:[2,2,1],keep:[B],geo:()=>L(xc(2,2,-.4,1.4,0,2)),leaves:[{geo:()=>Oc(.05),hinge:[-.4,0],dir:1},{geo:()=>Oc(.95),hinge:[1.4,0],dir:-1}]},garageDoor:{name:`باب موقف`,cat:`open`,solid:!0,opening:!0,door:!0,size:[2,2,1],keep:[B],geo:()=>L(xc(2,2,-.4,1.4,0,1.98)),leaves:[{geo:()=>L([I(1.78,1.96,.08,14672872,.5,0,0),...[.49,.98,1.47].map(e=>I(1.78,.03,.1,11186877,.5,e,0))]),top:1.98}]},gate:{name:`باب حديقة`,cat:`open`,door:!0,geo:()=>L([I(.1,.7,.1,16513007,.45,0,0),I(.1,.7,.1,16513007,-.45,0,0)]),leaves:[{geo:()=>L([...[-.3,-.15,0,.15,.3].map(e=>I(.1,.5,.06,16513007,e,.04,0)),I(.8,.06,.05,16777215,0,.14,0),I(.8,.06,.05,16777215,0,.38,0)]),hinge:[-.4,0],dir:1}]},plank:{name:`أرضية خشب`,cat:`house`,flat:!0,geo:()=>L([I(1,.05,1,13208139,0,0,0),I(1,.055,.02,9067059,0,0,-.25),I(1,.055,.02,9067059,0,0,.25)])},railing:{name:`درابزين`,cat:`house`,geo:()=>L([I(1,.06,.06,B,0,.6,0),I(1,.05,.06,B,0,.04,0),...[-.4,-.2,0,.2,.4].map(e=>I(.05,.6,.05,16052716,e,0,0))])},column:{name:`عمود`,cat:`house`,solid:!0,geo:()=>L([I(.6,.12,.6,15262940,0,0,0),ic(.2,.2,.76,16052716,.12,10),I(.6,.12,.6,15262940,0,.88,0)])},awning:{name:`مظلة مدخل`,cat:`house`,thin:!0,keep:[B],geo:()=>L([I(.06,1.9,.06,B,.44,0,.44),I(.06,1.9,.06,B,-.44,0,.44),I(1,.08,1.1,15022139,0,2,0,[.25,0,0]),I(.2,.085,1.1,B,.3,2,0,[.25,0,0]),I(.2,.085,1.1,B,-.3,2,0,[.25,0,0])])},stoop:{name:`درجات المدخل`,cat:`house`,flat:!0,geo:()=>L([I(1,.14,1,12171718,0,0,0),I(1,.28,.5,13224404,0,0,-.25)])},mailbox:{name:`صندوق بريد`,cat:`house`,keep:[z,16765514],geo:()=>L([I(.08,.7,.08,z,0,0,0),I(.3,.22,.44,15022139,0,.7,0),I(.04,.16,.04,16765514,.17,.78,.1)])},wallLamp:{name:`مصباح حائط`,cat:`light`,thin:!0,glow:!0,keep:[4867160],geo:()=>L([I(.06,.06,.3,4867160,0,1.3,-.34),I(.18,.22,.18,16769930,0,1.14,-.2),I(.22,.04,.22,4867160,0,1.36,-.2)])},flowerBox:{name:`أصيص نافذة`,cat:`house`,thin:!0,keep:[sc,14691651,16764718,16744368],geo:()=>L([I(.8,.18,.2,z,0,.8,-.38),I(.7,.06,.16,sc,0,.95,-.38),I(.1,.12,.1,14691651,-.25,.98,-.38),I(.1,.12,.1,16764718,0,.98,-.38),I(.1,.12,.1,16744368,.25,.98,-.38)])},floorTile:{name:`بلاط`,cat:`house`,flat:!0,geo:()=>L([I(1,.05,1,15331058,0,0,0),I(.5,.055,.5,12174028,-.25,0,-.25),I(.5,.055,.5,12174028,.25,0,.25)])},floorMarble:{name:`رخام`,cat:`house`,flat:!0,geo:()=>L([I(1,.05,1,16052716,0,0,0),I(.6,.055,.03,13617341,0,0,-.2,[0,.5,0]),I(.4,.055,.03,13617341,.15,0,.25,[0,-.4,0])])},carpet:{name:`سجاد`,cat:`house`,flat:!0,geo:()=>L([I(1,.06,1,13187694,0,0,0),I(.9,.065,.9,14829439,0,0,0)])},floorSlab:{name:`أرضية طابق`,cat:`house`,solid:!0,geo:()=>L([I(1,.9,1,15261648,0,0,0),I(1,.1,1,13208139,0,.9,0)])},stairs:{name:`درج`,cat:`house`,solid:!0,size:[1,3,3],cells:[[0,0,0],[0,0,1],[0,1,1],[0,0,2],[0,1,2],[0,2,2]],clears:[[0,2,-1],[0,2,0],[0,2,1],[0,2,2]],geo:()=>L([...Array(12).keys()].flatMap(e=>[I(1,(e+1)*.25-.05,.25,11565637,0,0,-.375+e*.25),I(1,.05,.25,13208139,0,(e+1)*.25-.05,-.375+e*.25)]))},roof:{name:`سقف مائل`,cat:`house`,solid:!0,roof:!0,geo:()=>L([jc()])},roofCorner:{name:`زاوية سقف`,cat:`house`,solid:!0,roof:!0,geo:()=>L([kc(uc,[...Ac,[-.5,1,-.5]],[[0,1,2,3],[0,3,4],[0,1,4],[4,3,2],[4,2,1]],[-.2,.15,-.2])])},roofValley:{name:`زاوية داخلية`,cat:`house`,solid:!0,roof:!0,geo:()=>L([kc(uc,[...Ac,[-.5,1,-.5],[.5,1,-.5],[-.5,1,.5]],[[0,1,2,3],[0,3,6,4],[0,1,5,4],[1,2,5],[3,2,6],[2,5,4],[2,4,6]],[-.2,.2,-.2])])},roofTop:{name:`قمة سقف`,cat:`house`,solid:!0,roof:!0,geo:()=>L([Mc()])},roofEnd:{name:`نهاية قمة`,cat:`house`,solid:!0,roof:!0,geo:()=>L([kc(uc,[...Ac,[-.5,.5,0],[0,.5,0]],[[0,1,2,3],[1,2,5],[3,2,5,4],[0,1,5,4],[0,3,4]],[-.1,.1,0])])},roofPeak:{name:`قمة برج`,cat:`house`,solid:!0,roof:!0,geo:()=>L([kc(uc,[...Ac,[0,.5,0]],[[0,1,2,3],[0,1,4],[1,2,4],[2,3,4],[3,0,4]],[0,.1,0])])},roofFlat:{name:`سقف مكعب`,cat:`house`,solid:!0,roof:!0,geo:()=>ac(uc)},roofSlab:{name:`سقف مسطّح`,cat:`house`,solid:!0,roof:!0,geo:()=>L([I(1,.25,1,uc,0,0,0)])},roofEdge:{name:`حافة سقف`,cat:`house`,solid:!0,roof:!0,geo:()=>L([I(1,.6,1,uc,0,0,0),I(1.04,.08,1.04,dc,0,.6,0)])},skylight:{name:`نافذة سقف`,cat:`house`,solid:!0,roof:!0,keep:[B],geo:()=>L([jc(),I(.6,.05,.7,B,0,.49,0,[Math.PI/4,0,0])]),glass:()=>L([I(.48,.05,.58,lc,0,.52,0,[Math.PI/4,0,0])])},gableFill:{name:`جدار السقف`,cat:`house`,solid:!0,roof:!0,hidden:!0,geo:()=>ac(cc)},chimney:{name:`مدخنة`,cat:`house`,roof:!0,keep:[R],geo:()=>L([I(.4,1.6,.4,11031098,0,-.9,0),I(.5,.1,.5,9191211,0,.7,0),I(.3,.04,.3,R,0,.8,0)])},bed:{name:`سرير`,cat:`furniture`,size:[1,1,2],keep:[z,16777215],geo:()=>L([I(.94,.28,1.96,z,0,0,.5),I(.94,.95,.08,z,0,0,-.45),I(.94,.45,.06,z,0,0,1.46),I(.86,.16,1.8,16777215,0,.28,.52),I(.88,.18,1.1,15765430,0,.29,.9),I(.6,.1,.3,16777215,0,.44,-.18)])},bedDouble:{name:`سرير مزدوج`,cat:`furniture`,size:[2,1,2],keep:[z,16777215],geo:()=>L([I(1.94,.28,1.96,z,.5,0,.5),I(1.94,1,.08,z,.5,0,-.45),I(1.94,.45,.06,z,.5,0,1.46),I(1.84,.16,1.8,16777215,.5,.28,.52),I(1.86,.18,1.1,10186710,.5,.29,.9),I(.6,.1,.3,16777215,.02,.44,-.18),I(.6,.1,.3,16777215,.98,.44,-.18)])},table:{name:`طاولة`,cat:`furniture`,geo:()=>L([I(.92,.08,.92,13208139,0,.48,0)].concat([[.38,.38],[-.38,.38],[.38,-.38],[-.38,-.38]].map(e=>I(.08,.48,.08,z,e[0],0,e[1]))))},chair:{name:`كرسي`,cat:`furniture`,geo:()=>L([I(.46,.06,.46,13208139,0,.28,.02),I(.46,.42,.06,13208139,0,.34,-.2)].concat([[.19,.21],[-.19,.21],[.19,-.17],[-.19,-.17]].map(e=>I(.06,.28,.06,z,e[0],0,e[1]))))},sofa:{name:`كنبة`,cat:`furniture`,size:[2,1,1],keep:[R],geo:()=>L([I(1.9,.3,.62,5224430,.5,.12,.06),I(1.9,.76,.2,5224430,.5,.12,-.33),I(.16,.52,.62,3840726,1.37,.12,.06),I(.16,.52,.62,3840726,-.37,.12,.06),I(.74,.07,.5,3840726,.1,.42,.1),I(.74,.07,.5,3840726,.9,.42,.1)].concat([[1.38,.28],[-.38,.28],[1.38,-.36],[-.38,-.36]].map(e=>I(.08,.12,.08,R,e[0],0,e[1]))))},armchair:{name:`كنبة مفردة`,cat:`furniture`,keep:[R],geo:()=>L([I(.94,.3,.6,5224430,0,.12,.06),I(.94,.76,.2,5224430,0,.12,-.33),I(.15,.52,.6,3840726,.395,.12,.06),I(.15,.52,.6,3840726,-.395,.12,.06)].concat([[.38,.28],[-.38,.28],[.38,-.36],[-.38,-.36]].map(e=>I(.08,.12,.08,R,e[0],0,e[1]))))},wardrobe:{name:`خزانة`,cat:`furniture`,keep:[16765514],geo:()=>L([I(.9,1.3,.46,fc,0,0,-.22),I(.4,1.12,.03,13208139,.21,.1,.02),I(.4,1.12,.03,13208139,-.21,.1,.02),I(.05,.08,.04,16765514,.06,.6,.05),I(.05,.08,.04,16765514,-.06,.6,.05)])},bookshelf:{name:`مكتبة`,cat:`furniture`,keep:pc,geo:()=>L([I(.06,1.2,.36,z,.42,0,-.28),I(.06,1.2,.36,z,-.42,0,-.28),I(.9,1.2,.04,z,0,0,-.44)].concat([0,.38,.76,1.15].map(e=>I(.9,.05,.36,z,0,e,-.28)),...[.05,.43,.81].map((e,t)=>[-.3,-.15,0,.15,.3].map((n,r)=>I(.12,.22+(r+t)%3*.03,.24,pc[(r+t*2)%5],n,e,-.28)))))},lamp:{name:`مصباح أرضي`,cat:`light`,glow:!0,keep:[4867160],geo:()=>L([I(.24,.05,.24,4867160,0,0,0),I(.05,.9,.05,4867160,0,.05,0),I(.34,.26,.34,16769930,0,.9,0)])},rug:{name:`سجادة`,cat:`furniture`,flat:!0,geo:()=>L([I(.98,.04,.98,14829439,0,0,0),I(.74,.05,.74,16766694,0,0,0)])},curtain:{name:`ستارة`,cat:`furniture`,thin:!0,keep:[4867160],geo:()=>L([I(1,.05,.05,4867160,0,.92,-.43),I(.3,.9,.07,14829439,.34,.03,-.43),I(.3,.9,.07,14829439,-.34,.03,-.43),I(.96,.14,.08,13187694,0,.8,-.43)])},tv:{name:`تلفاز`,cat:`furniture`,keep:[R,5224430],geo:()=>L([I(.84,.3,.36,fc,0,0,-.1),I(.8,.46,.05,R,0,.32,-.1),I(.7,.36,.02,5224430,0,.37,-.07)])},plant:{name:`نبتة`,cat:`furniture`,keep:[oc,sc],geo:()=>L([I(.3,.24,.3,13129021,0,0,0),I(.06,.3,.06,oc,0,.24,0),I(.4,.16,.4,sc,0,.44,0),I(.26,.14,.26,oc,0,.6,0)])},stove:{name:`فرن`,cat:`furniture`,keep:[R,4867160,15022139],geo:()=>L([I(.92,.72,.84,cc,0,0,-.04),I(.92,.03,.84,4867160,0,.72,-.04),I(.6,.3,.02,R,0,.2,.385)].concat([[.2,.14],[-.2,.14],[.2,-.22],[-.2,-.22]].map(e=>I(.2,.02,.2,R,e[0],.75,e[1])),[-.3,-.1,.1,.3].map(e=>I(.06,.06,.03,15022139,e,.6,.39))))},fridge:{name:`ثلاجة`,cat:`furniture`,keep:[9211033],geo:()=>L([I(.82,1.4,.74,15331058,0,0,-.08),I(.82,.02,.02,9211033,0,.9,.295),I(.04,.3,.04,9211033,.3,.5,.31),I(.04,.2,.04,9211033,.3,1,.31)])},sink:{name:`مغسلة`,cat:`furniture`,keep:[5619186,9211033,12171718],geo:()=>L([I(.92,.7,.84,cc,0,0,-.04),I(.92,.05,.84,12171718,0,.7,-.04),I(.5,.02,.4,5619186,0,.75,0),I(.05,.2,.05,9211033,0,.75,-.32),I(.05,.05,.18,9211033,0,.92,-.25),I(.02,.5,.02,9211033,0,.1,.385)])},counter:{name:`خزانة مطبخ`,cat:`furniture`,keep:[13208139,9211033],geo:()=>L([I(.92,.7,.84,cc,0,0,-.04),I(.96,.06,.88,13208139,0,.7,-.04),I(.2,.04,.03,9211033,.22,.5,.39),I(.2,.04,.03,9211033,-.22,.5,.39)])},desk:{name:`مكتب`,cat:`furniture`,keep:[3827414],geo:()=>L([I(.94,.07,.6,13208139,0,.52,-.12),I(.3,.52,.56,fc,.3,0,-.12),I(.07,.52,.07,z,-.4,0,.1),I(.07,.52,.07,z,-.4,0,-.34),I(.22,.04,.16,3827414,-.2,.59,-.1),I(.04,.06,.03,16765514,.3,.3,.17)])},kidBed:{name:`سرير طفل`,cat:`furniture`,size:[1,1,2],keep:[B,5224430],geo:()=>L([I(.9,.24,1.9,5224430,0,0,.5),I(.9,.8,.08,5224430,0,0,-.43),I(.9,.5,.06,5224430,0,0,1.43),I(.8,.14,1.74,B,0,.24,.5),I(.82,.16,1,16765514,0,.25,.86),I(.5,.09,.26,B,0,.38,-.18)])},toyBox:{name:`صندوق ألعاب`,cat:`furniture`,keep:[16765514,5223258,3827414],geo:()=>L([I(.7,.4,.5,15022139,0,0,0),I(.74,.06,.54,16765514,0,.4,0),I(.16,.16,.16,5223258,-.15,.46,0),I(.14,.14,.14,3827414,.15,.46,.05)])},fireplace:{name:`مدفأة`,cat:`furniture`,keep:[R,16747566,16765514,13208139],geo:()=>L([I(.94,1,.4,12082244,0,0,-.28),I(.5,.5,.06,R,0,0,-.07),I(.3,.25,.06,16747566,0,.02,-.05),I(.16,.16,.07,16765514,0,.04,-.04),I(1,.08,.5,13208139,0,1,-.25),I(.6,.8,.3,12082244,0,1.08,-.33)])},clock:{name:`ساعة حائط`,cat:`furniture`,thin:!0,keep:[B,R],geo:()=>L([I(.46,.46,.03,6963110,0,.87,-.47),I(.4,.4,.05,B,0,.9,-.46),I(.03,.16,.02,R,0,1.1,-.42),I(.12,.03,.02,R,.05,1.085,-.42)])},painting:{name:`لوحة`,cat:`furniture`,thin:!0,keep:[9425908,16765514,5223258],geo:()=>L([I(.7,.5,.05,13208139,0,.8,-.46),I(.6,.4,.03,9425908,0,.85,-.43),I(.12,.12,.02,16765514,.15,1.07,-.41),I(.6,.14,.02,5223258,0,.85,-.41)])},shelf:{name:`رفّ`,cat:`furniture`,thin:!0,keep:pc,geo:()=>L([I(.9,.05,.24,z,0,.95,-.36),I(.05,.16,.2,z,.35,.79,-.38),I(.05,.16,.2,z,-.35,.79,-.38),...[-.3,-.2,-.1].map((e,t)=>I(.08,.2+t*.02,.16,pc[t],e,1,-.36)),I(.14,.12,.14,13129021,.25,1,-.36)])},bathtub:{name:`حوض استحمام`,cat:`bath`,size:[1,1,2],keep:[8177902,9211033],geo:()=>L([I(.9,.5,1.8,B,0,.05,.5),I(.74,.03,1.64,8177902,0,.55,.5),I(.1,.05,.1,9211033,.35,0,-.3),I(.1,.05,.1,9211033,-.35,0,-.3),I(.1,.05,.1,9211033,.35,0,1.3),I(.1,.05,.1,9211033,-.35,0,1.3),I(.06,.22,.06,9211033,0,.55,-.32),I(.06,.06,.2,9211033,0,.74,-.25)])},toilet:{name:`مرحاض`,cat:`bath`,keep:[9211033],geo:()=>L([I(.4,.3,.5,B,0,0,.05),I(.46,.06,.52,16052716,0,.3,.08),I(.5,.5,.2,B,0,.25,-.3),I(.1,.03,.08,9211033,0,.75,-.3)])},basin:{name:`مغسلة`,cat:`bath`,keep:[8177902,9211033],geo:()=>L([I(.2,.6,.2,B,0,0,-.15),I(.6,.16,.5,B,0,.6,-.1),I(.44,.02,.34,8177902,0,.76,-.08),I(.05,.16,.05,9211033,0,.76,-.3),I(.05,.05,.14,9211033,0,.9,-.25)])},shower:{name:`دش`,cat:`bath`,keep:[9211033],geo:()=>L([I(.94,.08,.94,B,0,0,0),I(.05,1.7,.05,9211033,-.4,.08,-.4),I(.25,.04,.25,9211033,-.28,1.7,-.28)]),glass:()=>L([I(.04,1.6,.9,lc,.45,.08,0),I(.9,1.6,.04,lc,0,.08,.45)])},mirror:{name:`مرآة`,cat:`bath`,thin:!0,keep:[13626103],geo:()=>L([I(.6,.8,.05,13208139,0,.6,-.46),I(.5,.7,.03,13626103,0,.65,-.43)])},tableLamp:{name:`أباجورة`,cat:`light`,glow:!0,keep:[4867160,fc],geo:()=>L([I(.4,.4,.4,fc,0,0,0),I(.12,.04,.12,4867160,0,.4,0),I(.04,.2,.04,4867160,0,.44,0),I(.26,.2,.26,16769930,0,.62,0)])},tripodLamp:{name:`مصباح ثلاثي`,cat:`light`,glow:!0,keep:[z],geo:()=>L([I(.04,1,.04,z,.15,0,.1),I(.04,1,.04,z,-.15,0,.1),I(.04,1,.04,z,0,0,-.15),I(.36,.3,.36,16769930,0,1,0)])},wallBar:{name:`إنارة جدارية`,cat:`light`,thin:!0,glow:!0,keep:[4867160],geo:()=>L([I(.56,.12,.03,4867160,0,1.48,-.48),I(.5,.08,.08,16769930,0,1.5,-.44)])},sconce:{name:`شمعة جدارية`,cat:`light`,thin:!0,glow:!0,keep:[4867160,16761390],geo:()=>L([I(.14,.3,.03,4867160,0,1.1,-.48),I(.04,.04,.2,4867160,0,1.14,-.38),I(.07,.18,.07,16184042,0,1.18,-.3),I(.05,.08,.05,16761390,0,1.36,-.3)])},ceilingLamp:{name:`مصباح سقفي`,cat:`light`,thin:!0,glow:!0,hang:!0,keep:[4867160],geo:()=>L([I(.2,.04,.2,4867160,0,.96,0),I(.03,.4,.03,4867160,0,.58,0),I(.34,.2,.34,16769930,0,.4,0)])},chandelier:{name:`ثريا`,cat:`light`,thin:!0,glow:!0,hang:!0,keep:[13214247],geo:()=>L([I(.04,.42,.04,13214247,0,.58,0),I(.7,.05,.7,13214247,0,.55,0),I(.16,.16,.16,16769930,0,.4,0),...[[.3,.3],[-.3,.3],[.3,-.3],[-.3,-.3]].map(e=>I(.1,.14,.1,16769930,e[0],.6,e[1]))])},ceilingSpot:{name:`سبوت سقفي`,cat:`light`,thin:!0,glow:!0,hang:!0,keep:[16184042],geo:()=>L([I(.3,.06,.3,16184042,0,.94,0),I(.2,.04,.2,16769930,0,.9,0)])},car:{name:`سيارة`,cat:`street`,size:[1,1,2],keep:[R,lc,16769930,12066101,9211033],geo:()=>L([I(.8,.3,1.7,15022139,0,.14,.5),I(.72,.28,.8,lc,0,.44,.4),I(.74,.05,.84,15022139,0,.72,.4),I(.14,.3,.3,R,.37,0,0),I(.14,.3,.3,R,-.37,0,0),I(.14,.3,.3,R,.37,0,1),I(.14,.3,.3,R,-.37,0,1),I(.16,.08,.03,16769930,.26,.28,1.36),I(.16,.08,.03,16769930,-.26,.28,1.36),I(.16,.08,.03,12066101,.26,.28,-.36),I(.16,.08,.03,12066101,-.26,.28,-.36),I(.5,.06,.04,9211033,0,.14,1.36),I(.5,.06,.04,9211033,0,.14,-.36)])},bike:{name:`دراجة`,cat:`street`,keep:[R,9211033],geo:()=>L([I(.06,.4,.4,R,0,0,.3),I(.06,.4,.4,R,0,0,-.3),I(.05,.06,.6,15022139,0,.36,0),I(.04,.2,.04,9211033,0,.4,-.15),I(.12,.04,.18,R,0,.6,-.15),I(.04,.3,.04,9211033,0,.4,.25),I(.36,.04,.04,R,0,.7,.25)])},road:{name:`طريق`,cat:`street`,flat:!0,keep:[B],geo:()=>L([I(1,.04,1,5593439,0,0,0),I(.08,.045,.5,B,0,0,0)])},parking:{name:`موقف`,cat:`street`,flat:!0,keep:[B],geo:()=>L([I(1,.04,1,7041664,0,0,0),I(.06,.045,1,B,.47,0,0),I(.06,.045,1,B,-.47,0,0)])},crossing:{name:`ممر مشاة`,cat:`street`,flat:!0,keep:[B],geo:()=>L([I(1,.04,1,5593439,0,0,0),...[-.36,-.12,.12,.36].map(e=>I(.16,.045,1,B,e,0,0))])},streetLamp:{name:`عمود إنارة`,cat:`street`,glow:!0,keep:[4867160],geo:()=>L([I(.24,.06,.24,4867160,0,0,0),I(.07,1.8,.07,4867160,0,.06,0),I(.07,.07,.4,4867160,0,1.8,.17),I(.2,.14,.2,16769930,0,1.66,.34)])},sign:{name:`إشارة`,cat:`street`,keep:[B,9211033],geo:()=>L([I(.06,1.1,.06,9211033,0,0,0),I(.44,.44,.05,15022139,0,1,0),I(.3,.08,.06,B,0,1.18,0)])},cone:{name:`مخروط`,cat:`street`,keep:[B],geo:()=>L([I(.4,.05,.4,16747566,0,0,0),ic(.04,.16,.5,16747566,.05,8),ic(.105,.13,.1,B,.2,8)])},hay:{name:`كومة قش`,cat:`animal`,solid:!0,geo:()=>L([I(.9,.6,.7,15123292,0,0,0),I(.92,.62,.06,12096058,0,0,.2),I(.92,.62,.06,12096058,0,0,-.2)])},trough:{name:`معلف`,cat:`animal`,keep:[15123292],geo:()=>L([I(.9,.3,.5,fc,0,.25,0),I(.8,.08,.4,15123292,0,.55,0),...[[.38,.18],[-.38,.18],[.38,-.18],[-.38,-.18]].map(e=>I(.08,.25,.08,z,e[0],0,e[1]))])},waterTrough:{name:`حوض ماء`,cat:`animal`,keep:[8177902],geo:()=>L([I(.9,.4,.5,9211033,0,0,0),I(.78,.03,.38,8177902,0,.4,0)])},coop:{name:`قنّ دجاج`,cat:`animal`,keep:[R,uc,z],geo:()=>L([I(.8,.5,.7,fc,0,.2,0),I(.9,.12,.8,uc,0,.7,0),I(.6,.12,.8,uc,0,.82,0),I(.2,.26,.03,R,0,.2,.36),I(.2,.04,.4,z,0,.08,.5,[-.5,0,0]),...[[.34,.28],[-.34,.28],[.34,-.28],[-.34,-.28]].map(e=>I(.06,.2,.06,z,e[0],0,e[1]))])},dogHouse:{name:`بيت كلب`,cat:`animal`,keep:[R,z],geo:()=>L([I(.7,.5,.8,11876399,0,0,0),I(.84,.12,.9,z,0,.5,0),I(.5,.12,.9,z,0,.62,0),I(.3,.34,.03,R,0,0,.4)])},wheelbarrow:{name:`عربة يد`,cat:`animal`,keep:[R,z],geo:()=>L([I(.5,.2,.6,5223258,0,.25,-.05),I(.08,.26,.26,R,0,0,.36),I(.05,.05,.5,z,.2,.3,-.5),I(.05,.05,.5,z,-.2,.3,-.5),I(.05,.25,.05,R,.2,0,-.25),I(.05,.25,.05,R,-.2,0,-.25)])},dog:{name:`كلب`,cat:`animal`,geo:()=>L([I(.22,.22,.5,11565637,0,.2,-.05),I(.07,.2,.07,11565637,.08,0,.14),I(.07,.2,.07,11565637,-.08,0,.14),I(.07,.2,.07,11565637,.08,0,-.24),I(.07,.2,.07,11565637,-.08,0,-.24),I(.24,.22,.22,11565637,0,.36,.26),I(.12,.1,.1,14262374,0,.36,.4),I(.05,.04,.02,R,0,.43,.455),I(.06,.14,.05,7227946,.13,.44,.24),I(.06,.14,.05,7227946,-.13,.44,.24),I(.04,.04,.02,R,.06,.5,.375),I(.04,.04,.02,R,-.06,.5,.375),I(.05,.2,.05,11565637,0,.36,-.32)])},pool:{name:`مسبح`,cat:`decor`,size:[2,1,2],keep:[5224430,9211033],geo:()=>L([I(1.9,.3,1.9,B,.5,0,.5),I(1.66,.04,1.66,5224430,.5,.28,.5),I(.04,.5,.04,9211033,-.3,.2,-.2),I(.04,.5,.04,9211033,-.3,.2,0),I(.04,.04,.2,9211033,-.3,.5,-.1),I(.04,.04,.2,9211033,-.3,.36,-.1)])},swing:{name:`أرجوحة`,cat:`decor`,keep:[R,16765514],geo:()=>L([I(.07,1.4,.07,15022139,.44,0,0),I(.07,1.4,.07,15022139,-.44,0,0),I(.95,.07,.07,15022139,0,1.4,0),I(.02,.9,.02,R,.15,.5,0),I(.02,.9,.02,R,-.15,.5,0),I(.4,.05,.2,16765514,0,.45,0)])},slide:{name:`زحليقة`,cat:`decor`,size:[1,1,2],keep:[16765514,16747566],geo:()=>L([I(.06,1.1,.06,3827414,.25,0,-.35),I(.06,1.1,.06,3827414,-.25,0,-.35),...[.3,.6,.9].map(e=>I(.5,.04,.04,3827414,0,e,-.35)),I(.56,.06,.4,3827414,0,1,-.2),I(.5,.06,1.7,16765514,0,.5,.72,[.58,0,0]),I(.05,.14,1.7,16747566,.25,.5,.72,[.58,0,0]),I(.05,.14,1.7,16747566,-.25,.5,.72,[.58,0,0])])},picnic:{name:`طاولة نزهة`,cat:`decor`,geo:()=>L([I(.9,.06,.5,13208139,0,.5,0),I(.9,.05,.18,13208139,0,.28,.42),I(.9,.05,.18,13208139,0,.28,-.42),...[[.38,.18],[-.38,.18],[.38,-.18],[-.38,-.18]].map(e=>I(.06,.5,.06,z,e[0],0,e[1])),...[[.38,.42],[-.38,.42],[.38,-.42],[-.38,-.42]].map(e=>I(.06,.28,.06,z,e[0],0,e[1]))])},well:{name:`بئر`,cat:`decor`,keep:[5224430,R,uc,z,fc],geo:()=>L([ic(.42,.44,.5,11119030,0,10),ic(.34,.34,.02,5224430,.49,10),I(.07,.9,.07,z,.38,.4,0),I(.07,.9,.07,z,-.38,.4,0),I(1,.1,.6,uc,0,1.3,0),I(.7,.1,.6,uc,0,1.4,0),I(.14,.14,.14,fc,0,.8,0),I(.02,.4,.02,R,0,.92,0)])},cow:{name:`بقرة`,cat:`animal`,geo:()=>L([I(.5,.38,.8,16777215,0,.28,-.05),I(.02,.18,.25,R,.255,.4,-.1),I(.02,.14,.2,R,-.255,.42,.05),I(.25,.02,.25,R,.05,.66,-.2),I(.12,.28,.12,16777215,.17,0,.25),I(.12,.28,.12,16777215,-.17,0,.25),I(.12,.28,.12,16777215,.17,0,-.33),I(.12,.28,.12,16777215,-.17,0,-.33),I(.34,.3,.28,16777215,0,.5,.4),I(.26,.14,.08,16234180,0,.5,.56),I(.05,.06,.02,R,.1,.68,.545),I(.05,.06,.02,R,-.1,.68,.545),I(.05,.1,.05,15260864,.14,.8,.38),I(.05,.1,.05,15260864,-.14,.8,.38),I(.08,.06,.05,R,.2,.72,.36),I(.08,.06,.05,R,-.2,.72,.36),I(.04,.25,.04,16777215,0,.4,-.47),I(.16,.06,.16,16234180,0,.22,-.2)])},sheep:{name:`خروف`,cat:`animal`,geo:()=>L([I(.5,.42,.66,16052198,0,.2,-.05),I(.4,.1,.5,16052198,0,.62,-.05),I(.09,.2,.09,4867160,.15,0,.18),I(.09,.2,.09,4867160,-.15,0,.18),I(.09,.2,.09,4867160,.15,0,-.28),I(.09,.2,.09,4867160,-.15,0,-.28),I(.24,.24,.2,4867160,0,.4,.36),I(.26,.08,.16,16052198,0,.64,.32),I(.04,.05,.02,16777214,.07,.52,.465),I(.04,.05,.02,16777214,-.07,.52,.465),I(.07,.05,.05,4867160,.155,.54,.36),I(.07,.05,.05,4867160,-.155,.54,.36)])},chicken:{name:`دجاجة`,cat:`animal`,geo:()=>L([I(.26,.24,.34,16777215,0,.12,-.02),I(.14,.2,.08,16777215,0,.26,-.2),I(.18,.18,.18,16777215,0,.34,.14),I(.05,.07,.12,15022139,0,.52,.14),I(.08,.05,.07,16751150,0,.4,.26),I(.05,.06,.03,15022139,0,.33,.245),I(.02,.04,.04,R,.095,.44,.18),I(.02,.04,.04,R,-.095,.44,.18),I(.04,.12,.04,16751150,.07,0,0),I(.04,.12,.04,16751150,-.07,0,0),I(.04,.14,.2,15656664,.14,.18,-.02),I(.04,.14,.2,15656664,-.14,.18,-.02)])},duck:{name:`بطة`,cat:`animal`,geo:()=>L([I(.26,.2,.38,16767306,0,.1,-.02),I(.12,.08,.08,16767306,0,.24,-.22),I(.18,.18,.18,16767306,0,.28,.16),I(.14,.04,.1,16751150,0,.32,.29),I(.02,.04,.04,R,.095,.38,.2),I(.02,.04,.04,R,-.095,.38,.2),I(.05,.1,.05,16751150,.07,0,0),I(.05,.1,.05,16751150,-.07,0,0),I(.04,.1,.22,15910192,.14,.14,-.02),I(.04,.1,.22,15910192,-.14,.14,-.02)])},horse:{name:`حصان`,cat:`animal`,geo:()=>L([I(.36,.36,.78,11102266,0,.42,-.08),I(.1,.42,.1,11102266,.12,0,.22),I(.1,.42,.1,11102266,-.12,0,.22),I(.1,.42,.1,11102266,.12,0,-.38),I(.1,.42,.1,11102266,-.12,0,-.38),I(.2,.4,.2,11102266,0,.62,.3),I(.2,.2,.36,11102266,0,.9,.42),I(.06,.42,.1,4008476,0,.7,.17),I(.08,.36,.08,4008476,0,.38,-.5),I(.02,.05,.05,R,.1,.99,.42),I(.02,.05,.05,R,-.1,.99,.42),I(.05,.08,.05,11102266,.07,1.1,.3),I(.05,.08,.05,11102266,-.07,1.1,.3)])},cat:{name:`قطة`,cat:`animal`,geo:()=>L([I(.2,.2,.42,16751932,0,.14,-.06),I(.21,.02,.06,14252574,0,.34,-.05),I(.21,.02,.06,14252574,0,.34,-.18),I(.06,.14,.06,16751932,.07,0,.1),I(.06,.14,.06,16751932,-.07,0,.1),I(.06,.14,.06,16751932,.07,0,-.22),I(.06,.14,.06,16751932,-.07,0,-.22),I(.24,.2,.2,16751932,0,.28,.2),I(.07,.08,.05,16751932,.08,.48,.2),I(.07,.08,.05,16751932,-.08,.48,.2),I(.04,.05,.02,4168523,.06,.38,.3),I(.04,.05,.02,4168523,-.06,.38,.3),I(.04,.03,.02,15755931,0,.34,.3),I(.06,.3,.06,16751932,0,.2,-.3)])}};for(let[e,t]of Nc)V[`gableSlope`+e]={name:`طرف سقف`,cat:`house`,solid:!0,roof:!0,hidden:!0,keep:[t],geo:()=>L([jc(cc),I(1,.1,1.42,t,0,.485,.035,[Math.PI/4,0,0])])},V[`gableTop`+e]={name:`طرف قمة`,cat:`house`,solid:!0,roof:!0,hidden:!0,keep:[t],geo:()=>L([Mc(cc),I(1,.1,.72,t,0,.235,.285,[Math.PI/4,0,0]),I(1,.1,.72,t,0,.235,-.285,[-Math.PI/4,0,0])])};function Pc(e){let t=[I(.1,.56,.1,16513007,0,0,0)],n=(e,n)=>{for(let r of[.16,.4])t.push(e?I(.5,.07,.05,16777215,e*.25,r,0):I(.05,.07,.5,16777215,0,r,n*.25));for(let r of[.2,.4])t.push(e?I(.1,.56,.07,16513007,e*r,0,0):I(.07,.56,.1,16513007,0,0,n*r))};return e&1&&n(1,0),e&2&&n(-1,0),e&4&&n(0,1),e&8&&n(0,-1),Ic(L(t),1,1.6,1)}for(let e of[`bunny`,`cow`,`sheep`,`chicken`,`duck`,`horse`,`cat`,`dog`])V[e].alive=!0;var Fc=[[`flower`,`زهور`],[`cube`,`مكعبات`],[`open`,`فتحات`],[`house`,`بيت`],[`furniture`,`أثاث`],[`bath`,`حمّام`],[`light`,`إنارة`],[`decor`,`حديقة`],[`animal`,`مزرعة`],[`street`,`شارع`]];for(let e in V)V[e].cat===`flower`&&(V[e].keep=[oc,sc,7029795]);V.tree.keep=V.blossom.keep=[9067059],V.fountain.keep=[5619186,10148858],V.lantern.keep=[4867160];for(let e in V)V[e].cat===`animal`&&(V[e].keep=[R,15755931,16230596,16234180,16751150,15022139,4008476,4867160,4168523,16777214,15260864]);function Ic(e,t,n,r,i=0){return e.translate(0,.5,0),e.scale(t,n,r),e.translate(0,-.5+i,0),e.computeBoundingBox(),e.computeBoundingSphere(),e}function Lc(e,t,n=t,r=t,i=0){let a=V[e],o=a.geo,s=a.glass;a.geo=()=>Ic(o(),t,n,r,i),s&&(a.glass=()=>Ic(s(),t,n,r,i)),a.leaves&&=a.leaves.map(e=>{let a=e.geo;return{...e,geo:()=>Ic(a(),t,n,r,i)}})}for(let[e,t]of[[`wardrobe`,1.54],[`bookshelf`,1.58],[`fridge`,1.29],[`lamp`,1.38],[`tripodLamp`,1.15],[`lantern`,1.15],[`streetLamp`,2.15],[`sign`,1.5],[`railing`,1.44],[`fence`,1.6],[`gate`,1.35],[`bench`,1.3],[`shower`,1.18],[`table`,1.34],[`desk`,1.27],[`tv`,1.3],[`stove`,1.2],[`sink`,1.2],[`counter`,1.2],[`basin`,1.12],[`picnic`,1.34],[`sunflower`,1.8],[`swing`,1.56],[`slide`,1.35],[`well`,1.2],[`mailbox`,1.2]])Lc(e,1,t,1);for(let[e,t]of[[`sheep`,1.15],[`chicken`,.8],[`bunny`,.58],[`bike`,1.6],[`plant`,1.2],[`chair`,1.3],[`toilet`,1.15],[`cat`,.62],[`bush`,1.4]])Lc(e,t);for(let[e,t]of[[`wallLamp`,.35],[`wallBar`,.25],[`sconce`,.3],[`clock`,.4],[`painting`,.35],[`shelf`,.3],[`mirror`,.25]])Lc(e,1,1,1,t);for(let e of[`tree`,`blossom`])Lc(e,2),V[e].size=[1,4,1];for(let[e,t]of[[`cow`,1.7],[`horse`,1.65]]){let n=V[e].geo;V[e].geo=()=>{let e=Ic(n(),t,t,t);return e.translate(0,0,.5),e.computeBoundingBox(),e.computeBoundingSphere(),e},V[e].size=[1,2,2]}{let e=V.car.geo;V.car.geo=()=>{let t=e();return t.translate(0,.5,-.5),t.scale(2.25,1.88,2.44),t.translate(.5,-.5,1.5),t.computeBoundingBox(),t.computeBoundingSphere(),t},V.car.size=[2,2,4]}for(let[e,t]of[[`white`,`wallWhite`],[`brick`,`wallBrick`],[`wood`,`wallWood`],[`stone`,`wallStone`],[`barn`,`wallBarn`]])V[t]={name:V[e].name,cat:`wall`,solid:!0,hidden:!0,color:V[e].color,geo:V[e].geo};function Rc(e){let t=e?[[-.5,1,-.5],[0,.5,-.5],[0,.5,0],[-.5,.5,0]]:[[-.5,1,-.5],[.5,1,-.5],[.5,.5,0],[-.5,.5,0]],n=e?[[0,1,2],[0,2,3],[4,5,6],[4,6,7],[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7]]:[[0,1,2,3],[4,5,6,7],[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7]],r=(r,i,a)=>kc(a,[...t.map(e=>[e[0],e[1]-r,e[2]]),...t.map(e=>[e[0],e[1]-r-i,e[2]])],n,[e?-.25:0,.75-r-i/2,-.25]);return L([r(0,.1,uc),r(.1,.04,B)])}V.eave={name:`طرف سقف`,cat:`house`,thin:!0,roof:!0,hidden:!0,keep:[B],geo:()=>Rc(!1)},V.eaveCorner={name:`زاوية طرف السقف`,cat:`house`,thin:!0,roof:!0,hidden:!0,keep:[B],geo:()=>Rc(!0)};var zc=e=>V[e].cat===`cube`||!!V[e].solid,Bc=e=>V[e].cat===`flower`,Vc=.4,Hc=2.5,Uc=e=>{let t=V[e];return t.cat!==`cube`&&t.cat!==`wall`&&!t.opening&&!t.door&&!t.flat&&!t.roof&&e!==`floorSlab`&&e!==`stairs`},Wc=e=>{let t=V[e];return t.cat===`wall`||!!t.flat||!!t.roof||e===`floorSlab`},Gc=e=>V[e].cat===`cube`||V[e].cat===`wall`,Kc=e=>{let t=V[e];return!zc(e)&&!t.flat&&!t.opening&&!t.door&&!t.thin&&e!==`fence`},H=new Map,U=(e,t,n)=>e+32*(n+32*t),qc=e=>{let t=e%32,n=Math.floor(e/32)%32;return[t,Math.floor(e/1024),n]},Jc=(e,t,n)=>e>=0&&e<32&&n>=0&&n<32&&t>=0&&t<16,Yc=new Set,W={hideRoofs:!1,hidden:new Set,fp:!1,sizing:null,drag:null},Xc={afterChange:()=>{},syncUndo:()=>{},placed:e=>{},mayCommit:e=>!0,edited:(e,t)=>{}},Zc=[1,1,1],Qc=e=>V[e].size||Zc,$c=e=>{let t=Qc(e);return t[0]===1&&t[2]===1?1:2};function el(e,t,n,r,i){let a=i>>1&3,o=r[0],s=r[2];return[e+(a===0?o:a===1?s:a===2?-o:-s),t+r[1],n+(a===0?s:a===1?-o:a===2?-s:o)]}function tl(e,t,n,r,i){let a=V[r].cells;if(a)return a.map(r=>el(e,t,n,r,i));let[o,s,c]=Qc(r),l=[];for(let r=0;r<s;r++)for(let a=0;a<o;a++)for(let o=0;o<c;o++)l.push(el(e,t,n,[a,r,o],i));return l}var nl=e=>{let t=H.get(e);return t&&t.of!=null?t.of:e};function rl(e){let t=H.get(e);if(!t)return[];let n=qc(e);return tl(n[0],n[1],n[2],t.t,t.r).filter(e=>Jc(e[0],e[1],e[2])).map(e=>U(e[0],e[1],e[2])).filter(t=>t===e||H.get(t)?.of===e)}function il(e,t){let n=new Map;if(e.forEach(e=>{let t=H.get(e);n.set(e,{k:e,a:t,b:t.f?{t:t.f,r:0}:null})}),t){let e=U(t.x,t.y,t.z),r=tl(t.x,t.y,t.z,t.t,t.r),i=!!V[t.t].flat;for(let a=0;a<r.length;a++){let o=r[a];if(!Jc(o[0],o[1],o[2]))return null;let s=U(o[0],o[1],o[2]),c=n.get(s),l=H.get(s);if(!c&&l&&!(V[l.t].flat&&l.of==null))return null;let u=l?l.f||(V[l.t].flat?l.t:void 0):void 0,d={t:t.t,r:t.r,c:t.c};a&&(d.of=e),t.o&&(t.o[0]||t.o[1])&&(d.o=t.o),t.s&&t.s!==1&&(d.s=t.s),u&&!i&&(d.f=u),c?c.b=d:n.set(s,{k:s,a:l||null,b:d})}}return[...n.values()]}function al(){let e=[],t=(t,n,r,i,a)=>e.push([t+6,n,r+6,i,a||0]);for(let e=0;e<20;e++)t(e,0,0,`fence`,0),(e<8||e>11)&&t(e,0,19,`fence`,0);for(let e=1;e<19;e++)t(0,0,e,`fence`,2),t(19,0,e,`fence`,2);for(let e=0;e<3;e++)t(8,e,19,`white`),t(11,e,19,`white`);for(let e=8;e<=11;e++)t(e,3,19,`pink`);for(let e=12;e<20;e++)t(9,0,e,`tile`),t(10,0,e,`tile`);for(let e=7;e<=12;e++)for(let n=6;n<=11;n++)(e!==9&&e!==10||n!==8&&n!==9)&&t(e,0,n,`tile`);return t(2,0,2,`tree`),t(17,0,2,`blossom`),t(2,0,16,`blossom`),t(17,0,16,`bush`),t(16,0,17,`bush`),e}function ol(e){let t=new Map,n=e=>!!V[e[3]]?.opening;return[...e.filter(e=>!n(e)),...e.filter(n)].forEach(e=>{if(!V[e[3]]||!Jc(e[0],e[1],e[2]))return;let r={t:e[3],r:((e[4]||0)%8+8)%8};$c(r.t)===2&&(r.r&=6),typeof e[5]==`number`&&(r.c=e[5]),typeof e[6]==`number`&&Kc(r.t)&&(r.o=[Math.max(-.5,Math.min(.5,e[6])),Math.max(-.5,Math.min(.5,e[7]||0))]),typeof e[8]==`number`&&e[8]>0&&Uc(r.t)&&(r.s=Math.max(Vc,Math.min(Hc,e[8]))),typeof e[9]==`string`&&e[9]&&(r.w=e[9].slice(0,40));let i=tl(e[0],e[1],e[2],r.t,r.r),a=U(e[0],e[1],e[2]),o=n(e);i.some(e=>{if(!Jc(e[0],e[1],e[2]))return!0;let n=t.get(U(e[0],e[1],e[2]));return!!n&&(!o||V[n.t].cat!==`cube`&&V[n.t].cat!==`wall`)})||i.forEach((e,n)=>t.set(U(e[0],e[1],e[2]),n?{...r,of:a}:r))}),t}function sl(e,t){H.clear(),ol(e).forEach((e,t)=>H.set(t,e)),(t||[]).forEach(e=>{let t=Jc(e[0],e[1],e[2])?H.get(U(e[0],e[1],e[2])):void 0;t&&V[e[3]]?.flat&&!V[t.t].flat&&(t.f=e[3])}),H.forEach((e,t)=>{if(e.of!=null||!V[e.t].clears)return;let n=qc(t);for(let t of V[e.t].clears){let r=el(n[0],n[1],n[2],t,e.r),i=U(r[0],r[1],r[2]);Jc(r[0],r[1],r[2])&&H.get(i)?.t===`floorSlab`&&H.delete(i)}}),Object.keys(V).forEach(e=>Yc.add(e))}var cl=[],ll=[];function ul(e,t){Yc.add(`fence`),e.forEach(e=>{let n=t?e.b:e.a,r=H.get(e.k);r&&(Yc.add(r.t),r.f&&Yc.add(r.f)),n?(H.set(e.k,{...n}),Yc.add(n.t),n.f&&Yc.add(n.f)):H.delete(e.k)}),Xc.edited(e,t),Xc.afterChange()}function dl(e){Yc.add(`fence`);let t=[];for(let[n,r]of e){let e=H.get(n);e&&(Yc.add(e.t),e.f&&Yc.add(e.f)),r?(r.of!=null||e&&e.t===r.t||t.push(n),H.set(n,{...r}),Yc.add(r.t),r.f&&Yc.add(r.f)):H.delete(n)}Xc.placed(t),Xc.afterChange()}function fl(e){return Xc.mayCommit(e)?(Xc.placed(e.filter(e=>e.b&&e.b.of==null&&(!e.a||e.a.t!==e.b.t)).map(e=>e.k)),ul(e,!0),cl.push(e),cl.length>200&&cl.shift(),ll.length=0,Xc.syncUndo(),!0):!1}function pl(){let e=cl.pop();return e?(ul(e,!1),ll.push(e),Xc.syncUndo(),!0):!1}function ml(){let e=ll.pop();return e?(ul(e,!0),cl.push(e),Xc.syncUndo(),!0):!1}function hl(e){let t=ol(e),n=[];H.forEach((e,r)=>{let i=t.get(r)||null;i&&i.t===e.t&&i.r===e.r&&i.c===e.c&&i.of===e.of&&i.f===e.f&&!!i.o==!!e.o&&i.s===e.s||n.push({k:r,a:e,b:i})}),t.forEach((e,t)=>{H.has(t)||n.push({k:t,a:null,b:e})}),n.length&&fl(n)}function gl(e,t,n,r,i,a,o){let s=new Map,c=e=>{for(let t of rl(nl(e)))s.has(t)||s.set(t,{k:t,a:H.get(t),b:null})};for(let l=e;l<=n;l++)for(let u=t;u<=r;u++)if(l===e||l===n||u===t||u===r)for(let e=0;e<i&&e<16;e++){let t=U(l,e,u),n=H.get(t);if(n&&zc(n.t))continue;n&&c(t);let r=s.get(t),i={t:a,r:0};r?r.b=i:s.set(t,{k:t,a:null,b:i})}else{let e=U(l,0,u);!H.has(e)&&!s.has(e)&&s.set(e,{k:e,a:null,b:{t:o,r:0}});for(let e=2;e+1<i&&e<16;e+=3){let t=U(l,e,u);!H.has(t)&&!s.has(t)&&s.set(t,{k:t,a:null,b:{t:`floorSlab`,r:0}})}}return[...s.values()]}function _l(e,t,n,r,i){let a=(e,t,n)=>{let r=H.get(U(e,t,n));return Jc(e,t,n)&&!!r&&zc(r.t)&&!V[r.t].roof},o=t;for(;o>0&&!a(e,o,n);)o--;if(!a(e,o,n))return null;for(;a(e,o+1,n);)o++;let s=(e,t)=>e+32*t,c=new Set,l=[[e,n]],u=e,d=e,f=n,p=n;for(;l.length;){let[e,t]=l.pop();c.has(s(e,t))||!a(e,o,t)||a(e,o+1,t)||(c.add(s(e,t)),u=Math.min(u,e),d=Math.max(d,e),f=Math.min(f,t),p=Math.max(p,t),l.push([e+1,t],[e-1,t],[e,t+1],[e,t-1]))}let m=new Set,h=[[u-1,f-1]];for(;h.length;){let[e,t]=h.pop();e<u-1||e>d+1||t<f-1||t>p+1||m.has(s(e,t))||c.has(s(e,t))||(m.add(s(e,t)),h.push([e+1,t],[e-1,t],[e,t+1],[e,t-1]))}let g=[];for(let e=u;e<=d;e++)for(let t=f;t<=p;t++)m.has(s(e,t))||g.push([e,t]);let _=(e,t)=>e>=u&&e<=d&&t>=f&&t<=p&&!m.has(s(e,t)),v=new Map;for(let[e,t]of g)for(let n=o+1;n<16;n++){let r=U(e,n,t),i=H.get(r);if(i&&V[i.t].roof)for(let e of rl(nl(r)))v.has(e)||v.set(e,{k:e,a:H.get(e),b:null})}for(let e=u-1;e<=d+1;e++)for(let t=f-1;t<=p+1;t++){if(_(e,t)||!Jc(e,o,t))continue;let n=U(e,o,t),r=H.get(n);r&&(r.t===`eave`||r.t===`eaveCorner`)&&!v.has(n)&&v.set(n,{k:n,a:r,b:null})}let y=(e,t,n,r,i,a)=>{if(!Jc(e,t,n))return;let o=U(e,t,n),s=v.get(o),c={t:r,r:i,c:a};s?s.b=c:H.has(o)||v.set(o,{k:o,a:null,b:c})},b=15-o;if(r!==`none`&&b<1)return null;let x=H.get(nl(U(e,o,n))),S=V[x.t],C=x.c==null?(S.cat===`cube`||S.cat===`wall`)&&x.t!==`white`&&x.t!==`wallWhite`?S.color:void 0:x.c;if(r===`flat`)for(let[e,t]of g){let n=!_(e+1,t)||!_(e-1,t)||!_(e,t+1)||!_(e,t-1);y(e,o+1,t,n?`roofEdge`:`roofSlab`,0,i)}else if(r!==`none`){let e=new Map,t=(e,t,n,r)=>{let i=0;for(;_(e+n*(i+1),t+r*(i+1));)i++;return i},n=p-f<=d-u?[0,1]:[1,0];if(r===`hip`){let t=g.filter(([e,t])=>{for(let n=-1;n<=1;n++)for(let r=-1;r<=1;r++)if(!_(e+n,t+r))return!0;return!1});for(let n=1;t.length;n++){t.forEach(([t,r])=>e.set(s(t,r),n));let r=new Map;for(let[n,i]of t)for(let t=-1;t<=1;t++)for(let a=-1;a<=1;a++)_(n+t,i+a)&&!e.has(s(n+t,i+a))&&r.set(s(n+t,i+a),[n+t,i+a]);t=[...r.values()]}}else for(let[i,a]of g){let o=t(i,a,-n[0],-n[1]),c=t(i,a,n[0],n[1]);e.set(s(i,a),1+(r===`shed`?o:Math.min(o,c)))}let a=i===10119999?`Wood`:i===7041664?`Slate`:``,c=(e,t)=>!_(e+1,t)||!_(e-1,t)||!_(e,t+1)||!_(e,t-1),l=(e,t)=>!_(e+n[1],t+n[0])||!_(e-n[1],t-n[0]),m=(t,n,r,i)=>!_(t+r,n+i)||e.get(s(t+r,n+i))<e.get(s(t,n)),h=(e,t)=>t===1?0:e===1?2:t===-1?4:6,v=(e,t)=>e===1?t===1?0:2:t===-1?4:6;for(let[t,u]of g){let d=e.get(s(t,u)),f=o+Math.min(d,b);if(r!==`hip`&&(!_(t+1,u)||!_(t-1,u)||!_(t,u+1)||!_(t,u-1)))for(let e=o+1;e<f;e++)y(t,e,u,`gableFill`,0,C);if(d>b){y(t,f,u,`roofFlat`,0,i);continue}if(r===`shed`){c(t,u)?y(t,f,u,`gableSlope`+a,h(-n[0],-n[1]),C):y(t,f,u,`roof`,h(-n[0],-n[1]),i);continue}if(r===`gable`){let e=m(t,u,n[0],n[1]),r=m(t,u,-n[0],-n[1]),o=l(t,u),s=e&&r?n[1]?0:2:e?h(n[0],n[1]):h(-n[0],-n[1]);o?y(t,f,u,(e&&r?`gableTop`:`gableSlope`)+a,s,C):y(t,f,u,e&&r?`roofTop`:`roof`,s,i);continue}let p=m(t,u,1,0),g=m(t,u,-1,0),x=m(t,u,0,1),S=m(t,u,0,-1),w=+p+ +g+ +x+ +S;if(w===4)y(t,f,u,`roofPeak`,0,i);else if(w===3)y(t,f,u,`roofEnd`,g?x?p?6:4:2:0,i);else if(w===2&&x&&S)y(t,f,u,`roofTop`,0,i);else if(w===2&&p&&g)y(t,f,u,`roofTop`,2,i);else if(w===2)y(t,f,u,`roofCorner`,v(p?1:-1,x?1:-1),i);else if(w===1)y(t,f,u,`roof`,p?2:g?6:x?0:4,i);else{let e=[[1,1],[1,-1],[-1,-1],[-1,1]].find(e=>m(t,u,e[0],e[1]));e?y(t,f,u,`roofValley`,v(e[0],e[1]),i):y(t,f,u,`roofFlat`,0,i)}}let x=(e,t,n,r)=>{Jc(e,o,t)&&!_(e,t)&&y(e,o,t,n,r,i)},S=r===`hip`?[[1,0],[-1,0],[0,1],[0,-1]]:r===`gable`?[[n[0],n[1]],[-n[0],-n[1]]]:[[-n[0],-n[1]]];for(let[e,t]of g){for(let[n,r]of S)x(e+n,t+r,`eave`,h(n,r));if(r===`hip`)for(let[n,r]of[[1,1],[1,-1],[-1,1],[-1,-1]])!_(e+n,t)&&!_(e,t+r)&&x(e+n,t+r,`eaveCorner`,v(n,r))}}let w=[...v.values()];return w.length?w:null}function vl(e){let t=null;for(let n of e){let r=qc(n);for(let[n,i]of[[1,0],[-1,0],[0,1],[0,-1]]){let a=r[0]+n,o=r[2]+i;if(!Jc(a,r[1],o))continue;let s=U(a,r[1],o);if(e.includes(s))continue;let c=H.get(s);if(c){if(V[c.t].cat===`wall`)return{t:c.t,r:0,c:c.c};!t&&V[c.t].cat===`cube`&&(t={t:c.t,r:0,c:c.c})}}}return t}function yl(e){let t=e=>!!e&&(V[e.t].cat===`wall`||!!V[e.t].opening||!!V[e.t].roof||e.t===`floorSlab`),n=e,r=H.get(e);if(r&&V[r.t].flat){let r=qc(e);n=-1;for(let e=1;e<32&&n<0;e++)for(let[i,a]of[[1,0],[-1,0],[0,1],[0,-1]]){let o=r[0]+i*e,s=r[2]+a*e;if(!Jc(o,r[1],s))continue;let c=U(o,r[1],s);if(t(H.get(c))){n=c;break}}if(n<0)return null}if(!t(H.get(n)))return null;let i=new Set,a=[],o=e=>{for(let t of rl(nl(e)))i.has(t)||(i.add(t),a.push(t))};for(o(n);a.length&&i.size<8e3;){let e=qc(a.pop());for(let n=-1;n<=1;n++)for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){let s=e[0]+n,c=e[1]+r,l=e[2]+a;if(!Jc(s,c,l))continue;let u=U(s,c,l);!i.has(u)&&t(H.get(u))&&o(u)}}let s=new Map;i.forEach(e=>s.set(e,{k:e,a:H.get(e),b:null}));let c=32,l=-1,u=32,d=-1,f=16,p=-1;i.forEach(e=>{if(V[H.get(e).t].roof)return;let t=qc(e);c=Math.min(c,t[0]),l=Math.max(l,t[0]),u=Math.min(u,t[2]),d=Math.max(d,t[2]),f=Math.min(f,t[1]),p=Math.max(p,t[1])});for(let e=f;e<=p;e++){let t=(t,n)=>Jc(t,e,n)&&i.has(U(t,e,n)),n=new Set,r=[[c-1,u-1]];for(;r.length;){let[e,i]=r.pop(),a=e+2+100*(i+2);e<c-1||e>l+1||i<u-1||i>d+1||n.has(a)||t(e,i)||(n.add(a),r.push([e+1,i],[e-1,i],[e,i+1],[e,i-1]))}for(let r=c;r<=l;r++)for(let i=u;i<=d;i++){if(n.has(r+2+100*(i+2))||t(r,i))continue;let a=U(r,e,i),o=H.get(a);o&&!s.has(a)&&(V[o.t].flat&&o.of==null?s.set(a,{k:a,a:o,b:null}):o.f&&s.set(a,{k:a,a:o,b:{...o,f:void 0}}))}}return s.size?[...s.values()]:null}var bl=(new URLSearchParams(location.search).get(`p`)||``).replace(/[^\w-]/g,``).slice(0,12),xl=e=>bl?e+`-p`+bl:e,Sl=xl(`makabi-garden-v1`),Cl={saved:e=>{}},G={stars:[!1,!1,!1],night:!1,muted:!1,seenIntro:!1,winShown:!1,hero:null},wl={on:!1};function Tl(){let e=[];H.forEach((t,n)=>{if(t.of!=null)return;let r=qc(n),i=[r[0],r[1],r[2],t.t,t.r||0];if((t.c!=null||t.o||t.s)&&i.push(t.c==null?null:t.c),(t.o||t.s)&&i.push(t.o?t.o[0]:0,t.o?t.o[1]:0),t.s&&i.push(t.s),t.w){for(;i.length<9;)i.push(i.length===5?null:0);i.push(t.w)}e.push(i)});let t=[];return H.forEach((e,n)=>{if(e.f){let r=qc(n);t.push([r[0],r[1],r[2],e.f])}}),{voxels:e,floors:t}}var El;function Dl(){if(clearTimeout(El),!wl.on)try{let e=Tl();try{localStorage.setItem(Sl,JSON.stringify({v:3,voxels:e.voxels,floors:e.floors,state:G}))}catch{}Cl.saved(e)}catch{}}function Ol(){clearTimeout(El),wl.on||(El=window.setTimeout(Dl,400))}function kl(){try{let e=JSON.parse(localStorage.getItem(Sl)||`null`);if(e&&(e.v===1||e.v===2||e.v===3)&&Array.isArray(e.voxels)){Object.assign(G,e.state||{});let t=e.voxels;return e.v===1&&(t=t.map(e=>[e[0],e[1],e[2],e[3],(e[4]||0)*2])),e.v<3&&(t=t.map(e=>[e[0]+6,e[1],e[2]+6,e[3],e[4]||0,e[5]]),Array.isArray(G.hero)&&(G.hero=[G.hero[0]+6,G.hero[1],G.hero[2]+6])),sl(t,Array.isArray(e.floors)?e.floors:void 0),!0}}catch{}return!1}document.addEventListener(`visibilitychange`,()=>{document.hidden&&Dl()}),window.addEventListener(`pagehide`,Dl);var Al=null,jl={duck:!1};function Ml(e,t,n,r,i){if(!G.muted)try{Al||=new(window.AudioContext||window.webkitAudioContext);let a=Al.createOscillator(),o=Al.createGain(),s=Al.currentTime;a.type=r||`sine`,a.frequency.setValueAtTime(e,s),n&&a.frequency.exponentialRampToValueAtTime(e*n,s+t),o.gain.setValueAtTime((i||.09)*(jl.duck?.3:1),s),o.gain.exponentialRampToValueAtTime(.001,s+t),a.connect(o),o.connect(Al.destination),a.start(s),a.stop(s+t)}catch{}}function Nl(){[0,.11,.22].forEach((e,t)=>setTimeout(()=>Ml(2300+t*260,.07,1.25,`sine`,.022),e*1e3))}function Pl(){for(let e=0;e<5;e++)setTimeout(()=>Ml(4300,.03,1,`sine`,.012),e*60)}var K={place:e=>{let t=V[e].cat;t===`flower`?(Ml(880,.16,1,`sine`,.07),setTimeout(()=>Ml(1320,.22,1,`sine`,.06),90)):t===`cube`?Ml(190,.1,.7,`triangle`,.16):(Ml(320,.07,.8,`square`,.045),setTimeout(()=>Ml(420,.08,.8,`triangle`,.09),70))},remove:()=>Ml(420,.13,.45,`sine`,.1),turn:()=>Ml(700,.06,1.2,`sine`,.07),tick:()=>Ml(980,.035,1,`sine`,.04),no:()=>Ml(200,.12,.9,`triangle`,.09),horn:(e=1)=>{Ml(392,.32,.98,`triangle`,.16*e),setTimeout(()=>Ml(523,.45,.98,`triangle`,.14*e),260)},bell:()=>{Ml(1175,.55,1,`sine`,.11),setTimeout(()=>Ml(880,.8,1,`sine`,.1),300)},splash:()=>{Ml(600,.25,2.2,`sine`,.05),setTimeout(()=>Ml(900,.2,1.8,`sine`,.04),80)},star:()=>{[660,880,1175,1568].forEach((e,t)=>setTimeout(()=>Ml(e,.26,1,`triangle`,.11),t*120))},win:()=>{[523,659,784,1047,784,1047,1319].forEach((e,t)=>setTimeout(()=>Ml(e,.3,1,`triangle`,.11),t*150))}},Fl;function Il(){clearTimeout(Fl),Fl=window.setTimeout(()=>{!document.hidden&&Al&&(G.night?Pl():Nl()),Il()},3500+Math.random()*5e3)}var Ll=!!window.matchMedia&&matchMedia(`(prefers-reduced-motion:reduce)`).matches,Rl=document.getElementById(`c`),zl=new vo({canvas:Rl,antialias:!0,alpha:!0});zl.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),zl.shadowMap.enabled=!0,zl.shadowMap.type=2;var Bl=new bo,Vl=new rr(42,1,.2,900),Hl=new As(15136511,9418858,1.7);Bl.add(Hl);var Ul=new Vs(16773584,2.6);Ul.position.set(20,26,7),Ul.castShadow=!0;var Wl=!!window.matchMedia&&matchMedia(`(pointer:coarse)`).matches;Ul.shadow.mapSize.set(Wl?1024:2048,Wl?1024:2048),Object.assign(Ul.shadow.camera,{left:-25,right:25,top:25,bottom:-25,near:1,far:90}),Ul.shadow.bias=-6e-4,Ul.shadow.normalBias=.03,Bl.add(Ul);var Gl=new fo;Gl.position.set(-16,0,-16),Bl.add(Gl);var Kl=null;function ql(){if(!Kl){let e=document.createElement(`canvas`);e.width=e.height=32;let t=e.getContext(`2d`);for(let e=0;e<32;e++)for(let n=0;n<32;n++)t.fillStyle=(e+n)%2?`#74c75c`:`#69bd53`,t.fillRect(e,n,1,1);let n=new as(e);n.magFilter=r,n.minFilter=r,n.colorSpace=E,Kl=new ms({map:n})}let e=new Wn(new vr(32,32),Kl);e.rotation.x=-Math.PI/2,e.position.set(16,0,16),e.receiveShadow=!0;let t=new Wn(new qn(32,1.2,32),new ms({color:10119999}));return t.position.set(16,-.61,16),[e,t]}Gl.add(...ql());var Jl=[];(function(){let e=new ms({color:16777215});for(let t=0;t<5;t++){let n=new fo;[[0,0,0,4,1.2,2.4],[2,.3,.4,3,1.4,2],[-2,.1,-.3,2.6,1,1.8]].forEach(t=>{let r=new Wn(new qn(t[3],t[4],t[5]),e);r.position.set(t[0],t[1],t[2]),n.add(r)}),n.position.set(-40+t*20,24+t*7%5,-26+t*13%9*-2),Bl.add(n),Jl.push(n)}})();var Yl=new ms({vertexColors:!0}),Xl=new ms({vertexColors:!0,emissive:16758344,emissiveIntensity:0}),Zl=new ms({vertexColors:!0,transparent:!0,opacity:.4,depthWrite:!1,emissive:16767370,emissiveIntensity:0}),Ql={},$l={};Object.keys(V).forEach(e=>Ql[e]=V[e].geo());var eu=new Gt,tu=new P,nu={};function ru(e){let t=Ql[e],n=(V[e].keep||[]).map(e=>new P(e)),r=t.attributes.position.array,i=t.attributes.normal.array,a=t.attributes.color.array,o={p:[],n:[],c:[]},s={p:[],n:[],c:[]},c=0;for(let e=0;e<t.attributes.position.count;e++){let t=a[e*3],l=a[e*3+1],u=a[e*3+2],d=n.some(e=>Math.abs(e.r-t)<1e-4&&Math.abs(e.g-l)<1e-4&&Math.abs(e.b-u)<1e-4),f=d?s:o;if(f.p.push(r[e*3],r[e*3+1],r[e*3+2]),f.n.push(i[e*3],i[e*3+1],i[e*3+2]),d)f.c.push(t,l,u);else{let e=.2126*t+.7152*l+.0722*u;c=Math.max(c,e),f.c.push(e,e,e)}}for(let e=0;e<o.c.length;e++)o.c[e]/=c||1;let l=e=>{let t=new En;return t.setAttribute(`position`,new vn(e.p,3)),t.setAttribute(`normal`,new vn(e.n,3)),t.setAttribute(`color`,new vn(e.c,3)),t};return{paint:l(o),keep:s.p.length?l(s):null}}var iu=null;function au(e){if(!iu){let e=iu=new Map,t=(t,n)=>{let r=e.get(t);r?r.push(n):e.set(t,[n])};H.forEach((e,n)=>{e.of??t(e.t,n),e.f&&t(`f:`+e.f,n)})}return iu.get(e)||[]}function ou(e){let t=performance.now();cu.forEach((n,r)=>{let i=H.get(r);(!i||t-n>su)&&cu.delete(r),i&&e.add(i.t)}),e.size&&(iu=null,e.forEach(e=>Wu(e)),e.clear())}var su=220,cu=new Map;function lu(e){if(Ll)return;let t=performance.now();e.forEach(e=>cu.set(e,t))}function uu(e){let t=cu.get(e);if(t==null)return 1;let n=Math.min(1,(performance.now()-t)/su)-1;return .6+.4*(1+2.70158*n*n*n+1.70158*n*n)}var du={x:0,y:0,z:0};function fu(e,t,n){let r=W.drag;return r&&r.k===e?(du.x=r.x,du.y=r.y,du.z=r.z):(du.x=t[0]+.5+(n.o?n.o[0]:0),du.y=t[1],du.z=t[2]+.5+(n.o?n.o[1]:0)),du}var pu={};function mu(e){if(pu[e])return pu[e];let t=V[e],n=[0,-.5,0];if(t.hang)n=[0,.5,0];else if(t.thin){let t=Ql[e];t.boundingBox||t.computeBoundingBox(),n=[0,(t.boundingBox.min.y+t.boundingBox.max.y)/2,-.5]}return pu[e]=n}function hu(e,t,n,r){let i=mu(t),a=1-n;eu.position.set(e.x+i[2]*Math.sin(r)*a,e.y+.5+i[1]*a,e.z+i[2]*Math.cos(r)*a)}function gu(e,t,n,r,i,a,o,s){let c=$l[e];if(!c||c.userData.cap<r.length){c&&(Gl.remove(c),c.dispose());let i=Math.max(64,2**Math.ceil(Math.log2(r.length+1)));c=new Jo(t,a||(V[n].glow?Xl:Yl),i),c.userData.cap=i,c.frustumCulled=!1,c.castShadow=!V[n].flat&&a!==Zl,c.receiveShadow=!0,Gl.add(c),$l[e]=c}r.forEach((e,t)=>{let r=qc(e),a=H.get(e),l=W.sizing&&W.sizing.k===e?W.sizing.s:a.s||1,u=o?1:W.hidden.has(e)?0:uu(e)*l;o?eu.position.set(r[0]+.5,r[1]+.5,r[2]+.5):hu(fu(e,r,a),n,u,s?0:(a.r||0)*Math.PI/4),eu.rotation.set(0,o||s?0:(a.r||0)*Math.PI/4,0),eu.scale.setScalar(u),eu.updateMatrix(),c.setMatrixAt(t,eu.matrix);let d=zc(n)?.95+(r[0]*7+r[1]*13+r[2]*29)%10/100:1;c.setColorAt(t,i||s&&a.c!=null?tu.setHex(a.c).multiplyScalar(d):tu.setRGB(d,d,d))}),c.visible=!(W.hideRoofs&&V[n].roof),c.userData.keys=r,c.count=r.length,c.instanceMatrix.needsUpdate=!0,c.instanceColor&&(c.instanceColor.needsUpdate=!0)}function _u(){for(let e in $l)$l[e].visible=!(W.hideRoofs&&V[e.split(/[#@]/)[0]].roof)}var vu={};function yu(){let e=[];for(let t=0;t<16;t++)e.push([]);let t=(e,t,n)=>{let r=Jc(e,t,n)?H.get(U(e,t,n)):void 0;return!!r&&(r.t===`fence`||r.t===`gate`||zc(r.t))};au(`fence`).forEach(n=>{let r=H.get(n),i=qc(n),a=+!!t(i[0]+1,i[1],i[2])|(t(i[0]-1,i[1],i[2])?2:0)|(t(i[0],i[1],i[2]+1)?4:0)|(t(i[0],i[1],i[2]-1)?8:0);e[a||(r.r&2?12:3)].push(n)});for(let t=1;t<16;t++)(e[t].length||$l[`fence@`+t])&&gu(`fence@`+t,vu[t]||(vu[t]=Pc(t)),`fence`,e[t],!1,void 0,!1,!0)}function bu(e){if(e===`fence`){yu();return}let t=[],n=[],r=au(`f:`+e);if(au(e).forEach(e=>(H.get(e).c==null?t:n).push(e)),(r.length||$l[e+`#u`])&&gu(e+`#u`,Ql[e],e,r,!1,void 0,!0),gu(e,Ql[e],e,t,!1),n.length||$l[e+`#p`]){let t=nu[e]||(nu[e]=ru(e));gu(e+`#p`,t.paint,e,n,!0),t.keep&&gu(e+`#k`,t.keep,e,n,!1)}}var xu=new fo;{let e=new qn(1,1,1);xu.add(new Wn(e,new fn({color:16761390,transparent:!0,opacity:.2,depthWrite:!1})),new is(new ds(e),new Yo({color:16751134}))),xu.visible=!1,Gl.add(xu)}function Su(e){let t=e==null?void 0:H.get(e);if(e==null||!t||t.of!=null)return xu.visible=!1,!1;let n=Ql[t.t];n.boundingBox||n.computeBoundingBox();let r=n.boundingBox,i=W.sizing&&W.sizing.k===e?W.sizing.s:t.s||1;hu(fu(e,qc(e),t),t.t,i,(t.r||0)*Math.PI/4),xu.position.copy(eu.position),xu.rotation.y=(t.r||0)*Math.PI/4,xu.scale.setScalar(i);for(let e of xu.children)e.position.set((r.min.x+r.max.x)/2,(r.min.y+r.max.y)/2,(r.min.z+r.max.z)/2),e.scale.set(r.max.x-r.min.x+.1,r.max.y-r.min.y+.1,r.max.z-r.min.z+.1);return xu.visible=!0,!0}var Cu=new Wn(new qn(1.03,1.03,1.03),new fn({color:16777215,transparent:!0,opacity:.38,depthWrite:!1}));Cu.visible=!1,Gl.add(Cu);var wu=[],Tu=new vr(.2,.26);Tu.translate(.1,0,0);var Eu=[16747069,16765503,16740261,9399295,5227511];function Du(e){let t=new fo,n=new fn({color:Eu[e%5],side:2}),r=new Wn(Tu,n),i=new Wn(Tu,n);return i.scale.x=-1,t.add(r,i),t.userData={a:r,c:i,target:new N,phase:e*1.7},t.position.set(16+e%3-1,2+e*.2,16),Gl.add(t),t}var Ou=[];function ku(e){if(Ou.length){let t=Ou[Math.floor(Math.random()*Ou.length)];e.userData.target.set(t[0]+.5,t[1]+.9+Math.random()*.8,t[2]+.5)}else e.userData.target.set(Math.random()*32,2,Math.random()*32)}var Au=[];for(let e=0;e<4;e++){let e=new zs(16762219,0,7,1.6);Gl.add(e),Au.push(e)}var ju=new N;function Mu(e,t){let n=Ql[e];return n.boundingBox||n.computeBoundingBox(),(n.boundingBox.max.y+.5)*t-.15}function Nu(){Ou=[];let e=[];H.forEach((t,n)=>{if(Bc(t.t))Ou.push(qc(n));else if(V[t.t].glow&&t.of==null){let r=qc(n);e.push([r[0]+(t.o?t.o[0]:0),r[1],r[2]+(t.o?t.o[1]:0),V[t.t].hang?.3:Mu(t.t,t.s||1)])}});let t=ju.x+16,n=ju.z+16,r=e=>(e[0]-t)**2+(e[2]-n)**2;e.sort((e,t)=>r(e)-r(t));let i=Math.min(9,Math.floor(Ou.length/2));for(;wu.length<i;){let e=Du(wu.length);ku(e),wu.push(e)}for(;wu.length>i;)Gl.remove(wu.pop());Au.forEach((t,n)=>{let r=e[n];r&&G.night?(t.position.set(r[0]+.5,r[1]+r[3],r[2]+.5),t.intensity=14):t.intensity=0})}function Pu(){document.body.classList.toggle(`night`,G.night),Hl.intensity=G.night?.55:1.7,Hl.color.set(G.night?9412863:15136511),Ul.intensity=G.night?.7:2.6,Ul.color.set(G.night?11122943:16773584),Xl.emissiveIntensity=G.night?.9:0,Zl.emissiveIntensity=G.night?.85:0,Zl.opacity=G.night?.75:.4,Nu()}function Fu(e){for(let t in $l){let n=t.split(/[#@]/)[0],r=$l[t];if(!V[n].alive||!r.count)continue;let i=r.userData.keys;for(let t=0;t<r.count;t++){let n=i[t],a=qc(n),o=H.get(n);if(!o||W.hidden.has(n)||cu.has(n))continue;let s=n*37%100,c=Math.max(0,Math.sin(e*.0021+s))**14*.14,l=W.sizing&&W.sizing.k===n?W.sizing.s:o.s||1,u=fu(n,a,o);eu.position.set(u.x,u.y+.5*l+c*l,u.z),eu.rotation.set(0,(o.r||0)*Math.PI/4+Math.sin(e*9e-4+s)*.3,0),eu.scale.setScalar(l),eu.updateMatrix(),r.setMatrixAt(t,eu.matrix)}r.instanceMatrix.needsUpdate=!0}}function Iu(e,t){Fu(t),Jl.forEach(t=>{t.position.x+=e*.6,t.position.x>60&&(t.position.x=-60)}),wu.forEach(n=>{let r=n.userData,i=r.target.clone().sub(n.position),a=i.length();a<.25?ku(n):(i.multiplyScalar(Math.min(1,e*1.3/a)),n.position.add(i),n.rotation.y=Math.atan2(-i.z,i.x)),n.position.y+=Math.sin(t*.004+r.phase)*.004;let o=Math.sin(t*.02+r.phase)*.9;r.a.rotation.z=o,r.c.rotation.z=-o})}function Lu(){let e=Rl.clientWidth,t=Rl.clientHeight;zl.setSize(e,t,!1),Vl.aspect=e/t,Vl.fov=W.fp?74:e<t?52:42,Vl.updateProjectionMatrix()}var Ru=new Wn(new qn(1,1,1),new fn({color:16777215,transparent:!0,opacity:.35,depthWrite:!1}));Ru.visible=!1,Gl.add(Ru);function zu(e){if(Ru.visible=!!e,!e)return;let t=e.x1-e.x0+1,n=e.z1-e.z0+1;Ru.scale.set(t+.04,e.h,n+.04),Ru.position.set(e.x0+t/2,e.h/2,e.z0+n/2),Ru.material.color.set(t<2||n<2?16731501:16777215)}var Bu={},Vu=(e,t)=>Bu[e]||(Bu[e]=t());function Hu(e){let t=V[e],n=[];return t.glass&&n.push({geo:Vu(e+`#g`,t.glass),mat:Zl}),t.leaves?.forEach((t,r)=>n.push({geo:Vu(e+`#l`+r,t.geo),mat:t.glass?Zl:Yl})),n}var Uu=[];function Wu(e){bu(e);let t=V[e];if(!t.glass&&!t.leaves)return;let n=au(e);if(t.glass&&gu(e+`#g`,Vu(e+`#g`,t.glass),e,n,!1,Zl),!t.leaves)return;t.leaves.forEach((t,r)=>gu(e+`#l`+r,Vu(e+`#l`+r,t.geo),e,n,!1,t.glass?Zl:Yl));let r=new Map(Uu.filter(t=>t.t===e).map(e=>[e.k,e.open]));Uu=Uu.filter(t=>t.t!==e).concat(n.map((t,n)=>{let i=qc(t),a=H.get(t),o=tl(i[0],i[1],i[2],e,a.r),s=0,c=0;return o.forEach(e=>{s+=e[0]+.5,c+=e[2]+.5}),{t:e,k:t,idx:n,open:r.get(t)||0,shown:0,x:i[0],y:i[1],z:i[2],r:a.r,cx:s/o.length,cz:c/o.length}}))}var Gu=new bt,Ku=new bt;function qu(e,t,n,r){for(let i of Uu){let a=Math.abs(n-i.y)<1.6&&Math.hypot(t-i.cx,r-i.cz)<1.7;i.open+=(+!!a-i.open)*Math.min(1,e*7),Math.abs(i.open-i.shown)<.002||(i.shown=i.open,V[i.t].leaves.forEach((e,t)=>{let n=$l[i.t+`#l`+t];if(n){if(Gu.makeRotationY(i.r*Math.PI/4).setPosition(i.x+.5,i.y+.5,i.z+.5),e.top!=null){let t=-.5+e.top;Gu.multiply(Ku.makeTranslation(0,t,0)).multiply(Ku.makeScale(1,1-i.open*.92,1)).multiply(Ku.makeTranslation(0,-t,0))}else e.hinge&&Gu.multiply(Ku.makeTranslation(e.hinge[0],0,e.hinge[1])).multiply(Ku.makeRotationY((e.dir||1)*i.open*1.45)).multiply(Ku.makeTranslation(-e.hinge[0],0,-e.hinge[1]));n.setMatrixAt(i.idx,Gu),n.instanceMatrix.needsUpdate=!0}}))}}var Ju=600,Yu=new Jo(new qn(1,1,1),new fn({color:16777215,transparent:!0,opacity:.16,depthWrite:!1}),Ju);Yu.count=0,Yu.frustumCulled=!1,Gl.add(Yu);function Xu(e){let t=Math.min(Ju,e.length);for(let n=0;n<t;n++){let t=qc(e[n]);eu.position.set(t[0]+.5,t[1]+.5,t[2]+.5),eu.rotation.set(0,0,0),eu.scale.setScalar(1),eu.updateMatrix(),Yu.setMatrixAt(n,eu.matrix)}Yu.count=t,Yu.instanceMatrix.needsUpdate=!0}function Zu(e,t){let n=new fo,r=new Map,i=(e,t,n,i,a)=>{let o=t.clone();o.applyMatrix4(n);let s=o.attributes.color;if(s)for(let e=0;e<s.count;e++)s.setXYZ(e,s.getX(e)*(i?i.r:1)*a,s.getY(e)*(i?i.g:1)*a,s.getZ(e)*(i?i.b:1)*a);let c=r.get(e);c?c.push(o):r.set(e,[o])},a=new Map;e.forEach(e=>{V[e[3]]&&a.set(e[0]+`,`+e[1]+`,`+e[2],e[3])});let o=(e,t,n)=>{let r=a.get(e+`,`+t+`,`+n);return!!r&&(r===`fence`||r===`gate`||zc(r))},s=new bt,c=new P;for(let t of e){let[e,n,r,a,l]=t,u=V[a];if(!u||!Ql[a])continue;let d=t[5]??null,f=t[6]||t[7]?[t[6]||0,t[7]||0]:void 0,p=t[8]||1,m=zc(a)?.95+(e*7+n*13+r*29)%10/100:1,h=Ql[a],g=!1;if(a===`fence`){let t=+!!o(e+1,n,r)|(o(e-1,n,r)?2:0)|(o(e,n,r+1)?4:0)|(o(e,n,r-1)?8:0)||((l||0)&2?12:3);h=vu[t]||(vu[t]=Pc(t)),g=!0}let _=g?0:(l||0)*Math.PI/4;hu({x:e+.5+(f?f[0]:0),y:n,z:r+.5+(f?f[1]:0)},a,p,_),eu.rotation.set(0,_,0),eu.scale.setScalar(p),eu.updateMatrix(),s.copy(eu.matrix);let v=u.glow?Xl:Yl;if(d!=null&&!g){let e=nu[a]||(nu[a]=ru(a));i(v,e.paint,s,c.setHex(d),m),e.keep&&i(v,e.keep,s,null,1)}else i(v,h,s,g&&d!=null?c.setHex(d):null,m);u.glass&&i(Zl,Vu(a+`#g`,u.glass),s,null,1),u.leaves?.forEach((e,t)=>i(e.glass?Zl:Yl,Vu(a+`#l`+t,e.geo),s,null,1))}for(let e of t)V[e[3]]&&(eu.position.set(e[0]+.5,e[1]+.5,e[2]+.5),eu.rotation.set(0,0,0),eu.scale.setScalar(1),eu.updateMatrix(),i(Yl,Ql[e[3]],eu.matrix,null,1));return r.forEach((e,t)=>{for(let r=0;r<e.length;r+=1500){let i=new Wn(L(e.slice(r,r+1500)),t);i.castShadow=t!==Zl,i.receiveShadow=!0,n.add(i)}}),n}var Qu=0;function $u(){if(Qu===0)zl.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),Lu();else if(Qu===1)zl.shadowMap.enabled=!1,Ul.castShadow=!1,Bl.traverse(e=>{let t=e.material;t&&(t.needsUpdate=!0)});else return!1;return Qu++,!0}var ed=new ec,td=new O;function nd(e,t){let n=Rl.getBoundingClientRect();td.set((e-n.left)/n.width*2-1,-((t-n.top)/n.height)*2+1),ed.setFromCamera(td,Vl);let r=[ed.ray.origin.x+16,ed.ray.origin.y,ed.ray.origin.z+16],i=[ed.ray.direction.x,ed.ray.direction.y,ed.ray.direction.z],a=[0,0,0],o=[32,16,32],s=0,c=1e9,l=-1;for(let e=0;e<3;e++)if(Math.abs(i[e])<1e-9){if(r[e]<a[e]||r[e]>o[e])return null}else{let t=(a[e]-r[e])/i[e],n=(o[e]-r[e])/i[e];if(t>n){let e=t;t=n,n=e}t>s&&(s=t,l=e),n<c&&(c=n)}if(s>c)return null;let u=[0,1,2].map(e=>r[e]+i[e]*(s+1e-4)),d=[0,1,2].map(e=>Math.min(o[e]-1,Math.max(0,Math.floor(u[e])))),f=i.map(e=>e>0?1:-1),p=[0,1,2].map(e=>Math.abs(i[e])<1e-9?1e9:((f[e]>0?d[e]+1:d[e])-r[e])/i[e]),m=i.map(e=>Math.abs(e)<1e-9?1e9:Math.abs(1/e));for(let e=0;e<200;e++){let e=U(d[0],d[1],d[2]),t=H.get(e);if(t&&t.t!==`eave`&&t.t!==`eaveCorner`&&!(W.hideRoofs&&V[t.t].roof)&&!W.hidden.has(nl(e))){let n=[0,0,0];l>=0&&(n[l]=-f[l]);let r=nl(e);return{cell:d.slice(),k:r,v:H.get(r)||t,normal:l>=0?n:null}}l=p[0]<p[1]?p[0]<p[2]?0:2:p[1]<p[2]?1:2;let n=d.slice();if(d[l]+=f[l],p[l]+=m[l],d[1]<0)return{ground:!0,cell:n};if(!Jc(d[0],d[1],d[2]))return null}return null}function rd(e,t){if(!e)return null;if(e.ground)return{cell:e.cell,act:`place`};if(!zc(e.v.t))return{cell:qc(e.k),act:e.v.t===t?`turn`:`replace`};if(!e.normal)return null;let n=[e.cell[0]+e.normal[0],e.cell[1]+e.normal[1],e.cell[2]+e.normal[2]];if(n[1]>=16)return{err:`high`};if(!Jc(n[0],n[1],n[2]))return{err:`edge`};if(H.has(U(n[0],n[1],n[2])))return null;if(!zc(t)){for(;n[1]>0&&!H.has(U(n[0],n[1]-1,n[2]));)n[1]--;if(n[1]>0&&!zc(H.get(U(n[0],n[1]-1,n[2])).t))return{err:`support`}}return{cell:n,act:`place`}}function id(e,t,n){let r=Rl.getBoundingClientRect();td.set((e-r.left)/r.width*2-1,-((t-r.top)/r.height)*2+1),ed.setFromCamera(td,Vl);let i=ed.ray.origin,a=ed.ray.direction;if(a.y>-.001)return null;let o=(n-i.y)/a.y;return[i.x+a.x*o+16,i.z+a.z*o+16]}var ad=[{text:`ازرعي 4 أنواع مختلفة من الزهور`,max:4,val:e=>e.kinds,hint:`افتحي قائمة الزهور في الأسفل. اختاري زهرة ثم اضغطي على العشب، وبعدها جرّبي نوعًا آخر.`,tab:`flower`},{text:`ضعي مقعدًا للراحة`,max:1,val:e=>e.bench,hint:`المقعد موجود في قائمة الحديقة. اضغطي عليه مرة ثانية لتدويره.`,tab:`decor`},{text:`ازرعي 12 زهرة أو أكثر`,max:12,val:e=>e.flowers,hint:`عدّي زهوركِ! أضيفي زهورًا حتى يصبح العدد 12.`,tab:`flower`}],od=`<svg viewBox="0 0 24 24"><path d="M12 2l3 6.6 7 .8-5.2 4.8 1.5 7L12 17.6 5.7 21.2l1.5-7L2 9.4l7-.8z"/></svg>`;function sd(){let e=new Set,t=0,n=0;return H.forEach(r=>{Bc(r.t)?(e.add(r.t),t++):r.t===`bench`&&n++}),{kinds:e.size,flowers:t,bench:n}}var cd=()=>G.stars.filter(Boolean).length;function ld(e){let t=sd(),n=!1;if(q(`goals`).innerHTML=ad.map((e,r)=>{let i=Math.min(e.max,e.val(t));return!G.stars[r]&&i>=e.max&&(G.stars[r]=!0,n=!0),`<li class="`+(G.stars[r]?`done`:``)+`"><svg viewBox="0 0 24 24"><path d="M12 2l3 6.6 7 .8-5.2 4.8 1.5 7L12 17.6 5.7 21.2l1.5-7L2 9.4l7-.8z"/></svg><span>`+e.text+`</span><span class="n">`+(e.max>1?i+` / `+e.max:``)+`</span></li>`}).join(``),q(`starCount`).textContent=cd()+` / 3`,n&&(Td(),!e)){let e=cd(),t=Object.keys(V).find(t=>V[t].stars===e);K.star(),md(`نجمة جديدة! فتحتِ: `+V[t].name),e===3&&!G.winShown?(G.winShown=!0,setTimeout(()=>{q(`win`).classList.add(`open`),hd(),K.win()},1200)):J(e===1?`رائع! ظهرت الفراشات في حديقتكِ.`:`أحسنتِ! بقيت نجمة واحدة.`)}}var ud=0;function dd(){let e=G.stars.findIndex(e=>!e);if(e<0){J(`حديقتكِ جميلة جدًا! جرّبي زر القمر لتري الفوانيس في الليل.`);return}let t=ad[e];if(ud%2==0)J(t.text+`.`);else{J(t.hint,7e3),wd(t.tab);let e=document.querySelector(`.tab[data-cat="`+t.tab+`"]`);e&&(e.classList.remove(`pulse`),e.offsetWidth,e.classList.add(`pulse`))}ud++}var q=e=>document.getElementById(e),fd;function J(e,t){let n=q(`bubble`);n.textContent=e,n.classList.add(`show`),clearTimeout(fd),fd=window.setTimeout(()=>n.classList.remove(`show`),t||5e3)}var pd;function md(e){let t=q(`toast`);t.textContent=e,t.classList.add(`show`),clearTimeout(pd),pd=window.setTimeout(()=>t.classList.remove(`show`),3200)}function hd(){if(Ll)return;let e=[`#e2477f`,`#ffc22e`,`#6a3fa6`,`#3f9b4b`,`#4fb7ee`];for(let t=0;t<46;t++){let n=document.createElement(`div`);n.className=`confetti`,n.style.left=Math.random()*100+`%`,n.style.background=e[t%5],n.style.animationDelay=Math.random()*.9+`s`,q(`app`).appendChild(n),setTimeout(()=>n.remove(),4e3)}}var gd={};function _d(){let e=document.createElement(`canvas`);e.width=e.height=112;let t=new vo({canvas:e,alpha:!0,antialias:!0}),n=new bo;n.add(new As(16777215,10070664,1.9));let r=new Vs(16777215,2.2);r.position.set(2,4,3),n.add(r);let i=new Or(-1,1,1,-1,.1,50);Object.keys(V).forEach(r=>{let a=new Wn(Ql[r],Yl);n.add(a);let o=Hu(r).map(e=>{let t=new Wn(e.geo,e.mat);return n.add(t),t}),s=Ql[r].boundingBox,c=s.getCenter(new N),l=s.getSize(new N),u=Math.max(l.x,l.y,l.z)*.78+.08;i.left=-u,i.right=u,i.top=u,i.bottom=-u,i.updateProjectionMatrix(),i.position.set(c.x+5,c.y+4.4,c.z+6.5),i.lookAt(c),t.render(n,i),gd[r]=e.toDataURL(`image/png`),n.remove(a,...o)}),t.dispose()}var vd=[[`الأصلي`,null],[`أحمر`,15022139],[`برتقالي`,16747566],[`أصفر`,16765514],[`أخضر`,5223258],[`سماوي`,5224430],[`أزرق`,3827414],[`بنفسجي`,10186710],[`وردي`,15765430],[`أبيض`,16184042],[`بني`,10119999],[`رمادي`,9211033]],yd=e=>`#`+e.toString(16).padStart(6,`0`),bd=[`wallWhite`,`wallBrick`,`wallWood`,`wallStone`,`wallBarn`],xd=[[`gable`,`جملون`,`roofTop`],[`hip`,`هرمي`,`roofPeak`],[`shed`,`مائل`,`roof`],[`flat`,`مسطّح`,`roofEdge`],[`none`,`بلا سقف`,null]],Sd=[[`قرميد`,null,`#c8553d`],[`خشب`,10119999,`#9a6b3f`],[`أردواز`,7041664,`#6b7280`]],Cd=`flower`;function wd(e){Cd=e,Td()}function Td(){let e=X.mode===`paint`||X.mode===`room`||X.mode===`roof`;if(q(`tabs`).innerHTML=Fc.map(t=>`<button class="tab`+(t[0]===Cd&&!e&&X.mode!==`erase`?` on`:``)+`" data-cat="`+t[0]+`">`+t[1]+`</button>`).join(``),X.mode===`roof`){q(`items`).innerHTML=xd.map(e=>`<button class="item`+(e[2]?``:` swatch`)+(e[0]===X.roof.shape?` on`:``)+`" data-shape="`+e[0]+`">`+(e[2]?`<img alt="" src="`+gd[e[2]]+`">`:`<span class="dot none"></span>`)+`<span>`+e[1]+`</span></button>`).join(``)+Sd.map((e,t)=>`<button class="item swatch`+(e[1]===X.roof.color?` on`:``)+`" data-mat="`+t+`"><span class="dot" style="background:`+e[2]+`"></span><span>`+e[0]+`</span></button>`).join(``);return}if(X.mode===`room`){q(`items`).innerHTML=bd.map(e=>`<button class="item`+(e===X.room.wall&&!X.room.demolish?` on`:``)+`" data-wall="`+e+`"><img alt="" src="`+gd[e]+`"><span>`+V[e].name+`</span></button>`).join(``)+[[1,`طابق`],[2,`طابقان`],[3,`ثلاثة`]].map(e=>`<button class="item swatch`+(e[0]===X.room.storeys&&!X.room.demolish?` on`:``)+`" data-storeys="`+e[0]+`"><span class="dot num">`+e[0]+`</span><span>`+e[1]+`</span></button>`).join(``)+`<button class="item swatch`+(X.room.demolish?` on`:``)+`" data-demolish="1"><span class="dot none"></span><span>هدم</span></button>`;return}if(X.mode===`erase`){q(`items`).innerHTML=[[`pieces`,`القطع`,`chair`],[`floors`,`الأرضيات`,`plank`]].map(e=>`<button class="item`+(e[0]===`floors`===X.eraseFloors?` on`:``)+`" data-erase="`+e[0]+`"><img alt="" src="`+gd[e[2]]+`"><span>`+e[1]+`</span></button>`).join(``);return}if(e){q(`items`).innerHTML=vd.map(e=>`<button class="item swatch`+(e[1]===X.color?` on`:``)+`" data-c="`+(e[1]==null?``:e[1])+`"><span class="dot`+(e[1]==null?` none"`:`" style="background:`+yd(e[1])+`"`)+`></span><span>`+e[0]+`</span></button>`).join(``);return}document.querySelector(`.tab.on`)?.scrollIntoView({block:`nearest`,inline:`nearest`});let t=cd();q(`items`).innerHTML=Object.keys(V).filter(e=>V[e].cat===Cd&&!V[e].hidden).map(e=>{let n=V[e],r=!!n.stars&&t<n.stars;return`<button class="item`+(e===X.selected&&X.mode===`build`?` on`:``)+(r?` locked`:``)+`" data-t="`+e+`"><img alt="" src="`+gd[e]+`"><span>`+n.name+`</span>`+(r?`<span class="lock">`+n.stars+od+`</span>`:``)+`</button>`}).join(``)}function Ed(e){e!==`walk`&&W.fp&&(fm(!1),q(`fpBtn`).classList.remove(`on`)),X.mode=e,q(`tBuild`).classList.toggle(`on`,e===`build`),q(`tErase`).classList.toggle(`on`,e===`erase`),q(`tPaint`).classList.toggle(`on`,e===`paint`),q(`tTurn`).classList.toggle(`on`,e===`turn`),q(`tMove`).classList.toggle(`on`,e===`move`),q(`tSize`).classList.toggle(`on`,e===`size`),q(`tWalk`).classList.toggle(`on`,e===`walk`),q(`tRoom`).classList.toggle(`on`,e===`room`),q(`tRoof`).classList.toggle(`on`,e===`roof`),zu(null),Cu.visible=!1,Cu.scale.set(1,1,1),Td()}function Dd(){q(`tUndo`).disabled=!cl.length,q(`tRedo`).disabled=!ll.length}function Od(){pl()&&K.turn()}function kd(){ml()&&K.turn()}function Ad(){_d();let e=document.querySelector(`.palette`);new ResizeObserver(()=>document.documentElement.style.setProperty(`--pal`,e.offsetHeight+`px`)).observe(e),q(`tabs`).addEventListener(`click`,e=>{let t=e.target.closest(`.tab`);t&&((X.mode===`paint`||X.mode===`walk`||X.mode===`room`||X.mode===`roof`||X.mode===`erase`)&&(X.mode=`build`),wd(t.dataset.cat),Ed(X.mode),K.tick())}),q(`items`).addEventListener(`click`,e=>{let t=e.target.closest(`.item`);if(!t)return;if(t.dataset.shape){X.roof.shape=t.dataset.shape,Td(),K.tick();return}if(t.dataset.mat){X.roof.color=Sd[Number(t.dataset.mat)][1],Td(),K.tick();return}if(t.dataset.wall){X.room.wall=t.dataset.wall,X.room.demolish=!1,Td(),K.tick();return}if(t.dataset.storeys){X.room.storeys=Number(t.dataset.storeys),X.room.demolish=!1,Td(),K.tick();return}if(t.dataset.demolish){X.room.demolish=!0,Td(),K.tick(),J(`اضغطي على جدار الغرفة التي تريدين هدمها. الأثاث يبقى مكانه.`,4500);return}if(t.dataset.erase){X.eraseFloors=t.dataset.erase===`floors`,Td(),K.tick(),J(X.eraseFloors?`اضغطي على أرضية أو ممر لإزالته.`:`اضغطي على أي قطعة لإزالتها.`,3e3);return}if(t.dataset.c!==void 0){X.color=t.dataset.c===``?null:Number(t.dataset.c),Td(),K.tick();return}let n=t.dataset.t,r=V[n];r.stars&&cd()<r.stars?(K.no(),J(r.stars===1?`هذه القطعة تُفتح بعد أول نجمة.`:`هذه القطعة تُفتح عندما تجمعين `+r.stars+` نجوم.`)):(X.selected=n,Ed(`build`),K.tick())}),q(`tBuild`).onclick=()=>Ed(`build`),q(`tErase`).onclick=()=>{X.eraseFloors=!1,Ed(`erase`),J(`اضغطي على أي قطعة لإزالتها. الجدران والأرضيات لا تُمحى بالخطأ.`,4e3)},q(`tPaint`).onclick=()=>{Ed(`paint`),J(`اختاري لونًا ثم اضغطي على أي قطعة.`,3e3)},q(`tTurn`).onclick=()=>{Ed(`turn`),J(`اضغطي على أي قطعة لتدويرها.`,3e3)},q(`tMove`).onclick=()=>{Ed(`move`),J(`ضعي إصبعكِ على القطعة واسحبيها إلى مكانها الجديد.`,4e3)},q(`tSize`).onclick=()=>{Ed(`size`),J(`اضغطي على القطعة لتختاريها، ثم اسحبي إصبعكِ للأعلى لتكبيرها وللأسفل لتصغيرها.`,5e3)},q(`tWalk`).onclick=()=>{Ed(`walk`),J(`ضعي إصبعكِ على الشاشة لتمشي صديقتكِ نحوه. قاربكِ ينتظركِ عند الرصيف.`,5e3)},q(`tRoom`).onclick=()=>{X.room.demolish=!1,Ed(`room`),J(`اسحبي إصبعكِ على الأرض لترسمي غرفة.`,4e3)},q(`tRoof`).onclick=()=>{Ed(`roof`),J(`اختاري شكل السقف ثم اضغطي على البيت.`,4e3)},q(`tUndo`).onclick=Od,q(`tRedo`).onclick=kd,q(`makkoBtn`).onclick=dd,q(`missionBtn`).onclick=()=>{let e=q(`mission`).classList.toggle(`open`);q(`missionBtn`).setAttribute(`aria-expanded`,String(e))},q(`nightBtn`).onclick=()=>{G.night=!G.night,Pu(),Ol(),J(G.night?`حلّ الليل. الفوانيس تضيء الحديقة.`:`أشرقت الشمس من جديد.`,3e3)},q(`roofBtn`).onclick=()=>{W.hideRoofs=!W.hideRoofs,_u(),Cu.visible=!1,q(`roofBtn`).classList.toggle(`off`,W.hideRoofs),J(W.hideRoofs?`أخفيتُ الأسقف. الآن ترين داخل البيوت.`:`عادت الأسقف إلى مكانها.`,3e3)},q(`fpBtn`).onclick=()=>{let e=!W.fp;e&&Ed(`walk`),fm(e),q(`fpBtn`).classList.toggle(`on`,e),J(e?`أنتِ ترين الآن بعينَي صديقتكِ. اسحبي إصبعكِ لتنظري حولكِ، واضغطي على المكان الذي تريدين المشي إليه.`:`عدتِ إلى منظر الحديقة.`,e?7e3:3e3)},q(`soundBtn`).onclick=()=>{G.muted=!G.muted,q(`soundBtn`).classList.toggle(`off`,G.muted),Ol()},q(`resetBtn`).onclick=()=>q(`confirm`).classList.add(`open`),q(`confirmNo`).onclick=()=>q(`confirm`).classList.remove(`open`),q(`confirmYes`).onclick=()=>{q(`confirm`).classList.remove(`open`),hl(al()),J(`حديقة جديدة جاهزة!`)},q(`confirmEmpty`).onclick=()=>{q(`confirm`).classList.remove(`open`),hl([]),J(`أرض فارغة! ابني ما تحبين.`)},q(`winBtn`).onclick=()=>{q(`win`).classList.remove(`open`),Ol()},q(`startBtn`).onclick=()=>{K.star(),q(`intro`).classList.remove(`open`),G.seenIntro=!0,Ol(),J(`مرحبًا! أنا مكّو. هيا نملأ الحديقة بالزهور.`,6e3)}}var jd=-.45,Md=3.1,Nd={x0:15,x1:17,z0:32,z1:43},Pd={x:18.4,z:40.6,a:0},Fd={x:16.45,z:40.6},Id={x:13.6,z:40.6,a:0},Ld={x:15.55,z:40.6},Rd=[{x:0,z:0}],zd=()=>{let e=0;for(let t of Rd)for(let n of Rd)e=Math.max(e,Math.abs(t.x-n.x),Math.abs(t.z-n.z));return e},Bd=(e,t)=>Math.hypot(Math.max(-e,0,e-32),Math.max(-t,0,t-32)),Vd=e=>e<=0?0:e<=3?-.06-.1*e:-.36-.25*(e-3),Hd=(e,t)=>e>=Nd.x0&&e<=Nd.x1&&t>=Nd.z0&&t<=Nd.z1,Ud=(e,t)=>Bd(e,t)<=Md||Hd(e,t),Wd=(e,t)=>Hd(e,t)?0:Vd(Bd(e,t)),Gd=0;function Kd(e,t){let n=e-16,r=t-16;return .07*Math.sin(.35*n+1.1*Gd)+.05*Math.sin(.27*r-.8*Gd+1.3)+.03*Math.sin(.6*(n+r)+1.7*Gd)}var qd=(e,t,n,r,i,a,o)=>I(e,t,n,r,i,a+.5,o),Jd=240,Yd=100,Xd=Jd/Yd,Zd={value:0},Qd={value:new O},$d={value:[0,1,2,3].map(()=>new O(9999,9999))},ef={value:1},tf=new Wn(new vr(Jd,Jd,Yd,Yd).rotateX(-Math.PI/2),new ps({color:16777215,transparent:!0,flatShading:!0,shininess:70,specular:10476799}));tf.material.onBeforeCompile=e=>{Object.assign(e.uniforms,{uTime:Zd,uOrigin:Qd,uIsl:$d,uCount:ef}),e.vertexShader=`uniform float uTime;
uniform vec2 uOrigin;
uniform vec2 uIsl[4];
uniform int uCount;
varying float vD;
float swell(vec2 p, float t) { return .07 * sin(.35 * p.x + 1.1 * t) + .05 * sin(.27 * p.y - .8 * t + 1.3) + .03 * sin(.6 * (p.x + p.y) + 1.7 * t); }
`+e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
    vec2 gp = transformed.xz + uOrigin;            // garden cells
    // the swell fades out towards the edge of the patch, where it meets the flat far sea
    transformed.y += swell(gp - vec2(16.0), uTime) * (1.0 - smoothstep(${Jd/2-30}.0, ${Jd/2-6}.0, max(abs(transformed.x), abs(transformed.z))));
    vD = 999.0;
    for (int i = 0; i < 4; i++) {
      if (i >= uCount) break;
      vec2 q = gp - uIsl[i];
      vD = min(vD, length(max(max(-q, vec2(0.0)), q - vec2(32.0))));
    }`),e.fragmentShader=`uniform float uTime;
varying float vD;
`+e.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>
    float shallow = 1.0 - smoothstep(3.0, 14.0, vD);
    diffuseColor.rgb = mix(vec3(.023, .212, .552), vec3(.115, .672, .716), shallow);
    float foam = (1.0 - smoothstep(0.0, .45, abs(vD - (3.45 + .18 * sin(uTime * 1.3))))) * .8;
    diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), foam);
    diffuseColor.a = max(mix(.93, .6, shallow), foam);`)},tf.renderOrder=1,Gl.add(tf);var nf=new Wn(new fs(Jd/2-8,1e3,64,1),new ms({color:2785220}));nf.rotation.x=-Math.PI/2,Gl.add(nf);var rf=new Wn(new vr(280,280),new ms({color:1925014}));rf.rotation.x=-Math.PI/2,Gl.add(rf);var af=12157520,of=11039807,sf=8016434,cf=null,lf=null;function uf(){let e=new vr(50,50,50,50);e.rotateX(-Math.PI/2),e.translate(16,0,16);let t=e.attributes.position,n=new Float32Array(t.count*3),r=new P;for(let e=0;e<t.count;e++){let i=t.getX(e),a=t.getZ(e),o=Bd(i,a);t.setY(e,o<=0?-.07:Vd(o));let s=(Math.round(i)*7+Math.round(a)*13)%5*.012;r.set(o<2.2?15983017:o<3.4?14467463:15258781).offsetHSL(0,0,s-.024),n[e*3]=r.r,n[e*3+1]=r.g,n[e*3+2]=r.b}return e.setAttribute(`color`,new hn(n,3)),e.computeVertexNormals(),e.userData.shared=!0,e}function df(){let e=[];for(let t=Nd.z0+.25,n=0;t<Nd.z1;t+=.5,n++)e.push(qd(2.1,.12,.44,n%2?af:of,16,-.12,t));e.push(qd(.16,.16,Nd.z1-Nd.z0,sf,15.15,-.28,(Nd.z0+Nd.z1)/2),qd(.16,.16,Nd.z1-Nd.z0,sf,16.85,-.28,(Nd.z0+Nd.z1)/2));for(let t=Nd.z0+2;t<=Nd.z1;t+=2.5)e.push(qd(.24,3.25,.24,sf,14.98,-3,t),qd(.24,3.25,.24,sf,17.02,-3,t));e.push(qd(.3,.4,.3,sf,16.82,0,Nd.z1-.35),qd(.3,.4,.3,sf,15.18,0,Nd.z1-.35));let t=Wd(14.4,33.2);e.push(qd(.12,4.2,.12,16052714,14.4,t,33.2),qd(.26,.1,.26,16761390,14.4,t+4.2,33.2));let n=L(e);return n.userData.shared=!0,n}var ff={x:14.4,z:33.2},pf=Wd(ff.x,ff.z)+3.25,mf=Wd(ff.x,ff.z)+.9,hf=e=>L([qd(1.3,.8,.05,e,.65,0,0),qd(.36,.36,.07,16777215,.65,.22,0)]),gf=null;function _f(){let e=Id.z,t=L([qd(.14,1.25,.14,16052714,14.98,0,e),qd(.08,.55,.9,14829407,14.96,.9,e),qd(.1,.12,.62,16777215,14.950000000000001,1.11,e)]);return t.userData.shared=!0,t}function vf(e,t){let n=new Wn(cf||=uf(),new ms({vertexColors:!0}));n.receiveShadow=!0;let r=new Wn(lf||=df(),Yl);r.castShadow=r.receiveShadow=!0;let i=new Wn(hf(t),Yl);i.castShadow=!0,i.position.set(ff.x,pf,ff.z);let a=new Wn(Tf(t),Yl);a.castShadow=!0,a.position.set(Pd.x,-.4,Pd.z),a.rotation.y=Pd.a;let o=new Wn(gf||=_f(),Yl);return o.visible=!1,o.castShadow=!0,e.add(n,r,i,a,o),{group:e,flag:i,boat:a,sign:o,color:t}}function yf(e,t){e.color!==t&&(e.color=t,e.flag.geometry.dispose(),e.flag.geometry=hf(t),e.boat.geometry.dispose(),e.boat.geometry=Tf(t))}var bf=(e,t)=>{e.flag.userData.up=t},xf=[];function Sf(e){xf.length=0,xf.push(...e)}var Cf=5220576,wf=16777215;function Tf(e){let t=[];t.push(qd(1,.2,2.6,wf,0,-.3,0)),t.push(qd(.14,.55,2.8,Cf,.62,-.25,0),qd(.14,.55,2.8,Cf,-.62,-.25,0)),t.push(qd(1.38,.55,.14,Cf,0,-.25,-1.4)),t.push(qd(1,.55,.3,Cf,0,-.25,1.5),qd(.62,.55,.3,Cf,0,-.25,1.78),qd(.26,.5,.26,Cf,0,-.2,2)),t.push(qd(.16,.08,2.84,wf,.63,.22,0),qd(.16,.08,2.84,wf,-.63,.22,0)),t.push(qd(1.1,.08,.4,af,0,-.02,-1.05)),t.push(qd(1,.05,2.4,of,0,-.11,0)),t.push(qd(.1,3.1,.1,af,0,-.1,.45)),t.push(qd(.07,.07,1.8,af,0,.42,-.45));for(let n=0;n<8;n++){let r=1.7*(1-n/8.5);t.push(qd(.05,.33,r,e,0,.5+n*.32,.4-r/2))}return t.push(qd(.03,.2,.36,16761390,0,2.82,.27)),L(t)}var Ef=new fo;Gl.add(Ef);var Df=vf(Ef,16740261);Df.flag.userData.up=!0;var Y={x:Pd.x,z:Pd.z,a:Pd.a,v:0,y:jd,docking:!1,mesh:Df.boat,berth:Pd},Of=new Wn(Tf(16740261),Yl);Of.castShadow=!0,Of.visible=!1,Of.position.set(Pd.x,-.4,Pd.z),Ef.add(Of);function kf(e){Rd=e.length?e:[{x:0,z:0}],ef.value=Math.min(4,Rd.length),Rd.slice(0,4).forEach((e,t)=>$d.value[t].set(e.x,e.z))}var Af=5.2,jf=1.7,Mf=e=>((e+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,Nf=40;function Pf(e,t){let n=1/0,r=-1/0,i=1/0,a=-1/0;for(let o of Rd){let s=e-o.x,c=t-o.z;if(Bd(s,c)<5.3||s>=Nd.x0-.9&&s<=Nd.x1+.9&&c>=Nd.z0&&c<=Nd.z1+.9)return!1;n=Math.min(n,o.x),r=Math.max(r,o.x+32),i=Math.min(i,o.z),a=Math.max(a,o.z+32)}return e>=n-Nf&&e<=r+Nf&&t>=i-Nf&&t<=a+Nf}var Ff=(e,t,n)=>Pf(e,t)&&Pf(e+Math.sin(n)*1.7,t+Math.cos(n)*1.7)&&Pf(e-Math.sin(n)*1.4,t-Math.cos(n)*1.4);function If(e,t,n,r,i,a,o,s){let c=0,l=1,u=n-e,d=r-t;for(let[n,r]of[[-u,e-i],[u,o-e],[-d,t-a],[d,s-t]]){if(n===0){if(r<0)return!1;continue}let e=r/n;if(n<0){if(e>l)return!1;e>c&&(c=e)}else{if(e<c)return!1;e<l&&(l=e)}}return!0}function Lf(){let e=[];for(let t of Rd)e.push({r:[t.x-5,t.z-5,t.x+32+5,t.z+32+5],cs:[[t.x-10,t.z-10],[t.x+32+10,t.z-10],[t.x-10,t.z+32+16],[t.x+32+10,t.z+32+16]]}),e.push({r:[t.x+Nd.x0-.9,t.z+Nd.z0,t.x+Nd.x1+.9,t.z+Nd.z1+.9],cs:[[t.x+Nd.x0-3.5,t.z+Nd.z1+4],[t.x+Nd.x1+3.5,t.z+Nd.z1+4]]});return e}function Rf(e,t,n=0){if(n===0)for(let n=0;n<Rd.length;n++){let r=Rd[n],i=e-r.x,a=t-r.z;if(Bd(i,a)<6||i>Nd.x0-2&&i<Nd.x1+2&&a>Nd.z0&&a<Nd.z1+2){let i=n===0?Y.berth:Id;e=r.x+i.x,t=r.z+i.z;break}}if(n>4)return[e,t,n===0];for(let r of Lf()){let[i,a,o,s]=r.r;if(!If(Y.x,Y.z,e,t,i,a,o,s))continue;let c=r.cs.filter(n=>Math.hypot(n[0]-Y.x,n[1]-Y.z)>2.5&&Math.hypot(n[0]-e,n[1]-t)>1),l=c.filter(n=>!If(n[0],n[1],e,t,i,a,o,s)),u=c[0],d=1/0;for(let n of l.length?l:c){let r=Math.hypot(n[0]-Y.x,n[1]-Y.z)+Math.hypot(e-n[0],t-n[1]);r<d&&(d=r,u=n)}return u?Rf(u[0],u[1],n+1):[e,t,n===0]}return[e,t,n===0]}function zf(e,t,n){Y.docking=!1;let r=0;if(t!=null){let i=Rf(t,n);t=i[0],n=i[1];let a=t-Y.x,o=n-Y.z,s=Math.hypot(a,o);if(s>1.2){let t=Mf(Math.atan2(a,o)-Y.a),n=Y.a+Math.sign(t)*Math.min(Math.abs(t),jf*e);Ff(Y.x,Y.z,n)&&(Y.a=n),r=Af*(i[2]?Math.min(1,s/6):1)*Math.max(.25,Math.cos(t))}}if(Y.v+=(r-Y.v)*Math.min(1,e*(r>Y.v?1.2:.8)),Y.v<.01)return!0;let i=Y.x+Math.sin(Y.a)*Y.v*e,a=Y.z+Math.cos(Y.a)*Y.v*e;return Ff(i,a,Y.a)?(Y.x=i,Y.z=a,!0):Ff(i,Y.z,Y.a)?(Y.x=i,Y.v*=.92,!0):Ff(Y.x,a,Y.a)?(Y.z=a,Y.v*=.92,!0):(Y.v=0,!1)}var Bf=()=>Math.hypot(Y.x-Y.berth.x,Y.z-Y.berth.z)<5.5;function Vf(e,t,n,r){Ll||(Gd+=e,Zd.value=Gd),tf.position.set(Math.round(n/Xd)*Xd,jd,Math.round(r/Xd)*Xd),Qd.value.set(tf.position.x,tf.position.z),nf.position.set(tf.position.x,-.46,tf.position.z),rf.position.set(tf.position.x,-3,tf.position.z);for(let n of xf){let r=n.flag.userData.up===!1?mf:pf;n.flag.position.y+=(r-n.flag.position.y)*Math.min(1,e*1.5),n.flag.rotation.y=Ll?0:Math.sin(t*.002+n.group.position.x)*.25}if(Y.docking){let t=Math.min(1,e*3),n=Y.berth;Y.x+=(n.x-Y.x)*t,Y.z+=(n.z-Y.z)*t,Y.a+=Mf(n.a-Y.a)*t,Y.v=0}let i=Math.sin(Y.a),a=Math.cos(Y.a);Y.y=jd+Kd(Y.x,Y.z)+.05,Y.mesh.position.set(Y.x,Y.y,Y.z),Y.mesh.rotation.set((Kd(Y.x-i,Y.z-a)-Kd(Y.x+i,Y.z+a))*.35,Y.a,(Kd(Y.x+a*.6,Y.z-i*.6)-Kd(Y.x-a*.6,Y.z+i*.6))*.4,`YXZ`)}Sf([Df]);var Hf=15911328,Uf=5913122,Wf=14829439,Gf=13187694,Kf=6963110,qf=2826560,Jf=3.4,Yf=.27,Xf=1.65,Zf=1.24;function Qf(e,t){let n=L(e);n.translate(0,.5-t,0);let r=new Wn(n,Yl);return r.position.y=-.5+t,r.castShadow=!0,r}var $f=new fo,ep=(e,t)=>Math.round((e>>16&255)*t)<<16|Math.round((e>>8&255)*t)<<8|Math.round((e&255)*t),tp=(e,t)=>L([I(.3,.28,.2,e,0,.22,0),I(.38,.12,.26,t,0,.2,0),I(.28,.26,.26,Hf,0,.5,0),I(.3,.08,.28,Uf,0,.74,0),I(.3,.24,.06,Uf,0,.52,-.13),I(.08,.2,.08,Uf,.19,.46,-.02),I(.08,.2,.08,Uf,-.19,.46,-.02),I(.08,.06,.06,16761390,.19,.66,-.02),I(.08,.06,.06,16761390,-.19,.66,-.02),I(.04,.05,.02,qf,.07,.6,.135),I(.04,.05,.02,qf,-.07,.6,.135),I(.1,.02,.02,13195340,0,.54,.135)]),np=new Wn(tp(Wf,Gf),Yl);np.castShadow=!0;function rp(e,t){let n=e.children[0],r=n.geometry;n.geometry=t==null?tp(Wf,Gf):tp(t,ep(t,.82)),r.dressed&&r.dispose(),n.geometry.dressed=!0}var ip=e=>rp($f,e),ap=e=>Qf([I(.1,.22,.1,Hf,e,0,0),I(.12,.06,.16,Kf,e,0,.02)],.24),op=e=>Qf([I(.08,.24,.08,Hf,e,.24,0)],.48),sp=ap(.08),cp=ap(-.08),lp=op(.2),up=op(-.2);$f.add(np,sp,cp,lp,up),$f.scale.setScalar(Xf);var dp=15.5,fp=20.5,pp=0,mp=0,hp=0,gp=0,_p=!1,vp=0,yp=null,bp=new N,xp=e=>!e||!!V[e.t].flat||V[e.t].cat===`flower`||!!V[e.t].door||!!V[e.t].thin,Sp=(e,t,n)=>Jc(e,t,n)?xp(H.get(U(e,t,n))):t>=0&&t<2&&Ud(e+.5,n+.5),Cp=(e,t,n)=>Sp(e,t,n)&&(t+1>=16||Sp(e,t+1,n)),wp=(e,t,n)=>{if(t===0)return!0;let r=H.get(U(e,t-1,n));return!!r&&zc(r.t)},Tp=(e,t)=>[[e-Yf,t-Yf],[e+Yf,t-Yf],[e-Yf,t+Yf],[e+Yf,t+Yf]].map(e=>[Math.floor(e[0]),Math.floor(e[1])]),Ep=(e,t,n)=>Tp(e,t).every(e=>Cp(e[0],n,e[1])),Dp=(e,t,n)=>Tp(e,t).some(e=>wp(e[0],n,e[1]));function Op(e,t){if(Math.abs(e)+Math.abs(t)<1e-5)return!1;let n=dp+e,r=fp+t;if(Ep(n,r,pp)){let e=pp;for(;e>0&&!Dp(n,r,e);){if(!Ep(n,r,e-1))return!1;e--}return dp=n,fp=r,pp=e,!0}return Ep(n,r,pp+1)&&Ep(dp,fp,pp+1)&&Dp(n,r,pp+1)?(dp=n,fp=r,pp++,!0):!1}function kp(){let e=[Math.floor(dp),pp,Math.floor(fp)],t=1/0;for(let n=0;n<16;n++)for(let r=0;r<32;r++)for(let i=0;i<32;i++){if(!Cp(r,n,i)||!wp(r,n,i))continue;let a=(r+.5-dp)**2+(i+.5-fp)**2+((n-pp)*2)**2;a<t&&(t=a,e=[r,n,i])}return e}function Ap(){if(!_p){if(Ep(dp,fp,pp))for(;pp>0&&!Dp(dp,fp,pp)&&Ep(dp,fp,pp-1);)pp--;if(!Ep(dp,fp,pp)||!Dp(dp,fp,pp)){let e=kp();dp=e[0]+.5,pp=e[1],fp=e[2]+.5}}}function jp(e,t){yp={x:e,y:t}}function Mp(){yp&&(yp=null,G.hero=_p?[Fd.x,0,Fd.z]:[dp,pp,fp],Ol())}function Np(){let e=G.hero;Array.isArray(e)&&e.length===3&&e.every(e=>typeof e==`number`)&&(dp=Number.isInteger(e[0])?e[0]+.5:e[0],pp=Math.round(e[1]),fp=Number.isInteger(e[2])?e[2]+.5:e[2]),Gl.add($f),Ap(),mp=pp,$f.position.set(dp,pp+.5*Xf,fp)}function Pp(e,t){let n=!1;if(yp&&X.mode!==`walk`&&Mp(),W.fp||(Lp=null,Rp=-.05),Wp.ui(),_p){Yp(e,t);return}if(Lp){let t=Lp.x-dp,r=Lp.z-fp,i=Math.hypot(t,r);if(i<.25||zp>20||--Lp.left<0)Lp=null;else{let a=((Math.atan2(t,r)-hp+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;hp+=a*Math.min(1,e*4);let o=Math.min(i,Jf*.8*e);t*=o/i,r*=o/i,n=Op(t,r)||Op(t,0)||Op(0,r),zp=n?0:zp+1}Z.target.lerp(bp.set(dp-16,pp,fp-16),Math.min(1,e*3))}if(Bp.visible=!!Lp,Lp&&Bp.position.set(Lp.x,pp+.03,Lp.z),yp&&!W.fp){let t=id(yp.x,yp.y,pp);if(t){let r=t[0]-dp,i=t[1]-fp,a=Math.hypot(r,i);if(a>.2){hp=Math.atan2(r,i);let t=Math.min(a-.1,Jf*e*Math.min(1,.35+a/2));r*=t/a,i*=t/a,n=Op(r,i)||Op(r,0)||Op(0,i)}}Z.target.lerp(bp.set(dp-16,pp,fp-16),Math.min(1,e*3))}mp+=(pp-mp)*Math.min(1,e*14),gp+=((pp===0?Wd(dp,fp):0)-gp)*Math.min(1,e*14),$f.position.set(dp,mp+gp+.5*Xf,fp),$f.rotation.x=0,$f.visible=!W.fp,Fp=n&&!Ll?Math.sin(t*.011)*.03:0;let r=((hp-$f.rotation.y+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI;$f.rotation.y+=r*Math.min(1,e*12);let i=n&&!Ll?Math.sin(t*.011)*.7:0;sp.rotation.x=i,cp.rotation.x=-i,lp.rotation.x=-i*.8,up.rotation.x=i*.8}var Fp=0,Ip=()=>({x:dp,y:mp+gp+Zf+Fp,z:fp,f:hp,p:Rp}),Lp=null,Rp=-.05,zp=0,Bp=new Wn(new os(.22,.22,.03,16),new fn({color:16761390,transparent:!0,opacity:.75}));Bp.visible=!1,Gl.add(Bp);function Vp(e,t){hp-=e*.006,Rp=Math.max(-.7,Math.min(.5,Rp-t*.004))}function Hp(e,t){let n=id(e,t,_p?jd:pp);if(n&&Math.hypot(n[0]-dp,n[1]-fp)<(_p?40:12))Lp={x:n[0],z:n[1],left:600};else{let t=Rl.getBoundingClientRect(),n=hp-((e-t.left)/t.width-.5)*1.1;Lp={x:dp+Math.sin(n)*6,z:fp+Math.cos(n)*6,left:600}}zp=0}var Up=()=>[dp,pp,fp],Wp={ui:()=>{},bumped:()=>{J(`أوصلي القارب إلى الرصيف لتنزلي.`,3500)}},Gp=(e=Fd)=>!_p&&pp===0&&Hd(dp,fp)&&Math.hypot(dp-e.x,fp-e.z)<2.4;function Kp(e){_p=!0,yp=null,Lp=null,Y.v=0,Y.docking=!1,e||(K.tick(),J(`ضعي إصبعكِ على الماء ليبحر القارب نحوه.`,4e3))}function qp(e=Fd){_p=!1,yp=null,Lp=null,Y.docking=!0,K.tick(),dp=e.x,fp=e.z,pp=0,mp=0,gp=0,hp=Math.PI,G.hero=[dp,pp,fp],Ol()}var Jp=()=>({x:dp,y:mp+gp,z:fp,f:hp,walking:!!yp||!!Lp});function Yp(e,t){let n=null,r=0;if(yp&&!W.fp){let e=id(yp.x,yp.y,jd);e&&(n=e[0],r=e[1])}else Lp&&(n=Lp.x,r=Lp.z,(Math.hypot(n-Y.x,r-Y.z)<1.5||--Lp.left<0)&&(Lp=null));!zf(e,n,r)&&n!=null&&!Bf()&&t-vp>12e3&&(vp=t,Wp.bumped()),dp=Y.x+Math.sin(Y.a)*1.02,fp=Y.z+Math.cos(Y.a)*1.02,pp=0,mp=0,gp=Y.y-.12,hp=Y.a,$f.position.set(dp,gp+.5*Xf,fp),$f.visible=!W.fp,$f.rotation.y=Y.a,$f.rotation.x=Y.mesh.rotation.x,Fp=0,sp.rotation.x=cp.rotation.x=lp.rotation.x=up.rotation.x=0,Bp.visible=!1,Z.target.lerp(bp.set(Y.x-16,0,Y.z-16),Math.min(1,e*3))}var Xp=()=>_p?400:28+Math.max(0,...Rd.map(e=>Math.max(Math.abs(e.x),Math.abs(e.z)))),Zp=()=>_p,Qp=()=>{let e=$f.clone(!0);return e.rotation.set(0,0,0),e.visible=!0,e},$p=.5*Xf,X={sel:null,mode:`build`,selected:`rose`,color:15022139,room:{wall:`wallWhite`,storeys:1,demolish:!1},eraseFloors:!1,roof:{shape:`gable`,color:null}};function em(e,t){if(e.ground)return null;let n=V[t],r=Qc(t)[1],i=e.normal,[a,o,s]=e.cell,c,l=(e,t)=>{let n=H.get(U(e,o,t));return Jc(e,o,t)&&!!n&&zc(n.t)};c=i&&i[1]===0?i[2]===1?0:i[0]===1?2:i[2]===-1?4:6:l(a-1,s)||l(a+1,s)?0:2;let u=o%3,d=e=>{if(e<0)return!1;let t=H.get(U(a,e,s));return!!t&&(Gc(t.t)||!!n.opening&&!!V[t.t].opening)};r===2?n.door||d(o-u)&&d(o-u+1)?o-=u:u===2&&--o:t!==`winRound`&&u!==1&&d(o-u+1)&&(o=o-u+1);let f=[];for(let e of tl(a,o,s,t,c)){if(!Jc(e[0],e[1],e[2]))return null;let t=U(e[0],e[1],e[2]);if(!H.has(t))continue;let n=nl(t),r=V[H.get(n).t];if(r.cat!==`cube`&&r.cat!==`wall`&&!r.opening)return null;for(let e of rl(n))f.includes(e)||f.push(e)}let p=e.v,m=V[p.t],h=p.c==null?Gc(p.t)&&p.t!==`white`&&p.t!==`wallWhite`?m.color:void 0:p.c;return{keys:f,place:{x:a,y:o,z:s,t,r:c,c:h}}}function tm(e){let t=H.get(e),n=qc(e),r=il(rl(e),{x:n[0],y:n[1],z:n[2],t:t.t,r:((t.r||0)+$c(t.t))%8,c:t.c,o:t.o,s:t.s});r?fl(r)&&K.turn():(K.no(),J(`لا يوجد مكان كافٍ للتدوير هنا.`))}function nm(e,t,n,r,i,a){let o=Math.floor(e),s=Math.floor(n),c=e-o-.5,l=n-s-.5,u=(e,n)=>{if(!Jc(e,t,n))return!0;let r=U(e,t,n),i=H.get(r);return!!i&&!a.includes(r)&&!V[i.t].flat},d=tl(o,t,s,r,i),f=(e,t)=>d.some(n=>n[0]===e&&n[2]===t);for(let e of d)c>0&&!f(e[0]+1,e[2])&&u(e[0]+1,e[2])&&(c=0),c<0&&!f(e[0]-1,e[2])&&u(e[0]-1,e[2])&&(c=0),l>0&&!f(e[0],e[2]+1)&&u(e[0],e[2]+1)&&(l=0),l<0&&!f(e[0],e[2]-1)&&u(e[0],e[2]-1)&&(l=0);return{x:o,z:s,o:[Math.round(c*100)/100,Math.round(l*100)/100]}}function rm(e){return e.ground?0:zc(e.v.t)?e.normal&&e.normal[1]===1&&e.cell[1]+1<16?e.cell[1]+1:null:qc(e.k)[1]}function im(e,t,n,r=0,i=0){let a=H.get(n);if(!a)return null;let o=V[a.t],s=qc(n),c=rl(n),l=W.hidden.has(n);W.hidden.add(n);let u=nd(e,t);if(l||W.hidden.delete(n),!u)return null;if(o.opening&&!u.ground&&zc(u.v.t)){let e=em(u,a.t);if(!e)return{cells:[u.cell],op:null,same:!1};let t=e.place,n=tl(t.x,t.y,t.z,t.t,t.r),r=t.x===s[0]&&t.y===s[1]&&t.z===s[2]&&t.r===a.r,i=il([...new Set([...c,...e.keys])],t);if(i){let e=vl(c)||{t:`wallWhite`,r:0,c:a.c};for(let t of i)!t.b&&c.includes(t.k)&&(t.b={...e})}return{cells:n,op:i,same:r}}let d=Kc(a.t)&&!o.hang?rm(u):null,f=d==null?null:id(e,t,d);if(d!=null&&f){let e=f[0]+r,t=f[1]+i;if(e<0||e>=32||t<0||t>=32)return null;let n=nm(e,d,t,a.t,a.r,c),o=d>0?H.get(U(n.x,d-1,n.z)):void 0,s=tl(n.x,d,n.z,a.t,a.r).filter(e=>Jc(e[0],e[1],e[2])),l=d===0||o&&zc(o.t)?il(c,{x:n.x,y:d,z:n.z,t:a.t,r:a.r,c:a.c,o:n.o,s:a.s}):null;return{cells:s,op:l,same:!1,at:l?[n.x+.5+n.o[0],d,n.z+.5+n.o[1]]:[e,d,t]}}let p=rd(u,a.t);if(!p||`err`in p)return{cells:[u.cell],op:null,same:!1};let[m,h,g]=p.cell,_=!0;if(o.hang){for(_=!1;h<15;h++){let e=H.get(U(m,h+1,g));if(e&&zc(e.t)){_=!0;break}}_||(h=p.cell[1])}let v=tl(m,h,g,a.t,a.r).filter(e=>Jc(e[0],e[1],e[2])),y=m===s[0]&&h===s[1]&&g===s[2];return{cells:v,op:_?il(c,{x:m,y:h,z:g,t:a.t,r:a.r,c:a.c,s:a.s}):null,same:y}}function am(e,t){let n=H.get(t);if(n&&e&&e.at&&(W.drag={k:t,x:e.at[0],y:e.at[1],z:e.at[2]},Yc.add(n.t),e.op)||!e||!e.cells.length){Cu.visible=!1;return}let r=[1e9,1e9,1e9],i=[-1e9,-1e9,-1e9];for(let t of e.cells)for(let e=0;e<3;e++)r[e]=Math.min(r[e],t[e]),i[e]=Math.max(i[e],t[e]+1);Cu.position.set((r[0]+i[0])/2,(r[1]+i[1])/2,(r[2]+i[2])/2),Cu.scale.set(i[0]-r[0],i[1]-r[1],i[2]-r[2]),Cu.material.color.set(e.op?7331978:16731501),Cu.visible=!0}function om(e,t,n,r,i=0,a=0){if(Cu.visible=!1,Cu.scale.set(1,1,1),W.drag){let e=H.get(W.drag.k);e&&Yc.add(e.t),W.drag=null}if(!r)return;let o=im(t,n,e,i,a),s=H.get(e);o&&s&&!o.same&&(o.op?fl(o.op)&&K.place(s.t):(K.no(),J(`لا يوجد مكان كافٍ هنا. جرّبي مكانًا آخر.`,3e3)))}var sm=e=>Math.round(Math.max(Vc,Math.min(Hc,e))*100)/100,cm=(e,t,n)=>sm(e*Math.exp((Math.abs(n)>=Math.abs(t)?-n:t)*.007));function lm(e,t){W.sizing={k:e,s:t};let n=H.get(e);n&&Yc.add(n.t)}function um(e,t){let n=H.get(e);if(W.sizing=null,n&&Yc.add(n.t),!n||t==null||t===(n.s||1))return;let r=qc(e),i=il(rl(e),{x:r[0],y:r[1],z:r[2],t:n.t,r:n.r,c:n.c,o:n.o,s:t});i&&fl(i)&&K.turn()}function dm(e,t){let n=nd(e,t);if(!n)return;if(X.mode===`size`){if(n.ground){X.sel=null;return}if(!Uc(n.v.t)){K.no(),J(`المكعبات والنوافذ والأبواب والأرضيات والأسقف لا يتغيّر حجمها.`,3500);return}X.sel=n.k,K.tick(),J(`اخترتِ هذه القطعة. اسحبي إصبعكِ الآن في أي مكان: للأعلى تكبر، وللأسفل تصغر.`,5e3);return}if(X.mode===`room`&&X.room.demolish){let e=n.ground?null:yl(n.k);if(!e){K.no(),J(`اضغطي على جدار الغرفة التي تريدين هدمها.`,3e3);return}fl(e)&&(K.remove(),J(`هدمتِ الغرفة. زر «تراجع» يعيدها كما كانت.`,4e3));return}if(X.mode===`walk`||X.mode===`room`||X.mode===`move`)return;if(X.mode===`roof`){let e=n.ground?null:_l(n.cell[0],n.cell[1],n.cell[2],X.roof.shape,X.roof.color==null?void 0:X.roof.color);if(!e){K.no(),J(n.ground?`اضغطي على جدار البيت لأضع له سقفًا.`:X.roof.shape===`none`?`لا يوجد سقف هنا.`:`لا يوجد مكان لسقف فوق هذا الجدار.`);return}fl(e)&&(X.roof.shape===`none`?K.remove():K.place(`roof`));return}if(X.mode===`erase`){if(n.ground)return;let e=V[n.v.t];if(X.eraseFloors){if(!e.flat){K.no(),J(`ممحاة الأرضيات تزيل الأرضيات والممرات فقط.`,3e3);return}fl(il([n.k],null))&&K.remove();return}if(Wc(n.v.t)){K.no(),J(e.flat?`الأرضيات لا تُمحى هنا. لإزالتها اختاري «الأرضيات» من الشريط السفلي.`:e.roof?`لإزالة السقف اختاري أداة السقف ثم «بلا سقف».`:`الجدران لا تُمحى. لهدم غرفة اختاري أداة الغرفة ثم «هدم».`,4500);return}let t=rl(n.k),r=t.slice();for(let e of r.slice()){let t=qc(e);if(t[1]+1>=16)continue;let n=U(t[0],t[1]+1,t[2]),i=H.get(n);if(i&&!zc(i.t))for(let e of rl(nl(n)))r.includes(e)||r.push(e)}let i=il(r,null);if(e.opening){let e=vl(t);if(e)for(let n of i)t.includes(n.k)&&(n.b={...e})}fl(i)&&K.remove();return}if(X.mode===`paint`){if(n.ground)return;let e=X.color==null?void 0:X.color;if(n.v.c===e)return;let t=qc(n.k);fl(il(rl(n.k),{x:t[0],y:t[1],z:t[2],t:n.v.t,r:n.v.r,c:e,o:n.v.o,s:n.v.s}))&&K.turn();return}if(X.mode===`turn`){n.ground||tm(n.k);return}let r=X.selected;if(r===`skylight`&&!n.ground&&n.v.t===`roof`){let e=qc(n.k);fl(il(rl(n.k),{x:e[0],y:e[1],z:e[2],t:r,r:n.v.r,c:n.v.c}))&&K.place(r);return}if(V[r].hang){let e=!n.ground&&zc(n.v.t)?n.normal:null,t=n.cell[0]+(e?e[0]:0),i=n.cell[2]+(e?e[2]:0),a=n.cell[1]+(e?e[1]:0),o=!1;for(;a>=0&&a<15&&Jc(t,a,i);a++){let e=H.get(U(t,a+1,i));if(e&&zc(e.t)){o=!0;break}}let s=o&&!H.has(U(t,a,i))?il([],{x:t,y:a,z:i,t:r,r:0}):null;if(!s){K.no(),J(`المصباح السقفي يحتاج سقفًا فوقه.`);return}fl(s)&&K.place(r);return}if(V[r].opening&&!n.ground&&zc(n.v.t)){let e=em(n,r),t=e&&il(e.keys,e.place);if(!t){K.no(),J(`لا يتسع هذا هنا. جرّبي جدارًا أوسع.`);return}fl(t)&&K.place(r);return}let i=rd(n,r);if(!i)return;if(`err`in i){K.no(),J(i.err===`high`?`وصلتِ إلى أعلى ارتفاع. ابني بجانبه.`:i.err===`edge`?`هنا نهاية الأرض. جرّبي مكانًا داخلها.`:`الزهور والزينة تحتاج أرضًا أو مكعبًا تحتها.`);return}let a=U(i.cell[0],i.cell[1],i.cell[2]),o=H.get(a)||null;if(i.act===`turn`&&o){tm(a);return}if(o&&Wc(o.t)&&!V[o.t].flat){K.no(),J(`هذا جزء من البيت. ضعي القطعة في مكان آخر.`,3e3);return}let s=!n.ground&&n.v.t===r?n.v.r:0;$c(r)===2&&(s&=6);let c=o?rl(a):[];for(let e of V[r].clears||[]){let t=el(i.cell[0],i.cell[1],i.cell[2],e,s),n=U(t[0],t[1],t[2]);Jc(t[0],t[1],t[2])&&H.get(n)?.t===`floorSlab`&&!c.includes(n)&&c.push(n)}let l;if(Kc(r)&&!o&&rm(n)===i.cell[1]){let n=id(e,t,i.cell[1]);n&&Math.floor(n[0])===i.cell[0]&&Math.floor(n[1])===i.cell[2]&&(l=nm(n[0],i.cell[1],n[1],r,s,[]).o)}let u=il(c,{x:i.cell[0],y:i.cell[1],z:i.cell[2],t:r,r:s,o:l});u?fl(u)&&(r===`fountain`||r===`water`?K.splash():K.place(r)):(K.no(),J(`لا يوجد مكان كافٍ هنا. جرّبي مكانًا أوسع.`))}var Z={theta:-.5,phi:.9,dist:34,target:new N(-1.5,0,3.5)};function fm(e){W.fp=e,Vl.near=e?.08:.2,document.body.classList.toggle(`fp`,e),Lu()}function pm(){if(X.mode!==`size`&&(X.sel=null),Su(X.sel)||(X.sel=null),W.fp){let e=Ip(),t=e.x-16,n=e.z-16,r=Math.cos(e.p);Vl.position.set(t,e.y,n),Vl.lookAt(t+Math.sin(e.f)*r,e.y+Math.sin(e.p),n+Math.cos(e.f)*r);return}Z.phi=Math.min(1.42,Math.max(.04,Z.phi)),Z.dist=Math.min(72+1.6*zd()/Math.min(1,Vl.aspect),Math.max(2.6,Z.dist));{let e=Xp();Z.target.x=Math.min(e,Math.max(-e,Z.target.x)),Z.target.z=Math.min(e,Math.max(-e,Z.target.z))}let e=Math.sin(Z.phi),t=Z.target.y+Math.max(0,1-Z.dist/14)*1.2;Vl.position.set(Z.target.x+Z.dist*e*Math.sin(Z.theta),t+Z.dist*Math.cos(Z.phi),Z.target.z+Z.dist*e*Math.cos(Z.theta)),Vl.lookAt(Z.target.x,t,Z.target.z)}function mm(e,t){let n=Z.dist*.0016,r=Math.cos(Z.theta),i=Math.sin(Z.theta);Z.target.x+=(-e*r-t*i)*n,Z.target.z+=(e*i-t*r)*n}var hm=new Map,Q=null;function gm(e,t){let n=nd(e,t);if(Cu.visible=!1,Cu.scale.set(1,1,1),!n||X.mode===`walk`||X.mode===`room`&&!X.room.demolish)return;let r=null;if(X.mode===`erase`||X.mode===`room`)!n.ground&&(X.mode===`room`||(X.eraseFloors?V[n.v.t].flat:!Wc(n.v.t)))&&(r=n.cell),Cu.material.color.set(16731501);else if(X.mode===`paint`||X.mode===`turn`||X.mode===`move`||X.mode===`size`||X.mode===`roof`)n.ground||(r=n.cell),Cu.material.color.set(16777215);else if(V[X.selected].opening&&!n.ground&&zc(n.v.t))r=n.cell,Cu.material.color.set(16777215);else{let e=rd(n,X.selected);e&&`cell`in e&&(r=e.cell),Cu.material.color.set(16777215)}r&&(Cu.position.set(r[0]+.5,r[1]+.5,r[2]+.5),Cu.visible=!0)}function _m(e,t,n){let r=id(e,t,0);if(!r)return null;let i=Math.floor(r[0]),a=Math.floor(r[1]);return n&&(i=Math.min(31,Math.max(0,i)),a=Math.min(31,Math.max(0,a))),i>=0&&i<32&&a>=0&&a<32?[i,a]:null}var vm=e=>({x0:Math.min(e.x0,e.x1),z0:Math.min(e.z0,e.z1),x1:Math.max(e.x0,e.x1),z1:Math.max(e.z0,e.z1),h:3*X.room.storeys});function ym(e){let t=vm(e);if(t.x1-t.x0<1||t.z1-t.z0<1){J(`اسحبي إصبعكِ أبعد قليلًا لترسمي غرفة.`,3e3);return}let n=gl(t.x0,t.z0,t.x1,t.z1,t.h,X.room.wall,`plank`);n.length&&fl(n)&&(K.place(X.room.wall),J(`غرفة جديدة!`,2500))}function bm(){Rl.addEventListener(`pointerdown`,e=>{try{Rl.setPointerCapture(e.pointerId)}catch{}if(hm.set(e.pointerId,{x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY,t:performance.now()}),hm.size===1){if(X.mode===`walk`&&e.button!==2&&!e.shiftKey)W.fp?Q={type:`look`,moved:!1}:(Q={type:`walk`},jp(e.clientX,e.clientY));else if(X.mode===`room`&&!X.room.demolish&&e.button!==2&&!e.shiftKey){let t=_m(e.clientX,e.clientY,!1);t?(Q={type:`room`,x0:t[0],z0:t[1],x1:t[0],z1:t[1]},zu(vm(Q))):Q={type:`done`}}else if(X.mode===`move`&&e.button!==2&&!e.shiftKey){let t=nd(e.clientX,e.clientY);if(t&&!t.ground&&!Wc(t.v.t)){let n=qc(t.k),r=t.v.o,i=Kc(t.v.t)?id(e.clientX,e.clientY,n[1]):null;Q={type:`move`,k:t.k,moved:!1,gx:i?n[0]+.5+(r?r[0]:0)-i[0]:0,gz:i?n[2]+.5+(r?r[1]:0)-i[1]:0}}else Q={type:`tap`,moved:!1,pan:!1}}else if(X.mode===`size`&&e.button!==2&&!e.shiftKey){let e=X.sel==null?void 0:H.get(X.sel);if(e&&X.sel!=null){let t=e.s||1;Q={type:`size`,k:X.sel,s0:t,s:t,moved:!1}}else Q={type:`tap`,moved:!1,pan:!1}}else Q={type:`tap`,moved:!1,pan:e.button===2||e.shiftKey}}else if(hm.size===2){let e=[...hm.values()];Q&&Q.type===`move`&&om(Q.k,0,0,!1);let t=null;X.mode===`size`&&X.sel!=null&&H.get(X.sel)&&(t=X.sel);let n=Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y)||1;if(t!=null){let e=H.get(t).s||1;W.sizing=null,Q={type:`size2`,k:t,s0:e,s:e,d0:n}}else Q={type:`pinch`,d0:n,dist0:Z.dist,mx:(e[0].x+e[1].x)/2,my:(e[0].y+e[1].y)/2,a:Math.atan2(e[1].y-e[0].y,e[1].x-e[0].x)};Mp(),zu(null)}Cu.visible=!1}),Rl.addEventListener(`pointermove`,e=>{let t=hm.get(e.pointerId);if(!t){e.pointerType===`mouse`&&gm(e.clientX,e.clientY);return}let n=e.clientX-t.x,r=e.clientY-t.y;if(t.x=e.clientX,t.y=e.clientY,Q){if(Q.type===`walk`)hm.size===1&&jp(t.x,t.y);else if(Q.type===`look`)hm.size===1&&(!Q.moved&&Math.hypot(t.x-t.sx,t.y-t.sy)>9&&(Q.moved=!0),Q.moved&&Vp(n,r));else if(Q.type===`size`){if(hm.size!==1)return;!Q.moved&&Math.hypot(t.x-t.sx,t.y-t.sy)>9&&(Q.moved=!0),Q.moved&&(Q.s=cm(Q.s0,t.x-t.sx,t.y-t.sy),lm(Q.k,Q.s))}else if(Q.type===`size2`){if(hm.size===2){let e=[...hm.values()];Q.s=sm(Q.s0*(Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y)||1)/Q.d0),lm(Q.k,Q.s)}}else if(Q.type===`move`){if(hm.size!==1)return;!Q.moved&&Math.hypot(t.x-t.sx,t.y-t.sy)>9&&(Q.moved=!0),Q.moved&&am(im(t.x,t.y,Q.k,Q.gx,Q.gz),Q.k)}else if(Q.type===`room`){let e=hm.size===1?_m(t.x,t.y,!0):null;e&&(Q.x1=e[0],Q.z1=e[1],zu(vm(Q)))}else if(Q.type===`tap`&&hm.size===1)!Q.moved&&Math.hypot(t.x-t.sx,t.y-t.sy)>9&&(Q.moved=!0),Q.moved&&(Q.pan?mm(n,r):(Z.theta-=n*.0065,Z.phi-=r*.0055));else if(Q.type===`pinch`&&hm.size===2){let e=[...hm.values()],t=Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y)||1,n=(e[0].x+e[1].x)/2,r=(e[0].y+e[1].y)/2;Z.dist=Q.dist0*Q.d0/t,mm(n-Q.mx,r-Q.my),Q.mx=n,Q.my=r;let i=Math.atan2(e[1].y-e[0].y,e[1].x-e[0].x);Z.theta+=(i-Q.a+Math.PI*3)%(Math.PI*2)-Math.PI,Q.a=i}}});function e(e){let t=hm.get(e.pointerId);if(!t)return;Q&&Q.type===`walk`&&Mp(),Q&&Q.type===`look`&&!Q.moved&&e.type===`pointerup`&&hm.size===1&&performance.now()-t.t<700&&Hp(e.clientX,e.clientY),Q&&Q.type===`room`&&(e.type===`pointerup`&&ym(Q),zu(null)),Q&&Q.type===`size`&&um(Q.k,Q.moved&&e.type===`pointerup`&&hm.size===1?Q.s:null),Q&&Q.type===`size2`&&um(Q.k,e.type===`pointerup`?Q.s:null),Q&&Q.type===`move`&&om(Q.k,e.clientX,e.clientY,Q.moved&&e.type===`pointerup`&&hm.size===1,Q.gx,Q.gz);let n=Q&&(Q.type===`tap`||Q.type===`size`)&&!Q.moved&&hm.size===1&&performance.now()-t.t<700&&e.type===`pointerup`;hm.delete(e.pointerId),hm.size===0?Q=null:Q&&={type:`done`},n&&e.button!==2&&dm(e.clientX,e.clientY)}Rl.addEventListener(`pointerup`,e),Rl.addEventListener(`pointercancel`,e),Rl.addEventListener(`pointerleave`,()=>{Cu.visible=!1}),Rl.addEventListener(`wheel`,e=>{e.preventDefault(),Z.dist*=Math.exp(e.deltaY*.0012)},{passive:!1}),Rl.addEventListener(`contextmenu`,e=>e.preventDefault()),window.addEventListener(`keydown`,e=>{(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`z`?(e.preventDefault(),e.shiftKey?kd():Od()):(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`y`&&(e.preventDefault(),kd())})}var xm=3,Sm=``;function Cm(){Sm=``}function wm(e,t,n,r,i){let a=Math.floor(e),o=Math.floor(n),s=Math.round(r/(Math.PI/8)),c=a+`,`+t+`,`+o+`,`+s+`,`+i;if(c===Sm)return;Sm=c;let l=new Set,u=[],d=t-t%xm,f=(e,t)=>!!e&&(t>=d+xm||t===d+xm-1&&e.t===`floorSlab`);if(i!==`roof`&&i!==`fp`){let i=-1;for(let e=t+1;e<16&&i<0;e++)f(H.get(U(a,e,o)),e)&&(i=U(a,e,o));if(i>=0){let s=new Set([i]),c=[i];for(;c.length&&s.size<4e3;){let e=c.pop(),t=qc(e);l.add(nl(e));for(let e=-1;e<=1;e++)for(let n=-1;n<=1;n++)for(let r=-1;r<=1;r++){let i=t[0]+e,a=t[1]+n,o=t[2]+r;if(!Jc(i,a,o))continue;let l=U(i,a,o);!s.has(l)&&f(H.get(l),a)&&(s.add(l),c.push(l))}}let p=new Set([U(a,t,o)]),m=[[a,o]],h=(e,n)=>{let r=H.get(U(e,t,n));return Jc(e,t,n)&&!(r&&zc(r.t))};for(let e=0;e<m.length&&p.size<=400;e++){let[n,r]=m[e];for(let[e,i]of[[1,0],[-1,0],[0,1],[0,-1]]){let a=U(n+e,t,r+i);!p.has(a)&&h(n+e,r+i)&&(p.add(a),m.push([n+e,r+i]))}}if(p.size<=400){let i=Math.sin(r),a=Math.cos(r),o=new Set;for(let[r,s]of m)for(let c=-1;c<=1;c++)for(let f=-1;f<=1;f++){let p=r+c,m=s+f,h=p+1e3*m;if(o.has(h)||!Jc(p,t,m))continue;let g=H.get(U(p,t,m));if(g&&zc(g.t)&&(o.add(h),!((p+.5-e)*i+(m+.5-n)*a<.3)))for(let e=d;e<16;e++){let t=U(p,e,m),n=H.get(t);n&&zc(n.t)&&!V[n.t].roof&&((!l.has(nl(t))||e<d+xm)&&u.push(t),l.add(nl(t)))}}}}}let p=e=>{let t=H.get(e);t&&Yc.add(t.t)};l.forEach(e=>{W.hidden.has(e)||p(e)}),W.hidden.forEach(e=>{l.has(e)||p(e)}),W.hidden=l,Xu(u)}var Tm=[16740261,5220576,16761390,5748826,10185727,16747069,2868404,14829439],Em={BASE_URL:`./`,DEV:!1,MODE:`production`,PROD:!0,SSR:!1,VITE_ARCH_SERVER:`https://tama-archipelago.aljasirafamily-game.workers.dev`},Dm=/^(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+)$/.test(location.hostname),Om=Em.VITE_ARCH_SERVER||(Dm?`http://${location.hostname}:8787`:``),km=xl(`makabi-family-v1`),Am=null;try{Am=JSON.parse(localStorage.getItem(km)||`null`)}catch{Am=null}var $={status:Am?`pending`:`none`,connected:!1,admin:!1,code:``,me:Am?.id||``,name:Am?.name||``,color:Am?.color??0,members:[],pending:[],visits:[],muted:[],mutedBy:[]},jm={state:()=>{},snap:(e,t)=>{},gone:e=>{},live:e=>{},visit:e=>{},voice:e=>{},connected:()=>{},build:e=>{}};async function Mm(e,t){try{return await(await fetch(Om+e,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)})).json()}catch{return{err:`net`}}}function Nm(e,t,n,r,i){Am={code:e,id:t,token:n,name:r,color:i};try{localStorage.setItem(km,JSON.stringify(Am))}catch{}$.me=t,$.name=r,$.color=i}async function Pm(e,t){let n=await Mm(`/api/create`,{name:e,color:t});return n.err?n.err:(Nm(n.code,n.id,n.token,e,t),$.status=`member`,Um(),``)}async function Fm(e,t,n){let r=await Mm(`/api/join`,{code:e,name:t,color:n});return r.err?r.err:(Nm(e.toUpperCase().replace(/[^A-Z0-9]/g,``),r.id,r.token,t,n),$.status=`pending`,Um(),``)}function Im(){Km({t:$.admin?`dissolve`:`leave`}),zm(`left`)}var Lm=e=>Km({t:`approve`,id:e}),Rm=e=>Km({t:`remove`,id:e});function zm(e){Am=null;try{localStorage.removeItem(km)}catch{}$.status=`none`,$.admin=!1,$.code=``,$.members=[],$.pending=[],$.me=``,$.visits=[],$.muted=[],$.mutedBy=[];let t=Bm;if(Bm=null,t){t.onclose=null;try{t.close()}catch{}}$.connected=!1,jm.gone(e),jm.state()}var Bm=null,Vm=2e3,Hm=0;function Um(){if(!Om||!Am||Bm)return;clearTimeout(Hm);let e=Am,t=new WebSocket(Om.replace(/^http/,`ws`)+`/api/ws?code=`+e.code+`&token=`+e.token);Bm=t,t.onopen=()=>{$.connected=!0,Vm=2e3,jm.connected()},t.onmessage=e=>{let t;try{t=JSON.parse(e.data)}catch{return}if(t.t===`state`){let e=$.status;$.status=t.status,$.admin=!!t.admin,$.code=t.code||``,$.members=t.members||[],$.pending=t.pending||[],$.visits=t.visits||[],$.muted=t.muted||[],$.mutedBy=t.mutedBy||[],jm.state(),$.status!==`member`||e===`member`&&qm||(qm=!0,Dl())}else if(t.t===`snap`)try{jm.snap(t.id,JSON.parse(t.d))}catch{}else t.t===`pos`||t.t===`horn`?jm.live(t):t.t===`rtc`||t.t===`talk`||t.t===`ice`?jm.voice(t):t.t===`edit`||t.t===`cells`?jm.build(t):[`knock`,`unknock`,`knockOk`,`knockNo`,`welcome`,`notNow`,`invited`,`bye`,`visitEnd`].includes(t.t)?jm.visit(t):t.t===`gone`&&zm(t.why)},t.onclose=()=>{Bm===t&&(Bm=null,$.connected=!1,qm=!1,$.members=$.members.map(e=>({...e,online:e.id!==$.me&&e.online})),jm.state(),Hm=window.setTimeout(Um,Vm),Vm=Math.min(3e4,Vm*1.6))}}var Wm=e=>Gm(e);function Gm(e){$.status===`member`&&Km(e)}function Km(e){Bm&&Bm.readyState===WebSocket.OPEN&&Bm.send(JSON.stringify(e))}window.addEventListener(`online`,()=>{Vm=2e3,Bm||Um()}),document.addEventListener(`visibilitychange`,()=>{!document.hidden&&!Bm&&(Vm=2e3,Um())});var qm=!1,Jm=null,Ym=0;function Xm(e){$.status===`member`&&(Jm=e,Ym||=window.setTimeout(()=>{Ym=0,Jm&&Km({t:`snap`,d:JSON.stringify(Jm)}),Jm=null},2500))}var Zm=96,Qm=[[0,0],[Zm,0],[0,Zm],[Zm,Zm]],$m=new Map,eh=new Map;function th(){let e=document.createElement(`canvas`);e.width=512,e.height=128;let t=new as(e);t.colorSpace=E;let n=new Ro(new wo({map:t,depthTest:!1,transparent:!0}));return n.scale.set(6.4,1.6,1),n.position.set(14.4,5.8,33.2),n.renderOrder=5,n.userData.cv=e,n}function nh(e,t,n,r){let i=e.userData.cv.getContext(`2d`);i.clearRect(0,0,512,128),i.font=`800 62px "Baloo Bhaijaan 2", system-ui, sans-serif`;let a=Math.min(500,i.measureText(t).width+110);i.fillStyle=r?`rgba(255,255,255,.7)`:`#fff`,i.beginPath(),i.roundRect(256-a/2,14,a,100,50),i.fill(),i.fillStyle=`#`+n.toString(16).padStart(6,`0`),i.beginPath(),i.arc(256+a/2-44,64,20,0,Math.PI*2),i.fill(),i.fillStyle=r?`#8a80a8`:`#2b2140`,i.textAlign=`center`,i.textBaseline=`middle`,i.direction=`rtl`,i.fillText(t,238,68,a-100),e.material.map.needsUpdate=!0}var rh=th();rh.visible=!1,Df.group.add(rh);var ih={id:``},ah=()=>ih.id||$.me,oh=e=>$.members.find(t=>t.id===e)?.slot??0,sh={hostChanged:e=>{}};function ch(e){e?eh.set($.me,e):eh.delete($.me);let t=$m.get($.me);t&&ph(t)}var lh=e=>eh.get(e),uh=-1;function dh(){let e=$.status===`member`,t=oh(ah()),n=e?$.members.filter(e=>e.id!==ah()&&e.slot!=null&&Qm[e.slot]):[];for(let[e,t]of $m)n.some(t=>t.id===e)||(mh(t),$m.delete(e),e!==$.me&&e!==ih.id&&eh.delete(e));for(let e of n){let n=$m.get(e.id);if(!n){let t=new fo;t.add(...ql()),n={id:e.id,group:t,scenery:vf(t,Tm[e.color]),pieces:null,label:th(),text:``,timer:0},t.add(n.label),Gl.add(t),$m.set(e.id,n),eh.has(e.id)&&ph(n)}n.group.position.set(Qm[e.slot][0]-Qm[t][0],0,Qm[e.slot][1]-Qm[t][1]),yf(n.scenery,Tm[e.color]??Tm[0]),bf(n.scenery,e.online),n.scenery.sign.visible=!!e.closed,e.id===$.me&&(n.scenery.boat.visible=!1);let r=e.name+`|`+e.color+`|`+e.online;n.text!==r&&(n.text=r,nh(n.label,e.name,Tm[e.color]??Tm[0],!e.online))}let r=ih.id?$.members.find(e=>e.id===ih.id):void 0,i=r?r.color:$.color,a=r?r.name:$.name;yf(Df,Tm[i]??Tm[0]),rh.visible=e,e&&nh(rh,a,Tm[i]??Tm[0],!1),Df.sign.visible=!!$.members.find(e=>e.id===ah())?.closed,r&&uh===-1&&(Of.visible=!0),r&&uh!==r.color&&(uh=r.color,Of.geometry.dispose(),Of.geometry=Tf(Tm[r.color]??Tm[0])),r||(uh=-1,Of.visible=!1),kf([{x:0,z:0},...[...$m.values()].map(e=>({x:e.group.position.x,z:e.group.position.z}))]),Sf([Df,...[...$m.values()].map(e=>e.scenery)])}function fh(e,t){if(!t||!Array.isArray(t.voxels)||e===$.me)return;if(eh.set(e,t),e===ih.id){sh.hostChanged(t);return}let n=$m.get(e);n&&(clearTimeout(n.timer),n.timer=window.setTimeout(()=>ph(n),300))}function ph(e){let t=eh.get(e.id);if(t&&$m.has(e.id)){e.pieces&&=(e.group.remove(e.pieces),hh(e.pieces),null);try{e.pieces=Zu(t.voxels,Array.isArray(t.floors)?t.floors:[]),e.group.add(e.pieces)}catch{}}}function mh(e){clearTimeout(e.timer),Gl.remove(e.group),hh(e.group)}function hh(e){e.traverse(e=>{let t=e;if(t.isMesh&&!t.geometry.userData.shared&&t.geometry.dispose(),e.isSprite){let t=e;t.material.map?.dispose(),t.material.dispose()}})}function gh(e){let t=oh(ah()),n=$.members.find(t=>t.id===e);return!n||n.slot==null||!Qm[n.slot]?null:[Qm[n.slot][0]-Qm[t][0],Qm[n.slot][1]-Qm[t][1]]}var _h=()=>{let e=Qm[oh(ah())]||Qm[0];return[e[0],e[1]]};function vh(e,t){if(e===ih.id&&ih.id){Of.visible=t;return}let n=$m.get(e);n&&(n.scenery.boat.visible=t&&e!==$.me)}var yh=xl(`makabi-voice-v1`),bh={allowed:!0,listen:!0,muted:[]};try{Object.assign(bh,JSON.parse(localStorage.getItem(yh)||`{}`))}catch{}var xh=()=>{try{localStorage.setItem(yh,JSON.stringify(bh))}catch{}},Sh=e=>document.getElementById(e),Ch=[{urls:`stun:stun.cloudflare.com:3478`}],wh=!1,Th=new Map,Eh=(e,t)=>Gm({t:`rtc`,to:e,d:t});function Dh(e,t){let n=new RTCPeerConnection({iceServers:Ch}),r=document.createElement(`audio`);r.autoplay=!0,r.playsInline=!0,r.hidden=!0,document.body.appendChild(r);let i={id:e,pc:n,audio:r,sender:null,starter:t,tries:0,timer:0};return n.onicecandidate=t=>{t.candidate&&Eh(e,{candidate:t.candidate.toJSON()})},n.ontrack=e=>{r.srcObject=e.streams[0]||new MediaStream([e.track]),zh(),Rh(r)},n.onconnectionstatechange=()=>{let t=n.connectionState;t===`connected`&&(i.tries=0),(t===`failed`||t===`disconnected`)&&i.starter&&(clearTimeout(i.timer),i.timer=window.setTimeout(()=>{Th.get(e)===i&&i.pc.connectionState!==`connected`&&kh(e)},t===`failed`?1e3:5e3))},t&&(i.sender=n.addTransceiver(`audio`,{direction:`sendrecv`}).sender,n.onnegotiationneeded=async()=>{try{await n.setLocalDescription(),Eh(e,{description:n.localDescription})}catch{}}),Uh&&i.sender&&i.sender.replaceTrack(Uh).catch(()=>{}),Th.set(e,i),i}function Oh(e){let t=Th.get(e);t&&(clearTimeout(t.timer),t.pc.onconnectionstatechange=null,t.pc.close(),t.audio.srcObject=null,t.audio.remove(),Th.delete(e))}function kh(e){let t=Th.get(e),n=t?t.tries+1:0;if(Oh(e),Eh(e,{reset:!0}),n>6)return;let r=Dh(e,!0);r.tries=n}async function Ah(e,t){if(!t||!Mh().includes(e))return;if(t.reset){jh(e)||Oh(e);return}let n=Th.get(e);try{if(t.description){if(t.description.type===`offer`){(!n||n.starter||n.pc.signalingState===`closed`)&&(n&&Oh(e),n=Dh(e,!1)),await n.pc.setRemoteDescription(t.description);let r=n.pc.getTransceivers()[0];r&&!n.sender&&(r.direction=`sendrecv`,n.sender=r.sender,Uh&&await n.sender.replaceTrack(Uh)),await n.pc.setLocalDescription(),Eh(e,{description:n.pc.localDescription})}else n&&n.starter&&n.pc.signalingState===`have-local-offer`&&await n.pc.setRemoteDescription(t.description)}else t.candidate&&n&&await n.pc.addIceCandidate(t.candidate)}catch{n&&n.starter&&kh(e)}}var jh=e=>$.me<e;function Mh(){return!bh.allowed||$.status!==`member`||!$.connected?[]:$.members.filter(e=>e.id!==$.me&&e.online&&e.voice).map(e=>e.id)}function Nh(){let e=Mh();for(let t of[...Th.keys()])e.includes(t)||Oh(t);if(wh)for(let t of e)!Th.has(t)&&jh(t)&&Dh(t,!0);Fh(),tg(),zh()}var Ph=``;function Fh(){if($.status!==`member`||!$.connected){Ph=``;return}let e=bh.allowed,t=bh.allowed&&bh.listen&&!document.hidden,n=e+`,`+t;n!==Ph&&(Ph=n,Gm({t:`voice`,on:e,listen:t}))}function Ih(){Ph=``,wh=!1,Gm({t:`ice`}),window.setTimeout(()=>{wh||(wh=!0,Nh())},2500),Fh()}var Lh=new Set;function Rh(e){e.play().then(()=>Lh.delete(e),()=>Lh.add(e))}document.addEventListener(`pointerdown`,()=>{Lh.size&&[...Lh].forEach(Rh)},!0);function zh(){for(let e of Th.values())e.audio.muted=!bh.allowed||!bh.listen||document.hidden||bh.muted.includes(e.id);let e=Sh(`speakerBtn`);e.classList.toggle(`off`,!bh.listen),e.setAttribute(`aria-pressed`,String(bh.listen))}function Bh(){bh.listen=!bh.listen,xh(),zh(),Fh(),J(bh.listen?`تسمعين صديقاتكِ الآن.`:`أطفأتِ السمّاعة. صديقاتكِ يعرفن أنكِ لا تسمعين.`,3500)}var Vh=new Set;function Hh(){let e=Sh(`talkers`),t=[...Vh].filter(e=>$.members.some(t=>t.id===e));e.hidden=!t.length||!bh.allowed,e.innerHTML=``;for(let n of t){let t=$.members.find(e=>e.id===n),r=bh.muted.includes(n),i=document.createElement(`div`);i.className=`talker`+(r?` quiet`:``);let a=document.createElement(`span`);a.className=`wave`,a.style.background=`#`+(Tm[t.color]??Tm[0]).toString(16).padStart(6,`0`);let o=document.createElement(`span`);o.textContent=t.name+(r?` (مكتومة)`:` تتكلم`);let s=document.createElement(`button`);s.className=`mini`,s.textContent=r?`أسمعيها`:`اكتميها`,s.onclick=()=>{bh.muted=r?bh.muted.filter(e=>e!==n):[...bh.muted,n],xh(),zh(),Hh()},i.append(a,o,s),e.appendChild(i)}jl.duck=t.some(e=>!bh.muted.includes(e))&&bh.listen}var Uh=null,Wh=!1,Gh=!1,Kh=!1,qh=0,Jh=0,Yh=/(^|[?&])fakemic=1/.test(location.search)&&(bl!==``||location.hostname===`localhost`);async function Xh(){if(Yh){let e=new AudioContext,t=e.createOscillator(),n=e.createGain(),r=e.createMediaStreamDestination();return t.frequency.value=440,n.gain.value=.2,t.connect(n),n.connect(r),t.start(),r.stream.getAudioTracks()[0]}return(await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})).getAudioTracks()[0]}async function Zh(){if(Uh||Kh||!bh.allowed)return;let e=$.members.filter(e=>e.id!==$.me&&e.online&&e.voice);if(!e.length){J(`لا أحد من صديقاتكِ هنا الآن ليسمعكِ.`,3500);return}Kh=!0,Sh(`micBtn`).classList.add(`opening`);try{Uh=await Xh()}catch{Kh=!1,Sh(`micBtn`).classList.remove(`opening`),J(`الميكروفون غير مسموح. اطلبي من أهلكِ السماح له في إعدادات المتصفح.`,5e3);return}if(Kh=!1,Sh(`micBtn`).classList.remove(`opening`),!Wh&&!Gh){Qh();return}for(let e of Th.values())e.sender?.replaceTrack(Uh).catch(()=>{});Gm({t:`talk`,on:!0}),Sh(`micBtn`).classList.add(`on`),qh=performance.now(),$h(Uh);let t=e.filter(e=>!e.listen).map(e=>e.name);t.length&&J(`لا تسمعكِ الآن: `+t.join(`، `)+`.`,3500)}function Qh(){if(Gh=!1,Wh=!1,Sh(`micBtn`).classList.remove(`on`,`locked`),clearInterval(Jh),Uh){for(let e of Th.values())e.sender?.replaceTrack(null).catch(()=>{});Uh.stop(),Uh=null,Gm({t:`talk`,on:!1})}}function $h(e){clearInterval(Jh);try{let t=new AudioContext,n=t.createAnalyser(),r=new Float32Array(512);t.createMediaStreamSource(new MediaStream([e])).connect(n),Jh=window.setInterval(()=>{if(Uh!==e){clearInterval(Jh),t.close();return}n.getFloatTimeDomainData(r);let i=0;for(let e of r)i+=e*e;Math.sqrt(i/r.length)>.02&&(qh=performance.now()),Gh&&performance.now()-qh>6e4&&(Qh(),J(`أغلقتُ الميكروفون لأن أحدًا لم يتكلم.`,3500))},500)}catch{}}function eg(){let e=Sh(`micBtn`),t=0;e.addEventListener(`contextmenu`,e=>e.preventDefault()),e.addEventListener(`pointerdown`,n=>{n.preventDefault();try{e.setPointerCapture(n.pointerId)}catch{}Gh?Qh():(Wh=!0,t=n.clientY,Zh())}),e.addEventListener(`pointermove`,n=>{Wh&&!Gh&&t-n.clientY>50&&(Gh=!0,e.classList.add(`locked`),J(`الميكروفون مفتوح. اضغطي عليه مرة لإغلاقه.`,3500))});let n=()=>{Wh&&(Wh=!1,Gh||Qh())};e.addEventListener(`pointerup`,n),e.addEventListener(`pointercancel`,n)}function tg(){let e=$.members.some(e=>e.id!==$.me&&e.online&&e.voice),t=bh.allowed&&$.status===`member`&&e;Sh(`micBtn`).hidden=!t,Sh(`speakerBtn`).hidden=!(bh.allowed&&$.status===`member`),document.body.classList.toggle(`voices`,t),!t&&(Uh||Gh)&&Qh()}function ng(e){e.t===`ice`?(Array.isArray(e.servers)&&e.servers.length&&(Ch=e.servers),wh=!0,Nh()):e.t===`rtc`?Ah(e.from,e.d):e.t===`talk`&&(e.on?Vh.add(e.id):Vh.delete(e.id),Hh())}function rg(){for(let e of[...Vh])$.members.some(t=>t.id===e&&t.online)||Vh.delete(e);Nh(),Hh()}var ig=()=>bh.allowed;function ag(e){bh.allowed=e,xh(),e||(Qh(),Vh.clear(),Hh()),Nh()}function og(){eg(),Sh(`speakerBtn`).onclick=Bh,document.addEventListener(`visibilitychange`,()=>{document.hidden&&Qh(),Fh(),zh()}),Nh()}async function sg(){let e=[];for(let t of Th.values()){let n=0,r=0;try{(await t.pc.getStats()).forEach(e=>{e.type===`inbound-rtp`&&e.kind===`audio`&&(n=e.totalAudioEnergy||0,r=e.bytesReceived||0)})}catch{}e.push({id:t.id,state:t.pc.connectionState,starter:t.starter,sending:!!t.sender?.track,energy:+n.toFixed(4),bytes:r,muted:t.audio.muted})}return{allowed:bh.allowed,listen:bh.listen,talking:[...Vh],peers:e,ice:Ch.length}}var cg=e=>document.getElementById(e),lg=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),ug=e=>`#`+(Tm[e]??Tm[0]).toString(16).padStart(6,`0`),dg={nocode:`هذا الكود غير موجود. تأكدوا من الحروف الثمانية.`,full:`الأرخبيل ممتلئ: فيه أربع جزر.`,slow:`محاولات كثيرة. انتظروا قليلًا ثم حاولوا من جديد.`,name:`اكتبوا اسمًا للطفلة.`,net:`لا يوجد اتصال بالخادم الآن.`,busy:`الخادم مشغول. حاولوا بعد قليل.`},fg=`gate`,pg=0,mg=``,hg=0,gg=!1,_g=null,vg=e=>e.replace(/[٠-٩]/g,e=>String(e.charCodeAt(0)-1632)).replace(/[۰-۹]/g,e=>String(e.charCodeAt(0)-1776)).replace(/s/g,``);function yg(){let e=cg(`familyBtn`);Om?e.onclick=()=>{fg=`gate`,mg=``,_g=null,Tg(),cg(`family`).classList.add(`open`)}:e.hidden=!0}var bg=()=>cg(`family`).classList.remove(`open`),xg=``,Sg=new Map;function Cg(){if(cg(`familyBtn`).classList.toggle(`dot`,$.admin&&$.pending.length>0),xg===`pending`&&$.status===`member`&&J(`صار لجزيرتكِ جيران! أبحري بالقارب لتريهم.`,5e3),$.status===`member`)for(let e of $.members)e.id!==$.me&&e.online&&Sg.get(e.id)===!1&&J(e.name+` وصلت إلى جزيرتها.`,3500);Sg=new Map($.members.map(e=>[e.id,e.online])),xg=$.status,cg(`family`).classList.contains(`open`)&&fg!==`gate`&&fg!==`create`&&fg!==`join`&&Tg()}function wg(){return`<div class="swatches">`+Tm.map((e,t)=>`<button class="sw${t===hg?` on`:``}" data-color="${t}" style="background:${ug(t)}" aria-label="لون ${t+1}"></button>`).join(``)+`</div>`}function Tg(){let e=cg(`familyCard`),t=``;if(fg===`gate`){_g||=[6+Math.floor(Math.random()*4),6+Math.floor(Math.random()*4)];let[e,n]=_g;pg=e*n,t=`<h1>للأهل</h1><p>هذه الصفحة لربط جزيرة الطفلة بجزر العائلة والأصدقاء.</p>
      <label class="field">كم يساوي ${e} × ${n}؟<input id="fGate" inputmode="numeric" autocomplete="off"></label>
      <p class="note">${lg(mg)}</p>
      <div class="row"><button class="btn" id="fGo">دخول</button><button class="btn ghost" id="fClose">إغلاق</button></div>`}else if(fg===`home`&&$.status===`none`)t=`<h1>أرخبيل العائلة</h1><p>جزر الأطفال تظهر متجاورة في بحر واحد. لا يدخله إلا من يملك كود العائلة.</p>
      <p class="note">${lg(mg)}</p>
      <div class="col"><button class="btn" id="fNew">أرخبيل جديد</button><button class="btn" id="fHave">لدينا كود عائلة</button><button class="btn ghost" id="fClose">إغلاق</button></div>`;else if(fg===`create`||fg===`join`)t=`<h1>${fg===`create`?`أرخبيل جديد`:`الانضمام بكود`}</h1>
      ${fg===`join`?`<label class="field">كود العائلة<input id="fCode" maxlength="9" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="XXXX-XXXX" dir="ltr"></label>`:``}
      <label class="field">اسم الطفلة<input id="fName" maxlength="14" autocomplete="off" value="${lg($.name)}"></label>
      <p class="hint">يكفي الاسم الأول أو لقب.</p>
      <div class="field">لون العلم والشراع${wg()}</div>
      <p class="note">${lg(mg)}</p>
      <div class="row"><button class="btn" id="fSend"${gg?` disabled`:``}>${fg===`create`?`إنشاء`:`إرسال الطلب`}</button><button class="btn ghost" id="fBack">رجوع</button></div>`;else if(fg===`home`&&$.status===`pending`)t=`<h1>ننتظر الموافقة</h1><p>أُرسل الطلب. تظهر الجزر حين يوافق من أنشأ الأرخبيل على جهازه.</p>
      ${$.connected?``:`<p class="note">لا يوجد اتصال بالخادم الآن.</p>`}
      <div class="row"><button class="btn ghost" id="fLeave">إلغاء الطلب</button><button class="btn" id="fClose">إغلاق</button></div>`;else if(fg===`home`){let e=$.code?$.code.slice(0,4)+`-`+$.code.slice(4):``;t=`<h1>أرخبيل العائلة</h1>
      ${e?`<div class="code" dir="ltr">${e}</div><p class="hint">أعطوا هذا الكود لأهل الصديقة فقط، لا للأطفال.</p>`:``}
      ${$.connected?``:`<p class="note">لا يوجد اتصال بالخادم الآن. الجزيرة تعمل وحدها.</p>`}
      ${$.pending.length?`<h2>ينتظرون الموافقة</h2>`+$.pending.map(e=>`<div class="mem"><span class="nm">${lg(e.name)}</span><button class="mini ok" data-ok="${e.id}">موافقة</button><button class="mini" data-no="${e.id}">رفض</button></div>`).join(``):``}
      <h2>الجزر</h2>
      ${$.members.map(e=>`<div class="mem"><span class="dot" style="background:${ug(e.color)}"></span><span class="nm">${lg(e.name)}${e.id===$.me?` (هذا الجهاز)`:``}</span><span class="st">${e.online?`حاضرة`:`نائمة`}</span>${$.admin&&e.id!==$.me?`<button class="mini" data-no="${e.id}">إخراج</button>`:``}</div>`).join(``)}
      <h2>الصوت لهذه الطفلة</h2>
      <div class="row seg"><button class="btn${ig()?``:` ghost`}" id="fVoiceOn">مسموح</button><button class="btn${ig()?` ghost`:``}" id="fVoiceOff">مغلق</button></div>
      <p class="hint">مع «مغلق» لا تتكلم ولا تسمع. يفيد وقت النوم أو الواجبات.</p>
      <div class="row"><button class="btn" id="fClose">إغلاق</button><button class="btn ghost" id="fLeave">${$.admin?`حذف الأرخبيل`:`مغادرة الأرخبيل`}</button></div>`}else fg===`confirmLeave`&&(t=$.admin?`<h1>حذف الأرخبيل؟</h1><p>تختفي جزر الجميع من البحر، ويبطل الكود. حدائق الأطفال تبقى على أجهزتهم.</p>`:`<h1>مغادرة الأرخبيل؟</h1><p>تعود الجزيرة وحدها في البحر. الحديقة تبقى كما هي.</p>`,t+=`<div class="row"><button class="btn danger" id="fLeaveYes">${$.admin?`نعم، احذفه`:`نعم، غادروا`}</button><button class="btn ghost" id="fBack">لا</button></div>`);e.innerHTML=t,Eg()}function Eg(){let e=(e,t)=>{let n=document.getElementById(e);n&&(n.onclick=t)};e(`fClose`,bg),e(`fGo`,()=>{Number(vg(cg(`fGate`).value))===pg?(fg=`home`,mg=``):mg=`ليست هذه الإجابة. حاولوا مرة أخرى.`,Tg()});let t=document.getElementById(`fGate`);t&&(t.focus(),t.onkeydown=e=>{e.key===`Enter`&&cg(`fGo`).click()}),e(`fNew`,()=>{fg=`create`,mg=``,hg=$.color,Tg()}),e(`fHave`,()=>{fg=`join`,mg=``,hg=$.color,Tg()}),e(`fBack`,()=>{fg=`home`,mg=``,Tg()}),e(`fLeave`,()=>{fg=`confirmLeave`,Tg()}),e(`fVoiceOn`,()=>{ag(!0),Tg()}),e(`fVoiceOff`,()=>{ag(!1),Tg()}),e(`fLeaveYes`,()=>{Im(),fg=`home`,mg=``,Tg()}),document.querySelectorAll(`#familyCard .sw`).forEach(e=>e.onclick=()=>{hg=Number(e.dataset.color),document.querySelectorAll(`#familyCard .sw`).forEach(t=>t.classList.toggle(`on`,t===e))}),document.querySelectorAll(`#familyCard [data-ok]`).forEach(e=>e.onclick=()=>Lm(e.dataset.ok)),document.querySelectorAll(`#familyCard [data-no]`).forEach(e=>e.onclick=()=>Rm(e.dataset.no)),e(`fSend`,async()=>{if(gg)return;let e=cg(`fName`).value.trim();if(!e){mg=dg.name,Tg();return}gg=!0,cg(`fSend`).disabled=!0;let t=fg===`create`?await Pm(e,hg):await Fm(cg(`fCode`).value,e,hg);gg=!1,t?(mg=dg[t]||dg.net,Tg()):(fg=`home`,mg=``,Tg())})}var Dg=new Map,Og=6e3;function kg(e){let t=$.members.find(t=>t.id===e);if(!t)return null;let n=Dg.get(e);if(!n){let r=new fo,i=new Wn(Tf(Tm[t.color]??Tm[0]),Yl);i.castShadow=!0;let a=Qp();a.position.set(0,-.12+$p,1.02),r.add(i,a),r.visible=!1;let o=Qp();o.visible=!1;let s=th();s.visible=!1,s.scale.set(4,1,1),Gl.add(r,o,s),n={id:e,color:-1,name:``,seen:0,boatG:r,hull:i,rider:a,walker:o,label:s,mode:``,x:0,y:0,z:0,a:0,tx:0,ty:0,tz:0,ta:0,bx:0,bz:0,ba:0,boatShown:!1},Dg.set(e,n)}return(n.color!==t.color||n.name!==t.name)&&(n.color!==t.color&&(n.hull.geometry.dispose(),n.hull.geometry=Tf(Tm[t.color]??Tm[0]),rp(n.rider,Tm[t.color]??Tm[0]),rp(n.walker,Tm[t.color]??Tm[0])),n.color=t.color,n.name=t.name,nh(n.label,t.name,Tm[t.color]??Tm[0],!1)),n}function Ag(e){if(e.id===$.me)return;let t=kg(e.id);if(!t)return;if(e.t===`horn`){if(t.mode!==`boat`)return;let e=Math.hypot(t.x-Mg.x,t.z-Mg.z);e<90&&(K.horn(Math.max(.25,1-e/90)),Ug(t.x,t.z));return}if(e.docked){jg(t);return}let n=_h(),r=e.m===`walk`?`walk`:`boat`,i=e.x-n[0],a=e.z-n[1],o=Number(e.y)||0;if(t.mode!==r&&(t.mode=r,t.x=i,t.y=o,t.z=a,t.a=e.a),t.tx=i,t.ty=o,t.tz=a,t.ta=e.a,t.seen=performance.now(),r===`walk`&&Number.isFinite(e.bx)){t.bx=e.bx-n[0],t.bz=e.bz-n[1],t.ba=e.ba||0;let r=gh(t.id);t.boatShown=!r||Math.hypot(t.bx-(r[0]+Pd.x),t.bz-(r[1]+Pd.z))>1.2}}function jg(e){e.mode=``,e.boatShown=!1}var Mg={x:0,z:0},Ng=0,Pg=``,Fg=!1,Ig=!1,Lg=document.getElementById(`hornBtn`);function Rg(){Lg.onclick=Gg}function zg(e){e<Ng&&(Ng=0);let t=_h();if(Zp()){if(e-Ng<(Y.v>.05?250:1500))return;Ng=e,Gm({t:`pos`,m:`boat`,x:Y.x+t[0],z:Y.z+t[1],a:Y.a});return}let n=Jp(),r=n.x.toFixed(1)+`,`+n.y.toFixed(1)+`,`+n.z.toFixed(1)+`,`+n.f.toFixed(1);e-Ng<(r===Pg?2e3:250)||(Ng=e,Pg=r,Gm({t:`pos`,m:`walk`,x:n.x+t[0],y:n.y,z:n.z+t[1],a:n.f,bx:Y.x+t[0],bz:Y.z+t[1],ba:Y.a}))}function Bg(e,t,n,r){Mg.x=n,Mg.z=r;let i=Zp();i!==Fg&&(Ng=0),Fg=i,$.status===`member`&&$.connected&&zg(t);let a=i&&X.mode===`walk`;a!==Ig&&(Ig=a,Lg.hidden=!a);let o=Math.min(1,e*5);for(let e of Dg.values()){let n=$.members.find(t=>t.id===e.id);if(!n){Gl.remove(e.boatG,e.walker,e.label),e.hull.geometry.dispose(),Dg.delete(e.id);continue}e.mode&&(!n.online||t-e.seen>Og)&&jg(e),e.x+=(e.tx-e.x)*o,e.y+=(e.ty-e.y)*o,e.z+=(e.tz-e.z)*o,e.a+=(((e.ta-e.a+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI)*o;let r=e.mode===`boat`,i=e.mode===`walk`;if(e.boatG.visible=r||i&&e.boatShown,e.rider.visible=r,e.walker.visible=i,e.label.visible=r||i,vh(e.id,!e.boatG.visible),e.boatG.visible){let t=r?e.x:e.bx,n=r?e.z:e.bz,i=r?e.a:e.ba,a=Math.sin(i),o=Math.cos(i);e.boatG.position.set(t,jd+Kd(t,n)+.05,n),e.boatG.rotation.set(Ll?0:(Kd(t-a,n-o)-Kd(t+a,n+o))*.35,i,0,`YXZ`),r&&e.label.position.set(t,jd+4.6,n)}if(i){e.walker.position.set(e.x,e.y+$p,e.z),e.walker.rotation.y=e.a;let n=Math.hypot(e.tx-e.x,e.tz-e.z)>.03&&!Ll?Math.sin(t*.011)*.7:0,r=e.walker.children;r.length>=5&&(r[1].rotation.x=n,r[2].rotation.x=-n,r[3].rotation.x=-n*.8,r[4].rotation.x=n*.8),e.label.position.set(e.x,e.y+2.1,e.z)}}for(let e=Hg.length-1;e>=0;e--){let n=Hg[e],r=(t-n.userData.t0)/1400;r>=1?(Gl.remove(n),n.material.dispose(),Hg.splice(e,1)):(n.visible=r>=0,r<0||(n.scale.setScalar(1+r*7),n.material.opacity=.7*(1-r)))}}var Vg=new fs(.9,1.15,40).rotateX(-Math.PI/2),Hg=[];function Ug(e,t){if(!Ll)for(let n=0;n<2;n++){let r=new Wn(Vg,new fn({color:16777215,transparent:!0,opacity:.7,depthWrite:!1}));r.position.set(e,jd+.25,t),r.userData.t0=performance.now()+n*350,r.renderOrder=2,Gl.add(r),Hg.push(r)}}var Wg=0;function Gg(){let e=performance.now();e-Wg<700||(Wg=e,K.horn(),Ug(Y.x,Y.z),Gm({t:`horn`}))}var Kg=()=>[...Dg.values()].map(e=>({id:e.id,mode:e.mode,x:+e.x.toFixed(1),y:+e.y.toFixed(1),z:+e.z.toFixed(1),boat:e.boatG.visible,rings:Hg.length})),qg=1500,Jg=e=>$.members.find(t=>t.id===e)?.name||``,Yg=e=>!!e&&e.of==null&&!!V[e.t]?.flat;function Xg(e,t,n){let r=!e||e.w===n||Yg(e)&&!e.w&&!!t&&t.w===n&&t.f===e.t,i=!t||t.w===n||!!e&&e.w===n&&Yg(t)&&t.t===e.f&&!t.w;return r&&i}var Zg=(e,t)=>!e||!t?!e&&!t:e.t===t.t&&(e.r||0)===(t.r||0)&&e.c===t.c&&e.of===t.of&&e.f===t.f&&e.s===t.s&&e.w===t.w&&(e.o?.[0]||0)===(t.o?.[0]||0)&&(e.o?.[1]||0)===(t.o?.[1]||0);function Qg(e){if(e===null)return null;if(!e||typeof e!=`object`||typeof e.t!=`string`||!V[e.t])return;let t={t:e.t,r:((Number(e.r)||0)%8+8)%8};return typeof e.c==`number`&&(t.c=e.c),typeof e.of==`number`&&(t.of=e.of),typeof e.f==`string`&&V[e.f]?.flat&&(t.f=e.f),Array.isArray(e.o)&&(t.o=[Math.max(-.5,Math.min(.5,Number(e.o[0])||0)),Math.max(-.5,Math.min(.5,Number(e.o[1])||0))]),typeof e.s==`number`&&e.s>0&&(t.s=e.s),typeof e.w==`string`&&e.w&&(t.w=e.w.slice(0,40)),t}var $g=e=>Number.isInteger(e)&&e>=0&&e<16384,e_=()=>$.status===`member`&&$.visits.some(e=>e.host===$.me);Xc.mayCommit=e=>{if(!ih.id)return!0;let t=$.me;if(e.length>qg)return J(`هذا كبير على جزيرة صديقتكِ. ابني شيئًا أصغر.`,4e3),!1;for(let n of e)n.b&&!(n.a&&n.a.w===t&&Yg(n.b)&&n.b.t===n.a.f&&!n.b.w)&&(n.b={...n.b,w:t});let n=e.find(e=>!Xg(e.a,e.b,t));if(n){let e=n.a?.w?Jg(n.a.w):Jg(ih.id);return J(e?`هذا من بناء `+e+`. غيّري ما بنيتِه أنتِ فقط.`:`غيّري ما بنيتِه أنتِ فقط.`,4e3),!1}return!0};var t_=0,n_=()=>performance.now()-t_<4e3;Xc.edited=(e,t)=>{ih.id?(t_=performance.now(),Gm({t:`edit`,d:e.map(e=>[e.k,t?e.a:e.b,t?e.b:e.a])})):e_()&&Gm({t:`cells`,d:e.map(e=>[e.k,t?e.b:e.a])})};var r_=new Set;function i_(e){if(!(!Array.isArray(e.d)||e.d.length>qg)){if(e.t===`edit`&&!ih.id&&$.visits.some(t=>t.guest===e.from&&t.host===$.me)){let t=[],n=!0;for(let r of e.d){if(!Array.isArray(r)||!$g(r[0])){n=!1;break}let i=Qg(r[1]),a=Qg(r[2]);if(i===void 0||a===void 0){n=!1;break}t.push([r[0],i,a]),Zg(H.get(r[0])||null,i)&&Xg(i,a,e.from)||(n=!1)}n?(dl(t.map(e=>[e[0],e[2]])),Gm({t:`cells`,skip:e.from,d:t.map(e=>[e[0],e[2]])}),r_.has(e.from)||(r_.add(e.from),J(Jg(e.from)+` تبني في جزيرتكِ!`,3500))):Gm({t:`cells`,to:e.from,d:e.d.filter(e=>Array.isArray(e)&&$g(e[0])).map(e=>[e[0],H.get(e[0])||null])})}else if(e.t===`cells`&&ih.id&&e.from===ih.id){let t=[];for(let n of e.d){if(!Array.isArray(n)||!$g(n[0]))continue;let e=Qg(n[1]);e!==void 0&&t.push([n[0],e])}t.length&&dl(t)}}}function a_(){for(let e of[...r_])$.visits.some(t=>t.guest===e&&t.host===$.me)||r_.delete(e)}var o_=e=>$.members.find(t=>t.id===e)?.name||``,s_=e=>document.getElementById(e),c_=``,l_=null,u_=()=>!!ih.id;function d_(e){c_=``;let t=lh(e),n=gh(e);!t||!n?(Wm({t:`endVisit`}),J(`لم تصل جزيرة صديقتكِ بعد. جرّبي بعد قليل.`,4e3)):(Dl(),l_={snap:Tl(),undo:cl.splice(0),redo:ll.splice(0),state:JSON.stringify(G)},wl.on=!0,ch(l_.snap),ih.id=e,dh(),Y.x-=n[0],Y.z-=n[1],Y.berth=Id,sl(t.voxels,Array.isArray(t.floors)?t.floors:[]),Xc.syncUndo(),qp(Ld),Xc.afterChange(),document.body.classList.add(`visiting`),X.mode!==`walk`&&s_(`tWalk`).click(),K.star(),J(`أهلًا بكِ في جزيرة `+o_(e)+`! تجوّلي وابني معها. قاربكِ ينتظركِ عند الرصيف.`,5e3))}function f_(e){if(!ih.id||!l_)return;let t=ih.id,n=l_;b_=t,e===`self`&&Wm({t:`endVisit`}),ih.id=``,dh();let r=gh(t)||[0,0];Y.x+=r[0],Y.z+=r[1],Y.berth=Pd,sl(n.snap.voxels,n.snap.floors),cl.length=0,cl.push(...n.undo),ll.length=0,ll.push(...n.redo),Object.assign(G,JSON.parse(n.state)),ch(null),l_=null,Xc.syncUndo(),Pu(),document.body.classList.remove(`visiting`),Zp()||Kp(!0),wl.on=!1,Xc.afterChange();let i=o_(t);e===`host`?J(i+` ودّعتكِ. إلى اللقاء!`,4e3):e===`away`?J(i?i+` ذهبت. أنتِ في قاربكِ الآن.`:`أنتِ في قاربكِ الآن.`,4e3):J(`أبحري إلى جزيرتكِ أو إلى صديقة أخرى.`,3500)}var p_=0;sh.hostChanged=e=>{clearTimeout(p_);let t=()=>{p_=window.setTimeout(()=>{n_()?t():ih.id&&e&&Array.isArray(e.voxels)&&(sl(e.voxels,Array.isArray(e.floors)?e.floors:[]),Xc.afterChange())},600)};t()};var m_=s_(`sailBtn`),h_=``,g_=()=>{};m_.onclick=()=>g_();function __(e,t,n,r=!1){g_=n,e!==h_&&(h_=e,m_.hidden=!e,m_.disabled=r,m_.classList.toggle(`bell`,e.startsWith(`bell`)||e.startsWith(`wait`)),m_.querySelector(`span`).textContent=t)}function v_(){if(ih.id)return``;for(let e of $.members){if(e.id===$.me||!e.online)continue;let t=gh(e.id);if(t&&Math.hypot(Y.x-(t[0]+Id.x),Y.z-(t[1]+Id.z))<7)return e.id}return``}var y_=``,b_=``;Wp.ui=()=>{if(X.mode!==`walk`){__(``,``,()=>{});return}if(!Zp()){ih.id&&Gp(Ld)?__(`leave`,`أبحري بالقارب`,()=>f_(`self`)):!ih.id&&Gp(Fd)?__(`board`,`أبحري بالقارب`,()=>Kp()):__(``,``,()=>{});return}if(!ih.id&&Bf()){__(`land`,`انزلي إلى الرصيف`,()=>qp());return}let e=$.status===`member`?v_():``;if(e===b_?e=``:b_=``,c_&&e!==c_&&(Wm({t:`unknock`}),c_=``),!e){y_=``,__(``,``,()=>{});return}let t=$.members.find(t=>t.id===e);c_===e?__(`wait`+e,`ننتظر `+t.name+`…`,()=>{},!0):t.closed||$.mutedBy.includes(e)?(y_!==e&&(y_=e,J(t.closed?t.name+` لا تستقبل زوارًا الآن.`:t.name+` مشغولة الآن. يمكنكِ زيارتها حين تدعوكِ.`,4e3)),__(``,``,()=>{})):(y_=``,__(`bell`+e,`اطرقي جرس `+t.name,()=>{c_=e,K.bell(),Wm({t:`knock`,host:e})}))},Wp.bumped=()=>J(ih.id?`أوصلي القارب إلى الرصيف.`:`أوصلي القارب إلى رصيفكِ لتنزلي، أو إلى رصيف صديقة لتطرقي جرسها.`,4e3);var x_=[];function S_(e){let t=o_(e.host||e.from||e.id);switch(e.t){case`knockOk`:J(`رنّ الجرس. ننتظر `+t+`…`,4e3);break;case`knockNo`:c_===e.host&&(c_=``),J(e.why===`closed`?t+` لا تستقبل زوارًا الآن.`:e.why===`muted`?t+` مشغولة الآن.`:e.why===`busy`?`أنتِ في زيارة الآن.`:t+` ليست على جزيرتها الآن.`,4e3);break;case`notNow`:c_===e.host&&(c_=``),J(t+` مشغولة الآن. يمكنكِ زيارتها حين تدعوكِ.`,4500);break;case`welcome`:ih.id||d_(e.host);break;case`invited`:K.bell(),J(t+` تدعوكِ لزيارة جزيرتها! أبحري إلى رصيفها.`,5e3);break;case`bye`:ih.id===e.host?f_(e.why===`host`?`host`:`away`):c_===e.host&&(c_=``);break;case`knock`:x_.includes(e.from)||x_.push(e.from),K.bell(),T_();break;case`unknock`:{let t=x_.indexOf(e.from);t>=0&&x_.splice(t,1),T_();break}case`visitEnd`:J(t+` عادت إلى قاربها.`,3500)}}function C_(){ih.id&&$.connected&&!$.visits.some(e=>e.guest===$.me&&e.host===ih.id)&&f_(`away`),$.status!==`member`&&(x_.length=0,T_(),c_=``),k_()}function w_(){ih.id&&f_(`away`)}function T_(){let e=s_(`knock`),t=x_[0];e.hidden=!t,t&&(s_(`knockText`).textContent=o_(t)+` تطرق جرس رصيفكِ`,s_(`knockYes`).onclick=()=>E_(t,!0),s_(`knockNo`).onclick=()=>E_(t,!1))}function E_(e,t){x_.splice(x_.indexOf(e),1),T_(),Wm({t:`answer`,to:e,yes:t}),K.tick(),t&&J(`أهلًا بـ`+o_(e)+`! ستصل إلى رصيفكِ.`,4e3)}var D_=e=>e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]);function O_(){s_(`visitBtn`).onclick=()=>{k_(!0),s_(`visitors`).classList.add(`open`)},s_(`visitors`).addEventListener(`click`,e=>{e.target===s_(`visitors`)&&s_(`visitors`).classList.remove(`open`)})}function k_(e){if(s_(`visitBtn`).hidden=$.status!==`member`||!!ih.id,!e&&!s_(`visitors`).classList.contains(`open`))return;let t=!!$.members.find(e=>e.id===$.me)?.closed,n=$.visits.filter(e=>e.host===$.me).map(e=>e.guest),r=`<h1>زوار جزيرتكِ</h1>
    <div class="row seg"><button class="btn${t?` ghost`:``}" id="vOpen">أستقبل الزوار</button><button class="btn${t?``:` ghost`}" id="vClose">لا أستقبل الآن</button></div>`;n.length&&(r+=`<h2>على جزيرتكِ الآن</h2>`+n.map(e=>`<div class="mem"><span class="nm">${D_(o_(e))}</span><button class="mini" data-bye="${e}">وداعًا</button></div>`).join(``)),$.muted.length&&(r+=`<h2>قلتِ لهن «ليس الآن»</h2>`+$.muted.filter(o_).map(e=>`<div class="mem"><span class="nm">${D_(o_(e))}</span><button class="mini ok" data-inv="${e}">ادعيها</button></div>`).join(``)),r+=`<div class="row"><button class="btn" id="vDone">تم</button></div>`,s_(`visitorsCard`).innerHTML=r,s_(`vOpen`).onclick=()=>{Wm({t:`door`,closed:!1}),K.tick()},s_(`vClose`).onclick=()=>{Wm({t:`door`,closed:!0}),K.tick()},s_(`vDone`).onclick=()=>s_(`visitors`).classList.remove(`open`),document.querySelectorAll(`#visitorsCard [data-bye]`).forEach(e=>e.onclick=()=>{Wm({t:`bye`,id:e.dataset.bye}),K.tick()}),document.querySelectorAll(`#visitorsCard [data-inv]`).forEach(e=>e.onclick=()=>{Wm({t:`invite`,id:e.dataset.inv}),K.tick(),J(`أرسلتِ دعوة إلى `+o_(e.dataset.inv)+`.`,3e3)})}Xc.afterChange=()=>{u_()||ld(!1),Nu(),Ap(),Cm(),Ol()},Xc.syncUndo=Dd,Xc.placed=lu,Il(),bm(),Ad(),yg(),Cl.saved=Xm;var A_=()=>ip($.status===`none`?null:Tm[$.color]??Tm[0]);jm.state=()=>{A_(),dh(),Cg(),C_(),rg(),a_()},jm.build=i_,jm.voice=ng,jm.connected=Ih,og(),jm.visit=S_,jm.gone=()=>w_(),O_(),jm.snap=fh,jm.live=Ag,Rg(),dh(),A_(),Um(),kl()||sl(al()),q(`soundBtn`).classList.toggle(`off`,G.muted),Td(),ld(!0),Pu(),Np(),window.innerWidth>=700&&q(`mission`).classList.add(`open`),G.seenIntro||q(`intro`).classList.add(`open`),window.addEventListener(`resize`,Lu),Lu();{let e=document.querySelector(`.top .actions`);new ResizeObserver(()=>document.documentElement.style.setProperty(`--toph`,e.offsetHeight+`px`)).observe(e)}window.innerWidth<window.innerHeight&&(Z.dist=44);var j_=performance.now();function M_(e){let t=Math.min(.05,(e-j_)/1e3);j_=e,ou(Yc),ju.copy(Z.target),Vf(t,e,Z.target.x+16,Z.target.z+16),Pp(t,e),Bg(t,e,Z.target.x+16,Z.target.z+16);{let e=Up();qu(t,e[0],e[1],e[2]),wm(e[0],e[1],e[2],Z.theta,W.fp?`fp`:X.mode)}pm(),Ll||Iu(t,e),zl.render(Bl,Vl)}var N_=0,P_=0,F_=0;function I_(e){let t=e-F_;F_=e,t>0&&t<250&&!document.hidden&&(P_++,t>30&&N_++,P_>=150&&(N_>90&&$u(),N_=P_=0)),M_(e),requestAnimationFrame(I_)}requestAnimationFrame(I_),window.__garden={tap:dm,pick:nd,voxels:H,state:G,cam:Z,stats:sd,heroCell:Up,tick:M_,fam:$,remoteBoats:Kg,voiceDebug:sg,copyOf:lh,here:ih,snapshot:Tl,setFinger:jp,clearFinger:Mp,camera:Vl,view:W};