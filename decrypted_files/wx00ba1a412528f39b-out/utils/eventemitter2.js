var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function(t) {
    function i() {
        this._events = {}, this._conf && s.call(this, this._conf);
    }
    function s(e) {
        e ? (this._conf = e, e.delimiter && (this.delimiter = e.delimiter), this._maxListeners = e.maxListeners !== t ? e.maxListeners : a, 
        e.wildcard && (this.wildcard = e.wildcard), e.newListener && (this.newListener = e.newListener), 
        e.verboseMemoryLeak && (this.verboseMemoryLeak = e.verboseMemoryLeak), this.wildcard && (this.listenerTree = {})) : this._maxListeners = a;
    }
    function n(e, t) {
        var i = "(node) warning: possible EventEmitter memory leak detected. " + e + " listeners added. Use emitter.setMaxListeners() to increase limit.";
        if (this.verboseMemoryLeak && (i += " Event name: " + t + "."), "undefined" != typeof process && process.emitWarning) {
            var s = new Error(i);
            s.name = "MaxListenersExceededWarning", s.emitter = this, s.count = e, process.emitWarning(s);
        } else console.error(i), console.trace && console.trace();
    }
    function r(e) {
        this._events = {}, this.newListener = !1, this.verboseMemoryLeak = !1, s.call(this, e);
    }
    function l(e, t, i, s) {
        if (!i) return [];
        var n, r, o, h, a, c, f, p = [], u = t.length, _ = t[s], y = t[s + 1];
        if (s === u && i._listeners) {
            if ("function" == typeof i._listeners) return e && e.push(i._listeners), [ i ];
            for (n = 0, r = i._listeners.length; n < r; n++) e && e.push(i._listeners[n]);
            return [ i ];
        }
        if ("*" === _ || "**" === _ || i[_]) {
            if ("*" === _) {
                for (o in i) "_listeners" !== o && i.hasOwnProperty(o) && (p = p.concat(l(e, t, i[o], s + 1)));
                return p;
            }
            if ("**" === _) {
                (f = s + 1 === u || s + 2 === u && "*" === y) && i._listeners && (p = p.concat(l(e, t, i, u)));
                for (o in i) "_listeners" !== o && i.hasOwnProperty(o) && ("*" === o || "**" === o ? (i[o]._listeners && !f && (p = p.concat(l(e, t, i[o], u))), 
                p = p.concat(l(e, t, i[o], s))) : p = o === y ? p.concat(l(e, t, i[o], s + 2)) : p.concat(l(e, t, i[o], s)));
                return p;
            }
            p = p.concat(l(e, t, i[_], s + 1));
        }
        if ((h = i["*"]) && l(e, t, h, s + 1), a = i["**"]) if (s < u) {
            a._listeners && l(e, t, a, u);
            for (o in a) "_listeners" !== o && a.hasOwnProperty(o) && (o === y ? l(e, t, a[o], s + 2) : o === _ ? l(e, t, a[o], s + 1) : ((c = {})[o] = a[o], 
            l(e, t, {
                "**": c
            }, s + 1)));
        } else a._listeners ? l(e, t, a, u) : a["*"] && a["*"]._listeners && l(e, t, a["*"], u);
        return p;
    }
    function o(e, i) {
        for (var s = 0, r = (e = "string" == typeof e ? e.split(this.delimiter) : e.slice()).length; s + 1 < r; s++) if ("**" === e[s] && "**" === e[s + 1]) return;
        for (var l = this.listenerTree, o = e.shift(); o !== t; ) {
            if (l[o] || (l[o] = {}), l = l[o], 0 === e.length) return l._listeners ? ("function" == typeof l._listeners && (l._listeners = [ l._listeners ]), 
            l._listeners.push(i), !l._listeners.warned && this._maxListeners > 0 && l._listeners.length > this._maxListeners && (l._listeners.warned = !0, 
            n.call(this, l._listeners.length, o))) : l._listeners = i, !0;
            o = e.shift();
        }
        return !0;
    }
    var h = Array.isArray ? Array.isArray : function(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
    }, a = 10;
    r.EventEmitter2 = r, r.prototype.delimiter = ".", r.prototype.setMaxListeners = function(e) {
        e !== t && (this._maxListeners = e, this._conf || (this._conf = {}), this._conf.maxListeners = e);
    }, r.prototype.event = "", r.prototype.once = function(e, t) {
        return this._once(e, t, !1);
    }, r.prototype.prependOnceListener = function(e, t) {
        return this._once(e, t, !0);
    }, r.prototype._once = function(e, t, i) {
        return this._many(e, 1, t, i), this;
    }, r.prototype.many = function(e, t, i) {
        return this._many(e, t, i, !1);
    }, r.prototype.prependMany = function(e, t, i) {
        return this._many(e, t, i, !0);
    }, r.prototype._many = function(e, t, i, s) {
        function n() {
            return 0 == --t && r.off(e, n), i.apply(this, arguments);
        }
        var r = this;
        if ("function" != typeof i) throw new Error("many only accepts instances of Function");
        return n._origin = i, this._on(e, n, s), r;
    }, r.prototype.emit = function() {
        this._events || i.call(this);
        var e = arguments[0];
        if ("newListener" === e && !this.newListener && !this._events.newListener) return !1;
        var t, s, n, r, o, h = arguments.length;
        if (this._all && this._all.length) {
            if (o = this._all.slice(), h > 3) for (t = new Array(h), r = 0; r < h; r++) t[r] = arguments[r];
            for (n = 0, s = o.length; n < s; n++) switch (this.event = e, h) {
              case 1:
                o[n].call(this, e);
                break;

              case 2:
                o[n].call(this, e, arguments[1]);
                break;

              case 3:
                o[n].call(this, e, arguments[1], arguments[2]);
                break;

              default:
                o[n].apply(this, t);
            }
        }
        if (this.wildcard) {
            o = [];
            var a = "string" == typeof e ? e.split(this.delimiter) : e.slice();
            l.call(this, o, a, this.listenerTree, 0);
        } else {
            if ("function" == typeof (o = this._events[e])) {
                switch (this.event = e, h) {
                  case 1:
                    o.call(this);
                    break;

                  case 2:
                    o.call(this, arguments[1]);
                    break;

                  case 3:
                    o.call(this, arguments[1], arguments[2]);
                    break;

                  default:
                    for (t = new Array(h - 1), r = 1; r < h; r++) t[r - 1] = arguments[r];
                    o.apply(this, t);
                }
                return !0;
            }
            o && (o = o.slice());
        }
        if (o && o.length) {
            if (h > 3) for (t = new Array(h - 1), r = 1; r < h; r++) t[r - 1] = arguments[r];
            for (n = 0, s = o.length; n < s; n++) switch (this.event = e, h) {
              case 1:
                o[n].call(this);
                break;

              case 2:
                o[n].call(this, arguments[1]);
                break;

              case 3:
                o[n].call(this, arguments[1], arguments[2]);
                break;

              default:
                o[n].apply(this, t);
            }
            return !0;
        }
        if (!this._all && "error" === e) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
        return !!this._all;
    }, r.prototype.emitAsync = function() {
        this._events || i.call(this);
        var e = arguments[0];
        if ("newListener" === e && !this.newListener && !this._events.newListener) return Promise.resolve([ !1 ]);
        var t, s, n, r, o, h = [], a = arguments.length;
        if (this._all) {
            if (a > 3) for (t = new Array(a), r = 1; r < a; r++) t[r] = arguments[r];
            for (n = 0, s = this._all.length; n < s; n++) switch (this.event = e, a) {
              case 1:
                h.push(this._all[n].call(this, e));
                break;

              case 2:
                h.push(this._all[n].call(this, e, arguments[1]));
                break;

              case 3:
                h.push(this._all[n].call(this, e, arguments[1], arguments[2]));
                break;

              default:
                h.push(this._all[n].apply(this, t));
            }
        }
        if (this.wildcard) {
            o = [];
            var c = "string" == typeof e ? e.split(this.delimiter) : e.slice();
            l.call(this, o, c, this.listenerTree, 0);
        } else o = this._events[e];
        if ("function" == typeof o) switch (this.event = e, a) {
          case 1:
            h.push(o.call(this));
            break;

          case 2:
            h.push(o.call(this, arguments[1]));
            break;

          case 3:
            h.push(o.call(this, arguments[1], arguments[2]));
            break;

          default:
            for (t = new Array(a - 1), r = 1; r < a; r++) t[r - 1] = arguments[r];
            h.push(o.apply(this, t));
        } else if (o && o.length) {
            if (o = o.slice(), a > 3) for (t = new Array(a - 1), r = 1; r < a; r++) t[r - 1] = arguments[r];
            for (n = 0, s = o.length; n < s; n++) switch (this.event = e, a) {
              case 1:
                h.push(o[n].call(this));
                break;

              case 2:
                h.push(o[n].call(this, arguments[1]));
                break;

              case 3:
                h.push(o[n].call(this, arguments[1], arguments[2]));
                break;

              default:
                h.push(o[n].apply(this, t));
            }
        } else if (!this._all && "error" === e) return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
        return Promise.all(h);
    }, r.prototype.on = function(e, t) {
        return this._on(e, t, !1);
    }, r.prototype.prependListener = function(e, t) {
        return this._on(e, t, !0);
    }, r.prototype.onAny = function(e) {
        return this._onAny(e, !1);
    }, r.prototype.prependAny = function(e) {
        return this._onAny(e, !0);
    }, r.prototype.addListener = r.prototype.on, r.prototype._onAny = function(e, t) {
        if ("function" != typeof e) throw new Error("onAny only accepts instances of Function");
        return this._all || (this._all = []), t ? this._all.unshift(e) : this._all.push(e), 
        this;
    }, r.prototype._on = function(e, t, s) {
        if ("function" == typeof e) return this._onAny(e, t), this;
        if ("function" != typeof t) throw new Error("on only accepts instances of Function");
        return this._events || i.call(this), this.emit("newListener", e, t), this.wildcard ? (o.call(this, e, t), 
        this) : (this._events[e] ? ("function" == typeof this._events[e] && (this._events[e] = [ this._events[e] ]), 
        s ? this._events[e].unshift(t) : this._events[e].push(t), !this._events[e].warned && this._maxListeners > 0 && this._events[e].length > this._maxListeners && (this._events[e].warned = !0, 
        n.call(this, this._events[e].length, e))) : this._events[e] = t, this);
    }, r.prototype.off = function(i, s) {
        function n(i) {
            if (i !== t) {
                var s = Object.keys(i);
                for (var r in s) {
                    var l = s[r], o = i[l];
                    o instanceof Function || "object" !== (void 0 === o ? "undefined" : e(o)) || null === o || (Object.keys(o).length > 0 && n(i[l]), 
                    0 === Object.keys(o).length && delete i[l]);
                }
            }
        }
        if ("function" != typeof s) throw new Error("removeListener only takes instances of Function");
        var r, o = [];
        if (this.wildcard) {
            var a = "string" == typeof i ? i.split(this.delimiter) : i.slice();
            o = l.call(this, null, a, this.listenerTree, 0);
        } else {
            if (!this._events[i]) return this;
            r = this._events[i], o.push({
                _listeners: r
            });
        }
        for (var c = 0; c < o.length; c++) {
            var f = o[c];
            if (r = f._listeners, h(r)) {
                for (var p = -1, u = 0, _ = r.length; u < _; u++) if (r[u] === s || r[u].listener && r[u].listener === s || r[u]._origin && r[u]._origin === s) {
                    p = u;
                    break;
                }
                if (p < 0) continue;
                return this.wildcard ? f._listeners.splice(p, 1) : this._events[i].splice(p, 1), 
                0 === r.length && (this.wildcard ? delete f._listeners : delete this._events[i]), 
                this.emit("removeListener", i, s), this;
            }
            (r === s || r.listener && r.listener === s || r._origin && r._origin === s) && (this.wildcard ? delete f._listeners : delete this._events[i], 
            this.emit("removeListener", i, s));
        }
        return n(this.listenerTree), this;
    }, r.prototype.offAny = function(e) {
        var t, i = 0, s = 0;
        if (e && this._all && this._all.length > 0) {
            for (i = 0, s = (t = this._all).length; i < s; i++) if (e === t[i]) return t.splice(i, 1), 
            this.emit("removeListenerAny", e), this;
        } else {
            for (i = 0, s = (t = this._all).length; i < s; i++) this.emit("removeListenerAny", t[i]);
            this._all = [];
        }
        return this;
    }, r.prototype.removeListener = r.prototype.off, r.prototype.removeAllListeners = function(e) {
        if (0 === arguments.length) return !this._events || i.call(this), this;
        if (this.wildcard) for (var t = "string" == typeof e ? e.split(this.delimiter) : e.slice(), s = l.call(this, null, t, this.listenerTree, 0), n = 0; n < s.length; n++) s[n]._listeners = null; else this._events && (this._events[e] = null);
        return this;
    }, r.prototype.listeners = function(e) {
        if (this.wildcard) {
            var t = [], s = "string" == typeof e ? e.split(this.delimiter) : e.slice();
            return l.call(this, t, s, this.listenerTree, 0), t;
        }
        return this._events || i.call(this), this._events[e] || (this._events[e] = []), 
        h(this._events[e]) || (this._events[e] = [ this._events[e] ]), this._events[e];
    }, r.prototype.eventNames = function() {
        return Object.keys(this._events);
    }, r.prototype.listenerCount = function(e) {
        return this.listeners(e).length;
    }, r.prototype.listenersAny = function() {
        return this._all ? this._all : [];
    }, "function" == typeof define && define.amd ? define(function() {
        return r;
    }) : "object" === ("undefined" == typeof exports ? "undefined" : e(exports)) ? module.exports = r : window.EventEmitter2 = r;
}();