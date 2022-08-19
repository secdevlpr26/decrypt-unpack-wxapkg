var a = getApp();

Page({
    data: {
        accountType: []
    },
    onLoad: function(a) {},
    onShow: function() {
        var t = wx.getStorageSync("accountType" + a.globalData.autoId);
        t && this.setData({
            accountType: t
        });
    },
    accountType: function() {
        wx.navigateTo({
            url: "../account-select/account-select"
        });
    },
    formSubmit: function(t) {
        var e = this;
        "支付宝" == e.data.accountType.bankName && (t.detail.value.bankInfo = "null");
        var n = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        e.data.accountType.id ? "" == t.detail.value.bankInfo && "支付宝" != e.data.accountType.bankName ? a.hint("请输入您的开户行") : "" == t.detail.value.name ? a.hint("请输入您的真实姓名") : n.test(t.detail.value.card) ? "" == t.detail.value.account ? a.hint("请输入您的账号") : wx.request({
            url: a.globalData.comUrl + "dis_saveApplyCashAccount",
            data: {
                bankId: e.data.accountType.id,
                applyCashName: t.detail.value.name,
                idCard: t.detail.value.card,
                account: t.detail.value.account,
                memberId: a.getMemberId(),
                bankInfo: t.detail.value.bankInfo
            },
            success: function(t) {
                console.log(t.data), 1 == t.data.code ? (wx.showToast({
                    title: "提交成功",
                    icon: "success",
                    duration: 2e3
                }), wx.removeStorageSync("accountType" + a.globalData.autoId), setTimeout(function() {
                    wx.navigateBack({
                        beta: 1
                    });
                }, 2e3)) : wx.showToast({
                    title: "提交失败",
                    icon: "none",
                    duration: 2e3
                });
            }
        }) : a.hint("身份证号填写有误") : a.hint("请选择银行");
    }
});