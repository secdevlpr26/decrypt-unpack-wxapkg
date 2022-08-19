var e = getApp();

Page({
    data: {
        pullDownRefreshFlag: !0,
        isclose: !1,
        page: 1,
        SiteID: "",
        ID: "",
        recordcount: 99,
        recordList: [],
        falgAjax: !0,
        baseUrl: e.globalData.siteBaseUrl,
        isBlank: !1,
        pagesize: 10,
        recordTimeList: [],
        shape: !1,
        currentUserID: ""
    },
    onPullDownRefresh: function() {
        var e = this;
        e.data.pullDownRefreshFlag && (e.setData({
            pullDownRefreshFlag: !1
        }), e.data.pullDownRefreshFlag = !1, e.data.optionsObj && (e.data.optionsObj.refresh = !0), 
        setTimeout(function() {
            e.getList(!0), e.setData({
                pullDownRefreshFlag: !0
            }), wx.stopPullDownRefresh();
        }, 1500));
    },
    onLoad: function(t) {
        var a = this;
        t.ID ? a.setData({
            ID: t.ID
        }) : a.setData({
            ID: e.globalData.businessCardInfo.businessCardID
        }), e.globalData && e.globalData.siteId && a.setData({
            SiteID: e.globalData.siteId
        }), this.getList(!0);
    },
    onShow: function() {},
    PullloadData: function() {
        this.getList();
    },
    getList: function(t) {
        var a = this;
        t && (a.data.recordcount = 99, a.data.recordList = []);
        var s = a.data.recordcount, o = a.data.recordList.length;
        if (s > o && a.data.falgAjax) {
            a.setData({
                falgAjax: !1
            });
            var r = Math.ceil(o / a.data.pagesize) + 1;
            e.sendRequest({
                url: "/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=getAccessRecordList&page=" + r + "&SiteID=" + a.data.SiteID + "&ID=" + a.data.ID,
                method: "GET",
                success: function(t) {
                    if (t.success) {
                        0 === t.info.list.length ? a.setData({
                            isBlank: !0
                        }) : a.setData({
                            isBlank: !1
                        });
                        for (var s = t.info.list, o = 0; o < s.length; o++) s[o].Image && s[o].Image.indexOf("https://wx.qlogo.cn/") < 0 && (s[o].Image = e.globalData.siteBaseUrl + s[o].Image), 
                        a.data.recordList.push(s[o]);
                        a.setData({
                            recordList: a.data.recordList,
                            falgAjax: !0,
                            recordcount: t.info.count
                        }), a.updateUnreadStatus();
                    } else console.log("getList fail" + t.msg);
                }
            });
        } else a.setData({
            shape: !0
        });
    },
    todetialFn: function(t) {
        var a = this, s = t.currentTarget.dataset.userid;
        this.setData({
            isclose: !0
        }), a.data.currentUserID != s && (a.setData({
            recordTimeList: []
        }), e.sendRequest({
            url: "/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=getAccessRecordForUserID&ID=" + a.data.ID + "&SiteID=" + a.data.SiteID + "&UserID=" + s,
            method: "GET",
            success: function(e) {
                e.success ? a.setData({
                    recordTimeList: e.info.list,
                    currentUserID: s
                }) : console.log("getAccessRecordForUserID fail" + e.msg);
            },
            fail: function(e) {
                console.log("getAccessRecordForUserID fail" + e);
            }
        }));
    },
    closeModal: function() {
        this.setData({
            isclose: !1
        });
    },
    callPhone: function(e) {
        wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.phone
        });
    },
    updateUnreadStatus: function() {
        var t = this;
        e.sendRequest({
            url: "/index.php?c=front/WxApp/BusinessCard/BusinessCard&a=updateUnreadStatus&ID=" + t.data.ID + "&SiteID=" + t.data.SiteID,
            method: "GET",
            success: function(e) {
                e.success || console.log("updateUnreadStatus fail" + e.msg);
            }
        });
    }
});