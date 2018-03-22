(function(window){var svgSprite='<svg><symbol id="icon-complete-o" viewBox="0 0 1024 1024"><path d="M371.498667 804.266667L889.6 286.122667 859.392 256 371.2 744.234667 106.965333 480l-30.165333 30.165333 294.4 294.4 0.298667-0.341333z" fill="#444444" ></path></symbol><symbol id="icon-arrow-right" viewBox="0 0 1024 1024"><path d="M626.773333 537.429333l-247.04 247.04 30.165334 30.122667 276.693333-276.693333-0.426667-0.426667 0.426667-0.512L409.898667 260.266667l-30.165334 30.165333 247.04 247.04z" fill="#444444" ></path></symbol><symbol id="icon-dengpao" viewBox="0 0 1024 1024"><path d="M833.5 330.5C833.5 153 689.6 7.6 512 7.6S190.5 153 190.5 330.5c0 70.3 37.3 161 97.2 227.9 59.4 66.3 103.5 177.9 103.5 266.9v34.9h241.6v-34.6c0-89 44.1-200.4 103.2-266.9 60.1-67.6 97.5-166.4 97.5-228.2z" fill="#FFC807" ></path><path d="M636.5 790.6l-193.9-268L596.4 202l199.2 266.4c-17.4 36.4-39.3 67.4-63.9 95.2C685.3 621 664.1 671.1 644 741l-7.5 49.6z" fill="#FFB300" ></path><path d="M499.5 378.3h-82.7c-12.6 0-21.4-12.7-16.8-24.5l59.2-153c2.7-6.9 9.4-11.5 16.8-11.5h105c13.6 0 22.3 14.5 15.9 26.5l-81.5 153c-3.2 5.8-9.3 9.5-15.9 9.5z" fill="#FFF8E1" ></path><path d="M466.2 518.3l160-171c12-12.8 2.9-33.7-14.6-33.7h-105c-8.7 0-16.4 5.6-19.1 13.9l-55 171c-6.6 20.4 19.1 35.5 33.7 19.8z" fill="#FFF8E1" ></path><path d="M593.6 1016.4H430.4c-5.7 0-10.9-3.7-14-9.8l-22.2-44.2h235.6l-22.2 44.2c-3.1 6.1-8.3 9.8-14 9.8z" fill="#455A64" ></path><path d="M625.7 980.4H398.3c-22.1 0-40.1-17.9-40.1-40.1V776.7c0-22.1 17.9-40.1 40.1-40.1h227.5c22.1 0 40.1 17.9 40.1 40.1v163.7c-0.1 22.1-18 40-40.2 40z" fill="#ECEFF1" ></path><path d="M539.8 808.6H359v-36h180.8c9.9 0 18 8.1 18 18 0 10-8.1 18-18 18zM359 840.1h306v36H359zM665 943.6H494.8c-9.9 0-18-8.1-18-18s8.1-18 18-18H665v36z" fill="#CFD8DC" ></path></symbol><symbol id="icon-dunpai" viewBox="0 0 1024 1024"><path d="M477.4 988.4c22.4 7.7 46.8 7.7 69.2 0 152.8-52.4 208-95.2 208-95.2 158.8-108.3 160.2-250.5 160.2-250.5V193.9c0-22-17.9-40.9-39.9-41.7-112.7-4-278.8-86.8-339.6-119.2-14.6-7.8-32.1-7.8-46.7 0C427.8 65.3 261.8 148.2 149 152.2c-22 0.8-39.9 19.7-39.9 41.7v448.8s1.4 142.2 160.2 250.5c0.1 0 55.3 42.8 208.1 95.2z" fill="#2196F3" ></path><path d="M483.1 907.1c18.7 6.4 39.1 6.4 57.8 0 127.6-43.7 173.7-79.5 173.7-79.5 132.6-90.4 133.8-209.2 133.8-209.2V248.6c0-18.4-15-34.1-33.3-34.8-94.1-3.3-232.8-72.5-283.5-99.5-12.2-6.5-26.8-6.5-39 0-50.7 27-189.4 96.2-283.5 99.5-18.3 0.6-33.3 16.4-33.3 34.8v369.8s1.2 118.8 133.8 209.2c-0.2 0 45.9 35.8 173.5 79.5z" fill="#64B5F6" ></path><path d="M512 109.4c-6.7 0-13.4 1.6-19.5 4.9-50.7 27-189.4 96.2-283.5 99.5-18.3 0.6-33.3 16.4-33.3 34.8v369.8s1.2 118.8 133.8 209.2c0 0 46.1 35.8 173.7 79.5 9.3 3.2 19.1 4.8 28.9 4.8V109.4z" fill="#90CAF9" ></path><path d="M848.4 563.5v54.9s-1.2 118.8-133.8 209.2c0 0-22.1 17.2-78 42.2l47.4 63.4c55.2-27.4 104.2-59 140.5-99.1 59.7-67.2 84.1-126.8 89.8-182.5l-65.9-88.1z" fill="#1E88E5" ></path><path d="M848.4 618.4v-54.9L699.1 363.9 512 538v165.1l124.6 166.6c55.9-25.1 78-42.2 78-42.2 132.6-90.3 133.8-209.1 133.8-209.1z" fill="#42A5F5" ></path><path d="M487.4 560.9l-137.9-75.1L512 703.1V538z" fill="#64B5F6" ></path><path d="M482.4 605.5c-7.6 0-15.3-2.9-21.1-8.7L356 491.4c-11.7-11.7-11.7-30.6 0-42.2 11.7-11.7 30.6-11.7 42.2 0l84.2 84.2 170.2-170.2c11.7-11.7 30.6-11.7 42.2 0 11.7 11.7 11.7 30.6 0 42.2L503.5 596.7c-5.8 5.9-13.4 8.8-21.1 8.8z" fill="#FFFFFF" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)