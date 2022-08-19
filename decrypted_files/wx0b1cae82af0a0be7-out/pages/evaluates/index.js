var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../utils/api"));

getApp();

Page({
    data: {
        page: 1,
        page_size: 10,
        evaluateList: [],
        percent: 0,
        finishReach: !1,
        lowerStatus: !0
    },
    onLoad: function(t) {
        this.data.serviceId = t.id, this.getData();
    },
    lower: function() {
        this.data.finishReach || this.data.lowerStatus && this.getData();
    },
    getData: function() {
        var a = this;
        this.data.lowerStatus = !1, t.default.evaluatesList("/evaluate/list", {
            page: this.data.page,
            page_size: this.data.page_size,
            serviceId: this.data.serviceId
        }).then(function(t) {
            t.result.page >= t.result.total_pages || 0 == t.result.total_pages ? a.data.finishReach = !0 : a.data.page++, 
            a.data.lowerStatus = !0, a.data.evaluateList = a.data.evaluateList.concat(t.result.list), 
            a.setData({
                evaluateList: a.data.evaluateList,
                percent: parseInt(t.result.percent)
            });
        });
    }
});