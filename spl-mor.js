/*!
 * MorphSVGPlugin 3.3.4
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(t){"use strict";function m(t){return"string"==typeof t}var M=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,A=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,b=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,n=/(^[#\.][a-z]|[a-y][a-z])/i,D=Math.PI/180,E=Math.sin,k=Math.cos,Z=Math.abs,$=Math.sqrt,h=function _isNumber(t){return"number"==typeof t},s=function _round(t){return Math.round(1e5*t)/1e5||0};function reverseSegment(t){var e,r=0;for(t.reverse();r<t.length;r+=2)e=t[r],t[r]=t[r+1],t[r+1]=e;t.reversed=!t.reversed}var z={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"};function convertToPath(t,e){var r,n,o,i,a,h,s,l,g,c,p,u,f,d,_,P,m,v,y,w,x,T,M=t.tagName.toLowerCase(),b=.552284749831;return"path"!==M&&t.getBBox?(h=function _createPath(t,e){var r,n=document.createElementNS("http://www.w3.org/2000/svg","path"),o=[].slice.call(t.attributes),i=o.length;for(e=","+e+",";-1<--i;)r=o[i].nodeName.toLowerCase(),e.indexOf(","+r+",")<0&&n.setAttributeNS(null,r,o[i].nodeValue);return n}(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),T=function _attrToObj(t,e){for(var r=e?e.split(","):[],n={},o=r.length;-1<--o;)n[r[o]]=+t.getAttribute(r[o])||0;return n}(t,z[M]),"rect"===M?(i=T.rx,a=T.ry||i,n=T.x,o=T.y,c=T.width-2*i,p=T.height-2*a,r=i||a?"M"+(P=(d=(f=n+i)+c)+i)+","+(v=o+a)+" V"+(y=v+p)+" C"+[P,w=y+a*b,_=d+i*b,x=y+a,d,x,d-(d-f)/3,x,f+(d-f)/3,x,f,x,u=n+i*(1-b),x,n,w,n,y,n,y-(y-v)/3,n,v+(y-v)/3,n,v,n,m=o+a*(1-b),u,o,f,o,f+(d-f)/3,o,d-(d-f)/3,o,d,o,_,o,P,m,P,v].join(",")+"z":"M"+(n+c)+","+o+" v"+p+" h"+-c+" v"+-p+" h"+c+"z"):"circle"===M||"ellipse"===M?(l="circle"===M?(i=a=T.r)*b:(i=T.rx,(a=T.ry)*b),r="M"+((n=T.cx)+i)+","+(o=T.cy)+" C"+[n+i,o+l,n+(s=i*b),o+a,n,o+a,n-s,o+a,n-i,o+l,n-i,o,n-i,o-l,n-s,o-a,n,o-a,n+s,o-a,n+i,o-l,n+i,o].join(",")+"z"):"line"===M?r="M"+T.x1+","+T.y1+" L"+T.x2+","+T.y2:"polyline"!==M&&"polygon"!==M||(r="M"+(n=(g=(t.getAttribute("points")+"").match(A)||[]).shift())+","+(o=g.shift())+" L"+g.join(","),"polygon"===M&&(r+=","+n+","+o+"z")),h.setAttribute("d",rawPathToString(h._gsRawPath=stringToRawPath(r))),e&&t.parentNode&&(t.parentNode.insertBefore(h,t),t.parentNode.removeChild(t)),h):t}function arcToSegment(t,e,r,n,o,i,a,h,s){if(t!==h||e!==s){r=Z(r),n=Z(n);var l=o%360*D,g=k(l),c=E(l),p=Math.PI,u=2*p,f=(t-h)/2,d=(e-s)/2,_=g*f+c*d,P=-c*f+g*d,m=_*_,v=P*P,y=m/(r*r)+v/(n*n);1<y&&(r=$(y)*r,n=$(y)*n);var w=r*r,x=n*n,T=(w*x-w*v-x*m)/(w*v+x*m);T<0&&(T=0);var M=(i===a?-1:1)*$(T),b=r*P/n*M,S=-n*_/r*M,N=g*b-c*S+(t+h)/2,R=c*b+g*S+(e+s)/2,A=(_-b)/r,z=(P-S)/n,O=(-_-b)/r,L=(-P-S)/n,Y=A*A+z*z,C=(z<0?-1:1)*Math.acos(A/$(Y)),F=(A*L-z*O<0?-1:1)*Math.acos((A*O+z*L)/$(Y*(O*O+L*L)));isNaN(F)&&(F=p),!a&&0<F?F-=u:a&&F<0&&(F+=u),C%=u,F%=u;var X,I=Math.ceil(Z(F)/(u/4)),V=[],j=F/I,G=4/3*E(j/2)/(1+k(j/2)),U=g*r,q=c*r,H=c*-n,B=g*n;for(X=0;X<I;X++)_=k(o=C+X*j),P=E(o),A=k(o+=j),z=E(o),V.push(_-G*P,P+G*_,A+G*z,z-G*A,A,z);for(X=0;X<V.length;X+=2)_=V[X],P=V[X+1],V[X]=_*U+P*H+N,V[X+1]=_*q+P*B+R;return V[X-2]=h,V[X-1]=s,V}}function stringToRawPath(t){function tc(t,e,r,n){g=(r-t)/3,c=(n-e)/3,h.push(t+g,e+c,r-g,n-c,r,n)}var e,r,n,o,i,a,h,s,l,g,c,p,u,f,d,_=(t+"").replace(b,function(t){var e=+t;return e<1e-4&&-1e-4<e?0:e}).match(M)||[],P=[],m=0,v=0,y=_.length,w=0,x="ERROR: malformed path: "+t;if(!t||!isNaN(_[0])||isNaN(_[1]))return console.log(x),P;for(e=0;e<y;e++)if(u=i,isNaN(_[e])?a=(i=_[e].toUpperCase())!==_[e]:e--,n=+_[e+1],o=+_[e+2],a&&(n+=m,o+=v),e||(s=n,l=o),"M"===i)h&&(h.length<8?--P.length:w+=h.length),m=s=n,v=l=o,h=[n,o],P.push(h),e+=2,i="L";else if("C"===i)a||(m=v=0),(h=h||[0,0]).push(n,o,m+1*_[e+3],v+1*_[e+4],m+=1*_[e+5],v+=1*_[e+6]),e+=6;else if("S"===i)g=m,c=v,"C"!==u&&"S"!==u||(g+=m-h[h.length-4],c+=v-h[h.length-3]),a||(m=v=0),h.push(g,c,n,o,m+=1*_[e+3],v+=1*_[e+4]),e+=4;else if("Q"===i)g=m+2/3*(n-m),c=v+2/3*(o-v),a||(m=v=0),m+=1*_[e+3],v+=1*_[e+4],h.push(g,c,m+2/3*(n-m),v+2/3*(o-v),m,v),e+=4;else if("T"===i)g=m-h[h.length-4],c=v-h[h.length-3],h.push(m+g,v+c,n+2/3*(m+1.5*g-n),o+2/3*(v+1.5*c-o),m=n,v=o),e+=2;else if("H"===i)tc(m,v,m=n,v),e+=1;else if("V"===i)tc(m,v,m,v=n+(a?v-m:0)),e+=1;else if("L"===i||"Z"===i)"Z"===i&&(n=s,o=l,h.closed=!0),("L"===i||.5<Z(m-n)||.5<Z(v-o))&&(tc(m,v,n,o),"L"===i&&(e+=2)),m=n,v=o;else if("A"===i){if(f=_[e+4],d=_[e+5],g=_[e+6],c=_[e+7],r=7,1<f.length&&(f.length<3?(c=g,g=d,r--):(c=d,g=f.substr(2),r-=2),d=f.charAt(1),f=f.charAt(0)),p=arcToSegment(m,v,+_[e+1],+_[e+2],+_[e+3],+f,+d,(a?m:0)+1*g,(a?v:0)+1*c),e+=r,p)for(r=0;r<p.length;r++)h.push(p[r]);m=h[h.length-2],v=h[h.length-1]}else console.log(x);return(e=h.length)<6?(P.pop(),e=0):h[0]===h[e-2]&&h[1]===h[e-1]&&(h.closed=!0),P.totalPoints=w+e,P}function rawPathToString(t){h(t[0])&&(t=[t]);var e,r,n,o,i="",a=t.length;for(r=0;r<a;r++){for(o=t[r],i+="M"+s(o[0])+","+s(o[1])+" C",e=o.length,n=2;n<e;n++)i+=s(o[n++])+","+s(o[n++])+" "+s(o[n++])+","+s(o[n++])+" "+s(o[n++])+","+s(o[n])+" ";o.closed&&(i+="z")}return i}function y(){return r||"undefined"!=typeof window&&(r=window.gsap)&&r.registerPlugin&&r}function L(t){return console&&console.warn(t)}function N(t){var e,r=t.length,n=0,o=0;for(e=0;e<r;e++)n+=t[e++],o+=t[e];return[n/(r/2),o/(r/2)]}function O(t){var e,r,n,o=t.length,i=t[0],a=i,h=t[1],s=h;for(n=6;n<o;n+=6)i<(e=t[n])?i=e:e<a&&(a=e),h<(r=t[n+1])?h=r:r<s&&(s=r);return t.centerX=(i+a)/2,t.centerY=(h+s)/2,t.size=(i-a)*(h-s)}function P(t,e){void 0===e&&(e=3);for(var r,n,o,i,a,h,s,l,g,c,p,u,f,d,_,P,m=t.length,v=t[0][0],y=v,w=t[0][1],x=w,T=1/e;-1<--m;)for(r=(a=t[m]).length,i=6;i<r;i+=6)for(g=a[i],c=a[i+1],p=a[i+2]-g,d=a[i+3]-c,u=a[i+4]-g,_=a[i+5]-c,f=a[i+6]-g,P=a[i+7]-c,h=e;-1<--h;)v<(n=((s=T*h)*s*f+3*(l=1-s)*(s*u+l*p))*s+g)?v=n:n<y&&(y=n),w<(o=(s*s*P+3*l*(s*_+l*d))*s+c)?w=o:o<x&&(x=o);return t.centerX=(v+y)/2,t.centerY=(w+x)/2,t.left=y,t.width=v-y,t.top=x,t.height=w-x,t.size=(v-y)*(w-x)}function Q(t,e){return e.length-t.length}function R(t,e){var r=t.size||O(t),n=e.size||O(e);return Math.abs(n-r)<(r+n)/20?e.centerX-t.centerX||e.centerY-t.centerY:n-r}function S(t,e){var r,n,o=t.slice(0),i=t.length,a=i-2;for(e|=0,r=0;r<i;r++)n=(r+e)%a,t[r++]=o[n],t[r]=o[1+n]}function T(t,e,r,n,o){var i,a,h,s,l=t.length,g=0,c=l-2;for(r*=6,a=0;a<l;a+=6)s=t[i=(a+r)%c]-(e[a]-n),h=t[1+i]-(e[a+1]-o),g+=v(h*h+s*s);return g}function U(t,e,r){var n,o,i,a=t.length,h=N(t),s=N(e),l=s[0]-h[0],g=s[1]-h[1],c=T(t,e,0,l,g),p=0;for(i=6;i<a;i+=6)(o=T(t,e,i/6,l,g))<c&&(c=o,p=i);if(r)for(reverseSegment(n=t.slice(0)),i=6;i<a;i+=6)(o=T(n,e,i/6,l,g))<c&&(c=o,p=-i);return p/6}function V(t,e,r){for(var n,o,i,a,h,s,l=t.length,g=1e20,c=0,p=0;-1<--l;)for(s=(n=t[l]).length,h=0;h<s;h+=6)o=n[h]-e,i=n[h+1]-r,(a=v(o*o+i*i))<g&&(g=a,c=n[h],p=n[h+1]);return[c,p]}function W(t,e,r,n,o,i){var a,h,s,l,g=e.length,c=0,p=Math.min(t.size||O(t),e[r].size||O(e[r]))*n,u=1e20,f=t.centerX+o,d=t.centerY+i;for(a=r;a<g&&!((e[a].size||O(e[a]))<p);a++)h=e[a].centerX-f,s=e[a].centerY-d,(l=v(h*h+s*s))<u&&(c=a,u=l);return l=e[c],e.splice(c,1),l}function X(t,e){var r,n,o,i,a,h,s,l,g,c,p,u,f,d,_=0,P=t.length,m=e/((P-2)/6);for(f=2;f<P;f+=6)for(_+=m;.999999<_;)r=t[f-2],n=t[f-1],o=t[f],i=t[f+1],a=t[f+2],h=t[f+3],s=t[f+4],l=t[f+5],g=r+(o-r)*(d=1/((Math.floor(_)||1)+1)),g+=((p=o+(a-o)*d)-g)*d,p+=(a+(s-a)*d-p)*d,c=n+(i-n)*d,c+=((u=i+(h-i)*d)-c)*d,u+=(h+(l-h)*d-u)*d,t.splice(f,4,r+(o-r)*d,n+(i-n)*d,g,c,g+(p-g)*d,c+(u-c)*d,p,u,a+(s-a)*d,h+(l-h)*d),f+=6,P+=6,_--;return t}function Y(t,e,r,n,o){var i,a,h,s,l,g,c,p=e.length-t.length,u=0<p?e:t,f=0<p?t:e,d=0,_="complexity"===n?Q:R,m="position"===n?0:"number"==typeof n?n:.8,v=f.length,y="object"==typeof r&&r.push?r.slice(0):[r],w="reverse"===y[0]||y[0]<0,x="log"===r;if(f[0]){if(1<u.length&&(t.sort(_),e.sort(_),u.size||P(u),f.size||P(f),g=u.centerX-f.centerX,c=u.centerY-f.centerY,_===R))for(v=0;v<f.length;v++)u.splice(v,0,W(f[v],u,v,m,g,c));if(p)for(p<0&&(p=-p),u[0].length>f[0].length&&X(f[0],(u[0].length-f[0].length)/6|0),v=f.length;d<p;)u[v].size||O(u[v]),s=(h=V(f,u[v].centerX,u[v].centerY))[0],l=h[1],f[v++]=[s,l,s,l,s,l,s,l],f.totalPoints+=8,d++;for(v=0;v<t.length;v++)i=e[v],a=t[v],(p=i.length-a.length)<0?X(i,-p/6|0):0<p&&X(a,p/6|0),w&&!1!==o&&!a.reversed&&reverseSegment(a),(r=y[v]||0===y[v]?y[v]:"auto")&&(a.closed||Math.abs(a[0]-a[a.length-2])<.5&&Math.abs(a[1]-a[a.length-1])<.5?"auto"===r||"log"===r?(y[v]=r=U(a,i,!v||!1===o),r<0&&(w=!0,reverseSegment(a),r=-r),S(a,6*r)):"reverse"!==r&&(v&&r<0&&reverseSegment(a),S(a,6*(r<0?-r:r))):!w&&("auto"===r&&Math.abs(i[0]-a[0])+Math.abs(i[1]-a[1])+Math.abs(i[i.length-2]-a[a.length-2])+Math.abs(i[i.length-1]-a[a.length-1])>Math.abs(i[0]-a[a.length-2])+Math.abs(i[1]-a[a.length-1])+Math.abs(i[i.length-2]-a[0])+Math.abs(i[i.length-1]-a[1])||r%2)?(reverseSegment(a),y[v]=-1,w=!0):"auto"===r?y[v]=0:"reverse"===r&&(y[v]=-1),a.closed!==i.closed&&(a.closed=i.closed=!1));return x&&L("shapeIndex:["+y.join(",")+"]"),t.shapeIndex=y}}function _(t,e){var r,n,o,i,a,h,s,l=0,g=parseFloat(t[0]),c=parseFloat(t[1]),p=g+","+c+" ";for(r=.5*e/(.5*(o=t.length)-1),n=0;n<o-2;n+=2){if(l+=r,h=parseFloat(t[n+2]),s=parseFloat(t[n+3]),.999999<l)for(a=1/(Math.floor(l)+1),i=1;.999999<l;)p+=(g+(h-g)*a*i).toFixed(2)+","+(c+(s-c)*a*i).toFixed(2)+" ",l--,i++;p+=h+","+s+" ",g=h,c=s}return p}function aa(t){var e=t[0].match(G)||[],r=t[1].match(G)||[],n=r.length-e.length;0<n?t[0]=_(e,n):t[1]=_(r,-n)}function ba(e){return isNaN(e)?aa:function(t){aa(t),t[1]=function _offsetPoints(t,e){if(!e)return t;var r,n,o,i=t.match(G)||[],a=i.length,h="";for(r="reverse"===e?(n=a-1,-2):(n=(2*(parseInt(e,10)||0)+1+100*a)%a,2),o=0;o<a;o+=2)h+=i[n-1]+","+i[n]+" ",n=(n+r)%a;return h}(t[1],parseInt(e,10))}}function da(t,e){for(var r,n,o,i,a,h,s,l,g,c,p,u,f=t.length,d=.2*(e||1);-1<--f;){for(p=(n=t[f]).isSmooth=n.isSmooth||[0,0,0,0],u=n.smoothData=n.smoothData||[0,0,0,0],p.length=4,l=n.length-2,s=6;s<l;s+=6)o=n[s]-n[s-2],i=n[s+1]-n[s-1],a=n[s+2]-n[s],h=n[s+3]-n[s+1],g=w(i,o),c=w(h,a),(r=Math.abs(g-c)<d)&&(u[s-2]=g,u[s+2]=c,u[s-1]=v(o*o+i*i),u[s+3]=v(a*a+h*h)),p.push(r,r,0,0,r,r);n[l]===n[0]&&n[1+l]===n[1]&&(o=n[0]-n[l-2],i=n[1]-n[l-1],a=n[2]-n[0],h=n[3]-n[1],g=w(i,o),c=w(h,a),Math.abs(g-c)<d&&(u[l-2]=g,u[2]=c,u[l-1]=v(o*o+i*i),u[3]=v(a*a+h*h),p[l-2]=p[l-1]=!0))}return t}function ea(t){var e=t.trim().split(" ");return{x:(~t.indexOf("left")?0:~t.indexOf("right")?100:isNaN(parseFloat(e[0]))?50:parseFloat(e[0]))/100,y:(~t.indexOf("top")?0:~t.indexOf("bottom")?100:isNaN(parseFloat(e[1]))?50:parseFloat(e[1]))/100}}function ha(t,e,r,n){var o,i,a=this._origin,h=this._eOrigin,s=t[r]-a.x,l=t[r+1]-a.y,g=v(s*s+l*l),c=w(l,s);return s=e[r]-h.x,l=e[r+1]-h.y,i=function _shortAngle(t){return t!==t%p?t+(t<0?u:-u):t}(o=w(l,s)-c),!n&&F&&Math.abs(i+F.ca)<f&&(n=F),this._anchorPT=F={_next:this._anchorPT,t:t,sa:c,ca:n&&i*n.ca<0&&Math.abs(i)>d?o:i,sl:g,cl:v(s*s+l*l)-g,i:r}}function ia(t){r=y(),o=o||r&&r.plugins.morphSVG,r&&o?(C=r.utils.toArray,o.prototype._tweenRotation=ha,I=1):t&&L("Please gsap.registerPlugin(MorphSVGPlugin)")}var r,C,F,I,o,w=Math.atan2,x=Math.cos,j=Math.sin,v=Math.sqrt,p=Math.PI,u=2*p,f=.3*p,d=.7*p,G=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,q=/(^[#\.][a-z]|[a-y][a-z])/gi,H=/[achlmqstvz]/gi,B="Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",J={version:"3.3.4",name:"morphSVG",register:function register(t,e){r=t,o=e,ia()},init:function init(t,e,r,n,o){if(I||ia(1),!e)return L("invalid shape"),!1;("string"==typeof e||e.getBBox||e[0])&&(e={shape:e});var i,a,h,s,l,g,c,p,u,f,d,_,m,v,y,w,x,T,M,b,S,N,R=t.nodeType?window.getComputedStyle(t):{},A=R.fill+"",z=!("none"===A||"0"===(A.match(G)||[])[3]||"evenodd"===R.fillRule),O=(e.origin||"50 50").split(",");if(l="POLYLINE"===(i=(t.nodeName+"").toUpperCase())||"POLYGON"===i,"PATH"!==i&&!l&&!e.prop)return L("Cannot morph a <"+i+"> element. "+B),!1;if(a="PATH"===i?"d":"points",!e.prop&&"function"!=typeof t.setAttribute)return!1;if(s=function _parseShape(t,e,r){var n,o;return(!("string"==typeof t)||q.test(t)||(t.match(G)||[]).length<3)&&((n=C(t)[0])?(o=(n.nodeName+"").toUpperCase(),e&&"PATH"!==o&&(n=convertToPath(n,!1),o="PATH"),t=n.getAttribute("PATH"===o?"d":"points")||"",n===r&&(t=n.getAttributeNS(null,"data-original")||t)):(L("WARNING: invalid morph to: "+t),t=!1)),t}(e.shape||e.d||e.points||"","d"==a,t),l&&H.test(s))return L("A <"+i+"> cannot accept path data. "+B),!1;if(g=e.shapeIndex||0===e.shapeIndex?e.shapeIndex:"auto",c=e.map||J.defaultMap,this._prop=e.prop,this._render=e.render||J.defaultRender,this._apply="updateTarget"in e?e.updateTarget:J.defaultUpdateTarget,this._rnd=Math.pow(10,isNaN(e.precision)?2:+e.precision),this._tween=r,s){if(this._target=t,x="object"==typeof e.precompile,f=this._prop?t[this._prop]:t.getAttribute(a),this._prop||t.getAttributeNS(null,"data-original")||t.setAttributeNS(null,"data-original",f),"d"==a||this._prop){if(f=stringToRawPath(x?e.precompile[0]:f),d=stringToRawPath(x?e.precompile[1]:s),!x&&!Y(f,d,g,c,z))return!1;for("log"!==e.precompile&&!0!==e.precompile||L('precompile:["'+rawPathToString(f)+'","'+rawPathToString(d)+'"]'),(S="linear"!==(e.type||J.defaultType))&&(f=da(f,e.smoothTolerance),d=da(d,e.smoothTolerance),f.size||P(f),d.size||P(d),b=ea(O[0]),this._origin=f.origin={x:f.left+b.x*f.width,y:f.top+b.y*f.height},O[1]&&(b=ea(O[1])),this._eOrigin={x:d.left+b.x*d.width,y:d.top+b.y*d.height}),this._rawPath=t._gsRawPath=f,m=f.length;-1<--m;)for(y=f[m],w=d[m],p=y.isSmooth||[],u=w.isSmooth||[],v=y.length,_=F=0;_<v;_+=2)w[_]===y[_]&&w[_+1]===y[_+1]||(S?p[_]&&u[_]?(T=y.smoothData,M=w.smoothData,N=_+(_===v-4?7-v:5),this._controlPT={_next:this._controlPT,i:_,j:m,l1s:T[_+1],l1c:M[_+1]-T[_+1],l2s:T[N],l2c:M[N]-T[N]},h=this._tweenRotation(y,w,_+2),this._tweenRotation(y,w,_,h),this._tweenRotation(y,w,N-1,h),_+=4):this._tweenRotation(y,w,_):(h=this.add(y,_,y[_],w[_]),h=this.add(y,_+1,y[_+1],w[_+1])||h))}else h=this.add(t,"setAttribute",t.getAttribute(a)+"",s+"",n,o,0,ba(g),a);S&&(this.add(this._origin,"x",this._origin.x,this._eOrigin.x),h=this.add(this._origin,"y",this._origin.y,this._eOrigin.y)),h&&(this._props.push("morphSVG"),h.end=s,h.endProp=a)}return 1},render:function render(t,e){for(var r,n,o,i,a,h,s,l,g,c,p,u,f=e._rawPath,d=e._controlPT,_=e._anchorPT,P=e._rnd,m=e._target,v=e._pt;v;)v.r(t,v.d),v=v._next;if(1===t&&e._apply)for(v=e._pt;v;)v.end&&(e._prop?m[e._prop]=v.end:m.setAttribute(v.endProp,v.end)),v=v._next;else if(f){for(;_;)a=_.sa+t*_.ca,i=_.sl+t*_.cl,_.t[_.i]=e._origin.x+x(a)*i,_.t[_.i+1]=e._origin.y+j(a)*i,_=_._next;for(n=t<.5?2*t*t:(4-2*t)*t-1;d;)u=(h=d.i)+(h===(o=f[d.j]).length-4?7-o.length:5),a=w(o[u]-o[h+1],o[u-1]-o[h]),c=j(a),p=x(a),l=o[h+2],g=o[h+3],i=d.l1s+n*d.l1c,o[h]=l-p*i,o[h+1]=g-c*i,i=d.l2s+n*d.l2c,o[u-1]=l+p*i,o[u]=g+c*i,d=d._next;if(m._gsRawPath=f,e._apply){for(r="",s=0;s<f.length;s++)for(i=(o=f[s]).length,r+="M"+(o[0]*P|0)/P+" "+(o[1]*P|0)/P+" C",h=2;h<i;h++)r+=(o[h]*P|0)/P+" ";e._prop?m[e._prop]=r:m.setAttribute("d",r)}}e._render&&f&&e._render.call(e._tween,f,m)},kill:function kill(){this._pt=this._rawPath=0},getRawPath:function getRawPath(t){var e,r=(t=m(t)&&n.test(t)&&document.querySelector(t)||t).getAttribute?t:0;return r&&(t=t.getAttribute("d"))?(r._gsPath||(r._gsPath={}),(e=r._gsPath[t])&&!e._dirty?e:r._gsPath[t]=stringToRawPath(t)):t?m(t)?stringToRawPath(t):h(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")},stringToRawPath:stringToRawPath,rawPathToString:rawPathToString,pathFilter:function _pathFilter(t,e,r,n,o){var i=stringToRawPath(t[0]),a=stringToRawPath(t[1]);Y(i,a,e||0===e?e:"auto",r,o)&&(t[0]=rawPathToString(i),t[1]=rawPathToString(a),"log"!==n&&!0!==n||L('precompile:["'+t[0]+'","'+t[1]+'"]'))},pointsFilter:aa,getTotalSize:P,equalizeSegmentQuantity:Y,convertToPath:function convertToPath$1(t,e){return C(t).map(function(t){return convertToPath(t,!1!==e)})},defaultType:"linear",defaultUpdateTarget:!0,defaultMap:"size"};y()&&r.registerPlugin(J),t.MorphSVGPlugin=J,t.default=J;if (typeof(window)==="undefined"||window!==t){Object.defineProperty(t,"__esModule",{value:!0})} else {delete t.default}});


/*!
 * SplitText 3.6.0
 * https://greensock.com
 * 
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(D,u){"object"==typeof exports&&"undefined"!=typeof module?u(exports):"function"==typeof define&&define.amd?define(["exports"],u):u((D=D||self).window=D.window||{})}(this,function(D){"use strict";var _=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function k(D){return e.getComputedStyle(D)}function n(D,u){var e;return i(D)?D:"string"==(e=typeof D)&&!u&&D?E.call(Q.querySelectorAll(D),0):D&&"object"==e&&"length"in D?E.call(D,0):D?[D]:[]}function o(D){return"absolute"===D.position||!0===D.absolute}function p(D,u){for(var e,t=u.length;-1<--t;)if(e=u[t],D.substr(0,e.length)===e)return e.length}function r(D,u){void 0===D&&(D="");var e=~D.indexOf("++"),t=1;return e&&(D=D.split("++").join("")),function(){return"<"+u+" style='position:relative;display:inline-block;'"+(D?" class='"+D+(e?t++:"")+"'>":">")}}function s(D,u,e){var t=D.nodeType;if(1===t||9===t||11===t)for(D=D.firstChild;D;D=D.nextSibling)s(D,u,e);else 3!==t&&4!==t||(D.nodeValue=D.nodeValue.split(u).join(e))}function t(D,u){for(var e=u.length;-1<--e;)D.push(u[e])}function u(D,u,e){for(var t;D&&D!==u;){if(t=D._next||D.nextSibling)return t.textContent.charAt(0)===e;D=D.parentNode||D._parent}}function v(D){var u,e,t=n(D.childNodes),F=t.length;for(u=0;u<F;u++)(e=t[u])._isSplit?v(e):u&&e.previousSibling&&3===e.previousSibling.nodeType?(e.previousSibling.nodeValue+=3===e.nodeType?e.nodeValue:e.firstChild.nodeValue,D.removeChild(e)):3!==e.nodeType&&(D.insertBefore(e.firstChild,e),D.removeChild(e))}function w(D,u){return parseFloat(u[D])||0}function x(D,e,F,C,i,n,E){var r,l,p,d,a,h,B,f,A,c,x,g,y=k(D),_=w("paddingLeft",y),b=-999,S=w("borderBottomWidth",y)+w("borderTopWidth",y),T=w("borderLeftWidth",y)+w("borderRightWidth",y),N=w("paddingTop",y)+w("paddingBottom",y),m=w("paddingLeft",y)+w("paddingRight",y),L=w("fontSize",y)*(e.lineThreshold||.2),W=y.textAlign,H=[],O=[],V=[],j=e.wordDelimiter||" ",M=e.tag?e.tag:e.span?"span":"div",R=e.type||e.split||"chars,words,lines",z=i&&~R.indexOf("lines")?[]:null,P=~R.indexOf("words"),q=~R.indexOf("chars"),G=o(e),I=e.linesClass,J=~(I||"").indexOf("++"),K=[];for(J&&(I=I.split("++").join("")),p=(l=D.getElementsByTagName("*")).length,a=[],r=0;r<p;r++)a[r]=l[r];if(z||G)for(r=0;r<p;r++)((h=(d=a[r]).parentNode===D)||G||q&&!P)&&(g=d.offsetTop,z&&h&&Math.abs(g-b)>L&&("BR"!==d.nodeName||0===r)&&(B=[],z.push(B),b=g),G&&(d._x=d.offsetLeft,d._y=g,d._w=d.offsetWidth,d._h=d.offsetHeight),z&&((d._isSplit&&h||!q&&h||P&&h||!P&&d.parentNode.parentNode===D&&!d.parentNode._isSplit)&&(B.push(d),d._x-=_,u(d,D,j)&&(d._wordEnd=!0)),"BR"===d.nodeName&&(d.nextSibling&&"BR"===d.nextSibling.nodeName||0===r)&&z.push([])));for(r=0;r<p;r++)if(h=(d=a[r]).parentNode===D,"BR"!==d.nodeName)if(G&&(A=d.style,P||h||(d._x+=d.parentNode._x,d._y+=d.parentNode._y),A.left=d._x+"px",A.top=d._y+"px",A.position="absolute",A.display="block",A.width=d._w+1+"px",A.height=d._h+"px"),!P&&q)if(d._isSplit)for(d._next=l=d.nextSibling,d.parentNode.appendChild(d);l&&3===l.nodeType&&" "===l.textContent;)d._next=l.nextSibling,d.parentNode.appendChild(l),l=l.nextSibling;else d.parentNode._isSplit?(d._parent=d.parentNode,!d.previousSibling&&d.firstChild&&(d.firstChild._isFirst=!0),d.nextSibling&&" "===d.nextSibling.textContent&&!d.nextSibling.nextSibling&&K.push(d.nextSibling),d._next=d.nextSibling&&d.nextSibling._isFirst?null:d.nextSibling,d.parentNode.removeChild(d),a.splice(r--,1),p--):h||(g=!d.nextSibling&&u(d.parentNode,D,j),d.parentNode._parent&&d.parentNode._parent.appendChild(d),g&&d.parentNode.appendChild(Q.createTextNode(" ")),"span"===M&&(d.style.display="inline"),H.push(d));else d.parentNode._isSplit&&!d._isSplit&&""!==d.innerHTML?O.push(d):q&&!d._isSplit&&("span"===M&&(d.style.display="inline"),H.push(d));else z||G?(d.parentNode&&d.parentNode.removeChild(d),a.splice(r--,1),p--):P||D.appendChild(d);for(r=K.length;-1<--r;)K[r].parentNode.removeChild(K[r]);if(z){for(G&&(c=Q.createElement(M),D.appendChild(c),x=c.offsetWidth+"px",g=c.offsetParent===D?0:D.offsetLeft,D.removeChild(c)),A=D.style.cssText,D.style.cssText="display:none;";D.firstChild;)D.removeChild(D.firstChild);for(f=" "===j&&(!G||!P&&!q),r=0;r<z.length;r++){for(B=z[r],(c=Q.createElement(M)).style.cssText="display:block;text-align:"+W+";position:"+(G?"absolute;":"relative;"),I&&(c.className=I+(J?r+1:"")),V.push(c),p=B.length,l=0;l<p;l++)"BR"!==B[l].nodeName&&(d=B[l],c.appendChild(d),f&&d._wordEnd&&c.appendChild(Q.createTextNode(" ")),G&&(0===l&&(c.style.top=d._y+"px",c.style.left=_+g+"px"),d.style.top="0px",g&&(d.style.left=d._x-g+"px")));0===p?c.innerHTML="&nbsp;":P||q||(v(c),s(c,String.fromCharCode(160)," ")),G&&(c.style.width=x,c.style.height=d._h+"px"),D.appendChild(c)}D.style.cssText=A}G&&(E>D.clientHeight&&(D.style.height=E-N+"px",D.clientHeight<E&&(D.style.height=E+S+"px")),n>D.clientWidth&&(D.style.width=n-m+"px",D.clientWidth<n&&(D.style.width=n+T+"px"))),t(F,H),P&&t(C,O),t(i,V)}function y(D,u,e,t){var F,C,i,n,E,r,l,d,a=u.tag?u.tag:u.span?"span":"div",h=~(u.type||u.split||"chars,words,lines").indexOf("chars"),B=o(u),f=u.wordDelimiter||" ",A=" "!==f?"":B?"&#173; ":" ",c="</"+a+">",x=1,g=u.specialChars?"function"==typeof u.specialChars?u.specialChars:p:null,y=Q.createElement("div"),v=D.parentNode;for(v.insertBefore(y,D),y.textContent=D.nodeValue,v.removeChild(D),l=-1!==(F=function getText(D){var u=D.nodeType,e="";if(1===u||9===u||11===u){if("string"==typeof D.textContent)return D.textContent;for(D=D.firstChild;D;D=D.nextSibling)e+=getText(D)}else if(3===u||4===u)return D.nodeValue;return e}(D=y)).indexOf("<"),!1!==u.reduceWhiteSpace&&(F=F.replace(S," ").replace(b,"")),l&&(F=F.split("<").join("{{LT}}")),E=F.length,C=(" "===F.charAt(0)?A:"")+e(),i=0;i<E;i++)if(r=F.charAt(i),g&&(d=g(F.substr(i),u.specialChars)))r=F.substr(i,d||1),C+=h&&" "!==r?t()+r+"</"+a+">":r,i+=d-1;else if(r===f&&F.charAt(i-1)!==f&&i){for(C+=x?c:"",x=0;F.charAt(i+1)===f;)C+=A,i++;i===E-1?C+=A:")"!==F.charAt(i+1)&&(C+=A+e(),x=1)}else"{"===r&&"{{LT}}"===F.substr(i,6)?(C+=h?t()+"{{LT}}</"+a+">":"{{LT}}",i+=5):55296<=r.charCodeAt(0)&&r.charCodeAt(0)<=56319||65024<=F.charCodeAt(i+1)&&F.charCodeAt(i+1)<=65039?(n=((F.substr(i,12).split(_)||[])[1]||"").length||2,C+=h&&" "!==r?t()+F.substr(i,n)+"</"+a+">":F.substr(i,n),i+=n-1):C+=h&&" "!==r?t()+r+"</"+a+">":r;D.outerHTML=C+(x?c:""),l&&s(v,"{{LT}}","<")}function z(D,u,e,t){var F,C,i=n(D.childNodes),E=i.length,s=o(u);if(3!==D.nodeType||1<E){for(u.absolute=!1,F=0;F<E;F++)(C=i[F])._next=C._isFirst=C._parent=C._wordEnd=null,3===C.nodeType&&!/\S+/.test(C.nodeValue)||(s&&3!==C.nodeType&&"inline"===k(C).display&&(C.style.display="inline-block",C.style.position="relative"),C._isSplit=!0,z(C,u,e,t));return u.absolute=s,void(D._isSplit=!0)}y(D,u,e,t)}var Q,e,F,C,b=/(?:\r|\n|\t\t)/g,S=/(?:\s\s+)/g,i=Array.isArray,E=[].slice,l=((C=SplitText.prototype).split=function split(D){this.isSplit&&this.revert(),this.vars=D=D||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var u,e,t,F=this.elements.length,C=D.tag?D.tag:D.span?"span":"div",i=r(D.wordsClass,C),n=r(D.charsClass,C);-1<--F;)t=this.elements[F],this._originals[F]=t.innerHTML,u=t.clientHeight,e=t.clientWidth,z(t,D,i,n),x(t,D,this.chars,this.words,this.lines,e,u);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},C.revert=function revert(){var e=this._originals;if(!e)throw"revert() call wasn't scoped properly.";return this.elements.forEach(function(D,u){return D.innerHTML=e[u]}),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},SplitText.create=function create(D,u){return new SplitText(D,u)},SplitText);function SplitText(D,u){F||function _initCore(){Q=document,e=window,F=1}(),this.elements=n(D),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=u||{},this.split(u)}l.version="3.6.0",D.SplitText=l,D.default=l;if (typeof(window)==="undefined"||window!==D){Object.defineProperty(D,"__esModule",{value:!0})} else {delete D.default}});
