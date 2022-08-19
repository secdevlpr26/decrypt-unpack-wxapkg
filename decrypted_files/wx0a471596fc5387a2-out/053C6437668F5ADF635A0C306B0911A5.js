function t(t) {
    return (t = t.toString())[1] ? t : "0" + t;
}

module.exports = {
    formatTime: function(e) {
        var n = e.getFullYear(), r = e.getMonth() + 1, o = e.getDate(), a = e.getHours(), u = e.getMinutes(), i = e.getSeconds();
        return [ n, r, o ].map(t).join("/") + " " + [ a, u, i ].map(t).join(":");
    },
    formatDate: function(e, n) {
        var r = e.getFullYear(), o = e.getMonth() + 1, a = e.getDate();
        return "start" === n ? [ r, o, 1 ].map(t).join("-") : "end" === n ? [ r, o + 1, 1 ].map(t).join("-") : [ r, o, a ].map(t).join("-");
    },
    currentTime: function() {
        var e = new Date(Date.now());
        return [ e.getHours(), e.getMinutes(), e.getSeconds() ].map(t).join(":");
    },
    currentDateTime: function() {
        var e = new Date(Date.now()), n = e.getFullYear(), r = e.getMonth() + 1, o = e.getDate(), a = e.getHours(), u = e.getMinutes(), i = e.getSeconds();
        return [ n, r, o ].map(t).join("-") + " " + [ a, u, i ].map(t).join(":");
    }
};