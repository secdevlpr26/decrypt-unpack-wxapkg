function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/api")), a = t(require("../../common/toast/toast"));

getApp();

Page({
    data: {
        nickName: ""
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("nick_name");
        this.setData({
            nickName: e
        }), wx.removeStorageSync("nick_name");
    },
    updataNickName: function(t) {
        t ? e.default.updateUserInfo("/user/updateInfo", {
            nickName: t
        }).then(function(t) {
            wx.showToast({
                title: "修改成功",
                icon: "success",
                duration: 1e3,
                success: function() {
                    setTimeout(function() {
                        wx.navigateBack();
                    }, 1e3);
                }
            });
        }) : a.default.show({
            type: "text",
            timer: 1500,
            text: "请输入昵称"
        });
    },
    formSubmit: function(t) {
        var e = t.detail.value;
        this.updataNickName(e.nickName);
    },
    editNickName: function(t) {
        this.updataNickName(t.detail.value);
    }
});