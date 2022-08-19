function t(t, a, o) {
    return a in t ? Object.defineProperty(t, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = o, t;
}

var a, o = require("../../../utils/av-weapp.js"), e = require("../../../utils/server.js"), i = getApp(), n = null, s = -1;

Page((a = {
    data: {
        login: !1,
        time: "获取验证码",
        timemoile: []
    },
    onLoad: function(t) {
        i.globalData.login;
        var a = this;
        wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    height: t.windowHeight
                });
            }
        }), e.getJSON("/User/gettimemoile/openid/" + i.globalData.openid, function(t) {
            a.setData({
                timemoile: t.data
            });
        });
    },
    navigateToNews: function() {
        wx.navigateTo({
            url: "../../news/list/list"
        });
    },
    navigateToCoupon: function() {
        wx.navigateTo({
            url: "../coupon/index"
        });
    },
    navigateToEvaluate: function() {
        wx.navigateTo({
            url: "../evaluate/evaluate"
        });
    },
    navigateToPoint: function() {
        wx.navigateTo({
            url: "../point/point"
        });
    },
    navigateToCollect: function() {
        wx.navigateTo({
            url: "../collect/collect"
        });
    }
}, t(a, "navigateToEvaluate", function() {
    wx.navigateTo({
        url: "../evaluate/evaluate"
    });
}), t(a, "gbookMessage", function() {
    wx.navigateTo({
        url: "../gbook/gbook"
    });
}), t(a, "navigateToMoney", function() {
    wx.navigateTo({
        url: "../money/money"
    });
}), t(a, "navigateToOrder", function() {
    wx.navigateTo({
        url: "../../order/list/list"
    });
}), t(a, "navigateToAddress", function() {
    wx.navigateTo({
        url: "../../address/list/list"
    });
}), t(a, "logout", function() {
    var t = getApp();
    t.globalData.login = !1, t.globalData.userInfo = null, wx.request({
        url: "http://82360490.qcloud.la/index.php/Api/User/logoutWX/openid/" + t.globalData.openid,
        data: {},
        method: "GET",
        success: function(t) {
            200 == t.data.code && (wx.showToast({
                title: "注销成功",
                icon: "success"
            }), timeout = setTimeout(function() {
                wx.switchTab({
                    url: "/pages/index/index"
                });
            }, 2e3));
        },
        fail: function() {},
        complete: function() {}
    });
}), t(a, "onShow", function() {
    var t = this, a = i.globalData.login, t = this;
    this.setData({
        login: a
    }), wx.getUserInfo({
        success: function(a) {
            var o = a.userInfo;
            t.setData({
                userInfo: o
            }), i.globalData.nickName = o.nickName;
        }
    });
}), t(a, "chooseImage", function() {
    var a = this;
    wx.chooseImage({
        count: 1,
        sizeType: [ "original", "compressed" ],
        sourceType: [ "album", "camera" ],
        success: function(e) {
            var i = e.tempFilePaths[0];
            new o.File("file-name", {
                blob: {
                    uri: i
                }
            }).save().then(function(o) {
                var e = a.data.userInfo;
                e.avatarUrl = o.url(), a.setData(t({
                    userInfo: e
                }, "userInfo", e));
            }).catch(console.error);
        }
    });
}), t(a, "navigateToAddressAboutus", function() {
    wx.navigateTo({
        url: "/pages/member/aboutus/aboutus"
    });
}), t(a, "navigateToruzhu", function() {
    wx.navigateTo({
        url: "/pages/detail/detail"
    });
}), t(a, "turnTologin", function(t) {
    this.setData({
        ifLogup: !1
    }), this.data.email = "", this.data.name = "", this.data.password = "", this.data.passwordSure = "";
}), t(a, "turnTologup", function(t) {
    this.setData({
        ifphone: !1,
        ifLogup: !0,
        num: ""
    }), this.data.name = "", this.data.email = "", this.data.phoneNum = "", this.data.password = "";
}), t(a, "turnto_phone", function(t) {
    this.setData({
        ifphone: !0
    });
}), t(a, "tap_logups", function(t) {
    wx.switchTab({
        url: "/pages/index/index"
    });
}), t(a, "tap_logup", function(t) {
    if ("" == this.data.email) wx.showToast({
        title: "请输入您的邮箱",
        duration: 1200,
        icon: "loading"
    }); else if (".com" != this.data.email.slice(-4) || this.data.email.indexOf("@") < 0) wx.showToast({
        title: "您输入的邮箱不合法",
        duration: 1200,
        icon: "loading"
    }), this.setData({
        warn: {
            warn_email: "color:rgb(241,1,25);"
        }
    }); else if ("" == this.data.password) wx.showToast({
        title: "请设置登陆密码",
        duration: 1200,
        icon: "loading"
    }); else if (this.data.password == this.data.passwordSure) {
        var a = new o.User(), e = this;
        a.setUsername(this.data.name), a.setEmail(this.data.email), a.setPassword(this.data.password), 
        a.signUp().then(function(t) {
            i.iflogup = !0, wx.showToast({
                title: "",
                icon: "loading"
            }), wx.redirectTo({
                url: "../main/main?usrid=" + t.id
            });
        }, function(t) {
            switch (t.code) {
              case 203:
                wx.showToast({
                    title: "您已注册过，请登录",
                    icon: "loading"
                }), e.turnTologin();
                break;

              case 202:
                wx.showToast({
                    title: "此用户名已被注册",
                    icon: "loading"
                }), e.setData({
                    warn: {
                        warn_name: "color:rgb(241,1,25);"
                    }
                });
                break;

              case 214:
                wx.showToast({
                    title: "您的手机已注册过请登录",
                    icon: "loading"
                });
            }
        });
    } else wx.showToast({
        title: "两次输入的密码不一致",
        duration: 1200,
        icon: "loading"
    }), this.setData({
        warn: {
            warn_passwordSure: "color:rgb(241,1,25);"
        }
    });
}), t(a, "tap_login", function() {
    var t = new o.User(), a = this;
    "" == this.data.name ? wx.showToast({
        title: "请输入注册邮箱",
        duration: 1500,
        icon: "loading"
    }) : "" == this.data.password ? wx.showToast({
        title: "请输入密码",
        duration: 1500,
        icon: "loading"
    }) : (t.setUsername(this.data.name), t.setPassword(this.data.password), t.logIn().then(function(t) {
        wx.showToast({
            title: "",
            icon: "loading"
        });
        var a = t.id;
        wx.redirectTo({
            url: "../main/main?usrid=" + a
        });
    }, function(t) {
        console.log("error.code"), console.log(t.code), "210" == t.code ? (wx.showToast({
            title: "密码错误",
            duration: 1500,
            icon: "loading"
        }), a.setData({
            warn: {
                warn_passwordSure: "color:rgb(241,1,25);"
            }
        })) : "211" == t.code ? (wx.showToast({
            title: "该邮箱还未注册，请先注册",
            duration: 2200,
            icon: "loading"
        }), a.setData({
            warn: {
                warn_name: "color:rgb(241,1,25);"
            },
            ifLogup: !0
        })) : "216" == t.code ? (wx.showToast({
            icon: "loading",
            title: "请先验证邮箱",
            duration: 2e3
        }), o.User.requestEmailVerify(a.data.email).then(function(t) {}, function(t) {
            "1" == t.code && wx.showToast({
                title: "今日往此邮箱发送的邮件数已超上限",
                duration: 2e3,
                icon: "loading"
            });
        })) : "219" == t.code && (a.setData({
            warn: {
                warn_passwordSure: "color:rgb(241,1,25);"
            }
        }), wx.showToast({
            title: "登录失败次数超过限制，请稍候再试，或通过忘记密码重设密码",
            duration: 4e3,
            icon: "loading"
        }));
    }));
}), t(a, "getnum", function(t) {
    var a = this;
    11 != parseInt(a.data.phoneNum).toString().length ? wx.showToast({
        title: "请输入正确的手机号",
        icon: "loading"
    }) : a.reSendPhoneNum();
}), t(a, "inputNum", function(t) {
    this.data.num = t.detail.value;
}), t(a, "quick_reguster_phone", function(t) {
    wx.navigateTo({
        url: "../../register/index"
    });
}), t(a, "quick_login_phone", function(t) {
    var a = this;
    4 == parseInt(this.data.num).toString().length ? (console.log("http://82360490.qcloud.la/index.php/Api/User/validate?phone=" + this.data.phoneNum + "&num=" + this.data.num + "&openid=" + i.globalData.openid), 
    wx.request({
        url: "http://82360490.qcloud.la/index.php/Api/User/validate?phone=" + this.data.phoneNum + "&num=" + this.data.num + "&openid=" + i.globalData.openid,
        data: {
            phone: this.data.phoneNum,
            num: this.data.num
        },
        method: "GET",
        success: function(t) {
            200 == t.data.code ? (i.globalData.login = !0, i.globalData.userInfo = t.data.res, 
            a.setData({
                login: !0
            }), wx.showToast({
                title: t.data.msg,
                icon: "success"
            }), timeout = setTimeout(function() {
                wx.switchTab({
                    url: "/pages/index/index"
                });
            }, 2e3)) : wx.showToast({
                title: t.data.msg,
                icon: "error"
            });
        },
        fail: function() {},
        complete: function() {}
    })) : wx.showToast({
        title: "无效的验证码",
        duration: 1500,
        icon: "loading"
    });
}), t(a, "getPassword", function(t) {
    this.setData({
        password: t.detail.value,
        warn: {
            warn_passwordSure: ""
        }
    }), this.data.password = t.detail.value;
}), t(a, "getEmail", function(t) {
    this.data.email = t.detail.value, this.data.name = t.detail.value, this.setData({
        warn: {
            warn_email: ""
        }
    });
}), t(a, "passwordSure", function(t) {
    t.detail.value === this.data.password && (this.data.passwordSure = t.detail.value), 
    this.setData({
        warn: {
            warn_passwordSure: ""
        }
    });
}), t(a, "getPhoneNum", function(t) {
    this.setData({
        phoneNum: t.detail.value
    });
}), t(a, "input_num", function(t) {
    this.data.num = t.detail.value;
}), t(a, "forgetPassword", function(t) {
    o.User.requestPasswordReset(this.data.email).then(function(t) {
        wx.showToast({
            title: "密码重置邮件已发送，请在邮件中重置密码",
            icon: "success",
            duration: 5e3
        });
    }, function(t) {
        console.log(t), console.log(t.code), "1" == t.code ? wx.showToast({
            title: "今日往此邮箱发送的邮件数已超上限",
            duration: 2e3,
            icon: "loading"
        }) : "204" == t.code ? wx.showToast({
            title: "请先输入注册邮箱",
            duration: 1200,
            icon: "loading"
        }) : "205" == t.code && wx.showToast({
            title: "您还没注册哦",
            duration: 1200,
            icon: "loading"
        });
    });
}), t(a, "reSendPhoneNum", function() {
    if (s < 0) {
        var t = this;
        s = 60, n = setInterval(function() {
            s--, t.setData({
                time: s + "s"
            }), s <= 0 && (s = -1, clearInterval(n), t.setData({
                time: "获取验证码"
            }));
        }, 1e3);
    } else wx.showToast({
        title: "短信已发到您的手机，请稍后重试!",
        icon: "loading",
        duration: 700
    });
}), a));