(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\App.vue?vue&type=script&lang=js&": function(e, o, n) {
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        var s = {
            onLaunch: function() {
                console.log("App Launch"), wx.getUpdateManager().onCheckForUpdate(function(e) {
                    console.log("是否有新版本：" + e.hasUpdate), e.hasUpdate && (wx.getUpdateManager().onUpdateReady(function() {
                        wx.showModal({
                            title: "更新提示",
                            content: "新版本已经准备好，单击确定重启应用",
                            showCancel: !1,
                            success: function(e) {
                                e.confirm && wx.getUpdateManager().applyUpdate();
                            }
                        });
                    }), wx.getUpdateManager().onUpdateFailed(function() {
                        wx.showModal({
                            title: "提示",
                            content: "检查到有新版本，但下载失败，请检查网络设置",
                            showCancel: !1
                        });
                    }));
                });
            },
            onShow: function() {
                console.log("App Show");
            },
            onHide: function() {
                console.log("App Hide");
            }
        };
        o.default = s;
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\App.vue?vue&type=style&index=0&lang=css&": function(e, o, n) {},
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\App.vue": function(e, o, n) {
        n.r(o);
        var s = n("F:\\Users\\sikon\\HBuilderProjects\\demo\\App.vue?vue&type=script&lang=js&");
        for (var d in s) "default" !== d && function(e) {
            n.d(o, e, function() {
                return s[e];
            });
        }(d);
        n("F:\\Users\\sikon\\HBuilderProjects\\demo\\App.vue?vue&type=style&index=0&lang=css&");
        var l = n("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), u = Object(l.default)(s.default, void 0, void 0, !1, null, null, null);
        u.options.__file = "F:/Users/sikon/HBuilderProjects/demo/App.vue", o.default = u.exports;
    },
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\App.vue?vue&type=script&lang=js&": function(e, o, n) {
        n.r(o);
        var s = n("./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\App.vue?vue&type=script&lang=js&"), d = n.n(s);
        for (var l in s) "default" !== l && function(e) {
            n.d(o, e, function() {
                return s[e];
            });
        }(l);
        o.default = d.a;
    },
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\App.vue?vue&type=style&index=0&lang=css&": function(e, o, n) {
        n.r(o);
        var s = n("./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\App.vue?vue&type=style&index=0&lang=css&"), d = n.n(s);
        for (var l in s) "default" !== l && function(e) {
            n.d(o, e, function() {
                return s[e];
            });
        }(l);
        o.default = d.a;
    },
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\main.js": function(e, o, n) {
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function d(e, o, n) {
            return o in e ? Object.defineProperty(e, o, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[o] = n, e;
        }
        n("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages.json");
        var l = s(n("./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue/index.js")), u = s(n("F:\\Users\\sikon\\HBuilderProjects\\demo\\App.vue"));
        l.default.config.productionTip = !1, u.default.mpType = "app", new l.default(function(e) {
            for (var o = 1; o < arguments.length; o++) {
                var n = null != arguments[o] ? arguments[o] : {}, s = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), s.forEach(function(o) {
                    d(e, o, n[o]);
                });
            }
            return e;
        }({}, u.default)).$mount();
    }
}, [ [ "F:\\Users\\sikon\\HBuilderProjects\\demo\\main.js", "common/runtime", "common/vendor" ] ] ]);