var e = getApp(), t = require("../../request/api.js");

Page({
    data: {
        isShow: !1,
        isqiandao: !1,
        show: "none",
        show2: "",
        score: 0
    },
    getUserInfo: function(s) {
        console.log(s), s.detail.rawData && (this.setData({
            userInfo: s.detail.userInfo
        }), wx.setStorage({
            key: "userInfo",
            data: s.detail.userInfo
        }), wx.request({
            url: t.saveUser(e.globalData.openid, s.detail.userInfo.nickName, s.detail.userInfo.avatarUrl),
            success: function(e) {
                console.log(e);
            }
        }));
    },
    onLoad: function(s) {
        var o = this;
        this.setData({
            Height: e.globalData.Height
        }), console.log(s), wx.request({
            url: t.message(),
            success: function(e) {
                console.log(e), o.setData({
                    msgList: e.data.comment
                });
            }
        });
    },
    qiandao: function() {
        var s = this;
        console.log(this.data.userId), wx.getStorage({
            key: "userInfo",
            success: function(o) {
                console.log(o), s.data.userId ? wx.request({
                    url: t.qiandao(e.globalData.openid, s.data.userId),
                    success: function(e) {
                        1 == e.data.status ? (wx.showToast({
                            title: "签到成功"
                        }), s.setData({
                            days: e.data.re.sign_day,
                            isqiandao: !0
                        }), wx.setStorage({
                            key: "isqiandao",
                            data: e.data.status,
                            success: function(e) {
                                console.log("存储签到状态成功");
                            }
                        }), wx.setStorage({
                            key: "days",
                            data: e.data.re.sign_day,
                            success: function(e) {
                                console.log("存储签到天数成功");
                            },
                            fail: function(e) {},
                            complete: function(e) {}
                        }), wx.request({
                            url: t.getUserScore(s.data.userId),
                            success: function(e) {
                                console.log(e), s.setData({
                                    score: e.data.data.score
                                });
                            }
                        })) : console.log("今日已签到"), console.log(e);
                    }
                }) : wx.navigateTo({
                    url: "../login/login"
                });
            },
            fail: function(e) {
                console.log(e), wx.showToast({
                    title: "请点击上方的授权后再进行该操作哦",
                    icon: "none"
                });
            }
        });
    },
    jifen: function() {
        var e = this;
        console.log(this.data.userId), wx.getStorage({
            key: "userInfo",
            success: function(t) {
                e.data.userId ? wx.navigateTo({
                    url: "../getgoods/getgoods?userId=" + e.data.userId
                }) : wx.navigateTo({
                    url: "../login/login"
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "请点击上方的授权后再进行该操作哦",
                    icon: "none"
                });
            }
        });
    },
    toMore: function() {
        var e = this;
        wx.getStorage({
            key: "userInfo",
            success: function(t) {
                console.log(t), e.data.userId ? wx.navigateTo({
                    url: "../more_rank/more_rank?userid=" + e.data.userId
                }) : wx.navigateTo({
                    url: "../login/login"
                });
            },
            fail: function(e) {
                console.log(e), wx.showToast({
                    title: "请点击上方的授权后再进行该操作哦",
                    icon: "none"
                });
            }
        });
    },
    rule: function() {
        this.setData({
            isShow: !0
        });
    },
    close: function() {
        this.setData({
            isShow: !1
        });
    },
    toScoreDetail: function() {
        console.log("成长豆明细"), this.data.userId ? wx.navigateTo({
            url: "../scroe_detail/score_detail?userId=" + this.data.userId
        }) : wx.navigateTo({
            url: "../login/login"
        });
    },
    getPhone: function(e) {
        console.log(e), this.setData({
            tjphone: e.detail.value
        });
    },
    tjphone: function() {
        var s = this;
        console.log("确定推荐人手机号"), /^1[34578]\d{9}$/.test(this.data.tjphone) ? this.data.tjphone == e.globalData.userPhone ? wx.showToast({
            title: "推荐人不能填自己哦",
            icon: "none"
        }) : wx.request({
            url: t.tuijian(this.data.tjphone, this.data.userId),
            success: function(e) {
                console.log(e.data.re.status), 1 == e.data.re.status ? wx.showToast({
                    title: "成功",
                    success: function() {
                        s.setData({
                            show: "none",
                            isMake: "none"
                        });
                    }
                }) : 3 == e.data.re.status ? wx.showToast({
                    title: "输入的推荐手机号无效",
                    icon: "none"
                }) : 4 == e.data.re.status ? wx.showToast({
                    title: "手机号码错误",
                    icon: "none"
                }) : wx.showToast({
                    title: "未知错误",
                    icon: "none"
                });
            }
        }) : wx.showToast({
            title: "手机号码错误",
            icon: "none"
        });
    },
    getScore1: function() {
        var s = this;
        console.log("领取分享积分"), wx.request({
            url: t.getScore(e.globalData.openid, this.data.userId, this.data.share.score, 0),
            success: function(e) {
                console.log(e), 1 == e.data.status && wx.showToast({
                    title: "领取成功",
                    success: function() {
                        s.setData({
                            share: !1,
                            get1: !0
                        }), wx.request({
                            url: t.getUserScore(s.data.userId),
                            success: function(e) {
                                console.log(e), s.setData({
                                    score: e.data.data.score
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    getScore3: function() {
        var s = this;
        console.log("领取提建议积分"), wx.request({
            url: t.getScore(e.globalData.openid, this.data.userId, this.data.comment.score, 3),
            success: function(e) {
                console.log(e), 1 == e.data.status && wx.showToast({
                    title: "领取成功",
                    success: function() {
                        s.setData({
                            comment: !1,
                            get3: !0
                        }), wx.request({
                            url: t.getUserScore(s.data.userId),
                            success: function(e) {
                                console.log(e), s.setData({
                                    score: e.data.data.score
                                });
                            }
                        });
                    }
                });
            }
        });
    },
    complete1: function() {
        console.log("分享小程序");
    },
    complete2: function() {
        var e = this;
        console.log("推荐人"), wx.getStorage({
            key: "userInfo",
            success: function(s) {
                e.data.userId ? wx.request({
                    url: t.isMake(e.data.userId),
                    success: function(t) {
                        console.log(t), 0 == t.data.re ? e.setData({
                            show: ""
                        }) : wx.showToast({
                            title: "您已经填写过推荐人啦",
                            icon: "none"
                        });
                    }
                }) : wx.navigateTo({
                    url: "../login/login"
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "请点击上方的授权后再进行该操作哦",
                    icon: "none"
                });
            }
        });
    },
    complete3: function() {
        var e = this;
        wx.getStorage({
            key: "userInfo",
            success: function(t) {
                e.data.userId ? wx.navigateTo({
                    url: "../message/message?userId=" + e.data.userId
                }) : wx.navigateTo({
                    url: "../login/login"
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "请点击上方的授权后再进行该操作哦",
                    icon: "none"
                });
            }
        });
    },
    toMsg: function() {
        var e = this;
        wx.getStorage({
            key: "userInfo",
            success: function(t) {
                e.data.userId ? wx.navigateTo({
                    url: "../message/message?userId=" + e.data.userId
                }) : wx.navigateTo({
                    url: "../login/login"
                });
            },
            fail: function(e) {
                console.log(e), wx.showToast({
                    title: "请点击上方的授权后再进行该操作哦",
                    icon: "none"
                });
            }
        });
    },
    getNewScore: function() {
        var s = this;
        console.log("新人积分"), wx.request({
            url: t.getNscore(this.data.userId, e.globalData.score),
            success: function(e) {
                console.log(e), 1 == e.data.status && wx.showToast({
                    title: "领取成功",
                    success: function() {
                        wx.request({
                            url: t.getUserScore(s.data.userId),
                            success: function(e) {
                                console.log(e), s.setData({
                                    score: e.data.data.score
                                });
                            }
                        });
                    }
                });
            }
        }), e.globalData.newP = !1, this.setData({
            isNew: !1
        });
    },
    onReady: function() {},
    onShow: function() {
        var s = this;
        wx.getStorage({
            key: "userId",
            success: function(o) {
                console.log(o), s.setData({
                    userId: o.data
                }), wx.request({
                    url: t.isQiandao(e.globalData.openid, s.data.userId),
                    success: function(e) {
                        console.log(e), 0 == e.data.status ? s.setData({
                            isqiandao: !1,
                            days: e.data.day
                        }) : (console.log("今日已签到"), s.setData({
                            isqiandao: !0,
                            days: e.data.day
                        }));
                    }
                }), wx.request({
                    url: t.getUserScore(s.data.userId),
                    success: function(e) {
                        console.log(e), s.setData({
                            score: e.data.data.score
                        });
                    }
                }), wx.request({
                    url: t.isDone(e.globalData.openid, s.data.userId),
                    success: function(e) {
                        console.log(e), s.setData({
                            comment: e.data.comment,
                            share: e.data.share,
                            tuijian: e.data.tuijian,
                            xuefei: e.data.xue
                        });
                    }
                }), wx.request({
                    url: t.isGet(e.globalData.openid, s.data.userId),
                    success: function(e) {
                        console.log(e), 1 == e.data.comment && s.setData({
                            get3: !0
                        }), 1 == e.data.share && (console.log("今日已完成分享任务"), s.setData({
                            get1: !0
                        }));
                    }
                }), wx.request({
                    url: t.isMake(s.data.userId),
                    success: function(e) {
                        console.log(e), 1 == e.data.re && s.setData({
                            isMake: "none"
                        });
                    }
                });
            }
        }), wx.getStorage({
            key: "userInfo",
            success: function(e) {
                console.log(e), s.setData({
                    userInfo: e.data
                });
            }
        }), console.log(e.globalData.newP), e.globalData.newP && this.setData({
            isNew: !0
        }), wx.request({
            url: t.message(),
            success: function(e) {
                console.log(e), s.setData({
                    msgList: e.data.comment
                });
            }
        });
    },
    onShareAppMessage: function(s) {
        console.log("转发啦哈哈哈！！！"), wx.request({
            url: t.share(e.globalData.openid, this.data.userId),
            success: function(e) {
                console.log(e);
            }
        });
    }
});