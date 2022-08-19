Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.uploadVoice = function(a, i) {
    return new Promise(function(s, e) {
        t().then(function(t) {
            var n = i + "_" + Date.now(), c = "https://static2.rainbowclass.cn/static/static-rainbow/comment/" + n + ".mp3";
            0 == t.code && t.data.accessid && t.data.policy && t.data.signature && wx.uploadFile({
                url: "https://static2.rainbowclass.cn",
                filePath: a,
                name: "file",
                formData: {
                    name: n,
                    key: "static/static-rainbow/comment/" + n + ".mp3",
                    policy: t.data.policy,
                    OSSAccessKeyId: t.data.accessid,
                    success_action_status: "200",
                    signature: t.data.signature
                },
                success: function() {
                    s(c);
                },
                fail: function(t) {
                    wx.showToast({
                        title: "云上传失败",
                        icon: "none"
                    }), e(t);
                }
            });
        }, function(t) {
            wx.showToast({
                title: "签名失败",
                icon: "none"
            }), e(t);
        });
    });
};

var t = require("./api").miniAppOssSign2;