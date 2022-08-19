var t = getApp(), a = require("../../utils/fetch.js");

Page({
    data: {
        user: null,
        left: 0,
        width: 0,
        status: "pause",
        pickUser: {},
        buttonType: "getUserInfo",
        comment: "",
        comments: [],
        share_count: 0,
        score: 0
    },
    onLoad: function(t) {
        this.getPickUser(t.id), this.getComments(t.id), this.getShareCount(t.id), wx.setNavigationBarTitle({
            title: "Pick新说唱"
        });
    },
    getPickUser: function(t) {
        var e = this;
        a.sendRequest("/pick/" + t).then(function(t) {
            t.data.status && e.setData({
                pickUser: t.data.data
            });
        });
    },
    getComments: function(t) {
        var e = this;
        a.sendRequest("/pick/" + t + "/comments").then(function(t) {
            t.data.status && e.setData({
                comments: t.data.data.data
            });
        });
    },
    getUserInfo: function(a) {
        var e = this;
        t.wechatLogin(function() {
            e.setData({
                buttonType: "share",
                user: t.globalData.userInfo
            });
        });
    },
    onReady: function() {
        this.audioCtx = wx.createAudioContext("myAudio");
    },
    onShow: function() {
        t.globalData.userInfo && this.setData({
            buttonType: "share"
        }), this.setData({
            user: t.globalData.userInfo
        });
    },
    timeupdate: function(t) {
        var a = t.detail.currentTime / t.detail.duration;
        this.setData({
            left: 100 * a.toFixed(4),
            width: 100 * a.toFixed(4)
        }), 100 == this.data.left && this.setData({
            left: 0,
            width: 0,
            status: "pause"
        });
    },
    play: function() {
        this.audioCtx.play(), this.setData({
            status: "play"
        });
    },
    pause: function() {
        this.audioCtx.pause(), this.setData({
            status: "pause"
        });
    },
    comment: function(t) {
        this.setData({
            comment: t.detail.value
        });
    },
    saveComment: function() {
        var t = this;
        if (this.data.user.token) {
            var e = {};
            e.content = this.data.comment, e.pick_id = this.data.pickUser.id, a.sendRequest("/pick", "POST", e).then(function(a) {
                a.data.status && t.getComments(t.data.pickUser.id);
            });
        }
    },
    onShareAppMessage: function() {
        var t = this;
        return {
            title: "为你pick的TA打call",
            path: "/pages/detail/index?id=" + t.data.pickUser.id,
            success: function(a) {
                t.saveShareCount(t.data.pickUser.id);
            },
            fail: function(t) {},
            complete: function() {}
        };
    },
    saveShareCount: function(t) {
        if (5 != this.data.share_count) {
            var e = this;
            a.sendRequest("/pick/" + t + "/saveShare").then(function(t) {
                t.data.status && e.setData({
                    share_count: t.data.data.share_count,
                    score: 3 * t.data.data.count
                });
            });
        }
    },
    getShareCount: function(t) {
        var e = this;
        a.sendRequest("/pick/" + t + "/getShare").then(function(t) {
            t.data.status && e.setData({
                share_count: t.data.data.share_count,
                score: 3 * t.data.data.count
            });
        });
    },
    addScore: function() {
        if (this.data.score > 0) {
            var t = this.data.pickUser.id, e = this;
            a.sendRequest("/pick/" + t + "/addScore").then(function(t) {
                t.data.status && e.setData({
                    pickUser: t.data.data,
                    score: 0
                });
            });
        }
    }
});