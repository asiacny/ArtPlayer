/*!
 * artplayer-plugin-backlight.js v3.1.15
 * Github: https://github.com/zhw2590582/ArtPlayer#readme
 * (c) 2017-2019 Harvey Zack
 * Released under the MIT License.
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).artplayerPluginBacklight=e()}(this,function(){"use strict";function l(t){for(var e=[],n=0;n<10;n+=1)for(var o=0;o<5;o+=1)0!==n&&9!==n&&0!==o&&4!==o||e.push(t(n,o,10,5));return e}return function(o){var t=o.constructor.utils.setStyles,e=o.template,n=e.$player,a=e.$video,r=o.player,i=document.createElement("div");i.classList.add("artplayer-backlight"),t(i,{position:"absolute",zIndex:9,left:0,top:0,right:0,bottom:0,width:"100%",height:"100%"});var h=function(r){return l(function(t,e,n,o){var a=document.createElement("div");return a.style.position="absolute",a.style.left="".concat(100*t/n,"%"),a.style.top="".concat(100*e/o,"%"),a.style.width="".concat(100/n,"%"),a.style.height="".concat(100/o,"%"),a.style.webkitBorderRadius="50%",a.style.borderRadius="50%",a.style.webkitTransition="all .2s ease",a.style.transition="all .2s ease",r.appendChild(a),{$box:a,left:0===t,right:t===n-1,top:0===e,bottom:e===o-1}})}(i),c=document.createElement("canvas");return n.insertBefore(i,a),function n(){window.requestAnimationFrame(function(){if(r.playing){var t=a.clientWidth,e=a.clientHeight;(function(t,e,p,g){var y=t.getContext("2d");return t.width=p,t.height=g,y.drawImage(e,0,0),l(function(t,e,n,o){for(var a=p/n,r=g/o,i=t*a,c=e*r,l=y.getImageData(i,c,a,r).data,s=0,u=0,d=0,f=0,h=l.length;f<h;f+=4)s+=l[f],u+=l[f+1],d+=l[f+2];return{r:s=Math.floor(s/(l.length/4)),g:u=Math.floor(u/(l.length/4)),b:d=Math.floor(d/(l.length/4))}})})(c,a,t,e).forEach(function(t,e){var n=t.r,o=t.g,a=t.b,r=h[e],i=r.$box,c=r.left,l=r.right,s=r.top,u=r.bottom,d=c?"-64px":l?"64px":"0",f=s?"-64px":u?"64px":"0";i.style.webkitBoxShadow="rgb(".concat(n,", ").concat(o,", ").concat(a,") ").concat(d," ").concat(f," 128px"),i.style.boxShadow="rgb(".concat(n,", ").concat(o,", ").concat(a,") ").concat(d," ").concat(f," 128px")})}o.isDestroy||n()})}(),{name:"artplayerPluginBacklight"}}});
