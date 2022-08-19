var t = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
};

module.exports = {
    formatTime: function(e) {
        var r = e.getFullYear(), a = e.getMonth() + 1, n = e.getDate(), o = e.getHours(), f = e.getMinutes(), u = e.getSeconds();
        return [ r, a, n ].map(t).join("/") + " " + [ o, f, u ].map(t).join(":");
    },
    formatDate: function(e) {
        return [ e.getFullYear(), e.getMonth() + 1, e.getDate() ].map(t).join("-");
    },
    randomColor: function() {
        return [ "#ef5b9c", "#bd6758", "#f26522", "#f15a22", "#f58220", "#dea32c", "#ffe600", "#5c7a29", "#78a355", "#1d953f", "#2b4490", "#585eaa", "#8552a1", "#33a3dc", "#4e72b8", "#225a1f", "#f15a22" ][Math.floor(17 * Math.random())];
    },
    removeArrayItem: function(t, e) {
        for (var r = t.length, a = 0; a < r; a++) if (t[a] == e) return 0 == a ? (t.shift(), 
        t) : a == r - 1 ? (t.pop(), t) : (t.splice(a, 1), t);
    }
};