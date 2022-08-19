function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function e(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function n(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

var r = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
    };
}(), o = require("A86AD406668F5ADFCE0CBC010C2911A5.js"), i = function(i) {
    function s() {
        return t(this, s), e(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments));
    }
    return n(s, o.Object), r(s, [ {
        key: "checkType",
        get: function() {
            return this.get("checkType");
        },
        set: function(t) {
            this.set("checkType", t);
        }
    }, {
        key: "timestamp",
        get: function() {
            return this.get("timestamp");
        },
        set: function(t) {
            this.set("timestamp", t);
        }
    }, {
        key: "location",
        get: function() {
            return this.get("location");
        },
        set: function(t) {
            this.set("location", t);
        }
    }, {
        key: "address",
        get: function() {
            return this.get("address");
        },
        set: function(t) {
            this.set("address", t);
        }
    }, {
        key: "user",
        get: function() {
            return this.get("user");
        },
        set: function(t) {
            this.set("user", t);
        }
    }, {
        key: "geo",
        get: function() {
            return this.get("geo");
        },
        set: function(t) {
            this.set("geo", t);
        }
    } ]), s;
}();

o.Object.register(i, "Check"), module.exports = i;