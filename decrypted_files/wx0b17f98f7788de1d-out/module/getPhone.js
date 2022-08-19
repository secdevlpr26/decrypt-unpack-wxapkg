var e = getApp(), t = e.globalData.httpUrl;

e.globalData.testhttpUrl;

module.exports = {
    getPhoneNum: function(e, o, n, a) {
        return console.log("获取手机号数据=====》", e, o, n, a), new Promise(function(r, l) {
            wx.request({
                url: t + "skmembermodel/decrypt",
                data: {
                    encryptedData: e,
                    iv: o,
                    appId: n,
                    sessionKey: a
                },
                method: "POST",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                success: function(e) {
                    wx.setStorageSync("phone", e.data + ""), console.log("=========getPhoneNum phoneNum======已获取=====", e.data), 
                    r(e);
                },
                fail: function(e) {
                    console.log("Error decrypt", e);
                }
            });
        });
    }
};