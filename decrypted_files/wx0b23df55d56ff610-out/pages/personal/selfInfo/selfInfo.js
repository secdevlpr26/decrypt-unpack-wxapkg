var a = require("../../../comm/script/fetch"), t = require("../../../util/util"), e = require("../../../component/message/message.js"), n = getApp();

Page({
    data: {
        message: {},
        name: "",
        birthday: "",
        phone: "",
        date: ""
    },
    onLoad: function(a) {
        var t = new Date(), e = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
        this.setData({
            date: e
        }), this.loadUserInfo();
    },
    loadUserInfo: function() {
        var a = this, e = n.globalData.hwxUserInfo;
        t.isExist(e) && null !== e && a.setData({
            birthday: e.birthday,
            phone: e.UserName,
            name: e.RealName
        });
    },
    logout: function(t) {
        var o = this;
        a.logout.call(o, function(a) {
            n.globalData.hwxUserInfo = null, wx.navigateBack();
        }, function(a) {
            e.show.call(o, {
                content: "退出失败",
                icon: "tip"
            });
        });
    },
    checkUname: function(a) {
        var n = !0;
        return (t.isBlank(a) || "null" === a) && (n = !1), n || e.show.call(that, {
            content: "请输入姓名",
            icon: "tip"
        }), n;
    },
    submitEdit: function() {
        var t = this;
        t.checkUname(t.data.name) && a.editName.call(t, t.data.name, function(a) {
            t.setData({
                name: t.data.name
            }), n.globalData.hwxUserInfo.RealName = t.data.name, n.setHwxUserInfo(n.globalData.hwxUserInfo), 
            e.show.call(t, {
                content: "修改成功",
                icon: "ok"
            }), wx.navigateBack({
                delta: 1,
                success: function(a) {
                    console.log("success");
                },
                fail: function() {
                    console.log("fail");
                },
                complete: function() {
                    console.log("complete");
                }
            });
        }, function(a) {
            e.show.call(t, {
                content: a,
                icon: "tip"
            });
        });
    },
    inputName: function(a) {
        this.setData({
            name: a.detail.value
        });
    },
    inputBirthday: function(t) {
        var o = this;
        o.setData({
            birthday: t.detail.value
        });
        var i = t.detail.value;
        a.editBirthday.call(o, i, function(a) {
            o.setData({
                birthday: t.detail.value
            }), n.globalData.hwxUserInfo.birthday = i, n.setHwxUserInfo(n.globalData.hwxUserInfo);
        }, function(a) {
            e.show.call(o, {
                content: a,
                icon: "tip"
            });
        });
    },
    stopTouchMove: function() {},
    stopTap: function() {}
});