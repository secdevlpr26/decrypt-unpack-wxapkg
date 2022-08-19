var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function(t, n) {
    "object" === ("undefined" == typeof exports ? "undefined" : e(exports)) && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : t.moment = n();
}(void 0, function() {
    function t() {
        return wt.apply(null, arguments);
    }
    function n(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
    }
    function s(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e);
    }
    function i(e) {
        var t;
        for (t in e) return !1;
        return !0;
    }
    function r(e) {
        return void 0 === e;
    }
    function a(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e);
    }
    function o(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
    }
    function u(e, t) {
        var n, s = [];
        for (n = 0; n < e.length; ++n) s.push(t(e[n], n));
        return s;
    }
    function l(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }
    function d(e, t) {
        for (var n in t) l(t, n) && (e[n] = t[n]);
        return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), 
        e;
    }
    function h(e, t, n, s) {
        return He(e, t, n, s, !0).utc();
    }
    function c() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        };
    }
    function f(e) {
        return null == e._pf && (e._pf = c()), e._pf;
    }
    function m(e) {
        if (null == e._isValid) {
            var t = f(e), n = Mt.call(t.parsedDateParts, function(e) {
                return null != e;
            }), s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), 
            null != Object.isFrozen && Object.isFrozen(e)) return s;
            e._isValid = s;
        }
        return e._isValid;
    }
    function _(e) {
        var t = h(NaN);
        return null != e ? d(f(t), e) : f(t).userInvalidated = !0, t;
    }
    function y(e, t) {
        var n, s, i;
        if (r(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), r(t._i) || (e._i = t._i), 
        r(t._f) || (e._f = t._f), r(t._l) || (e._l = t._l), r(t._strict) || (e._strict = t._strict), 
        r(t._tzm) || (e._tzm = t._tzm), r(t._isUTC) || (e._isUTC = t._isUTC), r(t._offset) || (e._offset = t._offset), 
        r(t._pf) || (e._pf = f(t)), r(t._locale) || (e._locale = t._locale), St.length > 0) for (n = 0; n < St.length; n++) r(i = t[s = St[n]]) || (e[s] = i);
        return e;
    }
    function g(e) {
        y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), 
        !1 === kt && (kt = !0, t.updateOffset(this), kt = !1);
    }
    function p(e) {
        return e instanceof g || null != e && null != e._isAMomentObject;
    }
    function w(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
    }
    function v(e) {
        var t = +e, n = 0;
        return 0 !== t && isFinite(t) && (n = w(t)), n;
    }
    function M(e, t, n) {
        var s, i = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), a = 0;
        for (s = 0; s < i; s++) (n && e[s] !== t[s] || !n && v(e[s]) !== v(t[s])) && a++;
        return a + r;
    }
    function S(e) {
        !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e);
    }
    function k(n, s) {
        var i = !0;
        return d(function() {
            if (null != t.deprecationHandler && t.deprecationHandler(null, n), i) {
                for (var r, a = [], o = 0; o < arguments.length; o++) {
                    if (r = "", "object" === e(arguments[o])) {
                        r += "\n[" + o + "] ";
                        for (var u in arguments[0]) r += u + ": " + arguments[0][u] + ", ";
                        r = r.slice(0, -2);
                    } else r = arguments[o];
                    a.push(r);
                }
                S(n + "\nArguments: " + Array.prototype.slice.call(a).join("") + "\n" + new Error().stack), 
                i = !1;
            }
            return s.apply(this, arguments);
        }, s);
    }
    function D(e, n) {
        null != t.deprecationHandler && t.deprecationHandler(e, n), Dt[e] || (S(n), Dt[e] = !0);
    }
    function Y(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
    }
    function O(e, t) {
        var n, i = d({}, e);
        for (n in t) l(t, n) && (s(e[n]) && s(t[n]) ? (i[n] = {}, d(i[n], e[n]), d(i[n], t[n])) : null != t[n] ? i[n] = t[n] : delete i[n]);
        for (n in e) l(e, n) && !l(t, n) && s(e[n]) && (i[n] = d({}, i[n]));
        return i;
    }
    function x(e) {
        null != e && this.set(e);
    }
    function T(e, t) {
        var n = e.toLowerCase();
        Rt[n] = Rt[n + "s"] = Rt[t] = e;
    }
    function b(e) {
        return "string" == typeof e ? Rt[e] || Rt[e.toLowerCase()] : void 0;
    }
    function P(e) {
        var t, n, s = {};
        for (n in e) l(e, n) && (t = b(n)) && (s[t] = e[n]);
        return s;
    }
    function W(e, t) {
        Ct[e] = t;
    }
    function R(e) {
        var t = [];
        for (var n in e) t.push({
            unit: n,
            priority: Ct[n]
        });
        return t.sort(function(e, t) {
            return e.priority - t.priority;
        }), t;
    }
    function C(e, n) {
        return function(s) {
            return null != s ? (U(this, e, s), t.updateOffset(this, n), this) : F(this, e);
        };
    }
    function F(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
    }
    function U(e, t, n) {
        e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n);
    }
    function H(e, t, n) {
        var s = "" + Math.abs(e), i = t - s.length;
        return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s;
    }
    function L(e, t, n, s) {
        var i = s;
        "string" == typeof s && (i = function() {
            return this[s]();
        }), e && (Lt[e] = i), t && (Lt[t[0]] = function() {
            return H(i.apply(this, arguments), t[1], t[2]);
        }), n && (Lt[n] = function() {
            return this.localeData().ordinal(i.apply(this, arguments), e);
        });
    }
    function G(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
    }
    function V(e) {
        var t, n, s = e.match(Ft);
        for (t = 0, n = s.length; t < n; t++) Lt[s[t]] ? s[t] = Lt[s[t]] : s[t] = G(s[t]);
        return function(t) {
            var i, r = "";
            for (i = 0; i < n; i++) r += Y(s[i]) ? s[i].call(t, e) : s[i];
            return r;
        };
    }
    function N(e, t) {
        return e.isValid() ? (t = j(t, e.localeData()), Ht[t] = Ht[t] || V(t), Ht[t](e)) : e.localeData().invalidDate();
    }
    function j(e, t) {
        var n = 5;
        for (Ut.lastIndex = 0; n >= 0 && Ut.test(e); ) e = e.replace(Ut, function(e) {
            return t.longDateFormat(e) || e;
        }), Ut.lastIndex = 0, n -= 1;
        return e;
    }
    function A(e, t, n) {
        tn[e] = Y(t) ? t : function(e, s) {
            return e && n ? n : t;
        };
    }
    function E(e, t) {
        return l(tn, e) ? tn[e](t._strict, t._locale) : new RegExp(I(e));
    }
    function I(e) {
        return Z(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, s, i) {
            return t || n || s || i;
        }));
    }
    function Z(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    }
    function z(e, t) {
        var n, s = t;
        for ("string" == typeof e && (e = [ e ]), a(t) && (s = function(e, n) {
            n[t] = v(e);
        }), n = 0; n < e.length; n++) nn[e[n]] = s;
    }
    function $(e, t) {
        z(e, function(e, n, s, i) {
            s._w = s._w || {}, t(e, s._w, s, i);
        });
    }
    function q(e, t, n) {
        null != t && l(nn, e) && nn[e](t, n._a, n, e);
    }
    function J(e, t) {
        return new Date(Date.UTC(e, t + 1, 0)).getUTCDate();
    }
    function B(e, t, n) {
        var s, i, r, a = e.toLocaleLowerCase();
        if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], 
        this._shortMonthsParse = [], s = 0; s < 12; ++s) r = h([ 2e3, s ]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), 
        this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
        return n ? "MMM" === t ? -1 !== (i = fn.call(this._shortMonthsParse, a)) ? i : null : -1 !== (i = fn.call(this._longMonthsParse, a)) ? i : null : "MMM" === t ? -1 !== (i = fn.call(this._shortMonthsParse, a)) ? i : -1 !== (i = fn.call(this._longMonthsParse, a)) ? i : null : -1 !== (i = fn.call(this._longMonthsParse, a)) ? i : -1 !== (i = fn.call(this._shortMonthsParse, a)) ? i : null;
    }
    function Q(e, t) {
        var n;
        if (!e.isValid()) return e;
        if ("string" == typeof t) if (/^\d+$/.test(t)) t = v(t); else if (t = e.localeData().monthsParse(t), 
        !a(t)) return e;
        return n = Math.min(e.date(), J(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), 
        e;
    }
    function X(e) {
        return null != e ? (Q(this, e), t.updateOffset(this, !0), this) : F(this, "Month");
    }
    function K() {
        function e(e, t) {
            return t.length - e.length;
        }
        var t, n, s = [], i = [], r = [];
        for (t = 0; t < 12; t++) n = h([ 2e3, t ]), s.push(this.monthsShort(n, "")), i.push(this.months(n, "")), 
        r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
        for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++) s[t] = Z(s[t]), i[t] = Z(i[t]);
        for (t = 0; t < 24; t++) r[t] = Z(r[t]);
        this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, 
        this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i");
    }
    function ee(e) {
        return te(e) ? 366 : 365;
    }
    function te(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
    }
    function ne(e, t, n, s, i, r, a) {
        var o = new Date(e, t, n, s, i, r, a);
        return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o;
    }
    function se(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), 
        t;
    }
    function ie(e, t, n) {
        var s = 7 + t - n;
        return -((7 + se(e, 0, s).getUTCDay() - t) % 7) + s - 1;
    }
    function re(e, t, n, s, i) {
        var r, a, o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + ie(e, s, i);
        return o <= 0 ? a = ee(r = e - 1) + o : o > ee(e) ? (r = e + 1, a = o - ee(e)) : (r = e, 
        a = o), {
            year: r,
            dayOfYear: a
        };
    }
    function ae(e, t, n) {
        var s, i, r = ie(e.year(), t, n), a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
        return a < 1 ? s = a + oe(i = e.year() - 1, t, n) : a > oe(e.year(), t, n) ? (s = a - oe(e.year(), t, n), 
        i = e.year() + 1) : (i = e.year(), s = a), {
            week: s,
            year: i
        };
    }
    function oe(e, t, n) {
        var s = ie(e, t, n), i = ie(e + 1, t, n);
        return (ee(e) - s + i) / 7;
    }
    function ue(e, t) {
        return "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10);
    }
    function le(e, t) {
        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
    }
    function de(e, t, n) {
        var s, i, r, a = e.toLocaleLowerCase();
        if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], 
        this._minWeekdaysParse = [], s = 0; s < 7; ++s) r = h([ 2e3, 1 ]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), 
        this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
        return n ? "dddd" === t ? -1 !== (i = fn.call(this._weekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = fn.call(this._shortWeekdaysParse, a)) ? i : null : -1 !== (i = fn.call(this._minWeekdaysParse, a)) ? i : null : "dddd" === t ? -1 !== (i = fn.call(this._weekdaysParse, a)) ? i : -1 !== (i = fn.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = fn.call(this._minWeekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = fn.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = fn.call(this._weekdaysParse, a)) ? i : -1 !== (i = fn.call(this._minWeekdaysParse, a)) ? i : null : -1 !== (i = fn.call(this._minWeekdaysParse, a)) ? i : -1 !== (i = fn.call(this._weekdaysParse, a)) ? i : -1 !== (i = fn.call(this._shortWeekdaysParse, a)) ? i : null;
    }
    function he() {
        function e(e, t) {
            return t.length - e.length;
        }
        var t, n, s, i, r, a = [], o = [], u = [], l = [];
        for (t = 0; t < 7; t++) n = h([ 2e3, 1 ]).day(t), s = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), 
        r = this.weekdays(n, ""), a.push(s), o.push(i), u.push(r), l.push(s), l.push(i), 
        l.push(r);
        for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++) o[t] = Z(o[t]), 
        u[t] = Z(u[t]), l[t] = Z(l[t]);
        this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, 
        this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), 
        this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i");
    }
    function ce() {
        return this.hours() % 12 || 12;
    }
    function fe(e, t) {
        L(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t);
        });
    }
    function me(e, t) {
        return t._meridiemParse;
    }
    function _e(e) {
        return e ? e.toLowerCase().replace("_", "-") : e;
    }
    function ye(e) {
        for (var t, n, s, i, r = 0; r < e.length; ) {
            for (t = (i = _e(e[r]).split("-")).length, n = (n = _e(e[r + 1])) ? n.split("-") : null; t > 0; ) {
                if (s = ge(i.slice(0, t).join("-"))) return s;
                if (n && n.length >= t && M(i, n, !0) >= t - 1) break;
                t--;
            }
            r++;
        }
        return null;
    }
    function ge(e) {
        var t = null;
        if (!Wn[e] && "undefined" != typeof module && module && module.exports) try {
            t = xn._abbr, require("./locale/" + e), pe(t);
        } catch (e) {}
        return Wn[e];
    }
    function pe(e, t) {
        var n;
        return e && (n = r(t) ? ve(e) : we(e, t)) && (xn = n), xn._abbr;
    }
    function we(e, t) {
        if (null !== t) {
            var n = Pn;
            if (t.abbr = e, null != Wn[e]) D("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), 
            n = Wn[e]._config; else if (null != t.parentLocale) {
                if (null == Wn[t.parentLocale]) return Rn[t.parentLocale] || (Rn[t.parentLocale] = []), 
                Rn[t.parentLocale].push({
                    name: e,
                    config: t
                }), null;
                n = Wn[t.parentLocale]._config;
            }
            return Wn[e] = new x(O(n, t)), Rn[e] && Rn[e].forEach(function(e) {
                we(e.name, e.config);
            }), pe(e), Wn[e];
        }
        return delete Wn[e], null;
    }
    function ve(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return xn;
        if (!n(e)) {
            if (t = ge(e)) return t;
            e = [ e ];
        }
        return ye(e);
    }
    function Me(e) {
        var t, n = e._a;
        return n && -2 === f(e).overflow && (t = n[rn] < 0 || n[rn] > 11 ? rn : n[an] < 1 || n[an] > J(n[sn], n[rn]) ? an : n[on] < 0 || n[on] > 24 || 24 === n[on] && (0 !== n[un] || 0 !== n[ln] || 0 !== n[dn]) ? on : n[un] < 0 || n[un] > 59 ? un : n[ln] < 0 || n[ln] > 59 ? ln : n[dn] < 0 || n[dn] > 999 ? dn : -1, 
        f(e)._overflowDayOfYear && (t < sn || t > an) && (t = an), f(e)._overflowWeeks && -1 === t && (t = hn), 
        f(e)._overflowWeekday && -1 === t && (t = cn), f(e).overflow = t), e;
    }
    function Se(e) {
        var t, n, s, i, r, a, o = e._i, u = Cn.exec(o) || Fn.exec(o);
        if (u) {
            for (f(e).iso = !0, t = 0, n = Hn.length; t < n; t++) if (Hn[t][1].exec(u[1])) {
                i = Hn[t][0], s = !1 !== Hn[t][2];
                break;
            }
            if (null == i) return void (e._isValid = !1);
            if (u[3]) {
                for (t = 0, n = Ln.length; t < n; t++) if (Ln[t][1].exec(u[3])) {
                    r = (u[2] || " ") + Ln[t][0];
                    break;
                }
                if (null == r) return void (e._isValid = !1);
            }
            if (!s && null != r) return void (e._isValid = !1);
            if (u[4]) {
                if (!Un.exec(u[4])) return void (e._isValid = !1);
                a = "Z";
            }
            e._f = i + (r || "") + (a || ""), be(e);
        } else e._isValid = !1;
    }
    function ke(e) {
        var t, n, s, i, r, a, o, u, l = {
            " GMT": " +0000",
            " EDT": " -0400",
            " EST": " -0500",
            " CDT": " -0500",
            " CST": " -0600",
            " MDT": " -0600",
            " MST": " -0700",
            " PDT": " -0700",
            " PST": " -0800"
        };
        if (t = e._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), 
        n = Vn.exec(t)) {
            if (s = n[1] ? "ddd" + (5 === n[1].length ? ", " : " ") : "", i = "D MMM " + (n[2].length > 10 ? "YYYY " : "YY "), 
            r = "HH:mm" + (n[4] ? ":ss" : ""), n[1]) {
                var d = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ][new Date(n[2]).getDay()];
                if (n[1].substr(0, 3) !== d) return f(e).weekdayMismatch = !0, void (e._isValid = !1);
            }
            switch (n[5].length) {
              case 2:
                o = 0 === u ? " +0000" : ((u = "YXWVUTSRQPONZABCDEFGHIKLM".indexOf(n[5][1].toUpperCase()) - 12) < 0 ? " -" : " +") + ("" + u).replace(/^-?/, "0").match(/..$/)[0] + "00";
                break;

              case 4:
                o = l[n[5]];
                break;

              default:
                o = l[" GMT"];
            }
            n[5] = o, e._i = n.splice(1).join(""), a = " ZZ", e._f = s + i + r + a, be(e), f(e).rfc2822 = !0;
        } else e._isValid = !1;
    }
    function De(e) {
        var n = Gn.exec(e._i);
        null === n ? (Se(e), !1 === e._isValid && (delete e._isValid, ke(e), !1 === e._isValid && (delete e._isValid, 
        t.createFromInputFallback(e)))) : e._d = new Date(+n[1]);
    }
    function Ye(e, t, n) {
        return null != e ? e : null != t ? t : n;
    }
    function Oe(e) {
        var n = new Date(t.now());
        return e._useUTC ? [ n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate() ] : [ n.getFullYear(), n.getMonth(), n.getDate() ];
    }
    function xe(e) {
        var t, n, s, i, r = [];
        if (!e._d) {
            for (s = Oe(e), e._w && null == e._a[an] && null == e._a[rn] && Te(e), null != e._dayOfYear && (i = Ye(e._a[sn], s[sn]), 
            (e._dayOfYear > ee(i) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0), 
            n = se(i, 0, e._dayOfYear), e._a[rn] = n.getUTCMonth(), e._a[an] = n.getUTCDate()), 
            t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = r[t] = s[t];
            for (;t < 7; t++) e._a[t] = r[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[on] && 0 === e._a[un] && 0 === e._a[ln] && 0 === e._a[dn] && (e._nextDay = !0, 
            e._a[on] = 0), e._d = (e._useUTC ? se : ne).apply(null, r), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), 
            e._nextDay && (e._a[on] = 24);
        }
    }
    function Te(e) {
        var t, n, s, i, r, a, o, u;
        if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, a = 4, n = Ye(t.GG, e._a[sn], ae(Le(), 1, 4).year), 
        s = Ye(t.W, 1), ((i = Ye(t.E, 1)) < 1 || i > 7) && (u = !0); else {
            r = e._locale._week.dow, a = e._locale._week.doy;
            var l = ae(Le(), r, a);
            n = Ye(t.gg, e._a[sn], l.year), s = Ye(t.w, l.week), null != t.d ? ((i = t.d) < 0 || i > 6) && (u = !0) : null != t.e ? (i = t.e + r, 
            (t.e < 0 || t.e > 6) && (u = !0)) : i = r;
        }
        s < 1 || s > oe(n, r, a) ? f(e)._overflowWeeks = !0 : null != u ? f(e)._overflowWeekday = !0 : (o = re(n, s, i, r, a), 
        e._a[sn] = o.year, e._dayOfYear = o.dayOfYear);
    }
    function be(e) {
        if (e._f !== t.ISO_8601) if (e._f !== t.RFC_2822) {
            e._a = [], f(e).empty = !0;
            var n, s, i, r, a, o = "" + e._i, u = o.length, l = 0;
            for (i = j(e._f, e._locale).match(Ft) || [], n = 0; n < i.length; n++) r = i[n], 
            (s = (o.match(E(r, e)) || [])[0]) && ((a = o.substr(0, o.indexOf(s))).length > 0 && f(e).unusedInput.push(a), 
            o = o.slice(o.indexOf(s) + s.length), l += s.length), Lt[r] ? (s ? f(e).empty = !1 : f(e).unusedTokens.push(r), 
            q(r, s, e)) : e._strict && !s && f(e).unusedTokens.push(r);
            f(e).charsLeftOver = u - l, o.length > 0 && f(e).unusedInput.push(o), e._a[on] <= 12 && !0 === f(e).bigHour && e._a[on] > 0 && (f(e).bigHour = void 0), 
            f(e).parsedDateParts = e._a.slice(0), f(e).meridiem = e._meridiem, e._a[on] = Pe(e._locale, e._a[on], e._meridiem), 
            xe(e), Me(e);
        } else ke(e); else Se(e);
    }
    function Pe(e, t, n) {
        var s;
        return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((s = e.isPM(n)) && t < 12 && (t += 12), 
        s || 12 !== t || (t = 0), t) : t;
    }
    function We(e) {
        var t, n, s, i, r;
        if (0 === e._f.length) return f(e).invalidFormat = !0, void (e._d = new Date(NaN));
        for (i = 0; i < e._f.length; i++) r = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), 
        t._f = e._f[i], be(t), m(t) && (r += f(t).charsLeftOver, r += 10 * f(t).unusedTokens.length, 
        f(t).score = r, (null == s || r < s) && (s = r, n = t));
        d(e, n || t);
    }
    function Re(e) {
        if (!e._d) {
            var t = P(e._i);
            e._a = u([ t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond ], function(e) {
                return e && parseInt(e, 10);
            }), xe(e);
        }
    }
    function Ce(e) {
        var t = new g(Me(Fe(e)));
        return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
    }
    function Fe(e) {
        var t = e._i, s = e._f;
        return e._locale = e._locale || ve(e._l), null === t || void 0 === s && "" === t ? _({
            nullInput: !0
        }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), p(t) ? new g(Me(t)) : (o(t) ? e._d = t : n(s) ? We(e) : s ? be(e) : Ue(e), 
        m(e) || (e._d = null), e));
    }
    function Ue(e) {
        var i = e._i;
        r(i) ? e._d = new Date(t.now()) : o(i) ? e._d = new Date(i.valueOf()) : "string" == typeof i ? De(e) : n(i) ? (e._a = u(i.slice(0), function(e) {
            return parseInt(e, 10);
        }), xe(e)) : s(i) ? Re(e) : a(i) ? e._d = new Date(i) : t.createFromInputFallback(e);
    }
    function He(e, t, r, a, o) {
        var u = {};
        return !0 !== r && !1 !== r || (a = r, r = void 0), (s(e) && i(e) || n(e) && 0 === e.length) && (e = void 0), 
        u._isAMomentObject = !0, u._useUTC = u._isUTC = o, u._l = r, u._i = e, u._f = t, 
        u._strict = a, Ce(u);
    }
    function Le(e, t, n, s) {
        return He(e, t, n, s, !1);
    }
    function Ge(e, t) {
        var s, i;
        if (1 === t.length && n(t[0]) && (t = t[0]), !t.length) return Le();
        for (s = t[0], i = 1; i < t.length; ++i) t[i].isValid() && !t[i][e](s) || (s = t[i]);
        return s;
    }
    function Ve(e) {
        for (var t in e) if (-1 === An.indexOf(t) || null != e[t] && isNaN(e[t])) return !1;
        for (var n = !1, s = 0; s < An.length; ++s) if (e[An[s]]) {
            if (n) return !1;
            parseFloat(e[An[s]]) !== v(e[An[s]]) && (n = !0);
        }
        return !0;
    }
    function Ne(e) {
        var t = P(e), n = t.year || 0, s = t.quarter || 0, i = t.month || 0, r = t.week || 0, a = t.day || 0, o = t.hour || 0, u = t.minute || 0, l = t.second || 0, d = t.millisecond || 0;
        this._isValid = Ve(t), this._milliseconds = +d + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60, 
        this._days = +a + 7 * r, this._months = +i + 3 * s + 12 * n, this._data = {}, this._locale = ve(), 
        this._bubble();
    }
    function je(e) {
        return e instanceof Ne;
    }
    function Ae(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
    }
    function Ee(e, t) {
        L(e, 0, 0, function() {
            var e = this.utcOffset(), n = "+";
            return e < 0 && (e = -e, n = "-"), n + H(~~(e / 60), 2) + t + H(~~e % 60, 2);
        });
    }
    function Ie(e, t) {
        var n = (t || "").match(e);
        if (null === n) return null;
        var s = ((n[n.length - 1] || []) + "").match(En) || [ "-", 0, 0 ], i = 60 * s[1] + v(s[2]);
        return 0 === i ? 0 : "+" === s[0] ? i : -i;
    }
    function Ze(e, n) {
        var s, i;
        return n._isUTC ? (s = n.clone(), i = (p(e) || o(e) ? e.valueOf() : Le(e).valueOf()) - s.valueOf(), 
        s._d.setTime(s._d.valueOf() + i), t.updateOffset(s, !1), s) : Le(e).local();
    }
    function ze(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
    }
    function $e() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset);
    }
    function qe(t, n) {
        var s, i, r, o = t, u = null;
        return je(t) ? o = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : a(t) ? (o = {}, n ? o[n] = t : o.milliseconds = t) : (u = In.exec(t)) ? (s = "-" === u[1] ? -1 : 1, 
        o = {
            y: 0,
            d: v(u[an]) * s,
            h: v(u[on]) * s,
            m: v(u[un]) * s,
            s: v(u[ln]) * s,
            ms: v(Ae(1e3 * u[dn])) * s
        }) : (u = Zn.exec(t)) ? (s = "-" === u[1] ? -1 : 1, o = {
            y: Je(u[2], s),
            M: Je(u[3], s),
            w: Je(u[4], s),
            d: Je(u[5], s),
            h: Je(u[6], s),
            m: Je(u[7], s),
            s: Je(u[8], s)
        }) : null == o ? o = {} : "object" === (void 0 === o ? "undefined" : e(o)) && ("from" in o || "to" in o) && (r = Qe(Le(o.from), Le(o.to)), 
        (o = {}).ms = r.milliseconds, o.M = r.months), i = new Ne(o), je(t) && l(t, "_locale") && (i._locale = t._locale), 
        i;
    }
    function Je(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t;
    }
    function Be(e, t) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, 
        n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
    }
    function Qe(e, t) {
        var n;
        return e.isValid() && t.isValid() ? (t = Ze(t, e), e.isBefore(t) ? n = Be(e, t) : ((n = Be(t, e)).milliseconds = -n.milliseconds, 
        n.months = -n.months), n) : {
            milliseconds: 0,
            months: 0
        };
    }
    function Xe(e, t) {
        return function(n, s) {
            var i, r;
            return null === s || isNaN(+s) || (D(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), 
            r = n, n = s, s = r), n = "string" == typeof n ? +n : n, i = qe(n, s), Ke(this, i, e), 
            this;
        };
    }
    function Ke(e, n, s, i) {
        var r = n._milliseconds, a = Ae(n._days), o = Ae(n._months);
        e.isValid() && (i = null == i || i, r && e._d.setTime(e._d.valueOf() + r * s), a && U(e, "Date", F(e, "Date") + a * s), 
        o && Q(e, F(e, "Month") + o * s), i && t.updateOffset(e, a || o));
    }
    function et(e, t) {
        var n, s = 12 * (t.year() - e.year()) + (t.month() - e.month()), i = e.clone().add(s, "months");
        return n = t - i < 0 ? (t - i) / (i - e.clone().add(s - 1, "months")) : (t - i) / (e.clone().add(s + 1, "months") - i), 
        -(s + n) || 0;
    }
    function tt(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (null != (t = ve(e)) && (this._locale = t), 
        this);
    }
    function nt() {
        return this._locale;
    }
    function st(e, t) {
        L(0, [ e, e.length ], 0, t);
    }
    function it(e, t, n, s, i) {
        var r;
        return null == e ? ae(this, s, i).year : (r = oe(e, s, i), t > r && (t = r), rt.call(this, e, t, n, s, i));
    }
    function rt(e, t, n, s, i) {
        var r = re(e, t, n, s, i), a = se(r.year, 0, r.dayOfYear);
        return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), 
        this;
    }
    function at(e) {
        return e;
    }
    function ot(e, t, n, s) {
        var i = ve(), r = h().set(s, t);
        return i[n](r, e);
    }
    function ut(e, t, n) {
        if (a(e) && (t = e, e = void 0), e = e || "", null != t) return ot(e, t, n, "month");
        var s, i = [];
        for (s = 0; s < 12; s++) i[s] = ot(e, s, n, "month");
        return i;
    }
    function lt(e, t, n, s) {
        "boolean" == typeof e ? (a(t) && (n = t, t = void 0), t = t || "") : (n = t = e, 
        e = !1, a(t) && (n = t, t = void 0), t = t || "");
        var i = ve(), r = e ? i._week.dow : 0;
        if (null != n) return ot(t, (n + r) % 7, s, "day");
        var o, u = [];
        for (o = 0; o < 7; o++) u[o] = ot(t, (o + r) % 7, s, "day");
        return u;
    }
    function dt(e, t, n, s) {
        var i = qe(t, n);
        return e._milliseconds += s * i._milliseconds, e._days += s * i._days, e._months += s * i._months, 
        e._bubble();
    }
    function ht(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e);
    }
    function ct(e) {
        return 4800 * e / 146097;
    }
    function ft(e) {
        return 146097 * e / 4800;
    }
    function mt(e) {
        return function() {
            return this.as(e);
        };
    }
    function _t(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN;
        };
    }
    function yt(e, t, n, s, i) {
        return i.relativeTime(t || 1, !!n, e, s);
    }
    function gt(e, t, n) {
        var s = qe(e).abs(), i = ps(s.as("s")), r = ps(s.as("m")), a = ps(s.as("h")), o = ps(s.as("d")), u = ps(s.as("M")), l = ps(s.as("y")), d = i <= ws.ss && [ "s", i ] || i < ws.s && [ "ss", i ] || r <= 1 && [ "m" ] || r < ws.m && [ "mm", r ] || a <= 1 && [ "h" ] || a < ws.h && [ "hh", a ] || o <= 1 && [ "d" ] || o < ws.d && [ "dd", o ] || u <= 1 && [ "M" ] || u < ws.M && [ "MM", u ] || l <= 1 && [ "y" ] || [ "yy", l ];
        return d[2] = t, d[3] = +e > 0, d[4] = n, yt.apply(null, d);
    }
    function pt() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var e, t, n, s = vs(this._milliseconds) / 1e3, i = vs(this._days), r = vs(this._months);
        t = w((e = w(s / 60)) / 60), s %= 60, e %= 60;
        var a = n = w(r / 12), o = r %= 12, u = i, l = t, d = e, h = s, c = this.asSeconds();
        return c ? (c < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (o ? o + "M" : "") + (u ? u + "D" : "") + (l || d || h ? "T" : "") + (l ? l + "H" : "") + (d ? d + "M" : "") + (h ? h + "S" : "") : "P0D";
    }
    var wt, vt, Mt = vt = Array.prototype.some ? Array.prototype.some : function(e) {
        for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++) if (s in t && e.call(this, t[s], s, t)) return !0;
        return !1;
    }, St = t.momentProperties = [], kt = !1, Dt = {};
    t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
    var Yt, Ot, xt = Yt = Object.keys ? Object.keys : function(e) {
        var t, n = [];
        for (t in e) l(e, t) && n.push(t);
        return n;
    }, Tt = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    }, bt = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    }, Pt = /\d{1,2}/, Wt = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    }, Rt = {}, Ct = {}, Ft = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ut = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Ht = {}, Lt = {}, Gt = /\d/, Vt = /\d\d/, Nt = /\d{3}/, jt = /\d{4}/, At = /[+-]?\d{6}/, Et = /\d\d?/, It = /\d\d\d\d?/, Zt = /\d\d\d\d\d\d?/, zt = /\d{1,3}/, $t = /\d{1,4}/, qt = /[+-]?\d{1,6}/, Jt = /\d+/, Bt = /[+-]?\d+/, Qt = /Z|[+-]\d\d:?\d\d/gi, Xt = /Z|[+-]\d\d(?::?\d\d)?/gi, Kt = /[+-]?\d+(\.\d{1,3})?/, en = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, tn = {}, nn = {}, sn = 0, rn = 1, an = 2, on = 3, un = 4, ln = 5, dn = 6, hn = 7, cn = 8, fn = Ot = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var t;
        for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
        return -1;
    };
    L("M", [ "MM", 2 ], "Mo", function() {
        return this.month() + 1;
    }), L("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e);
    }), L("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e);
    }), T("month", "M"), W("month", 8), A("M", Et), A("MM", Et, Vt), A("MMM", function(e, t) {
        return t.monthsShortRegex(e);
    }), A("MMMM", function(e, t) {
        return t.monthsRegex(e);
    }), z([ "M", "MM" ], function(e, t) {
        t[rn] = v(e) - 1;
    }), z([ "MMM", "MMMM" ], function(e, t, n, s) {
        var i = n._locale.monthsParse(e, s, n._strict);
        null != i ? t[rn] = i : f(n).invalidMonth = e;
    });
    var mn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, _n = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), yn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), gn = en, pn = en;
    L("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e;
    }), L(0, [ "YY", 2 ], 0, function() {
        return this.year() % 100;
    }), L(0, [ "YYYY", 4 ], 0, "year"), L(0, [ "YYYYY", 5 ], 0, "year"), L(0, [ "YYYYYY", 6, !0 ], 0, "year"), 
    T("year", "y"), W("year", 1), A("Y", Bt), A("YY", Et, Vt), A("YYYY", $t, jt), A("YYYYY", qt, At), 
    A("YYYYYY", qt, At), z([ "YYYYY", "YYYYYY" ], sn), z("YYYY", function(e, n) {
        n[sn] = 2 === e.length ? t.parseTwoDigitYear(e) : v(e);
    }), z("YY", function(e, n) {
        n[sn] = t.parseTwoDigitYear(e);
    }), z("Y", function(e, t) {
        t[sn] = parseInt(e, 10);
    }), t.parseTwoDigitYear = function(e) {
        return v(e) + (v(e) > 68 ? 1900 : 2e3);
    };
    var wn = C("FullYear", !0);
    L("w", [ "ww", 2 ], "wo", "week"), L("W", [ "WW", 2 ], "Wo", "isoWeek"), T("week", "w"), 
    T("isoWeek", "W"), W("week", 5), W("isoWeek", 5), A("w", Et), A("ww", Et, Vt), A("W", Et), 
    A("WW", Et, Vt), $([ "w", "ww", "W", "WW" ], function(e, t, n, s) {
        t[s.substr(0, 1)] = v(e);
    });
    var vn = {
        dow: 0,
        doy: 6
    };
    L("d", 0, "do", "day"), L("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e);
    }), L("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e);
    }), L("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e);
    }), L("e", 0, 0, "weekday"), L("E", 0, 0, "isoWeekday"), T("day", "d"), T("weekday", "e"), 
    T("isoWeekday", "E"), W("day", 11), W("weekday", 11), W("isoWeekday", 11), A("d", Et), 
    A("e", Et), A("E", Et), A("dd", function(e, t) {
        return t.weekdaysMinRegex(e);
    }), A("ddd", function(e, t) {
        return t.weekdaysShortRegex(e);
    }), A("dddd", function(e, t) {
        return t.weekdaysRegex(e);
    }), $([ "dd", "ddd", "dddd" ], function(e, t, n, s) {
        var i = n._locale.weekdaysParse(e, s, n._strict);
        null != i ? t.d = i : f(n).invalidWeekday = e;
    }), $([ "d", "e", "E" ], function(e, t, n, s) {
        t[s] = v(e);
    });
    var Mn = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Sn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), kn = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Dn = en, Yn = en, On = en;
    L("H", [ "HH", 2 ], 0, "hour"), L("h", [ "hh", 2 ], 0, ce), L("k", [ "kk", 2 ], 0, function() {
        return this.hours() || 24;
    }), L("hmm", 0, 0, function() {
        return "" + ce.apply(this) + H(this.minutes(), 2);
    }), L("hmmss", 0, 0, function() {
        return "" + ce.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2);
    }), L("Hmm", 0, 0, function() {
        return "" + this.hours() + H(this.minutes(), 2);
    }), L("Hmmss", 0, 0, function() {
        return "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2);
    }), fe("a", !0), fe("A", !1), T("hour", "h"), W("hour", 13), A("a", me), A("A", me), 
    A("H", Et), A("h", Et), A("k", Et), A("HH", Et, Vt), A("hh", Et, Vt), A("kk", Et, Vt), 
    A("hmm", It), A("hmmss", Zt), A("Hmm", It), A("Hmmss", Zt), z([ "H", "HH" ], on), 
    z([ "k", "kk" ], function(e, t, n) {
        var s = v(e);
        t[on] = 24 === s ? 0 : s;
    }), z([ "a", "A" ], function(e, t, n) {
        n._isPm = n._locale.isPM(e), n._meridiem = e;
    }), z([ "h", "hh" ], function(e, t, n) {
        t[on] = v(e), f(n).bigHour = !0;
    }), z("hmm", function(e, t, n) {
        var s = e.length - 2;
        t[on] = v(e.substr(0, s)), t[un] = v(e.substr(s)), f(n).bigHour = !0;
    }), z("hmmss", function(e, t, n) {
        var s = e.length - 4, i = e.length - 2;
        t[on] = v(e.substr(0, s)), t[un] = v(e.substr(s, 2)), t[ln] = v(e.substr(i)), f(n).bigHour = !0;
    }), z("Hmm", function(e, t, n) {
        var s = e.length - 2;
        t[on] = v(e.substr(0, s)), t[un] = v(e.substr(s));
    }), z("Hmmss", function(e, t, n) {
        var s = e.length - 4, i = e.length - 2;
        t[on] = v(e.substr(0, s)), t[un] = v(e.substr(s, 2)), t[ln] = v(e.substr(i));
    });
    var xn, Tn = /[ap]\.?m?\.?/i, bn = C("Hours", !0), Pn = {
        calendar: Tt,
        longDateFormat: bt,
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: Pt,
        relativeTime: Wt,
        months: _n,
        monthsShort: yn,
        week: vn,
        weekdays: Mn,
        weekdaysMin: kn,
        weekdaysShort: Sn,
        meridiemParse: Tn
    }, Wn = {}, Rn = {}, Cn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Fn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Un = /Z|[+-]\d\d(?::?\d\d)?/, Hn = [ [ "YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/ ], [ "YYYY-MM-DD", /\d{4}-\d\d-\d\d/ ], [ "GGGG-[W]WW-E", /\d{4}-W\d\d-\d/ ], [ "GGGG-[W]WW", /\d{4}-W\d\d/, !1 ], [ "YYYY-DDD", /\d{4}-\d{3}/ ], [ "YYYY-MM", /\d{4}-\d\d/, !1 ], [ "YYYYYYMMDD", /[+-]\d{10}/ ], [ "YYYYMMDD", /\d{8}/ ], [ "GGGG[W]WWE", /\d{4}W\d{3}/ ], [ "GGGG[W]WW", /\d{4}W\d{2}/, !1 ], [ "YYYYDDD", /\d{7}/ ] ], Ln = [ [ "HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/ ], [ "HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/ ], [ "HH:mm:ss", /\d\d:\d\d:\d\d/ ], [ "HH:mm", /\d\d:\d\d/ ], [ "HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/ ], [ "HHmmss,SSSS", /\d\d\d\d\d\d,\d+/ ], [ "HHmmss", /\d\d\d\d\d\d/ ], [ "HHmm", /\d\d\d\d/ ], [ "HH", /\d\d/ ] ], Gn = /^\/?Date\((\-?\d+)/i, Vn = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
    t.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
    }), t.ISO_8601 = function() {}, t.RFC_2822 = function() {};
    var Nn = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = Le.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : _();
    }), jn = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = Le.apply(null, arguments);
        return this.isValid() && e.isValid() ? e > this ? this : e : _();
    }), An = [ "year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond" ];
    Ee("Z", ":"), Ee("ZZ", ""), A("Z", Xt), A("ZZ", Xt), z([ "Z", "ZZ" ], function(e, t, n) {
        n._useUTC = !0, n._tzm = Ie(Xt, e);
    });
    var En = /([\+\-]|\d\d)/gi;
    t.updateOffset = function() {};
    var In = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/, Zn = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    qe.fn = Ne.prototype, qe.invalid = function() {
        return qe(NaN);
    };
    var zn = Xe(1, "add"), $n = Xe(-1, "subtract");
    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var qn = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e);
    });
    L(0, [ "gg", 2 ], 0, function() {
        return this.weekYear() % 100;
    }), L(0, [ "GG", 2 ], 0, function() {
        return this.isoWeekYear() % 100;
    }), st("gggg", "weekYear"), st("ggggg", "weekYear"), st("GGGG", "isoWeekYear"), 
    st("GGGGG", "isoWeekYear"), T("weekYear", "gg"), T("isoWeekYear", "GG"), W("weekYear", 1), 
    W("isoWeekYear", 1), A("G", Bt), A("g", Bt), A("GG", Et, Vt), A("gg", Et, Vt), A("GGGG", $t, jt), 
    A("gggg", $t, jt), A("GGGGG", qt, At), A("ggggg", qt, At), $([ "gggg", "ggggg", "GGGG", "GGGGG" ], function(e, t, n, s) {
        t[s.substr(0, 2)] = v(e);
    }), $([ "gg", "GG" ], function(e, n, s, i) {
        n[i] = t.parseTwoDigitYear(e);
    }), L("Q", 0, "Qo", "quarter"), T("quarter", "Q"), W("quarter", 7), A("Q", Gt), 
    z("Q", function(e, t) {
        t[rn] = 3 * (v(e) - 1);
    }), L("D", [ "DD", 2 ], "Do", "date"), T("date", "D"), W("date", 9), A("D", Et), 
    A("DD", Et, Vt), A("Do", function(e, t) {
        return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
    }), z([ "D", "DD" ], an), z("Do", function(e, t) {
        t[an] = v(e.match(Et)[0], 10);
    });
    var Jn = C("Date", !0);
    L("DDD", [ "DDDD", 3 ], "DDDo", "dayOfYear"), T("dayOfYear", "DDD"), W("dayOfYear", 4), 
    A("DDD", zt), A("DDDD", Nt), z([ "DDD", "DDDD" ], function(e, t, n) {
        n._dayOfYear = v(e);
    }), L("m", [ "mm", 2 ], 0, "minute"), T("minute", "m"), W("minute", 14), A("m", Et), 
    A("mm", Et, Vt), z([ "m", "mm" ], un);
    var Bn = C("Minutes", !1);
    L("s", [ "ss", 2 ], 0, "second"), T("second", "s"), W("second", 15), A("s", Et), 
    A("ss", Et, Vt), z([ "s", "ss" ], ln);
    var Qn = C("Seconds", !1);
    L("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
    }), L(0, [ "SS", 2 ], 0, function() {
        return ~~(this.millisecond() / 10);
    }), L(0, [ "SSS", 3 ], 0, "millisecond"), L(0, [ "SSSS", 4 ], 0, function() {
        return 10 * this.millisecond();
    }), L(0, [ "SSSSS", 5 ], 0, function() {
        return 100 * this.millisecond();
    }), L(0, [ "SSSSSS", 6 ], 0, function() {
        return 1e3 * this.millisecond();
    }), L(0, [ "SSSSSSS", 7 ], 0, function() {
        return 1e4 * this.millisecond();
    }), L(0, [ "SSSSSSSS", 8 ], 0, function() {
        return 1e5 * this.millisecond();
    }), L(0, [ "SSSSSSSSS", 9 ], 0, function() {
        return 1e6 * this.millisecond();
    }), T("millisecond", "ms"), W("millisecond", 16), A("S", zt, Gt), A("SS", zt, Vt), 
    A("SSS", zt, Nt);
    var Xn;
    for (Xn = "SSSS"; Xn.length <= 9; Xn += "S") A(Xn, Jt);
    for (Xn = "S"; Xn.length <= 9; Xn += "S") z(Xn, function(e, t) {
        t[dn] = v(1e3 * ("0." + e));
    });
    var Kn = C("Milliseconds", !1);
    L("z", 0, 0, "zoneAbbr"), L("zz", 0, 0, "zoneName");
    var es = g.prototype;
    es.add = zn, es.calendar = function(e, n) {
        var s = e || Le(), i = Ze(s, this).startOf("day"), r = t.calendarFormat(this, i) || "sameElse", a = n && (Y(n[r]) ? n[r].call(this, s) : n[r]);
        return this.format(a || this.localeData().calendar(r, this, Le(s)));
    }, es.clone = function() {
        return new g(this);
    }, es.diff = function(e, t, n) {
        var s, i, r, a;
        return this.isValid() && (s = Ze(e, this)).isValid() ? (i = 6e4 * (s.utcOffset() - this.utcOffset()), 
        "year" === (t = b(t)) || "month" === t || "quarter" === t ? (a = et(this, s), "quarter" === t ? a /= 3 : "year" === t && (a /= 12)) : (r = this - s, 
        a = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - i) / 864e5 : "week" === t ? (r - i) / 6048e5 : r), 
        n ? a : w(a)) : NaN;
    }, es.endOf = function(e) {
        return void 0 === (e = b(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), 
        this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"));
    }, es.format = function(e) {
        e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
        var n = N(this, e);
        return this.localeData().postformat(n);
    }, es.from = function(e, t) {
        return this.isValid() && (p(e) && e.isValid() || Le(e).isValid()) ? qe({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
    }, es.fromNow = function(e) {
        return this.from(Le(), e);
    }, es.to = function(e, t) {
        return this.isValid() && (p(e) && e.isValid() || Le(e).isValid()) ? qe({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
    }, es.toNow = function(e) {
        return this.to(Le(), e);
    }, es.get = function(e) {
        return e = b(e), Y(this[e]) ? this[e]() : this;
    }, es.invalidAt = function() {
        return f(this).overflow;
    }, es.isAfter = function(e, t) {
        var n = p(e) ? e : Le(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = b(r(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf());
    }, es.isBefore = function(e, t) {
        var n = p(e) ? e : Le(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = b(r(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf());
    }, es.isBetween = function(e, t, n, s) {
        return ("(" === (s = s || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n));
    }, es.isSame = function(e, t) {
        var n, s = p(e) ? e : Le(e);
        return !(!this.isValid() || !s.isValid()) && ("millisecond" === (t = b(t || "millisecond")) ? this.valueOf() === s.valueOf() : (n = s.valueOf(), 
        this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()));
    }, es.isSameOrAfter = function(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t);
    }, es.isSameOrBefore = function(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t);
    }, es.isValid = function() {
        return m(this);
    }, es.lang = qn, es.locale = tt, es.localeData = nt, es.max = jn, es.min = Nn, es.parsingFlags = function() {
        return d({}, f(this));
    }, es.set = function(t, n) {
        if ("object" === (void 0 === t ? "undefined" : e(t))) for (var s = R(t = P(t)), i = 0; i < s.length; i++) this[s[i].unit](t[s[i].unit]); else if (t = b(t), 
        Y(this[t])) return this[t](n);
        return this;
    }, es.startOf = function(e) {
        switch (e = b(e)) {
          case "year":
            this.month(0);

          case "quarter":
          case "month":
            this.date(1);

          case "week":
          case "isoWeek":
          case "day":
          case "date":
            this.hours(0);

          case "hour":
            this.minutes(0);

          case "minute":
            this.seconds(0);

          case "second":
            this.milliseconds(0);
        }
        return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), 
        this;
    }, es.subtract = $n, es.toArray = function() {
        var e = this;
        return [ e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond() ];
    }, es.toObject = function() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        };
    }, es.toDate = function() {
        return new Date(this.valueOf());
    }, es.toISOString = function() {
        if (!this.isValid()) return null;
        var e = this.clone().utc();
        return e.year() < 0 || e.year() > 9999 ? N(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : Y(Date.prototype.toISOString) ? this.toDate().toISOString() : N(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
    }, es.inspect = function() {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var e = "moment", t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", 
        t = "Z");
        var n = "[" + e + '("]', s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = t + '[")]';
        return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i);
    }, es.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
    }, es.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }, es.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
    }, es.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0);
    }, es.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }, es.year = wn, es.isLeapYear = function() {
        return te(this.year());
    }, es.weekYear = function(e) {
        return it.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
    }, es.isoWeekYear = function(e) {
        return it.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
    }, es.quarter = es.quarters = function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
    }, es.month = X, es.daysInMonth = function() {
        return J(this.year(), this.month());
    }, es.week = es.weeks = function(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d");
    }, es.isoWeek = es.isoWeeks = function(e) {
        var t = ae(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d");
    }, es.weeksInYear = function() {
        var e = this.localeData()._week;
        return oe(this.year(), e.dow, e.doy);
    }, es.isoWeeksInYear = function() {
        return oe(this.year(), 1, 4);
    }, es.date = Jn, es.day = es.days = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (e = ue(e, this.localeData()), this.add(e - t, "d")) : t;
    }, es.weekday = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d");
    }, es.isoWeekday = function(e) {
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
            var t = le(e, this.localeData());
            return this.day(this.day() % 7 ? t : t - 7);
        }
        return this.day() || 7;
    }, es.dayOfYear = function(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d");
    }, es.hour = es.hours = bn, es.minute = es.minutes = Bn, es.second = es.seconds = Qn, 
    es.millisecond = es.milliseconds = Kn, es.utcOffset = function(e, n, s) {
        var i, r = this._offset || 0;
        if (!this.isValid()) return null != e ? this : NaN;
        if (null != e) {
            if ("string" == typeof e) {
                if (null === (e = Ie(Xt, e))) return this;
            } else Math.abs(e) < 16 && !s && (e *= 60);
            return !this._isUTC && n && (i = ze(this)), this._offset = e, this._isUTC = !0, 
            null != i && this.add(i, "m"), r !== e && (!n || this._changeInProgress ? Ke(this, qe(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, 
            t.updateOffset(this, !0), this._changeInProgress = null)), this;
        }
        return this._isUTC ? r : ze(this);
    }, es.utc = function(e) {
        return this.utcOffset(0, e);
    }, es.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(ze(this), "m")), 
        this;
    }, es.parseZone = function() {
        if (null != this._tzm) this.utcOffset(this._tzm, !1, !0); else if ("string" == typeof this._i) {
            var e = Ie(Qt, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
        }
        return this;
    }, es.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? Le(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
    }, es.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
    }, es.isLocal = function() {
        return !!this.isValid() && !this._isUTC;
    }, es.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC;
    }, es.isUtc = $e, es.isUTC = $e, es.zoneAbbr = function() {
        return this._isUTC ? "UTC" : "";
    }, es.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : "";
    }, es.dates = k("dates accessor is deprecated. Use date instead.", Jn), es.months = k("months accessor is deprecated. Use month instead", X), 
    es.years = k("years accessor is deprecated. Use year instead", wn), es.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
        return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
    }), es.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!r(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if (y(e, this), (e = Fe(e))._a) {
            var t = e._isUTC ? h(e._a) : Le(e._a);
            this._isDSTShifted = this.isValid() && M(e._a, t.toArray()) > 0;
        } else this._isDSTShifted = !1;
        return this._isDSTShifted;
    });
    var ts = x.prototype;
    ts.calendar = function(e, t, n) {
        var s = this._calendar[e] || this._calendar.sameElse;
        return Y(s) ? s.call(t, n) : s;
    }, ts.longDateFormat = function(e) {
        var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
            return e.slice(1);
        }), this._longDateFormat[e]);
    }, ts.invalidDate = function() {
        return this._invalidDate;
    }, ts.ordinal = function(e) {
        return this._ordinal.replace("%d", e);
    }, ts.preparse = at, ts.postformat = at, ts.relativeTime = function(e, t, n, s) {
        var i = this._relativeTime[n];
        return Y(i) ? i(e, t, n, s) : i.replace(/%d/i, e);
    }, ts.pastFuture = function(e, t) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return Y(n) ? n(t) : n.replace(/%s/i, t);
    }, ts.set = function(e) {
        var t, n;
        for (n in e) Y(t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
    }, ts.months = function(e, t) {
        return e ? n(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || mn).test(t) ? "format" : "standalone"][e.month()] : n(this._months) ? this._months : this._months.standalone;
    }, ts.monthsShort = function(e, t) {
        return e ? n(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[mn.test(t) ? "format" : "standalone"][e.month()] : n(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
    }, ts.monthsParse = function(e, t, n) {
        var s, i, r;
        if (this._monthsParseExact) return B.call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), 
        s = 0; s < 12; s++) {
            if (i = h([ 2e3, s ]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), 
            this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), 
            n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), 
            this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;
            if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
            if (!n && this._monthsParse[s].test(e)) return s;
        }
    }, ts.monthsRegex = function(e) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || K.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = pn), 
        this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
    }, ts.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || K.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = gn), 
        this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
    }, ts.week = function(e) {
        return ae(e, this._week.dow, this._week.doy).week;
    }, ts.firstDayOfYear = function() {
        return this._week.doy;
    }, ts.firstDayOfWeek = function() {
        return this._week.dow;
    }, ts.weekdays = function(e, t) {
        return e ? n(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : n(this._weekdays) ? this._weekdays : this._weekdays.standalone;
    }, ts.weekdaysMin = function(e) {
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
    }, ts.weekdaysShort = function(e) {
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
    }, ts.weekdaysParse = function(e, t, n) {
        var s, i, r;
        if (this._weekdaysParseExact) return de.call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], 
        this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
            if (i = h([ 2e3, 1 ]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", ".?") + "$", "i"), 
            this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", ".?") + "$", "i"), 
            this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", ".?") + "$", "i")), 
            this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), 
            this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s;
            if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
            if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
            if (!n && this._weekdaysParse[s].test(e)) return s;
        }
    }, ts.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || he.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Dn), 
        this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
    }, ts.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || he.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Yn), 
        this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
    }, ts.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || he.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = On), 
        this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
    }, ts.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0);
    }, ts.meridiem = function(e, t, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
    }, pe("en", {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 === v(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
        }
    }), t.lang = k("moment.lang is deprecated. Use moment.locale instead.", pe), t.langData = k("moment.langData is deprecated. Use moment.localeData instead.", ve);
    var ns = Math.abs, ss = mt("ms"), is = mt("s"), rs = mt("m"), as = mt("h"), os = mt("d"), us = mt("w"), ls = mt("M"), ds = mt("y"), hs = _t("milliseconds"), cs = _t("seconds"), fs = _t("minutes"), ms = _t("hours"), _s = _t("days"), ys = _t("months"), gs = _t("years"), ps = Math.round, ws = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }, vs = Math.abs, Ms = Ne.prototype;
    return Ms.isValid = function() {
        return this._isValid;
    }, Ms.abs = function() {
        var e = this._data;
        return this._milliseconds = ns(this._milliseconds), this._days = ns(this._days), 
        this._months = ns(this._months), e.milliseconds = ns(e.milliseconds), e.seconds = ns(e.seconds), 
        e.minutes = ns(e.minutes), e.hours = ns(e.hours), e.months = ns(e.months), e.years = ns(e.years), 
        this;
    }, Ms.add = function(e, t) {
        return dt(this, e, t, 1);
    }, Ms.subtract = function(e, t) {
        return dt(this, e, t, -1);
    }, Ms.as = function(e) {
        if (!this.isValid()) return NaN;
        var t, n, s = this._milliseconds;
        if ("month" === (e = b(e)) || "year" === e) return t = this._days + s / 864e5, n = this._months + ct(t), 
        "month" === e ? n : n / 12;
        switch (t = this._days + Math.round(ft(this._months)), e) {
          case "week":
            return t / 7 + s / 6048e5;

          case "day":
            return t + s / 864e5;

          case "hour":
            return 24 * t + s / 36e5;

          case "minute":
            return 1440 * t + s / 6e4;

          case "second":
            return 86400 * t + s / 1e3;

          case "millisecond":
            return Math.floor(864e5 * t) + s;

          default:
            throw new Error("Unknown unit " + e);
        }
    }, Ms.asMilliseconds = ss, Ms.asSeconds = is, Ms.asMinutes = rs, Ms.asHours = as, 
    Ms.asDays = os, Ms.asWeeks = us, Ms.asMonths = ls, Ms.asYears = ds, Ms.valueOf = function() {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * v(this._months / 12) : NaN;
    }, Ms._bubble = function() {
        var e, t, n, s, i, r = this._milliseconds, a = this._days, o = this._months, u = this._data;
        return r >= 0 && a >= 0 && o >= 0 || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * ht(ft(o) + a), 
        a = 0, o = 0), u.milliseconds = r % 1e3, e = w(r / 1e3), u.seconds = e % 60, t = w(e / 60), 
        u.minutes = t % 60, n = w(t / 60), u.hours = n % 24, a += w(n / 24), i = w(ct(a)), 
        o += i, a -= ht(ft(i)), s = w(o / 12), o %= 12, u.days = a, u.months = o, u.years = s, 
        this;
    }, Ms.get = function(e) {
        return e = b(e), this.isValid() ? this[e + "s"]() : NaN;
    }, Ms.milliseconds = hs, Ms.seconds = cs, Ms.minutes = fs, Ms.hours = ms, Ms.days = _s, 
    Ms.weeks = function() {
        return w(this.days() / 7);
    }, Ms.months = ys, Ms.years = gs, Ms.humanize = function(e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t = this.localeData(), n = gt(this, !e, t);
        return e && (n = t.pastFuture(+this, n)), t.postformat(n);
    }, Ms.toISOString = pt, Ms.toString = pt, Ms.toJSON = pt, Ms.locale = tt, Ms.localeData = nt, 
    Ms.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", pt), 
    Ms.lang = qn, L("X", 0, 0, "unix"), L("x", 0, 0, "valueOf"), A("x", Bt), A("X", Kt), 
    z("X", function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10));
    }), z("x", function(e, t, n) {
        n._d = new Date(v(e));
    }), t.version = "2.18.1", function(e) {
        wt = e;
    }(Le), t.fn = es, t.min = function() {
        return Ge("isBefore", [].slice.call(arguments, 0));
    }, t.max = function() {
        return Ge("isAfter", [].slice.call(arguments, 0));
    }, t.now = function() {
        return Date.now ? Date.now() : +new Date();
    }, t.utc = h, t.unix = function(e) {
        return Le(1e3 * e);
    }, t.months = function(e, t) {
        return ut(e, t, "months");
    }, t.isDate = o, t.locale = pe, t.invalid = _, t.duration = qe, t.isMoment = p, 
    t.weekdays = function(e, t, n) {
        return lt(e, t, n, "weekdays");
    }, t.parseZone = function() {
        return Le.apply(null, arguments).parseZone();
    }, t.localeData = ve, t.isDuration = je, t.monthsShort = function(e, t) {
        return ut(e, t, "monthsShort");
    }, t.weekdaysMin = function(e, t, n) {
        return lt(e, t, n, "weekdaysMin");
    }, t.defineLocale = we, t.updateLocale = function(e, t) {
        if (null != t) {
            var n, s = Pn;
            null != Wn[e] && (s = Wn[e]._config), (n = new x(t = O(s, t))).parentLocale = Wn[e], 
            Wn[e] = n, pe(e);
        } else null != Wn[e] && (null != Wn[e].parentLocale ? Wn[e] = Wn[e].parentLocale : null != Wn[e] && delete Wn[e]);
        return Wn[e];
    }, t.locales = function() {
        return xt(Wn);
    }, t.weekdaysShort = function(e, t, n) {
        return lt(e, t, n, "weekdaysShort");
    }, t.normalizeUnits = b, t.relativeTimeRounding = function(e) {
        return void 0 === e ? ps : "function" == typeof e && (ps = e, !0);
    }, t.relativeTimeThreshold = function(e, t) {
        return void 0 !== ws[e] && (void 0 === t ? ws[e] : (ws[e] = t, "s" === e && (ws.ss = t - 1), 
        !0));
    }, t.calendarFormat = function(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
    }, t.prototype = es, t;
});