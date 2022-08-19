Page({
    data: {},
    onLoad: function(n) {
        console.log("跳转传参", n), this.wxPay(n);
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    wxPay: function(n) {
        var e = this;
        wx.showLoading({
            title: "支付中...",
            mask: !0
        }), wx.requestPayment({
            timeStamp: decodeURIComponent(n.timeStamp),
            nonceStr: decodeURIComponent(n.nonceStr),
            package: decodeURIComponent(n.package),
            signType: "MD5",
            paySign: decodeURIComponent(n.paySign),
            success: function(n) {
                e.confirm();
            },
            fail: function(n) {
                e.cancel();
            }
        });
    },
    cancel: function() {
        var n = getCurrentPages();
        n[n.length - 2].wxPayJump("fail"), wx.navigateBack();
    },
    confirm: function() {
        var n = getCurrentPages();
        n[n.length - 2].wxPayJump("success"), wx.navigateBack();
    }
});