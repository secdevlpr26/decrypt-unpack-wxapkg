App({
    onLaunch: function() {
        var o = wx.getStorageSync("logs") || [];
        o.unshift(Date.now()), wx.setStorageSync("logs", o);
    },
    getUserInfo: function(o) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var e = this;
        this.globalData.userInfo ? (console.log("userinfo变量数据"), console.log(this.globalData.userInfo), 
        "function" == typeof o && o(this.globalData.userInfo)) : wx.login({
            success: function(a) {
                console.log("登录成功"), wx.getUserInfo({
                    success: function(t) {
                        e.globalData.userInfo = t.userInfo, console.log("用户信息"), console.log(t);
                        var n = a.code;
                        n ? wx.request({
                            url: "https://open.flames-tech.cn/weixin/open/access-token",
                            data: {
                                appId: e.globalData.appid,
                                secret: e.globalData.secret,
                                js_code: n
                            },
                            header: {
                                token: e.globalData.token
                            },
                            success: function(a) {
                                var t = a.data.info;
                                console.log("获取用户openid成功"), console.log(a.data), e.globalData.userInfo.openid = t.openid, 
                                e.globalData.userInfo.sessionkey = t.session_key;
                                try {
                                    wx.setStorageSync("wxuserinfo", e.globalData.userInfo);
                                } catch (o) {
                                    o = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(o);
                                    console.log("缓存失败"), console.log(o);
                                }
                                console.log(e.globalData.userInfo), "function" == typeof o && o(e.globalData.userInfo), 
                                wx.request({
                                    url: "https://open.flames-tech.cn/plugin/customer-api/wx",
                                    data: {
                                        wx_openid: t.openid
                                    },
                                    header: {
                                        token: e.globalData.token
                                    },
                                    success: function(o) {
                                        console.log(o), 1 == o.data.state && (e.globalData.operator = o.data.info, console.log(e.globalData.operator), 
                                        wx.switchTab({
                                            url: "/pages/index/index"
                                        }));
                                    }
                                });
                            }
                        }) : console.log("获取code失败");
                    },
                    fail: function(o) {
                        console.log("获取用户信息失败,重新授权"), wx.redirectTo({
                            url: "/pages/author/index"
                        });
                    }
                });
            },
            fail: function(o) {
                console.log("登录失败"), console.log(o);
            }
        });
    },
    surelogin: function(o) {
        var e = this;
        wx.login({
            success: function(a) {
                console.log("登录成功sure"), wx.getUserInfo({
                    success: function(t) {
                        e.globalData.userInfo = t.userInfo, console.log("用户信息"), console.log(t);
                        var n = a.code;
                        n ? wx.request({
                            url: "https://open.flames-tech.cn/weixin/open/access-token",
                            data: {
                                appId: e.globalData.appid,
                                secret: e.globalData.secret,
                                js_code: n
                            },
                            header: {
                                token: e.globalData.token
                            },
                            success: function(a) {
                                var t = a.data.info;
                                console.log("sure获取用户openid成功"), console.log(a.data), e.globalData.userInfo.openid = t.openid, 
                                e.globalData.userInfo.sessionkey = t.session_key;
                                try {
                                    wx.setStorageSync("wxuserinfo", e.globalData.userInfo);
                                } catch (o) {
                                    o = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(o);
                                    console.log("缓存失败"), console.log(o);
                                }
                                console.log(e.globalData.userInfo), wx.request({
                                    url: "https://open.flames-tech.cn/plugin/customer-api/wx",
                                    data: {
                                        wx_openid: t.openid
                                    },
                                    header: {
                                        token: e.globalData.token
                                    },
                                    success: function(a) {
                                        console.log(a), console.log(1), 1 == a.data.state ? (e.globalData.operator = a.data.info, 
                                        wx.redirectTo({
                                            url: "/pages/sure/index?id=" + o + "&openid=" + e.globalData.userInfo.openid
                                        })) : -1 == a.data.state && console.log("未绑定用户");
                                    }
                                });
                            }
                        }) : console.log("获取code失败");
                    },
                    fail: function(e) {
                        console.log("自动授权失败手动授权"), wx.redirectTo({
                            url: "/pages/author/index?id=" + o
                        });
                    }
                });
            },
            fail: function(o) {
                console.log("登录失败"), console.log(o);
            }
        });
    },
    registerpage: function() {
        var o = this;
        console.log("regitster"), console.log(o.globalData.userInfo), wx.request({
            url: "https://open.flames-tech.cn/plugin/customer-api/wx",
            data: {
                wx_openid: o.globalData.userInfo.openid
            },
            header: {
                token: o.globalData.token
            },
            success: function(e) {
                console.log(e), 1 == e.data.state && (o.globalData.operator = e.data.info, wx.switchTab({
                    url: "/pages/index/index"
                }));
            }
        });
    },
    editTabBar: function() {
        var o = this.globalData.tabbar, e = getCurrentPages(), a = e[e.length - 1], t = a.__route__;
        0 != t.indexOf("/") && (t = "/" + t);
        for (var n in o.list) o.list[n].selected = !1, o.list[n].pagePath == t && (o.list[n].selected = !0);
        a.setData({
            tabbar: o
        });
    },
    globalData: {
        userInfo: null,
        appid: "wx0b1222a396655a3b",
        secret: "07ec3f8acda5d3d7df9e3097327b937b",
        gzappid: "wxed75a158889cc2ab",
        gzsecret: "f47af3087189b6f9ff98873851ed86c1",
        token: "494807262fabb22beb2b343831ae8d63",
        operator: null,
        tabbar: {
            color: "#a9b7b7",
            selectedColor: "red",
            backgroundColor: "#F7F7F7",
            borderStyle: "#ccc",
            list: [ {
                pagePath: "/pages/index/index",
                text: "首页",
                selectedIconPath: "/images/home-hot.png",
                iconPath: "/images/home.png",
                selected: !0
            }, {
                text: "库存变化",
                selectedIconPath: "/images/list-hot.png",
                iconPath: "/images/list.png",
                pagePath: "/pages/stock/index",
                selected: !1
            }, {
                text: "我的",
                selectedIconPath: "/images/my-hot.png",
                iconPath: "/images/my-hot.png",
                pagePath: "/pages/my/index",
                selected: !1
            } ],
            position: "bottom"
        }
    }
});