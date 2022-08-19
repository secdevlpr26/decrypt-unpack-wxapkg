Page({
    data: {
        longitude: "",
        latitude: "",
        markers: [ {
            iconPath: "../../../../img/location.png",
            id: 0,
            latitude: "",
            longitude: "",
            width: 50,
            height: 50
        } ]
    },
    regionchange: function(t) {
        console.log(t.type);
    },
    markertap: function(t) {
        console.log(t.markerId);
    },
    controltap: function(t) {
        console.log(t.controlId);
    },
    onLoad: function(t) {
        this.setData({
            longitude: t.gdLongitude,
            latitude: t.gdLatitude,
            markers: [ {
                iconPath: "../../../../img/location.png",
                id: 0,
                latitude: t.gdLatitude,
                longitude: t.gdLongitude,
                width: 30,
                height: 40
            } ]
        });
    }
});