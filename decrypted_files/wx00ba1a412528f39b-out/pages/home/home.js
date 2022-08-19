getApp();

var t = require("../../utils/api/order.js");

require("../../utils/utils.js");

Page({
    data: {
        avatarUrl: "",
        nickName: " ",
        count: {}
    },
    onLoad: function(t) {
        var n = this;
        wx.getUserInfo({
            success: function(t) {
                console.log(t);
                var a = t.userInfo;
                n.setData({
                    avatarUrl: a.avatarUrl,
                    nickName: a.nickName
                });
            }
        });
    },
    onShow: function() {
        this.updateCount();
    },
    updateCount: function() {
        var n = this, a = [ "2", "3_4" ];
        t.getCount({
            status: a.join(";")
        }, function(t) {
            var a = {}, r = !0, o = !1, i = void 0;
            try {
                for (var u, e = t.items[Symbol.iterator](); !(r = (u = e.next()).done); r = !0) {
                    var s = u.value;
                    a[s.status_string] = s.count;
                }
            } catch (t) {
                t = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(t);
                o = !0, i = t;
            } finally {
                try {
                    !r && e.return && e.return();
                } finally {
                    if (o) throw i;
                }
            }
            n.setData({
                count: a
            });
        }, function() {}, function() {}, function() {});
    }
});