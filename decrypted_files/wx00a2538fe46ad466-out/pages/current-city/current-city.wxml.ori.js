function(e,s,r,gg){
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],3,2)
var xC=_n('view')
_r(xC,'class',0,e,s,gg)
var cF=_n('view')
_r(cF,'class',1,e,s,gg)
var hG=_n('view')
_r(hG,'class',2,e,s,gg)
var oH=_n('image')
_r(oH,'src',3,e,s,gg)
_(hG,oH)
var cI=_m('input',['bindfocus',4,'bindinput',1,'placeholder',2,'value',3],[],e,s,gg)
_(hG,cI)
_(cF,hG)
_(xC,cF)
var oJ=_n('view')
_r(oJ,'style',8,e,s,gg)
_(xC,oJ)
var oD=_v()
_(xC,oD)
if(_o(9,e,s,gg)){oD.wxVkey=1
oD.wxXCkey=1
var lK=_n('view')
_r(lK,'class',10,e,s,gg)
var aL=_v()
_(lK,aL)
var tM=_o(12,e,s,gg)
var eN=_gd(x[0],tM,e_,d_)
if(eN){
var bO=_1(11,e,s,gg) || {}
var cur_globalf=gg.f
gg.valuekey.push(11)
eN(bO,bO,aL,gg)
gg.valuekey.pop()
gg.f=cur_globalf
}
else _w(tM,x[0],15,18)
_(oD,lK)
}
var oP=_n('view')
_r(oP,'class',13,e,s,gg)
var xQ=_n('view')
_r(xQ,'class',14,e,s,gg)
var oR=_n('view')
_r(oR,'class',15,e,s,gg)
var fS=_o(16,e,s,gg)
_(oR,fS)
_(xQ,oR)
var cT=_n('view')
_r(cT,'class',17,e,s,gg)
var cW=_m('text',['bindtap',18,'data-cityid',1],[],e,s,gg)
var oX=_o(20,e,s,gg)
_(cW,oX)
_(cT,cW)
var hU=_v()
_(cT,hU)
if(_o(21,e,s,gg)){hU.wxVkey=1
hU.wxXCkey=1
var lY=_n('text')
_r(lY,'class',22,e,s,gg)
var aZ=_o(23,e,s,gg)
_(lY,aZ)
_(hU,lY)
}
var oV=_v()
_(cT,oV)
if(_o(24,e,s,gg)){oV.wxVkey=1
oV.wxXCkey=1
var t1=_m('text',['bindtap',25,'data-cityid',1],[],e,s,gg)
var e2=_o(27,e,s,gg)
_(t1,e2)
_(oV,t1)
}
_(xQ,cT)
_(oP,xQ)
var b3=_v()
_(oP,b3)
var o4=function(o6,x5,f7,gg){
var h9=_n('view')
_r(h9,'class',30,o6,x5,gg)
var o0=_n('view')
_r(o0,'class',31,o6,x5,gg)
var cAB=_o(32,o6,x5,gg)
_(o0,cAB)
_(h9,o0)
var oBB=_n('view')
_r(oBB,'class',33,o6,x5,gg)
var lCB=_v()
_(oBB,lCB)
var aDB=function(eFB,tEB,bGB,gg){
var xIB=_n('view')
_r(xIB,'class',37,eFB,tEB,gg)
var oJB=_m('view',['bindtap',38,'class',1,'data-cityid',2],[],eFB,tEB,gg)
var fKB=_o(41,eFB,tEB,gg)
_(oJB,fKB)
_(xIB,oJB)
var cLB=_n('view')
_r(cLB,'class',42,eFB,tEB,gg)
var hMB=_v()
_(cLB,hMB)
var oNB=function(oPB,cOB,lQB,gg){
var tSB=_m('view',['bindtap',46,'class',1,'data-cityid',2],[],oPB,cOB,gg)
var eTB=_n('view')
var bUB=_o(49,oPB,cOB,gg)
_(eTB,bUB)
_(tSB,eTB)
_(lQB,tSB)
return lQB
}
hMB.wxXCkey=2
_2(44,oNB,eFB,tEB,gg,hMB,'itemarea','index','')
_(xIB,cLB)
_(bGB,xIB)
return bGB
}
lCB.wxXCkey=2
_2(35,aDB,o6,x5,gg,lCB,'itemcity','index','')
_(h9,oBB)
_(f7,h9)
return f7
}
b3.wxXCkey=2
_2(28,o4,e,s,gg,b3,'item','index','')
_(xC,oP)
var fE=_v()
_(xC,fE)
if(_o(50,e,s,gg)){fE.wxVkey=1
fE.wxXCkey=1
var oVB=_n('view')
_r(oVB,'class',51,e,s,gg)
var xWB=_n('scroll-view')
xWB.attr['scrollY']=true
var oXB=_v()
_(xWB,oXB)
var fYB=function(h1B,cZB,o2B,gg){
var o4B=_m('view',['bindtap',54,'data-cityid',1],[],h1B,cZB,gg)
var l5B=_o(56,h1B,cZB,gg)
_(o4B,l5B)
_(o2B,o4B)
return o2B
}
oXB.wxXCkey=2
_2(52,fYB,e,s,gg,oXB,'item','index','')
_(oVB,xWB)
_(fE,oVB)
}
var a6B=_m('view',['bindtap',57,'class',1,'hidden',2],[],e,s,gg)
_(xC,a6B)
_(r,xC)
oB.pop()
return r
}