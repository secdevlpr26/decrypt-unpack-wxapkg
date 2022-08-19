var e = require("../../utils/constants.js"), t = require("../../utils/util");

getApp();

Page({
    data: {
        url: ""
    },
    onLoad: function(o) {
        var a = ~o.openPage.indexOf(e.API_URL) ? o.openPage : e.API_URL + o.openPage, r = decodeURIComponent(a);
        console.log("跳转H5链接", t.urlFormat(r)), this.setData({
            url: t.urlFormat(r)
        });
    }
});