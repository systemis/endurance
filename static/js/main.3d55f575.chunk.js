(this.webpackJsonpendurance=this.webpackJsonpendurance||[]).push([[0],{15:function(e,t,r){},33:function(e,t,r){},34:function(e,t,r){},41:function(e,t,r){},42:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),s=r(16),o=r.n(s),a=(r(33),r(34),r(3)),i=r(48),u=r(0),l=r(6);const j=Object(l.a)(((e,t)=>{var r;return{set:e,get:t,score:0,level:0,gameOver:!1,gameStarted:!1,musicEnabled:null!==(r=JSON.parse(localStorage.getItem("musicEnabled")))&&void 0!==r&&r,isSpeedingUp:!1,controls:{left:!1,right:!1},directionalLight:Object(c.createRef)(),camera:Object(c.createRef)(),ship:Object(c.createRef)(),sun:Object(c.createRef)(),sfx:Object(c.createRef)(),hasInteracted:!1,setHasInteracted:()=>e((e=>({hasInteracted:!0}))),setIsSpeedingUp:t=>e((e=>({isSpeedingUp:t}))),incrementLevel:()=>e((e=>({level:e.level+1}))),setScore:t=>e((e=>({score:t}))),setGameStarted:t=>e((e=>({gameStarted:t}))),setGameOver:t=>e((e=>({gameOver:t}))),enableMusic:t=>e((e=>({musicEnabled:t})))}})),b={gameOver:!1,score:0,gameSpeed:0,desiredSpeed:0,horizontalVelocity:0,colorLevel:0,shouldShiftItems:!1,currentMusicLevel:0,currentLevelLength:0,globalColor:new u.Color};var m=r(49),d=r(44),h=r(50),O=r.p+"static/media/spaceship.e86972b1.gltf",p=r.p+"static/media/noise.2793ebd0.png",f=r.p+"static/media/enginetextureflip.d0f77b17.png",x=r(2);const g=new u.Vector3;function y(e,t){let{children:r}=t;const{nodes:n,materials:s}=Object(m.a)(O,"https://www.gstatic.com/draco/versioned/decoders/1.4.0/"),o=j((e=>e.ship)),i=j((e=>e.camera)),l=Object(c.useRef)(),y=Object(c.useRef)(),v=Object(c.useRef)(),S=Object(c.useRef)(),w=Object(d.a)(p),M=Object(d.a)(f),z=Object(c.useRef)(),R=Object(c.useRef)(),_=Object(c.useRef)(),{clock:E}=Object(a.f)(),C=j((e=>e.gameStarted)),L=j((e=>e.gameOver)),V=Object(c.useRef)(j.getState().controls);Object(c.useEffect)((()=>j.subscribe((e=>V.current=e),(e=>e.controls))),[]),Object(c.useLayoutEffect)((()=>{i.current.rotation.set(0,Math.PI,0),i.current.position.set(0,4,-9),i.current.lookAt(g.set(o.current.position.x,o.current.position.y,o.current.position.z+10)),i.current.rotation.z=Math.PI,o.current.rotation.y=Math.PI}),[o,i]),Object(c.useLayoutEffect)((()=>{!C||L?(y.current.material.visible=!1,v.current.material.visible=!1,S.current.material.visible=!1,z.current.material.visible=!1,R.current.material.visible=!1,l.current.visible=!1):(y.current.material.visible=!0,v.current.material.visible=!0,S.current.material.visible=!0,z.current.material.visible=!0,R.current.material.visible=!0,l.current.visible=!0)}),[C,L]),Object(c.useLayoutEffect)((()=>{w.wrapS=w.wrapT=u.MirroredRepeatWrapping,w.repeat.set(1,1),w.anisotropy=16,M.wrapS=M.wrapT=u.MirroredRepeatWrapping,M.repeat.set(1,1),M.anisotropy=16}),[w,M]);const[I]=Object(c.useState)((()=>[new u.Vector2(.2,.8),new u.Vector2(.1,0),new u.Vector2(.3,1.5),new u.Vector2(.4,1.9),new u.Vector2(.01,7)])),[P]=Object(c.useState)((()=>[new u.Vector2(.2,0),new u.Vector2(.5,2),new u.Vector2(.01,8)])),[N]=Object(c.useState)((()=>[new u.Vector2(.01,0),new u.Vector2(.3,.8),new u.Vector2(.4,1.5),new u.Vector2(.5,1.9),new u.Vector2(.01,9)])),k=Object(c.useRef)(.7);return Object(a.d)(((e,t)=>{const r=1*t*2,c=E.getElapsedTime(),n=Math.sin(5*c),s=Math.sin(10*c),a=Math.sin(15*c),{left:u,right:j}=V.current;R.current.scale.x=a/50,R.current.scale.y=s/50,z.current.scale.x=a/50,z.current.scale.y=s/50,o.current.position.z-=b.gameSpeed*t*165,b.gameOver&&(b.horizontalVelocity=0),o.current.position.x+=b.horizontalVelocity*t*165,o.current.rotation.z=1.5*b.horizontalVelocity,o.current.rotation.y=Math.PI-.4*b.horizontalVelocity,o.current.rotation.x=-Math.abs(b.horizontalVelocity)/10,o.current.position.y-=n/200,o.current.rotation.x+=n/100,o.current.rotation.z+=Math.sin(4*c)/100,l.current.position.z=o.current.position.z+1,l.current.position.x=o.current.position.x,l.current.position.y-=n/80,i.current.position.z=o.current.position.z+13.5,i.current.position.y=o.current.position.y+5,i.current.position.x=o.current.position.x,i.current.rotation.y=Math.PI,(u&&j||!u&&!j)&&(b.horizontalVelocity<0&&(b.horizontalVelocity+r>0?b.horizontalVelocity=0:b.horizontalVelocity+=r),b.horizontalVelocity>0&&(b.horizontalVelocity-r<0?b.horizontalVelocity=0:b.horizontalVelocity-=r)),!b.gameOver&&b.gameSpeed>0&&(u&&!j&&(b.horizontalVelocity=Math.max(-.7,b.horizontalVelocity-r),R.current.scale.x=a/30,R.current.scale.y=n/30,z.current.scale.x=a/200,z.current.scale.y=n/200),!u&&j&&(b.horizontalVelocity=Math.min(.7,b.horizontalVelocity+r),z.current.scale.x=a/30,z.current.scale.y=n/30,R.current.scale.x=a/200,R.current.scale.y=n/200)),l.current.intensity=20-a/15,S.current.material.map.offset.y+=.01*(.4+b.gameSpeed)*t*165,v.current.material.map.offset.y-=.01*(.4+b.gameSpeed)*t*165,b.desiredSpeed>b.gameSpeed?(l.current.intensity=30-a/15,k.current<.95&&(k.current+.005*t*165>.95?k.current=.95:k.current+=.005*t*165)):k.current>.7&&(k.current-.005*t*165<.7?k.current=.7:k.current-=.005*t*165);const m=b.currentMusicLevel>.8?b.currentMusicLevel+.2:1;y.current.scale.z=a/15,y.current.scale.x=(k.current+a/15)*m,v.current.scale.z=a/15,v.current.scale.x=(.85+a/15)*m,S.current.scale.z=.9+a/15,S.current.scale.x=(.9+a/15)*m,_.current.material.color=b.globalColor})),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("pointLight",{ref:l,color:"tomato",decay:10,distance:40,intensity:5,position:[0,3,-5]}),Object(x.jsx)(h.a,{makeDefault:!0,ref:i,fov:75,rotation:[0,Math.PI,0],position:[0,10,-10]}),Object(x.jsxs)("group",{castShadow:!0,receiveShadow:!0,ref:o,position:[0,3,-10],...e,dispose:null,children:[r,Object(x.jsx)("mesh",{geometry:n.Ship_Body.geometry,children:Object(x.jsx)("meshStandardMaterial",{attach:"material",color:"lightblue",metalness:.8,reflectivity:1,clearcoat:1,roughness:0})}),Object(x.jsx)("mesh",{receiveShadow:!0,castShadow:!0,geometry:n.Ship_Body_1.geometry,material:s.Chassis}),Object(x.jsx)("mesh",{geometry:n.Ship_Body_2.geometry,children:Object(x.jsx)("meshBasicMaterial",{attach:"material",color:"orange"})}),Object(x.jsx)("mesh",{receiveShadow:!0,castShadow:!0,geometry:n.Ship_Body_3.geometry,material:s["Gray Metal"]}),Object(x.jsx)("mesh",{ref:_,geometry:n.Ship_Body_4.geometry,children:Object(x.jsx)("meshLambertMaterial",{attach:"material",color:"white"})}),Object(x.jsxs)("mesh",{ref:z,scale:[.1,.05,2],position:[1.4,.2,-7],children:[Object(x.jsx)("dodecahedronBufferGeometry",{args:[1.5,3]}),Object(x.jsx)("meshBasicMaterial",{transparent:!0,opacity:.8,color:"white"})]}),Object(x.jsxs)("mesh",{ref:R,scale:[.1,.05,2],position:[-1.4,.2,-7],children:[Object(x.jsx)("dodecahedronBufferGeometry",{args:[1.5,3]}),Object(x.jsx)("meshBasicMaterial",{transparent:!0,opacity:.8,color:"white"})]}),Object(x.jsxs)("mesh",{visible:!0,ref:y,position:[0,-.3,.3],rotation:[Math.PI/2,0,Math.PI],children:[Object(x.jsx)("latheBufferGeometry",{args:[I,20]}),Object(x.jsx)("meshLambertMaterial",{transparent:!0,opacity:1,color:"white"})]}),Object(x.jsxs)("mesh",{visible:!0,ref:v,position:[0,-.3,.25],rotation:[Math.PI/2,0,Math.PI],children:[Object(x.jsx)("latheBufferGeometry",{args:[P,30]}),Object(x.jsx)("meshLambertMaterial",{transparent:!0,opacity:.8,map:w,color:11184810,emissive:"red",emissiveIntensity:1})]}),Object(x.jsxs)("mesh",{visible:!0,ref:S,position:[0,-.3,0],rotation:[Math.PI/2,0,Math.PI],children:[Object(x.jsx)("latheBufferGeometry",{args:[N,50]}),Object(x.jsx)("meshLambertMaterial",{transparent:!0,alphaMap:M,map:M,color:"hotpink"})]})]})]})}function v(){return Object(x.jsxs)("mesh",{visible:!0,position:[0,.87,0],rotation:[0,0,0],children:[Object(x.jsx)("sphereGeometry",{attach:"geometry",args:[1,16,16]}),Object(x.jsx)("meshStandardMaterial",{attach:"material",color:"black",transparent:!0,opacity:1,roughness:1,metalness:0})]})}function S(e){let{children:t}=e;return Object(x.jsx)(c.Suspense,{fallback:Object(x.jsx)(v,{}),children:Object(x.jsx)(y,{children:t})})}m.a.preload(O,"https://www.gstatic.com/draco/versioned/decoders/1.4.0/");var w=r(45),M=r.p+"static/media/galaxy.a37e4a35.jpg";const z=1e3,R=6,_=-z/2*.6,E=z/2*.6,C=15,L=20,V=20,I=60,P=.8,N=40,k=[{name:"red",hex:"#ff2919",three:new u.Color(16722201)},{name:"pink",hex:"#ff69b4",three:new u.Color(16720272)},{name:"orange",hex:"#bd4902",three:new u.Color(12404994)},{name:"green",hex:"#26a300",three:new u.Color(2532096)},{name:"blue",hex:"#217aff",three:new u.Color(2124246)},{name:"purple",hex:"#9370D8",three:new u.Color(6898360)},{name:"white",hex:"#ffffff",three:new u.Color(7039851)},{name:"black",hex:"#000000",three:new u.Color(13421772)}];function B(){const{clock:e}=Object(a.f)(),t=j((e=>e.sun)),r=j((e=>e.ship)),n=Object(c.useMemo)((()=>new u.Color(1,.694,.168)),[]);return Object(a.d)(((c,n)=>{r.current&&(t.current.position.z=r.current.position.z-2e3,t.current.position.x=r.current.position.x);const s=b.currentMusicLevel;t.current.scale.x+=Math.sin(3*e.getElapsedTime())/3e3,t.current.scale.y+=Math.sin(3*e.getElapsedTime())/3e3,s>=.8&&t.current.scale.x<1.05?(t.current.scale.x+=s*n*2,t.current.scale.y+=s*n*2):t.current.scale.x>1&&(t.current.scale.x-=s*n*.5,t.current.scale.y-=s*n*.5)})),Object(x.jsxs)("mesh",{ref:t,position:[0,0,-2e3],children:[Object(x.jsx)("sphereGeometry",{attach:"geometry",args:[300,30,30]}),Object(x.jsx)("meshStandardMaterial",{fog:!1,emissive:n,emissiveIntensity:1,attach:"material",color:k[1].three})]})}function A(){const e=Object(d.a)(M),t=Object(c.useRef)(),r=Object(c.useRef)(),n=j((e=>e.ship));return Object(c.useLayoutEffect)((()=>{e.wrapS=e.wrapT=u.MirroredRepeatWrapping,e.repeat.set(1.8,1.8),e.anisotropy=16}),[e]),Object(a.d)(((e,c)=>{t.current.rotation.z+=.02*c*b.gameSpeed,r.current.rotation.z+=.02*c*b.gameSpeed,t.current.emissive=b.globalColor,n.current&&(t.current.position.x=n.current.position.x,r.current.position.x=n.current.position.x,t.current.position.z=n.current.position.z,r.current.position.z=n.current.position.z)})),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(w.a,{ref:r,radius:800,depth:100,count:1e4,factor:40,saturation:1,fade:!0}),Object(x.jsxs)("mesh",{ref:t,position:[0,10,-50],rotation:[0,0,Math.PI],children:[Object(x.jsx)("hemisphereLight",{intensity:.7}),Object(x.jsx)("sphereGeometry",{attach:"geometry",args:[2e3,10,10]}),Object(x.jsx)("meshPhongMaterial",{emissive:k[0].three,emissiveIntensity:.1,fog:!1,side:u.BackSide,attach:"material",map:e})]})]})}function F(){const e=Object(c.useRef)();return Object(a.d)(((t,r)=>{e.current.near=100,e.current.far=800,e.current.color=b.globalColor})),Object(x.jsx)("fog",{ref:e,attach:"fog",args:["#bf6c00",600,800]})}function T(){return Object(x.jsxs)(c.Suspense,{fallback:null,children:[Object(x.jsx)(B,{}),Object(x.jsx)(A,{}),Object(x.jsx)(F,{})]})}var G=(e,t)=>Math.floor(Math.random()*(t-e+1))-t;function U(e,t,r,c){const n=r-e,s=c-t;return Math.sqrt(n*n+s*s)}const D=_+N/2,q=E-N/2;function H(){const e=Object(c.useRef)(),t=Object(c.useRef)(),r=j((e=>e.ship)),n=j((e=>e.level)),s=Object(c.useMemo)((()=>new u.Object3D),[]),o=Object(c.useMemo)((()=>{const e=[];for(let t=0;t<I;t++){const t=G(D,q),r=10,c=-900+G(-400,400);e.push({x:t,y:r,z:c})}return e}),[]),i=Object(c.useMemo)((()=>-n*z*R-z*(R-2.6)),[n]),l=Object(c.useMemo)((()=>-n*z*R-z*R),[n]);return Object(a.d)(((c,n)=>{let a=!1;r.current&&(r.current.position.z>i||r.current.position.z<l)&&(a=!0),o.forEach(((c,o)=>{if(r.current){if(c.z-r.current.position.z>-15&&(c.x-r.current.position.x>-15||c.x-r.current.position.x<15)){U(r.current.position.x,r.current.position.z,c.x,c.z)<12&&(b.gameSpeed=0,b.gameOver=!0)}c.z-r.current.position.z>15&&(a?(c.z=r.current.position.z-z+G(-200,0),c.y=-V,c.x=G(D,q)):(c.z=r.current.position.z-3.1*z+G(-200,0),c.y=-V,c.x=G(D,q))),c.y<V/2&&(c.y+100*n>V/2?c.y=V/2:c.y+=100*n)}t.current.color=b.globalColor,s.position.set(c.x,c.y,c.z),s.updateMatrix(),e.current.setMatrixAt(o,s.matrix)})),e.current.instanceMatrix.needsUpdate=!0})),Object(x.jsxs)("instancedMesh",{ref:e,args:[null,null,I],children:[Object(x.jsx)("boxBufferGeometry",{args:[V,V,V]}),Object(x.jsx)("meshBasicMaterial",{ref:t,color:k[2].three})]})}const J=_+N/2,W=E-N/2,X=50;function K(){const e=Object(c.useRef)(),t=Object(c.useRef)(),r=j((e=>e.ship)),n=j((e=>e.level)),s=j((e=>e.gameStarted)),o=Object(c.useMemo)((()=>new u.Object3D),[]),i=Object(c.useMemo)((()=>{const e=[];for(let t=0;t<L;t++){const t=G(J,W),r=10,c=-900+G(-400,400);e.push({x:t,y:r,z:c})}return e}),[]),l=Object(c.useMemo)((()=>-n*z*R-z*(R-2.6)),[n]),m=Object(c.useMemo)((()=>-n*z*R-z*R),[n]);return Object(a.d)(((c,n)=>{let a=!1;r.current&&(r.current.position.z>l||r.current.position.z<m)&&(a=!0),i.forEach(((c,i)=>{if(r.current){const e=new u.Vector3(r.current.position.x-c.x,0,r.current.position.z-c.z).normalize();s&&(c.z+=e.z*n*X);U(r.current.position.x,r.current.position.z,c.x,c.z)<12&&(b.gameSpeed=0,b.gameOver=!0),c.z-r.current.position.z>15&&(a?(c.z=r.current.position.z-z+G(-200,0),c.y=-C,c.x=G(J,W)):(c.z=r.current.position.z-3.1*z+G(-200,0),c.y=-C,c.x=G(J,W))),c.y<C/2&&(c.y+100*n>C/2?c.y=C/2:c.y+=100*n)}t.current.color=b.globalColor,o.position.set(c.x,c.y,c.z),o.updateMatrix(),e.current.setMatrixAt(i,o.matrix)})),e.current.instanceMatrix.needsUpdate=!0})),Object(x.jsxs)("instancedMesh",{ref:e,args:[null,null,L],children:[Object(x.jsx)("circleBufferGeometry",{args:[C,C,C]}),Object(x.jsx)("meshBasicMaterial",{ref:t,color:k[2].three})]})}var Q=r(46);function Y(){const e=j((e=>e.ship)),t=Object(c.useRef)(),r=Object(c.useRef)();return Object(a.d)(((c,n)=>{e.current&&(t.current.position.z=e.current.position.z,r.current.position.z=e.current.position.z,(e.current.position.x<=_+N/2||e.current.position.x>=E-N/2)&&(b.gameSpeed=0,b.gameOver=!0)),r.current.material.color=b.globalColor,t.current.material.color=b.globalColor})),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Q.a,{args:[N,2*z,8],position:[_,0,-5],rotation:[Math.PI/2,0,Math.PI],ref:r,children:Object(x.jsx)("meshBasicMaterial",{attach:"material",color:k[0].three})}),Object(x.jsx)(Q.a,{args:[N,2*z,8],position:[E,0,-5],rotation:[Math.PI/2,0,Math.PI],ref:t,children:Object(x.jsx)("meshBasicMaterial",{attach:"material",color:k[0].three})})]})}var Z=r(23),$=r(8),ee=r(19),te=r(22),re=r(24),ce=r(25),ne=r(20);function se(){const e=Object(c.useRef)(),{scene:t,gl:r,size:n,camera:s}=Object(a.f)(),o=Object(c.useRef)(0),i=j((e=>e.musicEnabled));return Object(c.useEffect)((()=>{e.current.setSize(n.width,n.height)}),[n]),Object(a.d)(((t,r)=>{if(i){const t=e.current.passes[1];b.currentMusicLevel>o.current?o.current=b.currentMusicLevel:o.current-=.5*r,t.strength=o.current>.8?o.current:.8}e.current.render()}),1),Object(x.jsxs)("effectComposer",{ref:e,args:[r],children:[Object(x.jsx)("renderPass",{attachArray:"passes",scene:t,camera:s}),Object(x.jsx)("unrealBloomPass",{attachArray:"passes",args:[void 0,.8,1,.4]}),Object(x.jsx)("shaderPass",{attachArray:"passes",args:[ne.a],"material-uniforms-resolution-value":[1/n.width,1/n.height]})]})}Object(a.c)({EffectComposer:Z.a,ShaderPass:$.a,RenderPass:ee.a,UnrealBloomPass:re.a,SSAOPass:te.a,AfterimagePass:ce.a});const oe=[];function ae(e,t){let r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];Object(c.useEffect)((()=>{const c=c=>{if(-1!==e.indexOf(c.key)){const e=!!oe[c.keyCode];oe[c.keyCode]=!0,!r&&e||t(!0)}},n=c=>{-1!==e.indexOf(c.key)&&(oe[c.keyCode]=!1,r&&t(!1))};return window.addEventListener("keydown",c,{passive:!0}),window.addEventListener("keyup",n,{passive:!0}),()=>{window.removeEventListener("keydown",c),window.removeEventListener("keyup",n)}}),[e,t,r])}function ie(){const e=j((e=>e.set));return ae(["ArrowLeft","a","A"],(t=>e((e=>({...e,controls:{...e.controls,left:t}}))))),ae(["ArrowRight","d","D"],(t=>e((e=>({...e,controls:{...e.controls,right:t}}))))),null}const ue=e=>e.ship,le=e=>e.setScore,je=e=>e.gameStarted,be=e=>e.setIsSpeedingUp,me=e=>e.setGameOver;function de(){const e=j(ue),t=j(le),r=j(je),n=j(be),s=j(me),o=j((e=>e.level));return Object(c.useEffect)((()=>{b.currentLevelLength=-o*z*R}),[o]),Object(c.useEffect)((()=>{r&&(b.desiredSpeed=P)}),[r]),Object(a.d)(((c,o)=>{const a=1*o*.15;r&&!b.gameOver&&(b.gameSpeed<b.desiredSpeed?(n(!0),b.gameSpeed+a>b.desiredSpeed?b.gameSpeed=b.desiredSpeed:b.gameSpeed+=a):n(!1)),e.current&&(b.score=Math.abs(e.current.position.z)-10,b.shouldShiftItems=e.current.position.z<-400&&e.current.position.z<b.currentLevelLength-400&&e.current.position.z>b.currentLevelLength-1e3),r&&b.gameOver&&(t(Math.abs(e.current.position.z)-10),s(!0))})),null}function he(e){let{materialRef:t}=e;const r=Object(c.useRef)(0),n=Object(c.useRef)(0),s=Object(c.useRef)(0),o=Object(c.useRef)(0),i=Object(c.useRef)(0),u=Object(c.useRef)(0),l=Object(c.useRef)(0);return Object(a.d)(((e,t)=>{if(0===b.colorLevel&&b.globalColor.set(k[0].three),6===b.colorLevel){const e=3*t;s.current<1?(s.current+=e,b.globalColor.lerpColors(k[0].three,k[2].three,s.current)):o.current<1?(o.current+=e,b.globalColor.lerpColors(k[2].three,k[3].three,o.current)):i.current<1?(i.current+=e,b.globalColor.lerpColors(k[3].three,k[1].three,i.current)):u.current<1?(u.current+=e,b.globalColor.lerpColors(k[1].three,k[5].three,u.current)):l.current<1?(l.current+=e,b.globalColor.lerpColors(k[5].three,k[0].three,l.current)):(s.current=0,o.current=0,i.current=0,u.current=0,l.current=0),n.current=0}else b.colorLevel>n.current&&(b.globalColor.lerpColors(k[n.current].three,k[b.colorLevel].three,r.current),r.current+t*b.gameSpeed*.5>1?r.current=1:r.current+=t*b.gameSpeed*.5,1===r.current&&(n.current=b.colorLevel,r.current=0))})),null}var Oe=r.p+"static/media/intro-loop.85c70e50.mp3",pe=r.p+"static/media/main-nodrums.b36a5309.mp3",fe=r.p+"static/media/main-onlydrums.f5b7b0b0.mp3";function xe(){const e=Object(c.useRef)(),t=Object(c.useRef)(),r=Object(c.useRef)(),n=Object(c.useRef)(),s=j((e=>e.musicEnabled)),o=j((e=>e.gameStarted)),i=j((e=>e.gameOver)),l=j((e=>e.camera)),m=j((e=>e.level)),d=j((e=>e.hasInteracted)),[h]=Object(c.useState)((()=>new u.AudioListener)),O=Object(a.e)(u.AudioLoader,Oe),p=Object(a.e)(u.AudioLoader,pe),f=Object(a.e)(u.AudioLoader,fe),g=Object(c.useRef)(),y=Object(c.useRef)(),v=Object(c.useRef)(1),S=Object(c.useRef)(0),w=Object(c.useRef)(0),M=Object(c.useRef)(!0),z=Object(c.useRef)(!1);return Object(c.useEffect)((()=>{d&&s&&e.current.context.resume()}),[d,s]),Object(c.useEffect)((()=>{e.current.setBuffer(O)}),[O]),Object(c.useEffect)((()=>{t.current.setBuffer(p),g.current=t.current.context.createBiquadFilter(),g.current.type="lowpass",g.current.frequency.value=0,t.current.setFilter(g.current)}),[p]),Object(c.useEffect)((()=>{r.current.setBuffer(f),y.current=new u.AudioAnalyser(r.current,32)}),[f]),Object(c.useEffect)((()=>{var c,n;s||(null!==(c=e.current)&&void 0!==c&&c.isPlaying&&e.current.stop(),null!==(n=t.current)&&void 0!==n&&n.isPlaying&&(t.current.stop(),r.current.stop()))}),[s]),Object(c.useEffect)((()=>{var c;s&&!i?e.current.isPlaying||(e.current.play(),M.current=!0):null!==(c=e.current)&&void 0!==c&&c.isPlaying&&e.current.stop();if(e.current.setLoop(!0),t.current.setLoop(!0),r.current.setLoop(!0),l.current){const e=l.current;return e.add(h),()=>e.remove(h)}}),[s,O,p,f,o,i,l,h]),Object(c.useEffect)((()=>{m>0&&m%2===0?(t.current.setPlaybackRate(1+.02*m),r.current.setPlaybackRate(1+.02*m)):0===m&&(t.current.setPlaybackRate(1),r.current.setPlaybackRate(1))}),[m]),Object(a.d)(((c,n)=>{if(s){if(y.current){const e=u.MathUtils.inverseLerp(0,255,y.current.getFrequencyData()[0]);b.currentMusicLevel=e}o&&!t.current.isPlaying&&e.current.context.currentTime.toFixed(1)%9.6===0&&(z.current=!0,t.current.play(),r.current.play(),t.current.setVolume(0),r.current.setVolume(0)),o&&!i&&S.current<1&&(t.current.isPlaying||(t.current.play(),r.current.play()),g.current.frequency.value+=4e3*n,S.current+.2*n>1?(S.current=1,w.current=1):(S.current+=.2*n,w.current+=.2*n),v.current-.2*n<0?v.current=0:v.current-=.2*n,e.current.setVolume(v.current),t.current.setVolume(S.current),r.current.setVolume(w.current)),i&&v.current<1&&(e.current.isPlaying||e.current.play(),g.current.frequency.value-=4e3*n,S.current-.2*n<0?(S.current=0,w.current=0):(S.current-=.2*n,w.current-=.2*n),v.current+.2*n>1?v.current=1:v.current+=.2*n,e.current.setVolume(v.current),t.current.setVolume(S.current),r.current.setVolume(w.current))}})),Object(x.jsxs)("group",{ref:n,children:[Object(x.jsx)("audio",{ref:e,args:[h]}),Object(x.jsx)("audio",{ref:t,args:[h]}),Object(x.jsx)("audio",{ref:r,args:[h]})]})}function ge(){return Object(x.jsx)(c.Suspense,{fallback:null,children:Object(x.jsx)(xe,{})})}var ye=r.p+"static/media/speedup2.ed639f5a.mp3";function ve(){const e=Object(c.useRef)(),t=Object(c.useRef)(),r=j((e=>e.camera)),n=j((e=>e.musicEnabled)),s=j((e=>e.level)),o=j((e=>e.gameStarted)),[i]=Object(c.useState)((()=>new u.AudioListener)),l=Object(a.e)(u.AudioLoader,ye);return Object(c.useEffect)((()=>{if(e.current.setBuffer(l),n?e.current.setVolume(.5):e.current.setVolume(0),r.current){const e=r.current;return e.add(i),()=>e.remove(i)}}),[l,n,r,i]),Object(c.useEffect)((()=>{o&&s>0&&(e.current.setBuffer(l),e.current.play())}),[o,s,l]),Object(x.jsx)("group",{ref:t,children:Object(x.jsx)("audio",{ref:e,args:[i]})})}function Se(){return Object(x.jsx)(c.Suspense,{fallback:null,children:Object(x.jsx)(ve,{})})}var we=r(47);const Me=e=>"Loading: ".concat(e.toFixed(0),"%");function ze(e){let{active:t,progress:r,dataInterpolation:n=Me}=e;const s=c.useRef(0),o=c.useRef(0),a=c.useRef(null),i=c.useCallback((()=>{a.current&&(s.current+=(r-s.current)/2,(s.current>.95*r||100===r)&&(s.current=r),a.current.innerText=n(s.current),s.current<r&&(o.current=requestAnimationFrame(i)))}),[n,r]);return c.useEffect((()=>(i(),()=>cancelAnimationFrame(o.current))),[i]),Object(x.jsx)("div",{style:{...Re.container,opacity:t?1:0},children:Object(x.jsx)("div",{children:Object(x.jsxs)("div",{style:{...Re.inner},children:[Object(x.jsx)("div",{style:{...Re.bar,transform:"scaleX(".concat(r/100,")")}}),Object(x.jsx)("div",{style:{marginTop:"1.5rem"},children:Object(x.jsx)("span",{ref:a,style:{...Re.data}})})]})})})}const Re={container:{display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 300ms ease",zIndex:1e3},inner:{width:206,height:26,textAlign:"center",borderRadius:"5px",boxShadow:"0 0 20px 0px #bd4902",border:"3px solid #bd4902"},bar:{height:20,width:"100%",background:"#bd4902",transition:"transform 200ms",transformOrigin:"left center",boxShadow:"0 0 20px 0px #bd4902"},data:{textAlign:"center",fontVariantNumeric:"tabular-nums",marginTop:"2rem",color:"#f0f0f0",fontSize:"2em",fontFamily:'\'Commando\', mono, monospace, -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Helvetica Neue", Helvetica, Arial, Roboto, Ubuntu, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',whiteSpace:"nowrap",textShadow:"0 0 20px #bd4902"}};r(15);var _e=()=>{const[e,t]=Object(c.useState)(!0),[r,n]=Object(c.useState)(!0),[s,o]=Object(c.useState)(!1),{active:a,progress:i}=Object(we.a)(),u=j((e=>e.gameStarted)),l=j((e=>e.gameOver)),b=j((e=>e.setGameStarted)),m=j((e=>e.musicEnabled)),d=j((e=>e.enableMusic)),h=j((e=>e.setHasInteracted));Object(c.useEffect)((()=>{u||l?t(!1):u||t(!0)}),[u,a,l]),Object(c.useEffect)((()=>{let e;return s===r&&(e=setTimeout((()=>n(!s)),300)),()=>clearTimeout(e)}),[s,r]),Object(c.useEffect)((()=>{localStorage.setItem("musicEnabled",JSON.stringify(m))}),[m]),Object(c.useEffect)((()=>{i>=100&&o(!0)}),[i]);return e?Object(x.jsx)("div",{onClick:()=>h(),className:"game__container",style:{opacity:e?1:0,background:r?"#141622FF":"#141622CC"},children:Object(x.jsx)("div",{className:"game__menu",children:Object(x.jsx)("div",{className:"game__subcontainer",children:s?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{onClick:()=>{b(!0)},className:"game__menu-button",children:"STA>RT"}),Object(x.jsxs)("div",{className:"game__menu-options",children:[Object(x.jsx)("button",{onClick:()=>{d(!m)},className:"game__menu-button game__menu-button-music",children:"TURN MUSIC ".concat(m?"OF>F":"O<N")}),Object(x.jsxs)("span",{className:"game__menu-controls",children:[Object(x.jsx)("p",{children:"Controls"}),"\u2190 a / d \u2192"]})]})]}):Object(x.jsx)(ze,{active:a,progress:i})})})}):null},Ee=r(21);r(41);const Ce=()=>"".concat(b.score.toFixed(0));function Le(){const e=j((e=>e.set)),t=j((e=>e.level)),r=j((e=>e.gameOver)),n=j((e=>e.gameStarted)),s=j((e=>e.isSpeedingUp)),[o,i]=Object(c.useState)(!1),[u,l]=Object(c.useState)(!1),[b,m]=Object(c.useState)(!1),[d,h]=Object(c.useState)(!1);let O=Date.now();const p=Object(c.useRef)();let f=Ce();return Object(c.useEffect)((()=>Object(a.b)((()=>{const e=Date.now();e-O>33.3333&&(p.current&&(p.current.innerText=Ce()),O=e)})))),Object(c.useEffect)((()=>{u&&(window.oncontextmenu=function(e){return e.preventDefault(),e.stopPropagation(),!1})}),[u]),Object(c.useEffect)((()=>{i(!(!n||r))}),[n,r]),Object(c.useEffect)((()=>{Ee.isMobile?l(!0):l(!1)}),[]),Object(c.useEffect)((()=>{e((e=>({...e,controls:{...e.controls,left:b}})))}),[e,b]),Object(c.useEffect)((()=>{e((e=>({...e,controls:{...e.controls,right:d}})))}),[e,d]),o?Object(x.jsxs)("div",{className:"hud",children:[t>0&&s&&Object(x.jsx)("div",{className:"center",children:Object(x.jsx)("h3",{className:"center__speedup",children:"SPEED UP"})}),u&&Object(x.jsxs)("div",{className:"controls",children:[Object(x.jsx)("button",{onTouchStart:()=>m(!0),onTouchEnd:()=>m(!1),className:"control control__left ".concat(b?"control-active":""),children:"<"}),Object(x.jsx)("button",{onTouchStart:()=>h(!0),onTouchEnd:()=>h(!1),className:"control control__right ".concat(d?"control-active":""),children:">"})]}),Object(x.jsx)("div",{className:"bottomRight",children:Object(x.jsxs)("div",{className:"score ".concat(u?"score__withcontrols":""),children:[Object(x.jsx)("h3",{className:"score__title",children:"LEVEL"}),Object(x.jsx)("h1",{className:"score__number",children:t+1}),Object(x.jsx)("h3",{className:"score__title",children:"SCORE"}),Object(x.jsx)("h1",{ref:p,className:"score__number",children:f})]})})]}):null}var Ve=()=>{const e=localStorage.getItem("highscores")?JSON.parse(localStorage.getItem("highscores")):[...Array(3).fill(0)],[t,r]=Object(c.useState)(!1),[n,s]=Object(c.useState)(!1),[o,a]=Object(c.useState)(e),i=j((e=>e.gameOver)),u=j((e=>e.score));Object(c.useEffect)((()=>{let e;return i!==n&&(e=setTimeout((()=>s(i)),500)),()=>clearTimeout(e)}),[i,n]),Object(c.useEffect)((()=>{r(!!i)}),[i]),Object(c.useEffect)((()=>{if(i&&o.some((e=>u>e))){const e=o.sort(((e,t)=>e-t));e[0]=u.toFixed(0);const t=e.sort(((e,t)=>t-e));a(t),localStorage.setItem("highscores",JSON.stringify(t))}}),[i,o,u]);return t?Object(x.jsx)("div",{className:"game__container",style:{opacity:t?1:0,background:n?"#141622FF":"#141622CC"},children:Object(x.jsxs)("div",{className:"game__menu",children:[Object(x.jsx)("h1",{className:"game__score-gameover",children:"GAME OVER"}),Object(x.jsxs)("div",{className:"game__scorecontainer",children:[Object(x.jsxs)("div",{className:"game__score-left",children:[Object(x.jsx)("h1",{className:"game__score-title",children:"SCORE"}),Object(x.jsx)("h1",{className:"game__score",children:u.toFixed(0)})]}),Object(x.jsxs)("div",{className:"game__score-right",children:[Object(x.jsx)("h1",{className:"game__score-title",children:"HIGH SCORES"}),o.map(((e,t)=>Object(x.jsxs)("div",{className:"game__score-highscore",children:[Object(x.jsx)("span",{className:"game__score-number",children:t+1}),Object(x.jsx)("span",{style:{textDecoration:u.toFixed(0)===e?"underline":"none"},className:"game__score-score",children:e>0?e:"-"})]},"".concat(t,"-").concat(u))))]})]}),Object(x.jsx)("button",{onClick:()=>{window.location.reload()},className:"game__menu-button",children:"RESTART"})]})}):null};function Ie(e){let{color:t,bgColor:r}=e;const n=j((e=>e.directionalLight));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(a.a,{gl:{antialias:!1,alpha:!1},mode:"concurrent",dpr:[1,1.5],style:{background:"".concat(r)},children:Object(x.jsxs)(c.Suspense,{fallback:null,children:[Object(x.jsx)(de,{}),Object(x.jsx)(T,{}),Object(x.jsx)("directionalLight",{ref:n,intensity:3,position:[0,Math.PI,0]}),Object(x.jsx)("ambientLight",{intensity:.1}),Object(x.jsx)(S,{children:n.current&&Object(x.jsx)("primitive",{object:n.current.target})}),Object(x.jsx)(Y,{}),Object(x.jsx)(H,{}),Object(x.jsx)(K,{}),Object(x.jsx)(ie,{}),Object(x.jsx)(se,{}),Object(x.jsx)(he,{}),Object(x.jsx)(ge,{}),Object(x.jsx)(Se,{}),Object(x.jsx)(i.a,{all:!0})]})}),Object(x.jsx)(Le,{}),Object(x.jsx)(Ve,{}),Object(x.jsx)(_e,{})]})}o.a.createRoot(document.getElementById("root")).render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(Ie,{bgColor:"#ff2919"})}))}},[[42,1,2]]]);
//# sourceMappingURL=main.3d55f575.chunk.js.map