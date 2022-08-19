(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/uni-badge" ], {
    "1c98": function(n, e, t) {
        var a = t("eff5");
        t.n(a).a;
    },
    "5deb": function(n, e, t) {
        t.r(e);
        var a = t("aaab"), o = t.n(a);
        for (var u in a) "default" !== u && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        e.default = o.a;
    },
    aaab: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = {
            props: {
                type: {
                    type: String,
                    default: "default"
                },
                inverted: {
                    type: Boolean,
                    default: !1
                },
                text: {
                    type: String,
                    default: ""
                },
                size: {
                    type: String,
                    default: "normal"
                }
            },
            computed: {
                setClass: function() {
                    var n = [ "uni-badge-" + this.type, "uni-badge-size-" + this.size ];
                    return !0 === this.inverted && n.push("uni-badge-inverted"), n.join(" ");
                }
            },
            methods: {
                onClick: function() {
                    this.$emit("click");
                }
            }
        };
        e.default = a;
    },
    bd04: function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
        var a = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
    },
    dc2c: function(n, e, t) {
        t.r(e);
        var a = t("bd04"), o = t("5deb");
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        t("1c98");
        var c = t("f0c5"), i = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = i.exports;
    },
    eff5: function(n, e, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/uni-badge-create-component", {
    "components/uni-badge-create-component": function(n, e, t) {
        t("543d").createComponent(t("dc2c"));
    }
}, [ [ "components/uni-badge-create-component" ] ] ]);