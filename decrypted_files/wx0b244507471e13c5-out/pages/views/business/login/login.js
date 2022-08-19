(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/views/business/login/login" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\login\\login.vue?vue&type=script&lang=js&": function(e, o, s) {
        (function(e) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var s = {
                data: function() {
                    return {};
                },
                methods: {
                    wxLogin: function() {
                        e.login({
                            provider: "weixin",
                            success: function(o) {
                                console.log("-------获取code-------"), console.log(o.code), wx.request({
                                    url: "https://api.weixin.qq.com/sns/jscode2session?appid=wx0b244507471e13c5&secret=0b3c454787a72446d74cff600c4b6e28&js_code=" + o.code + "&grant_type=authorization_code",
                                    success: function(o) {
                                        console.log("-------获取sessionKey、openid(unionid)-------"), console.log(o), e.showToast({
                                            title: o,
                                            icon: "none"
                                        });
                                    },
                                    fail: function(e) {
                                        console.log(e);
                                    }
                                });
                            }
                        });
                    },
                    wxGetUserInfo: function(o) {
                        if (!o.detail.iv) return e.showToast({
                            title: "您取消了授权,登录失败",
                            icon: "none"
                        }), !1;
                        console.log("-------用户授权，并获取用户基本信息和加密数据------"), e.showToast({
                            title: JSON.stringify(o.detail),
                            icon: "none"
                        }), console.log(o.detail);
                    },
                    checkLogin: function() {
                        wx.checkSession({
                            success: function() {
                                console.log("ok"), e.showToast({
                                    title: "ok",
                                    icon: "none"
                                });
                            },
                            fail: function() {
                                console.log("expire"), e.showToast({
                                    title: "expire",
                                    icon: "none"
                                });
                            }
                        });
                    }
                }
            };
            o.default = s;
        }).call(this, s("./node_modules/@dcloudio/uni-mp-weixin/dist/index.js").default);
    },
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\login\\login.vue?vue&type=template&id=29bc0e69&": function(e, o, s) {
        s.r(o), s.d(o, "render", function() {
            return n;
        }), s.d(o, "staticRenderFns", function() {
            return i;
        });
        var n = function() {
            var e = this, o = e.$createElement, s = e._self._c || o;
            return s("view", [ s("button", {
                attrs: {
                    eventid: "663aacda-0"
                },
                on: {
                    click: e.wxLogin
                }
            }, [ e._v("微信登录") ]), s("button", {
                attrs: {
                    eventid: "663aacda-1"
                },
                on: {
                    click: e.checkLogin
                }
            }, [ e._v("微信登录检测") ]), s("button", {
                attrs: {
                    "open-type": "getUserInfo",
                    withCredentials: "true",
                    eventid: "663aacda-2"
                },
                on: {
                    getuserinfo: e.wxGetUserInfo
                }
            }, [ e._v("微信授权获取用户信息") ]) ], 1);
        }, i = [];
        n._withStripped = !0;
    },
    'F:\\Users\\sikon\\HBuilderProjects\\demo\\main.js?{"page":"pages%2Fviews%2Fbusiness%2Flogin%2Flogin"}': function(e, o, s) {
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        s("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages.json");
        var i = n(s("./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js")), l = n(s("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\login\\login.vue"));
        Page((0, i.default)(l.default));
    },
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\login\\login.vue": function(e, o, s) {
        s.r(o);
        var n = s("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\login\\login.vue?vue&type=template&id=29bc0e69&"), i = s("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\login\\login.vue?vue&type=script&lang=js&");
        for (var l in i) "default" !== l && function(e) {
            s.d(o, e, function() {
                return i[e];
            });
        }(l);
        var d = s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), u = Object(d.default)(i.default, n.render, n.staticRenderFns, !1, null, null, null);
        u.options.__file = "F:/Users/sikon/HBuilderProjects/demo/pages/views/business/login/login.vue", 
        o.default = u.exports;
    },
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\login\\login.vue?vue&type=script&lang=js&": function(e, o, s) {
        s.r(o);
        var n = s("./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\login\\login.vue?vue&type=script&lang=js&"), i = s.n(n);
        for (var l in n) "default" !== l && function(e) {
            s.d(o, e, function() {
                return n[e];
            });
        }(l);
        o.default = i.a;
    },
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\login\\login.vue?vue&type=template&id=29bc0e69&": function(e, o, s) {
        s.r(o);
        var n = s("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\login\\login.vue?vue&type=template&id=29bc0e69&");
        s.d(o, "render", function() {
            return n.render;
        }), s.d(o, "staticRenderFns", function() {
            return n.staticRenderFns;
        });
    }
}, [ [ 'F:\\Users\\sikon\\HBuilderProjects\\demo\\main.js?{"page":"pages%2Fviews%2Fbusiness%2Flogin%2Flogin"}', "common/runtime", "common/vendor" ] ] ]);