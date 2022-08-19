Component({
    properties: {
        title: {
            type: String,
            value: "已领"
        },
        step: {
            type: Number,
            value: -1,
            observer: function(t, a) {
                this.data.x = 46 + 35 * Math.sin(2 * Math.PI / 360 * (200 + 310 * t)), this.data.y = 46 - 35 * Math.cos(2 * Math.PI / 360 * (200 + 310 * t)), 
                t > .52 ? (this.data.left_background = "#bb825b", this.data.right_background = "#bb825b", 
                this.data.img_background = "#f2ecec", this.data.left_deg = 0, this.data.right_deg = (2 * (1 - t + .005) * -160 - 20).toFixed(1)) : (this.data.left_background = "#f2ecec", 
                this.data.right_background = "#f2ecec", this.data.img_background = "#bb825b", this.data.left_deg = (2 * (t - .005) * 160 + 20).toFixed(1), 
                this.data.right_deg = 0), this.data.receivePercent = parseInt(100 * t), this.setData({
                    x: this.data.x,
                    y: this.data.y,
                    left_background: this.data.left_background,
                    left_deg: this.data.left_deg,
                    right_background: this.data.right_background,
                    right_deg: this.data.right_deg,
                    img_background: this.data.img_background,
                    receivePercent: this.data.receivePercent
                });
            }
        }
    },
    data: {
        x: 0,
        y: 0,
        left_background: "#f2ecec",
        left_deg: 0,
        right_background: "#f2ecec",
        right_deg: 0,
        img_background: "#bb825b",
        receivePercent: 0
    },
    methods: {}
});