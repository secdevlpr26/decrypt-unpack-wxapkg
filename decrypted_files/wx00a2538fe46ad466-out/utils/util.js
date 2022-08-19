function t(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}

function e(t, e) {
    return (t = t.toString()).length < e ? "0" + t : t;
}

module.exports = {
    formatTime: function(e) {
        var n = e.getFullYear(), r = e.getMonth() + 1, o = e.getDate(), i = e.getHours(), u = e.getMinutes(), a = e.getSeconds();
        return [ n, r, o ].map(t).join("/") + " " + [ i, u, a ].map(t).join(":");
    },
    rpxToPx: function(t) {
        var e = 1;
        return wx.getSystemInfo({
            success: function(t) {
                e = t.screenWidth / 750;
            }
        }), t * e;
    },
    formatFloat: function(t, e) {
        return e = isNaN(e) ? 2 : e, Number(Number(t).toFixed(e));
    },
    timestampToDate: function(t) {
        var n = new Date();
        return n.setTime(t), n.getFullYear() + "-" + (n.getMonth() + 1) + "-" + n.getDate() + " " + e(n.getHours()) + ":" + e(n.getMinutes(), 2) + ":" + e(n.getSeconds(), 2);
    },
    timestampToLast: function(t) {
        var e = new Date(), n = new Date();
        n.setTime(t);
        var r = Math.floor((n.getTime() - e.getTime()) / 864e5), o = Math.floor((n.getTime() - e.getTime()) / 36e5);
        return r < 1 ? o + "小时" : r + "天";
    }
};