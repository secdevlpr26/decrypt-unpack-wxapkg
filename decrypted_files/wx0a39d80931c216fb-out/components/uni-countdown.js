(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/uni-countdown" ], {
    "0405": function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            name: "uni-countdown",
            props: {
                bgrColor: {
                    type: String,
                    default: "#FFFFFF"
                },
                borderColor: {
                    type: String,
                    default: "#000000"
                },
                fontColor: {
                    type: String,
                    value: "#000000"
                },
                splitorColor: {
                    type: String,
                    default: "#000000"
                },
                timer: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    setTime: null,
                    d: "00",
                    h: "00",
                    i: "00",
                    s: "00",
                    leftTime: 0
                };
            },
            created: function(n) {
                var t = /^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/, e = this.timer.match(t);
                if (null == e) return console.log("时间格式错误"), !1;
                var o = parseInt(e[1]);
                if (o < 1e3) return console.log("时间格式错误"), !1;
                var r = parseInt(e[2]), a = parseInt(e[3]), u = parseInt(e[4]);
                if (u < 0 || u > 24) return console.log("时间格式错误"), !1;
                var i = parseInt(e[5]);
                if (i < 0 || i > 60) return console.log("时间格式错误"), !1;
                var c = parseInt(e[6]);
                if (c < 0 || c > 60) return console.log("时间格式错误"), !1;
                var l = new Date(o, r - 1, a, u, i, c);
                this.leftTime = l, this.countDown(this), this.setInterValFunc(this);
            },
            beforeDestroy: function() {
                clearInterval(this.setTime);
            },
            methods: {
                setInterValFunc: function(n) {
                    this.setTime = setInterval(function() {
                        n.countDown(n);
                    }, 1e3);
                },
                countDown: function(n) {
                    var t = n.leftTime - new Date();
                    if (t > 0) var e = parseInt(t / 1e3 / 60 / 60 / 24, 10), o = parseInt(t / 1e3 / 60 / 60 % 24, 10), r = parseInt(t / 1e3 / 60 % 60, 10), a = parseInt(t / 1e3 % 60, 10); else e = 0, 
                    o = 0, r = 0, a = 0;
                    e < 10 && (e = "0" + e), o < 10 && (o = "0" + o), r < 10 && (r = "0" + r), a < 10 && (a = "0" + a), 
                    n.d = e, n.h = o, n.i = r, n.s = a;
                }
            }
        };
        t.default = o;
    },
    3849: function(n, t, e) {
        e.r(t);
        var o = e("0405"), r = e.n(o);
        for (var a in o) "default" !== a && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(a);
        t.default = r.a;
    },
    5706: function(n, t, e) {},
    "5fa0": function(n, t, e) {
        var o = e("5706");
        e.n(o).a;
    },
    "794e": function(n, t, e) {
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return r;
        }), e.d(t, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, r = [];
    },
    d46d: function(n, t, e) {
        e.r(t);
        var o = e("794e"), r = e("3849");
        for (var a in r) "default" !== a && function(n) {
            e.d(t, n, function() {
                return r[n];
            });
        }(a);
        e("5fa0");
        var u = e("f0c5"), i = Object(u.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/uni-countdown-create-component", {
    "components/uni-countdown-create-component": function(n, t, e) {
        e("543d").createComponent(e("d46d"));
    }
}, [ [ "components/uni-countdown-create-component" ] ] ]);