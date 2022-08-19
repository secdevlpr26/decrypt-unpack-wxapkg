(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/tabBar/home/home" ], {
    "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\tabBar\\home\\home.vue?vue&type=script&lang=js&": function(e, s, o) {
        (function(e) {
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var t = o("F:\\Users\\sikon\\HBuilderProjects\\demo\\common\\util.js").dateUtils, d = {
                data: function() {
                    return {
                        banner: {},
                        listData: [],
                        last_id: "",
                        reload: !1,
                        text: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浙江大华聚贤智能科技有限公司（简称“聚贤科技”）是一家专业面向家具/居制造行业提供基于“两化融合”的软件、智能硬件定制开发和信息系统集成服务的高新科技企业。浙江大华聚贤智能科技有限公司前身是“宁波聚贤科技有限公司”，多年来在“智瑾云控物联”技术之上集成了数控设备、机器手臂、AGV智能运输小车、智能仓库等技术，并在智能实验室方面进行了深入研究，打造“智慧工厂”、“数字工厂”，“智能实验室”等提供整体解决方案。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大华聚贤公司由具有家具行业丰富从业经验的生产管理人员，专业人才、技术人才、管理人才和高校行业领军专家共同发起，与2014年开始筹备，随即与清华大学计算机系、南京林业大学家具与工业设计学院建立战略合作关系，并与浙江大学工研院、华南理工大学、华南农业大学、浙江大红鹰学院等多名专家、学者保持顾问式合作关系，并聘请多名行业专家教授为指导顾问，为企业发展保驾护航，同时多所高校也为聚贤科技提供了良好的人才储备。目前众营体公司核心成员共计12人，其中家具专业是硕士研究生7名、软件工程专业人才3名、海外人才2名。\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前以服务的客户有莫干山家具，浙江大森家私，上海伟佳家具，广东逸鹏，宁波百邑，四川亚度家居，斯蒂芬-娅图，宁波柯乐芙家居，宁波美罗堡定制家具，宁波卓越家具，江山欧派等，通过多年行业服务经验，聚贤科技以形成成熟的产品和服务体系。"
                    };
                },
                onLoad: function() {},
                onPullDownRefresh: function() {
                    this.reload = !0, this.last_id = "";
                },
                onReachBottom: function() {},
                methods: {
                    getBanner: function() {
                        var s = this, o = {
                            column: "id,post_id,title,author_name,cover,published_at"
                        };
                        e.request({
                            url: "https://spider.dcloud.net.cn/api/banner/36kr",
                            data: o,
                            success: function(o) {
                                e.stopPullDownRefresh(), 200 == o.statusCode && (s.banner = o.data);
                            },
                            fail: function(e, s) {
                                console.log("fail" + JSON.stringify(e));
                            }
                        });
                    },
                    getList: function() {
                        var s = this, o = {
                            column: "id,post_id,title,author_name,cover,published_at"
                        };
                        this.last_id && (o.minId = this.last_id, o.time = new Date().getTime() + "", o.pageSize = 10), 
                        e.request({
                            url: "https://spider.dcloud.net.cn/api/news",
                            data: o,
                            success: function(e) {
                                if (200 == e.statusCode) {
                                    var o = s.setTime(e.data);
                                    s.listData = s.reload ? o : s.listData.concat(o), s.last_id = o[o.length - 1].id, 
                                    s.reload = !1;
                                }
                            },
                            fail: function(e, s) {
                                console.log("fail" + JSON.stringify(e));
                            }
                        });
                    },
                    goDetail: function(s) {
                        var o = {
                            author_name: s.author_name,
                            cover: s.cover,
                            id: s.id,
                            post_id: s.post_id,
                            published_at: s.published_at,
                            title: s.title
                        };
                        e.navigateTo({
                            url: "../../template/list2detail-detail/list2detail-detail?detailDate=" + JSON.stringify(o)
                        });
                    },
                    setTime: function(e) {
                        var s = [];
                        return e.forEach(function(e) {
                            s.push({
                                author_name: e.author_name,
                                cover: e.cover,
                                id: e.id,
                                post_id: e.post_id,
                                published_at: t.format(e.published_at),
                                title: e.title
                            });
                        }), s;
                    }
                }
            };
            s.default = d;
        }).call(this, o("./node_modules/@dcloudio/uni-mp-weixin/dist/index.js").default);
    },
    "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\tabBar\\home\\home.vue?vue&type=style&index=0&lang=css&": function(e, s, o) {},
    "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\tabBar\\home\\home.vue?vue&type=template&id=05ede1f2&": function(e, s, o) {
        o.r(s), o.d(s, "render", function() {
            return t;
        }), o.d(s, "staticRenderFns", function() {
            return d;
        });
        var t = function() {
            var e = this, s = e.$createElement, o = e._self._c || s;
            return o("view", {
                staticClass: "index"
            }, [ e._m(0), o("view", {
                staticClass: "page-body"
            }, [ o("view", {
                staticClass: "page-section page-section-spacing"
            }, [ o("view", {
                staticClass: "text-box align-text",
                attrs: {
                    "scroll-y": "true"
                }
            }, [ o("text", {
                attrs: {
                    decode: "true"
                }
            }, [ e._v(e._s(e.text)) ]) ]) ]) ]) ]);
        }, d = [ function() {
            var e = this, s = e.$createElement, o = e._self._c || s;
            return o("view", {
                staticClass: "index-hd"
            }, [ o("image", {
                staticClass: "index-logo",
                attrs: {
                    src: "../../../static/jxicon.jpg"
                }
            }) ]);
        } ];
        t._withStripped = !0;
    },
    'F:\\Users\\sikon\\HBuilderProjects\\demo\\main.js?{"page":"pages%2FtabBar%2Fhome%2Fhome"}': function(e, s, o) {
        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        o("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages.json");
        var d = t(o("./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js")), i = t(o("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\tabBar\\home\\home.vue"));
        Page((0, d.default)(i.default));
    },
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\tabBar\\home\\home.vue": function(e, s, o) {
        o.r(s);
        var t = o("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\tabBar\\home\\home.vue?vue&type=template&id=05ede1f2&"), d = o("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\tabBar\\home\\home.vue?vue&type=script&lang=js&");
        for (var i in d) "default" !== i && function(e) {
            o.d(s, e, function() {
                return d[e];
            });
        }(i);
        o("F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\tabBar\\home\\home.vue?vue&type=style&index=0&lang=css&");
        var n = o("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"), a = Object(n.default)(d.default, t.render, t.staticRenderFns, !1, null, null, null);
        a.options.__file = "F:/Users/sikon/HBuilderProjects/demo/pages/tabBar/home/home.vue", 
        s.default = a.exports;
    },
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\tabBar\\home\\home.vue?vue&type=script&lang=js&": function(e, s, o) {
        o.r(s);
        var t = o("./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\tabBar\\home\\home.vue?vue&type=script&lang=js&"), d = o.n(t);
        for (var i in t) "default" !== i && function(e) {
            o.d(s, e, function() {
                return t[e];
            });
        }(i);
        s.default = d.a;
    },
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\tabBar\\home\\home.vue?vue&type=style&index=0&lang=css&": function(e, s, o) {
        o.r(s);
        var t = o("./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\tabBar\\home\\home.vue?vue&type=style&index=0&lang=css&"), d = o.n(t);
        for (var i in t) "default" !== i && function(e) {
            o.d(s, e, function() {
                return t[e];
            });
        }(i);
        s.default = d.a;
    },
    "F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\tabBar\\home\\home.vue?vue&type=template&id=05ede1f2&": function(e, s, o) {
        o.r(s);
        var t = o("./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!F:\\Users\\sikon\\HBuilderProjects\\demo\\pages\\tabBar\\home\\home.vue?vue&type=template&id=05ede1f2&");
        o.d(s, "render", function() {
            return t.render;
        }), o.d(s, "staticRenderFns", function() {
            return t.staticRenderFns;
        });
    }
}, [ [ 'F:\\Users\\sikon\\HBuilderProjects\\demo\\main.js?{"page":"pages%2FtabBar%2Fhome%2Fhome"}', "common/runtime", "common/vendor" ] ] ]);