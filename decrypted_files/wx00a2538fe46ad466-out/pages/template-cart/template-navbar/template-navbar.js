var t = function(t, a, n) {
    var e = t.data.navbar;
    e.current = a, t.setData({
        navbar: e
    }), n && n(a);
};

module.exports = {
    change: t,
    tap: function(a, n, e) {
        var r = Number(n.currentTarget.dataset.index);
        t(a, r, e);
    },
    init: function(t, a) {
        wx.getSystemInfo({
            success: function(n) {
                var e = t.data.navbar;
                e.sliderWidth = n.windowWidth / e.list.length, t.setData({
                    navbar: e
                }), a && a();
            }
        });
    }
};