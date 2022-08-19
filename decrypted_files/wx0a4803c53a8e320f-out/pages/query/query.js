getApp();

Page({
    data: {},
    onLoad: function(t) {},
    onShow: function() {},
    onHide: function() {},
    formSubmit: function(t) {
        "" != t.detail.value.branchName ? "" != t.detail.value.mainProject ? "" != t.detail.value.phone ? "" != t.detail.value.textCon ? "" != t.detail.value.email ? (wx.showToast({
            title: "正在提交...",
            icon: "loading",
            duration: 2e3,
            mask: !0
        }), setTimeout(function() {
            wx.showToast({
                title: "提交成功",
                icon: "success",
                duration: 2e3,
                mask: !0,
                success: function() {
                    wx.navigateBack({
                        delta: 1
                    });
                }
            });
        }, 2e3)) : this.warn("邮箱不能为空") : this.warn("请输入您的问题描述!") : this.warn("请输入您的联系方式!!") : this.warn("请输入您的年龄!") : this.warn("请输入您的名字!");
    },
    warn: function(t) {
        wx.showModal({
            title: "提示",
            content: t,
            showCancel: !1
        });
    }
});