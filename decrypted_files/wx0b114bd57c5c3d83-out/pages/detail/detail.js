var e = require("../../utils/server");

Page({
    data: {},
    formSubmit: function(t) {
        if (0 == t.detail.value.mobile.length) wx.showToast({
            title: "手机号码不得为空!",
            icon: "loading",
            duration: 1e3
        }), setTimeout(function() {
            wx.hideToast();
        }, 2e3); else if (11 != t.detail.value.mobile.length) wx.showToast({
            title: "请输入11位手机号码!",
            icon: "loading",
            duration: 1e3
        }), setTimeout(function() {
            wx.hideToast();
        }, 2e3); else {
            var i = t.detail.value.mobile, a = getApp().globalData.userInfo.user_id, l = t.detail.value.name, o = t.detail.value.leibie, s = t.detail.value.title;
            e.postJSON("/User/addruzhu/user_id/" + a, {
                user_id: a,
                mobile: i,
                user_name: l,
                lbtype: o,
                title: s
            }, function(e) {
                1 == e.data.status ? (wx.showToast({
                    title: "您的申请提交成功，工作人员会尽快的联系您！",
                    duration: 2e3
                }), wx.navigateBack()) : wx.showToast({
                    title: e.data.msg,
                    duration: 2e3
                });
            });
        }
    }
});