var e = require("./utils/eventemitter2.js").EventEmitter2;

App({
    onLaunch: function(t) {
        this.event = new e(), this.globalData.query = t.query || {}, this.globalData.scene = t.scene || 0;
    },
    getUserInfo: function(e) {
        var t = this;
        this.globalData.userInfo ? "function" == typeof e && e(this.globalData.userInfo) : wx.login({
            success: function() {
                wx.getUserInfo({
                    success: function(n) {
                        t.globalData.userInfo = n.userInfo, "function" == typeof e && e(t.globalData.userInfo);
                    }
                });
            }
        });
    },
    globalData: {
        query: {},
        scene: 0,
        userInfo: null,
        preSubmitList: [],
        product: {}
    }
});