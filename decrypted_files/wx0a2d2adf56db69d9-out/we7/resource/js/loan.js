function t(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}

module.exports = {
    formatTime: function(r) {
        var a = r.getFullYear(), n = r.getMonth() + 1, o = r.getDate(), e = r.getHours(), u = r.getMinutes(), s = r.getSeconds();
        return [ a, n, o ].map(t).join("/") + " " + [ e, u, s ].map(t).join(":");
    },
    Borrow: function(t, r, a) {
        a = parseInt(a), t = parseFloat(t);
        var n = 12 * a, o = 10 * (r = parseFloat(r)) / 12 * .001, e = Math.pow(1 + o, n), u = t * (o * (e / (e - 1))), s = u * n, i = s - t;
        i = Math.round(100 * i) / 100, u = Math.round(100 * u) / 100, s = Math.round(100 * s) / 100;
        var p = [];
        return p[0] = u, p[1] = s, p[2] = 0, p[3] = i, p;
    },
    Floan: function(t, r, a) {
        a = parseInt(a), t = parseFloat(t) / 100;
        var n = (r = 1e4 * parseFloat(r)) * t / 12, o = 12 * n, e = r * t * a, u = e + r, s = [];
        return s[0] = Math.round(100 * o) / 100, s[1] = Math.round(100 * n) / 100, s[2] = Math.round(100 * e) / 100, 
        s[3] = Math.round(100 * u) / 100, s;
    }
};