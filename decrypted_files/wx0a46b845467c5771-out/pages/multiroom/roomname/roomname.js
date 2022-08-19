Page({
    data: {
        roomName: "",
        userName: "",
        tapTime: ""
    },
    bindRoomName: function(a) {
        this.setData({
            roomName: a.detail.value
        });
    },
    create: function() {
        var a = this, e = new Date();
        if (!(e - this.data.tapTime < 1e3)) if (a.data.roomName || (a.data.roomName = "新建多人音视频"), 
        /[<>*{}()^%$#@!~&= ]/.test(a.data.roomName)) wx.showModal({
            title: "提示",
            content: "名称不能为空或包含特殊字符",
            showCancel: !1
        }); else {
            var t = "../room/room?type=create&roomName=" + a.data.roomName + "&userName=" + a.data.userName;
            wx.redirectTo({
                url: t
            }), wx.showToast({
                title: "进入房间",
                icon: "success",
                duration: 1e3
            }), a.setData({
                tapTime: e
            });
        }
    },
    onLoad: function(a) {
        this.setData({
            userName: a.userName || ""
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            path: "/pages/main/main",
            imageUrl: "https://mc.qcloudimg.com/static/img/dacf9205fe088ec2fef6f0b781c92510/share.png"
        };
    }
});