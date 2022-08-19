var o = getApp(), t = require("../../utils/config.js"), e = "", a = "";

Page({
    data: {
        tabs: [ "借书", "预约取书" ],
        modal: !0,
        lists: [],
        index: 0,
        curId: 0,
        infoShow: !1
    },
    onLoad: function(o) {
        a = wx.getStorageSync("schoolId"), e = wx.getStorageSync("3rdsession");
    },
    onReady: function() {},
    onShow: function() {},
    tabclick: function(o) {
        this.setData({
            curId: o.currentTarget.dataset.idx
        });
    },
    keyinput: function(o) {
        this.setData({
            key: o.detail.value
        });
    },
    uesrSearch: function() {
        var e = this;
        if (e.data.key) {
            var a = e.data.key.trim();
            wx.request({
                url: t.queryBorrowUser,
                data: {
                    search: a,
                    schoolId: o.globalData.schoolId
                },
                success: function(o) {
                    console.log("查询用户", o), 200 == o.data.type ? o.data.date.length ? e.setData({
                        lists: o.data.date,
                        noData: !1,
                        infoShow: !1
                    }) : e.setData({
                        noData: !0,
                        infoShow: !1,
                        lists: []
                    }) : wx.showToast({
                        title: o.data.content,
                        icon: "none"
                    });
                },
                fail: function() {
                    wx.showToast({
                        title: "系统异常，请稍后重试",
                        icon: "none"
                    });
                }
            });
        } else wx.showToast({
            title: "请输入姓名或电话",
            icon: "none"
        });
    },
    codeinput: function(o) {
        this.setData({
            bookCode: o.detail.value
        });
    },
    getbookCode: function() {
        var o = this;
        if (console.log(this.data.bookCode), o.data.bookCode) {
            var e = o.data.bookCode.trim();
            wx.request({
                url: t.getCode,
                data: {
                    getCode: e
                },
                success: function(t) {
                    console.log("获取取书码", t), 200 == t.data.type ? o.setData({
                        getBookInfo: t.data.date
                    }) : wx.showToast({
                        title: "未查询到取书码",
                        icon: "none"
                    });
                },
                fail: function() {
                    wx.showToast({
                        title: "系统异常，请稍后重试",
                        icon: "none"
                    });
                }
            });
        } else wx.showToast({
            title: "请正确输入取书码",
            icon: "none"
        });
    },
    getuserinfo: function(e) {
        var a = this, s = e.currentTarget.dataset.id;
        wx.request({
            url: t.queryBorrowUserInfo,
            data: {
                readerId: s,
                schoolId: o.globalData.schoolId
            },
            success: function(o) {
                console.log("查询用户详情", o), 200 == o.data.type ? a.setData({
                    user: o.data.date,
                    infoShow: !0
                }) : wx.showToast({
                    title: o.data.content,
                    icon: "none"
                });
            },
            fail: function() {
                wx.showToast({
                    title: "系统异常，请稍后重试",
                    icon: "none"
                });
            }
        });
    },
    returnbook: function() {
        var o = this;
        wx.scanCode({
            success: function(e) {
                console.log("res", e), console.log("获取的书籍码", e.result);
                var a = e.result;
                wx.request({
                    url: t.returnBook,
                    data: {
                        bookCode: a
                    },
                    success: function(t) {
                        console.log("还书详情", t), 200 === t.data.type ? o.setData({
                            modal: !1,
                            success: !0,
                            modalTitle: "还书成功",
                            modalMsg: "恭喜您，还书成功！"
                        }) : o.setData({
                            modal: !1,
                            success: !1,
                            type: 1,
                            modalTitle: "还书失败",
                            modalErrorMsg: t.data.content
                        });
                    },
                    fail: function() {
                        wx.showToast({
                            title: "系统异常，请稍后重试",
                            icon: "none"
                        });
                    }
                });
            }
        });
    },
    borrowbook: function(o) {
        var e = this;
        console.log(o), console.log("e.currentTarget.dataset.id", o.currentTarget.dataset.id), 
        o.currentTarget.dataset.id && e.setData({
            readerId: o.currentTarget.dataset.id
        });
        var a = e.data.readerId;
        console.log("readerId", a), 1 == e.data.curId ? wx.scanCode({
            success: function(o) {
                console.log("获取的条码", o.result);
                var s = o.result, n = e.data.bookCode;
                wx.request({
                    url: t.appointmentCode,
                    data: {
                        bookCode: s,
                        readerId: a,
                        getCode: n
                    },
                    success: function(o) {
                        console.log("借书详情", o), 200 === o.data.type ? e.setData({
                            modal: !1,
                            success: !0,
                            modalTitle: "取书成功",
                            modalMsg: "恭喜您，取书成功！"
                        }) : e.setData({
                            modal: !1,
                            success: !1,
                            type: 2,
                            modalTitle: "取书失败",
                            modalErrorMsg: o.data.content
                        });
                    },
                    fail: function() {
                        wx.showToast({
                            title: "系统异常，请稍后重试",
                            icon: "none"
                        });
                    }
                });
            }
        }) : wx.scanCode({
            success: function(o) {
                console.log("获取的书籍码", o.result);
                var s = o.result;
                wx.request({
                    url: t.borrowBook,
                    data: {
                        bookCode: s,
                        readerId: a
                    },
                    success: function(o) {
                        console.log("借书详情", o), 200 === o.data.type ? e.setData({
                            modal: !1,
                            success: !0,
                            modalTitle: "借书成功",
                            modalMsg: "恭喜您，借书成功！"
                        }) : e.setData({
                            modal: !1,
                            success: !1,
                            type: 2,
                            modalTitle: "借书失败",
                            modalErrorMsg: o.data.content
                        });
                    },
                    fail: function() {
                        wx.showToast({
                            title: "系统异常，请稍后重试",
                            icon: "none"
                        });
                    }
                });
            }
        });
    },
    delmodal: function() {
        this.setData({
            modal: !0
        });
    },
    sandCodeAgin: function(o) {
        var t = o.currentTarget.dataset.type;
        1 === t && this.returnbook(), 2 === t && this.borrowbook(o);
    }
});