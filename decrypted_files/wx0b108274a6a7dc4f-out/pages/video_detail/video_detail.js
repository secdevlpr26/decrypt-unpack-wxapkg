var t = require("../../request/api.js"), a = getApp(), e = require("../../wxParse/wxParse.js");

Page({
    data: {
        video_url: t.API_IMG,
        isZan: !1,
        val: ""
    },
    onLoad: function(a) {
        var e = this;
        console.log(a), this.setData({
            courseid: a.id
        }), wx.request({
            url: t.commentList(a.id),
            success: function(t) {
                console.log(t), e.setData({
                    commentList: t.data.re,
                    comment: t.data.re.length
                });
            }
        }), this.getDetail();
    },
    getUserInfo: function(e) {
        console.log(e), e.detail.rawData && (this.setData({
            userInfo: e.detail.userInfo
        }), wx.setStorage({
            key: "userInfo",
            data: e.detail.userInfo
        }), wx.request({
            url: t.saveUser(a.globalData.openid, e.detail.userInfo.nickName, e.detail.userInfo.avatarUrl),
            success: function(t) {
                console.log(t);
            }
        }));
    },
    getDetail: function() {
        var o = this;
        wx.request({
            url: t.getVideiDetail(this.data.courseid, a.globalData.openid),
            success: function(t) {
                console.log(t), o.setData({
                    detail: t.data.data.re,
                    zan: t.data.data.re.zan,
                    browser: t.data.data.re.browser
                });
                var a = JSON.parse(o.data.detail.content);
                e.wxParse("article", "html", a, o, 5);
            }
        });
    },
    browser: function() {
        var a = this;
        console.log("视频播放"), wx.request({
            url: t.getZan2(this.data.courseid),
            success: function(t) {
                console.log(t), a.setData({
                    browser: t.data.re.browser
                });
            }
        });
    },
    video_zan: function() {
        var e = this;
        console.log("视频点赞"), wx.request({
            url: t.video_zan(a.globalData.openid, this.data.courseid),
            success: function(a) {
                console.log(a), 0 == a.data.status ? (wx.showToast({
                    title: a.data.msg
                }), wx.setStorage({
                    key: e.data.detail.id,
                    data: !1
                })) : 1 == a.data.status ? (wx.showToast({
                    title: a.data.msg
                }), wx.setStorage({
                    key: e.data.detail.id,
                    data: !0
                })) : wx.showToast({
                    title: "啊哦，发生了一个未知错误",
                    icon: "none"
                }), wx.getStorage({
                    key: e.data.detail.id,
                    success: function(t) {
                        console.log(t), t.data ? e.setData({
                            iszan: !0
                        }) : e.setData({
                            iszan: !1
                        });
                    }
                }), wx.request({
                    url: t.getZan2(e.data.courseid),
                    success: function(t) {
                        console.log(t), e.setData({
                            zan: t.data.re.zan
                        });
                    }
                });
            }
        });
    },
    comment_zan: function(e) {
        var o = this;
        console.log(e), wx.request({
            url: t.commentZan(a.globalData.openid, e.currentTarget.dataset.id),
            success: function(a) {
                console.log(a), wx.showToast({
                    title: a.data.msg
                }), wx.request({
                    url: t.commentList(o.data.courseid),
                    success: function(t) {
                        console.log(t), o.setData({
                            commentList: t.data.re
                        });
                    }
                });
            }
        });
    },
    getVal: function(t) {
        console.log(t), this.setData({
            val: t.detail.value
        });
    },
    comment: function() {
        var e = this;
        wx.getStorage({
            key: "userInfo",
            success: function(o) {
                e.setData({
                    userInfo: !0
                }), e.data.val ? wx.request({
                    url: t.comment(a.globalData.openid, e.data.val, e.data.courseid),
                    success: function(a) {
                        console.log(a), 3 == a.data.re.status ? wx.showToast({
                            title: "您评论的内容涉及敏感词汇,请重新输入",
                            icon: "none"
                        }) : wx.showToast({
                            title: "评论成功",
                            success: function() {
                                e.setData({
                                    val: ""
                                }), wx.request({
                                    url: t.commentList(e.data.courseid),
                                    success: function(t) {
                                        console.log(t), e.setData({
                                            commentList: t.data.re,
                                            comment: t.data.re.length
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
            fail: function(t) {
                console.log(t), e.setData({
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