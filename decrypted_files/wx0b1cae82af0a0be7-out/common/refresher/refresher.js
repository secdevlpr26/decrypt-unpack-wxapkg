function t(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t;
}

function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function i() {}

function n(t, e, i) {
    var n = !0;
    if (t) {
        var s = 0, r = t.length, o = e[0], a = e[1], f = e[2];
        switch (e.length) {
          case 0:
            for (;s < r; s += 2) n = !1 !== t[s].call(t[s + 1] || i) && n;
            break;

          case 1:
            for (;s < r; s += 2) n = !1 !== t[s].call(t[s + 1] || i, o) && n;
            break;

          case 2:
            for (;s < r; s += 2) n = !1 !== t[s].call(t[s + 1] || i, o, a) && n;
            break;

          case 3:
            for (;s < r; s += 2) n = !1 !== t[s].call(t[s + 1] || i, o, a, f) && n;
            break;

          default:
            for (;s < r; s += 2) n = !1 !== t[s].apply(t[s + 1] || i, e) && n;
        }
    }
    return n;
}

function s(t) {
    return "[object Function]" === Object.prototype.toString.call(t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e;
    };
}(), o = /\s+/;

i.prototype.on = function(t, e, i) {
    var n, s;
    if (!e) return this;
    for (n = this.__events || (this.__events = {}), t = t.split(o); s = t.shift(); ) (n[s] || (n[s] = [])).push(e, i);
    return this;
}, i.prototype.once = function(t, e, i) {
    var n = this;
    return this.on(t, function s() {
        n.off(t, s), e.apply(i || n, arguments);
    }, i);
}, i.prototype.off = function(t, e, i) {
    var n, s, r, f;
    if (!(n = this.__events)) return this;
    if (!(t || e || i)) return delete this.__events, this;
    for (t = t ? t.split(o) : a(n); s = t.shift(); ) if (r = n[s]) if (e || i) for (f = r.length - 2; f >= 0; f -= 2) e && r[f] !== e || i && r[f + 1] !== i || r.splice(f, 2); else delete n[s];
    return this;
}, i.prototype.trigger = function(t) {
    var e, i, s, r, a, f, h = [], c = !0;
    if (!(e = this.__events)) return this;
    for (t = t.split(o), a = 1, f = arguments.length; a < f; a++) h[a - 1] = arguments[a];
    for (;i = t.shift(); ) (s = e.all) && (s = s.slice()), (r = e[i]) && (r = r.slice()), 
    "all" !== i && (c = n(r, h, this) && c), c = n(s, [ i ].concat(h), this) && c;
    return c;
}, i.prototype.emit = i.prototype.trigger;

var a = Object.keys;

a || (a = function(t) {
    var e = [];
    for (var i in t) t.hasOwnProperty(i) && e.push(i);
    return e;
}), i.mixTo = function(t) {
    var e = i.prototype;
    if (s(t)) for (var n in e) e.hasOwnProperty(n) && (t.prototype[n] = e[n]); else {
        var r = new i();
        for (var n in e) e.hasOwnProperty(n) && function(i) {
            t[i] = function() {
                return e[i].apply(r, Array.prototype.slice.call(arguments)), this;
            };
        }(n);
    }
};

var f = function() {
    function n() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : getCurrentPages()[getCurrentPages().length - 1];
        e(this, n), Object.assign(this, {
            options: t,
            scope: i
        }), this.__init();
    }
    return r(n, [ {
        key: "__init",
        value: function() {
            this.lastTime = 0, this.activated = !1, this.events = new i(), this.mergeOptions(this.options), 
            this.scope.setData(t({}, "$wux.refresher", this.options));
        }
    }, {
        key: "setDefaults",
        value: function() {
            return {
                pullingIcon: "icon-arrow-down",
                pullingText: "下拉刷新",
                refreshingIcon: "icon-refresher",
                refreshingText: "正在刷新",
                disablePullingRotation: !1,
                distance: 80,
                onPulling: function() {},
                onRefresh: function() {}
            };
        }
    }, {
        key: "mergeOptions",
        value: function(t) {
            var e = this.setDefaults();
            for (var i in e) e.hasOwnProperty(i) && (this.options[i] = void 0 !== t[i] ? t[i] : e[i], 
            "function" == typeof this.options[i] && (this.options[i] = this.options[i].bind(this)));
        }
    }, {
        key: "requestAnimationFrame",
        value: function(t) {
            var e = this, i = new Date().getTime(), n = Math.max(0, 16 - (i - this.lastTime)), s = setTimeout(function() {
                t.bind(e)(i + n);
            }, n);
            return this.lastTime = i + n, s;
        }
    }, {
        key: "cancelAnimationFrame",
        value: function(t) {
            clearTimeout(t);
        }
    }, {
        key: "getRefresherMethods",
        value: function() {
            var e = this, i = "transition: transform .2s; transform: translate3d(0px, 0px, 0px) scale(1);", n = function(i, n) {
                e.scope.setData(t({}, "$wux.refresher." + i, n));
            };
            return {
                setData: n,
                activate: function() {
                    n("style", i), n("className", "visible");
                },
                deactivate: function() {
                    e.activated && (e.activated = !1), n("style", i), n("className", "hidden");
                },
                refreshing: function() {
                    n("style", "transition: transform .2s; transform: translate3d(0, 50px, 0) scale(1);"), 
                    n("className", "active refreshing");
                },
                tail: function() {
                    n("className", "active refreshing refreshing-tail");
                },
                move: function(t) {
                    n("style", "transition-duration: 0s; transform: translate3d(0, " + t + "px, 0) scale(1);"), 
                    n("className", t < e.options.distance ? "visible" : "active");
                }
            };
        }
    }, {
        key: "refreshing",
        value: function() {
            return -1 !== (this.scope.data.$wux.refresher.className || "").indexOf("refreshing");
        }
    }, {
        key: "getTouchPosition",
        value: function(t) {
            return {
                x: t.changedTouches[0].pageX,
                y: t.changedTouches[0].pageY
            };
        }
    }, {
        key: "finishPullToRefresh",
        value: function() {
            var t = this, e = this.getRefresherMethods();
            setTimeout(function() {
                t.requestAnimationFrame(e.tail), setTimeout(e.deactivate, 200);
            }, 200);
        }
    }, {
        key: "touchstart",
        value: function(t) {
            if (this.refreshing()) return !1;
            this.getRefresherMethods();
            var e = this.getTouchPosition(t);
            this.start = e, this.diffX = this.diffY = 0;
        }
    }, {
        key: "touchmove",
        value: function(t) {
            if (!this.start || this.refreshing()) return !1;
            var e = this.getRefresherMethods(), i = this.getTouchPosition(t);
            if (this.diffX = i.x - this.start.x, this.diffY = i.y - this.start.y, this.diffY < 0) return !1;
            this.diffY = Math.pow(this.diffY, .8), !this.activated && this.diffY > this.options.distance ? (this.activated = !0, 
            "function" == typeof this.options.onPulling && this.options.onPulling()) : this.activated && this.diffY < this.options.distance && (this.activated = !1), 
            e.move(this.diffY);
        }
    }, {
        key: "touchend",
        value: function(t) {
            var e = this.getRefresherMethods();
            if (this.start = !1, this.diffY <= 0 || this.refreshing()) return !1;
            e.deactivate(), Math.abs(this.diffY) >= this.options.distance && (this.events.once("scroll.refreshComplete", this.finishPullToRefresh.bind(this)), 
            e.refreshing(), "function" == typeof this.options.onRefresh && this.options.onRefresh());
        }
    } ]), n;
}();

exports.default = f;