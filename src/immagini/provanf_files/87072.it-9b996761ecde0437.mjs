(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[87072,8575,60310],{762587:e=>{function t(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,r,n,a){r=r||"&",n=n||"=";var s={};if("string"!=typeof e||0===e.length)return s;var i=/\+/g;e=e.split(r);var o=1e3;a&&"number"==typeof a.maxKeys&&(o=a.maxKeys);var l=e.length;o>0&&l>o&&(l=o);for(var c=0;c<l;++c){var u,h,d,p,m=e[c].replace(i,"%20"),f=m.indexOf(n);f>=0?(u=m.substr(0,f),h=m.substr(f+1)):(u=m,h=""),d=decodeURIComponent(u),p=decodeURIComponent(h),t(s,d)?Array.isArray(s[d])?s[d].push(p):s[d]=[s[d],p]:s[d]=p}return s}},712361:e=>{var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,r,n,a){return r=r||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map((function(a){var s=encodeURIComponent(t(a))+n;return Array.isArray(e[a])?e[a].map((function(e){return s+encodeURIComponent(t(e))})).join(r):s+encodeURIComponent(t(e[a]))})).join(r):a?encodeURIComponent(t(a))+n+encodeURIComponent(t(e)):""}},817673:(e,t,r)=>{t.decode=t.parse=r(762587),t.encode=t.stringify=r(712361)},52511:function(e,t,r){var n;e=r.nmd(e),function(a){t&&t.nodeType,e&&e.nodeType;var s="object"==typeof r.g&&r.g;s.global!==s&&s.window!==s&&s.self;var i,o=2147483647,l=36,c=/^xn--/,u=/[^\x20-\x7E]/,h=/[\x2E\u3002\uFF0E\uFF61]/g,d={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},p=Math.floor,m=String.fromCharCode;function f(e){throw RangeError(d[e])}function _(e,t){for(var r=e.length,n=[];r--;)n[r]=t(e[r]);return n}function v(e,t){var r=e.split("@"),n="";return r.length>1&&(n=r[0]+"@",e=r[1]),n+_((e=e.replace(h,".")).split("."),t).join(".")}function g(e){for(var t,r,n=[],a=0,s=e.length;a<s;)(t=e.charCodeAt(a++))>=55296&&t<=56319&&a<s?56320==(64512&(r=e.charCodeAt(a++)))?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),a--):n.push(t);return n}function b(e){return _(e,(function(e){var t="";return e>65535&&(t+=m((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+=m(e)})).join("")}function y(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function k(e,t,r){var n=0;for(e=r?p(e/700):e>>1,e+=p(e/t);e>455;n+=l)e=p(e/35);return p(n+36*e/(e+38))}function I(e){var t,r,n,a,s,i,c,u,h,d,m,_=[],v=e.length,g=0,y=128,I=72;for((r=e.lastIndexOf("-"))<0&&(r=0),n=0;n<r;++n)e.charCodeAt(n)>=128&&f("not-basic"),_.push(e.charCodeAt(n));for(a=r>0?r+1:0;a<v;){for(s=g,i=1,c=l;a>=v&&f("invalid-input"),((u=(m=e.charCodeAt(a++))-48<10?m-22:m-65<26?m-65:m-97<26?m-97:l)>=l||u>p((o-g)/i))&&f("overflow"),g+=u*i,!(u<(h=c<=I?1:c>=I+26?26:c-I));c+=l)i>p(o/(d=l-h))&&f("overflow"),i*=d;I=k(g-s,t=_.length+1,0==s),p(g/t)>o-y&&f("overflow"),y+=p(g/t),g%=t,_.splice(g++,0,y)}return b(_)}function P(e){var t,r,n,a,s,i,c,u,h,d,_,v,b,I,P,w=[];for(v=(e=g(e)).length,t=128,r=0,s=72,i=0;i<v;++i)(_=e[i])<128&&w.push(m(_));for(n=a=w.length,a&&w.push("-");n<v;){for(c=o,i=0;i<v;++i)(_=e[i])>=t&&_<c&&(c=_);for(c-t>p((o-r)/(b=n+1))&&f("overflow"),r+=(c-t)*b,t=c,i=0;i<v;++i)if((_=e[i])<t&&++r>o&&f("overflow"),_==t){for(u=r,h=l;!(u<(d=h<=s?1:h>=s+26?26:h-s));h+=l)P=u-d,I=l-d,w.push(m(y(d+P%I,0))),u=p(P/I);w.push(m(y(u,0))),s=k(r,b,n==a),r=0,++n}++r,++t}return w.join("")}i={version:"1.3.2",ucs2:{decode:g,encode:b},decode:I,encode:P,toASCII:function(e){return v(e,(function(e){return u.test(e)?"xn--"+P(e):e}))},toUnicode:function(e){return v(e,(function(e){return c.test(e)?I(e.slice(4).toLowerCase()):e}))}},void 0===(n=function(){return i}.call(t,r,t,e))||(e.exports=n)}()},608575:(e,t,r)=>{var n=r(52511),a=r(762502);function s(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}t.parse=b,t.resolve=function(e,t){return b(e,!1,!0).resolve(t)},t.resolveObject=function(e,t){return e?b(e,!1,!0).resolveObject(t):t},t.format=function(e){a.isString(e)&&(e=b(e));return e instanceof s?e.format():s.prototype.format.call(e)},t.Url=s;var i=/^([a-z0-9.+-]+:)/i,o=/:[0-9]*$/,l=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),u=["'"].concat(c),h=["%","/","?",";","#"].concat(u),d=["/","?","#"],p=/^[+a-z0-9A-Z_-]{0,63}$/,m=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,f={javascript:!0,"javascript:":!0},_={javascript:!0,"javascript:":!0},v={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},g=r(817673);function b(e,t,r){if(e&&a.isObject(e)&&e instanceof s)return e;var n=new s;return n.parse(e,t,r),n}s.prototype.parse=function(e,t,r){if(!a.isString(e))throw new TypeError("Parameter 'url' must be a string, not "+typeof e);var s=e.indexOf("?"),o=-1!==s&&s<e.indexOf("#")?"?":"#",c=e.split(o);c[0]=c[0].replace(/\\/g,"/");var b=e=c.join(o);if(b=b.trim(),!r&&1===e.split("#").length){var y=l.exec(b);if(y)return this.path=b,this.href=b,this.pathname=y[1],y[2]?(this.search=y[2],this.query=t?g.parse(this.search.substr(1)):this.search.substr(1)):t&&(this.search="",this.query={}),this}var k=i.exec(b);if(k){var I=(k=k[0]).toLowerCase();this.protocol=I,b=b.substr(k.length)}if(r||k||b.match(/^\/\/[^@\/]+@[^@\/]+/)){var P="//"===b.substr(0,2);!P||k&&_[k]||(b=b.substr(2),this.slashes=!0)}if(!_[k]&&(P||k&&!v[k])){for(var w,x,A=-1,R=0;R<d.length;R++){-1!==(S=b.indexOf(d[R]))&&(-1===A||S<A)&&(A=S)}-1!==(x=-1===A?b.lastIndexOf("@"):b.lastIndexOf("@",A))&&(w=b.slice(0,x),b=b.slice(x+1),this.auth=decodeURIComponent(w)),A=-1;for(R=0;R<h.length;R++){var S;-1!==(S=b.indexOf(h[R]))&&(-1===A||S<A)&&(A=S)}-1===A&&(A=b.length),this.host=b.slice(0,A),b=b.slice(A),this.parseHost(),this.hostname=this.hostname||"";var C="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!C)for(var U=this.hostname.split(/\./),T=(R=0,U.length);R<T;R++){var O=U[R];if(O&&!O.match(p)){for(var D="",j=0,N=O.length;j<N;j++)O.charCodeAt(j)>127?D+="x":D+=O[j];if(!D.match(p)){var E=U.slice(0,R),Z=U.slice(R+1),F=O.match(m);F&&(E.push(F[1]),Z.unshift(F[2])),Z.length&&(b="/"+Z.join(".")+b),this.hostname=E.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),C||(this.hostname=n.toASCII(this.hostname));var q=this.port?":"+this.port:"",$=this.hostname||"";this.host=$+q,this.href+=this.host,C&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==b[0]&&(b="/"+b))}if(!f[I])for(R=0,T=u.length;R<T;R++){var M=u[R];if(-1!==b.indexOf(M)){var B=encodeURIComponent(M);B===M&&(B=escape(M)),b=b.split(M).join(B)}}var L=b.indexOf("#");-1!==L&&(this.hash=b.substr(L),b=b.slice(0,L));var G=b.indexOf("?");if(-1!==G?(this.search=b.substr(G),this.query=b.substr(G+1),t&&(this.query=g.parse(this.query)),b=b.slice(0,G)):t&&(this.search="",this.query={}),b&&(this.pathname=b),v[I]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){q=this.pathname||"";var z=this.search||"";this.path=q+z}return this.href=this.format(),this},s.prototype.format=function(){var e=this.auth||"";e&&(e=(e=encodeURIComponent(e)).replace(/%3A/i,":"),e+="@");var t=this.protocol||"",r=this.pathname||"",n=this.hash||"",s=!1,i="";this.host?s=e+this.host:this.hostname&&(s=e+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(s+=":"+this.port)),this.query&&a.isObject(this.query)&&Object.keys(this.query).length&&(i=g.stringify(this.query));var o=this.search||i&&"?"+i||"";return t&&":"!==t.substr(-1)&&(t+=":"),this.slashes||(!t||v[t])&&!1!==s?(s="//"+(s||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):s||(s=""),n&&"#"!==n.charAt(0)&&(n="#"+n),o&&"?"!==o.charAt(0)&&(o="?"+o),t+s+(r=r.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(o=o.replace("#","%23"))+n},s.prototype.resolve=function(e){return this.resolveObject(b(e,!1,!0)).format()},s.prototype.resolveObject=function(e){if(a.isString(e)){var t=new s;t.parse(e,!1,!0),e=t}for(var r=new s,n=Object.keys(this),i=0;i<n.length;i++){var o=n[i];r[o]=this[o]}if(r.hash=e.hash,""===e.href)return r.href=r.format(),r;if(e.slashes&&!e.protocol){for(var l=Object.keys(e),c=0;c<l.length;c++){var u=l[c];"protocol"!==u&&(r[u]=e[u])}return v[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(e.protocol&&e.protocol!==r.protocol){if(!v[e.protocol]){for(var h=Object.keys(e),d=0;d<h.length;d++){var p=h[d];r[p]=e[p]}return r.href=r.format(),r}if(r.protocol=e.protocol,e.host||_[e.protocol])r.pathname=e.pathname;else{for(var m=(e.pathname||"").split("/");m.length&&!(e.host=m.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==m[0]&&m.unshift(""),m.length<2&&m.unshift(""),r.pathname=m.join("/")}if(r.search=e.search,r.query=e.query,r.host=e.host||"",r.auth=e.auth,r.hostname=e.hostname||e.host,r.port=e.port,r.pathname||r.search){var f=r.pathname||"",g=r.search||"";r.path=f+g}return r.slashes=r.slashes||e.slashes,r.href=r.format(),r}var b=r.pathname&&"/"===r.pathname.charAt(0),y=e.host||e.pathname&&"/"===e.pathname.charAt(0),k=y||b||r.host&&e.pathname,I=k,P=r.pathname&&r.pathname.split("/")||[],w=(m=e.pathname&&e.pathname.split("/")||[],r.protocol&&!v[r.protocol]);if(w&&(r.hostname="",r.port=null,r.host&&(""===P[0]?P[0]=r.host:P.unshift(r.host)),r.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===m[0]?m[0]=e.host:m.unshift(e.host)),e.host=null),k=k&&(""===m[0]||""===P[0])),y)r.host=e.host||""===e.host?e.host:r.host,r.hostname=e.hostname||""===e.hostname?e.hostname:r.hostname,r.search=e.search,r.query=e.query,P=m;else if(m.length)P||(P=[]),P.pop(),P=P.concat(m),r.search=e.search,r.query=e.query;else if(!a.isNullOrUndefined(e.search)){if(w)r.hostname=r.host=P.shift(),(C=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=C.shift(),r.host=r.hostname=C.shift());return r.search=e.search,r.query=e.query,a.isNull(r.pathname)&&a.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!P.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var x=P.slice(-1)[0],A=(r.host||e.host||P.length>1)&&("."===x||".."===x)||""===x,R=0,S=P.length;S>=0;S--)"."===(x=P[S])?P.splice(S,1):".."===x?(P.splice(S,1),R++):R&&(P.splice(S,1),R--);if(!k&&!I)for(;R--;R)P.unshift("..");!k||""===P[0]||P[0]&&"/"===P[0].charAt(0)||P.unshift(""),A&&"/"!==P.join("/").substr(-1)&&P.push("");var C,U=""===P[0]||P[0]&&"/"===P[0].charAt(0);w&&(r.hostname=r.host=U?"":P.length?P.shift():"",(C=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@"))&&(r.auth=C.shift(),r.host=r.hostname=C.shift()));return(k=k||r.host&&P.length)&&!U&&P.unshift(""),P.length?r.pathname=P.join("/"):(r.pathname=null,r.path=null),a.isNull(r.pathname)&&a.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=e.auth||r.auth,r.slashes=r.slashes||e.slashes,r.href=r.format(),r},s.prototype.parseHost=function(){var e=this.host,t=o.exec(e);t&&(":"!==(t=t[0])&&(this.port=t.substr(1)),e=e.substr(0,e.length-t.length)),e&&(this.hostname=e)}},762502:e=>{e.exports={isString:function(e){return"string"==typeof e},isObject:function(e){return"object"==typeof e&&null!==e},isNull:function(e){return null===e},isNullOrUndefined:function(e){return null==e}}},397066:(e,t,r)=>{r.d(t,{b:()=>u,h:()=>h});var n=r(983722),a=r(768559),s=r(43760),i=r(170168),o=r(619937),l=r(48714),c=r(366284);const u=({href:e,pinId:t,pin:r,location:s,auxData:u},h)=>{if(r&&r.is_promoted){var d,p,m,f;const I=(0,a.Z)({boardUrl:null===(d=r.board)||void 0===d?void 0:d.url,callToCreateSourcePinId:r.call_to_create_source_pin_id,location:s,pinId:r.id,pinnerUserName:null===(p=r.pinner)||void 0===p?void 0:p.username,storyPinDataId:r.story_pin_data_id,trackingParams:r.tracking_params,trackingParamsMap:r.tracking_params_map}),P=(0,l.nS)({url:e,pinId:t,csrId:null,clientTrackingParams:I,auxData:u}),w=(0,n.Z)();if((0,c.G6)(null!==(m=null==w?void 0:w.userAgent.browserName)&&void 0!==m?m:"")){var _,v;const{group:n}=null!==(_=null==w?void 0:w.experimentsClient.checkExperiment("m10n_event_conversion_measurement"))&&void 0!==_?_:{},a=null!=w&&null!==(v=w.userAgent)&&void 0!==v&&v.browserVersion?w.userAgent.browserVersion:"0.0",s=parseFloat(a.split(".")[0]+"."+a.split(".")[1]);if(void 0!==r.campaign_id&&s>=14.1&&["enabled_safari"].includes(n)){var g;const n=r.attribution_source_id?((e,t,r)=>{const n=document.createElement("a");return n.setAttribute("href",t),n.setAttribute("target","_blank"),n.setAttribute("rel","noopener nofollow noreferrer"),n.style.cursor="pointer",n.style.display="block",n.setAttribute(o.$N.ATTRIBUTION_SOURCE_ID,e),n.setAttribute(o.$N.ATTRIBUTE_DESTINATION,r),n.setAttribute(o.$N.ATTRIBUTE_ON,r),n.click(),e})(r.attribution_source_id,P,e):((e,t,r)=>{const n=document.createElement("a");n.setAttribute("href",t),n.setAttribute("target","_blank"),n.setAttribute("rel","noopener nofollow noreferrer"),n.style.cursor="pointer",n.style.display="block";const a=""+(e%32*8+Math.floor(((new Date).getTime()-16409952e5)/864e5)%8);return n.setAttribute(o.$N.ATTRIBUTION_SOURCE_ID,a),n.setAttribute(o.$N.ATTRIBUTE_DESTINATION,r),n.setAttribute(o.$N.ATTRIBUTE_ON,r),n.click(),a})(null!==(g=r.pin_promotion_id)&&void 0!==g?g:0,P,e);return h({event_type:101,clientTrackingParams:I,object_id_str:t||"",aux_data:{pin_id:t||"",click_measurement_ppid:r.pin_promotion_id||"",click_measurement_campaign_id:r.campaign_id||"",is_pcm:!0,attribution_source_id:n,page_url:e}}),!0}}else if((0,c.i7)(null!==(f=null==w?void 0:w.userAgent.browserName)&&void 0!==f?f:"")){var b,y;const{group:n}=null!==(b=null==w?void 0:w.experimentsClient.checkExperiment("m10n_event_conversion_measurement_chrome"))&&void 0!==b?b:{},a=null!=w&&null!==(y=w.userAgent)&&void 0!==y&&y.browserVersion?parseInt(w.userAgent.browserVersion.split(".")[0],10):0;if(void 0!==r.attribution_source_id&&a>=101&&["enabled"].includes(n)){var k;const n=((e,t,r)=>{const n=new URL(`${i.C0}/attribution_source/`);n.searchParams.set(o.NR.ATTRIBUTION_SOURCE_EVENT_ID,e),n.searchParams.set(o.NR.ATTRIBUTION_DESTINATION,r),n.searchParams.set(o.NR.ATTRIBUTION_EXPIRY,""+o.uV);const a=document.createElement("a");return a.setAttribute("href",t),a.setAttribute("target","_blank"),a.setAttribute("rel","noopener nofollow noreferrer"),a.style.cursor="pointer",a.style.display="block",a.setAttribute(o.NR.ATTRIBUTION_SOURCE,n.toString()),a.click(),e})(null!==(k=r.attribution_source_id)&&void 0!==k?k:"0",P,e);return h({event_type:101,clientTrackingParams:I,object_id_str:t||"",aux_data:{pin_id:t||"",click_measurement_ppid:r.pin_promotion_id||"",click_measurement_campaign_id:r.campaign_id||"",is_arapi:!0,attribution_source_id:n,page_url:e}}),!0}}}return!1},h=({href:e,pinId:t,pin:r,location:n,auxData:i},o)=>{if("undefined"!=typeof window&&window.Windows)(0,s.Z)({url:e,pinId:t,pin:r,location:n,auxData:i});else{var c,h;if(u({href:e,pinId:t,pin:r,location:n,auxData:i},o))return;(0,l.Gj)({url:e,pinId:t,csrId:null,clientTrackingParams:(0,a.Z)({boardUrl:null==r||null===(c=r.board)||void 0===c?void 0:c.url,callToCreateSourcePinId:null==r?void 0:r.call_to_create_source_pin_id,location:n,pinId:null==r?void 0:r.id,pinnerUserName:null==r||null===(h=r.pinner)||void 0===h?void 0:h.username,storyPinDataId:null==r?void 0:r.story_pin_data_id,trackingParams:null==r?void 0:r.tracking_params,trackingParamsMap:null==r?void 0:r.tracking_params_map}),auxData:i})}}},768559:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(826067);const a=/\/today\/(article|best|trending)\/[\w-]+\/(\d+)/,s=/\/discover\/article\/[\w-]+\/(\d+)/,i=(e,t)=>t?e.substring(t.length).split("/")[0]:e,o=({boardUrl:e,callToCreateSourcePinId:t,path:r,pinId:o,pinnerUserName:l,query:c,search:u,storyPinDataId:h})=>{var d,p;if(!r)return"";let m="";switch(r){case"/":case"/homefeed/":return"UserHomefeedResource";case l&&`/${l}/pins/`:return"UserPinsResource";case l&&`/${l}/`:case/\/_activity\//.test(r)&&r:return"UserActivityPinsResource";case/\/_created\//.test(r)&&r:return h?"UserStoryPinsFeedResource":"UserActivityPinsResource";case/\/_community\//.test(r)&&r:return"UserDiscoveredPinsResource";case/\/_shop\//.test(r)&&r:return"StoreFrontFeedResource";case/\/_saved\//.test(r)&&r:return"BoardlessPinsResource";case l&&`/${l}/_shopping_list/`:return"ShoppingListFeedResource";case/\/visual-search\//.test(r)&&r:return"VisualLiveSearchResource";case/\/pin\//.test(r)&&r:m="/pin/";const f=i(r,m);if(o!==f)return t?`ApiResource_callToCreatePins_${f}`:`RelatedPinFeedResource_${f}`;break;case/\/search\//.test(r)&&r:if(u){return`SearchResource_${((0,n.mB)(u,{shouldDecode:!1}).q||"").toLowerCase()}`}if(c)return`SearchResource_${encodeURIComponent(c.q||"").toLowerCase()}`;break;case s.test(r)&&r:return`ExploreArticleResource_${(null===(d=r.match(s))||void 0===d?void 0:d[2])||"unknown"}`;case/\/discover\/article\//.test(r)&&r:m="/discover/article/";return`ExploreArticleResource_${i(r,m)}`;case/\/categories\//.test(r)&&r:m="/categories/";return`CategoryFeedResource_${i(r,m)}`;case/\/discover\/topics\//.test(r)&&r:return"CategoryFeedResource";case/\/news_hub\//.test(r)&&r:m="/news_hub/";return`NewsHubDetailsResource_${i(r,m)}`;case/\/_tools\/more-ideas\//.test(r)&&r:return"BoardContentRecommendationResource";case/\/topics\//.test(r)&&r:m="/topics/";return`TopicFeedResource_${i(r,m)}`;case l&&`/${l}/products/`:return"StoreFrontFeedResource";case/\/source\//.test(r)&&r:m="/source/";return`DomainFeedResource_${i(r,m)}`;case/\/explore\//.test(r)&&r:m="/explore/";return`SearchResource_${i(r,m)}`;case e:case!!e&&/\/more_ideas\//.test(r)&&r:return"BoardFeedResource";case e&&r.indexOf(e)>-1&&r:return"BoardSectionPinsResource";case/\/following\//.test(r)&&r:return"FollowingFeedResource";case/\/brand_catalog\//.test(r)&&r:return"BrandCatalogFeedResource";case a.test(r)&&r:return`TodayArticleFeedResource_${(null===(p=r.match(a))||void 0===p?void 0:p[2])||"unknown"}`;case/\/today\//.test(r):return"TodayTabResource";case/\story_feed\//.test(r)&&r:if(u){const{feed_type:e,request_params:t}=(0,n.mB)(u);return`StoryFeedResource_${e}_${t}`}}return""},l=({boardUrl:e,callToCreateSourcePinId:t,location:r,pinId:n,pinnerUserName:a,previousHistory:s,storyPinDataId:i,trackingParams:l,trackingParamsMap:c={}})=>{if(!n||!l||!r)return;if(!c)return`${l}~0`;const{pathname:u,search:h,query:d}=r,p=o({boardUrl:e,callToCreateSourcePinId:t,path:u,pinId:n,pinnerUserName:a,query:d,search:h,storyPinDataId:i,trackingParams:l,trackingParamsMap:c}),m=Object.keys(c);let f;if((u||"").startsWith("/pin/")){const e=m.find((e=>"PinResource"!==e));f=e?c[e]:c.PinResource}else f=c[p];let _;if(!f&&s&&s.length){const r=(e=>{let t=null==e?void 0:e.pathname;return t?(t.match(/\/search\//)&&null!=e&&e.search&&(t+=e.search),t.toLowerCase()):""})(s[s.length-1].location);_=o({boardUrl:e,callToCreateSourcePinId:t,path:r,pinId:n,pinnerUserName:a,query:d,search:h,storyPinDataId:i,trackingParams:l,trackingParamsMap:c}),f=c[_]}return f||(f=`${l||""}~0`),f}},48714:(e,t,r)=>{r.d(t,{nS:()=>k,iw:()=>P,gV:()=>b,G3:()=>w,lI:()=>x,Gj:()=>I,Jd:()=>g,$3:()=>y});var n=r(231486),a=r(56641),s=r(689070),i=r(768559),o=r(250059);const l=e=>"string"!=typeof e&&e?e.state:null;var c=r(643913),u=r(547239),h=r(508847),d=r(43760),p=r(579164),m=r(333155),f=r(397066),_=r(623568),v=r(226198);const g=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},b=({isOffsiteUrl:e,event:t})=>!e&&(t.metaKey||t.ctrlKey),y=({location:e,pin:{id:t,is_downstream_promotion:r,promoter:n},surface:a})=>!(0,_.jL)(r,!!n)&&(({location:e,pinId:t,surface:r})=>{const n=Boolean(r),a=m.ZF.includes(r),s=e.pathname.includes(t);return n&&!a||s})({location:e,pinId:t,surface:a}),k=e=>{const t=Math.round(1e3*Math.random())+"",r=Math.round(1e3*Math.random())+"";n.t8((0,v.GS)(t),r);const a=`${t}-${r}`,{queryParams:s,url:i}=e;let o={token:a,url:i};if(!s){const{pinId:t,csrId:r,clientTrackingParams:n,auxData:a}=e;o={...o,pin:null!=t?t:void 0,csr:r&&!t?r:void 0,client_tracking_params:n,aux_data:a?JSON.stringify(a):void 0}}s&&(o={...o,...s});return`/offsite/?${(0,c.Z)(o)}`},I=e=>{(0,a.Z)(k(e),!0)},P=async({isMounted:e,pin:t,location:r,spamCheckCallback:n,href:a})=>{var o,l;const c=await(0,s.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:(0,i.Z)({boardUrl:null==t||null===(o=t.board)||void 0===o?void 0:o.url,callToCreateSourcePinId:null==t?void 0:t.call_to_create_source_pin_id,location:r,pinId:null==t?void 0:t.id,pinnerUserName:null==t||null===(l=t.pinner)||void 0===l?void 0:l.username,storyPinDataId:null==t?void 0:t.story_pin_data_id,trackingParams:null==t?void 0:t.tracking_params,trackingParamsMap:null==t?void 0:t.tracking_params_map}),pin_id:null==t?void 0:t.id,url:a}});if(!c.resource_response.error&&e){const e=c.resource_response.data||{},{message:t,redirect_status:r,url:a}=e;n({blocked:["blocked","suspicious","porn"].includes(r),message:t,redirectStatus:r,sanitized_url:a})}},w=({event:e,onHistoryChange:t,href:r,history:n,target:s})=>{const i=(0,o.Z)(r),c=l(r),d=(0,u.Z)(i);d===p.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===s?(0,a.Z)(i,"blank"===s):n&&d===p.Z.SAME_ORIGIN&&(n.push((0,h.Z)({url:i}),null!=c?c:{}),t&&t({event:e}))},x=({href:e,pinId:t,pin:r,location:n,auxData:a,spamCheck:s,queryParams:o},l,c)=>{"undefined"!=typeof window&&window.Windows?(0,d.Z)({url:e,pinId:t,pin:r,location:n,auxData:a}):r?(({spamCheck:e,auxData:t,location:r,pin:n,pinId:a,href:s},o,l)=>{if(null!=e&&e.blocked)null==l||l(e);else{var c,u;if((0,f.b)({href:s,pinId:a,pin:n,location:r,auxData:t},o))return;I({url:s,pinId:a,csrId:null,clientTrackingParams:(0,i.Z)({boardUrl:null===(c=n.board)||void 0===c?void 0:c.url,callToCreateSourcePinId:n.call_to_create_source_pin_id,location:r,pinId:n.id,pinnerUserName:null===(u=n.pinner)||void 0===u?void 0:u.username,storyPinDataId:n.story_pin_data_id,trackingParams:n.tracking_params,trackingParamsMap:n.tracking_params_map}),auxData:t})}})({spamCheck:s,auxData:a,location:n,pin:r,pinId:t,href:e},l,c):I({url:e,pinId:t,queryParams:o})}},287072:(e,t,r)=>{r.d(t,{Z:()=>u,p:()=>h});var n=r(667294),a=r(250059),s=r(149230),i=r(407043),o=r(108234),l=r(48714),c=r(616550);function u(e){var t;const{externalData:r,href:u,onHistoryChange:h,target:d}=e,{logContextEvent:p}=(0,i.v)(),[m,f]=(0,n.useState)(null),[_,v]=(0,n.useState)(!1),g=(0,c.useHistory)(),b=(0,c.useLocation)(),y=(0,s.Z)({url:(0,a.Z)(u)}),{showWarning:k}=null!==(t=(0,o.s)())&&void 0!==t?t:{};return(0,n.useEffect)((()=>(v(!0),()=>{v(!1)})),[]),(0,n.useEffect)((()=>{y&&null!=r&&r.pin&&null===m&&_&&(0,l.$3)({location:b,pin:r.pin,surface:r.surface})&&(0,l.iw)({isMounted:_,pin:r.pin,location:b,spamCheckCallback:e=>f(e),href:(0,a.Z)(u)})}),[null==r?void 0:r.pin,null==r?void 0:r.surface,u,y,_,b,m]),({event:e})=>{var t;(0,l.gV)({isOffsiteUrl:y,event:e})||(e.preventDefault(),u&&(y||null!=r&&r.dangerouslyForceOffsiteUrl?(0,l.lI)({auxData:null==r?void 0:r.auxData,href:(0,a.Z)(u),pinId:null==r||null===(t=r.pin)||void 0===t?void 0:t.id,pin:null==r?void 0:r.pin,queryParams:null==r?void 0:r.queryParams,location:b,spamCheck:m},p,k):(0,l.G3)({event:e,href:u,history:g,onHistoryChange:h,target:"blank"===d?"blank":null})))}}const h=({children:e,...t})=>e({handleClick:u(t)})},250059:(e,t,r)=>{r.d(t,{Z:()=>n});const n=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},508847:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(567831);const a=(e,t)=>0===e.lastIndexOf(t,0),s=({url:e})=>{const t=(0,n.Z)("/");return a(e,t)?e.substr(t.length-1):e}},43760:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(689070),a=r(768559),s=r(48714);function i({url:e,pinId:t,pin:r,location:i,auxData:o}){var l,c;(0,n.Z)({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:r?(0,a.Z)({boardUrl:null===(l=r.board)||void 0===l?void 0:l.url,callToCreateSourcePinId:r.call_to_create_source_pin_id,location:i,pinId:r.id,pinnerUserName:null===(c=r.pinner)||void 0===c?void 0:c.username,storyPinDataId:r.story_pin_data_id,trackingParams:r.tracking_params,trackingParamsMap:r.tracking_params_map}):void 0,pin_id:r?r.id:t,url:e,aux_data:JSON.stringify(o)}}).then((n=>{if(n&&n.resource_response&&!n.resource_response.error){const{resource_response:e}=n,{redirect_status:t,url:r}=e.data;if(!["blocked","suspicious","porn"].includes(t)){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){const e=new window.Windows.Foundation.Uri(r);window.Windows.System.Launcher.launchUriAsync(e)}return}}if(r){var l,c;const n=(0,a.Z)({boardUrl:null===(l=r.board)||void 0===l?void 0:l.url,callToCreateSourcePinId:r.call_to_create_source_pin_id,location:i,pinId:r.id,pinnerUserName:null===(c=r.pinner)||void 0===c?void 0:c.username,storyPinDataId:r.story_pin_data_id,trackingParams:r.tracking_params,trackingParamsMap:r.tracking_params_map});(0,s.Gj)({url:e,pinId:t,csrId:null,clientTrackingParams:n,auxData:o})}else(0,s.Gj)({url:e,pinId:t})}))}},333155:(e,t,r)=>{r.d(t,{UP:()=>o,Wv:()=>a,ZF:()=>n,zI:()=>s,zl:()=>i});const n=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],a=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],s=[...a,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],i=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingSquareGridStorefront","ShoppingSquareGridStorefrontDomain","ShoppingGridShippedMetadataWithVisitButton"],o=["BaseBoardPinGrid"]},108234:(e,t,r)=>{r.d(t,{Z:()=>_,s:()=>f});var n=r(667294),a=r(121151),s=r(608575),i=r(898781),o=r(349700),l=r(883119),c=r(785893);const u=()=>{var e;const t=(0,i.ZP)(),{dismissWarning:r}=null!==(e=f())&&void 0!==e?e:{};return(0,c.jsx)(l.xu,{paddingX:3,children:(0,c.jsx)(l.zx,{fullWidth:!0,color:"red",onClick:r,text:t.bt("OK", "Okay", "Dismiss a modal stating that clicking through to a link has been blocked", undefined, true)})})},h=()=>{const e=(0,i.ZP)();return(0,c.jsx)(l.xv,{inline:!0,weight:"bold",children:(0,c.jsx)(l.rU,{target:"blank",href:"https://policy.pinterest.com/community-guidelines#section-spam",display:"inlineBlock",underline:"hover",children:e.bt("Ulteriori informazioni", "Learn more", "Link text leading to policy website", undefined, true)})})},d=({message:e,sanitized_url:t})=>{var r;const n=(0,i.ZP)(),{dismissWarning:d}=null!==(r=f())&&void 0!==r?r:{};return(0,c.jsx)(a.ZP,{accessibilityModalLabel:n.bt("Abbiamo bloccato questo link", "We have blocked this link", "Modal label when clicking a spammy link", undefined, true),onDismiss:d,heading:n.bt("Attenzione!", "Heads up!", "Modal heading when clicking through to a link has been blocked", undefined, true),footer:(0,c.jsx)(u,{}),children:(0,c.jsxs)(l.xu,{padding:6,children:[(0,c.jsx)(l.xv,{children:(0,o.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:(0,c.jsx)(h,{},"learnMoreLink")})}),(0,c.jsxs)(l.xu,{alignItems:"center",display:"flex",marginTop:4,children:[(0,c.jsx)(l.xu,{marginEnd:3,children:(0,c.jsx)(l.JO,{accessibilityLabel:n.bt("Indirizzo di collegamento bloccato", "Blocked link address", "Icon label preceding a block url", undefined, true),color:"error",icon:"report",inline:!0,size:24})}),(0,c.jsx)(l.xv,{inline:!0,lineClamp:1,weight:"bold",children:s.parse(t).hostname})]})]})})};var p=r(425288);const{Provider:m,useMaybeHook:f}=(0,p.Z)("SpammyClickthrough");function _({children:e}){const[t,r]=(0,n.useState)(null),a=(0,n.useCallback)((()=>{r(null)}),[r]),s=(0,n.useCallback)((e=>{r(e)}),[r]),i=(0,n.useMemo)((()=>({dismissWarning:a,showWarning:s})),[a,s]);return(0,c.jsxs)(m,{value:i,children:[t&&(0,c.jsx)(d,{...t}),e]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/87072.it-9b996761ecde0437.mjs.map