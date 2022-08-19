module.exports = {
    wxAutoImageCal: function(o, e) {
        var i = 0, t = 0, g = 0, n = 0, h = {};
        return wx.getSystemInfo({
            success: function(s) {
                console.dir(s), i = s.windowWidth, t = s.windowHeight, console.log("windowWidth" + i), 
                o > i ? (g = i, console.log("autoWidth" + g), n = g * e / o, console.log("autoHeight" + n), 
                h.imageWidth = g, h.imageheight = n) : (h.imageWidth = o, h.imageheight = e);
            }
        }), h;
    }
};