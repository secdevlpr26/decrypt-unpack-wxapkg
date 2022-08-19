function e(e) {
    return (e = e.toString())[1] ? e : "0" + e;
}

function t(e, t) {
    var o = {
        uid: t.globalData.openid || "",
        time: Date.now(),
        phone: t.globalData.phone || "",
        type: "20",
        product: t.globalData.houseid || "",
        sessionId: t.globalData.sessionKey || "",
        project: t.systemInfo.model || "_" + t.systemInfo.SDKVersion || "",
        version: t.systemInfo.version || "",
        system: e.system || "4",
        module: "4",
        pageid: e.pageid || "",
        keyvalue: e.keyvalue || "",
        name: e.name || "",
        category: e.category || "",
        value: e.value || ""
    };
    e.usetime && (o.usetime = e.usetime);
    var n = {};
    n.merchantid = "3", n.version = "1", n.sign_type = "RSA", n.sign = "123", n.charset = "UTF-8", 
    n.method = "skyforest.analysis.add";
    var r = "";
    for (var s in o) r += "&" + s + "=" + o[s];
    return n.context = r, n;
}

function o(e) {
    return a.url;
}

function n(e) {
    return a.newUrl;
}

var r, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, a = require("../config.js");

module.exports = {
    formatTime: function(t) {
        var o = t.getFullYear(), n = t.getMonth() + 1, r = t.getDate(), s = t.getHours(), a = t.getMinutes(), i = t.getSeconds();
        return [ o, n, r ].map(e).join("-") + " " + [ s, a, i ].map(e).join(":");
    },
    normalTime: function(e) {
        return isNaN(e) ? "00" : parseInt(e) < 10 ? "0" + e : e;
    },
    formatTodayTime: function(e) {
        var t = e.getFullYear(), o = e.getMonth() + 1, n = e.getDate(), r = e.getHours(), s = e.getMinutes();
        return o == new Date().getMonth() + 1 && n + 1 == new Date().getDate() ? "昨天" + r + ":" + (s > 9 ? s : "0" + s) : o == new Date().getMonth() + 1 && n == new Date().getDate() ? r + ":" + (s > 9 ? s : "0" + s) : t + "-" + (o > 9 ? o : "0" + o) + "-" + n + " " + r + ":" + (s > 9 ? s : "0" + s);
    },
    reformParam: function(e, t) {
        var o = {};
        o.merchantid = "3", o.version = "1", o.sign_type = "RSA", o.sign = "123", o.charset = "UTF-8", 
        o.method = e;
        var n = "";
        for (var r in t) n += "&" + r + "=" + t[r];
        return o.context = n, o;
    },
    url: o,
    newUrl: n,
    timesData: function(e) {
        var t = new Date(e);
        return t.getFullYear() + "/" + (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "/" + (t.getDate() < 10 ? "0" + t.getDate() : t.getDate()) + " ";
    },
    formatCNTime: function(e) {
        var t = e.getFullYear(), o = e.getMonth() + 1, n = e.getDate(), r = e.getHours(), s = e.getMinutes(), a = e.getSeconds();
        return t + "年" + (o > 9 ? o : "0" + o) + "月" + n + "日" + r + "时" + (s > 9 ? s : "0" + s) + "分" + a + "秒";
    },
    timestampToTime: function(e) {
        var t = new Date(e);
        return (t.getHours() < 10 ? "0" + t.getHours() : t.getHours()) + ":" + (t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes());
    },
    trackRequest: function(e, t) {
        '"{}"' === JSON.stringify(e.clkParams) && (e.clkParams = ""), '"{}"' === JSON.stringify(e.expand) && (e.expand = ""), 
        '"{}"' === JSON.stringify(e.pvCurPageParams) && (e.pvCurPageParams = "");
        var o = {
            session: i,
            userAgent: "",
            browserName: "",
            browserVersion: t.systemInfo.SDKVersion,
            platform: "miniapp",
            fromPlatform: "",
            deviceType: t.systemInfo.model || "",
            ip: t.globalData.ip || "",
            cookieId: "",
            openId: t.globalData.openid || "",
            customerId: t.globalData.single && t.globalData.single.id ? t.globalData.single.id : "",
            userId: t.globalData.single && t.globalData.single.id ? t.globalData.single.id : "",
            createTime: this.formatTime(new Date()),
            uploadTime: this.formatTime(new Date()),
            product: a.projectName,
            project: a.houseId,
            eventId: e.eventId || "",
            eventName: e.eventName || "",
            expand: "object" === s(e.expand) ? JSON.stringify(e.expand) : e.expand,
            imTalkId: e.imTalkId || "",
            imTalkType: e.imTalkType || "",
            eventModuleDes: e.eventModuleDes || "",
            eventInnerModuleId: e.eventInnerModuleId || "",
            adviserId: e.adviserId || "",
            clkDesPage: e.clkDesPage || "",
            clkId: e.clkId || "",
            clkName: e.clkName || "",
            pvId: e.pvId || "",
            clkParams: "object" === s(e.clkParams) ? JSON.stringify(e.clkParams) : e.clkParams,
            pvPageStayTime: e.pvPageStayTime || "",
            pvCurPageName: e.pvCurPageName || "",
            pvCurPageParams: "object" === s(e.pvCurPageParams) ? JSON.stringify(e.pvCurPageParams) : e.pvCurPageParams,
            pvLastPageName: e.pvLastPageName || "",
            pvLastPageParams: e.pvLastPageParams || "",
            pvPageLoadTime: e.pvPageLoadTime || "",
            type: e.type || ""
        }, r = new Date().getTime(), i = wx.getStorageSync("sessionNumber") || 1, l = wx.getStorageSync("sessionTime") || r;
        console.log(r, l, r - l), r - l > 18e4 ? (i++, wx.setStorageSync("sessionNumber", i)) : wx.setStorageSync("sessionNumber", i), 
        wx.setStorageSync("sessionTime", r), o.session = o.userId + "_" + i, wx.request({
            url: n() + "elab-marketing-system/behavior/miniOrWeb/upload",
            method: "POST",
            data: o,
            success: function(e) {
                console.log(e, "iii");
            },
            fail: function(e) {
                console.log(e, "op");
            }
        }), t.globalData.sessionTime = r, console.log(o.session);
    },
    getImgUrl: function() {
        return a.ImgUrl;
    },
    reqTrackEventObj: function(e, n) {
        wx.request({
            url: o(),
            method: "POST",
            data: t(e, n),
            success: function(e) {
                console.log("***reqTrackEventObj***", e);
            },
            fail: function(e) {}
        });
    },
    reqTrackEventTimeObj: function(e, t) {
        r && clearInterval(r);
    },
    stopTrackEventTimeObj: function(e, t) {
        r && clearInterval(r);
    },
    addPoint: "skyforest.analysis.add",
    getModuleList: "skyforest.homehouse.HomeHouseController.getModuleList.v0.93",
    getModuleDetailList: "skyforest.homehouse.HomeHouseController.getModuleDetailList.v0.93",
    getTopPicList: "skyforest.homehouse.HomeHouseController.getTopPicList.v0.93",
    podcastDetails: "skyforest.live.LiveController.podcastDetails.v093",
    accoutUrl: "skyforest.tencent.TencentController.signature",
    podcast: "skyforest.live.LiveController.podcast.v093",
    sendVerifyCode: "skyforest.mine.MineController.sendVerifyCode.v093",
    login: "skyforest.mine.MineController.login.v093",
    insertAppointment: "skyforest.appointment.AppointmentController.insertAppointment.v0.93",
    mineInfo2: "skyforest.mine.MineController.mineInfo.v093",
    mineInfo: "skyforest.appointment.AppointmentController.appointmentDetail.v0.93",
    customerService: "023-62381788",
    podcastList: "skyforest.live.LiveController.podcastList.v093",
    version: "2017033101",
    tokenUrl: "skyforest.mine.MineController.login.v093",
    addCustomerInfo: "MVP_USER_MODIFY",
    adviserList: "skyforest.dynatown.dynatownController.getDynatownList",
    tencentSignature: "skyforest.tencent.TencentController.signature",
    mineLogin: "skyforest.mine.MineController.login.v093",
    aideUrl: "skyforest.live.advisterController.getAdvisterByOnline.v143",
    counselorList: "skyforest.dynatown.dynatownController.getDynatownList",
    chatUrl: "skyforest.dynatown.dynatownController.connect",
    InitUrl: "skyforest-factory.miniprogram.PositionHomeController.getPositionHome",
    historyUrl: "skyforest.dynatown.dynatownController.getAllDynatownList",
    getCustomerNick: "skyforest.dynatown.dynatownController.detail",
    likeUrl: "skyforest-factory.miniprogram.RelativeNumberController.insertOrUpdateRelativeNum",
    singleAdviser: "skyforest.dd.DdController.details.v093",
    bindAdviser: "skyforest.dynatown.dynatownController.bindAdviser",
    savephone: "skyforest.autoservice.AutoServiceController.save.v0932",
    verifyCode: "skyforest-factory.controller.message.MessageController.sendSms",
    getPhoneNumber: "skyforest-factory.miniprogram.PositionHomeController.getPhoneNumber",
    checkVerifyCodeEffective: "skyforest-factory.controller.message.MessageController.checkVerifyCodeEffective",
    videoInfo: "skyforest.fixed.FixedController.list.v093",
    connectAdviser: "connectAdviser",
    updateDynatown: "skyforest.advister.updateAdviserStatus.v140",
    videoList: "skyforest.advister.getAllVideoAdviserList",
    getWeather: "skyforest-factory.controller.weather.WeatherController.getWeather",
    getMessageList: "skyforest.message.MessageController.getMessageList",
    markRead: "skyforest.message.MessageController.markRead",
    getPullNewUserList: "skyforest.mine.MineController.getPullNewUserList",
    getRecommendInfoList: "skyforest.apprecommend.AppRecommendController.getRecommendInfoList"
};