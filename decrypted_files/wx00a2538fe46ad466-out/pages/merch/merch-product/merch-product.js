var t = getApp(), e = require("../../../wxParse/wxParse.js");

Page({
    data: {
        imageurl: [ {
            thumb: ""
        }, {
            thumb: ""
        }, {
            thumb: ""
        } ],
        footlist: [ {
            thumb: "/images/tongcheng/nav/home-off.png",
            title: "首页",
            bind: "toindex",
            flex: 1
        }, {
            title: "返回商家",
            flex: 5,
            bind: "tomerchdetail",
            color: "#FF6633"
        } ],
        goodsdetail: {},
        params: [],
        tablist: [ {
            title: "商品介绍"
        }, {
            title: "参数展示"
        } ],
        currenttab: 0
    },
    totabbar: function(t) {
        var e = t.currentTarget.dataset.index;
        this.setData({
            currenttab: e
        });
    },
    toindex: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    tomerchdetail: function() {
        wx.navigateBack();
    },
    tomerchpay: function() {
        wx.navigateTo({
            url: "/pages/merch/merch-pay/merch-pay"
        });
    },
    tocollect: function(e) {
        var a = this;
        e.currentTarget.dataset.index;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=collect",
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                collect_type: "product",
                collect_vid: 1
            },
            success: function(t) {
                1 == t.data.status ? wx.showToast({
                    title: t.data.result.message,
                    image: "/images/tongcheng/icon-nomore.png",
                    success: function() {
                        a.getList();
                    }
                }) : wx.showToast({
                    title: t.data.result.message,
                    image: "/images/tongcheng/icon-icon-failed.png"
                });
            }
        });
    },
    getList: function(a, o) {
        var i = this;
        wx.showLoading({
            title: "正在加载"
        }), wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=goodsdetail&vid=" + a + "&id=" + o,
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(a) {
                if (1 == a.data.status) {
                    var o = a.data.result.goodsdetail, n = a.data.result.params, l = i.data.footlist, s = i.data.imageurl;
                    o.thumb_one && (o.thumb_one = t.globalData.imgurl + o.thumb_one, s[0].thumb = o.thumb_one), 
                    o.thumb_two && (o.thumb_two = t.globalData.imgurl + o.thumb_two, s[1].thumb = o.thumb_two), 
                    o.thumb_three && (o.thumb_three = t.globalData.imgurl + o.thumb_three, s[2].thumb = o.thumb_three), 
                    e.wxParse("description", "html", o.introduction, i, 5), i.setData({
                        footlist: l,
                        goodsdetail: o,
                        params: n,
                        imageurl: s
                    });
                }
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    onLoad: function(t) {
        this.getList(t.vid, t.id);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});