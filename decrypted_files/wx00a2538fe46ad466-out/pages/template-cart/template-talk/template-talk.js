var t = getApp(), a = function(a, e) {
    var n = a.data.talkInfo;
    n.page = e ? 0 : n.page, n.list = e ? [] : n.list, n.loadState = 0, a.setData({
        talkInfo: n
    }), n.end && !e || wx.request({
        url: t.globalData.url + t.globalData.parameter,
        data: {
            do: "talk",
            page: n.page + 1,
            psize: 5
        },
        header: {
            Cookie: t.globalData.session_login_id,
            "content-type": "application/x-www-form-urlencoded"
        },
        success: function(t) {
            if (1 == t.data.status) {
                var e = t.data.result.talklist;
                n.list = n.list.concat(e), n.end = !e.length, ++n.page, n.loadState = n.end ? 2 : 1, 
                a.setData({
                    talkInfo: n
                });
            }
        },
        fail: function() {
            n.loadState = 3, a.setData({
                talkInfo: n
            });
        },
        complete: function() {
            wx.stopPullDownRefresh();
        }
    });
};

module.exports = {
    detailList: function(t, e) {
        if (e) {
            var n = t.data.talkInfo;
            n.page = 1, n.end = !1, t.setData({
                talkInfo: n
            });
        }
        t.data.userInfo && (t.data.talkInfo.end || a(t, e));
    },
    getDetailList: a,
    likeTalk: function(a, e) {
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=talk_pinglun",
            method: "POST",
            data: {
                talk_id: e.currentTarget.dataset.id,
                type: 1
            },
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                if (1 == t.data.status) {
                    var n = a.data.talkInfo;
                    n.list.find(function(t) {
                        return t.talk_id == e.currentTarget.dataset.id;
                    }).dznum = t.data.result.data.num, a.setData({
                        talkInfo: n
                    });
                } else wx.showToast({
                    title: t.data.result.message
                });
            }
        });
    },
    delTalk: function(a, e) {
        wx.showModal({
            title: "删除说说",
            content: "是否删除此说说？",
            success: function(a) {
                a.confirm && (wx.showLoading({
                    title: "删除中",
                    mask: !0
                }), wx.request({
                    url: t.globalData.url + t.globalData.parameter + "&do=talk_del",
                    method: "POST",
                    data: {
                        talk_id: e.currentTarget.dataset.id
                    },
                    header: {
                        Cookie: t.globalData.session_login_id,
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        1 == t.data.status ? (console.log(t), wx.showToast({
                            title: t.data.result.message
                        }), wx.startPullDownRefresh()) : wx.showModal({
                            title: "提示",
                            content: t.data.result.message,
                            showCancel: !1
                        });
                    },
                    fail: function() {
                        wx.showModal({
                            title: "提示",
                            content: "网络连接失败",
                            showCancel: !1
                        });
                    },
                    complete: function() {
                        wx.hideLoading();
                    }
                }));
            }
        });
    },
    commentList: function(t, a) {
        var e = t.data.talkInfo, n = e.list, o = a.currentTarget.dataset.index;
        n[o].pinglunShow = !n[o].pinglunShow, t.setData({
            talkInfo: e
        });
    },
    commentClose: function(t, a) {
        var e = t.data.comment;
        e.show = !1, t.setData({
            comment: e
        });
    },
    commentOpen: function(t, a) {
        var e = t.data.comment;
        e.show = !0, e.talkId = a.currentTarget.dataset.id, e.content = "", e.currentLength = e.maxLength, 
        e.submit = !0, t.setData({
            comment: e
        });
    },
    commentInput: function(t, a) {
        var e = t.data.comment;
        e.content = a.detail.value, e.currentLength = e.maxLength - a.detail.value.length, 
        e.submit = !(a.detail.value.length > 0), t.setData({
            comment: e
        });
    },
    commentSubmit: function(a, e) {
        var n = a.data.talkInfo, o = a.data.comment;
        wx.request({
            url: t.globalData.url + t.globalData.parameter + "&do=talk_pinglun",
            header: {
                Cookie: t.globalData.session_login_id,
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            data: {
                talk_id: o.talkId,
                pinglun_content: o.content,
                type: 2
            },
            success: function(t) {
                n.list.find(function(t) {
                    return t.talk_id == o.talkId;
                }).pinglun = t.data.result.data.data, a.setData({
                    talkInfo: n
                }), a.commentClose();
            },
            fail: function() {
                wx.showToast({
                    title: "发送失败,请稍后重试",
                    duration: 2e3
                });
            }
        });
    },
    previewImage: function(a) {
        var e = [];
        a.currentTarget.dataset.src.forEach(function(a, n, o) {
            e[n] = t.globalData.imgurl + a;
        }), Array.isArray(a.target.dataset.src) || wx.previewImage({
            current: a.target.dataset.src,
            urls: e
        });
    },
    navigator: function(t, a) {
        "navigateTo" == t ? wx.navigateTo({
            url: a.currentTarget.dataset.url
        }) : "redirectTo" == t && wx.redirectTo({
            url: a.currentTarget.dataset.url
        });
    },
    openMap: function(t, a) {
        wx.openLocation({
            latitude: Number(a.currentTarget.dataset.latitude),
            longitude: Number(a.currentTarget.dataset.longitude),
            address: a.currentTarget.dataset.address,
            name: a.currentTarget.dataset.address
        });
    }
};