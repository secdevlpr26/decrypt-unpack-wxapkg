var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/api"));

getApp();

Page({
    data: {
        userInfo: {
            headImage: "/images/moren@3x.png",
            nickName: "未知",
            phone: ""
        }
    },
    onShow: function(a) {
        var n = this;
        e.default.commonUserInfo("/user/myInfo").then(function(e) {
            var a = e.result;
            a.headImage && (n.data.userInfo.headImage = a.headImage), a.nickName && (n.data.userInfo.nickName = a.nickName), 
            a.phone && (n.data.userInfo.phone = a.phone), n.setData({
                userInfo: n.data.userInfo
            });
        });
    },
    previewImage: function() {
        wx.previewImage({
            current: this.data.userInfo.headImage,
            urls: [ this.data.userInfo.headImage ]
        });
    },
    updataHeadImg: function() {
        var a = this;
        e.default.updataAvatar("/user/updateHeadImage").then(function(e) {
            a.data.userInfo.headImage = e.result.data[0], a.setData({
                userInfo: a.data.userInfo
            });
        });
    },
    editNickName: function() {
        wx.setStorageSync("nick_name", this.data.userInfo.nickName), wx.navigateTo({
            url: "../userNickName/index"
        });
    },
    loginOut: function() {
        wx.removeStorageSync("token"), wx.removeStorageSync("oauthInfo"), wx.removeStorageSync("gpsCity"), 
        wx.removeStorageSync("currCity"), wx.switchTab({
            url: "../nearby/index"
        });
    }
});