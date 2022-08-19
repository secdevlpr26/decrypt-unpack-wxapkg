function t(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}

module.exports = {
    formatTime: function(e) {
        var n = e.getFullYear(), r = e.getMonth() + 1, o = e.getDate(), u = e.getHours(), i = e.getMinutes(), c = e.getSeconds();
        return [ n, r, o ].map(t).join("/") + " " + [ u, i, c ].map(t).join(":");
    },
    formatNumber: t,
    merge: function(t) {
        var e = [];
        return t.reduce(function(t, e) {
            return t.concat(e);
        }).forEach(function(t) {
            -1 == e.indexOf(t) && e.push(t);
        }), e;
    }
};