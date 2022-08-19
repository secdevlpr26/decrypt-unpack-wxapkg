var e = require("../../../util/util"), o = getApp(), n = require("../../../component/message/message.js"), i = require("../../../utils/server");

Page({
    data: {
        message: {},
        hwxUserInfo: {},
        hasLogin: !1,
        placeHolder: {
            holderUrl: "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/17020405.png",
            holderName: "点击登录",
            holderDes: "快乐方式解决手机维修"
        }
    },
    bd: function(e) {
        wx.navigateTo({
            url: "../../seller/login1"
        });
    },
    webview: function(e) {
        wx.navigateTo({
            url: "../../seller/login"
        });
    },
    getUserInfoFun: function() {
        var e = this;
        wx.getUserInfo({
            success: function(o) {
                console.log("userInfo:" + o), e.setData({
                    userInfo: o.userInfo
                });
                var n = o.userInfo, a = n.country, t = n.city, r = n.gender, s = n.nickName, l = n.province, u = n.avatarUrl, c = getApp().globalData.userInfo.user_id;
                i.getJSON("/User/bind?country=" + a + "&gender=" + r + "&nick_name=" + s + "&province=" + l + "&city=" + t + "&head_pic=" + u + "&user_id=" + c, function(e) {});
            },
            fail: function(e) {
                console.log(e);
            }
        });
    },
    onLoad: function() {
        this.getUserInfoFun();
    },
    onShow: function() {
        this.getUserInfoFun();
    },
    updateUserInfo: function() {
        var n = this;
        if (e.isEmpty(o.globalData.hwxUserInfo)) n.setData({
            hwxUserInfo: {},
            placeHolder: {
                holderUrl: "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/17020405.png",
                holderName: "点击登录",
                holderDes: "快乐方式解决手机维修"
            }
        }); else {
            var i;
            i = o.globalData.hwxUserInfo.HeadPic.length ? o.globalData.hwxUserInfo.HeadPic : "https://pic.hiweixiu.com/hiweixiu-app/weapp/img/17020405.png";
            var a = o.globalData.hwxUserInfo;
            n.setData({
                hwxUserInfo: a,
                placeHolder: {
                    holderName: a.RealName,
                    holderUrl: i
                }
            });
        }
    },
    myOrder: function(o) {
        var i = this;
        e.isExist(i.data.userInfo) ? wx.navigateTo({
            url: "../myOrder/myOrder"
        }) : n.show.call(i, {
            content: "请先登录",
            icon: "tip"
        });
    },
    myTicket: function(o) {
        var i = this;
        e.isExist(i.data.userInfo) ? wx.navigateTo({
            url: "../selectTicket/selectTicket?fromInfo=true"
        }) : n.show.call(i, {
            content: "请先登录",
            icon: "tip"
        });
    },
    addressManage: function(n) {
        e.isExist(o.globalData.hwxUserInfo) && wx.navigateTo({
            url: "../addressList/addressList"
        });
    },
    callPhone: function(e) {
        wx.makePhoneCall({
            phoneNumber: getApp().globalData.userInfo.mobile1
        });
    },
    editInfo: function(n) {
        e.isEmpty(o.globalData.hwxUserInfo) ? wx.navigateTo({
            url: "../login/login"
        }) : wx.navigateTo({
            url: "../selfInfo/selfInfo"
        });
    },
    login: function(n) {
        e.isEmpty(o.globalData.hwxUserInfo) && wx.navigateTo({
            url: "../login/login"
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {},
    sk: function() {
        wx.navigateTo({
            url: "sk"
        });
    }
});