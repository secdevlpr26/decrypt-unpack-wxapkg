Page({
    data: {
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        tip: "应官方要求，请手动授权登录",
        id: "",
        openid: ""
    },
    onLoad: function(e) {
        console.log(e), e.id && this.setData({
            id: e.id
        });
    },
    bindGetUserInfo: function(e) {
        var t = this, i = e.detail.userInfo;
        console.log(t.data.page), i ? t.data.id ? wx.redirectTo({
            url: "/pages/login/login?id=" + t.data.id
        }) : wx.redirectTo({
            url: "/pages/login/login"
        }) : t.setData({
            tip: "请确认授权登录"
        });
    }
});