({
    onPlotMapMarker: function (component,event,helper) { 
        let lat = event.getParam('lat');
        let long = event.getParam('long');
        let label = event.getParam('label');

        component.set('v.mapMarkers',[{location : {
            Latitude : lat,
            Longitude : long
        }}]);

        component.set('v.markersTitle',label);
        component.set('v.zoomLevel',10);
    }   
})