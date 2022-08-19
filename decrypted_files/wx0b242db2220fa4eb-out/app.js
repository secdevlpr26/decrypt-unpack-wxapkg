var e = require("./utils/server");

require("./utils/md5.js");

App({
    onLaunch: function() {
        var e = this;
        wx.getSystemInfo({
            success: function(n) {
                e.screenWidth = n.windowWidth, e.pixelRatio = n.pixelRatio;
            }
        });
    },
    getOpenId: function(e) {
        wx.login({
            success: function(n) {
                n.code ? wx.request({
                    url: "https://25.jywork.com/index.php/WXAPI/User/sendappid?appid=wx0b242db2220fa4eb&secret=1a0fd6e0a6c5ebc97d8e729b08c450c6&js_code=" + n.code + "&grant_type=authorization_code",
                    data: {
                        code: n.code
                    },
                    success: function(n) {
                        var o = n.data.openid;
                        getApp().globalData.openid = o, "function" == typeof e && e();
                    }
                }) : console.log("获取用户登录态失败！" + n.errMsg);
            }
        });
    },
    register: function(n) {
        var o = this;
        this.getUserInfo(function() {
            var t = o.globalData.openid, a = o.globalData.userInfo, i = a.country, s = a.city, c = a.gender, r = a.nickName, u = a.province, f = a.avatarUrl;
            e.getJSON("/User/register?open_id=" + t + "&country=" + i + "&gender=" + c + "&nick_name=" + r + "&province=" + u + "&city=" + s + "&head_pic=" + f, function(e) {
                o.globalData.userInfo = e.data.res, "function" == typeof n && n();
            });
        });
    },
    getUserInfo: function(e) {
        var n = this;
        this.globalData.userInfo ? "function" == typeof e && e(this.globalData.userInfo) : wx.login({
            success: function() {
                wx.getUserInfo({
                    success: function(o) {
                        n.globalData.userInfo = o.userInfo, "function" == typeof e && e(n.globalData.userInfo);
                    }
                });
            }
        });
    },
    globalData: {
        openid: null,
        userInfo: null,
        login: !1
    }
});