var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/api"));

getApp();

Page({
    data: {
        userInfo: {
            headImage: "/images/moren@3x.png",
            nickName: "昵称",
            phone: "",
            coupons: 0
        }
    },
    onShow: function(a) {
        var n = this;
        e.default.commonUserInfo("/user/myInfo").then(function(a) {
            var o = n, t = a.result;
            t.headImage && (n.data.userInfo.headImage = t.headImage), t.nickName && (n.data.userInfo.nickName = t.nickName), 
            t.phone && (n.data.userInfo.phone = t.phone), n.data.userInfo.coupons = t.coupons, 
            n.data.userInfo.hotline = t.linkPhone, n.data.userInfo.balance = parseFloat(t.balance).toFixed(2), 
            n.setData({
                userInfo: n.data.userInfo
            });
            var u = a.result.roles;
            u.length > 1 && u.forEach(function(a) {
                1 == a.isCurrent && "工人版" == a.roleName && e.default.changeRole("/user/changeRole").then(function(e) {
                    o.data.userInfo.coupons = e.result.coupons, o.data.userInfo.balance = parseFloat(e.result.balance).toFixed(2), 
                    o.setData({
                        userInfo: o.data.userInfo
                    });
                });
            });
        });
    },
    callPhone: function() {
        wx.makePhoneCall({
            phoneNumber: this.data.userInfo.hotline
        });
    }
});