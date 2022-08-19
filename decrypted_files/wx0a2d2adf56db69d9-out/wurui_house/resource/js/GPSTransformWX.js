function t(t, a) {
    if (!(t instanceof a)) throw new TypeError("Cannot call a class as a function");
}

var a = function() {
    function t(t, a) {
        for (var n = 0; n < a.length; n++) {
            var r = a[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(a, n, r) {
        return n && t(a.prototype, n), r && t(a, r), a;
    };
}(), n = function() {
    function n(a) {
        t(this, n);
    }
    return a(n, [ {
        key: "transform",
        value: function(t, a) {
            var n = 6378245, r = .006693421622965943;
            if (this.outOfChina(t, a)) return [ t, a ];
            var e = this.transformLat(a - 105, t - 35), h = this.transformLon(a - 105, t - 35), o = t / 180 * Math.PI, s = 1 - r * (s = Math.sin(o)) * s, i = Math.sqrt(s);
            e = 180 * e / (n * (1 - r) / (s * i) * Math.PI), h = 180 * h / (n / i * Math.cos(o) * Math.PI);
            var u = Number(t) + Number(e), M = Number(a) + Number(h);
            return console.log("纬度" + e + "**" + t + " ****" + u), console.log("经度" + h + "**" + a + " ****" + M), 
            [ u, M ];
        }
    }, {
        key: "outOfChina",
        value: function(t, a) {
            return a < 72.004 || a > 137.8347 || (t < .8293 || t > 55.8271);
        }
    }, {
        key: "transformLat",
        value: function(t, a) {
            console.log("x=" + t + " y=" + a);
            var n = 2 * t - 100 + 3 * a + .2 * a * a + .1 * t * a + .2 * Math.sqrt(Math.abs(t));
            return n += 2 * (20 * Math.sin(6 * t * Math.PI) + 20 * Math.sin(2 * t * Math.PI)) / 3, 
            n += 2 * (20 * Math.sin(a * Math.PI) + 40 * Math.sin(a / 3 * Math.PI)) / 3, n += 2 * (160 * Math.sin(a / 12 * Math.PI) + 320 * Math.sin(a * Math.PI / 30)) / 3;
        }
    }, {
        key: "transformLon",
        value: function(t, a) {
            var n = 300 + t + 2 * a + .1 * t * t + .1 * t * a + .1 * Math.sqrt(Math.abs(t));
            return n += 2 * (20 * Math.sin(6 * t * Math.PI) + 20 * Math.sin(2 * t * Math.PI)) / 3, 
            n += 2 * (20 * Math.sin(t * Math.PI) + 40 * Math.sin(t / 3 * Math.PI)) / 3, n += 2 * (150 * Math.sin(t / 12 * Math.PI) + 300 * Math.sin(t / 30 * Math.PI)) / 3;
        }
    } ]), n;
}();

module.exports.GPSTransformWX = n;