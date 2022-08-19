module.exports.plus = function(t) {
    return t ? (this.popp(), t = !1) : t ? void 0 : (this.takeback(), t = !0);
}, exports.popp = function() {
    var t = wx.createAnimation({
        duration: 600,
        timingFunction: "lease-out"
    }), a = wx.createAnimation({
        duration: 600,
        timingFunction: "lease-out"
    }), n = wx.createAnimation({
        duration: 600,
        timingFunction: "lease-out"
    }), e = wx.createAnimation({
        duration: 600,
        timingFunction: "lease-out"
    });
    t.rotateZ(180).step(), a.translate(0, -120).rotateZ(360).opacity(1).step(), n.translate(0, -80).rotateZ(360).opacity(1).step(), 
    e.translate(0, -40).rotateZ(360).opacity(1).step(), this.setData({
        animPlus: t.export(),
        animCollect: a.export(),
        animTranspond: n.export(),
        animInput: e.export()
    });
}, exports.takeback = function(t) {
    var t = this, a = wx.createAnimation({
        duration: 600,
        timingFunction: "lease-out"
    }), n = wx.createAnimation({
        duration: 600,
        timingFunction: "lease-out"
    }), e = wx.createAnimation({
        duration: 600,
        timingFunction: "lease-out"
    }), i = wx.createAnimation({
        duration: 600,
        timingFunction: "lease-out"
    });
    a.rotateZ(0).step(), n.translate(0, 0).rotateZ(0).opacity(0).step(), e.translate(0, 0).rotateZ(0).opacity(0).step(), 
    i.translate(0, 0).rotateZ(0).opacity(0).step(), t.setData({
        animPlus: a.export(),
        animCollect: n.export(),
        animTranspond: e.export(),
        animInput: i.export()
    });
};