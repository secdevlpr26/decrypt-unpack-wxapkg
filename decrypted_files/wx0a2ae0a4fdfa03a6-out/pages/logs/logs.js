var t = require("../../4E0979151356E5CF286F1112B6626373.js");

Page({
    data: {
        logs: []
    },
    onLoad: function() {
        this.setData({
            logs: (wx.getStorageSync("logs") || []).map(function(a) {
                return t.formatTime(new Date(a));
            })
        });
    }
});