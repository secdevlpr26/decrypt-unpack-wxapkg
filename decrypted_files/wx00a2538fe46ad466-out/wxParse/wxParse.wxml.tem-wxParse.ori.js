function(e,s,r,gg){
var b=x[61]+':wxParse'
r.wxVkey=b
gg.f=$gdc(f_["./wxParse/wxParse.wxml"],"",1)
if(p_[b]){_wl(b,x[61]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
var cI=_o(2276,fE,oD,gg)
var oJ=_gd(x[61],cI,e_,d_)
if(oJ){
var lK=_1(2275,fE,oD,gg) || {}
var cur_globalf=gg.f
gg.valuekey.push(2275)
oJ(lK,lK,oH,gg)
gg.valuekey.pop()
gg.f=cur_globalf
}
else _w(cI,x[61],42,18)
return cF
}
oB.wxXCkey=2
_2(2273,xC,e,s,gg,oB,'item','index','')
}catch(err){
err=VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);p_[b]=false
throw err
}
p_[b]=false
return r
}