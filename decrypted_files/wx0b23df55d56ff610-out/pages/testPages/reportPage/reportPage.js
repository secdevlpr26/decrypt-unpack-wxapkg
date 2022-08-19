var a = getApp();

Page({
    data: {
        dataArr: [],
        brand: "",
        model: "",
        system: "",
        dataArrStr: ""
    },
    onLoad: function(t) {
        if (t.model) this.setData({
            brand: t.brand,
            model: t.model,
            system: t.system
        }); else {
            var e = a.globalData.wxDeviceInfo;
            this.setData({
                brand: e.brand,
                model: e.model.split("<")[0],
                system: e.system
            });
        }
        if (t.dataArr) {
            var r = t.dataArr.split("，");
            r.map(function(a, t, e) {
                r[t] = JSON.parse(a);
            }), this.setData({
                dataArr: r,
                dataArrStr: t.dataArr
            });
        }
    },
    goToRepairHome: function() {
        wx.switchTab({
            url: "/pages/repair/home/home"
        });
    },
    goToTestHome: function() {
        wx.redirectTo({
            url: "../luopanTest/luopanTest"
        });
    },
    onShareAppMessage: function() {
        var t = this.data.brand, e = this.data.model, r = this.data.system, s = this.data.dataArrStr;
        return {
            title: a.globalData.wxUserInfo ? a.globalData.wxUserInfo.nickName + "的手机检测报告" : "Hi维修手机检测报告",
            path: "pages/testPages/reportPage/reportPage?dataArr=" + s + "&brand=" + t + "&model=" + e + "&system=" + r,
            imageUrl: "../img/png.png",
            success: function(a) {},
            fail: function(a) {}
        };
    }
});