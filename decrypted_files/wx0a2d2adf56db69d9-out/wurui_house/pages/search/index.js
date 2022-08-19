function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e = getApp();

Page((a = {
    data: {
        length: 1,
        history: !1,
        historylist: []
    },
    onLoad: function(t) {
        wx.setNavigationBarTitle({
            title: "信息综合查询"
        });
        var a = wx.getStorageSync("historyKeyWord");
        "" == a ? a = [] : this.setData({
            history: !0
        }), this.setData({
            loadmore: !0,
            historylist: a
        });
    },
    onReady: function() {},
    onShow: function() {
        this.setData({
            loadmore: !0
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    bindSave: function(t) {
        var a = this, o = t.detail.value;
        if ("" != o) {
            var s = [];
            s = a.data.historylist, (s = [ o ].concat(s)).length > 9 && s.splice(s.length - 1, 1), 
            wx.setStorageSync("historyKeyWord", s), a.setData({
                historylist: s
            }), e.util.request({
                url: "entry/wxapp/search",
                data: {
                    keyword: o
                },
                success: function(t) {
                    if (0 != t.data.errno) return wx.hideLoading(), void wx.showModal({
                        title: "失败",
                        content: t.data.data.msg,
                        showCancel: !1
                    });
                    0 == t.data.data.length ? (console.log("fffffffff"), a.setData({
                        list: t.data.data,
                        loadmore: !1
                    })) : a.setData({
                        list: t.data.data,
                        loadmore: !0
                    });
                }
            });
        } else wx.showModal({
            title: "提示",
            content: "请输入小区、地名、物业等相关信息",
            showCancel: !1
        });
    },
    toNewsDetail: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.id, e = t.currentTarget.dataset.type;
        wx.navigateTo({
            url: "/wurui_house/pages/" + e + "/index?id=" + a
        });
    }
}, t(a, "onShareAppMessage", function() {
    return {
        title: "信息综合查询-" + wx.getStorageSync("companyinfo").name,
        path: "/wurui_house/pages/search/index"
    };
}), t(a, "historyclear", function() {
    wx.removeStorageSync("historyKeyWord"), this.setData({
        history: !1,
        historylist: []
    });
}), t(a, "historyClearOne", function(t) {
    var a = this, e = t.currentTarget.dataset.historykeyid, o = [];
    (o = a.data.historylist).splice(e, 1), wx.setStorageSync("historyKeyWord", o), a.setData({
        historylist: o
    });
}), t(a, "backspace", function() {
    var t = wx.getStorageSync("historyKeyWord");
    "" == t ? t = [] : this.setData({
        history: !0
    }), this.setData({
        list: null,
        loadmore: !0,
        historylist: t
    });
}), t(a, "toSerach", function(t) {
    var a = this, o = t.currentTarget.dataset.historykey, s = [];
    s = a.data.historylist, (s = [ o ].concat(s)).length > 9 && s.splice(s.length - 1, 1), 
    wx.setStorageSync("historyKeyWord", s), a.setData({
        historylist: s
    }), e.util.request({
        url: "entry/wxapp/search",
        data: {
            keyword: o
        },
        success: function(t) {
            if (0 != t.data.errno) return wx.hideLoading(), void wx.showModal({
                title: "失败",
                content: t.data.data.msg,
                showCancel: !1
            });
            0 == t.data.data.length ? (console.log("fffffffff"), a.setData({
                list: t.data.data,
                loadmore: !1
            })) : a.setData({
                list: t.data.data,
                loadmore: !0
            });
        }
    });
}), a));