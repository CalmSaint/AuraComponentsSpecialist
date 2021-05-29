({
    onBoatClick : function(component, event, helper) {
        let boatSelect = component.getEvent('BoatSelect');
        boatSelect.setParams({boatId : component.get('v.boat.Id')});
        boatSelect.fire();
    }
})
