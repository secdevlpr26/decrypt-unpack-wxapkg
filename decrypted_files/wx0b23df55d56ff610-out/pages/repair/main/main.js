var e = require("../../../comm/script/fetch"), t = require("../../../comm/script/config"), i = getApp();

Page({
    data: {
        faultList: []
    },
    onLoad: function() {
        this.loadAllFaults(), this.getHwxDeviceInfo();
    },
    onPullDownRefresh: function() {
        this.loadAllFaults(), this.getHwxDeviceInfo();
    },
    setSelectedDeviceInfo: function() {
        try {
            wx.setStorageSync(t.storageKeys.selectedDevice, i.globalData.hwxDeviceInfo);
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.log(e);
        }
    },
    getHwxDeviceInfo: function() {
        var t = this;
        e.getHwxDeviceInfo(i.globalData.wxDeviceInfo.model, function(e) {
            i.setHiDeviceInfo(e), t.setSelectedDeviceInfo();
            var a = parseInt(new Date().getTime() / 1e3), o = e.now_time, n = Number(o) - Number(a);
            i.setTimeDifference(n);
        }, function(e) {
            wx.showToast({
                image: "../../../img/tip.png",
                title: e
            });
        });
    },
    loadAllFaults: function() {
        var t = this;
        e.getAllFaults.call(t, function(e) {
            t.setData({
                faultList: e.data,
                other: e.other
            }), wx.stopPullDownRefresh();
        }, function(e) {
            wx.showToast({
                image: "../../../img/tip.png",
                title: e
            }), wx.stopPullDownRefresh();
        });
    },
    bindTapFault: function(e) {
        var t = e.currentTarget.dataset;
        wx.navigateTo({
            url: "../faultDetail/faultDetail?id=" + t.id
        });
    }
});