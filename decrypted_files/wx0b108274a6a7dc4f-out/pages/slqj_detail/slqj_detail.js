var t = getApp(), a = require("../../request/api.js");

Page({
    data: {
        imgUrl: a.API_IMG,
        val: ""
    },
    onLoad: function(t) {
        var e = this;
        console.log(t), this.setData({
            id: t.id
        }), wx.request({
            url: a.commentList2(t.id),
            success: function(t) {
                console.log(t), e.setData({
                    commentList: t.data.re,
                    num: t.data.re.length
                });
            }
        });
    },
    getUserInfo: function(e) {
        console.log(e), e.detail.rawData && (this.setData({
            userInfo: e.detail.userInfo
        }), wx.setStorage({
            key: "userInfo",
            data: e.detail.userInfo
        }), wx.request({
            url: a.saveUser(t.globalData.openid, e.detail.userInfo.nickName, e.detail.userInfo.avatarUrl),
            success: function(t) {
                console.log(t);
            }
        }));
    },
    getVal: function(t) {
        console.log(t), this.setData({
            val: t.detail.value
        });
    },
    comment: function() {
        var e = this;
        console.log(this.data.val), wx.getStorage({
            key: "userInfo",
            success: function(o) {
                e.setData({
                    userInfo: !0
                }), e.data.val ? wx.request({
                    url: a.comment2(t.globalData.openid, e.data.val, e.data.id),
                    success: function(t) {
                        console.log(t), 3 == t.data.re.status ? wx.showToast({
                            title: "您评论的内容涉及敏感词汇,请重新输入",
                            icon: "none"
                        }) : (e.setData({
                            val: ""
                        }), wx.showToast({
                            title: "评论成功",
                            success: function() {
                                wx.request({
                                    url: a.commentList2(e.data.id),
                                    success: function(t) {
                                        console.log(t), e.setData({
                                            commentList: t.data.re,
                                            num: t.data.re.length
                                        });
                                    }
                                });
                            }
                        }));
                    }
                }) : wx.showToast({
                    title: "请输入内容后再评论哦！",
                    icon: "none"
                });
            },
            fail: function(t) {
                e.setData({
                    userInfo: !1
                });
            }
        });
    },
    zan: function() {
        var e = this;
        wx.request({
            url: a.like2(t.globalData.openid, this.data.id),
            success: function(t) {
                console.log(t), 1 == t.data.status ? (wx.showToast({
                    title: t.data.msg
                }), wx.setStorage({
                    key: e.data.info.id,
                    data: !0
                })) : 0 == t.data.status ? (wx.showToast({
                    title: t.data.msg
                }), wx.setStorage({
                    key: e.data.info.id,
                    data: !1
                })) : wx.showToast({
                    title: "啊哦，发生了一个未知错误",
                    icon: "none"
                }), wx.getStorage({
                    key: e.data.info.id,
                    success: function(t) {
                        console.log(t), t.data ? e.setData({
                            iszan: !0
                        }) : e.setData({
                            iszan: !1
                        });
                    }
                }), wx.request({
                    url: a.getZan(e.data.id),
                    success: function(t) {
                        console.log(t), e.setData({
                            zan: t.data.re.zan
                        });
                    }
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var e = this;
        wx.request({
            url: a.getSlqj(this.data.id, t.globalData.openid),
            success: function(t) {
                console.log(t), e.setData({
                    info: t.data.data.re,
                    zan: t.data.data.re.zan
                }), wx.getStorage({
                    key: e.data.info.id,
                    success: function(t) {
                        console.log(t), t.data ? e.setData({
                            iszan: !0
                        }) : e.setData({
                            iszan: !1
                        });
                    }
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});