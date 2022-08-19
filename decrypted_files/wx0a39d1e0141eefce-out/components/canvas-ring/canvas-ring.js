var t = wx.getSystemInfoSync().windowWidth;

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        canvasWidth: {
            type: Number,
            value: .4 * t
        },
        lineWidth: {
            type: Number,
            value: 5
        },
        lineColor: {
            type: String,
            value: "#3BD1D9"
        },
        title: {
            type: String,
            value: ""
        },
        value: {
            type: Number,
            value: 45
        },
        valueColor: {
            type: String,
            value: "#3BD1D9"
        },
        maxValue: {
            type: Number,
            value: 350
        },
        minValue: {
            type: Number,
            value: 0
        },
        suffix: {
            type: null,
            value: "%"
        },
        startDegree: {
            type: Number,
            value: 306
        }
    },
    data: {
        canvasWidth: .4 * t,
        isMarginTop: !0
    },
    methods: {
        showCanvasRing: function(t) {
            0 == this.data.title.replace(/(^\s*)|(\s*$)/g, "").length && this.setData({
                isMarginTop: !1
            });
            var e = wx.createCanvasContext("circleBar", this), a = this.data.canvasWidth / 2, i = this.data.startDegree, s = this.data.maxValue, l = this.data.minValue, r = this.data.value;
            this.setData({
                valueColor: t
            });
            var h = t, n = this.data.lineWidth, u = (r - l) / (s - l) * 360;
            e.translate(a, a), e.beginPath(), e.setStrokeStyle("#FAFAFF"), e.setLineWidth(n);
            var o = 2 * Math.PI / 350 * 100 + 1.2 * Math.PI;
            e.arc(0, 0, a - 10, o, 1.2 * Math.PI, !0), e.stroke(), e.closePath(), e.beginPath(), 
            e.setStrokeStyle(h), e.setLineWidth(n), e.arc(0, 0, a - 10, i * Math.PI / 180 - .5 * Math.PI, u * Math.PI / 180 + i * Math.PI / 180 - .5 * Math.PI, !1), 
            e.stroke(), e.closePath(), e.draw();
        }
    }
});