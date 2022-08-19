(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/page-foot" ], {
    "1e01": function(n, e, o) {
        var t = o("e267");
        o.n(t).a;
    },
    "60f6": function(n, e, o) {
        o.r(e);
        var t = o("be16"), a = o.n(t);
        for (var c in t) "default" !== c && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(c);
        e.default = a.a;
    },
    6514: function(n, e, o) {
        o.d(e, "b", function() {
            return t;
        }), o.d(e, "c", function() {
            return a;
        }), o.d(e, "a", function() {});
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
    },
    a17a: function(n, e, o) {
        o.r(e);
        var t = o("6514"), a = o("60f6");
        for (var c in a) "default" !== c && function(n) {
            o.d(e, n, function() {
                return a[n];
            });
        }(c);
        o("1e01");
        var u = o("f0c5"), f = Object(u.a)(a.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        e.default = f.exports;
    },
    be16: function(n, e, o) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = {
                name: "page-foot",
                props: {
                    name: {
                        type: String,
                        default: ""
                    }
                },
                methods: {
                    submit: function() {
                        n.showModal({
                            content: "hello uni-app开源地址为https://github.com/dcloudio/uni-app/tree/master/examples，请在这个开源项目上贡献你的代码",
                            showCancel: !1
                        });
                    }
                }
            };
            e.default = o;
        }).call(this, o("543d").default);
    },
    e267: function(n, e, o) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/page-foot-create-component", {
    "components/page-foot-create-component": function(n, e, o) {
        o("543d").createComponent(o("a17a"));
    }
}, [ [ "components/page-foot-create-component" ] ] ]);