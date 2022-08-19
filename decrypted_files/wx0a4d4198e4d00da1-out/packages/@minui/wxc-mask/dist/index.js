Object.defineProperty(exports, "__esModule", {
    value: true
});

function hexToRgb(hex) {
    var color = [];
    var rgb = [];
    hex = hex.replace(/#/, "");
    if (hex.length === 3) {
        var tmp = [];
        for (var i = 0; i < 3; i++) {
            tmp.push(hex.charAt(i) + hex.charAt(i));
        }
        hex = tmp.join("");
    }
    for (var _i = 0; _i < 3; _i++) {
        color[_i] = "0x" + hex.substr(_i * 2, 2);
        rgb.push(parseInt(Number(color[_i])));
    }
    return rgb.join(",");
}

exports.default = Component({
    properties: {
        status: {
            type: String,
            value: "hide",
            observer: function observer(status) {
                if (status === "show") {
                    if (!getApp().globalData) {
                        Object.assign(getApp(), {
                            globalData: {}
                        });
                    }
                    var globalData = getApp().globalData;
                    var zIndex = (globalData._zIndex || 1e3) + 1;
                    globalData._zIndex = zIndex;
                    this.setData({
                        zIndex: zIndex
                    });
                }
            }
        },
        opacity: {
            type: [ String, Number ],
            value: .6
        },
        backgroundColor: {
            type: String,
            value: "#000000"
        },
        locked: {
            type: [ String ],
            value: "hide"
        },
        contentAlign: {
            type: String,
            value: "tl"
        },
        __positionStyle: {
            type: String,
            value: "top:0; left:0"
        }
    },
    data: {
        zIndex: 1e3
    },
    methods: {
        toggle: function toggle(mode) {
            var status = this.data.status;
            if (typeof mode !== "boolean") {
                mode = status !== "show";
            }
            if (mode) {
                this.show();
            } else {
                this.hide();
            }
        },
        show: function show() {
            this.setData({
                status: "show"
            });
        },
        hide: function hide() {
            this.setData({
                status: "hide"
            });
        },
        omMaskTap: function omMaskTap(event) {
            var data = this.data;
            var detail = event.detail;
            var option = {};
            if (data.locked && data.locked !== "true") {
                this.setData({
                    status: "hide"
                });
                this.triggerEvent("masktap", detail, option);
            }
        }
    },
    attached: function attached() {
        var data = this.data;
        this.setData({
            backgroundColor: hexToRgb(data.backgroundColor)
        });
        var contentAlignStyle = void 0;
        switch (data.contentAlign) {
          case "tl":
            {
                contentAlignStyle = "top:0; left:0";
                break;
            }

          case "tr":
            {
                contentAlignStyle = "top:0; right:0";
                break;
            }

          case "bl":
            {
                contentAlignStyle = "bottom:0; left:0";
                break;
            }

          case "br":
            {
                contentAlignStyle = "bottom:0; right:0";
                break;
            }

          case "cc":
            {
                contentAlignStyle = "top: 50%; left: 50%; transform: translate(-50%, -50%);";
                break;
            }
        }
        this.setData({
            __positionStyle: contentAlignStyle
        });
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJoZXhUb1JnYiIsImhleCIsImNvbG9yIiwicmdiIiwicmVwbGFjZSIsImxlbmd0aCIsInRtcCIsImkiLCJwdXNoIiwiY2hhckF0Iiwiam9pbiIsInN1YnN0ciIsInBhcnNlSW50IiwiTnVtYmVyIiwicHJvcGVydGllcyIsInN0YXR1cyIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsIm9ic2VydmVyIiwiZ2V0QXBwIiwiZ2xvYmFsRGF0YSIsIk9iamVjdCIsImFzc2lnbiIsInpJbmRleCIsIl96SW5kZXgiLCJzZXREYXRhIiwib3BhY2l0eSIsImJhY2tncm91bmRDb2xvciIsImxvY2tlZCIsImNvbnRlbnRBbGlnbiIsIl9fcG9zaXRpb25TdHlsZSIsImRhdGEiLCJtZXRob2RzIiwidG9nZ2xlIiwibW9kZSIsInNob3ciLCJoaWRlIiwib21NYXNrVGFwIiwiZXZlbnQiLCJkZXRhaWwiLCJvcHRpb24iLCJ0cmlnZ2VyRXZlbnQiLCJhdHRhY2hlZCIsImNvbnRlbnRBbGlnblN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLFNBQVNBLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQXVCO0FBQ25CLE1BQUlDLFFBQVEsRUFBWjtBQUNBLE1BQUlDLE1BQU0sRUFBVjs7QUFFQUYsUUFBTUEsSUFBSUcsT0FBSixDQUFZLEdBQVosRUFBaUIsRUFBakIsQ0FBTjs7QUFFQSxNQUFJSCxJQUFJSSxNQUFKLEtBQWUsQ0FBbkIsRUFBc0I7QUFDcEIsUUFBSUMsTUFBTSxFQUFWOztBQUVBLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLENBQXBCLEVBQXVCQSxHQUF2QixFQUE0QjtBQUMxQkQsVUFBSUUsSUFBSixDQUFTUCxJQUFJUSxNQUFKLENBQVdGLENBQVgsSUFBZ0JOLElBQUlRLE1BQUosQ0FBV0YsQ0FBWCxDQUF6QjtBQUNEOztBQUVETixVQUFNSyxJQUFJSSxJQUFKLENBQVMsRUFBVCxDQUFOO0FBQ0Q7O0FBRUQsT0FBSyxJ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LDhCQUFvQixlQUFwQjtBQUNBO0FBQ0Q7O0FBRUQsV0FBSyxJQUFMO0FBQVc7QUFDVEEsOEJBQW9CLGdCQUFwQjtBQUNBO0FBQ0Q7O0FBRUQsV0FBSyxJQUFMO0FBQVc7QUFDVEEsOEJBQW9CLGtCQUFwQjtBQUNBO0FBQ0Q7O0FBRUQsV0FBSyxJQUFMO0FBQVc7QUFDVEEsOEJBQW9CLG1CQUFwQjtBQUNBO0FBQ0Q7O0FBRUQsV0FBSyxJQUFMO0FBQVc7QUFDVEEsOEJBQW9CLHdEQUFwQjtBQUNBO0FBQ0Q7QUF4Qkg7O0FBMkJBLFNBQUtsQixPQUFMLENBQWE7QUFDWEssdUJBQWlCYTtBQUROLEtBQWI7QUFJRCIsImZpbGUiOiJpbmRleC53eGMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcbiAgICBsZXQgY29sb3IgPSBbXTtcbiAgICBsZXQgcmdiID0gW107XG5cbiAgICBoZXggPSBoZXgucmVwbGFjZSgvIy8sICcnKTtcblxuICAgIGlmIChoZXgubGVuZ3RoID09PSAzKSB7XG4gICAgICBsZXQgdG1wID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIHRtcC5wdXNoKGhleC5jaGFyQXQoaSkgKyBoZXguY2hhckF0KGkpKTtcbiAgICAgIH1cblxuICAgICAgaGV4ID0gdG1wLmpvaW4oJycpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBjb2xvcltpXSA9ICcweCcgKyBoZXguc3Vic3RyKGkgKiAyLCAyKTtcbiAgICAgIHJnYi5wdXNoKHBhcnNlSW50KE51bWJlcihjb2xvcltpXSkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmdiLmpvaW4oJywnKTtcbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBzdGF0dXM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ2hpZGUnLFxuICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdzaG93Jykge1xuICAgICAgICAgICAgaWYgKCFnZXRBcHAoKS5nbG9iYWxEYXRhKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZ2V0QXBwKCksIHtnbG9iYWxEYXRhOiB7fX0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZ2xvYmFsRGF0YSA9IGdldEFwcCgpLmdsb2JhbERhdGFcbiAgICAgICAgICAgIGxldCB6SW5kZXggPSAoZ2xvYmFsRGF0YS5fekluZGV4IHx8IDEwMDApICsgMVxuICAgICAgICAgICAgZ2xvYmFsRGF0YS5fekluZGV4ID0gekluZGV4XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICB6SW5kZXg6IHpJbmRleFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvcGFjaXR5OiB7XG4gICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgIHZhbHVlOiAwLjZcbiAgICAgIH0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJyMwMDAwMDAnXG4gICAgICB9LFxuICAgICAgbG9ja2VkOiB7XG4gICAgICAgIHR5cGU6IFtTdHJpbmddLFxuICAgICAgICB2YWx1ZTogJ2hpZGUnXG4gICAgICB9LFxuICAgICAgY29udGVudEFsaWduOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICd0bCdcbiAgICAgIH0sXG4gICAgICBfX3Bvc2l0aW9uU3R5bGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ3RvcDowOyBsZWZ0OjAnXG4gICAgICB9XG4gICAgfSxcblxuICAgIGRhdGE6IHtcbiAgICAgIHpJbmRleDogMTAwMFxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICB0b2dnbGUobW9kZSkge1xuICAgICAgICBsZXQgc3RhdHVzID0gdGhpcy5kYXRhLnN0YXR1c1xuICAgICAgICBpZiAodHlwZW9mIG1vZGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIG1vZGUgPSBzdGF0dXMgIT09ICdzaG93J1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb2RlKSB7XG4gICAgICAgICAgdGhpcy5zaG93KClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmhpZGUoKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBzdGF0dXM6ICdzaG93J1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBoaWRlKCkge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHN0YXR1czogJ2hpZGUnXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG9tTWFza1RhcDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICBsZXQgZGV0YWlsID0gZXZlbnQuZGV0YWlsO1xuICAgICAgICBsZXQgb3B0aW9uID0ge307XG5cbiAgICAgICAgaWYgKGRhdGEubG9ja2VkICYmIGRhdGEubG9ja2VkICE9PSAndHJ1ZScpIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgc3RhdHVzOiAnaGlkZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnbWFza3RhcCcsIGRldGFpbCwgb3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IGRhdGEgPSB0aGlzLmRhdGE7XG5cbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogaGV4VG9SZ2IoZGF0YS5iYWNrZ3JvdW5kQ29sb3IpXG4gICAgICB9KTtcblxuXG4gICAgICBsZXQgY29udGVudEFsaWduU3R5bGU7XG5cbiAgICAgIHN3aXRjaCAoZGF0YS5jb250ZW50QWxpZ24pIHtcbiAgICAgICAgY2FzZSAndGwnOiB7XG4gICAgICAgICAgY29udGVudEFsaWduU3R5bGUgPSAndG9wOjA7IGxlZnQ6MCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlICd0cic6IHtcbiAgICAgICAgICBjb250ZW50QWxpZ25TdHlsZSA9ICd0b3A6MDsgcmlnaHQ6MCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlICdibCc6IHtcbiAgICAgICAgICBjb250ZW50QWxpZ25TdHlsZSA9ICdib3R0b206MDsgbGVmdDowJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2JyJzoge1xuICAgICAgICAgIGNvbnRlbnRBbGlnblN0eWxlID0gJ2JvdHRvbTowOyByaWdodDowJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ2NjJzoge1xuICAgICAgICAgIGNvbnRlbnRBbGlnblN0eWxlID0gJ3RvcDogNTAlOyBsZWZ0OiA1MCU7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgX19wb3NpdGlvblN0eWxlOiBjb250ZW50QWxpZ25TdHlsZVxuICAgICAgfSk7XG5cbiAgICB9XG4gIH0iXX0=