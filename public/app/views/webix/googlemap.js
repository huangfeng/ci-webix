define(function() {});

webix.protoUI({ name: "google-map",
    $init: function() {
        this.$view.innerHTML = "<div class='webix_map_content' style='width:100%;height:100%'></div>", this._contentobj = this.$view.firstChild, this.map = null, this.$ready.push(this.render)
    },
    render: function() {
        if ("undefined" == typeof google || "undefined" == typeof google.maps) {
            var e = "webix_callback_" + webix.uid();
            window[e] = webix.bind(function() {
                this._initMap.call(this, !0)
            }, this);
            var t = document.createElement("script");
            t.type = "text/javascript", t.src = "//maps.google.com/maps/api/js?sensor=false&callback=" + e, document.getElementsByTagName("head")[0].appendChild(t)
        } else this._initMap()
    },
    _initMap: function() {
        var e = this.config;
        this.map = new google.maps.Map(this._contentobj, {
            zoom: e.zoom,
            center: new google.maps.LatLng(e.center[0], e.center[1]),
            mapTypeId: google.maps.MapTypeId[e.mapType]
        }), webix._ldGMap = null
    },
    center_setter: function(e) {
        return this.map && this.map.setCenter(new google.maps.LatLng(e[0], e[1])), e
    },
    mapType_setter: function(e) {
        return this.map && this.map.setMapTypeId(google.maps.MapTypeId[e]), e
    },
    zoom_setter: function(e) {
        return this.map && this.map.setZoom(e), e
    },
    defaults: {
        zoom: 5,
        center: [39.5, -98.5],
        mapType: "ROADMAP"
    },
    $setSize: function() {
        webix.ui.view.prototype.$setSize.apply(this, arguments), this.map && google.maps.event.trigger(this.map, "resize")
    }
}, webix.ui.view)