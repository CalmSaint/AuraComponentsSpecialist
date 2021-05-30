({
    onBoatClick : function(component, event, helper) {
        let boatSelectEvent = component.getEvent('BoatSelect');
        boatSelectEvent.setParams({boatId : component.get('v.boat.Id')});
        boatSelectEvent.fire();

        let boatSelectedEvent = $A.get('e.c:BoatSelected');
        boatSelectedEvent.setParams({ 'boat' : component.get('v.boat') });
        boatSelectedEvent.fire();

        let plotMapMarkerEvent = $A.get('e.c:PlotMapMarker');
        plotMapMarkerEvent.setParams({'lat':component.get('v.boat.Geolocation__Latitude__s'),
                                      'long':component.get('v.boat.Geolocation__Longitude__s')});
        plotMapMarkerEvent.fire();
    }
})
