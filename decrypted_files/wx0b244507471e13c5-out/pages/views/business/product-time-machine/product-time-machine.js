(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/views/business/product-time-machine/product-time-machine" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\product-time-machine\\product-time-machine.vue?vue&type=script&lang=js&": function(e, s, i) {
        (function(e) {
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var i = {
                data: function() {
                    return {
                        title: "image"
                    };
                },
                methods: {
                    scan: function() {
                        e.scanCode({
                            success: function(s) {
                                console.log("条码类型：" + s.scanType), console.log("条码内容：" + s.result);
                                var i = s.result;
                                e.navigateTo({
                                    url: "../plan-info/plan-info?bh=" + i
                                });
                            }
                        });
                    }
                }
            };
            s.default = i;
        }).call(this, i("./node_modules/@dcloudio/uni-mp-weixin/dist/index.js").default);
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\product-time-machine\\product-time-machine.vue?vue&type=style&index=0&lang=css&": function(e, s, i) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\product-time-machine\\product-time-machine.vue?vue&type=template&id=7ab50316&": function(e, s, i) {
        i.r(s), i.d(s, "render", function() {
            return o;
        }), i.d(s, "staticRenderFns", function() {
            return d;
        });
        var o = function() {
            var e = this, s = e.$createElement, i = e._self._c || s;
            return i("view", [ i("view", {
                staticClass: "page-body"
            }, [ i("view", {
                staticClass: "text-box"
            }, [ i("text", [ e._v("点击下方图标"), i("br"), e._v("扫描产品二维码") ], 1) ]), i("view", {
                staticClass: "page-section"
            }, [ i("view", {
                staticClass: "page-section-ctn"
            }, [ i("image", {
                staticClass: "image",
                attrs: {
                    src: "../../../../static/scan.png",
                    eventid: "1bd92d26-0"
                },
                on: {
                    click: function(s) {
                        e.scan();
                    }
                }
            }) ]) ]) ]) ]);
        }, d = [];
        o._withStripped = !0;
    },
    'F:\\Users\\sikon\\HBuilderProjects\\demo\\main.js?{"page":"pages%2Fviews%2Fbusiness%2Fproduct-time-machine%2Fproduct-time-machine"}': function(e, s, i) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        i("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages.json");
        var d = o(i("./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js")), n = o(i("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\product-time-machine\\product-time-machine.vue"));
        Page((0, d.default)(n.default));
    },
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\product-time-machine\\product-time-machine.vue": function(e, s, i) {
        i.r(s);
        var o = i("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\product-time-machine\\product-time-machine.vue?vue&type=template&id=7ab50316&"), d = i("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\product-time-machine\\product-time-machine.vue?vue&type=script&lang=js&");
        for (var n in d) "default" !== n && function(e) {
            i.d(s, e, function() {
                return d[e];
            });
        }(n);
        i("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\product-time-machine\\product-time-machine.vue?vue&type=style&index=0&lang=css&");
        var u = i("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), t = Object(u.default)(d.default, o.render, o.staticRenderFns, !1, null, null, null);
        t.options.__file = "F:/Users/sikon/HBuilderProjects/demo/pages/views/business/product-time-machine/product-time-machine.vue", 
        s.default = t.exports;
    },
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\product-time-machine\\product-time-machine.vue?vue&type=script&lang=js&": function(e, s, i) {
        i.r(s);
        var o = i("./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\product-time-machine\\product-time-machine.vue?vue&type=script&lang=js&"), d = i.n(o);
        for (var n in o) "default" !== n && function(e) {
            i.d(s, e, function() {
                return o[e];
            });
        }(n);
        s.default = d.a;
    },
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\product-time-machine\\product-time-machine.vue?vue&type=style&index=0&lang=css&": function(e, s, i) {
        i.r(s);
        var o = i("./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\product-time-machine\\product-time-machine.vue?vue&type=style&index=0&lang=css&"), d = i.n(o);
        for (var n in o) "default" !== n && function(e) {
            i.d(s, e, function() {
                return o[e];
            });
        }(n);
        s.default = d.a;
    },
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\product-time-machine\\product-time-machine.vue?vue&type=template&id=7ab50316&": function(e, s, i) {
        i.r(s);
        var o = i("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\views\\business\\product-time-machine\\product-time-machine.vue?vue&type=template&id=7ab50316&");
        i.d(s, "render", function() {
            return o.render;
        }), i.d(s, "staticRenderFns", function() {
            return o.staticRenderFns;
        });
    }
}, [ [ 'F:\\Users\\sikon\\HBuilderProjects\\demo\\main.js?{"page":"pages%2Fviews%2Fbusiness%2Fproduct-time-machine%2Fproduct-time-machine"}', "common/runtime", "common/vendor" ] ] ]);