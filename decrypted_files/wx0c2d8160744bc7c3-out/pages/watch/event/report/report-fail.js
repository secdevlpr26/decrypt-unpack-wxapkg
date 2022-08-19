Page({
    data: {
        reportErrorMsg: !1
    },
    onLoad: function(r) {
        this.setData({
            reportErrorMsg: r.errorMsg
        });
    }
});