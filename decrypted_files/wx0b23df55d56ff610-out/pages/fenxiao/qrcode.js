var e, r = require("../../utils/server");

Page({
    onLoad: function(t) {
        e = t.user_id;
        var a = this;
        r.getJSON("/User/qrcode", {
            user_id: e
        }, function(e) {
            var r = e.data.qrcode;
            a.setData({
                path: r
            });
        });
    },
    show: function(e) {
        var r = this.data.path;
        wx.previewImage({
            current: "",
            urls: [ r ]
        });
    },
    onShareAppMessage: function() {
        return {
            title: "快优送便利店",
            desc: "快优送便利店",
            path: "/pages/user_center/user_center?user_id=" + e
        };
    }
});