Page({
    data: {
        latitude: "",
        longitude: "",
        markers: [],
        dataArr: []
    },
    onLoad: function(t) {
        var a = this;
        if (wx.setNavigationBarTitle({
            title: "GPS定位中"
        }), wx.showNavigationBarLoading(), wx.showLoading({
            title: "GPS定位中"
        }), wx.getLocation({
            type: "gcj02",
            success: function(t) {
                var i = t.latitude, e = t.longitude;
                t.speed, t.accuracy, a.setData({
                    latitude: i,
                    longitude: e,
                    markers: [ {
                        latitude: i,
                        longitude: e,
                        iconPath: "../../../img/mark.png",
                        width: 24,
                        height: 31
                    } ]
                }), wx.setNavigationBarTitle({
                    title: "GPS检测"
                }), wx.hideLoading(), wx.hideNavigationBarLoading();
            },
            fail: function(t) {
                console.log(t), wx.hideLoading(), wx.hideNavigationBarLoading(), wx.setNavigationBarTitle({
                    title: "GPS检测"
                }), wx.showModal({
                    title: "提醒",
                    content: "请确保您允许微信获取您的位置，或者GPS损坏",
                    showCancel: !1
                });
            },
            complete: function() {}
        }), t.dataArr) {
            var i = t.dataArr.split("，");
            this.setData({
                dataArr: i
            });
        }
    },
    setResult: function(t) {
        var a = {
            name: "GPS",
            val: t.currentTarget.dataset.val
        };
        this.goToTouchScreen(a);
    },
    goToTouchScreen: function(t) {
        var a = this.data.dataArr, i = JSON.stringify(t);
        a.push(i);
        var e = a.join("，");
        wx.redirectTo({
            url: "../touchScreen/touchScreen?dataArr=" + e
        });
    }
});