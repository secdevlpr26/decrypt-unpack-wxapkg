require("../../../util/util");

var t = require("../../../utils/server");

require("../../../comm/script/fetch");

require("../../../comm/script/config"), require("../../../component/message/message.js"), 
getApp(), Page({
    data: {
        faultList: [],
        toPad: !1
    },
    onLoad: function(e) {
        var a = this;
        this.setData({
            id: e.id
        }), t.getJSON("/Goods/types", {
            id: e.id
        }, function(t) {
            var e = t.data.types;
            a.setData({
                types: e
            });
        }), "true" == e.toPad && this.setData({
            toPad: !0
        });
    },
    select: function(t) {
        var e = t.currentTarget.dataset.index, a = "../chooseDevice/chooseDevice?faultInfo=" + this.data.types[e].id + "&id=" + this.data.id;
        this.data.toPad && (a += "&toPad=true"), wx.navigateTo({
            url: a
        });
    },
    goToChooseDevice: function(t) {
        var e = t.currentTarget.dataset, a = "../chooseDevice/chooseDevice?faultInfo=" + JSON.stringify(e);
        this.data.toPad && (a += "&toPad=true"), wx.navigateTo({
            url: a
        });
    }
});