var a = require("utils/requestApi.js");

App({
    onLaunch: function() {
        var e = this;
        wx.login({
            success: function(o) {
                console.log(o.code), o.code ? wx.request({
                    url: a.apiGetOpenIdUrl,
                    data: {
                        js_code: o.code
                    },
                    success: function(a) {
                        e.globalData.openid = a.data.data.openid, e.globalData.session_key = a.data.data.session_key;
                    }
                }) : console.log("获取用户登录态失败！" + o.errMsg);
            }
        }), console.log("App Launch"), console.log(e.globalData.openid);
        setInterval(function() {
            a.request({
                url: a.apiGetTankAreatUrl,
                complete: function(a) {
                    var o = a.data.data;
                    e.globalData.alarmAreaList = [];
                    for (var l = 0; l < o.length; l++) 1 == o[l].alarmStatus && e.globalData.alarmAreaList.push(o[l].name);
                }
            });
        }, 1e3);
    },
    onShow: function() {
        console.log("App Show");
    },
    onHide: function() {
        console.log("App Hide");
    },
    globalData: {
        appid: "wx0a39d1e0141eefce",
        secret: "ade630caf7fd6ced559f25c385c96dc0",
        hasLogin: !1,
        openid: null,
        session_key: null,
        confirmedAlarm: "",
        alarmAreaList: []
    }
});