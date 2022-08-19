module.exports = {
    show: function(t) {
        var e = this;
        e.setData({
            message: {
                content: t.content,
                icon: t.icon,
                visiable: !0
            }
        }), setTimeout(function() {
            e.setData({
                message: {
                    visiable: !1
                }
            });
        }, t.duration || 1500);
    },
    hide: function() {
        this.setData({
            message: {
                visiable: !1
            }
        });
    }
};