(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/page-head" ], {
    "6b80": function(e, n, a) {
        a.d(n, "b", function() {
            return t;
        }), a.d(n, "c", function() {
            return o;
        }), a.d(n, "a", function() {});
        var t = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    "970a": function(e, n, a) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var t = {
            name: "page-head",
            props: {
                title: {
                    type: String,
                    default: ""
                }
            }
        };
        n.default = t;
    },
    a24f: function(e, n, a) {
        a.r(n);
        var t = a("970a"), o = a.n(t);
        for (var c in t) "default" !== c && function(e) {
            a.d(n, e, function() {
                return t[e];
            });
        }(c);
        n.default = o.a;
    },
    efa4: function(e, n, a) {
        a.r(n);
        var t = a("6b80"), o = a("a24f");
        for (var c in o) "default" !== c && function(e) {
            a.d(n, e, function() {
                return o[e];
            });
        }(c);
        var u = a("f0c5"), r = Object(u.a)(o.default, t.b, t.c, !1, null, null, null, !1, t.a, void 0);
        n.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/page-head-create-component", {
    "components/page-head-create-component": function(e, n, a) {
        a("543d").createComponent(a("efa4"));
    }
}, [ [ "components/page-head-create-component" ] ] ]);