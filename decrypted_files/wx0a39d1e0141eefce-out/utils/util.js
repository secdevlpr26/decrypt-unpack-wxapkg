var t = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
};

module.exports = {
    formatTime: function(n) {
        var e = n.getFullYear(), o = n.getMonth() + 1, r = n.getDate(), i = n.getHours(), u = n.getMinutes(), c = n.getSeconds();
        return [ e, o, r ].map(t).join("/") + " " + [ i, u, c ].map(t).join(":");
    },
    wxPromisify: function(t) {
        return function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return new Promise(function(e, o) {
                n.success = function(t) {
                    e(t);
                }, n.fail = function(t) {
                    o(t);
                }, t(n);
            });
        };
    }
};