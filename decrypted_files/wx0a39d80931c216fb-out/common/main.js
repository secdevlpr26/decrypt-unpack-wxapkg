(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "2d53": function(e, t, n) {
        (function(e, t) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function c(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            n("414e");
            var r = o(n("66fd")), l = o(n("317b")), u = o(n("6850"));
            r.default.config.productionTip = !1, r.default.prototype.$store = u.default, r.default.prototype.$backgroundAudioData = {
                playing: !1,
                playTime: 0,
                formatedPlayTime: "00:00:00"
            }, r.default.component("page-head", function() {
                n.e("components/page-head").then(function() {
                    return resolve(n("efa4"));
                }.bind(null, n)).catch(n.oe);
            }), r.default.component("page-foot", function() {
                n.e("components/page-foot").then(function() {
                    return resolve(n("a17a"));
                }.bind(null, n)).catch(n.oe);
            }), r.default.prototype.$messageModel = function(t, n) {
                var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                e.showModal({
                    title: t,
                    content: n,
                    showCancel: !1,
                    success: o
                });
            }, r.default.prototype.$confirmMessageModel = function(t, n, o, a) {
                var c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
                e.showModal({
                    title: t,
                    content: n,
                    confirmText: o,
                    cancelText: a,
                    success: c,
                    fail: r
                });
            }, l.default.mpType = "app";
            var i = new r.default(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach(function(t) {
                        c(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }({
                store: u.default
            }, l.default));
            t(i).$mount();
        }).call(this, n("543d").default, n("543d").createApp);
    },
    "317b": function(e, t, n) {
        n.r(t);
        var o = n("a842");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("f448");
        var c = n("f0c5"), r = Object(c.a)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        t.default = r.exports;
    },
    3685: function(e, t, n) {},
    a842: function(e, t, n) {
        n.r(t);
        var o = n("de20"), a = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = a.a;
    },
    de20: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n("6ce5"), n("b787");
            var o = {
                onLaunch: function() {
                    console.log("App Launch");
                    var t = e.getUpdateManager();
                    t.onCheckForUpdate(function(e) {
                        console.log(e.hasUpdate);
                    }), t.onUpdateReady(function(n) {
                        e.showModal({
                            title: "更新提示",
                            content: "新版本已经准备好，是否重启应用？",
                            success: function(e) {
                                e.confirm && t.applyUpdate();
                            }
                        });
                    }), t.onUpdateFailed(function(e) {});
                },
                onShow: function() {
                    console.log("App Show");
                    try {
                        var t = e.getStorageSync("cart_empty");
                        t ? (console.log(t), e.hideTabBarRedDot({
                            index: 2
                        })) : e.showTabBarRedDot({
                            index: 2
                        });
                    } catch (e) {}
                },
                onHide: function() {
                    console.log("App Hide");
                }
            };
            t.default = o;
        }).call(this, n("543d").default);
    },
    f448: function(e, t, n) {
        var o = n("3685");
        n.n(o).a;
    }
}, [ [ "2d53", "common/runtime", "common/vendor" ] ] ]);