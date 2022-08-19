module.exports = {
    needRegister: function() {
        wx.showModal({
            title: "无访问权限！",
            content: "该模块需进行实名认证！是否进行实名认证？",
            success: function(t) {
                t.confirm && wx.navigateTo({
                    url: "/pages/mine/auth/auth"
                });
            }
        });
    },
    waitCheck: function() {
        wx.showModal({
            title: "温馨提示",
            content: "实名认证成功，但未通过审核，请耐心等待！"
        });
    }
};