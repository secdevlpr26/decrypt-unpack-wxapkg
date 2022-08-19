var a = getApp();

Page({
    data: {
        list: [],
        imagewidth: 0,
        page: 0,
        pageCount: 0,
        info: "",
        haveMore: "",
        imageUrl: "",
        year: 2018
    },
    onLoad: function(t) {
        var e = this;
        wx.getSystemInfo({
            success: function(a) {
                var t = a.windowWidth;
                e.setData({
                    imagewidth: .5 * (t - 45)
                });
            }
        }), e.setData({
            info: a.globalData.info,
            year: new Date().getFullYear()
        }), e.getAlbumList(), e.getUserImageByType();
    },
    getAlbumList: function() {
        wx.showNavigationBarLoading();
        var t = this;
        a.apiRequestGet({
            urlMethod: "api/Users/getAlbumList",
            data: {
                page: t.data.page,
                size: 8
            },
            success: function(a) {
                if (wx.hideNavigationBarLoading(), a.data) if (t.setData({
                    pageCount: a.data.pageCount,
                    haveMore: a.data.page < a.data.pageCount - 1
                }), a.data.page < a.data.pageCount) {
                    if (0 == a.data.page) t.setData({
                        list: a.data.list
                    }); else {
                        t.data.list.push.apply(t.data.list, a.data.list);
                        var e = t.data.list;
                        t.setData({
                            list: e
                        });
                    }
                    t.data.page++;
                } else t.setData({
                    list: a.data.list
                });
            },
            fail: function(a) {
                wx.hideNavigationBarLoading(), wx.showToast({
                    title: "加载失败",
                    icon: "warn",
                    duration: 2e3
                });
            }
        });
    },
    getUserImageByType: function() {
        var t = this;
        a.apiRequestGet({
            urlMethod: "api/Users/getUserImageByType",
            data: {
                type: 2
            },
            success: function(a) {
                if (0 == a.data.length) {
                    t.setData({
                        imageUrl: "../../images/banner_lsxc.png"
                    });
                } else null == a.data.imageUrl && (a.data[0].imageUrl = "../../images/banner_lsxc.png"), 
                t.setData({
                    imageUrl: a.data[0].imageUrl
                });
            },
            fail: function(a) {}
        });
    },
    more: function() {
        this.getAlbumList();
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), this.data.page = 0, this.getAlbumList();
    },
    saveNumber: function() {
        wx.addPhoneContact({
            lastName: a.globalData.info.officeName,
            firstName: a.globalData.info.officeName,
            mobilePhoneNumber: a.globalData.info.tel,
            organization: a.globalData.info.officeName,
            success: function() {},
            fail: function(a) {}
        });
    },
    callClick: function() {
        wx.makePhoneCall({
            phoneNumber: a.globalData.info.tel,
            success: function() {},
            fail: function() {}
        });
    }
});