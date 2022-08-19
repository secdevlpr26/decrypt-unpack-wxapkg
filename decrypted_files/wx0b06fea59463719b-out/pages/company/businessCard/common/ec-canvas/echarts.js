var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(e, n) {
    "object" == ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define([ "exports" ], n) : n(e.echarts = {});
}(void 0, function(e) {
    function n(t, e) {
        "createCanvas" === t && (ld = null), od[t] = e;
    }
    function i(e) {
        if (null == e || "object" != (void 0 === e ? "undefined" : t(e))) return e;
        var n = e, r = Jc.call(e);
        if ("[object Array]" === r) {
            if (!B(e)) {
                n = [];
                for (var a = 0, o = e.length; o > a; a++) n[a] = i(e[a]);
            }
        } else if (Qc[r]) {
            if (!B(e)) {
                var s = e.constructor;
                if (e.constructor.from) n = s.from(e); else {
                    n = new s(e.length);
                    for (var a = 0, o = e.length; o > a; a++) n[a] = i(e[a]);
                }
            }
        } else if (!Kc[r] && !B(e) && !I(e)) {
            n = {};
            for (var l in e) e.hasOwnProperty(l) && (n[l] = i(e[l]));
        }
        return n;
    }
    function r(t, e, n) {
        if (!b(e) || !b(t)) return n ? i(e) : t;
        for (var a in e) if (e.hasOwnProperty(a)) {
            var o = t[a], s = e[a];
            !b(s) || !b(o) || x(s) || x(o) || I(s) || I(o) || M(s) || M(o) || B(s) || B(o) ? !n && a in t || (t[a] = i(e[a], !0)) : r(o, s, n);
        }
        return t;
    }
    function a(t, e) {
        for (var n = t[0], i = 1, a = t.length; a > i; i++) n = r(n, t[i], e);
        return n;
    }
    function o(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t;
    }
    function s(t, e, n) {
        for (var i in e) e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
        return t;
    }
    function l() {
        return ld || (ld = sd().getContext("2d")), ld;
    }
    function h(t, e) {
        if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n;
        }
        return -1;
    }
    function u(t, e) {
        function n() {}
        var i = t.prototype;
        n.prototype = e.prototype, t.prototype = new n();
        for (var r in i) t.prototype[r] = i[r];
        t.prototype.constructor = t, t.superClass = e;
    }
    function c(t, e, n) {
        s(t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, n);
    }
    function d(t) {
        return t ? "string" != typeof t && "number" == typeof t.length : void 0;
    }
    function f(t, e, n) {
        if (t && e) if (t.forEach && t.forEach === ed) t.forEach(e, n); else if (t.length === +t.length) for (var i = 0, r = t.length; r > i; i++) e.call(n, t[i], i, t); else for (var a in t) t.hasOwnProperty(a) && e.call(n, t[a], a, t);
    }
    function p(t, e, n) {
        if (t && e) {
            if (t.map && t.map === rd) return t.map(e, n);
            for (var i = [], r = 0, a = t.length; a > r; r++) i.push(e.call(n, t[r], r, t));
            return i;
        }
    }
    function g(t, e, n, i) {
        if (t && e) {
            if (t.reduce && t.reduce === ad) return t.reduce(e, n, i);
            for (var r = 0, a = t.length; a > r; r++) n = e.call(i, n, t[r], r, t);
            return n;
        }
    }
    function v(t, e, n) {
        if (t && e) {
            if (t.filter && t.filter === nd) return t.filter(e, n);
            for (var i = [], r = 0, a = t.length; a > r; r++) e.call(n, t[r], r, t) && i.push(t[r]);
            return i;
        }
    }
    function m(t, e) {
        var n = id.call(arguments, 2);
        return function() {
            return t.apply(e, n.concat(id.call(arguments)));
        };
    }
    function y(t) {
        var e = id.call(arguments, 1);
        return function() {
            return t.apply(this, e.concat(id.call(arguments)));
        };
    }
    function x(t) {
        return "[object Array]" === Jc.call(t);
    }
    function _(t) {
        return "function" == typeof t;
    }
    function w(t) {
        return "[object String]" === Jc.call(t);
    }
    function b(e) {
        var n = void 0 === e ? "undefined" : t(e);
        return "function" === n || !!e && "object" == n;
    }
    function M(t) {
        return !!Kc[Jc.call(t)];
    }
    function S(t) {
        return !!Qc[Jc.call(t)];
    }
    function I(e) {
        return "object" == (void 0 === e ? "undefined" : t(e)) && "number" == typeof e.nodeType && "object" == t(e.ownerDocument);
    }
    function T(t) {
        return t !== t;
    }
    function C() {
        for (var t = 0, e = arguments.length; e > t; t++) if (null != arguments[t]) return arguments[t];
    }
    function A(t, e) {
        return null != t ? t : e;
    }
    function D(t, e, n) {
        return null != t ? t : null != e ? e : n;
    }
    function k() {
        return Function.call.apply(id, arguments);
    }
    function P(t) {
        if ("number" == typeof t) return [ t, t, t, t ];
        var e = t.length;
        return 2 === e ? [ t[0], t[1], t[0], t[1] ] : 3 === e ? [ t[0], t[1], t[2], t[1] ] : t;
    }
    function L(t, e) {
        if (!t) throw new Error(e);
    }
    function O(t) {
        return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }
    function z(t) {
        t[hd] = !0;
    }
    function B(t) {
        return t[hd];
    }
    function E(t) {
        function e(t, e) {
            n ? i.set(t, e) : i.set(e, t);
        }
        var n = x(t);
        this.data = {};
        var i = this;
        t instanceof E ? t.each(e) : t && f(t, e);
    }
    function R(t) {
        return new E(t);
    }
    function N() {}
    function F(t, e) {
        var n = new cd(2);
        return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n;
    }
    function V(t, e) {
        return t[0] = e[0], t[1] = e[1], t;
    }
    function W(t) {
        var e = new cd(2);
        return e[0] = t[0], e[1] = t[1], e;
    }
    function H(t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t;
    }
    function G(t, e, n, i) {
        return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t;
    }
    function Z(t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t;
    }
    function X(t) {
        return Math.sqrt(Y(t));
    }
    function Y(t) {
        return t[0] * t[0] + t[1] * t[1];
    }
    function q(t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t;
    }
    function j(t, e) {
        var n = X(e);
        return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t;
    }
    function U(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
    }
    function $(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
    }
    function K(t, e, n) {
        var i = e[0], r = e[1];
        return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t;
    }
    function Q(t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t;
    }
    function J(t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t;
    }
    function tt() {
        this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), 
        this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this);
    }
    function et(t, e) {
        return {
            target: t,
            topTarget: e && e.topTarget
        };
    }
    function nt(t, e) {
        var n = t._$eventProcessor;
        return null != e && n && n.normalizeQuery && (e = n.normalizeQuery(e)), e;
    }
    function it(t) {
        return t.getBoundingClientRect ? t.getBoundingClientRect() : {
            left: 0,
            top: 0
        };
    }
    function rt(t, e, n, i) {
        return n = n || {}, i || !$c.canvasSupported ? at(t, e, n) : $c.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, 
        n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : at(t, e, n), 
        n;
    }
    function at(t, e, n) {
        var i = it(t);
        n.zrX = e.clientX - i.left, n.zrY = e.clientY - i.top;
    }
    function ot(t, e, n) {
        if (null != (e = e || window.event).zrX) return e;
        var i = e.type;
        if (i && i.indexOf("touch") >= 0) {
            var r = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];
            r && rt(t, r, e, n);
        } else rt(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
        var a = e.button;
        return null == e.which && void 0 !== a && _d.test(e.type) && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), 
        e;
    }
    function st(t, e, n) {
        xd ? t.addEventListener(e, n) : t.attachEvent("on" + e, n);
    }
    function lt(t, e, n) {
        xd ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n);
    }
    function ht(t) {
        return t.which > 1;
    }
    function ut(t, e, n) {
        return {
            type: t,
            event: n,
            target: e.target,
            topTarget: e.topTarget,
            cancelBubble: !1,
            offsetX: n.zrX,
            offsetY: n.zrY,
            gestureEvent: n.gestureEvent,
            pinchX: n.pinchX,
            pinchY: n.pinchY,
            pinchScale: n.pinchScale,
            wheelDelta: n.zrDelta,
            zrByTouch: n.zrByTouch,
            which: n.which,
            stop: ct
        };
    }
    function ct() {
        wd(this.event);
    }
    function dt() {}
    function ft(t, e, n) {
        if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
            for (var i, r = t; r; ) {
                if (r.clipPath && !r.clipPath.contain(e, n)) return !1;
                r.silent && (i = !0), r = r.parent;
            }
            return !i || bd;
        }
        return !1;
    }
    function pt() {
        var t = new Id(6);
        return gt(t), t;
    }
    function gt(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
    }
    function vt(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], 
        t;
    }
    function mt(t, e, n) {
        var i = e[0] * n[0] + e[2] * n[1], r = e[1] * n[0] + e[3] * n[1], a = e[0] * n[2] + e[2] * n[3], o = e[1] * n[2] + e[3] * n[3], s = e[0] * n[4] + e[2] * n[5] + e[4], l = e[1] * n[4] + e[3] * n[5] + e[5];
        return t[0] = i, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t;
    }
    function yt(t, e, n) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], 
        t;
    }
    function xt(t, e, n) {
        var i = e[0], r = e[2], a = e[4], o = e[1], s = e[3], l = e[5], h = Math.sin(n), u = Math.cos(n);
        return t[0] = i * u + o * h, t[1] = -i * h + o * u, t[2] = r * u + s * h, t[3] = -r * h + u * s, 
        t[4] = u * a + h * l, t[5] = u * l - h * a, t;
    }
    function _t(t, e, n) {
        var i = n[0], r = n[1];
        return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, 
        t[5] = e[5] * r, t;
    }
    function wt(t, e) {
        var n = e[0], i = e[2], r = e[4], a = e[1], o = e[3], s = e[5], l = n * o - a * i;
        return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -i * l, t[3] = n * l, 
        t[4] = (i * s - o * r) * l, t[5] = (a * r - n * s) * l, t) : null;
    }
    function bt(t) {
        return t > Ad || -Ad > t;
    }
    function Mt(t) {
        this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, 
        this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, 
        this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, 
        this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1;
    }
    function St(t) {
        return 0 > (t = Math.round(t)) ? 0 : t > 255 ? 255 : t;
    }
    function It(t) {
        return 0 > (t = Math.round(t)) ? 0 : t > 360 ? 360 : t;
    }
    function Tt(t) {
        return 0 > t ? 0 : t > 1 ? 1 : t;
    }
    function Ct(t) {
        return St(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10));
    }
    function At(t) {
        return Tt(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t));
    }
    function Dt(t, e, n) {
        return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t;
    }
    function kt(t, e, n) {
        return t + (e - t) * n;
    }
    function Pt(t, e, n, i, r) {
        return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t;
    }
    function Lt(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
    }
    function Ot(t, e) {
        Hd && Lt(Hd, e), Hd = Wd.put(t, Hd || e.slice());
    }
    function zt(t, e) {
        if (t) {
            e = e || [];
            var n = Wd.get(t);
            if (n) return Lt(e, n);
            var i = (t += "").replace(/ /g, "").toLowerCase();
            if (i in Vd) return Lt(e, Vd[i]), Ot(t, e), e;
            if ("#" !== i.charAt(0)) {
                var r = i.indexOf("("), a = i.indexOf(")");
                if (-1 !== r && a + 1 === i.length) {
                    var o = i.substr(0, r), s = i.substr(r + 1, a - (r + 1)).split(","), l = 1;
                    switch (o) {
                      case "rgba":
                        if (4 !== s.length) return void Pt(e, 0, 0, 0, 1);
                        l = At(s.pop());

                      case "rgb":
                        return 3 !== s.length ? void Pt(e, 0, 0, 0, 1) : (Pt(e, Ct(s[0]), Ct(s[1]), Ct(s[2]), l), 
                        Ot(t, e), e);

                      case "hsla":
                        return 4 !== s.length ? void Pt(e, 0, 0, 0, 1) : (s[3] = At(s[3]), Bt(s, e), Ot(t, e), 
                        e);

                      case "hsl":
                        return 3 !== s.length ? void Pt(e, 0, 0, 0, 1) : (Bt(s, e), Ot(t, e), e);

                      default:
                        return;
                    }
                }
                Pt(e, 0, 0, 0, 1);
            } else {
                if (4 === i.length) return (h = parseInt(i.substr(1), 16)) >= 0 && 4095 >= h ? (Pt(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1), 
                Ot(t, e), e) : void Pt(e, 0, 0, 0, 1);
                if (7 === i.length) {
                    var h = parseInt(i.substr(1), 16);
                    return h >= 0 && 16777215 >= h ? (Pt(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1), 
                    Ot(t, e), e) : void Pt(e, 0, 0, 0, 1);
                }
            }
        }
    }
    function Bt(t, e) {
        var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360, i = At(t[1]), r = At(t[2]), a = .5 >= r ? r * (i + 1) : r + i - r * i, o = 2 * r - a;
        return e = e || [], Pt(e, St(255 * Dt(o, a, n + 1 / 3)), St(255 * Dt(o, a, n)), St(255 * Dt(o, a, n - 1 / 3)), 1), 
        4 === t.length && (e[3] = t[3]), e;
    }
    function Et(t) {
        if (t) {
            var e, n, i = t[0] / 255, r = t[1] / 255, a = t[2] / 255, o = Math.min(i, r, a), s = Math.max(i, r, a), l = s - o, h = (s + o) / 2;
            if (0 === l) e = 0, n = 0; else {
                n = .5 > h ? l / (s + o) : l / (2 - s - o);
                var u = ((s - i) / 6 + l / 2) / l, c = ((s - r) / 6 + l / 2) / l, d = ((s - a) / 6 + l / 2) / l;
                i === s ? e = d - c : r === s ? e = 1 / 3 + u - d : a === s && (e = 2 / 3 + c - u), 
                0 > e && (e += 1), e > 1 && (e -= 1);
            }
            var f = [ 360 * e, n, h ];
            return null != t[3] && f.push(t[3]), f;
        }
    }
    function Rt(t, e) {
        var n = zt(t);
        if (n) {
            for (var i = 0; 3 > i; i++) n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, 
            n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);
            return Wt(n, 4 === n.length ? "rgba" : "rgb");
        }
    }
    function Nt(t) {
        var e = zt(t);
        return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0;
    }
    function Ft(t, e, n) {
        if (e && e.length && t >= 0 && 1 >= t) {
            n = n || [];
            var i = t * (e.length - 1), r = Math.floor(i), a = Math.ceil(i), o = e[r], s = e[a], l = i - r;
            return n[0] = St(kt(o[0], s[0], l)), n[1] = St(kt(o[1], s[1], l)), n[2] = St(kt(o[2], s[2], l)), 
            n[3] = Tt(kt(o[3], s[3], l)), n;
        }
    }
    function Vt(t, e, n) {
        if (e && e.length && t >= 0 && 1 >= t) {
            var i = t * (e.length - 1), r = Math.floor(i), a = Math.ceil(i), o = zt(e[r]), s = zt(e[a]), l = i - r, h = Wt([ St(kt(o[0], s[0], l)), St(kt(o[1], s[1], l)), St(kt(o[2], s[2], l)), Tt(kt(o[3], s[3], l)) ], "rgba");
            return n ? {
                color: h,
                leftIndex: r,
                rightIndex: a,
                value: i
            } : h;
        }
    }
    function Wt(t, e) {
        if (t && t.length) {
            var n = t[0] + "," + t[1] + "," + t[2];
            return ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")";
        }
    }
    function Ht(t, e) {
        return t[e];
    }
    function Gt(t, e, n) {
        t[e] = n;
    }
    function Zt(t, e, n) {
        return (e - t) * n + t;
    }
    function Xt(t, e, n) {
        return n > .5 ? e : t;
    }
    function Yt(t, e, n, i, r) {
        var a = t.length;
        if (1 == r) for (s = 0; a > s; s++) i[s] = Zt(t[s], e[s], n); else for (var o = a && t[0].length, s = 0; a > s; s++) for (var l = 0; o > l; l++) i[s][l] = Zt(t[s][l], e[s][l], n);
    }
    function qt(t, e, n) {
        var i = t.length, r = e.length;
        if (i !== r) if (i > r) t.length = r; else for (o = i; r > o; o++) t.push(1 === n ? e[o] : Yd.call(e[o]));
        for (var a = t[0] && t[0].length, o = 0; o < t.length; o++) if (1 === n) isNaN(t[o]) && (t[o] = e[o]); else for (var s = 0; a > s; s++) isNaN(t[o][s]) && (t[o][s] = e[o][s]);
    }
    function jt(t, e, n) {
        if (t === e) return !0;
        var i = t.length;
        if (i !== e.length) return !1;
        if (1 === n) {
            for (a = 0; i > a; a++) if (t[a] !== e[a]) return !1;
        } else for (var r = t[0].length, a = 0; i > a; a++) for (var o = 0; r > o; o++) if (t[a][o] !== e[a][o]) return !1;
        return !0;
    }
    function Ut(t, e, n, i, r, a, o, s, l) {
        var h = t.length;
        if (1 == l) for (c = 0; h > c; c++) s[c] = $t(t[c], e[c], n[c], i[c], r, a, o); else for (var u = t[0].length, c = 0; h > c; c++) for (var d = 0; u > d; d++) s[c][d] = $t(t[c][d], e[c][d], n[c][d], i[c][d], r, a, o);
    }
    function $t(t, e, n, i, r, a, o) {
        var s = .5 * (n - t), l = .5 * (i - e);
        return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;
    }
    function Kt(t) {
        if (d(t)) {
            var e = t.length;
            if (d(t[0])) {
                for (var n = [], i = 0; e > i; i++) n.push(Yd.call(t[i]));
                return n;
            }
            return Yd.call(t);
        }
        return t;
    }
    function Qt(t) {
        return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), 
        "rgba(" + t.join(",") + ")";
    }
    function Jt(t) {
        var e = t[t.length - 1].value;
        return d(e && e[0]) ? 2 : 1;
    }
    function te(t, e, n, i, r, a) {
        var o = t._getter, s = t._setter, l = "spline" === e, h = i.length;
        if (h) {
            var u, c = d(i[0].value), f = !1, p = !1, g = c ? Jt(i) : 0;
            i.sort(function(t, e) {
                return t.time - e.time;
            }), u = i[h - 1].time;
            for (var v = [], m = [], y = i[0].value, x = !0, _ = 0; h > _; _++) {
                v.push(i[_].time / u);
                var w = i[_].value;
                if (c && jt(w, y, g) || !c && w === y || (x = !1), y = w, "string" == typeof w) {
                    var b = zt(w);
                    b ? (w = b, f = !0) : p = !0;
                }
                m.push(w);
            }
            if (a || !x) {
                for (var M = m[h - 1], _ = 0; h - 1 > _; _++) c ? qt(m[_], M, g) : !isNaN(m[_]) || isNaN(M) || p || f || (m[_] = M);
                c && qt(o(t._target, r), M, g);
                var S, I, T, C, A, D, k = 0, P = 0;
                if (f) var L = [ 0, 0, 0, 0 ];
                var O = new Mt({
                    target: t._target,
                    life: u,
                    loop: t._loop,
                    delay: t._delay,
                    onframe: function(t, e) {
                        var n;
                        if (0 > e) n = 0; else if (P > e) {
                            for (n = S = Math.min(k + 1, h - 1); n >= 0 && !(v[n] <= e); n--) ;
                            n = Math.min(n, h - 2);
                        } else {
                            for (n = k; h > n && !(v[n] > e); n++) ;
                            n = Math.min(n - 1, h - 2);
                        }
                        k = n, P = e;
                        var i = v[n + 1] - v[n];
                        if (0 !== i) if (I = (e - v[n]) / i, l) if (C = m[n], T = m[0 === n ? n : n - 1], 
                        A = m[n > h - 2 ? h - 1 : n + 1], D = m[n > h - 3 ? h - 1 : n + 2], c) Ut(T, C, A, D, I, I * I, I * I * I, o(t, r), g); else {
                            if (f) a = Ut(T, C, A, D, I, I * I, I * I * I, L, 1), a = Qt(L); else {
                                if (p) return Xt(C, A, I);
                                a = $t(T, C, A, D, I, I * I, I * I * I);
                            }
                            s(t, r, a);
                        } else if (c) Yt(m[n], m[n + 1], I, o(t, r), g); else {
                            var a;
                            if (f) Yt(m[n], m[n + 1], I, L, 1), a = Qt(L); else {
                                if (p) return Xt(m[n], m[n + 1], I);
                                a = Zt(m[n], m[n + 1], I);
                            }
                            s(t, r, a);
                        }
                    },
                    ondestroy: n
                });
                return e && "spline" !== e && (O.easing = e), O;
            }
        }
    }
    function ee(t, e, n, i, r, a, o, s) {
        w(i) ? (a = r, r = i, i = 0) : _(r) ? (a = r, r = "linear", i = 0) : _(i) ? (a = i, 
        i = 0) : _(n) ? (a = n, n = 500) : n || (n = 500), t.stopAnimation(), ne(t, "", t, e, n, i, s);
        var l = t.animators.slice(), h = l.length;
        h || a && a();
        for (var u = 0; u < l.length; u++) l[u].done(function() {
            --h || a && a();
        }).start(r, o);
    }
    function ne(t, e, n, i, r, a, o) {
        var s = {}, l = 0;
        for (var h in i) i.hasOwnProperty(h) && (null != n[h] ? b(i[h]) && !d(i[h]) ? ne(t, e ? e + "." + h : h, n[h], i[h], r, a, o) : (o ? (s[h] = n[h], 
        ie(t, e, h, i[h])) : s[h] = i[h], l++) : null == i[h] || o || ie(t, e, h, i[h]));
        l > 0 && t.animate(e, !1).when(null == r ? 500 : r, s).delay(a || 0);
    }
    function ie(t, e, n, i) {
        if (e) {
            var r = {};
            r[e] = {}, r[e][n] = i, t.attr(r);
        } else t.attr(n, i);
    }
    function re(t, e, n, i) {
        0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i), this.x = t, this.y = e, this.width = n, 
        this.height = i;
    }
    function ae(t) {
        for (var e = 0; t >= af; ) e |= 1 & t, t >>= 1;
        return t + e;
    }
    function oe(t, e, n, i) {
        var r = e + 1;
        if (r === n) return 1;
        if (i(t[r++], t[e]) < 0) {
            for (;n > r && i(t[r], t[r - 1]) < 0; ) r++;
            se(t, e, r);
        } else for (;n > r && i(t[r], t[r - 1]) >= 0; ) r++;
        return r - e;
    }
    function se(t, e, n) {
        for (n--; n > e; ) {
            var i = t[e];
            t[e++] = t[n], t[n--] = i;
        }
    }
    function le(t, e, n, i, r) {
        for (i === e && i++; n > i; i++) {
            for (var a, o = t[i], s = e, l = i; l > s; ) r(o, t[a = s + l >>> 1]) < 0 ? l = a : s = a + 1;
            var h = i - s;
            switch (h) {
              case 3:
                t[s + 3] = t[s + 2];

              case 2:
                t[s + 2] = t[s + 1];

              case 1:
                t[s + 1] = t[s];
                break;

              default:
                for (;h > 0; ) t[s + h] = t[s + h - 1], h--;
            }
            t[s] = o;
        }
    }
    function he(t, e, n, i, r, a) {
        var o = 0, s = 0, l = 1;
        if (a(t, e[n + r]) > 0) {
            for (s = i - r; s > l && a(t, e[n + r + l]) > 0; ) o = l, 0 >= (l = 1 + (l << 1)) && (l = s);
            l > s && (l = s), o += r, l += r;
        } else {
            for (s = r + 1; s > l && a(t, e[n + r - l]) <= 0; ) o = l, 0 >= (l = 1 + (l << 1)) && (l = s);
            l > s && (l = s);
            var h = o;
            o = r - l, l = r - h;
        }
        for (o++; l > o; ) {
            var u = o + (l - o >>> 1);
            a(t, e[n + u]) > 0 ? o = u + 1 : l = u;
        }
        return l;
    }
    function ue(t, e, n, i, r, a) {
        var o = 0, s = 0, l = 1;
        if (a(t, e[n + r]) < 0) {
            for (s = r + 1; s > l && a(t, e[n + r - l]) < 0; ) o = l, 0 >= (l = 1 + (l << 1)) && (l = s);
            l > s && (l = s);
            var h = o;
            o = r - l, l = r - h;
        } else {
            for (s = i - r; s > l && a(t, e[n + r + l]) >= 0; ) o = l, 0 >= (l = 1 + (l << 1)) && (l = s);
            l > s && (l = s), o += r, l += r;
        }
        for (o++; l > o; ) {
            var u = o + (l - o >>> 1);
            a(t, e[n + u]) < 0 ? l = u : o = u + 1;
        }
        return l;
    }
    function ce(t, e) {
        function n(n) {
            var s = a[n], h = o[n], u = a[n + 1], c = o[n + 1];
            o[n] = h + c, n === l - 3 && (a[n + 1] = a[n + 2], o[n + 1] = o[n + 2]), l--;
            var d = ue(t[u], t, s, h, 0, e);
            s += d, 0 != (h -= d) && 0 !== (c = he(t[s + h - 1], t, u, c, c - 1, e)) && (c >= h ? i(s, h, u, c) : r(s, h, u, c));
        }
        function i(n, i, r, a) {
            var o = 0;
            for (o = 0; i > o; o++) h[o] = t[n + o];
            var l = 0, u = r, c = n;
            if (t[c++] = t[u++], 0 != --a) {
                if (1 === i) {
                    for (o = 0; a > o; o++) t[c + o] = t[u + o];
                    return void (t[c + a] = h[l]);
                }
                for (var d, f, p, g = s; ;) {
                    d = 0, f = 0, p = !1;
                    do {
                        if (e(t[u], h[l]) < 0) {
                            if (t[c++] = t[u++], f++, d = 0, 0 == --a) {
                                p = !0;
                                break;
                            }
                        } else if (t[c++] = h[l++], d++, f = 0, 1 == --i) {
                            p = !0;
                            break;
                        }
                    } while (g > (d | f));
                    if (p) break;
                    do {
                        if (0 !== (d = ue(t[u], h, l, i, 0, e))) {
                            for (o = 0; d > o; o++) t[c + o] = h[l + o];
                            if (c += d, l += d, 1 >= (i -= d)) {
                                p = !0;
                                break;
                            }
                        }
                        if (t[c++] = t[u++], 0 == --a) {
                            p = !0;
                            break;
                        }
                        if (0 !== (f = he(h[l], t, u, a, 0, e))) {
                            for (o = 0; f > o; o++) t[c + o] = t[u + o];
                            if (c += f, u += f, 0 === (a -= f)) {
                                p = !0;
                                break;
                            }
                        }
                        if (t[c++] = h[l++], 1 == --i) {
                            p = !0;
                            break;
                        }
                        g--;
                    } while (d >= of || f >= of);
                    if (p) break;
                    0 > g && (g = 0), g += 2;
                }
                if (1 > (s = g) && (s = 1), 1 === i) {
                    for (o = 0; a > o; o++) t[c + o] = t[u + o];
                    t[c + a] = h[l];
                } else {
                    if (0 === i) throw new Error();
                    for (o = 0; i > o; o++) t[c + o] = h[l + o];
                }
            } else for (o = 0; i > o; o++) t[c + o] = h[l + o];
        }
        function r(n, i, r, a) {
            var o = 0;
            for (o = 0; a > o; o++) h[o] = t[r + o];
            var l = n + i - 1, u = a - 1, c = r + a - 1, d = 0, f = 0;
            if (t[c--] = t[l--], 0 != --i) {
                if (1 === a) {
                    for (f = (c -= i) + 1, d = (l -= i) + 1, o = i - 1; o >= 0; o--) t[f + o] = t[d + o];
                    return void (t[c] = h[u]);
                }
                for (var p = s; ;) {
                    var g = 0, v = 0, m = !1;
                    do {
                        if (e(h[u], t[l]) < 0) {
                            if (t[c--] = t[l--], g++, v = 0, 0 == --i) {
                                m = !0;
                                break;
                            }
                        } else if (t[c--] = h[u--], v++, g = 0, 1 == --a) {
                            m = !0;
                            break;
                        }
                    } while (p > (g | v));
                    if (m) break;
                    do {
                        if (0 != (g = i - ue(h[u], t, n, i, i - 1, e))) {
                            for (i -= g, f = (c -= g) + 1, d = (l -= g) + 1, o = g - 1; o >= 0; o--) t[f + o] = t[d + o];
                            if (0 === i) {
                                m = !0;
                                break;
                            }
                        }
                        if (t[c--] = h[u--], 1 == --a) {
                            m = !0;
                            break;
                        }
                        if (0 != (v = a - he(t[l], h, 0, a, a - 1, e))) {
                            for (a -= v, f = (c -= v) + 1, d = (u -= v) + 1, o = 0; v > o; o++) t[f + o] = h[d + o];
                            if (1 >= a) {
                                m = !0;
                                break;
                            }
                        }
                        if (t[c--] = t[l--], 0 == --i) {
                            m = !0;
                            break;
                        }
                        p--;
                    } while (g >= of || v >= of);
                    if (m) break;
                    0 > p && (p = 0), p += 2;
                }
                if (1 > (s = p) && (s = 1), 1 === a) {
                    for (f = (c -= i) + 1, d = (l -= i) + 1, o = i - 1; o >= 0; o--) t[f + o] = t[d + o];
                    t[c] = h[u];
                } else {
                    if (0 === a) throw new Error();
                    for (d = c - (a - 1), o = 0; a > o; o++) t[d + o] = h[o];
                }
            } else for (d = c - (a - 1), o = 0; a > o; o++) t[d + o] = h[o];
        }
        var a, o, s = of, l = 0, h = [];
        a = [], o = [], this.mergeRuns = function() {
            for (;l > 1; ) {
                var t = l - 2;
                if (t >= 1 && o[t - 1] <= o[t] + o[t + 1] || t >= 2 && o[t - 2] <= o[t] + o[t - 1]) o[t - 1] < o[t + 1] && t--; else if (o[t] > o[t + 1]) break;
                n(t);
            }
        }, this.forceMergeRuns = function() {
            for (;l > 1; ) {
                var t = l - 2;
                t > 0 && o[t - 1] < o[t + 1] && t--, n(t);
            }
        }, this.pushRun = function(t, e) {
            a[l] = t, o[l] = e, l += 1;
        };
    }
    function de(t, e, n, i) {
        n || (n = 0), i || (i = t.length);
        var r = i - n;
        if (!(2 > r)) {
            var a = 0;
            if (af > r) return a = oe(t, n, i, e), void le(t, n, i, n + a, e);
            var o = new ce(t, e), s = ae(r);
            do {
                if (a = oe(t, n, i, e), s > a) {
                    var l = r;
                    l > s && (l = s), le(t, n, n + l, n + a, e), a = l;
                }
                o.pushRun(n, a), o.mergeRuns(), r -= a, n += a;
            } while (0 !== r);
            o.forceMergeRuns();
        }
    }
    function fe(t, e) {
        return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;
    }
    function pe(t, e, n) {
        var i = null == e.x ? 0 : e.x, r = null == e.x2 ? 1 : e.x2, a = null == e.y ? 0 : e.y, o = null == e.y2 ? 0 : e.y2;
        return e.global || (i = i * n.width + n.x, r = r * n.width + n.x, a = a * n.height + n.y, 
        o = o * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, 
        o = isNaN(o) ? 0 : o, t.createLinearGradient(i, a, r, o);
    }
    function ge(t, e, n) {
        var i = n.width, r = n.height, a = Math.min(i, r), o = null == e.x ? .5 : e.x, s = null == e.y ? .5 : e.y, l = null == e.r ? .5 : e.r;
        return e.global || (o = o * i + n.x, s = s * r + n.y, l *= a), t.createRadialGradient(o, s, 0, o, s, l);
    }
    function ve() {
        return !1;
    }
    function me(t, e, n) {
        var i = sd(), r = e.getWidth(), a = e.getHeight(), o = i.style;
        return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", 
        o.height = a + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = a * n, 
        i;
    }
    function ye(t) {
        if ("string" == typeof t) {
            var e = yf.get(t);
            return e && e.image;
        }
        return t;
    }
    function xe(t, e, n, i, r) {
        if (t) {
            if ("string" == typeof t) {
                if (e && e.__zrImageSrc === t || !n) return e;
                var a = yf.get(t), o = {
                    hostEl: n,
                    cb: i,
                    cbPayload: r
                };
                return a ? (e = a.image, !we(e) && a.pending.push(o)) : (!e && (e = new Image()), 
                e.onload = e.onerror = _e, yf.put(t, e.__cachedImgObj = {
                    image: e,
                    pending: [ o ]
                }), e.src = e.__zrImageSrc = t), e;
            }
            return t;
        }
        return e;
    }
    function _e() {
        var t = this.__cachedImgObj;
        this.onload = this.onerror = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
            var n = t.pending[e], i = n.cb;
            i && i(this, n.cbPayload), n.hostEl.dirty();
        }
        t.pending.length = 0;
    }
    function we(t) {
        return t && t.width && t.height;
    }
    function be(t, e) {
        var n = t + ":" + (e = e || Mf);
        if (xf[n]) return xf[n];
        for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; o > a; a++) r = Math.max(ze(i[a], e).width, r);
        return _f > wf && (_f = 0, xf = {}), _f++, xf[n] = r, r;
    }
    function Me(t, e, n, i, r, a, o) {
        return a ? Ie(t, e, n, i, r, a, o) : Se(t, e, n, i, r, o);
    }
    function Se(t, e, n, i, r, a) {
        var o = Be(t, e, r, a), s = be(t, e);
        r && (s += r[1] + r[3]);
        var l = o.outerHeight, h = new re(Te(0, s, n), Ce(0, l, i), s, l);
        return h.lineHeight = o.lineHeight, h;
    }
    function Ie(t, e, n, i, r, a, o) {
        var s = Ee(t, {
            rich: a,
            truncate: o,
            font: e,
            textAlign: n,
            textPadding: r
        }), l = s.outerWidth, h = s.outerHeight;
        return new re(Te(0, l, n), Ce(0, h, i), l, h);
    }
    function Te(t, e, n) {
        return "right" === n ? t -= e : "center" === n && (t -= e / 2), t;
    }
    function Ce(t, e, n) {
        return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t;
    }
    function Ae(t, e, n) {
        var i = e.x, r = e.y, a = e.height, o = e.width, s = a / 2, l = "left", h = "top";
        switch (t) {
          case "left":
            i -= n, r += s, l = "right", h = "middle";
            break;

          case "right":
            i += n + o, r += s, h = "middle";
            break;

          case "top":
            i += o / 2, r -= n, l = "center", h = "bottom";
            break;

          case "bottom":
            i += o / 2, r += a + n, l = "center";
            break;

          case "inside":
            i += o / 2, r += s, l = "center", h = "middle";
            break;

          case "insideLeft":
            i += n, r += s, h = "middle";
            break;

          case "insideRight":
            i += o - n, r += s, l = "right", h = "middle";
            break;

          case "insideTop":
            i += o / 2, r += n, l = "center";
            break;

          case "insideBottom":
            i += o / 2, r += a - n, l = "center", h = "bottom";
            break;

          case "insideTopLeft":
            i += n, r += n;
            break;

          case "insideTopRight":
            i += o - n, r += n, l = "right";
            break;

          case "insideBottomLeft":
            i += n, r += a - n, h = "bottom";
            break;

          case "insideBottomRight":
            i += o - n, r += a - n, l = "right", h = "bottom";
        }
        return {
            x: i,
            y: r,
            textAlign: l,
            textVerticalAlign: h
        };
    }
    function De(t, e, n, i, r) {
        if (!e) return "";
        var a = (t + "").split("\n");
        r = ke(e, n, i, r);
        for (var o = 0, s = a.length; s > o; o++) a[o] = Pe(a[o], r);
        return a.join("\n");
    }
    function ke(t, e, n, i) {
        (i = o({}, i)).font = e;
        var n = A(n, "...");
        i.maxIterations = A(i.maxIterations, 2);
        var r = i.minChar = A(i.minChar, 0);
        i.cnCharWidth = be("国", e);
        var a = i.ascCharWidth = be("a", e);
        i.placeholder = A(i.placeholder, "");
        for (var s = t = Math.max(0, t - 1), l = 0; r > l && s >= a; l++) s -= a;
        var h = be(n);
        return h > s && (n = "", h = 0), s = t - h, i.ellipsis = n, i.ellipsisWidth = h, 
        i.contentWidth = s, i.containerWidth = t, i;
    }
    function Pe(t, e) {
        var n = e.containerWidth, i = e.font, r = e.contentWidth;
        if (!n) return "";
        var a = be(t, i);
        if (n >= a) return t;
        for (var o = 0; ;o++) {
            if (r >= a || o >= e.maxIterations) {
                t += e.ellipsis;
                break;
            }
            var s = 0 === o ? Le(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;
            a = be(t = t.substr(0, s), i);
        }
        return "" === t && (t = e.placeholder), t;
    }
    function Le(t, e, n, i) {
        for (var r = 0, a = 0, o = t.length; o > a && e > r; a++) {
            var s = t.charCodeAt(a);
            r += s >= 0 && 127 >= s ? n : i;
        }
        return a;
    }
    function Oe(t) {
        return be("国", t);
    }
    function ze(t, e) {
        return Sf.measureText(t, e);
    }
    function Be(t, e, n, i) {
        null != t && (t += "");
        var r = Oe(e), a = t ? t.split("\n") : [], o = a.length * r, s = o;
        if (n && (s += n[0] + n[2]), t && i) {
            var l = i.outerHeight, h = i.outerWidth;
            if (null != l && s > l) t = "", a = []; else if (null != h) for (var u = ke(h - (n ? n[1] + n[3] : 0), e, i.ellipsis, {
                minChar: i.minChar,
                placeholder: i.placeholder
            }), c = 0, d = a.length; d > c; c++) a[c] = Pe(a[c], u);
        }
        return {
            lines: a,
            height: o,
            outerHeight: s,
            lineHeight: r
        };
    }
    function Ee(t, e) {
        var n = {
            lines: [],
            width: 0,
            height: 0
        };
        if (null != t && (t += ""), !t) return n;
        for (var i, r = bf.lastIndex = 0; null != (i = bf.exec(t)); ) {
            var a = i.index;
            a > r && Re(n, t.substring(r, a)), Re(n, i[2], i[1]), r = bf.lastIndex;
        }
        r < t.length && Re(n, t.substring(r, t.length));
        var o = n.lines, s = 0, l = 0, h = [], u = e.textPadding, c = e.truncate, d = c && c.outerWidth, f = c && c.outerHeight;
        u && (null != d && (d -= u[1] + u[3]), null != f && (f -= u[0] + u[2]));
        for (k = 0; k < o.length; k++) {
            for (var p = o[k], g = 0, v = 0, m = 0; m < p.tokens.length; m++) {
                var y = (P = p.tokens[m]).styleName && e.rich[P.styleName] || {}, x = P.textPadding = y.textPadding, _ = P.font = y.font || e.font, w = P.textHeight = A(y.textHeight, Oe(_));
                if (x && (w += x[0] + x[2]), P.height = w, P.lineHeight = D(y.textLineHeight, e.textLineHeight, w), 
                P.textAlign = y && y.textAlign || e.textAlign, P.textVerticalAlign = y && y.textVerticalAlign || "middle", 
                null != f && s + P.lineHeight > f) return {
                    lines: [],
                    width: 0,
                    height: 0
                };
                P.textWidth = be(P.text, _);
                var b = y.textWidth, M = null == b || "auto" === b;
                if ("string" == typeof b && "%" === b.charAt(b.length - 1)) P.percentWidth = b, 
                h.push(P), b = 0; else {
                    if (M) {
                        b = P.textWidth;
                        var S = y.textBackgroundColor, I = S && S.image;
                        I && (I = ye(I), we(I) && (b = Math.max(b, I.width * w / I.height)));
                    }
                    var T = x ? x[1] + x[3] : 0;
                    b += T;
                    var C = null != d ? d - v : null;
                    null != C && b > C && (!M || T > C ? (P.text = "", P.textWidth = b = 0) : (P.text = De(P.text, C - T, _, c.ellipsis, {
                        minChar: c.minChar
                    }), P.textWidth = be(P.text, _), b = P.textWidth + T));
                }
                v += P.width = b, y && (g = Math.max(g, P.lineHeight));
            }
            p.width = v, p.lineHeight = g, s += g, l = Math.max(l, v);
        }
        n.outerWidth = n.width = A(e.textWidth, l), n.outerHeight = n.height = A(e.textHeight, s), 
        u && (n.outerWidth += u[1] + u[3], n.outerHeight += u[0] + u[2]);
        for (var k = 0; k < h.length; k++) {
            var P = h[k], L = P.percentWidth;
            P.width = parseInt(L, 10) / 100 * l;
        }
        return n;
    }
    function Re(t, e, n) {
        for (var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
            var s = r[o], l = {
                styleName: n,
                text: s,
                isLineHolder: !s && !i
            };
            if (o) a.push({
                tokens: [ l ]
            }); else {
                var h = (a[a.length - 1] || (a[0] = {
                    tokens: []
                })).tokens, u = h.length;
                1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || i) && h.push(l);
            }
        }
    }
    function Ne(t) {
        var e = (t.fontSize || t.fontFamily) && [ t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif" ].join(" ");
        return e && O(e) || t.textFont || t.font;
    }
    function Fe(t, e) {
        var n, i, r, a, o = e.x, s = e.y, l = e.width, h = e.height, u = e.r;
        0 > l && (o += l, l = -l), 0 > h && (s += h, h = -h), "number" == typeof u ? n = i = r = a = u : u instanceof Array ? 1 === u.length ? n = i = r = a = u[0] : 2 === u.length ? (n = r = u[0], 
        i = a = u[1]) : 3 === u.length ? (n = u[0], i = a = u[1], r = u[2]) : (n = u[0], 
        i = u[1], r = u[2], a = u[3]) : n = i = r = a = 0;
        var c;
        n + i > l && (c = n + i, n *= l / c, i *= l / c), r + a > l && (c = r + a, r *= l / c, 
        a *= l / c), i + r > h && (c = i + r, i *= h / c, r *= h / c), n + a > h && (c = n + a, 
        n *= h / c, a *= h / c), t.moveTo(o + n, s), t.lineTo(o + l - i, s), 0 !== i && t.arc(o + l - i, s + i, i, -Math.PI / 2, 0), 
        t.lineTo(o + l, s + h - r), 0 !== r && t.arc(o + l - r, s + h - r, r, 0, Math.PI / 2), 
        t.lineTo(o + a, s + h), 0 !== a && t.arc(o + a, s + h - a, a, Math.PI / 2, Math.PI), 
        t.lineTo(o, s + n), 0 !== n && t.arc(o + n, s + n, n, Math.PI, 1.5 * Math.PI);
    }
    function Ve(t) {
        return We(t), f(t.rich, We), t;
    }
    function We(t) {
        if (t) {
            t.font = Ne(t);
            var e = t.textAlign;
            "middle" === e && (e = "center"), t.textAlign = null == e || If[e] ? e : "left";
            var n = t.textVerticalAlign || t.textBaseline;
            "center" === n && (n = "middle"), t.textVerticalAlign = null == n || Tf[n] ? n : "top", 
            t.textPadding && (t.textPadding = P(t.textPadding));
        }
    }
    function He(t, e, n, i, r, a) {
        i.rich ? Ze(t, e, n, i, r) : Ge(t, e, n, i, r, a);
    }
    function Ge(t, e, n, i, r, a) {
        var o = a && a.style, s = o && "text" === a.type, l = i.font || Mf;
        s && l === (o.font || Mf) || (e.font = l);
        var h = t.__computedFont;
        t.__styleFont !== l && (t.__styleFont = l, h = t.__computedFont = e.font);
        var u = i.textPadding, c = t.__textCotentBlock;
        (!c || t.__dirtyText) && (c = t.__textCotentBlock = Be(n, h, u, i.truncate));
        var d = c.outerHeight, f = c.lines, p = c.lineHeight, g = Ke(d, i, r), v = g.baseX, m = g.baseY, y = g.textAlign || "left", x = g.textVerticalAlign;
        Ye(e, i, r, v, m);
        var _ = Ce(m, d, x), w = v, b = _, M = je(i);
        if (M || u) {
            var S = be(n, h);
            u && (S += u[1] + u[3]);
            var I = Te(v, S, y);
            M && Ue(t, e, i, I, _, S, d), u && (w = nn(v, y, u), b += u[0]);
        }
        e.textAlign = y, e.textBaseline = "middle";
        for (E = 0; E < Cf.length; E++) {
            var T = Cf[E], C = T[0], A = T[1], D = i[C];
            s && D === o[C] || (e[A] = hf(e, A, D || T[2]));
        }
        b += p / 2;
        var k = i.textStrokeWidth, P = s ? o.textStrokeWidth : null, L = !s || k !== P, O = !s || L || i.textStroke !== o.textStroke, z = Je(i.textStroke, k), B = tn(i.textFill);
        if (z && (L && (e.lineWidth = k), O && (e.strokeStyle = z)), B && (!s || i.textFill !== o.textFill || o.textBackgroundColor) && (e.fillStyle = B), 
        1 === f.length) z && e.strokeText(f[0], w, b), B && e.fillText(f[0], w, b); else for (var E = 0; E < f.length; E++) z && e.strokeText(f[E], w, b), 
        B && e.fillText(f[E], w, b), b += p;
    }
    function Ze(t, e, n, i, r) {
        var a = t.__textCotentBlock;
        (!a || t.__dirtyText) && (a = t.__textCotentBlock = Ee(n, i)), Xe(t, e, a, i, r);
    }
    function Xe(t, e, n, i, r) {
        var a = n.width, o = n.outerWidth, s = n.outerHeight, l = i.textPadding, h = Ke(s, i, r), u = h.baseX, c = h.baseY, d = h.textAlign, f = h.textVerticalAlign;
        Ye(e, i, r, u, c);
        var p = Te(u, o, d), g = Ce(c, s, f), v = p, m = g;
        l && (v += l[3], m += l[0]);
        var y = v + a;
        je(i) && Ue(t, e, i, p, g, o, s);
        for (var x = 0; x < n.lines.length; x++) {
            for (var _, w = n.lines[x], b = w.tokens, M = b.length, S = w.lineHeight, I = w.width, T = 0, C = v, A = y, D = M - 1; M > T && (!(_ = b[T]).textAlign || "left" === _.textAlign); ) qe(t, e, _, i, S, m, C, "left"), 
            I -= _.width, C += _.width, T++;
            for (;D >= 0 && "right" === (_ = b[D]).textAlign; ) qe(t, e, _, i, S, m, A, "right"), 
            I -= _.width, A -= _.width, D--;
            for (C += (a - (C - v) - (y - A) - I) / 2; D >= T; ) qe(t, e, _ = b[T], i, S, m, C + _.width / 2, "center"), 
            C += _.width, T++;
            m += S;
        }
    }
    function Ye(t, e, n, i, r) {
        if (n && e.textRotation) {
            var a = e.textOrigin;
            "center" === a ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : a && (i = a[0] + n.x, 
            r = a[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r);
        }
    }
    function qe(t, e, n, i, r, a, o, s) {
        var l = i.rich[n.styleName] || {};
        l.text = n.text;
        var h = n.textVerticalAlign, u = a + r / 2;
        "top" === h ? u = a + n.height / 2 : "bottom" === h && (u = a + r - n.height / 2), 
        !n.isLineHolder && je(l) && Ue(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, u - n.height / 2, n.width, n.height);
        var c = n.textPadding;
        c && (o = nn(o, s, c), u -= n.height / 2 - c[2] - n.textHeight / 2), Qe(e, "shadowBlur", D(l.textShadowBlur, i.textShadowBlur, 0)), 
        Qe(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), Qe(e, "shadowOffsetX", D(l.textShadowOffsetX, i.textShadowOffsetX, 0)), 
        Qe(e, "shadowOffsetY", D(l.textShadowOffsetY, i.textShadowOffsetY, 0)), Qe(e, "textAlign", s), 
        Qe(e, "textBaseline", "middle"), Qe(e, "font", n.font || Mf);
        var d = Je(l.textStroke || i.textStroke, p), f = tn(l.textFill || i.textFill), p = A(l.textStrokeWidth, i.textStrokeWidth);
        d && (Qe(e, "lineWidth", p), Qe(e, "strokeStyle", d), e.strokeText(n.text, o, u)), 
        f && (Qe(e, "fillStyle", f), e.fillText(n.text, o, u));
    }
    function je(t) {
        return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor;
    }
    function Ue(t, e, n, i, r, a, o) {
        var s = n.textBackgroundColor, l = n.textBorderWidth, h = n.textBorderColor, u = w(s);
        if (Qe(e, "shadowBlur", n.textBoxShadowBlur || 0), Qe(e, "shadowColor", n.textBoxShadowColor || "transparent"), 
        Qe(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), Qe(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), 
        u || l && h) {
            e.beginPath();
            var c = n.textBorderRadius;
            c ? Fe(e, {
                x: i,
                y: r,
                width: a,
                height: o,
                r: c
            }) : e.rect(i, r, a, o), e.closePath();
        }
        if (u) if (Qe(e, "fillStyle", s), null != n.fillOpacity) {
            f = e.globalAlpha;
            e.globalAlpha = n.fillOpacity * n.opacity, e.fill(), e.globalAlpha = f;
        } else e.fill(); else if (_(s)) Qe(e, "fillStyle", s(n)), e.fill(); else if (b(s)) {
            var d = s.image;
            (d = xe(d, null, t, $e, s)) && we(d) && e.drawImage(d, i, r, a, o);
        }
        if (l && h) if (Qe(e, "lineWidth", l), Qe(e, "strokeStyle", h), null != n.strokeOpacity) {
            var f = e.globalAlpha;
            e.globalAlpha = n.strokeOpacity * n.opacity, e.stroke(), e.globalAlpha = f;
        } else e.stroke();
    }
    function $e(t, e) {
        e.image = t;
    }
    function Ke(t, e, n) {
        var i = e.x || 0, r = e.y || 0, a = e.textAlign, o = e.textVerticalAlign;
        if (n) {
            var s = e.textPosition;
            if (s instanceof Array) i = n.x + en(s[0], n.width), r = n.y + en(s[1], n.height); else {
                var l = Ae(s, n, e.textDistance);
                i = l.x, r = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign;
            }
            var h = e.textOffset;
            h && (i += h[0], r += h[1]);
        }
        return {
            baseX: i,
            baseY: r,
            textAlign: a,
            textVerticalAlign: o
        };
    }
    function Qe(t, e, n) {
        return t[e] = hf(t, e, n), t[e];
    }
    function Je(t, e) {
        return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
    }
    function tn(t) {
        return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
    }
    function en(t, e) {
        return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;
    }
    function nn(t, e, n) {
        return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3];
    }
    function rn(t, e) {
        return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding);
    }
    function an(t) {
        t = t || {}, Jd.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
        this.style = new cf(t.style, this), this._rect = null, this.__clipPaths = [];
    }
    function on(t) {
        an.call(this, t);
    }
    function sn(t) {
        return parseInt(t, 10);
    }
    function ln(t) {
        return !!t && (!!t.__builtin__ || "function" == typeof t.resize && "function" == typeof t.refresh);
    }
    function hn(t, e, n) {
        return Pf.copy(t.getBoundingRect()), t.transform && Pf.applyTransform(t.transform), 
        Lf.width = e, Lf.height = n, !Pf.intersect(Lf);
    }
    function un(t, e) {
        if (t == e) return !1;
        if (!t || !e || t.length !== e.length) return !0;
        for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !0;
    }
    function cn(t, e) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e);
        }
    }
    function dn(t, e) {
        var n = document.createElement("div");
        return n.style.cssText = [ "position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0" ].join(";") + ";", 
        n;
    }
    function fn(t) {
        var e = t[1][0] - t[0][0], n = t[1][1] - t[0][1];
        return Math.sqrt(e * e + n * n);
    }
    function pn(t) {
        return [ (t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2 ];
    }
    function gn(t) {
        return "mousewheel" === t && $c.browser.firefox ? "DOMMouseScroll" : t;
    }
    function vn(t, e, n) {
        var i = t._gestureMgr;
        "start" === n && i.clear();
        var r = i.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);
        if ("end" === n && i.clear(), r) {
            var a = r.type;
            e.gestureEvent = a, t.handler.dispatchToElement({
                target: r.target
            }, a, r.event);
        }
    }
    function mn(t) {
        t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function() {
            t._touching = !1;
        }, 700);
    }
    function yn(t) {
        var e = t.pointerType;
        return "pen" === e || "touch" === e;
    }
    function xn(t) {
        function e(t, e) {
            return function() {
                return e._touching ? void 0 : t.apply(e, arguments);
            };
        }
        f(Nf, function(e) {
            t._handlers[e] = m(Wf[e], t);
        }), f(Vf, function(e) {
            t._handlers[e] = m(Wf[e], t);
        }), f(Rf, function(n) {
            t._handlers[n] = e(Wf[n], t);
        });
    }
    function _n(t) {
        function e(e, n) {
            f(e, function(e) {
                st(t, gn(e), n._handlers[e]);
            }, n);
        }
        yd.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new Bf(), 
        this._handlers = {}, xn(this), $c.pointerEventsSupported ? e(Vf, this) : ($c.touchEventsSupported && e(Nf, this), 
        e(Rf, this));
    }
    function wn(t, e) {
        var n = new Yf(jc(), t, e);
        return Xf[n.id] = n, n;
    }
    function bn(t) {
        delete Xf[t];
    }
    function Mn(t) {
        return t instanceof Array ? t : null == t ? [] : [ t ];
    }
    function Sn(t, e, n) {
        if (t) {
            t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
            for (var i = 0, r = n.length; r > i; i++) {
                var a = n[i];
                !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a]);
            }
        }
    }
    function In(t) {
        return !Uf(t) || $f(t) || t instanceof Date ? t : t.value;
    }
    function Tn(t) {
        return Uf(t) && !(t instanceof Array);
    }
    function Cn(t, e) {
        e = (e || []).slice();
        var n = p(t || [], function(t) {
            return {
                exist: t
            };
        });
        return jf(e, function(t, i) {
            if (Uf(t)) {
                for (r = 0; r < n.length; r++) if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, 
                void (e[i] = null);
                for (var r = 0; r < n.length; r++) {
                    var a = n[r].exist;
                    if (!(n[r].option || null != a.id && null != t.id || null == t.name || kn(t) || kn(a) || a.name !== t.name + "")) return n[r].option = t, 
                    void (e[i] = null);
                }
            }
        }), jf(e, function(t) {
            if (Uf(t)) {
                for (var e = 0; e < n.length; e++) {
                    var i = n[e].exist;
                    if (!n[e].option && !kn(i) && null == t.id) {
                        n[e].option = t;
                        break;
                    }
                }
                e >= n.length && n.push({
                    option: t
                });
            }
        }), n;
    }
    function An(t) {
        var e = R();
        jf(t, function(t) {
            var n = t.exist;
            n && e.set(n.id, t);
        }), jf(t, function(t) {
            var n = t.option;
            L(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), 
            n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {});
        }), jf(t, function(t, n) {
            var i = t.exist, r = t.option, a = t.keyInfo;
            if (Uf(r)) {
                if (a.name = null != r.name ? r.name + "" : i ? i.name : Kf + n, i) a.id = i.id; else if (null != r.id) a.id = r.id + ""; else {
                    var o = 0;
                    do {
                        a.id = "\0" + a.name + "\0" + o++;
                    } while (e.get(a.id));
                }
                e.set(a.id, t);
            }
        });
    }
    function Dn(t) {
        var e = t.name;
        return !(!e || !e.indexOf(Kf));
    }
    function kn(t) {
        return Uf(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0");
    }
    function Pn(t, e) {
        return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? x(e.dataIndex) ? p(e.dataIndex, function(e) {
            return t.indexOfRawIndex(e);
        }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? x(e.name) ? p(e.name, function(e) {
            return t.indexOfName(e);
        }) : t.indexOfName(e.name) : void 0;
    }
    function Ln() {
        var t = "__\0ec_inner_" + Jf++ + "_" + Math.random().toFixed(5);
        return function(e) {
            return e[t] || (e[t] = {});
        };
    }
    function On(t, e, n) {
        if (w(e)) {
            var i = {};
            i[e + "Index"] = 0, e = i;
        }
        var r = n && n.defaultMainType;
        !r || zn(e, r + "Index") || zn(e, r + "Id") || zn(e, r + "Name") || (e[r + "Index"] = 0);
        var a = {};
        return jf(e, function(i, r) {
            var i = e[r];
            if ("dataIndex" !== r && "dataIndexInside" !== r) {
                var o = r.match(/^(\w+)(Index|Id|Name)$/) || [], s = o[1], l = (o[2] || "").toLowerCase();
                if (!(!s || !l || null == i || "index" === l && "none" === i || n && n.includeMainTypes && h(n.includeMainTypes, s) < 0)) {
                    var u = {
                        mainType: s
                    };
                    ("index" !== l || "all" !== i) && (u[l] = i);
                    var c = t.queryComponents(u);
                    a[s + "Models"] = c, a[s + "Model"] = c[0];
                }
            } else a[r] = i;
        }), a;
    }
    function zn(t, e) {
        return t && t.hasOwnProperty(e);
    }
    function Bn(t, e, n) {
        t.setAttribute ? t.setAttribute(e, n) : t[e] = n;
    }
    function En(t, e) {
        return t.getAttribute ? t.getAttribute(e) : t[e];
    }
    function Rn(t) {
        return "auto" === t ? $c.domSupported ? "html" : "richText" : t || "html";
    }
    function Nn(t) {
        var e = {
            main: "",
            sub: ""
        };
        return t && (t = t.split(tp), e.main = t[0] || "", e.sub = t[1] || ""), e;
    }
    function Fn(t) {
        L(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');
    }
    function Vn(t) {
        t.$constructor = t, t.extend = function(t) {
            var e = this, n = function() {
                t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments);
            };
            return o(n.prototype, t), n.extend = this.extend, n.superCall = Hn, n.superApply = Gn, 
            u(n, this), n.superClass = e, n;
        };
    }
    function Wn(t) {
        var e = [ "__\0is_clz", np++, Math.random().toFixed(3) ].join("_");
        t.prototype[e] = !0, t.isInstance = function(t) {
            return !(!t || !t[e]);
        };
    }
    function Hn(t, e) {
        var n = k(arguments, 2);
        return this.superClass.prototype[e].apply(t, n);
    }
    function Gn(t, e, n) {
        return this.superClass.prototype[e].apply(t, n);
    }
    function Zn(t, e) {
        function n(t) {
            var e = i[t.main];
            return e && e[ep] || (e = i[t.main] = {}, e[ep] = !0), e;
        }
        e = e || {};
        var i = {};
        if (t.registerClass = function(t, e) {
            return e && (Fn(e), (e = Nn(e)).sub ? e.sub !== ep && (n(e)[e.sub] = t) : i[e.main] = t), 
            t;
        }, t.getClass = function(t, e, n) {
            var r = i[t];
            if (r && r[ep] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
            return r;
        }, t.getClassesByMainType = function(t) {
            t = Nn(t);
            var e = [], n = i[t.main];
            return n && n[ep] ? f(n, function(t, n) {
                n !== ep && e.push(t);
            }) : e.push(n), e;
        }, t.hasClass = function(t) {
            return t = Nn(t), !!i[t.main];
        }, t.getAllClassMainTypes = function() {
            var t = [];
            return f(i, function(e, n) {
                t.push(n);
            }), t;
        }, t.hasSubTypes = function(t) {
            t = Nn(t);
            var e = i[t.main];
            return e && e[ep];
        }, t.parseClassType = Nn, e.registerWhenExtend) {
            var r = t.extend;
            r && (t.extend = function(e) {
                var n = r.call(this, e);
                return t.registerClass(n, e.type);
            });
        }
        return t;
    }
    function Xn(t) {
        return t > -up && up > t;
    }
    function Yn(t) {
        return t > up || -up > t;
    }
    function qn(t, e, n, i, r) {
        var a = 1 - r;
        return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n);
    }
    function jn(t, e, n, i, r) {
        var a = 1 - r;
        return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r);
    }
    function Un(t, e, n, i, r, a) {
        var o = i + 3 * (e - n) - t, s = 3 * (n - 2 * e + t), l = 3 * (e - t), h = t - r, u = s * s - 3 * o * l, c = s * l - 9 * o * h, d = l * l - 3 * s * h, f = 0;
        if (Xn(u) && Xn(c)) Xn(s) ? a[0] = 0 : (S = -l / s) >= 0 && 1 >= S && (a[f++] = S); else {
            var p = c * c - 4 * u * d;
            if (Xn(p)) {
                var g = c / u, v = -g / 2;
                (S = -s / o + g) >= 0 && 1 >= S && (a[f++] = S), v >= 0 && 1 >= v && (a[f++] = v);
            } else if (p > 0) {
                var m = hp(p), y = u * s + 1.5 * o * (-c + m), x = u * s + 1.5 * o * (-c - m);
                (S = (-s - ((y = 0 > y ? -lp(-y, fp) : lp(y, fp)) + (x = 0 > x ? -lp(-x, fp) : lp(x, fp)))) / (3 * o)) >= 0 && 1 >= S && (a[f++] = S);
            } else {
                var _ = (2 * u * s - 3 * o * c) / (2 * hp(u * u * u)), w = Math.acos(_) / 3, b = hp(u), M = Math.cos(w), S = (-s - 2 * b * M) / (3 * o), v = (-s + b * (M + dp * Math.sin(w))) / (3 * o), I = (-s + b * (M - dp * Math.sin(w))) / (3 * o);
                S >= 0 && 1 >= S && (a[f++] = S), v >= 0 && 1 >= v && (a[f++] = v), I >= 0 && 1 >= I && (a[f++] = I);
            }
        }
        return f;
    }
    function $n(t, e, n, i, r) {
        var a = 6 * n - 12 * e + 6 * t, o = 9 * e + 3 * i - 3 * t - 9 * n, s = 3 * e - 3 * t, l = 0;
        if (Xn(o)) Yn(a) && (c = -s / a) >= 0 && 1 >= c && (r[l++] = c); else {
            var h = a * a - 4 * o * s;
            if (Xn(h)) r[0] = -a / (2 * o); else if (h > 0) {
                var u = hp(h), c = (-a + u) / (2 * o), d = (-a - u) / (2 * o);
                c >= 0 && 1 >= c && (r[l++] = c), d >= 0 && 1 >= d && (r[l++] = d);
            }
        }
        return l;
    }
    function Kn(t, e, n, i, r, a) {
        var o = (e - t) * r + t, s = (n - e) * r + e, l = (i - n) * r + n, h = (s - o) * r + o, u = (l - s) * r + s, c = (u - h) * r + h;
        a[0] = t, a[1] = o, a[2] = h, a[3] = c, a[4] = c, a[5] = u, a[6] = l, a[7] = i;
    }
    function Qn(t, e, n, i, r, a, o, s, l, h, u) {
        var c, d, f, p, g, v = .005, m = 1 / 0;
        pp[0] = l, pp[1] = h;
        for (var y = 0; 1 > y; y += .05) gp[0] = qn(t, n, r, o, y), gp[1] = qn(e, i, a, s, y), 
        m > (p = gd(pp, gp)) && (c = y, m = p);
        m = 1 / 0;
        for (var x = 0; 32 > x && !(cp > v); x++) d = c - v, f = c + v, gp[0] = qn(t, n, r, o, d), 
        gp[1] = qn(e, i, a, s, d), p = gd(gp, pp), d >= 0 && m > p ? (c = d, m = p) : (vp[0] = qn(t, n, r, o, f), 
        vp[1] = qn(e, i, a, s, f), g = gd(vp, pp), 1 >= f && m > g ? (c = f, m = g) : v *= .5);
        return u && (u[0] = qn(t, n, r, o, c), u[1] = qn(e, i, a, s, c)), hp(m);
    }
    function Jn(t, e, n, i) {
        var r = 1 - i;
        return r * (r * t + 2 * i * e) + i * i * n;
    }
    function ti(t, e, n, i) {
        return 2 * ((1 - i) * (e - t) + i * (n - e));
    }
    function ei(t, e, n, i, r) {
        var a = t - 2 * e + n, o = 2 * (e - t), s = t - i, l = 0;
        if (Xn(a)) Yn(o) && (c = -s / o) >= 0 && 1 >= c && (r[l++] = c); else {
            var h = o * o - 4 * a * s;
            if (Xn(h)) (c = -o / (2 * a)) >= 0 && 1 >= c && (r[l++] = c); else if (h > 0) {
                var u = hp(h), c = (-o + u) / (2 * a), d = (-o - u) / (2 * a);
                c >= 0 && 1 >= c && (r[l++] = c), d >= 0 && 1 >= d && (r[l++] = d);
            }
        }
        return l;
    }
    function ni(t, e, n) {
        var i = t + n - 2 * e;
        return 0 === i ? .5 : (t - e) / i;
    }
    function ii(t, e, n, i, r) {
        var a = (e - t) * i + t, o = (n - e) * i + e, s = (o - a) * i + a;
        r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = n;
    }
    function ri(t, e, n, i, r, a, o, s, l) {
        var h, u = .005, c = 1 / 0;
        pp[0] = o, pp[1] = s;
        for (var d = 0; 1 > d; d += .05) gp[0] = Jn(t, n, r, d), gp[1] = Jn(e, i, a, d), 
        c > (v = gd(pp, gp)) && (h = d, c = v);
        c = 1 / 0;
        for (var f = 0; 32 > f && !(cp > u); f++) {
            var p = h - u, g = h + u;
            gp[0] = Jn(t, n, r, p), gp[1] = Jn(e, i, a, p);
            var v = gd(gp, pp);
            if (p >= 0 && c > v) h = p, c = v; else {
                vp[0] = Jn(t, n, r, g), vp[1] = Jn(e, i, a, g);
                var m = gd(vp, pp);
                1 >= g && c > m ? (h = g, c = m) : u *= .5;
            }
        }
        return l && (l[0] = Jn(t, n, r, h), l[1] = Jn(e, i, a, h)), hp(c);
    }
    function ai(t, e, n) {
        if (0 !== t.length) {
            var i, r = t[0], a = r[0], o = r[0], s = r[1], l = r[1];
            for (i = 1; i < t.length; i++) r = t[i], a = mp(a, r[0]), o = yp(o, r[0]), s = mp(s, r[1]), 
            l = yp(l, r[1]);
            e[0] = a, e[1] = s, n[0] = o, n[1] = l;
        }
    }
    function oi(t, e, n, i, r, a) {
        r[0] = mp(t, n), r[1] = mp(e, i), a[0] = yp(t, n), a[1] = yp(e, i);
    }
    function si(t, e, n, i, r, a, o, s, l, h) {
        var u, c = $n, d = qn, f = c(t, n, r, o, Ip);
        for (l[0] = 1 / 0, l[1] = 1 / 0, h[0] = -1 / 0, h[1] = -1 / 0, u = 0; f > u; u++) {
            var p = d(t, n, r, o, Ip[u]);
            l[0] = mp(p, l[0]), h[0] = yp(p, h[0]);
        }
        for (f = c(e, i, a, s, Tp), u = 0; f > u; u++) {
            var g = d(e, i, a, s, Tp[u]);
            l[1] = mp(g, l[1]), h[1] = yp(g, h[1]);
        }
        l[0] = mp(t, l[0]), h[0] = yp(t, h[0]), l[0] = mp(o, l[0]), h[0] = yp(o, h[0]), 
        l[1] = mp(e, l[1]), h[1] = yp(e, h[1]), l[1] = mp(s, l[1]), h[1] = yp(s, h[1]);
    }
    function li(t, e, n, i, r, a, o, s) {
        var l = ni, h = Jn, u = yp(mp(l(t, n, r), 1), 0), c = yp(mp(l(e, i, a), 1), 0), d = h(t, n, r, u), f = h(e, i, a, c);
        o[0] = mp(t, r, d), o[1] = mp(e, a, f), s[0] = yp(t, r, d), s[1] = yp(e, a, f);
    }
    function hi(t, e, n, i, r, a, o, s, l) {
        var h = Q, u = J, c = Math.abs(r - a);
        if (1e-4 > c % wp && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, 
        void (l[1] = e + i);
        if (bp[0] = _p(r) * n + t, bp[1] = xp(r) * i + e, Mp[0] = _p(a) * n + t, Mp[1] = xp(a) * i + e, 
        h(s, bp, Mp), u(l, bp, Mp), 0 > (r %= wp) && (r += wp), 0 > (a %= wp) && (a += wp), 
        r > a && !o ? a += wp : a > r && o && (r += wp), o) {
            var d = a;
            a = r, r = d;
        }
        for (var f = 0; a > f; f += Math.PI / 2) f > r && (Sp[0] = _p(f) * n + t, Sp[1] = xp(f) * i + e, 
        h(s, Sp, s), u(l, Sp, l));
    }
    function ui(t, e, n, i, r, a, o) {
        if (0 === r) return !1;
        var s = r, l = 0, h = t;
        if (o > e + s && o > i + s || e - s > o && i - s > o || a > t + s && a > n + s || t - s > a && n - s > a) return !1;
        if (t === n) return Math.abs(a - t) <= s / 2;
        var u = (l = (e - i) / (t - n)) * a - o + (h = (t * i - n * e) / (t - n));
        return s / 2 * s / 2 >= u * u / (l * l + 1);
    }
    function ci(t, e, n, i, r, a, o, s, l, h, u) {
        if (0 === l) return !1;
        var c = l;
        return !(u > e + c && u > i + c && u > a + c && u > s + c || e - c > u && i - c > u && a - c > u && s - c > u || h > t + c && h > n + c && h > r + c && h > o + c || t - c > h && n - c > h && r - c > h && o - c > h) && c / 2 >= Qn(t, e, n, i, r, a, o, s, h, u, null);
    }
    function di(t, e, n, i, r, a, o, s, l) {
        if (0 === o) return !1;
        var h = o;
        return !(l > e + h && l > i + h && l > a + h || e - h > l && i - h > l && a - h > l || s > t + h && s > n + h && s > r + h || t - h > s && n - h > s && r - h > s) && h / 2 >= ri(t, e, n, i, r, a, s, l, null);
    }
    function fi(t) {
        return 0 > (t %= Vp) && (t += Vp), t;
    }
    function pi(t, e, n, i, r, a, o, s, l) {
        if (0 === o) return !1;
        var h = o;
        s -= t, l -= e;
        var u = Math.sqrt(s * s + l * l);
        if (u - h > n || n > u + h) return !1;
        if (Math.abs(i - r) % Wp < 1e-4) return !0;
        if (a) {
            var c = i;
            i = fi(r), r = fi(c);
        } else i = fi(i), r = fi(r);
        i > r && (r += Wp);
        var d = Math.atan2(l, s);
        return 0 > d && (d += Wp), d >= i && r >= d || d + Wp >= i && r >= d + Wp;
    }
    function gi(t, e, n, i, r, a) {
        if (a > e && a > i || e > a && i > a) return 0;
        if (i === e) return 0;
        var o = e > i ? 1 : -1, s = (a - e) / (i - e);
        (1 === s || 0 === s) && (o = e > i ? .5 : -.5);
        var l = s * (n - t) + t;
        return l === r ? 1 / 0 : l > r ? o : 0;
    }
    function vi(t, e) {
        return Math.abs(t - e) < Zp;
    }
    function mi() {
        var t = Yp[0];
        Yp[0] = Yp[1], Yp[1] = t;
    }
    function yi(t, e, n, i, r, a, o, s, l, h) {
        if (h > e && h > i && h > a && h > s || e > h && i > h && a > h && s > h) return 0;
        var u = Un(e, i, a, s, h, Xp);
        if (0 === u) return 0;
        for (var c, d, f = 0, p = -1, g = 0; u > g; g++) {
            var v = Xp[g], m = 0 === v || 1 === v ? .5 : 1;
            l > qn(t, n, r, o, v) || (0 > p && (p = $n(e, i, a, s, Yp), Yp[1] < Yp[0] && p > 1 && mi(), 
            c = qn(e, i, a, s, Yp[0]), p > 1 && (d = qn(e, i, a, s, Yp[1]))), f += 2 == p ? v < Yp[0] ? e > c ? m : -m : v < Yp[1] ? c > d ? m : -m : d > s ? m : -m : v < Yp[0] ? e > c ? m : -m : c > s ? m : -m);
        }
        return f;
    }
    function xi(t, e, n, i, r, a, o, s) {
        if (s > e && s > i && s > a || e > s && i > s && a > s) return 0;
        var l = ei(e, i, a, s, Xp);
        if (0 === l) return 0;
        var h = ni(e, i, a);
        if (h >= 0 && 1 >= h) {
            for (var u = 0, c = Jn(e, i, a, h), d = 0; l > d; d++) {
                f = 0 === Xp[d] || 1 === Xp[d] ? .5 : 1;
                o > (p = Jn(t, n, r, Xp[d])) || (u += Xp[d] < h ? e > c ? f : -f : c > a ? f : -f);
            }
            return u;
        }
        var f = 0 === Xp[0] || 1 === Xp[0] ? .5 : 1, p = Jn(t, n, r, Xp[0]);
        return o > p ? 0 : e > a ? f : -f;
    }
    function _i(t, e, n, i, r, a, o, s) {
        if ((s -= e) > n || -n > s) return 0;
        h = Math.sqrt(n * n - s * s);
        Xp[0] = -h, Xp[1] = h;
        var l = Math.abs(i - r);
        if (1e-4 > l) return 0;
        if (1e-4 > l % Gp) {
            i = 0, r = Gp;
            p = a ? 1 : -1;
            return o >= Xp[0] + t && o <= Xp[1] + t ? p : 0;
        }
        if (a) {
            var h = i;
            i = fi(r), r = fi(h);
        } else i = fi(i), r = fi(r);
        i > r && (r += Gp);
        for (var u = 0, c = 0; 2 > c; c++) {
            var d = Xp[c];
            if (d + t > o) {
                var f = Math.atan2(s, d), p = a ? 1 : -1;
                0 > f && (f = Gp + f), (f >= i && r >= f || f + Gp >= i && r >= f + Gp) && (f > Math.PI / 2 && f < 1.5 * Math.PI && (p = -p), 
                u += p);
            }
        }
        return u;
    }
    function wi(t, e, n, i, r) {
        for (var a = 0, o = 0, s = 0, l = 0, h = 0, u = 0; u < t.length; ) {
            var c = t[u++];
            switch (c === Hp.M && u > 1 && (n || (a += gi(o, s, l, h, i, r))), 1 == u && (o = t[u], 
            s = t[u + 1], l = o, h = s), c) {
              case Hp.M:
                o = l = t[u++], s = h = t[u++];
                break;

              case Hp.L:
                if (n) {
                    if (ui(o, s, t[u], t[u + 1], e, i, r)) return !0;
                } else a += gi(o, s, t[u], t[u + 1], i, r) || 0;
                o = t[u++], s = t[u++];
                break;

              case Hp.C:
                if (n) {
                    if (ci(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, i, r)) return !0;
                } else a += yi(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], i, r) || 0;
                o = t[u++], s = t[u++];
                break;

              case Hp.Q:
                if (n) {
                    if (di(o, s, t[u++], t[u++], t[u], t[u + 1], e, i, r)) return !0;
                } else a += xi(o, s, t[u++], t[u++], t[u], t[u + 1], i, r) || 0;
                o = t[u++], s = t[u++];
                break;

              case Hp.A:
                var d = t[u++], f = t[u++], p = t[u++], g = t[u++], v = t[u++], m = t[u++], y = (t[u++], 
                1 - t[u++]), x = Math.cos(v) * p + d, _ = Math.sin(v) * g + f;
                u > 1 ? a += gi(o, s, x, _, i, r) : (l = x, h = _);
                var w = (i - d) * g / p + d;
                if (n) {
                    if (pi(d, f, g, v, v + m, y, e, w, r)) return !0;
                } else a += _i(d, f, g, v, v + m, y, w, r);
                o = Math.cos(v + m) * p + d, s = Math.sin(v + m) * g + f;
                break;

              case Hp.R:
                l = o = t[u++], h = s = t[u++];
                var x = l + t[u++], _ = h + t[u++];
                if (n) {
                    if (ui(l, h, x, h, e, i, r) || ui(x, h, x, _, e, i, r) || ui(x, _, l, _, e, i, r) || ui(l, _, l, h, e, i, r)) return !0;
                } else a += gi(x, h, x, _, i, r), a += gi(l, _, l, h, i, r);
                break;

              case Hp.Z:
                if (n) {
                    if (ui(o, s, l, h, e, i, r)) return !0;
                } else a += gi(o, s, l, h, i, r);
                o = l, s = h;
            }
        }
        return n || vi(s, h) || (a += gi(o, s, l, h, i, r) || 0), 0 !== a;
    }
    function bi(t, e, n) {
        return wi(t, 0, !1, e, n);
    }
    function Mi(t, e, n, i) {
        return wi(t, e, !0, n, i);
    }
    function Si(t) {
        an.call(this, t), this.path = null;
    }
    function Ii(t, e, n, i, r, a, o, s, l, h, u) {
        var c = l * (rg / 180), d = ig(c) * (t - n) / 2 + ng(c) * (e - i) / 2, f = -1 * ng(c) * (t - n) / 2 + ig(c) * (e - i) / 2, p = d * d / (o * o) + f * f / (s * s);
        p > 1 && (o *= eg(p), s *= eg(p));
        var g = (r === a ? -1 : 1) * eg((o * o * s * s - o * o * f * f - s * s * d * d) / (o * o * f * f + s * s * d * d)) || 0, v = g * o * f / s, m = g * -s * d / o, y = (t + n) / 2 + ig(c) * v - ng(c) * m, x = (e + i) / 2 + ng(c) * v + ig(c) * m, _ = sg([ 1, 0 ], [ (d - v) / o, (f - m) / s ]), w = [ (d - v) / o, (f - m) / s ], b = [ (-1 * d - v) / o, (-1 * f - m) / s ], M = sg(w, b);
        og(w, b) <= -1 && (M = rg), og(w, b) >= 1 && (M = 0), 0 === a && M > 0 && (M -= 2 * rg), 
        1 === a && 0 > M && (M += 2 * rg), u.addData(h, y, x, o, s, _, M, c, a);
    }
    function Ti(t) {
        if (!t) return new Fp();
        for (var e, n = 0, i = 0, r = n, a = i, o = new Fp(), s = Fp.CMD, l = t.match(lg), h = 0; h < l.length; h++) {
            for (var u, c = l[h], d = c.charAt(0), f = c.match(hg) || [], p = f.length, g = 0; p > g; g++) f[g] = parseFloat(f[g]);
            for (var v = 0; p > v; ) {
                var m, y, x, _, w, b, M, S = n, I = i;
                switch (d) {
                  case "l":
                    n += f[v++], i += f[v++], u = s.L, o.addData(u, n, i);
                    break;

                  case "L":
                    n = f[v++], i = f[v++], u = s.L, o.addData(u, n, i);
                    break;

                  case "m":
                    n += f[v++], i += f[v++], u = s.M, o.addData(u, n, i), r = n, a = i, d = "l";
                    break;

                  case "M":
                    n = f[v++], i = f[v++], u = s.M, o.addData(u, n, i), r = n, a = i, d = "L";
                    break;

                  case "h":
                    n += f[v++], u = s.L, o.addData(u, n, i);
                    break;

                  case "H":
                    n = f[v++], u = s.L, o.addData(u, n, i);
                    break;

                  case "v":
                    i += f[v++], u = s.L, o.addData(u, n, i);
                    break;

                  case "V":
                    i = f[v++], u = s.L, o.addData(u, n, i);
                    break;

                  case "C":
                    u = s.C, o.addData(u, f[v++], f[v++], f[v++], f[v++], f[v++], f[v++]), n = f[v - 2], 
                    i = f[v - 1];
                    break;

                  case "c":
                    u = s.C, o.addData(u, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i), 
                    n += f[v - 2], i += f[v - 1];
                    break;

                  case "S":
                    m = n, y = i;
                    var T = o.len(), C = o.data;
                    e === s.C && (m += n - C[T - 4], y += i - C[T - 3]), u = s.C, S = f[v++], I = f[v++], 
                    n = f[v++], i = f[v++], o.addData(u, m, y, S, I, n, i);
                    break;

                  case "s":
                    m = n, y = i;
                    var T = o.len(), C = o.data;
                    e === s.C && (m += n - C[T - 4], y += i - C[T - 3]), u = s.C, S = n + f[v++], I = i + f[v++], 
                    n += f[v++], i += f[v++], o.addData(u, m, y, S, I, n, i);
                    break;

                  case "Q":
                    S = f[v++], I = f[v++], n = f[v++], i = f[v++], u = s.Q, o.addData(u, S, I, n, i);
                    break;

                  case "q":
                    S = f[v++] + n, I = f[v++] + i, n += f[v++], i += f[v++], u = s.Q, o.addData(u, S, I, n, i);
                    break;

                  case "T":
                    m = n, y = i;
                    var T = o.len(), C = o.data;
                    e === s.Q && (m += n - C[T - 4], y += i - C[T - 3]), n = f[v++], i = f[v++], u = s.Q, 
                    o.addData(u, m, y, n, i);
                    break;

                  case "t":
                    m = n, y = i;
                    var T = o.len(), C = o.data;
                    e === s.Q && (m += n - C[T - 4], y += i - C[T - 3]), n += f[v++], i += f[v++], u = s.Q, 
                    o.addData(u, m, y, n, i);
                    break;

                  case "A":
                    x = f[v++], _ = f[v++], w = f[v++], b = f[v++], M = f[v++], Ii(S = n, I = i, n = f[v++], i = f[v++], b, M, x, _, w, u = s.A, o);
                    break;

                  case "a":
                    x = f[v++], _ = f[v++], w = f[v++], b = f[v++], M = f[v++], Ii(S = n, I = i, n += f[v++], i += f[v++], b, M, x, _, w, u = s.A, o);
                }
            }
            ("z" === d || "Z" === d) && (u = s.Z, o.addData(u), n = r, i = a), e = u;
        }
        return o.toStatic(), o;
    }
    function Ci(t, e) {
        var n = Ti(t);
        return e = e || {}, e.buildPath = function(t) {
            if (t.setData) t.setData(n.data), (e = t.getContext()) && t.rebuildPath(e); else {
                var e = t;
                n.rebuildPath(e);
            }
        }, e.applyTransform = function(t) {
            tg(n, t), this.dirty(!0);
        }, e;
    }
    function Ai(t, e) {
        return new Si(Ci(t, e));
    }
    function Di(t, e) {
        return Si.extend(Ci(t, e));
    }
    function ki(t, e, n, i, r, a, o) {
        var s = .5 * (n - t), l = .5 * (i - e);
        return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e;
    }
    function Pi(t, e, n) {
        var i = e.points, r = e.smooth;
        if (i && i.length >= 2) {
            if (r && "spline" !== r) {
                var a = mg(i, r, n, e.smoothConstraint);
                t.moveTo(i[0][0], i[0][1]);
                for (var o = i.length, s = 0; (n ? o : o - 1) > s; s++) {
                    var l = a[2 * s], h = a[2 * s + 1], u = i[(s + 1) % o];
                    t.bezierCurveTo(l[0], l[1], h[0], h[1], u[0], u[1]);
                }
            } else {
                "spline" === r && (i = vg(i, n)), t.moveTo(i[0][0], i[0][1]);
                for (var s = 1, c = i.length; c > s; s++) t.lineTo(i[s][0], i[s][1]);
            }
            n && t.closePath();
        }
    }
    function Li(t, e, n) {
        var i = t.cpx2, r = t.cpy2;
        return null === i || null === r ? [ (n ? jn : qn)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? jn : qn)(t.y1, t.cpy1, t.cpy2, t.y2, e) ] : [ (n ? ti : Jn)(t.x1, t.cpx1, t.x2, e), (n ? ti : Jn)(t.y1, t.cpy1, t.y2, e) ];
    }
    function Oi(t) {
        an.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, 
        this.notClear = !0;
    }
    function zi(t) {
        return Si.extend(t);
    }
    function Bi(t, e, n, i) {
        var r = Ai(t, e);
        return n && ("center" === i && (n = Ri(n, r.getBoundingRect())), Ni(r, n)), r;
    }
    function Ei(t, e, n) {
        var i = new on({
            style: {
                image: t,
                x: e.x,
                y: e.y,
                width: e.width,
                height: e.height
            },
            onload: function(t) {
                if ("center" === n) {
                    var r = {
                        width: t.width,
                        height: t.height
                    };
                    i.setStyle(Ri(e, r));
                }
            }
        });
        return i;
    }
    function Ri(t, e) {
        var n, i = e.width / e.height, r = t.height * i;
        return r <= t.width ? n = t.height : (r = t.width, n = r / i), {
            x: t.x + t.width / 2 - r / 2,
            y: t.y + t.height / 2 - n / 2,
            width: r,
            height: n
        };
    }
    function Ni(t, e) {
        if (t.applyTransform) {
            var n = t.getBoundingRect().calculateTransform(e);
            t.applyTransform(n);
        }
    }
    function Fi(t) {
        var e = t.shape, n = t.style.lineWidth;
        return kg(2 * e.x1) === kg(2 * e.x2) && (e.x1 = e.x2 = Wi(e.x1, n, !0)), kg(2 * e.y1) === kg(2 * e.y2) && (e.y1 = e.y2 = Wi(e.y1, n, !0)), 
        t;
    }
    function Vi(t) {
        var e = t.shape, n = t.style.lineWidth, i = e.x, r = e.y, a = e.width, o = e.height;
        return e.x = Wi(e.x, n, !0), e.y = Wi(e.y, n, !0), e.width = Math.max(Wi(i + a, n, !1) - e.x, 0 === a ? 0 : 1), 
        e.height = Math.max(Wi(r + o, n, !1) - e.y, 0 === o ? 0 : 1), t;
    }
    function Wi(t, e, n) {
        var i = kg(2 * t);
        return (i + kg(e)) % 2 == 0 ? i / 2 : (i + (n ? 1 : -1)) / 2;
    }
    function Hi(t) {
        return null != t && "none" !== t;
    }
    function Gi(t) {
        if ("string" != typeof t) return t;
        var e = zg.get(t);
        return e || (e = Rt(t, -.1), 1e4 > Bg && (zg.set(t, e), Bg++)), e;
    }
    function Zi(t) {
        if (t.__hoverStlDirty) {
            t.__hoverStlDirty = !1;
            var e = t.__hoverStl;
            if (!e) return void (t.__normalStl = null);
            var n = t.__normalStl = {}, i = t.style;
            for (var r in e) null != e[r] && (n[r] = i[r]);
            n.fill = i.fill, n.stroke = i.stroke;
        }
    }
    function Xi(t) {
        var e = t.__hoverStl;
        if (e && !t.__highlighted) {
            var n = t.useHoverLayer;
            t.__highlighted = n ? "layer" : "plain";
            var i = t.__zr;
            if (i || !n) {
                var r = t, a = t.style;
                n && (r = i.addHover(t), a = r.style), cr(a), n || Zi(r), a.extendFrom(e), Yi(a, e, "fill"), 
                Yi(a, e, "stroke"), ur(a), n || (t.dirty(!1), t.z2 += 1);
            }
        }
    }
    function Yi(t, e, n) {
        !Hi(e[n]) && Hi(t[n]) && (t[n] = Gi(t[n]));
    }
    function qi(t) {
        t.__highlighted && (ji(t), t.__highlighted = !1);
    }
    function ji(t) {
        var e = t.__highlighted;
        if ("layer" === e) t.__zr && t.__zr.removeHover(t); else if (e) {
            var n = t.style, i = t.__normalStl;
            i && (cr(n), t.setStyle(i), ur(n), t.z2 -= 1);
        }
    }
    function Ui(t, e) {
        t.isGroup ? t.traverse(function(t) {
            !t.isGroup && e(t);
        }) : e(t);
    }
    function $i(t, e) {
        e = t.__hoverStl = !1 !== e && (e || {}), t.__hoverStlDirty = !0, t.__highlighted && (qi(t), 
        Xi(t));
    }
    function Ki(t) {
        return t && t.__isEmphasisEntered;
    }
    function Qi(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && Ui(this, Xi);
    }
    function Ji(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasisEntered && Ui(this, qi);
    }
    function tr() {
        this.__isEmphasisEntered = !0, Ui(this, Xi);
    }
    function er() {
        this.__isEmphasisEntered = !1, Ui(this, qi);
    }
    function nr(t, e, n) {
        t.isGroup ? t.traverse(function(t) {
            !t.isGroup && $i(t, t.hoverStyle || e);
        }) : $i(t, t.hoverStyle || e), ir(t, n);
    }
    function ir(t, e) {
        var n = !1 === e;
        if (t.__hoverSilentOnTouch = null != e && e.hoverSilentOnTouch, !n || t.__hoverStyleTrigger) {
            var i = n ? "off" : "on";
            t[i]("mouseover", Qi)[i]("mouseout", Ji), t[i]("emphasis", tr)[i]("normal", er), 
            t.__hoverStyleTrigger = !n;
        }
    }
    function rr(t, e, n, i, r, a, o) {
        var s, l = (r = r || Og).labelFetcher, h = r.labelDataIndex, u = r.labelDimIndex, c = n.getShallow("show"), d = i.getShallow("show");
        (c || d) && (l && (s = l.getFormattedLabel(h, "normal", null, u)), null == s && (s = _(r.defaultText) ? r.defaultText(h, r) : r.defaultText));
        var f = c ? s : null, p = d ? A(l ? l.getFormattedLabel(h, "emphasis", null, u) : null, s) : null;
        (null != f || null != p) && (ar(t, n, a, r), ar(e, i, o, r, !0)), t.text = f, e.text = p;
    }
    function ar(t, e, n, i, r) {
        return or(t, e, i, r), n && o(t, n), t;
    }
    function or(t, e, n, i) {
        if ((n = n || Og).isRectText) {
            var r = e.getShallow("position") || (i ? null : "inside");
            "outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");
            var a = e.getShallow("rotate");
            null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = A(e.getShallow("distance"), i ? null : 5);
        }
        var o, s = e.ecModel, l = s && s.option.textStyle, h = sr(e);
        if (h) {
            o = {};
            for (var u in h) if (h.hasOwnProperty(u)) {
                var c = e.getModel([ "rich", u ]);
                lr(o[u] = {}, c, l, n, i);
            }
        }
        return t.rich = o, lr(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), 
        t;
    }
    function sr(t) {
        for (var e; t && t !== t.ecModel; ) {
            var n = (t.option || Og).rich;
            if (n) {
                e = e || {};
                for (var i in n) n.hasOwnProperty(i) && (e[i] = 1);
            }
            t = t.parentModel;
        }
        return e;
    }
    function lr(t, e, n, i, r, a) {
        n = !r && n || Og, t.textFill = hr(e.getShallow("color"), i) || n.color, t.textStroke = hr(e.getShallow("textBorderColor"), i) || n.textBorderColor, 
        t.textStrokeWidth = A(e.getShallow("textBorderWidth"), n.textBorderWidth), t.insideRawTextPosition = t.textPosition, 
        r || (a && (t.insideRollbackOpt = i, ur(t)), null == t.textFill && (t.textFill = i.autoColor)), 
        t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, 
        t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, 
        t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), 
        t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), 
        t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && i.disableBox || (t.textBackgroundColor = hr(e.getShallow("backgroundColor"), i), 
        t.textPadding = e.getShallow("padding"), t.textBorderColor = hr(e.getShallow("borderColor"), i), 
        t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), 
        t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), 
        t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), 
        t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, 
        t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, 
        t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY;
    }
    function hr(t, e) {
        return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null;
    }
    function ur(t) {
        var e = t.insideRollbackOpt;
        if (e && null == t.textFill) {
            var n, i = e.useInsideStyle, r = t.insideRawTextPosition, a = e.autoColor;
            !1 !== i && (!0 === i || e.isRectText && r && "string" == typeof r && r.indexOf("inside") >= 0) ? (n = {
                textFill: null,
                textStroke: t.textStroke,
                textStrokeWidth: t.textStrokeWidth
            }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = a, null == t.textStrokeWidth && (t.textStrokeWidth = 2))) : null != a && (n = {
                textFill: null
            }, t.textFill = a), n && (t.insideRollback = n);
        }
    }
    function cr(t) {
        var e = t.insideRollback;
        e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, 
        t.insideRollback = null);
    }
    function dr(t, e) {
        var n = e || e.getModel("textStyle");
        return O([ t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif" ].join(" "));
    }
    function fr(t, e, n, i, r, a) {
        if ("function" == typeof r && (a = r, r = null), i && i.isAnimationEnabled()) {
            var o = t ? "Update" : "", s = i.getShallow("animationDuration" + o), l = i.getShallow("animationEasing" + o), h = i.getShallow("animationDelay" + o);
            "function" == typeof h && (h = h(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), 
            "function" == typeof s && (s = s(r)), s > 0 ? e.animateTo(n, s, h || 0, l, a, !!a) : (e.stopAnimation(), 
            e.attr(n), a && a());
        } else e.stopAnimation(), e.attr(n), a && a();
    }
    function pr(t, e, n, i, r) {
        fr(!0, t, e, n, i, r);
    }
    function gr(t, e, n, i, r) {
        fr(!1, t, e, n, i, r);
    }
    function vr(t, e) {
        for (var n = gt([]); t && t !== e; ) mt(n, t.getLocalTransform(), n), t = t.parent;
        return n;
    }
    function mr(t, e, n) {
        return e && !d(e) && (e = Dd.getLocalTransform(e)), n && (e = wt([], e)), K([], t, e);
    }
    function yr(t, e, n) {
        var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]), r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]), a = [ "left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0 ];
        return a = mr(a, e, n), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
    }
    function xr(t, e, n) {
        function i(t) {
            var e = {
                position: W(t.position),
                rotation: t.rotation
            };
            return t.shape && (e.shape = o({}, t.shape)), e;
        }
        if (t && e) {
            var r = function(t) {
                var e = {};
                return t.traverse(function(t) {
                    !t.isGroup && t.anid && (e[t.anid] = t);
                }), e;
            }(t);
            e.traverse(function(t) {
                if (!t.isGroup && t.anid) {
                    var e = r[t.anid];
                    if (e) {
                        var a = i(t);
                        t.attr(i(e)), pr(t, a, n, t.dataIndex);
                    }
                }
            });
        }
    }
    function _r(t, e, n) {
        var i = (e = o({
            rectHover: !0
        }, e)).style = {
            strokeNoScale: !0
        };
        return n = n || {
            x: -1,
            y: -1,
            width: 2,
            height: 2
        }, t ? 0 === t.indexOf("image://") ? (i.image = t.slice(8), s(i, n), new on(e)) : Bi(t.replace("path://", ""), e, n, "center") : void 0;
    }
    function wr(t, e, n) {
        this.parentModel = e, this.ecModel = n, this.option = t;
    }
    function br(e, n, i) {
        for (var r = 0; r < n.length && (!n[r] || null != (e = e && "object" == (void 0 === e ? "undefined" : t(e)) ? e[n[r]] : null)); r++) ;
        return null == e && i && (e = i.get(n)), e;
    }
    function Mr(t, e) {
        var n = Hg(t).getParent;
        return n ? n.call(t, e) : t.parentModel;
    }
    function Sr(t) {
        return [ t || "", Gg++, Math.random().toFixed(5) ].join("_");
    }
    function Ir(t) {
        return t.replace(/^\s+/, "").replace(/\s+$/, "");
    }
    function Tr(t, e, n, i) {
        var r = e[1] - e[0], a = n[1] - n[0];
        if (0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;
        if (i) if (r > 0) {
            if (t <= e[0]) return n[0];
            if (t >= e[1]) return n[1];
        } else {
            if (t >= e[0]) return n[0];
            if (t <= e[1]) return n[1];
        } else {
            if (t === e[0]) return n[0];
            if (t === e[1]) return n[1];
        }
        return (t - e[0]) / r * a + n[0];
    }
    function Cr(t, e) {
        switch (t) {
          case "center":
          case "middle":
            t = "50%";
            break;

          case "left":
          case "top":
            t = "0%";
            break;

          case "right":
          case "bottom":
            t = "100%";
        }
        return "string" == typeof t ? Ir(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t;
    }
    function Ar(t, e, n) {
        return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), 
        n ? t : +t;
    }
    function Dr(t) {
        return t.sort(function(t, e) {
            return t - e;
        }), t;
    }
    function kr(t) {
        var e = t.toString(), n = e.indexOf("e");
        if (n > 0) {
            var i = +e.slice(n + 1);
            return 0 > i ? -i : 0;
        }
        var r = e.indexOf(".");
        return 0 > r ? 0 : e.length - 1 - r;
    }
    function Pr(t, e) {
        var n = Math.log, i = Math.LN10, r = Math.floor(n(t[1] - t[0]) / i), a = Math.round(n(Math.abs(e[1] - e[0])) / i), o = Math.min(Math.max(-r + a, 0), 20);
        return isFinite(o) ? o : 20;
    }
    function Lr(t, e, n) {
        if (!t[e]) return 0;
        var i = g(t, function(t, e) {
            return t + (isNaN(e) ? 0 : e);
        }, 0);
        if (0 === i) return 0;
        for (var r = Math.pow(10, n), a = p(t, function(t) {
            return (isNaN(t) ? 0 : t) / i * r * 100;
        }), o = 100 * r, s = p(a, function(t) {
            return Math.floor(t);
        }), l = g(s, function(t, e) {
            return t + e;
        }, 0), h = p(a, function(t, e) {
            return t - s[e];
        }); o > l; ) {
            for (var u = Number.NEGATIVE_INFINITY, c = null, d = 0, f = h.length; f > d; ++d) h[d] > u && (u = h[d], 
            c = d);
            ++s[c], h[c] = 0, ++l;
        }
        return s[e] / r;
    }
    function Or(t) {
        var e = 2 * Math.PI;
        return (t % e + e) % e;
    }
    function zr(t) {
        return t > -Zg && Zg > t;
    }
    function Br(t) {
        if (t instanceof Date) return t;
        if ("string" == typeof t) {
            var e = Xg.exec(t);
            if (!e) return new Date(NaN);
            if (e[8]) {
                var n = +e[4] || 0;
                return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0));
            }
            return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0);
        }
        return new Date(null == t ? NaN : Math.round(t));
    }
    function Er(t) {
        return Math.pow(10, Rr(t));
    }
    function Rr(t) {
        return Math.floor(Math.log(t) / Math.LN10);
    }
    function Nr(t, e) {
        var n, i = Rr(t), r = Math.pow(10, i), a = t / r;
        return n = e ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10, 
        t = n * r, i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t;
    }
    function Fr(t) {
        return isNaN(t) ? "-" : (t = (t + "").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
    }
    function Vr(t, e) {
        return t = (t || "").toLowerCase().replace(/-(.)/g, function(t, e) {
            return e.toUpperCase();
        }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t;
    }
    function Wr(t) {
        return null == t ? "" : (t + "").replace(jg, function(t, e) {
            return Ug[e];
        });
    }
    function Hr(t, e, n) {
        x(e) || (e = [ e ]);
        var i = e.length;
        if (!i) return "";
        for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
            var o = $g[a];
            t = t.replace(Kg(o), Kg(o, 0));
        }
        for (var s = 0; i > s; s++) for (var l = 0; l < r.length; l++) {
            var h = e[s][r[l]];
            t = t.replace(Kg($g[l], s), n ? Wr(h) : h);
        }
        return t;
    }
    function Gr(t, e) {
        var n = (t = w(t) ? {
            color: t,
            extraCssText: e
        } : t || {}).color, i = t.type, e = t.extraCssText, r = t.renderMode || "html", a = t.markerId || "X";
        return n ? "html" === r ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + Wr(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + Wr(n) + ";" + (e || "") + '"></span>' : {
            renderMode: r,
            content: "{marker" + a + "|}  ",
            style: {
                color: n
            }
        } : "";
    }
    function Zr(t, e) {
        return t += "", "0000".substr(0, e - t.length) + t;
    }
    function Xr(t, e, n) {
        ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
        var i = Br(e), r = n ? "UTC" : "", a = i["get" + r + "FullYear"](), o = i["get" + r + "Month"]() + 1, s = i["get" + r + "Date"](), l = i["get" + r + "Hours"](), h = i["get" + r + "Minutes"](), u = i["get" + r + "Seconds"](), c = i["get" + r + "Milliseconds"]();
        return t = t.replace("MM", Zr(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", Zr(s, 2)).replace("d", s).replace("hh", Zr(l, 2)).replace("h", l).replace("mm", Zr(h, 2)).replace("m", h).replace("ss", Zr(u, 2)).replace("s", u).replace("SSS", Zr(c, 3));
    }
    function Yr(t) {
        return t ? t.charAt(0).toUpperCase() + t.substr(1) : t;
    }
    function qr(t, e, n, i, r) {
        var a = 0, o = 0;
        null == i && (i = 1 / 0), null == r && (r = 1 / 0);
        var s = 0;
        e.eachChild(function(l, h) {
            var u, c, d = l.position, f = l.getBoundingRect(), p = e.childAt(h + 1), g = p && p.getBoundingRect();
            if ("horizontal" === t) {
                var v = f.width + (g ? -g.x + f.x : 0);
                (u = a + v) > i || l.newline ? (a = 0, u = v, o += s + n, s = f.height) : s = Math.max(s, f.height);
            } else {
                var m = f.height + (g ? -g.y + f.y : 0);
                (c = o + m) > r || l.newline ? (a += s + n, o = 0, c = m, s = f.width) : s = Math.max(s, f.width);
            }
            l.newline || (d[0] = a, d[1] = o, "horizontal" === t ? a = u + n : o = c + n);
        });
    }
    function jr(t, e, n) {
        n = qg(n || 0);
        var i = e.width, r = e.height, a = Cr(t.left, i), o = Cr(t.top, r), s = Cr(t.right, i), l = Cr(t.bottom, r), h = Cr(t.width, i), u = Cr(t.height, r), c = n[2] + n[0], d = n[1] + n[3], f = t.aspect;
        switch (isNaN(h) && (h = i - s - d - a), isNaN(u) && (u = r - l - c - o), null != f && (isNaN(h) && isNaN(u) && (f > i / r ? h = .8 * i : u = .8 * r), 
        isNaN(h) && (h = f * u), isNaN(u) && (u = h / f)), isNaN(a) && (a = i - s - h - d), 
        isNaN(o) && (o = r - l - u - c), t.left || t.right) {
          case "center":
            a = i / 2 - h / 2 - n[3];
            break;

          case "right":
            a = i - h - d;
        }
        switch (t.top || t.bottom) {
          case "middle":
          case "center":
            o = r / 2 - u / 2 - n[0];
            break;

          case "bottom":
            o = r - u - c;
        }
        a = a || 0, o = o || 0, isNaN(h) && (h = i - d - a - (s || 0)), isNaN(u) && (u = r - c - o - (l || 0));
        var p = new re(a + n[3], o + n[0], h, u);
        return p.margin = n, p;
    }
    function Ur(t, e, n) {
        function i(n, i) {
            var o = {}, l = 0, h = {}, u = 0;
            if (ev(n, function(e) {
                h[e] = t[e];
            }), ev(n, function(t) {
                r(e, t) && (o[t] = h[t] = e[t]), a(o, t) && l++, a(h, t) && u++;
            }), s[i]) return a(e, n[1]) ? h[n[2]] = null : a(e, n[2]) && (h[n[1]] = null), h;
            if (2 !== u && l) {
                if (l >= 2) return o;
                for (var c = 0; c < n.length; c++) {
                    var d = n[c];
                    if (!r(o, d) && r(t, d)) {
                        o[d] = t[d];
                        break;
                    }
                }
                return o;
            }
            return h;
        }
        function r(t, e) {
            return t.hasOwnProperty(e);
        }
        function a(t, e) {
            return null != t[e] && "auto" !== t[e];
        }
        function o(t, e, n) {
            ev(t, function(t) {
                e[t] = n[t];
            });
        }
        !b(n) && (n = {});
        var s = n.ignoreSize;
        !x(s) && (s = [ s, s ]);
        var l = i(iv[0], 0), h = i(iv[1], 1);
        o(iv[0], t, l), o(iv[1], t, h);
    }
    function $r(t) {
        return Kr({}, t);
    }
    function Kr(t, e) {
        return e && t && ev(nv, function(n) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
        }), t;
    }
    function Qr(t, e) {
        for (var n = t.length, i = 0; n > i; i++) if (t[i].length > e) return t[i];
        return t[n - 1];
    }
    function Jr(t) {
        var e = t.get("coordinateSystem"), n = {
            coordSysName: e,
            coordSysDims: [],
            axisMap: R(),
            categoryAxisMap: R()
        }, i = dv[e];
        return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0;
    }
    function ta(t) {
        return "category" === t.get("type");
    }
    function ea(t) {
        this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === vv ? {} : []), 
        this.sourceFormat = t.sourceFormat || mv, this.seriesLayoutBy = t.seriesLayoutBy || xv, 
        this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && R(t.encodeDefine), 
        this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount;
    }
    function na(t) {
        var e = t.option.source, n = mv;
        if (S(e)) n = yv; else if (x(e)) {
            0 === e.length && (n = pv);
            for (var i = 0, r = e.length; r > i; i++) {
                var a = e[i];
                if (null != a) {
                    if (x(a)) {
                        n = pv;
                        break;
                    }
                    if (b(a)) {
                        n = gv;
                        break;
                    }
                }
            }
        } else if (b(e)) {
            for (var o in e) if (e.hasOwnProperty(o) && d(e[o])) {
                n = vv;
                break;
            }
        } else if (null != e) throw new Error("Invalid data");
        wv(t).sourceFormat = n;
    }
    function ia(t) {
        return wv(t).source;
    }
    function ra(t) {
        wv(t).datasetMap = R();
    }
    function aa(t) {
        var e = t.option, n = e.data, i = S(n) ? yv : fv, r = !1, a = e.seriesLayoutBy, o = e.sourceHeader, s = e.dimensions, l = ca(t);
        if (l) {
            var h = l.option;
            n = h.source, i = wv(l).sourceFormat, r = !0, a = a || h.seriesLayoutBy, null == o && (o = h.sourceHeader), 
            s = s || h.dimensions;
        }
        var u = oa(n, i, a, o, s), c = e.encode;
        !c && l && (c = ua(t, l, n, i, a, u)), wv(t).source = new ea({
            data: n,
            fromDataset: r,
            seriesLayoutBy: a,
            sourceFormat: i,
            dimensionsDefine: u.dimensionsDefine,
            startIndex: u.startIndex,
            dimensionsDetectCount: u.dimensionsDetectCount,
            encodeDefine: c
        });
    }
    function oa(t, e, n, i, r) {
        if (!t) return {
            dimensionsDefine: sa(r)
        };
        var a, o, s;
        if (e === pv) "auto" === i || null == i ? la(function(t) {
            null != t && "-" !== t && (w(t) ? null == o && (o = 1) : o = 0);
        }, n, t, 10) : o = i ? 1 : 0, r || 1 !== o || (r = [], la(function(t, e) {
            r[e] = null != t ? t : "";
        }, n, t)), a = r ? r.length : n === _v ? t.length : t[0] ? t[0].length : null; else if (e === gv) r || (r = ha(t), 
        s = !0); else if (e === vv) r || (r = [], s = !0, f(t, function(t, e) {
            r.push(e);
        })); else if (e === fv) {
            var l = In(t[0]);
            a = x(l) && l.length || 1;
        }
        var h;
        return s && f(r, function(t, e) {
            "name" === (b(t) ? t.name : t) && (h = e);
        }), {
            startIndex: o,
            dimensionsDefine: sa(r),
            dimensionsDetectCount: a,
            potentialNameDimIndex: h
        };
    }
    function sa(t) {
        if (t) {
            var e = R();
            return p(t, function(t) {
                if (null == (t = o({}, b(t) ? t : {
                    name: t
                })).name) return t;
                t.name += "", null == t.displayName && (t.displayName = t.name);
                var n = e.get(t.name);
                return n ? t.name += "-" + n.count++ : e.set(t.name, {
                    count: 1
                }), t;
            });
        }
    }
    function la(t, e, n, i) {
        if (null == i && (i = 1 / 0), e === _v) for (a = 0; a < n.length && i > a; a++) t(n[a] ? n[a][0] : null, a); else for (var r = n[0] || [], a = 0; a < r.length && i > a; a++) t(r[a], a);
    }
    function ha(t) {
        for (var e, n = 0; n < t.length && !(e = t[n++]); ) ;
        if (e) {
            var i = [];
            return f(e, function(t, e) {
                i.push(e);
            }), i;
        }
    }
    function ua(t, e, n, i, r, a) {
        var o = Jr(t), s = {}, l = [], h = [], u = t.subType, c = R([ "pie", "map", "funnel" ]), d = R([ "line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot" ]);
        if (o && null != d.get(u)) {
            var p = t.ecModel, g = wv(p).datasetMap, v = e.uid + "_" + r, m = g.get(v) || g.set(v, {
                categoryWayDim: 1,
                valueWayDim: 0
            });
            f(o.coordSysDims, function(t) {
                if (null == o.firstCategoryDimIndex) {
                    e = m.valueWayDim++;
                    s[t] = e, h.push(e);
                } else if (o.categoryAxisMap.get(t)) s[t] = 0, l.push(0); else {
                    var e = m.categoryWayDim++;
                    s[t] = e, h.push(e);
                }
            });
        } else if (null != c.get(u)) {
            for (var y, x = 0; 5 > x && null == y; x++) fa(n, i, r, a.dimensionsDefine, a.startIndex, x) || (y = x);
            if (null != y) {
                s.value = y;
                var _ = a.potentialNameDimIndex || Math.max(y - 1, 0);
                h.push(_), l.push(_);
            }
        }
        return l.length && (s.itemName = l), h.length && (s.seriesName = h), s;
    }
    function ca(t) {
        var e = t.option;
        return e.data ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0);
    }
    function da(t, e) {
        return fa(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
    }
    function fa(t, e, n, i, r, a) {
        function o(t) {
            return (null == t || !isFinite(t) || "" === t) && (!(!w(t) || "-" === t) || void 0);
        }
        var s;
        if (S(t)) return !1;
        var l;
        if (i && (l = i[a], l = b(l) ? l.name : l), e === pv) if (n === _v) {
            for (var h = t[a], u = 0; u < (h || []).length && 5 > u; u++) if (null != (s = o(h[r + u]))) return s;
        } else for (u = 0; u < t.length && 5 > u; u++) {
            var c = t[r + u];
            if (c && null != (s = o(c[a]))) return s;
        } else if (e === gv) {
            if (!l) return;
            for (u = 0; u < t.length && 5 > u; u++) if ((d = t[u]) && null != (s = o(d[l]))) return s;
        } else if (e === vv) {
            if (!l) return;
            if (!(h = t[l]) || S(h)) return !1;
            for (u = 0; u < h.length && 5 > u; u++) if (null != (s = o(h[u]))) return s;
        } else if (e === fv) for (u = 0; u < t.length && 5 > u; u++) {
            var d = t[u], f = In(d);
            if (!x(f)) return !1;
            if (null != (s = o(f[a]))) return s;
        }
        return !1;
    }
    function pa(t, e) {
        if (e) {
            var n = e.seiresIndex, i = e.seriesId, r = e.seriesName;
            return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r;
        }
    }
    function ga(e, n) {
        var a = e.color && !e.colorLayer;
        f(n, function(n, o) {
            "colorLayer" === o && a || sv.hasClass(o) || ("object" == (void 0 === n ? "undefined" : t(n)) ? e[o] = e[o] ? r(e[o], n, !1) : i(n) : null == e[o] && (e[o] = n));
        });
    }
    function va(t) {
        t = t, this.option = {}, this.option[bv] = 1, this._componentsMap = R({
            series: []
        }), this._seriesIndices, this._seriesIndicesMap, ga(t, this._theme.option), r(t, hv, !1), 
        this.mergeOption(t);
    }
    function ma(t, e) {
        x(e) || (e = e ? [ e ] : []);
        var n = {};
        return f(e, function(e) {
            n[e] = (t.get(e) || []).slice();
        }), n;
    }
    function ya(t, e, n) {
        return e.type ? e.type : n ? n.subType : sv.determineSubType(t, e);
    }
    function xa(t, e) {
        t._seriesIndicesMap = R(t._seriesIndices = p(e, function(t) {
            return t.componentIndex;
        }) || []);
    }
    function _a(t, e) {
        return e.hasOwnProperty("subType") ? v(t, function(t) {
            return t.subType === e.subType;
        }) : t;
    }
    function wa(t) {
        f(Sv, function(e) {
            this[e] = m(t[e], t);
        }, this);
    }
    function ba() {
        this._coordinateSystems = [];
    }
    function Ma(t) {
        this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, 
        this._currentMediaIndices = [], this._optionBackup, this._newBaseOption;
    }
    function Sa(t, e, n) {
        var i, r, a = [], o = [], s = t.timeline;
        if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), 
        t.media) {
            r = r || {};
            var l = t.media;
            Tv(l, function(t) {
                t && t.option && (t.query ? o.push(t) : i || (i = t));
            });
        }
        return r || (r = t), r.timeline || (r.timeline = s), Tv([ r ].concat(a).concat(p(o, function(t) {
            return t.option;
        })), function(t) {
            Tv(e, function(e) {
                e(t, n);
            });
        }), {
            baseOption: r,
            timelineOptions: a,
            mediaDefault: i,
            mediaList: o
        };
    }
    function Ia(t, e, n) {
        var i = {
            width: e,
            height: n,
            aspectratio: e / n
        }, r = !0;
        return f(t, function(t, e) {
            var n = e.match(kv);
            if (n && n[1] && n[2]) {
                var a = n[1], o = n[2].toLowerCase();
                Ta(i[o], t, a) || (r = !1);
            }
        }), r;
    }
    function Ta(t, e, n) {
        return "min" === n ? t >= e : "max" === n ? e >= t : t === e;
    }
    function Ca(t, e) {
        return t.join(",") === e.join(",");
    }
    function Aa(t, e) {
        Tv(e = e || {}, function(e, n) {
            if (null != e) {
                var i = t[n];
                if (sv.hasClass(n)) {
                    e = Mn(e);
                    var r = Cn(i = Mn(i), e);
                    t[n] = Av(r, function(t) {
                        return t.option && t.exist ? Dv(t.exist, t.option, !0) : t.exist || t.option;
                    });
                } else t[n] = Dv(i, e, !0);
            }
        });
    }
    function Da(t) {
        var e = t && t.itemStyle;
        if (e) for (var n = 0, i = Ov.length; i > n; n++) {
            var a = Ov[n], o = e.normal, s = e.emphasis;
            o && o[a] && (t[a] = t[a] || {}, t[a].normal ? r(t[a].normal, o[a]) : t[a].normal = o[a], 
            o[a] = null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? r(t[a].emphasis, s[a]) : t[a].emphasis = s[a], 
            s[a] = null);
        }
    }
    function ka(t, e, n) {
        if (t && t[e] && (t[e].normal || t[e].emphasis)) {
            var i = t[e].normal, r = t[e].emphasis;
            i && (n ? (t[e].normal = t[e].emphasis = null, s(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, 
            t.emphasis[e] = r);
        }
    }
    function Pa(t) {
        ka(t, "itemStyle"), ka(t, "lineStyle"), ka(t, "areaStyle"), ka(t, "label"), ka(t, "labelLine"), 
        ka(t, "upperLabel"), ka(t, "edgeLabel");
    }
    function La(t, e) {
        var n = Lv(t) && t[e], i = Lv(n) && n.textStyle;
        if (i) for (var r = 0, a = Qf.length; a > r; r++) {
            var e = Qf[r];
            i.hasOwnProperty(e) && (n[e] = i[e]);
        }
    }
    function Oa(t) {
        t && (Pa(t), La(t, "label"), t.emphasis && La(t.emphasis, "label"));
    }
    function za(t) {
        if (Lv(t)) {
            Da(t), Pa(t), La(t, "label"), La(t, "upperLabel"), La(t, "edgeLabel"), t.emphasis && (La(t.emphasis, "label"), 
            La(t.emphasis, "upperLabel"), La(t.emphasis, "edgeLabel"));
            var e = t.markPoint;
            e && (Da(e), Oa(e));
            var n = t.markLine;
            n && (Da(n), Oa(n));
            var i = t.markArea;
            i && Oa(i);
            var r = t.data;
            if ("graph" === t.type) {
                r = r || t.nodes;
                var a = t.links || t.edges;
                if (a && !S(a)) for (s = 0; s < a.length; s++) Oa(a[s]);
                f(t.categories, function(t) {
                    Pa(t);
                });
            }
            if (r && !S(r)) for (s = 0; s < r.length; s++) Oa(r[s]);
            if ((e = t.markPoint) && e.data) for (var o = e.data, s = 0; s < o.length; s++) Oa(o[s]);
            if ((n = t.markLine) && n.data) for (var l = n.data, s = 0; s < l.length; s++) x(l[s]) ? (Oa(l[s][0]), 
            Oa(l[s][1])) : Oa(l[s]);
            "gauge" === t.type ? (La(t, "axisLabel"), La(t, "title"), La(t, "detail")) : "treemap" === t.type ? (ka(t.breadcrumb, "itemStyle"), 
            f(t.levels, function(t) {
                Pa(t);
            })) : "tree" === t.type && Pa(t.leaves);
        }
    }
    function Ba(t) {
        return x(t) ? t : t ? [ t ] : [];
    }
    function Ea(t) {
        return (x(t) ? t[0] : t) || {};
    }
    function Ra(t, e) {
        e = e.split(",");
        for (var n = t, i = 0; i < e.length && null != (n = n && n[e[i]]); i++) ;
        return n;
    }
    function Na(t, e, n, i) {
        e = e.split(",");
        for (var r, a = t, o = 0; o < e.length - 1; o++) null == a[r = e[o]] && (a[r] = {}), 
        a = a[r];
        (i || null == a[e[o]]) && (a[e[o]] = n);
    }
    function Fa(t) {
        f(Bv, function(e) {
            e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
        });
    }
    function Va(t) {
        f(t, function(e, n) {
            var i = [], r = [ NaN, NaN ], a = [ e.stackResultDimension, e.stackedOverDimension ], o = e.data, s = e.isStackedByIndex, l = o.map(a, function(a, l, h) {
                var u = o.get(e.stackedDimension, h);
                if (isNaN(u)) return r;
                var c, d;
                s ? d = o.getRawIndex(h) : c = o.get(e.stackedByDimension, h);
                for (var f = NaN, p = n - 1; p >= 0; p--) {
                    var g = t[p];
                    if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
                        var v = g.data.getByRawIndex(g.stackResultDimension, d);
                        if (u >= 0 && v > 0 || 0 >= u && 0 > v) {
                            u += v, f = v;
                            break;
                        }
                    }
                }
                return i[0] = u, i[1] = f, i;
            });
            o.hostModel.setData(l), e.data = l;
        });
    }
    function Wa(t, e) {
        ea.isInstance(t) || (t = ea.seriesDataToSource(t)), this._source = t;
        var n = this._data = t.data, i = t.sourceFormat;
        i === yv && (this._offset = 0, this._dimSize = e, this._data = n), o(this, Fv[i === pv ? i + "_" + t.seriesLayoutBy : i]);
    }
    function Ha() {
        return this._data.length;
    }
    function Ga(t) {
        return this._data[t];
    }
    function Za(t) {
        for (var e = 0; e < t.length; e++) this._data.push(t[e]);
    }
    function Xa(t, e, n) {
        return null != n ? t[n] : t;
    }
    function Ya(t, e, n, i) {
        return qa(t[i], this._dimensionInfos[e]);
    }
    function qa(t, e) {
        var n = e && e.type;
        if ("ordinal" === n) {
            var i = e && e.ordinalMeta;
            return i ? i.parseAndCollect(t) : t;
        }
        return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +Br(t)), 
        null == t || "" === t ? NaN : +t;
    }
    function ja(t, e, n) {
        if (t) {
            var i = t.getRawDataItem(e);
            if (null != i) {
                var r, a, o = t.getProvider().getSource().sourceFormat, s = t.getDimensionInfo(n);
                return s && (r = s.name, a = s.index), Vv[o](i, e, a, r);
            }
        }
    }
    function Ua(t, e, n) {
        if (t) {
            var i = t.getProvider().getSource().sourceFormat;
            if (i === fv || i === gv) {
                var r = t.getRawDataItem(e);
                return i !== fv || b(r) || (r = null), r ? r[n] : void 0;
            }
        }
    }
    function $a(t) {
        return new Ka(t);
    }
    function Ka(t) {
        t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, 
        this._onDirty = t.onDirty, this._dirty = !0, this.context;
    }
    function Qa(t, e, n, i, r, a) {
        Xv.reset(n, i, r, a), t._callingProgress = e, t._callingProgress({
            start: n,
            end: i,
            count: i - n,
            next: Xv.next
        }, t.context);
    }
    function Ja(t, e) {
        t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;
        var n, i;
        !e && t._reset && ((n = t._reset(t.context)) && n.progress && (i = n.forceFirstProgress, 
        n = n.progress), x(n) && !n.length && (n = null)), t._progress = n, t._modBy = t._modDataCount = null;
        var r = t._downstream;
        return r && r.dirty(), i;
    }
    function to(t) {
        var e = t.name;
        Dn(t) || (t.name = eo(t) || e);
    }
    function eo(t) {
        var e = t.getRawData(), n = [];
        return f(e.mapDimension("seriesName", !0), function(t) {
            var i = e.getDimensionInfo(t);
            i.displayName && n.push(i.displayName);
        }), n.join(" ");
    }
    function no(t) {
        return t.model.getRawData().count();
    }
    function io(t) {
        var e = t.model;
        return e.setData(e.getRawData().cloneShallow()), ro;
    }
    function ro(t, e) {
        t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
    }
    function ao(t, e) {
        f(t.CHANGABLE_METHODS, function(n) {
            t.wrapMethod(n, y(oo, e));
        });
    }
    function oo(t) {
        var e = so(t);
        e && e.setOutputEnd(this.count());
    }
    function so(t) {
        var e = (t.ecModel || {}).scheduler, n = e && e.getPipeline(t.uid);
        if (n) {
            var i = n.currentTask;
            if (i) {
                var r = i.agentStubMap;
                r && (i = r.get(t.uid));
            }
            return i;
        }
    }
    function lo() {
        this.group = new rf(), this.uid = Sr("viewChart"), this.renderTask = $a({
            plan: co,
            reset: fo
        }), this.renderTask.context = {
            view: this
        };
    }
    function ho(t, e) {
        if (t && (t.trigger(e), "group" === t.type)) for (var n = 0; n < t.childCount(); n++) ho(t.childAt(n), e);
    }
    function uo(t, e, n) {
        var i = Pn(t, e);
        null != i ? f(Mn(i), function(e) {
            ho(t.getItemGraphicEl(e), n);
        }) : t.eachItemGraphicEl(function(t) {
            ho(t, n);
        });
    }
    function co(t) {
        return Qv(t.model);
    }
    function fo(t) {
        var e = t.model, n = t.ecModel, i = t.api, r = t.payload, a = e.pipelineContext.progressiveRender, o = t.view, s = r && Kv(r).updateMethod, l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
        return "render" !== l && o[l](e, n, i, r), tm[l];
    }
    function po(t, e, n) {
        function i() {
            u = new Date().getTime(), c = null, t.apply(o, s || []);
        }
        var r, a, o, s, l, h = 0, u = 0, c = null;
        e = e || 0;
        var d = function() {
            r = new Date().getTime(), o = this, s = arguments;
            var t = l || e, d = l || n;
            l = null, a = r - (d ? h : u) - t, clearTimeout(c), d ? c = setTimeout(i, t) : a >= 0 ? i() : c = setTimeout(i, -a), 
            h = r;
        };
        return d.clear = function() {
            c && (clearTimeout(c), c = null);
        }, d.debounceNextCall = function(t) {
            l = t;
        }, d;
    }
    function go(t, e, n, i) {
        var r = t[e];
        if (r) {
            var a = r[em] || r, o = r[im];
            if (r[nm] !== n || o !== i) {
                if (null == n || !i) return t[e] = a;
                (r = t[e] = po(a, n, "debounce" === i))[em] = a, r[im] = i, r[nm] = n;
            }
            return r;
        }
    }
    function vo(t, e) {
        var n = t[e];
        n && n[em] && (t[e] = n[em]);
    }
    function mo(t, e, n, i) {
        this.ecInstance = t, this.api = e, this.unfinished;
        var n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice();
        this._allHandlers = n.concat(i), this._stageTaskMap = R();
    }
    function yo(t, e, n, i, r) {
        function a(t, e) {
            return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
        }
        r = r || {};
        var o;
        f(e, function(e) {
            if (!r.visualType || r.visualType === e.visualType) {
                var s = t._stageTaskMap.get(e.uid), l = s.seriesTaskMap, h = s.overallTask;
                if (h) {
                    var u, c = h.agentStubMap;
                    c.each(function(t) {
                        a(r, t) && (t.dirty(), u = !0);
                    }), u && h.dirty(), hm(h, i);
                    var d = t.getPerformArgs(h, r.block);
                    c.each(function(t) {
                        t.perform(d);
                    }), o |= h.perform(d);
                } else l && l.each(function(s) {
                    a(r, s) && s.dirty();
                    var l = t.getPerformArgs(s, r.block);
                    l.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), hm(s, i), o |= s.perform(l);
                });
            }
        }), t.unfinished |= o;
    }
    function xo(t, e, n, i, r) {
        function a(n) {
            var a = n.uid, s = o.get(a) || o.set(a, $a({
                plan: Io,
                reset: To,
                count: Ao
            }));
            s.context = {
                model: n,
                ecModel: i,
                api: r,
                useClearVisual: e.isVisual && !e.isLayout,
                plan: e.plan,
                reset: e.reset,
                scheduler: t
            }, Do(t, n, s);
        }
        var o = n.seriesTaskMap || (n.seriesTaskMap = R()), s = e.seriesType, l = e.getTargetSeries;
        e.createOnAllSeries ? i.eachRawSeries(a) : s ? i.eachRawSeriesByType(s, a) : l && l(i, r).each(a);
        var h = t._pipelineMap;
        o.each(function(t, e) {
            h.get(e) || (t.dispose(), o.removeKey(e));
        });
    }
    function _o(t, e, n, i, r) {
        function a(e) {
            var n = e.uid, i = s.get(n);
            i || (i = s.set(n, $a({
                reset: bo,
                onDirty: So
            })), o.dirty()), i.context = {
                model: e,
                overallProgress: u,
                modifyOutputEnd: c
            }, i.agent = o, i.__block = u, Do(t, e, i);
        }
        var o = n.overallTask = n.overallTask || $a({
            reset: wo
        });
        o.context = {
            ecModel: i,
            api: r,
            overallReset: e.overallReset,
            scheduler: t
        };
        var s = o.agentStubMap = o.agentStubMap || R(), l = e.seriesType, h = e.getTargetSeries, u = !0, c = e.modifyOutputEnd;
        l ? i.eachRawSeriesByType(l, a) : h ? h(i, r).each(a) : (u = !1, f(i.getSeries(), a));
        var d = t._pipelineMap;
        s.each(function(t, e) {
            d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e));
        });
    }
    function wo(t) {
        t.overallReset(t.ecModel, t.api, t.payload);
    }
    function bo(t) {
        return t.overallProgress && Mo;
    }
    function Mo() {
        this.agent.dirty(), this.getDownstream().dirty();
    }
    function So() {
        this.agent && this.agent.dirty();
    }
    function Io(t) {
        return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload);
    }
    function To(t) {
        t.useClearVisual && t.data.clearAllVisual();
        var e = t.resetDefines = Mn(t.reset(t.model, t.ecModel, t.api, t.payload));
        return e.length > 1 ? p(e, function(t, e) {
            return Co(e);
        }) : um;
    }
    function Co(t) {
        return function(e, n) {
            var i = n.data, r = n.resetDefines[t];
            if (r && r.dataEach) for (var a = e.start; a < e.end; a++) r.dataEach(i, a); else r && r.progress && r.progress(e, i);
        };
    }
    function Ao(t) {
        return t.data.count();
    }
    function Do(t, e, n) {
        var i = e.uid, r = t._pipelineMap.get(i);
        !r.head && (r.head = n), r.tail && r.tail.pipe(n), r.tail = n, n.__idxInPipeline = r.count++, 
        n.__pipeline = r;
    }
    function ko(t) {
        cm = null;
        try {
            t(dm, fm);
        } catch (t) {}
        return cm;
    }
    function Po(t, e) {
        for (var n in e.prototype) t[n] = N;
    }
    function Lo(t) {
        for (w(t) && (t = new DOMParser().parseFromString(t, "text/xml")), 9 === t.nodeType && (t = t.firstChild); "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType; ) t = t.nextSibling;
        return t;
    }
    function Oo() {
        this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1;
    }
    function zo(t, e) {
        for (var n = t.firstChild; n; ) {
            if (1 === n.nodeType) {
                var i = n.getAttribute("offset");
                i = i.indexOf("%") > 0 ? parseInt(i, 10) / 100 : i ? parseFloat(i) : 0;
                var r = n.getAttribute("stop-color") || "#000000";
                e.addColorStop(i, r);
            }
            n = n.nextSibling;
        }
    }
    function Bo(t, e) {
        t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), s(e.__inheritedStyle, t.__inheritedStyle));
    }
    function Eo(t) {
        for (var e = O(t).split(wm), n = [], i = 0; i < e.length; i += 2) {
            var r = parseFloat(e[i]), a = parseFloat(e[i + 1]);
            n.push([ r, a ]);
        }
        return n;
    }
    function Ro(t, e, n, i) {
        var r = e.__inheritedStyle || {}, a = "text" === e.type;
        if (1 === t.nodeType && (Fo(t, e), o(r, Vo(t)), !i)) for (var s in Sm) if (Sm.hasOwnProperty(s)) {
            var l = t.getAttribute(s);
            null != l && (r[Sm[s]] = l);
        }
        var h = a ? "textFill" : "fill", u = a ? "textStroke" : "stroke";
        e.style = e.style || new cf();
        var c = e.style;
        null != r.fill && c.set(h, No(r.fill, n)), null != r.stroke && c.set(u, No(r.stroke, n)), 
        f([ "lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize" ], function(t) {
            var e = "lineWidth" === t && a ? "textStrokeWidth" : t;
            null != r[t] && c.set(e, parseFloat(r[t]));
        }), r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"), 
        "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"), "start" === r.textAlign && (r.textAlign = "left"), 
        "end" === r.textAlign && (r.textAlign = "right"), f([ "lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline" ], function(t) {
            null != r[t] && c.set(t, r[t]);
        }), r.lineDash && (e.style.lineDash = O(r.lineDash).split(wm)), c[u] && "none" !== c[u] && (e[u] = !0), 
        e.__inheritedStyle = r;
    }
    function No(t, e) {
        var n = e && t && t.match(Im);
        return n ? e[O(n[1])] : t;
    }
    function Fo(t, e) {
        var n = t.getAttribute("transform");
        if (n) {
            var i = null, r = [];
            (n = n.replace(/,/g, " ")).replace(Tm, function(t, e, n) {
                r.push(e, n);
            });
            for (var a = r.length - 1; a > 0; a -= 2) {
                var o = r[a], s = r[a - 1];
                switch (i = i || pt(), s) {
                  case "translate":
                    o = O(o).split(wm), yt(i, i, [ parseFloat(o[0]), parseFloat(o[1] || 0) ]);
                    break;

                  case "scale":
                    o = O(o).split(wm), _t(i, i, [ parseFloat(o[0]), parseFloat(o[1] || o[0]) ]);
                    break;

                  case "rotate":
                    o = O(o).split(wm), xt(i, i, parseFloat(o[0]));
                    break;

                  case "skew":
                    o = O(o).split(wm), console.warn("Skew transform is not supported yet");
                    break;

                  case "matrix":
                    o = O(o).split(wm);
                    i[0] = parseFloat(o[0]), i[1] = parseFloat(o[1]), i[2] = parseFloat(o[2]), i[3] = parseFloat(o[3]), 
                    i[4] = parseFloat(o[4]), i[5] = parseFloat(o[5]);
                }
            }
        }
        e.setLocalTransform(i);
    }
    function Vo(t) {
        var e = t.getAttribute("style"), n = {};
        if (!e) return n;
        var i = {};
        Cm.lastIndex = 0;
        for (var r; null != (r = Cm.exec(e)); ) i[r[1]] = r[2];
        for (var a in Sm) Sm.hasOwnProperty(a) && null != i[a] && (n[Sm[a]] = i[a]);
        return n;
    }
    function Wo(t, e, n) {
        var i = e / t.width, r = n / t.height, a = Math.min(i, r);
        return {
            scale: [ a, a ],
            position: [ -(t.x + t.width / 2) * a + e / 2, -(t.y + t.height / 2) * a + n / 2 ]
        };
    }
    function Ho(t) {
        return function(e, n, i) {
            e = e && e.toLowerCase(), yd.prototype[t].call(this, e, n, i);
        };
    }
    function Go() {
        yd.call(this);
    }
    function Zo(t, e, n) {
        function r(t, e) {
            return t.__prio - e.__prio;
        }
        n = n || {}, "string" == typeof e && (e = Jm[e]), this.id, this.group, this._dom = t;
        var a = this._zr = wn(t, {
            renderer: n.renderer || "canvas",
            devicePixelRatio: n.devicePixelRatio,
            width: n.width,
            height: n.height
        });
        this._throttledZrFlush = po(m(a.flush, a), 17), (e = i(e)) && Rv(e, !0), this._theme = e, 
        this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, 
        this._coordSysMgr = new ba();
        var o = this._api = ls(this);
        de(Qm, r), de(Um, r), this._scheduler = new mo(this, o, Um, Qm), yd.call(this, this._ecEventProcessor = new hs()), 
        this._messageCenter = new Go(), this._initEvents(), this.resize = m(this.resize, this), 
        this._pendingActions = [], a.animation.on("frame", this._onframe, this), Qo(a, this), 
        z(this);
    }
    function Xo(t, e, n) {
        var i, r = this._model, a = this._coordSysMgr.getCoordinateSystems();
        e = On(r, e);
        for (var o = 0; o < a.length; o++) {
            var s = a[o];
            if (s[t] && null != (i = s[t](r, e, n))) return i;
        }
    }
    function Yo(t) {
        var e = t._model, n = t._scheduler;
        n.restorePipelines(e), n.prepareStageTasks(), Jo(t, "component", e, n), Jo(t, "chart", e, n), 
        n.plan();
    }
    function qo(t, e, n, i, r) {
        function a(i) {
            i && i.__alive && i[e] && i[e](i.__model, o, t._api, n);
        }
        var o = t._model;
        if (i) {
            var s = {};
            s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];
            var l = {
                mainType: i,
                query: s
            };
            r && (l.subType = r);
            var h = n.excludeSeriesId;
            null != h && (h = R(Mn(h))), o && o.eachComponent(l, function(e) {
                h && null != h.get(e.id) || a(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId]);
            }, t);
        } else Lm(t._componentsViews.concat(t._chartsViews), a);
    }
    function jo(t, e) {
        var n = t._chartsMap, i = t._scheduler;
        e.eachSeries(function(t) {
            i.updateStreamModes(t, n[t.__viewId]);
        });
    }
    function Uo(t, e) {
        var n = t.type, i = t.escapeConnect, r = qm[n], a = r.actionInfo, l = (a.update || "update").split(":"), h = l.pop();
        l = null != l[0] && Bm(l[0]), this[Wm] = !0;
        var u = [ t ], c = !1;
        t.batch && (c = !0, u = p(t.batch, function(e) {
            return e = s(o({}, e), t), e.batch = null, e;
        }));
        var d, f = [], g = "highlight" === n || "downplay" === n;
        Lm(u, function(t) {
            d = r.action(t, this._model, this._api), (d = d || o({}, t)).type = a.event || d.type, 
            f.push(d), g ? qo(this, h, t, "series") : l && qo(this, h, t, l.main, l.sub);
        }, this), "none" === h || g || l || (this[Hm] ? (Yo(this), Xm.update.call(this, t), 
        this[Hm] = !1) : Xm[h].call(this, t)), d = c ? {
            type: a.event || n,
            escapeConnect: i,
            batch: f
        } : f[0], this[Wm] = !1, !e && this._messageCenter.trigger(d.type, d);
    }
    function $o(t) {
        for (var e = this._pendingActions; e.length; ) {
            var n = e.shift();
            Uo.call(this, n, t);
        }
    }
    function Ko(t) {
        !t && this.trigger("updated");
    }
    function Qo(t, e) {
        t.on("rendered", function() {
            e.trigger("rendered"), !t.animation.isFinished() || e[Hm] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished");
        });
    }
    function Jo(t, e, n, i) {
        function r(t) {
            var e = "_ec_" + t.id + "_" + t.type, r = s[e];
            if (!r) {
                var u = Bm(t.type);
                (r = new (a ? jv.getClass(u.main, u.sub) : lo.getClass(u.sub))()).init(n, h), s[e] = r, 
                o.push(r), l.add(r.group);
            }
            t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = {
                mainType: t.mainType,
                index: t.componentIndex
            }, !a && i.prepareView(r, t, n, h);
        }
        for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, h = t._api, u = 0; u < o.length; u++) o[u].__alive = !1;
        a ? n.eachComponent(function(t, e) {
            "series" !== t && r(e);
        }) : n.eachSeries(r);
        for (u = 0; u < o.length; ) {
            var c = o[u];
            c.__alive ? u++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, h), 
            o.splice(u, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null);
        }
    }
    function ts(t) {
        t.clearColorPalette(), t.eachSeries(function(t) {
            t.clearColorPalette();
        });
    }
    function es(t, e, n, i) {
        ns(t, e, n, i), Lm(t._chartsViews, function(t) {
            t.__alive = !1;
        }), is(t, e, n, i), Lm(t._chartsViews, function(t) {
            t.__alive || t.remove(e, n);
        });
    }
    function ns(t, e, n, i, r) {
        Lm(r || t._componentsViews, function(t) {
            var r = t.__model;
            t.render(r, e, n, i), ss(r, t);
        });
    }
    function is(t, e, n, i, r) {
        var a, o = t._scheduler;
        e.eachSeries(function(e) {
            var n = t._chartsMap[e.__viewId];
            n.__alive = !0;
            var s = n.renderTask;
            o.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), 
            n.group.silent = !!e.get("silent"), ss(e, n), os(e, n);
        }), o.unfinished |= a, as(t._zr, e), om(t._zr.dom, e);
    }
    function rs(t, e) {
        Lm(Km, function(n) {
            n(t, e);
        });
    }
    function as(t, e) {
        var n = t.storage, i = 0;
        n.traverse(function(t) {
            t.isGroup || i++;
        }), i > e.get("hoverLayerThreshold") && !$c.node && n.traverse(function(t) {
            t.isGroup || (t.useHoverLayer = !0);
        });
    }
    function os(t, e) {
        var n = t.get("blendMode") || null;
        e.group.traverse(function(t) {
            t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function(t) {
                t.setStyle("blend", n);
            });
        });
    }
    function ss(t, e) {
        var n = t.get("z"), i = t.get("zlevel");
        e.group.traverse(function(t) {
            "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i));
        });
    }
    function ls(t) {
        var e = t._coordSysMgr;
        return o(new wa(t), {
            getCoordinateSystems: m(e.getCoordinateSystems, e),
            getComponentByElement: function(e) {
                for (;e; ) {
                    var n = e.__ecComponentInfo;
                    if (null != n) return t._model.getComponent(n.mainType, n.index);
                    e = e.parent;
                }
            }
        });
    }
    function hs() {
        this.eventInfo;
    }
    function us(t) {
        function e(t, e) {
            for (var i = 0; i < t.length; i++) t[i][n] = e;
        }
        var n = "__connectUpdateStatus";
        Lm(jm, function(i, r) {
            t._messageCenter.on(r, function(i) {
                if (ny[t.group] && 0 !== t[n]) {
                    if (i && i.escapeConnect) return;
                    var r = t.makeActionFromEvent(i), a = [];
                    Lm(ey, function(e) {
                        e !== t && e.group === t.group && a.push(e);
                    }), e(a, 0), Lm(a, function(t) {
                        1 !== t[n] && t.dispatchAction(r);
                    }), e(a, 2);
                }
            });
        });
    }
    function cs(t) {
        ny[t] = !1;
    }
    function ds(t) {
        return ey[En(t, ay)];
    }
    function fs(t, e) {
        Jm[t] = e;
    }
    function ps(t) {
        $m.push(t);
    }
    function gs(t, e) {
        xs(Um, t, e, Rm);
    }
    function vs(t, e, n) {
        "function" == typeof e && (n = e, e = "");
        var i = zm(t) ? t.type : [ t, t = {
            event: e
        } ][0];
        t.event = (t.event || i).toLowerCase(), e = t.event, Pm(Gm.test(i) && Gm.test(e)), 
        qm[i] || (qm[i] = {
            action: n,
            actionInfo: t
        }), jm[e] = i;
    }
    function ms(t, e) {
        xs(Qm, t, e, Nm, "layout");
    }
    function ys(t, e) {
        xs(Qm, t, e, Fm, "visual");
    }
    function xs(t, e, n, i, r) {
        (Om(e) || zm(e)) && (n = e, e = i);
        var a = mo.wrapStageHandler(n, r);
        return a.__prio = e, a.__raw = n, t.push(a), a;
    }
    function _s(t, e) {
        ty[t] = e;
    }
    function ws(t) {
        return sv.extend(t);
    }
    function bs(t) {
        return jv.extend(t);
    }
    function Ms(t) {
        return qv.extend(t);
    }
    function Ss(t) {
        return lo.extend(t);
    }
    function Is(t) {
        return t;
    }
    function Ts(t, e, n, i, r) {
        this._old = t, this._new = e, this._oldKeyGetter = n || Is, this._newKeyGetter = i || Is, 
        this.context = r;
    }
    function Cs(t, e, n, i, r) {
        for (var a = 0; a < t.length; a++) {
            var o = "_ec_" + r[i](t[a], a), s = e[o];
            null == s ? (n.push(o), e[o] = a) : (s.length || (e[o] = s = [ s ]), s.push(a));
        }
    }
    function As(t) {
        var e = {}, n = e.encode = {}, i = R(), r = [], a = [];
        f(t.dimensions, function(e) {
            var o = t.getDimensionInfo(e), s = o.coordDim;
            if (s) {
                var l = n[s];
                n.hasOwnProperty(s) || (l = n[s] = []), l[o.coordDimIndex] = e, o.isExtraCoord || (i.set(s, 1), 
                ks(o.type) && (r[0] = e)), o.defaultTooltip && a.push(e);
            }
            ly.each(function(t, e) {
                var i = n[e];
                n.hasOwnProperty(e) || (i = n[e] = []);
                var r = o.otherDims[e];
                null != r && !1 !== r && (i[r] = o.name);
            });
        });
        var o = [], s = {};
        i.each(function(t, e) {
            var i = n[e];
            s[e] = i[0], o = o.concat(i);
        }), e.dataDimsOnCoord = o, e.encodeFirstDimNotExtra = s;
        var l = n.label;
        l && l.length && (r = l.slice());
        var h = n.tooltip;
        return h && h.length ? a = h.slice() : a.length || (a = r.slice()), n.defaultedLabel = r, 
        n.defaultedTooltip = a, e;
    }
    function Ds(t) {
        return "category" === t ? "ordinal" : "time" === t ? "time" : "float";
    }
    function ks(t) {
        return !("ordinal" === t || "time" === t);
    }
    function Ps(t) {
        return t._rawCount > 65535 ? fy : py;
    }
    function Ls(t) {
        var e = t.constructor;
        return e === Array ? t.slice() : new e(t);
    }
    function Os(t, e) {
        f(gy.concat(e.__wrappedMethods || []), function(n) {
            e.hasOwnProperty(n) && (t[n] = e[n]);
        }), t.__wrappedMethods = e.__wrappedMethods, f(vy, function(n) {
            t[n] = i(e[n]);
        }), t._calculationInfo = o(e._calculationInfo);
    }
    function zs(t) {
        var e = t._invertedIndicesMap;
        f(e, function(n, i) {
            var r = t._dimensionInfos[i].ordinalMeta;
            if (r) {
                n = e[i] = new fy(r.categories.length);
                for (a = 0; a < n.length; a++) n[a] = NaN;
                for (var a = 0; a < t._count; a++) n[t.get(i, a)] = a;
            }
        });
    }
    function Bs(t, e, n) {
        var i;
        if (null != e) {
            var r = t._chunkSize, a = Math.floor(n / r), o = n % r, s = t.dimensions[e], l = t._storage[s][a];
            if (l) {
                i = l[o];
                var h = t._dimensionInfos[s].ordinalMeta;
                h && h.categories.length && (i = h.categories[i]);
            }
        }
        return i;
    }
    function Es(t) {
        return t;
    }
    function Rs(t) {
        return t < this._count && t >= 0 ? this._indices[t] : -1;
    }
    function Ns(t, e) {
        var n = t._idList[e];
        return null == n && (n = Bs(t, t._idDimIdx, e)), null == n && (n = cy + e), n;
    }
    function Fs(t) {
        return x(t) || (t = [ t ]), t;
    }
    function Vs(t, e) {
        var n = t.dimensions, i = new my(p(n, t.getDimensionInfo, t), t.hostModel);
        Os(i, t);
        for (var r = i._storage = {}, a = t._storage, o = 0; o < n.length; o++) {
            var s = n[o];
            a[s] && (h(e, s) >= 0 ? (r[s] = Ws(a[s]), i._rawExtent[s] = [ 1 / 0, -1 / 0 ], i._extent[s] = null) : r[s] = a[s]);
        }
        return i;
    }
    function Ws(t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = Ls(t[n]);
        return e;
    }
    function Hs(t, e, n) {
        function r(t, e, n) {
            null != ly.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, u.set(e, !0));
        }
        ea.isInstance(e) || (e = ea.seriesDataToSource(e)), n = n || {}, t = (t || []).slice();
        for (var a = (n.dimsDef || []).slice(), l = R(n.encodeDef), h = R(), u = R(), c = [], d = Gs(e, t, a, n.dimCount), p = 0; d > p; p++) {
            var g = a[p] = o({}, b(a[p]) ? a[p] : {
                name: a[p]
            }), v = g.name, m = c[p] = {
                otherDims: {}
            };
            null != v && null == h.get(v) && (m.name = m.displayName = v, h.set(v, p)), null != g.type && (m.type = g.type), 
            null != g.displayName && (m.displayName = g.displayName);
        }
        l.each(function(t, e) {
            if (1 === (t = Mn(t).slice()).length && t[0] < 0) l.set(e, !1); else {
                var n = l.set(e, []);
                f(t, function(t, i) {
                    w(t) && (t = h.get(t)), null != t && d > t && (n[i] = t, r(c[t], e, i));
                });
            }
        });
        var y = 0;
        f(t, function(t) {
            var e, t, n, a;
            if (w(t)) e = t, t = {}; else {
                e = t.name;
                var o = t.ordinalMeta;
                t.ordinalMeta = null, (t = i(t)).ordinalMeta = o, n = t.dimsDef, a = t.otherDims, 
                t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null;
            }
            var h = l.get(e);
            if (!1 !== h) {
                if (!(h = Mn(h)).length) for (var u = 0; u < (n && n.length || 1); u++) {
                    for (;y < c.length && null != c[y].coordDim; ) y++;
                    y < c.length && h.push(y++);
                }
                f(h, function(i, o) {
                    var l = c[i];
                    if (r(s(l, t), e, o), null == l.name && n) {
                        var h = n[o];
                        !b(h) && (h = {
                            name: h
                        }), l.name = l.displayName = h.name, l.defaultTooltip = h.defaultTooltip;
                    }
                    a && s(l.otherDims, a);
                });
            }
        });
        var x = n.generateCoord, _ = n.generateCoordCount, M = null != _;
        _ = x ? _ || 1 : 0;
        for (var S = x || "value", I = 0; d > I; I++) null == (m = c[I] = c[I] || {}).coordDim && (m.coordDim = Zs(S, u, M), 
        m.coordDimIndex = 0, (!x || 0 >= _) && (m.isExtraCoord = !0), _--), null == m.name && (m.name = Zs(m.coordDim, h)), 
        null == m.type && da(e, I, m.name) && (m.type = "ordinal");
        return c;
    }
    function Gs(t, e, n, i) {
        var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);
        return f(e, function(t) {
            var e = t.dimsDef;
            e && (r = Math.max(r, e.length));
        }), r;
    }
    function Zs(t, e, n) {
        if (n || null != e.get(t)) {
            for (var i = 0; null != e.get(t + i); ) i++;
            t += i;
        }
        return e.set(t, !0), t;
    }
    function Xs(t, e, n) {
        var i, r, a, o, s = (n = n || {}).byIndex, l = n.stackedCoordDimension, h = !(!t || !t.get("stack"));
        if (f(e, function(t, n) {
            w(t) && (e[n] = t = {
                name: t
            }), h && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t));
        }), !r || s || i || (s = !0), r) {
            a = "__\0ecstackresult", o = "__\0ecstackedover", i && (i.createInvertedIndices = !0);
            var u = r.coordDim, c = r.type, d = 0;
            f(e, function(t) {
                t.coordDim === u && d++;
            }), e.push({
                name: a,
                coordDim: u,
                coordDimIndex: d,
                type: c,
                isExtraCoord: !0,
                isCalculationCoord: !0
            }), d++, e.push({
                name: o,
                coordDim: o,
                coordDimIndex: d,
                type: c,
                isExtraCoord: !0,
                isCalculationCoord: !0
            });
        }
        return {
            stackedDimension: r && r.name,
            stackedByDimension: i && i.name,
            isStackedByIndex: s,
            stackedOverDimension: o,
            stackResultDimension: a
        };
    }
    function Ys(t, e) {
        return !!e && e === t.getCalculationInfo("stackedDimension");
    }
    function qs(t, e) {
        return Ys(t, e) ? t.getCalculationInfo("stackResultDimension") : e;
    }
    function js(t, e, n) {
        n = n || {}, ea.isInstance(t) || (t = ea.seriesDataToSource(t));
        var i, r = e.get("coordinateSystem"), a = ba.get(r), o = Jr(e);
        o && (i = p(o.coordSysDims, function(t) {
            var e = {
                name: t
            }, n = o.axisMap.get(t);
            if (n) {
                var i = n.get("type");
                e.type = Ds(i);
            }
            return e;
        })), i || (i = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || [ "x", "y" ]);
        var s, l, h = _y(t, {
            coordDimensions: i,
            generateCoord: n.generateCoord
        });
        o && f(h, function(t, e) {
            var n = t.coordDim, i = o.categoryAxisMap.get(n);
            i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0);
        }), l || null == s || (h[s].otherDims.itemName = 0);
        var u = Xs(e, h), c = new my(h, e);
        c.setCalculationInfo(u);
        var d = null != s && Us(t) ? function(t, e, n, i) {
            return i === s ? n : this.defaultDimValueGetter(t, e, n, i);
        } : null;
        return c.hasItemOption = !1, c.initData(t, null, d), c;
    }
    function Us(t) {
        if (t.sourceFormat === fv) {
            var e = $s(t.data || []);
            return null != e && !x(In(e));
        }
    }
    function $s(t) {
        for (var e = 0; e < t.length && null == t[e]; ) e++;
        return t[e];
    }
    function Ks(t) {
        this._setting = t || {}, this._extent = [ 1 / 0, -1 / 0 ], this._interval = 0, this.init && this.init.apply(this, arguments);
    }
    function Qs(t) {
        this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, 
        this._map;
    }
    function Js(t) {
        return t._map || (t._map = R(t.categories));
    }
    function tl(t) {
        return b(t) && null != t.value ? t.value : t + "";
    }
    function el(t, e, n, i) {
        var r = {}, a = t[1] - t[0], o = r.interval = Nr(a / e, !0);
        null != n && n > o && (o = r.interval = n), null != i && o > i && (o = r.interval = i);
        var s = r.intervalPrecision = nl(o);
        return rl(r.niceTickExtent = [ Sy(Math.ceil(t[0] / o) * o, s), Sy(Math.floor(t[1] / o) * o, s) ], t), 
        r;
    }
    function nl(t) {
        return kr(t) + 2;
    }
    function il(t, e, n) {
        t[e] = Math.max(Math.min(t[e], n[1]), n[0]);
    }
    function rl(t, e) {
        !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), il(t, 0, e), 
        il(t, 1, e), t[0] > t[1] && (t[0] = t[1]);
    }
    function al(t, e, n, i) {
        var r = [];
        if (!t) return r;
        e[0] < n[0] && r.push(e[0]);
        for (var a = n[0]; a <= n[1] && (r.push(a), (a = Sy(a + t, i)) !== r[r.length - 1]); ) if (r.length > 1e4) return [];
        return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]), r;
    }
    function ol(t) {
        return t.get("stack") || Cy + t.seriesIndex;
    }
    function sl(t) {
        return t.dim + t.index;
    }
    function ll(t, e) {
        var n = [];
        return e.eachSeriesByType(t, function(t) {
            dl(t) && !fl(t) && n.push(t);
        }), n;
    }
    function hl(t) {
        var e = [];
        return f(t, function(t) {
            var n = t.getData(), i = t.coordinateSystem.getBaseAxis(), r = i.getExtent(), a = "category" === i.type ? i.getBandWidth() : Math.abs(r[1] - r[0]) / n.count(), o = Cr(t.get("barWidth"), a), s = Cr(t.get("barMaxWidth"), a), l = t.get("barGap"), h = t.get("barCategoryGap");
            e.push({
                bandWidth: a,
                barWidth: o,
                barMaxWidth: s,
                barGap: l,
                barCategoryGap: h,
                axisKey: sl(i),
                stackId: ol(t)
            });
        }), ul(e);
    }
    function ul(t) {
        var e = {};
        f(t, function(t) {
            var n = t.axisKey, i = t.bandWidth, r = e[n] || {
                bandWidth: i,
                remainedWidth: i,
                autoWidthCount: 0,
                categoryGap: "20%",
                gap: "30%",
                stacks: {}
            }, a = r.stacks;
            e[n] = r;
            var o = t.stackId;
            a[o] || r.autoWidthCount++, a[o] = a[o] || {
                width: 0,
                maxWidth: 0
            };
            var s = t.barWidth;
            s && !a[o].width && (a[o].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);
            var l = t.barMaxWidth;
            l && (a[o].maxWidth = l);
            var h = t.barGap;
            null != h && (r.gap = h);
            var u = t.barCategoryGap;
            null != u && (r.categoryGap = u);
        });
        var n = {};
        return f(e, function(t, e) {
            n[e] = {};
            var i = t.stacks, r = t.bandWidth, a = Cr(t.categoryGap, r), o = Cr(t.gap, 1), s = t.remainedWidth, l = t.autoWidthCount, h = (s - a) / (l + (l - 1) * o);
            h = Math.max(h, 0), f(i, function(t) {
                var e = t.maxWidth;
                e && h > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, 
                t.width = e, l--);
            }), h = (s - a) / (l + (l - 1) * o), h = Math.max(h, 0);
            var u, c = 0;
            f(i, function(t) {
                t.width || (t.width = h), u = t, c += t.width * (1 + o);
            }), u && (c -= u.width * o);
            var d = -c / 2;
            f(i, function(t, i) {
                n[e][i] = n[e][i] || {
                    offset: d,
                    width: t.width
                }, d += t.width * (1 + o);
            });
        }), n;
    }
    function cl(t, e, n) {
        if (t && e) {
            var i = t[sl(e)];
            return null != i && null != n && (i = i[ol(n)]), i;
        }
    }
    function dl(t) {
        return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type;
    }
    function fl(t) {
        return t.pipelineContext && t.pipelineContext.large;
    }
    function pl(t, e) {
        var n, i, r = e.getGlobalExtent();
        r[0] > r[1] ? (n = r[1], i = r[0]) : (n = r[0], i = r[1]);
        var a = e.toGlobalCoord(e.dataToCoord(0));
        return n > a && (a = n), a > i && (a = i), a;
    }
    function gl(t, e) {
        return Wy(t, Vy(e));
    }
    function vl(t, e) {
        var n, i, r, a = t.type, o = e.getMin(), s = e.getMax(), l = null != o, h = null != s, u = t.getExtent();
        "ordinal" === a ? n = e.getCategories().length : (i = e.get("boundaryGap"), x(i) || (i = [ i || 0, i || 0 ]), 
        "boolean" == typeof i[0] && (i = [ 0, 0 ]), i[0] = Cr(i[0], 1), i[1] = Cr(i[1], 1), 
        r = u[1] - u[0] || Math.abs(u[0])), null == o && (o = "ordinal" === a ? n ? 0 : NaN : u[0] - i[0] * r), 
        null == s && (s = "ordinal" === a ? n ? n - 1 : NaN : u[1] + i[1] * r), "dataMin" === o ? o = u[0] : "function" == typeof o && (o = o({
            min: u[0],
            max: u[1]
        })), "dataMax" === s ? s = u[1] : "function" == typeof s && (s = s({
            min: u[0],
            max: u[1]
        })), (null == o || !isFinite(o)) && (o = NaN), (null == s || !isFinite(s)) && (s = NaN), 
        t.setBlank(T(o) || T(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), 
        e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), 0 > o && 0 > s && !h && (s = 0));
        var c = e.ecModel;
        if (c && "time" === a) {
            var d, p = ll("bar", c);
            if (f(p, function(t) {
                d |= t.getBaseAxis() === e.axis;
            }), d) {
                var g = hl(p), v = ml(o, s, e, g);
                o = v.min, s = v.max;
            }
        }
        return [ o, s ];
    }
    function ml(t, e, n, i) {
        var r = n.axis.getExtent(), a = r[1] - r[0], o = cl(i, n.axis);
        if (void 0 === o) return {
            min: t,
            max: e
        };
        var s = 1 / 0;
        f(o, function(t) {
            s = Math.min(t.offset, s);
        });
        var l = -1 / 0;
        f(o, function(t) {
            l = Math.max(t.offset + t.width, l);
        }), s = Math.abs(s), l = Math.abs(l);
        var h = s + l, u = e - t, c = u / (1 - (s + l) / a) - u;
        return e += c * (l / h), t -= c * (s / h), {
            min: t,
            max: e
        };
    }
    function yl(t, e) {
        var n = vl(t, e), i = null != e.getMin(), r = null != e.getMax(), a = e.get("splitNumber");
        "log" === t.type && (t.base = e.get("logBase"));
        var o = t.type;
        t.setExtent(n[0], n[1]), t.niceExtent({
            splitNumber: a,
            fixMin: i,
            fixMax: r,
            minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null,
            maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null
        });
        var s = e.get("interval");
        null != s && t.setInterval && t.setInterval(s);
    }
    function xl(t, e) {
        if (e = e || t.get("type")) switch (e) {
          case "category":
            return new My(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [ 1 / 0, -1 / 0 ]);

          case "value":
            return new Ty();

          default:
            return (Ks.getClass(e) || Ty).create(t);
        }
    }
    function _l(t) {
        var e = t.scale.getExtent(), n = e[0], i = e[1];
        return !(n > 0 && i > 0 || 0 > n && 0 > i);
    }
    function wl(t) {
        var e = t.getLabelModel().get("formatter"), n = "category" === t.type ? t.scale.getExtent()[0] : null;
        return "string" == typeof e ? e = function(e) {
            return function(n) {
                return n = t.scale.getLabel(n), e.replace("{value}", null != n ? n : "");
            };
        }(e) : "function" == typeof e ? function(i, r) {
            return null != n && (r = i - n), e(bl(t, i), r);
        } : function(e) {
            return t.scale.getLabel(e);
        };
    }
    function bl(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e;
    }
    function Ml(t) {
        var e = t.model, n = t.scale;
        if (e.get("axisLabel.show") && !n.isBlank()) {
            var i, r, a = "category" === t.type, o = n.getExtent();
            a ? r = n.count() : (i = n.getTicks(), r = i.length);
            var s, l = t.getLabelModel(), h = wl(t), u = 1;
            r > 40 && (u = Math.ceil(r / 40));
            for (var c = 0; r > c; c += u) {
                var d = h(i ? i[c] : o[0] + c), f = Sl(l.getTextRect(d), l.get("rotate") || 0);
                s ? s.union(f) : s = f;
            }
            return s;
        }
    }
    function Sl(t, e) {
        var n = e * Math.PI / 180, i = t.plain(), r = i.width, a = i.height, o = r * Math.cos(n) + a * Math.sin(n), s = r * Math.sin(n) + a * Math.cos(n);
        return new re(i.x, i.y, o, s);
    }
    function Il(t, e) {
        if ("image" !== this.type) {
            var n = this.style, i = this.shape;
            i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, 
            n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1);
        }
    }
    function Tl(t, e, n, i, r, a, o) {
        var s = 0 === t.indexOf("empty");
        s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
        var l;
        return l = 0 === t.indexOf("image://") ? Ei(t.slice(8), new re(e, n, i, r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? Bi(t.slice(7), {}, new re(e, n, i, r), o ? "center" : "cover") : new tx({
            shape: {
                symbolType: t,
                x: e,
                y: n,
                width: i,
                height: r
            }
        }), l.__isEmptyBrush = s, l.setColor = Il, l.setColor(a), l;
    }
    function Cl(t, e) {
        return Math.abs(t - e) < ix;
    }
    function Al(t, e, n) {
        var i = 0, r = t[0];
        if (!r) return !1;
        for (var a = 1; a < t.length; a++) {
            var o = t[a];
            i += gi(r[0], r[1], o[0], o[1], e, n), r = o;
        }
        var s = t[0];
        return Cl(r[0], s[0]) && Cl(r[1], s[1]) || (i += gi(r[0], r[1], s[0], s[1], e, n)), 
        0 !== i;
    }
    function Dl(t, e, n) {
        if (this.name = t, this.geometries = e, n) n = [ n[0], n[1] ]; else {
            var i = this.getBoundingRect();
            n = [ i.x + i.width / 2, i.y + i.height / 2 ];
        }
        this.center = n;
    }
    function kl(t) {
        if (!t.UTF8Encoding) return t;
        var e = t.UTF8Scale;
        null == e && (e = 1024);
        for (var n = t.features, i = 0; i < n.length; i++) for (var r = n[i].geometry, a = r.coordinates, o = r.encodeOffsets, s = 0; s < a.length; s++) {
            var l = a[s];
            if ("Polygon" === r.type) a[s] = Pl(l, o[s], e); else if ("MultiPolygon" === r.type) for (var h = 0; h < l.length; h++) {
                var u = l[h];
                l[h] = Pl(u, o[s][h], e);
            }
        }
        return t.UTF8Encoding = !1, t;
    }
    function Pl(t, e, n) {
        for (var i = [], r = e[0], a = e[1], o = 0; o < t.length; o += 2) {
            var s = t.charCodeAt(o) - 64, l = t.charCodeAt(o + 1) - 64;
            s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), r = s += r, a = l += a, i.push([ s / n, l / n ]);
        }
        return i;
    }
    function Ll(t) {
        return "category" === t.type ? zl(t) : Rl(t);
    }
    function Ol(t, e) {
        return "category" === t.type ? El(t, e) : {
            ticks: t.scale.getTicks()
        };
    }
    function zl(t) {
        var e = t.getLabelModel(), n = Bl(t, e);
        return !e.get("show") || t.scale.isBlank() ? {
            labels: [],
            labelCategoryInterval: n.labelCategoryInterval
        } : n;
    }
    function Bl(t, e) {
        var n = Nl(t, "labels"), i = Yl(e), r = Fl(n, i);
        if (r) return r;
        var a, o;
        return _(i) ? a = Xl(t, i) : (o = "auto" === i ? Wl(t) : i, a = Zl(t, o)), Vl(n, i, {
            labels: a,
            labelCategoryInterval: o
        });
    }
    function El(t, e) {
        var n = Nl(t, "ticks"), i = Yl(e), r = Fl(n, i);
        if (r) return r;
        var a, o;
        if ((!e.get("show") || t.scale.isBlank()) && (a = []), _(i)) a = Xl(t, i, !0); else if ("auto" === i) {
            var s = Bl(t, t.getLabelModel());
            o = s.labelCategoryInterval, a = p(s.labels, function(t) {
                return t.tickValue;
            });
        } else o = i, a = Zl(t, o, !0);
        return Vl(n, i, {
            ticks: a,
            tickCategoryInterval: o
        });
    }
    function Rl(t) {
        var e = t.scale.getTicks(), n = wl(t);
        return {
            labels: p(e, function(e, i) {
                return {
                    formattedLabel: n(e, i),
                    rawLabel: t.scale.getLabel(e),
                    tickValue: e
                };
            })
        };
    }
    function Nl(t, e) {
        return ax(t)[e] || (ax(t)[e] = []);
    }
    function Fl(t, e) {
        for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value;
    }
    function Vl(t, e, n) {
        return t.push({
            key: e,
            value: n
        }), n;
    }
    function Wl(t) {
        var e = ax(t).autoInterval;
        return null != e ? e : ax(t).autoInterval = t.calculateCategoryInterval();
    }
    function Hl(t) {
        var e = Gl(t), n = wl(t), i = (e.axisRotate - e.labelRotate) / 180 * Math.PI, r = t.scale, a = r.getExtent(), o = r.count();
        if (a[1] - a[0] < 1) return 0;
        var s = 1;
        o > 40 && (s = Math.max(1, Math.floor(o / 40)));
        for (var l = a[0], h = t.dataToCoord(l + 1) - t.dataToCoord(l), u = Math.abs(h * Math.cos(i)), c = Math.abs(h * Math.sin(i)), d = 0, f = 0; l <= a[1]; l += s) {
            var p = 0, g = 0, v = Me(n(l), e.font, "center", "top");
            p = 1.3 * v.width, g = 1.3 * v.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7);
        }
        var m = d / u, y = f / c;
        isNaN(m) && (m = 1 / 0), isNaN(y) && (y = 1 / 0);
        var x = Math.max(0, Math.floor(Math.min(m, y))), _ = ax(t.model), w = _.lastAutoInterval, b = _.lastTickCount;
        return null != w && null != b && Math.abs(w - x) <= 1 && Math.abs(b - o) <= 1 && w > x ? x = w : (_.lastTickCount = o, 
        _.lastAutoInterval = x), x;
    }
    function Gl(t) {
        var e = t.getLabelModel();
        return {
            axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
            labelRotate: e.get("rotate") || 0,
            font: e.getFont()
        };
    }
    function Zl(t, e, n) {
        function i(t) {
            l.push(n ? t : {
                formattedLabel: r(t),
                rawLabel: a.getLabel(t),
                tickValue: t
            });
        }
        var r = wl(t), a = t.scale, o = a.getExtent(), s = t.getLabelModel(), l = [], h = Math.max((e || 0) + 1, 1), u = o[0], c = a.count();
        0 !== u && h > 1 && c / h > 2 && (u = Math.round(Math.ceil(u / h) * h));
        var d = {
            min: s.get("showMinLabel"),
            max: s.get("showMaxLabel")
        };
        d.min && u !== o[0] && i(o[0]);
        for (var f = u; f <= o[1]; f += h) i(f);
        return d.max && f !== o[1] && i(o[1]), l;
    }
    function Xl(t, e, n) {
        var i = t.scale, r = wl(t), a = [];
        return f(i.getTicks(), function(t) {
            var o = i.getLabel(t);
            e(t, o) && a.push(n ? t : {
                formattedLabel: r(t),
                rawLabel: o,
                tickValue: t
            });
        }), a;
    }
    function Yl(t) {
        var e = t.get("interval");
        return null == e ? "auto" : e;
    }
    function ql(t, e) {
        var n = (t[1] - t[0]) / e / 2;
        t[0] += n, t[1] -= n;
    }
    function jl(t, e, n, i, r) {
        function a(t, e) {
            return u ? t > e : e > t;
        }
        var o = e.length;
        if (t.onBand && !i && o) {
            var s, l = t.getExtent();
            if (1 === o) e[0].coord = l[0], s = e[1] = {
                coord: l[0]
            }; else {
                var h = e[1].coord - e[0].coord;
                f(e, function(t) {
                    t.coord -= h / 2;
                    var e = e || 0;
                    e % 2 > 0 && (t.coord -= h / (2 * (e + 1)));
                }), s = {
                    coord: e[o - 1].coord + h
                }, e.push(s);
            }
            var u = l[0] > l[1];
            a(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()), r && a(l[0], e[0].coord) && e.unshift({
                coord: l[0]
            }), a(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()), r && a(s.coord, l[1]) && e.push({
                coord: l[1]
            });
        }
    }
    function Ul(t) {
        return this._axes[t];
    }
    function $l(t) {
        cx.call(this, t);
    }
    function Kl(t, e) {
        return e.type || (e.data ? "category" : "value");
    }
    function Ql(t, e) {
        return t.getCoordSysModel() === e;
    }
    function Jl(t, e, n) {
        this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], 
        this._initCartesian(t, e, n), this.model = t;
    }
    function th(t, e, n, i) {
        function r(t) {
            return t.dim + "_" + t.index;
        }
        n.getAxesOnZeroOf = function() {
            return a ? [ a ] : [];
        };
        var a, o = t[e], s = n.model, l = s.get("axisLine.onZero"), h = s.get("axisLine.onZeroAxisIndex");
        if (l) {
            if (null != h) eh(o[h]) && (a = o[h]); else for (var u in o) if (o.hasOwnProperty(u) && eh(o[u]) && !i[r(o[u])]) {
                a = o[u];
                break;
            }
            a && (i[r(a)] = !0);
        }
    }
    function eh(t) {
        return t && "category" !== t.type && "time" !== t.type && _l(t);
    }
    function nh(t, e) {
        var n = t.getExtent(), i = n[0] + n[1];
        t.toGlobalCoord = "x" === t.dim ? function(t) {
            return t + e;
        } : function(t) {
            return i - t + e;
        }, t.toLocalCoord = "x" === t.dim ? function(t) {
            return t - e;
        } : function(t) {
            return i - t + e;
        };
    }
    function ih(t) {
        return p(_x, function(e) {
            return t.getReferringComponents(e)[0];
        });
    }
    function rh(t) {
        return "cartesian2d" === t.get("coordinateSystem");
    }
    function ah(t, e) {
        var n = t.mapDimension("defaultedLabel", !0), i = n.length;
        if (1 === i) return ja(t, e, n[0]);
        if (i) {
            for (var r = [], a = 0; a < n.length; a++) {
                var o = ja(t, e, n[a]);
                r.push(o);
            }
            return r.join(" ");
        }
    }
    function oh(t, e, n, i, r, a) {
        rr(t, e, n.getModel("label"), n.getModel("emphasis.label"), {
            labelFetcher: r,
            labelDataIndex: a,
            defaultText: ah(r.getData(), a),
            isRectText: !0,
            autoColor: i
        }), sh(t), sh(e);
    }
    function sh(t, e) {
        "outside" === t.textPosition && (t.textPosition = e);
    }
    function lh(t, e, n) {
        n.style.text = null, pr(n, {
            shape: {
                width: 0
            }
        }, e, t, function() {
            n.parent && n.parent.remove(n);
        });
    }
    function hh(t, e, n) {
        n.style.text = null, pr(n, {
            shape: {
                r: n.shape.r0
            }
        }, e, t, function() {
            n.parent && n.parent.remove(n);
        });
    }
    function uh(t, e, n, i, r, a, o, l) {
        var h = e.getItemVisual(n, "color"), u = e.getItemVisual(n, "opacity"), c = i.getModel("itemStyle"), d = i.getModel("emphasis.itemStyle").getBarItemStyle();
        l || t.setShape("r", c.get("barBorderRadius") || 0), t.useStyle(s({
            fill: h,
            opacity: u
        }, c.getBarItemStyle()));
        var f = i.getShallow("cursor");
        f && t.attr("cursor", f);
        var p = o ? r.height > 0 ? "bottom" : "top" : r.width > 0 ? "left" : "right";
        l || oh(t.style, d, i, h, a, n, p), nr(t, d);
    }
    function ch(t, e) {
        var n = t.get(Sx) || 0;
        return Math.min(n, Math.abs(e.width), Math.abs(e.height));
    }
    function dh(t, e, n) {
        var i = t.getData(), r = [], a = i.getLayout("valueAxisHorizontal") ? 1 : 0;
        r[1 - a] = i.getLayout("valueAxisStart");
        var o = new Cx({
            shape: {
                points: i.getLayout("largePoints")
            },
            incremental: !!n,
            __startPoint: r,
            __valueIdx: a
        });
        e.add(o), fh(o, t, i);
    }
    function fh(t, e, n) {
        var i = n.getVisual("borderColor") || n.getVisual("color"), r = e.getModel("itemStyle").getItemStyle([ "color", "borderColor" ]);
        t.useStyle(r), t.style.fill = null, t.style.stroke = i, t.style.lineWidth = n.getLayout("barWidth");
    }
    function ph(t) {
        var e = {
            componentType: t.mainType,
            componentIndex: t.componentIndex
        };
        return e[t.mainType + "Index"] = t.componentIndex, e;
    }
    function gh(t, e, n, i) {
        var r, a, o = Or(n - t.rotation), s = i[0] > i[1], l = "start" === e && !s || "start" !== e && s;
        return zr(o - Ax / 2) ? (a = l ? "bottom" : "top", r = "center") : zr(o - 1.5 * Ax) ? (a = l ? "top" : "bottom", 
        r = "center") : (a = "middle", r = 1.5 * Ax > o && o > Ax / 2 ? l ? "left" : "right" : l ? "right" : "left"), 
        {
            rotation: o,
            textAlign: r,
            textVerticalAlign: a
        };
    }
    function vh(t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
    }
    function mh(t, e, n) {
        var i = t.get("axisLabel.showMinLabel"), r = t.get("axisLabel.showMaxLabel");
        e = e || [], n = n || [];
        var a = e[0], o = e[1], s = e[e.length - 1], l = e[e.length - 2], h = n[0], u = n[1], c = n[n.length - 1], d = n[n.length - 2];
        !1 === i ? (yh(a), yh(h)) : xh(a, o) && (i ? (yh(o), yh(u)) : (yh(a), yh(h))), !1 === r ? (yh(s), 
        yh(c)) : xh(l, s) && (r ? (yh(l), yh(d)) : (yh(s), yh(c)));
    }
    function yh(t) {
        t && (t.ignore = !0);
    }
    function xh(t, e) {
        var n = t && t.getBoundingRect().clone(), i = e && e.getBoundingRect().clone();
        if (n && i) {
            var r = gt([]);
            return xt(r, r, -t.rotation), n.applyTransform(mt([], r, t.getLocalTransform())), 
            i.applyTransform(mt([], r, e.getLocalTransform())), n.intersect(i);
        }
    }
    function _h(t) {
        return "middle" === t || "center" === t;
    }
    function wh(t, e, n) {
        var i = e.axis;
        if (e.get("axisTick.show") && !i.scale.isBlank()) {
            for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), o = r.get("length"), l = i.getTicksCoords(), h = [], u = [], c = t._transform, d = [], f = 0; f < l.length; f++) {
                var p = l[f].coord;
                h[0] = p, h[1] = 0, u[0] = p, u[1] = n.tickDirection * o, c && (K(h, h, c), K(u, u, c));
                var g = new wg(Fi({
                    anid: "tick_" + l[f].tickValue,
                    shape: {
                        x1: h[0],
                        y1: h[1],
                        x2: u[0],
                        y2: u[1]
                    },
                    style: s(a.getLineStyle(), {
                        stroke: e.get("axisLine.lineStyle.color")
                    }),
                    z2: 2,
                    silent: !0
                }));
                t.group.add(g), d.push(g);
            }
            return d;
        }
    }
    function bh(t, e, n) {
        var i = e.axis;
        if (C(n.axisLabelShow, e.get("axisLabel.show")) && !i.scale.isBlank()) {
            var r = e.getModel("axisLabel"), a = r.get("margin"), o = i.getViewLabels(), s = (C(n.labelRotate, r.get("rotate")) || 0) * Ax / 180, l = Px(n.rotation, s, n.labelDirection), h = e.getCategories(!0), u = [], c = vh(e), d = e.get("triggerEvent");
            return f(o, function(o, s) {
                var f = o.tickValue, p = o.formattedLabel, g = o.rawLabel, v = r;
                h && h[f] && h[f].textStyle && (v = new wr(h[f].textStyle, r, e.ecModel));
                var m = v.getTextColor() || e.get("axisLine.lineStyle.color"), y = [ i.dataToCoord(f), n.labelOffset + n.labelDirection * a ], x = new ug({
                    anid: "label_" + f,
                    position: y,
                    rotation: l.rotation,
                    silent: c,
                    z2: 10
                });
                ar(x.style, v, {
                    text: p,
                    textAlign: v.getShallow("align", !0) || l.textAlign,
                    textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || l.textVerticalAlign,
                    textFill: "function" == typeof m ? m("category" === i.type ? g : "value" === i.type ? f + "" : f, s) : m
                }), d && (x.eventData = ph(e), x.eventData.targetType = "axisLabel", x.eventData.value = g), 
                t._dumbGroup.add(x), x.updateTransform(), u.push(x), t.group.add(x), x.decomposeTransform();
            }), u;
        }
    }
    function Mh(t, e) {
        var n = {
            axesInfo: {},
            seriesInvolved: !1,
            coordSysAxesInfo: {},
            coordSysMap: {}
        };
        return Sh(n, t, e), n.seriesInvolved && Th(n, t), n;
    }
    function Sh(t, e, n) {
        var i = e.getComponent("tooltip"), r = e.getComponent("axisPointer"), a = r.get("link", !0) || [], o = [];
        Lx(n.getCoordinateSystems(), function(n) {
            function s(i, s, l) {
                var c = l.model.getModel("axisPointer", r), d = c.get("show");
                if (d && ("auto" !== d || i || Lh(c))) {
                    null == s && (s = c.get("triggerTooltip"));
                    var f = (c = i ? Ih(l, u, r, e, i, s) : c).get("snap"), p = Oh(l.model), g = s || f || "category" === l.type, v = t.axesInfo[p] = {
                        key: p,
                        axis: l,
                        coordSys: n,
                        axisPointerModel: c,
                        triggerTooltip: s,
                        involveSeries: g,
                        snap: f,
                        useHandle: Lh(c),
                        seriesModels: []
                    };
                    h[p] = v, t.seriesInvolved |= g;
                    var m = Ch(a, l);
                    if (null != m) {
                        var y = o[m] || (o[m] = {
                            axesInfo: {}
                        });
                        y.axesInfo[p] = v, y.mapper = a[m].mapper, v.linkGroup = y;
                    }
                }
            }
            if (n.axisPointerEnabled) {
                var l = Oh(n.model), h = t.coordSysAxesInfo[l] = {};
                t.coordSysMap[l] = n;
                var u = n.model.getModel("tooltip", i);
                if (Lx(n.getAxes(), Ox(s, !1, null)), n.getTooltipAxes && i && u.get("show")) {
                    var c = "axis" === u.get("trigger"), d = "cross" === u.get("axisPointer.type"), f = n.getTooltipAxes(u.get("axisPointer.axis"));
                    (c || d) && Lx(f.baseAxes, Ox(s, !d || "cross", c)), d && Lx(f.otherAxes, Ox(s, "cross", !1));
                }
            }
        });
    }
    function Ih(t, e, n, r, a, o) {
        var l = e.getModel("axisPointer"), h = {};
        Lx([ "type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z" ], function(t) {
            h[t] = i(l.get(t));
        }), h.snap = "category" !== t.type && !!o, "cross" === l.get("type") && (h.type = "line");
        var u = h.label || (h.label = {});
        if (null == u.show && (u.show = !1), "cross" === a) {
            var c = l.get("label.show");
            if (u.show = null == c || c, !o) {
                var d = h.lineStyle = l.get("crossStyle");
                d && s(u, d.textStyle);
            }
        }
        return t.model.getModel("axisPointer", new wr(h, n, r));
    }
    function Th(t, e) {
        e.eachSeries(function(e) {
            var n = e.coordinateSystem, i = e.get("tooltip.trigger", !0), r = e.get("tooltip.show", !0);
            n && "none" !== i && !1 !== i && "item" !== i && !1 !== r && !1 !== e.get("axisPointer.show", !0) && Lx(t.coordSysAxesInfo[Oh(n.model)], function(t) {
                var i = t.axis;
                n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), 
                t.seriesDataCount += e.getData().count());
            });
        }, this);
    }
    function Ch(t, e) {
        for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
            var a = t[r] || {};
            if (Ah(a[i + "AxisId"], n.id) || Ah(a[i + "AxisIndex"], n.componentIndex) || Ah(a[i + "AxisName"], n.name)) return r;
        }
    }
    function Ah(t, e) {
        return "all" === t || x(t) && h(t, e) >= 0 || t === e;
    }
    function Dh(t) {
        var e = kh(t);
        if (e) {
            var n = e.axisPointerModel, i = e.axis.scale, r = n.option, a = n.get("status"), o = n.get("value");
            null != o && (o = i.parse(o));
            var s = Lh(n);
            null == a && (r.status = s ? "show" : "hide");
            var l = i.getExtent().slice();
            l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), 
            r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show");
        }
    }
    function kh(t) {
        var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
        return e && e.axesInfo[Oh(t)];
    }
    function Ph(t) {
        var e = kh(t);
        return e && e.axisPointerModel;
    }
    function Lh(t) {
        return !!t.get("handle.show");
    }
    function Oh(t) {
        return t.type + "||" + t.id;
    }
    function zh(t, e, n, i, r, a) {
        var o = zx.getAxisPointerClass(t.axisPointerClass);
        if (o) {
            var s = Ph(e);
            s ? (t._axisPointer || (t._axisPointer = new o())).render(e, s, i, a) : Bh(t, i);
        }
    }
    function Bh(t, e, n) {
        var i = t._axisPointer;
        i && i.dispose(e, n), t._axisPointer = null;
    }
    function Eh(t, e, n) {
        n = n || {};
        var i = t.coordinateSystem, r = e.axis, a = {}, o = r.getAxesOnZeroOf()[0], s = r.position, l = o ? "onZero" : s, h = r.dim, u = i.getRect(), c = [ u.x, u.x + u.width, u.y, u.y + u.height ], d = {
            left: 0,
            right: 1,
            top: 0,
            bottom: 1,
            onZero: 2
        }, f = e.get("offset") || 0, p = "x" === h ? [ c[2] - f, c[3] + f ] : [ c[0] - f, c[1] + f ];
        if (o) {
            var g = o.toGlobalCoord(o.dataToCoord(0));
            p[d.onZero] = Math.max(Math.min(g, p[1]), p[0]);
        }
        a.position = [ "y" === h ? p[d[l]] : c[0], "x" === h ? p[d[l]] : c[3] ], a.rotation = Math.PI / 2 * ("x" === h ? 0 : 1);
        var v = {
            top: -1,
            bottom: 1,
            left: -1,
            right: 1
        };
        a.labelDirection = a.tickDirection = a.nameDirection = v[s], a.labelOffset = o ? p[d[s]] - p[d.onZero] : 0, 
        e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), C(n.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);
        var m = e.get("axisLabel.rotate");
        return a.labelRotate = "top" === l ? -m : m, a.z2 = 1, a;
    }
    function Rh(t, e, n) {
        rf.call(this), this.updateData(t, e, n);
    }
    function Nh(t) {
        return [ t[0] / 2, t[1] / 2 ];
    }
    function Fh(t, e) {
        this.parent.drift(t, e);
    }
    function Vh() {
        !Ki(this) && Hh.call(this);
    }
    function Wh() {
        !Ki(this) && Gh.call(this);
    }
    function Hh() {
        if (!this.incremental && !this.useHoverLayer) {
            var t = this.__symbolOriginalScale, e = t[1] / t[0];
            this.animateTo({
                scale: [ Math.max(1.1 * t[0], t[0] + 3), Math.max(1.1 * t[1], t[1] + 3 * e) ]
            }, 400, "elasticOut");
        }
    }
    function Gh() {
        this.incremental || this.useHoverLayer || this.animateTo({
            scale: this.__symbolOriginalScale
        }, 400, "elasticOut");
    }
    function Zh(t) {
        this.group = new rf(), this._symbolCtor = t || Rh;
    }
    function Xh(t, e, n, i) {
        return !(!e || isNaN(e[0]) || isNaN(e[1]) || i.isIgnore && i.isIgnore(n) || i.clipShape && !i.clipShape.contain(e[0], e[1]) || "none" === t.getItemVisual(n, "symbol"));
    }
    function Yh(t) {
        return null == t || b(t) || (t = {
            isIgnore: t
        }), t || {};
    }
    function qh(t) {
        var e = t.hostModel;
        return {
            itemStyle: e.getModel("itemStyle").getItemStyle([ "color" ]),
            hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(),
            symbolRotate: e.get("symbolRotate"),
            symbolOffset: e.get("symbolOffset"),
            hoverAnimation: e.get("hoverAnimation"),
            labelModel: e.getModel("label"),
            hoverLabelModel: e.getModel("emphasis.label"),
            cursorStyle: e.get("cursor")
        };
    }
    function jh(t, e, n) {
        var i, r = t.getBaseAxis(), a = t.getOtherAxis(r), o = Uh(a, n), s = r.dim, l = a.dim, h = e.mapDimension(l), u = e.mapDimension(s), c = "x" === l || "radius" === l ? 1 : 0, d = p(t.dimensions, function(t) {
            return e.mapDimension(t);
        }), f = e.getCalculationInfo("stackResultDimension");
        return (i |= Ys(e, d[0])) && (d[0] = f), (i |= Ys(e, d[1])) && (d[1] = f), {
            dataDimsForPoint: d,
            valueStart: o,
            valueAxisDim: l,
            baseAxisDim: s,
            stacked: !!i,
            valueDim: h,
            baseDim: u,
            baseDataOffset: c,
            stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
        };
    }
    function Uh(t, e) {
        var n = 0, i = t.scale.getExtent();
        return "start" === e ? n = i[0] : "end" === e ? n = i[1] : i[0] > 0 ? n = i[0] : i[1] < 0 && (n = i[1]), 
        n;
    }
    function $h(t, e, n, i) {
        var r = NaN;
        t.stacked && (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)), isNaN(r) && (r = t.valueStart);
        var a = t.baseDataOffset, o = [];
        return o[a] = n.get(t.baseDim, i), o[1 - a] = r, e.dataToPoint(o);
    }
    function Kh(t, e) {
        var n = [];
        return e.diff(t).add(function(t) {
            n.push({
                cmd: "+",
                idx: t
            });
        }).update(function(t, e) {
            n.push({
                cmd: "=",
                idx: e,
                idx1: t
            });
        }).remove(function(t) {
            n.push({
                cmd: "-",
                idx: t
            });
        }).execute(), n;
    }
    function Qh(t) {
        return isNaN(t[0]) || isNaN(t[1]);
    }
    function Jh(t, e, n, i, r, a, o, s, l, h) {
        return "none" !== h && h ? tu.apply(this, arguments) : eu.apply(this, arguments);
    }
    function tu(t, e, n, i, r, a, o, s, l, h, u) {
        for (var c = 0, d = n, f = 0; i > f; f++) {
            var p = e[d];
            if (d >= r || 0 > d) break;
            if (Qh(p)) {
                if (u) {
                    d += a;
                    continue;
                }
                break;
            }
            if (d === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]); else if (l > 0) {
                var g = e[c], v = "y" === h ? 1 : 0, m = (p[v] - g[v]) * l;
                $x(Qx, g), Qx[v] = g[v] + m, $x(Jx, p), Jx[v] = p[v] - m, t.bezierCurveTo(Qx[0], Qx[1], Jx[0], Jx[1], p[0], p[1]);
            } else t.lineTo(p[0], p[1]);
            c = d, d += a;
        }
        return f;
    }
    function eu(t, e, n, i, r, a, o, s, l, h, u) {
        for (var c = 0, d = n, f = 0; i > f; f++) {
            var p = e[d];
            if (d >= r || 0 > d) break;
            if (Qh(p)) {
                if (u) {
                    d += a;
                    continue;
                }
                break;
            }
            if (d === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]), $x(Qx, p); else if (l > 0) {
                var g = d + a, v = e[g];
                if (u) for (;v && Qh(e[g]); ) v = e[g += a];
                var m = .5, y = e[c];
                if (!(v = e[g]) || Qh(v)) $x(Jx, p); else {
                    Qh(v) && !u && (v = p), Z(Kx, v, y);
                    var x, _;
                    if ("x" === h || "y" === h) {
                        var w = "x" === h ? 0 : 1;
                        x = Math.abs(p[w] - y[w]), _ = Math.abs(p[w] - v[w]);
                    } else x = pd(p, y), _ = pd(p, v);
                    Ux(Jx, p, Kx, -l * (1 - (m = _ / (_ + x))));
                }
                qx(Qx, Qx, s), jx(Qx, Qx, o), qx(Jx, Jx, s), jx(Jx, Jx, o), t.bezierCurveTo(Qx[0], Qx[1], Jx[0], Jx[1], p[0], p[1]), 
                Ux(Qx, p, Kx, l * m);
            } else t.lineTo(p[0], p[1]);
            c = d, d += a;
        }
        return f;
    }
    function nu(t, e) {
        var n = [ 1 / 0, 1 / 0 ], i = [ -1 / 0, -1 / 0 ];
        if (e) for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a[0] < n[0] && (n[0] = a[0]), a[1] < n[1] && (n[1] = a[1]), a[0] > i[0] && (i[0] = a[0]), 
            a[1] > i[1] && (i[1] = a[1]);
        }
        return {
            min: e ? n : i,
            max: e ? i : n
        };
    }
    function iu(t, e) {
        if (t.length === e.length) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n], r = e[n];
                if (i[0] !== r[0] || i[1] !== r[1]) return;
            }
            return !0;
        }
    }
    function ru(t) {
        return "number" == typeof t ? t : t ? .5 : 0;
    }
    function au(t) {
        var e = t.getGlobalExtent();
        if (t.onBand) {
            var n = t.getBandWidth() / 2 - 1, i = e[1] > e[0] ? 1 : -1;
            e[0] += i * n, e[1] -= i * n;
        }
        return e;
    }
    function ou(t, e, n) {
        if (!n.valueDim) return [];
        for (var i = [], r = 0, a = e.count(); a > r; r++) i.push($h(n, t, e, r));
        return i;
    }
    function su(t, e, n, i) {
        var r = au(t.getAxis("x")), a = au(t.getAxis("y")), o = t.getBaseAxis().isHorizontal(), s = Math.min(r[0], r[1]), l = Math.min(a[0], a[1]), h = Math.max(r[0], r[1]) - s, u = Math.max(a[0], a[1]) - l;
        if (n) s -= .5, h += .5, l -= .5, u += .5; else {
            var c = i.get("lineStyle.width") || 2, d = i.get("clipOverflow") ? c / 2 : Math.max(h, u);
            o ? (l -= d, u += 2 * d) : (s -= d, h += 2 * d);
        }
        var f = new _g({
            shape: {
                x: s,
                y: l,
                width: h,
                height: u
            }
        });
        return e && (f.shape[o ? "width" : "height"] = 0, gr(f, {
            shape: {
                width: h,
                height: u
            }
        }, i)), f;
    }
    function lu(t, e, n, i) {
        var r = t.getAngleAxis(), a = t.getRadiusAxis().getExtent().slice();
        a[0] > a[1] && a.reverse();
        var o = r.getExtent(), s = Math.PI / 180;
        n && (a[0] -= .5, a[1] += .5);
        var l = new pg({
            shape: {
                cx: Ar(t.cx, 1),
                cy: Ar(t.cy, 1),
                r0: Ar(a[0], 1),
                r: Ar(a[1], 1),
                startAngle: -o[0] * s,
                endAngle: -o[1] * s,
                clockwise: r.inverse
            }
        });
        return e && (l.shape.endAngle = -o[0] * s, gr(l, {
            shape: {
                endAngle: -o[1] * s
            }
        }, i)), l;
    }
    function hu(t, e, n, i) {
        return "polar" === t.type ? lu(t, e, n, i) : su(t, e, n, i);
    }
    function uu(t, e, n) {
        for (var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
            var s = t[o + 1], l = t[o];
            a.push(l);
            var h = [];
            switch (n) {
              case "end":
                h[r] = s[r], h[1 - r] = l[1 - r], a.push(h);
                break;

              case "middle":
                var u = (l[r] + s[r]) / 2, c = [];
                h[r] = c[r] = u, h[1 - r] = l[1 - r], c[1 - r] = s[1 - r], a.push(h), a.push(c);
                break;

              default:
                h[r] = l[r], h[1 - r] = s[1 - r], a.push(h);
            }
        }
        return t[o] && a.push(t[o]), a;
    }
    function cu(t, e) {
        var n = t.getVisual("visualMeta");
        if (n && n.length && t.count() && "cartesian2d" === e.type) {
            for (var i, r, a = n.length - 1; a >= 0; a--) {
                var o = n[a].dimension, s = t.dimensions[o], l = t.getDimensionInfo(s);
                if ("x" === (i = l && l.coordDim) || "y" === i) {
                    r = n[a];
                    break;
                }
            }
            if (r) {
                var h = e.getAxis(i), u = p(r.stops, function(t) {
                    return {
                        coord: h.toGlobalCoord(h.dataToCoord(t.value)),
                        color: t.color
                    };
                }), c = u.length, d = r.outerColors.slice();
                c && u[0].coord > u[c - 1].coord && (u.reverse(), d.reverse());
                var g = u[0].coord - 10, v = u[c - 1].coord + 10, m = v - g;
                if (.001 > m) return "transparent";
                f(u, function(t) {
                    t.offset = (t.coord - g) / m;
                }), u.push({
                    offset: c ? u[c - 1].offset : .5,
                    color: d[1] || "transparent"
                }), u.unshift({
                    offset: c ? u[0].offset : .5,
                    color: d[0] || "transparent"
                });
                var y = new Cg(0, 0, 0, 0, u, !0);
                return y[i] = g, y[i + "2"] = v, y;
            }
        }
    }
    function du(t, e, n) {
        var i = t.get("showAllSymbol"), r = "auto" === i;
        if (!i || r) {
            var a = n.getAxesByScale("ordinal")[0];
            if (a && (!r || !fu(a, e))) {
                var o = e.mapDimension(a.dim), s = {};
                return f(a.getViewLabels(), function(t) {
                    s[t.tickValue] = 1;
                }), function(t) {
                    return !s.hasOwnProperty(e.get(o, t));
                };
            }
        }
    }
    function fu(t, e) {
        var n = t.getExtent(), i = Math.abs(n[1] - n[0]) / t.scale.count();
        isNaN(i) && (i = 0);
        for (var r = e.count(), a = Math.max(1, Math.round(r / 5)), o = 0; r > o; o += a) if (1.5 * Rh.getSymbolSize(e, o)[t.isHorizontal() ? 1 : 0] > i) return !1;
        return !0;
    }
    function pu(t, e, n, i) {
        var r = e.getData(), a = this.dataIndex, o = r.getName(a), s = e.get("selectedOffset");
        i.dispatchAction({
            type: "pieToggleSelect",
            from: t,
            name: o,
            seriesId: e.id
        }), r.each(function(t) {
            gu(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, n);
        });
    }
    function gu(t, e, n, i, r) {
        var a = (e.startAngle + e.endAngle) / 2, o = Math.cos(a), s = Math.sin(a), l = n ? i : 0, h = [ o * l, s * l ];
        r ? t.animate().when(200, {
            position: h
        }).start("bounceOut") : t.attr("position", h);
    }
    function vu(t, e) {
        function n() {
            a.ignore = a.hoverIgnore, o.ignore = o.hoverIgnore;
        }
        function i() {
            a.ignore = a.normalIgnore, o.ignore = o.normalIgnore;
        }
        rf.call(this);
        var r = new pg({
            z2: 2
        }), a = new xg(), o = new ug();
        this.add(r), this.add(a), this.add(o), this.updateData(t, e, !0), this.on("emphasis", n).on("normal", i).on("mouseover", n).on("mouseout", i);
    }
    function mu(t, e, n, i, r, a, o) {
        function s(e, n) {
            for (var i = e; i >= 0 && (t[i].y -= n, !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--) ;
        }
        function l(t, e, n, i, r, a) {
            for (var o = e ? Number.MAX_VALUE : 0, s = 0, l = t.length; l > s; s++) if ("center" !== t[s].position) {
                var h = Math.abs(t[s].y - i), u = t[s].len, c = t[s].len2, d = r + u > h ? Math.sqrt((r + u + c) * (r + u + c) - h * h) : Math.abs(t[s].x - n);
                e && d >= o && (d = o - 10), !e && o >= d && (d = o + 10), t[s].x = n + d * a, o = d;
            }
        }
        t.sort(function(t, e) {
            return t.y - e.y;
        });
        for (var h, u = 0, c = t.length, d = [], f = [], p = 0; c > p; p++) 0 > (h = t[p].y - u) && function(e, n, i) {
            for (var r = e; n > r; r++) if (t[r].y += i, r > e && n > r + 1 && t[r + 1].y > t[r].y + t[r].height) return void s(r, i / 2);
            s(n - 1, i / 2);
        }(p, c, -h), u = t[p].y + t[p].height;
        0 > o - u && s(c - 1, u - o);
        for (p = 0; c > p; p++) t[p].y >= n ? f.push(t[p]) : d.push(t[p]);
        l(d, !1, e, n, i, r), l(f, !0, e, n, i, r);
    }
    function yu(t, e, n, i, r, a) {
        for (var o = [], s = [], l = 0; l < t.length; l++) t[l].x < e ? o.push(t[l]) : s.push(t[l]);
        mu(s, e, n, i, 1, r, a), mu(o, e, n, i, -1, r, a);
        for (l = 0; l < t.length; l++) {
            var h = t[l].linePoints;
            if (h) {
                var u = h[1][0] - h[2][0];
                h[2][0] = t[l].x < e ? t[l].x + 3 : t[l].x - 3, h[1][1] = h[2][1] = t[l].y, h[1][0] = h[2][0] + u;
            }
        }
    }
    function xu(t, e, n) {
        var i, r = {}, a = "toggleSelected" === t;
        return n.eachComponent("legend", function(n) {
            a && null != i ? n[i ? "select" : "unSelect"](e.name) : (n[t](e.name), i = n.isSelected(e.name)), 
            f(n.getData(), function(t) {
                var e = t.get("name");
                if ("\n" !== e && "" !== e) {
                    var i = n.isSelected(e);
                    r[e] = r.hasOwnProperty(e) ? r[e] && i : i;
                }
            });
        }), {
            name: e.name,
            selected: r
        };
    }
    function _u(t, e) {
        var n = qg(e.get("padding")), i = e.getItemStyle([ "color", "opacity" ]);
        return i.fill = e.get("backgroundColor"), t = new _g({
            shape: {
                x: t.x - n[3],
                y: t.y - n[0],
                width: t.width + n[1] + n[3],
                height: t.height + n[0] + n[2],
                r: e.get("borderRadius")
            },
            style: i,
            silent: !0,
            z2: -1
        });
    }
    function wu(t, e) {
        e.dispatchAction({
            type: "legendToggleSelect",
            name: t
        });
    }
    function bu(t, e, n, i) {
        var r = n.getZr().storage.getDisplayList()[0];
        r && r.useHoverLayer || n.dispatchAction({
            type: "highlight",
            seriesName: t,
            name: e,
            excludeSeriesId: i
        });
    }
    function Mu(t, e, n, i) {
        var r = n.getZr().storage.getDisplayList()[0];
        r && r.useHoverLayer || n.dispatchAction({
            type: "downplay",
            seriesName: t,
            name: e,
            excludeSeriesId: i
        });
    }
    function Su(t, e, n) {
        var i = [ 1, 1 ];
        i[t.getOrient().index] = 0, Ur(e, n, {
            type: "box",
            ignoreSize: i
        });
    }
    function Iu(t, e, n, i, r) {
        var a = t.axis;
        if (!a.scale.isBlank() && a.containData(e)) {
            if (!t.involveSeries) return void n.showPointer(t, e);
            var s = Tu(e, t), l = s.payloadBatch, h = s.snapToValue;
            l[0] && null == r.seriesIndex && o(r, l[0]), !i && t.snap && a.containData(h) && null != h && (e = h), 
            n.showPointer(t, e, l, r), n.showTooltip(t, s, h);
        }
    }
    function Tu(t, e) {
        var n = e.axis, i = n.dim, r = t, a = [], o = Number.MAX_VALUE, s = -1;
        return M_(e.seriesModels, function(e) {
            var l, h, u = e.getData().mapDimension(i, !0);
            if (e.getAxisTooltipData) {
                var c = e.getAxisTooltipData(u, t, n);
                h = c.dataIndices, l = c.nestestValue;
            } else {
                if (!(h = e.getData().indicesOfNearest(u[0], t, "category" === n.type ? .5 : null)).length) return;
                l = e.getData().get(u[0], h[0]);
            }
            if (null != l && isFinite(l)) {
                var d = t - l, f = Math.abs(d);
                o >= f && ((o > f || d >= 0 && 0 > s) && (o = f, s = d, r = l, a.length = 0), M_(h, function(t) {
                    a.push({
                        seriesIndex: e.seriesIndex,
                        dataIndexInside: t,
                        dataIndex: e.getData().getRawIndex(t)
                    });
                }));
            }
        }), {
            payloadBatch: a,
            snapToValue: r
        };
    }
    function Cu(t, e, n, i) {
        t[e.key] = {
            value: n,
            payloadBatch: i
        };
    }
    function Au(t, e, n, i) {
        var r = n.payloadBatch, a = e.axis, o = a.model, s = e.axisPointerModel;
        if (e.triggerTooltip && r.length) {
            var l = e.coordSys.model, h = Oh(l), u = t.map[h];
            u || (u = t.map[h] = {
                coordSysId: l.id,
                coordSysIndex: l.componentIndex,
                coordSysType: l.type,
                coordSysMainType: l.mainType,
                dataByAxis: []
            }, t.list.push(u)), u.dataByAxis.push({
                axisDim: a.dim,
                axisIndex: o.componentIndex,
                axisType: o.type,
                axisId: o.id,
                value: i,
                valueLabelOpt: {
                    precision: s.get("label.precision"),
                    formatter: s.get("label.formatter")
                },
                seriesDataIndices: r.slice()
            });
        }
    }
    function Du(t, e, n) {
        var i = n.axesInfo = [];
        M_(e, function(e, n) {
            var r = e.axisPointerModel.option, a = t[n];
            a ? (!e.useHandle && (r.status = "show"), r.value = a.value, r.seriesDataIndices = (a.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), 
            "show" === r.status && i.push({
                axisDim: e.axis.dim,
                axisIndex: e.axis.model.componentIndex,
                value: r.value
            });
        });
    }
    function ku(t, e, n, i) {
        if (!zu(e) && t.list.length) {
            var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
            i({
                type: "showTip",
                escapeConnect: !0,
                x: e[0],
                y: e[1],
                tooltipOption: n.tooltipOption,
                position: n.position,
                dataIndexInside: r.dataIndexInside,
                dataIndex: r.dataIndex,
                seriesIndex: r.seriesIndex,
                dataByCoordSys: t.list
            });
        } else i({
            type: "hideTip"
        });
    }
    function Pu(t, e, n) {
        var i = n.getZr(), r = "axisPointerLastHighlights", a = I_(i)[r] || {}, o = I_(i)[r] = {};
        M_(t, function(t) {
            var e = t.axisPointerModel.option;
            "show" === e.status && M_(e.seriesDataIndices, function(t) {
                var e = t.seriesIndex + " | " + t.dataIndex;
                o[e] = t;
            });
        });
        var s = [], l = [];
        f(a, function(t, e) {
            !o[e] && l.push(t);
        }), f(o, function(t, e) {
            !a[e] && s.push(t);
        }), l.length && n.dispatchAction({
            type: "downplay",
            escapeConnect: !0,
            batch: l
        }), s.length && n.dispatchAction({
            type: "highlight",
            escapeConnect: !0,
            batch: s
        });
    }
    function Lu(t, e) {
        for (var n = 0; n < (t || []).length; n++) {
            var i = t[n];
            if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i;
        }
    }
    function Ou(t) {
        var e = t.axis.model, n = {}, i = n.axisDim = t.axis.dim;
        return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, 
        n.axisId = n[i + "AxisId"] = e.id, n;
    }
    function zu(t) {
        return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1]);
    }
    function Bu(t, e, n) {
        if (!$c.node) {
            var i = e.getZr();
            T_(i).records || (T_(i).records = {}), Eu(i, e), (T_(i).records[t] || (T_(i).records[t] = {})).handler = n;
        }
    }
    function Eu(t, e) {
        function n(n, i) {
            t.on(n, function(n) {
                var r = Vu(e);
                C_(T_(t).records, function(t) {
                    t && i(t, n, r.dispatchAction);
                }), Ru(r.pendings, e);
            });
        }
        T_(t).initialized || (T_(t).initialized = !0, n("click", y(Fu, "click")), n("mousemove", y(Fu, "mousemove")), 
        n("globalout", Nu));
    }
    function Ru(t, e) {
        var n, i = t.showTip.length, r = t.hideTip.length;
        i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]), n && (n.dispatchAction = null, 
        e.dispatchAction(n));
    }
    function Nu(t, e, n) {
        t.handler("leave", null, n);
    }
    function Fu(t, e, n, i) {
        e.handler(t, n, i);
    }
    function Vu(t) {
        var e = {
            showTip: [],
            hideTip: []
        };
        return {
            dispatchAction: function n(i) {
                var r = e[i.type];
                r ? r.push(i) : (i.dispatchAction = n, t.dispatchAction(i));
            },
            pendings: e
        };
    }
    function Wu(t, e) {
        if (!$c.node) {
            var n = e.getZr();
            (T_(n).records || {})[t] && (T_(n).records[t] = null);
        }
    }
    function Hu() {}
    function Gu(t, e, n, i) {
        Zu(D_(n).lastProp, i) || (D_(n).lastProp = i, e ? pr(n, i, t) : (n.stopAnimation(), 
        n.attr(i)));
    }
    function Zu(t, e) {
        if (b(t) && b(e)) {
            var n = !0;
            return f(e, function(e, i) {
                n = n && Zu(t[i], e);
            }), !!n;
        }
        return t === e;
    }
    function Xu(t, e) {
        t[e.get("label.show") ? "show" : "hide"]();
    }
    function Yu(t) {
        return {
            position: t.position.slice(),
            rotation: t.rotation || 0
        };
    }
    function qu(t, e, n) {
        var i = e.get("z"), r = e.get("zlevel");
        t && t.traverse(function(t) {
            "group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), t.silent = n);
        });
    }
    function ju(t) {
        var e, n = t.get("type"), i = t.getModel(n + "Style");
        return "line" === n ? (e = i.getLineStyle(), e.fill = null) : "shadow" === n && (e = i.getAreaStyle(), 
        e.stroke = null), e;
    }
    function Uu(t, e, n, i, r) {
        var a = Ku(n.get("value"), e.axis, e.ecModel, n.get("seriesDataIndices"), {
            precision: n.get("label.precision"),
            formatter: n.get("label.formatter")
        }), o = n.getModel("label"), s = qg(o.get("padding") || 0), l = o.getFont(), h = Me(a, l), u = r.position, c = h.width + s[1] + s[3], d = h.height + s[0] + s[2], f = r.align;
        "right" === f && (u[0] -= c), "center" === f && (u[0] -= c / 2);
        var p = r.verticalAlign;
        "bottom" === p && (u[1] -= d), "middle" === p && (u[1] -= d / 2), $u(u, c, d, i);
        var g = o.get("backgroundColor");
        g && "auto" !== g || (g = e.get("axisLine.lineStyle.color")), t.label = {
            shape: {
                x: 0,
                y: 0,
                width: c,
                height: d,
                r: o.get("borderRadius")
            },
            position: u.slice(),
            style: {
                text: a,
                textFont: l,
                textFill: o.getTextColor(),
                textPosition: "inside",
                fill: g,
                stroke: o.get("borderColor") || "transparent",
                lineWidth: o.get("borderWidth") || 0,
                shadowBlur: o.get("shadowBlur"),
                shadowColor: o.get("shadowColor"),
                shadowOffsetX: o.get("shadowOffsetX"),
                shadowOffsetY: o.get("shadowOffsetY")
            },
            z2: 10
        };
    }
    function $u(t, e, n, i) {
        var r = i.getWidth(), a = i.getHeight();
        t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + n, a) - n, t[0] = Math.max(t[0], 0), 
        t[1] = Math.max(t[1], 0);
    }
    function Ku(t, e, n, i, r) {
        t = e.scale.parse(t);
        var a = e.scale.getLabel(t, {
            precision: r.precision
        }), o = r.formatter;
        if (o) {
            var s = {
                value: bl(e, t),
                seriesData: []
            };
            f(i, function(t) {
                var e = n.getSeriesByIndex(t.seriesIndex), i = t.dataIndexInside, r = e && e.getDataParams(i);
                r && s.seriesData.push(r);
            }), w(o) ? a = o.replace("{value}", a) : _(o) && (a = o(s));
        }
        return a;
    }
    function Qu(t, e, n) {
        var i = pt();
        return xt(i, i, n.rotation), yt(i, i, n.position), mr([ t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0) ], i);
    }
    function Ju(t, e, n, i, r, a) {
        var o = Dx.innerTextLayout(n.rotation, 0, n.labelDirection);
        n.labelMargin = r.get("label.margin"), Uu(e, i, r, a, {
            position: Qu(i.axis, t, n),
            align: o.textAlign,
            verticalAlign: o.textVerticalAlign
        });
    }
    function tc(t, e, n) {
        return n = n || 0, {
            x1: t[n],
            y1: t[1 - n],
            x2: e[n],
            y2: e[1 - n]
        };
    }
    function ec(t, e, n) {
        return n = n || 0, {
            x: t[n],
            y: t[1 - n],
            width: e[n],
            height: e[1 - n]
        };
    }
    function nc(t, e) {
        var n = {};
        return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n);
    }
    function ic(t) {
        return "x" === t.dim ? 0 : 1;
    }
    function rc(t) {
        var e = "cubic-bezier(0.23, 1, 0.32, 1)", n = "left " + t + "s " + e + ",top " + t + "s " + e;
        return p(E_, function(t) {
            return t + "transition:" + n;
        }).join(";");
    }
    function ac(t) {
        var e = [], n = t.get("fontSize"), i = t.getTextColor();
        return i && e.push("color:" + i), e.push("font:" + t.getFont()), n && e.push("line-height:" + Math.round(3 * n / 2) + "px"), 
        z_([ "decoration", "align" ], function(n) {
            var i = t.get(n);
            i && e.push("text-" + n + ":" + i);
        }), e.join(";");
    }
    function oc(t) {
        var e = [], n = t.get("transitionDuration"), i = t.get("backgroundColor"), r = t.getModel("textStyle"), a = t.get("padding");
        return n && e.push(rc(n)), i && ($c.canvasSupported ? e.push("background-Color:" + i) : (e.push("background-Color:#" + Nt(i)), 
        e.push("filter:alpha(opacity=70)"))), z_([ "width", "color", "radius" ], function(n) {
            var i = "border-" + n, r = B_(i), a = t.get(r);
            null != a && e.push(i + ":" + a + ("color" === n ? "" : "px"));
        }), e.push(ac(r)), null != a && e.push("padding:" + qg(a).join("px ") + "px"), e.join(";") + ";";
    }
    function sc(t, e) {
        if ($c.wxa) return null;
        var n = document.createElement("div"), i = this._zr = e.getZr();
        this.el = n, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(n), 
        this._container = t, this._show = !1, this._hideTimeout;
        var r = this;
        n.onmouseenter = function() {
            r._enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0;
        }, n.onmousemove = function(e) {
            if (e = e || window.event, !r._enterable) {
                var n = i.handler;
                ot(t, e, !0), n.dispatch("mousemove", e);
            }
        }, n.onmouseleave = function() {
            r._enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1;
        };
    }
    function lc(t) {
        this._zr = t.getZr(), this._show = !1, this._hideTimeout;
    }
    function hc(t) {
        for (var e = t.pop(); t.length; ) {
            var n = t.pop();
            n && (wr.isInstance(n) && (n = n.get("tooltip", !0)), "string" == typeof n && (n = {
                formatter: n
            }), e = new wr(n, e, e.ecModel));
        }
        return e;
    }
    function uc(t, e) {
        return t.dispatchAction || m(e.dispatchAction, e);
    }
    function cc(t, e, n, i, r, a, o) {
        var s = n.getOuterSize(), l = s.width, h = s.height;
        return null != a && (t + l + a > i ? t -= l + a : t += a), null != o && (e + h + o > r ? e -= h + o : e += o), 
        [ t, e ];
    }
    function dc(t, e, n, i, r) {
        var a = n.getOuterSize(), o = a.width, s = a.height;
        return t = Math.min(t + o, i) - o, e = Math.min(e + s, r) - s, t = Math.max(t, 0), 
        e = Math.max(e, 0), [ t, e ];
    }
    function fc(t, e, n) {
        var i = n[0], r = n[1], a = 0, o = 0, s = e.width, l = e.height;
        switch (t) {
          case "inside":
            a = e.x + s / 2 - i / 2, o = e.y + l / 2 - r / 2;
            break;

          case "top":
            a = e.x + s / 2 - i / 2, o = e.y - r - 5;
            break;

          case "bottom":
            a = e.x + s / 2 - i / 2, o = e.y + l + 5;
            break;

          case "left":
            a = e.x - i - 5, o = e.y + l / 2 - r / 2;
            break;

          case "right":
            a = e.x + s + 5, o = e.y + l / 2 - r / 2;
        }
        return [ a, o ];
    }
    function pc(t) {
        return "center" === t || "middle" === t;
    }
    function gc(t) {
        return h(W_, t) >= 0;
    }
    function vc(t, e, n) {
        function i(t, e) {
            return h(e.nodes, t) >= 0;
        }
        function r(t, i) {
            var r = !1;
            return e(function(e) {
                f(n(t, e) || [], function(t) {
                    i.records[e.name][t] && (r = !0);
                });
            }), r;
        }
        function a(t, i) {
            i.nodes.push(t), e(function(e) {
                f(n(t, e) || [], function(t) {
                    i.records[e.name][t] = !0;
                });
            });
        }
        return function(n) {
            var o = {
                nodes: [],
                records: {}
            };
            if (e(function(t) {
                o.records[t.name] = {};
            }), !n) return o;
            a(n, o);
            var s;
            do {
                s = !1, t(function(t) {
                    !i(t, o) && r(t, o) && (a(t, o), s = !0);
                });
            } while (s);
            return o;
        };
    }
    function mc(t, e, n) {
        var i = [ 1 / 0, -1 / 0 ];
        return G_(n, function(t) {
            var n = t.getData();
            n && G_(n.mapDimension(e, !0), function(t) {
                var e = n.getApproximateExtent(t);
                e[0] < i[0] && (i[0] = e[0]), e[1] > i[1] && (i[1] = e[1]);
            });
        }), i[1] < i[0] && (i = [ NaN, NaN ]), yc(t, i), i;
    }
    function yc(t, e) {
        var n = t.getAxisModel(), i = n.getMin(!0), r = "category" === n.get("type"), a = r && n.getCategories().length;
        null != i && "dataMin" !== i && "function" != typeof i ? e[0] = i : r && (e[0] = a > 0 ? 0 : NaN);
        var o = n.getMax(!0);
        return null != o && "dataMax" !== o && "function" != typeof o ? e[1] = o : r && (e[1] = a > 0 ? a - 1 : NaN), 
        n.get("scale", !0) || (e[0] > 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0)), e;
    }
    function xc(t, e) {
        var n = t.getAxisModel(), i = t._percentWindow, r = t._valueWindow;
        if (i) {
            var a = Pr(r, [ 0, 500 ]);
            a = Math.min(a, 20);
            var o = e || 0 === i[0] && 100 === i[1];
            n.setRange(o ? null : +r[0].toFixed(a), o ? null : +r[1].toFixed(a));
        }
    }
    function _c(t) {
        var e = t._minMaxSpan = {}, n = t._dataZoomModel;
        G_([ "min", "max" ], function(i) {
            e[i + "Span"] = n.get(i + "Span");
            var r = n.get(i + "ValueSpan");
            if (null != r && (e[i + "ValueSpan"] = r, null != (r = t.getAxisModel().axis.scale.parse(r)))) {
                var a = t._dataExtent;
                e[i + "Span"] = Tr(a[0] + r, a, [ 0, 100 ], !0);
            }
        });
    }
    function wc(t) {
        var e = {};
        return Y_([ "start", "end", "startValue", "endValue", "throttle" ], function(n) {
            t.hasOwnProperty(n) && (e[n] = t[n]);
        }), e;
    }
    function bc(t, e) {
        var n = t._rangePropMode, i = t.get("rangeMode");
        Y_([ [ "start", "startValue" ], [ "end", "endValue" ] ], function(t, r) {
            var a = null != e[t[0]], o = null != e[t[1]];
            a && !o ? n[r] = "percent" : !a && o ? n[r] = "value" : i ? n[r] = i[r] : a && (n[r] = "percent");
        });
    }
    function Mc(t, e) {
        var n = t[e] - t[1 - e];
        return {
            span: Math.abs(n),
            sign: n > 0 ? -1 : 0 > n ? 1 : e ? -1 : 1
        };
    }
    function Sc(t, e) {
        return Math.min(e[1], Math.max(e[0], t));
    }
    function Ic(t) {
        return {
            x: "y",
            y: "x",
            radius: "angle",
            angle: "radius"
        }[t];
    }
    function Tc(t) {
        return "vertical" === t ? "ns-resize" : "ew-resize";
    }
    function Cc(t, e) {
        return !!Ac(t)[e];
    }
    function Ac(t) {
        return t[sw] || (t[sw] = {});
    }
    function Dc(t) {
        this.pointerChecker, this._zr = t, this._opt = {};
        var e = m, n = e(kc, this), r = e(Pc, this), a = e(Lc, this), o = e(Oc, this), l = e(zc, this);
        yd.call(this), this.setPointerChecker = function(t) {
            this.pointerChecker = t;
        }, this.enable = function(e, h) {
            this.disable(), this._opt = s(i(h) || {}, {
                zoomOnMouseWheel: !0,
                moveOnMouseMove: !0,
                moveOnMouseWheel: !1,
                preventDefaultMouseMove: !0
            }), null == e && (e = !0), (!0 === e || "move" === e || "pan" === e) && (t.on("mousedown", n), 
            t.on("mousemove", r), t.on("mouseup", a)), (!0 === e || "scale" === e || "zoom" === e) && (t.on("mousewheel", o), 
            t.on("pinch", l));
        }, this.disable = function() {
            t.off("mousedown", n), t.off("mousemove", r), t.off("mouseup", a), t.off("mousewheel", o), 
            t.off("pinch", l);
        }, this.dispose = this.disable, this.isDragging = function() {
            return this._dragging;
        }, this.isPinching = function() {
            return this._pinching;
        };
    }
    function kc(t) {
        if (!(ht(t) || t.target && t.target.draggable)) {
            var e = t.offsetX, n = t.offsetY;
            this.pointerChecker && this.pointerChecker(t, e, n) && (this._x = e, this._y = n, 
            this._dragging = !0);
        }
    }
    function Pc(t) {
        if (!ht(t) && Rc("moveOnMouseMove", t, this._opt) && this._dragging && "pinch" !== t.gestureEvent && !Cc(this._zr, "globalPan")) {
            var e = t.offsetX, n = t.offsetY, i = this._x, r = this._y, a = e - i, o = n - r;
            this._x = e, this._y = n, this._opt.preventDefaultMouseMove && wd(t.event), Ec(this, "pan", "moveOnMouseMove", t, {
                dx: a,
                dy: o,
                oldX: i,
                oldY: r,
                newX: e,
                newY: n
            });
        }
    }
    function Lc(t) {
        ht(t) || (this._dragging = !1);
    }
    function Oc(t) {
        var e = Rc("zoomOnMouseWheel", t, this._opt), n = Rc("moveOnMouseWheel", t, this._opt), i = t.wheelDelta, r = Math.abs(i), a = t.offsetX, o = t.offsetY;
        if (0 !== i && (e || n)) {
            if (e) {
                var s = r > 3 ? 1.4 : r > 1 ? 1.2 : 1.1;
                Bc(this, "zoom", "zoomOnMouseWheel", t, {
                    scale: i > 0 ? s : 1 / s,
                    originX: a,
                    originY: o
                });
            }
            if (n) {
                var l = Math.abs(i);
                Bc(this, "scrollMove", "moveOnMouseWheel", t, {
                    scrollDelta: (i > 0 ? 1 : -1) * (l > 3 ? .4 : l > 1 ? .15 : .05),
                    originX: a,
                    originY: o
                });
            }
        }
    }
    function zc(t) {
        Cc(this._zr, "globalPan") || Bc(this, "zoom", null, t, {
            scale: t.pinchScale > 1 ? 1.1 : 1 / 1.1,
            originX: t.pinchX,
            originY: t.pinchY
        });
    }
    function Bc(t, e, n, i, r) {
        t.pointerChecker && t.pointerChecker(i, r.originX, r.originY) && (wd(i.event), Ec(t, e, n, i, r));
    }
    function Ec(t, e, n, i, r) {
        r.isAvailableBehavior = m(Rc, null, n, i), t.trigger(e, r);
    }
    function Rc(t, e, n) {
        var i = n[t];
        return !t || i && (!w(i) || e.event[i + "Key"]);
    }
    function Nc(t, e) {
        var n = Wc(t), i = e.dataZoomId, r = e.coordId;
        f(n, function(t) {
            var n = t.dataZoomInfos;
            n[i] && h(e.allCoordIds, r) < 0 && (delete n[i], t.count--);
        }), Gc(n);
        var a = n[r];
        a || (a = n[r] = {
            coordId: r,
            dataZoomInfos: {},
            count: 0
        }, a.controller = Hc(t, a), a.dispatchAction = y(Zc, t)), !a.dataZoomInfos[i] && a.count++, 
        a.dataZoomInfos[i] = e;
        var o = Xc(a.dataZoomInfos);
        a.controller.enable(o.controlType, o.opt), a.controller.setPointerChecker(e.containsPoint), 
        go(a, "dispatchAction", e.dataZoomModel.get("throttle", !0), "fixRate");
    }
    function Fc(t, e) {
        var n = Wc(t);
        f(n, function(t) {
            t.controller.dispose();
            var n = t.dataZoomInfos;
            n[e] && (delete n[e], t.count--);
        }), Gc(n);
    }
    function Vc(t) {
        return t.type + "\0_" + t.id;
    }
    function Wc(t) {
        var e = t.getZr();
        return e[lw] || (e[lw] = {});
    }
    function Hc(t, e) {
        var n = new Dc(t.getZr());
        return f([ "pan", "zoom", "scrollMove" ], function(t) {
            n.on(t, function(n) {
                var i = [];
                f(e.dataZoomInfos, function(r) {
                    if (n.isAvailableBehavior(r.dataZoomModel.option)) {
                        var a = (r.getRange || {})[t], o = a && a(e.controller, n);
                        !r.dataZoomModel.get("disabled", !0) && o && i.push({
                            dataZoomId: r.dataZoomId,
                            start: o[0],
                            end: o[1]
                        });
                    }
                }), i.length && e.dispatchAction(i);
            });
        }), n;
    }
    function Gc(t) {
        f(t, function(e, n) {
            e.count || (e.controller.dispose(), delete t[n]);
        });
    }
    function Zc(t, e) {
        t.dispatchAction({
            type: "dataZoom",
            batch: e
        });
    }
    function Xc(t) {
        var e, n = "type_", i = {
            type_true: 2,
            type_move: 1,
            type_false: 0,
            type_undefined: -1
        }, r = !0;
        return f(t, function(t) {
            var a = t.dataZoomModel, o = !a.get("disabled", !0) && (!a.get("zoomLock", !0) || "move");
            i[n + o] > i[n + e] && (e = o), r &= a.get("preventDefaultMouseMove", !0);
        }), {
            controlType: e,
            opt: {
                zoomOnMouseWheel: !0,
                moveOnMouseMove: !0,
                moveOnMouseWheel: !0,
                preventDefaultMouseMove: !!r
            }
        };
    }
    function Yc(t) {
        return function(e, n, i, r) {
            var a = this._range, o = a.slice(), s = e.axisModels[0];
            if (s) {
                var l = t(o, s, e, n, i, r);
                return $_(l, o, [ 0, 100 ], "all"), this._range = o, a[0] !== o[0] || a[1] !== o[1] ? o : void 0;
            }
        };
    }
    var qc = 2311, jc = function() {
        return qc++;
    }, Uc = {}, $c = Uc = "object" == ("undefined" == typeof wx ? "undefined" : t(wx)) && "function" == typeof wx.getSystemInfoSync ? {
        browser: {},
        os: {},
        node: !1,
        wxa: !0,
        canvasSupported: !0,
        svgSupported: !1,
        touchEventsSupported: !0,
        domSupported: !1
    } : "undefined" == typeof document && "undefined" != typeof self ? {
        browser: {},
        os: {},
        node: !1,
        worker: !0,
        canvasSupported: !0,
        domSupported: !1
    } : "undefined" == typeof navigator ? {
        browser: {},
        os: {},
        node: !0,
        worker: !1,
        canvasSupported: !0,
        svgSupported: !0,
        domSupported: !1
    } : function(t) {
        var e = {}, n = {}, i = t.match(/Firefox\/([\d.]+)/), r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), a = t.match(/Edge\/([\d.]+)/), o = /micromessenger/i.test(t);
        return i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), 
        a && (n.edge = !0, n.version = a[1]), o && (n.weChat = !0), {
            browser: n,
            os: e,
            node: !1,
            canvasSupported: !!document.createElement("canvas").getContext,
            svgSupported: "undefined" != typeof SVGRect,
            touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge,
            pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11),
            domSupported: "undefined" != typeof document
        };
    }(navigator.userAgent), Kc = {
        "[object Function]": 1,
        "[object RegExp]": 1,
        "[object Date]": 1,
        "[object Error]": 1,
        "[object CanvasGradient]": 1,
        "[object CanvasPattern]": 1,
        "[object Image]": 1,
        "[object Canvas]": 1
    }, Qc = {
        "[object Int8Array]": 1,
        "[object Uint8Array]": 1,
        "[object Uint8ClampedArray]": 1,
        "[object Int16Array]": 1,
        "[object Uint16Array]": 1,
        "[object Int32Array]": 1,
        "[object Uint32Array]": 1,
        "[object Float32Array]": 1,
        "[object Float64Array]": 1
    }, Jc = Object.prototype.toString, td = Array.prototype, ed = td.forEach, nd = td.filter, id = td.slice, rd = td.map, ad = td.reduce, od = {}, sd = function() {
        return od.createCanvas();
    };
    od.createCanvas = function() {
        return document.createElement("canvas");
    };
    var ld, hd = "__ec_primitive__";
    E.prototype = {
        constructor: E,
        get: function(t) {
            return this.data.hasOwnProperty(t) ? this.data[t] : null;
        },
        set: function(t, e) {
            return this.data[t] = e;
        },
        each: function(t, e) {
            void 0 !== e && (t = m(t, e));
            for (var n in this.data) this.data.hasOwnProperty(n) && t(this.data[n], n);
        },
        removeKey: function(t) {
            delete this.data[t];
        }
    };
    var ud = (Object.freeze || Object)({
        $override: n,
        clone: i,
        merge: r,
        mergeAll: a,
        extend: o,
        defaults: s,
        createCanvas: sd,
        getContext: l,
        indexOf: h,
        inherits: u,
        mixin: c,
        isArrayLike: d,
        each: f,
        map: p,
        reduce: g,
        filter: v,
        find: function(t, e, n) {
            if (t && e) for (var i = 0, r = t.length; r > i; i++) if (e.call(n, t[i], i, t)) return t[i];
        },
        bind: m,
        curry: y,
        isArray: x,
        isFunction: _,
        isString: w,
        isObject: b,
        isBuiltInObject: M,
        isTypedArray: S,
        isDom: I,
        eqNaN: T,
        retrieve: C,
        retrieve2: A,
        retrieve3: D,
        slice: k,
        normalizeCssArray: P,
        assert: L,
        trim: O,
        setAsPrimitive: z,
        isPrimitive: B,
        createHashMap: R,
        concatArray: function(t, e) {
            for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];
            var r = t.length;
            for (i = 0; i < e.length; i++) n[i + r] = e[i];
            return n;
        },
        noop: N
    }), cd = "undefined" == typeof Float32Array ? Array : Float32Array, dd = X, fd = Y, pd = U, gd = $, vd = (Object.freeze || Object)({
        create: F,
        copy: V,
        clone: W,
        set: function(t, e, n) {
            return t[0] = e, t[1] = n, t;
        },
        add: H,
        scaleAndAdd: G,
        sub: Z,
        len: X,
        length: dd,
        lenSquare: Y,
        lengthSquare: fd,
        mul: function(t, e, n) {
            return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t;
        },
        div: function(t, e, n) {
            return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t;
        },
        dot: function(t, e) {
            return t[0] * e[0] + t[1] * e[1];
        },
        scale: q,
        normalize: j,
        distance: U,
        dist: pd,
        distanceSquare: $,
        distSquare: gd,
        negate: function(t, e) {
            return t[0] = -e[0], t[1] = -e[1], t;
        },
        lerp: function(t, e, n, i) {
            return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t;
        },
        applyTransform: K,
        min: Q,
        max: J
    });
    tt.prototype = {
        constructor: tt,
        _dragStart: function(t) {
            var e = t.target;
            e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, 
            this._y = t.offsetY, this.dispatchToElement(et(e, t), "dragstart", t.event));
        },
        _drag: function(t) {
            var e = this._draggingTarget;
            if (e) {
                var n = t.offsetX, i = t.offsetY, r = n - this._x, a = i - this._y;
                this._x = n, this._y = i, e.drift(r, a, t), this.dispatchToElement(et(e, t), "drag", t.event);
                var o = this.findHover(n, i, e).target, s = this._dropTarget;
                this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(et(s, t), "dragleave", t.event), 
                o && o !== s && this.dispatchToElement(et(o, t), "dragenter", t.event));
            }
        },
        _dragEnd: function(t) {
            var e = this._draggingTarget;
            e && (e.dragging = !1), this.dispatchToElement(et(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(et(this._dropTarget, t), "drop", t.event), 
            this._draggingTarget = null, this._dropTarget = null;
        }
    };
    var md = Array.prototype.slice, yd = function(t) {
        this._$handlers = {}, this._$eventProcessor = t;
    };
    yd.prototype = {
        constructor: yd,
        one: function(t, e, n, i) {
            var r = this._$handlers;
            if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;
            e = nt(this, e), r[t] || (r[t] = []);
            for (var a = 0; a < r[t].length; a++) if (r[t][a].h === n) return this;
            return r[t].push({
                h: n,
                one: !0,
                query: e,
                ctx: i || this
            }), this;
        },
        on: function(t, e, n, i) {
            var r = this._$handlers;
            if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;
            e = nt(this, e), r[t] || (r[t] = []);
            for (var a = 0; a < r[t].length; a++) if (r[t][a].h === n) return this;
            return r[t].push({
                h: n,
                one: !1,
                query: e,
                ctx: i || this
            }), this;
        },
        isSilent: function(t) {
            var e = this._$handlers;
            return e[t] && e[t].length;
        },
        off: function(t, e) {
            var n = this._$handlers;
            if (!t) return this._$handlers = {}, this;
            if (e) {
                if (n[t]) {
                    for (var i = [], r = 0, a = n[t].length; a > r; r++) n[t][r].h !== e && i.push(n[t][r]);
                    n[t] = i;
                }
                n[t] && 0 === n[t].length && delete n[t];
            } else delete n[t];
            return this;
        },
        trigger: function(t) {
            var e = this._$handlers[t], n = this._$eventProcessor;
            if (e) {
                var i = arguments, r = i.length;
                r > 3 && (i = md.call(i, 1));
                for (var a = e.length, o = 0; a > o; ) {
                    var s = e[o];
                    if (n && n.filter && null != s.query && !n.filter(t, s.query)) o++; else {
                        switch (r) {
                          case 1:
                            s.h.call(s.ctx);
                            break;

                          case 2:
                            s.h.call(s.ctx, i[1]);
                            break;

                          case 3:
                            s.h.call(s.ctx, i[1], i[2]);
                            break;

                          default:
                            s.h.apply(s.ctx, i);
                        }
                        s.one ? (e.splice(o, 1), a--) : o++;
                    }
                }
            }
            return n && n.afterTrigger && n.afterTrigger(t), this;
        },
        triggerWithContext: function(t) {
            var e = this._$handlers[t], n = this._$eventProcessor;
            if (e) {
                var i = arguments, r = i.length;
                r > 4 && (i = md.call(i, 1, i.length - 1));
                for (var a = i[i.length - 1], o = e.length, s = 0; o > s; ) {
                    var l = e[s];
                    if (n && n.filter && null != l.query && !n.filter(t, l.query)) s++; else {
                        switch (r) {
                          case 1:
                            l.h.call(a);
                            break;

                          case 2:
                            l.h.call(a, i[1]);
                            break;

                          case 3:
                            l.h.call(a, i[1], i[2]);
                            break;

                          default:
                            l.h.apply(a, i);
                        }
                        l.one ? (e.splice(s, 1), o--) : s++;
                    }
                }
            }
            return n && n.afterTrigger && n.afterTrigger(t), this;
        }
    };
    var xd = "undefined" != typeof window && !!window.addEventListener, _d = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, wd = xd ? function(t) {
        t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0;
    } : function(t) {
        t.returnValue = !1, t.cancelBubble = !0;
    }, bd = "silent";
    dt.prototype.dispose = function() {};
    var Md = [ "click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu" ], Sd = function(t, e, n, i) {
        yd.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new dt(), 
        this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, 
        tt.call(this), this.setHandlerProxy(n);
    };
    Sd.prototype = {
        constructor: Sd,
        setHandlerProxy: function(t) {
            this.proxy && this.proxy.dispose(), t && (f(Md, function(e) {
                t.on && t.on(e, this[e], this);
            }, this), t.handler = this), this.proxy = t;
        },
        mousemove: function(t) {
            var e = t.zrX, n = t.zrY, i = this._hovered, r = i.target;
            r && !r.__zr && (i = this.findHover(i.x, i.y), r = i.target);
            var a = this._hovered = this.findHover(e, n), o = a.target, s = this.proxy;
            s.setCursor && s.setCursor(o ? o.cursor : "default"), r && o !== r && this.dispatchToElement(i, "mouseout", t), 
            this.dispatchToElement(a, "mousemove", t), o && o !== r && this.dispatchToElement(a, "mouseover", t);
        },
        mouseout: function(t) {
            this.dispatchToElement(this._hovered, "mouseout", t);
            var e, n = t.toElement || t.relatedTarget;
            do {
                n = n && n.parentNode;
            } while (n && 9 != n.nodeType && !(e = n === this.painterRoot));
            !e && this.trigger("globalout", {
                event: t
            });
        },
        resize: function() {
            this._hovered = {};
        },
        dispatch: function(t, e) {
            var n = this[t];
            n && n.call(this, e);
        },
        dispose: function() {
            this.proxy.dispose(), this.storage = this.proxy = this.painter = null;
        },
        setCursorStyle: function(t) {
            var e = this.proxy;
            e.setCursor && e.setCursor(t);
        },
        dispatchToElement: function(t, e, n) {
            var i = (t = t || {}).target;
            if (!i || !i.silent) {
                for (var r = "on" + e, a = ut(e, t, n); i && (i[r] && (a.cancelBubble = i[r].call(i, a)), 
                i.trigger(e, a), i = i.parent, !a.cancelBubble); ) ;
                a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function(t) {
                    "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a);
                }));
            }
        },
        findHover: function(t, e, n) {
            for (var i = this.storage.getDisplayList(), r = {
                x: t,
                y: e
            }, a = i.length - 1; a >= 0; a--) {
                var o;
                if (i[a] !== n && !i[a].ignore && (o = ft(i[a], t, e)) && (!r.topTarget && (r.topTarget = i[a]), 
                o !== bd)) {
                    r.target = i[a];
                    break;
                }
            }
            return r;
        }
    }, f([ "click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu" ], function(t) {
        Sd.prototype[t] = function(e) {
            var n = this.findHover(e.zrX, e.zrY), i = n.target;
            if ("mousedown" === t) this._downEl = i, this._downPoint = [ e.zrX, e.zrY ], this._upEl = i; else if ("mouseup" === t) this._upEl = i; else if ("click" === t) {
                if (this._downEl !== this._upEl || !this._downPoint || pd(this._downPoint, [ e.zrX, e.zrY ]) > 4) return;
                this._downPoint = null;
            }
            this.dispatchToElement(n, t, e);
        };
    }), c(Sd, yd), c(Sd, tt);
    var Id = "undefined" == typeof Float32Array ? Array : Float32Array, Td = (Object.freeze || Object)({
        create: pt,
        identity: gt,
        copy: vt,
        mul: mt,
        translate: yt,
        rotate: xt,
        scale: _t,
        invert: wt,
        clone: function(t) {
            var e = pt();
            return vt(e, t), e;
        }
    }), Cd = gt, Ad = 5e-5, Dd = function(t) {
        (t = t || {}).position || (this.position = [ 0, 0 ]), null == t.rotation && (this.rotation = 0), 
        t.scale || (this.scale = [ 1, 1 ]), this.origin = this.origin || null;
    }, kd = Dd.prototype;
    kd.transform = null, kd.needLocalTransform = function() {
        return bt(this.rotation) || bt(this.position[0]) || bt(this.position[1]) || bt(this.scale[0] - 1) || bt(this.scale[1] - 1);
    };
    var Pd = [];
    kd.updateTransform = function() {
        var t = this.parent, e = t && t.transform, n = this.needLocalTransform(), i = this.transform;
        if (n || e) {
            i = i || pt(), n ? this.getLocalTransform(i) : Cd(i), e && (n ? mt(i, t.transform, i) : vt(i, t.transform)), 
            this.transform = i;
            var r = this.globalScaleRatio;
            if (null != r && 1 !== r) {
                this.getGlobalScale(Pd);
                var a = Pd[0] < 0 ? -1 : 1, o = Pd[1] < 0 ? -1 : 1, s = ((Pd[0] - a) * r + a) / Pd[0] || 0, l = ((Pd[1] - o) * r + o) / Pd[1] || 0;
                i[0] *= s, i[1] *= s, i[2] *= l, i[3] *= l;
            }
            this.invTransform = this.invTransform || pt(), wt(this.invTransform, i);
        } else i && Cd(i);
    }, kd.getLocalTransform = function(t) {
        return Dd.getLocalTransform(this, t);
    }, kd.setTransform = function(t) {
        var e = this.transform, n = t.dpr || 1;
        e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0);
    }, kd.restoreTransform = function(t) {
        var e = t.dpr || 1;
        t.setTransform(e, 0, 0, e, 0, 0);
    };
    var Ld = [], Od = pt();
    kd.setLocalTransform = function(t) {
        if (t) {
            var e = t[0] * t[0] + t[1] * t[1], n = t[2] * t[2] + t[3] * t[3], i = this.position, r = this.scale;
            bt(e - 1) && (e = Math.sqrt(e)), bt(n - 1) && (n = Math.sqrt(n)), t[0] < 0 && (e = -e), 
            t[3] < 0 && (n = -n), i[0] = t[4], i[1] = t[5], r[0] = e, r[1] = n, this.rotation = Math.atan2(-t[1] / n, t[0] / e);
        }
    }, kd.decomposeTransform = function() {
        if (this.transform) {
            var t = this.parent, e = this.transform;
            t && t.transform && (mt(Ld, t.invTransform, e), e = Ld);
            var n = this.origin;
            n && (n[0] || n[1]) && (Od[4] = n[0], Od[5] = n[1], mt(Ld, e, Od), Ld[4] -= n[0], 
            Ld[5] -= n[1], e = Ld), this.setLocalTransform(e);
        }
    }, kd.getGlobalScale = function(t) {
        var e = this.transform;
        return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), 
        e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, 
        t);
    }, kd.transformCoordToLocal = function(t, e) {
        var n = [ t, e ], i = this.invTransform;
        return i && K(n, n, i), n;
    }, kd.transformCoordToGlobal = function(t, e) {
        var n = [ t, e ], i = this.transform;
        return i && K(n, n, i), n;
    }, Dd.getLocalTransform = function(t, e) {
        Cd(e = e || []);
        var n = t.origin, i = t.scale || [ 1, 1 ], r = t.rotation || 0, a = t.position || [ 0, 0 ];
        return n && (e[4] -= n[0], e[5] -= n[1]), _t(e, e, i), r && xt(e, e, r), n && (e[4] += n[0], 
        e[5] += n[1]), e[4] += a[0], e[5] += a[1], e;
    };
    var zd = {
        linear: function(t) {
            return t;
        },
        quadraticIn: function(t) {
            return t * t;
        },
        quadraticOut: function(t) {
            return t * (2 - t);
        },
        quadraticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
        },
        cubicIn: function(t) {
            return t * t * t;
        },
        cubicOut: function(t) {
            return --t * t * t + 1;
        },
        cubicInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
        },
        quarticIn: function(t) {
            return t * t * t * t;
        },
        quarticOut: function(t) {
            return 1 - --t * t * t * t;
        },
        quarticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
        },
        quinticIn: function(t) {
            return t * t * t * t * t;
        },
        quinticOut: function(t) {
            return --t * t * t * t * t + 1;
        },
        quinticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
        },
        sinusoidalIn: function(t) {
            return 1 - Math.cos(t * Math.PI / 2);
        },
        sinusoidalOut: function(t) {
            return Math.sin(t * Math.PI / 2);
        },
        sinusoidalInOut: function(t) {
            return .5 * (1 - Math.cos(Math.PI * t));
        },
        exponentialIn: function(t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1);
        },
        exponentialOut: function(t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        },
        exponentialInOut: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
        },
        circularIn: function(t) {
            return 1 - Math.sqrt(1 - t * t);
        },
        circularOut: function(t) {
            return Math.sqrt(1 - --t * t);
        },
        circularInOut: function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        elasticIn: function(t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), 
            -n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / .4));
        },
        elasticOut: function(t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), 
            n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / .4) + 1);
        },
        elasticInOut: function(t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), 
            (t *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / .4) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / .4) * .5 + 1);
        },
        backIn: function(t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
        },
        backOut: function(t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1;
        },
        backInOut: function(t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
        },
        bounceIn: function(t) {
            return 1 - zd.bounceOut(1 - t);
        },
        bounceOut: function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        },
        bounceInOut: function(t) {
            return .5 > t ? .5 * zd.bounceIn(2 * t) : .5 * zd.bounceOut(2 * t - 1) + .5;
        }
    };
    Mt.prototype = {
        constructor: Mt,
        step: function(t, e) {
            if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), 
            this._paused) this._pausedTime += e; else {
                var n = (t - this._startTime - this._pausedTime) / this._life;
                if (!(0 > n)) {
                    n = Math.min(n, 1);
                    var i = this.easing, r = "string" == typeof i ? zd[i] : i, a = "function" == typeof r ? r(n) : n;
                    return this.fire("frame", a), 1 == n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, 
                    "destroy") : null;
                }
            }
        },
        restart: function(t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;
            this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1;
        },
        fire: function(t, e) {
            this[t = "on" + t] && this[t](this._target, e);
        },
        pause: function() {
            this._paused = !0;
        },
        resume: function() {
            this._paused = !1;
        }
    };
    var Bd = function() {
        this.head = null, this.tail = null, this._len = 0;
    }, Ed = Bd.prototype;
    Ed.insert = function(t) {
        var e = new Rd(t);
        return this.insertEntry(e), e;
    }, Ed.insertEntry = function(t) {
        this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, 
        this._len++;
    }, Ed.remove = function(t) {
        var e = t.prev, n = t.next;
        e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, 
        this._len--;
    }, Ed.len = function() {
        return this._len;
    }, Ed.clear = function() {
        this.head = this.tail = null, this._len = 0;
    };
    var Rd = function(t) {
        this.value = t, this.next, this.prev;
    }, Nd = function(t) {
        this._list = new Bd(), this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null;
    }, Fd = Nd.prototype;
    Fd.put = function(t, e) {
        var n = this._list, i = this._map, r = null;
        if (null == i[t]) {
            var a = n.len(), o = this._lastRemovedEntry;
            if (a >= this._maxSize && a > 0) {
                var s = n.head;
                n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s;
            }
            o ? o.value = e : o = new Rd(e), o.key = t, n.insertEntry(o), i[t] = o;
        }
        return r;
    }, Fd.get = function(t) {
        var e = this._map[t], n = this._list;
        return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0;
    }, Fd.clear = function() {
        this._list.clear(), this._map = {};
    };
    var Vd = {
        transparent: [ 0, 0, 0, 0 ],
        aliceblue: [ 240, 248, 255, 1 ],
        antiquewhite: [ 250, 235, 215, 1 ],
        aqua: [ 0, 255, 255, 1 ],
        aquamarine: [ 127, 255, 212, 1 ],
        azure: [ 240, 255, 255, 1 ],
        beige: [ 245, 245, 220, 1 ],
        bisque: [ 255, 228, 196, 1 ],
        black: [ 0, 0, 0, 1 ],
        blanchedalmond: [ 255, 235, 205, 1 ],
        blue: [ 0, 0, 255, 1 ],
        blueviolet: [ 138, 43, 226, 1 ],
        brown: [ 165, 42, 42, 1 ],
        burlywood: [ 222, 184, 135, 1 ],
        cadetblue: [ 95, 158, 160, 1 ],
        chartreuse: [ 127, 255, 0, 1 ],
        chocolate: [ 210, 105, 30, 1 ],
        coral: [ 255, 127, 80, 1 ],
        cornflowerblue: [ 100, 149, 237, 1 ],
        cornsilk: [ 255, 248, 220, 1 ],
        crimson: [ 220, 20, 60, 1 ],
        cyan: [ 0, 255, 255, 1 ],
        darkblue: [ 0, 0, 139, 1 ],
        darkcyan: [ 0, 139, 139, 1 ],
        darkgoldenrod: [ 184, 134, 11, 1 ],
        darkgray: [ 169, 169, 169, 1 ],
        darkgreen: [ 0, 100, 0, 1 ],
        darkgrey: [ 169, 169, 169, 1 ],
        darkkhaki: [ 189, 183, 107, 1 ],
        darkmagenta: [ 139, 0, 139, 1 ],
        darkolivegreen: [ 85, 107, 47, 1 ],
        darkorange: [ 255, 140, 0, 1 ],
        darkorchid: [ 153, 50, 204, 1 ],
        darkred: [ 139, 0, 0, 1 ],
        darksalmon: [ 233, 150, 122, 1 ],
        darkseagreen: [ 143, 188, 143, 1 ],
        darkslateblue: [ 72, 61, 139, 1 ],
        darkslategray: [ 47, 79, 79, 1 ],
        darkslategrey: [ 47, 79, 79, 1 ],
        darkturquoise: [ 0, 206, 209, 1 ],
        darkviolet: [ 148, 0, 211, 1 ],
        deeppink: [ 255, 20, 147, 1 ],
        deepskyblue: [ 0, 191, 255, 1 ],
        dimgray: [ 105, 105, 105, 1 ],
        dimgrey: [ 105, 105, 105, 1 ],
        dodgerblue: [ 30, 144, 255, 1 ],
        firebrick: [ 178, 34, 34, 1 ],
        floralwhite: [ 255, 250, 240, 1 ],
        forestgreen: [ 34, 139, 34, 1 ],
        fuchsia: [ 255, 0, 255, 1 ],
        gainsboro: [ 220, 220, 220, 1 ],
        ghostwhite: [ 248, 248, 255, 1 ],
        gold: [ 255, 215, 0, 1 ],
        goldenrod: [ 218, 165, 32, 1 ],
        gray: [ 128, 128, 128, 1 ],
        green: [ 0, 128, 0, 1 ],
        greenyellow: [ 173, 255, 47, 1 ],
        grey: [ 128, 128, 128, 1 ],
        honeydew: [ 240, 255, 240, 1 ],
        hotpink: [ 255, 105, 180, 1 ],
        indianred: [ 205, 92, 92, 1 ],
        indigo: [ 75, 0, 130, 1 ],
        ivory: [ 255, 255, 240, 1 ],
        khaki: [ 240, 230, 140, 1 ],
        lavender: [ 230, 230, 250, 1 ],
        lavenderblush: [ 255, 240, 245, 1 ],
        lawngreen: [ 124, 252, 0, 1 ],
        lemonchiffon: [ 255, 250, 205, 1 ],
        lightblue: [ 173, 216, 230, 1 ],
        lightcoral: [ 240, 128, 128, 1 ],
        lightcyan: [ 224, 255, 255, 1 ],
        lightgoldenrodyellow: [ 250, 250, 210, 1 ],
        lightgray: [ 211, 211, 211, 1 ],
        lightgreen: [ 144, 238, 144, 1 ],
        lightgrey: [ 211, 211, 211, 1 ],
        lightpink: [ 255, 182, 193, 1 ],
        lightsalmon: [ 255, 160, 122, 1 ],
        lightseagreen: [ 32, 178, 170, 1 ],
        lightskyblue: [ 135, 206, 250, 1 ],
        lightslategray: [ 119, 136, 153, 1 ],
        lightslategrey: [ 119, 136, 153, 1 ],
        lightsteelblue: [ 176, 196, 222, 1 ],
        lightyellow: [ 255, 255, 224, 1 ],
        lime: [ 0, 255, 0, 1 ],
        limegreen: [ 50, 205, 50, 1 ],
        linen: [ 250, 240, 230, 1 ],
        magenta: [ 255, 0, 255, 1 ],
        maroon: [ 128, 0, 0, 1 ],
        mediumaquamarine: [ 102, 205, 170, 1 ],
        mediumblue: [ 0, 0, 205, 1 ],
        mediumorchid: [ 186, 85, 211, 1 ],
        mediumpurple: [ 147, 112, 219, 1 ],
        mediumseagreen: [ 60, 179, 113, 1 ],
        mediumslateblue: [ 123, 104, 238, 1 ],
        mediumspringgreen: [ 0, 250, 154, 1 ],
        mediumturquoise: [ 72, 209, 204, 1 ],
        mediumvioletred: [ 199, 21, 133, 1 ],
        midnightblue: [ 25, 25, 112, 1 ],
        mintcream: [ 245, 255, 250, 1 ],
        mistyrose: [ 255, 228, 225, 1 ],
        moccasin: [ 255, 228, 181, 1 ],
        navajowhite: [ 255, 222, 173, 1 ],
        navy: [ 0, 0, 128, 1 ],
        oldlace: [ 253, 245, 230, 1 ],
        olive: [ 128, 128, 0, 1 ],
        olivedrab: [ 107, 142, 35, 1 ],
        orange: [ 255, 165, 0, 1 ],
        orangered: [ 255, 69, 0, 1 ],
        orchid: [ 218, 112, 214, 1 ],
        palegoldenrod: [ 238, 232, 170, 1 ],
        palegreen: [ 152, 251, 152, 1 ],
        paleturquoise: [ 175, 238, 238, 1 ],
        palevioletred: [ 219, 112, 147, 1 ],
        papayawhip: [ 255, 239, 213, 1 ],
        peachpuff: [ 255, 218, 185, 1 ],
        peru: [ 205, 133, 63, 1 ],
        pink: [ 255, 192, 203, 1 ],
        plum: [ 221, 160, 221, 1 ],
        powderblue: [ 176, 224, 230, 1 ],
        purple: [ 128, 0, 128, 1 ],
        red: [ 255, 0, 0, 1 ],
        rosybrown: [ 188, 143, 143, 1 ],
        royalblue: [ 65, 105, 225, 1 ],
        saddlebrown: [ 139, 69, 19, 1 ],
        salmon: [ 250, 128, 114, 1 ],
        sandybrown: [ 244, 164, 96, 1 ],
        seagreen: [ 46, 139, 87, 1 ],
        seashell: [ 255, 245, 238, 1 ],
        sienna: [ 160, 82, 45, 1 ],
        silver: [ 192, 192, 192, 1 ],
        skyblue: [ 135, 206, 235, 1 ],
        slateblue: [ 106, 90, 205, 1 ],
        slategray: [ 112, 128, 144, 1 ],
        slategrey: [ 112, 128, 144, 1 ],
        snow: [ 255, 250, 250, 1 ],
        springgreen: [ 0, 255, 127, 1 ],
        steelblue: [ 70, 130, 180, 1 ],
        tan: [ 210, 180, 140, 1 ],
        teal: [ 0, 128, 128, 1 ],
        thistle: [ 216, 191, 216, 1 ],
        tomato: [ 255, 99, 71, 1 ],
        turquoise: [ 64, 224, 208, 1 ],
        violet: [ 238, 130, 238, 1 ],
        wheat: [ 245, 222, 179, 1 ],
        white: [ 255, 255, 255, 1 ],
        whitesmoke: [ 245, 245, 245, 1 ],
        yellow: [ 255, 255, 0, 1 ],
        yellowgreen: [ 154, 205, 50, 1 ]
    }, Wd = new Nd(20), Hd = null, Gd = Ft, Zd = Vt, Xd = (Object.freeze || Object)({
        parse: zt,
        lift: Rt,
        toHex: Nt,
        fastLerp: Ft,
        fastMapToColor: Gd,
        lerp: Vt,
        mapToColor: Zd,
        modifyHSL: function(t, e, n, i) {
            return (t = zt(t)) ? (t = Et(t), null != e && (t[0] = It(e)), null != n && (t[1] = At(n)), 
            null != i && (t[2] = At(i)), Wt(Bt(t), "rgba")) : void 0;
        },
        modifyAlpha: function(t, e) {
            return (t = zt(t)) && null != e ? (t[3] = Tt(e), Wt(t, "rgba")) : void 0;
        },
        stringify: Wt
    }), Yd = Array.prototype.slice, qd = function(t, e, n, i) {
        this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || Ht, 
        this._setter = i || Gt, this._clipCount = 0, this._delay = 0, this._doneList = [], 
        this._onframeList = [], this._clipList = [];
    };
    qd.prototype = {
        when: function(t, e) {
            var n = this._tracks;
            for (var i in e) if (e.hasOwnProperty(i)) {
                if (!n[i]) {
                    n[i] = [];
                    var r = this._getter(this._target, i);
                    if (null == r) continue;
                    0 !== t && n[i].push({
                        time: 0,
                        value: Kt(r)
                    });
                }
                n[i].push({
                    time: t,
                    value: e[i]
                });
            }
            return this;
        },
        during: function(t) {
            return this._onframeList.push(t), this;
        },
        pause: function() {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
            this._paused = !0;
        },
        resume: function() {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
            this._paused = !1;
        },
        isPaused: function() {
            return !!this._paused;
        },
        _doneCallback: function() {
            this._tracks = {}, this._clipList.length = 0;
            for (var t = this._doneList, e = t.length, n = 0; e > n; n++) t[n].call(this);
        },
        start: function(t, e) {
            var n, i = this, r = 0;
            for (var a in this._tracks) if (this._tracks.hasOwnProperty(a)) {
                var o = te(this, t, function() {
                    --r || i._doneCallback();
                }, this._tracks[a], a, e);
                o && (this._clipList.push(o), r++, this.animation && this.animation.addClip(o), 
                n = o);
            }
            if (n) {
                var s = n.onframe;
                n.onframe = function(t, e) {
                    s(t, e);
                    for (var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e);
                };
            }
            return r || this._doneCallback(), this;
        },
        stop: function(t) {
            for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
                var r = e[i];
                t && r.onframe(this._target, 1), n && n.removeClip(r);
            }
            e.length = 0;
        },
        delay: function(t) {
            return this._delay = t, this;
        },
        done: function(t) {
            return t && this._doneList.push(t), this;
        },
        getClips: function() {
            return this._clipList;
        }
    };
    var jd = 1;
    "undefined" != typeof window && (jd = Math.max(window.devicePixelRatio || 1, 1));
    var Ud = jd, $d = function() {}, Kd = $d, Qd = function() {
        this.animators = [];
    };
    Qd.prototype = {
        constructor: Qd,
        animate: function(t, e) {
            var n, i = !1, r = this, a = this.__zr;
            if (t) {
                var o = t.split("."), s = r;
                i = "shape" === o[0];
                for (var l = 0, u = o.length; u > l; l++) s && (s = s[o[l]]);
                s && (n = s);
            } else n = r;
            {
                if (n) {
                    var c = r.animators, d = new qd(n, e);
                    return d.during(function() {
                        r.dirty(i);
                    }).done(function() {
                        c.splice(h(c, d), 1);
                    }), c.push(d), a && a.animation.addAnimator(d), d;
                }
                Kd('Property "' + t + '" is not existed in element ' + r.id);
            }
        },
        stopAnimation: function(t) {
            for (var e = this.animators, n = e.length, i = 0; n > i; i++) e[i].stop(t);
            return e.length = 0, this;
        },
        animateTo: function(t, e, n, i, r, a) {
            ee(this, t, e, n, i, r, a);
        },
        animateFrom: function(t, e, n, i, r, a) {
            ee(this, t, e, n, i, r, a, !0);
        }
    };
    var Jd = function(t) {
        Dd.call(this, t), yd.call(this, t), Qd.call(this, t), this.id = t.id || jc();
    };
    Jd.prototype = {
        type: "element",
        name: "",
        __zr: null,
        ignore: !1,
        clipPath: null,
        isGroup: !1,
        drift: function(t, e) {
            switch (this.draggable) {
              case "horizontal":
                e = 0;
                break;

              case "vertical":
                t = 0;
            }
            var n = this.transform;
            n || (n = this.transform = [ 1, 0, 0, 1, 0, 0 ]), n[4] += t, n[5] += e, this.decomposeTransform(), 
            this.dirty(!1);
        },
        beforeUpdate: function() {},
        afterUpdate: function() {},
        update: function() {
            this.updateTransform();
        },
        traverse: function() {},
        attrKV: function(t, e) {
            if ("position" === t || "scale" === t || "origin" === t) {
                if (e) {
                    var n = this[t];
                    n || (n = this[t] = []), n[0] = e[0], n[1] = e[1];
                }
            } else this[t] = e;
        },
        hide: function() {
            this.ignore = !0, this.__zr && this.__zr.refresh();
        },
        show: function() {
            this.ignore = !1, this.__zr && this.__zr.refresh();
        },
        attr: function(t, e) {
            if ("string" == typeof t) this.attrKV(t, e); else if (b(t)) for (var n in t) t.hasOwnProperty(n) && this.attrKV(n, t[n]);
            return this.dirty(!1), this;
        },
        setClipPath: function(t) {
            var e = this.__zr;
            e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), 
            this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1);
        },
        removeClipPath: function() {
            var t = this.clipPath;
            t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, 
            this.clipPath = null, this.dirty(!1));
        },
        addSelfToZr: function(t) {
            this.__zr = t;
            var e = this.animators;
            if (e) for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
            this.clipPath && this.clipPath.addSelfToZr(t);
        },
        removeSelfFromZr: function(t) {
            this.__zr = null;
            var e = this.animators;
            if (e) for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
            this.clipPath && this.clipPath.removeSelfFromZr(t);
        }
    }, c(Jd, Qd), c(Jd, Dd), c(Jd, yd);
    var tf = K, ef = Math.min, nf = Math.max;
    re.prototype = {
        constructor: re,
        union: function(t) {
            var e = ef(t.x, this.x), n = ef(t.y, this.y);
            this.width = nf(t.x + t.width, this.x + this.width) - e, this.height = nf(t.y + t.height, this.y + this.height) - n, 
            this.x = e, this.y = n;
        },
        applyTransform: function() {
            var t = [], e = [], n = [], i = [];
            return function(r) {
                if (r) {
                    t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, 
                    tf(t, t, r), tf(e, e, r), tf(n, n, r), tf(i, i, r), this.x = ef(t[0], e[0], n[0], i[0]), 
                    this.y = ef(t[1], e[1], n[1], i[1]);
                    var a = nf(t[0], e[0], n[0], i[0]), o = nf(t[1], e[1], n[1], i[1]);
                    this.width = a - this.x, this.height = o - this.y;
                }
            };
        }(),
        calculateTransform: function(t) {
            var e = this, n = t.width / e.width, i = t.height / e.height, r = pt();
            return yt(r, r, [ -e.x, -e.y ]), _t(r, r, [ n, i ]), yt(r, r, [ t.x, t.y ]), r;
        },
        intersect: function(t) {
            if (!t) return !1;
            t instanceof re || (t = re.create(t));
            var e = this, n = e.x, i = e.x + e.width, r = e.y, a = e.y + e.height, o = t.x, s = t.x + t.width, l = t.y, h = t.y + t.height;
            return !(o > i || n > s || l > a || r > h);
        },
        contain: function(t, e) {
            var n = this;
            return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height;
        },
        clone: function() {
            return new re(this.x, this.y, this.width, this.height);
        },
        copy: function(t) {
            this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height;
        },
        plain: function() {
            return {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            };
        }
    }, re.create = function(t) {
        return new re(t.x, t.y, t.width, t.height);
    };
    var rf = function(t) {
        t = t || {}, Jd.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
        this._children = [], this.__storage = null, this.__dirty = !0;
    };
    rf.prototype = {
        constructor: rf,
        isGroup: !0,
        type: "group",
        silent: !1,
        children: function() {
            return this._children.slice();
        },
        childAt: function(t) {
            return this._children[t];
        },
        childOfName: function(t) {
            for (var e = this._children, n = 0; n < e.length; n++) if (e[n].name === t) return e[n];
        },
        childCount: function() {
            return this._children.length;
        },
        add: function(t) {
            return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), 
            this;
        },
        addBefore: function(t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
                var n = this._children, i = n.indexOf(e);
                i >= 0 && (n.splice(i, 0, t), this._doAdd(t));
            }
            return this;
        },
        _doAdd: function(t) {
            t.parent && t.parent.remove(t), t.parent = this;
            var e = this.__storage, n = this.__zr;
            e && e !== t.__storage && (e.addToStorage(t), t instanceof rf && t.addChildrenToStorage(e)), 
            n && n.refresh();
        },
        remove: function(t) {
            var e = this.__zr, n = this.__storage, i = this._children, r = h(i, t);
            return 0 > r ? this : (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t), 
            t instanceof rf && t.delChildrenFromStorage(n)), e && e.refresh(), this);
        },
        removeAll: function() {
            var t, e, n = this._children, i = this.__storage;
            for (e = 0; e < n.length; e++) t = n[e], i && (i.delFromStorage(t), t instanceof rf && t.delChildrenFromStorage(i)), 
            t.parent = null;
            return n.length = 0, this;
        },
        eachChild: function(t, e) {
            for (var n = this._children, i = 0; i < n.length; i++) {
                var r = n[i];
                t.call(e, r, i);
            }
            return this;
        },
        traverse: function(t, e) {
            for (var n = 0; n < this._children.length; n++) {
                var i = this._children[n];
                t.call(e, i), "group" === i.type && i.traverse(t, e);
            }
            return this;
        },
        addChildrenToStorage: function(t) {
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                t.addToStorage(n), n instanceof rf && n.addChildrenToStorage(t);
            }
        },
        delChildrenFromStorage: function(t) {
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                t.delFromStorage(n), n instanceof rf && n.delChildrenFromStorage(t);
            }
        },
        dirty: function() {
            return this.__dirty = !0, this.__zr && this.__zr.refresh(), this;
        },
        getBoundingRect: function(t) {
            for (var e = null, n = new re(0, 0, 0, 0), i = t || this._children, r = [], a = 0; a < i.length; a++) {
                var o = i[a];
                if (!o.ignore && !o.invisible) {
                    var s = o.getBoundingRect(), l = o.getLocalTransform(r);
                    l ? (n.copy(s), n.applyTransform(l), (e = e || n.clone()).union(n)) : (e = e || s.clone()).union(s);
                }
            }
            return e || n;
        }
    }, u(rf, Jd);
    var af = 32, of = 7, sf = function() {
        this._roots = [], this._displayList = [], this._displayListLen = 0;
    };
    sf.prototype = {
        constructor: sf,
        traverse: function(t, e) {
            for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e);
        },
        getDisplayList: function(t, e) {
            return e = e || !1, t && this.updateDisplayList(e), this._displayList;
        },
        updateDisplayList: function(t) {
            this._displayListLen = 0;
            for (var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++) this._updateAndAddDisplayable(e[i], null, t);
            n.length = this._displayListLen, $c.canvasSupported && de(n, fe);
        },
        _updateAndAddDisplayable: function(t, e, n) {
            if (!t.ignore || n) {
                t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                var i = t.clipPath;
                if (i) {
                    e = e ? e.slice() : [];
                    for (var r = i, a = t; r; ) r.parent = a, r.updateTransform(), e.push(r), a = r, 
                    r = r.clipPath;
                }
                if (t.isGroup) {
                    for (var o = t._children, s = 0; s < o.length; s++) {
                        var l = o[s];
                        t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n);
                    }
                    t.__dirty = !1;
                } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t;
            }
        },
        addRoot: function(t) {
            t.__storage !== this && (t instanceof rf && t.addChildrenToStorage(this), this.addToStorage(t), 
            this._roots.push(t));
        },
        delRoot: function(t) {
            if (null == t) {
                for (n = 0; n < this._roots.length; n++) {
                    var e = this._roots[n];
                    e instanceof rf && e.delChildrenFromStorage(this);
                }
                return this._roots = [], this._displayList = [], void (this._displayListLen = 0);
            }
            if (t instanceof Array) for (var n = 0, i = t.length; i > n; n++) this.delRoot(t[n]); else {
                var r = h(this._roots, t);
                r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof rf && t.delChildrenFromStorage(this));
            }
        },
        addToStorage: function(t) {
            return t && (t.__storage = this, t.dirty(!1)), this;
        },
        delFromStorage: function(t) {
            return t && (t.__storage = null), this;
        },
        dispose: function() {
            this._renderList = this._roots = null;
        },
        displayableSortFunc: fe
    };
    var lf = {
        shadowBlur: 1,
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        textShadowBlur: 1,
        textShadowOffsetX: 1,
        textShadowOffsetY: 1,
        textBoxShadowBlur: 1,
        textBoxShadowOffsetX: 1,
        textBoxShadowOffsetY: 1
    }, hf = function(t, e, n) {
        return lf.hasOwnProperty(e) ? n *= t.dpr : n;
    }, uf = [ [ "shadowBlur", 0 ], [ "shadowOffsetX", 0 ], [ "shadowOffsetY", 0 ], [ "shadowColor", "#000" ], [ "lineCap", "butt" ], [ "lineJoin", "miter" ], [ "miterLimit", 10 ] ], cf = function(t) {
        this.extendFrom(t, !1);
    };
    cf.prototype = {
        constructor: cf,
        fill: "#000",
        stroke: null,
        opacity: 1,
        fillOpacity: null,
        strokeOpacity: null,
        lineDash: null,
        lineDashOffset: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 1,
        strokeNoScale: !1,
        text: null,
        font: null,
        textFont: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        fontFamily: null,
        textTag: null,
        textFill: "#000",
        textStroke: null,
        textWidth: null,
        textHeight: null,
        textStrokeWidth: 0,
        textLineHeight: null,
        textPosition: "inside",
        textRect: null,
        textOffset: null,
        textAlign: null,
        textVerticalAlign: null,
        textDistance: 5,
        textShadowColor: "transparent",
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        textBoxShadowColor: "transparent",
        textBoxShadowBlur: 0,
        textBoxShadowOffsetX: 0,
        textBoxShadowOffsetY: 0,
        transformText: !1,
        textRotation: 0,
        textOrigin: null,
        textBackgroundColor: null,
        textBorderColor: null,
        textBorderWidth: 0,
        textBorderRadius: 0,
        textPadding: null,
        rich: null,
        truncate: null,
        blend: null,
        bind: function(t, e, n) {
            for (var i = this, r = n && n.style, a = !r, o = 0; o < uf.length; o++) {
                var s = uf[o], l = s[0];
                (a || i[l] !== r[l]) && (t[l] = hf(t, l, i[l] || s[1]));
            }
            if ((a || i.fill !== r.fill) && (t.fillStyle = i.fill), (a || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke), 
            (a || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), 
            (a || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"), 
            this.hasStroke()) {
                var h = i.lineWidth;
                t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);
            }
        },
        hasFill: function() {
            var t = this.fill;
            return null != t && "none" !== t;
        },
        hasStroke: function() {
            var t = this.stroke;
            return null != t && "none" !== t && this.lineWidth > 0;
        },
        extendFrom: function(t, e) {
            if (t) for (var n in t) !t.hasOwnProperty(n) || !0 !== e && (!1 === e ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n]);
        },
        set: function(t, e) {
            "string" == typeof t ? this[t] = e : this.extendFrom(t, !0);
        },
        clone: function() {
            var t = new this.constructor();
            return t.extendFrom(this, !0), t;
        },
        getGradient: function(t, e, n) {
            for (var i = ("radial" === e.type ? ge : pe)(t, e, n), r = e.colorStops, a = 0; a < r.length; a++) i.addColorStop(r[a].offset, r[a].color);
            return i;
        }
    };
    for (var df = cf.prototype, ff = 0; ff < uf.length; ff++) {
        var pf = uf[ff];
        pf[0] in df || (df[pf[0]] = pf[1]);
    }
    cf.getGradient = df.getGradient;
    var gf = function(t, e) {
        this.image = t, this.repeat = e, this.type = "pattern";
    };
    gf.prototype.getCanvasPattern = function(t) {
        return t.createPattern(this.image, this.repeat || "repeat");
    };
    var vf = function(t, e, n) {
        var i;
        n = n || Ud, "string" == typeof t ? i = me(t, e, n) : b(t) && (i = t, t = i.id), 
        this.id = t, this.dom = i;
        var r = i.style;
        r && (i.onselectstart = ve, r["-webkit-user-select"] = "none", r["user-select"] = "none", 
        r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", 
        r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, 
        this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, 
        this.lastFrameAlpha = .7, this.dpr = n;
    };
    vf.prototype = {
        constructor: vf,
        __dirty: !0,
        __used: !1,
        __drawIndex: 0,
        __startIndex: 0,
        __endIndex: 0,
        incremental: !1,
        getElementCount: function() {
            return this.__endIndex - this.__startIndex;
        },
        initContext: function() {
            this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
        },
        createBackBuffer: function() {
            var t = this.dpr;
            this.domBack = me("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 
            1 != t && this.ctxBack.scale(t, t);
        },
        resize: function(t, e) {
            var n = this.dpr, i = this.dom, r = i.style, a = this.domBack;
            r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, 
            a && (a.width = t * n, a.height = e * n, 1 != n && this.ctxBack.scale(n, n));
        },
        clear: function(t, e) {
            var n = this.dom, i = this.ctx, r = n.width, a = n.height, e = e || this.clearColor, o = this.motionBlur && !t, s = this.lastFrameAlpha, l = this.dpr;
            if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", 
            this.ctxBack.drawImage(n, 0, 0, r / l, a / l)), i.clearRect(0, 0, r, a), e && "transparent" !== e) {
                var h;
                e.colorStops ? (h = e.__canvasGradient || cf.getGradient(i, e, {
                    x: 0,
                    y: 0,
                    width: r,
                    height: a
                }), e.__canvasGradient = h) : e.image && (h = gf.prototype.getCanvasPattern.call(e, i)), 
                i.save(), i.fillStyle = h || e, i.fillRect(0, 0, r, a), i.restore();
            }
            if (o) {
                var u = this.domBack;
                i.save(), i.globalAlpha = s, i.drawImage(u, 0, 0, r, a), i.restore();
            }
        }
    };
    var mf = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
        setTimeout(t, 16);
    }, yf = new Nd(50), xf = {}, _f = 0, wf = 5e3, bf = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g, Mf = "12px sans-serif", Sf = {};
    Sf.measureText = function(t, e) {
        var n = l();
        return n.font = e || Mf, n.measureText(t);
    };
    var If = {
        left: 1,
        right: 1,
        center: 1
    }, Tf = {
        top: 1,
        bottom: 1,
        middle: 1
    }, Cf = [ [ "textShadowBlur", "shadowBlur", 0 ], [ "textShadowOffsetX", "shadowOffsetX", 0 ], [ "textShadowOffsetY", "shadowOffsetY", 0 ], [ "textShadowColor", "shadowColor", "transparent" ] ], Af = new re(), Df = function() {};
    Df.prototype = {
        constructor: Df,
        drawRectText: function(t, e) {
            var n = this.style;
            e = n.textRect || e, this.__dirty && Ve(n);
            var i = n.text;
            if (null != i && (i += ""), rn(i, n)) {
                t.save();
                var r = this.transform;
                n.transformText ? this.setTransform(t) : r && (Af.copy(e), Af.applyTransform(r), 
                e = Af), He(this, t, i, n, e), t.restore();
            }
        }
    }, an.prototype = {
        constructor: an,
        type: "displayable",
        __dirty: !0,
        invisible: !1,
        z: 0,
        z2: 0,
        zlevel: 0,
        draggable: !1,
        dragging: !1,
        silent: !1,
        culling: !1,
        cursor: "pointer",
        rectHover: !1,
        progressive: !1,
        incremental: !1,
        globalScaleRatio: 1,
        beforeBrush: function() {},
        afterBrush: function() {},
        brush: function() {},
        getBoundingRect: function() {},
        contain: function(t, e) {
            return this.rectContain(t, e);
        },
        traverse: function(t, e) {
            t.call(e, this);
        },
        rectContain: function(t, e) {
            var n = this.transformCoordToLocal(t, e);
            return this.getBoundingRect().contain(n[0], n[1]);
        },
        dirty: function() {
            this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh();
        },
        animateStyle: function(t) {
            return this.animate("style", t);
        },
        attrKV: function(t, e) {
            "style" !== t ? Jd.prototype.attrKV.call(this, t, e) : this.style.set(e);
        },
        setStyle: function(t, e) {
            return this.style.set(t, e), this.dirty(!1), this;
        },
        useStyle: function(t) {
            return this.style = new cf(t, this), this.dirty(!1), this;
        }
    }, u(an, Jd), c(an, Df), on.prototype = {
        constructor: on,
        type: "image",
        brush: function(t, e) {
            var n = this.style, i = n.image;
            n.bind(t, this, e);
            var r = this._image = xe(i, this._image, this, this.onload);
            if (r && we(r)) {
                var a = n.x || 0, o = n.y || 0, s = n.width, l = n.height, h = r.width / r.height;
                if (null == s && null != l ? s = l * h : null == l && null != s ? l = s / h : null == s && null == l && (s = r.width, 
                l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
                    var u = n.sx || 0, c = n.sy || 0;
                    t.drawImage(r, u, c, n.sWidth, n.sHeight, a, o, s, l);
                } else if (n.sx && n.sy) {
                    var d = s - (u = n.sx), f = l - (c = n.sy);
                    t.drawImage(r, u, c, d, f, a, o, s, l);
                } else t.drawImage(r, a, o, s, l);
                null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
            }
        },
        getBoundingRect: function() {
            var t = this.style;
            return this._rect || (this._rect = new re(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), 
            this._rect;
        }
    }, u(on, an);
    var kf = 314159, Pf = new re(0, 0, 0, 0), Lf = new re(0, 0, 0, 0), Of = function(t, e, n) {
        this.type = "canvas";
        var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
        this._opts = n = o({}, n || {}), this.dpr = n.devicePixelRatio || Ud, this._singleCanvas = i, 
        this.root = t;
        var r = t.style;
        r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", 
        t.innerHTML = ""), this.storage = e;
        var a = this._zlevelList = [], s = this._layers = {};
        if (this._layerConfig = {}, this._needsManuallyCompositing = !1, i) {
            var l = t.width, h = t.height;
            null != n.width && (l = n.width), null != n.height && (h = n.height), this.dpr = n.devicePixelRatio || 1, 
            t.width = l * this.dpr, t.height = h * this.dpr, this._width = l, this._height = h;
            var u = new vf(t, this, this.dpr);
            u.__builtin__ = !0, u.initContext(), s[kf] = u, u.zlevel = kf, a.push(kf), this._domRoot = t;
        } else {
            this._width = this._getSize(0), this._height = this._getSize(1);
            var c = this._domRoot = dn(this._width, this._height);
            t.appendChild(c);
        }
        this._hoverlayer = null, this._hoverElements = [];
    };
    Of.prototype = {
        constructor: Of,
        getType: function() {
            return "canvas";
        },
        isSingleCanvas: function() {
            return this._singleCanvas;
        },
        getViewportRoot: function() {
            return this._domRoot;
        },
        getViewportRootOffset: function() {
            var t = this.getViewportRoot();
            return t ? {
                offsetLeft: t.offsetLeft || 0,
                offsetTop: t.offsetTop || 0
            } : void 0;
        },
        refresh: function(t) {
            var e = this.storage.getDisplayList(!0), n = this._zlevelList;
            this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
            for (var i = 0; i < n.length; i++) {
                var r = n[i], a = this._layers[r];
                if (!a.__builtin__ && a.refresh) {
                    var o = 0 === i ? this._backgroundColor : null;
                    a.refresh(o);
                }
            }
            return this.refreshHover(), this;
        },
        addHover: function(t, e) {
            if (!t.__hoverMir) {
                var n = new t.constructor({
                    style: t.style,
                    shape: t.shape,
                    z: t.z,
                    z2: t.z2,
                    silent: t.silent
                });
                return n.__from = t, t.__hoverMir = n, e && n.setStyle(e), this._hoverElements.push(n), 
                n;
            }
        },
        removeHover: function(t) {
            var e = t.__hoverMir, n = this._hoverElements, i = h(n, e);
            i >= 0 && n.splice(i, 1), t.__hoverMir = null;
        },
        clearHover: function() {
            for (var t = this._hoverElements, e = 0; e < t.length; e++) {
                var n = t[e].__from;
                n && (n.__hoverMir = null);
            }
            t.length = 0;
        },
        refreshHover: function() {
            var t = this._hoverElements, e = t.length, n = this._hoverlayer;
            if (n && n.clear(), e) {
                de(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(1e5));
                var i = {};
                n.ctx.save();
                for (var r = 0; e > r; ) {
                    var a = t[r], o = a.__from;
                    o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, 
                    a.__clipPaths = o.__clipPaths, this._doPaintEl(a, n, !0, i))) : (t.splice(r, 1), 
                    o.__hoverMir = null, e--);
                }
                n.ctx.restore();
            }
        },
        getHoverLayer: function() {
            return this.getLayer(1e5);
        },
        _paintList: function(t, e, n) {
            if (this._redrawId === n) {
                e = e || !1, this._updateLayerStatus(t);
                var i = this._doPaintList(t, e);
                if (this._needsManuallyCompositing && this._compositeManually(), !i) {
                    var r = this;
                    mf(function() {
                        r._paintList(t, e, n);
                    });
                }
            }
        },
        _compositeManually: function() {
            var t = this.getLayer(kf).ctx, e = this._domRoot.width, n = this._domRoot.height;
            t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function(i) {
                i.virtual && t.drawImage(i.dom, 0, 0, e, n);
            });
        },
        _doPaintList: function(t, e) {
            for (var n = [], i = 0; i < this._zlevelList.length; i++) {
                var r = this._zlevelList[i];
                (s = this._layers[r]).__builtin__ && s !== this._hoverlayer && (s.__dirty || e) && n.push(s);
            }
            for (var a = !0, o = 0; o < n.length; o++) {
                var s = n[o], l = s.ctx, h = {};
                l.save();
                var u = e ? s.__startIndex : s.__drawIndex, c = !e && s.incremental && Date.now, d = c && Date.now(), p = s.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
                if (s.__startIndex === s.__endIndex) s.clear(!1, p); else if (u === s.__startIndex) {
                    var g = t[u];
                    g.incremental && g.notClear && !e || s.clear(!1, p);
                }
                -1 === u && (console.error("For some unknown reason. drawIndex is -1"), u = s.__startIndex);
                for (var v = u; v < s.__endIndex; v++) {
                    var m = t[v];
                    if (this._doPaintEl(m, s, e, h), m.__dirty = m.__dirtyText = !1, c && Date.now() - d > 15) break;
                }
                s.__drawIndex = v, s.__drawIndex < s.__endIndex && (a = !1), h.prevElClipPaths && l.restore(), 
                l.restore();
            }
            return $c.wxa && f(this._layers, function(t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw();
            }), a;
        },
        _doPaintEl: function(t, e, n, i) {
            var r = e.ctx, a = t.transform;
            if (!(!e.__dirty && !n || t.invisible || 0 === t.style.opacity || a && !a[0] && !a[3] || t.culling && hn(t, this._width, this._height))) {
                var o = t.__clipPaths;
                (!i.prevElClipPaths || un(o, i.prevElClipPaths)) && (i.prevElClipPaths && (e.ctx.restore(), 
                i.prevElClipPaths = null, i.prevEl = null), o && (r.save(), cn(o, r), i.prevElClipPaths = o)), 
                t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r);
            }
        },
        getLayer: function(t, e) {
            this._singleCanvas && !this._needsManuallyCompositing && (t = kf);
            var n = this._layers[t];
            return n || (n = new vf("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, 
            this._layerConfig[t] && r(n, this._layerConfig[t], !0), e && (n.virtual = e), this.insertLayer(t, n), 
            n.initContext()), n;
        },
        insertLayer: function(t, e) {
            var n = this._layers, i = this._zlevelList, r = i.length, a = null, o = -1, s = this._domRoot;
            if (n[t]) Kd("ZLevel " + t + " has been used already"); else if (ln(e)) {
                if (r > 0 && t > i[0]) {
                    for (o = 0; r - 1 > o && !(i[o] < t && i[o + 1] > t); o++) ;
                    a = n[i[o]];
                }
                if (i.splice(o + 1, 0, t), n[t] = e, !e.virtual) if (a) {
                    var l = a.dom;
                    l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom);
                } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom);
            } else Kd("Layer of zlevel " + t + " is not valid");
        },
        eachLayer: function(t, e) {
            var n, i, r = this._zlevelList;
            for (i = 0; i < r.length; i++) n = r[i], t.call(e, this._layers[n], n);
        },
        eachBuiltinLayer: function(t, e) {
            var n, i, r, a = this._zlevelList;
            for (r = 0; r < a.length; r++) i = a[r], (n = this._layers[i]).__builtin__ && t.call(e, n, i);
        },
        eachOtherLayer: function(t, e) {
            var n, i, r, a = this._zlevelList;
            for (r = 0; r < a.length; r++) i = a[r], (n = this._layers[i]).__builtin__ || t.call(e, n, i);
        },
        getLayers: function() {
            return this._layers;
        },
        _updateLayerStatus: function(t) {
            function e(t) {
                n && (n.__endIndex !== t && (n.__dirty = !0), n.__endIndex = t);
            }
            if (this.eachBuiltinLayer(function(t) {
                t.__dirty = t.__used = !1;
            }), this._singleCanvas) for (r = 1; r < t.length; r++) if ((o = t[r]).zlevel !== t[r - 1].zlevel || o.incremental) {
                this._needsManuallyCompositing = !0;
                break;
            }
            for (var n = null, i = 0, r = 0; r < t.length; r++) {
                var a, o = t[r], s = o.zlevel;
                o.incremental ? (a = this.getLayer(s + .001, this._needsManuallyCompositing), a.incremental = !0, 
                i = 1) : a = this.getLayer(s + (i > 0 ? .01 : 0), this._needsManuallyCompositing), 
                a.__builtin__ || Kd("ZLevel " + s + " has been used by unkown layer " + a.id), a !== n && (a.__used = !0, 
                a.__startIndex !== r && (a.__dirty = !0), a.__startIndex = r, a.__drawIndex = a.incremental ? -1 : r, 
                e(r), n = a), o.__dirty && (a.__dirty = !0, a.incremental && a.__drawIndex < 0 && (a.__drawIndex = r));
            }
            e(r), this.eachBuiltinLayer(function(t) {
                !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), 
                t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
            });
        },
        clear: function() {
            return this.eachBuiltinLayer(this._clearLayer), this;
        },
        _clearLayer: function(t) {
            t.clear();
        },
        setBackgroundColor: function(t) {
            this._backgroundColor = t;
        },
        configLayer: function(t, e) {
            if (e) {
                var n = this._layerConfig;
                n[t] ? r(n[t], e, !0) : n[t] = e;
                for (var i = 0; i < this._zlevelList.length; i++) {
                    var a = this._zlevelList[i];
                    a !== t && a !== t + .01 || r(this._layers[a], n[t], !0);
                }
            }
        },
        delLayer: function(t) {
            var e = this._layers, n = this._zlevelList, i = e[t];
            i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(h(n, t), 1));
        },
        resize: function(t, e) {
            if (this._domRoot.style) {
                var n = this._domRoot;
                n.style.display = "none";
                var i = this._opts;
                if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), 
                e = this._getSize(1), n.style.display = "", this._width != t || e != this._height) {
                    n.style.width = t + "px", n.style.height = e + "px";
                    for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                    f(this._progressiveLayers, function(n) {
                        n.resize(t, e);
                    }), this.refresh(!0);
                }
                this._width = t, this._height = e;
            } else {
                if (null == t || null == e) return;
                this._width = t, this._height = e, this.getLayer(kf).resize(t, e);
            }
            return this;
        },
        clearLayer: function(t) {
            var e = this._layers[t];
            e && e.clear();
        },
        dispose: function() {
            this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
        },
        getRenderedCanvas: function(t) {
            if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[kf].dom;
            var e = new vf("image", this, t.pixelRatio || this.dpr);
            if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
                this.refresh();
                var n = e.dom.width, i = e.dom.height, r = e.ctx;
                this.eachLayer(function(t) {
                    t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), 
                    t.renderToCanvas(e.ctx), e.ctx.restore());
                });
            } else for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
                var l = o[s];
                this._doPaintEl(l, e, !0, a);
            }
            return e.dom;
        },
        getWidth: function() {
            return this._width;
        },
        getHeight: function() {
            return this._height;
        },
        _getSize: function(t) {
            var e = this._opts, n = [ "width", "height" ][t], i = [ "clientWidth", "clientHeight" ][t], r = [ "paddingLeft", "paddingTop" ][t], a = [ "paddingRight", "paddingBottom" ][t];
            if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
            var o = this.root, s = document.defaultView.getComputedStyle(o);
            return (o[i] || sn(s[n]) || sn(o.style[n])) - (sn(s[r]) || 0) - (sn(s[a]) || 0) | 0;
        },
        pathToImage: function(t, e) {
            e = e || this.dpr;
            var n = document.createElement("canvas"), i = n.getContext("2d"), r = t.getBoundingRect(), a = t.style, o = a.shadowBlur * e, s = a.shadowOffsetX * e, l = a.shadowOffsetY * e, h = a.hasStroke() ? a.lineWidth : 0, u = Math.max(h / 2, -s + o), c = Math.max(h / 2, s + o), d = Math.max(h / 2, -l + o), f = Math.max(h / 2, l + o), p = r.width + u + c, g = r.height + d + f;
            n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;
            var v = {
                position: t.position,
                rotation: t.rotation,
                scale: t.scale
            };
            t.position = [ u - r.x, d - r.y ], t.rotation = 0, t.scale = [ 1, 1 ], t.updateTransform(), 
            t && t.brush(i);
            var m = new on({
                style: {
                    x: 0,
                    y: 0,
                    image: n
                }
            });
            return null != v.position && (m.position = t.position = v.position), null != v.rotation && (m.rotation = t.rotation = v.rotation), 
            null != v.scale && (m.scale = t.scale = v.scale), m;
        }
    };
    var zf = function(t) {
        t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function() {}, 
        this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, 
        this._paused = !1, yd.call(this);
    };
    zf.prototype = {
        constructor: zf,
        addClip: function(t) {
            this._clips.push(t);
        },
        addAnimator: function(t) {
            t.animation = this;
            for (var e = t.getClips(), n = 0; n < e.length; n++) this.addClip(e[n]);
        },
        removeClip: function(t) {
            var e = h(this._clips, t);
            e >= 0 && this._clips.splice(e, 1);
        },
        removeAnimator: function(t) {
            for (var e = t.getClips(), n = 0; n < e.length; n++) this.removeClip(e[n]);
            t.animation = null;
        },
        _update: function() {
            for (var t = new Date().getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], a = [], o = 0; i > o; o++) {
                var s = n[o], l = s.step(t, e);
                l && (r.push(l), a.push(s));
            }
            for (o = 0; i > o; ) n[o]._needsRemove ? (n[o] = n[i - 1], n.pop(), i--) : o++;
            i = r.length;
            for (o = 0; i > o; o++) a[o].fire(r[o]);
            this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update();
        },
        _startLoop: function() {
            function t() {
                e._running && (mf(t), !e._paused && e._update());
            }
            var e = this;
            this._running = !0, mf(t);
        },
        start: function() {
            this._time = new Date().getTime(), this._pausedTime = 0, this._startLoop();
        },
        stop: function() {
            this._running = !1;
        },
        pause: function() {
            this._paused || (this._pauseStart = new Date().getTime(), this._paused = !0);
        },
        resume: function() {
            this._paused && (this._pausedTime += new Date().getTime() - this._pauseStart, this._paused = !1);
        },
        clear: function() {
            this._clips = [];
        },
        isFinished: function() {
            return !this._clips.length;
        },
        animate: function(t, e) {
            var n = new qd(t, (e = e || {}).loop, e.getter, e.setter);
            return this.addAnimator(n), n;
        }
    }, c(zf, yd);
    var Bf = function() {
        this._track = [];
    };
    Bf.prototype = {
        constructor: Bf,
        recognize: function(t, e, n) {
            return this._doTrack(t, e, n), this._recognize(t);
        },
        clear: function() {
            return this._track.length = 0, this;
        },
        _doTrack: function(t, e, n) {
            var i = t.touches;
            if (i) {
                for (var r = {
                    points: [],
                    touches: [],
                    target: e,
                    event: t
                }, a = 0, o = i.length; o > a; a++) {
                    var s = i[a], l = rt(n, s, {});
                    r.points.push([ l.zrX, l.zrY ]), r.touches.push(s);
                }
                this._track.push(r);
            }
        },
        _recognize: function(t) {
            for (var e in Ef) if (Ef.hasOwnProperty(e)) {
                var n = Ef[e](this._track, t);
                if (n) return n;
            }
        }
    };
    var Ef = {
        pinch: function(t, e) {
            var n = t.length;
            if (n) {
                var i = (t[n - 1] || {}).points, r = (t[n - 2] || {}).points || i;
                if (r && r.length > 1 && i && i.length > 1) {
                    var a = fn(i) / fn(r);
                    !isFinite(a) && (a = 1), e.pinchScale = a;
                    var o = pn(i);
                    return e.pinchX = o[0], e.pinchY = o[1], {
                        type: "pinch",
                        target: t[0].target,
                        event: e
                    };
                }
            }
        }
    }, Rf = [ "click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu" ], Nf = [ "touchstart", "touchend", "touchmove" ], Ff = {
        pointerdown: 1,
        pointerup: 1,
        pointermove: 1,
        pointerout: 1
    }, Vf = p(Rf, function(t) {
        var e = t.replace("mouse", "pointer");
        return Ff[e] ? e : t;
    }), Wf = {
        mousemove: function(t) {
            t = ot(this.dom, t), this.trigger("mousemove", t);
        },
        mouseout: function(t) {
            var e = (t = ot(this.dom, t)).toElement || t.relatedTarget;
            if (e != this.dom) for (;e && 9 != e.nodeType; ) {
                if (e === this.dom) return;
                e = e.parentNode;
            }
            this.trigger("mouseout", t);
        },
        touchstart: function(t) {
            (t = ot(this.dom, t)).zrByTouch = !0, this._lastTouchMoment = new Date(), vn(this, t, "start"), 
            Wf.mousemove.call(this, t), Wf.mousedown.call(this, t), mn(this);
        },
        touchmove: function(t) {
            (t = ot(this.dom, t)).zrByTouch = !0, vn(this, t, "change"), Wf.mousemove.call(this, t), 
            mn(this);
        },
        touchend: function(t) {
            (t = ot(this.dom, t)).zrByTouch = !0, vn(this, t, "end"), Wf.mouseup.call(this, t), 
            +new Date() - this._lastTouchMoment < 300 && Wf.click.call(this, t), mn(this);
        },
        pointerdown: function(t) {
            Wf.mousedown.call(this, t);
        },
        pointermove: function(t) {
            yn(t) || Wf.mousemove.call(this, t);
        },
        pointerup: function(t) {
            Wf.mouseup.call(this, t);
        },
        pointerout: function(t) {
            yn(t) || Wf.mouseout.call(this, t);
        }
    };
    f([ "click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu" ], function(t) {
        Wf[t] = function(e) {
            e = ot(this.dom, e), this.trigger(t, e);
        };
    });
    var Hf = _n.prototype;
    Hf.dispose = function() {
        for (var t = Rf.concat(Nf), e = 0; e < t.length; e++) {
            var n = t[e];
            lt(this.dom, gn(n), this._handlers[n]);
        }
    }, Hf.setCursor = function(t) {
        this.dom.style && (this.dom.style.cursor = t || "default");
    }, c(_n, yd);
    var Gf = !$c.canvasSupported, Zf = {
        canvas: Of
    }, Xf = {}, Yf = function(t, e, n) {
        n = n || {}, this.dom = e, this.id = t;
        var i = this, r = new sf(), a = n.renderer;
        if (Gf) {
            if (!Zf.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
            a = "vml";
        } else a && Zf[a] || (a = "canvas");
        var o = new Zf[a](e, r, n, t);
        this.storage = r, this.painter = o;
        var s = $c.node || $c.worker ? null : new _n(o.getViewportRoot());
        this.handler = new Sd(r, o, s, o.root), this.animation = new zf({
            stage: {
                update: m(this.flush, this)
            }
        }), this.animation.start(), this._needsRefresh;
        var l = r.delFromStorage, h = r.addToStorage;
        r.delFromStorage = function(t) {
            l.call(r, t), t && t.removeSelfFromZr(i);
        }, r.addToStorage = function(t) {
            h.call(r, t), t.addSelfToZr(i);
        };
    };
    Yf.prototype = {
        constructor: Yf,
        getId: function() {
            return this.id;
        },
        add: function(t) {
            this.storage.addRoot(t), this._needsRefresh = !0;
        },
        remove: function(t) {
            this.storage.delRoot(t), this._needsRefresh = !0;
        },
        configLayer: function(t, e) {
            this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0;
        },
        setBackgroundColor: function(t) {
            this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0;
        },
        refreshImmediately: function() {
            this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1;
        },
        refresh: function() {
            this._needsRefresh = !0;
        },
        flush: function() {
            var t;
            this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, 
            this.refreshHoverImmediately()), t && this.trigger("rendered");
        },
        addHover: function(t, e) {
            if (this.painter.addHover) {
                var n = this.painter.addHover(t, e);
                return this.refreshHover(), n;
            }
        },
        removeHover: function(t) {
            this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover());
        },
        clearHover: function() {
            this.painter.clearHover && (this.painter.clearHover(), this.refreshHover());
        },
        refreshHover: function() {
            this._needsRefreshHover = !0;
        },
        refreshHoverImmediately: function() {
            this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover();
        },
        resize: function(t) {
            t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize();
        },
        clearAnimation: function() {
            this.animation.clear();
        },
        getWidth: function() {
            return this.painter.getWidth();
        },
        getHeight: function() {
            return this.painter.getHeight();
        },
        pathToImage: function(t, e) {
            return this.painter.pathToImage(t, e);
        },
        setCursorStyle: function(t) {
            this.handler.setCursorStyle(t);
        },
        findHover: function(t, e) {
            return this.handler.findHover(t, e);
        },
        on: function(t, e, n) {
            this.handler.on(t, e, n);
        },
        off: function(t, e) {
            this.handler.off(t, e);
        },
        trigger: function(t, e) {
            this.handler.trigger(t, e);
        },
        clear: function() {
            this.storage.delRoot(), this.painter.clear();
        },
        dispose: function() {
            this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), 
            this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, 
            bn(this.id);
        }
    };
    var qf = (Object.freeze || Object)({
        version: "4.0.5",
        init: wn,
        dispose: function(t) {
            if (t) t.dispose(); else {
                for (var e in Xf) Xf.hasOwnProperty(e) && Xf[e].dispose();
                Xf = {};
            }
            return this;
        },
        getInstance: function(t) {
            return Xf[t];
        },
        registerPainter: function(t, e) {
            Zf[t] = e;
        }
    }), jf = f, Uf = b, $f = x, Kf = "series\0", Qf = [ "fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding" ], Jf = 0, tp = ".", ep = "___EC__COMPONENT__CONTAINER___", np = 0, ip = function(t) {
        for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
        return function(e, n, i) {
            for (var r = {}, a = 0; a < t.length; a++) {
                var o = t[a][1];
                if (!(n && h(n, o) >= 0 || i && h(i, o) < 0)) {
                    var s = e.getShallow(o);
                    null != s && (r[t[a][0]] = s);
                }
            }
            return r;
        };
    }, rp = ip([ [ "lineWidth", "width" ], [ "stroke", "color" ], [ "opacity" ], [ "shadowBlur" ], [ "shadowOffsetX" ], [ "shadowOffsetY" ], [ "shadowColor" ] ]), ap = {
        getLineStyle: function(t) {
            var e = rp(this, t), n = this.getLineDash(e.lineWidth);
            return n && (e.lineDash = n), e;
        },
        getLineDash: function(t) {
            null == t && (t = 1);
            var e = this.get("type"), n = Math.max(t, 2), i = 4 * t;
            return "solid" === e || null == e ? null : "dashed" === e ? [ i, i ] : [ n, n ];
        }
    }, op = ip([ [ "fill", "color" ], [ "shadowBlur" ], [ "shadowOffsetX" ], [ "shadowOffsetY" ], [ "opacity" ], [ "shadowColor" ] ]), sp = {
        getAreaStyle: function(t, e) {
            return op(this, t, e);
        }
    }, lp = Math.pow, hp = Math.sqrt, up = 1e-8, cp = 1e-4, dp = hp(3), fp = 1 / 3, pp = F(), gp = F(), vp = F(), mp = Math.min, yp = Math.max, xp = Math.sin, _p = Math.cos, wp = 2 * Math.PI, bp = F(), Mp = F(), Sp = F(), Ip = [], Tp = [], Cp = {
        M: 1,
        L: 2,
        C: 3,
        Q: 4,
        A: 5,
        Z: 6,
        R: 7
    }, Ap = [], Dp = [], kp = [], Pp = [], Lp = Math.min, Op = Math.max, zp = Math.cos, Bp = Math.sin, Ep = Math.sqrt, Rp = Math.abs, Np = "undefined" != typeof Float32Array, Fp = function(t) {
        this._saveData = !t, this._saveData && (this.data = []), this._ctx = null;
    };
    Fp.prototype = {
        constructor: Fp,
        _xi: 0,
        _yi: 0,
        _x0: 0,
        _y0: 0,
        _ux: 0,
        _uy: 0,
        _len: 0,
        _lineDash: null,
        _dashOffset: 0,
        _dashIdx: 0,
        _dashSum: 0,
        setScale: function(t, e) {
            this._ux = Rp(1 / Ud / t) || 0, this._uy = Rp(1 / Ud / e) || 0;
        },
        getContext: function() {
            return this._ctx;
        },
        beginPath: function(t) {
            return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), 
            this._lineDash && (this._lineDash = null, this._dashOffset = 0), this;
        },
        moveTo: function(t, e) {
            return this.addData(Cp.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, 
            this._y0 = e, this._xi = t, this._yi = e, this;
        },
        lineTo: function(t, e) {
            var n = Rp(t - this._xi) > this._ux || Rp(e - this._yi) > this._uy || this._len < 5;
            return this.addData(Cp.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), 
            n && (this._xi = t, this._yi = e), this;
        },
        bezierCurveTo: function(t, e, n, i, r, a) {
            return this.addData(Cp.C, t, e, n, i, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)), 
            this._xi = r, this._yi = a, this;
        },
        quadraticCurveTo: function(t, e, n, i) {
            return this.addData(Cp.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), 
            this._xi = n, this._yi = i, this;
        },
        arc: function(t, e, n, i, r, a) {
            return this.addData(Cp.A, t, e, n, n, i, r - i, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, a), 
            this._xi = zp(r) * n + t, this._yi = Bp(r) * n + e, this;
        },
        arcTo: function(t, e, n, i, r) {
            return this._ctx && this._ctx.arcTo(t, e, n, i, r), this;
        },
        rect: function(t, e, n, i) {
            return this._ctx && this._ctx.rect(t, e, n, i), this.addData(Cp.R, t, e, n, i), 
            this;
        },
        closePath: function() {
            this.addData(Cp.Z);
            var t = this._ctx, e = this._x0, n = this._y0;
            return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, 
            this._yi = n, this;
        },
        fill: function(t) {
            t && t.fill(), this.toStatic();
        },
        stroke: function(t) {
            t && t.stroke(), this.toStatic();
        },
        setLineDash: function(t) {
            if (t instanceof Array) {
                this._lineDash = t, this._dashIdx = 0;
                for (var e = 0, n = 0; n < t.length; n++) e += t[n];
                this._dashSum = e;
            }
            return this;
        },
        setLineDashOffset: function(t) {
            return this._dashOffset = t, this;
        },
        len: function() {
            return this._len;
        },
        setData: function(t) {
            var e = t.length;
            this.data && this.data.length == e || !Np || (this.data = new Float32Array(e));
            for (var n = 0; e > n; n++) this.data[n] = t[n];
            this._len = e;
        },
        appendPath: function(t) {
            t instanceof Array || (t = [ t ]);
            for (var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) n += t[r].len();
            Np && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
            for (r = 0; e > r; r++) for (var a = t[r].data, o = 0; o < a.length; o++) this.data[i++] = a[o];
            this._len = i;
        },
        addData: function(t) {
            if (this._saveData) {
                var e = this.data;
                this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                for (var n = 0; n < arguments.length; n++) e[this._len++] = arguments[n];
                this._prevCmd = t;
            }
        },
        _expandData: function() {
            if (!(this.data instanceof Array)) {
                for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                this.data = t;
            }
        },
        _needsDash: function() {
            return this._lineDash;
        },
        _dashedLineTo: function(t, e) {
            var n, i, r = this._dashSum, a = this._dashOffset, o = this._lineDash, s = this._ctx, l = this._xi, h = this._yi, u = t - l, c = e - h, d = Ep(u * u + c * c), f = l, p = h, g = o.length;
            for (u /= d, c /= d, 0 > a && (a = r + a), f -= (a %= r) * u, p -= a * c; u > 0 && t >= f || 0 > u && f >= t || 0 == u && (c > 0 && e >= p || 0 > c && p >= e); ) f += u * (n = o[i = this._dashIdx]), 
            p += c * n, this._dashIdx = (i + 1) % g, u > 0 && l > f || 0 > u && f > l || c > 0 && h > p || 0 > c && p > h || s[i % 2 ? "moveTo" : "lineTo"](u >= 0 ? Lp(f, t) : Op(f, t), c >= 0 ? Lp(p, e) : Op(p, e));
            u = f - t, c = p - e, this._dashOffset = -Ep(u * u + c * c);
        },
        _dashedBezierTo: function(t, e, n, i, r, a) {
            var o, s, l, h, u, c = this._dashSum, d = this._dashOffset, f = this._lineDash, p = this._ctx, g = this._xi, v = this._yi, m = qn, y = 0, x = this._dashIdx, _ = f.length, w = 0;
            for (0 > d && (d = c + d), d %= c, o = 0; 1 > o; o += .1) s = m(g, t, n, r, o + .1) - m(g, t, n, r, o), 
            l = m(v, e, i, a, o + .1) - m(v, e, i, a, o), y += Ep(s * s + l * l);
            for (;_ > x && !((w += f[x]) > d); x++) ;
            for (o = (w - d) / y; 1 >= o; ) h = m(g, t, n, r, o), u = m(v, e, i, a, o), x % 2 ? p.moveTo(h, u) : p.lineTo(h, u), 
            o += f[x] / y, x = (x + 1) % _;
            x % 2 != 0 && p.lineTo(r, a), s = r - h, l = a - u, this._dashOffset = -Ep(s * s + l * l);
        },
        _dashedQuadraticTo: function(t, e, n, i) {
            var r = n, a = i;
            n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, 
            this._dashedBezierTo(t, e, n, i, r, a);
        },
        toStatic: function() {
            var t = this.data;
            t instanceof Array && (t.length = this._len, Np && (this.data = new Float32Array(t)));
        },
        getBoundingRect: function() {
            Ap[0] = Ap[1] = kp[0] = kp[1] = Number.MAX_VALUE, Dp[0] = Dp[1] = Pp[0] = Pp[1] = -Number.MAX_VALUE;
            for (var t = this.data, e = 0, n = 0, i = 0, r = 0, a = 0; a < t.length; ) {
                var o = t[a++];
                switch (1 == a && (e = t[a], n = t[a + 1], i = e, r = n), o) {
                  case Cp.M:
                    e = i = t[a++], n = r = t[a++], kp[0] = i, kp[1] = r, Pp[0] = i, Pp[1] = r;
                    break;

                  case Cp.L:
                    oi(e, n, t[a], t[a + 1], kp, Pp), e = t[a++], n = t[a++];
                    break;

                  case Cp.C:
                    si(e, n, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], kp, Pp), e = t[a++], n = t[a++];
                    break;

                  case Cp.Q:
                    li(e, n, t[a++], t[a++], t[a], t[a + 1], kp, Pp), e = t[a++], n = t[a++];
                    break;

                  case Cp.A:
                    var s = t[a++], l = t[a++], h = t[a++], u = t[a++], c = t[a++], d = t[a++] + c, f = (t[a++], 
                    1 - t[a++]);
                    1 == a && (i = zp(c) * h + s, r = Bp(c) * u + l), hi(s, l, h, u, c, d, f, kp, Pp), 
                    e = zp(d) * h + s, n = Bp(d) * u + l;
                    break;

                  case Cp.R:
                    oi(i = e = t[a++], r = n = t[a++], i + t[a++], r + t[a++], kp, Pp);
                    break;

                  case Cp.Z:
                    e = i, n = r;
                }
                Q(Ap, Ap, kp), J(Dp, Dp, Pp);
            }
            return 0 === a && (Ap[0] = Ap[1] = Dp[0] = Dp[1] = 0), new re(Ap[0], Ap[1], Dp[0] - Ap[0], Dp[1] - Ap[1]);
        },
        rebuildPath: function(t) {
            for (var e, n, i, r, a, o, s = this.data, l = this._ux, h = this._uy, u = this._len, c = 0; u > c; ) {
                var d = s[c++];
                switch (1 == c && (i = s[c], r = s[c + 1], e = i, n = r), d) {
                  case Cp.M:
                    e = i = s[c++], n = r = s[c++], t.moveTo(i, r);
                    break;

                  case Cp.L:
                    a = s[c++], o = s[c++], (Rp(a - i) > l || Rp(o - r) > h || c === u - 1) && (t.lineTo(a, o), 
                    i = a, r = o);
                    break;

                  case Cp.C:
                    t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
                    break;

                  case Cp.Q:
                    t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
                    break;

                  case Cp.A:
                    var f = s[c++], p = s[c++], g = s[c++], v = s[c++], m = s[c++], y = s[c++], x = s[c++], _ = s[c++], w = g > v ? g : v, b = g > v ? 1 : g / v, M = g > v ? v / g : 1, S = m + y;
                    Math.abs(g - v) > .001 ? (t.translate(f, p), t.rotate(x), t.scale(b, M), t.arc(0, 0, w, m, S, 1 - _), 
                    t.scale(1 / b, 1 / M), t.rotate(-x), t.translate(-f, -p)) : t.arc(f, p, w, m, S, 1 - _), 
                    1 == c && (e = zp(m) * g + f, n = Bp(m) * v + p), i = zp(S) * g + f, r = Bp(S) * v + p;
                    break;

                  case Cp.R:
                    e = i = s[c], n = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
                    break;

                  case Cp.Z:
                    t.closePath(), i = e, r = n;
                }
            }
        }
    }, Fp.CMD = Cp;
    var Vp = 2 * Math.PI, Wp = 2 * Math.PI, Hp = Fp.CMD, Gp = 2 * Math.PI, Zp = 1e-4, Xp = [ -1, -1, -1 ], Yp = [ -1, -1 ], qp = gf.prototype.getCanvasPattern, jp = Math.abs, Up = new Fp(!0);
    Si.prototype = {
        constructor: Si,
        type: "path",
        __dirtyPath: !0,
        strokeContainThreshold: 5,
        brush: function(t, e) {
            var n = this.style, i = this.path || Up, r = n.hasStroke(), a = n.hasFill(), o = n.fill, s = n.stroke, l = a && !!o.colorStops, h = r && !!s.colorStops, u = a && !!o.image, c = r && !!s.image;
            if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {
                var d;
                l && (d = d || this.getBoundingRect(), this._fillGradient = n.getGradient(t, o, d)), 
                h && (d = d || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, d));
            }
            l ? t.fillStyle = this._fillGradient : u && (t.fillStyle = qp.call(o, t)), h ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = qp.call(s, t));
            var f = n.lineDash, p = n.lineDashOffset, g = !!t.setLineDash, v = this.getGlobalScale();
            if (i.setScale(v[0], v[1]), this.__dirtyPath || f && !g && r ? (i.beginPath(t), 
            f && !g && (i.setLineDash(f), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), 
            this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), 
            a) if (null != n.fillOpacity) {
                m = t.globalAlpha;
                t.globalAlpha = n.fillOpacity * n.opacity, i.fill(t), t.globalAlpha = m;
            } else i.fill(t);
            if (f && g && (t.setLineDash(f), t.lineDashOffset = p), r) if (null != n.strokeOpacity) {
                var m = t.globalAlpha;
                t.globalAlpha = n.strokeOpacity * n.opacity, i.stroke(t), t.globalAlpha = m;
            } else i.stroke(t);
            f && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
        },
        buildPath: function() {},
        createPathProxy: function() {
            this.path = new Fp();
        },
        getBoundingRect: function() {
            var t = this._rect, e = this.style, n = !t;
            if (n) {
                var i = this.path;
                i || (i = this.path = new Fp()), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)), 
                t = i.getBoundingRect();
            }
            if (this._rect = t, e.hasStroke()) {
                var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                if (this.__dirty || n) {
                    r.copy(t);
                    var a = e.lineWidth, o = e.strokeNoScale ? this.getLineScale() : 1;
                    e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, 
                    r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2);
                }
                return r;
            }
            return t;
        },
        contain: function(t, e) {
            var n = this.transformCoordToLocal(t, e), i = this.getBoundingRect(), r = this.style;
            if (t = n[0], e = n[1], i.contain(t, e)) {
                var a = this.path.data;
                if (r.hasStroke()) {
                    var o = r.lineWidth, s = r.strokeNoScale ? this.getLineScale() : 1;
                    if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), 
                    Mi(a, o / s, t, e))) return !0;
                }
                if (r.hasFill()) return bi(a, t, e);
            }
            return !1;
        },
        dirty: function(t) {
            null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, 
            this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty();
        },
        animateShape: function(t) {
            return this.animate("shape", t);
        },
        attrKV: function(t, e) {
            "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : an.prototype.attrKV.call(this, t, e);
        },
        setShape: function(t, e) {
            var n = this.shape;
            if (n) {
                if (b(t)) for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]); else n[t] = e;
                this.dirty(!0);
            }
            return this;
        },
        getLineScale: function() {
            var t = this.transform;
            return t && jp(t[0] - 1) > 1e-10 && jp(t[3] - 1) > 1e-10 ? Math.sqrt(jp(t[0] * t[3] - t[2] * t[1])) : 1;
        }
    }, Si.extend = function(t) {
        var e = function(e) {
            Si.call(this, e), t.style && this.style.extendFrom(t.style, !1);
            var n = t.shape;
            if (n) {
                this.shape = this.shape || {};
                var i = this.shape;
                for (var r in n) !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r]);
            }
            t.init && t.init.call(this, e);
        };
        u(e, Si);
        for (var n in t) "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
        return e;
    }, u(Si, an);
    var $p = Fp.CMD, Kp = [ [], [], [] ], Qp = Math.sqrt, Jp = Math.atan2, tg = function(t, e) {
        var n, i, r, a, o, s, l = t.data, h = $p.M, u = $p.C, c = $p.L, d = $p.R, f = $p.A, p = $p.Q;
        for (r = 0, a = 0; r < l.length; ) {
            switch (n = l[r++], a = r, i = 0, n) {
              case h:
              case c:
                i = 1;
                break;

              case u:
                i = 3;
                break;

              case p:
                i = 2;
                break;

              case f:
                var g = e[4], v = e[5], m = Qp(e[0] * e[0] + e[1] * e[1]), y = Qp(e[2] * e[2] + e[3] * e[3]), x = Jp(-e[1] / y, e[0] / m);
                l[r] *= m, l[r++] += g, l[r] *= y, l[r++] += v, l[r++] *= m, l[r++] *= y, l[r++] += x, 
                l[r++] += x, a = r += 2;
                break;

              case d:
                s[0] = l[r++], s[1] = l[r++], K(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], 
                s[1] += l[r++], K(s, s, e), l[a++] = s[0], l[a++] = s[1];
            }
            for (o = 0; i > o; o++) (s = Kp[o])[0] = l[r++], s[1] = l[r++], K(s, s, e), l[a++] = s[0], 
            l[a++] = s[1];
        }
    }, eg = Math.sqrt, ng = Math.sin, ig = Math.cos, rg = Math.PI, ag = function(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
    }, og = function(t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (ag(t) * ag(e));
    }, sg = function(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(og(t, e));
    }, lg = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi, hg = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g, ug = function(t) {
        an.call(this, t);
    };
    ug.prototype = {
        constructor: ug,
        type: "text",
        brush: function(t, e) {
            var n = this.style;
            this.__dirty && Ve(n), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;
            var i = n.text;
            null != i && (i += ""), rn(i, n) && (this.setTransform(t), He(this, t, i, n, null, e), 
            this.restoreTransform(t));
        },
        getBoundingRect: function() {
            var t = this.style;
            if (this.__dirty && Ve(t), !this._rect) {
                var e = t.text;
                null != e ? e += "" : e = "";
                var n = Me(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
                if (n.x += t.x || 0, n.y += t.y || 0, Je(t.textStroke, t.textStrokeWidth)) {
                    var i = t.textStrokeWidth;
                    n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i;
                }
                this._rect = n;
            }
            return this._rect;
        }
    }, u(ug, an);
    var cg = Si.extend({
        type: "circle",
        shape: {
            cx: 0,
            cy: 0,
            r: 0
        },
        buildPath: function(t, e, n) {
            n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0);
        }
    }), dg = [ [ "shadowBlur", 0 ], [ "shadowColor", "#000" ], [ "shadowOffsetX", 0 ], [ "shadowOffsetY", 0 ] ], fg = function(t) {
        return $c.browser.ie && $c.browser.version >= 11 ? function() {
            var e, n = this.__clipPaths, i = this.style;
            if (n) for (var r = 0; r < n.length; r++) {
                var a = n[r], o = a && a.shape, s = a && a.type;
                if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
                    for (l = 0; l < dg.length; l++) dg[l][2] = i[dg[l][0]], i[dg[l][0]] = dg[l][1];
                    e = !0;
                    break;
                }
            }
            if (t.apply(this, arguments), e) for (var l = 0; l < dg.length; l++) i[dg[l][0]] = dg[l][2];
        } : t;
    }, pg = Si.extend({
        type: "sector",
        shape: {
            cx: 0,
            cy: 0,
            r0: 0,
            r: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: !0
        },
        brush: fg(Si.prototype.brush),
        buildPath: function(t, e) {
            var n = e.cx, i = e.cy, r = Math.max(e.r0 || 0, 0), a = Math.max(e.r, 0), o = e.startAngle, s = e.endAngle, l = e.clockwise, h = Math.cos(o), u = Math.sin(o);
            t.moveTo(h * r + n, u * r + i), t.lineTo(h * a + n, u * a + i), t.arc(n, i, a, o, s, !l), 
            t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, o, l), 
            t.closePath();
        }
    }), gg = Si.extend({
        type: "ring",
        shape: {
            cx: 0,
            cy: 0,
            r: 0,
            r0: 0
        },
        buildPath: function(t, e) {
            var n = e.cx, i = e.cy, r = 2 * Math.PI;
            t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0);
        }
    }), vg = function(t, e) {
        for (var n = t.length, i = [], r = 0, a = 1; n > a; a++) r += U(t[a - 1], t[a]);
        var o = r / 2;
        o = n > o ? n : o;
        for (a = 0; o > a; a++) {
            var s, l, h, u = a / (o - 1) * (e ? n : n - 1), c = Math.floor(u), d = u - c, f = t[c % n];
            e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], h = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1], 
            l = t[c > n - 2 ? n - 1 : c + 1], h = t[c > n - 3 ? n - 1 : c + 2]);
            var p = d * d, g = d * p;
            i.push([ ki(s[0], f[0], l[0], h[0], d, p, g), ki(s[1], f[1], l[1], h[1], d, p, g) ]);
        }
        return i;
    }, mg = function(t, e, n, i) {
        var r, a, o, s, l = [], h = [], u = [], c = [];
        if (i) {
            o = [ 1 / 0, 1 / 0 ], s = [ -1 / 0, -1 / 0 ];
            for (var d = 0, f = t.length; f > d; d++) Q(o, o, t[d]), J(s, s, t[d]);
            Q(o, o, i[0]), J(s, s, i[1]);
        }
        for (var d = 0, f = t.length; f > d; d++) {
            var p = t[d];
            if (n) r = t[d ? d - 1 : f - 1], a = t[(d + 1) % f]; else {
                if (0 === d || d === f - 1) {
                    l.push(W(t[d]));
                    continue;
                }
                r = t[d - 1], a = t[d + 1];
            }
            Z(h, a, r), q(h, h, e);
            var g = U(p, r), v = U(p, a), m = g + v;
            0 !== m && (g /= m, v /= m), q(u, h, -g), q(c, h, v);
            var y = H([], p, u), x = H([], p, c);
            i && (J(y, y, o), Q(y, y, s), J(x, x, o), Q(x, x, s)), l.push(y), l.push(x);
        }
        return n && l.push(l.shift()), l;
    }, yg = Si.extend({
        type: "polygon",
        shape: {
            points: null,
            smooth: !1,
            smoothConstraint: null
        },
        buildPath: function(t, e) {
            Pi(t, e, !0);
        }
    }), xg = Si.extend({
        type: "polyline",
        shape: {
            points: null,
            smooth: !1,
            smoothConstraint: null
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            Pi(t, e, !1);
        }
    }), _g = Si.extend({
        type: "rect",
        shape: {
            r: 0,
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n = e.x, i = e.y, r = e.width, a = e.height;
            e.r ? Fe(t, e) : t.rect(n, i, r, a), t.closePath();
        }
    }), wg = Si.extend({
        type: "line",
        shape: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            percent: 1
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            var n = e.x1, i = e.y1, r = e.x2, a = e.y2, o = e.percent;
            0 !== o && (t.moveTo(n, i), 1 > o && (r = n * (1 - o) + r * o, a = i * (1 - o) + a * o), 
            t.lineTo(r, a));
        },
        pointAt: function(t) {
            var e = this.shape;
            return [ e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t ];
        }
    }), bg = [], Mg = Si.extend({
        type: "bezier-curve",
        shape: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            cpx1: 0,
            cpy1: 0,
            percent: 1
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            var n = e.x1, i = e.y1, r = e.x2, a = e.y2, o = e.cpx1, s = e.cpy1, l = e.cpx2, h = e.cpy2, u = e.percent;
            0 !== u && (t.moveTo(n, i), null == l || null == h ? (1 > u && (ii(n, o, r, u, bg), 
            o = bg[1], r = bg[2], ii(i, s, a, u, bg), s = bg[1], a = bg[2]), t.quadraticCurveTo(o, s, r, a)) : (1 > u && (Kn(n, o, l, r, u, bg), 
            o = bg[1], l = bg[2], r = bg[3], Kn(i, s, h, a, u, bg), s = bg[1], h = bg[2], a = bg[3]), 
            t.bezierCurveTo(o, s, l, h, r, a)));
        },
        pointAt: function(t) {
            return Li(this.shape, t, !1);
        },
        tangentAt: function(t) {
            var e = Li(this.shape, t, !0);
            return j(e, e);
        }
    }), Sg = Si.extend({
        type: "arc",
        shape: {
            cx: 0,
            cy: 0,
            r: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: !0
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            var n = e.cx, i = e.cy, r = Math.max(e.r, 0), a = e.startAngle, o = e.endAngle, s = e.clockwise, l = Math.cos(a), h = Math.sin(a);
            t.moveTo(l * r + n, h * r + i), t.arc(n, i, r, a, o, !s);
        }
    }), Ig = Si.extend({
        type: "compound",
        shape: {
            paths: null
        },
        _updatePathDirty: function() {
            for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) t = t || e[n].__dirtyPath;
            this.__dirtyPath = t, this.__dirty = this.__dirty || t;
        },
        beforeBrush: function() {
            this._updatePathDirty();
            for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), 
            t[n].path.setScale(e[0], e[1]);
        },
        buildPath: function(t, e) {
            for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0);
        },
        afterBrush: function() {
            for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1;
        },
        getBoundingRect: function() {
            return this._updatePathDirty(), Si.prototype.getBoundingRect.call(this);
        }
    }), Tg = function(t) {
        this.colorStops = t || [];
    };
    Tg.prototype = {
        constructor: Tg,
        addColorStop: function(t, e) {
            this.colorStops.push({
                offset: t,
                color: e
            });
        }
    };
    var Cg = function(t, e, n, i, r, a) {
        this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, 
        this.y2 = null == i ? 0 : i, this.type = "linear", this.global = a || !1, Tg.call(this, r);
    };
    Cg.prototype = {
        constructor: Cg
    }, u(Cg, Tg);
    var Ag = function(t, e, n, i, r) {
        this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, 
        this.type = "radial", this.global = r || !1, Tg.call(this, i);
    };
    Ag.prototype = {
        constructor: Ag
    }, u(Ag, Tg), Oi.prototype.incremental = !0, Oi.prototype.clearDisplaybles = function() {
        this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), 
        this.notClear = !1;
    }, Oi.prototype.addDisplayable = function(t, e) {
        e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty();
    }, Oi.prototype.addDisplayables = function(t, e) {
        e = e || !1;
        for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e);
    }, Oi.prototype.eachPendingDisplayable = function(t) {
        for (e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
        for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e]);
    }, Oi.prototype.update = function() {
        this.updateTransform();
        for (t = this._cursor; t < this._displayables.length; t++) (e = this._displayables[t]).parent = this, 
        e.update(), e.parent = null;
        for (var t = 0; t < this._temporaryDisplayables.length; t++) {
            var e = this._temporaryDisplayables[t];
            e.parent = this, e.update(), e.parent = null;
        }
    }, Oi.prototype.brush = function(t) {
        for (e = this._cursor; e < this._displayables.length; e++) (n = this._displayables[e]).beforeBrush && n.beforeBrush(t), 
        n.brush(t, e === this._cursor ? null : this._displayables[e - 1]), n.afterBrush && n.afterBrush(t);
        this._cursor = e;
        for (var e = 0; e < this._temporaryDisplayables.length; e++) {
            var n = this._temporaryDisplayables[e];
            n.beforeBrush && n.beforeBrush(t), n.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), 
            n.afterBrush && n.afterBrush(t);
        }
        this._temporaryDisplayables = [], this.notClear = !0;
    };
    var Dg = [];
    Oi.prototype.getBoundingRect = function() {
        if (!this._rect) {
            for (var t = new re(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                var n = this._displayables[e], i = n.getBoundingRect().clone();
                n.needLocalTransform() && i.applyTransform(n.getLocalTransform(Dg)), t.union(i);
            }
            this._rect = t;
        }
        return this._rect;
    }, Oi.prototype.contain = function(t, e) {
        var n = this.transformCoordToLocal(t, e);
        if (this.getBoundingRect().contain(n[0], n[1])) for (var i = 0; i < this._displayables.length; i++) if (this._displayables[i].contain(t, e)) return !0;
        return !1;
    }, u(Oi, an);
    var kg = Math.round, Pg = Math.max, Lg = Math.min, Og = {}, zg = R(), Bg = 0, Eg = (Object.freeze || Object)({
        extendShape: zi,
        extendPath: function(t, e) {
            return Di(t, e);
        },
        makePath: Bi,
        makeImage: Ei,
        mergePath: function(t, e) {
            for (var n = [], i = t.length, r = 0; i > r; r++) {
                var a = t[r];
                a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), 
                n.push(a.path);
            }
            var o = new Si(e);
            return o.createPathProxy(), o.buildPath = function(t) {
                t.appendPath(n);
                var e = t.getContext();
                e && t.rebuildPath(e);
            }, o;
        },
        resizePath: Ni,
        subPixelOptimizeLine: Fi,
        subPixelOptimizeRect: Vi,
        subPixelOptimize: Wi,
        setElementHoverStyle: $i,
        isInEmphasis: Ki,
        setHoverStyle: nr,
        setAsHoverStyleTrigger: ir,
        setLabelStyle: rr,
        setTextStyle: ar,
        setText: function(t, e, n) {
            var i, r = {
                isRectText: !0
            };
            !1 === n ? i = !0 : r.autoColor = n, or(t, e, r, i);
        },
        getFont: dr,
        updateProps: pr,
        initProps: gr,
        getTransform: vr,
        applyTransform: mr,
        transformDirection: yr,
        groupTransition: xr,
        clipPointsByRect: function(t, e) {
            return p(t, function(t) {
                var n = t[0];
                n = Pg(n, e.x), n = Lg(n, e.x + e.width);
                var i = t[1];
                return i = Pg(i, e.y), i = Lg(i, e.y + e.height), [ n, i ];
            });
        },
        clipRectByRect: function(t, e) {
            var n = Pg(t.x, e.x), i = Lg(t.x + t.width, e.x + e.width), r = Pg(t.y, e.y), a = Lg(t.y + t.height, e.y + e.height);
            return i >= n && a >= r ? {
                x: n,
                y: r,
                width: i - n,
                height: a - r
            } : void 0;
        },
        createIcon: _r,
        Group: rf,
        Image: on,
        Text: ug,
        Circle: cg,
        Sector: pg,
        Ring: gg,
        Polygon: yg,
        Polyline: xg,
        Rect: _g,
        Line: wg,
        BezierCurve: Mg,
        Arc: Sg,
        IncrementalDisplayable: Oi,
        CompoundPath: Ig,
        LinearGradient: Cg,
        RadialGradient: Ag,
        BoundingRect: re
    }), Rg = [ "textStyle", "color" ], Ng = {
        getTextColor: function(t) {
            var e = this.ecModel;
            return this.getShallow("color") || (!t && e ? e.get(Rg) : null);
        },
        getFont: function() {
            return dr({
                fontStyle: this.getShallow("fontStyle"),
                fontWeight: this.getShallow("fontWeight"),
                fontSize: this.getShallow("fontSize"),
                fontFamily: this.getShallow("fontFamily")
            }, this.ecModel);
        },
        getTextRect: function(t) {
            return Me(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"));
        }
    }, Fg = ip([ [ "fill", "color" ], [ "stroke", "borderColor" ], [ "lineWidth", "borderWidth" ], [ "opacity" ], [ "shadowBlur" ], [ "shadowOffsetX" ], [ "shadowOffsetY" ], [ "shadowColor" ], [ "textPosition" ], [ "textAlign" ] ]), Vg = {
        getItemStyle: function(t, e) {
            var n = Fg(this, t, e), i = this.getBorderLineDash();
            return i && (n.lineDash = i), n;
        },
        getBorderLineDash: function() {
            var t = this.get("borderType");
            return "solid" === t || null == t ? null : "dashed" === t ? [ 5, 5 ] : [ 1, 1 ];
        }
    }, Wg = c, Hg = Ln();
    wr.prototype = {
        constructor: wr,
        init: null,
        mergeOption: function(t) {
            r(this.option, t, !0);
        },
        get: function(t, e) {
            return null == t ? this.option : br(this.option, this.parsePath(t), !e && Mr(this, t));
        },
        getShallow: function(t, e) {
            var n = this.option, i = null == n ? n : n[t], r = !e && Mr(this, t);
            return null == i && r && (i = r.getShallow(t)), i;
        },
        getModel: function(t, e) {
            var n, i = null == t ? this.option : br(this.option, t = this.parsePath(t));
            return e = e || (n = Mr(this, t)) && n.getModel(t), new wr(i, e, this.ecModel);
        },
        isEmpty: function() {
            return null == this.option;
        },
        restoreData: function() {},
        clone: function() {
            return new (0, this.constructor)(i(this.option));
        },
        setReadOnly: function() {},
        parsePath: function(t) {
            return "string" == typeof t && (t = t.split(".")), t;
        },
        customizeGetParent: function(t) {
            Hg(this).getParent = t;
        },
        isAnimationEnabled: function() {
            if (!$c.node) {
                if (null != this.option.animation) return !!this.option.animation;
                if (this.parentModel) return this.parentModel.isAnimationEnabled();
            }
        }
    }, Vn(wr), Wn(wr), Wg(wr, ap), Wg(wr, sp), Wg(wr, Ng), Wg(wr, Vg);
    var Gg = 0, Zg = 1e-4, Xg = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/, Yg = (Object.freeze || Object)({
        linearMap: Tr,
        parsePercent: Cr,
        round: Ar,
        asc: Dr,
        getPrecision: function(t) {
            if (t = +t, isNaN(t)) return 0;
            for (var e = 1, n = 0; Math.round(t * e) / e !== t; ) e *= 10, n++;
            return n;
        },
        getPrecisionSafe: kr,
        getPixelPrecision: Pr,
        getPercentWithPrecision: Lr,
        MAX_SAFE_INTEGER: 9007199254740991,
        remRadian: Or,
        isRadianAroundZero: zr,
        parseDate: Br,
        quantity: Er,
        nice: Nr,
        quantile: function(t, e) {
            var n = (t.length - 1) * e + 1, i = Math.floor(n), r = +t[i - 1], a = n - i;
            return a ? r + a * (t[i] - r) : r;
        },
        reformIntervals: function(t) {
            function e(t, n, i) {
                return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] == (i ? -1 : 1) || !i && e(t, n, 1));
            }
            t.sort(function(t, n) {
                return e(t, n, 0) ? -1 : 1;
            });
            for (var n = -1 / 0, i = 1, r = 0; r < t.length; ) {
                for (var a = t[r].interval, o = t[r].close, s = 0; 2 > s; s++) a[s] <= n && (a[s] = n, 
                o[s] = s ? 1 : 1 - i), n = a[s], i = o[s];
                a[0] === a[1] && o[0] * o[1] != 1 ? t.splice(r, 1) : r++;
            }
            return t;
        },
        isNumeric: function(t) {
            return t - parseFloat(t) >= 0;
        }
    }), qg = P, jg = /([&<>"'])/g, Ug = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }, $g = [ "a", "b", "c", "d", "e", "f", "g" ], Kg = function(t, e) {
        return "{" + t + (null == e ? "" : e) + "}";
    }, Qg = De, Jg = Me, tv = (Object.freeze || Object)({
        addCommas: Fr,
        toCamelCase: Vr,
        normalizeCssArray: qg,
        encodeHTML: Wr,
        formatTpl: Hr,
        formatTplSimple: function(t, e, n) {
            return f(e, function(e, i) {
                t = t.replace("{" + i + "}", n ? Wr(e) : e);
            }), t;
        },
        getTooltipMarker: Gr,
        formatTime: Xr,
        capitalFirst: Yr,
        truncateText: Qg,
        getTextRect: Jg
    }), ev = f, nv = [ "left", "right", "top", "bottom", "width", "height" ], iv = [ [ "width", "left", "right" ], [ "height", "top", "bottom" ] ], rv = qr, av = (y(qr, "vertical"), 
    y(qr, "horizontal"), {
        getBoxLayoutParams: function() {
            return {
                left: this.get("left"),
                top: this.get("top"),
                right: this.get("right"),
                bottom: this.get("bottom"),
                width: this.get("width"),
                height: this.get("height")
            };
        }
    }), ov = Ln(), sv = wr.extend({
        type: "component",
        id: "",
        name: "",
        mainType: "",
        subType: "",
        componentIndex: 0,
        defaultOption: null,
        ecModel: null,
        dependentModels: [],
        uid: null,
        layoutMode: null,
        $constructor: function(t, e, n, i) {
            wr.call(this, t, e, n, i), this.uid = Sr("ec_cpt_model");
        },
        init: function(t, e, n) {
            this.mergeDefaultAndTheme(t, n);
        },
        mergeDefaultAndTheme: function(t, e) {
            var n = this.layoutMode, i = n ? $r(t) : {};
            r(t, e.getTheme().get(this.mainType)), r(t, this.getDefaultOption()), n && Ur(t, i, n);
        },
        mergeOption: function(t) {
            r(this.option, t, !0);
            var e = this.layoutMode;
            e && Ur(this.option, t, e);
        },
        optionUpdated: function() {},
        getDefaultOption: function() {
            var t = ov(this);
            if (!t.defaultOption) {
                for (var e = [], n = this.constructor; n; ) {
                    var i = n.prototype.defaultOption;
                    i && e.push(i), n = n.superClass;
                }
                for (var a = {}, o = e.length - 1; o >= 0; o--) a = r(a, e[o], !0);
                t.defaultOption = a;
            }
            return t.defaultOption;
        },
        getReferringComponents: function(t) {
            return this.ecModel.queryComponents({
                mainType: t,
                index: this.get(t + "Index", !0),
                id: this.get(t + "Id", !0)
            });
        }
    });
    Zn(sv, {
        registerWhenExtend: !0
    }), function(t) {
        var e = {};
        t.registerSubTypeDefaulter = function(t, n) {
            t = Nn(t), e[t.main] = n;
        }, t.determineSubType = function(n, i) {
            var r = i.type;
            if (!r) {
                var a = Nn(n).main;
                t.hasSubTypes(n) && e[a] && (r = e[a](i));
            }
            return r;
        };
    }(sv), function(t, e) {
        function n(t) {
            var n = {}, a = [];
            return f(t, function(o) {
                var s = i(n, o), l = r(s.originalDeps = e(o), t);
                s.entryCount = l.length, 0 === s.entryCount && a.push(o), f(l, function(t) {
                    h(s.predecessor, t) < 0 && s.predecessor.push(t);
                    var e = i(n, t);
                    h(e.successor, t) < 0 && e.successor.push(o);
                });
            }), {
                graph: n,
                noEntryList: a
            };
        }
        function i(t, e) {
            return t[e] || (t[e] = {
                predecessor: [],
                successor: []
            }), t[e];
        }
        function r(t, e) {
            var n = [];
            return f(t, function(t) {
                h(e, t) >= 0 && n.push(t);
            }), n;
        }
        t.topologicalTravel = function(t, e, i, r) {
            function a(t) {
                s[t].entryCount--, 0 === s[t].entryCount && l.push(t);
            }
            if (t.length) {
                var o = n(e), s = o.graph, l = o.noEntryList, h = {};
                for (f(t, function(t) {
                    h[t] = !0;
                }); l.length; ) {
                    var u = l.pop(), c = s[u], d = !!h[u];
                    d && (i.call(r, u, c.originalDeps.slice()), delete h[u]), f(c.successor, d ? function(t) {
                        h[t] = !0, a(t);
                    } : a);
                }
                f(h, function() {
                    throw new Error("Circle dependency may exists");
                });
            }
        };
    }(sv, function(t) {
        var e = [];
        return f(sv.getClassesByMainType(t), function(t) {
            e = e.concat(t.prototype.dependencies || []);
        }), e = p(e, function(t) {
            return Nn(t).main;
        }), "dataset" !== t && h(e, "dataset") <= 0 && e.unshift("dataset"), e;
    }), c(sv, av);
    var lv = "";
    "undefined" != typeof navigator && (lv = navigator.platform || "");
    var hv = {
        color: [ "#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3" ],
        gradientColor: [ "#f6efa6", "#d88273", "#bf444c" ],
        textStyle: {
            fontFamily: lv.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        blendMode: null,
        animation: "auto",
        animationDuration: 1e3,
        animationDurationUpdate: 300,
        animationEasing: "exponentialOut",
        animationEasingUpdate: "cubicOut",
        animationThreshold: 2e3,
        progressiveThreshold: 3e3,
        progressive: 400,
        hoverLayerThreshold: 3e3,
        useUTC: !1
    }, uv = Ln(), cv = {
        clearColorPalette: function() {
            uv(this).colorIdx = 0, uv(this).colorNameMap = {};
        },
        getColorFromPalette: function(t, e, n) {
            var i = uv(e = e || this), r = i.colorIdx || 0, a = i.colorNameMap = i.colorNameMap || {};
            if (a.hasOwnProperty(t)) return a[t];
            var o = Mn(this.get("color", !0)), s = this.get("colorLayer", !0), l = null != n && s ? Qr(s, n) : o;
            if ((l = l || o) && l.length) {
                var h = l[r];
                return t && (a[t] = h), i.colorIdx = (r + 1) % l.length, h;
            }
        }
    }, dv = {
        cartesian2d: function(t, e, n, i) {
            var r = t.getReferringComponents("xAxis")[0], a = t.getReferringComponents("yAxis")[0];
            e.coordSysDims = [ "x", "y" ], n.set("x", r), n.set("y", a), ta(r) && (i.set("x", r), 
            e.firstCategoryDimIndex = 0), ta(a) && (i.set("y", a), e.firstCategoryDimIndex = 1);
        },
        singleAxis: function(t, e, n, i) {
            var r = t.getReferringComponents("singleAxis")[0];
            e.coordSysDims = [ "single" ], n.set("single", r), ta(r) && (i.set("single", r), 
            e.firstCategoryDimIndex = 0);
        },
        polar: function(t, e, n, i) {
            var r = t.getReferringComponents("polar")[0], a = r.findAxisModel("radiusAxis"), o = r.findAxisModel("angleAxis");
            e.coordSysDims = [ "radius", "angle" ], n.set("radius", a), n.set("angle", o), ta(a) && (i.set("radius", a), 
            e.firstCategoryDimIndex = 0), ta(o) && (i.set("angle", o), e.firstCategoryDimIndex = 1);
        },
        geo: function(t, e) {
            e.coordSysDims = [ "lng", "lat" ];
        },
        parallel: function(t, e, n, i) {
            var r = t.ecModel, a = r.getComponent("parallel", t.get("parallelIndex")), o = e.coordSysDims = a.dimensions.slice();
            f(a.parallelAxisIndex, function(t, a) {
                var s = r.getComponent("parallelAxis", t), l = o[a];
                n.set(l, s), ta(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = a);
            });
        }
    }, fv = "original", pv = "arrayRows", gv = "objectRows", vv = "keyedColumns", mv = "unknown", yv = "typedArray", xv = "column", _v = "row";
    ea.seriesDataToSource = function(t) {
        return new ea({
            data: t,
            sourceFormat: S(t) ? yv : fv,
            fromDataset: !1
        });
    }, Wn(ea);
    var wv = Ln(), bv = "\0_ec_inner", Mv = wr.extend({
        init: function(t, e, n, i) {
            n = n || {}, this.option = null, this._theme = new wr(n), this._optionManager = i;
        },
        setOption: function(t, e) {
            L(!(bv in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), 
            this.resetOption(null);
        },
        resetOption: function(t) {
            var e = !1, n = this._optionManager;
            if (!t || "recreate" === t) {
                var i = n.mountOption("recreate" === t);
                this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : va.call(this, i), 
                e = !0;
            }
            if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                var r = n.getTimelineOption(this);
                r && (this.mergeOption(r), e = !0);
            }
            if (!t || "recreate" === t || "media" === t) {
                var a = n.getMediaOption(this, this._api);
                a.length && f(a, function(t) {
                    this.mergeOption(t, e = !0);
                }, this);
            }
            return e;
        },
        mergeOption: function(t) {
            var e = this.option, n = this._componentsMap, a = [];
            ra(this), f(t, function(t, n) {
                null != t && (sv.hasClass(n) ? n && a.push(n) : e[n] = null == e[n] ? i(t) : r(e[n], t, !0));
            }), sv.topologicalTravel(a, sv.getAllClassMainTypes(), function(i, r) {
                var a = Mn(t[i]), s = Cn(n.get(i), a);
                An(s), f(s, function(t) {
                    var e = t.option;
                    b(e) && (t.keyInfo.mainType = i, t.keyInfo.subType = ya(i, e, t.exist));
                });
                var l = ma(n, r);
                e[i] = [], n.set(i, []), f(s, function(t, r) {
                    var a = t.exist, s = t.option;
                    if (L(b(s) || a, "Empty component definition"), s) {
                        var h = sv.getClass(i, t.keyInfo.subType, !0);
                        if (a && a instanceof h) a.name = t.keyInfo.name, a.mergeOption(s, this), a.optionUpdated(s, !1); else {
                            var u = o({
                                dependentModels: l,
                                componentIndex: r
                            }, t.keyInfo);
                            o(a = new h(s, this, this, u), u), a.init(s, this, this, u), a.optionUpdated(null, !0);
                        }
                    } else a.mergeOption({}, this), a.optionUpdated({}, !1);
                    n.get(i)[r] = a, e[i][r] = a.option;
                }, this), "series" === i && xa(this, n.get("series"));
            }, this), this._seriesIndicesMap = R(this._seriesIndices = this._seriesIndices || []);
        },
        getOption: function() {
            var t = i(this.option);
            return f(t, function(e, n) {
                if (sv.hasClass(n)) {
                    for (var i = (e = Mn(e)).length - 1; i >= 0; i--) kn(e[i]) && e.splice(i, 1);
                    t[n] = e;
                }
            }), delete t[bv], t;
        },
        getTheme: function() {
            return this._theme;
        },
        getComponent: function(t, e) {
            var n = this._componentsMap.get(t);
            return n ? n[e || 0] : void 0;
        },
        queryComponents: function(t) {
            var e = t.mainType;
            if (!e) return [];
            var n = t.index, i = t.id, r = t.name, a = this._componentsMap.get(e);
            if (!a || !a.length) return [];
            var o;
            if (null != n) x(n) || (n = [ n ]), o = v(p(n, function(t) {
                return a[t];
            }), function(t) {
                return !!t;
            }); else if (null != i) {
                var s = x(i);
                o = v(a, function(t) {
                    return s && h(i, t.id) >= 0 || !s && t.id === i;
                });
            } else if (null != r) {
                var l = x(r);
                o = v(a, function(t) {
                    return l && h(r, t.name) >= 0 || !l && t.name === r;
                });
            } else o = a.slice();
            return _a(o, t);
        },
        findComponents: function(t) {
            var e = t.query, n = t.mainType, i = function(t) {
                var e = n + "Index", i = n + "Id", r = n + "Name";
                return !t || null == t[e] && null == t[i] && null == t[r] ? null : {
                    mainType: n,
                    index: t[e],
                    id: t[i],
                    name: t[r]
                };
            }(e);
            return function(e) {
                return t.filter ? v(e, t.filter) : e;
            }(_a(i ? this.queryComponents(i) : this._componentsMap.get(n), t));
        },
        eachComponent: function(t, e, n) {
            var i = this._componentsMap;
            "function" == typeof t ? (n = e, e = t, i.each(function(t, i) {
                f(t, function(t, r) {
                    e.call(n, i, t, r);
                });
            })) : w(t) ? f(i.get(t), e, n) : b(t) && f(this.findComponents(t), e, n);
        },
        getSeriesByName: function(t) {
            return v(this._componentsMap.get("series"), function(e) {
                return e.name === t;
            });
        },
        getSeriesByIndex: function(t) {
            return this._componentsMap.get("series")[t];
        },
        getSeriesByType: function(t) {
            return v(this._componentsMap.get("series"), function(e) {
                return e.subType === t;
            });
        },
        getSeries: function() {
            return this._componentsMap.get("series").slice();
        },
        getSeriesCount: function() {
            return this._componentsMap.get("series").length;
        },
        eachSeries: function(t, e) {
            f(this._seriesIndices, function(n) {
                var i = this._componentsMap.get("series")[n];
                t.call(e, i, n);
            }, this);
        },
        eachRawSeries: function(t, e) {
            f(this._componentsMap.get("series"), t, e);
        },
        eachSeriesByType: function(t, e, n) {
            f(this._seriesIndices, function(i) {
                var r = this._componentsMap.get("series")[i];
                r.subType === t && e.call(n, r, i);
            }, this);
        },
        eachRawSeriesByType: function(t, e, n) {
            return f(this.getSeriesByType(t), e, n);
        },
        isSeriesFiltered: function(t) {
            return null == this._seriesIndicesMap.get(t.componentIndex);
        },
        getCurrentSeriesIndices: function() {
            return (this._seriesIndices || []).slice();
        },
        filterSeries: function(t, e) {
            xa(this, v(this._componentsMap.get("series"), t, e));
        },
        restoreData: function(t) {
            var e = this._componentsMap;
            xa(this, e.get("series"));
            var n = [];
            e.each(function(t, e) {
                n.push(e);
            }), sv.topologicalTravel(n, sv.getAllClassMainTypes(), function(n) {
                f(e.get(n), function(e) {
                    ("series" !== n || !pa(e, t)) && e.restoreData();
                });
            });
        }
    });
    c(Mv, cv);
    var Sv = [ "getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel" ], Iv = {};
    ba.prototype = {
        constructor: ba,
        create: function(t, e) {
            var n = [];
            f(Iv, function(i) {
                var r = i.create(t, e);
                n = n.concat(r || []);
            }), this._coordinateSystems = n;
        },
        update: function(t, e) {
            f(this._coordinateSystems, function(n) {
                n.update && n.update(t, e);
            });
        },
        getCoordinateSystems: function() {
            return this._coordinateSystems.slice();
        }
    }, ba.register = function(t, e) {
        Iv[t] = e;
    }, ba.get = function(t) {
        return Iv[t];
    };
    var Tv = f, Cv = i, Av = p, Dv = r, kv = /^(min|max)?(.+)$/;
    Ma.prototype = {
        constructor: Ma,
        setOption: function(t, e) {
            t && f(Mn(t.series), function(t) {
                t && t.data && S(t.data) && z(t.data);
            }), t = Cv(t, !0);
            var n = this._optionBackup, i = Sa.call(this, t, e, !n);
            this._newBaseOption = i.baseOption, n ? (Aa(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), 
            i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i;
        },
        mountOption: function(t) {
            var e = this._optionBackup;
            return this._timelineOptions = Av(e.timelineOptions, Cv), this._mediaList = Av(e.mediaList, Cv), 
            this._mediaDefault = Cv(e.mediaDefault), this._currentMediaIndices = [], Cv(t ? e.baseOption : this._newBaseOption);
        },
        getTimelineOption: function(t) {
            var e, n = this._timelineOptions;
            if (n.length) {
                var i = t.getComponent("timeline");
                i && (e = Cv(n[i.getCurrentIndex()], !0));
            }
            return e;
        },
        getMediaOption: function() {
            var t = this._api.getWidth(), e = this._api.getHeight(), n = this._mediaList, i = this._mediaDefault, r = [], a = [];
            if (!n.length && !i) return a;
            for (var o = 0, s = n.length; s > o; o++) Ia(n[o].query, t, e) && r.push(o);
            return !r.length && i && (r = [ -1 ]), r.length && !Ca(r, this._currentMediaIndices) && (a = Av(r, function(t) {
                return Cv(-1 === t ? i.option : n[t].option);
            })), this._currentMediaIndices = r, a;
        }
    };
    var Pv = f, Lv = b, Ov = [ "areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine" ], zv = function(t, e) {
        Pv(Ba(t.series), function(t) {
            Lv(t) && za(t);
        });
        var n = [ "xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar" ];
        e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Pv(n, function(e) {
            Pv(Ba(t[e]), function(t) {
                t && (La(t, "axisLabel"), La(t.axisPointer, "label"));
            });
        }), Pv(Ba(t.parallel), function(t) {
            var e = t && t.parallelAxisDefault;
            La(e, "axisLabel"), La(e && e.axisPointer, "label");
        }), Pv(Ba(t.calendar), function(t) {
            ka(t, "itemStyle"), La(t, "dayLabel"), La(t, "monthLabel"), La(t, "yearLabel");
        }), Pv(Ba(t.radar), function(t) {
            La(t, "name");
        }), Pv(Ba(t.geo), function(t) {
            Lv(t) && (Oa(t), Pv(Ba(t.regions), function(t) {
                Oa(t);
            }));
        }), Pv(Ba(t.timeline), function(t) {
            Oa(t), ka(t, "label"), ka(t, "itemStyle"), ka(t, "controlStyle", !0);
            var e = t.data;
            x(e) && f(e, function(t) {
                b(t) && (ka(t, "label"), ka(t, "itemStyle"));
            });
        }), Pv(Ba(t.toolbox), function(t) {
            ka(t, "iconStyle"), Pv(t.feature, function(t) {
                ka(t, "iconStyle");
            });
        }), La(Ea(t.axisPointer), "label"), La(Ea(t.tooltip).axisPointer, "label");
    }, Bv = [ [ "x", "left" ], [ "y", "top" ], [ "x2", "right" ], [ "y2", "bottom" ] ], Ev = [ "grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline" ], Rv = function(t, e) {
        zv(t, e), t.series = Mn(t.series), f(t.series, function(t) {
            if (b(t)) {
                var e = t.type;
                if (("pie" === e || "gauge" === e) && null != t.clockWise && (t.clockwise = t.clockWise), 
                "gauge" === e) {
                    var n = Ra(t, "pointer.color");
                    null != n && Na(t, "itemStyle.normal.color", n);
                }
                Fa(t);
            }
        }), t.dataRange && (t.visualMap = t.dataRange), f(Ev, function(e) {
            var n = t[e];
            n && (x(n) || (n = [ n ]), f(n, function(t) {
                Fa(t);
            }));
        });
    }, Nv = Wa.prototype;
    Nv.pure = !1, Nv.persistent = !0, Nv.getSource = function() {
        return this._source;
    };
    var Fv = {
        arrayRows_column: {
            pure: !0,
            count: function() {
                return Math.max(0, this._data.length - this._source.startIndex);
            },
            getItem: function(t) {
                return this._data[t + this._source.startIndex];
            },
            appendData: Za
        },
        arrayRows_row: {
            pure: !0,
            count: function() {
                var t = this._data[0];
                return t ? Math.max(0, t.length - this._source.startIndex) : 0;
            },
            getItem: function(t) {
                t += this._source.startIndex;
                for (var e = [], n = this._data, i = 0; i < n.length; i++) {
                    var r = n[i];
                    e.push(r ? r[t] : null);
                }
                return e;
            },
            appendData: function() {
                throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
            }
        },
        objectRows: {
            pure: !0,
            count: Ha,
            getItem: Ga,
            appendData: Za
        },
        keyedColumns: {
            pure: !0,
            count: function() {
                var t = this._source.dimensionsDefine[0].name, e = this._data[t];
                return e ? e.length : 0;
            },
            getItem: function(t) {
                for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
                    var r = this._data[n[i].name];
                    e.push(r ? r[t] : null);
                }
                return e;
            },
            appendData: function(t) {
                var e = this._data;
                f(t, function(t, n) {
                    for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r]);
                });
            }
        },
        original: {
            count: Ha,
            getItem: Ga,
            appendData: Za
        },
        typedArray: {
            persistent: !1,
            pure: !0,
            count: function() {
                return this._data ? this._data.length / this._dimSize : 0;
            },
            getItem: function(t, e) {
                t -= this._offset, e = e || [];
                for (var n = this._dimSize * t, i = 0; i < this._dimSize; i++) e[i] = this._data[n + i];
                return e;
            },
            appendData: function(t) {
                this._data = t;
            },
            clean: function() {
                this._offset += this.count(), this._data = null;
            }
        }
    }, Vv = {
        arrayRows: Xa,
        objectRows: function(t, e, n, i) {
            return null != n ? t[i] : t;
        },
        keyedColumns: Xa,
        original: function(t, e, n) {
            var i = In(t);
            return null != n && i instanceof Array ? i[n] : i;
        },
        typedArray: Xa
    }, Wv = {
        arrayRows: Ya,
        objectRows: function(t, e) {
            return qa(t[e], this._dimensionInfos[e]);
        },
        keyedColumns: Ya,
        original: function(t, e, n, i) {
            var r = t && (null == t.value ? t : t.value);
            return !this._rawData.pure && Tn(t) && (this.hasItemOption = !0), qa(r instanceof Array ? r[i] : r, this._dimensionInfos[e]);
        },
        typedArray: function(t, e, n, i) {
            return t[i];
        }
    }, Hv = /\{@(.+?)\}/g, Gv = {
        getDataParams: function(t, e) {
            var n = this.getData(e), i = this.getRawValue(t, e), r = n.getRawIndex(t), a = n.getName(t), o = n.getRawDataItem(t), s = n.getItemVisual(t, "color"), l = this.ecModel.getComponent("tooltip"), h = Rn(l && l.get("renderMode")), u = this.mainType, c = "series" === u;
            return {
                componentType: u,
                componentSubType: this.subType,
                componentIndex: this.componentIndex,
                seriesType: c ? this.subType : null,
                seriesIndex: this.seriesIndex,
                seriesId: c ? this.id : null,
                seriesName: c ? this.name : null,
                name: a,
                dataIndex: r,
                data: o,
                dataType: e,
                value: i,
                color: s,
                marker: Gr({
                    color: s,
                    renderMode: h
                }),
                $vars: [ "seriesName", "name", "value" ]
            };
        },
        getFormattedLabel: function(t, e, n, i, r) {
            e = e || "normal";
            var a = this.getData(n), o = a.getItemModel(t), s = this.getDataParams(t, n);
            null != i && s.value instanceof Array && (s.value = s.value[i]);
            var l = o.get("normal" === e ? [ r || "label", "formatter" ] : [ e, r || "label", "formatter" ]);
            return "function" == typeof l ? (s.status = e, l(s)) : "string" == typeof l ? Hr(l, s).replace(Hv, function(e, n) {
                var i = n.length;
                return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), 
                ja(a, t, n);
            }) : void 0;
        },
        getRawValue: function(t, e) {
            return ja(this.getData(e), t);
        },
        formatTooltip: function() {}
    }, Zv = Ka.prototype;
    Zv.perform = function(t) {
        function e(t) {
            return !(t >= 1) && (t = 1), t;
        }
        var n = this._upstream, i = t && t.skip;
        if (this._dirty && n) {
            var r = this.context;
            r.data = r.outputData = n.context.outputData;
        }
        this.__pipeline && (this.__pipeline.currentTask = this);
        var a;
        this._plan && !i && (a = this._plan(this.context));
        var o = e(this._modBy), s = this._modDataCount || 0, l = e(t && t.modBy), h = t && t.modDataCount || 0;
        (o !== l || s !== h) && (a = "reset");
        var u;
        (this._dirty || "reset" === a) && (this._dirty = !1, u = Ja(this, i)), this._modBy = l, 
        this._modDataCount = h;
        var c = t && t.step;
        if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, 
        this._progress) {
            var d = this._dueIndex, f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
            if (!i && (u || f > d)) {
                var p = this._progress;
                if (x(p)) for (var g = 0; g < p.length; g++) Qa(this, p[g], d, f, l, h); else Qa(this, p, d, f, l, h);
            }
            this._dueIndex = f;
            var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;
            this._outputDueEnd = v;
        } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
        return this.unfinished();
    };
    var Xv = function() {
        function t() {
            return n > i ? i++ : null;
        }
        function e() {
            var t = i % o * r + Math.ceil(i / o), e = i >= n ? null : a > t ? t : i;
            return i++, e;
        }
        var n, i, r, a, o, s = {
            reset: function(l, h, u, c) {
                i = l, n = h, r = u, a = c, o = Math.ceil(a / r), s.next = r > 1 && a > 0 ? e : t;
            }
        };
        return s;
    }();
    Zv.dirty = function() {
        this._dirty = !0, this._onDirty && this._onDirty(this.context);
    }, Zv.unfinished = function() {
        return this._progress && this._dueIndex < this._dueEnd;
    }, Zv.pipe = function(t) {
        (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, 
        t.dirty());
    }, Zv.dispose = function() {
        this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), 
        this._dirty = !1, this._disposed = !0);
    }, Zv.getUpstream = function() {
        return this._upstream;
    }, Zv.getDownstream = function() {
        return this._downstream;
    }, Zv.setOutputEnd = function(t) {
        this._outputDueEnd = this._settedOutputEnd = t;
    };
    var Yv = Ln(), qv = sv.extend({
        type: "series.__base__",
        seriesIndex: 0,
        coordinateSystem: null,
        defaultOption: null,
        legendDataProvider: null,
        visualColorAccessPath: "itemStyle.color",
        layoutMode: null,
        init: function(t, e, n) {
            this.seriesIndex = this.componentIndex, this.dataTask = $a({
                count: no,
                reset: io
            }), this.dataTask.context = {
                model: this
            }, this.mergeDefaultAndTheme(t, n), aa(this);
            var i = this.getInitialData(t, n);
            ao(i, this), this.dataTask.context.data = i, Yv(this).dataBeforeProcessed = i, to(this);
        },
        mergeDefaultAndTheme: function(t, e) {
            var n = this.layoutMode, i = n ? $r(t) : {}, a = this.subType;
            sv.hasClass(a) && (a += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this.getDefaultOption()), 
            Sn(t, "label", [ "show" ]), this.fillDataTextStyle(t.data), n && Ur(t, i, n);
        },
        mergeOption: function(t, e) {
            t = r(this.option, t, !0), this.fillDataTextStyle(t.data);
            var n = this.layoutMode;
            n && Ur(this.option, t, n), aa(this);
            var i = this.getInitialData(t, e);
            ao(i, this), this.dataTask.dirty(), this.dataTask.context.data = i, Yv(this).dataBeforeProcessed = i, 
            to(this);
        },
        fillDataTextStyle: function(t) {
            if (t && !S(t)) for (var e = [ "show" ], n = 0; n < t.length; n++) t[n] && t[n].label && Sn(t[n], "label", e);
        },
        getInitialData: function() {},
        appendData: function(t) {
            this.getRawData().appendData(t.data);
        },
        getData: function(t) {
            var e = so(this);
            if (e) {
                var n = e.context.data;
                return null == t ? n : n.getLinkedData(t);
            }
            return Yv(this).data;
        },
        setData: function(t) {
            var e = so(this);
            if (e) {
                var n = e.context;
                n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), n.outputData = t, 
                e !== this.dataTask && (n.data = t);
            }
            Yv(this).data = t;
        },
        getSource: function() {
            return ia(this);
        },
        getRawData: function() {
            return Yv(this).dataBeforeProcessed;
        },
        getBaseAxis: function() {
            var t = this.coordinateSystem;
            return t && t.getBaseAxis && t.getBaseAxis();
        },
        formatTooltip: function(t, e, n, i) {
            var r = this, a = "html" === (i = i || "html") ? "<br/>" : "\n", o = "richText" === i, s = {}, l = 0, h = this.getData(), u = h.mapDimension("defaultedTooltip", !0), c = u.length, d = this.getRawValue(t), p = x(d), v = h.getItemVisual(t, "color");
            b(v) && v.colorStops && (v = (v.colorStops[0] || {}).color), v = v || "transparent";
            var m = (c > 1 || p && !c ? function(n) {
                function a(t, n) {
                    var a = h.getDimensionInfo(n);
                    if (a && !1 !== a.otherDims.tooltip) {
                        var u = a.type, f = "sub" + r.seriesIndex + "at" + l, p = Gr({
                            color: v,
                            type: "subItem",
                            renderMode: i,
                            markerId: f
                        }), g = "string" == typeof p ? p : p.content, m = (c ? g + Wr(a.displayName || "-") + ": " : "") + Wr("ordinal" === u ? t + "" : "time" === u ? e ? "" : Xr("yyyy/MM/dd hh:mm:ss", t) : Fr(t));
                        m && d.push(m), o && (s[f] = v, ++l);
                    }
                }
                var c = g(n, function(t, e, n) {
                    var i = h.getDimensionInfo(n);
                    return t |= i && !1 !== i.tooltip && null != i.displayName;
                }, 0), d = [];
                u.length ? f(u, function(e) {
                    a(ja(h, t, e), e);
                }) : f(n, a);
                var p = c ? o ? "\n" : "<br/>" : "", m = p + d.join(p || ", ");
                return {
                    renderMode: i,
                    content: m,
                    style: s
                };
            }(d) : function(t) {
                return {
                    renderMode: i,
                    content: Wr(Fr(t)),
                    style: s
                };
            }(c ? ja(h, t, u[0]) : p ? d[0] : d)).content, y = r.seriesIndex + "at" + l, _ = Gr({
                color: v,
                type: "item",
                renderMode: i,
                markerId: y
            });
            s[y] = v, ++l;
            var w = h.getName(t), M = this.name;
            Dn(this) || (M = ""), M = M ? Wr(M) + (e ? ": " : a) : "";
            var S = "string" == typeof _ ? _ : _.content;
            return {
                html: e ? S + M + m : M + S + (w ? Wr(w) + ": " + m : m),
                markers: s
            };
        },
        isAnimationEnabled: function() {
            if ($c.node) return !1;
            var t = this.getShallow("animation");
            return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), 
            t;
        },
        restoreData: function() {
            this.dataTask.dirty();
        },
        getColorFromPalette: function(t, e, n) {
            var i = this.ecModel, r = cv.getColorFromPalette.call(this, t, e, n);
            return r || (r = i.getColorFromPalette(t, e, n)), r;
        },
        coordDimToDataDim: function(t) {
            return this.getRawData().mapDimension(t, !0);
        },
        getProgressive: function() {
            return this.get("progressive");
        },
        getProgressiveThreshold: function() {
            return this.get("progressiveThreshold");
        },
        getAxisTooltipData: null,
        getTooltipPosition: null,
        pipeTask: null,
        preventIncremental: null,
        pipelineContext: null
    });
    c(qv, Gv), c(qv, cv);
    var jv = function() {
        this.group = new rf(), this.uid = Sr("viewComponent");
    };
    jv.prototype = {
        constructor: jv,
        init: function() {},
        render: function() {},
        dispose: function() {},
        filterForExposedEvent: null
    };
    var Uv = jv.prototype;
    Uv.updateView = Uv.updateLayout = Uv.updateVisual = function() {}, Vn(jv), Zn(jv, {
        registerWhenExtend: !0
    });
    var $v = function() {
        var t = Ln();
        return function(e) {
            var n = t(e), i = e.pipelineContext, r = n.large, a = n.progressiveRender, o = n.large = i.large, s = n.progressiveRender = i.progressiveRender;
            return !!(r ^ o || a ^ s) && "reset";
        };
    }, Kv = Ln(), Qv = $v();
    lo.prototype = {
        type: "chart",
        init: function() {},
        render: function() {},
        highlight: function(t, e, n, i) {
            uo(t.getData(), i, "emphasis");
        },
        downplay: function(t, e, n, i) {
            uo(t.getData(), i, "normal");
        },
        remove: function() {
            this.group.removeAll();
        },
        dispose: function() {},
        incrementalPrepareRender: null,
        incrementalRender: null,
        updateTransform: null,
        filterForExposedEvent: null
    };
    var Jv = lo.prototype;
    Jv.updateView = Jv.updateLayout = Jv.updateVisual = function(t, e, n, i) {
        this.render(t, e, n, i);
    }, Vn(lo), Zn(lo, {
        registerWhenExtend: !0
    }), lo.markUpdateMethod = function(t, e) {
        Kv(t).updateMethod = e;
    };
    var tm = {
        incrementalPrepareRender: {
            progress: function(t, e) {
                e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
            }
        },
        render: {
            forceFirstProgress: !0,
            progress: function(t, e) {
                e.view.render(e.model, e.ecModel, e.api, e.payload);
            }
        }
    }, em = "\0__throttleOriginMethod", nm = "\0__throttleRate", im = "\0__throttleType", rm = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function(t, e) {
            var n = t.getData(), i = (t.visualColorAccessPath || "itemStyle.color").split("."), r = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());
            if (n.setVisual("color", r), !e.isSeriesFiltered(t)) {
                "function" != typeof r || r instanceof Tg || n.each(function(e) {
                    n.setItemVisual(e, "color", r(t.getDataParams(e)));
                });
                return {
                    dataEach: n.hasItemOption ? function(t, e) {
                        var n = t.getItemModel(e).get(i, !0);
                        null != n && t.setItemVisual(e, "color", n);
                    } : null
                };
            }
        }
    }, am = {
        toolbox: {
            brush: {
                title: {
                    rect: "矩形选择",
                    polygon: "圈选",
                    lineX: "横向选择",
                    lineY: "纵向选择",
                    keep: "保持选择",
                    clear: "清除选择"
                }
            },
            dataView: {
                title: "数据视图",
                lang: [ "数据视图", "关闭", "刷新" ]
            },
            dataZoom: {
                title: {
                    zoom: "区域缩放",
                    back: "区域缩放还原"
                }
            },
            magicType: {
                title: {
                    line: "切换为折线图",
                    bar: "切换为柱状图",
                    stack: "切换为堆叠",
                    tiled: "切换为平铺"
                }
            },
            restore: {
                title: "还原"
            },
            saveAsImage: {
                title: "保存为图片",
                lang: [ "右键另存为图片" ]
            }
        },
        series: {
            typeNames: {
                pie: "饼图",
                bar: "柱状图",
                line: "折线图",
                scatter: "散点图",
                effectScatter: "涟漪散点图",
                radar: "雷达图",
                tree: "树图",
                treemap: "矩形树图",
                boxplot: "箱型图",
                candlestick: "K线图",
                k: "K线图",
                heatmap: "热力图",
                map: "地图",
                parallel: "平行坐标图",
                lines: "线图",
                graph: "关系图",
                sankey: "桑基图",
                funnel: "漏斗图",
                gauge: "仪表盘图",
                pictorialBar: "象形柱图",
                themeRiver: "主题河流图",
                sunburst: "旭日图"
            }
        },
        aria: {
            general: {
                withTitle: "这是一个关于“{title}”的图表。",
                withoutTitle: "这是一个图表，"
            },
            series: {
                single: {
                    prefix: "",
                    withName: "图表类型是{seriesType}，表示{seriesName}。",
                    withoutName: "图表类型是{seriesType}。"
                },
                multiple: {
                    prefix: "它由{seriesCount}个图表系列组成。",
                    withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
                    withoutName: "第{seriesId}个系列是一个{seriesType}，",
                    separator: {
                        middle: "；",
                        end: "。"
                    }
                }
            },
            data: {
                allData: "其数据是——",
                partialData: "其中，前{displayCnt}项是——",
                withName: "{name}的数据是{value}",
                withoutName: "{value}",
                separator: {
                    middle: "，",
                    end: ""
                }
            }
        }
    }, om = function(t, e) {
        function n(t, e) {
            if ("string" != typeof t) return t;
            var n = t;
            return f(e, function(t, e) {
                n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t);
            }), n;
        }
        function i(t) {
            var e = a.get(t);
            if (null == e) {
                for (var n = t.split("."), i = am.aria, r = 0; r < n.length; ++r) i = i[n[r]];
                return i;
            }
            return e;
        }
        function r(t) {
            return am.series.typeNames[t] || "自定义图";
        }
        var a = e.getModel("aria");
        if (a.get("show")) {
            if (a.get("description")) return void t.setAttribute("aria-label", a.get("description"));
            var o = 0;
            e.eachSeries(function() {
                ++o;
            }, this);
            var s, l = a.get("data.maxCount") || 10, h = a.get("series.maxCount") || 10, u = Math.min(o, h);
            if (!(1 > o)) {
                var c = function() {
                    var t = e.getModel("title").option;
                    return t && t.length && (t = t[0]), t && t.text;
                }();
                s = c ? n(i("general.withTitle"), {
                    title: c
                }) : i("general.withoutTitle");
                var d = [];
                s += n(i(o > 1 ? "series.multiple.prefix" : "series.single.prefix"), {
                    seriesCount: o
                }), e.eachSeries(function(t, e) {
                    if (u > e) {
                        var a, s = t.get("name"), h = "series." + (o > 1 ? "multiple" : "single") + ".";
                        a = n(a = i(s ? h + "withName" : h + "withoutName"), {
                            seriesId: t.seriesIndex,
                            seriesName: t.get("name"),
                            seriesType: r(t.subType)
                        });
                        var c = t.getData();
                        window.data = c, a += c.count() > l ? n(i("data.partialData"), {
                            displayCnt: l
                        }) : i("data.allData");
                        for (var f = [], p = 0; p < c.count(); p++) if (l > p) {
                            var g = c.getName(p), v = ja(c, p);
                            f.push(n(i(g ? "data.withName" : "data.withoutName"), {
                                name: g,
                                value: v
                            }));
                        }
                        a += f.join(i("data.separator.middle")) + i("data.separator.end"), d.push(a);
                    }
                }), s += d.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"), 
                t.setAttribute("aria-label", s);
            }
        }
    }, sm = Math.PI, lm = mo.prototype;
    lm.restoreData = function(t, e) {
        t.restoreData(e), this._stageTaskMap.each(function(t) {
            var e = t.overallTask;
            e && e.dirty();
        });
    }, lm.getPerformArgs = function(t, e) {
        if (t.__pipeline) {
            var n = this._pipelineMap.get(t.__pipeline.id), i = n.context, r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex ? n.step : null, a = i && i.modDataCount;
            return {
                step: r,
                modBy: null != a ? Math.ceil(a / r) : null,
                modDataCount: a
            };
        }
    }, lm.getPipeline = function(t) {
        return this._pipelineMap.get(t);
    }, lm.updateStreamModes = function(t, e) {
        var n = this._pipelineMap.get(t.uid), i = t.getData().count(), r = n.progressiveEnabled && e.incrementalPrepareRender && i >= n.threshold, a = t.get("large") && i >= t.get("largeThreshold"), o = "mod" === t.get("progressiveChunkMode") ? i : null;
        t.pipelineContext = n.context = {
            progressiveRender: r,
            modDataCount: o,
            large: a
        };
    }, lm.restorePipelines = function(t) {
        var e = this, n = e._pipelineMap = R();
        t.eachSeries(function(t) {
            var i = t.getProgressive(), r = t.uid;
            n.set(r, {
                id: r,
                head: null,
                tail: null,
                threshold: t.getProgressiveThreshold(),
                progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
                blockIndex: -1,
                step: Math.round(i || 700),
                count: 0
            }), Do(e, t, t.dataTask);
        });
    }, lm.prepareStageTasks = function() {
        var t = this._stageTaskMap, e = this.ecInstance.getModel(), n = this.api;
        f(this._allHandlers, function(i) {
            var r = t.get(i.uid) || t.set(i.uid, []);
            i.reset && xo(this, i, r, e, n), i.overallReset && _o(this, i, r, e, n);
        }, this);
    }, lm.prepareView = function(t, e, n, i) {
        var r = t.renderTask, a = r.context;
        a.model = e, a.ecModel = n, a.api = i, r.__block = !t.incrementalPrepareRender, 
        Do(this, e, r);
    }, lm.performDataProcessorTasks = function(t, e) {
        yo(this, this._dataProcessorHandlers, t, e, {
            block: !0
        });
    }, lm.performVisualTasks = function(t, e, n) {
        yo(this, this._visualHandlers, t, e, n);
    }, lm.performSeriesTasks = function(t) {
        var e;
        t.eachSeries(function(t) {
            e |= t.dataTask.perform();
        }), this.unfinished |= e;
    }, lm.plan = function() {
        this._pipelineMap.each(function(t) {
            var e = t.tail;
            do {
                if (e.__block) {
                    t.blockIndex = e.__idxInPipeline;
                    break;
                }
                e = e.getUpstream();
            } while (e);
        });
    };
    var hm = lm.updatePayload = function(t, e) {
        "remain" !== e && (t.context.payload = e);
    }, um = Co(0);
    mo.wrapStageHandler = function(t, e) {
        return _(t) && (t = {
            overallReset: t,
            seriesType: ko(t)
        }), t.uid = Sr("stageHandler"), e && (t.visualType = e), t;
    };
    var cm, dm = {}, fm = {};
    Po(dm, Mv), Po(fm, wa), dm.eachSeriesByType = dm.eachRawSeriesByType = function(t) {
        cm = t;
    }, dm.eachComponent = function(t) {
        "series" === t.mainType && t.subType && (cm = t.subType);
    };
    var pm = [ "#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF" ], gm = {
        color: pm,
        colorLayer: [ [ "#37A2DA", "#ffd85c", "#fd7b5f" ], [ "#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5" ], [ "#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF" ], pm ]
    }, vm = "#eee", mm = function() {
        return {
            axisLine: {
                lineStyle: {
                    color: vm
                }
            },
            axisTick: {
                lineStyle: {
                    color: vm
                }
            },
            axisLabel: {
                textStyle: {
                    color: vm
                }
            },
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#aaa"
                }
            },
            splitArea: {
                areaStyle: {
                    color: vm
                }
            }
        };
    }, ym = [ "#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42" ], xm = {
        color: ym,
        backgroundColor: "#333",
        tooltip: {
            axisPointer: {
                lineStyle: {
                    color: vm
                },
                crossStyle: {
                    color: vm
                }
            }
        },
        legend: {
            textStyle: {
                color: vm
            }
        },
        textStyle: {
            color: vm
        },
        title: {
            textStyle: {
                color: vm
            }
        },
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: vm
                }
            }
        },
        dataZoom: {
            textStyle: {
                color: vm
            }
        },
        visualMap: {
            textStyle: {
                color: vm
            }
        },
        timeline: {
            lineStyle: {
                color: vm
            },
            itemStyle: {
                normal: {
                    color: ym[1]
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: vm
                    }
                }
            },
            controlStyle: {
                normal: {
                    color: vm,
                    borderColor: vm
                }
            }
        },
        timeAxis: mm(),
        logAxis: mm(),
        valueAxis: mm(),
        categoryAxis: mm(),
        line: {
            symbol: "circle"
        },
        graph: {
            color: ym
        },
        gauge: {
            title: {
                textStyle: {
                    color: vm
                }
            }
        },
        candlestick: {
            itemStyle: {
                normal: {
                    color: "#FD1050",
                    color0: "#0CF49B",
                    borderColor: "#FD1050",
                    borderColor0: "#0CF49B"
                }
            }
        }
    };
    xm.categoryAxis.splitLine.show = !1, sv.extend({
        type: "dataset",
        defaultOption: {
            seriesLayoutBy: xv,
            sourceHeader: null,
            dimensions: null,
            source: null
        },
        optionUpdated: function() {
            na(this);
        }
    }), jv.extend({
        type: "dataset"
    });
    var _m = Si.extend({
        type: "ellipse",
        shape: {
            cx: 0,
            cy: 0,
            rx: 0,
            ry: 0
        },
        buildPath: function(t, e) {
            var n = .5522848, i = e.cx, r = e.cy, a = e.rx, o = e.ry, s = a * n, l = o * n;
            t.moveTo(i - a, r), t.bezierCurveTo(i - a, r - l, i - s, r - o, i, r - o), t.bezierCurveTo(i + s, r - o, i + a, r - l, i + a, r), 
            t.bezierCurveTo(i + a, r + l, i + s, r + o, i, r + o), t.bezierCurveTo(i - s, r + o, i - a, r + l, i - a, r), 
            t.closePath();
        }
    }), wm = /[\s,]+/;
    Oo.prototype.parse = function(t, e) {
        e = e || {};
        var n = Lo(t);
        if (!n) throw new Error("Illegal svg");
        var i = new rf();
        this._root = i;
        var r = n.getAttribute("viewBox") || "", a = parseFloat(n.getAttribute("width") || e.width), o = parseFloat(n.getAttribute("height") || e.height);
        isNaN(a) && (a = null), isNaN(o) && (o = null), Ro(n, i, null, !0);
        for (var s = n.firstChild; s; ) this._parseNode(s, i), s = s.nextSibling;
        var l, h;
        if (r) {
            var u = O(r).split(wm);
            u.length >= 4 && (l = {
                x: parseFloat(u[0] || 0),
                y: parseFloat(u[1] || 0),
                width: parseFloat(u[2]),
                height: parseFloat(u[3])
            });
        }
        if (l && null != a && null != o && (h = Wo(l, a, o), !e.ignoreViewBox)) {
            var c = i;
            (i = new rf()).add(c), c.scale = h.scale.slice(), c.position = h.position.slice();
        }
        return e.ignoreRootClip || null == a || null == o || i.setClipPath(new _g({
            shape: {
                x: 0,
                y: 0,
                width: a,
                height: o
            }
        })), {
            root: i,
            width: a,
            height: o,
            viewBoxRect: l,
            viewBoxTransform: h
        };
    }, Oo.prototype._parseNode = function(t, e) {
        var n = t.nodeName.toLowerCase();
        "defs" === n ? this._isDefine = !0 : "text" === n && (this._isText = !0);
        var i;
        if (this._isDefine) {
            if (o = Mm[n]) {
                var r = o.call(this, t), a = t.getAttribute("id");
                a && (this._defs[a] = r);
            }
        } else {
            var o = bm[n];
            o && (i = o.call(this, t, e), e.add(i));
        }
        for (var s = t.firstChild; s; ) 1 === s.nodeType && this._parseNode(s, i), 3 === s.nodeType && this._isText && this._parseText(s, i), 
        s = s.nextSibling;
        "defs" === n ? this._isDefine = !1 : "text" === n && (this._isText = !1);
    }, Oo.prototype._parseText = function(t, e) {
        if (1 === t.nodeType) {
            var n = t.getAttribute("dx") || 0, i = t.getAttribute("dy") || 0;
            this._textX += parseFloat(n), this._textY += parseFloat(i);
        }
        var r = new ug({
            style: {
                text: t.textContent,
                transformText: !0
            },
            position: [ this._textX || 0, this._textY || 0 ]
        });
        Bo(e, r), Ro(t, r, this._defs);
        var a = r.style.fontSize;
        a && 9 > a && (r.style.fontSize = 9, r.scale = r.scale || [ 1, 1 ], r.scale[0] *= a / 9, 
        r.scale[1] *= a / 9);
        var o = r.getBoundingRect();
        return this._textX += o.width, e.add(r), r;
    };
    var bm = {
        g: function(t, e) {
            var n = new rf();
            return Bo(e, n), Ro(t, n, this._defs), n;
        },
        rect: function(t, e) {
            var n = new _g();
            return Bo(e, n), Ro(t, n, this._defs), n.setShape({
                x: parseFloat(t.getAttribute("x") || 0),
                y: parseFloat(t.getAttribute("y") || 0),
                width: parseFloat(t.getAttribute("width") || 0),
                height: parseFloat(t.getAttribute("height") || 0)
            }), n;
        },
        circle: function(t, e) {
            var n = new cg();
            return Bo(e, n), Ro(t, n, this._defs), n.setShape({
                cx: parseFloat(t.getAttribute("cx") || 0),
                cy: parseFloat(t.getAttribute("cy") || 0),
                r: parseFloat(t.getAttribute("r") || 0)
            }), n;
        },
        line: function(t, e) {
            var n = new wg();
            return Bo(e, n), Ro(t, n, this._defs), n.setShape({
                x1: parseFloat(t.getAttribute("x1") || 0),
                y1: parseFloat(t.getAttribute("y1") || 0),
                x2: parseFloat(t.getAttribute("x2") || 0),
                y2: parseFloat(t.getAttribute("y2") || 0)
            }), n;
        },
        ellipse: function(t, e) {
            var n = new _m();
            return Bo(e, n), Ro(t, n, this._defs), n.setShape({
                cx: parseFloat(t.getAttribute("cx") || 0),
                cy: parseFloat(t.getAttribute("cy") || 0),
                rx: parseFloat(t.getAttribute("rx") || 0),
                ry: parseFloat(t.getAttribute("ry") || 0)
            }), n;
        },
        polygon: function(t, e) {
            var n = t.getAttribute("points");
            n && (n = Eo(n));
            var i = new yg({
                shape: {
                    points: n || []
                }
            });
            return Bo(e, i), Ro(t, i, this._defs), i;
        },
        polyline: function(t, e) {
            var n = new Si();
            Bo(e, n), Ro(t, n, this._defs);
            var i = t.getAttribute("points");
            return i && (i = Eo(i)), new xg({
                shape: {
                    points: i || []
                }
            });
        },
        image: function(t, e) {
            var n = new on();
            return Bo(e, n), Ro(t, n, this._defs), n.setStyle({
                image: t.getAttribute("xlink:href"),
                x: t.getAttribute("x"),
                y: t.getAttribute("y"),
                width: t.getAttribute("width"),
                height: t.getAttribute("height")
            }), n;
        },
        text: function(t, e) {
            var n = t.getAttribute("x") || 0, i = t.getAttribute("y") || 0, r = t.getAttribute("dx") || 0, a = t.getAttribute("dy") || 0;
            this._textX = parseFloat(n) + parseFloat(r), this._textY = parseFloat(i) + parseFloat(a);
            var o = new rf();
            return Bo(e, o), Ro(t, o, this._defs), o;
        },
        tspan: function(t, e) {
            var n = t.getAttribute("x"), i = t.getAttribute("y");
            null != n && (this._textX = parseFloat(n)), null != i && (this._textY = parseFloat(i));
            var r = t.getAttribute("dx") || 0, a = t.getAttribute("dy") || 0, o = new rf();
            return Bo(e, o), Ro(t, o, this._defs), this._textX += r, this._textY += a, o;
        },
        path: function(t, e) {
            var n = Ai(t.getAttribute("d") || "");
            return Bo(e, n), Ro(t, n, this._defs), n;
        }
    }, Mm = {
        lineargradient: function(t) {
            var e = parseInt(t.getAttribute("x1") || 0, 10), n = parseInt(t.getAttribute("y1") || 0, 10), i = parseInt(t.getAttribute("x2") || 10, 10), r = parseInt(t.getAttribute("y2") || 0, 10), a = new Cg(e, n, i, r);
            return zo(t, a), a;
        },
        radialgradient: function() {}
    }, Sm = {
        fill: "fill",
        stroke: "stroke",
        "stroke-width": "lineWidth",
        opacity: "opacity",
        "fill-opacity": "fillOpacity",
        "stroke-opacity": "strokeOpacity",
        "stroke-dasharray": "lineDash",
        "stroke-dashoffset": "lineDashOffset",
        "stroke-linecap": "lineCap",
        "stroke-linejoin": "lineJoin",
        "stroke-miterlimit": "miterLimit",
        "font-family": "fontFamily",
        "font-size": "fontSize",
        "font-style": "fontStyle",
        "font-weight": "fontWeight",
        "text-align": "textAlign",
        "alignment-baseline": "textBaseline"
    }, Im = /url\(\s*#(.*?)\)/, Tm = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g, Cm = /([^\s:;]+)\s*:\s*([^:;]+)/g, Am = R(), Dm = {
        registerMap: function(t, e, n) {
            var i;
            return x(e) ? i = e : e.svg ? i = [ {
                type: "svg",
                source: e.svg,
                specialAreas: e.specialAreas
            } ] : (e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), i = [ {
                type: "geoJSON",
                source: e,
                specialAreas: n
            } ]), f(i, function(t) {
                var e = t.type;
                "geoJson" === e && (e = t.type = "geoJSON"), (0, km[e])(t);
            }), Am.set(t, i);
        },
        retrieveMap: function(t) {
            return Am.get(t);
        }
    }, km = {
        geoJSON: function(t) {
            var e = t.source;
            t.geoJSON = w(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e;
        },
        svg: function(t) {
            t.svgXML = Lo(t.source);
        }
    }, Pm = L, Lm = f, Om = _, zm = b, Bm = sv.parseClassType, Em = {
        zrender: "4.0.5"
    }, Rm = 1e3, Nm = 1e3, Fm = 3e3, Vm = {
        PROCESSOR: {
            FILTER: Rm,
            STATISTIC: 5e3
        },
        VISUAL: {
            LAYOUT: Nm,
            GLOBAL: 2e3,
            CHART: Fm,
            COMPONENT: 4e3,
            BRUSH: 5e3
        }
    }, Wm = "__flagInMainProcess", Hm = "__optionUpdated", Gm = /^[a-zA-Z0-9_]+$/;
    Go.prototype.on = Ho("on"), Go.prototype.off = Ho("off"), Go.prototype.one = Ho("one"), 
    c(Go, yd);
    var Zm = Zo.prototype;
    Zm._onframe = function() {
        if (!this._disposed) {
            var t = this._scheduler;
            if (this[Hm]) {
                var e = this[Hm].silent;
                this[Wm] = !0, Yo(this), Xm.update.call(this), this[Wm] = !1, this[Hm] = !1, $o.call(this, e), 
                Ko.call(this, e);
            } else if (t.unfinished) {
                var n = 1, i = this._model;
                this._api;
                t.unfinished = !1;
                do {
                    var r = +new Date();
                    t.performSeriesTasks(i), t.performDataProcessorTasks(i), jo(this, i), t.performVisualTasks(i), 
                    is(this, this._model, 0, "remain"), n -= +new Date() - r;
                } while (n > 0 && t.unfinished);
                t.unfinished || this._zr.flush();
            }
        }
    }, Zm.getDom = function() {
        return this._dom;
    }, Zm.getZr = function() {
        return this._zr;
    }, Zm.setOption = function(t, e, n) {
        var i;
        if (zm(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[Wm] = !0, !this._model || e) {
            var r = new Ma(this._api), a = this._theme, o = this._model = new Mv(null, null, a, r);
            o.scheduler = this._scheduler, o.init(null, null, a, r);
        }
        this._model.setOption(t, $m), n ? (this[Hm] = {
            silent: i
        }, this[Wm] = !1) : (Yo(this), Xm.update.call(this), this._zr.flush(), this[Hm] = !1, 
        this[Wm] = !1, $o.call(this, i), Ko.call(this, i));
    }, Zm.setTheme = function() {
        console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
    }, Zm.getModel = function() {
        return this._model;
    }, Zm.getOption = function() {
        return this._model && this._model.getOption();
    }, Zm.getWidth = function() {
        return this._zr.getWidth();
    }, Zm.getHeight = function() {
        return this._zr.getHeight();
    }, Zm.getDevicePixelRatio = function() {
        return this._zr.painter.dpr || window.devicePixelRatio || 1;
    }, Zm.getRenderedCanvas = function(t) {
        if ($c.canvasSupported) return (t = t || {}).pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor"), 
        this._zr.painter.getRenderedCanvas(t);
    }, Zm.getSvgDataUrl = function() {
        if ($c.svgSupported) {
            var t = this._zr;
            return f(t.storage.getDisplayList(), function(t) {
                t.stopAnimation(!0);
            }), t.painter.pathToDataUrl();
        }
    }, Zm.getDataURL = function(t) {
        var e = (t = t || {}).excludeComponents, n = this._model, i = [], r = this;
        Lm(e, function(t) {
            n.eachComponent({
                mainType: t
            }, function(t) {
                var e = r._componentsMap[t.__viewId];
                e.group.ignore || (i.push(e), e.group.ignore = !0);
            });
        });
        var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
        return Lm(i, function(t) {
            t.group.ignore = !1;
        }), a;
    }, Zm.getConnectedDataURL = function(t) {
        if ($c.canvasSupported) {
            var e = this.group, n = Math.min, r = Math.max, a = 1 / 0;
            if (ny[e]) {
                var o = a, s = a, l = -a, h = -a, u = [], c = t && t.pixelRatio || 1;
                f(ey, function(a) {
                    if (a.group === e) {
                        var c = a.getRenderedCanvas(i(t)), d = a.getDom().getBoundingClientRect();
                        o = n(d.left, o), s = n(d.top, s), l = r(d.right, l), h = r(d.bottom, h), u.push({
                            dom: c,
                            left: d.left,
                            top: d.top
                        });
                    }
                });
                var d = (l *= c) - (o *= c), p = (h *= c) - (s *= c), g = sd();
                g.width = d, g.height = p;
                var v = wn(g);
                return Lm(u, function(t) {
                    var e = new on({
                        style: {
                            x: t.left * c - o,
                            y: t.top * c - s,
                            image: t.dom
                        }
                    });
                    v.add(e);
                }), v.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"));
            }
            return this.getDataURL(t);
        }
    }, Zm.convertToPixel = y(Xo, "convertToPixel"), Zm.convertFromPixel = y(Xo, "convertFromPixel"), 
    Zm.containPixel = function(t, e) {
        var n;
        return t = On(this._model, t), f(t, function(t, i) {
            i.indexOf("Models") >= 0 && f(t, function(t) {
                var r = t.coordinateSystem;
                if (r && r.containPoint) n |= !!r.containPoint(e); else if ("seriesModels" === i) {
                    var a = this._chartsMap[t.__viewId];
                    a && a.containPoint && (n |= a.containPoint(e, t));
                }
            }, this);
        }, this), !!n;
    }, Zm.getVisual = function(t, e) {
        var n = (t = On(this._model, t, {
            defaultMainType: "series"
        })).seriesModel.getData(), i = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? n.indexOfRawIndex(t.dataIndex) : null;
        return null != i ? n.getItemVisual(i, e) : n.getVisual(e);
    }, Zm.getViewOfComponentModel = function(t) {
        return this._componentsMap[t.__viewId];
    }, Zm.getViewOfSeriesModel = function(t) {
        return this._chartsMap[t.__viewId];
    };
    var Xm = {
        prepareAndUpdate: function(t) {
            Yo(this), Xm.update.call(this, t);
        },
        update: function(t) {
            var e = this._model, n = this._api, i = this._zr, r = this._coordSysMgr, a = this._scheduler;
            if (e) {
                a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, n), a.performDataProcessorTasks(e, t), 
                jo(this, e), r.update(e, n), ts(e), a.performVisualTasks(e, t), es(this, e, n, t);
                var o = e.get("backgroundColor") || "transparent";
                if ($c.canvasSupported) i.setBackgroundColor(o); else {
                    var s = zt(o);
                    o = Wt(s, "rgb"), 0 === s[3] && (o = "transparent");
                }
                rs(e, n);
            }
        },
        updateTransform: function(t) {
            var e = this._model, n = this, i = this._api;
            if (e) {
                var r = [];
                e.eachComponent(function(a, o) {
                    var s = n.getViewOfComponentModel(o);
                    if (s && s.__alive) if (s.updateTransform) {
                        var l = s.updateTransform(o, e, i, t);
                        l && l.update && r.push(s);
                    } else r.push(s);
                });
                var a = R();
                e.eachSeries(function(r) {
                    var o = n._chartsMap[r.__viewId];
                    if (o.updateTransform) {
                        var s = o.updateTransform(r, e, i, t);
                        s && s.update && a.set(r.uid, 1);
                    } else a.set(r.uid, 1);
                }), ts(e), this._scheduler.performVisualTasks(e, t, {
                    setDirty: !0,
                    dirtyMap: a
                }), is(n, e, 0, t, a), rs(e, this._api);
            }
        },
        updateView: function(t) {
            var e = this._model;
            e && (lo.markUpdateMethod(t, "updateView"), ts(e), this._scheduler.performVisualTasks(e, t, {
                setDirty: !0
            }), es(this, this._model, this._api, t), rs(e, this._api));
        },
        updateVisual: function(t) {
            Xm.update.call(this, t);
        },
        updateLayout: function(t) {
            Xm.update.call(this, t);
        }
    };
    Zm.resize = function(t) {
        this._zr.resize(t);
        var e = this._model;
        if (this._loadingFX && this._loadingFX.resize(), e) {
            var n = e.resetOption("media"), i = t && t.silent;
            this[Wm] = !0, n && Yo(this), Xm.update.call(this), this[Wm] = !1, $o.call(this, i), 
            Ko.call(this, i);
        }
    }, Zm.showLoading = function(t, e) {
        if (zm(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), ty[t]) {
            var n = ty[t](this._api, e), i = this._zr;
            this._loadingFX = n, i.add(n);
        }
    }, Zm.hideLoading = function() {
        this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
    }, Zm.makeActionFromEvent = function(t) {
        var e = o({}, t);
        return e.type = jm[t.type], e;
    }, Zm.dispatchAction = function(t, e) {
        if (zm(e) || (e = {
            silent: !!e
        }), qm[t.type] && this._model) {
            if (this[Wm]) return void this._pendingActions.push(t);
            Uo.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : !1 !== e.flush && $c.browser.weChat && this._throttledZrFlush(), 
            $o.call(this, e.silent), Ko.call(this, e.silent);
        }
    }, Zm.appendData = function(t) {
        var e = t.seriesIndex;
        this.getModel().getSeriesByIndex(e).appendData(t), this._scheduler.unfinished = !0;
    }, Zm.on = Ho("on"), Zm.off = Ho("off"), Zm.one = Ho("one");
    var Ym = [ "click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu" ];
    Zm._initEvents = function() {
        Lm(Ym, function(t) {
            this._zr.on(t, function(e) {
                var n, i = this.getModel(), r = e.target;
                if ("globalout" === t) n = {}; else if (r && null != r.dataIndex) {
                    var a = r.dataModel || i.getSeriesByIndex(r.seriesIndex);
                    n = a && a.getDataParams(r.dataIndex, r.dataType, r) || {};
                } else r && r.eventData && (n = o({}, r.eventData));
                if (n) {
                    var s = n.componentType, l = n.componentIndex;
                    ("markLine" === s || "markPoint" === s || "markArea" === s) && (s = "series", l = n.seriesIndex);
                    var h = s && null != l && i.getComponent(s, l), u = h && this["series" === h.mainType ? "_chartsMap" : "_componentsMap"][h.__viewId];
                    n.event = e, n.type = t, this._ecEventProcessor.eventInfo = {
                        targetEl: r,
                        packedEvent: n,
                        model: h,
                        view: u
                    }, this.trigger(t, n);
                }
            }, this);
        }, this), Lm(jm, function(t, e) {
            this._messageCenter.on(e, function(t) {
                this.trigger(e, t);
            }, this);
        }, this);
    }, Zm.isDisposed = function() {
        return this._disposed;
    }, Zm.clear = function() {
        this.setOption({
            series: []
        }, !0);
    }, Zm.dispose = function() {
        if (!this._disposed) {
            this._disposed = !0, Bn(this.getDom(), ay, "");
            var t = this._api, e = this._model;
            Lm(this._componentsViews, function(n) {
                n.dispose(e, t);
            }), Lm(this._chartsViews, function(n) {
                n.dispose(e, t);
            }), this._zr.dispose(), delete ey[this.id];
        }
    }, c(Zo, yd), hs.prototype = {
        constructor: hs,
        normalizeQuery: function(t) {
            var e = {}, n = {}, i = {};
            if (w(t)) {
                var r = Bm(t);
                e.mainType = r.main || null, e.subType = r.sub || null;
            } else {
                var a = [ "Index", "Name", "Id" ], o = {
                    name: 1,
                    dataIndex: 1,
                    dataType: 1
                };
                f(t, function(t, r) {
                    for (var s = !1, l = 0; l < a.length; l++) {
                        var h = a[l], u = r.lastIndexOf(h);
                        if (u > 0 && u === r.length - h.length) {
                            var c = r.slice(0, u);
                            "data" !== c && (e.mainType = c, e[h.toLowerCase()] = t, s = !0);
                        }
                    }
                    o.hasOwnProperty(r) && (n[r] = t, s = !0), s || (i[r] = t);
                });
            }
            return {
                cptQuery: e,
                dataQuery: n,
                otherQuery: i
            };
        },
        filter: function(t, e) {
            function n(t, e, n, i) {
                return null == t[n] || e[i || n] === t[n];
            }
            var i = this.eventInfo;
            if (!i) return !0;
            var r = i.targetEl, a = i.packedEvent, o = i.model, s = i.view;
            if (!o || !s) return !0;
            var l = e.cptQuery, h = e.dataQuery;
            return n(l, o, "mainType") && n(l, o, "subType") && n(l, o, "index", "componentIndex") && n(l, o, "name") && n(l, o, "id") && n(h, a, "name") && n(h, a, "dataIndex") && n(h, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, a));
        },
        afterTrigger: function() {
            this.eventInfo = null;
        }
    };
    var qm = {}, jm = {}, Um = [], $m = [], Km = [], Qm = [], Jm = {}, ty = {}, ey = {}, ny = {}, iy = new Date() - 0, ry = new Date() - 0, ay = "_echarts_instance_", oy = cs;
    ys(2e3, rm), ps(Rv), gs(5e3, function(t) {
        var e = R();
        t.eachSeries(function(t) {
            var n = t.get("stack");
            if (n) {
                var i = e.get(n) || e.set(n, []), r = t.getData(), a = {
                    stackResultDimension: r.getCalculationInfo("stackResultDimension"),
                    stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
                    stackedDimension: r.getCalculationInfo("stackedDimension"),
                    stackedByDimension: r.getCalculationInfo("stackedByDimension"),
                    isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
                    data: r,
                    seriesModel: t
                };
                if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;
                i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), 
                i.push(a);
            }
        }), e.each(Va);
    }), _s("default", function(t, e) {
        s(e = e || {}, {
            text: "loading",
            color: "#c23531",
            textColor: "#000",
            maskColor: "rgba(255, 255, 255, 0.8)",
            zlevel: 0
        });
        var n = new _g({
            style: {
                fill: e.maskColor
            },
            zlevel: e.zlevel,
            z: 1e4
        }), i = new Sg({
            shape: {
                startAngle: -sm / 2,
                endAngle: -sm / 2 + .1,
                r: 10
            },
            style: {
                stroke: e.color,
                lineCap: "round",
                lineWidth: 5
            },
            zlevel: e.zlevel,
            z: 10001
        }), r = new _g({
            style: {
                fill: "none",
                text: e.text,
                textPosition: "right",
                textDistance: 10,
                textFill: e.textColor
            },
            zlevel: e.zlevel,
            z: 10001
        });
        i.animateShape(!0).when(1e3, {
            endAngle: 3 * sm / 2
        }).start("circularInOut"), i.animateShape(!0).when(1e3, {
            startAngle: 3 * sm / 2
        }).delay(300).start("circularInOut");
        var a = new rf();
        return a.add(i), a.add(r), a.add(n), a.resize = function() {
            var e = t.getWidth() / 2, a = t.getHeight() / 2;
            i.setShape({
                cx: e,
                cy: a
            });
            var o = i.shape.r;
            r.setShape({
                x: e - o,
                y: a - o,
                width: 2 * o,
                height: 2 * o
            }), n.setShape({
                x: 0,
                y: 0,
                width: t.getWidth(),
                height: t.getHeight()
            });
        }, a.resize(), a;
    }), vs({
        type: "highlight",
        event: "highlight",
        update: "highlight"
    }, N), vs({
        type: "downplay",
        event: "downplay",
        update: "downplay"
    }, N), fs("light", gm), fs("dark", xm);
    var sy = {};
    Ts.prototype = {
        constructor: Ts,
        add: function(t) {
            return this._add = t, this;
        },
        update: function(t) {
            return this._update = t, this;
        },
        remove: function(t) {
            return this._remove = t, this;
        },
        execute: function() {
            var t = this._old, e = this._new, n = {}, i = [], r = [];
            for (Cs(t, {}, i, "_oldKeyGetter", this), Cs(e, n, r, "_newKeyGetter", this), a = 0; a < t.length; a++) null != (s = n[o = i[a]]) ? ((h = s.length) ? (1 === h && (n[o] = null), 
            s = s.unshift()) : n[o] = null, this._update && this._update(s, a)) : this._remove && this._remove(a);
            for (var a = 0; a < r.length; a++) {
                var o = r[a];
                if (n.hasOwnProperty(o)) {
                    var s = n[o];
                    if (null == s) continue;
                    if (s.length) for (var l = 0, h = s.length; h > l; l++) this._add && this._add(s[l]); else this._add && this._add(s);
                }
            }
        }
    };
    var ly = R([ "tooltip", "label", "itemName", "itemId", "seriesName" ]), hy = b, uy = "undefined", cy = "e\0\0", dy = {
        float: ("undefined" == typeof Float64Array ? "undefined" : t(Float64Array)) === uy ? Array : Float64Array,
        int: ("undefined" == typeof Int32Array ? "undefined" : t(Int32Array)) === uy ? Array : Int32Array,
        ordinal: Array,
        number: Array,
        time: Array
    }, fy = ("undefined" == typeof Uint32Array ? "undefined" : t(Uint32Array)) === uy ? Array : Uint32Array, py = ("undefined" == typeof Uint16Array ? "undefined" : t(Uint16Array)) === uy ? Array : Uint16Array, gy = [ "hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx" ], vy = [ "_extent", "_approximateExtent", "_rawExtent" ], my = function(t, e) {
        t = t || [ "x", "y" ];
        for (var n = {}, i = [], r = {}, a = 0; a < t.length; a++) {
            var o = t[a];
            w(o) && (o = {
                name: o
            });
            var s = o.name;
            o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), 
            o.otherDims = o.otherDims || {}, i.push(s), n[s] = o, o.index = a, o.createInvertedIndices && (r[s] = []);
        }
        this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, 
        this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], 
        this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, 
        this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], 
        this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, 
        this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = As(this), 
        this._invertedIndicesMap = r, this._calculationInfo = {};
    }, yy = my.prototype;
    yy.type = "list", yy.hasItemOption = !0, yy.getDimension = function(t) {
        return isNaN(t) || (t = this.dimensions[t] || t), t;
    }, yy.getDimensionInfo = function(t) {
        return this._dimensionInfos[this.getDimension(t)];
    }, yy.getDimensionsOnCoord = function() {
        return this._dimensionsSummary.dataDimsOnCoord.slice();
    }, yy.mapDimension = function(t, e) {
        var n = this._dimensionsSummary;
        if (null == e) return n.encodeFirstDimNotExtra[t];
        var i = n.encode[t];
        return !0 === e ? (i || []).slice() : i && i[e];
    }, yy.initData = function(t, e, n) {
        (ea.isInstance(t) || d(t)) && (t = new Wa(t, this.dimensions.length)), this._rawData = t, 
        this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], 
        this._nameRepeatCount = {}, n || (this.hasItemOption = !1), this.defaultDimValueGetter = Wv[this._rawData.getSource().sourceFormat], 
        this._dimValueGetter = n = n || this.defaultDimValueGetter, this._rawExtent = {}, 
        this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1);
    }, yy.getProvider = function() {
        return this._rawData;
    }, yy.appendData = function(t) {
        var e = this._rawData, n = this.count();
        e.appendData(t);
        var i = e.count();
        e.persistent || (i += n), this._initDataFromProvider(n, i);
    }, yy._initDataFromProvider = function(t, e) {
        if (!(t >= e)) {
            for (var n, i = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, h = this._nameList, u = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = f - 1, g = 0; s > g; g++) {
                c[T = o[g]] || (c[T] = [ 1 / 0, -1 / 0 ]);
                var v = l[T];
                0 === v.otherDims.itemName && (n = this._nameDimIdx = g), 0 === v.otherDims.itemId && (this._idDimIdx = g);
                var m = dy[v.type];
                a[T] || (a[T] = []);
                var y = a[T][p];
                if (y && y.length < i) {
                    for (var x = new m(Math.min(e - p * i, i)), _ = 0; _ < y.length; _++) x[_] = y[_];
                    a[T][p] = x;
                }
                for (I = f * i; e > I; I += i) a[T].push(new m(Math.min(e - I, i)));
                this._chunkCount = a[T].length;
            }
            for (var w = new Array(s), b = t; e > b; b++) {
                w = r.getItem(b, w);
                for (var M = Math.floor(b / i), S = b % i, I = 0; s > I; I++) {
                    var T = o[I], C = a[T][M], A = this._dimValueGetter(w, T, b, I);
                    C[S] = A;
                    var D = c[T];
                    A < D[0] && (D[0] = A), A > D[1] && (D[1] = A);
                }
                if (!r.pure) {
                    var k = h[b];
                    if (w && null == k) if (null != w.name) h[b] = k = w.name; else if (null != n) {
                        var P = o[n], L = a[P][M];
                        if (L) {
                            k = L[S];
                            var O = l[P].ordinalMeta;
                            O && O.categories.length && (k = O.categories[k]);
                        }
                    }
                    var z = null == w ? null : w.id;
                    null == z && null != k && (d[k] = d[k] || 0, z = k, d[k] > 0 && (z += "__ec__" + d[k]), 
                    d[k]++), null != z && (u[b] = z);
                }
            }
            !r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, 
            zs(this);
        }
    }, yy.count = function() {
        return this._count;
    }, yy.getIndices = function() {
        var t = this._indices;
        if (t) {
            var e = t.constructor, n = this._count;
            if (e === Array) {
                i = new e(n);
                for (r = 0; n > r; r++) i[r] = t[r];
            } else i = new e(t.buffer, 0, n);
        } else for (var e = Ps(this), i = new e(this.count()), r = 0; r < i.length; r++) i[r] = r;
        return i;
    }, yy.get = function(t, e) {
        if (!(e >= 0 && e < this._count)) return NaN;
        var n = this._storage;
        if (!n[t]) return NaN;
        e = this.getRawIndex(e);
        var i = Math.floor(e / this._chunkSize), r = e % this._chunkSize;
        return n[t][i][r];
    }, yy.getByRawIndex = function(t, e) {
        if (!(e >= 0 && e < this._rawCount)) return NaN;
        var n = this._storage[t];
        if (!n) return NaN;
        var i = Math.floor(e / this._chunkSize), r = e % this._chunkSize;
        return n[i][r];
    }, yy._getFast = function(t, e) {
        var n = Math.floor(e / this._chunkSize), i = e % this._chunkSize;
        return this._storage[t][n][i];
    }, yy.getValues = function(t, e) {
        var n = [];
        x(t) || (e = t, t = this.dimensions);
        for (var i = 0, r = t.length; r > i; i++) n.push(this.get(t[i], e));
        return n;
    }, yy.hasValue = function(t) {
        for (var e = this._dimensionsSummary.dataDimsOnCoord, n = this._dimensionInfos, i = 0, r = e.length; r > i; i++) if ("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t))) return !1;
        return !0;
    }, yy.getDataExtent = function(t) {
        t = this.getDimension(t);
        var e = [ 1 / 0, -1 / 0 ];
        if (!this._storage[t]) return e;
        var n, i = this.count();
        if (!this._indices) return this._rawExtent[t].slice();
        if (n = this._extent[t]) return n.slice();
        for (var r = (n = e)[0], a = n[1], o = 0; i > o; o++) {
            var s = this._getFast(t, this.getRawIndex(o));
            r > s && (r = s), s > a && (a = s);
        }
        return n = [ r, a ], this._extent[t] = n, n;
    }, yy.getApproximateExtent = function(t) {
        return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t);
    }, yy.setApproximateExtent = function(t, e) {
        e = this.getDimension(e), this._approximateExtent[e] = t.slice();
    }, yy.getCalculationInfo = function(t) {
        return this._calculationInfo[t];
    }, yy.setCalculationInfo = function(t, e) {
        hy(t) ? o(this._calculationInfo, t) : this._calculationInfo[t] = e;
    }, yy.getSum = function(t) {
        var e = 0;
        if (this._storage[t]) for (var n = 0, i = this.count(); i > n; n++) {
            var r = this.get(t, n);
            isNaN(r) || (e += r);
        }
        return e;
    }, yy.getMedian = function(t) {
        var e = [];
        this.each(t, function(t) {
            isNaN(t) || e.push(t);
        });
        var n = [].concat(e).sort(function(t, e) {
            return t - e;
        }), i = this.count();
        return 0 === i ? 0 : i % 2 == 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2;
    }, yy.rawIndexOf = function(t, e) {
        var n = (t && this._invertedIndicesMap[t])[e];
        return null == n || isNaN(n) ? -1 : n;
    }, yy.indexOfName = function(t) {
        for (var e = 0, n = this.count(); n > e; e++) if (this.getName(e) === t) return e;
        return -1;
    }, yy.indexOfRawIndex = function(t) {
        if (!this._indices) return t;
        if (t >= this._rawCount || 0 > t) return -1;
        var e = this._indices, n = e[t];
        if (null != n && n < this._count && n === t) return t;
        for (var i = 0, r = this._count - 1; r >= i; ) {
            var a = (i + r) / 2 | 0;
            if (e[a] < t) i = a + 1; else {
                if (!(e[a] > t)) return a;
                r = a - 1;
            }
        }
        return -1;
    }, yy.indicesOfNearest = function(t, e, n) {
        var i = [];
        if (!this._storage[t]) return i;
        null == n && (n = 1 / 0);
        for (var r = Number.MAX_VALUE, a = -1, o = 0, s = this.count(); s > o; o++) {
            var l = e - this.get(t, o), h = Math.abs(l);
            n >= l && r >= h && ((r > h || l >= 0 && 0 > a) && (r = h, a = l, i.length = 0), 
            i.push(o));
        }
        return i;
    }, yy.getRawIndex = Es, yy.getRawDataItem = function(t) {
        if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
        for (var e = [], n = 0; n < this.dimensions.length; n++) {
            var i = this.dimensions[n];
            e.push(this.get(i, t));
        }
        return e;
    }, yy.getName = function(t) {
        var e = this.getRawIndex(t);
        return this._nameList[e] || Bs(this, this._nameDimIdx, e) || "";
    }, yy.getId = function(t) {
        return Ns(this, this.getRawIndex(t));
    }, yy.each = function(t, e, n, i) {
        if (this._count) {
            "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;
            for (var r = (t = p(Fs(t), this.getDimension, this)).length, a = 0; a < this.count(); a++) switch (r) {
              case 0:
                e.call(n, a);
                break;

              case 1:
                e.call(n, this.get(t[0], a), a);
                break;

              case 2:
                e.call(n, this.get(t[0], a), this.get(t[1], a), a);
                break;

              default:
                for (var o = 0, s = []; r > o; o++) s[o] = this.get(t[o], a);
                s[o] = a, e.apply(n, s);
            }
        }
    }, yy.filterSelf = function(t, e, n, i) {
        if (this._count) {
            "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = p(Fs(t), this.getDimension, this);
            for (var r = this.count(), a = new (Ps(this))(r), o = [], s = t.length, l = 0, h = t[0], u = 0; r > u; u++) {
                var c, d = this.getRawIndex(u);
                if (0 === s) c = e.call(n, u); else if (1 === s) {
                    var f = this._getFast(h, d);
                    c = e.call(n, f, u);
                } else {
                    for (var g = 0; s > g; g++) o[g] = this._getFast(h, d);
                    o[g] = u, c = e.apply(n, o);
                }
                c && (a[l++] = d);
            }
            return r > l && (this._indices = a), this._count = l, this._extent = {}, this.getRawIndex = this._indices ? Rs : Es, 
            this;
        }
    }, yy.selectRange = function(t) {
        if (this._count) {
            var e = [];
            for (var n in t) t.hasOwnProperty(n) && e.push(n);
            var i = e.length;
            if (i) {
                var r = this.count(), a = new (Ps(this))(r), o = 0, s = e[0], l = t[s][0], h = t[s][1], u = !1;
                if (!this._indices) {
                    var c = 0;
                    if (1 === i) {
                        for (var d = this._storage[e[0]], f = 0; f < this._chunkCount; f++) for (var p = d[f], g = Math.min(this._count - f * this._chunkSize, this._chunkSize), v = 0; g > v; v++) ((w = p[v]) >= l && h >= w || isNaN(w)) && (a[o++] = c), 
                        c++;
                        u = !0;
                    } else if (2 === i) {
                        for (var d = this._storage[s], m = this._storage[e[1]], y = t[e[1]][0], x = t[e[1]][1], f = 0; f < this._chunkCount; f++) for (var p = d[f], _ = m[f], g = Math.min(this._count - f * this._chunkSize, this._chunkSize), v = 0; g > v; v++) {
                            var w = p[v], b = _[v];
                            (w >= l && h >= w || isNaN(w)) && (b >= y && x >= b || isNaN(b)) && (a[o++] = c), 
                            c++;
                        }
                        u = !0;
                    }
                }
                if (!u) if (1 === i) for (v = 0; r > v; v++) {
                    S = this.getRawIndex(v);
                    ((w = this._getFast(s, S)) >= l && h >= w || isNaN(w)) && (a[o++] = S);
                } else for (v = 0; r > v; v++) {
                    for (var M = !0, S = this.getRawIndex(v), f = 0; i > f; f++) {
                        var I = e[f];
                        ((w = this._getFast(n, S)) < t[I][0] || w > t[I][1]) && (M = !1);
                    }
                    M && (a[o++] = this.getRawIndex(v));
                }
                return r > o && (this._indices = a), this._count = o, this._extent = {}, this.getRawIndex = this._indices ? Rs : Es, 
                this;
            }
        }
    }, yy.mapArray = function(t, e, n, i) {
        "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;
        var r = [];
        return this.each(t, function() {
            r.push(e && e.apply(this, arguments));
        }, n), r;
    }, yy.map = function(e, n, i, r) {
        i = i || r || this;
        var a = Vs(this, e = p(Fs(e), this.getDimension, this));
        a._indices = this._indices, a.getRawIndex = a._indices ? Rs : Es;
        for (var o = a._storage, s = [], l = this._chunkSize, h = e.length, u = this.count(), c = [], d = a._rawExtent, f = 0; u > f; f++) {
            for (var g = 0; h > g; g++) c[g] = this.get(e[g], f);
            c[h] = f;
            var v = n && n.apply(i, c);
            if (null != v) {
                "object" != (void 0 === v ? "undefined" : t(v)) && (s[0] = v, v = s);
                for (var m = this.getRawIndex(f), y = Math.floor(m / l), x = m % l, _ = 0; _ < v.length; _++) {
                    var w = e[_], b = v[_], M = d[w], S = o[w];
                    S && (S[y][x] = b), b < M[0] && (M[0] = b), b > M[1] && (M[1] = b);
                }
            }
        }
        return a;
    }, yy.downSample = function(t, e, n, i) {
        for (var r = Vs(this, [ t ]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], h = this.count(), u = this._chunkSize, c = r._rawExtent[t], d = new (Ps(this))(h), f = 0, p = 0; h > p; p += s) {
            s > h - p && (s = h - p, o.length = s);
            for (var g = 0; s > g; g++) {
                var v = this.getRawIndex(p + g), m = Math.floor(v / u), y = v % u;
                o[g] = l[m][y];
            }
            var x = n(o), _ = this.getRawIndex(Math.min(p + i(o, x) || 0, h - 1)), w = _ % u;
            l[Math.floor(_ / u)][w] = x, x < c[0] && (c[0] = x), x > c[1] && (c[1] = x), d[f++] = _;
        }
        return r._count = f, r._indices = d, r.getRawIndex = Rs, r;
    }, yy.getItemModel = function(t) {
        var e = this.hostModel;
        return new wr(this.getRawDataItem(t), e, e && e.ecModel);
    }, yy.diff = function(t) {
        var e = this;
        return new Ts(t ? t.getIndices() : [], this.getIndices(), function(e) {
            return Ns(t, e);
        }, function(t) {
            return Ns(e, t);
        });
    }, yy.getVisual = function(t) {
        var e = this._visual;
        return e && e[t];
    }, yy.setVisual = function(t, e) {
        if (hy(t)) for (var n in t) t.hasOwnProperty(n) && this.setVisual(n, t[n]); else this._visual = this._visual || {}, 
        this._visual[t] = e;
    }, yy.setLayout = function(t, e) {
        if (hy(t)) for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]); else this._layout[t] = e;
    }, yy.getLayout = function(t) {
        return this._layout[t];
    }, yy.getItemLayout = function(t) {
        return this._itemLayouts[t];
    }, yy.setItemLayout = function(t, e, n) {
        this._itemLayouts[t] = n ? o(this._itemLayouts[t] || {}, e) : e;
    }, yy.clearItemLayouts = function() {
        this._itemLayouts.length = 0;
    }, yy.getItemVisual = function(t, e, n) {
        var i = this._itemVisuals[t], r = i && i[e];
        return null != r || n ? r : this.getVisual(e);
    }, yy.setItemVisual = function(t, e, n) {
        var i = this._itemVisuals[t] || {}, r = this.hasItemVisual;
        if (this._itemVisuals[t] = i, hy(e)) for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a], 
        r[a] = !0); else i[e] = n, r[e] = !0;
    }, yy.clearAllVisual = function() {
        this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {};
    };
    var xy = function(t) {
        t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType;
    };
    yy.setItemGraphicEl = function(t, e) {
        var n = this.hostModel;
        e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, 
        "group" === e.type && e.traverse(xy, e)), this._graphicEls[t] = e;
    }, yy.getItemGraphicEl = function(t) {
        return this._graphicEls[t];
    }, yy.eachItemGraphicEl = function(t, e) {
        f(this._graphicEls, function(n, i) {
            n && t && t.call(e, n, i);
        });
    }, yy.cloneShallow = function(t) {
        if (!t) {
            var e = p(this.dimensions, this.getDimensionInfo, this);
            t = new my(e, this.hostModel);
        }
        if (t._storage = this._storage, Os(t, this), this._indices) {
            var n = this._indices.constructor;
            t._indices = new n(this._indices);
        } else t._indices = null;
        return t.getRawIndex = t._indices ? Rs : Es, t;
    }, yy.wrapMethod = function(t, e) {
        var n = this[t];
        "function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], 
        this.__wrappedMethods.push(t), this[t] = function() {
            var t = n.apply(this, arguments);
            return e.apply(this, [ t ].concat(k(arguments)));
        });
    }, yy.TRANSFERABLE_METHODS = [ "cloneShallow", "downSample", "map" ], yy.CHANGABLE_METHODS = [ "filterSelf", "selectRange" ];
    var _y = function(t, e) {
        return e = e || {}, Hs(e.coordDimensions || [], t, {
            dimsDef: e.dimensionsDefine || t.dimensionsDefine,
            encodeDef: e.encodeDefine || t.encodeDefine,
            dimCount: e.dimensionsCount,
            generateCoord: e.generateCoord,
            generateCoordCount: e.generateCoordCount
        });
    };
    Ks.prototype.parse = function(t) {
        return t;
    }, Ks.prototype.getSetting = function(t) {
        return this._setting[t];
    }, Ks.prototype.contain = function(t) {
        var e = this._extent;
        return t >= e[0] && t <= e[1];
    }, Ks.prototype.normalize = function(t) {
        var e = this._extent;
        return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0]);
    }, Ks.prototype.scale = function(t) {
        var e = this._extent;
        return t * (e[1] - e[0]) + e[0];
    }, Ks.prototype.unionExtent = function(t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
    }, Ks.prototype.unionExtentFromData = function(t, e) {
        this.unionExtent(t.getApproximateExtent(e));
    }, Ks.prototype.getExtent = function() {
        return this._extent.slice();
    }, Ks.prototype.setExtent = function(t, e) {
        var n = this._extent;
        isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);
    }, Ks.prototype.isBlank = function() {
        return this._isBlank;
    }, Ks.prototype.setBlank = function(t) {
        this._isBlank = t;
    }, Ks.prototype.getLabel = null, Vn(Ks), Zn(Ks, {
        registerWhenExtend: !0
    }), Qs.createByAxisModel = function(t) {
        var e = t.option, n = e.data, i = n && p(n, tl);
        return new Qs({
            categories: i,
            needCollect: !i,
            deduplication: !1 !== e.dedplication
        });
    };
    var wy = Qs.prototype;
    wy.getOrdinal = function(t) {
        return Js(this).get(t);
    }, wy.parseAndCollect = function(t) {
        var e, n = this._needCollect;
        if ("string" != typeof t && !n) return t;
        if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, 
        e;
        var i = Js(this);
        return null == (e = i.get(t)) && (n ? (e = this.categories.length, this.categories[e] = t, 
        i.set(t, e)) : e = NaN), e;
    };
    var by = Ks.prototype, My = Ks.extend({
        type: "ordinal",
        init: function(t, e) {
            (!t || x(t)) && (t = new Qs({
                categories: t
            })), this._ordinalMeta = t, this._extent = e || [ 0, t.categories.length - 1 ];
        },
        parse: function(t) {
            return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t);
        },
        contain: function(t) {
            return t = this.parse(t), by.contain.call(this, t) && null != this._ordinalMeta.categories[t];
        },
        normalize: function(t) {
            return by.normalize.call(this, this.parse(t));
        },
        scale: function(t) {
            return Math.round(by.scale.call(this, t));
        },
        getTicks: function() {
            for (var t = [], e = this._extent, n = e[0]; n <= e[1]; ) t.push(n), n++;
            return t;
        },
        getLabel: function(t) {
            return this.isBlank() ? void 0 : this._ordinalMeta.categories[t];
        },
        count: function() {
            return this._extent[1] - this._extent[0] + 1;
        },
        unionExtentFromData: function(t, e) {
            this.unionExtent(t.getApproximateExtent(e));
        },
        getOrdinalMeta: function() {
            return this._ordinalMeta;
        },
        niceTicks: N,
        niceExtent: N
    });
    My.create = function() {
        return new My();
    };
    var Sy = Ar, Iy = Ar, Ty = Ks.extend({
        type: "interval",
        _interval: 0,
        _intervalPrecision: 2,
        setExtent: function(t, e) {
            var n = this._extent;
            isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e));
        },
        unionExtent: function(t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), Ty.prototype.setExtent.call(this, e[0], e[1]);
        },
        getInterval: function() {
            return this._interval;
        },
        setInterval: function(t) {
            this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = nl(t);
        },
        getTicks: function() {
            return al(this._interval, this._extent, this._niceExtent, this._intervalPrecision);
        },
        getLabel: function(t, e) {
            if (null == t) return "";
            var n = e && e.precision;
            return null == n ? n = kr(t) || 0 : "auto" === n && (n = this._intervalPrecision), 
            t = Iy(t, n, !0), Fr(t);
        },
        niceTicks: function(t, e, n) {
            t = t || 5;
            var i = this._extent, r = i[1] - i[0];
            if (isFinite(r)) {
                0 > r && (r = -r, i.reverse());
                var a = el(i, t, e, n);
                this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent;
            }
        },
        niceExtent: function(t) {
            var e = this._extent;
            if (e[0] === e[1]) if (0 !== e[0]) {
                var n = e[0];
                t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2);
            } else e[1] = 1;
            var i = e[1] - e[0];
            isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var r = this._interval;
            t.fixMin || (e[0] = Iy(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = Iy(Math.ceil(e[1] / r) * r));
        }
    });
    Ty.create = function() {
        return new Ty();
    };
    var Cy = "__ec_stack_", Ay = "undefined" != typeof Float32Array ? Float32Array : Array, Dy = {
        seriesType: "bar",
        plan: $v(),
        reset: function(t) {
            if (dl(t) && fl(t)) {
                var e = t.getData(), n = t.coordinateSystem, i = n.getBaseAxis(), r = n.getOtherAxis(i), a = e.mapDimension(r.dim), o = e.mapDimension(i.dim), s = r.isHorizontal(), l = s ? 0 : 1, h = cl(hl([ t ]), i, t).width;
                return h > .5 || (h = .5), {
                    progress: function(t, e) {
                        for (var u, c = new Ay(2 * t.count), d = [], f = [], p = 0; null != (u = t.next()); ) f[l] = e.get(a, u), 
                        f[1 - l] = e.get(o, u), d = n.dataToPoint(f, null, d), c[p++] = d[0], c[p++] = d[1];
                        e.setLayout({
                            largePoints: c,
                            barWidth: h,
                            valueAxisStart: pl(i, r, !1),
                            valueAxisHorizontal: s
                        });
                    }
                };
            }
        }
    }, ky = Ty.prototype, Py = Math.ceil, Ly = Math.floor, Oy = 36e5, zy = 864e5, By = function(t, e, n, i) {
        for (;i > n; ) {
            var r = n + i >>> 1;
            t[r][1] < e ? n = r + 1 : i = r;
        }
        return n;
    }, Ey = Ty.extend({
        type: "time",
        getLabel: function(t) {
            var e = this._stepLvl, n = new Date(t);
            return Xr(e[0], n, this.getSetting("useUTC"));
        },
        niceExtent: function(t) {
            var e = this._extent;
            if (e[0] === e[1] && (e[0] -= zy, e[1] += zy), e[1] === -1 / 0 && 1 / 0 === e[0]) {
                var n = new Date();
                e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - zy;
            }
            this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var i = this._interval;
            t.fixMin || (e[0] = Ar(Ly(e[0] / i) * i)), t.fixMax || (e[1] = Ar(Py(e[1] / i) * i));
        },
        niceTicks: function(t, e, n) {
            t = t || 10;
            var i = this._extent, r = i[1] - i[0], a = r / t;
            null != e && e > a && (a = e), null != n && a > n && (a = n);
            var o = Ry.length, s = By(Ry, a, 0, o), l = Ry[Math.min(s, o - 1)], h = l[1];
            "year" === l[0] && (h *= Nr(r / h / t, !0));
            var u = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3, c = [ Math.round(Py((i[0] - u) / h) * h + u), Math.round(Ly((i[1] - u) / h) * h + u) ];
            rl(c, i), this._stepLvl = l, this._interval = h, this._niceExtent = c;
        },
        parse: function(t) {
            return +Br(t);
        }
    });
    f([ "contain", "normalize" ], function(t) {
        Ey.prototype[t] = function(e) {
            return ky[t].call(this, this.parse(e));
        };
    });
    var Ry = [ [ "hh:mm:ss", 1e3 ], [ "hh:mm:ss", 5e3 ], [ "hh:mm:ss", 1e4 ], [ "hh:mm:ss", 15e3 ], [ "hh:mm:ss", 3e4 ], [ "hh:mm\nMM-dd", 6e4 ], [ "hh:mm\nMM-dd", 3e5 ], [ "hh:mm\nMM-dd", 6e5 ], [ "hh:mm\nMM-dd", 9e5 ], [ "hh:mm\nMM-dd", 18e5 ], [ "hh:mm\nMM-dd", Oy ], [ "hh:mm\nMM-dd", 72e5 ], [ "hh:mm\nMM-dd", 6 * Oy ], [ "hh:mm\nMM-dd", 432e5 ], [ "MM-dd\nyyyy", zy ], [ "MM-dd\nyyyy", 2 * zy ], [ "MM-dd\nyyyy", 3 * zy ], [ "MM-dd\nyyyy", 4 * zy ], [ "MM-dd\nyyyy", 5 * zy ], [ "MM-dd\nyyyy", 6 * zy ], [ "week", 7 * zy ], [ "MM-dd\nyyyy", 864e6 ], [ "week", 14 * zy ], [ "week", 21 * zy ], [ "month", 31 * zy ], [ "week", 42 * zy ], [ "month", 62 * zy ], [ "week", 70 * zy ], [ "quarter", 95 * zy ], [ "month", 31 * zy * 4 ], [ "month", 13392e6 ], [ "half-year", 16416e6 ], [ "month", 31 * zy * 8 ], [ "month", 26784e6 ], [ "year", 380 * zy ] ];
    Ey.create = function(t) {
        return new Ey({
            useUTC: t.ecModel.get("useUTC")
        });
    };
    var Ny = Ks.prototype, Fy = Ty.prototype, Vy = kr, Wy = Ar, Hy = Math.floor, Gy = Math.ceil, Zy = Math.pow, Xy = Math.log, Yy = Ks.extend({
        type: "log",
        base: 10,
        $constructor: function() {
            Ks.apply(this, arguments), this._originalScale = new Ty();
        },
        getTicks: function() {
            var t = this._originalScale, e = this._extent, n = t.getExtent();
            return p(Fy.getTicks.call(this), function(i) {
                var r = Ar(Zy(this.base, i));
                return r = i === e[0] && t.__fixMin ? gl(r, n[0]) : r, r = i === e[1] && t.__fixMax ? gl(r, n[1]) : r;
            }, this);
        },
        getLabel: Fy.getLabel,
        scale: function(t) {
            return t = Ny.scale.call(this, t), Zy(this.base, t);
        },
        setExtent: function(t, e) {
            var n = this.base;
            t = Xy(t) / Xy(n), e = Xy(e) / Xy(n), Fy.setExtent.call(this, t, e);
        },
        getExtent: function() {
            var t = this.base, e = Ny.getExtent.call(this);
            e[0] = Zy(t, e[0]), e[1] = Zy(t, e[1]);
            var n = this._originalScale, i = n.getExtent();
            return n.__fixMin && (e[0] = gl(e[0], i[0])), n.__fixMax && (e[1] = gl(e[1], i[1])), 
            e;
        },
        unionExtent: function(t) {
            this._originalScale.unionExtent(t);
            var e = this.base;
            t[0] = Xy(t[0]) / Xy(e), t[1] = Xy(t[1]) / Xy(e), Ny.unionExtent.call(this, t);
        },
        unionExtentFromData: function(t, e) {
            this.unionExtent(t.getApproximateExtent(e));
        },
        niceTicks: function(t) {
            t = t || 10;
            var e = this._extent, n = e[1] - e[0];
            if (!(1 / 0 === n || 0 >= n)) {
                var i = Er(n);
                for (.5 >= t / n * i && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0; ) i *= 10;
                var r = [ Ar(Gy(e[0] / i) * i), Ar(Hy(e[1] / i) * i) ];
                this._interval = i, this._niceExtent = r;
            }
        },
        niceExtent: function(t) {
            Fy.niceExtent.call(this, t);
            var e = this._originalScale;
            e.__fixMin = t.fixMin, e.__fixMax = t.fixMax;
        }
    });
    f([ "contain", "normalize" ], function(t) {
        Yy.prototype[t] = function(e) {
            return e = Xy(e) / Xy(this.base), Ny[t].call(this, e);
        };
    }), Yy.create = function() {
        return new Yy();
    };
    var qy = {
        getMin: function(t) {
            var e = this.option, n = t || null == e.rangeStart ? e.min : e.rangeStart;
            return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !T(n) && (n = this.axis.scale.parse(n)), 
            n;
        },
        getMax: function(t) {
            var e = this.option, n = t || null == e.rangeEnd ? e.max : e.rangeEnd;
            return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !T(n) && (n = this.axis.scale.parse(n)), 
            n;
        },
        getNeedCrossZero: function() {
            var t = this.option;
            return null == t.rangeStart && null == t.rangeEnd && !t.scale;
        },
        getCoordSysModel: N,
        setRange: function(t, e) {
            this.option.rangeStart = t, this.option.rangeEnd = e;
        },
        resetRange: function() {
            this.option.rangeStart = this.option.rangeEnd = null;
        }
    }, jy = zi({
        type: "triangle",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n = e.cx, i = e.cy, r = e.width / 2, a = e.height / 2;
            t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath();
        }
    }), Uy = zi({
        type: "diamond",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n = e.cx, i = e.cy, r = e.width / 2, a = e.height / 2;
            t.moveTo(n, i - a), t.lineTo(n + r, i), t.lineTo(n, i + a), t.lineTo(n - r, i), 
            t.closePath();
        }
    }), $y = zi({
        type: "pin",
        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n = e.x, i = e.y, r = e.width / 5 * 3, a = Math.max(r, e.height), o = r / 2, s = o * o / (a - o), l = i - a + o + s, h = Math.asin(s / o), u = Math.cos(h) * o, c = Math.sin(h), d = Math.cos(h), f = .6 * o, p = .7 * o;
            t.moveTo(n - u, l + s), t.arc(n, l, o, Math.PI - h, 2 * Math.PI + h), t.bezierCurveTo(n + u - c * f, l + s + d * f, n, i - p, n, i), 
            t.bezierCurveTo(n, i - p, n - u + c * f, l + s + d * f, n - u, l + s), t.closePath();
        }
    }), Ky = zi({
        type: "arrow",
        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var n = e.height, i = e.width, r = e.x, a = e.y, o = i / 3 * 2;
            t.moveTo(r, a), t.lineTo(r + o, a + n), t.lineTo(r, a + n / 4 * 3), t.lineTo(r - o, a + n), 
            t.lineTo(r, a), t.closePath();
        }
    }), Qy = {
        line: function(t, e, n, i, r) {
            r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2;
        },
        rect: function(t, e, n, i, r) {
            r.x = t, r.y = e, r.width = n, r.height = i;
        },
        roundRect: function(t, e, n, i, r) {
            r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4;
        },
        square: function(t, e, n, i, r) {
            var a = Math.min(n, i);
            r.x = t, r.y = e, r.width = a, r.height = a;
        },
        circle: function(t, e, n, i, r) {
            r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2;
        },
        diamond: function(t, e, n, i, r) {
            r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;
        },
        pin: function(t, e, n, i, r) {
            r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;
        },
        arrow: function(t, e, n, i, r) {
            r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i;
        },
        triangle: function(t, e, n, i, r) {
            r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i;
        }
    }, Jy = {};
    f({
        line: wg,
        rect: _g,
        roundRect: _g,
        square: _g,
        circle: cg,
        diamond: Uy,
        pin: $y,
        arrow: Ky,
        triangle: jy
    }, function(t, e) {
        Jy[e] = new t();
    });
    var tx = zi({
        type: "symbol",
        shape: {
            symbolType: "",
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        beforeBrush: function() {
            var t = this.style;
            "pin" === this.shape.symbolType && "inside" === t.textPosition && (t.textPosition = [ "50%", "40%" ], 
            t.textAlign = "center", t.textVerticalAlign = "middle");
        },
        buildPath: function(t, e, n) {
            var i = e.symbolType, r = Jy[i];
            "none" !== e.symbolType && (r || (i = "rect", r = Jy[i]), Qy[i](e.x, e.y, e.width, e.height, r.shape), 
            r.buildPath(t, r.shape, n));
        }
    }), ex = {
        isDimensionStacked: Ys,
        enableDataStack: Xs,
        getStackedDimension: qs
    }, nx = (Object.freeze || Object)({
        createList: function(t) {
            return js(t.getSource(), t);
        },
        getLayoutRect: jr,
        dataStack: ex,
        createScale: function(t, e) {
            var n = e;
            wr.isInstance(e) || (n = new wr(e), c(n, qy));
            var i = xl(n);
            return i.setExtent(t[0], t[1]), yl(i, n), i;
        },
        mixinAxisModelCommonMethods: function(t) {
            c(t, qy);
        },
        completeDimensions: Hs,
        createDimensions: _y,
        createSymbol: Tl
    }), ix = 1e-8;
    Dl.prototype = {
        constructor: Dl,
        properties: null,
        getBoundingRect: function() {
            var t = this._rect;
            if (t) return t;
            for (var e = Number.MAX_VALUE, n = [ e, e ], i = [ -e, -e ], r = [], a = [], o = this.geometries, s = 0; s < o.length; s++) "polygon" === o[s].type && (ai(o[s].exterior, r, a), 
            Q(n, n, r), J(i, i, a));
            return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new re(n[0], n[1], i[0] - n[0], i[1] - n[1]);
        },
        contain: function(t) {
            var e = this.getBoundingRect(), n = this.geometries;
            if (!e.contain(t[0], t[1])) return !1;
            t: for (var i = 0, r = n.length; r > i; i++) if ("polygon" === n[i].type) {
                var a = n[i].exterior, o = n[i].interiors;
                if (Al(a, t[0], t[1])) {
                    for (var s = 0; s < (o ? o.length : 0); s++) if (Al(o[s])) continue t;
                    return !0;
                }
            }
            return !1;
        },
        transformTo: function(t, e, n, i) {
            var r = this.getBoundingRect(), a = r.width / r.height;
            n ? i || (i = n / a) : n = a * i;
            for (var o = new re(t, e, n, i), s = r.calculateTransform(o), l = this.geometries, h = 0; h < l.length; h++) if ("polygon" === l[h].type) {
                for (var u = l[h].exterior, c = l[h].interiors, d = 0; d < u.length; d++) K(u[d], u[d], s);
                for (var f = 0; f < (c ? c.length : 0); f++) for (d = 0; d < c[f].length; d++) K(c[f][d], c[f][d], s);
            }
            (r = this._rect).copy(o), this.center = [ r.x + r.width / 2, r.y + r.height / 2 ];
        },
        cloneShallow: function(t) {
            null == t && (t = this.name);
            var e = new Dl(t, this.geometries, this.center);
            return e._rect = this._rect, e.transformTo = null, e;
        }
    };
    var rx = function(t) {
        return kl(t), p(v(t.features, function(t) {
            return t.geometry && t.properties && t.geometry.coordinates.length > 0;
        }), function(t) {
            var e = t.properties, n = t.geometry, i = n.coordinates, r = [];
            "Polygon" === n.type && r.push({
                type: "polygon",
                exterior: i[0],
                interiors: i.slice(1)
            }), "MultiPolygon" === n.type && f(i, function(t) {
                t[0] && r.push({
                    type: "polygon",
                    exterior: t[0],
                    interiors: t.slice(1)
                });
            });
            var a = new Dl(e.name, r, e.cp);
            return a.properties = e, a;
        });
    }, ax = Ln(), ox = [ 0, 1 ], sx = function(t, e, n) {
        this.dim = t, this.scale = e, this._extent = n || [ 0, 0 ], this.inverse = !1, this.onBand = !1;
    };
    sx.prototype = {
        constructor: sx,
        contain: function(t) {
            var e = this._extent, n = Math.min(e[0], e[1]), i = Math.max(e[0], e[1]);
            return t >= n && i >= t;
        },
        containData: function(t) {
            return this.contain(this.dataToCoord(t));
        },
        getExtent: function() {
            return this._extent.slice();
        },
        getPixelPrecision: function(t) {
            return Pr(t || this.scale.getExtent(), this._extent);
        },
        setExtent: function(t, e) {
            var n = this._extent;
            n[0] = t, n[1] = e;
        },
        dataToCoord: function(t, e) {
            var n = this._extent, i = this.scale;
            return t = i.normalize(t), this.onBand && "ordinal" === i.type && (n = n.slice(), 
            ql(n, i.count())), Tr(t, ox, n, e);
        },
        coordToData: function(t, e) {
            var n = this._extent, i = this.scale;
            this.onBand && "ordinal" === i.type && (n = n.slice(), ql(n, i.count()));
            var r = Tr(t, n, ox, e);
            return this.scale.scale(r);
        },
        pointToData: function() {},
        getTicksCoords: function(t) {
            var e = (t = t || {}).tickModel || this.getTickModel(), n = Ol(this, e), i = p(n.ticks, function(t) {
                return {
                    coord: this.dataToCoord(t),
                    tickValue: t
                };
            }, this), r = e.get("alignWithLabel");
            return jl(this, i, n.tickCategoryInterval, r, t.clamp), i;
        },
        getViewLabels: function() {
            return Ll(this).labels;
        },
        getLabelModel: function() {
            return this.model.getModel("axisLabel");
        },
        getTickModel: function() {
            return this.model.getModel("axisTick");
        },
        getBandWidth: function() {
            var t = this._extent, e = this.scale.getExtent(), n = e[1] - e[0] + (this.onBand ? 1 : 0);
            0 === n && (n = 1);
            var i = Math.abs(t[1] - t[0]);
            return Math.abs(i) / n;
        },
        isHorizontal: null,
        getRotate: null,
        calculateCategoryInterval: function() {
            return Hl(this);
        }
    };
    var lx = rx, hx = {};
    f([ "map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone", "merge" ], function(t) {
        hx[t] = ud[t];
    });
    var ux = {};
    f([ "extendShape", "extendPath", "makePath", "makeImage", "mergePath", "resizePath", "createIcon", "setHoverStyle", "setLabelStyle", "setTextStyle", "setText", "getFont", "updateProps", "initProps", "getTransform", "clipPointsByRect", "clipRectByRect", "Group", "Image", "Text", "Circle", "Sector", "Ring", "Polygon", "Polyline", "Rect", "Line", "BezierCurve", "Arc", "IncrementalDisplayable", "CompoundPath", "LinearGradient", "RadialGradient", "BoundingRect" ], function(t) {
        ux[t] = Eg[t];
    });
    var cx = function(t) {
        this._axes = {}, this._dimList = [], this.name = t || "";
    };
    cx.prototype = {
        constructor: cx,
        type: "cartesian",
        getAxis: function(t) {
            return this._axes[t];
        },
        getAxes: function() {
            return p(this._dimList, Ul, this);
        },
        getAxesByScale: function(t) {
            return t = t.toLowerCase(), v(this.getAxes(), function(e) {
                return e.scale.type === t;
            });
        },
        addAxis: function(t) {
            var e = t.dim;
            this._axes[e] = t, this._dimList.push(e);
        },
        dataToCoord: function(t) {
            return this._dataCoordConvert(t, "dataToCoord");
        },
        coordToData: function(t) {
            return this._dataCoordConvert(t, "coordToData");
        },
        _dataCoordConvert: function(t, e) {
            for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {
                var a = n[r], o = this._axes[a];
                i[a] = o[e](t[a]);
            }
            return i;
        }
    }, $l.prototype = {
        constructor: $l,
        type: "cartesian2d",
        dimensions: [ "x", "y" ],
        getBaseAxis: function() {
            return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
        },
        containPoint: function(t) {
            var e = this.getAxis("x"), n = this.getAxis("y");
            return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]));
        },
        containData: function(t) {
            return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1]);
        },
        dataToPoint: function(t, e, n) {
            var i = this.getAxis("x"), r = this.getAxis("y");
            return n = n || [], n[0] = i.toGlobalCoord(i.dataToCoord(t[0])), n[1] = r.toGlobalCoord(r.dataToCoord(t[1])), 
            n;
        },
        clampData: function(t, e) {
            var n = this.getAxis("x").scale, i = this.getAxis("y").scale, r = n.getExtent(), a = i.getExtent(), o = n.parse(t[0]), s = i.parse(t[1]);
            return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])), 
            e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), e;
        },
        pointToData: function(t, e) {
            var n = this.getAxis("x"), i = this.getAxis("y");
            return e = e || [], e[0] = n.coordToData(n.toLocalCoord(t[0])), e[1] = i.coordToData(i.toLocalCoord(t[1])), 
            e;
        },
        getOtherAxis: function(t) {
            return this.getAxis("x" === t.dim ? "y" : "x");
        }
    }, u($l, cx);
    var dx = function(t, e, n, i, r) {
        sx.call(this, t, e, n), this.type = i || "value", this.position = r || "bottom";
    };
    dx.prototype = {
        constructor: dx,
        index: 0,
        getAxesOnZeroOf: null,
        model: null,
        isHorizontal: function() {
            var t = this.position;
            return "top" === t || "bottom" === t;
        },
        getGlobalExtent: function(t) {
            var e = this.getExtent();
            return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), 
            e;
        },
        getOtherAxis: function() {
            this.grid.getOtherAxis();
        },
        pointToData: function(t, e) {
            return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e);
        },
        toLocalCoord: null,
        toGlobalCoord: null
    }, u(dx, sx);
    var fx = {
        show: !0,
        zlevel: 0,
        z: 0,
        inverse: !1,
        name: "",
        nameLocation: "end",
        nameRotate: null,
        nameTruncate: {
            maxWidth: null,
            ellipsis: "...",
            placeholder: "."
        },
        nameTextStyle: {},
        nameGap: 15,
        silent: !1,
        triggerEvent: !1,
        tooltip: {
            show: !1
        },
        axisPointer: {},
        axisLine: {
            show: !0,
            onZero: !0,
            onZeroAxisIndex: null,
            lineStyle: {
                color: "#333",
                width: 1,
                type: "solid"
            },
            symbol: [ "none", "none" ],
            symbolSize: [ 10, 15 ]
        },
        axisTick: {
            show: !0,
            inside: !1,
            length: 5,
            lineStyle: {
                width: 1
            }
        },
        axisLabel: {
            show: !0,
            inside: !1,
            rotate: 0,
            showMinLabel: null,
            showMaxLabel: null,
            margin: 8,
            fontSize: 12
        },
        splitLine: {
            show: !0,
            lineStyle: {
                color: [ "#ccc" ],
                width: 1,
                type: "solid"
            }
        },
        splitArea: {
            show: !1,
            areaStyle: {
                color: [ "rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)" ]
            }
        }
    }, px = {};
    px.categoryAxis = r({
        boundaryGap: !0,
        deduplication: null,
        splitLine: {
            show: !1
        },
        axisTick: {
            alignWithLabel: !1,
            interval: "auto"
        },
        axisLabel: {
            interval: "auto"
        }
    }, fx), px.valueAxis = r({
        boundaryGap: [ 0, 0 ],
        splitNumber: 5
    }, fx), px.timeAxis = s({
        scale: !0,
        min: "dataMin",
        max: "dataMax"
    }, px.valueAxis), px.logAxis = s({
        scale: !0,
        logBase: 10
    }, px.valueAxis);
    var gx = [ "value", "category", "time", "log" ], vx = function(t, e, n, i) {
        f(gx, function(o) {
            e.extend({
                type: t + "Axis." + o,
                mergeDefaultAndTheme: function(e, i) {
                    var a = this.layoutMode, s = a ? $r(e) : {};
                    r(e, i.getTheme().get(o + "Axis")), r(e, this.getDefaultOption()), e.type = n(t, e), 
                    a && Ur(e, s, a);
                },
                optionUpdated: function() {
                    "category" === this.option.type && (this.__ordinalMeta = Qs.createByAxisModel(this));
                },
                getCategories: function(t) {
                    var e = this.option;
                    return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0;
                },
                getOrdinalMeta: function() {
                    return this.__ordinalMeta;
                },
                defaultOption: a([ {}, px[o + "Axis"], i ], !0)
            });
        }), sv.registerSubTypeDefaulter(t + "Axis", y(n, t));
    }, mx = sv.extend({
        type: "cartesian2dAxis",
        axis: null,
        init: function() {
            mx.superApply(this, "init", arguments), this.resetRange();
        },
        mergeOption: function() {
            mx.superApply(this, "mergeOption", arguments), this.resetRange();
        },
        restoreData: function() {
            mx.superApply(this, "restoreData", arguments), this.resetRange();
        },
        getCoordSysModel: function() {
            return this.ecModel.queryComponents({
                mainType: "grid",
                index: this.option.gridIndex,
                id: this.option.gridId
            })[0];
        }
    });
    r(mx.prototype, qy);
    var yx = {
        offset: 0
    };
    vx("x", mx, Kl, yx), vx("y", mx, Kl, yx), sv.extend({
        type: "grid",
        dependencies: [ "xAxis", "yAxis" ],
        layoutMode: "box",
        coordinateSystem: null,
        defaultOption: {
            show: !1,
            zlevel: 0,
            z: 0,
            left: "10%",
            top: 60,
            right: "10%",
            bottom: 60,
            containLabel: !1,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "#ccc"
        }
    });
    var xx = Jl.prototype;
    xx.type = "grid", xx.axisPointerEnabled = !0, xx.getRect = function() {
        return this._rect;
    }, xx.update = function(t, e) {
        var n = this._axesMap;
        this._updateScale(t, this.model), f(n.x, function(t) {
            yl(t.scale, t.model);
        }), f(n.y, function(t) {
            yl(t.scale, t.model);
        });
        var i = {};
        f(n.x, function(t) {
            th(n, "y", t, i);
        }), f(n.y, function(t) {
            th(n, "x", t, i);
        }), this.resize(this.model, e);
    }, xx.resize = function(t, e, n) {
        function i() {
            f(a, function(t) {
                var e = t.isHorizontal(), n = e ? [ 0, r.width ] : [ 0, r.height ], i = t.inverse ? 1 : 0;
                t.setExtent(n[i], n[1 - i]), nh(t, e ? r.x : r.y);
            });
        }
        var r = jr(t.getBoxLayoutParams(), {
            width: e.getWidth(),
            height: e.getHeight()
        });
        this._rect = r;
        var a = this._axesList;
        i(), !n && t.get("containLabel") && (f(a, function(t) {
            if (!t.model.get("axisLabel.inside")) {
                var e = Ml(t);
                if (e) {
                    var n = t.isHorizontal() ? "height" : "width", i = t.model.get("axisLabel.margin");
                    r[n] -= e[n] + i, "top" === t.position ? r.y += e.height + i : "left" === t.position && (r.x += e.width + i);
                }
            }
        }), i());
    }, xx.getAxis = function(t, e) {
        var n = this._axesMap[t];
        if (null != n) {
            if (null == e) for (var i in n) if (n.hasOwnProperty(i)) return n[i];
            return n[e];
        }
    }, xx.getAxes = function() {
        return this._axesList.slice();
    }, xx.getCartesian = function(t, e) {
        if (null != t && null != e) {
            var n = "x" + t + "y" + e;
            return this._coordsMap[n];
        }
        b(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
        for (var i = 0, r = this._coordsList; i < r.length; i++) if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i];
    }, xx.getCartesians = function() {
        return this._coordsList.slice();
    }, xx.convertToPixel = function(t, e, n) {
        var i = this._findConvertTarget(t, e);
        return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null;
    }, xx.convertFromPixel = function(t, e, n) {
        var i = this._findConvertTarget(t, e);
        return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null;
    }, xx._findConvertTarget = function(t, e) {
        var n, i, r = e.seriesModel, a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0], o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0], s = e.gridModel, l = this._coordsList;
        return r ? (n = r.coordinateSystem, h(l, n) < 0 && (n = null)) : a && o ? n = this.getCartesian(a.componentIndex, o.componentIndex) : a ? i = this.getAxis("x", a.componentIndex) : o ? i = this.getAxis("y", o.componentIndex) : s && s.coordinateSystem === this && (n = this._coordsList[0]), 
        {
            cartesian: n,
            axis: i
        };
    }, xx.containPoint = function(t) {
        var e = this._coordsList[0];
        return e ? e.containPoint(t) : void 0;
    }, xx._initCartesian = function(t, e) {
        function n(n) {
            return function(o, s) {
                if (Ql(o, t, e)) {
                    var l = o.get("position");
                    "x" === n ? "top" !== l && "bottom" !== l && (l = "bottom", i[l] && (l = "top" === l ? "bottom" : "top")) : "left" !== l && "right" !== l && (l = "left", 
                    i[l] && (l = "left" === l ? "right" : "left")), i[l] = !0;
                    var h = new dx(n, xl(o), [ 0, 0 ], o.get("type"), l), u = "category" === h.type;
                    h.onBand = u && o.get("boundaryGap"), h.inverse = o.get("inverse"), o.axis = h, 
                    h.model = o, h.grid = this, h.index = s, this._axesList.push(h), r[n][s] = h, a[n]++;
                }
            };
        }
        var i = {
            left: !1,
            right: !1,
            top: !1,
            bottom: !1
        }, r = {
            x: {},
            y: {}
        }, a = {
            x: 0,
            y: 0
        };
        return e.eachComponent("xAxis", n("x"), this), e.eachComponent("yAxis", n("y"), this), 
        a.x && a.y ? (this._axesMap = r, void f(r.x, function(e, n) {
            f(r.y, function(i, r) {
                var a = "x" + n + "y" + r, o = new $l(a);
                o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(e), 
                o.addAxis(i);
            }, this);
        }, this)) : (this._axesMap = {}, void (this._axesList = []));
    }, xx._updateScale = function(t, e) {
        function n(t, e) {
            f(t.mapDimension(e.dim, !0), function(n) {
                e.scale.unionExtentFromData(t, qs(t, n));
            });
        }
        f(this._axesList, function(t) {
            t.scale.setExtent(1 / 0, -1 / 0);
        }), t.eachSeries(function(i) {
            if (rh(i)) {
                var r = ih(i), a = r[0], o = r[1];
                if (!Ql(a, e, t) || !Ql(o, e, t)) return;
                var s = this.getCartesian(a.componentIndex, o.componentIndex), l = i.getData(), h = s.getAxis("x"), u = s.getAxis("y");
                "list" === l.type && (n(l, h), n(l, u));
            }
        }, this);
    }, xx.getTooltipAxes = function(t) {
        var e = [], n = [];
        return f(this.getCartesians(), function(i) {
            var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(), a = i.getOtherAxis(r);
            h(e, r) < 0 && e.push(r), h(n, a) < 0 && n.push(a);
        }), {
            baseAxes: e,
            otherAxes: n
        };
    };
    var _x = [ "xAxis", "yAxis" ];
    Jl.create = function(t, e) {
        var n = [];
        return t.eachComponent("grid", function(i, r) {
            var a = new Jl(i, t, e);
            a.name = "grid_" + r, a.resize(i, e, !0), i.coordinateSystem = a, n.push(a);
        }), t.eachSeries(function(t) {
            if (rh(t)) {
                var e = ih(t), n = e[0], i = e[1], r = n.getCoordSysModel().coordinateSystem;
                t.coordinateSystem = r.getCartesian(n.componentIndex, i.componentIndex);
            }
        }), n;
    }, Jl.dimensions = Jl.prototype.dimensions = $l.prototype.dimensions, ba.register("cartesian2d", Jl), 
    qv.extend({
        type: "series.__base_bar__",
        getInitialData: function() {
            return js(this.getSource(), this);
        },
        getMarkerPosition: function(t) {
            var e = this.coordinateSystem;
            if (e) {
                var n = e.dataToPoint(e.clampData(t)), i = this.getData(), r = i.getLayout("offset"), a = i.getLayout("size");
                return n[e.getBaseAxis().isHorizontal() ? 0 : 1] += r + a / 2, n;
            }
            return [ NaN, NaN ];
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            barMinHeight: 0,
            barMinAngle: 0,
            large: !1,
            largeThreshold: 400,
            progressive: 3e3,
            progressiveChunkMode: "mod",
            itemStyle: {},
            emphasis: {}
        }
    }).extend({
        type: "series.bar",
        dependencies: [ "grid", "polar" ],
        brushSelector: "rect",
        getProgressive: function() {
            return !!this.get("large") && this.get("progressive");
        },
        getProgressiveThreshold: function() {
            var t = this.get("progressiveThreshold"), e = this.get("largeThreshold");
            return e > t && (t = e), t;
        }
    });
    var bx = ip([ [ "fill", "color" ], [ "stroke", "borderColor" ], [ "lineWidth", "borderWidth" ], [ "stroke", "barBorderColor" ], [ "lineWidth", "barBorderWidth" ], [ "opacity" ], [ "shadowBlur" ], [ "shadowOffsetX" ], [ "shadowOffsetY" ], [ "shadowColor" ] ]), Mx = {
        getBarItemStyle: function(t) {
            var e = bx(this, t);
            if (this.getBorderLineDash) {
                var n = this.getBorderLineDash();
                n && (e.lineDash = n);
            }
            return e;
        }
    }, Sx = [ "itemStyle", "barBorderWidth" ];
    o(wr.prototype, Mx), Ss({
        type: "bar",
        render: function(t, e, n) {
            this._updateDrawMode(t);
            var i = t.get("coordinateSystem");
            return ("cartesian2d" === i || "polar" === i) && (this._isLargeDraw ? this._renderLarge(t, e, n) : this._renderNormal(t, e, n)), 
            this.group;
        },
        incrementalPrepareRender: function(t) {
            this._clear(), this._updateDrawMode(t);
        },
        incrementalRender: function(t, e) {
            this._incrementalRenderLarge(t, e);
        },
        _updateDrawMode: function(t) {
            var e = t.pipelineContext.large;
            (null == this._isLargeDraw || e ^ this._isLargeDraw) && (this._isLargeDraw = e, 
            this._clear());
        },
        _renderNormal: function(t) {
            var e, n = this.group, i = t.getData(), r = this._data, a = t.coordinateSystem, o = a.getBaseAxis();
            "cartesian2d" === a.type ? e = o.isHorizontal() : "polar" === a.type && (e = "angle" === o.dim);
            var s = t.isAnimationEnabled() ? t : null;
            i.diff(r).add(function(r) {
                if (i.hasValue(r)) {
                    var o = i.getItemModel(r), l = Tx[a.type](i, r, o), h = Ix[a.type](i, r, o, l, e, s);
                    i.setItemGraphicEl(r, h), n.add(h), uh(h, i, r, o, l, t, e, "polar" === a.type);
                }
            }).update(function(o, l) {
                var h = r.getItemGraphicEl(l);
                if (i.hasValue(o)) {
                    var u = i.getItemModel(o), c = Tx[a.type](i, o, u);
                    h ? pr(h, {
                        shape: c
                    }, s, o) : h = Ix[a.type](i, o, u, c, e, s, !0), i.setItemGraphicEl(o, h), n.add(h), 
                    uh(h, i, o, u, c, t, e, "polar" === a.type);
                } else n.remove(h);
            }).remove(function(t) {
                var e = r.getItemGraphicEl(t);
                "cartesian2d" === a.type ? e && lh(t, s, e) : e && hh(t, s, e);
            }).execute(), this._data = i;
        },
        _renderLarge: function(t) {
            this._clear(), dh(t, this.group);
        },
        _incrementalRenderLarge: function(t, e) {
            dh(e, this.group, !0);
        },
        dispose: N,
        remove: function(t) {
            this._clear(t);
        },
        _clear: function(t) {
            var e = this.group, n = this._data;
            t && t.get("animation") && n && !this._isLargeDraw ? n.eachItemGraphicEl(function(e) {
                "sector" === e.type ? hh(e.dataIndex, t, e) : lh(e.dataIndex, t, e);
            }) : e.removeAll(), this._data = null;
        }
    });
    var Ix = {
        cartesian2d: function(t, e, n, i, r, a, s) {
            var l = new _g({
                shape: o({}, i)
            });
            if (a) {
                var h = l.shape, u = r ? "height" : "width", c = {};
                h[u] = 0, c[u] = i[u], Eg[s ? "updateProps" : "initProps"](l, {
                    shape: c
                }, a, e);
            }
            return l;
        },
        polar: function(t, e, n, i, r, a, o) {
            var l = i.startAngle < i.endAngle, h = new pg({
                shape: s({
                    clockwise: l
                }, i)
            });
            if (a) {
                var u = h.shape, c = r ? "r" : "endAngle", d = {};
                u[c] = r ? 0 : i.startAngle, d[c] = i[c], Eg[o ? "updateProps" : "initProps"](h, {
                    shape: d
                }, a, e);
            }
            return h;
        }
    }, Tx = {
        cartesian2d: function(t, e, n) {
            var i = t.getItemLayout(e), r = ch(n, i), a = i.width > 0 ? 1 : -1, o = i.height > 0 ? 1 : -1;
            return {
                x: i.x + a * r / 2,
                y: i.y + o * r / 2,
                width: i.width - a * r,
                height: i.height - o * r
            };
        },
        polar: function(t, e) {
            var n = t.getItemLayout(e);
            return {
                cx: n.cx,
                cy: n.cy,
                r0: n.r0,
                r: n.r,
                startAngle: n.startAngle,
                endAngle: n.endAngle
            };
        }
    }, Cx = Si.extend({
        type: "largeBar",
        shape: {
            points: []
        },
        buildPath: function(t, e) {
            for (var n = e.points, i = this.__startPoint, r = this.__valueIdx, a = 0; a < n.length; a += 2) i[this.__valueIdx] = n[a + r], 
            t.moveTo(i[0], i[1]), t.lineTo(n[a], n[a + 1]);
        }
    }), Ax = Math.PI, Dx = function(t, e) {
        this.opt = e, this.axisModel = t, s(e, {
            labelOffset: 0,
            nameDirection: 1,
            tickDirection: 1,
            labelDirection: 1,
            silent: !0
        }), this.group = new rf();
        var n = new rf({
            position: e.position.slice(),
            rotation: e.rotation
        });
        n.updateTransform(), this._transform = n.transform, this._dumbGroup = n;
    };
    Dx.prototype = {
        constructor: Dx,
        hasBuilder: function(t) {
            return !!kx[t];
        },
        add: function(t) {
            kx[t].call(this);
        },
        getGroup: function() {
            return this.group;
        }
    };
    var kx = {
        axisLine: function() {
            var t = this.opt, e = this.axisModel;
            if (e.get("axisLine.show")) {
                var n = this.axisModel.axis.getExtent(), i = this._transform, r = [ n[0], 0 ], a = [ n[1], 0 ];
                i && (K(r, r, i), K(a, a, i));
                var s = o({
                    lineCap: "round"
                }, e.getModel("axisLine.lineStyle").getLineStyle());
                this.group.add(new wg(Fi({
                    anid: "line",
                    shape: {
                        x1: r[0],
                        y1: r[1],
                        x2: a[0],
                        y2: a[1]
                    },
                    style: s,
                    strokeContainThreshold: t.strokeContainThreshold || 5,
                    silent: !0,
                    z2: 1
                })));
                var l = e.get("axisLine.symbol"), h = e.get("axisLine.symbolSize"), u = e.get("axisLine.symbolOffset") || 0;
                if ("number" == typeof u && (u = [ u, u ]), null != l) {
                    "string" == typeof l && (l = [ l, l ]), ("string" == typeof h || "number" == typeof h) && (h = [ h, h ]);
                    var c = h[0], d = h[1];
                    f([ {
                        rotate: t.rotation + Math.PI / 2,
                        offset: u[0],
                        r: 0
                    }, {
                        rotate: t.rotation - Math.PI / 2,
                        offset: u[1],
                        r: Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1]))
                    } ], function(e, n) {
                        if ("none" !== l[n] && null != l[n]) {
                            var i = Tl(l[n], -c / 2, -d / 2, c, d, s.stroke, !0), a = e.r + e.offset, o = [ r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation) ];
                            i.attr({
                                rotation: e.rotate,
                                position: o,
                                silent: !0
                            }), this.group.add(i);
                        }
                    }, this);
                }
            }
        },
        axisTickLabel: function() {
            var t = this.axisModel, e = this.opt, n = wh(this, t, e);
            mh(t, bh(this, t, e), n);
        },
        axisName: function() {
            var t = this.opt, e = this.axisModel, n = C(t.axisName, e.get("name"));
            if (n) {
                var i, r = e.get("nameLocation"), a = t.nameDirection, s = e.getModel("nameTextStyle"), l = e.get("nameGap") || 0, h = this.axisModel.axis.getExtent(), u = h[0] > h[1] ? -1 : 1, c = [ "start" === r ? h[0] - u * l : "end" === r ? h[1] + u * l : (h[0] + h[1]) / 2, _h(r) ? t.labelOffset + a * l : 0 ], d = e.get("nameRotate");
                null != d && (d = d * Ax / 180);
                var f;
                _h(r) ? i = Px(t.rotation, null != d ? d : t.rotation, a) : (i = gh(t, r, d || 0, h), 
                null != (f = t.axisNameAvailableWidth) && (f = Math.abs(f / Math.sin(i.rotation)), 
                !isFinite(f) && (f = null)));
                var p = s.getFont(), g = e.get("nameTruncate", !0) || {}, v = g.ellipsis, m = C(t.nameTruncateMaxWidth, g.maxWidth, f), y = null != v && null != m ? Qg(n, m, p, v, {
                    minChar: 2,
                    placeholder: g.placeholder
                }) : n, x = e.get("tooltip", !0), _ = e.mainType, w = {
                    componentType: _,
                    name: n,
                    $vars: [ "name" ]
                };
                w[_ + "Index"] = e.componentIndex;
                var b = new ug({
                    anid: "name",
                    __fullText: n,
                    __truncatedText: y,
                    position: c,
                    rotation: i.rotation,
                    silent: vh(e),
                    z2: 1,
                    tooltip: x && x.show ? o({
                        content: n,
                        formatter: function() {
                            return n;
                        },
                        formatterParams: w
                    }, x) : null
                });
                ar(b.style, s, {
                    text: y,
                    textFont: p,
                    textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
                    textAlign: i.textAlign,
                    textVerticalAlign: i.textVerticalAlign
                }), e.get("triggerEvent") && (b.eventData = ph(e), b.eventData.targetType = "axisName", 
                b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), 
                b.decomposeTransform();
            }
        }
    }, Px = Dx.innerTextLayout = function(t, e, n) {
        var i, r, a = Or(e - t);
        return zr(a) ? (r = n > 0 ? "top" : "bottom", i = "center") : zr(a - Ax) ? (r = n > 0 ? "bottom" : "top", 
        i = "center") : (r = "middle", i = a > 0 && Ax > a ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), 
        {
            rotation: a,
            textAlign: i,
            textVerticalAlign: r
        };
    }, Lx = f, Ox = y, zx = bs({
        type: "axis",
        _axisPointer: null,
        axisPointerClass: null,
        render: function(t, e, n, i) {
            this.axisPointerClass && Dh(t), zx.superApply(this, "render", arguments), zh(this, t, 0, n, 0, !0);
        },
        updateAxisPointer: function(t, e, n, i) {
            zh(this, t, 0, n, 0, !1);
        },
        remove: function(t, e) {
            var n = this._axisPointer;
            n && n.remove(e), zx.superApply(this, "remove", arguments);
        },
        dispose: function(t, e) {
            Bh(this, e), zx.superApply(this, "dispose", arguments);
        }
    }), Bx = [];
    zx.registerAxisPointerClass = function(t, e) {
        Bx[t] = e;
    }, zx.getAxisPointerClass = function(t) {
        return t && Bx[t];
    };
    var Ex = [ "axisLine", "axisTickLabel", "axisName" ], Rx = [ "splitArea", "splitLine" ], Nx = zx.extend({
        type: "cartesianAxis",
        axisPointerClass: "CartesianAxisPointer",
        render: function(t, e, n, i) {
            this.group.removeAll();
            var r = this._axisGroup;
            if (this._axisGroup = new rf(), this.group.add(this._axisGroup), t.get("show")) {
                var a = t.getCoordSysModel(), o = Eh(a, t), s = new Dx(t, o);
                f(Ex, s.add, s), this._axisGroup.add(s.getGroup()), f(Rx, function(e) {
                    t.get(e + ".show") && this["_" + e](t, a);
                }, this), xr(r, this._axisGroup, t), Nx.superCall(this, "render", t, e, n, i);
            }
        },
        remove: function() {
            this._splitAreaColors = null;
        },
        _splitLine: function(t, e) {
            var n = t.axis;
            if (!n.scale.isBlank()) {
                var i = t.getModel("splitLine"), r = i.getModel("lineStyle"), a = r.get("color");
                a = x(a) ? a : [ a ];
                for (var o = e.coordinateSystem.getRect(), l = n.isHorizontal(), h = 0, u = n.getTicksCoords({
                    tickModel: i
                }), c = [], d = [], f = r.getLineStyle(), p = 0; p < u.length; p++) {
                    var g = n.toGlobalCoord(u[p].coord);
                    l ? (c[0] = g, c[1] = o.y, d[0] = g, d[1] = o.y + o.height) : (c[0] = o.x, c[1] = g, 
                    d[0] = o.x + o.width, d[1] = g);
                    var v = h++ % a.length, m = u[p].tickValue;
                    this._axisGroup.add(new wg(Fi({
                        anid: null != m ? "line_" + u[p].tickValue : null,
                        shape: {
                            x1: c[0],
                            y1: c[1],
                            x2: d[0],
                            y2: d[1]
                        },
                        style: s({
                            stroke: a[v]
                        }, f),
                        silent: !0
                    })));
                }
            }
        },
        _splitArea: function(t, e) {
            var n = t.axis;
            if (!n.scale.isBlank()) {
                var i = t.getModel("splitArea"), r = i.getModel("areaStyle"), a = r.get("color"), o = e.coordinateSystem.getRect(), l = n.getTicksCoords({
                    tickModel: i,
                    clamp: !0
                });
                if (l.length) {
                    var h = a.length, u = this._splitAreaColors, c = R(), d = 0;
                    if (u) for (v = 0; v < l.length; v++) {
                        var f = u.get(l[v].tickValue);
                        if (null != f) {
                            d = (f + (h - 1) * v) % h;
                            break;
                        }
                    }
                    var p = n.toGlobalCoord(l[0].coord), g = r.getAreaStyle();
                    a = x(a) ? a : [ a ];
                    for (var v = 1; v < l.length; v++) {
                        var m, y, _, w, b = n.toGlobalCoord(l[v].coord);
                        n.isHorizontal() ? (m = p, y = o.y, _ = b - m, w = o.height, p = m + _) : (m = o.x, 
                        y = p, _ = o.width, w = b - y, p = y + w);
                        var M = l[v - 1].tickValue;
                        null != M && c.set(M, d), this._axisGroup.add(new _g({
                            anid: null != M ? "area_" + M : null,
                            shape: {
                                x: m,
                                y: y,
                                width: _,
                                height: w
                            },
                            style: s({
                                fill: a[d]
                            }, g),
                            silent: !0
                        })), d = (d + 1) % h;
                    }
                    this._splitAreaColors = c;
                }
            }
        }
    });
    Nx.extend({
        type: "xAxis"
    }), Nx.extend({
        type: "yAxis"
    }), bs({
        type: "grid",
        render: function(t) {
            this.group.removeAll(), t.get("show") && this.group.add(new _g({
                shape: t.coordinateSystem.getRect(),
                style: s({
                    fill: t.get("backgroundColor")
                }, t.getItemStyle()),
                silent: !0,
                z2: -1
            }));
        }
    }), ps(function(t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {});
    }), ms(y(function(t, e) {
        var n = ll(t, e), i = hl(n), r = {};
        f(n, function(t) {
            var e = t.getData(), n = t.coordinateSystem, a = n.getBaseAxis(), o = ol(t), s = i[sl(a)][o], l = s.offset, h = s.width, u = n.getOtherAxis(a), c = t.get("barMinHeight") || 0;
            r[o] = r[o] || [], e.setLayout({
                offset: l,
                size: h
            });
            for (var d = e.mapDimension(u.dim), f = e.mapDimension(a.dim), p = Ys(e, d), g = u.isHorizontal(), v = pl(a, u, p), m = 0, y = e.count(); y > m; m++) {
                var x = e.get(d, m), _ = e.get(f, m);
                if (!isNaN(x)) {
                    var w = x >= 0 ? "p" : "n", b = v;
                    p && (r[o][_] || (r[o][_] = {
                        p: v,
                        n: v
                    }), b = r[o][_][w]);
                    var M, S, I, T;
                    if (g) M = b, S = (C = n.dataToPoint([ x, _ ]))[1] + l, I = C[0] - v, T = h, Math.abs(I) < c && (I = (0 > I ? -1 : 1) * c), 
                    p && (r[o][_][w] += I); else {
                        var C = n.dataToPoint([ _, x ]);
                        M = C[0] + l, S = b, I = h, T = C[1] - v, Math.abs(T) < c && (T = (0 >= T ? -1 : 1) * c), 
                        p && (r[o][_][w] += T);
                    }
                    e.setItemLayout(m, {
                        x: M,
                        y: S,
                        width: I,
                        height: T
                    });
                }
            }
        }, this);
    }, "bar")), ms(Dy), ys({
        seriesType: "bar",
        reset: function(t) {
            t.getData().setVisual("legendSymbol", "roundRect");
        }
    }), qv.extend({
        type: "series.line",
        dependencies: [ "grid", "polar" ],
        getInitialData: function() {
            return js(this.getSource(), this);
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            hoverAnimation: !0,
            clipOverflow: !0,
            label: {
                position: "top"
            },
            lineStyle: {
                width: 2,
                type: "solid"
            },
            step: !1,
            smooth: !1,
            smoothMonotone: null,
            symbol: "emptyCircle",
            symbolSize: 4,
            symbolRotate: null,
            showSymbol: !0,
            showAllSymbol: "auto",
            connectNulls: !1,
            sampling: "none",
            animationEasing: "linear",
            progressive: 0,
            hoverLayerThreshold: 1 / 0
        }
    });
    var Fx = Rh.prototype, Vx = Rh.getSymbolSize = function(t, e) {
        var n = t.getItemVisual(e, "symbolSize");
        return n instanceof Array ? n.slice() : [ +n, +n ];
    };
    Fx._createSymbol = function(t, e, n, i, r) {
        this.removeAll();
        var a = Tl(t, -1, -1, 2, 2, e.getItemVisual(n, "color"), r);
        a.attr({
            z2: 100,
            culling: !0,
            scale: Nh(i)
        }), a.drift = Fh, this._symbolType = t, this.add(a);
    }, Fx.stopSymbolAnimation = function(t) {
        this.childAt(0).stopAnimation(t);
    }, Fx.getSymbolPath = function() {
        return this.childAt(0);
    }, Fx.getScale = function() {
        return this.childAt(0).scale;
    }, Fx.highlight = function() {
        this.childAt(0).trigger("emphasis");
    }, Fx.downplay = function() {
        this.childAt(0).trigger("normal");
    }, Fx.setZ = function(t, e) {
        var n = this.childAt(0);
        n.zlevel = t, n.z = e;
    }, Fx.setDraggable = function(t) {
        var e = this.childAt(0);
        e.draggable = t, e.cursor = t ? "move" : "pointer";
    }, Fx.updateData = function(t, e, n) {
        this.silent = !1;
        var i = t.getItemVisual(e, "symbol") || "circle", r = t.hostModel, a = Vx(t, e), o = i !== this._symbolType;
        if (o) {
            var s = t.getItemVisual(e, "symbolKeepAspect");
            this._createSymbol(i, t, e, a, s);
        } else (l = this.childAt(0)).silent = !1, pr(l, {
            scale: Nh(a)
        }, r, e);
        if (this._updateCommon(t, e, a, n), o) {
            var l = this.childAt(0), h = n && n.fadeIn, u = {
                scale: l.scale.slice()
            };
            h && (u.style = {
                opacity: l.style.opacity
            }), l.scale = [ 0, 0 ], h && (l.style.opacity = 0), gr(l, u, r, e);
        }
        this._seriesModel = r;
    };
    var Wx = [ "itemStyle" ], Hx = [ "emphasis", "itemStyle" ], Gx = [ "label" ], Zx = [ "emphasis", "label" ];
    Fx._updateCommon = function(t, e, n, i) {
        var r = this.childAt(0), a = t.hostModel, s = t.getItemVisual(e, "color");
        "image" !== r.type && r.useStyle({
            strokeNoScale: !0
        });
        var l = i && i.itemStyle, h = i && i.hoverItemStyle, u = i && i.symbolRotate, c = i && i.symbolOffset, d = i && i.labelModel, f = i && i.hoverLabelModel, p = i && i.hoverAnimation, g = i && i.cursorStyle;
        if (!i || t.hasItemOption) {
            var v = i && i.itemModel ? i.itemModel : t.getItemModel(e);
            l = v.getModel(Wx).getItemStyle([ "color" ]), h = v.getModel(Hx).getItemStyle(), 
            u = v.getShallow("symbolRotate"), c = v.getShallow("symbolOffset"), d = v.getModel(Gx), 
            f = v.getModel(Zx), p = v.getShallow("hoverAnimation"), g = v.getShallow("cursor");
        } else h = o({}, h);
        var m = r.style;
        r.attr("rotation", (u || 0) * Math.PI / 180 || 0), c && r.attr("position", [ Cr(c[0], n[0]), Cr(c[1], n[1]) ]), 
        g && r.attr("cursor", g), r.setColor(s, i && i.symbolInnerColor), r.setStyle(l);
        var y = t.getItemVisual(e, "opacity");
        null != y && (m.opacity = y);
        var x = t.getItemVisual(e, "liftZ"), _ = r.__z2Origin;
        null != x ? null == _ && (r.__z2Origin = r.z2, r.z2 += x) : null != _ && (r.z2 = _, 
        r.__z2Origin = null);
        var w = i && i.useNameLabel;
        rr(m, h, d, f, {
            labelFetcher: a,
            labelDataIndex: e,
            defaultText: function(e) {
                return w ? t.getName(e) : ah(t, e);
            },
            isRectText: !0,
            autoColor: s
        }), r.off("mouseover").off("mouseout").off("emphasis").off("normal"), r.hoverStyle = h, 
        nr(r), r.__symbolOriginalScale = Nh(n), p && a.isAnimationEnabled() && r.on("mouseover", Vh).on("mouseout", Wh).on("emphasis", Hh).on("normal", Gh);
    }, Fx.fadeOut = function(t, e) {
        var n = this.childAt(0);
        this.silent = n.silent = !0, !(e && e.keepLabel) && (n.style.text = null), pr(n, {
            style: {
                opacity: 0
            },
            scale: [ 0, 0 ]
        }, this._seriesModel, this.dataIndex, t);
    }, u(Rh, rf);
    var Xx = Zh.prototype;
    Xx.updateData = function(t, e) {
        e = Yh(e);
        var n = this.group, i = t.hostModel, r = this._data, a = this._symbolCtor, o = qh(t);
        r || n.removeAll(), t.diff(r).add(function(i) {
            var r = t.getItemLayout(i);
            if (Xh(t, r, i, e)) {
                var s = new a(t, i, o);
                s.attr("position", r), t.setItemGraphicEl(i, s), n.add(s);
            }
        }).update(function(s, l) {
            var h = r.getItemGraphicEl(l), u = t.getItemLayout(s);
            return Xh(t, u, s, e) ? (h ? (h.updateData(t, s, o), pr(h, {
                position: u
            }, i)) : (h = new a(t, s)).attr("position", u), n.add(h), void t.setItemGraphicEl(s, h)) : void n.remove(h);
        }).remove(function(t) {
            var e = r.getItemGraphicEl(t);
            e && e.fadeOut(function() {
                n.remove(e);
            });
        }).execute(), this._data = t;
    }, Xx.isPersistent = function() {
        return !0;
    }, Xx.updateLayout = function() {
        var t = this._data;
        t && t.eachItemGraphicEl(function(e, n) {
            var i = t.getItemLayout(n);
            e.attr("position", i);
        });
    }, Xx.incrementalPrepareUpdate = function(t) {
        this._seriesScope = qh(t), this._data = null, this.group.removeAll();
    }, Xx.incrementalUpdate = function(t, e, n) {
        n = Yh(n);
        for (var i = t.start; i < t.end; i++) {
            var r = e.getItemLayout(i);
            if (Xh(e, r, i, n)) {
                var a = new this._symbolCtor(e, i, this._seriesScope);
                a.traverse(function(t) {
                    t.isGroup || (t.incremental = t.useHoverLayer = !0);
                }), a.attr("position", r), this.group.add(a), e.setItemGraphicEl(i, a);
            }
        }
    }, Xx.remove = function(t) {
        var e = this.group, n = this._data;
        n && t ? n.eachItemGraphicEl(function(t) {
            t.fadeOut(function() {
                e.remove(t);
            });
        }) : e.removeAll();
    };
    var Yx = function(t, e, n, i, r, a, o, s) {
        for (var l = Kh(t, e), h = [], u = [], c = [], d = [], f = [], p = [], g = [], v = jh(r, e, o), m = jh(a, t, s), y = 0; y < l.length; y++) {
            var x = l[y], _ = !0;
            switch (x.cmd) {
              case "=":
                var w = t.getItemLayout(x.idx), b = e.getItemLayout(x.idx1);
                (isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), h.push(w), u.push(b), c.push(n[x.idx]), 
                d.push(i[x.idx1]), g.push(e.getRawIndex(x.idx1));
                break;

              case "+":
                M = x.idx;
                h.push(r.dataToPoint([ e.get(v.dataDimsForPoint[0], M), e.get(v.dataDimsForPoint[1], M) ])), 
                u.push(e.getItemLayout(M).slice()), c.push($h(v, r, e, M)), d.push(i[M]), g.push(e.getRawIndex(M));
                break;

              case "-":
                var M = x.idx, S = t.getRawIndex(M);
                S !== M ? (h.push(t.getItemLayout(M)), u.push(a.dataToPoint([ t.get(m.dataDimsForPoint[0], M), t.get(m.dataDimsForPoint[1], M) ])), 
                c.push(n[M]), d.push($h(m, a, t, M)), g.push(S)) : _ = !1;
            }
            _ && (f.push(x), p.push(p.length));
        }
        p.sort(function(t, e) {
            return g[t] - g[e];
        });
        for (var I = [], T = [], C = [], A = [], D = [], y = 0; y < p.length; y++) {
            M = p[y];
            I[y] = h[M], T[y] = u[M], C[y] = c[M], A[y] = d[M], D[y] = f[M];
        }
        return {
            current: I,
            next: T,
            stackedOnCurrent: C,
            stackedOnNext: A,
            status: D
        };
    }, qx = Q, jx = J, Ux = G, $x = V, Kx = [], Qx = [], Jx = [], t_ = Si.extend({
        type: "ec-polyline",
        shape: {
            points: [],
            smooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1
        },
        style: {
            fill: null,
            stroke: "#000"
        },
        brush: fg(Si.prototype.brush),
        buildPath: function(t, e) {
            var n = e.points, i = 0, r = n.length, a = nu(n, e.smoothConstraint);
            if (e.connectNulls) {
                for (;r > 0 && Qh(n[r - 1]); r--) ;
                for (;r > i && Qh(n[i]); i++) ;
            }
            for (;r > i; ) i += Jh(t, n, i, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1;
        }
    }), e_ = Si.extend({
        type: "ec-polygon",
        shape: {
            points: [],
            stackedOnPoints: [],
            smooth: 0,
            stackedOnSmooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1
        },
        brush: fg(Si.prototype.brush),
        buildPath: function(t, e) {
            var n = e.points, i = e.stackedOnPoints, r = 0, a = n.length, o = e.smoothMonotone, s = nu(n, e.smoothConstraint), l = nu(i, e.smoothConstraint);
            if (e.connectNulls) {
                for (;a > 0 && Qh(n[a - 1]); a--) ;
                for (;a > r && Qh(n[r]); r++) ;
            }
            for (;a > r; ) {
                var h = Jh(t, n, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);
                Jh(t, i, r + h - 1, h, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls), 
                r += h + 1, t.closePath();
            }
        }
    });
    lo.extend({
        type: "line",
        init: function() {
            var t = new rf(), e = new Zh();
            this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t;
        },
        render: function(t, e, n) {
            var i = t.coordinateSystem, r = this.group, a = t.getData(), o = t.getModel("lineStyle"), l = t.getModel("areaStyle"), h = a.mapArray(a.getItemLayout), u = "polar" === i.type, c = this._coordSys, d = this._symbolDraw, f = this._polyline, p = this._polygon, g = this._lineGroup, v = t.get("animation"), m = !l.isEmpty(), y = l.get("origin"), x = ou(i, a, jh(i, a, y)), _ = t.get("showSymbol"), w = _ && !u && du(t, a, i), b = this._data;
            b && b.eachItemGraphicEl(function(t, e) {
                t.__temp && (r.remove(t), b.setItemGraphicEl(e, null));
            }), _ || d.remove(), r.add(g);
            var M = !u && t.get("step");
            f && c.type === i.type && M === this._step ? (m && !p ? p = this._newPolygon(h, x, i, v) : p && !m && (g.remove(p), 
            p = this._polygon = null), g.setClipPath(hu(i, !1, !1, t)), _ && d.updateData(a, {
                isIgnore: w,
                clipShape: hu(i, !1, !0, t)
            }), a.eachItemGraphicEl(function(t) {
                t.stopAnimation(!0);
            }), iu(this._stackedOnPoints, x) && iu(this._points, h) || (v ? this._updateAnimation(a, x, i, n, M, y) : (M && (h = uu(h, i, M), 
            x = uu(x, i, M)), f.setShape({
                points: h
            }), p && p.setShape({
                points: h,
                stackedOnPoints: x
            })))) : (_ && d.updateData(a, {
                isIgnore: w,
                clipShape: hu(i, !1, !0, t)
            }), M && (h = uu(h, i, M), x = uu(x, i, M)), f = this._newPolyline(h, i, v), m && (p = this._newPolygon(h, x, i, v)), 
            g.setClipPath(hu(i, !0, !1, t)));
            var S = cu(a, i) || a.getVisual("color");
            f.useStyle(s(o.getLineStyle(), {
                fill: "none",
                stroke: S,
                lineJoin: "bevel"
            }));
            var I = t.get("smooth");
            if (I = ru(t.get("smooth")), f.setShape({
                smooth: I,
                smoothMonotone: t.get("smoothMonotone"),
                connectNulls: t.get("connectNulls")
            }), p) {
                var T = a.getCalculationInfo("stackedOnSeries"), C = 0;
                p.useStyle(s(l.getAreaStyle(), {
                    fill: S,
                    opacity: .7,
                    lineJoin: "bevel"
                })), T && (C = ru(T.get("smooth"))), p.setShape({
                    smooth: I,
                    stackedOnSmooth: C,
                    smoothMonotone: t.get("smoothMonotone"),
                    connectNulls: t.get("connectNulls")
                });
            }
            this._data = a, this._coordSys = i, this._stackedOnPoints = x, this._points = h, 
            this._step = M, this._valueOrigin = y;
        },
        dispose: function() {},
        highlight: function(t, e, n, i) {
            var r = t.getData(), a = Pn(r, i);
            if (!(a instanceof Array) && null != a && a >= 0) {
                var o = r.getItemGraphicEl(a);
                if (!o) {
                    var s = r.getItemLayout(a);
                    if (!s) return;
                    (o = new Rh(r, a)).position = s, o.setZ(t.get("zlevel"), t.get("z")), o.ignore = isNaN(s[0]) || isNaN(s[1]), 
                    o.__temp = !0, r.setItemGraphicEl(a, o), o.stopSymbolAnimation(!0), this.group.add(o);
                }
                o.highlight();
            } else lo.prototype.highlight.call(this, t, e, n, i);
        },
        downplay: function(t, e, n, i) {
            var r = t.getData(), a = Pn(r, i);
            if (null != a && a >= 0) {
                var o = r.getItemGraphicEl(a);
                o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay());
            } else lo.prototype.downplay.call(this, t, e, n, i);
        },
        _newPolyline: function(t) {
            var e = this._polyline;
            return e && this._lineGroup.remove(e), e = new t_({
                shape: {
                    points: t
                },
                silent: !0,
                z2: 10
            }), this._lineGroup.add(e), this._polyline = e, e;
        },
        _newPolygon: function(t, e) {
            var n = this._polygon;
            return n && this._lineGroup.remove(n), n = new e_({
                shape: {
                    points: t,
                    stackedOnPoints: e
                },
                silent: !0
            }), this._lineGroup.add(n), this._polygon = n, n;
        },
        _updateAnimation: function(t, e, n, i, r, a) {
            var o = this._polyline, s = this._polygon, l = t.hostModel, h = Yx(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, a), u = h.current, c = h.stackedOnCurrent, d = h.next, f = h.stackedOnNext;
            r && (u = uu(h.current, n, r), c = uu(h.stackedOnCurrent, n, r), d = uu(h.next, n, r), 
            f = uu(h.stackedOnNext, n, r)), o.shape.__points = h.current, o.shape.points = u, 
            pr(o, {
                shape: {
                    points: d
                }
            }, l), s && (s.setShape({
                points: u,
                stackedOnPoints: c
            }), pr(s, {
                shape: {
                    points: d,
                    stackedOnPoints: f
                }
            }, l));
            for (var p = [], g = h.status, v = 0; v < g.length; v++) if ("=" === g[v].cmd) {
                var m = t.getItemGraphicEl(g[v].idx1);
                m && p.push({
                    el: m,
                    ptIdx: v
                });
            }
            o.animators && o.animators.length && o.animators[0].during(function() {
                for (var t = 0; t < p.length; t++) p[t].el.attr("position", o.shape.__points[p[t].ptIdx]);
            });
        },
        remove: function() {
            var t = this.group, e = this._data;
            this._lineGroup.removeAll(), this._symbolDraw.remove(!0), e && e.eachItemGraphicEl(function(n, i) {
                n.__temp && (t.remove(n), e.setItemGraphicEl(i, null));
            }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null;
        }
    });
    var n_ = {
        average: function(t) {
            for (var e = 0, n = 0, i = 0; i < t.length; i++) isNaN(t[i]) || (e += t[i], n++);
            return 0 === n ? NaN : e / n;
        },
        sum: function(t) {
            for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
            return e;
        },
        max: function(t) {
            for (var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
            return isFinite(e) ? e : NaN;
        },
        min: function(t) {
            for (var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
            return isFinite(e) ? e : NaN;
        },
        nearest: function(t) {
            return t[0];
        }
    }, i_ = function(t) {
        return Math.round(t.length / 2);
    };
    ys(function(t, e, n) {
        return {
            seriesType: t,
            performRawSeries: !0,
            reset: function(t, i) {
                var r = t.getData(), a = t.get("symbol") || e, o = t.get("symbolSize"), s = t.get("symbolKeepAspect");
                if (r.setVisual({
                    legendSymbol: n || a,
                    symbol: a,
                    symbolSize: o,
                    symbolKeepAspect: s
                }), !i.isSeriesFiltered(t)) {
                    var l = "function" == typeof o;
                    return {
                        dataEach: r.hasItemOption || l ? function(e, n) {
                            if ("function" == typeof o) {
                                var i = t.getRawValue(n), r = t.getDataParams(n);
                                e.setItemVisual(n, "symbolSize", o(i, r));
                            }
                            if (e.hasItemOption) {
                                var a = e.getItemModel(n), s = a.getShallow("symbol", !0), l = a.getShallow("symbolSize", !0), h = a.getShallow("symbolKeepAspect", !0);
                                null != s && e.setItemVisual(n, "symbol", s), null != l && e.setItemVisual(n, "symbolSize", l), 
                                null != h && e.setItemVisual(n, "symbolKeepAspect", h);
                            }
                        } : null
                    };
                }
            }
        };
    }("line", "circle", "line")), ms(function(t) {
        return {
            seriesType: t,
            plan: $v(),
            reset: function(t) {
                var e = t.getData(), n = t.coordinateSystem, i = t.pipelineContext.large;
                if (n) {
                    var r = p(n.dimensions, function(t) {
                        return e.mapDimension(t);
                    }).slice(0, 2), a = r.length, o = e.getCalculationInfo("stackResultDimension");
                    return Ys(e, r[0]) && (r[0] = o), Ys(e, r[1]) && (r[1] = o), a && {
                        progress: function(t, e) {
                            for (var o = t.end - t.start, s = i && new Float32Array(o * a), l = t.start, h = 0, u = [], c = []; l < t.end; l++) {
                                var d;
                                if (1 === a) f = e.get(r[0], l), d = !isNaN(f) && n.dataToPoint(f, null, c); else {
                                    var f = u[0] = e.get(r[0], l), p = u[1] = e.get(r[1], l);
                                    d = !isNaN(f) && !isNaN(p) && n.dataToPoint(u, null, c);
                                }
                                i ? (s[h++] = d ? d[0] : NaN, s[h++] = d ? d[1] : NaN) : e.setItemLayout(l, d && d.slice() || [ NaN, NaN ]);
                            }
                            i && e.setLayout("symbolPoints", s);
                        }
                    };
                }
            }
        };
    }("line")), gs(Vm.PROCESSOR.STATISTIC, function(t) {
        return {
            seriesType: t,
            modifyOutputEnd: !0,
            reset: function(t) {
                var e = t.getData(), n = t.get("sampling"), i = t.coordinateSystem;
                if ("cartesian2d" === i.type && n) {
                    var r = i.getBaseAxis(), a = i.getOtherAxis(r), o = r.getExtent(), s = o[1] - o[0], l = Math.round(e.count() / s);
                    if (l > 1) {
                        var h;
                        "string" == typeof n ? h = n_[n] : "function" == typeof n && (h = n), h && t.setData(e.downSample(e.mapDimension(a.dim), 1 / l, h, i_));
                    }
                }
            }
        };
    }("line"));
    var r_ = function(t, e, n) {
        e = x(e) && {
            coordDimensions: e
        } || o({}, e);
        var i = t.getSource(), r = _y(i, e), a = new my(r, t);
        return a.initData(i, n), a;
    }, a_ = {
        updateSelectedMap: function(t) {
            this._targetList = x(t) ? t.slice() : [], this._selectTargetMap = g(t || [], function(t, e) {
                return t.set(e.name, e), t;
            }, R());
        },
        select: function(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            "single" === this.get("selectedMode") && this._selectTargetMap.each(function(t) {
                t.selected = !1;
            }), n && (n.selected = !0);
        },
        unSelect: function(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            n && (n.selected = !1);
        },
        toggleSelected: function(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            return null != n ? (this[n.selected ? "unSelect" : "select"](t, e), n.selected) : void 0;
        },
        isSelected: function(t, e) {
            var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
            return n && n.selected;
        }
    }, o_ = Ms({
        type: "series.pie",
        init: function(t) {
            o_.superApply(this, "init", arguments), this.legendDataProvider = function() {
                return this.getRawData();
            }, this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t);
        },
        mergeOption: function(t) {
            o_.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList());
        },
        getInitialData: function() {
            return r_(this, [ "value" ]);
        },
        _createSelectableList: function() {
            for (var t = this.getRawData(), e = t.mapDimension("value"), n = [], i = 0, r = t.count(); r > i; i++) n.push({
                name: t.getName(i),
                value: t.get(e, i),
                selected: Ua(t, i, "selected")
            });
            return n;
        },
        getDataParams: function(t) {
            var e = this.getData(), n = o_.superCall(this, "getDataParams", t), i = [];
            return e.each(e.mapDimension("value"), function(t) {
                i.push(t);
            }), n.percent = Lr(i, t, e.hostModel.get("percentPrecision")), n.$vars.push("percent"), 
            n;
        },
        _defaultLabelLine: function(t) {
            Sn(t, "labelLine", [ "show" ]);
            var e = t.labelLine, n = t.emphasis.labelLine;
            e.show = e.show && t.label.show, n.show = n.show && t.emphasis.label.show;
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            hoverAnimation: !0,
            center: [ "50%", "50%" ],
            radius: [ 0, "75%" ],
            clockwise: !0,
            startAngle: 90,
            minAngle: 0,
            selectedOffset: 10,
            hoverOffset: 10,
            avoidLabelOverlap: !0,
            percentPrecision: 2,
            stillShowZeroSum: !0,
            label: {
                rotate: !1,
                show: !0,
                position: "outer"
            },
            labelLine: {
                show: !0,
                length: 15,
                length2: 15,
                smooth: !1,
                lineStyle: {
                    width: 1,
                    type: "solid"
                }
            },
            itemStyle: {
                borderWidth: 1
            },
            animationType: "expansion",
            animationEasing: "cubicOut"
        }
    });
    c(o_, a_);
    var s_ = vu.prototype;
    s_.updateData = function(t, e, n) {
        function i() {
            a.stopAnimation(!0), a.animateTo({
                shape: {
                    r: u.r + l.get("hoverOffset")
                }
            }, 300, "elasticOut");
        }
        function r() {
            a.stopAnimation(!0), a.animateTo({
                shape: {
                    r: u.r
                }
            }, 300, "elasticOut");
        }
        var a = this.childAt(0), l = t.hostModel, h = t.getItemModel(e), u = t.getItemLayout(e), c = o({}, u);
        c.label = null, n ? (a.setShape(c), "scale" === l.getShallow("animationType") ? (a.shape.r = u.r0, 
        gr(a, {
            shape: {
                r: u.r
            }
        }, l, e)) : (a.shape.endAngle = u.startAngle, pr(a, {
            shape: {
                endAngle: u.endAngle
            }
        }, l, e))) : pr(a, {
            shape: c
        }, l, e);
        var d = t.getItemVisual(e, "color");
        a.useStyle(s({
            lineJoin: "bevel",
            fill: d
        }, h.getModel("itemStyle").getItemStyle())), a.hoverStyle = h.getModel("emphasis.itemStyle").getItemStyle();
        var f = h.getShallow("cursor");
        f && a.attr("cursor", f), gu(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation")), 
        a.off("mouseover").off("mouseout").off("emphasis").off("normal"), h.get("hoverAnimation") && l.isAnimationEnabled() && a.on("mouseover", i).on("mouseout", r).on("emphasis", i).on("normal", r), 
        this._updateLabel(t, e), nr(this);
    }, s_._updateLabel = function(t, e) {
        var n = this.childAt(1), i = this.childAt(2), r = t.hostModel, a = t.getItemModel(e), o = t.getItemLayout(e).label, s = t.getItemVisual(e, "color");
        pr(n, {
            shape: {
                points: o.linePoints || [ [ o.x, o.y ], [ o.x, o.y ], [ o.x, o.y ] ]
            }
        }, r, e), pr(i, {
            style: {
                x: o.x,
                y: o.y
            }
        }, r, e), i.attr({
            rotation: o.rotation,
            origin: [ o.x, o.y ],
            z2: 10
        });
        var l = a.getModel("label"), h = a.getModel("emphasis.label"), u = a.getModel("labelLine"), c = a.getModel("emphasis.labelLine"), s = t.getItemVisual(e, "color");
        rr(i.style, i.hoverStyle = {}, l, h, {
            labelFetcher: t.hostModel,
            labelDataIndex: e,
            defaultText: t.getName(e),
            autoColor: s,
            useInsideStyle: !!o.inside
        }, {
            textAlign: o.textAlign,
            textVerticalAlign: o.verticalAlign,
            opacity: t.getItemVisual(e, "opacity")
        }), i.ignore = i.normalIgnore = !l.get("show"), i.hoverIgnore = !h.get("show"), 
        n.ignore = n.normalIgnore = !u.get("show"), n.hoverIgnore = !c.get("show"), n.setStyle({
            stroke: s,
            opacity: t.getItemVisual(e, "opacity")
        }), n.setStyle(u.getModel("lineStyle").getLineStyle()), n.hoverStyle = c.getModel("lineStyle").getLineStyle();
        var d = u.get("smooth");
        d && !0 === d && (d = .4), n.setShape({
            smooth: d
        });
    }, u(vu, rf);
    var l_ = (lo.extend({
        type: "pie",
        init: function() {
            var t = new rf();
            this._sectorGroup = t;
        },
        render: function(t, e, n, i) {
            if (!i || i.from !== this.uid) {
                var r = t.getData(), a = this._data, o = this.group, s = e.get("animation"), l = !a, h = t.get("animationType"), u = y(pu, this.uid, t, s, n), c = t.get("selectedMode");
                if (r.diff(a).add(function(t) {
                    var e = new vu(r, t);
                    l && "scale" !== h && e.eachChild(function(t) {
                        t.stopAnimation(!0);
                    }), c && e.on("click", u), r.setItemGraphicEl(t, e), o.add(e);
                }).update(function(t, e) {
                    var n = a.getItemGraphicEl(e);
                    n.updateData(r, t), n.off("click"), c && n.on("click", u), o.add(n), r.setItemGraphicEl(t, n);
                }).remove(function(t) {
                    var e = a.getItemGraphicEl(t);
                    o.remove(e);
                }).execute(), s && l && r.count() > 0 && "scale" !== h) {
                    var d = r.getItemLayout(0), f = Math.max(n.getWidth(), n.getHeight()) / 2, p = m(o.removeClipPath, o);
                    o.setClipPath(this._createClipPath(d.cx, d.cy, f, d.startAngle, d.clockwise, p, t));
                } else o.removeClipPath();
                this._data = r;
            }
        },
        dispose: function() {},
        _createClipPath: function(t, e, n, i, r, a, o) {
            var s = new pg({
                shape: {
                    cx: t,
                    cy: e,
                    r0: 0,
                    r: n,
                    startAngle: i,
                    endAngle: i,
                    clockwise: r
                }
            });
            return gr(s, {
                shape: {
                    endAngle: i + (r ? 1 : -1) * Math.PI * 2
                }
            }, o, a), s;
        },
        containPoint: function(t, e) {
            var n = e.getData().getItemLayout(0);
            if (n) {
                var i = t[0] - n.cx, r = t[1] - n.cy, a = Math.sqrt(i * i + r * r);
                return a <= n.r && a >= n.r0;
            }
        }
    }), function(t, e) {
        f(e, function(e) {
            e.update = "updateView", vs(e, function(n, i) {
                var r = {};
                return i.eachComponent({
                    mainType: "series",
                    subType: t,
                    query: n
                }, function(t) {
                    t[e.method] && t[e.method](n.name, n.dataIndex);
                    var i = t.getData();
                    i.each(function(e) {
                        var n = i.getName(e);
                        r[n] = t.isSelected(n) || !1;
                    });
                }), {
                    name: n.name,
                    selected: r
                };
            });
        });
    }), h_ = function(t, e, n, i) {
        var r, a, o = t.getData(), s = [], l = !1;
        o.each(function(n) {
            var i, h, u, c, d = o.getItemLayout(n), f = o.getItemModel(n), p = f.getModel("label"), g = p.get("position") || f.get("emphasis.label.position"), v = f.getModel("labelLine"), m = v.get("length"), y = v.get("length2"), x = (d.startAngle + d.endAngle) / 2, _ = Math.cos(x), w = Math.sin(x);
            r = d.cx, a = d.cy;
            var b = "inside" === g || "inner" === g;
            if ("center" === g) i = d.cx, h = d.cy, c = "center"; else {
                var M = (b ? (d.r + d.r0) / 2 * _ : d.r * _) + r, S = (b ? (d.r + d.r0) / 2 * w : d.r * w) + a;
                if (i = M + 3 * _, h = S + 3 * w, !b) {
                    var I = M + _ * (m + e - d.r), T = S + w * (m + e - d.r), C = I + (0 > _ ? -1 : 1) * y, A = T;
                    i = C + (0 > _ ? -5 : 5), h = A, u = [ [ M, S ], [ I, T ], [ C, A ] ];
                }
                c = b ? "center" : _ > 0 ? "left" : "right";
            }
            var D = p.getFont(), k = p.get("rotate") ? 0 > _ ? -x + Math.PI : -x : 0, P = Me(t.getFormattedLabel(n, "normal") || o.getName(n), D, c, "top");
            l = !!k, d.label = {
                x: i,
                y: h,
                position: g,
                height: P.height,
                len: m,
                len2: y,
                linePoints: u,
                textAlign: c,
                verticalAlign: "middle",
                rotation: k,
                inside: b
            }, b || s.push(d.label);
        }), !l && t.get("avoidLabelOverlap") && yu(s, r, a, e, n, i);
    }, u_ = 2 * Math.PI, c_ = Math.PI / 180;
    l_("pie", [ {
        type: "pieToggleSelect",
        event: "pieselectchanged",
        method: "toggleSelected"
    }, {
        type: "pieSelect",
        event: "pieselected",
        method: "select"
    }, {
        type: "pieUnSelect",
        event: "pieunselected",
        method: "unSelect"
    } ]), ys(function(t) {
        return {
            getTargetSeries: function(e) {
                var n = {}, i = R();
                return e.eachSeriesByType(t, function(t) {
                    t.__paletteScope = n, i.set(t.uid, t);
                }), i;
            },
            reset: function(t) {
                var e = t.getRawData(), n = {}, i = t.getData();
                i.each(function(t) {
                    var e = i.getRawIndex(t);
                    n[e] = t;
                }), e.each(function(r) {
                    var a = n[r], o = null != a && i.getItemVisual(a, "color", !0);
                    if (o) e.setItemVisual(r, "color", o); else {
                        var s = e.getItemModel(r).get("itemStyle.color") || t.getColorFromPalette(e.getName(r) || r + "", t.__paletteScope, e.count());
                        e.setItemVisual(r, "color", s), null != a && i.setItemVisual(a, "color", s);
                    }
                });
            }
        };
    }("pie")), ms(y(function(t, e, n) {
        e.eachSeriesByType(t, function(t) {
            var e = t.getData(), i = e.mapDimension("value"), r = t.get("center"), a = t.get("radius");
            x(a) || (a = [ 0, a ]), x(r) || (r = [ r, r ]);
            var o = n.getWidth(), s = n.getHeight(), l = Math.min(o, s), h = Cr(r[0], o), u = Cr(r[1], s), c = Cr(a[0], l / 2), d = Cr(a[1], l / 2), f = -t.get("startAngle") * c_, p = t.get("minAngle") * c_, g = 0;
            e.each(i, function(t) {
                !isNaN(t) && g++;
            });
            var v = e.getSum(i), m = Math.PI / (v || g) * 2, y = t.get("clockwise"), _ = t.get("roseType"), w = t.get("stillShowZeroSum"), b = e.getDataExtent(i);
            b[0] = 0;
            var M = u_, S = 0, I = f, T = y ? 1 : -1;
            if (e.each(i, function(t, n) {
                var i;
                if (isNaN(t)) e.setItemLayout(n, {
                    angle: NaN,
                    startAngle: NaN,
                    endAngle: NaN,
                    clockwise: y,
                    cx: h,
                    cy: u,
                    r0: c,
                    r: _ ? NaN : d
                }); else {
                    p > (i = "area" !== _ ? 0 === v && w ? m : t * m : u_ / g) ? (i = p, M -= p) : S += t;
                    var r = I + T * i;
                    e.setItemLayout(n, {
                        angle: i,
                        startAngle: I,
                        endAngle: r,
                        clockwise: y,
                        cx: h,
                        cy: u,
                        r0: c,
                        r: _ ? Tr(t, b, [ c, d ]) : d
                    }), I = r;
                }
            }), u_ > M && g) if (.001 >= M) {
                var C = u_ / g;
                e.each(i, function(t, n) {
                    if (!isNaN(t)) {
                        var i = e.getItemLayout(n);
                        i.angle = C, i.startAngle = f + T * n * C, i.endAngle = f + T * (n + 1) * C;
                    }
                });
            } else m = M / S, I = f, e.each(i, function(t, n) {
                if (!isNaN(t)) {
                    var i = e.getItemLayout(n), r = i.angle === p ? p : t * m;
                    i.startAngle = I, i.endAngle = I + T * r, I += T * r;
                }
            });
            h_(t, d, o, s);
        });
    }, "pie")), gs(function(t) {
        return {
            seriesType: t,
            reset: function(t, e) {
                var n = e.findComponents({
                    mainType: "legend"
                });
                if (n && n.length) {
                    var i = t.getData();
                    i.filterSelf(function(t) {
                        for (var e = i.getName(t), r = 0; r < n.length; r++) if (!n[r].isSelected(e)) return !1;
                        return !0;
                    });
                }
            }
        };
    }("pie")), ws({
        type: "title",
        layoutMode: {
            type: "box",
            ignoreSize: !0
        },
        defaultOption: {
            zlevel: 0,
            z: 6,
            show: !0,
            text: "",
            target: "blank",
            subtext: "",
            subtarget: "blank",
            left: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            textStyle: {
                fontSize: 18,
                fontWeight: "bolder",
                color: "#333"
            },
            subtextStyle: {
                color: "#aaa"
            }
        }
    }), bs({
        type: "title",
        render: function(t, e, n) {
            if (this.group.removeAll(), t.get("show")) {
                var i = this.group, r = t.getModel("textStyle"), a = t.getModel("subtextStyle"), o = t.get("textAlign"), s = t.get("textBaseline"), l = new ug({
                    style: ar({}, r, {
                        text: t.get("text"),
                        textFill: r.getTextColor()
                    }, {
                        disableBox: !0
                    }),
                    z2: 10
                }), h = l.getBoundingRect(), u = t.get("subtext"), c = new ug({
                    style: ar({}, a, {
                        text: u,
                        textFill: a.getTextColor(),
                        y: h.height + t.get("itemGap"),
                        textVerticalAlign: "top"
                    }, {
                        disableBox: !0
                    }),
                    z2: 10
                }), d = t.get("link"), f = t.get("sublink"), p = t.get("triggerEvent", !0);
                l.silent = !d && !p, c.silent = !f && !p, d && l.on("click", function() {
                    window.open(d, "_" + t.get("target"));
                }), f && c.on("click", function() {
                    window.open(f, "_" + t.get("subtarget"));
                }), l.eventData = c.eventData = p ? {
                    componentType: "title",
                    componentIndex: t.componentIndex
                } : null, i.add(l), u && i.add(c);
                var g = i.getBoundingRect(), v = t.getBoxLayoutParams();
                v.width = g.width, v.height = g.height;
                var m = jr(v, {
                    width: n.getWidth(),
                    height: n.getHeight()
                }, t.get("padding"));
                o || ("middle" === (o = t.get("left") || t.get("right")) && (o = "center"), "right" === o ? m.x += m.width : "center" === o && (m.x += m.width / 2)), 
                s || ("center" === (s = t.get("top") || t.get("bottom")) && (s = "middle"), "bottom" === s ? m.y += m.height : "middle" === s && (m.y += m.height / 2), 
                s = s || "top"), i.attr("position", [ m.x, m.y ]);
                var y = {
                    textAlign: o,
                    textVerticalAlign: s
                };
                l.setStyle(y), c.setStyle(y), g = i.getBoundingRect();
                var x = m.margin, _ = t.getItemStyle([ "color", "opacity" ]);
                _.fill = t.get("backgroundColor");
                var w = new _g({
                    shape: {
                        x: g.x - x[3],
                        y: g.y - x[0],
                        width: g.width + x[1] + x[3],
                        height: g.height + x[0] + x[2],
                        r: t.get("borderRadius")
                    },
                    style: _,
                    silent: !0
                });
                Vi(w), i.add(w);
            }
        }
    });
    var d_ = ws({
        type: "legend.plain",
        dependencies: [ "series" ],
        layoutMode: {
            type: "box",
            ignoreSize: !0
        },
        init: function(t, e, n) {
            this.mergeDefaultAndTheme(t, n), t.selected = t.selected || {};
        },
        mergeOption: function(t) {
            d_.superCall(this, "mergeOption", t);
        },
        optionUpdated: function() {
            this._updateData(this.ecModel);
            var t = this._data;
            if (t[0] && "single" === this.get("selectedMode")) {
                for (var e = !1, n = 0; n < t.length; n++) {
                    var i = t[n].get("name");
                    if (this.isSelected(i)) {
                        this.select(i), e = !0;
                        break;
                    }
                }
                !e && this.select(t[0].get("name"));
            }
        },
        _updateData: function(t) {
            var e = [], n = [];
            t.eachRawSeries(function(i) {
                var r = i.name;
                n.push(r);
                var a;
                if (i.legendDataProvider) {
                    var o = i.legendDataProvider(), s = o.mapArray(o.getName);
                    t.isSeriesFiltered(i) || (n = n.concat(s)), s.length ? e = e.concat(s) : a = !0;
                } else a = !0;
                a && Dn(i) && e.push(i.name);
            }), this._availableNames = n;
            var i = p(this.get("data") || e, function(t) {
                return ("string" == typeof t || "number" == typeof t) && (t = {
                    name: t
                }), new wr(t, this, this.ecModel);
            }, this);
            this._data = i;
        },
        getData: function() {
            return this._data;
        },
        select: function(t) {
            var e = this.option.selected;
            "single" === this.get("selectedMode") && f(this._data, function(t) {
                e[t.get("name")] = !1;
            }), e[t] = !0;
        },
        unSelect: function(t) {
            "single" !== this.get("selectedMode") && (this.option.selected[t] = !1);
        },
        toggleSelected: function(t) {
            var e = this.option.selected;
            e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t);
        },
        isSelected: function(t) {
            var e = this.option.selected;
            return !(e.hasOwnProperty(t) && !e[t]) && h(this._availableNames, t) >= 0;
        },
        defaultOption: {
            zlevel: 0,
            z: 4,
            show: !0,
            orient: "horizontal",
            left: "center",
            top: 0,
            align: "auto",
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderRadius: 0,
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
            inactiveColor: "#ccc",
            textStyle: {
                color: "#333"
            },
            selectedMode: !0,
            tooltip: {
                show: !1
            }
        }
    });
    vs("legendToggleSelect", "legendselectchanged", y(xu, "toggleSelected")), vs("legendSelect", "legendselected", y(xu, "select")), 
    vs("legendUnSelect", "legendunselected", y(xu, "unSelect"));
    var f_ = y, p_ = f, g_ = rf, v_ = bs({
        type: "legend.plain",
        newlineDisabled: !1,
        init: function() {
            this.group.add(this._contentGroup = new g_()), this._backgroundEl;
        },
        getContentGroup: function() {
            return this._contentGroup;
        },
        render: function(t, e, n) {
            if (this.resetInner(), t.get("show", !0)) {
                var i = t.get("align");
                i && "auto" !== i || (i = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left"), 
                this.renderInner(i, t, e, n);
                var r = t.getBoxLayoutParams(), a = {
                    width: n.getWidth(),
                    height: n.getHeight()
                }, o = t.get("padding"), l = jr(r, a, o), h = this.layoutInner(t, i, l), u = jr(s({
                    width: h.width,
                    height: h.height
                }, r), a, o);
                this.group.attr("position", [ u.x - h.x, u.y - h.y ]), this.group.add(this._backgroundEl = _u(h, t));
            }
        },
        resetInner: function() {
            this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl);
        },
        renderInner: function(t, e, n, i) {
            var r = this.getContentGroup(), a = R(), o = e.get("selectedMode"), s = [];
            n.eachRawSeries(function(t) {
                !t.get("legendHoverLink") && s.push(t.id);
            }), p_(e.getData(), function(l, h) {
                var u = l.get("name");
                if (this.newlineDisabled || "" !== u && "\n" !== u) {
                    var c = n.getSeriesByName(u)[0];
                    if (!a.get(u)) if (c) {
                        var d = c.getData(), f = d.getVisual("color");
                        "function" == typeof f && (f = f(c.getDataParams(0)));
                        var p = d.getVisual("legendSymbol") || "roundRect", g = d.getVisual("symbol");
                        this._createItem(u, h, l, e, p, g, t, f, o).on("click", f_(wu, u, i)).on("mouseover", f_(bu, c.name, null, i, s)).on("mouseout", f_(Mu, c.name, null, i, s)), 
                        a.set(u, !0);
                    } else n.eachRawSeries(function(n) {
                        if (!a.get(u) && n.legendDataProvider) {
                            var r = n.legendDataProvider(), c = r.indexOfName(u);
                            if (0 > c) return;
                            var d = r.getItemVisual(c, "color");
                            this._createItem(u, h, l, e, "roundRect", null, t, d, o).on("click", f_(wu, u, i)).on("mouseover", f_(bu, null, u, i, s)).on("mouseout", f_(Mu, null, u, i, s)), 
                            a.set(u, !0);
                        }
                    }, this);
                } else r.add(new g_({
                    newline: !0
                }));
            }, this);
        },
        _createItem: function(t, e, n, i, r, a, s, l, h) {
            var u = i.get("itemWidth"), c = i.get("itemHeight"), d = i.get("inactiveColor"), f = i.get("symbolKeepAspect"), p = i.isSelected(t), g = new g_(), v = n.getModel("textStyle"), m = n.get("icon"), y = n.getModel("tooltip"), x = y.parentModel;
            if (r = m || r, g.add(Tl(r, 0, 0, u, c, p ? l : d, null == f || f)), !m && a && (a !== r || "none" === a)) {
                var _ = .8 * c;
                "none" === a && (a = "circle"), g.add(Tl(a, (u - _) / 2, (c - _) / 2, _, _, p ? l : d, null == f || f));
            }
            var w = "left" === s ? u + 5 : -5, b = s, M = i.get("formatter"), S = t;
            "string" == typeof M && M ? S = M.replace("{name}", null != t ? t : "") : "function" == typeof M && (S = M(t)), 
            g.add(new ug({
                style: ar({}, v, {
                    text: S,
                    x: w,
                    y: c / 2,
                    textFill: p ? v.getTextColor() : d,
                    textAlign: b,
                    textVerticalAlign: "middle"
                })
            }));
            var I = new _g({
                shape: g.getBoundingRect(),
                invisible: !0,
                tooltip: y.get("show") ? o({
                    content: t,
                    formatter: x.get("formatter", !0) || function() {
                        return t;
                    },
                    formatterParams: {
                        componentType: "legend",
                        legendIndex: i.componentIndex,
                        name: t,
                        $vars: [ "name" ]
                    }
                }, y.option) : null
            });
            return g.add(I), g.eachChild(function(t) {
                t.silent = !0;
            }), I.silent = !h, this.getContentGroup().add(g), nr(g), g.__legendDataIndex = e, 
            g;
        },
        layoutInner: function(t, e, n) {
            var i = this.getContentGroup();
            rv(t.get("orient"), i, t.get("itemGap"), n.width, n.height);
            var r = i.getBoundingRect();
            return i.attr("position", [ -r.x, -r.y ]), this.group.getBoundingRect();
        }
    });
    gs(function(t) {
        var e = t.findComponents({
            mainType: "legend"
        });
        e && e.length && t.filterSeries(function(t) {
            for (var n = 0; n < e.length; n++) if (!e[n].isSelected(t.name)) return !1;
            return !0;
        });
    }), sv.registerSubTypeDefaulter("legend", function() {
        return "plain";
    });
    var m_ = d_.extend({
        type: "legend.scroll",
        setScrollDataIndex: function(t) {
            this.option.scrollDataIndex = t;
        },
        defaultOption: {
            scrollDataIndex: 0,
            pageButtonItemGap: 5,
            pageButtonGap: null,
            pageButtonPosition: "end",
            pageFormatter: "{current}/{total}",
            pageIcons: {
                horizontal: [ "M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z" ],
                vertical: [ "M0,0L20,0L10,-20z", "M0,0L20,0L10,20z" ]
            },
            pageIconColor: "#2f4554",
            pageIconInactiveColor: "#aaa",
            pageIconSize: 15,
            pageTextStyle: {
                color: "#333"
            },
            animationDurationUpdate: 800
        },
        init: function(t, e, n, i) {
            var r = $r(t);
            m_.superCall(this, "init", t, e, n, i), Su(this, t, r);
        },
        mergeOption: function(t, e) {
            m_.superCall(this, "mergeOption", t, e), Su(this, this.option, t);
        },
        getOrient: function() {
            return "vertical" === this.get("orient") ? {
                index: 1,
                name: "vertical"
            } : {
                index: 0,
                name: "horizontal"
            };
        }
    }), y_ = rf, x_ = [ "width", "height" ], __ = [ "x", "y" ], w_ = v_.extend({
        type: "legend.scroll",
        newlineDisabled: !0,
        init: function() {
            w_.superCall(this, "init"), this._currentIndex = 0, this.group.add(this._containerGroup = new y_()), 
            this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new y_()), 
            this._showController;
        },
        resetInner: function() {
            w_.superCall(this, "resetInner"), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), 
            this._containerGroup.__rectSize = null;
        },
        renderInner: function(t, e, n, i) {
            function r(t, n) {
                var r = t + "DataIndex", l = _r(e.get("pageIcons", !0)[e.getOrient().name][n], {
                    onclick: m(a._pageGo, a, r, e, i)
                }, {
                    x: -s[0] / 2,
                    y: -s[1] / 2,
                    width: s[0],
                    height: s[1]
                });
                l.name = t, o.add(l);
            }
            var a = this;
            w_.superCall(this, "renderInner", t, e, n, i);
            var o = this._controllerGroup, s = e.get("pageIconSize", !0);
            x(s) || (s = [ s, s ]), r("pagePrev", 0);
            var l = e.getModel("pageTextStyle");
            o.add(new ug({
                name: "pageText",
                style: {
                    textFill: l.getTextColor(),
                    font: l.getFont(),
                    textVerticalAlign: "middle",
                    textAlign: "center"
                },
                silent: !0
            })), r("pageNext", 1);
        },
        layoutInner: function(t, e, n) {
            var i = this.getContentGroup(), r = this._containerGroup, a = this._controllerGroup, o = t.getOrient().index, s = x_[o], l = x_[1 - o], h = __[1 - o];
            rv(t.get("orient"), i, t.get("itemGap"), o ? n.width : null, o ? null : n.height), 
            rv("horizontal", a, t.get("pageButtonItemGap", !0));
            var u = i.getBoundingRect(), c = a.getBoundingRect(), d = this._showController = u[s] > n[s], f = [ -u.x, -u.y ];
            f[o] = i.position[o];
            var p = [ 0, 0 ], g = [ -c.x, -c.y ], v = A(t.get("pageButtonGap", !0), t.get("itemGap", !0));
            d && ("end" === t.get("pageButtonPosition", !0) ? g[o] += n[s] - c[s] : p[o] += c[s] + v), 
            g[1 - o] += u[l] / 2 - c[l] / 2, i.attr("position", f), r.attr("position", p), a.attr("position", g);
            var m = this.group.getBoundingRect();
            if ((m = {
                x: 0,
                y: 0
            })[s] = d ? n[s] : u[s], m[l] = Math.max(u[l], c[l]), m[h] = Math.min(0, c[h] + g[1 - o]), 
            r.__rectSize = n[s], d) {
                var y = {
                    x: 0,
                    y: 0
                };
                y[s] = Math.max(n[s] - c[s] - v, 0), y[l] = m[l], r.setClipPath(new _g({
                    shape: y
                })), r.__rectSize = y[s];
            } else a.eachChild(function(t) {
                t.attr({
                    invisible: !0,
                    silent: !0
                });
            });
            var x = this._getPageInfo(t);
            return null != x.pageIndex && pr(i, {
                position: x.contentPosition
            }, !!d && t), this._updatePageInfoView(t, x), m;
        },
        _pageGo: function(t, e, n) {
            var i = this._getPageInfo(e)[t];
            null != i && n.dispatchAction({
                type: "legendScroll",
                scrollDataIndex: i,
                legendId: e.id
            });
        },
        _updatePageInfoView: function(t, e) {
            var n = this._controllerGroup;
            f([ "pagePrev", "pageNext" ], function(i) {
                var r = null != e[i + "DataIndex"], a = n.childOfName(i);
                a && (a.setStyle("fill", r ? t.get("pageIconColor", !0) : t.get("pageIconInactiveColor", !0)), 
                a.cursor = r ? "pointer" : "default");
            });
            var i = n.childOfName("pageText"), r = t.get("pageFormatter"), a = e.pageIndex, o = null != a ? a + 1 : 0, s = e.pageCount;
            i && r && i.setStyle("text", w(r) ? r.replace("{current}", o).replace("{total}", s) : r({
                current: o,
                total: s
            }));
        },
        _getPageInfo: function(t) {
            function e(t) {
                var e = t.getBoundingRect().clone();
                return e[f] += t.position[u], e;
            }
            var n, i, r, a, o = t.get("scrollDataIndex", !0), s = this.getContentGroup(), l = s.getBoundingRect(), h = this._containerGroup.__rectSize, u = t.getOrient().index, c = x_[u], d = x_[1 - u], f = __[u], p = s.position.slice();
            this._showController ? s.eachChild(function(t) {
                t.__legendDataIndex === o && (a = t);
            }) : a = s.childAt(0);
            var g = h ? Math.ceil(l[c] / h) : 0;
            if (a) {
                var v = a.getBoundingRect(), m = a.position[u] + v[f];
                p[u] = -m - l[f], n = Math.floor(g * (m + v[f] + h / 2) / l[c]), n = l[c] && g ? Math.max(0, Math.min(g - 1, n)) : -1;
                var y = {
                    x: 0,
                    y: 0
                };
                y[c] = h, y[d] = l[d], y[f] = -p[u] - l[f];
                var x, _ = s.children();
                if (s.eachChild(function(t, n) {
                    var i = e(t);
                    i.intersect(y) && (null == x && (x = n), r = t.__legendDataIndex), n === _.length - 1 && i[f] + i[c] <= y[f] + y[c] && (r = null);
                }), null != x) {
                    var w = e(_[x]);
                    if (y[f] = w[f] + w[c] - y[c], 0 >= x && w[f] >= y[f]) i = null; else {
                        for (;x > 0 && e(_[x - 1]).intersect(y); ) x--;
                        i = _[x].__legendDataIndex;
                    }
                }
            }
            return {
                contentPosition: p,
                pageIndex: n,
                pageCount: g,
                pagePrevDataIndex: i,
                pageNextDataIndex: r
            };
        }
    });
    vs("legendScroll", "legendscroll", function(t, e) {
        var n = t.scrollDataIndex;
        null != n && e.eachComponent({
            mainType: "legend",
            subType: "scroll",
            query: t
        }, function(t) {
            t.setScrollDataIndex(n);
        });
    });
    var b_ = function(t, e) {
        var n, i = [], r = t.seriesIndex;
        if (null == r || !(n = e.getSeriesByIndex(r))) return {
            point: []
        };
        var a = n.getData(), o = Pn(a, t);
        if (null == o || 0 > o || x(o)) return {
            point: []
        };
        var s = a.getItemGraphicEl(o), l = n.coordinateSystem;
        if (n.getTooltipPosition) i = n.getTooltipPosition(o) || []; else if (l && l.dataToPoint) i = l.dataToPoint(a.getValues(p(l.dimensions, function(t) {
            return a.mapDimension(t);
        }), o, !0)) || []; else if (s) {
            var h = s.getBoundingRect().clone();
            h.applyTransform(s.transform), i = [ h.x + h.width / 2, h.y + h.height / 2 ];
        }
        return {
            point: i,
            el: s
        };
    }, M_ = f, S_ = y, I_ = Ln(), T_ = (ws({
        type: "axisPointer",
        coordSysAxesInfo: null,
        defaultOption: {
            show: "auto",
            triggerOn: null,
            zlevel: 0,
            z: 50,
            type: "line",
            snap: !1,
            triggerTooltip: !0,
            value: null,
            status: null,
            link: [],
            animation: null,
            animationDurationUpdate: 200,
            lineStyle: {
                color: "#aaa",
                width: 1,
                type: "solid"
            },
            shadowStyle: {
                color: "rgba(150,150,150,0.3)"
            },
            label: {
                show: !0,
                formatter: null,
                precision: "auto",
                margin: 3,
                color: "#fff",
                padding: [ 5, 7, 5, 7 ],
                backgroundColor: "auto",
                borderColor: null,
                borderWidth: 0,
                shadowBlur: 3,
                shadowColor: "#aaa"
            },
            handle: {
                show: !1,
                icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
                size: 45,
                margin: 50,
                color: "#333",
                shadowBlur: 3,
                shadowColor: "#aaa",
                shadowOffsetX: 0,
                shadowOffsetY: 2,
                throttle: 40
            }
        }
    }), Ln()), C_ = f, A_ = bs({
        type: "axisPointer",
        render: function(t, e, n) {
            var i = e.getComponent("tooltip"), r = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";
            Bu("axisPointer", n, function(t, e, n) {
                "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({
                    type: "updateAxisPointer",
                    currTrigger: t,
                    x: e && e.offsetX,
                    y: e && e.offsetY
                });
            });
        },
        remove: function(t, e) {
            Wu(e.getZr(), "axisPointer"), A_.superApply(this._model, "remove", arguments);
        },
        dispose: function(t, e) {
            Wu("axisPointer", e), A_.superApply(this._model, "dispose", arguments);
        }
    }), D_ = Ln(), k_ = i, P_ = m;
    (Hu.prototype = {
        _group: null,
        _lastGraphicKey: null,
        _handle: null,
        _dragging: !1,
        _lastValue: null,
        _lastStatus: null,
        _payloadInfo: null,
        animationThreshold: 15,
        render: function(t, e, n, i) {
            var r = e.get("value"), a = e.get("status");
            if (this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !== r || this._lastStatus !== a) {
                this._lastValue = r, this._lastStatus = a;
                var o = this._group, s = this._handle;
                if (!a || "hide" === a) return o && o.hide(), void (s && s.hide());
                o && o.show(), s && s.show();
                var l = {};
                this.makeElOption(l, r, t, e, n);
                var h = l.graphicKey;
                h !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = h;
                var u = this._moveAnimation = this.determineAnimation(t, e);
                if (o) {
                    var c = y(Gu, e, u);
                    this.updatePointerEl(o, l, c, e), this.updateLabelEl(o, l, c, e);
                } else o = this._group = new rf(), this.createPointerEl(o, l, t, e), this.createLabelEl(o, l, t, e), 
                n.getZr().add(o);
                qu(o, e, !0), this._renderHandle(r);
            }
        },
        remove: function(t) {
            this.clear(t);
        },
        dispose: function(t) {
            this.clear(t);
        },
        determineAnimation: function(t, e) {
            var n = e.get("animation"), i = t.axis, r = "category" === i.type, a = e.get("snap");
            if (!a && !r) return !1;
            if ("auto" === n || null == n) {
                var o = this.animationThreshold;
                if (r && i.getBandWidth() > o) return !0;
                if (a) {
                    var s = kh(t).seriesDataCount, l = i.getExtent();
                    return Math.abs(l[0] - l[1]) / s > o;
                }
                return !1;
            }
            return !0 === n;
        },
        makeElOption: function() {},
        createPointerEl: function(t, e) {
            var n = e.pointer;
            if (n) {
                var i = D_(t).pointerEl = new Eg[n.type](k_(e.pointer));
                t.add(i);
            }
        },
        createLabelEl: function(t, e, n, i) {
            if (e.label) {
                var r = D_(t).labelEl = new _g(k_(e.label));
                t.add(r), Xu(r, i);
            }
        },
        updatePointerEl: function(t, e, n) {
            var i = D_(t).pointerEl;
            i && (i.setStyle(e.pointer.style), n(i, {
                shape: e.pointer.shape
            }));
        },
        updateLabelEl: function(t, e, n, i) {
            var r = D_(t).labelEl;
            r && (r.setStyle(e.label.style), n(r, {
                shape: e.label.shape,
                position: e.label.position
            }), Xu(r, i));
        },
        _renderHandle: function(t) {
            if (!this._dragging && this.updateHandleTransform) {
                var e = this._axisPointerModel, n = this._api.getZr(), i = this._handle, r = e.getModel("handle"), a = e.get("status");
                if (!r.get("show") || !a || "hide" === a) return i && n.remove(i), void (this._handle = null);
                var o;
                this._handle || (o = !0, i = this._handle = _r(r.get("icon"), {
                    cursor: "move",
                    draggable: !0,
                    onmousemove: function(t) {
                        wd(t.event);
                    },
                    onmousedown: P_(this._onHandleDragMove, this, 0, 0),
                    drift: P_(this._onHandleDragMove, this),
                    ondragend: P_(this._onHandleDragEnd, this)
                }), n.add(i)), qu(i, e, !1);
                var s = [ "color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY" ];
                i.setStyle(r.getItemStyle(null, s));
                var l = r.get("size");
                x(l) || (l = [ l, l ]), i.attr("scale", [ l[0] / 2, l[1] / 2 ]), go(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), 
                this._moveHandleToValue(t, o);
            }
        },
        _moveHandleToValue: function(t, e) {
            Gu(this._axisPointerModel, !e && this._moveAnimation, this._handle, Yu(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
        },
        _onHandleDragMove: function(t, e) {
            var n = this._handle;
            if (n) {
                this._dragging = !0;
                var i = this.updateHandleTransform(Yu(n), [ t, e ], this._axisModel, this._axisPointerModel);
                this._payloadInfo = i, n.stopAnimation(), n.attr(Yu(i)), D_(n).lastProp = null, 
                this._doDispatchAxisPointer();
            }
        },
        _doDispatchAxisPointer: function() {
            if (this._handle) {
                var t = this._payloadInfo, e = this._axisModel;
                this._api.dispatchAction({
                    type: "updateAxisPointer",
                    x: t.cursorPoint[0],
                    y: t.cursorPoint[1],
                    tooltipOption: t.tooltipOption,
                    axesInfo: [ {
                        axisDim: e.axis.dim,
                        axisIndex: e.componentIndex
                    } ]
                });
            }
        },
        _onHandleDragEnd: function() {
            if (this._dragging = !1, this._handle) {
                var t = this._axisPointerModel.get("value");
                this._moveHandleToValue(t), this._api.dispatchAction({
                    type: "hideTip"
                });
            }
        },
        getHandleTransform: null,
        updateHandleTransform: null,
        clear: function(t) {
            this._lastValue = null, this._lastStatus = null;
            var e = t.getZr(), n = this._group, i = this._handle;
            e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, 
            this._handle = null, this._payloadInfo = null);
        },
        doClear: function() {},
        buildLabel: function(t, e, n) {
            return n = n || 0, {
                x: t[n],
                y: t[1 - n],
                width: e[n],
                height: e[1 - n]
            };
        }
    }).constructor = Hu, Vn(Hu);
    var L_ = Hu.extend({
        makeElOption: function(t, e, n, i, r) {
            var a = n.axis, o = a.grid, s = i.get("type"), l = nc(o, a).getOtherAxis(a).getGlobalExtent(), h = a.toGlobalCoord(a.dataToCoord(e, !0));
            if (s && "none" !== s) {
                var u = ju(i), c = O_[s](a, h, l, u);
                c.style = u, t.graphicKey = c.type, t.pointer = c;
            }
            Ju(e, t, Eh(o.model, n), n, i, r);
        },
        getHandleTransform: function(t, e, n) {
            var i = Eh(e.axis.grid.model, e, {
                labelInside: !1
            });
            return i.labelMargin = n.get("handle.margin"), {
                position: Qu(e.axis, t, i),
                rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)
            };
        },
        updateHandleTransform: function(t, e, n) {
            var i = n.axis, r = i.grid, a = i.getGlobalExtent(!0), o = nc(r, i).getOtherAxis(i).getGlobalExtent(), s = "x" === i.dim ? 0 : 1, l = t.position;
            l[s] += e[s], l[s] = Math.min(a[1], l[s]), l[s] = Math.max(a[0], l[s]);
            var h = (o[1] + o[0]) / 2, u = [ h, h ];
            u[s] = l[s];
            var c = [ {
                verticalAlign: "middle"
            }, {
                align: "center"
            } ];
            return {
                position: l,
                rotation: t.rotation,
                cursorPoint: u,
                tooltipOption: c[s]
            };
        }
    }), O_ = {
        line: function(t, e, n, i) {
            var r = tc([ e, n[0] ], [ e, n[1] ], ic(t));
            return Fi({
                shape: r,
                style: i
            }), {
                type: "Line",
                shape: r
            };
        },
        shadow: function(t, e, n) {
            var i = Math.max(1, t.getBandWidth()), r = n[1] - n[0];
            return {
                type: "Rect",
                shape: ec([ e - i / 2, n[0] ], [ i, r ], ic(t))
            };
        }
    };
    zx.registerAxisPointerClass("CartesianAxisPointer", L_), ps(function(t) {
        if (t) {
            (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
            var e = t.axisPointer.link;
            e && !x(e) && (t.axisPointer.link = [ e ]);
        }
    }), gs(Vm.PROCESSOR.STATISTIC, function(t, e) {
        t.getComponent("axisPointer").coordSysAxesInfo = Mh(t, e);
    }), vs({
        type: "updateAxisPointer",
        event: "updateAxisPointer",
        update: ":updateAxisPointer"
    }, function(t, e, n) {
        var i = t.currTrigger, r = [ t.x, t.y ], a = t, o = t.dispatchAction || m(n.dispatchAction, n), s = e.getComponent("axisPointer").coordSysAxesInfo;
        if (s) {
            zu(r) && (r = b_({
                seriesIndex: a.seriesIndex,
                dataIndex: a.dataIndex
            }, e).point);
            var l = zu(r), h = a.axesInfo, u = s.axesInfo, c = "leave" === i || zu(r), d = {}, f = {}, p = {
                list: [],
                map: {}
            }, g = {
                showPointer: S_(Cu, f),
                showTooltip: S_(Au, p)
            };
            M_(s.coordSysMap, function(t, e) {
                var n = l || t.containPoint(r);
                M_(s.coordSysAxesInfo[e], function(t) {
                    var e = t.axis, i = Lu(h, t);
                    if (!c && n && (!h || i)) {
                        var a = i && i.value;
                        null != a || l || (a = e.pointToData(r)), null != a && Iu(t, a, g, !1, d);
                    }
                });
            });
            var v = {};
            return M_(u, function(t, e) {
                var n = t.linkGroup;
                n && !f[e] && M_(n.axesInfo, function(e, i) {
                    var r = f[i];
                    if (e !== t && r) {
                        var a = r.value;
                        n.mapper && (a = t.axis.scale.parse(n.mapper(a, Ou(e), Ou(t)))), v[t.key] = a;
                    }
                });
            }), M_(v, function(t, e) {
                Iu(u[e], t, g, !0, d);
            }), Du(f, u, d), ku(p, r, t, o), Pu(u, 0, n), d;
        }
    }), ws({
        type: "tooltip",
        dependencies: [ "axisPointer" ],
        defaultOption: {
            zlevel: 0,
            z: 60,
            show: !0,
            showContent: !0,
            trigger: "item",
            triggerOn: "mousemove|click",
            alwaysShowContent: !1,
            displayMode: "single",
            renderMode: "auto",
            confine: !1,
            showDelay: 0,
            hideDelay: 100,
            transitionDuration: .4,
            enterable: !1,
            backgroundColor: "rgba(50,50,50,0.7)",
            borderColor: "#333",
            borderRadius: 4,
            borderWidth: 0,
            padding: 5,
            extraCssText: "",
            axisPointer: {
                type: "line",
                axis: "auto",
                animation: "auto",
                animationDurationUpdate: 200,
                animationEasingUpdate: "exponentialOut",
                crossStyle: {
                    color: "#999",
                    width: 1,
                    type: "dashed",
                    textStyle: {}
                }
            },
            textStyle: {
                color: "#fff",
                fontSize: 14
            }
        }
    });
    var z_ = f, B_ = Vr, E_ = [ "", "-webkit-", "-moz-", "-o-" ];
    sc.prototype = {
        constructor: sc,
        _enterable: !0,
        update: function() {
            var t = this._container, e = t.currentStyle || document.defaultView.getComputedStyle(t), n = t.style;
            "absolute" !== n.position && "absolute" !== e.position && (n.position = "relative");
        },
        show: function(t) {
            clearTimeout(this._hideTimeout);
            var e = this.el;
            e.style.cssText = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + oc(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), 
            e.style.display = e.innerHTML ? "block" : "none", e.style.pointerEvents = this._enterable ? "auto" : "none", 
            this._show = !0;
        },
        setContent: function(t) {
            this.el.innerHTML = null == t ? "" : t;
        },
        setEnterable: function(t) {
            this._enterable = t;
        },
        getSize: function() {
            var t = this.el;
            return [ t.clientWidth, t.clientHeight ];
        },
        moveTo: function(t, e) {
            var n, i = this._zr;
            i && i.painter && (n = i.painter.getViewportRootOffset()) && (t += n.offsetLeft, 
            e += n.offsetTop);
            var r = this.el.style;
            r.left = t + "px", r.top = e + "px", this._x = t, this._y = e;
        },
        hide: function() {
            this.el.style.display = "none", this._show = !1;
        },
        hideLater: function(t) {
            !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, 
            this._show = !1, this._hideTimeout = setTimeout(m(this.hide, this), t)) : this.hide());
        },
        isShow: function() {
            return this._show;
        },
        getOuterSize: function() {
            var t = this.el.clientWidth, e = this.el.clientHeight;
            if (document.defaultView && document.defaultView.getComputedStyle) {
                var n = document.defaultView.getComputedStyle(this.el);
                n && (t += parseInt(n.paddingLeft, 10) + parseInt(n.paddingRight, 10) + parseInt(n.borderLeftWidth, 10) + parseInt(n.borderRightWidth, 10), 
                e += parseInt(n.paddingTop, 10) + parseInt(n.paddingBottom, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10));
            }
            return {
                width: t,
                height: e
            };
        }
    }, lc.prototype = {
        constructor: lc,
        _enterable: !0,
        update: function() {},
        show: function() {
            this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr("show", !0), 
            this._show = !0;
        },
        setContent: function(t, e, n) {
            this.el && this._zr.remove(this.el);
            for (var i = {}, r = t, a = "{marker", o = r.indexOf(a); o >= 0; ) {
                var s = r.indexOf("|}"), l = r.substr(o + a.length, s - o - a.length);
                i["marker" + l] = l.indexOf("sub") > -1 ? {
                    textWidth: 4,
                    textHeight: 4,
                    textBorderRadius: 2,
                    textBackgroundColor: e[l],
                    textOffset: [ 3, 0 ]
                } : {
                    textWidth: 10,
                    textHeight: 10,
                    textBorderRadius: 5,
                    textBackgroundColor: e[l]
                }, o = (r = r.substr(s + 1)).indexOf("{marker");
            }
            this.el = new ug({
                style: {
                    rich: i,
                    text: t,
                    textLineHeight: 20,
                    textBackgroundColor: n.get("backgroundColor"),
                    textBorderRadius: n.get("borderRadius"),
                    textFill: n.get("textStyle.color"),
                    textPadding: n.get("padding")
                },
                z: n.get("z")
            }), this._zr.add(this.el);
            var h = this;
            this.el.on("mouseover", function() {
                h._enterable && (clearTimeout(h._hideTimeout), h._show = !0), h._inContent = !0;
            }), this.el.on("mouseout", function() {
                h._enterable && h._show && h.hideLater(h._hideDelay), h._inContent = !1;
            });
        },
        setEnterable: function(t) {
            this._enterable = t;
        },
        getSize: function() {
            var t = this.el.getBoundingRect();
            return [ t.width, t.height ];
        },
        moveTo: function(t, e) {
            this.el && this.el.attr("position", [ t, e ]);
        },
        hide: function() {
            this.el.hide(), this._show = !1;
        },
        hideLater: function(t) {
            !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, 
            this._show = !1, this._hideTimeout = setTimeout(m(this.hide, this), t)) : this.hide());
        },
        isShow: function() {
            return this._show;
        },
        getOuterSize: function() {
            return this.getSize();
        }
    };
    var R_ = m, N_ = f, F_ = Cr, V_ = new _g({
        shape: {
            x: -1,
            y: -1,
            width: 2,
            height: 2
        }
    });
    bs({
        type: "tooltip",
        init: function(t, e) {
            if (!$c.node) {
                var n = t.getComponent("tooltip").get("renderMode");
                this._renderMode = Rn(n);
                var i;
                "html" === this._renderMode ? (i = new sc(e.getDom(), e), this._newLine = "<br/>") : (i = new lc(e), 
                this._newLine = "\n"), this._tooltipContent = i;
            }
        },
        render: function(t, e, n) {
            if (!$c.node) {
                this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, 
                this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");
                var i = this._tooltipContent;
                i.update(), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow();
            }
        },
        _initGlobalListener: function() {
            var t = this._tooltipModel.get("triggerOn");
            Bu("itemTooltip", this._api, R_(function(e, n, i) {
                "none" !== t && (t.indexOf(e) >= 0 ? this._tryShow(n, i) : "leave" === e && this._hide(i));
            }, this));
        },
        _keepShow: function() {
            var t = this._tooltipModel, e = this._ecModel, n = this._api;
            if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
                var i = this;
                clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
                    i.manuallyShowTip(t, e, n, {
                        x: i._lastX,
                        y: i._lastY
                    });
                });
            }
        },
        manuallyShowTip: function(t, e, n, i) {
            if (i.from !== this.uid && !$c.node) {
                var r = uc(i, n);
                this._ticket = "";
                var a = i.dataByCoordSys;
                if (i.tooltip && null != i.x && null != i.y) {
                    var o = V_;
                    o.position = [ i.x, i.y ], o.update(), o.tooltip = i.tooltip, this._tryShow({
                        offsetX: i.x,
                        offsetY: i.y,
                        target: o
                    }, r);
                } else if (a) this._tryShow({
                    offsetX: i.x,
                    offsetY: i.y,
                    position: i.position,
                    event: {},
                    dataByCoordSys: i.dataByCoordSys,
                    tooltipOption: i.tooltipOption
                }, r); else if (null != i.seriesIndex) {
                    if (this._manuallyAxisShowTip(t, e, n, i)) return;
                    var s = b_(i, e), l = s.point[0], h = s.point[1];
                    null != l && null != h && this._tryShow({
                        offsetX: l,
                        offsetY: h,
                        position: i.position,
                        target: s.el,
                        event: {}
                    }, r);
                } else null != i.x && null != i.y && (n.dispatchAction({
                    type: "updateAxisPointer",
                    x: i.x,
                    y: i.y
                }), this._tryShow({
                    offsetX: i.x,
                    offsetY: i.y,
                    position: i.position,
                    target: n.getZr().findHover(i.x, i.y).target,
                    event: {}
                }, r));
            }
        },
        manuallyHideTip: function(t, e, n, i) {
            var r = this._tooltipContent;
            !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), 
            this._lastX = this._lastY = null, i.from !== this.uid && this._hide(uc(i, n));
        },
        _manuallyAxisShowTip: function(t, e, n, i) {
            var r = i.seriesIndex, a = i.dataIndex, o = e.getComponent("axisPointer").coordSysAxesInfo;
            if (null != r && null != a && null != o) {
                var s = e.getSeriesByIndex(r);
                if (s && "axis" === (t = hc([ s.getData().getItemModel(a), s, (s.coordinateSystem || {}).model, t ])).get("trigger")) return n.dispatchAction({
                    type: "updateAxisPointer",
                    seriesIndex: r,
                    dataIndex: a,
                    position: i.position
                }), !0;
            }
        },
        _tryShow: function(t, e) {
            var n = t.target;
            if (this._tooltipModel) {
                this._lastX = t.offsetX, this._lastY = t.offsetY;
                var i = t.dataByCoordSys;
                i && i.length ? this._showAxisTooltip(i, t) : n && null != n.dataIndex ? (this._lastDataByCoordSys = null, 
                this._showSeriesItemTooltip(t, n, e)) : n && n.tooltip ? (this._lastDataByCoordSys = null, 
                this._showComponentItemTooltip(t, n, e)) : (this._lastDataByCoordSys = null, this._hide(e));
            }
        },
        _showOrMove: function(t, e) {
            var n = t.get("showDelay");
            e = m(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e, n) : e();
        },
        _showAxisTooltip: function(t, e) {
            var n = this._ecModel, i = this._tooltipModel, a = [ e.offsetX, e.offsetY ], o = [], s = [], l = hc([ e.tooltipOption, i ]), h = this._renderMode, u = this._newLine, c = {};
            N_(t, function(t) {
                N_(t.dataByAxis, function(t) {
                    var e = n.getComponent(t.axisDim + "Axis", t.axisIndex), i = t.value, a = [];
                    if (e && null != i) {
                        var l = Ku(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt);
                        f(t.seriesDataIndices, function(o) {
                            var u = n.getSeriesByIndex(o.seriesIndex), d = o.dataIndexInside, f = u && u.getDataParams(d);
                            if (f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, 
                            f.axisValue = bl(e.axis, i), f.axisValueLabel = l, f) {
                                s.push(f);
                                var p, g = u.formatTooltip(d, !0, null, h);
                                if (b(g)) {
                                    p = g.html;
                                    var v = g.markers;
                                    r(c, v);
                                } else p = g;
                                a.push(p);
                            }
                        });
                        var d = l;
                        o.push("html" !== h ? a.join(u) : (d ? Wr(d) + u : "") + a.join(u));
                    }
                });
            }, this), o.reverse(), o = o.join(this._newLine + this._newLine);
            var d = e.position;
            this._showOrMove(l, function() {
                this._updateContentNotChangedOnAxis(t) ? this._updatePosition(l, d, a[0], a[1], this._tooltipContent, s) : this._showTooltipContent(l, o, s, Math.random(), a[0], a[1], d, void 0, c);
            });
        },
        _showSeriesItemTooltip: function(t, e, n) {
            var i = this._ecModel, r = e.seriesIndex, a = i.getSeriesByIndex(r), o = e.dataModel || a, s = e.dataIndex, l = e.dataType, h = o.getData(), u = hc([ h.getItemModel(s), o, a && (a.coordinateSystem || {}).model, this._tooltipModel ]), c = u.get("trigger");
            if (null == c || "item" === c) {
                var d, f, p = o.getDataParams(s, l), g = o.formatTooltip(s, !1, l, this._renderMode);
                b(g) ? (d = g.html, f = g.markers) : (d = g, f = null);
                var v = "item_" + o.name + "_" + s;
                this._showOrMove(u, function() {
                    this._showTooltipContent(u, d, p, v, t.offsetX, t.offsetY, t.position, t.target, f);
                }), n({
                    type: "showTip",
                    dataIndexInside: s,
                    dataIndex: h.getRawIndex(s),
                    seriesIndex: r,
                    from: this.uid
                });
            }
        },
        _showComponentItemTooltip: function(t, e, n) {
            var i = e.tooltip;
            if ("string" == typeof i) {
                var r = i;
                i = {
                    content: r,
                    formatter: r
                };
            }
            var a = new wr(i, this._tooltipModel, this._ecModel), o = a.get("content"), s = Math.random();
            this._showOrMove(a, function() {
                this._showTooltipContent(a, o, a.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e);
            }), n({
                type: "showTip",
                from: this.uid
            });
        },
        _showTooltipContent: function(t, e, n, i, r, a, o, s, l) {
            if (this._ticket = "", t.get("showContent") && t.get("show")) {
                var h = this._tooltipContent, u = t.get("formatter");
                o = o || t.get("position");
                var c = e;
                if (u && "string" == typeof u) c = Hr(u, n, !0); else if ("function" == typeof u) {
                    var d = R_(function(e, i) {
                        e === this._ticket && (h.setContent(i, l, t), this._updatePosition(t, o, r, a, h, n, s));
                    }, this);
                    this._ticket = i, c = u(n, i, d);
                }
                h.setContent(c, l, t), h.show(t), this._updatePosition(t, o, r, a, h, n, s);
            }
        },
        _updatePosition: function(t, e, n, i, r, a, o) {
            var s = this._api.getWidth(), l = this._api.getHeight();
            e = e || t.get("position");
            var h = r.getSize(), u = t.get("align"), c = t.get("verticalAlign"), d = o && o.getBoundingRect().clone();
            if (o && d.applyTransform(o.transform), "function" == typeof e && (e = e([ n, i ], a, r.el, d, {
                viewSize: [ s, l ],
                contentSize: h.slice()
            })), x(e)) n = F_(e[0], s), i = F_(e[1], l); else if (b(e)) {
                e.width = h[0], e.height = h[1];
                var f = jr(e, {
                    width: s,
                    height: l
                });
                n = f.x, i = f.y, u = null, c = null;
            } else "string" == typeof e && o ? (n = (p = fc(e, d, h))[0], i = p[1]) : (n = (p = cc(n, i, r, s, l, u ? null : 20, c ? null : 20))[0], 
            i = p[1]);
            if (u && (n -= pc(u) ? h[0] / 2 : "right" === u ? h[0] : 0), c && (i -= pc(c) ? h[1] / 2 : "bottom" === c ? h[1] : 0), 
            t.get("confine")) {
                var p = dc(n, i, r, s, l);
                n = p[0], i = p[1];
            }
            r.moveTo(n, i);
        },
        _updateContentNotChangedOnAxis: function(t) {
            var e = this._lastDataByCoordSys, n = !!e && e.length === t.length;
            return n && N_(e, function(e, i) {
                var r = e.dataByAxis || {}, a = (t[i] || {}).dataByAxis || [];
                (n &= r.length === a.length) && N_(r, function(t, e) {
                    var i = a[e] || {}, r = t.seriesDataIndices || [], o = i.seriesDataIndices || [];
                    (n &= t.value === i.value && t.axisType === i.axisType && t.axisId === i.axisId && r.length === o.length) && N_(r, function(t, e) {
                        var i = o[e];
                        n &= t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex;
                    });
                });
            }), this._lastDataByCoordSys = t, !!n;
        },
        _hide: function(t) {
            this._lastDataByCoordSys = null, t({
                type: "hideTip",
                from: this.uid
            });
        },
        dispose: function(t, e) {
            $c.node || (this._tooltipContent.hide(), Wu("itemTooltip", e));
        }
    }), vs({
        type: "showTip",
        event: "showTip",
        update: "tooltip:manuallyShowTip"
    }, function() {}), vs({
        type: "hideTip",
        event: "hideTip",
        update: "tooltip:manuallyHideTip"
    }, function() {}), sv.registerSubTypeDefaulter("dataZoom", function() {
        return "slider";
    });
    var W_ = [ "cartesian2d", "polar", "singleAxis" ], H_ = function(t, e) {
        var n = p(t = t.slice(), Yr), i = p(e = (e || []).slice(), Yr);
        return function(r, a) {
            f(t, function(t, o) {
                for (var s = {
                    name: t,
                    capital: n[o]
                }, l = 0; l < e.length; l++) s[e[l]] = t + i[l];
                r.call(a, s);
            });
        };
    }([ "x", "y", "z", "radius", "angle", "single" ], [ "axisIndex", "axis", "index", "id" ]), G_ = f, Z_ = Dr, X_ = function(t, e, n, i) {
        this._dimName = t, this._axisIndex = e, this._valueWindow, this._percentWindow, 
        this._dataExtent, this._minMaxSpan, this.ecModel = i, this._dataZoomModel = n;
    };
    X_.prototype = {
        constructor: X_,
        hostedBy: function(t) {
            return this._dataZoomModel === t;
        },
        getDataValueWindow: function() {
            return this._valueWindow.slice();
        },
        getDataPercentWindow: function() {
            return this._percentWindow.slice();
        },
        getTargetSeriesModels: function() {
            var t = [], e = this.ecModel;
            return e.eachSeries(function(n) {
                if (gc(n.get("coordinateSystem"))) {
                    var i = this._dimName, r = e.queryComponents({
                        mainType: i + "Axis",
                        index: n.get(i + "AxisIndex"),
                        id: n.get(i + "AxisId")
                    })[0];
                    this._axisIndex === (r && r.componentIndex) && t.push(n);
                }
            }, this), t;
        },
        getAxisModel: function() {
            return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex);
        },
        getOtherAxisModel: function() {
            var t, e, n = this._dimName, i = this.ecModel, r = this.getAxisModel();
            "x" === n || "y" === n ? (e = "gridIndex", t = "x" === n ? "y" : "x") : (e = "polarIndex", 
            t = "angle" === n ? "radius" : "angle");
            var a;
            return i.eachComponent(t + "Axis", function(t) {
                (t.get(e) || 0) === (r.get(e) || 0) && (a = t);
            }), a;
        },
        getMinMaxSpan: function() {
            return i(this._minMaxSpan);
        },
        calculateDataWindow: function(t) {
            var e = this._dataExtent, n = this.getAxisModel().axis.scale, i = this._dataZoomModel.getRangePropMode(), r = [ 0, 100 ], a = [ t.start, t.end ], o = [];
            return G_([ "startValue", "endValue" ], function(e) {
                o.push(null != t[e] ? n.parse(t[e]) : null);
            }), G_([ 0, 1 ], function(t) {
                var s = o[t], l = a[t];
                "percent" === i[t] ? (null == l && (l = r[t]), s = n.parse(Tr(l, r, e, !0))) : l = Tr(s, e, r, !0), 
                o[t] = s, a[t] = l;
            }), {
                valueWindow: Z_(o),
                percentWindow: Z_(a)
            };
        },
        reset: function(t) {
            if (t === this._dataZoomModel) {
                var e = this.getTargetSeriesModels();
                this._dataExtent = mc(this, this._dimName, e);
                var n = this.calculateDataWindow(t.option);
                this._valueWindow = n.valueWindow, this._percentWindow = n.percentWindow, _c(this), 
                xc(this);
            }
        },
        restore: function(t) {
            t === this._dataZoomModel && (this._valueWindow = this._percentWindow = null, xc(this, !0));
        },
        filterData: function(t) {
            function e(t) {
                return t >= a[0] && t <= a[1];
            }
            if (t === this._dataZoomModel) {
                var n = this._dimName, i = this.getTargetSeriesModels(), r = t.get("filterMode"), a = this._valueWindow;
                "none" !== r && G_(i, function(t) {
                    var i = t.getData(), o = i.mapDimension(n, !0);
                    o.length && ("weakFilter" === r ? i.filterSelf(function(t) {
                        for (var e, n, r, s = 0; s < o.length; s++) {
                            var l = i.get(o[s], t), h = !isNaN(l), u = l < a[0], c = l > a[1];
                            if (h && !u && !c) return !0;
                            h && (r = !0), u && (e = !0), c && (n = !0);
                        }
                        return r && e && n;
                    }) : G_(o, function(n) {
                        if ("empty" === r) t.setData(i.map(n, function(t) {
                            return e(t) ? t : NaN;
                        })); else {
                            var o = {};
                            o[n] = a, i.selectRange(o);
                        }
                    }), G_(o, function(t) {
                        i.setApproximateExtent(a, t);
                    }));
                });
            }
        }
    };
    var Y_ = f, q_ = H_, j_ = ws({
        type: "dataZoom",
        dependencies: [ "xAxis", "yAxis", "zAxis", "radiusAxis", "angleAxis", "singleAxis", "series" ],
        defaultOption: {
            zlevel: 0,
            z: 4,
            orient: null,
            xAxisIndex: null,
            yAxisIndex: null,
            filterMode: "filter",
            throttle: null,
            start: 0,
            end: 100,
            startValue: null,
            endValue: null,
            minSpan: null,
            maxSpan: null,
            minValueSpan: null,
            maxValueSpan: null,
            rangeMode: null
        },
        init: function(t, e, n) {
            this._dataIntervalByAxis = {}, this._dataInfo = {}, this._axisProxies = {}, this.textStyleModel, 
            this._autoThrottle = !0, this._rangePropMode = [ "percent", "percent" ];
            var i = wc(t);
            this.mergeDefaultAndTheme(t, n), this.doInit(i);
        },
        mergeOption: function(t) {
            var e = wc(t);
            r(this.option, t, !0), this.doInit(e);
        },
        doInit: function(t) {
            var e = this.option;
            $c.canvasSupported || (e.realtime = !1), this._setDefaultThrottle(t), bc(this, t), 
            Y_([ [ "start", "startValue" ], [ "end", "endValue" ] ], function(t, n) {
                "value" === this._rangePropMode[n] && (e[t[0]] = null);
            }, this), this.textStyleModel = this.getModel("textStyle"), this._resetTarget(), 
            this._giveAxisProxies();
        },
        _giveAxisProxies: function() {
            var t = this._axisProxies;
            this.eachTargetAxis(function(e, n, i, r) {
                var a = this.dependentModels[e.axis][n], o = a.__dzAxisProxy || (a.__dzAxisProxy = new X_(e.name, n, this, r));
                t[e.name + "_" + n] = o;
            }, this);
        },
        _resetTarget: function() {
            var t = this.option, e = this._judgeAutoMode();
            q_(function(e) {
                var n = e.axisIndex;
                t[n] = Mn(t[n]);
            }, this), "axisIndex" === e ? this._autoSetAxisIndex() : "orient" === e && this._autoSetOrient();
        },
        _judgeAutoMode: function() {
            var t = this.option, e = !1;
            q_(function(n) {
                null != t[n.axisIndex] && (e = !0);
            }, this);
            var n = t.orient;
            return null == n && e ? "orient" : e ? void 0 : (null == n && (t.orient = "horizontal"), 
            "axisIndex");
        },
        _autoSetAxisIndex: function() {
            var t = !0, e = this.get("orient", !0), n = this.option, i = this.dependentModels;
            if (t) {
                var r = "vertical" === e ? "y" : "x";
                i[r + "Axis"].length ? (n[r + "AxisIndex"] = [ 0 ], t = !1) : Y_(i.singleAxis, function(i) {
                    t && i.get("orient", !0) === e && (n.singleAxisIndex = [ i.componentIndex ], t = !1);
                });
            }
            t && q_(function(e) {
                if (t) {
                    var i = [], r = this.dependentModels[e.axis];
                    if (r.length && !i.length) for (var a = 0, o = r.length; o > a; a++) "category" === r[a].get("type") && i.push(a);
                    n[e.axisIndex] = i, i.length && (t = !1);
                }
            }, this), t && this.ecModel.eachSeries(function(t) {
                this._isSeriesHasAllAxesTypeOf(t, "value") && q_(function(e) {
                    var i = n[e.axisIndex], r = t.get(e.axisIndex), a = t.get(e.axisId);
                    h(i, r = t.ecModel.queryComponents({
                        mainType: e.axis,
                        index: r,
                        id: a
                    })[0].componentIndex) < 0 && i.push(r);
                });
            }, this);
        },
        _autoSetOrient: function() {
            var t;
            this.eachTargetAxis(function(e) {
                !t && (t = e.name);
            }, this), this.option.orient = "y" === t ? "vertical" : "horizontal";
        },
        _isSeriesHasAllAxesTypeOf: function(t, e) {
            var n = !0;
            return q_(function(i) {
                var r = t.get(i.axisIndex), a = this.dependentModels[i.axis][r];
                a && a.get("type") === e || (n = !1);
            }, this), n;
        },
        _setDefaultThrottle: function(t) {
            if (t.hasOwnProperty("throttle") && (this._autoThrottle = !1), this._autoThrottle) {
                var e = this.ecModel.option;
                this.option.throttle = e.animation && e.animationDurationUpdate > 0 ? 100 : 20;
            }
        },
        getFirstTargetAxisModel: function() {
            var t;
            return q_(function(e) {
                if (null == t) {
                    var n = this.get(e.axisIndex);
                    n.length && (t = this.dependentModels[e.axis][n[0]]);
                }
            }, this), t;
        },
        eachTargetAxis: function(t, e) {
            var n = this.ecModel;
            q_(function(i) {
                Y_(this.get(i.axisIndex), function(r) {
                    t.call(e, i, r, this, n);
                }, this);
            }, this);
        },
        getAxisProxy: function(t, e) {
            return this._axisProxies[t + "_" + e];
        },
        getAxisModel: function(t, e) {
            var n = this.getAxisProxy(t, e);
            return n && n.getAxisModel();
        },
        setRawRange: function(t, e) {
            var n = this.option;
            Y_([ [ "start", "startValue" ], [ "end", "endValue" ] ], function(e) {
                (null != t[e[0]] || null != t[e[1]]) && (n[e[0]] = t[e[0]], n[e[1]] = t[e[1]]);
            }, this), !e && bc(this, t);
        },
        getPercentRange: function() {
            var t = this.findRepresentativeAxisProxy();
            return t ? t.getDataPercentWindow() : void 0;
        },
        getValueRange: function(t, e) {
            if (null != t || null != e) return this.getAxisProxy(t, e).getDataValueWindow();
            var n = this.findRepresentativeAxisProxy();
            return n ? n.getDataValueWindow() : void 0;
        },
        findRepresentativeAxisProxy: function(t) {
            if (t) return t.__dzAxisProxy;
            var e = this._axisProxies;
            for (var n in e) if (e.hasOwnProperty(n) && e[n].hostedBy(this)) return e[n];
            for (var n in e) if (e.hasOwnProperty(n) && !e[n].hostedBy(this)) return e[n];
        },
        getRangePropMode: function() {
            return this._rangePropMode.slice();
        }
    }), U_ = jv.extend({
        type: "dataZoom",
        render: function(t, e, n) {
            this.dataZoomModel = t, this.ecModel = e, this.api = n;
        },
        getTargetCoordInfo: function() {
            function t(t, e, n, i) {
                for (var r, a = 0; a < n.length; a++) if (n[a].model === t) {
                    r = n[a];
                    break;
                }
                r || n.push(r = {
                    model: t,
                    axisModels: [],
                    coordIndex: i
                }), r.axisModels.push(e);
            }
            var e = this.dataZoomModel, n = this.ecModel, i = {};
            return e.eachTargetAxis(function(e, r) {
                var a = n.getComponent(e.axis, r);
                if (a) {
                    var o = a.getCoordSysModel();
                    o && t(o, a, i[o.mainType] || (i[o.mainType] = []), o.componentIndex);
                }
            }, this), i;
        }
    }), $_ = (j_.extend({
        type: "dataZoom.slider",
        layoutMode: "box",
        defaultOption: {
            show: !0,
            right: "ph",
            top: "ph",
            width: "ph",
            height: "ph",
            left: null,
            bottom: null,
            backgroundColor: "rgba(47,69,84,0)",
            dataBackground: {
                lineStyle: {
                    color: "#2f4554",
                    width: .5,
                    opacity: .3
                },
                areaStyle: {
                    color: "rgba(47,69,84,0.3)",
                    opacity: .3
                }
            },
            borderColor: "#ddd",
            fillerColor: "rgba(167,183,204,0.4)",
            handleIcon: "M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z",
            handleSize: "100%",
            handleStyle: {
                color: "#a7b7cc"
            },
            labelPrecision: null,
            labelFormatter: null,
            showDetail: !0,
            showDataShadow: "auto",
            realtime: !0,
            zoomLock: !1,
            textStyle: {
                color: "#333"
            }
        }
    }), function(t, e, n, i, r, a) {
        e[0] = Sc(e[0], n), e[1] = Sc(e[1], n), t = t || 0;
        var o = n[1] - n[0];
        null != r && (r = Sc(r, [ 0, o ])), null != a && (a = Math.max(a, null != r ? r : 0)), 
        "all" === i && (r = a = Math.abs(e[1] - e[0]), i = 0);
        var s = Mc(e, i);
        e[i] += t;
        var l = r || 0, h = n.slice();
        s.sign < 0 ? h[0] += l : h[1] -= l, e[i] = Sc(e[i], h);
        u = Mc(e, i);
        null != r && (u.sign !== s.sign || u.span < r) && (e[1 - i] = e[i] + s.sign * r);
        var u = Mc(e, i);
        return null != a && u.span > a && (e[1 - i] = e[i] + u.sign * a), e;
    }), K_ = _g, Q_ = Tr, J_ = Dr, tw = m, ew = f, nw = "horizontal", iw = "vertical", rw = 5, aw = [ "line", "bar", "candlestick", "scatter" ], ow = U_.extend({
        type: "dataZoom.slider",
        init: function(t, e) {
            this._displayables = {}, this._orient, this._range, this._handleEnds, this._size, 
            this._handleWidth, this._handleHeight, this._location, this._dragging, this._dataShadowInfo, 
            this.api = e;
        },
        render: function(t, e, n, i) {
            return ow.superApply(this, "render", arguments), go(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"), 
            this._orient = t.get("orient"), !1 === this.dataZoomModel.get("show") ? void this.group.removeAll() : (i && "dataZoom" === i.type && i.from === this.uid || this._buildView(), 
            void this._updateView());
        },
        remove: function() {
            ow.superApply(this, "remove", arguments), vo(this, "_dispatchZoomAction");
        },
        dispose: function() {
            ow.superApply(this, "dispose", arguments), vo(this, "_dispatchZoomAction");
        },
        _buildView: function() {
            var t = this.group;
            t.removeAll(), this._resetLocation(), this._resetInterval();
            var e = this._displayables.barGroup = new rf();
            this._renderBackground(), this._renderHandle(), this._renderDataShadow(), t.add(e), 
            this._positionGroup();
        },
        _resetLocation: function() {
            var t = this.dataZoomModel, e = this.api, n = this._findCoordRect(), i = {
                width: e.getWidth(),
                height: e.getHeight()
            }, r = this._orient === nw ? {
                right: i.width - n.x - n.width,
                top: i.height - 30 - 7,
                width: n.width,
                height: 30
            } : {
                right: 7,
                top: n.y,
                width: 30,
                height: n.height
            }, a = $r(t.option);
            f([ "right", "top", "width", "height" ], function(t) {
                "ph" === a[t] && (a[t] = r[t]);
            });
            var o = jr(a, i, t.padding);
            this._location = {
                x: o.x,
                y: o.y
            }, this._size = [ o.width, o.height ], this._orient === iw && this._size.reverse();
        },
        _positionGroup: function() {
            var t = this.group, e = this._location, n = this._orient, i = this.dataZoomModel.getFirstTargetAxisModel(), r = i && i.get("inverse"), a = this._displayables.barGroup, o = (this._dataShadowInfo || {}).otherAxisInverse;
            a.attr(n !== nw || r ? n === nw && r ? {
                scale: o ? [ -1, 1 ] : [ -1, -1 ]
            } : n !== iw || r ? {
                scale: o ? [ -1, -1 ] : [ -1, 1 ],
                rotation: Math.PI / 2
            } : {
                scale: o ? [ 1, -1 ] : [ 1, 1 ],
                rotation: Math.PI / 2
            } : {
                scale: o ? [ 1, 1 ] : [ 1, -1 ]
            });
            var s = t.getBoundingRect([ a ]);
            t.attr("position", [ e.x - s.x, e.y - s.y ]);
        },
        _getViewExtent: function() {
            return [ 0, this._size[0] ];
        },
        _renderBackground: function() {
            var t = this.dataZoomModel, e = this._size, n = this._displayables.barGroup;
            n.add(new K_({
                silent: !0,
                shape: {
                    x: 0,
                    y: 0,
                    width: e[0],
                    height: e[1]
                },
                style: {
                    fill: t.get("backgroundColor")
                },
                z2: -40
            })), n.add(new K_({
                shape: {
                    x: 0,
                    y: 0,
                    width: e[0],
                    height: e[1]
                },
                style: {
                    fill: "transparent"
                },
                z2: 0,
                onclick: m(this._onClickPanelClick, this)
            }));
        },
        _renderDataShadow: function() {
            var t = this._dataShadowInfo = this._prepareDataShadowInfo();
            if (t) {
                var e = this._size, n = t.series, i = n.getRawData(), r = n.getShadowDim ? n.getShadowDim() : t.otherDim;
                if (null != r) {
                    var a = i.getDataExtent(r), o = .3 * (a[1] - a[0]);
                    a = [ a[0] - o, a[1] + o ];
                    var l, h = [ 0, e[1] ], u = [ 0, e[0] ], c = [ [ e[0], 0 ], [ 0, 0 ] ], d = [], f = u[1] / (i.count() - 1), p = 0, g = Math.round(i.count() / e[0]);
                    i.each([ r ], function(t, e) {
                        if (g > 0 && e % g) p += f; else {
                            var n = null == t || isNaN(t) || "" === t, i = n ? 0 : Q_(t, a, h, !0);
                            n && !l && e ? (c.push([ c[c.length - 1][0], 0 ]), d.push([ d[d.length - 1][0], 0 ])) : !n && l && (c.push([ p, 0 ]), 
                            d.push([ p, 0 ])), c.push([ p, i ]), d.push([ p, i ]), p += f, l = n;
                        }
                    });
                    var v = this.dataZoomModel;
                    this._displayables.barGroup.add(new yg({
                        shape: {
                            points: c
                        },
                        style: s({
                            fill: v.get("dataBackgroundColor")
                        }, v.getModel("dataBackground.areaStyle").getAreaStyle()),
                        silent: !0,
                        z2: -20
                    })), this._displayables.barGroup.add(new xg({
                        shape: {
                            points: d
                        },
                        style: v.getModel("dataBackground.lineStyle").getLineStyle(),
                        silent: !0,
                        z2: -19
                    }));
                }
            }
        },
        _prepareDataShadowInfo: function() {
            var t = this.dataZoomModel, e = t.get("showDataShadow");
            if (!1 !== e) {
                var n, i = this.ecModel;
                return t.eachTargetAxis(function(r, a) {
                    f(t.getAxisProxy(r.name, a).getTargetSeriesModels(), function(t) {
                        if (!(n || !0 !== e && h(aw, t.get("type")) < 0)) {
                            var o, s = i.getComponent(r.axis, a).axis, l = Ic(r.name), u = t.coordinateSystem;
                            null != l && u.getOtherAxis && (o = u.getOtherAxis(s).inverse), l = t.getData().mapDimension(l), 
                            n = {
                                thisAxis: s,
                                series: t,
                                thisDim: r.name,
                                otherDim: l,
                                otherAxisInverse: o
                            };
                        }
                    }, this);
                }, this), n;
            }
        },
        _renderHandle: function() {
            var t = this._displayables, e = t.handles = [], n = t.handleLabels = [], i = this._displayables.barGroup, r = this._size, a = this.dataZoomModel;
            i.add(t.filler = new K_({
                draggable: !0,
                cursor: Tc(this._orient),
                drift: tw(this._onDragMove, this, "all"),
                onmousemove: function(t) {
                    wd(t.event);
                },
                ondragstart: tw(this._showDataInfo, this, !0),
                ondragend: tw(this._onDragEnd, this),
                onmouseover: tw(this._showDataInfo, this, !0),
                onmouseout: tw(this._showDataInfo, this, !1),
                style: {
                    fill: a.get("fillerColor"),
                    textPosition: "inside"
                }
            })), i.add(new K_(Vi({
                silent: !0,
                shape: {
                    x: 0,
                    y: 0,
                    width: r[0],
                    height: r[1]
                },
                style: {
                    stroke: a.get("dataBackgroundColor") || a.get("borderColor"),
                    lineWidth: 1,
                    fill: "rgba(0,0,0,0)"
                }
            }))), ew([ 0, 1 ], function(t) {
                var r = _r(a.get("handleIcon"), {
                    cursor: Tc(this._orient),
                    draggable: !0,
                    drift: tw(this._onDragMove, this, t),
                    onmousemove: function(t) {
                        wd(t.event);
                    },
                    ondragend: tw(this._onDragEnd, this),
                    onmouseover: tw(this._showDataInfo, this, !0),
                    onmouseout: tw(this._showDataInfo, this, !1)
                }, {
                    x: -1,
                    y: 0,
                    width: 2,
                    height: 2
                }), o = r.getBoundingRect();
                this._handleHeight = Cr(a.get("handleSize"), this._size[1]), this._handleWidth = o.width / o.height * this._handleHeight, 
                r.setStyle(a.getModel("handleStyle").getItemStyle());
                var s = a.get("handleColor");
                null != s && (r.style.fill = s), i.add(e[t] = r);
                var l = a.textStyleModel;
                this.group.add(n[t] = new ug({
                    silent: !0,
                    invisible: !0,
                    style: {
                        x: 0,
                        y: 0,
                        text: "",
                        textVerticalAlign: "middle",
                        textAlign: "center",
                        textFill: l.getTextColor(),
                        textFont: l.getFont()
                    },
                    z2: 10
                }));
            }, this);
        },
        _resetInterval: function() {
            var t = this._range = this.dataZoomModel.getPercentRange(), e = this._getViewExtent();
            this._handleEnds = [ Q_(t[0], [ 0, 100 ], e, !0), Q_(t[1], [ 0, 100 ], e, !0) ];
        },
        _updateInterval: function(t, e) {
            var n = this.dataZoomModel, i = this._handleEnds, r = this._getViewExtent(), a = n.findRepresentativeAxisProxy().getMinMaxSpan(), o = [ 0, 100 ];
            $_(e, i, r, n.get("zoomLock") ? "all" : t, null != a.minSpan ? Q_(a.minSpan, o, r, !0) : null, null != a.maxSpan ? Q_(a.maxSpan, o, r, !0) : null);
            var s = this._range, l = this._range = J_([ Q_(i[0], r, o, !0), Q_(i[1], r, o, !0) ]);
            return !s || s[0] !== l[0] || s[1] !== l[1];
        },
        _updateView: function(t) {
            var e = this._displayables, n = this._handleEnds, i = J_(n.slice()), r = this._size;
            ew([ 0, 1 ], function(t) {
                var i = e.handles[t], a = this._handleHeight;
                i.attr({
                    scale: [ a / 2, a / 2 ],
                    position: [ n[t], r[1] / 2 - a / 2 ]
                });
            }, this), e.filler.setShape({
                x: i[0],
                y: 0,
                width: i[1] - i[0],
                height: r[1]
            }), this._updateDataInfo(t);
        },
        _updateDataInfo: function(t) {
            function e(t) {
                var e = vr(i.handles[t].parent, this.group), n = yr(0 === t ? "right" : "left", e), s = this._handleWidth / 2 + rw, l = mr([ c[t] + (0 === t ? -s : s), this._size[1] / 2 ], e);
                r[t].setStyle({
                    x: l[0],
                    y: l[1],
                    textVerticalAlign: a === nw ? "middle" : n,
                    textAlign: a === nw ? n : "center",
                    text: o[t]
                });
            }
            var n = this.dataZoomModel, i = this._displayables, r = i.handleLabels, a = this._orient, o = [ "", "" ];
            if (n.get("showDetail")) {
                var s = n.findRepresentativeAxisProxy();
                if (s) {
                    var l = s.getAxisModel().axis, h = this._range, u = t ? s.calculateDataWindow({
                        start: h[0],
                        end: h[1]
                    }).valueWindow : s.getDataValueWindow();
                    o = [ this._formatLabel(u[0], l), this._formatLabel(u[1], l) ];
                }
            }
            var c = J_(this._handleEnds.slice());
            e.call(this, 0), e.call(this, 1);
        },
        _formatLabel: function(t, e) {
            var n = this.dataZoomModel, i = n.get("labelFormatter"), r = n.get("labelPrecision");
            (null == r || "auto" === r) && (r = e.getPixelPrecision());
            var a = null == t || isNaN(t) ? "" : "category" === e.type || "time" === e.type ? e.scale.getLabel(Math.round(t)) : t.toFixed(Math.min(r, 20));
            return _(i) ? i(t, a) : w(i) ? i.replace("{value}", a) : a;
        },
        _showDataInfo: function(t) {
            t = this._dragging || t;
            var e = this._displayables.handleLabels;
            e[0].attr("invisible", !t), e[1].attr("invisible", !t);
        },
        _onDragMove: function(t, e, n) {
            this._dragging = !0;
            var i = mr([ e, n ], this._displayables.barGroup.getLocalTransform(), !0), r = this._updateInterval(t, i[0]), a = this.dataZoomModel.get("realtime");
            this._updateView(!a), r && a && this._dispatchZoomAction();
        },
        _onDragEnd: function() {
            this._dragging = !1, this._showDataInfo(!1), !this.dataZoomModel.get("realtime") && this._dispatchZoomAction();
        },
        _onClickPanelClick: function(t) {
            var e = this._size, n = this._displayables.barGroup.transformCoordToLocal(t.offsetX, t.offsetY);
            if (!(n[0] < 0 || n[0] > e[0] || n[1] < 0 || n[1] > e[1])) {
                var i = this._handleEnds, r = (i[0] + i[1]) / 2, a = this._updateInterval("all", n[0] - r);
                this._updateView(), a && this._dispatchZoomAction();
            }
        },
        _dispatchZoomAction: function() {
            var t = this._range;
            this.api.dispatchAction({
                type: "dataZoom",
                from: this.uid,
                dataZoomId: this.dataZoomModel.id,
                start: t[0],
                end: t[1]
            });
        },
        _findCoordRect: function() {
            var t;
            if (ew(this.getTargetCoordInfo(), function(e) {
                if (!t && e.length) {
                    var n = e[0].model.coordinateSystem;
                    t = n.getRect && n.getRect();
                }
            }), !t) {
                var e = this.api.getWidth(), n = this.api.getHeight();
                t = {
                    x: .2 * e,
                    y: .2 * n,
                    width: .6 * e,
                    height: .6 * n
                };
            }
            return t;
        }
    });
    j_.extend({
        type: "dataZoom.inside",
        defaultOption: {
            disabled: !1,
            zoomLock: !1,
            zoomOnMouseWheel: !0,
            moveOnMouseMove: !0,
            moveOnMouseWheel: !1,
            preventDefaultMouseMove: !0
        }
    });
    var sw = "\0_ec_interaction_mutex";
    vs({
        type: "takeGlobalCursor",
        event: "globalCursorTaken",
        update: "update"
    }, function() {}), c(Dc, yd);
    var lw = "\0_ec_dataZoom_roams", hw = m, uw = U_.extend({
        type: "dataZoom.inside",
        init: function() {
            this._range;
        },
        render: function(t, e, n) {
            uw.superApply(this, "render", arguments), this._range = t.getPercentRange(), f(this.getTargetCoordInfo(), function(e, i) {
                var r = p(e, function(t) {
                    return Vc(t.model);
                });
                f(e, function(e) {
                    var a = e.model, o = {};
                    f([ "pan", "zoom", "scrollMove" ], function(t) {
                        o[t] = hw(cw[t], this, e, i);
                    }, this), Nc(n, {
                        coordId: Vc(a),
                        allCoordIds: r,
                        containsPoint: function(t, e, n) {
                            return a.coordinateSystem.containPoint([ e, n ]);
                        },
                        dataZoomId: t.id,
                        dataZoomModel: t,
                        getRange: o
                    });
                }, this);
            }, this);
        },
        dispose: function() {
            Fc(this.api, this.dataZoomModel.id), uw.superApply(this, "dispose", arguments), 
            this._range = null;
        }
    }), cw = {
        zoom: function(t, e, n, i) {
            var r = this._range, a = r.slice(), o = t.axisModels[0];
            if (o) {
                var s = dw[e](null, [ i.originX, i.originY ], o, n, t), l = (s.signal > 0 ? s.pixelStart + s.pixelLength - s.pixel : s.pixel - s.pixelStart) / s.pixelLength * (a[1] - a[0]) + a[0], h = Math.max(1 / i.scale, 0);
                a[0] = (a[0] - l) * h + l, a[1] = (a[1] - l) * h + l;
                var u = this.dataZoomModel.findRepresentativeAxisProxy().getMinMaxSpan();
                return $_(0, a, [ 0, 100 ], 0, u.minSpan, u.maxSpan), this._range = a, r[0] !== a[0] || r[1] !== a[1] ? a : void 0;
            }
        },
        pan: Yc(function(t, e, n, i, r, a) {
            var o = dw[i]([ a.oldX, a.oldY ], [ a.newX, a.newY ], e, r, n);
            return o.signal * (t[1] - t[0]) * o.pixel / o.pixelLength;
        }),
        scrollMove: Yc(function(t, e, n, i, r, a) {
            return dw[i]([ 0, 0 ], [ a.scrollDelta, a.scrollDelta ], e, r, n).signal * (t[1] - t[0]) * a.scrollDelta;
        })
    }, dw = {
        grid: function(t, e, n, i, r) {
            var a = n.axis, o = {}, s = r.model.coordinateSystem.getRect();
            return t = t || [ 0, 0 ], "x" === a.dim ? (o.pixel = e[0] - t[0], o.pixelLength = s.width, 
            o.pixelStart = s.x, o.signal = a.inverse ? 1 : -1) : (o.pixel = e[1] - t[1], o.pixelLength = s.height, 
            o.pixelStart = s.y, o.signal = a.inverse ? -1 : 1), o;
        },
        polar: function(t, e, n, i, r) {
            var a = n.axis, o = {}, s = r.model.coordinateSystem, l = s.getRadiusAxis().getExtent(), h = s.getAngleAxis().getExtent();
            return t = t ? s.pointToCoord(t) : [ 0, 0 ], e = s.pointToCoord(e), "radiusAxis" === n.mainType ? (o.pixel = e[0] - t[0], 
            o.pixelLength = l[1] - l[0], o.pixelStart = l[0], o.signal = a.inverse ? 1 : -1) : (o.pixel = e[1] - t[1], 
            o.pixelLength = h[1] - h[0], o.pixelStart = h[0], o.signal = a.inverse ? -1 : 1), 
            o;
        },
        singleAxis: function(t, e, n, i, r) {
            var a = n.axis, o = r.model.coordinateSystem.getRect(), s = {};
            return t = t || [ 0, 0 ], "horizontal" === a.orient ? (s.pixel = e[0] - t[0], s.pixelLength = o.width, 
            s.pixelStart = o.x, s.signal = a.inverse ? 1 : -1) : (s.pixel = e[1] - t[1], s.pixelLength = o.height, 
            s.pixelStart = o.y, s.signal = a.inverse ? -1 : 1), s;
        }
    };
    gs({
        getTargetSeries: function(t) {
            var e = R();
            return t.eachComponent("dataZoom", function(t) {
                t.eachTargetAxis(function(t, n, i) {
                    f(i.getAxisProxy(t.name, n).getTargetSeriesModels(), function(t) {
                        e.set(t.uid, t);
                    });
                });
            }), e;
        },
        modifyOutputEnd: !0,
        overallReset: function(t, e) {
            t.eachComponent("dataZoom", function(t) {
                t.eachTargetAxis(function(t, n, i) {
                    i.getAxisProxy(t.name, n).reset(i, e);
                }), t.eachTargetAxis(function(t, n, i) {
                    i.getAxisProxy(t.name, n).filterData(i, e);
                });
            }), t.eachComponent("dataZoom", function(t) {
                var e = t.findRepresentativeAxisProxy(), n = e.getDataPercentWindow(), i = e.getDataValueWindow();
                t.setRawRange({
                    start: n[0],
                    end: n[1],
                    startValue: i[0],
                    endValue: i[1]
                }, !0);
            });
        }
    }), vs("dataZoom", function(t, e) {
        var n = vc(m(e.eachComponent, e, "dataZoom"), H_, function(t, e) {
            return t.get(e.axisIndex);
        }), i = [];
        e.eachComponent({
            mainType: "dataZoom",
            query: t
        }, function(t) {
            i.push.apply(i, n(t).nodes);
        }), f(i, function(e) {
            e.setRawRange({
                start: t.start,
                end: t.end,
                startValue: t.startValue,
                endValue: t.endValue
            });
        });
    }), e.version = "4.2.0", e.dependencies = Em, e.PRIORITY = Vm, e.init = function(t, e, n) {
        var i = ds(t);
        if (i) return i;
        var r = new Zo(t, e, n);
        return r.id = "ec_" + iy++, ey[r.id] = r, Bn(t, ay, r.id), us(r), r;
    }, e.connect = function(t) {
        if (x(t)) {
            var e = t;
            t = null, Lm(e, function(e) {
                null != e.group && (t = e.group);
            }), t = t || "g_" + ry++, Lm(e, function(e) {
                e.group = t;
            });
        }
        return ny[t] = !0, t;
    }, e.disConnect = cs, e.disconnect = oy, e.dispose = function(t) {
        "string" == typeof t ? t = ey[t] : t instanceof Zo || (t = ds(t)), t instanceof Zo && !t.isDisposed() && t.dispose();
    }, e.getInstanceByDom = ds, e.getInstanceById = function(t) {
        return ey[t];
    }, e.registerTheme = fs, e.registerPreprocessor = ps, e.registerProcessor = gs, 
    e.registerPostUpdate = function(t) {
        Km.push(t);
    }, e.registerAction = vs, e.registerCoordinateSystem = function(t, e) {
        ba.register(t, e);
    }, e.getCoordinateSystemDimensions = function(t) {
        var e = ba.get(t);
        return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0;
    }, e.registerLayout = ms, e.registerVisual = ys, e.registerLoading = _s, e.extendComponentModel = ws, 
    e.extendComponentView = bs, e.extendSeriesModel = Ms, e.extendChartView = Ss, e.setCanvasCreator = function(t) {
        n("createCanvas", t);
    }, e.registerMap = function(t, e, n) {
        Dm.registerMap(t, e, n);
    }, e.getMap = function(t) {
        var e = Dm.retrieveMap(t);
        return e && e[0] && {
            geoJson: e[0].geoJSON,
            specialAreas: e[0].specialAreas
        };
    }, e.dataTool = sy, e.zrender = qf, e.number = Yg, e.format = tv, e.throttle = po, 
    e.helper = nx, e.matrix = Td, e.vector = vd, e.color = Xd, e.parseGeoJSON = rx, 
    e.parseGeoJson = lx, e.util = hx, e.graphic = ux, e.List = my, e.Model = wr, e.Axis = sx, 
    e.env = $c;
});