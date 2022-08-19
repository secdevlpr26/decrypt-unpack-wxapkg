(function(e) {
    e && e.__esModule;
})(require("../../utils/api")), getApp();

Page({
    data: {},
    callPhone: function() {
        wx.makePhoneCall({
            phoneNumber: "18079115648"
        });
    }
});