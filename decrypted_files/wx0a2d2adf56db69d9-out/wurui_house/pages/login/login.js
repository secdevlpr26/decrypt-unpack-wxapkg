getApp().globalData.baseUrl;

Page({
    onLoad: function() {},
    login: function(e) {
        wx.login({
            success: function(e) {
                var n = e.code;
                console.log(n), n ? wx.getUserInfo({
                    success: function(e) {
                        userInfo.wxInfo = e.userInfo, wx.setStorageSync("userInfo", userInfo), util.request({
                            url: "auth/session/userinfo",
                            data: {
                                signature: e.signature,
                                rawData: e.rawData,
                                iv: e.iv,
                                encryptedData: e.encryptedData
                            },
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            cachetime: 0,
                            success: function(e) {
                                e.data.errno || (userInfo.memberInfo = e.data.data, wx.setStorageSync("userInfo", userInfo)), 
                                "function" == typeof cb && cb(userInfo);
                            }
                        });
                    },
                    fail: function() {},
                    complete: function() {
                        wx.switchTab({
                            url: "/wurui_house/pages/index/index"
                        });
                    }
                }) : console.log("获取用户登录态失败！" + e.errMsg);
            },
            fail: function() {
                console.log("登陆失败");
            }
        });
    }
});