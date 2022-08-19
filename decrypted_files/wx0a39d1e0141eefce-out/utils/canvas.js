Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = {
    data: {
        percentage: "",
        animTime: "",
        color: ""
    },
    options: {
        run: function(t, a, e) {
            var c = this, n = 2 * Math.PI / 350 * 100 + 1.2 * Math.PI;
            c.data.ctx2.setStrokeStyle("#1D1E26"), c.data.ctx2.setLineWidth("4"), c.data.ctx2.setLineCap("butt"), 
            c.data.ctx2.beginPath(), c.data.ctx2.arc(a, e, a - 8, 1.2 * Math.PI, n), c.data.ctx2.stroke();
            var i = c.data.color, r = 2 * Math.PI / 350 * t + 1.2 * Math.PI;
            c.data.ctx2.setStrokeStyle(i), c.data.ctx2.setLineWidth("4"), c.data.ctx2.setLineCap("butt"), 
            c.data.ctx2.beginPath(), c.data.ctx2.arc(a, e, a - 8, 1.2 * Math.PI, r), c.data.ctx2.stroke(), 
            c.data.ctx2.setFontSize(16), c.data.ctx2.setFillStyle(i), c.data.ctx2.setTextAlign("center"), 
            c.data.ctx2.setTextBaseline("middle"), c.data.ctx2.fillText(t + "%", a, e - 10), 
            c.data.ctx2.draw();
        },
        canvasTap: function(t, a, e, c, n) {
            var i = this;
            if (++t > a) return !1;
            i.run(t, c, n), setTimeout(function() {
                i.canvasTap(t, a, e, c, n);
            }, e);
        },
        draw: function(t, a, e, c) {
            var n = this, i = wx.createCanvasContext(t);
            n.setData({
                ctx2: i,
                percentage: a,
                animTime: e,
                color: c
            });
            var r = n.data.animTime / n.data.percentage;
            wx.createSelectorQuery().select("#" + t).boundingClientRect(function(t) {
                var a = parseInt(t.width / 2), e = parseInt(t.height / 2);
                n.canvasTap(0, n.data.percentage, r, a, e);
            }).exec();
        }
    }
};