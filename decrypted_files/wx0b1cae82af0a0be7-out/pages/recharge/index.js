var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/api"));

getApp();

Page({
    data: {
        recharge: "",
        focusStatus: 0,
        rechargeMenus: [],
        currIndex: 0
    },
    onLoad: function() {
        var t = this;
        e.default.rechargeMenus("/charge/templateList").then(function(e) {
            t.setData({
                rechargeMenus: e.result,
                recharge: parseInt(e.result[0].price)
            });
        });
    },
    changeMenus: function(e) {
        var t = e.currentTarget.dataset.index;
        "null" == this.data.rechargeMenus[t].templateId ? (this.data.recharge = "", this.data.focusStatus = Date.now()) : this.data.recharge = parseInt(this.data.rechargeMenus[t].price), 
        this.setData({
            currIndex: t,
            recharge: this.data.recharge,
            focusStatus: this.data.focusStatus
        });
    },
    focus: function() {
        this.setData({
            currIndex: this.data.rechargeMenus.length - 1,
            recharge: ""
        });
    },
    recharge: function() {
        wx.showToast({
            title: "暂未开通，敬请期待",
            icon: "success",
            duration: 1e3,
            success: function() {
                console.log("chenggong");
            }
        });
    }
});