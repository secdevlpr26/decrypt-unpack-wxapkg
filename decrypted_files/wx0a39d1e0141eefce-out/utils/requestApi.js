var t = "https://wp1.springbutton.com/ytkjnt/zsy/", e = "https://wp1.springbutton.com/ytkjnt/";

module.exports = {
    request: function(t) {
        wx.request(t);
    },
    apiGetOilTanktUrl: t + "oilTank/list",
    apiGetTankAreatUrl: t + "tankArea/list",
    apiGetNetStatustUrl: t + "netStatus/list",
    apiGetStatustUrl: t + "netStatus/status",
    apiPostNeedMessageUrl: e + "send/getMessage",
    apiSendServiceMessageUrl: e + "send/message",
    apiGetOpenIdUrl: e + "send/getOpenid"
};