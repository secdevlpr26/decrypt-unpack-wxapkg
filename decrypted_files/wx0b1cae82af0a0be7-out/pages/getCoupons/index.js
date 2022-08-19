function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = e(require("../../utils/api")), i = e(require("../../common/toast/toast"));

getApp();

Page({
    data: {
        phone: "",
        inviterId: ""
    },
    validatePhone: function(e) {
        var t = e.detail.value;
        return this.data.phone = t.replace(/\D+/g, ""), t.replace(/\D+/g, "");
    },
    onLoad: function(e) {
        wx.hideLoading(), this.data.inviterId = e.inviterId, console.log(e);
    },
    getEnter: function() {
        /^1[34578]\d{9}$/.test(this.data.phone) ? (wx.showLoading({
            title: "",
            mask: !0
        }), t.default.invitedEnter("/user/share", {
            inviterId: this.data.inviterId,
            phone: this.data.phone
        }).then(function(e) {
            console.log(e), setTimeout(function() {
                wx.hideLoading();
            }, 200), 0 == e.err_code && (wx.showToast({
                title: "领取成功",
                icon: "success",
                duration: 1e3
            }), setTimeout(function() {
                wx.reLaunch({
                    url: "/pages/index/index"
                });
            }, 600));
        }, function(e) {
            console.log(e), wx.hideLoading();
        })) : i.default.show({
            type: "text",
            timer: 1500,
            text: "请填写正确的手机号"
        });
    }
});