require("../../utils/util.js"), getApp();

var e = require("../../getlogininfo.js");

e.authorizeInfo, e.getUserInfo;

Page({
    data: {
        serverUrl: "http://skyforest.static.elab-plus.com/wepy_pro/",
        list: [],
        note: "",
        showInfoModel: !1,
        showPhoneModel: !1,
        shareImg: "",
        phoneFailFun: null,
        phoneFun: null
    },
    onShow: function(e) {
        wx.hideShareMenu();
    },
    onUnload: function() {},
    onHide: function() {},
    onReady: function() {
        wx.hideLoading(), wx.setNavigationBarTitle({
            title: "我要分享"
        });
    },
    onLoad: function(e) {
        wx.showLoading({
            title: "正在加载"
        });
        this.setData({
            shareImg: wx.getStorageSync("shareProgram")
        });
    },
    save: function() {
        wx.getImageInfo({
            src: this.data.shareImg,
            success: function(e) {
                var o = e.path;
                wx.saveImageToPhotosAlbum({
                    filePath: o,
                    success: function(e) {
                        wx.showToast({
                            title: "保存成功！",
                            icon: "success",
                            duration: 1500
                        });
                    }
                });
            }
        });
    }
});