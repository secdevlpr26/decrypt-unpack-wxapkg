var t = require("../../template-cart/template-talk/template-talk.js"), n = getApp(), e = 0;

Page({
    data: {
        globalData: n.globalData,
        comment: {
            content: "",
            submit: !0,
            show: !1,
            maxLength: 100,
            currentLength: 0,
            talkId: 0,
            loadState: "加载完毕"
        },
        talkInfo: {
            page: 0,
            size: 5,
            end: !1,
            list: []
        },
        temdata: {
            local_city: null,
            keytext: "找店铺"
        }
    },
    userSetting: function() {
        wx.startPullDownRefresh();
    },
    bindconfirm: function(t) {
        var n = t.detail.value;
        n && (wx.setStorageSync("keywords", n), wx.showLoading({
            title: "正在加载...",
            success: function() {
                wx.switchTab({
                    url: "/pages/merch/merch"
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        }));
    },
    tolocal: function() {
        wx.navigateTo({
            url: "/pages/current-city/current-city?local_city=" + wx.getStorageSync("city").city_name
        });
    },
    openMap: function(n) {
        t.openMap(this, n);
    },
    previewImage: function(n) {
        e = 2, t.previewImage(n);
    },
    delTalk: function(n) {
        t.delTalk(this, n);
    },
    likeTalk: function(n) {
        t.likeTalk(this, n);
    },
    commentOpen: function(n) {
        t.commentOpen(this, n);
    },
    commentClose: function(n) {
        t.commentClose(this, n);
    },
    commentInput: function(n) {
        t.commentInput(this, n);
    },
    commentSubmit: function(n) {
        t.commentSubmit(this, n);
    },
    commentList: function(n) {
        t.commentList(this, n);
    },
    navigator: function(n) {
        t.navigator("navigateTo", n);
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var n = this, o = n.data.temdata;
        0 == e ? (o.local_city = wx.getStorageSync("city").city_name, n.setData({
            userInfo: wx.getStorageSync("userInfo"),
            temdata: o
        }), t.detailList(n, !0)) : e--;
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        t.detailList(this, !0);
    },
    onReachBottom: function() {
        t.detailList(this);
    },
    onShareAppMessage: function() {}
});