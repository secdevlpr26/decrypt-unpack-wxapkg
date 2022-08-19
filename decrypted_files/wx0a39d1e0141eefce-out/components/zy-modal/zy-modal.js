var t = require("../../utils/util");

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        title: {
            type: String
        },
        areaName: {
            type: String
        },
        imageReady: {
            type: String
        },
        hidden: {
            type: Boolean
        },
        confirmText: {
            type: String
        },
        confirmColor: {
            type: String,
            observer: function(t) {
                this.setData({
                    tintColor: "color:" + t
                });
            }
        }
    },
    data: {
        confirmText: "确认",
        tintColor: "color:#FEFEFF"
    },
    methods: {
        confirm: function() {
            this.triggerEvent("confirm");
        }
    },
    ready: function() {
        var e = this;
        t.wxPromisify(wx.getSystemInfo)().then(function(t) {
            e.setData({
                height: t.windowHeight + "px"
            });
        });
    }
});