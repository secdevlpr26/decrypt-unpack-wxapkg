var t = getApp(), a = require("../../template-cart/template-talk/template-talk.js");

Page({
    data: {
        infolist: [],
        info: [],
        tablist: [],
        currenttab: 0,
        fangwen: "",
        time: "",
        xinxi: "",
        user: {},
        shoplist: [],
        quanlist: [],
        globalData: t.globalData,
        talkInfo: {
            page: 1,
            size: 5,
            end: !1,
            list: []
        },
        comment: {
            content: "",
            submit: !0,
            show: !1,
            maxLength: 100,
            currentLength: 0,
            talkId: 0,
            loadState: "加载完毕"
        }
    },
    openMap: function(t) {
        wx.openLocation({
            latitude: Number(t.currentTarget.dataset.latitude),
            longitude: Number(t.currentTarget.dataset.longitude),
            address: t.currentTarget.dataset.address,
            name: t.currentTarget.dataset.name
        });
    },
    previewImage: function(t) {
        a.previewImage(t);
    },
    delTalk: function(t) {
        a.delTalk(this, t);
    },
    likeTalk: function(t) {
        a.likeTalk(this, t);
    },
    commentOpen: function(t) {
        a.commentOpen(this, t);
    },
    commentClose: function(t) {
        a.commentClose(this, t);
    },
    commentInput: function(t) {
        a.commentInput(this, t);
    },
    commentSubmit: function(t) {
        a.commentSubmit(this, t);
    },
    commentList: function(t) {
        a.commentList(this, t);
    },
    navigator: function(t) {},
    tomessage: function() {
        var a = this.data.user;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=liaotian&openid=" + a.openid,
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                1 == t.data.status ? wx.navigateTo({
                    url: "/pages/index/chatting/chatting?openid=" + a.openid + "&nickname=" + a.nickname
                }) : wx.showModal({
                    title: "提示",
                    content: t.data.result.message,
                    showCancel: !1
                });
            }
        });
    },
    totabbar: function(t) {
        var a = this, e = t.currentTarget.dataset.index, n = a.data.info, i = a.data.shoplist, o = a.data.quanlist;
        0 == e && a.setData({
            infolist: n
        }), 1 == e && a.setData({
            infolist: i
        }), 2 == e && a.setData({
            infolist: o
        }), a.setData({
            currenttab: e
        });
    },
    todetail: function(t) {
        var a = t.currentTarget.dataset.id;
        wx.redirectTo({
            url: "/pages/index/detail/detail?vid=" + a
        });
    },
    tomerchdetail: function(t) {
        var a = t.currentTarget.dataset.vid;
        wx.navigateTo({
            url: "/pages/merch/merch-detail/merch-detail?vid=" + a
        });
    },
    toquanview: function(t) {
        var a = t.currentTarget.dataset.vid;
        wx.redirectTo({
            url: "/pages/packet/quanview/quanview?vid=" + a
        });
    },
    reload: function(a) {
        var e = this, n = wx.getStorageSync("location");
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=home&uid=" + a.uid + "&lat=" + n.lat + "&lng=" + n.lng,
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                var n = t.data.result.info, i = t.data.result.fangwen, o = t.data.result.time, l = t.data.result.xinxi, r = t.data.result.user, s = t.data.result.shop, u = e.data.talkInfo, c = t.data.result.talk, d = t.data.result.quan;
                u.list = c;
                for (var m = 0; m < c.length; m++) c[m].avatar = c[m].headerprice, c[m].gaptime = c[m].talk_time, 
                c[m].dznum = c[m].gettalkzannum, c[m].plnum = c[m].gettalkpinglunnum, c[m].pinglun = c[m].gettalkpinglun, 
                c[m].picture = c[m].price;
                if (0 == a.tab && (n = n), 1 == a.tab && (n = s), 2 == a.tab && (n = d), wx.getStorageSync("userInfo").nickname == r.nickname) g = [ {
                    title: "我的信息"
                }, {
                    title: "我的商户"
                }, {
                    title: "我的红包"
                }, {
                    title: "我的说说"
                } ]; else var g = [ {
                    title: "Ta的信息"
                }, {
                    title: "Ta的商户"
                }, {
                    title: "Ta的红包"
                }, {
                    title: "Ta的说说"
                } ];
                e.setData({
                    infolist: n,
                    info: t.data.result.info,
                    fangwen: i,
                    time: o,
                    user: r,
                    shoplist: s,
                    talkInfo: u,
                    xinxi: l,
                    quanlist: d,
                    tablist: g,
                    currenttab: a.tab
                }), wx.stopPullDownRefresh();
            }
        });
    },
    onLoad: function(t) {
        this.reload(t);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        var t = {
            tab: this.data.currenttab,
            uid: this.data.user.uid
        };
        this.reload(t);
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});