var e = getApp();

Page({
    data: {
        dataArr: [ {
            name: "指南针",
            val: 0
        }, {
            name: "重力感应",
            val: 0
        }, {
            name: "GPS",
            val: 0
        }, {
            name: "触摸屏",
            val: 0
        }, {
            name: "屏幕色彩",
            val: 0
        }, {
            name: "WIFI",
            val: 0
        }, {
            name: "蓝牙",
            val: 0
        }, {
            name: "扬声器",
            val: 0
        }, {
            name: "麦克风",
            val: 0
        }, {
            name: "主摄像头",
            val: 0
        }, {
            name: "前置摄像头",
            val: 0
        }, {
            name: "闪光灯",
            val: 0
        }, {
            name: "听筒",
            val: 0
        }, {
            name: "距离感应器",
            val: 0
        } ],
        brand: "",
        model: "",
        system: ""
    },
    onLoad: function(a) {
        var n = e.globalData.wxDeviceInfo;
        this.setData({
            brand: n.brand,
            model: n.model.split("<")[0],
            system: n.system
        });
    },
    onReady: function() {},
    goToTouchScreen: function() {
        wx.navigateTo({
            url: "../touchScreen/touchScreen"
        });
    },
    goToCameraTest: function() {
        wx.navigateTo({
            url: "../cameraTest/cameraTest"
        });
    },
    goToLuopanTest: function() {
        wx.navigateTo({
            url: "../luopanTest/luopanTest"
        });
    },
    goToGpsTest: function() {
        wx.navigateTo({
            url: "../gpsTest/gpsTest"
        });
    },
    goToLabaAndMikeTest: function() {
        wx.navigateTo({
            url: "../labaAndMikeTest/labaAndMikeTest"
        });
    },
    goToJiasuyiTest: function() {
        wx.navigateTo({
            url: "../jiasuyiTest/jiasuyiTest"
        });
    },
    goToScreenTest: function() {
        wx.navigateTo({
            url: "../screenTest/screenTest"
        });
    },
    goToArtificialTest: function() {
        wx.navigateTo({
            url: "../artificialTest/artificialTest"
        });
    },
    goToWifiTest: function() {
        wx.navigateTo({
            url: "../wifiTest/wifiTest"
        });
    },
    goToReceiverAndSenorTest: function() {
        wx.navigateTo({
            url: "../receiverAndSenorTest/receiverAndSenorTest"
        });
    }
});