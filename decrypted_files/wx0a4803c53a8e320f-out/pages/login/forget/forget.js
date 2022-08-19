var t = getApp(), a = "";

Page({
    data: {
        styleConfig: t.globalData.styleConfig
    },
    sure: function() {
        var e = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if ("" != a) if (e.test(a)) {
            var s = this;
            wx.request({
                url: t.globalData.comUrl + "tabs_memRetrievePwd.action",
                data: {
                    appId: t.globalData.projectInfo.appId,
                    email: a
                },
                method: "GET",
                success: function(a) {
                    var e = t.getJsonData(a.data);
                    console.log(e), "0" == e.status ? s.tips(e.reason) : s.success("提交成功");
                },
                fail: function(a) {
                    t.hint();
                }
            });
        } else this.warn("邮箱格式有误"); else this.warn("邮箱不能为空");
    },
    emailInput: function(t) {
        a = t.detail.value;
    },
    tips: function(t) {
        wx.showToast({
            title: t,
            image: "../../../img/warn.png",
            duration: 2e3
        });
    },
    success: function(t) {
        wx.showToast({
            title: t,
            icon: "success",
            duration: 2e3
        });
    },
    warn: function(t) {
        wx.showToast({
            title: t,
            image: "../../../img/warn.png",
            duration: 2e3
        });
    }
});