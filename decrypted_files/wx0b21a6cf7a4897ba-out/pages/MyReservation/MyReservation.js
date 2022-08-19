var e = getApp();

require("../../utils/util.js");

Page({
    data: {
        iconimg: {
            default_pic: "../../images/default_pic@2x.png",
            select_2: "../../images/select_2@2x.png",
            selected_2: "../../images/selected_2@2x.png"
        },
        avatarUrl: "",
        nickName: "",
        openid: "",
        poplist: [ "重复预约", "问题已解决", "预约已过期", "其他" ],
        size: 10,
        pageIndex: 0,
        list: [],
        noMoreData: !1,
        errorMsg: "",
        showPopView: !1,
        popSelectedReason: "",
        selectedItemIdx: -1
    },
    onLoad: function(t) {
        var a = this;
        e.getUserInfo(function(e) {
            a.setData({
                avatarUrl: e.avatarUrl,
                nickName: e.nickName,
                openid: e.u_openid
            }), a.getBespeakList();
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            pageIndex: 0
        }), this.getBespeakList();
    },
    onReachBottom: function() {
        this.data.noMoreData || this.getBespeakList();
    },
    getBespeakList: function(t) {
        var a = this;
        wx.showNavigationBarLoading(), wx.showLoading({
            title: "加载中"
        }), e.apiRequestGet({
            urlMethod: "api/Question/getBespeakList",
            data: {
                openid: this.data.openid,
                page: this.data.pageIndex ? this.data.pageIndex : 0,
                size: this.data.size
            },
            success: function(e) {
                var t = e.data;
                if (t) {
                    var i = !((a.data.pageindex + 1) * a.data.size < t.pageCount), s = a.data.list;
                    0 == a.data.pageIndex && (s = []);
                    for (var o in t.list) {
                        if (null != t.list[o].lawyerTime) {
                            n = t.list[o].lawyerTime.split(" ");
                            t.list[o].date = n[0], t.list[o].time = n[1];
                        } else {
                            var n = t.list[o].userTime.split(" ");
                            t.list[o].date = n[0], t.list[o].time = n[1];
                        }
                        s.push(t.list[o]);
                    }
                    a.setData({
                        list: s,
                        noMoreData: i
                    });
                }
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), wx.hideLoading();
            },
            fail: function(e) {
                wx.hideNavigationBarLoading(), wx.stopPullDownRefresh(), wx.hideLoading();
            }
        });
    },
    cancelEvent: function(e) {
        this.setData({
            selectedItemIdx: e.currentTarget.dataset.value,
            showPopView: !0
        });
    },
    selectedReason: function(e) {
        this.setData({
            popSelectedReason: e.currentTarget.dataset.value
        });
    },
    hidePop: function(e) {
        this.setData({
            showPopView: !1
        });
    },
    popSubmit: function(t) {
        var a = this;
        if (0 == this.data.popSelectedReason.length) return a.setData({
            errorMsg: "请选择取消原因"
        }), void setTimeout(function() {
            a.setData({
                errorMsg: ""
            });
        }, 1e3);
        wx.showLoading({
            title: ""
        });
        var i = this.data.list, s = i[this.data.selectedItemIdx];
        e.apiRequestPost({
            urlMethod: "api/Question/setBespeakState",
            data: {
                remarks: this.data.popSelectedReason,
                bespeakid: s.id
            },
            success: function(e) {
                wx.hideLoading(), s.status = 3, a.setData({
                    list: i,
                    showPopView: !1
                }), wx.showToast({
                    title: "成功",
                    icon: "success",
                    duration: 1
                });
            },
            fail: function(e) {
                wx.hideLoading();
            }
        });
    }
});