(function(){var m,n=this,p=function(a){return"string"==typeof a},aa=/^[\w+/_-]+[=]{0,2}$/,q=null,ba=function(){},t=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ca=function(a){var b=t(a);return"array"==b||"object"==b&&"number"==typeof a.length},da=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},ea="closure_uid_"+(1E9*Math.random()>>>0),fa=0,ha=function(a,b,c){return a.call.apply(a.bind,arguments)},ia=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},u=function(a,b,c){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return u.apply(null,arguments)},ja=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},w=Date.now||function(){return+new Date},x=function(a,b){function c(){}c.prototype=b.prototype;a.Ua=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Pa=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var ka;var y=Array.prototype.indexOf?function(a,b){var c;return Array.prototype.indexOf.call(a,b,c)}:function(a,b){var c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b){var c;Array.prototype.forEach.call(a,b,c)}:function(a,b){for(var c,d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},la=Array.prototype.map?function(a,b){var c;return Array.prototype.map.call(a,b,c)}:function(a,b){for(var c,d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},ma=Array.prototype.some?function(a,b){var c;return Array.prototype.some.call(a,b,c)}:function(a,b){for(var c,d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},na=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var oa=function(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};var pa=function(a,b,c,d){var e="";a&&(e+=a+":");c&&(e+="//",b&&(e+=b+"@"),e+=c,d&&(e+=":"+d));return e},B=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,qa=function(a){return a?decodeURI(a):a};var ra=["googleads.g.doubleclick.net","adclick.g.doubleclick.net","www.googleadservices.com","adclick.googleadservices.com"];var sa={CLOSE:"c",DIRECTIONS:"d",IN_APP_PURCHASE:"p",LOCATION:"l",TELEPHONE:"t",LOCATION_FORMAT_MAP:"l_m",LOCATION_FORMAT_LANDING_PAGE:"l_l",LOCATION_FORMAT_STORE_INFO:"l_s",LOCATION_FORMAT_DIRECTIONS:"l_d",LOCATION_FORMAT_CALL:"l_c",LOCATION_FORMAT_TEXT:"l_t",LOCATION_FORMAT_IMAGE:"l_i",QUERY:"q"};var ta=document,C=window;var D=function(a,b){this.Ma=a;this.P=b;var c=document.documentMode;this.ja=c&&10>c;this.w={};this.J=!1},wa=function(a){a.J=!0;for(var b in a.w)a.w[b].W&&ua(a,b),va(a,b)},xa=function(a,b){var c=b.n;switch(b.t){case 1:var d=b.d;c=E(a,c);c.W(d);break;case 2:d=a;var e=E(d,c);e.X=!0;va(d,c)}},E=function(a,b){a.w[b]||(a.w[b]={X:!1,L:[],W:null});return a.w[b]},va=function(a,b){var c=E(a,b);if(c.X){for(var d=c.L.length,e=0;e<d;e++)a.sendMessage(b,c.L[e]);c.L=[]}},ua=function(a,b){if(a.J){var c={t:2};c.s=a.P;c.n=b;a.send(c)}};D.prototype.N=function(a,b){var c=E(this,a);c.W=b;ua(this,a)};D.prototype.sendMessage=function(a,b){var c=E(this,a);this.J&&c.X?(c={t:1},c.s=this.P,c.n=a,c.d=b,this.send(c)):c.L.push(b)};D.prototype.Ba=function(){return this.J};var ya=function(a,b){var c,d;for(d in a)b.call(c,a[d],d,a)},za=function(a,b){var c,d={},e;for(e in a)b.call(c,a[e],e,a)&&(d[e]=a[e]);return d},Aa=function(a,b){var c,d;for(d in a)if(b.call(c,a[d],d,a))return d};var Ba=function(a){Ba[" "](a);return a};Ba[" "]=ba;var F=function(){},Ca="function"==typeof Uint8Array,Da=function(a,b){a.a=null;b||(b=[]);a.Ta=void 0;a.l=-1;a.b=b;a:{var c=a,d=-1,e=c.b.length,f=-1;if(e&&(f=e-1,(e=c.b[f])&&"object"==typeof e&&"array"!=t(e)&&!(Ca&&e instanceof Uint8Array))){c.D=f-c.l;c.g=e;break a}-1<d?(c.D=Math.max(d,f+1-c.l),c.g=null):c.D=Number.MAX_VALUE}a.Qa={}},Ea=[],Fa=function(a,b){if(b<a.D){var c=b+a.l,d=a.b[c];return d===Ea?a.b[c]=[]:d}if(a.g)return d=a.g[b],d===Ea?a.g[b]=[]:d},Ga=function(a,b,c){if(b<a.D)a.b[b+a.l]=c;else{var d=a.D+a.l;a.b[d]||(a.g=a.b[d]={});a.g[b]=c}},G=function(a,b,c,d){c!==d?Ga(a,b,c):a.b[b+a.l]=null},Ha=function(a,b,c){a.a||(a.a={});var d=c?c.b:c;a.a[b]=c;Ga(a,b,d)};F.prototype.toString=function(){return this.b.toString()};F.prototype.getExtension=function(a){if(this.g){this.a||(this.a={});var b=a.Ra;if(a.Sa){if(a.Ca())return this.a[b]||(this.a[b]=la(this.g[b]||[],function(b){return new a.ta(b)})),this.a[b]}else if(a.Ca())return!this.a[b]&&this.g[b]&&(this.a[b]=new a.ta(this.g[b])),this.a[b];return this.g[b]}};F.prototype.clone=function(){return new this.constructor(Ia(this.b))};var Ia=function(a){if("array"==t(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?Ia(d):d)}return b}if(Ca&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?Ia(d):d);return b};var Ja=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var La=function(){this.ha="";this.ma=Ka},Ka={};var Ma=function(a,b){var c=b instanceof La&&b.constructor===La&&b.ma===Ka?b.ha:"type_error:TrustedResourceUrl";a.src=c;if(null===q){a:{c=n.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&aa.test(c))break a;c=null}q=c||""}(c=q)&&a.setAttribute("nonce",c)};var Na=function(a,b,c){function d(c){c&&b.appendChild(p(c)?a.createTextNode(c):c)}for(var e=1;e<c.length;e++){var f=c[e];if(!ca(f)||da(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(da(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"==t(f)){g="function"==typeof f.item;break a}}g=!1}z(g?na(f):f,d)}}},Oa=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0},Pa=function(a,b){a.appendChild(b)},Qa=function(a,b){Na(9==a.nodeType?a:a.ownerDocument||a.document,a,arguments)},Ra=function(a){return a&&a.parentNode?a.parentNode.removeChild(a):null},Sa=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a},Ta=function(a){this.T=a||n.document||document};m=Ta.prototype;m.getElementsByTagName=function(a,b){var c=b||this.T;return c.getElementsByTagName(String(a))};m.createElement=function(a){return this.T.createElement(String(a))};m.createTextNode=function(a){return this.T.createTextNode(String(a))};m.appendChild=Pa;m.append=Qa;m.canHaveChildren=Oa;m.removeNode=Ra;m.contains=Sa;var Va=function(a){Ua();var b=new La;b.ha=a;return a=b},Ua=ba;var Wa=function(){var a=H;try{var b;if(b=!!a&&null!=a.location.href)a:{try{Ba(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},Xa=function(a,b){var c;if(a)for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(c,a[d],d,a)};var Ya=Ja(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});n.addEventListener("test",null,b)}catch(c){}return a});function Za(a){return a?a.passive&&Ya()?a:a.capture||!1:a}var $a=function(a,b,c){var d;a.addEventListener&&a.addEventListener(b,c,Za(d))},ab=function(a,b,c){var d;a.removeEventListener&&a.removeEventListener(b,c,Za(d))};var cb=function(a,b){var c=n;var d=void 0===d?!1:d;bb(c,a,b,d)},bb=function(a,b,c,d){var e=!1;e=void 0===e?!1:e;d=void 0===d?!1:d;a.google_image_requests||(a.google_image_requests=[]);var f=a.document.createElement("img");if(c||d){var g=function(b){c&&c(b);if(d){b=a.google_image_requests;var e=y(b,f);0<=e&&Array.prototype.splice.call(b,e,1)}ab(f,"load",g);ab(f,"error",g)};$a(f,"load",g);$a(f,"error",g)}e&&(f.referrerPolicy="no-referrer");f.src=b;a.google_image_requests.push(f)};var db=function(a,b){var c;var d=void 0===d?document:d;var e=(d?new Ta(9==d.nodeType?d:d.ownerDocument||d.document):ka||(ka=new Ta)).createElement("SCRIPT");e.type="text/javascript";b&&(void 0!==e.onreadystatechange?e.onreadystatechange=function(){if("complete"==e.readyState||"loaded"==e.readyState)try{b()}catch(g){}}:e.onload=b);c&&(e.id=c);Ma(e,Va(a));var f=d.getElementsByTagName("head")[0];if(f)try{n.setTimeout(function(){f.appendChild(e)},0)}catch(g){}},eb=function(){var a=void 0===a?C:a;return"http:"===a.location.protocol},fb,gb=window,hb=fb=!!gb.google_async_iframe_id,H=hb&&window.parent||window;var ib=function(a,b){this.qa=b;this.$=null;this.F="";this.h="1";db(a,u(this.za,this))};ib.prototype.za=function(){this.h=null;if(window.botguard)if(window.botguard.bg)try{this.$=new window.botguard.bg(this.qa)}catch(a){this.h="5"}else this.h="3";else this.h="2"};var jb=function(a){if(a.h)return"";if(!a.$.invoke)return a.h="4","";try{var b=a.$.invoke()}catch(c){return a.h="6",""}return b&&b.length?b:(a.h="6","")};ib.prototype.getError=function(){return this.h?this.h:this.F.length?3>this.F.length?"7":1124<this.F.length?"8":null:null};var I=function(a){if(a.changedTouches&&0<a.changedTouches.length){var b=a.changedTouches[0].clientX;a=a.changedTouches[0].clientY}else b=a.clientX,a=a.clientY;return{x:Math.round(b),y:Math.round(a)}},K=function(a){var b=J,c="ExitApi.exit();"==document.body.getAttribute("onClick")||"Enabler.exit('ad');"==document.body.getAttribute("onClick");c=void 0===c?!1:c;this.v=b;this.fa=C.parent;this.G=a;this.U=c;this.aa=[];this.Y=Infinity;this.M=this.I=null;this.ba=0;if(a=this.G.bg)this.I=new ib(a.u,a.c);this.v.N("event",u(this.ya,this));window.addEventListener("click",u(this.Ea,this),!0);if("function"==typeof TouchEvent){var d=[];TouchEvent.prototype.preventDefault=function(){var a=Date.now()+1500;this instanceof Event?d.push({position:I(this),ka:a}):d.push({position:void 0,ka:a})};a=function(a){for(var b=-1,c=I(a),e=Date.now(),f=0;f<d.length;++f){var v=d[f];if(e>v.ka)b==f-1&&(b=f);else if(null==v.position||v.position.x==c.x&&v.position.y==c.y){a.stopPropagation();break}}-1!=b&&d.splice(0,b-1)};window.addEventListener("mousemove",a,!0);window.addEventListener("mousedown",a,!0);window.addEventListener("mouseup",a,!0);window.addEventListener("click",a,!0);var e=function(){};window.addEventListener("touchend",function(a){a.target&&a.target.addEventListener("click",e)},!0)}window.addEventListener("touchstart",u(this.Ha,this),!0);kb(this);this.exit=this.va;this.exitNonCharging=this.wa;this.RedirectType=sa;this.reportInteraction_=this.Ja;this.updateUrls_=this.Oa;this.configureCloseButton=this.sa},kb=function(a){a.v.N("exit-pmcfg",u(function(a){this.ga=a},a))};m=K.prototype;m.va=function(a,b){this.U||lb(this,a,void 0,b)};m.wa=function(a){this.U||lb(this,a,38)};m.Ja=function(a){var b={};b.i=a;a={};a.i=b;mb(this,a)||this.v.sendMessage("interactions",b)};m.Oa=function(a){var b={};b.f=a;a={};a.u=b;mb(this,a)||this.v.sendMessage("url_update",b)};m.sa=function(a){var b={};b.t=a;this.v.sendMessage("mb_close_btn",b)};var lb=function(a,b,c,d){var e=Date.now();e<a.ba?nb(a,b,c,d):a.M={na:b,ra:c,Ia:d,xa:e+1500}},nb=function(a,b,c,d){if(1!=a.G.exit_strategy||d)var e=!1;else{var f;if(f=b)f=(f=(f=a.G.google_template_data)&&f.adData)&&f[0]&&f[0][b];f=f||a.G.redirect_url;e=p(f)&&(f.match(B)[1]||null);e=p(e)&&0==e.toLowerCase().indexOf("http")?null!=C.open(f,"_blank"):!1}f={};f.f=b;f.c=c;f.r=d;f.d=a.aa;f.o=e;a.I&&(b=a.I,b.F=jb(b),b=b.F,f.br=b,f.be=a.I.getError());mb(a,f)||a.v.sendMessage("exit",f)},mb=function(a,b){if(a.ga&&a.fa.postMessage){var c={};c.n=a.ga;c.er=b;a.fa.postMessage(c,"*");return!0}return!1},ob=function(a,b,c){var d=b;b=d.x;d=d.y;var e={};e.x=b;e.y=d;e.e=c;e.t=Date.now()-a.Y;e.ts=Date.now();a.aa.push(e)};K.prototype.Ea=function(a){this.U&&lb(this);ob(this,I(a),0);a=Date.now();if(this.M){var b=this.M;a<b.xa&&nb(this,b.na,b.ra,b.Ia)}this.M=null;this.ba=a+200};K.prototype.Ha=function(a){a.changedTouches&&0<a.changedTouches.length&&ob(this,I(a),1)};K.prototype.ya=function(a){switch(a.e){case "onshow":this.Y=w()}};var L=function(a){Da(this,a)};x(L,F);L.prototype.getContext=function(){var a=Fa(this,2);return a=null==a?0:a};var pb=function(a){Da(this,a)};x(pb,F);var M=function(a){Da(this,a)};x(M,F);M.prototype.getParameters=function(){var a=L;var b;this.a||(this.a={});if(!this.a[1]){var c=Fa(this,1);if(b||c)this.a[1]=new a(c)}return a=this.a[1]};M.prototype.setParameters=function(a){Ha(this,1,a);return this};var qb=function(){var a,b,c,d,e;this.da=c||4E3;this.C=a||"&";this.pa=b||",$";this.R=void 0!==d?d:"trn";this.Na=e||null;this.oa=!1;this.S={};this.Da=0;this.H=[]},sb=function(a,b,c,d,e){var f=[];Xa(a,function(a,k){var g=rb(a,b,c,d,e);g&&f.push(k+"="+g)});return f.join(b)},rb=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(rb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(sb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))},ub=function(a,b,c,d){b=b+"//"+c+d;var e=tb(a)-d.length;if(0>e)return"";a.H.sort(function(a,b){return a-b});d=null;c="";for(var f=0;f<a.H.length;f++)for(var g=a.H[f],k=a.S[g],l=0;l<k.length;l++){if(!e){d=null==d?g:d;break}var h=sb(k[l],a.C,a.pa);if(h){h=c+h;if(e>=h.length){e-=h.length;b+=h;c=a.C;break}else a.oa&&(c=e,h[c-1]==a.C&&--c,b+=h.substr(0,c),c=a.C,e=0);d=null==d?g:d}}f="";a.R&&null!=d&&(d=a.Na||d,f=c+a.R+"="+d);return b+f+""},tb=function(a){if(!a.R)return a.da;var b=1,c;for(c in a.S)b=c.length>b?c.length:b;return a.da-a.R.length-b-a.C.length-1};var vb=function(){var a;this.Ga=a=eb()?"http:":"https:";this.ua="pagead2.googlesyndication.com";this.Fa="/pagead/gen_204?id=";this.La=Math.random()},yb=function(a,b){var c=wb;if(xb(c))try{if(a instanceof qb)var d=a;else d=new qb,Xa(a,function(a,b){var c=d,e=b,f=a,g=c.Da++,A={};A[e]=f;e=[A];c.H.push(g);c.S[g]=e});var e=ub(d,c.Ga,c.ua,c.Fa+"html5-mon&");e&&("undefined"===typeof b?cb(e):cb(e,b))}catch(f){}},xb=function(a){a=a.La;return 1>a};var N=null;var zb=function(){var a=n.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):w()},Ab=function(){var a=void 0===a?n:a;return(a=a.performance)&&a.now?a.now():null};var Bb=function(a,b,c){var d;var e=void 0===e?0:e;this.label=a;this.type=b;this.value=c;this.duration=e;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=d};var O=n.performance,Cb=!!(O&&O.mark&&O.measure&&O.clearMarks),P=Ja(function(){var a;if(a=Cb){var b;if(null===N){N="";try{a="";try{a=n.top.location.hash}catch(c){a=n.location.hash}a&&(N=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=N;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}),R=function(){var a=Q;this.B=[];this.Aa=a||n;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.B=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.A=P()||(null!=b?b:1>Math.random())};R.prototype.disable=function(){this.A=!1;this.B!=this.Aa.google_js_reporting_queue&&(P()&&z(this.B,Db),this.B.length=0)};var Db=function(a){a&&O&&P()&&(O.clearMarks("goog_"+a.uniqueId+"_start"),O.clearMarks("goog_"+a.uniqueId+"_end"))};R.prototype.start=function(a,b){if(!this.A)return null;var c=Ab()||zb();c=new Bb(a,b,c);var d="goog_"+c.uniqueId+"_start";O&&P()&&O.mark(d);return c};R.prototype.end=function(a){if(this.A&&"number"==typeof a.value){var b=Ab()||zb();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";O&&P()&&O.mark(b);this.A&&this.B.push(a)}};var wb,Eb;if(hb&&!Wa()){var S="."+ta.domain;try{for(;2<S.split(".").length&&!Wa();)ta.domain=S=S.substr(S.indexOf(".")+1),H=window.parent}catch(a){}Wa()||(H=window)}var Q=Eb=H,Fb=new R,Gb=function(){var a;null!=a&&(Q.google_measure_js_timing=a);Q.google_measure_js_timing||Fb.disable()};wb=new vb;"complete"==Q.document.readyState?Gb():Fb.A&&$a(Q,"load",function(){Gb()});var Ib=function(a){var b,c=b||Hb;return function(){var b=this||n;b=b.closure_memoize_cache_||(b.closure_memoize_cache_={});var e=c(a[ea]||(a[ea]=++fa),arguments);return b.hasOwnProperty(e)?b[e]:b[e]=a.apply(this,arguments)}},Hb=function(a,b){for(var c=[a],d=b.length-1;0<=d;--d)c.push(typeof b[d],b[d]);return c.join("\x0B")};var Jb=["destinationUrl","displayUrl"],Kb="googlesyndication.com googleadservices.com googleusercontent.com doubleclick.net youtube.com googleapis.com gstatic.com google-analytics.com".split(" "),Lb=Ib(function(a,b,c,d){d=d||{};d.i=a.creativeId;d.t=a.templateId;d.c=b;d.m=c;d.lp=a.layoutPath;a.experimentId&&(d.e=a.experimentId);a.V&&(d.gqi=a.V);a.Z&&(d.qqi=a.Z);a.Ka(d)}),Mb=function(a,b){return function(c,d,e){var f={};e&&(f.jsl=e);d&&(f.jsf=d);Lb(a,"j",c,f);b&&b(c,d,e)}},Nb=function(a){var b=a.match(B),c=function(a){return oa(b[3],a)};return ma(Kb,c)?a:pa(b[1],b[2],b[3],b[4])},Pb=function(a,b,c){var d={},e=0,f=function(a,b,c,f){d["a"+e]=a;null!=b&&(d["f"+e]=b);null!=c&&null!=f&&(d["s"+e]=c,d["d"+e]=f);e++};0!=b&&f("layout","layout",0,b.toFixed(4));if(b=window.performance&&window.performance.timing)b=b.responseEnd-b.navigationStart,f("http"+(eb()?"":"s"),"layout_html",0,b.toFixed(4));window.performance&&window.performance.getEntries&&(z(window.performance.getEntries(),function(b){var d=Aa(c,function(a){return b.name&&oa(b.name,a)});d&&d in c&&delete c[d];if(Ob(b.name)&&a.reportPerf){var e=0<b.startTime?b.startTime.toFixed(4):null,g=0<b.responseEnd?(b.responseEnd-b.startTime).toFixed(4):null;f(Nb(b.name),d,e,g)}}),(a.reportPerf||a.reportErrors)&&ya(c,function(a,b){f(a,b,-1,-1)}));0<e&&Lb(a,"p","",d)},Qb=function(a){return za(a,function(a,c){return p(a)&&Ob(a)&&!(0<=y(Jb,c))})},Ob=function(a){var b;if(b=/^(https?:)?\/\//.test(a))(b=a)?(a=qa(b.match(B)[5]||null))?(b=b?(b=qa(b.match(B)[3]||null))?0<=y(ra,b):!1:!1,a=b&&-1!=a.indexOf("/aclk")):a=!1:a=!1,b=!a;return b},Rb=function(a,b,c,d,e){var f=u(Function.prototype.apply,b,c,Array.prototype.slice.call(arguments,3));if(d&&d.monitoring){var g=d.monitoring;g={creativeId:g.creativeId||-1,templateId:g.templateId||-1,experimentId:g.experimentId,reportErrors:g.reportErrors||!1,reportPerf:g.reportPerf||!1,Ka:a,layoutPath:g.layoutPath,V:g.gqi,Z:g.qqi,rumUrl:g.rumUrl,ia:g.rumc,ea:g.navStart};var k=d.monitoring.loadTime?w()-d.monitoring.loadTime:0,l=d.google_template_data.adData[0],h=g;l=Qb(l);h=ja(Pb,h,k,l);window.setTimeout(h,1E4);h=g;if(h.rumUrl){l=new M;k=new L;h.ia&&G(k,1,h.ia,0);h.ea&&G(k,6,h.ea,0);G(k,2,3,0);var v=k;G(v,4,h.Z,"");G(v,3,h.V,"");l.setParameters(k);k=new pb;G(k,7,!0,!1);Ha(l,2,k);window.google_rum_config=l.b;k=document;l=k.createElement("script");Ma(l,Va(h.rumUrl));(h=k.getElementsByTagName("script")[0])&&h.parentNode&&h.parentNode.insertBefore(l,h)}if(g.reportErrors){h=window.onerror;window.onerror=Mb(g,h);try{f()}catch(r){f=Mb(g,h);g=r.toString();r.name&&-1==g.indexOf(r.name)&&(g+=": "+r.name);r.message&&-1==g.indexOf(r.message)&&(g+=": "+r.message);if(r.stack){h=r.stack;l=g;try{for(-1==h.indexOf(l)&&(h=l+"\n"+h);h!=A;){var A=h;h=h.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1")}g=h.replace(/\n */g,"\n")}catch(oc){g=l}}A=g;f(A,r.lineNumber,r.fileName)}}else f()}else f()},Sb=function(a){var b;yb(a,b)};var T=function(a,b,c,d,e){var f=this;e=void 0===e?!0:e;try{var g=!!document.cookie}catch(k){g=!1}if(g&&(g=window.location.origin||window.location.protocol+"//"+window.location.host,!0!==window.secureChannel_allowAnyParent&&b!==g&&-1===c.indexOf(g)))throw Error();window.postMessage&&(D.call(this,a,d),this.la=e&&!!window.MessageChannel,this.O=b,this.j=this.K=null,window.addEventListener("message",function(a){var b=a.data;b=f.ja?JSON.parse(b):b;b.s!==f.P||a.source!==window.parent||"*"!==f.O&&a.origin!==f.O||xa(f,b);return a=void 0},!1),"complete"==n.document.readyState?this.ca():window.addEventListener("load",u(this.ca,this),!1))};x(T,D);T.prototype.send=function(a){this.la?this.K&&this.K.postMessage(a):(a=this.ja?JSON.stringify(a):a,this.j.contentWindow.postMessage(a,"*"))};T.prototype.ca=function(){var a={t:0};a.s=this.P;if(this.la){var b=new MessageChannel;this.K=b.port1;this.K.onmessage=u(function(a){xa(this,a.data)},this);this.Ma.postMessage(a,this.O,[b.port2]);wa(this)}else this.j=document.createElement("IFRAME"),this.j.style.display="none",b='<!doctype html><html><head><script>window.addEventListener("message",function(e){e.source.parent.postMessage(e.data,'+JSON.stringify(this.O)+");},false);\x3c/script></head><body></body></html>",this.j.srcdoc=b,this.j.src="javascript:'"+encodeURI(b)+"'",this.j.onload=u(function(){this.send(a);wa(this)},this),document.body.appendChild(this.j)};for(var Tb,Ub=window.location.hash.substring(1),Vb={},Wb=Ub.split("&"),Xb=0;Xb<Wb.length;Xb++){var Yb=Wb[Xb].split("=");Vb[Yb[0]]=decodeURIComponent(Yb[1])}var U=Tb=Vb,Zb=U.p&&0==U.p.indexOf("http")?U.p:"*",$b;var ac=window.parent,bc=Zb,cc=["http://pagead2.googlesyndication.com","https://pagead2.googlesyndication.com","http://tpc.googlesyndication.com","https://tpc.googlesyndication.com","https://adwords-displayads.googleusercontent.com"],dc=U.t,V;V=void 0===V?!0:V;try{$b=new T(ac,bc,cc,dc,V)}catch(a){$b=null}var J=$b;if(J){J.N("adData",function(a){if(window.onAdData){var b=new K(a);var c=Date.now();b.Y=c;Rb(Sb,window.onAdData,window,a,b)}});var W=J,ec,fc=ec||"secureChannel",gc=W,hc,ic=fc,jc=gc,kc=hc,X=ic.split("."),Y=kc||n;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===jc?Y=Y[Z]&&Y[Z]!==Object.prototype[Z]?Y[Z]:Y[Z]={}:Y[Z]=jc;var lc=W;lc.registerApplicationHandler=W.N;var mc=W;mc.sendMessage=W.sendMessage;var nc=W;nc.isInitialized=W.Ba};}).call(this);