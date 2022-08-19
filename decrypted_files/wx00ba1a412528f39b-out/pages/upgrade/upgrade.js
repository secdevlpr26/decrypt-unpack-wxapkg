function n(n) {
    return function() {
        var e = n.apply(this, arguments);
        return new Promise(function(n, t) {
            function r(o, i) {
                try {
                    var a = e[o](i), u = a.value;
                } catch (n) {
                    n = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(n);
                    return void t(n);
                }
                if (!a.done) return Promise.resolve(u).then(function(n) {
                    r("next", n);
                }, function(n) {
                    r("throw", n);
                });
                n(u);
            }
            return r("next");
        });
    };
}

Page({
    data: {},
    onLoad: function(n) {},
    goToMinishop: function() {
        var e = this;
        wx.navigateToMiniProgram({
            appId: appId,
            path: "plugin-private://wx34345ae5855f892d/pages/home/home",
            success: function() {
                var t = n(regeneratorRuntime.mark(function n(t) {
                    return regeneratorRuntime.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            console.log("跳转成功: ", t);

                          case 1:
                          case "end":
                            return n.stop();
                        }
                    }, n, e);
                }));
                return function(n) {
                    return t.apply(this, arguments);
                };
            }(),
            fail: function(n) {
                console.log("跳转失败: ", n);
            }
        });
    }
});