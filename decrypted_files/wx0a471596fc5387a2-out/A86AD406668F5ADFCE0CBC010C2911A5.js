var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function(t, n) {
    "object" == ("undefined" == typeof exports ? "undefined" : e(exports)) && "object" == ("undefined" == typeof module ? "undefined" : e(module)) ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == ("undefined" == typeof exports ? "undefined" : e(exports)) ? exports.AV = n() : t.AV = n();
}(void 0, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.i = function(e) {
            return e;
        }, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            });
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return t.d(n, "a", n), n;
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, t.p = "", t(t.s = 63);
    }([ function(t, n, r) {
        var i, o;
        (function() {
            function r(e) {
                function t(t, n, r, i, o, s) {
                    for (;o >= 0 && o < s; o += e) {
                        var a = i ? i[o] : o;
                        r = n(r, t[a], a, t);
                    }
                    return r;
                }
                return function(n, r, i, o) {
                    r = A(r, o, 4);
                    var s = !k(n) && O.keys(n), a = (s || n).length, u = e > 0 ? 0 : a - 1;
                    return arguments.length < 3 && (i = n[s ? s[u] : u], u += e), t(n, r, i, s, u, a);
                };
            }
            function s(e) {
                return function(t, n, r) {
                    n = E(n, r);
                    for (var i = C(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e) if (n(t[o], o, t)) return o;
                    return -1;
                };
            }
            function a(e, t, n) {
                return function(r, i, o) {
                    var s = 0, a = C(r);
                    if ("number" == typeof o) e > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1; else if (n && o && a) return o = n(r, i), 
                    r[o] === i ? o : -1;
                    if (i !== i) return (o = t(_.call(r, s, a), O.isNaN)) >= 0 ? o + s : -1;
                    for (o = e > 0 ? s : a - 1; o >= 0 && o < a; o += e) if (r[o] === i) return o;
                    return -1;
                };
            }
            function u(e, t) {
                var n = D.length, r = e.constructor, i = O.isFunction(r) && r.prototype || h, o = "constructor";
                for (O.has(e, o) && !O.contains(t, o) && t.push(o); n--; ) (o = D[n]) in e && e[o] !== i[o] && !O.contains(t, o) && t.push(o);
            }
            var c = this, l = c._, f = Array.prototype, h = Object.prototype, d = Function.prototype, p = f.push, _ = f.slice, v = h.toString, y = h.hasOwnProperty, m = Array.isArray, g = Object.keys, b = d.bind, w = Object.create, S = function() {}, O = function e(t) {
                return t instanceof e ? t : this instanceof e ? void (this._wrapped = t) : new e(t);
            };
            void 0 !== t && t.exports && (n = t.exports = O), n._ = O, O.VERSION = "1.8.3";
            var A = function(e, t, n) {
                if (void 0 === t) return e;
                switch (null == n ? 3 : n) {
                  case 1:
                    return function(n) {
                        return e.call(t, n);
                    };

                  case 2:
                    return function(n, r) {
                        return e.call(t, n, r);
                    };

                  case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i);
                    };

                  case 4:
                    return function(n, r, i, o) {
                        return e.call(t, n, r, i, o);
                    };
                }
                return function() {
                    return e.apply(t, arguments);
                };
            }, E = function(e, t, n) {
                return null == e ? O.identity : O.isFunction(e) ? A(e, t, n) : O.isObject(e) ? O.matcher(e) : O.property(e);
            };
            O.iteratee = function(e, t) {
                return E(e, t, 1 / 0);
            };
            var j = function(e, t) {
                return function(n) {
                    var r = arguments.length;
                    if (r < 2 || null == n) return n;
                    for (var i = 1; i < r; i++) for (var o = arguments[i], s = e(o), a = s.length, u = 0; u < a; u++) {
                        var c = s[u];
                        t && void 0 !== n[c] || (n[c] = o[c]);
                    }
                    return n;
                };
            }, T = function(e) {
                if (!O.isObject(e)) return {};
                if (w) return w(e);
                S.prototype = e;
                var t = new S();
                return S.prototype = null, t;
            }, N = function(e) {
                return function(t) {
                    return null == t ? void 0 : t[e];
                };
            }, x = Math.pow(2, 53) - 1, C = N("length"), k = function(e) {
                var t = C(e);
                return "number" == typeof t && t >= 0 && t <= x;
            };
            O.each = O.forEach = function(e, t, n) {
                t = A(t, n);
                var r, i;
                if (k(e)) for (r = 0, i = e.length; r < i; r++) t(e[r], r, e); else {
                    var o = O.keys(e);
                    for (r = 0, i = o.length; r < i; r++) t(e[o[r]], o[r], e);
                }
                return e;
            }, O.map = O.collect = function(e, t, n) {
                t = E(t, n);
                for (var r = !k(e) && O.keys(e), i = (r || e).length, o = Array(i), s = 0; s < i; s++) {
                    var a = r ? r[s] : s;
                    o[s] = t(e[a], a, e);
                }
                return o;
            }, O.reduce = O.foldl = O.inject = r(1), O.reduceRight = O.foldr = r(-1), O.find = O.detect = function(e, t, n) {
                var r;
                if (void 0 !== (r = k(e) ? O.findIndex(e, t, n) : O.findKey(e, t, n)) && -1 !== r) return e[r];
            }, O.filter = O.select = function(e, t, n) {
                var r = [];
                return t = E(t, n), O.each(e, function(e, n, i) {
                    t(e, n, i) && r.push(e);
                }), r;
            }, O.reject = function(e, t, n) {
                return O.filter(e, O.negate(E(t)), n);
            }, O.every = O.all = function(e, t, n) {
                t = E(t, n);
                for (var r = !k(e) && O.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                    var s = r ? r[o] : o;
                    if (!t(e[s], s, e)) return !1;
                }
                return !0;
            }, O.some = O.any = function(e, t, n) {
                t = E(t, n);
                for (var r = !k(e) && O.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                    var s = r ? r[o] : o;
                    if (t(e[s], s, e)) return !0;
                }
                return !1;
            }, O.contains = O.includes = O.include = function(e, t, n, r) {
                return k(e) || (e = O.values(e)), ("number" != typeof n || r) && (n = 0), O.indexOf(e, t, n) >= 0;
            }, O.invoke = function(e, t) {
                var n = _.call(arguments, 2), r = O.isFunction(t);
                return O.map(e, function(e) {
                    var i = r ? t : e[t];
                    return null == i ? i : i.apply(e, n);
                });
            }, O.pluck = function(e, t) {
                return O.map(e, O.property(t));
            }, O.where = function(e, t) {
                return O.filter(e, O.matcher(t));
            }, O.findWhere = function(e, t) {
                return O.find(e, O.matcher(t));
            }, O.max = function(e, t, n) {
                var r, i, o = -1 / 0, s = -1 / 0;
                if (null == t && null != e) for (var a = 0, u = (e = k(e) ? e : O.values(e)).length; a < u; a++) (r = e[a]) > o && (o = r); else t = E(t, n), 
                O.each(e, function(e, n, r) {
                    ((i = t(e, n, r)) > s || i === -1 / 0 && o === -1 / 0) && (o = e, s = i);
                });
                return o;
            }, O.min = function(e, t, n) {
                var r, i, o = 1 / 0, s = 1 / 0;
                if (null == t && null != e) for (var a = 0, u = (e = k(e) ? e : O.values(e)).length; a < u; a++) (r = e[a]) < o && (o = r); else t = E(t, n), 
                O.each(e, function(e, n, r) {
                    ((i = t(e, n, r)) < s || i === 1 / 0 && o === 1 / 0) && (o = e, s = i);
                });
                return o;
            }, O.shuffle = function(e) {
                for (var t, n = k(e) ? e : O.values(e), r = n.length, i = Array(r), o = 0; o < r; o++) (t = O.random(0, o)) !== o && (i[o] = i[t]), 
                i[t] = n[o];
                return i;
            }, O.sample = function(e, t, n) {
                return null == t || n ? (k(e) || (e = O.values(e)), e[O.random(e.length - 1)]) : O.shuffle(e).slice(0, Math.max(0, t));
            }, O.sortBy = function(e, t, n) {
                return t = E(t, n), O.pluck(O.map(e, function(e, n, r) {
                    return {
                        value: e,
                        index: n,
                        criteria: t(e, n, r)
                    };
                }).sort(function(e, t) {
                    var n = e.criteria, r = t.criteria;
                    if (n !== r) {
                        if (n > r || void 0 === n) return 1;
                        if (n < r || void 0 === r) return -1;
                    }
                    return e.index - t.index;
                }), "value");
            };
            var U = function(e) {
                return function(t, n, r) {
                    var i = {};
                    return n = E(n, r), O.each(t, function(r, o) {
                        var s = n(r, o, t);
                        e(i, r, s);
                    }), i;
                };
            };
            O.groupBy = U(function(e, t, n) {
                O.has(e, n) ? e[n].push(t) : e[n] = [ t ];
            }), O.indexBy = U(function(e, t, n) {
                e[n] = t;
            }), O.countBy = U(function(e, t, n) {
                O.has(e, n) ? e[n]++ : e[n] = 1;
            }), O.toArray = function(e) {
                return e ? O.isArray(e) ? _.call(e) : k(e) ? O.map(e, O.identity) : O.values(e) : [];
            }, O.size = function(e) {
                return null == e ? 0 : k(e) ? e.length : O.keys(e).length;
            }, O.partition = function(e, t, n) {
                t = E(t, n);
                var r = [], i = [];
                return O.each(e, function(e, n, o) {
                    (t(e, n, o) ? r : i).push(e);
                }), [ r, i ];
            }, O.first = O.head = O.take = function(e, t, n) {
                if (null != e) return null == t || n ? e[0] : O.initial(e, e.length - t);
            }, O.initial = function(e, t, n) {
                return _.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
            }, O.last = function(e, t, n) {
                if (null != e) return null == t || n ? e[e.length - 1] : O.rest(e, Math.max(0, e.length - t));
            }, O.rest = O.tail = O.drop = function(e, t, n) {
                return _.call(e, null == t || n ? 1 : t);
            }, O.compact = function(e) {
                return O.filter(e, O.identity);
            };
            var I = function e(t, n, r, i) {
                for (var o = [], s = 0, a = i || 0, u = C(t); a < u; a++) {
                    var c = t[a];
                    if (k(c) && (O.isArray(c) || O.isArguments(c))) {
                        n || (c = e(c, n, r));
                        var l = 0, f = c.length;
                        for (o.length += f; l < f; ) o[s++] = c[l++];
                    } else r || (o[s++] = c);
                }
                return o;
            };
            O.flatten = function(e, t) {
                return I(e, t, !1);
            }, O.without = function(e) {
                return O.difference(e, _.call(arguments, 1));
            }, O.uniq = O.unique = function(e, t, n, r) {
                O.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = E(n, r));
                for (var i = [], o = [], s = 0, a = C(e); s < a; s++) {
                    var u = e[s], c = n ? n(u, s, e) : u;
                    t ? (s && o === c || i.push(u), o = c) : n ? O.contains(o, c) || (o.push(c), i.push(u)) : O.contains(i, u) || i.push(u);
                }
                return i;
            }, O.union = function() {
                return O.uniq(I(arguments, !0, !0));
            }, O.intersection = function(e) {
                for (var t = [], n = arguments.length, r = 0, i = C(e); r < i; r++) {
                    var o = e[r];
                    if (!O.contains(t, o)) {
                        for (var s = 1; s < n && O.contains(arguments[s], o); s++) ;
                        s === n && t.push(o);
                    }
                }
                return t;
            }, O.difference = function(e) {
                var t = I(arguments, !0, !0, 1);
                return O.filter(e, function(e) {
                    return !O.contains(t, e);
                });
            }, O.zip = function() {
                return O.unzip(arguments);
            }, O.unzip = function(e) {
                for (var t = e && O.max(e, C).length || 0, n = Array(t), r = 0; r < t; r++) n[r] = O.pluck(e, r);
                return n;
            }, O.object = function(e, t) {
                for (var n = {}, r = 0, i = C(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
                return n;
            }, O.findIndex = s(1), O.findLastIndex = s(-1), O.sortedIndex = function(e, t, n, r) {
                for (var i = (n = E(n, r, 1))(t), o = 0, s = C(e); o < s; ) {
                    var a = Math.floor((o + s) / 2);
                    n(e[a]) < i ? o = a + 1 : s = a;
                }
                return o;
            }, O.indexOf = a(1, O.findIndex, O.sortedIndex), O.lastIndexOf = a(-1, O.findLastIndex), 
            O.range = function(e, t, n) {
                null == t && (t = e || 0, e = 0), n = n || 1;
                for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, 
                e += n) i[o] = e;
                return i;
            };
            var P = function(e, t, n, r, i) {
                if (!(r instanceof t)) return e.apply(n, i);
                var o = T(e.prototype), s = e.apply(o, i);
                return O.isObject(s) ? s : o;
            };
            O.bind = function(e, t) {
                if (b && e.bind === b) return b.apply(e, _.call(arguments, 1));
                if (!O.isFunction(e)) throw new TypeError("Bind must be called on a function");
                var n = _.call(arguments, 2);
                return function r() {
                    return P(e, r, t, this, n.concat(_.call(arguments)));
                };
            }, O.partial = function(e) {
                var t = _.call(arguments, 1);
                return function n() {
                    for (var r = 0, i = t.length, o = Array(i), s = 0; s < i; s++) o[s] = t[s] === O ? arguments[r++] : t[s];
                    for (;r < arguments.length; ) o.push(arguments[r++]);
                    return P(e, n, this, this, o);
                };
            }, O.bindAll = function(e) {
                var t, n, r = arguments.length;
                if (r <= 1) throw new Error("bindAll must be passed function names");
                for (t = 1; t < r; t++) e[n = arguments[t]] = O.bind(e[n], e);
                return e;
            }, O.memoize = function(e, t) {
                var n = function n(r) {
                    var i = n.cache, o = "" + (t ? t.apply(this, arguments) : r);
                    return O.has(i, o) || (i[o] = e.apply(this, arguments)), i[o];
                };
                return n.cache = {}, n;
            }, O.delay = function(e, t) {
                var n = _.call(arguments, 2);
                return setTimeout(function() {
                    return e.apply(null, n);
                }, t);
            }, O.defer = O.partial(O.delay, O, 1), O.throttle = function(e, t, n) {
                var r, i, o, s = null, a = 0;
                n || (n = {});
                var u = function() {
                    a = !1 === n.leading ? 0 : O.now(), s = null, o = e.apply(r, i), s || (r = i = null);
                };
                return function() {
                    var c = O.now();
                    a || !1 !== n.leading || (a = c);
                    var l = t - (c - a);
                    return r = this, i = arguments, l <= 0 || l > t ? (s && (clearTimeout(s), s = null), 
                    a = c, o = e.apply(r, i), s || (r = i = null)) : s || !1 === n.trailing || (s = setTimeout(u, l)), 
                    o;
                };
            }, O.debounce = function(e, t, n) {
                var r, i, o, s, a, u = function u() {
                    var c = O.now() - s;
                    c < t && c >= 0 ? r = setTimeout(u, t - c) : (r = null, n || (a = e.apply(o, i), 
                    r || (o = i = null)));
                };
                return function() {
                    o = this, i = arguments, s = O.now();
                    var c = n && !r;
                    return r || (r = setTimeout(u, t)), c && (a = e.apply(o, i), o = i = null), a;
                };
            }, O.wrap = function(e, t) {
                return O.partial(t, e);
            }, O.negate = function(e) {
                return function() {
                    return !e.apply(this, arguments);
                };
            }, O.compose = function() {
                var e = arguments, t = e.length - 1;
                return function() {
                    for (var n = t, r = e[t].apply(this, arguments); n--; ) r = e[n].call(this, r);
                    return r;
                };
            }, O.after = function(e, t) {
                return function() {
                    if (--e < 1) return t.apply(this, arguments);
                };
            }, O.before = function(e, t) {
                var n;
                return function() {
                    return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
                };
            }, O.once = O.partial(O.before, 2);
            var R = !{
                toString: null
            }.propertyIsEnumerable("toString"), D = [ "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ];
            O.keys = function(e) {
                if (!O.isObject(e)) return [];
                if (g) return g(e);
                var t = [];
                for (var n in e) O.has(e, n) && t.push(n);
                return R && u(e, t), t;
            }, O.allKeys = function(e) {
                if (!O.isObject(e)) return [];
                var t = [];
                for (var n in e) t.push(n);
                return R && u(e, t), t;
            }, O.values = function(e) {
                for (var t = O.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
                return r;
            }, O.mapObject = function(e, t, n) {
                t = E(t, n);
                for (var r, i = O.keys(e), o = i.length, s = {}, a = 0; a < o; a++) s[r = i[a]] = t(e[r], r, e);
                return s;
            }, O.pairs = function(e) {
                for (var t = O.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [ t[i], e[t[i]] ];
                return r;
            }, O.invert = function(e) {
                for (var t = {}, n = O.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
                return t;
            }, O.functions = O.methods = function(e) {
                var t = [];
                for (var n in e) O.isFunction(e[n]) && t.push(n);
                return t.sort();
            }, O.extend = j(O.allKeys), O.extendOwn = O.assign = j(O.keys), O.findKey = function(e, t, n) {
                t = E(t, n);
                for (var r, i = O.keys(e), o = 0, s = i.length; o < s; o++) if (r = i[o], t(e[r], r, e)) return r;
            }, O.pick = function(e, t, n) {
                var r, i, o = {}, s = e;
                if (null == s) return o;
                O.isFunction(t) ? (i = O.allKeys(s), r = A(t, n)) : (i = I(arguments, !1, !1, 1), 
                r = function(e, t, n) {
                    return t in n;
                }, s = Object(s));
                for (var a = 0, u = i.length; a < u; a++) {
                    var c = i[a], l = s[c];
                    r(l, c, s) && (o[c] = l);
                }
                return o;
            }, O.omit = function(e, t, n) {
                if (O.isFunction(t)) t = O.negate(t); else {
                    var r = O.map(I(arguments, !1, !1, 1), String);
                    t = function(e, t) {
                        return !O.contains(r, t);
                    };
                }
                return O.pick(e, t, n);
            }, O.defaults = j(O.allKeys, !0), O.create = function(e, t) {
                var n = T(e);
                return t && O.extendOwn(n, t), n;
            }, O.clone = function(e) {
                return O.isObject(e) ? O.isArray(e) ? e.slice() : O.extend({}, e) : e;
            }, O.tap = function(e, t) {
                return t(e), e;
            }, O.isMatch = function(e, t) {
                var n = O.keys(t), r = n.length;
                if (null == e) return !r;
                for (var i = Object(e), o = 0; o < r; o++) {
                    var s = n[o];
                    if (t[s] !== i[s] || !(s in i)) return !1;
                }
                return !0;
            };
            var L = function t(n, r, i, o) {
                if (n === r) return 0 !== n || 1 / n == 1 / r;
                if (null == n || null == r) return n === r;
                n instanceof O && (n = n._wrapped), r instanceof O && (r = r._wrapped);
                var s = v.call(n);
                if (s !== v.call(r)) return !1;
                switch (s) {
                  case "[object RegExp]":
                  case "[object String]":
                    return "" + n == "" + r;

                  case "[object Number]":
                    return +n != +n ? +r != +r : 0 == +n ? 1 / +n == 1 / r : +n == +r;

                  case "[object Date]":
                  case "[object Boolean]":
                    return +n == +r;
                }
                var a = "[object Array]" === s;
                if (!a) {
                    if ("object" != (void 0 === n ? "undefined" : e(n)) || "object" != (void 0 === r ? "undefined" : e(r))) return !1;
                    var u = n.constructor, c = r.constructor;
                    if (u !== c && !(O.isFunction(u) && u instanceof u && O.isFunction(c) && c instanceof c) && "constructor" in n && "constructor" in r) return !1;
                }
                i = i || [], o = o || [];
                for (var l = i.length; l--; ) if (i[l] === n) return o[l] === r;
                if (i.push(n), o.push(r), a) {
                    if ((l = n.length) !== r.length) return !1;
                    for (;l--; ) if (!t(n[l], r[l], i, o)) return !1;
                } else {
                    var f, h = O.keys(n);
                    if (l = h.length, O.keys(r).length !== l) return !1;
                    for (;l--; ) if (f = h[l], !O.has(r, f) || !t(n[f], r[f], i, o)) return !1;
                }
                return i.pop(), o.pop(), !0;
            };
            O.isEqual = function(e, t) {
                return L(e, t);
            }, O.isEmpty = function(e) {
                return null == e || (k(e) && (O.isArray(e) || O.isString(e) || O.isArguments(e)) ? 0 === e.length : 0 === O.keys(e).length);
            }, O.isElement = function(e) {
                return !(!e || 1 !== e.nodeType);
            }, O.isArray = m || function(e) {
                return "[object Array]" === v.call(e);
            }, O.isObject = function(t) {
                var n = void 0 === t ? "undefined" : e(t);
                return "function" === n || "object" === n && !!t;
            }, O.each([ "Arguments", "Function", "String", "Number", "Date", "RegExp", "Error" ], function(e) {
                O["is" + e] = function(t) {
                    return v.call(t) === "[object " + e + "]";
                };
            }), O.isArguments(arguments) || (O.isArguments = function(e) {
                return O.has(e, "callee");
            }), "function" != typeof /./ && "object" != ("undefined" == typeof Int8Array ? "undefined" : e(Int8Array)) && (O.isFunction = function(e) {
                return "function" == typeof e || !1;
            }), O.isFinite = function(e) {
                return isFinite(e) && !isNaN(parseFloat(e));
            }, O.isNaN = function(e) {
                return O.isNumber(e) && e !== +e;
            }, O.isBoolean = function(e) {
                return !0 === e || !1 === e || "[object Boolean]" === v.call(e);
            }, O.isNull = function(e) {
                return null === e;
            }, O.isUndefined = function(e) {
                return void 0 === e;
            }, O.has = function(e, t) {
                return null != e && y.call(e, t);
            }, O.noConflict = function() {
                return c._ = l, this;
            }, O.identity = function(e) {
                return e;
            }, O.constant = function(e) {
                return function() {
                    return e;
                };
            }, O.noop = function() {}, O.property = N, O.propertyOf = function(e) {
                return null == e ? function() {} : function(t) {
                    return e[t];
                };
            }, O.matcher = O.matches = function(e) {
                return e = O.extendOwn({}, e), function(t) {
                    return O.isMatch(t, e);
                };
            }, O.times = function(e, t, n) {
                var r = Array(Math.max(0, e));
                t = A(t, n, 1);
                for (var i = 0; i < e; i++) r[i] = t(i);
                return r;
            }, O.random = function(e, t) {
                return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
            }, O.now = Date.now || function() {
                return new Date().getTime();
            };
            var q = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            }, F = O.invert(q), M = function(e) {
                var t = function(t) {
                    return e[t];
                }, n = "(?:" + O.keys(e).join("|") + ")", r = RegExp(n), i = RegExp(n, "g");
                return function(e) {
                    return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e;
                };
            };
            O.escape = M(q), O.unescape = M(F), O.result = function(e, t, n) {
                var r = null == e ? void 0 : e[t];
                return void 0 === r && (r = n), O.isFunction(r) ? r.call(e) : r;
            };
            var J = 0;
            O.uniqueId = function(e) {
                var t = ++J + "";
                return e ? e + t : t;
            }, O.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var B = /(.)^/, W = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, V = /\\|'|\r|\n|\u2028|\u2029/g, Q = function(e) {
                return "\\" + W[e];
            };
            O.template = function(e, t, n) {
                !t && n && (t = n), t = O.defaults({}, t, O.templateSettings);
                var r = RegExp([ (t.escape || B).source, (t.interpolate || B).source, (t.evaluate || B).source ].join("|") + "|$", "g"), i = 0, o = "__p+='";
                e.replace(r, function(t, n, r, s, a) {
                    return o += e.slice(i, a).replace(V, Q), i = a + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), 
                    t;
                }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                try {
                    var s = new Function(t.variable || "obj", "_", o);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    throw e.source = o, e;
                }
                var a = function(e) {
                    return s.call(this, e, O);
                }, u = t.variable || "obj";
                return a.source = "function(" + u + "){\n" + o + "}", a;
            }, O.chain = function(e) {
                var t = O(e);
                return t._chain = !0, t;
            };
            var K = function(e, t) {
                return e._chain ? O(t).chain() : t;
            };
            O.mixin = function(e) {
                O.each(O.functions(e), function(t) {
                    var n = O[t] = e[t];
                    O.prototype[t] = function() {
                        var e = [ this._wrapped ];
                        return p.apply(e, arguments), K(this, n.apply(O, e));
                    };
                });
            }, O.mixin(O), O.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(e) {
                var t = f[e];
                O.prototype[e] = function() {
                    var n = this._wrapped;
                    return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], 
                    K(this, n);
                };
            }), O.each([ "concat", "join", "slice" ], function(e) {
                var t = f[e];
                O.prototype[e] = function() {
                    return K(this, t.apply(this._wrapped, arguments));
                };
            }), O.prototype.value = function() {
                return this._wrapped;
            }, O.prototype.valueOf = O.prototype.toJSON = O.prototype.value, O.prototype.toString = function() {
                return "" + this._wrapped;
            }, i = [], void 0 !== (o = function() {
                return O;
            }.apply(n, i)) && (t.exports = o);
        }).call(this);
    }, function(e, t, n) {
        var r = (n(0), n(52).Promise);
        r._continueWhile = function(e, t) {
            return e() ? t().then(function() {
                return r._continueWhile(e, t);
            }) : r.resolve();
        }, e.exports = r;
    }, function(t, n, r) {
        var i = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return void 0 === t ? "undefined" : e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : void 0 === t ? "undefined" : e(t);
        }, o = r(7), s = r(5)("leancloud:request"), a = r(57), u = r(1), c = r(16), l = r(3), f = r(6), h = r(0), d = r(4).getSessionToken, p = void 0, _ = {
            cn: "https://api.leancloud.cn",
            us: "https://us-api.leancloud.cn"
        }, v = function(e, t) {
            var n = new Date().getTime(), r = a(n + e);
            return t ? r + "," + n + ",master" : r + "," + n;
        }, y = 0, m = function(e, t, n) {
            var r = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3], i = arguments[4], a = y++;
            return s("request(" + a + ")", e, t, n, r), new u(function(u, c) {
                var l = o(e, t).set(r).send(n);
                i && l.on("progress", i), l.end(function(e, t) {
                    return t && s("response(" + a + ")", t.status, t.body || t.text, t.header), e ? (t && (e.statusCode = t.status, 
                    e.responseText = t.text, e.response = t.body), c(e)) : u(t.body);
                });
            });
        }, g = function(e, t) {
            t ? e["X-LC-Sign"] = v(f.applicationKey) : e["X-LC-Key"] = f.applicationKey;
        }, b = function() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], t = arguments[1], n = {
                "X-LC-Id": f.applicationId,
                "Content-Type": "application/json;charset=UTF-8"
            }, r = !1;
            return "boolean" == typeof e.useMasterKey ? r = e.useMasterKey : "boolean" == typeof f._useMasterKey && (r = f._useMasterKey), 
            r ? f.masterKey ? t ? n["X-LC-Sign"] = v(f.masterKey, !0) : n["X-LC-Key"] = f.masterKey + ",master" : (console.warn("masterKey is not set, fall back to use appKey"), 
            g(n, t)) : g(n, t), f.hookKey && (n["X-LC-Hook-Key"] = f.hookKey), null !== f._config.applicationProduction && (n["X-LC-Prod"] = String(f._config.applicationProduction)), 
            n["X-LC-UA"] = f._config.userAgent, u.resolve().then(function() {
                var t = d(e);
                if (t) n["X-LC-Session"] = t; else if (!f._config.disableCurrentUser) return f.User.currentAsync().then(function(e) {
                    return e && e._sessionToken && (n["X-LC-Session"] = e._sessionToken), n;
                });
                return n;
            });
        }, w = function(e, t, n, r, o) {
            f.serverURL && (f._config.APIServerURL = f.serverURL, console.warn("Please use AV._config.APIServerURL to replace AV.serverURL, and it is an internal interface."));
            var s = f._config.APIServerURL || _.cn;
            if ("/" !== s.charAt(s.length - 1) && (s += "/"), s += "1.1/" + e, t && (s += "/" + t), 
            n && (s += "/" + n), "users" !== e && "classes" !== e || !o || (s += "?", o._fetchWhenSave && (delete o._fetchWhenSave, 
            s += "&new=true"), o._where && (s += "&where=" + encodeURIComponent(JSON.stringify(o._where)), 
            delete o._where)), "get" === r.toLowerCase()) {
                -1 === s.indexOf("?") && (s += "?");
                for (var a in o) "object" === i(o[a]) && (o[a] = JSON.stringify(o[a])), s += "&" + a + "=" + encodeURIComponent(o[a]);
            }
            return s;
        }, S = function(e, t) {
            return "number" != typeof t && (t = 3600), c.setAsync("APIServerURL", e, 1e3 * t);
        }, O = function(e) {
            return new u(function(t, n) {
                if (410 === e.statusCode) S(e.response.api_server, e.response.ttl).then(function() {
                    t(e.response.location);
                }).catch(n); else {
                    var r = {
                        code: e.code || -1,
                        error: e.message || e.responseText
                    };
                    if (e.response && e.response.code) r = e.response; else if (e.responseText) try {
                        r = JSON.parse(e.responseText);
                    } catch (e) {}
                    n(new l(r.code, r.error));
                }
            });
        }, A = function(e) {
            f._config.APIServerURL = "https://" + e;
            var t = h.findKey(_, function(e) {
                return e === f._config.APIServerURL;
            });
            t && (f._config.region = t);
        }, E = function() {
            var e = "https://app-router.leancloud.cn/1/route?appId=" + f.applicationId;
            return m("get", e).then(function(e) {
                if (e.api_server) return A(e.api_server), S(e.api_server, e.ttl);
            }, function(e) {
                if (e.statusCode >= 400 && e.statusCode < 500) throw e;
            });
        };
        t.exports = {
            ajax: m,
            request: function(e, t, n, r) {
                var i = arguments.length <= 4 || void 0 === arguments[4] ? {} : arguments[4], o = arguments[5];
                if (!f.applicationId) throw new Error("You must specify your applicationId using AV.init()");
                if (!f.applicationKey && !f.masterKey) throw new Error("You must specify a AppKey using AV.init()");
                return p ? p.then(function() {
                    var s = w(e, t, n, r, i);
                    return b(o).then(function(e) {
                        return m(r, s, i, e).then(null, function(t) {
                            return O(t).then(function(t) {
                                return m(r, t, i, e);
                            });
                        });
                    });
                }) : u.reject(new Error("Not initialized"));
            },
            setServerUrlByRegion: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "cn" : arguments[0];
                p = new u(function(t, n) {
                    return f._config.APIServerURL ? void t() : "cn" === e ? c.getAsync("APIServerURL").then(function(e) {
                        return e ? void A(e) : E();
                    }).then(function() {
                        t();
                    }).catch(function(e) {
                        n(e);
                    }) : (f._config.region = e, f._config.APIServerURL = _[e], void t());
                });
            }
        };
    }, function(e, t, n) {
        function r(e, t) {
            var n = new Error(t);
            return n.code = e, n;
        }
        n(0).extend(r, {
            OTHER_CAUSE: -1,
            INTERNAL_SERVER_ERROR: 1,
            CONNECTION_FAILED: 100,
            OBJECT_NOT_FOUND: 101,
            INVALID_QUERY: 102,
            INVALID_CLASS_NAME: 103,
            MISSING_OBJECT_ID: 104,
            INVALID_KEY_NAME: 105,
            INVALID_POINTER: 106,
            INVALID_JSON: 107,
            COMMAND_UNAVAILABLE: 108,
            NOT_INITIALIZED: 109,
            INCORRECT_TYPE: 111,
            INVALID_CHANNEL_NAME: 112,
            PUSH_MISCONFIGURED: 115,
            OBJECT_TOO_LARGE: 116,
            OPERATION_FORBIDDEN: 119,
            CACHE_MISS: 120,
            INVALID_NESTED_KEY: 121,
            INVALID_FILE_NAME: 122,
            INVALID_ACL: 123,
            TIMEOUT: 124,
            INVALID_EMAIL_ADDRESS: 125,
            MISSING_CONTENT_TYPE: 126,
            MISSING_CONTENT_LENGTH: 127,
            INVALID_CONTENT_LENGTH: 128,
            FILE_TOO_LARGE: 129,
            FILE_SAVE_ERROR: 130,
            FILE_DELETE_ERROR: 153,
            DUPLICATE_VALUE: 137,
            INVALID_ROLE_NAME: 139,
            EXCEEDED_QUOTA: 140,
            SCRIPT_FAILED: 141,
            VALIDATION_ERROR: 142,
            INVALID_IMAGE_DATA: 150,
            UNSAVED_FILE_ERROR: 151,
            INVALID_PUSH_TIME_ERROR: 152,
            USERNAME_MISSING: 200,
            PASSWORD_MISSING: 201,
            USERNAME_TAKEN: 202,
            EMAIL_TAKEN: 203,
            EMAIL_MISSING: 204,
            EMAIL_NOT_FOUND: 205,
            SESSION_MISSING: 206,
            MUST_CREATE_USER_THROUGH_SIGNUP: 207,
            ACCOUNT_ALREADY_LINKED: 208,
            LINKED_ID_MISSING: 250,
            INVALID_LINKED_SESSION: 251,
            UNSUPPORTED_SERVICE: 252,
            X_DOMAIN_REQUEST: 602
        }), e.exports = r;
    }, function(e, t, n) {
        var r = n(0);
        e.exports = {
            isNullOrUndefined: function(e) {
                return r.isNull(e) || r.isUndefined(e);
            },
            ensureArray: function(e) {
                return r.isArray(e) ? e : void 0 === e || null === e ? [] : [ e ];
            },
            getSessionToken: function(e) {
                return e.sessionToken ? e.sessionToken : e.user && "function" == typeof e.user.getSessionToken ? e.user.getSessionToken() : void 0;
            },
            tap: function(e) {
                return function(t) {
                    return e(t), t;
                };
            }
        };
    }, function(t, n, r) {
        function i() {
            try {
                return n.storage.debug;
            } catch (e) {}
            if ("undefined" != typeof process && "env" in process) return process.env.DEBUG;
        }
        (n = t.exports = r(51)).log = function() {
            return "object" == ("undefined" == typeof console ? "undefined" : e(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
        }, n.formatArgs = function(e) {
            var t = this.useColors;
            if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + n.humanize(this.diff), 
            t) {
                var r = "color: " + this.color;
                e.splice(1, 0, r, "color: inherit");
                var i = 0, o = 0;
                e[0].replace(/%[a-zA-Z%]/g, function(e) {
                    "%%" !== e && (i++, "%c" === e && (o = i));
                }), e.splice(o, 0, r);
            }
        }, n.save = function(e) {
            try {
                null == e ? n.storage.removeItem("debug") : n.storage.debug = e;
            } catch (e) {}
        }, n.load = i, n.useColors = function() {
            return !("undefined" == typeof window || !window || void 0 === window.process || "renderer" !== window.process.type) || "undefined" != typeof document && document && "WebkitAppearance" in document.documentElement.style || "undefined" != typeof window && window && window.console && (console.firebug || console.exception && console.table) || "undefined" != typeof navigator && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
        }, n.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
            try {
                return window.localStorage;
            } catch (e) {}
        }(), n.colors = [ "lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson" ], 
        n.formatters.j = function(e) {
            try {
                return JSON.stringify(e);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return "[UnexpectedJSONParseError]: " + e.message;
            }
        }, n.enable(i());
    }, function(e, t, n) {
        (function(t) {
            var r = n(0), i = n(41), o = n(4).isNullOrUndefined, s = t.AV || {};
            s._config = s._config || {};
            var a = s._config;
            r.extend(a, {
                region: "cn",
                APIServerURL: a.APIServerURL || "",
                disableCurrentUser: !1,
                userAgent: i,
                applicationProduction: null
            });
            var u = function() {}, c = function(e, t, n) {
                var i;
                return i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                    e.apply(this, arguments);
                }, r.extend(i, e), u.prototype = e.prototype, i.prototype = new u(), t && r.extend(i.prototype, t), 
                n && r.extend(i, n), i.prototype.constructor = i, i.__super__ = e.prototype, i;
            };
            s.setProduction = function(e) {
                o(e) ? a.applicationProduction = null : a.applicationProduction = e ? 1 : 0;
            }, s._getAVPath = function(e) {
                if (!s.applicationId) throw new Error("You need to call AV.initialize before using AV.");
                if (e || (e = ""), !r.isString(e)) throw new Error("Tried to get a localStorage path that wasn't a String.");
                return "/" === e[0] && (e = e.substring(1)), "AV/" + s.applicationId + "/" + e;
            }, s._installationId = null, s._getInstallationId = function() {
                if (s._installationId) return s.Promise.resolve(s._installationId);
                var e = s._getAVPath("installationId");
                return s.localStorage.getItemAsync(e).then(function(t) {
                    if (s._installationId = t, s._installationId) return t;
                    var n = function() {
                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
                    };
                    return s._installationId = n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n(), 
                    s.localStorage.setItemAsync(e, s._installationId);
                });
            }, s._parseDate = function(e) {
                var t = new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$").exec(e);
                if (!t) return null;
                var n = t[1] || 0, r = (t[2] || 1) - 1, i = t[3] || 0, o = t[4] || 0, s = t[5] || 0, a = t[6] || 0, u = t[8] || 0;
                return new Date(Date.UTC(n, r, i, o, s, a, u));
            }, s._extend = function(e, t) {
                var n = c(this, e, t);
                return n.extend = this.extend, n;
            }, s._getValue = function(e, t) {
                return e && e[t] ? r.isFunction(e[t]) ? e[t]() : e[t] : null;
            }, s._encode = function(e, t, n) {
                var i = arguments.length <= 3 || void 0 === arguments[3] || arguments[3];
                if (e instanceof s.Object) {
                    if (n) throw new Error("AV.Objects not allowed here");
                    return t && !r.include(t, e) && e._hasData ? e._toFullJSON(t.concat(e), i) : e._toPointer();
                }
                if (e instanceof s.ACL) return e.toJSON();
                if (r.isDate(e)) return i ? {
                    __type: "Date",
                    iso: e.toJSON()
                } : e.toJSON();
                if (e instanceof s.GeoPoint) return e.toJSON();
                if (r.isArray(e)) return r.map(e, function(e) {
                    return s._encode(e, t, n, i);
                });
                if (r.isRegExp(e)) return e.source;
                if (e instanceof s.Relation) return e.toJSON();
                if (e instanceof s.Op) return e.toJSON();
                if (e instanceof s.File) {
                    if (!e.url() && !e.id) throw new Error("Tried to save an object containing an unsaved file.");
                    return e._toFullJSON(t, i);
                }
                return r.isObject(e) ? r.mapObject(e, function(e, r) {
                    return s._encode(e, t, n, i);
                }) : e;
            }, s._decode = function(e, t) {
                if (!r.isObject(e) || r.isDate(e)) return e;
                if (r.isArray(e)) return r.map(e, function(e) {
                    return s._decode(e);
                });
                if (e instanceof s.Object) return e;
                if (e instanceof s.File) return e;
                if (e instanceof s.Op) return e;
                if (e instanceof s.GeoPoint) return e;
                if (e instanceof s.ACL) return e;
                if ("ACL" === t) return new s.ACL(e);
                if (e.__op) return s.Op._decode(e);
                var n;
                if ("Pointer" === e.__type) {
                    n = e.className;
                    var i = s.Object._create(n);
                    if (Object.keys(e).length > 3) {
                        var o = r.clone(e);
                        delete o.__type, delete o.className, i._finishFetch(o, !0);
                    } else i._finishFetch({
                        objectId: e.objectId
                    }, !1);
                    return i;
                }
                if ("Object" === e.__type) {
                    n = e.className;
                    var a = r.clone(e);
                    delete a.__type, delete a.className;
                    var u = s.Object._create(n);
                    return u._finishFetch(a, !0), u;
                }
                if ("Date" === e.__type) return s._parseDate(e.iso);
                if ("GeoPoint" === e.__type) return new s.GeoPoint({
                    latitude: e.latitude,
                    longitude: e.longitude
                });
                if ("Relation" === e.__type) {
                    if (!t) throw new Error("key missing decoding a Relation");
                    var c = new s.Relation(null, t);
                    return c.targetClassName = e.className, c;
                }
                if ("File" === e.__type) {
                    var l = new s.File(e.name), f = r.clone(e);
                    return delete f.__type, l._finishFetch(f), l;
                }
                return r.mapObject(e, s._decode);
            }, s.parseJSON = s._decode, s._encodeObjectOrArray = function(e) {
                var t = function(e) {
                    return e && e._toFullJSON && (e = e._toFullJSON([])), r.mapObject(e, function(e) {
                        return s._encode(e, []);
                    });
                };
                return r.isArray(e) ? e.map(function(e) {
                    return t(e);
                }) : t(e);
            }, s._arrayEach = r.each, s._traverse = function(e, t, n) {
                if (e instanceof s.Object) {
                    if (n = n || [], r.indexOf(n, e) >= 0) return;
                    return n.push(e), s._traverse(e.attributes, t, n), t(e);
                }
                return e instanceof s.Relation || e instanceof s.File ? t(e) : r.isArray(e) ? (r.each(e, function(r, i) {
                    var o = s._traverse(r, t, n);
                    o && (e[i] = o);
                }), t(e)) : r.isObject(e) ? (s._each(e, function(r, i) {
                    var o = s._traverse(r, t, n);
                    o && (e[i] = o);
                }), t(e)) : t(e);
            }, s._objectEach = s._each = function(e, t) {
                r.isObject(e) ? r.each(r.keys(e), function(n) {
                    t(e[n], n);
                }) : r.each(e, t);
            }, e.exports = s;
        }).call(t, n(8));
    }, function(t, n, r) {
        function i() {}
        function o(e) {
            if (!v(e)) return e;
            var t = [];
            for (var n in e) s(t, n, e[n]);
            return t.join("&");
        }
        function s(e, t, n) {
            if (null != n) if (Array.isArray(n)) n.forEach(function(n) {
                s(e, t, n);
            }); else if (v(n)) for (var r in n) s(e, t + "[" + r + "]", n[r]); else e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n)); else null === n && e.push(encodeURIComponent(t));
        }
        function a(e) {
            for (var t, n, r = {}, i = e.split("&"), o = 0, s = i.length; o < s; ++o) -1 == (n = (t = i[o]).indexOf("=")) ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));
            return r;
        }
        function u(e) {
            var t, n, r, i, o = e.split(/\r?\n/), s = {};
            o.pop();
            for (var a = 0, u = o.length; a < u; ++a) t = (n = o[a]).indexOf(":"), r = n.slice(0, t).toLowerCase(), 
            i = b(n.slice(t + 1)), s[r] = i;
            return s;
        }
        function c(e) {
            return /[\/+]json\b/.test(e);
        }
        function l(e, t) {
            t = t || {}, this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, 
            this.statusText = this.req.xhr.statusText;
            var n = this.xhr.status;
            1223 === n && (n = 204), this._setStatusProperties(n), this.header = this.headers = u(this.xhr.getAllResponseHeaders()), 
            this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), 
            null === this.text && e._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
        }
        function f(e, t) {
            var n = this;
            this._query = this._query || [], this.method = e, this.url = t, this.header = {}, 
            this._header = {}, this.on("end", function() {
                var e = null, t = null;
                try {
                    t = new l(n);
                } catch (t) {
                    t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                    return e = new Error("Parser is unable to parse the response"), e.parse = !0, e.original = t, 
                    n.xhr ? (e.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response, 
                    e.status = n.xhr.status ? n.xhr.status : null, e.statusCode = e.status) : (e.rawResponse = null, 
                    e.status = null), n.callback(e);
                }
                n.emit("response", t);
                var r;
                try {
                    n._isResponseOK(t) || (r = new Error(t.statusText || "Unsuccessful HTTP response"), 
                    r.original = e, r.response = t, r.status = t.status);
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    r = e;
                }
                r ? n.callback(r, t) : n.callback(null, t);
            });
        }
        function h(e, t) {
            var n = g("DELETE", e);
            return t && n.end(t), n;
        }
        var d;
        "undefined" != typeof window ? d = window : "undefined" != typeof self ? d = self : (console.warn("Using browser-only version of superagent in non-browser environment"), 
        d = this);
        var p = r(48), _ = r(59), v = r(11), y = r(58), m = r(60), g = n = t.exports = function(e, t) {
            return "function" == typeof t ? new n.Request("GET", e).end(t) : 1 == arguments.length ? new n.Request("GET", e) : new n.Request(e, t);
        };
        n.Request = f, g.getXHR = function() {
            if (!(!d.XMLHttpRequest || d.location && "file:" == d.location.protocol && d.ActiveXObject)) return new XMLHttpRequest();
            try {
                return new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {}
            throw Error("Browser-only verison of superagent could not find XHR");
        };
        var b = "".trim ? function(e) {
            return e.trim();
        } : function(e) {
            return e.replace(/(^\s*|\s*$)/g, "");
        };
        g.serializeObject = o, g.parseString = a, g.types = {
            html: "text/html",
            json: "application/json",
            xml: "application/xml",
            urlencoded: "application/x-www-form-urlencoded",
            form: "application/x-www-form-urlencoded",
            "form-data": "application/x-www-form-urlencoded"
        }, g.serialize = {
            "application/x-www-form-urlencoded": o,
            "application/json": JSON.stringify
        }, g.parse = {
            "application/x-www-form-urlencoded": a,
            "application/json": JSON.parse
        }, m(l.prototype), l.prototype._parseBody = function(e) {
            var t = g.parse[this.type];
            return this.req._parser ? this.req._parser(this, e) : (!t && c(this.type) && (t = g.parse["application/json"]), 
            t && e && (e.length || e instanceof Object) ? t(e) : null);
        }, l.prototype.toError = function() {
            var e = this.req, t = e.method, n = e.url, r = "cannot " + t + " " + n + " (" + this.status + ")", i = new Error(r);
            return i.status = this.status, i.method = t, i.url = n, i;
        }, g.Response = l, p(f.prototype), _(f.prototype), f.prototype.type = function(e) {
            return this.set("Content-Type", g.types[e] || e), this;
        }, f.prototype.accept = function(e) {
            return this.set("Accept", g.types[e] || e), this;
        }, f.prototype.auth = function(e, t, n) {
            switch (n || (n = {
                type: "function" == typeof btoa ? "basic" : "auto"
            }), n.type) {
              case "basic":
                this.set("Authorization", "Basic " + btoa(e + ":" + t));
                break;

              case "auto":
                this.username = e, this.password = t;
            }
            return this;
        }, f.prototype.query = function(e) {
            return "string" != typeof e && (e = o(e)), e && this._query.push(e), this;
        }, f.prototype.attach = function(e, t, n) {
            if (this._data) throw Error("superagent can't mix .send() and .attach()");
            return this._getFormData().append(e, t, n || t.name), this;
        }, f.prototype._getFormData = function() {
            return this._formData || (this._formData = new d.FormData()), this._formData;
        }, f.prototype.callback = function(e, t) {
            var n = this._callback;
            this.clearTimeout(), e && this.emit("error", e), n(e, t);
        }, f.prototype.crossDomainError = function() {
            var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
            e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, 
            this.callback(e);
        }, f.prototype.buffer = f.prototype.ca = f.prototype.agent = function() {
            return console.warn("This is not supported in browser version of superagent"), this;
        }, f.prototype.pipe = f.prototype.write = function() {
            throw Error("Streaming is not supported in browser version of superagent");
        }, f.prototype._appendQueryString = function() {
            var e = this._query.join("&");
            if (e && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + e), this._sort) {
                var t = this.url.indexOf("?");
                if (t >= 0) {
                    var n = this.url.substring(t + 1).split("&");
                    y(this._sort) ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, t) + "?" + n.join("&");
                }
            }
        }, f.prototype._isHost = function(t) {
            return t && "object" == (void 0 === t ? "undefined" : e(t)) && !Array.isArray(t) && "[object Object]" !== Object.prototype.toString.call(t);
        }, f.prototype.end = function(e) {
            var t = this, n = this.xhr = g.getXHR(), r = this._formData || this._data;
            this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), 
            this._endCalled = !0, this._callback = e || i, n.onreadystatechange = function() {
                var e = n.readyState;
                if (e >= 2 && t._responseTimeoutTimer && clearTimeout(t._responseTimeoutTimer), 
                4 == e) {
                    var r;
                    try {
                        r = n.status;
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        r = 0;
                    }
                    if (!r) {
                        if (t.timedout || t._aborted) return;
                        return t.crossDomainError();
                    }
                    t.emit("end");
                }
            };
            var o = function(e, n) {
                n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = e, t.emit("progress", n);
            };
            if (this.hasListeners("progress")) try {
                n.onprogress = o.bind(null, "download"), n.upload && (n.upload.onprogress = o.bind(null, "upload"));
            } catch (e) {}
            this._appendQueryString(), this._setTimeouts();
            try {
                this.username && this.password ? n.open(this.method, this.url, !0, this.username, this.password) : n.open(this.method, this.url, !0);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return this.callback(e);
            }
            if (this._withCredentials && (n.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof r && !this._isHost(r)) {
                var s = this._header["content-type"], a = this._serializer || g.serialize[s ? s.split(";")[0] : ""];
                !a && c(s) && (a = g.serialize["application/json"]), a && (r = a(r));
            }
            for (var u in this.header) null != this.header[u] && n.setRequestHeader(u, this.header[u]);
            return this._responseType && (n.responseType = this._responseType), this.emit("request", this), 
            n.send(void 0 !== r ? r : null), this;
        }, g.get = function(e, t, n) {
            var r = g("GET", e);
            return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), 
            r;
        }, g.head = function(e, t, n) {
            var r = g("HEAD", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), 
            r;
        }, g.options = function(e, t, n) {
            var r = g("OPTIONS", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), 
            r;
        }, g.del = h, g.delete = h, g.patch = function(e, t, n) {
            var r = g("PATCH", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), 
            r;
        }, g.post = function(e, t, n) {
            var r = g("POST", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), 
            r;
        }, g.put = function(e, t, n) {
            var r = g("PUT", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), 
            r;
        };
    }, function(t, n) {
        var r;
        r = function() {
            return this;
        }();
        try {
            r = r || Function("return this")() || (0, eval)("this");
        } catch (t) {
            t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
            "object" == ("undefined" == typeof window ? "undefined" : e(window)) && (r = window);
        }
        t.exports = r;
    }, function(t, n, r) {
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return void 0 === t ? "undefined" : e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : void 0 === t ? "undefined" : e(t);
        }, s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), a = function() {
            function e() {
                i(this, e), this._entries = [];
            }
            return s(e, [ {
                key: "append",
                value: function(e, t) {
                    if ("string" != typeof e) throw new TypeError("FormData name must be a string");
                    if ("string" != typeof t && ("object" !== (void 0 === t ? "undefined" : o(t)) || "string" != typeof t.uri)) throw new TypeError("FormData value must be a string or { uri: tempFilePath }");
                    this._entries.push([ e, t ]);
                }
            }, {
                key: "set",
                value: function(e, t) {
                    var n = this.get(e);
                    n ? n[1] = t : this.append(e, t);
                }
            }, {
                key: "delete",
                value: function(e) {
                    this._entries = this._entries.filter(function(t) {
                        return t[0] !== e;
                    });
                }
            }, {
                key: "entries",
                value: function() {
                    return this._entries;
                }
            }, {
                key: "get",
                value: function(e) {
                    return this._entries.find(function(t) {
                        return t[0] === e;
                    });
                }
            }, {
                key: "getAll",
                value: function(e) {
                    return this._entries.filter(function(t) {
                        return t[0] === e;
                    });
                }
            }, {
                key: "has",
                value: function(e) {
                    return this._entries.some(function(t) {
                        return t[0] === e;
                    });
                }
            }, {
                key: "keys",
                value: function() {
                    return this._entries.map(function(e) {
                        return e[0];
                    });
                }
            }, {
                key: "values",
                value: function() {
                    return this._entries.map(function(e) {
                        return e[1];
                    });
                }
            } ]), e;
        }();
        t.exports = a;
    }, function(e, t, n) {
        var r = t.createUniqueKey = "undefined" != typeof Symbol ? Symbol : function(e) {
            return "[[" + e + "_" + Math.random().toFixed(8).slice(2) + "]]";
        };
        t.LISTENERS = r("listeners"), t.CAPTURE = 1, t.BUBBLE = 2, t.ATTRIBUTE = 3, t.newNode = function(e, t) {
            return {
                listener: e,
                kind: t,
                next: null
            };
        };
    }, function(t, n) {
        t.exports = function(t) {
            return null !== t && "object" == (void 0 === t ? "undefined" : e(t));
        };
    }, function(e, t, n) {
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), o = function() {
            function e() {
                r(this, e);
            }
            return i(e, [ {
                key: "getItem",
                value: function(e) {
                    return wx.getStorageSync(e);
                }
            }, {
                key: "setItem",
                value: function(e, t) {
                    return wx.setStorageSync(e, t);
                }
            }, {
                key: "removeItem",
                value: function(e) {
                    return this.setItem(e, "");
                }
            }, {
                key: "clear",
                value: function() {
                    return wx.clearStorageSync();
                }
            } ]), e;
        }();
        e.exports = new o();
    }, function(e, t, n) {
        e.exports = {};
    }, function(t, n, r) {
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(t, n) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != (void 0 === n ? "undefined" : e(n)) && "function" != typeof n ? t : n;
        }
        function s(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : e(n)));
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
        }
        function a(e) {
            "" !== e.message && _ && (_._readyState = d, _.dispatchEvent({
                type: "error",
                message: e.errMsg
            }));
        }
        var u = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), c = r(21), l = r(20), f = 0, h = 1, d = 3, p = [ "open", "error", "message", "close" ], _ = void 0, v = function(e) {
            function t(e, n) {
                if (i(this, t), !e) throw new TypeError("Failed to construct 'WebSocket': url required");
                if (n) throw new Error("subprotocal not supported in weapp");
                var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return r._url = e, r._protocal = "", r._readyState = f, _ && _.dispatchEvent({
                    type: "close"
                }), _ = r, wx.onSocketOpen(function(e) {
                    _ && (_._readyState = h, _.dispatchEvent({
                        type: "open"
                    }));
                }), wx.onSocketError(a), wx.onSocketMessage(function(e) {
                    if (_) {
                        var t = e.data, n = e.origin, r = e.ports, i = e.source;
                        _.dispatchEvent({
                            data: t,
                            origin: n,
                            ports: r,
                            source: i,
                            type: "message"
                        });
                    }
                }), wx.onSocketClose(function(e) {
                    if (_) {
                        _._readyState = d;
                        var t = e.code, n = e.reason, r = e.wasClean;
                        _.dispatchEvent({
                            code: t,
                            reason: n,
                            wasClean: r,
                            type: "close"
                        }), _ = null;
                    }
                }), wx.connectSocket({
                    url: e,
                    fail: function(e) {
                        return setTimeout(function() {
                            return a(e);
                        }, 0);
                    }
                }), r;
            }
            return s(t, l(p)), u(t, [ {
                key: "close",
                value: function() {
                    this.readyState === f && console.warn("close WebSocket which is connecting might not work"), 
                    wx.closeSocket();
                }
            }, {
                key: "send",
                value: function(e) {
                    if (this.readyState !== h) throw new Error("INVALID_STATE_ERR");
                    if ("string" != typeof e) throw new TypeError("only string typed data are supported");
                    wx.sendSocketMessage({
                        data: e
                    });
                }
            }, {
                key: "url",
                get: function() {
                    return this._url;
                }
            }, {
                key: "protocal",
                get: function() {
                    return this._protocal;
                }
            }, {
                key: "readyState",
                get: function() {
                    return this._readyState;
                }
            } ]), t;
        }();
        c(v, {
            CONNECTING: f,
            OPEN: h,
            CLOSING: 2,
            CLOSED: d
        }), t.exports = v;
    }, function(t, n, r) {
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function s(t, n) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != (void 0 === n ? "undefined" : e(n)) && "function" != typeof n ? t : n;
        }
        function a(t, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === n ? "undefined" : e(n)));
            t.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
        }
        function u(e) {
            this.status = e.statusCode, this.statusText = e.statusCode;
            var t = e.data;
            "string" != typeof t && (t = JSON.stringify(t)), this.responseText = this.response = t, 
            this.readyState = p, this.dispatchEvent({
                type: "readystatechange"
            });
        }
        var c = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), l = r(21), f = r(20), h = r(9), d = 0, p = 4, _ = [ "abort", "error", "load", "loadstart", "progress", "timeout", "loadend", "readystatechange" ], v = function(e) {
            function t() {
                o(this, t);
                var e = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.readyState = d, e._headers = {}, e;
            }
            return a(t, f(_)), c(t, [ {
                key: "abort",
                value: function() {
                    throw new Error("not supported in weapp");
                }
            }, {
                key: "getAllResponseHeaders",
                value: function() {
                    return console.warn("getAllResponseHeaders always returns ''"), "";
                }
            }, {
                key: "getResponseHeader",
                value: function(e) {
                    return "content-type" === e ? (console.warn("get content-type always returns 'application/json'"), 
                    "application/json") : (console.warn("getResponseHeader always returns ''"), "");
                }
            }, {
                key: "overrideMimeType",
                value: function() {
                    throw new Error("not supported in weapp");
                }
            }, {
                key: "open",
                value: function(e, t) {
                    var n = arguments.length <= 2 || void 0 === arguments[2] || arguments[2];
                    if (this.readyState !== d) throw new Error("request is already opened");
                    if (!n) throw new Error("sync request is not supported");
                    this._method = e, this._url = t, this.readyState = 1, this.dispatchEvent({
                        type: "readystatechange"
                    });
                }
            }, {
                key: "setRequestHeader",
                value: function(e, t) {
                    if (1 !== this.readyState) throw new Error("request is not opened");
                    this._headers[e.toLowerCase()] = t;
                }
            }, {
                key: "send",
                value: function(e) {
                    var t = this;
                    if (1 !== this.readyState) throw new Error("request is not opened");
                    if (e instanceof h) {
                        var n = e.entries(), r = n.filter(function(e) {
                            return "string" != typeof e[1];
                        });
                        if (0 === r.length) throw new Error("Must specify a Blob field in FormData");
                        r.length > 1 && console.warn("Only the first Blob will be send in Weapp");
                        var o = n.filter(function(e) {
                            return "string" == typeof e[1];
                        }).reduce(function(e, t) {
                            return l(e, i({}, t[0], t[1]));
                        }, {});
                        wx.uploadFile({
                            url: this._url,
                            name: r[0][0],
                            filePath: r[0][1].uri,
                            formData: o,
                            header: this._headers,
                            success: u.bind(this),
                            fail: function(e) {
                                t.status = 0, t.readyState = p, t.dispatchEvent({
                                    type: "readystatechange"
                                }), t.dispatchEvent({
                                    type: "error"
                                });
                            }
                        });
                    } else wx.request({
                        url: this._url,
                        data: e || "",
                        method: this._method.toUpperCase(),
                        header: this._headers,
                        success: u.bind(this),
                        fail: function(e) {
                            t.status = 0, t.readyState = p, t.dispatchEvent({
                                type: "readystatechange"
                            }), t.dispatchEvent({
                                type: "error"
                            });
                        }
                    });
                }
            } ]), t;
        }();
        l(v, {
            UNSENT: d,
            OPENED: 1,
            HEADERS_RECEIVED: 2,
            LOADING: 3,
            DONE: p
        }), t.exports = v;
    }, function(e, t, n) {
        var r = n(17), i = n(6), o = t.removeAsync = r.removeItemAsync.bind(r), s = function(e, t) {
            try {
                e = JSON.parse(e);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return null;
            }
            return e ? e.expiredAt && e.expiredAt < Date.now() ? o(t).then(function() {
                return null;
            }) : e.value : null;
        };
        t.getAsync = function(e) {
            return e = i.applicationId + "/" + e, r.getItemAsync(e).then(function(t) {
                return s(t, e);
            });
        }, t.setAsync = function(e, t, n) {
            var o = {
                value: t
            };
            return "number" == typeof n && (o.expiredAt = Date.now() + n), r.setItemAsync(i.applicationId + "/" + e, JSON.stringify(o));
        };
    }, function(e, t, n) {
        var r = n(0), i = n(1), o = n(46), s = [ "getItem", "setItem", "removeItem", "clear" ];
        o.async ? r(s).each(function(e) {
            "function" != typeof o[e] && (o[e] = function() {
                var t = new Error("Synchronous API [" + e + "] is not available in this runtime.");
                throw t.code = "SYNC_API_NOT_AVAILABLE", t;
            });
        }) : r(s).each(function(e) {
            "function" == typeof o[e] && (o[e + "Async"] = function() {
                return i.resolve(o[e].apply(o, arguments));
            });
        }), e.exports = o;
    }, function(e, t, n) {
        e.exports = "3.0.0-beta.1";
    }, function(e, t) {
        var n = {
            utf8: {
                stringToBytes: function(e) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(e)));
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(n.bin.bytesToString(e)));
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                    return t;
                },
                bytesToString: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                    return t.join("");
                }
            }
        };
        e.exports = n;
    }, function(t, n, r) {
        var i = r(10), o = r(53), s = r(54), a = i.LISTENERS, u = i.CAPTURE, c = i.BUBBLE, l = i.ATTRIBUTE, f = i.newNode, h = o.defineCustomEventTarget, d = s.createEventWrapper, p = s.STOP_IMMEDIATE_PROPAGATION_FLAG, _ = "undefined" != typeof window && void 0 !== window.EventTarget, v = t.exports = function e() {
            if (!(this instanceof e)) {
                if (1 === arguments.length && Array.isArray(arguments[0])) return h(e, arguments[0]);
                if (arguments.length > 0) {
                    for (var t = Array(arguments.length), n = 0; n < arguments.length; ++n) t[n] = arguments[n];
                    return h(e, t);
                }
                throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(this, a, {
                value: Object.create(null)
            });
        };
        v.prototype = Object.create((_ ? window.EventTarget : Object).prototype, {
            constructor: {
                value: v,
                writable: !0,
                configurable: !0
            },
            addEventListener: {
                value: function(t, n, r) {
                    if (null == n) return !1;
                    if ("function" != typeof n && "object" != (void 0 === n ? "undefined" : e(n))) throw new TypeError('"listener" is not an object.');
                    var i = r ? u : c, o = this[a][t];
                    if (null == o) return this[a][t] = f(n, i), !0;
                    for (var s = null; null != o; ) {
                        if (o.listener === n && o.kind === i) return !1;
                        s = o, o = o.next;
                    }
                    return s.next = f(n, i), !0;
                },
                configurable: !0,
                writable: !0
            },
            removeEventListener: {
                value: function(e, t, n) {
                    if (null == t) return !1;
                    for (var r = n ? u : c, i = null, o = this[a][e]; null != o; ) {
                        if (o.listener === t && o.kind === r) return null == i ? this[a][e] = o.next : i.next = o.next, 
                        !0;
                        i = o, o = o.next;
                    }
                    return !1;
                },
                configurable: !0,
                writable: !0
            },
            dispatchEvent: {
                value: function(e) {
                    var t = this[a][e.type];
                    if (null == t) return !0;
                    for (var n = d(e, this); null != t && ("function" == typeof t.listener ? t.listener.call(this, n) : t.kind !== l && "function" == typeof t.listener.handleEvent && t.listener.handleEvent(n), 
                    !n[p]); ) t = t.next;
                    return !n.defaultPrevented;
                },
                configurable: !0,
                writable: !0
            }
        });
    }, function(e, t, n) {
        function r(e) {
            if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e);
        }
        var i = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
        e.exports = function() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e];
                }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    r[e] = e;
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                return !1;
            }
        }() ? Object.assign : function(e, t) {
            for (var n, s, a = r(e), u = 1; u < arguments.length; u++) {
                n = Object(arguments[u]);
                for (var c in n) i.call(n, c) && (a[c] = n[c]);
                if (Object.getOwnPropertySymbols) {
                    s = Object.getOwnPropertySymbols(n);
                    for (var l = 0; l < s.length; l++) o.call(n, s[l]) && (a[s[l]] = n[s[l]]);
                }
            }
            return a;
        };
    }, function(e, t, n) {
        var r = n(24).polyfill;
        window = window || {}, r(), r(window);
        try {
            localStorage = localStorage || n(12);
        } catch (e) {}
        try {
            XMLHttpRequest = XMLHttpRequest || n(15);
        } catch (e) {}
        try {
            FormData = FormData || n(9);
        } catch (e) {}
        try {
            WebSocket = WebSocket || n(14);
        } catch (e) {}
        try {
            navigator = navigator || n(13);
        } catch (e) {}
    }, function(e, t, n) {
        var r = n(6);
        r._ = n(0), r.version = n(18), r.Promise = n(1), r.localStorage = n(17), r.Cache = n(16), 
        r.Error = n(3), n(30), n(27)(r), n(29)(r), n(25)(r), n(33)(r), n(36)(r), n(28)(r), 
        n(32)(r), n(37)(r), n(45)(r), n(35)(r), n(26)(r), n(34)(r), n(39)(r), n(38)(r), 
        n(31)(r), e.exports = r;
    }, function(t, n, r) {
        (function(n) {
            var i = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                return void 0 === t ? "undefined" : e(t);
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : void 0 === t ? "undefined" : e(t);
            }, o = r(12), s = r(15), a = r(9), u = r(14), c = r(13);
            t.exports = {
                polyfill: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? n || window : arguments[0];
                    if ("object" !== (void 0 === e ? "undefined" : i(e))) throw new Error("polyfill target is not an Object");
                    var t = {
                        localStorage: o,
                        XMLHttpRequest: s,
                        FormData: a,
                        WebSocket: u,
                        Object: Object,
                        navigator: c
                    };
                    for (var r in t) e[r] || (e[r] = t[r]);
                },
                localStorage: o,
                XMLHttpRequest: s,
                FormData: a,
                WebSocket: u
            };
        }).call(n, r(8));
    }, function(e, t, n) {
        var r = n(0);
        e.exports = function(e) {
            var t = "*";
            e.ACL = function(t) {
                var n = this;
                if (n.permissionsById = {}, r.isObject(t)) if (t instanceof e.User) n.setReadAccess(t, !0), 
                n.setWriteAccess(t, !0); else {
                    if (r.isFunction(t)) throw new Error("AV.ACL() called with a function.  Did you forget ()?");
                    e._objectEach(t, function(t, i) {
                        if (!r.isString(i)) throw new Error("Tried to create an ACL with an invalid userId.");
                        n.permissionsById[i] = {}, e._objectEach(t, function(e, t) {
                            if ("read" !== t && "write" !== t) throw new Error("Tried to create an ACL with an invalid permission type.");
                            if (!r.isBoolean(e)) throw new Error("Tried to create an ACL with an invalid permission value.");
                            n.permissionsById[i][t] = e;
                        });
                    });
                }
            }, e.ACL.prototype.toJSON = function() {
                return r.clone(this.permissionsById);
            }, e.ACL.prototype._setAccess = function(t, n, i) {
                if (n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName()), 
                !r.isString(n)) throw new Error("userId must be a string.");
                if (!r.isBoolean(i)) throw new Error("allowed must be either true or false.");
                var o = this.permissionsById[n];
                if (!o) {
                    if (!i) return;
                    o = {}, this.permissionsById[n] = o;
                }
                i ? this.permissionsById[n][t] = !0 : (delete o[t], r.isEmpty(o) && delete this.permissionsById[n]);
            }, e.ACL.prototype._getAccess = function(t, n) {
                n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName());
                var r = this.permissionsById[n];
                return !!r && !!r[t];
            }, e.ACL.prototype.setReadAccess = function(e, t) {
                this._setAccess("read", e, t);
            }, e.ACL.prototype.getReadAccess = function(e) {
                return this._getAccess("read", e);
            }, e.ACL.prototype.setWriteAccess = function(e, t) {
                this._setAccess("write", e, t);
            }, e.ACL.prototype.getWriteAccess = function(e) {
                return this._getAccess("write", e);
            }, e.ACL.prototype.setPublicReadAccess = function(e) {
                this.setReadAccess(t, e);
            }, e.ACL.prototype.getPublicReadAccess = function() {
                return this.getReadAccess(t);
            }, e.ACL.prototype.setPublicWriteAccess = function(e) {
                this.setWriteAccess(t, e);
            }, e.ACL.prototype.getPublicWriteAccess = function() {
                return this.getWriteAccess(t);
            }, e.ACL.prototype.getRoleReadAccess = function(t) {
                if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getReadAccess("role:" + t);
                throw new Error("role must be a AV.Role or a String");
            }, e.ACL.prototype.getRoleWriteAccess = function(t) {
                if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getWriteAccess("role:" + t);
                throw new Error("role must be a AV.Role or a String");
            }, e.ACL.prototype.setRoleReadAccess = function(t, n) {
                if (t instanceof e.Role && (t = t.getName()), !r.isString(t)) throw new Error("role must be a AV.Role or a String");
                this.setReadAccess("role:" + t, n);
            }, e.ACL.prototype.setRoleWriteAccess = function(t, n) {
                if (t instanceof e.Role && (t = t.getName()), !r.isString(t)) throw new Error("role must be a AV.Role or a String");
                this.setWriteAccess("role:" + t, n);
            };
        };
    }, function(e, t, n) {
        var r = n(0), i = n(2).request;
        e.exports = function(e) {
            e.Cloud = e.Cloud || {}, r.extend(e.Cloud, {
                run: function(t, n, r) {
                    return i("functions", t, null, "POST", e._encode(n, null, !0), r).then(function(t) {
                        return e._decode(t).result;
                    });
                },
                rpc: function(t, n, o) {
                    return r.isArray(n) ? Promise.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK.")) : i("call", t, null, "POST", e._encodeObjectOrArray(n), o).then(function(t) {
                        return e._decode(t).result;
                    });
                },
                getServerDate: function() {
                    return i("date", null, null, "GET").then(function(t) {
                        return e._decode(t);
                    });
                },
                requestSmsCode: function(e) {
                    if (r.isString(e) && (e = {
                        mobilePhoneNumber: e
                    }), !e.mobilePhoneNumber) throw new Error("Missing mobilePhoneNumber.");
                    return i("requestSmsCode", null, null, "POST", e);
                },
                verifySmsCode: function(e, t) {
                    if (!e) throw new Error("Missing sms code.");
                    var n = {};
                    return r.isString(t) && (n.mobilePhoneNumber = t), i("verifySmsCode", e, null, "POST", n);
                }
            });
        };
    }, function(e, t, n) {
        var r = n(0);
        e.exports = function(e) {
            var t = /\s+/, n = Array.prototype.slice;
            e.Events = {
                on: function(e, n, r) {
                    var i, o, s, a, u;
                    if (!n) return this;
                    for (e = e.split(t), i = this._callbacks || (this._callbacks = {}), o = e.shift(); o; ) (s = (u = i[o]) ? u.tail : {}).next = a = {}, 
                    s.context = r, s.callback = n, i[o] = {
                        tail: a,
                        next: u ? u.next : s
                    }, o = e.shift();
                    return this;
                },
                off: function(e, n, i) {
                    var o, s, a, u, c, l;
                    if (s = this._callbacks) {
                        if (!(e || n || i)) return delete this._callbacks, this;
                        for (o = (e = e ? e.split(t) : r.keys(s)).shift(); o; ) if (a = s[o], delete s[o], 
                        a && (n || i)) {
                            for (u = a.tail, a = a.next; a !== u; ) c = a.callback, l = a.context, (n && c !== n || i && l !== i) && this.on(o, c, l), 
                            a = a.next;
                            o = e.shift();
                        }
                        return this;
                    }
                },
                trigger: function(e) {
                    var r, i, o, s, a, u, c;
                    if (!(o = this._callbacks)) return this;
                    for (u = o.all, e = e.split(t), c = n.call(arguments, 1), r = e.shift(); r; ) {
                        if (i = o[r]) for (s = i.tail; (i = i.next) !== s; ) i.callback.apply(i.context || this, c);
                        if (i = u) for (s = i.tail, a = [ r ].concat(c); (i = i.next) !== s; ) i.callback.apply(i.context || this, a);
                        r = e.shift();
                    }
                    return this;
                }
            }, e.Events.bind = e.Events.on, e.Events.unbind = e.Events.off;
        };
    }, function(e, t, n) {
        var r = n(0), i = n(42), o = n(43), s = n(44), a = n(3), u = n(2).request, c = n(1), l = n(4).tap, f = n(5)("leancloud:file");
        e.exports = function(e) {
            var t = (e._config, function() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            }), h = function(e) {
                return e.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4];
            }, d = function(e) {
                if (e < 26) return String.fromCharCode(65 + e);
                if (e < 52) return String.fromCharCode(e - 26 + 97);
                if (e < 62) return String.fromCharCode(e - 52 + 48);
                if (62 === e) return "+";
                if (63 === e) return "/";
                throw new Error("Tried to encode large digit " + e + " in base64.");
            }, p = function(e) {
                var t = [];
                return t.length = Math.ceil(e.length / 3), r.times(t.length, function(n) {
                    var r = e[3 * n], i = e[3 * n + 1] || 0, o = e[3 * n + 2] || 0, s = 3 * n + 1 < e.length, a = 3 * n + 2 < e.length;
                    t[n] = [ d(r >> 2 & 63), d(r << 4 & 48 | i >> 4 & 15), s ? d(i << 2 & 60 | o >> 6 & 3) : "=", a ? d(63 & o) : "=" ].join("");
                }), t.join("");
            };
            e.File = function(t, i, o) {
                this.attributes = {
                    name: t,
                    url: "",
                    metaData: {},
                    base64: ""
                }, this._extName = "";
                var s = void 0;
                if (i && i.owner) s = i.owner; else if (!e._config.disableCurrentUser) try {
                    s = e.User.current();
                } catch (e) {
                    e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                    if ("SYNC_API_NOT_AVAILABLE" !== e.code) throw e;
                    console.warn("Get current user failed. It seems this runtime use an async storage system, please create AV.File in the callback of AV.User.currentAsync().");
                }
                if (this.attributes.metaData = {
                    owner: s ? s.id : "unknown"
                }, this.set("mime_type", o), r.isArray(i) && (this.attributes.metaData.size = i.length, 
                i = {
                    base64: p(i)
                }), i && i.base64) {
                    var a = n(47)(i.base64, o);
                    this._source = c.resolve({
                        data: a,
                        type: o
                    });
                } else if (i && i.blob) !i.blob.type && o && (i.blob.type = o), i.blob.name || (i.blob.name = t), 
                this._extName = h(i.blob.uri), this._source = c.resolve({
                    data: i.blob,
                    type: o
                }); else if ("undefined" != typeof File && i instanceof File) i.size && (this.attributes.metaData.size = i.size), 
                i.name && (this._extName = h(i.name)), this._source = c.resolve({
                    data: i,
                    type: o
                }); else if ("undefined" != typeof Buffer && Buffer.isBuffer(i)) this.attributes.metaData.size = i.length, 
                this._source = c.resolve({
                    data: i,
                    type: o
                }); else if (r.isString(i)) throw new Error("Creating a AV.File from a String is not yet supported.");
            }, e.File.withURL = function(t, n, r, i) {
                if (!t || !n) throw new Error("Please provide file name and url");
                var o = new e.File(t, null, i);
                if (r) for (var s in r) o.attributes.metaData[s] || (o.attributes.metaData[s] = r[s]);
                return o.attributes.url = n, o.attributes.metaData.__source = "external", o;
            }, e.File.createWithoutData = function(t) {
                var n = new e.File();
                return n.id = t, n;
            }, r.extend(e.File.prototype, {
                className: "_File",
                _toFullJSON: function(t) {
                    var n = this, i = arguments.length <= 1 || void 0 === arguments[1] || arguments[1], o = r.clone(this.attributes);
                    return e._objectEach(o, function(n, r) {
                        o[r] = e._encode(n, t, void 0, i);
                    }), e._objectEach(this._operations, function(e, t) {
                        o[t] = e;
                    }), r.has(this, "id") && (o.objectId = this.id), r([ "createdAt", "updatedAt" ]).each(function(e) {
                        if (r.has(n, e)) {
                            var t = n[e];
                            o[e] = r.isDate(t) ? t.toJSON() : t;
                        }
                    }), i && (o.__type = "File"), o;
                },
                toFullJSON: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
                    return this._toFullJSON(e);
                },
                toJSON: function(e, t) {
                    var n = arguments.length <= 2 || void 0 === arguments[2] ? [ this ] : arguments[2];
                    return this._toFullJSON(n, !1);
                },
                getACL: function() {
                    return this._acl;
                },
                setACL: function(t) {
                    return t instanceof e.ACL ? void (this._acl = t) : new a(a.OTHER_CAUSE, "ACL must be a AV.ACL.");
                },
                name: function() {
                    return this.get("name");
                },
                url: function() {
                    return this.get("url");
                },
                get: function(e) {
                    switch (e) {
                      case "objectId":
                        return this.id;

                      case "url":
                      case "name":
                      case "mime_type":
                      case "metaData":
                      case "createdAt":
                      case "updatedAt":
                        return this.attributes[e];

                      default:
                        return this.attributes.metaData[e];
                    }
                },
                set: function() {
                    for (var e = this, t = function(t, n) {
                        switch (t) {
                          case "name":
                          case "url":
                          case "mime_type":
                          case "base64":
                          case "metaData":
                            e.attributes[t] = n;
                            break;

                          default:
                            e.attributes.metaData[t] = n;
                        }
                    }, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    switch (r.length) {
                      case 1:
                        for (var o in r[0]) t(o, r[0][o]);
                        break;

                      case 2:
                        t(r[0], r[1]);
                    }
                },
                metaData: function(e, t) {
                    return e && t ? (this.attributes.metaData[e] = t, this) : e && !t ? this.attributes.metaData[e] : this.attributes.metaData;
                },
                thumbnailURL: function(e, t, n, r, i) {
                    var o = this.attributes.url;
                    if (!o) throw new Error("Invalid url.");
                    if (!e || !t || e <= 0 || t <= 0) throw new Error("Invalid width or height value.");
                    if (n = n || 100, r = !r || r, n <= 0 || n > 100) throw new Error("Invalid quality value.");
                    return i = i || "png", o + "?imageView/" + (r ? 2 : 1) + "/w/" + e + "/h/" + t + "/q/" + n + "/format/" + i;
                },
                size: function() {
                    return this.metaData().size;
                },
                ownerId: function() {
                    return this.metaData().owner;
                },
                destroy: function(e) {
                    return this.id ? u("files", null, this.id, "DELETE", null, e) : c.reject(new Error("The file id is not eixsts."));
                },
                _fileToken: function(e) {
                    var n = arguments.length <= 1 || void 0 === arguments[1] ? "fileTokens" : arguments[1], r = this.attributes.name, i = h(r);
                    !i && this._extName && (r += this._extName, i = this._extName);
                    var o = t() + t() + t() + t() + t() + i, s = {
                        key: o,
                        name: r,
                        ACL: this._acl,
                        mime_type: e,
                        metaData: this.attributes.metaData
                    };
                    return this._qiniu_key = o, u(n, null, null, "POST", s);
                },
                save: function(e) {
                    var t = this;
                    if (this.id) throw new Error("File already saved. If you want to manipulate a file, use AV.Query to get it.");
                    if (!this._previousSave) if (this._source) this._previousSave = this._source.then(function(n) {
                        var r = n.data, a = n.type;
                        return t._fileToken(a).then(function(n) {
                            n.mime_type && t.set("mime_type", n.mime_type), t._token = n.token;
                            var a = void 0;
                            switch (n.provider) {
                              case "s3":
                                a = s(n, r, t, e);
                                break;

                              case "qcloud":
                                a = i(n, r, t, e);
                                break;

                              case "qiniu":
                              default:
                                a = o(n, r, t, e);
                            }
                            return a.then(l(function() {
                                return t._callback(!0);
                            }), function(e) {
                                throw t._callback(!1), e;
                            });
                        });
                    }); else if (this.attributes.url && "external" === this.attributes.metaData.__source) {
                        var n = {
                            name: this.attributes.name,
                            ACL: this._acl,
                            metaData: this.attributes.metaData,
                            mime_type: this.mimeType,
                            url: this.attributes.url
                        };
                        this._previousSave = u("files", this.attributes.name, null, "post", n).then(function(e) {
                            return t.attributes.name = e.name, t.attributes.url = e.url, t.id = e.objectId, 
                            e.size && (t.attributes.metaData.size = e.size), t;
                        });
                    }
                    return this._previousSave;
                },
                _callback: function(e) {
                    u("fileCallback", null, null, "post", {
                        token: this._token,
                        result: e
                    }).catch(f), delete this._token;
                },
                fetch: function(e) {
                    return u("files", null, this.id, "GET", null).then(this._finishFetch.bind(this));
                },
                _finishFetch: function(t) {
                    var n = e.Object.prototype.parse(t);
                    return n.attributes = {
                        name: n.name,
                        url: n.url,
                        mime_type: n.mime_type,
                        bucket: n.bucket
                    }, n.attributes.metaData = n.metaData || {}, n.id = n.objectId, delete n.objectId, 
                    delete n.metaData, delete n.url, delete n.name, delete n.mime_type, delete n.bucket, 
                    r.extend(this, n), this;
                }
            });
        };
    }, function(e, t, n) {
        var r = n(0);
        e.exports = function(e) {
            e.GeoPoint = function(t, n) {
                r.isArray(t) ? (e.GeoPoint._validate(t[0], t[1]), this.latitude = t[0], this.longitude = t[1]) : r.isObject(t) ? (e.GeoPoint._validate(t.latitude, t.longitude), 
                this.latitude = t.latitude, this.longitude = t.longitude) : r.isNumber(t) && r.isNumber(n) ? (e.GeoPoint._validate(t, n), 
                this.latitude = t, this.longitude = n) : (this.latitude = 0, this.longitude = 0);
                var i = this;
                this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, 
                this._longitude = this.longitude, this.__defineGetter__("latitude", function() {
                    return i._latitude;
                }), this.__defineGetter__("longitude", function() {
                    return i._longitude;
                }), this.__defineSetter__("latitude", function(t) {
                    e.GeoPoint._validate(t, i.longitude), i._latitude = t;
                }), this.__defineSetter__("longitude", function(t) {
                    e.GeoPoint._validate(i.latitude, t), i._longitude = t;
                }));
            }, e.GeoPoint._validate = function(e, t) {
                if (e < -90) throw new Error("AV.GeoPoint latitude " + e + " < -90.0.");
                if (e > 90) throw new Error("AV.GeoPoint latitude " + e + " > 90.0.");
                if (t < -180) throw new Error("AV.GeoPoint longitude " + t + " < -180.0.");
                if (t > 180) throw new Error("AV.GeoPoint longitude " + t + " > 180.0.");
            }, e.GeoPoint.current = function() {
                return new e.Promise(function(t, n) {
                    navigator.geolocation.getCurrentPosition(function(n) {
                        t(new e.GeoPoint({
                            latitude: n.coords.latitude,
                            longitude: n.coords.longitude
                        }));
                    }, n);
                });
            }, r.extend(e.GeoPoint.prototype, {
                toJSON: function() {
                    return e.GeoPoint._validate(this.latitude, this.longitude), {
                        __type: "GeoPoint",
                        latitude: this.latitude,
                        longitude: this.longitude
                    };
                },
                radiansTo: function(e) {
                    var t = Math.PI / 180, n = this.latitude * t, r = this.longitude * t, i = e.latitude * t, o = n - i, s = r - e.longitude * t, a = Math.sin(o / 2), u = Math.sin(s / 2), c = a * a + Math.cos(n) * Math.cos(i) * u * u;
                    return c = Math.min(1, c), 2 * Math.asin(Math.sqrt(c));
                },
                kilometersTo: function(e) {
                    return 6371 * this.radiansTo(e);
                },
                milesTo: function(e) {
                    return 3958.8 * this.radiansTo(e);
                }
            });
        };
    }, function(t, n, r) {
        var i = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return void 0 === t ? "undefined" : e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : void 0 === t ? "undefined" : e(t);
        }, o = r(6), s = r(2), a = function(e, t, n, r) {
            o.applicationId && e !== o.applicationId && t !== o.applicationKey && n !== o.masterKey && console.warn("LeanCloud SDK is already initialized, please do not reinitialize it."), 
            o.applicationId = e, o.applicationKey = t, o.masterKey = n, o._useMasterKey = !1;
        }, u = function() {
            console.warn("MasterKey is not supposed to be used in browser.");
        };
        o.init = function() {
            switch (arguments.length) {
              case 1:
                var e = arguments.length <= 0 ? void 0 : arguments[0];
                if ("object" !== (void 0 === e ? "undefined" : i(e))) throw new Error("AV.init(): Parameter is not correct.");
                e.masterKey && u(), a(e.appId, e.appKey, e.masterKey, e.hookKey), s.setServerUrlByRegion(e.region), 
                o._config.disableCurrentUser = e.disableCurrentUser;
                break;

              case 2:
              case 3:
                console.warn("Please use AV.init() to replace AV.initialize(), AV.init() need an Object param, like { appId: 'YOUR_APP_ID', appKey: 'YOUR_APP_KEY' } . Docs: https://leancloud.cn/docs/sdk_setup-js.html"), 
                3 === arguments.length && u(), a.apply(void 0, arguments), s.setServerUrlByRegion("cn");
            }
        }, o.initialize = o.init;
    }, function(e, t, n) {
        var r = n(0), i = n(3), o = n(2).request;
        e.exports = function(e) {
            e.Insight = e.Insight || {}, r.extend(e.Insight, {
                startJob: function(t, n) {
                    if (!t || !t.sql) throw new Error("Please provide the sql to run the job.");
                    var r = {
                        jobConfig: t,
                        appId: e.applicationId
                    };
                    return o("bigquery", "jobs", null, "POST", e._encode(r, null, !0), n).then(function(t) {
                        return e._decode(t).id;
                    });
                },
                on: function(e, t) {}
            }), e.Insight.JobQuery = function(e, t) {
                if (!e) throw new Error("Please provide the job id.");
                this.id = e, this.className = t, this._skip = 0, this._limit = 100;
            }, r.extend(e.Insight.JobQuery.prototype, {
                skip: function(e) {
                    return this._skip = e, this;
                },
                limit: function(e) {
                    return this._limit = e, this;
                },
                find: function(t) {
                    var n = {
                        skip: this._skip,
                        limit: this._limit
                    };
                    return o("bigquery", "jobs", this.id, "GET", n, t).then(function(t) {
                        return t.error ? e.Promise.reject(new i(t.code, t.error)) : e.Promise.resolve(t);
                    });
                }
            });
        };
    }, function(e, t, n) {
        var r = n(0), i = n(3), o = n(2).request, s = n(4), a = [ "objectId", "createdAt", "updatedAt" ], u = function(e) {
            if (-1 !== a.indexOf(e)) throw new Error("key[" + e + "] is reserved");
        };
        e.exports = function(e) {
            e.Object = function(t, n) {
                if (r.isString(t)) return e.Object._create.apply(this, arguments);
                t = t || {}, n && n.parse && (t = this.parse(t), t = this._mergeMagicFields(t));
                var i = e._getValue(this, "defaults");
                i && (t = r.extend({}, i, t)), n && n.collection && (this.collection = n.collection), 
                this._serverData = {}, this._opSetQueue = [ {} ], this._flags = {}, this.attributes = {}, 
                this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = r.uniqueId("c"), 
                this.changed = {}, this._silent = {}, this._pending = {}, this.set(t, {
                    silent: !0
                }), this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, 
                this._previousAttributes = r.clone(this.attributes), this.initialize.apply(this, arguments);
            }, e.Object.saveAll = function(t, n) {
                return e.Object._deepSaveAsync(t, null, n);
            }, e.Object.fetchAll = function(t, n) {
                return e.Promise.resolve().then(function() {
                    return o("batch", null, null, "POST", {
                        requests: r.map(t, function(e) {
                            if (!e.className) throw new Error("object must have className to fetch");
                            if (!e.id) throw new Error("object must have id to fetch");
                            if (e.dirty()) throw new Error("object is modified but not saved");
                            return {
                                method: "GET",
                                path: "/1.1/classes/" + e.className + "/" + e.id
                            };
                        })
                    }, n);
                }).then(function(e) {
                    return r.forEach(t, function(t, n) {
                        if (!e[n].success) {
                            var r = new Error(e[n].error.error);
                            throw r.code = e[n].error.code, r;
                        }
                        t._finishFetch(t.parse(e[n].success));
                    }), t;
                });
            }, r.extend(e.Object.prototype, e.Events, {
                _fetchWhenSave: !1,
                initialize: function() {},
                fetchWhenSave: function(e) {
                    if (console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead."), 
                    !r.isBoolean(e)) throw new Error("Expect boolean value for fetchWhenSave");
                    this._fetchWhenSave = e;
                },
                getObjectId: function() {
                    return this.id;
                },
                getCreatedAt: function() {
                    return this.createdAt || this.get("createdAt");
                },
                getUpdatedAt: function() {
                    return this.updatedAt || this.get("updatedAt");
                },
                toJSON: function(e, t) {
                    var n = arguments.length <= 2 || void 0 === arguments[2] ? [] : arguments[2];
                    return this._toFullJSON(n, !1);
                },
                toFullJSON: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? [] : arguments[0];
                    return this._toFullJSON(e);
                },
                _toFullJSON: function(t) {
                    var n = this, i = arguments.length <= 1 || void 0 === arguments[1] || arguments[1], o = r.clone(this.attributes);
                    if (r.isArray(t)) var s = t.concat(this);
                    return e._objectEach(o, function(t, n) {
                        o[n] = e._encode(t, s, void 0, i);
                    }), e._objectEach(this._operations, function(e, t) {
                        o[t] = e;
                    }), r.has(this, "id") && (o.objectId = this.id), r([ "createdAt", "updatedAt" ]).each(function(e) {
                        if (r.has(n, e)) {
                            var t = n[e];
                            o[e] = r.isDate(t) ? t.toJSON() : t;
                        }
                    }), i && (o.__type = "Object", r.isArray(t) && t.length && (o.__type = "Pointer"), 
                    o.className = this.className), o;
                },
                _refreshCache: function() {
                    var t = this;
                    t._refreshingCache || (t._refreshingCache = !0, e._objectEach(this.attributes, function(n, i) {
                        n instanceof e.Object ? n._refreshCache() : r.isObject(n) && t._resetCacheForKey(i) && t.set(i, new e.Op.Set(n), {
                            silent: !0
                        });
                    }), delete t._refreshingCache);
                },
                dirty: function(e) {
                    this._refreshCache();
                    var t = r.last(this._opSetQueue);
                    return e ? !!t[e] : !this.id || r.keys(t).length > 0;
                },
                _toPointer: function() {
                    return {
                        __type: "Pointer",
                        className: this.className,
                        objectId: this.id
                    };
                },
                get: function(e) {
                    switch (e) {
                      case "objectId":
                        return this.id;

                      case "createdAt":
                      case "updatedAt":
                        return this[e];

                      default:
                        return this.attributes[e];
                    }
                },
                relation: function(t) {
                    var n = this.get(t);
                    if (n) {
                        if (!(n instanceof e.Relation)) throw new Error("Called relation() on non-relation field " + t);
                        return n._ensureParentAndKey(this, t), n;
                    }
                    return new e.Relation(this, t);
                },
                escape: function(e) {
                    var t = this._escapedAttributes[e];
                    if (t) return t;
                    var n, i = this.attributes[e];
                    return n = s.isNullOrUndefined(i) ? "" : r.escape(i.toString()), this._escapedAttributes[e] = n, 
                    n;
                },
                has: function(e) {
                    return !s.isNullOrUndefined(this.attributes[e]);
                },
                _mergeMagicFields: function(t) {
                    var n = this, i = [ "objectId", "createdAt", "updatedAt" ];
                    return e._arrayEach(i, function(i) {
                        t[i] && ("objectId" === i ? n.id = t[i] : "createdAt" !== i && "updatedAt" !== i || r.isDate(t[i]) ? n[i] = t[i] : n[i] = e._parseDate(t[i]), 
                        delete t[i]);
                    }), t;
                },
                _startSave: function() {
                    this._opSetQueue.push({});
                },
                _cancelSave: function() {
                    var t = r.first(this._opSetQueue);
                    this._opSetQueue = r.rest(this._opSetQueue);
                    var n = r.first(this._opSetQueue);
                    e._objectEach(t, function(e, r) {
                        var i = t[r], o = n[r];
                        i && o ? n[r] = o._mergeWithPrevious(i) : i && (n[r] = i);
                    }), this._saving = this._saving - 1;
                },
                _finishSave: function(t) {
                    var n = {};
                    e._traverse(this.attributes, function(t) {
                        t instanceof e.Object && t.id && t._hasData && (n[t.id] = t);
                    });
                    var i = r.first(this._opSetQueue);
                    this._opSetQueue = r.rest(this._opSetQueue), this._applyOpSet(i, this._serverData), 
                    this._mergeMagicFields(t);
                    var o = this;
                    e._objectEach(t, function(t, r) {
                        o._serverData[r] = e._decode(t, r);
                        var i = e._traverse(o._serverData[r], function(t) {
                            if (t instanceof e.Object && n[t.id]) return n[t.id];
                        });
                        i && (o._serverData[r] = i);
                    }), this._rebuildAllEstimatedData(), this._saving = this._saving - 1;
                },
                _finishFetch: function(t, n) {
                    this._opSetQueue = [ {} ], this._mergeMagicFields(t);
                    var r = this;
                    e._objectEach(t, function(t, n) {
                        r._serverData[n] = e._decode(t, n);
                    }), this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [ {} ], 
                    this._hasData = n;
                },
                _applyOpSet: function(t, n) {
                    var r = this;
                    e._objectEach(t, function(t, i) {
                        n[i] = t._estimate(n[i], r, i), n[i] === e.Op._UNSET && delete n[i];
                    });
                },
                _resetCacheForKey: function(t) {
                    var n = this.attributes[t];
                    if (r.isObject(n) && !(n instanceof e.Object) && !(n instanceof e.File)) {
                        n = n.toJSON ? n.toJSON() : n;
                        var i = JSON.stringify(n);
                        if (this._hashedJSON[t] !== i) {
                            var o = !!this._hashedJSON[t];
                            return this._hashedJSON[t] = i, o;
                        }
                    }
                    return !1;
                },
                _rebuildEstimatedDataForKey: function(t) {
                    var n = this;
                    delete this.attributes[t], this._serverData[t] && (this.attributes[t] = this._serverData[t]), 
                    e._arrayEach(this._opSetQueue, function(r) {
                        var i = r[t];
                        i && (n.attributes[t] = i._estimate(n.attributes[t], n, t), n.attributes[t] === e.Op._UNSET ? delete n.attributes[t] : n._resetCacheForKey(t));
                    });
                },
                _rebuildAllEstimatedData: function() {
                    var t = this, n = r.clone(this.attributes);
                    this.attributes = r.clone(this._serverData), e._arrayEach(this._opSetQueue, function(n) {
                        t._applyOpSet(n, t.attributes), e._objectEach(n, function(e, n) {
                            t._resetCacheForKey(n);
                        });
                    }), e._objectEach(n, function(e, n) {
                        t.attributes[n] !== e && t.trigger("change:" + n, t, t.attributes[n], {});
                    }), e._objectEach(this.attributes, function(e, i) {
                        r.has(n, i) || t.trigger("change:" + i, t, e, {});
                    });
                },
                set: function(t, n, i) {
                    var o;
                    if (r.isObject(t) || s.isNullOrUndefined(t) ? (o = r.mapObject(t, function(t, n) {
                        return u(n), e._decode(t, n);
                    }), i = n) : (o = {}, u(t), o[t] = e._decode(n, t)), i = i || {}, !o) return this;
                    o instanceof e.Object && (o = o.attributes), i.unset && e._objectEach(o, function(t, n) {
                        o[n] = new e.Op.Unset();
                    });
                    var a = r.clone(o), c = this;
                    e._objectEach(a, function(t, n) {
                        t instanceof e.Op && (a[n] = t._estimate(c.attributes[n], c, n), a[n] === e.Op._UNSET && delete a[n]);
                    }), this._validate(o, i), i.changes = {};
                    var l = this._escapedAttributes;
                    return this._previousAttributes, e._arrayEach(r.keys(o), function(t) {
                        var n = o[t];
                        n instanceof e.Relation && (n.parent = c), n instanceof e.Op || (n = new e.Op.Set(n));
                        var s = !0;
                        n instanceof e.Op.Set && r.isEqual(c.attributes[t], n.value) && (s = !1), s && (delete l[t], 
                        i.silent ? c._silent[t] = !0 : i.changes[t] = !0);
                        var a = r.last(c._opSetQueue);
                        a[t] = n._mergeWithPrevious(a[t]), c._rebuildEstimatedDataForKey(t), s ? (c.changed[t] = c.attributes[t], 
                        i.silent || (c._pending[t] = !0)) : (delete c.changed[t], delete c._pending[t]);
                    }), i.silent || this.change(i), this;
                },
                unset: function(e, t) {
                    return t = t || {}, t.unset = !0, this.set(e, null, t);
                },
                increment: function(t, n) {
                    return (r.isUndefined(n) || r.isNull(n)) && (n = 1), this.set(t, new e.Op.Increment(n));
                },
                add: function(t, n) {
                    return this.set(t, new e.Op.Add(s.ensureArray(n)));
                },
                addUnique: function(t, n) {
                    return this.set(t, new e.Op.AddUnique(s.ensureArray(n)));
                },
                remove: function(t, n) {
                    return this.set(t, new e.Op.Remove(s.ensureArray(n)));
                },
                op: function(e) {
                    return r.last(this._opSetQueue)[e];
                },
                clear: function(e) {
                    (e = e || {}).unset = !0;
                    var t = r.extend(this.attributes, this._operations);
                    return this.set(t, e);
                },
                _getSaveJSON: function() {
                    var t = r.clone(r.first(this._opSetQueue));
                    return e._objectEach(t, function(e, n) {
                        t[n] = e.toJSON();
                    }), t;
                },
                _canBeSerialized: function() {
                    return e.Object._canBeSerializedAsValue(this.attributes);
                },
                fetch: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], t = arguments[1];
                    r.isArray(e.keys) && (e.keys = e.keys.join(",")), r.isArray(e.include) && (e.include = e.include.join(","));
                    var n = this;
                    return o("classes", this.className, this.id, "GET", e, t).then(function(e) {
                        return n._finishFetch(n.parse(e), !0), n;
                    });
                },
                save: function(t, n, i) {
                    var a, u, c;
                    r.isObject(t) || s.isNullOrUndefined(t) ? (a = t, c = n) : (a = {}, a[t] = n, c = i), 
                    (c = r.clone(c) || {}).wait && (u = r.clone(this.attributes));
                    var l = r.clone(c) || {};
                    l.wait && (l.silent = !0), a && this.set(a, l);
                    var f = this;
                    f._refreshCache();
                    var h = [], d = [];
                    return e.Object._findUnsavedChildren(f.attributes, h, d), h.length + d.length > 0 ? e.Object._deepSaveAsync(this.attributes, f, c).then(function() {
                        return f.save(null, c);
                    }) : (this._startSave(), this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || e.Promise.resolve(), 
                    this._allPreviousSaves = this._allPreviousSaves.catch(function(e) {}).then(function() {
                        var e = f.id ? "PUT" : "POST", t = f._getSaveJSON();
                        if (f._fetchWhenSave && (t._fetchWhenSave = !0), c.fetchWhenSave && (t._fetchWhenSave = !0), 
                        c.query) {
                            var n;
                            if ("function" == typeof c.query.toJSON && (n = c.query.toJSON()) && (t._where = n.where), 
                            !t._where) throw new Error("options.query is not an AV.Query");
                        }
                        r.extend(t, f._flags);
                        var i = "classes", s = f.className;
                        "_User" !== f.className || f.id || (i = "users", s = null);
                        var h = (c._makeRequest || o)(i, s, f.id, e, t, c);
                        return h = h.then(function(e) {
                            var t = f.parse(e);
                            return c.wait && (t = r.extend(a || {}, t)), f._finishSave(t), c.wait && f.set(u, l), 
                            f;
                        }, function(e) {
                            throw f._cancelSave(), e;
                        });
                    }), this._allPreviousSaves);
                },
                destroy: function(e) {
                    e = e || {};
                    var t = this, n = function() {
                        t.trigger("destroy", t, t.collection, e);
                    };
                    return this.id ? (e.wait || n(), o("classes", this.className, this.id, "DELETE", this._flags, e).then(function() {
                        return e.wait && n(), t;
                    })) : n();
                },
                parse: function(t) {
                    var n = r.clone(t);
                    return r([ "createdAt", "updatedAt" ]).each(function(t) {
                        n[t] && (n[t] = e._parseDate(n[t]));
                    }), n.updatedAt || (n.updatedAt = n.createdAt), n;
                },
                clone: function() {
                    return new this.constructor(this.attributes);
                },
                isNew: function() {
                    return !this.id;
                },
                change: function(t) {
                    t = t || {};
                    var n = this._changing;
                    this._changing = !0;
                    var i = this;
                    e._objectEach(this._silent, function(e) {
                        i._pending[e] = !0;
                    });
                    var o = r.extend({}, t.changes, this._silent);
                    if (this._silent = {}, e._objectEach(o, function(e, n) {
                        i.trigger("change:" + n, i, i.get(n), t);
                    }), n) return this;
                    for (;!r.isEmpty(this._pending); ) this._pending = {}, this.trigger("change", this, t), 
                    e._objectEach(this.changed, function(e, t) {
                        i._pending[t] || i._silent[t] || delete i.changed[t];
                    }), i._previousAttributes = r.clone(this.attributes);
                    return this._changing = !1, this;
                },
                hasChanged: function(e) {
                    return arguments.length ? this.changed && r.has(this.changed, e) : !r.isEmpty(this.changed);
                },
                changedAttributes: function(t) {
                    if (!t) return !!this.hasChanged() && r.clone(this.changed);
                    var n = {}, i = this._previousAttributes;
                    return e._objectEach(t, function(e, t) {
                        r.isEqual(i[t], e) || (n[t] = e);
                    }), n;
                },
                previous: function(e) {
                    return arguments.length && this._previousAttributes ? this._previousAttributes[e] : null;
                },
                previousAttributes: function() {
                    return r.clone(this._previousAttributes);
                },
                isValid: function() {
                    try {
                        this.validate(this.attributes);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        return !1;
                    }
                    return !0;
                },
                validate: function(t) {
                    if (r.has(t, "ACL") && !(t.ACL instanceof e.ACL)) throw new i(i.OTHER_CAUSE, "ACL must be a AV.ACL.");
                },
                _validate: function(e, t) {
                    !t.silent && this.validate && (e = r.extend({}, this.attributes, e), this.validate(e));
                },
                getACL: function() {
                    return this.get("ACL");
                },
                setACL: function(e, t) {
                    return this.set("ACL", e, t);
                },
                disableBeforeHook: function() {
                    this.ignoreHook("beforeSave"), this.ignoreHook("beforeUpdate"), this.ignoreHook("beforeDelete");
                },
                disableAfterHook: function() {
                    this.ignoreHook("afterSave"), this.ignoreHook("afterUpdate"), this.ignoreHook("afterDelete");
                },
                ignoreHook: function(t) {
                    r.contains([ "beforeSave", "afterSave", "beforeUpdate", "afterUpdate", "beforeDelete", "afterDelete" ], t) || console.trace("Unsupported hookName: " + t), 
                    e.hookKey || console.trace("ignoreHook required hookKey"), this._flags.__ignore_hooks || (this._flags.__ignore_hooks = []), 
                    this._flags.__ignore_hooks.push(t);
                }
            }), e.Object.createWithoutData = function(t, n, r) {
                var i = new e.Object(t);
                return i.id = n, i._hasData = r, i;
            }, e.Object.destroyAll = function(t) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                if (!t || 0 === t.length) return e.Promise.resolve();
                var i = r.groupBy(t, function(e) {
                    return JSON.stringify({
                        className: e.className,
                        flags: e._flags
                    });
                }), s = {
                    requests: r.map(i, function(e) {
                        var t = r.map(e, "id").join(",");
                        return {
                            method: "DELETE",
                            path: "/1.1/classes/" + e[0].className + "/" + t,
                            body: e[0]._flags
                        };
                    })
                };
                return o("batch", null, null, "POST", s, n);
            }, e.Object._getSubclass = function(t) {
                if (!r.isString(t)) throw new Error("AV.Object._getSubclass requires a string argument.");
                var n = e.Object._classMap[t];
                return n || (n = e.Object.extend(t), e.Object._classMap[t] = n), n;
            }, e.Object._create = function(t, n, r) {
                return new (e.Object._getSubclass(t))(n, r);
            }, e.Object._classMap = {}, e.Object._extend = e._extend, e.Object.new = function(t, n) {
                return new e.Object(t, n);
            }, e.Object.extend = function(t, n, i) {
                if (!r.isString(t)) {
                    if (t && r.has(t, "className")) return e.Object.extend(t.className, t, n);
                    throw new Error("AV.Object.extend's first argument should be the className.");
                }
                "User" === t && (t = "_User");
                var o = null;
                if (r.has(e.Object._classMap, t)) {
                    var s = e.Object._classMap[t];
                    if (!n && !i) return s;
                    o = s._extend(n, i);
                } else n = n || {}, n._className = t, o = this._extend(n, i);
                return o.extend = function(n) {
                    if (r.isString(n) || n && r.has(n, "className")) return e.Object.extend.apply(o, arguments);
                    var i = [ t ].concat(r.toArray(arguments));
                    return e.Object.extend.apply(o, i);
                }, o.new = function(e, t) {
                    return new o(e, t);
                }, e.Object._classMap[t] = o, o;
            }, Object.defineProperty(e.Object.prototype, "className", {
                get: function() {
                    var e = this._className || this.constructor._LCClassName || this.constructor.name;
                    return "User" === e ? "_User" : e;
                }
            }), e.Object.register = function(t, n) {
                if (!(t.prototype instanceof e.Object)) throw new Error("registered class is not a subclass of AV.Object");
                var r = n || t.name;
                if (!r.length) throw new Error("registered class must be named");
                n && (t._LCClassName = n), e.Object._classMap[r] = t;
            }, e.Object._findUnsavedChildren = function(t, n, r) {
                e._traverse(t, function(t) {
                    return t instanceof e.Object ? (t._refreshCache(), void (t.dirty() && n.push(t))) : t instanceof e.File ? void (t.url() || t.id || r.push(t)) : void 0;
                });
            }, e.Object._canBeSerializedAsValue = function(t) {
                var n = !0;
                return t instanceof e.Object || t instanceof e.File ? n = !!t.id : r.isArray(t) ? e._arrayEach(t, function(t) {
                    e.Object._canBeSerializedAsValue(t) || (n = !1);
                }) : r.isObject(t) && e._objectEach(t, function(t) {
                    e.Object._canBeSerializedAsValue(t) || (n = !1);
                }), n;
            }, e.Object._deepSaveAsync = function(t, n, s) {
                var a = [], u = [];
                e.Object._findUnsavedChildren(t, a, u), n && (a = r.filter(a, function(e) {
                    return e != n;
                }));
                var c = e.Promise.resolve();
                r.each(u, function(e) {
                    c = c.then(function() {
                        return e.save();
                    });
                });
                var l = r.uniq(a), f = r.uniq(l);
                return c.then(function() {
                    return e.Promise._continueWhile(function() {
                        return f.length > 0;
                    }, function() {
                        var t = [], n = [];
                        if (e._arrayEach(f, function(e) {
                            return t.length > 20 ? void n.push(e) : void (e._canBeSerialized() ? t.push(e) : n.push(e));
                        }), f = n, 0 === t.length) return e.Promise.reject(new i(i.OTHER_CAUSE, "Tried to save a batch with a cycle."));
                        var a = e.Promise.resolve(r.map(t, function(t) {
                            return t._allPreviousSaves || e.Promise.resolve();
                        })).then(function() {
                            return o("batch", null, null, "POST", {
                                requests: r.map(t, function(e) {
                                    var t = e._getSaveJSON();
                                    r.extend(t, e._flags);
                                    var n = "POST", i = "/1.1/classes/" + e.className;
                                    return e.id && (i = i + "/" + e.id, n = "PUT"), e._startSave(), {
                                        method: n,
                                        path: i,
                                        body: t
                                    };
                                })
                            }, s).then(function(n) {
                                var r;
                                if (e._arrayEach(t, function(e, t) {
                                    n[t].success ? e._finishSave(e.parse(n[t].success)) : (r = r || n[t].error, e._cancelSave());
                                }), r) return e.Promise.reject(new i(r.code, r.error));
                            });
                        });
                        return e._arrayEach(t, function(e) {
                            e._allPreviousSaves = a;
                        }), a;
                    });
                }).then(function() {
                    return t;
                });
            };
        };
    }, function(e, t, n) {
        var r = n(0);
        e.exports = function(e) {
            e.Op = function() {
                this._initialize.apply(this, arguments);
            }, r.extend(e.Op.prototype, {
                _initialize: function() {}
            }), r.extend(e.Op, {
                _extend: e._extend,
                _opDecoderMap: {},
                _registerDecoder: function(t, n) {
                    e.Op._opDecoderMap[t] = n;
                },
                _decode: function(t) {
                    var n = e.Op._opDecoderMap[t.__op];
                    return n ? n(t) : void 0;
                }
            }), e.Op._registerDecoder("Batch", function(t) {
                var n = null;
                return e._arrayEach(t.ops, function(t) {
                    t = e.Op._decode(t), n = t._mergeWithPrevious(n);
                }), n;
            }), e.Op.Set = e.Op._extend({
                _initialize: function(e) {
                    this._value = e;
                },
                value: function() {
                    return this._value;
                },
                toJSON: function() {
                    return e._encode(this.value());
                },
                _mergeWithPrevious: function(e) {
                    return this;
                },
                _estimate: function(e) {
                    return this.value();
                }
            }), e.Op._UNSET = {}, e.Op.Unset = e.Op._extend({
                toJSON: function() {
                    return {
                        __op: "Delete"
                    };
                },
                _mergeWithPrevious: function(e) {
                    return this;
                },
                _estimate: function(t) {
                    return e.Op._UNSET;
                }
            }), e.Op._registerDecoder("Delete", function(t) {
                return new e.Op.Unset();
            }), e.Op.Increment = e.Op._extend({
                _initialize: function(e) {
                    this._amount = e;
                },
                amount: function() {
                    return this._amount;
                },
                toJSON: function() {
                    return {
                        __op: "Increment",
                        amount: this._amount
                    };
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(this.amount());
                        if (t instanceof e.Op.Set) return new e.Op.Set(t.value() + this.amount());
                        if (t instanceof e.Op.Increment) return new e.Op.Increment(this.amount() + t.amount());
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(e) {
                    return e ? e + this.amount() : this.amount();
                }
            }), e.Op._registerDecoder("Increment", function(t) {
                return new e.Op.Increment(t.amount);
            }), e.Op.Add = e.Op._extend({
                _initialize: function(e) {
                    this._objects = e;
                },
                objects: function() {
                    return this._objects;
                },
                toJSON: function() {
                    return {
                        __op: "Add",
                        objects: e._encode(this.objects())
                    };
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects());
                        if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
                        if (t instanceof e.Op.Add) return new e.Op.Add(t.objects().concat(this.objects()));
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(e) {
                    return e ? e.concat(this.objects()) : r.clone(this.objects());
                }
            }), e.Op._registerDecoder("Add", function(t) {
                return new e.Op.Add(e._decode(t.objects));
            }), e.Op.AddUnique = e.Op._extend({
                _initialize: function(e) {
                    this._objects = r.uniq(e);
                },
                objects: function() {
                    return this._objects;
                },
                toJSON: function() {
                    return {
                        __op: "AddUnique",
                        objects: e._encode(this.objects())
                    };
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects());
                        if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
                        if (t instanceof e.Op.AddUnique) return new e.Op.AddUnique(this._estimate(t.objects()));
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(t) {
                    if (t) {
                        var n = r.clone(t);
                        return e._arrayEach(this.objects(), function(t) {
                            if (t instanceof e.Object && t.id) {
                                var i = r.find(n, function(n) {
                                    return n instanceof e.Object && n.id === t.id;
                                });
                                if (i) {
                                    var o = r.indexOf(n, i);
                                    n[o] = t;
                                } else n.push(t);
                            } else r.contains(n, t) || n.push(t);
                        }), n;
                    }
                    return r.clone(this.objects());
                }
            }), e.Op._registerDecoder("AddUnique", function(t) {
                return new e.Op.AddUnique(e._decode(t.objects));
            }), e.Op.Remove = e.Op._extend({
                _initialize: function(e) {
                    this._objects = r.uniq(e);
                },
                objects: function() {
                    return this._objects;
                },
                toJSON: function() {
                    return {
                        __op: "Remove",
                        objects: e._encode(this.objects())
                    };
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return t;
                        if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
                        if (t instanceof e.Op.Remove) return new e.Op.Remove(r.union(t.objects(), this.objects()));
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(t) {
                    if (t) {
                        var n = r.difference(t, this.objects());
                        return e._arrayEach(this.objects(), function(t) {
                            t instanceof e.Object && t.id && (n = r.reject(n, function(n) {
                                return n instanceof e.Object && n.id === t.id;
                            }));
                        }), n;
                    }
                    return [];
                }
            }), e.Op._registerDecoder("Remove", function(t) {
                return new e.Op.Remove(e._decode(t.objects));
            }), e.Op.Relation = e.Op._extend({
                _initialize: function(t, n) {
                    this._targetClassName = null;
                    var i = this, o = function(t) {
                        if (t instanceof e.Object) {
                            if (!t.id) throw new Error("You can't add an unsaved AV.Object to a relation.");
                            if (i._targetClassName || (i._targetClassName = t.className), i._targetClassName !== t.className) throw new Error("Tried to create a AV.Relation with 2 different types: " + i._targetClassName + " and " + t.className + ".");
                            return t.id;
                        }
                        return t;
                    };
                    this.relationsToAdd = r.uniq(r.map(t, o)), this.relationsToRemove = r.uniq(r.map(n, o));
                },
                added: function() {
                    var t = this;
                    return r.map(this.relationsToAdd, function(n) {
                        var r = e.Object._create(t._targetClassName);
                        return r.id = n, r;
                    });
                },
                removed: function() {
                    var t = this;
                    return r.map(this.relationsToRemove, function(n) {
                        var r = e.Object._create(t._targetClassName);
                        return r.id = n, r;
                    });
                },
                toJSON: function() {
                    var e = null, t = null, n = this, i = function(e) {
                        return {
                            __type: "Pointer",
                            className: n._targetClassName,
                            objectId: e
                        };
                    }, o = null;
                    return this.relationsToAdd.length > 0 && (o = r.map(this.relationsToAdd, i), e = {
                        __op: "AddRelation",
                        objects: o
                    }), this.relationsToRemove.length > 0 && (o = r.map(this.relationsToRemove, i), 
                    t = {
                        __op: "RemoveRelation",
                        objects: o
                    }), e && t ? {
                        __op: "Batch",
                        ops: [ e, t ]
                    } : e || t || {};
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) throw new Error("You can't modify a relation after deleting it.");
                        if (t instanceof e.Op.Relation) {
                            if (t._targetClassName && t._targetClassName !== this._targetClassName) throw new Error("Related object must be of class " + t._targetClassName + ", but " + this._targetClassName + " was passed in.");
                            var n = r.union(r.difference(t.relationsToAdd, this.relationsToRemove), this.relationsToAdd), i = r.union(r.difference(t.relationsToRemove, this.relationsToAdd), this.relationsToRemove), o = new e.Op.Relation(n, i);
                            return o._targetClassName = this._targetClassName, o;
                        }
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(t, n, r) {
                    if (t) {
                        if (t instanceof e.Relation) {
                            if (this._targetClassName) if (t.targetClassName) {
                                if (t.targetClassName !== this._targetClassName) throw new Error("Related object must be a " + t.targetClassName + ", but a " + this._targetClassName + " was passed in.");
                            } else t.targetClassName = this._targetClassName;
                            return t;
                        }
                        throw new Error("Op is invalid after previous op.");
                    }
                    new e.Relation(n, r).targetClassName = this._targetClassName;
                }
            }), e.Op._registerDecoder("AddRelation", function(t) {
                return new e.Op.Relation(e._decode(t.objects), []);
            }), e.Op._registerDecoder("RemoveRelation", function(t) {
                return new e.Op.Relation([], e._decode(t.objects));
            });
        };
    }, function(e, t, n) {
        var r = n(2).request;
        e.exports = function(e) {
            e.Installation = e.Object.extend("_Installation"), e.Push = e.Push || {}, e.Push.send = function(e, t) {
                if (e.where && (e.where = e.where.toJSON().where), e.where && e.cql) throw new Error("Both where and cql can't be set");
                if (e.push_time && (e.push_time = e.push_time.toJSON()), e.expiration_time && (e.expiration_time = e.expiration_time.toJSON()), 
                e.expiration_time && e.expiration_time_interval) throw new Error("Both expiration_time and expiration_time_interval can't be set");
                return r("push", null, null, "POST", e, t);
            };
        };
    }, function(e, t, n) {
        var r = n(0), i = n(5)("leancloud:query"), o = n(1), s = n(3), a = n(2).request, u = n(4).ensureArray, c = function(e, t) {
            if (void 0 === e) throw new Error(t);
        };
        e.exports = function(e) {
            e.Query = function(t) {
                r.isString(t) && (t = e.Object._getSubclass(t)), this.objectClass = t, this.className = t.prototype.className, 
                this._where = {}, this._include = [], this._select = [], this._limit = -1, this._skip = 0, 
                this._extraOptions = {};
            }, e.Query.or = function() {
                var t = r.toArray(arguments), n = null;
                e._arrayEach(t, function(e) {
                    if (r.isNull(n) && (n = e.className), n !== e.className) throw new Error("All queries must be for the same class");
                });
                var i = new e.Query(n);
                return i._orQuery(t), i;
            }, e.Query.and = function() {
                var t = r.toArray(arguments), n = null;
                e._arrayEach(t, function(e) {
                    if (r.isNull(n) && (n = e.className), n !== e.className) throw new Error("All queries must be for the same class");
                });
                var i = new e.Query(n);
                return i._andQuery(t), i;
            }, e.Query.doCloudQuery = function(t, n, i) {
                var o = {
                    cql: t
                };
                return r.isArray(n) ? o.pvalues = n : i = n, a("cloudQuery", null, null, "GET", o, i).then(function(t) {
                    var n = new e.Query(t.className);
                    return {
                        results: r.map(t.results, function(e) {
                            var r = n._newObject(t);
                            return r._finishFetch && r._finishFetch(n._processResult(e), !0), r;
                        }),
                        count: t.count,
                        className: t.className
                    };
                });
            }, e.Query._extend = e._extend, r.extend(e.Query.prototype, {
                _processResult: function(e) {
                    return e;
                },
                get: function(e, t) {
                    if (!e) throw new s(s.OBJECT_NOT_FOUND, "Object not found.");
                    var n = this, r = n._newObject();
                    r.id = e;
                    var i = n.toJSON(), o = {};
                    return i.keys && (o.keys = i.keys), i.include && (o.include = i.include), r.fetch(o, t);
                },
                toJSON: function() {
                    var t = {
                        where: this._where
                    };
                    return this._include.length > 0 && (t.include = this._include.join(",")), this._select.length > 0 && (t.keys = this._select.join(",")), 
                    this._limit >= 0 && (t.limit = this._limit), this._skip > 0 && (t.skip = this._skip), 
                    void 0 !== this._order && (t.order = this._order), e._objectEach(this._extraOptions, function(e, n) {
                        t[n] = e;
                    }), t;
                },
                _newObject: function(t) {
                    return t && t.className ? new e.Object(t.className) : new this.objectClass();
                },
                _createRequest: function() {
                    var e = arguments.length <= 0 || void 0 === arguments[0] ? this.toJSON() : arguments[0], t = arguments[1];
                    if (JSON.stringify(e).length > 2e3) {
                        var n = {
                            requests: [ {
                                method: "GET",
                                path: "/1.1/classes/" + this.className,
                                params: e
                            } ]
                        };
                        return a("batch", null, null, "POST", n, t).then(function(e) {
                            var t = e[0];
                            if (t.success) return t.success;
                            var n = new Error(t.error.error || "Unknown batch error");
                            throw n.code = t.error.code, n;
                        });
                    }
                    return a("classes", this.className, null, "GET", e, t);
                },
                _parseResponse: function(e) {
                    var t = this;
                    return r.map(e.results, function(n) {
                        var r = t._newObject(e);
                        return r._finishFetch && r._finishFetch(t._processResult(n), !0), r;
                    });
                },
                find: function(e) {
                    return this._createRequest(void 0, e).then(this._parseResponse.bind(this));
                },
                scan: function() {
                    var e = this, t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], n = t.orderedBy, s = t.batchSize, u = arguments[1], c = this.toJSON();
                    i("scan %O", c), c.order && (console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan."), 
                    delete c.order), c.skip && (console.warn("The skip option of the query is ignored for Query#scan."), 
                    delete c.skip), c.limit && (console.warn("The limit option of the query is ignored for Query#scan."), 
                    delete c.limit), n && (c.scan_key = n), s && (c.limit = s);
                    var l = o.resolve([]), f = void 0, h = !1;
                    return {
                        next: function() {
                            return (l = l.then(function(t) {
                                return h ? [] : t.length > 1 ? t : f || 0 === t.length ? a("scan/classes", e.className, null, "GET", f ? r.extend({}, c, {
                                    cursor: f
                                }) : c, u).then(function(t) {
                                    return f = t.cursor, e._parseResponse(t);
                                }).then(function(e) {
                                    return e.length || (h = !0), t.concat(e);
                                }) : (h = !0, t);
                            })).then(function(e) {
                                return e.shift();
                            }).then(function(e) {
                                return {
                                    value: e,
                                    done: h
                                };
                            });
                        }
                    };
                },
                destroyAll: function(t) {
                    return this.find(t).then(function(t) {
                        return e.Object.destroyAll(t);
                    });
                },
                count: function(e) {
                    var t = this.toJSON();
                    return t.limit = 0, t.count = 1, this._createRequest(t, e).then(function(e) {
                        return e.count;
                    });
                },
                first: function(e) {
                    var t = this, n = this.toJSON();
                    return n.limit = 1, this._createRequest(n, e).then(function(e) {
                        return r.map(e.results, function(e) {
                            var n = t._newObject();
                            return n._finishFetch && n._finishFetch(t._processResult(e), !0), n;
                        })[0];
                    });
                },
                skip: function(e) {
                    return c(e, "undefined is not a valid skip value"), this._skip = e, this;
                },
                limit: function(e) {
                    return c(e, "undefined is not a valid limit value"), this._limit = e, this;
                },
                equalTo: function(t, n) {
                    return c(t, "undefined is not a valid key"), c(n, "undefined is not a valid value"), 
                    this._where[t] = e._encode(n), this;
                },
                _addCondition: function(t, n, r) {
                    return c(t, "undefined is not a valid condition key"), c(n, "undefined is not a valid condition"), 
                    c(r, "undefined is not a valid condition value"), this._where[t] || (this._where[t] = {}), 
                    this._where[t][n] = e._encode(r), this;
                },
                sizeEqualTo: function(e, t) {
                    this._addCondition(e, "$size", t);
                },
                notEqualTo: function(e, t) {
                    return this._addCondition(e, "$ne", t), this;
                },
                lessThan: function(e, t) {
                    return this._addCondition(e, "$lt", t), this;
                },
                greaterThan: function(e, t) {
                    return this._addCondition(e, "$gt", t), this;
                },
                lessThanOrEqualTo: function(e, t) {
                    return this._addCondition(e, "$lte", t), this;
                },
                greaterThanOrEqualTo: function(e, t) {
                    return this._addCondition(e, "$gte", t), this;
                },
                containedIn: function(e, t) {
                    return this._addCondition(e, "$in", t), this;
                },
                notContainedIn: function(e, t) {
                    return this._addCondition(e, "$nin", t), this;
                },
                containsAll: function(e, t) {
                    return this._addCondition(e, "$all", t), this;
                },
                exists: function(e) {
                    return this._addCondition(e, "$exists", !0), this;
                },
                doesNotExist: function(e) {
                    return this._addCondition(e, "$exists", !1), this;
                },
                matches: function(e, t, n) {
                    return this._addCondition(e, "$regex", t), n || (n = ""), t.ignoreCase && (n += "i"), 
                    t.multiline && (n += "m"), n && n.length && this._addCondition(e, "$options", n), 
                    this;
                },
                matchesQuery: function(e, t) {
                    var n = t.toJSON();
                    return n.className = t.className, this._addCondition(e, "$inQuery", n), this;
                },
                doesNotMatchQuery: function(e, t) {
                    var n = t.toJSON();
                    return n.className = t.className, this._addCondition(e, "$notInQuery", n), this;
                },
                matchesKeyInQuery: function(e, t, n) {
                    var r = n.toJSON();
                    return r.className = n.className, this._addCondition(e, "$select", {
                        key: t,
                        query: r
                    }), this;
                },
                doesNotMatchKeyInQuery: function(e, t, n) {
                    var r = n.toJSON();
                    return r.className = n.className, this._addCondition(e, "$dontSelect", {
                        key: t,
                        query: r
                    }), this;
                },
                _orQuery: function(e) {
                    var t = r.map(e, function(e) {
                        return e.toJSON().where;
                    });
                    return this._where.$or = t, this;
                },
                _andQuery: function(e) {
                    var t = r.map(e, function(e) {
                        return e.toJSON().where;
                    });
                    return this._where.$and = t, this;
                },
                _quote: function(e) {
                    return "\\Q" + e.replace("\\E", "\\E\\\\E\\Q") + "\\E";
                },
                contains: function(e, t) {
                    return this._addCondition(e, "$regex", this._quote(t)), this;
                },
                startsWith: function(e, t) {
                    return this._addCondition(e, "$regex", "^" + this._quote(t)), this;
                },
                endsWith: function(e, t) {
                    return this._addCondition(e, "$regex", this._quote(t) + "$"), this;
                },
                ascending: function(e) {
                    return c(e, "undefined is not a valid key"), this._order = e, this;
                },
                addAscending: function(e) {
                    return c(e, "undefined is not a valid key"), this._order ? this._order += "," + e : this._order = e, 
                    this;
                },
                descending: function(e) {
                    return c(e, "undefined is not a valid key"), this._order = "-" + e, this;
                },
                addDescending: function(e) {
                    return c(e, "undefined is not a valid key"), this._order ? this._order += ",-" + e : this._order = "-" + e, 
                    this;
                },
                near: function(t, n) {
                    return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), this._addCondition(t, "$nearSphere", n), 
                    this;
                },
                withinRadians: function(e, t, n) {
                    return this.near(e, t), this._addCondition(e, "$maxDistance", n), this;
                },
                withinMiles: function(e, t, n) {
                    return this.withinRadians(e, t, n / 3958.8);
                },
                withinKilometers: function(e, t, n) {
                    return this.withinRadians(e, t, n / 6371);
                },
                withinGeoBox: function(t, n, r) {
                    return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), r instanceof e.GeoPoint || (r = new e.GeoPoint(r)), 
                    this._addCondition(t, "$within", {
                        $box: [ n, r ]
                    }), this;
                },
                include: function(e) {
                    var t = this;
                    return c(e, "undefined is not a valid key"), r(arguments).forEach(function(e) {
                        t._include = t._include.concat(u(e));
                    }), this;
                },
                select: function(e) {
                    var t = this;
                    return c(e, "undefined is not a valid key"), r(arguments).forEach(function(e) {
                        t._select = t._select.concat(u(e));
                    }), this;
                },
                each: function(t) {
                    var n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                    if (this._order || this._skip || this._limit >= 0) {
                        var i = new Error("Cannot iterate on a query with sort, skip, or limit.");
                        return e.Promise.reject(i);
                    }
                    var o = new e.Query(this.objectClass);
                    o._limit = n.batchSize || 100, o._where = r.clone(this._where), o._include = r.clone(this._include), 
                    o.ascending("objectId");
                    var s = !1;
                    return e.Promise._continueWhile(function() {
                        return !s;
                    }, function() {
                        return o.find(n).then(function(n) {
                            var i = e.Promise.resolve();
                            return r.each(n, function(e) {
                                i = i.then(function() {
                                    return t(e);
                                });
                            }), i.then(function() {
                                n.length >= o._limit ? o.greaterThan("objectId", n[n.length - 1].id) : s = !0;
                            });
                        });
                    });
                }
            }), e.FriendShipQuery = e.Query._extend({
                _objectClass: e.User,
                _newObject: function() {
                    return new e.User();
                },
                _processResult: function(e) {
                    if (e && e[this._friendshipTag]) {
                        var t = e[this._friendshipTag];
                        return "Pointer" === t.__type && "_User" === t.className && (delete t.__type, delete t.className), 
                        t;
                    }
                    return null;
                }
            });
        };
    }, function(e, t, n) {
        var r = n(0);
        e.exports = function(e) {
            e.Relation = function(e, t) {
                if (!r.isString(t)) throw new TypeError("key must be a string");
                this.parent = e, this.key = t, this.targetClassName = null;
            }, e.Relation.reverseQuery = function(t, n, r) {
                var i = new e.Query(t);
                return i.equalTo(n, r._toPointer()), i;
            }, r.extend(e.Relation.prototype, {
                _ensureParentAndKey: function(e, t) {
                    if (this.parent = this.parent || e, this.key = this.key || t, this.parent !== e) throw new Error("Internal Error. Relation retrieved from two different Objects.");
                    if (this.key !== t) throw new Error("Internal Error. Relation retrieved from two different keys.");
                },
                add: function(t) {
                    r.isArray(t) || (t = [ t ]);
                    var n = new e.Op.Relation(t, []);
                    this.parent.set(this.key, n), this.targetClassName = n._targetClassName;
                },
                remove: function(t) {
                    r.isArray(t) || (t = [ t ]);
                    var n = new e.Op.Relation([], t);
                    this.parent.set(this.key, n), this.targetClassName = n._targetClassName;
                },
                toJSON: function() {
                    return {
                        __type: "Relation",
                        className: this.targetClassName
                    };
                },
                query: function() {
                    var t, n;
                    return this.targetClassName ? (t = e.Object._getSubclass(this.targetClassName), 
                    n = new e.Query(t)) : (t = e.Object._getSubclass(this.parent.className), n = new e.Query(t), 
                    n._extraOptions.redirectClassNameForKey = this.key), n._addCondition("$relatedTo", "object", this.parent._toPointer()), 
                    n._addCondition("$relatedTo", "key", this.key), n;
                }
            });
        };
    }, function(e, t, n) {
        var r = n(0), i = n(3);
        e.exports = function(e) {
            e.Role = e.Object.extend("_Role", {
                constructor: function(t, n) {
                    if (r.isString(t) ? (e.Object.prototype.constructor.call(this, null, null), this.setName(t)) : e.Object.prototype.constructor.call(this, t, n), 
                    void 0 === n) {
                        var i = new e.ACL();
                        i.setPublicReadAccess(!0), this.getACL() || this.setACL(i);
                    } else {
                        if (!(n instanceof e.ACL)) throw new TypeError("acl must be an instance of AV.ACL");
                        this.setACL(n);
                    }
                },
                getName: function() {
                    return this.get("name");
                },
                setName: function(e, t) {
                    return this.set("name", e, t);
                },
                getUsers: function() {
                    return this.relation("users");
                },
                getRoles: function() {
                    return this.relation("roles");
                },
                validate: function(t, n) {
                    if ("name" in t && t.name !== this.getName()) {
                        var o = t.name;
                        if (this.id && this.id !== t.objectId) return new i(i.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
                        if (!r.isString(o)) return new i(i.OTHER_CAUSE, "A role's name must be a String.");
                        if (!/^[0-9a-zA-Z\-_ ]+$/.test(o)) return new i(i.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.");
                    }
                    return !!e.Object.prototype.validate && e.Object.prototype.validate.call(this, t, n);
                }
            });
        };
    }, function(e, t, n) {
        var r = n(0), i = n(2).request;
        e.exports = function(e) {
            e.SearchSortBuilder = function() {
                this._sortFields = [];
            }, r.extend(e.SearchSortBuilder.prototype, {
                _addField: function(e, t, n, r) {
                    var i = {};
                    return i[e] = {
                        order: t || "asc",
                        mode: n || "avg",
                        missing: "_" + (r || "last")
                    }, this._sortFields.push(i), this;
                },
                ascending: function(e, t, n) {
                    return this._addField(e, "asc", t, n);
                },
                descending: function(e, t, n) {
                    return this._addField(e, "desc", t, n);
                },
                whereNear: function(e, t, n) {
                    n = n || {};
                    var r = {}, i = {
                        lat: t.latitude,
                        lon: t.longitude
                    }, o = {
                        order: n.order || "asc",
                        mode: n.mode || "avg",
                        unit: n.unit || "km"
                    };
                    return o[e] = i, r._geo_distance = o, this._sortFields.push(r), this;
                },
                build: function() {
                    return JSON.stringify(e._encode(this._sortFields));
                }
            }), e.SearchQuery = e.Query._extend({
                _sid: null,
                _hits: 0,
                _queryString: null,
                _highlights: null,
                _sortBuilder: null,
                _createRequest: function(e, t) {
                    return i("search/select", null, null, "GET", e || this.toJSON(), t);
                },
                sid: function(e) {
                    return this._sid = e, this;
                },
                queryString: function(e) {
                    return this._queryString = e, this;
                },
                highlights: function(e) {
                    var t;
                    return t = e && r.isString(e) ? arguments : e, this._highlights = t, this;
                },
                sortBy: function(e) {
                    return this._sortBuilder = e, this;
                },
                hits: function() {
                    return this._hits || (this._hits = 0), this._hits;
                },
                _processResult: function(e) {
                    return delete e.className, delete e._app_url, delete e._deeplink, e;
                },
                hasMore: function() {
                    return !this._hitEnd;
                },
                reset: function() {
                    this._hitEnd = !1, this._sid = null, this._hits = 0;
                },
                find: function() {
                    var e = this;
                    return this._createRequest().then(function(t) {
                        return t.sid ? (e._oldSid = e._sid, e._sid = t.sid) : (e._sid = null, e._hitEnd = !0), 
                        e._hits = t.hits || 0, r.map(t.results, function(n) {
                            n.className && (t.className = n.className);
                            var r = e._newObject(t);
                            return r.appURL = n._app_url, r._finishFetch(e._processResult(n), !0), r;
                        });
                    });
                },
                toJSON: function() {
                    var t = e.SearchQuery.__super__.toJSON.call(this);
                    if (delete t.where, this.className && (t.clazz = this.className), this._sid && (t.sid = this._sid), 
                    !this._queryString) throw new Error("Please set query string.");
                    if (t.q = this._queryString, this._highlights && (t.highlights = this._highlights.join(",")), 
                    this._sortBuilder && t.order) throw new Error("sort and order can not be set at same time.");
                    return this._sortBuilder && (t.sort = this._sortBuilder.build()), t;
                }
            });
        };
    }, function(t, n, r) {
        var i = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
            return void 0 === t ? "undefined" : e(t);
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : void 0 === t ? "undefined" : e(t);
        }, o = r(0), s = r(2).request;
        t.exports = function(e) {
            var t = function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                return e.User.currentAsync().then(function(n) {
                    return n || e.User._fetchUserBySessionToken(t.sessionToken);
                });
            }, n = function(n) {
                return t(n).then(function(t) {
                    return e.Object.createWithoutData("_User", t.id)._toPointer();
                });
            };
            e.Status = function(e, t) {
                return this.data = {}, this.inboxType = "default", this.query = null, e && "object" === (void 0 === e ? "undefined" : i(e)) ? this.data = e : (e && (this.data.image = e), 
                t && (this.data.message = t)), this;
            }, o.extend(e.Status.prototype, {
                get: function(e) {
                    return this.data[e];
                },
                set: function(e, t) {
                    return this.data[e] = t, this;
                },
                destroy: function(t) {
                    return this.id ? s("statuses", null, this.id, "DELETE", t) : e.Promise.reject(new Error("The status id is not exists."));
                },
                toObject: function() {
                    return this.id ? e.Object.createWithoutData("_Status", this.id) : null;
                },
                _getDataJSON: function() {
                    var t = o.clone(this.data);
                    return e._encode(t);
                },
                send: function() {
                    var t = this, r = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    if (!r.sessionToken && !e.User.current()) throw new Error("Please signin an user.");
                    return this.query ? n(r).then(function(e) {
                        var n = t.query.toJSON();
                        n.className = t.query.className;
                        var i = {};
                        return i.query = n, t.data = t.data || {}, t.data.source = t.data.source || e, i.data = t._getDataJSON(), 
                        i.inboxType = t.inboxType || "default", s("statuses", null, null, "POST", i, r);
                    }).then(function(n) {
                        return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t;
                    }) : e.Status.sendStatusToFollowers(this, r);
                },
                _finishFetch: function(t) {
                    this.id = t.objectId, this.createdAt = e._parseDate(t.createdAt), this.updatedAt = e._parseDate(t.updatedAt), 
                    this.messageId = t.messageId, delete t.messageId, delete t.objectId, delete t.createdAt, 
                    delete t.updatedAt, this.data = e._decode(t);
                }
            }), e.Status.sendStatusToFollowers = function(t) {
                var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                if (!r.sessionToken && !e.User.current()) throw new Error("Please signin an user.");
                return n(r).then(function(n) {
                    var i = {};
                    i.className = "_Follower", i.keys = "follower", i.where = {
                        user: n
                    };
                    var o = {};
                    return o.query = i, t.data = t.data || {}, t.data.source = t.data.source || n, o.data = t._getDataJSON(), 
                    o.inboxType = t.inboxType || "default", s("statuses", null, null, "POST", o, r).then(function(n) {
                        return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t;
                    });
                });
            }, e.Status.sendPrivateStatus = function(t, r) {
                var i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                if (!i.sessionToken && !e.User.current()) throw new Error("Please signin an user.");
                if (!r) throw new Error("Invalid target user.");
                var a = o.isString(r) ? r : r.id;
                if (!a) throw new Error("Invalid target user.");
                return n(i).then(function(n) {
                    var r = {};
                    r.className = "_User", r.where = {
                        objectId: a
                    };
                    var o = {};
                    return o.query = r, t.data = t.data || {}, t.data.source = t.data.source || n, o.data = t._getDataJSON(), 
                    o.inboxType = "private", t.inboxType = "private", s("statuses", null, null, "POST", o, i).then(function(n) {
                        return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t;
                    });
                });
            }, e.Status.countUnreadStatuses = function(n) {
                var r = arguments.length <= 1 || void 0 === arguments[1] ? "default" : arguments[1], i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                if (o.isString(r) || (i = r), !i.sessionToken && null == n && !e.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
                return t(i).then(function(t) {
                    var n = {};
                    return n.inboxType = e._encode(r), n.owner = e._encode(t), s("subscribe/statuses/count", null, null, "GET", n, i);
                });
            }, e.Status.resetUnreadCount = function(n) {
                var r = arguments.length <= 1 || void 0 === arguments[1] ? "default" : arguments[1], i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2];
                if (o.isString(r) || (i = r), !i.sessionToken && null == n && !e.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
                return t(i).then(function(t) {
                    var n = {};
                    return n.inboxType = e._encode(r), n.owner = e._encode(t), s("subscribe/statuses/resetUnreadCount", null, null, "POST", n, i);
                });
            }, e.Status.statusQuery = function(t) {
                var n = new e.Query("_Status");
                return t && n.equalTo("source", t), n;
            }, e.InboxQuery = e.Query._extend({
                _objectClass: e.Status,
                _sinceId: 0,
                _maxId: 0,
                _inboxType: "default",
                _owner: null,
                _newObject: function() {
                    return new e.Status();
                },
                _createRequest: function(e, t) {
                    return s("subscribe/statuses", null, null, "GET", e || this.toJSON(), t);
                },
                sinceId: function(e) {
                    return this._sinceId = e, this;
                },
                maxId: function(e) {
                    return this._maxId = e, this;
                },
                owner: function(e) {
                    return this._owner = e, this;
                },
                inboxType: function(e) {
                    return this._inboxType = e, this;
                },
                toJSON: function() {
                    var t = e.InboxQuery.__super__.toJSON.call(this);
                    return t.owner = e._encode(this._owner), t.inboxType = e._encode(this._inboxType), 
                    t.sinceId = e._encode(this._sinceId), t.maxId = e._encode(this._maxId), t;
                }
            }), e.Status.inboxQuery = function(t, n) {
                var r = new e.InboxQuery(e.Status);
                return t && (r._owner = t), n && (r._inboxType = n), r;
            };
        };
    }, function(e, t, n) {
        e.exports = [];
    }, function(e, t, n) {
        var r = n(18), i = [ "Weapp" ].concat(n(40));
        e.exports = "LeanCloud-JS-SDK/" + r + " (" + i.join("; ") + ")";
    }, function(e, t, n) {
        var r = n(7), i = n(5)("cos"), o = n(1);
        e.exports = function(e, t, n) {
            var s = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
            n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;
            var a = e.upload_url + "?sign=" + encodeURIComponent(e.token);
            return new o(function(e, o) {
                var u = r("POST", a).field("fileContent", t).field("op", "upload");
                s.onprogress && u.on("progress", s.onprogress), u.end(function(t, r) {
                    return r && i(r.status, r.body, r.text), t ? (r && (t.statusCode = r.status, t.responseText = r.text, 
                    t.response = r.body), o(t)) : void e(n);
                });
            });
        };
    }, function(e, t, n) {
        var r = n(7), i = n(1), o = n(5)("qiniu");
        e.exports = function(e, t, n) {
            var s = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
            n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;
            var a = e.token;
            return new i(function(e, i) {
                var u = r("POST", "https://up.qbox.me").field("file", t).field("name", n.attributes.name).field("key", n._qiniu_key).field("token", a);
                s.onprogress && u.on("progress", s.onprogress), u.end(function(t, r) {
                    return r && o(r.status, r.body, r.text), t ? (r && (t.statusCode = r.status, t.responseText = r.text, 
                    t.response = r.body), i(t)) : void e(n);
                });
            });
        };
    }, function(e, t, n) {
        var r = n(7);
        n(1), e.exports = function(e, t, n) {
            var i = arguments.length <= 3 || void 0 === arguments[3] ? {} : arguments[3];
            return n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId, new Promise(function(o, s) {
                var a = r("PUT", e.upload_url).set("Content-Type", n.get("mime_type")).send(t);
                i.onprogress && a.on("progress", i.onprogress), a.end(function(e, t) {
                    return e ? (t && (e.statusCode = t.status, e.responseText = t.text, e.response = t.body), 
                    s(e)) : void o(n);
                });
            });
        };
    }, function(e, t, n) {
        var r = n(0), i = n(3), o = n(2).request, s = n(1), a = function() {
            if ("undefined" == typeof wx || "function" != typeof wx.login) throw new Error("Weapp Login is only available in Weapp");
            return new s(function(e, t) {
                wx.login({
                    success: function(n) {
                        var r = n.code, i = n.errMsg;
                        r ? e(r) : t(new Error(i));
                    }
                });
            });
        };
        e.exports = function(e) {
            e.User = e.Object.extend("_User", {
                _isCurrentUser: !1,
                _mergeMagicFields: function(t) {
                    t.sessionToken && (this._sessionToken = t.sessionToken, delete t.sessionToken), 
                    e.User.__super__._mergeMagicFields.call(this, t);
                },
                _cleanupAuthData: function() {
                    if (this.isCurrent()) {
                        var t = this.get("authData");
                        t && e._objectEach(this.get("authData"), function(e, n) {
                            t[n] || delete t[n];
                        });
                    }
                },
                _synchronizeAllAuthData: function() {
                    if (this.get("authData")) {
                        var t = this;
                        e._objectEach(this.get("authData"), function(e, n) {
                            t._synchronizeAuthData(n);
                        });
                    }
                },
                _synchronizeAuthData: function(t) {
                    if (this.isCurrent()) {
                        var n;
                        r.isString(t) ? (n = t, t = e.User._authProviders[n]) : n = t.getAuthType();
                        var i = this.get("authData");
                        i && t && (t.restoreAuthentication(i[n]) || this._unlinkFrom(t));
                    }
                },
                _handleSaveResult: function(t) {
                    return t && !e._config.disableCurrentUser && (this._isCurrentUser = !0), this._cleanupAuthData(), 
                    this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey("password"), 
                    this._refreshCache(), !t && !this.isCurrent() || e._config.disableCurrentUser ? s.resolve() : s.resolve(e.User._saveCurrentUser(this));
                },
                _linkWith: function(t, n) {
                    var i, o = this;
                    if (r.isString(t) ? (i = t, t = e.User._authProviders[t]) : i = t.getAuthType(), 
                    n) {
                        var s = this.get("authData") || {};
                        return s[i] = n, this.save({
                            authData: s
                        }).then(function(e) {
                            return e._handleSaveResult(!0).then(function() {
                                return e;
                            });
                        });
                    }
                    return t.authenticate().then(function(e) {
                        return o._linkWith(t, e);
                    });
                },
                linkWithWeapp: function() {
                    var e = this;
                    return a().then(function(t) {
                        return e._linkWith("lc_weapp", {
                            code: t
                        });
                    });
                },
                _unlinkFrom: function(t) {
                    var n = this;
                    return r.isString(t) && (t = e.User._authProviders[t]), this._linkWith(t, null).then(function(e) {
                        return n._synchronizeAuthData(t), e;
                    });
                },
                _isLinked: function(e) {
                    var t;
                    return t = r.isString(e) ? e : e.getAuthType(), !!(this.get("authData") || {})[t];
                },
                logOut: function() {
                    this._logOutWithAll(), this._isCurrentUser = !1;
                },
                _logOutWithAll: function() {
                    if (this.get("authData")) {
                        var t = this;
                        e._objectEach(this.get("authData"), function(e, n) {
                            t._logOutWith(n);
                        });
                    }
                },
                _logOutWith: function(t) {
                    this.isCurrent() && (r.isString(t) && (t = e.User._authProviders[t]), t && t.deauthenticate && t.deauthenticate());
                },
                signUp: function(e, t) {
                    var n = e && e.username || this.get("username");
                    if (!n || "" === n) throw new i(i.OTHER_CAUSE, "Cannot sign up user with an empty name.");
                    var r = e && e.password || this.get("password");
                    if (!r || "" === r) throw new i(i.OTHER_CAUSE, "Cannot sign up user with an empty password.");
                    return this.save(e, t).then(function(e) {
                        return e._handleSaveResult(!0).then(function() {
                            return e;
                        });
                    });
                },
                signUpOrlogInWithMobilePhone: function(e) {
                    var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], n = e && e.mobilePhoneNumber || this.get("mobilePhoneNumber");
                    if (!n || "" === n) throw new i(i.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.");
                    var r = e && e.smsCode || this.get("smsCode");
                    if (!r || "" === r) throw new i(i.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.");
                    return t._makeRequest = function(e, t, n, r, i) {
                        return o("usersByMobilePhone", null, null, "POST", i);
                    }, this.save(e, t).then(function(e) {
                        return delete e.attributes.smsCode, delete e._serverData.smsCode, e._handleSaveResult(!0).then(function() {
                            return e;
                        });
                    });
                },
                logIn: function() {
                    var e = this;
                    return o("login", null, null, "POST", this.toJSON()).then(function(t) {
                        var n = e.parse(t);
                        return e._finishFetch(n), e._handleSaveResult(!0).then(function() {
                            return n.smsCode || delete e.attributes.smsCode, e;
                        });
                    });
                },
                save: function(t, n, i) {
                    var o, s;
                    return r.isObject(t) || r.isNull(t) || r.isUndefined(t) ? (o = t, s = n) : (o = {}, 
                    o[t] = n, s = i), s = s || {}, e.Object.prototype.save.call(this, o, s).then(function(e) {
                        return e._handleSaveResult(!1).then(function() {
                            return e;
                        });
                    });
                },
                follow: function(e, t) {
                    if (!this.id) throw new Error("Please signin.");
                    if (!e) throw new Error("Invalid target user.");
                    var n = r.isString(e) ? e : e.id;
                    if (!n) throw new Error("Invalid target user.");
                    var i = "users/" + this.id + "/friendship/" + n;
                    return o(i, null, null, "POST", null, t);
                },
                unfollow: function(e, t) {
                    if (!this.id) throw new Error("Please signin.");
                    if (!e) throw new Error("Invalid target user.");
                    var n = r.isString(e) ? e : e.id;
                    if (!n) throw new Error("Invalid target user.");
                    var i = "users/" + this.id + "/friendship/" + n;
                    return o(i, null, null, "DELETE", null, t);
                },
                followerQuery: function() {
                    return e.User.followerQuery(this.id);
                },
                followeeQuery: function() {
                    return e.User.followeeQuery(this.id);
                },
                fetch: function(t, n) {
                    return e.Object.prototype.fetch.call(this, t, n).then(function(e) {
                        return e._handleSaveResult(!1).then(function() {
                            return e;
                        });
                    });
                },
                updatePassword: function(e, t, n) {
                    var r = "users/" + this.id + "/updatePassword";
                    return o(r, null, null, "PUT", {
                        old_password: e,
                        new_password: t
                    }, n);
                },
                isCurrent: function() {
                    return this._isCurrentUser;
                },
                getUsername: function() {
                    return this.get("username");
                },
                getMobilePhoneNumber: function() {
                    return this.get("mobilePhoneNumber");
                },
                setMobilePhoneNumber: function(e, t) {
                    return this.set("mobilePhoneNumber", e, t);
                },
                setUsername: function(e, t) {
                    return this.set("username", e, t);
                },
                setPassword: function(e, t) {
                    return this.set("password", e, t);
                },
                getEmail: function() {
                    return this.get("email");
                },
                setEmail: function(e, t) {
                    return this.set("email", e, t);
                },
                authenticated: function() {
                    return console.warn("DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。"), 
                    !!this._sessionToken && !e._config.disableCurrentUser && e.User.current() && e.User.current().id === this.id;
                },
                isAuthenticated: function() {
                    var t = this;
                    return s.resolve().then(function() {
                        return !!t._sessionToken && e.User._fetchUserBySessionToken(t._sessionToken).then(function() {
                            return !0;
                        }, function(e) {
                            if (211 === e.code) return !1;
                            throw e;
                        });
                    });
                },
                getSessionToken: function() {
                    return this._sessionToken;
                },
                refreshSessionToken: function(e) {
                    var t = this;
                    return o("users/" + this.id + "/refreshSessionToken", null, null, "PUT", null, e).then(function(e) {
                        return t._finishFetch(e), t;
                    });
                },
                getRoles: function(t) {
                    return e.Relation.reverseQuery("_Role", "users", this).find(t);
                }
            }, {
                _currentUser: null,
                _currentUserMatchesDisk: !1,
                _CURRENT_USER_KEY: "currentUser",
                _authProviders: {},
                signUp: function(t, n, r, i) {
                    return (r = r || {}).username = t, r.password = n, e.Object._create("_User").signUp(r, i);
                },
                logIn: function(t, n, r) {
                    var i = e.Object._create("_User");
                    return i._finishFetch({
                        username: t,
                        password: n
                    }), i.logIn(r);
                },
                become: function(e) {
                    return this._fetchUserBySessionToken(e).then(function(e) {
                        return e._handleSaveResult(!0).then(function() {
                            return e;
                        });
                    });
                },
                _fetchUserBySessionToken: function(t) {
                    var n = e.Object._create("_User");
                    return o("users", "me", null, "GET", {
                        session_token: t
                    }).then(function(e) {
                        var t = n.parse(e);
                        return n._finishFetch(t), n;
                    });
                },
                logInWithMobilePhoneSmsCode: function(t, n, r) {
                    var i = e.Object._create("_User");
                    return i._finishFetch({
                        mobilePhoneNumber: t,
                        smsCode: n
                    }), i.logIn(r);
                },
                signUpOrlogInWithMobilePhone: function(t, n, r, i) {
                    return (r = r || {}).mobilePhoneNumber = t, r.smsCode = n, e.Object._create("_User").signUpOrlogInWithMobilePhone(r, i);
                },
                logInWithMobilePhone: function(t, n, r) {
                    var i = e.Object._create("_User");
                    return i._finishFetch({
                        mobilePhoneNumber: t,
                        password: n
                    }), i.logIn(r);
                },
                signUpOrlogInWithAuthData: function(t, n) {
                    return e.User._logInWith(n, t);
                },
                loginWithWeapp: function() {
                    var e = this;
                    return a().then(function(t) {
                        return e.signUpOrlogInWithAuthData({
                            code: t
                        }, "lc_weapp");
                    });
                },
                associateWithAuthData: function(e, t, n) {
                    return e._linkWith(t, n);
                },
                logOut: function() {
                    return e._config.disableCurrentUser ? (console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), 
                    s.resolve(null)) : (null !== e.User._currentUser && (e.User._currentUser._logOutWithAll(), 
                    e.User._currentUser._isCurrentUser = !1), e.User._currentUserMatchesDisk = !0, e.User._currentUser = null, 
                    e.localStorage.removeItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)));
                },
                followerQuery: function(t) {
                    if (!t || !r.isString(t)) throw new Error("Invalid user object id.");
                    var n = new e.FriendShipQuery("_Follower");
                    return n._friendshipTag = "follower", n.equalTo("user", e.Object.createWithoutData("_User", t)), 
                    n;
                },
                followeeQuery: function(t) {
                    if (!t || !r.isString(t)) throw new Error("Invalid user object id.");
                    var n = new e.FriendShipQuery("_Followee");
                    return n._friendshipTag = "followee", n.equalTo("user", e.Object.createWithoutData("_User", t)), 
                    n;
                },
                requestPasswordReset: function(e) {
                    return o("requestPasswordReset", null, null, "POST", {
                        email: e
                    });
                },
                requestEmailVerify: function(e) {
                    return o("requestEmailVerify", null, null, "POST", {
                        email: e
                    });
                },
                requestMobilePhoneVerify: function(e) {
                    return o("requestMobilePhoneVerify", null, null, "POST", {
                        mobilePhoneNumber: e
                    });
                },
                requestPasswordResetBySmsCode: function(e) {
                    return o("requestPasswordResetBySmsCode", null, null, "POST", {
                        mobilePhoneNumber: e
                    });
                },
                resetPasswordBySmsCode: function(e, t) {
                    return o("resetPasswordBySmsCode", null, e, "PUT", {
                        password: t
                    });
                },
                verifyMobilePhone: function(e) {
                    return o("verifyMobilePhone", null, e, "POST", null);
                },
                requestLoginSmsCode: function(e) {
                    return o("requestLoginSmsCode", null, null, "POST", {
                        mobilePhoneNumber: e
                    });
                },
                currentAsync: function() {
                    return e._config.disableCurrentUser ? (console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), 
                    s.resolve(null)) : e.User._currentUser ? s.resolve(e.User._currentUser) : e.User._currentUserMatchesDisk ? s.resolve(e.User._currentUser) : e.localStorage.getItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)).then(function(t) {
                        if (!t) return null;
                        e.User._currentUserMatchesDisk = !0, e.User._currentUser = e.Object._create("_User"), 
                        e.User._currentUser._isCurrentUser = !0;
                        var n = JSON.parse(t);
                        return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, 
                        delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), 
                        e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [ {} ], e.User._currentUser;
                    });
                },
                current: function() {
                    if (e._config.disableCurrentUser) return console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), 
                    null;
                    if (e.User._currentUser) return e.User._currentUser;
                    if (e.User._currentUserMatchesDisk) return e.User._currentUser;
                    e.User._currentUserMatchesDisk = !0;
                    var t = e.localStorage.getItem(e._getAVPath(e.User._CURRENT_USER_KEY));
                    if (!t) return null;
                    e.User._currentUser = e.Object._create("_User"), e.User._currentUser._isCurrentUser = !0;
                    var n = JSON.parse(t);
                    return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, 
                    delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), 
                    e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [ {} ], e.User._currentUser;
                },
                _saveCurrentUser: function(t) {
                    return (e.User._currentUser !== t ? e.User.logOut() : s.resolve()).then(function() {
                        t._isCurrentUser = !0, e.User._currentUser = t;
                        var n = t.toJSON();
                        return n._id = t.id, n._sessionToken = t._sessionToken, e.localStorage.setItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY), JSON.stringify(n)).then(function() {
                            e.User._currentUserMatchesDisk = !0;
                        });
                    });
                },
                _registerAuthenticationProvider: function(t) {
                    e.User._authProviders[t.getAuthType()] = t, !e._config.disableCurrentUser && e.User.current() && e.User.current()._synchronizeAuthData(t.getAuthType());
                },
                _logInWith: function(t, n) {
                    return e.Object._create("_User")._linkWith(t, n);
                }
            });
        };
    }, function(e, t, n) {
        (function(t) {
            var r = n(0), i = (n(1), {}), o = [ "getItem", "setItem", "removeItem", "clear" ], s = t.localStorage;
            try {
                var a = "__storejs__";
                if (s.setItem(a, a), s.getItem(a) != a) throw new Error();
                s.removeItem(a);
            } catch (e) {
                e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                s = n(56);
            }
            r(o).each(function(e) {
                i[e] = function() {
                    return t.localStorage[e].apply(t.localStorage, arguments);
                };
            }), i.async = !1, e.exports = i;
        }).call(t, n(8));
    }, function(e, t, n) {
        e.exports = function(e, t) {
            var n;
            e.indexOf("base64") < 0 ? n = atob(e) : e.split(",")[0].indexOf("base64") >= 0 ? (t = t || e.split(",")[0].split(":")[1].split(";")[0], 
            n = atob(e.split(",")[1])) : n = unescape(e.split(",")[1]);
            for (var r = new Uint8Array(n.length), i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
            return new Blob([ r ], {
                type: t
            });
        };
    }, function(e, t, n) {
        function r(e) {
            if (e) return i(e);
        }
        function i(e) {
            for (var t in r.prototype) e[t] = r.prototype[t];
            return e;
        }
        e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), 
            this;
        }, r.prototype.once = function(e, t) {
            function n() {
                this.off(e, n), t.apply(this, arguments);
            }
            return n.fn = t, this.on(e, n), this;
        }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, 
            this;
            var n = this._callbacks["$" + e];
            if (!n) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + e], this;
            for (var r, i = 0; i < n.length; i++) if ((r = n[i]) === t || r.fn === t) {
                n.splice(i, 1);
                break;
            }
            return this;
        }, r.prototype.emit = function(e) {
            this._callbacks = this._callbacks || {};
            var t = [].slice.call(arguments, 1), n = this._callbacks["$" + e];
            if (n) for (var r = 0, i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, t);
            return this;
        }, r.prototype.listeners = function(e) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
        }, r.prototype.hasListeners = function(e) {
            return !!this.listeners(e).length;
        };
    }, function(e, t) {
        !function() {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
                rotl: function(e, t) {
                    return e << t | e >>> 32 - t;
                },
                rotr: function(e, t) {
                    return e << 32 - t | e >>> t;
                },
                endian: function(e) {
                    if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                    for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                    return e;
                },
                randomBytes: function(e) {
                    for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                    return t;
                },
                bytesToWords: function(e) {
                    for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
                    return t;
                },
                wordsToBytes: function(e) {
                    for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                    return t;
                },
                bytesToHex: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                    return t.join("");
                },
                hexToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                    return t;
                },
                bytesToBase64: function(e) {
                    for (var n = [], r = 0; r < e.length; r += 3) for (var i = e[r] << 16 | e[r + 1] << 8 | e[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * e.length ? n.push(t.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=");
                    return n.join("");
                },
                base64ToBytes: function(e) {
                    e = e.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4) 0 != i && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(r)) >>> 6 - 2 * i);
                    return n;
                }
            };
            e.exports = n;
        }();
    }, function(t, n) {
        function r(e) {
            if (!((e = String(e)).length > 1e4)) {
                var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var n = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                      case "years":
                      case "year":
                      case "yrs":
                      case "yr":
                      case "y":
                        return n * f;

                      case "days":
                      case "day":
                      case "d":
                        return n * l;

                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                        return n * c;

                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                        return n * u;

                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                        return n * a;

                      case "milliseconds":
                      case "millisecond":
                      case "msecs":
                      case "msec":
                      case "ms":
                        return n;

                      default:
                        return;
                    }
                }
            }
        }
        function i(e) {
            return e >= l ? Math.round(e / l) + "d" : e >= c ? Math.round(e / c) + "h" : e >= u ? Math.round(e / u) + "m" : e >= a ? Math.round(e / a) + "s" : e + "ms";
        }
        function o(e) {
            return s(e, l, "day") || s(e, c, "hour") || s(e, u, "minute") || s(e, a, "second") || e + " ms";
        }
        function s(e, t, n) {
            if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s";
        }
        var a = 1e3, u = 60 * a, c = 60 * u, l = 24 * c, f = 365.25 * l;
        t.exports = function(t, n) {
            n = n || {};
            var s = void 0 === t ? "undefined" : e(t);
            if ("string" === s && t.length > 0) return r(t);
            if ("number" === s && !1 === isNaN(t)) return n.long ? o(t) : i(t);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
        };
    }, function(e, t, n) {
        function r(e) {
            var n, r = 0;
            for (n in e) r = (r << 5) - r + e.charCodeAt(n), r |= 0;
            return t.colors[Math.abs(r) % t.colors.length];
        }
        function i(e) {
            function n() {
                if (n.enabled) {
                    var e = n, r = +new Date(), i = r - (o || r);
                    e.diff = i, e.prev = o, e.curr = r, o = r;
                    for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
                    s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
                    var u = 0;
                    s[0] = s[0].replace(/%([a-zA-Z%])/g, function(n, r) {
                        if ("%%" === n) return n;
                        u++;
                        var i = t.formatters[r];
                        if ("function" == typeof i) {
                            var o = s[u];
                            n = i.call(e, o), s.splice(u, 1), u--;
                        }
                        return n;
                    }), t.formatArgs.call(e, s), (n.log || t.log || console.log.bind(console)).apply(e, s);
                }
            }
            return n.namespace = e, n.enabled = t.enabled(e), n.useColors = t.useColors(), n.color = r(e), 
            "function" == typeof t.init && t.init(n), n;
        }
        (t = e.exports = i.debug = i.default = i).coerce = function(e) {
            return e instanceof Error ? e.stack || e.message : e;
        }, t.disable = function() {
            t.enable("");
        }, t.enable = function(e) {
            t.save(e);
            for (var n = (e || "").split(/[\s,]+/), r = n.length, i = 0; i < r; i++) n[i] && ("-" === (e = n[i].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
        }, t.enabled = function(e) {
            var n, r;
            for (n = 0, r = t.skips.length; n < r; n++) if (t.skips[n].test(e)) return !1;
            for (n = 0, r = t.names.length; n < r; n++) if (t.names[n].test(e)) return !0;
            return !1;
        }, t.humanize = n(50), t.names = [], t.skips = [], t.formatters = {};
        var o;
    }, function(t, n, r) {
        (function(n) {
            !function(e, n) {
                t.exports = n();
            }(0, function() {
                function t(t) {
                    return "function" == typeof t || "object" == (void 0 === t ? "undefined" : e(t)) && null !== t;
                }
                function i(e) {
                    return "function" == typeof e;
                }
                function o() {
                    return void 0 !== q ? function() {
                        q(a);
                    } : s();
                }
                function s() {
                    var e = setTimeout;
                    return function() {
                        return e(a, 1);
                    };
                }
                function a() {
                    for (var e = 0; e < L; e += 2) (0, K[e])(K[e + 1]), K[e] = void 0, K[e + 1] = void 0;
                    L = 0;
                }
                function u(e, t) {
                    var n = arguments, r = this, i = new this.constructor(l);
                    void 0 === i[G] && x(i);
                    var o = r._state;
                    return o ? function() {
                        var e = n[o - 1];
                        M(function() {
                            return j(o, i, e, r._result);
                        });
                    }() : S(r, i, e, t), i;
                }
                function c(t) {
                    var n = this;
                    if (t && "object" == (void 0 === t ? "undefined" : e(t)) && t.constructor === n) return t;
                    var r = new n(l);
                    return m(r, t), r;
                }
                function l() {}
                function f() {
                    return new TypeError("You cannot resolve a promise with itself");
                }
                function h() {
                    return new TypeError("A promises callback cannot return that same promise.");
                }
                function d(e) {
                    try {
                        return e.then;
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        return Y.error = e, Y;
                    }
                }
                function p(e, t, n, r) {
                    try {
                        e.call(t, n, r);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        return e;
                    }
                }
                function _(e, t, n) {
                    M(function(e) {
                        var r = !1, i = p(n, t, function(n) {
                            r || (r = !0, t !== n ? m(e, n) : b(e, n));
                        }, function(t) {
                            r || (r = !0, w(e, t));
                        }, "Settle: " + (e._label || " unknown promise"));
                        !r && i && (r = !0, w(e, i));
                    }, e);
                }
                function v(e, t) {
                    t._state === $ ? b(e, t._result) : t._state === X ? w(e, t._result) : S(t, void 0, function(t) {
                        return m(e, t);
                    }, function(t) {
                        return w(e, t);
                    });
                }
                function y(e, t, n) {
                    t.constructor === e.constructor && n === u && t.constructor.resolve === c ? v(e, t) : n === Y ? w(e, Y.error) : void 0 === n ? b(e, t) : i(n) ? _(e, t, n) : b(e, t);
                }
                function m(e, n) {
                    e === n ? w(e, f()) : t(n) ? y(e, n, d(n)) : b(e, n);
                }
                function g(e) {
                    e._onerror && e._onerror(e._result), O(e);
                }
                function b(e, t) {
                    e._state === H && (e._result = t, e._state = $, 0 !== e._subscribers.length && M(O, e));
                }
                function w(e, t) {
                    e._state === H && (e._state = X, e._result = t, M(g, e));
                }
                function S(e, t, n, r) {
                    var i = e._subscribers, o = i.length;
                    e._onerror = null, i[o] = t, i[o + $] = n, i[o + X] = r, 0 === o && e._state && M(O, e);
                }
                function O(e) {
                    var t = e._subscribers, n = e._state;
                    if (0 !== t.length) {
                        for (var r = void 0, i = void 0, o = e._result, s = 0; s < t.length; s += 3) r = t[s], 
                        i = t[s + n], r ? j(n, r, i, o) : i(o);
                        e._subscribers.length = 0;
                    }
                }
                function A() {
                    this.error = null;
                }
                function E(e, t) {
                    try {
                        return e(t);
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        return Z.error = e, Z;
                    }
                }
                function j(e, t, n, r) {
                    var o = i(n), s = void 0, a = void 0, u = void 0, c = void 0;
                    if (o) {
                        if ((s = E(n, r)) === Z ? (c = !0, a = s.error, s = null) : u = !0, t === s) return void w(t, h());
                    } else s = r, u = !0;
                    t._state !== H || (o && u ? m(t, s) : c ? w(t, a) : e === $ ? b(t, s) : e === X && w(t, s));
                }
                function T(e, t) {
                    try {
                        t(function(t) {
                            m(e, t);
                        }, function(t) {
                            w(e, t);
                        });
                    } catch (t) {
                        t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                        w(e, t);
                    }
                }
                function N() {
                    return ee++;
                }
                function x(e) {
                    e[G] = ee++, e._state = void 0, e._result = void 0, e._subscribers = [];
                }
                function C(e, t) {
                    this._instanceConstructor = e, this.promise = new e(l), this.promise[G] || x(this.promise), 
                    D(t) ? (this._input = t, this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 
                    0 === this.length ? b(this.promise, this._result) : (this.length = this.length || 0, 
                    this._enumerate(), 0 === this._remaining && b(this.promise, this._result))) : w(this.promise, k());
                }
                function k() {
                    return new Error("Array Methods must be provided an Array");
                }
                function U() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                }
                function I() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                }
                function P(e) {
                    this[G] = N(), this._result = this._state = void 0, this._subscribers = [], l !== e && ("function" != typeof e && U(), 
                    this instanceof P ? T(this, e) : I());
                }
                var R = void 0, D = R = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e);
                }, L = 0, q = void 0, F = void 0, M = function(e, t) {
                    K[L] = e, K[L + 1] = t, 2 === (L += 2) && (F ? F(a) : z());
                }, J = "undefined" != typeof window ? window : void 0, B = J || {}, W = B.MutationObserver || B.WebKitMutationObserver, V = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), Q = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, K = new Array(1e3), z = void 0;
                z = V ? function() {
                    return process.nextTick(a);
                } : W ? function() {
                    var e = 0, t = new W(a), n = document.createTextNode("");
                    return t.observe(n, {
                        characterData: !0
                    }), function() {
                        n.data = e = ++e % 2;
                    };
                }() : Q ? function() {
                    var e = new MessageChannel();
                    return e.port1.onmessage = a, function() {
                        return e.port2.postMessage(0);
                    };
                }() : void 0 === J ? function() {
                    try {
                        var e = r(62);
                        return q = e.runOnLoop || e.runOnContext, o();
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        return s();
                    }
                }() : s();
                var G = Math.random().toString(36).substring(16), H = void 0, $ = 1, X = 2, Y = new A(), Z = new A(), ee = 0;
                return C.prototype._enumerate = function() {
                    for (var e = this.length, t = this._input, n = 0; this._state === H && n < e; n++) this._eachEntry(t[n], n);
                }, C.prototype._eachEntry = function(e, t) {
                    var n = this._instanceConstructor, r = n.resolve;
                    if (r === c) {
                        var i = d(e);
                        if (i === u && e._state !== H) this._settledAt(e._state, t, e._result); else if ("function" != typeof i) this._remaining--, 
                        this._result[t] = e; else if (n === P) {
                            var o = new n(l);
                            y(o, e, i), this._willSettleAt(o, t);
                        } else this._willSettleAt(new n(function(t) {
                            return t(e);
                        }), t);
                    } else this._willSettleAt(r(e), t);
                }, C.prototype._settledAt = function(e, t, n) {
                    var r = this.promise;
                    r._state === H && (this._remaining--, e === X ? w(r, n) : this._result[t] = n), 
                    0 === this._remaining && b(r, this._result);
                }, C.prototype._willSettleAt = function(e, t) {
                    var n = this;
                    S(e, void 0, function(e) {
                        return n._settledAt($, t, e);
                    }, function(e) {
                        return n._settledAt(X, t, e);
                    });
                }, P.all = function(e) {
                    return new C(this, e).promise;
                }, P.race = function(e) {
                    var t = this;
                    return new t(D(e) ? function(n, r) {
                        for (var i = e.length, o = 0; o < i; o++) t.resolve(e[o]).then(n, r);
                    } : function(e, t) {
                        return t(new TypeError("You must pass an array to race."));
                    });
                }, P.resolve = c, P.reject = function(e) {
                    var t = new this(l);
                    return w(t, e), t;
                }, P._setScheduler = function(e) {
                    F = e;
                }, P._setAsap = function(e) {
                    M = e;
                }, P._asap = M, P.prototype = {
                    constructor: P,
                    then: u,
                    catch: function(e) {
                        return this.then(null, e);
                    }
                }, P.polyfill = function() {
                    var e = void 0;
                    if (void 0 !== n) e = n; else if ("undefined" != typeof self) e = self; else try {
                        e = Function("return this")();
                    } catch (e) {
                        e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
                        throw new Error("polyfill failed because global object is unavailable in this environment");
                    }
                    var t = e.Promise;
                    if (t) {
                        var r = null;
                        try {
                            r = Object.prototype.toString.call(t.resolve());
                        } catch (e) {}
                        if ("[object Promise]" === r && !t.cast) return;
                    }
                    e.Promise = P;
                }, P.Promise = P, P;
            });
        }).call(n, r(8));
    }, function(t, n, r) {
        function i(e, t) {
            for (var n = e[a][t]; null != n; ) {
                if (n.kind === u) return n.listener;
                n = n.next;
            }
            return null;
        }
        function o(t, n, r) {
            "function" != typeof r && "object" != (void 0 === r ? "undefined" : e(r)) && (r = null);
            for (var i = null, o = t[a][n]; null != o; ) o.kind === u ? null == i ? t[a][n] = o.next : i.next = o.next : i = o, 
            o = o.next;
            null != r && (null == i ? t[a][n] = c(r, u) : i.next = c(r, u));
        }
        var s = r(10), a = s.LISTENERS, u = s.ATTRIBUTE, c = s.newNode;
        n.defineCustomEventTarget = function(e, t) {
            function n() {
                e.call(this);
            }
            var r = {
                constructor: {
                    value: n,
                    configurable: !0,
                    writable: !0
                }
            };
            return t.forEach(function(e) {
                r["on" + e] = {
                    get: function() {
                        return i(this, e);
                    },
                    set: function(t) {
                        o(this, e, t);
                    },
                    configurable: !0,
                    enumerable: !0
                };
            }), n.prototype = Object.create(e.prototype, r), n;
        };
    }, function(e, t, n) {
        var r = n(10).createUniqueKey, i = r("stop_immediate_propagation_flag"), o = r("canceled_flag"), s = r("original_event"), a = Object.freeze({
            stopPropagation: Object.freeze({
                value: function() {
                    var e = this[s];
                    "function" == typeof e.stopPropagation && e.stopPropagation();
                },
                writable: !0,
                configurable: !0
            }),
            stopImmediatePropagation: Object.freeze({
                value: function() {
                    this[i] = !0;
                    var e = this[s];
                    "function" == typeof e.stopImmediatePropagation && e.stopImmediatePropagation();
                },
                writable: !0,
                configurable: !0
            }),
            preventDefault: Object.freeze({
                value: function() {
                    !0 === this.cancelable && (this[o] = !0);
                    var e = this[s];
                    "function" == typeof e.preventDefault && e.preventDefault();
                },
                writable: !0,
                configurable: !0
            }),
            defaultPrevented: Object.freeze({
                get: function() {
                    return this[o];
                },
                enumerable: !0,
                configurable: !0
            })
        });
        t.STOP_IMMEDIATE_PROPAGATION_FLAG = i, t.createEventWrapper = function(e, t) {
            var n = "number" == typeof e.timeStamp ? e.timeStamp : Date.now(), r = {
                type: {
                    value: e.type,
                    enumerable: !0
                },
                target: {
                    value: t,
                    enumerable: !0
                },
                currentTarget: {
                    value: t,
                    enumerable: !0
                },
                eventPhase: {
                    value: 2,
                    enumerable: !0
                },
                bubbles: {
                    value: Boolean(e.bubbles),
                    enumerable: !0
                },
                cancelable: {
                    value: Boolean(e.cancelable),
                    enumerable: !0
                },
                timeStamp: {
                    value: n,
                    enumerable: !0
                },
                isTrusted: {
                    value: !1,
                    enumerable: !0
                }
            };
            return r[i] = {
                value: !1,
                writable: !0
            }, r[o] = {
                value: !1,
                writable: !0
            }, r[s] = {
                value: e
            }, void 0 !== e.detail && (r.detail = {
                value: e.detail,
                enumerable: !0
            }), Object.create(Object.create(e, a), r);
        };
    }, function(e, t) {
        function n(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
        }
        function r(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0));
        }
        e.exports = function(e) {
            return null != e && (n(e) || r(e) || !!e._isBuffer);
        };
    }, function(e, t, n) {
        !function(t) {
            var n = {}, r = {};
            n.length = 0, n.getItem = function(e) {
                return r[e] || null;
            }, n.setItem = function(e, t) {
                void 0 === t ? n.removeItem(e) : (r.hasOwnProperty(e) || n.length++, r[e] = "" + t);
            }, n.removeItem = function(e) {
                r.hasOwnProperty(e) && (delete r[e], n.length--);
            }, n.key = function(e) {
                return Object.keys(r)[e] || null;
            }, n.clear = function() {
                r = {}, n.length = 0;
            }, e.exports = n;
        }();
    }, function(e, t, n) {
        !function() {
            var t = n(49), r = n(19).utf8, i = n(55), o = n(19).bin, s = function e(n, s) {
                n.constructor == String ? n = s && "binary" === s.encoding ? o.stringToBytes(n) : r.stringToBytes(n) : i(n) ? n = Array.prototype.slice.call(n, 0) : Array.isArray(n) || (n = n.toString());
                for (var a = t.bytesToWords(n), u = 8 * n.length, c = 1732584193, l = -271733879, f = -1732584194, h = 271733878, d = 0; d < a.length; d++) a[d] = 16711935 & (a[d] << 8 | a[d] >>> 24) | 4278255360 & (a[d] << 24 | a[d] >>> 8);
                a[u >>> 5] |= 128 << u % 32, a[14 + (u + 64 >>> 9 << 4)] = u;
                for (var p = e._ff, _ = e._gg, v = e._hh, y = e._ii, d = 0; d < a.length; d += 16) {
                    var m = c, g = l, b = f, w = h;
                    l = y(l = y(l = y(l = y(l = v(l = v(l = v(l = v(l = _(l = _(l = _(l = _(l = p(l = p(l = p(l = p(l, f = p(f, h = p(h, c = p(c, l, f, h, a[d + 0], 7, -680876936), l, f, a[d + 1], 12, -389564586), c, l, a[d + 2], 17, 606105819), h, c, a[d + 3], 22, -1044525330), f = p(f, h = p(h, c = p(c, l, f, h, a[d + 4], 7, -176418897), l, f, a[d + 5], 12, 1200080426), c, l, a[d + 6], 17, -1473231341), h, c, a[d + 7], 22, -45705983), f = p(f, h = p(h, c = p(c, l, f, h, a[d + 8], 7, 1770035416), l, f, a[d + 9], 12, -1958414417), c, l, a[d + 10], 17, -42063), h, c, a[d + 11], 22, -1990404162), f = p(f, h = p(h, c = p(c, l, f, h, a[d + 12], 7, 1804603682), l, f, a[d + 13], 12, -40341101), c, l, a[d + 14], 17, -1502002290), h, c, a[d + 15], 22, 1236535329), f = _(f, h = _(h, c = _(c, l, f, h, a[d + 1], 5, -165796510), l, f, a[d + 6], 9, -1069501632), c, l, a[d + 11], 14, 643717713), h, c, a[d + 0], 20, -373897302), f = _(f, h = _(h, c = _(c, l, f, h, a[d + 5], 5, -701558691), l, f, a[d + 10], 9, 38016083), c, l, a[d + 15], 14, -660478335), h, c, a[d + 4], 20, -405537848), f = _(f, h = _(h, c = _(c, l, f, h, a[d + 9], 5, 568446438), l, f, a[d + 14], 9, -1019803690), c, l, a[d + 3], 14, -187363961), h, c, a[d + 8], 20, 1163531501), f = _(f, h = _(h, c = _(c, l, f, h, a[d + 13], 5, -1444681467), l, f, a[d + 2], 9, -51403784), c, l, a[d + 7], 14, 1735328473), h, c, a[d + 12], 20, -1926607734), f = v(f, h = v(h, c = v(c, l, f, h, a[d + 5], 4, -378558), l, f, a[d + 8], 11, -2022574463), c, l, a[d + 11], 16, 1839030562), h, c, a[d + 14], 23, -35309556), f = v(f, h = v(h, c = v(c, l, f, h, a[d + 1], 4, -1530992060), l, f, a[d + 4], 11, 1272893353), c, l, a[d + 7], 16, -155497632), h, c, a[d + 10], 23, -1094730640), f = v(f, h = v(h, c = v(c, l, f, h, a[d + 13], 4, 681279174), l, f, a[d + 0], 11, -358537222), c, l, a[d + 3], 16, -722521979), h, c, a[d + 6], 23, 76029189), f = v(f, h = v(h, c = v(c, l, f, h, a[d + 9], 4, -640364487), l, f, a[d + 12], 11, -421815835), c, l, a[d + 15], 16, 530742520), h, c, a[d + 2], 23, -995338651), f = y(f, h = y(h, c = y(c, l, f, h, a[d + 0], 6, -198630844), l, f, a[d + 7], 10, 1126891415), c, l, a[d + 14], 15, -1416354905), h, c, a[d + 5], 21, -57434055), f = y(f, h = y(h, c = y(c, l, f, h, a[d + 12], 6, 1700485571), l, f, a[d + 3], 10, -1894986606), c, l, a[d + 10], 15, -1051523), h, c, a[d + 1], 21, -2054922799), f = y(f, h = y(h, c = y(c, l, f, h, a[d + 8], 6, 1873313359), l, f, a[d + 15], 10, -30611744), c, l, a[d + 6], 15, -1560198380), h, c, a[d + 13], 21, 1309151649), f = y(f, h = y(h, c = y(c, l, f, h, a[d + 4], 6, -145523070), l, f, a[d + 11], 10, -1120210379), c, l, a[d + 2], 15, 718787259), h, c, a[d + 9], 21, -343485551), 
                    c = c + m >>> 0, l = l + g >>> 0, f = f + b >>> 0, h = h + w >>> 0;
                }
                return t.endian([ c, l, f, h ]);
            };
            s._ff = function(e, t, n, r, i, o, s) {
                var a = e + (t & n | ~t & r) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + t;
            }, s._gg = function(e, t, n, r, i, o, s) {
                var a = e + (t & r | n & ~r) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + t;
            }, s._hh = function(e, t, n, r, i, o, s) {
                var a = e + (t ^ n ^ r) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + t;
            }, s._ii = function(e, t, n, r, i, o, s) {
                var a = e + (n ^ (t | ~r)) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + t;
            }, s._blocksize = 16, s._digestsize = 16, e.exports = function(e, n) {
                if (void 0 === e || null === e) throw new Error("Illegal argument " + e);
                var r = t.wordsToBytes(s(e, n));
                return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : t.bytesToHex(r);
            };
        }();
    }, function(e, t, n) {
        var r = n(11);
        e.exports = function(e) {
            return "[object Function]" === (r(e) ? Object.prototype.toString.call(e) : "");
        };
    }, function(t, n, r) {
        function i(e) {
            if (e) return o(e);
        }
        function o(e) {
            for (var t in i.prototype) e[t] = i.prototype[t];
            return e;
        }
        var s = r(11);
        t.exports = i, i.prototype.clearTimeout = function() {
            return this._timeout = 0, this._responseTimeout = 0, clearTimeout(this._timer), 
            clearTimeout(this._responseTimeoutTimer), this;
        }, i.prototype.parse = function(e) {
            return this._parser = e, this;
        }, i.prototype.responseType = function(e) {
            return this._responseType = e, this;
        }, i.prototype.serialize = function(e) {
            return this._serializer = e, this;
        }, i.prototype.timeout = function(t) {
            return t && "object" == (void 0 === t ? "undefined" : e(t)) ? (void 0 !== t.deadline && (this._timeout = t.deadline), 
            void 0 !== t.response && (this._responseTimeout = t.response), this) : (this._timeout = t, 
            this._responseTimeout = 0, this);
        }, i.prototype.then = function(e, t) {
            if (!this._fullfilledPromise) {
                var n = this;
                this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), 
                this._fullfilledPromise = new Promise(function(e, t) {
                    n.end(function(n, r) {
                        n ? t(n) : e(r);
                    });
                });
            }
            return this._fullfilledPromise.then(e, t);
        }, i.prototype.catch = function(e) {
            return this.then(void 0, e);
        }, i.prototype.use = function(e) {
            return e(this), this;
        }, i.prototype.ok = function(e) {
            if ("function" != typeof e) throw Error("Callback required");
            return this._okCallback = e, this;
        }, i.prototype._isResponseOK = function(e) {
            return !!e && (this._okCallback ? this._okCallback(e) : e.status >= 200 && e.status < 300);
        }, i.prototype.get = function(e) {
            return this._header[e.toLowerCase()];
        }, i.prototype.getHeader = i.prototype.get, i.prototype.set = function(e, t) {
            if (s(e)) {
                for (var n in e) this.set(n, e[n]);
                return this;
            }
            return this._header[e.toLowerCase()] = t, this.header[e] = t, this;
        }, i.prototype.unset = function(e) {
            return delete this._header[e.toLowerCase()], delete this.header[e], this;
        }, i.prototype.field = function(e, t) {
            if (null === e || void 0 === e) throw new Error(".field(name, val) name can not be empty");
            if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), 
            s(e)) {
                for (var n in e) this.field(n, e[n]);
                return this;
            }
            if (Array.isArray(t)) {
                for (var r in t) this.field(e, t[r]);
                return this;
            }
            if (null === t || void 0 === t) throw new Error(".field(name, val) val can not be empty");
            return "boolean" == typeof t && (t = "" + t), this._getFormData().append(e, t), 
            this;
        }, i.prototype.abort = function() {
            return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), 
            this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this);
        }, i.prototype.withCredentials = function() {
            return this._withCredentials = !0, this;
        }, i.prototype.redirects = function(e) {
            return this._maxRedirects = e, this;
        }, i.prototype.toJSON = function() {
            return {
                method: this.method,
                url: this.url,
                data: this._data,
                headers: this._header
            };
        }, i.prototype.send = function(e) {
            var t = s(e), n = this._header["content-type"];
            if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), 
            t && !this._data) Array.isArray(e) ? this._data = [] : this._isHost(e) || (this._data = {}); else if (e && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
            if (t && s(this._data)) for (var r in e) this._data[r] = e[r]; else "string" == typeof e ? (n || this.type("form"), 
            n = this._header["content-type"], this._data = "application/x-www-form-urlencoded" == n ? this._data ? this._data + "&" + e : e : (this._data || "") + e) : this._data = e;
            return !t || this._isHost(e) ? this : (n || this.type("json"), this);
        }, i.prototype.sortQuery = function(e) {
            return this._sort = void 0 === e || e, this;
        }, i.prototype._timeoutError = function(e, t) {
            if (!this._aborted) {
                var n = new Error(e + t + "ms exceeded");
                n.timeout = t, n.code = "ECONNABORTED", this.timedout = !0, this.abort(), this.callback(n);
            }
        }, i.prototype._setTimeouts = function() {
            var e = this;
            this._timeout && !this._timer && (this._timer = setTimeout(function() {
                e._timeoutError("Timeout of ", e._timeout);
            }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() {
                e._timeoutError("Response timeout of ", e._responseTimeout);
            }, this._responseTimeout));
        };
    }, function(e, t, n) {
        function r(e) {
            if (e) return i(e);
        }
        function i(e) {
            for (var t in r.prototype) e[t] = r.prototype[t];
            return e;
        }
        var o = n(61);
        e.exports = r, r.prototype.get = function(e) {
            return this.header[e.toLowerCase()];
        }, r.prototype._setHeaderProperties = function(e) {
            var t = e["content-type"] || "";
            this.type = o.type(t);
            var n = o.params(t);
            for (var r in n) this[r] = n[r];
            this.links = {};
            try {
                e.link && (this.links = o.parseLinks(e.link));
            } catch (e) {}
        }, r.prototype._setStatusProperties = function(e) {
            var t = e / 100 | 0;
            this.status = this.statusCode = e, this.statusType = t, this.info = 1 == t, this.ok = 2 == t, 
            this.redirect = 3 == t, this.clientError = 4 == t, this.serverError = 5 == t, this.error = (4 == t || 5 == t) && this.toError(), 
            this.accepted = 202 == e, this.noContent = 204 == e, this.badRequest = 400 == e, 
            this.unauthorized = 401 == e, this.notAcceptable = 406 == e, this.forbidden = 403 == e, 
            this.notFound = 404 == e;
        };
    }, function(e, t) {
        t.type = function(e) {
            return e.split(/ *; */).shift();
        }, t.params = function(e) {
            return e.split(/ *; */).reduce(function(e, t) {
                var n = t.split(/ *= */), r = n.shift(), i = n.shift();
                return r && i && (e[r] = i), e;
            }, {});
        }, t.parseLinks = function(e) {
            return e.split(/ *, */).reduce(function(e, t) {
                var n = t.split(/ *; */), r = n[0].slice(1, -1);
                return e[n[1].split(/ *= */)[1].slice(1, -1)] = r, e;
            }, {});
        }, t.cleanHeader = function(e, t) {
            return delete e["content-type"], delete e["content-length"], delete e["transfer-encoding"], 
            delete e.host, t && delete e.cookie, e;
        };
    }, function(e, t) {}, function(e, t, n) {
        n(22), e.exports = n(23);
    } ]);
});