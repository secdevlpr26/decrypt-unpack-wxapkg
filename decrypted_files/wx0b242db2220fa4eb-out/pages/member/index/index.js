function a(a, t, o) {
    return t in a ? Object.defineProperty(a, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = o, a;
}

var t, o = require("../../../utils/av-weapp.js"), e = getApp(), i = null, n = -1;

Page((t = {
    data: {
        login: !1,
        time: "获取验证码"
    },
    onLoad: function(a) {
        e.globalData.login;
        var t = this;
        wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    height: a.windowHeight
                });
            }
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
}, a(t, "navigateToEvaluate", function() {
    wx.navigateTo({
        url: "../evaluate/evaluate"
    });
}), a(t, "navigateToMoney", function() {
    wx.navigateTo({
        url: "../money/money"
    });
}), a(t, "navigateToOrder", function() {
    wx.navigateTo({
        url: "../../order/list/list"
    });
}), a(t, "navigateToAddress", function() {
    wx.navigateTo({
        url: "../../address/list/list"
    });
}), a(t, "logout", function() {
    var a = getApp();
    a.globalData.login = !1, a.globalData.userInfo = null, wx.request({
        url: "/index.php/Api/User/logoutWX/openid/" + a.globalData.openid,
        data: {},
        method: "GET",
        success: function(a) {
            200 == a.data.code && (wx.showToast({
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
}), a(t, "onShow", function() {
    var a = this, t = e.globalData.login, a = this;
    this.setData({
        login: t
    }), wx.getUserInfo({
        success: function(t) {
            var o = t.userInfo;
            a.setData({
                userInfo: o
            }), e.globalData.nickName = o.nickName;
        }
    });
}), a(t, "chooseImage", function() {
    var t = this;
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
                var e = t.data.userInfo;
                e.avatarUrl = o.url(), t.setData(a({
                    userInfo: e
                }, "userInfo", e));
            }).catch(console.error);
        }
    });
}), a(t, "navigateToAddressAboutus", function() {
    wx.navigateTo({
        url: "/pages/member/apply/apply"
    });
}), a(t, "turnTologin", function(a) {
    this.setData({
        ifLogup: !1
    }), this.data.email = "", this.data.name = "", this.data.password = "", this.data.passwordSure = "";
}), a(t, "turnTologup", function(a) {
    this.setData({
        ifphone: !1,
        ifLogup: !0,
        num: ""
    }), this.data.name = "", this.data.email = "", this.data.phoneNum = "", this.data.password = "";
}), a(t, "turnto_phone", function(a) {
    this.setData({
        ifphone: !0
    });
}), a(t, "tap_logups", function(a) {
    wx.switchTab({
        url: "/pages/index/index"
    });
}), a(t, "tap_logup", function(a) {
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
        var t = new o.User(), i = this;
        t.setUsername(this.data.name), t.setEmail(this.data.email), t.setPassword(this.data.password), 
        t.signUp().then(function(a) {
            e.iflogup = !0, wx.showToast({
                title: "",
                icon: "loading"
            }), wx.redirectTo({
                url: "../main/main?usrid=" + a.id
            });
        }, function(a) {
            switch (a.code) {
              case 203:
                wx.showToast({
                    title: "您已注册过，请登录",
                    icon: "loading"
                }), i.turnTologin();
                break;

              case 202:
                wx.showToast({
                    title: "此用户名已被注册",
                    icon: "loading"
                }), i.setData({
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
}), a(t, "tap_login", function() {
    var a = new o.User(), t = this;
    "" == this.data.name ? wx.showToast({
        title: "请输入注册邮箱",
        duration: 1500,
        icon: "loading"
    }) : "" == this.data.password ? wx.showToast({
        title: "请输入密码",
        duration: 1500,
        icon: "loading"
    }) : (a.setUsername(this.data.name), a.setPassword(this.data.password), a.logIn().then(function(a) {
        wx.showToast({
            title: "",
            icon: "loading"
        });
        var t = a.id;
        wx.redirectTo({
            url: "../main/main?usrid=" + t
        });
    }, function(a) {
        console.log("error.code"), console.log(a.code), "210" == a.code ? (wx.showToast({
            title: "密码错误",
            duration: 1500,
            icon: "loading"
        }), t.setData({
            warn: {
                warn_passwordSure: "color:rgb(241,1,25);"
            }
        })) : "211" == a.code ? (wx.showToast({
            title: "该邮箱还未注册，请先注册",
            duration: 2200,
            icon: "loading"
        }), t.setData({
            warn: {
                warn_name: "color:rgb(241,1,25);"
            },
            ifLogup: !0
        })) : "216" == a.code ? (wx.showToast({
            icon: "loading",
            title: "请先验证邮箱",
            duration: 2e3
        }), o.User.requestEmailVerify(t.data.email).then(function(a) {}, function(a) {
            "1" == a.code && wx.showToast({
                title: "今日往此邮箱发送的邮件数已超上限",
                duration: 2e3,
                icon: "loading"
            });
        })) : "219" == a.code && (t.setData({
            warn: {
                warn_passwordSure: "color:rgb(241,1,25);"
            }
        }), wx.showToast({
            title: "登录失败次数超过限制，请稍候再试，或通过忘记密码重设密码",
            duration: 4e3,
            icon: "loading"
        }));
    }));
}), a(t, "getnum", function(a) {
    var t = this;
    11 != parseInt(t.data.phoneNum).toString().length ? wx.showToast({
        title: "请输入正确的手机号",
        icon: "loading"
    }) : t.reSendPhoneNum();
}), a(t, "inputNum", function(a) {
    this.data.num = a.detail.value;
}), a(t, "quick_reguster_phone", function(a) {
    wx.navigateTo({
        url: "../../register/index"
    });
}), a(t, "quick_login_phone", function(a) {
    var t = this;
    4 == parseInt(this.data.num).toString().length ? (console.log("http://82360490.qcloud.la/index.php/Api/User/validate?phone=" + this.data.phoneNum + "&num=" + this.data.num + "&openid=" + e.globalData.openid), 
    wx.request({
        url: "http://82360490.qcloud.la/index.php/Api/User/validate?phone=" + this.data.phoneNum + "&num=" + this.data.num + "&openid=" + e.globalData.openid,
        data: {
            phone: this.data.phoneNum,
            num: this.data.num
        },
        method: "GET",
        success: function(a) {
            200 == a.data.code ? (e.globalData.login = !0, e.globalData.userInfo = a.data.res, 
            t.setData({
                login: !0
            }), wx.showToast({
                title: a.data.msg,
                icon: "success"
            }), timeout = setTimeout(function() {
                wx.switchTab({
                    url: "/pages/index/index"
                });
            }, 2e3)) : wx.showToast({
                title: a.data.msg,
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
}), a(t, "getPassword", function(a) {
    this.setData({
        password: a.detail.value,
        warn: {
            warn_passwordSure: ""
        }
    }), this.data.password = a.detail.value;
}), a(t, "getEmail", function(a) {
    this.data.email = a.detail.value, this.data.name = a.detail.value, this.setData({
        warn: {
            warn_email: ""
        }
    });
}), a(t, "passwordSure", function(a) {
    a.detail.value === this.data.password && (this.data.passwordSure = a.detail.value), 
    this.setData({
        warn: {
            warn_passwordSure: ""
        }
    });
}), a(t, "getPhoneNum", function(a) {
    this.setData({
        phoneNum: a.detail.value
    });
}), a(t, "input_num", function(a) {
    this.data.num = a.detail.value;
}), a(t, "forgetPassword", function(a) {
    o.User.requestPasswordReset(this.data.email).then(function(a) {
        wx.showToast({
            title: "密码重置邮件已发送，请在邮件中重置密码",
            icon: "success",
            duration: 5e3
        });
    }, function(a) {
        console.log(a), console.log(a.code), "1" == a.code ? wx.showToast({
            title: "今日往此邮箱发送的邮件数已超上限",
            duration: 2e3,
            icon: "loading"
        }) : "204" == a.code ? wx.showToast({
            title: "请先输入注册邮箱",
            duration: 1200,
            icon: "loading"
        }) : "205" == a.code && wx.showToast({
            title: "您还没注册哦",
            duration: 1200,
            icon: "loading"
        });
    });
}), a(t, "reSendPhoneNum", function() {
    if (n < 0) {
        var a = this;
        n = 60, i = setInterval(function() {
            n--, a.setData({
                time: n + "s"
            }), n <= 0 && (n = -1, clearInterval(i), a.setData({
                time: "获取验证码"
            }));
        }, 1e3);
    } else wx.showToast({
        title: "短信已发到您的手机，请稍后重试!",
        icon: "loading",
        duration: 700
    });
}), t));