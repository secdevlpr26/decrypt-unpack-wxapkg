function t(t, i, e) {
    return i in t ? Object.defineProperty(t, i, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[i] = e, t;
}

function i(t, i) {
    if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function() {
    function t(t, i) {
        for (var e = 0; e < i.length; e++) {
            var n = i[e];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(i, e, n) {
        return e && t(i.prototype, e), n && t(i, n), i;
    };
}(), n = function() {
    function n() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        i(this, n), Object.assign(this, {
            options: t
        }), this.__init();
    }
    return e(n, [ {
        key: "__init",
        value: function() {
            this.page = getCurrentPages()[getCurrentPages().length - 1], this.setData = this.page.setData.bind(this.page), 
            this.__initState();
        }
    }, {
        key: "__initState",
        value: function() {
            this.options.data && this.__initData(), this.options.methods && this.__initMethods();
        }
    }, {
        key: "__initData",
        value: function() {
            var i = this.options.scope, e = this.options.data;
            if (this._data = {}, !this.isEmptyObject(e)) for (var n in e) e.hasOwnProperty(n) && ("function" == typeof e[n] ? e[n] = e[n].bind(this) : this._data[n] = e[n]);
            this.page.setData(t({}, "" + i, this._data));
        }
    }, {
        key: "__initMethods",
        value: function() {
            var i = this.options.scope, e = this.options.methods;
            if (!this.isEmptyObject(e)) for (var n in e) e.hasOwnProperty(n) && "function" == typeof e[n] && (this[n] = e[n] = e[n].bind(this), 
            this.page[i + "." + n] = e[n], this.setData(t({}, i + "." + n, i + "." + n)));
        }
    }, {
        key: "getComponentData",
        value: function() {
            var t = this.page.data;
            return (this.options.scope && this.options.scope.split(".")).forEach(function(i, e) {
                t = t[i];
            }), t;
        }
    }, {
        key: "isEmptyObject",
        value: function(t) {
            for (var i in t) return !1;
            return !0;
        }
    }, {
        key: "setVisible",
        value: function() {
            var i, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "weui-animate-fade-in";
            this.setData((i = {}, t(i, this.options.scope + ".animateCss", e), t(i, this.options.scope + ".visible", !0), 
            i));
        }
    }, {
        key: "setHidden",
        value: function() {
            var i = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "weui-animate-fade-out", n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 300;
            this.setData(t({}, this.options.scope + ".animateCss", e)), setTimeout(function() {
                i.setData(t({}, i.options.scope + ".visible", !1));
            }, n);
        }
    } ]), n;
}();

exports.default = n;