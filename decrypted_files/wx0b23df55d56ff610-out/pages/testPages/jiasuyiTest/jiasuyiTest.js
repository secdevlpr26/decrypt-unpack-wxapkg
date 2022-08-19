Page({
    onReady: function() {
        this.drawBigBall();
        var a = this;
        this.position = {
            x: 151,
            y: 151,
            vx: 0,
            vy: 0,
            ax: 0,
            ay: 0
        }, wx.onAccelerometerChange(function(t) {
            a.setData({
                x: t.x.toFixed(2),
                y: t.y.toFixed(2),
                z: t.z.toFixed(2)
            }), a.position.ax = Math.sin(t.x * Math.PI / 2), a.position.ay = -Math.sin(t.y * Math.PI / 2);
        }), this.interval = setInterval(function() {
            a.drawSmallBall();
        }, 17);
    },
    drawBigBall: function() {
        var a = wx.createContext();
        a.beginPath(0), a.arc(151, 151, 140, 0, 2 * Math.PI), a.setFillStyle("#ffffff"), 
        a.setStrokeStyle("#e8e8e8"), a.fill(), a.stroke(), wx.drawCanvas({
            canvasId: "big-ball",
            actions: a.getActions()
        });
    },
    drawSmallBall: function() {
        var a = this.position, t = "rgba(1,1,1,0)";
        a.x = a.x + a.vx, a.y = a.y + a.vy, a.vx = a.vx + a.ax, a.vy = a.vy + a.ay, Math.sqrt(Math.pow(Math.abs(a.x) - 151, 2) + Math.pow(Math.abs(a.y) - 151, 2)) >= 115 && (a.x > 151 && a.vx > 0 && (a.vx = 0), 
        a.x < 151 && a.vx < 0 && (a.vx = 0), a.y > 151 && a.vy > 0 && (a.vy = 0), a.y < 151 && a.vy < 0 && (a.vy = 0), 
        t = "#ff0000");
        var e = wx.createContext();
        e.beginPath(0), e.arc(a.x, a.y, 15, 0, 2 * Math.PI), e.setFillStyle("#ff5000"), 
        e.setStrokeStyle(t), e.fill(), wx.drawCanvas({
            canvasId: "small-ball",
            actions: e.getActions()
        });
    },
    data: {
        x: 0,
        y: 0,
        z: 0,
        dataArr: []
    },
    onUnload: function() {
        clearInterval(this.interval);
    },
    onLoad: function(a) {
        if (a.dataArr) {
            var t = a.dataArr.split("，");
            this.setData({
                dataArr: t
            });
        }
    },
    setResult: function(a) {
        var t = {
            name: "重力感应",
            val: a.currentTarget.dataset.val
        };
        this.goToGpsTest(t);
    },
    goToGpsTest: function(a) {
        var t = this.data.dataArr, e = JSON.stringify(a);
        t.push(e), console.log(t);
        var i = t.join("，");
        console.log(i), wx.redirectTo({
            url: "../gpsTest/gpsTest?dataArr=" + i
        });
    }
});