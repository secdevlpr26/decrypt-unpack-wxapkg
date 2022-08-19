module.exports = {
    isEmptyObject: function(r) {
        for (var t in r) return !1;
        return !0;
    }
};