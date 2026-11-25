(function(){
"use strict";

var PHONE="918866823232";
var M=("Mutton Arbi Boneless (Full)|મટન અરબી બોનલેસ (ફુલ);Mutton Arbi Boneless (Half)|મટન અરબી બોનલેસ (હાફ);Mutton Arbi with Bone (Full)|મટન અરબી વીથ બોન (ફુલ);Mutton Arbi with Bone (Half)|મટન અરબી વીથ બોન (હાફ);Mutton Handi (Full)|મટન હાન્ડી (ફુલ);Mutton Handi (Half)|મટન હાન્ડી (હાફ);Mutton Badami|મટન બદામી;Mutton Nawabi|મટન નવાબી;Mutton Khada Masala|મટન ખડા મસાલા;Mutton Angara|મટન અંગારા;Sp. Ghee Gosht|સ્પે. ઘી ગોસ્ત;Dal Gosht|દાલ ગોસ્ત;Dabba Gosht|ડબ્બા ગોસ્ત;Mutton Mughlai|મટન મુગલાઈ;Mutton White|મટન વ્હાઈટ;Mutton Rogan Josh|મટન રોગન જોશ;Mutton Darbari|મટન દરબારી;Mutton Kadai|મટન કઢાઈ;Mutton Masala|મટન મસાલા;Mutton Nihari|મટન નીહારી;Mutton Roast|મટન રોસ;Mutton Bhuna|મટન ભુના;Chaap Masala|ચાંપ મસાલા;Mutton Kheema|મટન ખીમા;Handi Paya|હાન્ડી પાયા;Bombay Kheema|બોમ્બે ખીમા;Egg Curry|અંડા કરી").split(";");
var S=("Fish Tikka Masala|ફીશ ટીકા મસાલા;Fish Masala|ફીશ મસાલા;Fish Fry (1 Pcs.)|ફીશ ફ્રાય (૧ નંગ);Fish Chilly (8 Pcs.)|ફીશ ચીલ્લી (૮ નંગ);Fish Tandoori Tikka (6 Pcs.)|ફીશ તંદુરી ટીક્કા ફ્રાય;Prawns Masala|પ્રોન્સ મસાલા;Prawns Fry|પ્રોન્સ ફ્રાય;Prawns Chilly (8 Pcs.)|પ્રોન્સ ચીલ્લી (૮ નંગ)").split(";");
var F="Pav Bhaji|પાવ ભાજી|v;Egg Bhurji Pav|એગ ભુર્જી પાવ;Chicken Roll|ચિકન રોલ;Chicken Sandwich|ચિકન સેન્ડવિચ;Veg Cheese Sandwich|વેજ ચીઝ સેન્ડવિચ|v;Chicken Burger|ચિકન બર્ગર;Veg Burger|વેજ બર્ગર|v;French Fries|ફ્રેન્ચ ફ્રાઈસ|v;Masala Maggi|મસાલા મેગી|v;Chicken Shawarma|ચિકન શવારમા".split(";");
var DATA={mutton:M.map(sp),sea:S.map(sp),fast:F.map(sp)};
function sp(s){var a=s.split("|");return{en:a[0],gu:a[1],v:a[2]==="v"}}
var cat="mutton",gu=false,$=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};


var seen=false;try{seen=sessionStorage.getItem("iq")}catch(e){}
var ready=false,Q=[],nav=$("#nav"),applyTab=function(){};
function go(el){el.classList.add("in")}
function start(){ready=true;document.body.classList.add("ready");Q.forEach(go);Q=[]}
function hide(){var l=$("#loader");if(!l){start();return}l.classList.add("out");try{sessionStorage.setItem("iq","1")}catch(e){}setTimeout(start,800);setTimeout(function(){l.remove()},2300)}
if(seen){var l0=$("#loader");if(l0)l0.remove();start()}else{window.addEventListener("load",function(){var f=document.fonts&&document.fonts.ready;Promise.resolve(f).then(function(){setTimeout(hide,2400)})});setTimeout(function(){if(!ready)hide()},4600)}
var Y=new Date().getFullYear()-1947;
function wd(n){var o="one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" "),t="twenty thirty forty fifty sixty seventy eighty ninety".split(" ");if(n<20)return o[n-1]||"";if(n<100)return t[Math.floor(n/10)-2]+(n%10?"-"+o[n%10-1]:"");return String(n)}
$$("[data-yrs]").forEach(function(e){e.textContent=Y});$$("[data-yrw]").forEach(function(e){e.textContent=wd(Y)});$$(".count b").forEach(function(e){e.dataset.to=Y});
$$("[data-split]").forEach(function(el){var t=el.textContent.trim();el.setAttribute("aria-label",t);el.innerHTML=t.split(" ").map(function(w,i){return '<span class="w" aria-hidden="true"><i style="--d:'+i+'">'+w+'</i></span>'}).join(" ")});
$$(".lit").forEach(function(el){var t=el.textContent.trim();el.setAttribute("aria-label",t);el.innerHTML=t.split(" ").map(function(w){return '<span aria-hidden="true">'+w+'</span>'}).join(" ")});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);ready?go(e.target):Q.push(e.target)})},{threshold:.15});
$$("[data-split],.rv").forEach(function(el){io.observe(el)});
if($("#list")){
var cat="all",vf="",SEC=[["mutton","Mutton","મટન","Minimum 400 gms."],["sea","Sea food","સી-ફુડ","Minimum 400 gms."],["fast","Fast food","ફાસ્ટ ફૂડ","Iqbal Fastfood And Sweets"]],PH={mutton:"assets/mutton.jpg",sea:"assets/fish.jpg"};
function render(){var q=$("#q").value.trim().toLowerCase(),h="",n=0;
SEC.forEach(function(s){if(cat!=="all"&&cat!==s[0])return;var rows=DATA[s[0]].filter(function(d){return(!q||d.en.toLowerCase().indexOf(q)>-1||d.gu.indexOf(q)>-1)&&(!vf||(vf==="v")===d.v)});if(!rows.length)return;n+=rows.length;
h+='<section class="ms"><div class="sech"><h3 class="rib"><span>'+s[1]+' <small>('+s[3]+')</small></span><span class="gu">'+s[2]+'</span></h3>'+(PH[s[0]]?'<img src="'+PH[s[0]]+'" alt="">':'')+'</div><ol class="ml">'+rows.map(function(d,i){return '<li style="animation-delay:'+Math.min(i*30,600)+'ms"><i class="no">'+(i<9?"0":"")+(i+1)+'</i><span class="en"><b class="vg '+(d.v?"v":"n")+'" title="'+(d.v?"Veg":"Non-veg")+'"></b>'+d.en+'</span><span class="gu">'+d.gu+'</span></li>'}).join("")+'</ol></section>'});
$("#list").innerHTML=h;$("#empty").hidden=n>0}
function pick(c){cat=c;$$(".tabs button").forEach(function(x){x.setAttribute("aria-selected",x.dataset.cat===c)});render()}
$$(".tabs button").forEach(function(b){b.addEventListener("click",function(){pick(b.dataset.cat)})});
$$(".vf button").forEach(function(b){b.addEventListener("click",function(){vf=b.dataset.v;$$(".vf button").forEach(function(x){x.setAttribute("aria-pressed",x===b)});render()})});
$("#q").addEventListener("input",render);
$("#fb").addEventListener("click",function(){pick("fast");$("#list").scrollIntoView({behavior:"smooth",block:"start"})});
applyTab=function(){var t=null;try{t=sessionStorage.getItem("iqtab");sessionStorage.removeItem("iqtab")}catch(e){}if(t)pick(t)};
render();applyTab();
}
var cn=$(".count b"),done=false;
if(cn)new IntersectionObserver(function(es,ob){if(!es[0].isIntersecting||done)return;done=true;var t=+cn.dataset.to,s=performance.now();(function f(n){var k=Math.min((n-s)/1400,1);cn.textContent=Math.round(t*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(f)})(s);ob.disconnect()}).observe(cn);
$$("[data-call]").forEach(function(a){a.href="tel:+"+PHONE});
$$("#wa,#wa2").forEach(function(a){a.href="https://wa.me/"+PHONE});
var bar=$(".bar"),lits=$$(".lit"),dk=$(".dock"),ly=0;
function frame(){var y=window.scrollY,vh=window.innerHeight,h=document.documentElement.scrollHeight-vh;
nav.classList.toggle("on",y>40);if(dk){if(y<90)dk.classList.add("hide");else if(y>ly+8&&y>240&&!document.body.classList.contains("open"))dk.classList.add("hide");else if(y<ly-8||y<240)dk.classList.remove("hide")}ly=y;bar.style.transform="scaleX("+(h>0?Math.min(y/h,1):0)+")";
document.documentElement.style.setProperty("--p",Math.min(y/(vh*.8),1).toFixed(3));
lits.forEach(function(el){var r=el.getBoundingClientRect();if(!r.height)return;var p=(vh*.9-r.top)/(vh*.55+r.height),n=Math.floor(Math.max(0,Math.min(1,p))*el.children.length*1.05);for(var i=0;i<el.children.length;i++)el.children[i].classList.toggle("on",i<n)})}
var tk=false;window.addEventListener("scroll",function(){if(!tk){tk=true;requestAnimationFrame(function(){tk=false;frame()})}},{passive:true});
if(matchMedia("(hover:hover) and (pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion:reduce)").matches){
$$(".hero").forEach(function(h){h.addEventListener("pointermove",function(e){var r=h.getBoundingClientRect();h.style.setProperty("--mx",(e.clientX-r.left)+"px");h.style.setProperty("--my",(e.clientY-r.top)+"px")})});
$$("[data-tilt]").forEach(function(el){el.addEventListener("pointermove",function(e){var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform="perspective(800px) rotateY("+x*9+"deg) rotateX("+-y*9+"deg) translateZ(0)"});el.addEventListener("pointerleave",function(){el.style.transform=""})});
$$(".btn").forEach(function(b){b.addEventListener("pointermove",function(e){var r=b.getBoundingClientRect();b.style.transform="translate("+(e.clientX-r.left-r.width/2)*.18+"px,"+(e.clientY-r.top-r.height/2)*.3+"px)"});b.addEventListener("pointerleave",function(){b.style.transform=""})})}
document.addEventListener("click",function(e){var a=e.target.closest("[data-tab]");if(a)try{sessionStorage.setItem("iqtab",a.dataset.tab)}catch(x){}});
var bg=$(".burger");function tog(o){document.body.classList.toggle("open",o);bg.setAttribute("aria-expanded",o)}
bg.addEventListener("click",function(){tog(!document.body.classList.contains("open"))});
document.addEventListener("keydown",function(e){if(e.key==="Escape")tog(false)});
$$("#nav nav a").forEach(function(a){a.addEventListener("click",function(){tog(false)})});
var pgs=$$(".pg");
if(pgs.length){
function route(){var n=(location.hash||"#home").slice(1);if(!pgs.some(function(p){return p.dataset.page===n}))n="home";pgs.forEach(function(p){p.hidden=p.dataset.page!==n});$$("#nav nav a").forEach(function(a){a.toggleAttribute("aria-current",a.getAttribute("href")==="#"+n)});if(n==="menu")applyTab();window.scrollTo(0,0);frame()}
window.addEventListener("hashchange",route);route();
}else{
document.addEventListener("click",function(e){var a=e.target.closest("a[href]");if(!a||a.target||e.metaKey||e.ctrlKey)return;var h=a.getAttribute("href");if(!/^[a-z]+\.html(#.*)?$/.test(h))return;e.preventDefault();document.body.classList.add("leave");setTimeout(function(){location.href=h},320)});
window.addEventListener("pageshow",function(){document.body.classList.remove("leave")});
}
$$(".hero").forEach(function(h){var mons=$$(".mon",h),cap=$(".skycap",h),i=-1,t;if(!mons.length||!cap)return;
function cam(k){var sky=$(".sky",h);if(!sky)return;var vw=h.clientWidth,w=sky.getBoundingClientRect().width,px=(+mons[k].dataset.cx)*(w/1800),x=vw/2-px;x=Math.max(Math.min(0,vw-w),Math.min(0,x));if(w<=vw+2)x=0;sky.style.transform="translateX("+x+"px)"}
function show(k){i=k;cam(k);mons.forEach(function(m,x){m.classList.toggle("on",x===k)});cap.style.opacity=0;clearTimeout(t);t=setTimeout(function(){cap.textContent=mons[k].dataset.n;cap.style.opacity=1},220)}
window.addEventListener("resize",function(){if(i>=0)cam(i)});
mons.forEach(function(m,k){m.addEventListener("pointerenter",function(){show(k)});m.addEventListener("click",function(){show(k)})});
var sk=$(".sky",h);if(sk&&!matchMedia("(prefers-reduced-motion:reduce)").matches)setTimeout(function(){sk.style.filter="url(#"+sk.dataset.rf+")"},7800);
if(!matchMedia("(prefers-reduced-motion:reduce)").matches)setInterval(function(){if(document.hidden||!h.offsetParent||!document.body.classList.contains("ready"))return;show((i+1)%mons.length)},2800)});
function lbx(t){var o=document.createElement("div");o.className="lb";o.setAttribute("role","dialog");o.setAttribute("aria-label",t.getAttribute("aria-label"));o.innerHTML=t.querySelector(".ga").outerHTML;function x(){o.remove();document.removeEventListener("keydown",k)}function k(e){if(e.key==="Escape")x()}o.addEventListener("click",x);document.addEventListener("keydown",k);document.body.appendChild(o)}
$$(".gt").forEach(function(t){t.addEventListener("click",function(){lbx(t)});t.addEventListener("keydown",function(e){if(e.key==="Enter"||e.key===" "){e.preventDefault();lbx(t)}})});
frame();
})();
