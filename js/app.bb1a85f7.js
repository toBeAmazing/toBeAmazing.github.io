(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],p=0,u=[];p<o.length;p++)r=o[p],n[r]&&u.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(u.length)u.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,o=1;o<i.length;o++){var l=i[o];0!==n[l]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},n={app:0},a=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var d=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var s=i("64a9"),n=i.n(s);n.a},"12bd":function(t,e,i){t.exports=i.p+"img/IMG_1240.35b28a37.gif"},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("audio",{attrs:{id:"aa",preload:"auto",src:"hmm.mp3",type:"audio/mp3"}}),s("div",{staticClass:"swiper-container"},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"start-bg"}),s("div",{staticClass:"start-title",domProps:{innerHTML:t._s(t.startTitle)}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showStar,expression:"showStar"}],staticClass:"start-btn"},[s("span",{staticClass:"emoji emoji2764",attrs:{title:"heavy black heart"}}),t._v("️")]),s("canvas",{attrs:{id:"star"}})]),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"c1 content"}),s("div",{staticClass:"title",domProps:{innerHTML:t._s(t.title1)}}),s("img",{attrs:{src:i("c826")}})]),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"content c2"}),s("div",{staticClass:"title",domProps:{innerHTML:t._s(t.title2)}}),s("img",{attrs:{src:i("12bd")}})]),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"content c3"}),s("div",{staticClass:"title",domProps:{innerHTML:t._s(t.title3)}}),s("img",{attrs:{src:i("9d54")}})]),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"content c4"}),s("div",{staticClass:"title",domProps:{innerHTML:t._s(t.title4)}}),s("img",{attrs:{src:i("7784")}})]),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"content c2"}),s("div",{staticClass:"title",domProps:{innerHTML:t._s(t.title5)}}),s("img",{attrs:{src:i("e652")}})]),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"content c3"}),s("div",{staticClass:"title",domProps:{innerHTML:t._s(t.title6)}}),s("img",{attrs:{src:i("9ebf")}})])])])])},a=[],r={name:"app",data:function(){return{playing:!1,showStar:!1,startTitle:"",title1:"<div style = 'padding-right: 5vw'>愿你一蹦就能见到想见的人 <span class='emoji emoji1f496' title='sparkling heart'></span></div>",title2:"<div style = 'padding-right: 5vw'>愿你头一歪就是想依靠的人 <span class='emoji emoji1f496' title='sparkling heart'></span></div>",title3:"<div style = 'padding-right: 5vw'>愿你的小脾气有人会懂 <span class='emoji emoji1f496' title='sparkling heart'></span></div>",title4:"<div style = 'padding-right: 5vw'>愿你难过的时候会有人哄你 <span class='emoji emoji1f496' title='sparkling heart'></span></div>",title5:"<div style = 'padding-right: 5vw'>愿你想玩的时候有人陪你闹 <span class='emoji emoji1f496' title='sparkling heart'></span></div>",title6:"<div style = 'padding-right: 5vw'>愿你一难过就有逗你开心的人 <span class='emoji emoji1f496' title='sparkling heart'></span></div>"}},methods:{play:function(){if(!this.playing){var t=document.getElementById("aa");t.loop=!0,t.currentTime=11,"fastSeek"in t&&t.fastSeek(11),t.play(),this.playing=!0}},draw:function(){var t=this,e=this,i=document.getElementById("star");if(i.width="200",i.height="200",i.getContext){var s=i.getContext("2d"),n=0,a=Math.PI/40;s.beginPath(),s.translate(50,50),s.moveTo(this.getX1(n),this.getY1(n));var r=setInterval(function(){n+=a;var i=t.getX1(n),o=t.getY1(n);s.lineTo(i,o),s.fillStyle="red",s.strokeStyle="red",s.stroke(),n>2*Math.PI&&(clearInterval(r),e.$el.querySelector("#star").addEventListener("click",function(){e.play(),e.swiper.slideNext(600),e.slide()},!1))},50)}},slide:function(){var t=this;setTimeout(function(){t.swiper.slideNext(600),t.slide()},4e3)},getX1:function(t){return 16*Math.pow(Math.sin(t),3)*3},getY1:function(t){return-3*(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))}},mounted:function(){var t=new window.Swiper(".swiper-container",{loop:!1,direction:"vertical"});this.swiper=t,console.log(window.jEmoji.unifiedToHTML("❤️"));var e="小傻瓜，准备好了么",i=0,s=this;document.addEventListener("DOMContentLoaded",function(){var t=setInterval(function(){s.startTitle+=e[i],i++,i===e.length&&(clearInterval(t),s.showStar=!0,s.draw())},300)})}},o=r,l=(i("034f"),i("2877")),c=Object(l["a"])(o,n,a,!1,null,null,null);c.options.__file="App.vue";var d=c.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(d)}}).$mount("#app")},"64a9":function(t,e,i){},7784:function(t,e,i){t.exports=i.p+"img/IMG_1242.c3158324.gif"},"9d54":function(t,e,i){t.exports=i.p+"img/IMG_1241.8767005b.gif"},"9ebf":function(t,e,i){t.exports=i.p+"img/IMG_1244.4b32275b.gif"},c826:function(t,e,i){t.exports=i.p+"img/IMG_1239.b3226886.gif"},e652:function(t,e,i){t.exports=i.p+"img/IMG_1243.984905be.gif"}});
//# sourceMappingURL=app.bb1a85f7.js.map