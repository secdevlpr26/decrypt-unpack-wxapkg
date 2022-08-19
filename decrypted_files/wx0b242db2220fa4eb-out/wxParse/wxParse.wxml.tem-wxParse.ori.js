function(e,s,r,gg){
var b=x[36]+':wxParse'
r.wxVkey=b
gg.f=f_["./wxParse/wxParse.wxml"]
if(p_[b]){_wl(b,x[36]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
var cI=_o(1814,fE,oD,gg)
var oJ=_gd(x[36],cI,e_,d_)
if(oJ){
var lK=_1(1813,fE,oD,gg)
var cur_globalf=gg.f
gg.valuekey.push(1813)
oJ(lK,lK,oH,gg)
gg.valuekey.pop()
gg.f=cur_globalf
}
else _w(cI,x[36],40,22)
return cF
}
oB.wxXCkey=2
_2(1811,xC,e,s,gg,oB,'item','index','')
}catch(err){
err=VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);p_[b]=false
throw err
}
p_[b]=false
return r
}