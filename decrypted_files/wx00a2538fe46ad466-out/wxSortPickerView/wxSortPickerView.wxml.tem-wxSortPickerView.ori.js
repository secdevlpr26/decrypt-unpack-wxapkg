function(e,s,r,gg){
var b=x[62]+':wxSortPickerView'
r.wxVkey=b
gg.f=$gdc(f_["./wxSortPickerView/wxSortPickerView.wxml"],"",1)
if(p_[b]){_wl(b,x[62]);return}
p_[b]=true
try{
var oB=_m('scroll-view',['bindscroll',2982,'bindscrolltolower',1,'bindscrolltoupper',2,'class',3,'scrollIntoView',4,'scrollTop',5,'scrollWithAnimation',6,'scrollY',7,'style',8],[],e,s,gg)
var xC=_m('view',['animation',2991,'class',1],[],e,s,gg)
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_m('view',['class',2996,'id',1],[],hG,cF,gg)
var lK=_o(2998,hG,cF,gg)
_(oJ,lK)
_(oH,oJ)
var aL=_n('view')
_r(aL,'class',2999,hG,cF,gg)
var tM=_v()
_(aL,tM)
var eN=_o(3001,hG,cF,gg)
var bO=_gd(x[62],eN,e_,d_)
if(bO){
var oP=_1(3000,hG,cF,gg) || {}
var cur_globalf=gg.f
gg.valuekey.push(3000)
bO(oP,oP,tM,gg)
gg.valuekey.pop()
gg.f=cur_globalf
}
else _w(eN,x[62],9,28)
_(oH,aL)
return oH
}
oD.wxXCkey=2
_2(2994,fE,e,s,gg,oD,'item','index','')
_(oB,xC)
_(r,oB)
var xQ=_v()
_(r,xQ)
var oR=_o(3002,e,s,gg)
var fS=_gd(x[62],oR,e_,d_)
if(fS){
var cT={}
var cur_globalf=gg.f
gg.valuekey.push(-1)
fS(cT,cT,xQ,gg)
gg.valuekey.pop()
gg.f=cur_globalf
}
else _w(oR,x[62],14,18)
}catch(err){
err=VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(err);p_[b]=false
throw err
}
p_[b]=false
return r
}