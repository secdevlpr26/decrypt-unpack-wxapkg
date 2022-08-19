var o = require("./utils/server");

require("./utils/md5.js");

App({
    onLaunch: function() {
        var o = this;
        wx.getSystemInfo({
            success: function(e) {
                o.screenWidth = e.windowWidth, o.pixelRatio = e.pixelRatio;
            }
        });
    },
    getOpenId: function(o) {
        var e = this;
        wx.login({
            success: function(n) {
                n.code ? wx.request({
                    url: e.globalUrl + "/index.php/WXAPI/User/sendappid?appid=wx0b114bd57c5c3d83&secret=d5095afb8282bea6da6050b5bdbbc926zs_mbz168&js_code=" + n.code + "&grant_type=authorization_code",
                    data: {
                        code: n.code
                    },
                    success: function(e) {
                        var n = e.data.openid;
                        console.log(n), getApp().globalData.openid = n, "function" == typeof o && o();
                    }
                }) : console.log("获取用户登录态失败！" + n.errMsg);
            }
        });
    },
    register: function(e) {
        var n = this;
        this.getUserInfo(function() {
            var t = n.globalData.openid, a = n.globalData.userInfo, s = a.country, i = a.city, c = a.gender, r = a.nickName, u = a.province, l = a.avatarUrl;
            o.getJSON("/User/register?open_id=" + t + "&country=" + s + "&gender=" + c + "&nick_name=" + r + "&province=" + u + "&city=" + i + "&head_pic=" + l, function(o) {
                n.globalData.userInfo = o.data.res, "function" == typeof e && e();
            });
        });
    },
    getUserInfo: function(o) {
        var e = this;
        this.globalData.userInfo ? "function" == typeof o && o(this.globalData.userInfo) : wx.login({
            success: function() {
                wx.getUserInfo({
                    success: function(n) {
                        e.globalData.userInfo = n.userInfo, "function" == typeof o && o(e.globalData.userInfo);
                    }
                });
            }
        });
    },
    globalData: {
        openid: null,
        userInfo: null,
        login: !1
    },
    globalUrl: "https://mbz.vuooo.com/users/chuanmu",
    globalUrl_Host: "https://mbz.vuooo.com"
});