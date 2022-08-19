var e = require("../../utils/server");

Page({
    data: {
        result_json: {
            one: "优惠活动",
            two: "最新新闻"
        }
    },
    clickBanner: function(e) {
        var t = e.currentTarget.dataset.goodsId;
        wx.navigateTo({
            url: "../goods/detail/detail?objectId=" + t
        });
    },
    onLoad: function() {
        e.getJSON("/News/index/", function(e) {
            e.data.msg;
        });
    }
});