var o = require("../../request/api.js"), t = getApp();

Page({
    data: {
        video_url: o.API_IMG,
        isZan: !1,
        val: ""
    },
    onLoad: function(a) {
        var e = this;
        console.log(a), this.setData({
            id: a.id
        }), wx.request({
            url: o.look2(a.id, t.globalData.openid),
            success: function(o) {
                console.log(o), e.setData({
                    detail: o.data.data.re,
                    zan: o.data.data.re.zan,
                    browser: o.data.data.re.browser
                });
            }
        }), wx.request({
            url: o.look7(a.id),
            success: function(o) {
                console.log(o), e.setData({
                    commentList: o.data.re,
                    comment: o.data.re.length
                });
            }
        });
    },
    getUserInfo: function(a) {
        console.log(a), a.detail.rawData && (this.setData({
            userInfo: a.detail.userInfo
        }), wx.setStorage({
            key: "userInfo",
            data: a.detail.userInfo
        }), wx.request({
            url: o.saveUser(t.globalData.openid, a.detail.userInfo.nickName, a.detail.userInfo.avatarUrl),
            success: function(o) {
                console.log(o);
            }
        }));
    },
    video_zan: function() {
        var a = this;
        console.log("视频点赞"), wx.request({
            url: o.look4(t.globalData.openid, this.data.id),
            success: function(t) {
                console.log(t), wx.showToast({
                    title: t.data.msg
                }), wx.request({
                    url: o.look5(a.data.id),
                    success: function(o) {
                        console.log(o), a.setData({
                            zan: o.data.re.zan
                        });
                    }
                });
            }
        });
    },
    comment_zan: function(a) {
        var e = this;
        console.log(a), wx.request({
            url: o.look8(t.globalData.openid, a.currentTarget.dataset.id),
            success: function(t) {
                console.log(t), wx.showToast({
                    title: t.data.msg
                }), wx.request({
                    url: o.look7(e.data.id),
                    success: function(o) {
                        console.log(o), e.setData({
                            commentList: o.data.re
                        });
                    }
                });
            }
        });
    },
    getVal: function(o) {
        console.log(o), this.setData({
            val: o.detail.value
        });
    },
    comment: function() {
        var a = this;
        wx.getStorage({
            key: "userInfo",
            success: function(e) {
                a.setData({
                    userInfo: !0
                }), a.data.val ? wx.request({
                    url: o.look6(t.globalData.openid, a.data.id, a.data.val),
                    success: function(t) {
                        console.log(t), 3 == t.data.re.status ? wx.showToast({
                            title: "您评论的内容涉及敏感词汇,请重新输入",
                            icon: "none"
                        }) : wx.showToast({
                            title: "评论成功",
                            success: function() {
                                a.setData({
                                    val: ""
                                }), wx.request({
                                    url: o.look7(a.data.id),
                                    success: function(o) {
                                        console.log(o), a.setData({
                                            commentList: o.data.re,
                                            comment: o.data.re.length
                                        });
                                    }
                                });
                            }
                        });
                    }
                }) : wx.showToast({
                    title: "请输入内容后在评论哦",
                    icon: "none"
                });
            },
            fail: function(o) {
                console.log(o), a.setData({
                    userInfo: !1
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});