Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = {
    getAccessToken: function() {
        var e = wx.getStorageSync("token");
        return !!(e && e.accessToken && e.expired) && (!(e.expired <= parseInt(new Date().getTime() / 1e3)) && e.accessToken);
    },
    refreshToken: function(e, t) {
        wx.setStorageSync("token", {
            accessToken: e,
            expired: parseInt(new Date().getTime() / 1e3) + parseInt(t) - 60
        });
    }
};