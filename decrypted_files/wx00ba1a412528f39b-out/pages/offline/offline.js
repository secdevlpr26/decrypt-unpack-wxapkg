var e = require("../../utils/api/offline");

Page({
    data: {
        username: "",
        nickname: ""
    },
    onLoad: function() {
        var n = this;
        (0, e.getUserName)({}, function(e) {
            console.log("-----接口返回数据", e), n.setData({
                username: e.username,
                nickname: e.nickname
            });
        });
    },
    goConcat: function() {
        wx.navigateTo({
            url: "../webview/index?url=" + encodeURIComponent("https://mp.weixin.qq.com/wxatrade/minishop/index?username=" + this.data.username + "&nickname=" + this.data.nickname + "&from=1&step=step2&source=trade#wechat_redirect")
        });
    },
    goComplain: function() {
        wx.navigateTo({
            url: "../webview/index?url=" + encodeURIComponent("https://mp.weixin.qq.com/mp/infringement?username=" + this.data.username + "&from=1&step=step2&source=trade#wechat_redirect")
        });
    }
});