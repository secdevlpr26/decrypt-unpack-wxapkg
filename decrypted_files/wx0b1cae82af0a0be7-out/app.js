function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

e(require("utils/api")), e(require("utils/oauth"));

App({
    onLaunch: function(e) {},
    globalData: {
        location: null,
        access_token: "7a64a981fecfac48e08be837164e0206"
    }
});