(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/uni-number-box" ], {
    "0e11": function(t, e, n) {},
    "2dd0": function(t, e, n) {
        n.r(e);
        var u = n("aa08"), a = n("6ebf");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("abef");
        var o = n("f0c5"), c = Object(o.a)(a.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        e.default = c.exports;
    },
    "6ebf": function(t, e, n) {
        n.r(e);
        var u = n("ed72"), a = n.n(u);
        for (var i in u) "default" !== i && function(t) {
            n.d(e, t, function() {
                return u[t];
            });
        }(i);
        e.default = a.a;
    },
    aa08: function(t, e, n) {
        n.d(e, "b", function() {
            return u;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var u = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
    },
    abef: function(t, e, n) {
        var u = n("0e11");
        n.n(u).a;
    },
    ed72: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var u = {
            name: "uni-number-box",
            props: {
                value: {
                    type: Number,
                    default: 0
                },
                min: {
                    type: Number,
                    default: -1 / 0
                },
                max: {
                    type: Number,
                    default: 1 / 0
                },
                step: {
                    type: Number,
                    default: 1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    inputValue: this.value
                };
            },
            computed: {
                disableSubtract: function() {
                    return this.value <= this.min;
                },
                disableAdd: function() {
                    return this.value >= this.max;
                }
            },
            watch: {
                value: function(t) {
                    this.inputValue = t;
                },
                inputValue: function(t) {
                    this.$emit("change", t);
                }
            },
            methods: {
                _calcValue: function(t) {
                    var e = this._getDecimalScale(), n = this.inputValue * e, u = this.step * e;
                    "subtract" === t ? n -= u : "add" === t && (n += u), n < this.min || n > this.max || (this.inputValue = n / e);
                },
                _getDecimalScale: function() {
                    var t = 1;
                    return ~~this.step !== this.step && (t = Math.pow(10, (this.step + "").split(".")[1].length)), 
                    t;
                },
                _onBlur: function(t) {
                    var e = t.detail.value;
                    e ? ((e = +e) > this.max ? e = this.max : e < this.min && (e = this.min), this.inputValue = e) : this.inputValue = 0;
                }
            }
        };
        e.default = u;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/uni-number-box-create-component", {
    "components/uni-number-box-create-component": function(t, e, n) {
        n("543d").createComponent(n("2dd0"));
    }
}, [ [ "components/uni-number-box-create-component" ] ] ]);