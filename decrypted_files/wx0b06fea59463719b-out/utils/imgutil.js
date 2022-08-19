module.exports = {
    imageUtil: function(i) {
        var e = {}, o = i.detail.width, t = i.detail.height, g = t / o;
        return console.log("originalWidth: " + o), console.log("originalHeight: " + t), 
        wx.getSystemInfo({
            success: function(i) {
                var l = i.windowWidth, n = i.windowHeight, h = n / l;
                console.log("windowWidth: " + l), console.log("windowHeight: " + n), g < h ? (e.imageWidth = l, 
                e.imageHeight = l * t / o) : (e.imageHeight = n, e.imageWidth = n * o / t);
            }
        }), console.log("缩放后的宽: " + e.imageWidth), console.log("缩放后的高: " + e.imageHeight), 
        e;
    }
};