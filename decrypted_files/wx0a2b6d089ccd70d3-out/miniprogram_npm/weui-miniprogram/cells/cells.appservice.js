$gwx_XC_3=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}var __WXML_GLOBAL__={};{
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];
function gz$gwx_XC_3_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([a,[[7],[3,'extClass']],[3,' weui-cells__group '],[[7],[3,'outerClass']],[3,' '],[[7],[3,'childClass']]])
Z([[7],[3,'title']])
Z([[7],[3,'footer']])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_3=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_3=true;
var x=['./miniprogram_npm/weui-miniprogram/cells/cells.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_3_1()
var bUB=_n('view')
_rz(z,bUB,'class',0,e,s,gg)
var oVB=_v()
_(bUB,oVB)
if(_oz(z,1,e,s,gg)){oVB.wxVkey=1
}
var oXB=_n('slot')
_(bUB,oXB)
var xWB=_v()
_(bUB,xWB)
if(_oz(z,2,e,s,gg)){xWB.wxVkey=1
}
else{xWB.wxVkey=2
var fYB=_n('slot')
_rz(z,fYB,'name',3,e,s,gg)
_(xWB,fYB)
}
oVB.wxXCkey=1
xWB.wxXCkey=1
_(r,bUB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_3";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_3();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/weui-miniprogram/cells/cells.wxml'] = [$gwx_XC_3, './miniprogram_npm/weui-miniprogram/cells/cells.wxml'];else __wxAppCode__['miniprogram_npm/weui-miniprogram/cells/cells.wxml'] = $gwx_XC_3( './miniprogram_npm/weui-miniprogram/cells/cells.wxml' );
	;__wxRoute = "miniprogram_npm/weui-miniprogram/cells/cells";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/weui-miniprogram/cells/cells.js";define("miniprogram_npm/weui-miniprogram/cells/cells.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};module.exports=function(e){function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}var n={};return o.m=e,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===(void 0===e?"undefined":t(e))&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var u in e)o.d(r,u,function(t){return e[t]}.bind(null,u));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=8)}({8:function(t,e,o){Component({options:{addGlobalClass:!0,multipleSlots:!0},properties:{title:{type:String,value:""},extClass:{type:String,value:""},footer:{type:String,value:""}},data:{firstItem:null,checkboxCount:0,checkboxIsMulti:!1,outerClass:"",childClass:""},relations:{"../cell/cell":{type:"descendant",linked:function(t){this.data.firstItem||(this.data.firstItem=t),t!==this.data.firstItem&&t.setOuterClass("weui-cell_wxss")}},"../form-page/form-page":{type:"ancestor"},"../checkbox-group/checkbox-group":{type:"descendant",linked:function(t){this.setData({checkboxCount:this.data.checkboxCount+1,checkboxIsMulti:t.data.multi})},unlinked:function(t){this.setData({checkboxCount:this.data.checkboxCount-1,checkboxIsMulti:t.data.multi})}}},methods:{setCellMulti:function(t){this.setData({checkboxIsMulti:t})},setCellsClass:function(t){this.setData({childClass:t})},setOuterClass:function(t){this.setData({outerClass:t})}}})}});
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/weui-miniprogram/cells/cells.js'});require("miniprogram_npm/weui-miniprogram/cells/cells.js");