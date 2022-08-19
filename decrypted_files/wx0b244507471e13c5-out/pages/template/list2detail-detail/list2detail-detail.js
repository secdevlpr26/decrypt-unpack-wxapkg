(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/template/list2detail-detail/list2detail-detail" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\template\\list2detail-detail\\list2detail-detail.vue?vue&type=script&lang=js&": function(e, t, i) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = {
                data: function() {
                    return {
                        title: "list-triplex-row",
                        banner: {},
                        htmlString: ""
                    };
                },
                onShareAppMessage: function() {
                    return {
                        title: this.banner.title,
                        path: "/pages/template/list2detail-detail/list2detail-detail?detailDate=" + JSON.stringify(this.banner)
                    };
                },
                onLoad: function(t) {
                    this.banner = JSON.parse(t.detailDate), this.getDetail(), e.setNavigationBarTitle({
                        title: this.banner.title
                    });
                },
                methods: {
                    getDetail: function() {
                        var t = this;
                        e.request({
                            url: "https://spider.dcloud.net.cn/api/news/36kr/" + this.banner.post_id,
                            success: function(e) {
                                200 == e.statusCode && (t.htmlString = e.data.content.replace(/\\/g, "").replace(/<img/g, '<img style="display:none;"'));
                            },
                            fail: function() {
                                console.log("fail");
                            }
                        });
                    }
                }
            };
            t.default = i;
        }).call(this, i("./node_modules/@dcloudio/uni-mp-weixin/dist/index.js").default);
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\template\\list2detail-detail\\list2detail-detail.vue?vue&type=style&index=0&lang=css&": function(e, t, i) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\template\\list2detail-detail\\list2detail-detail.vue?vue&type=template&id=56a60f6e&": function(e, t, i) {
        i.r(t), i.d(t, "render", function() {
            return l;
        }), i.d(t, "staticRenderFns", function() {
            return s;
        });
        var l = function() {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("view", {
                staticClass: "page"
            }, [ i("view", {
                staticClass: "banner"
            }, [ i("image", {
                staticClass: "banner-img",
                attrs: {
                    src: e.banner.cover
                }
            }), i("view", {
                staticClass: "banner-title"
            }, [ e._v(e._s(e.banner.title)) ]) ]), i("view", {
                staticClass: "article-meta"
            }, [ i("text", {
                staticClass: "article-author"
            }, [ e._v(e._s(e.banner.author_name)) ]), i("text", {
                staticClass: "article-text"
            }, [ e._v("发表于") ]), i("text", {
                staticClass: "article-time"
            }, [ e._v(e._s(e.banner.published_at)) ]) ]), i("view", {
                staticClass: "article-content"
            }, [ i("rich-text", {
                attrs: {
                    nodes: e.htmlString,
                    mpcomid: "616b59df-0"
                }
            }) ], 1) ]);
        }, s = [];
        l._withStripped = !0;
    },
    'F:\\Users\\sikon\\HBuilderProjects\\demo\\main.js?{"page":"pages%2Ftemplate%2Flist2detail-detail%2Flist2detail-detail"}': function(e, t, i) {
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        i("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages.json");
        var s = l(i("./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js")), d = l(i("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\template\\list2detail-detail\\list2detail-detail.vue"));
        Page((0, s.default)(d.default));
    },
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\template\\list2detail-detail\\list2detail-detail.vue": function(e, t, i) {
        i.r(t);
        var l = i("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\template\\list2detail-detail\\list2detail-detail.vue?vue&type=template&id=56a60f6e&"), s = i("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\template\\list2detail-detail\\list2detail-detail.vue?vue&type=script&lang=js&");
        for (var d in s) "default" !== d && function(e) {
            i.d(t, e, function() {
                return s[e];
            });
        }(d);
        i("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\template\\list2detail-detail\\list2detail-detail.vue?vue&type=style&index=0&lang=css&");
        var a = i("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), o = Object(a.default)(s.default, l.render, l.staticRenderFns, !1, null, null, null);
        o.options.__file = "F:/Users/sikon/HBuilderProjects/demo/pages/template/list2detail-detail/list2detail-detail.vue", 
        t.default = o.exports;
    },
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\template\\list2detail-detail\\list2detail-detail.vue?vue&type=script&lang=js&": function(e, t, i) {
        i.r(t);
        var l = i("./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\template\\list2detail-detail\\list2detail-detail.vue?vue&type=script&lang=js&"), s = i.n(l);
        for (var d in l) "default" !== d && function(e) {
            i.d(t, e, function() {
                return l[e];
            });
        }(d);
        t.default = s.a;
    },
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\template\\list2detail-detail\\list2detail-detail.vue?vue&type=style&index=0&lang=css&": function(e, t, i) {
        i.r(t);
        var l = i("./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\template\\list2detail-detail\\list2detail-detail.vue?vue&type=style&index=0&lang=css&"), s = i.n(l);
        for (var d in l) "default" !== d && function(e) {
            i.d(t, e, function() {
                return l[e];
            });
        }(d);
        t.default = s.a;
    },
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\template\\list2detail-detail\\list2detail-detail.vue?vue&type=template&id=56a60f6e&": function(e, t, i) {
        i.r(t);
        var l = i("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\template\\list2detail-detail\\list2detail-detail.vue?vue&type=template&id=56a60f6e&");
        i.d(t, "render", function() {
            return l.render;
        }), i.d(t, "staticRenderFns", function() {
            return l.staticRenderFns;
        });
    }
}, [ [ 'F:\\Users\\sikon\\HBuilderProjects\\demo\\main.js?{"page":"pages%2Ftemplate%2Flist2detail-detail%2Flist2detail-detail"}', "common/runtime", "common/vendor" ] ] ]);