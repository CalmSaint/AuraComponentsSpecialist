({
    onFullDetails : function(component, event, helper) {
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": component.get('v.boat.Id'),
            "slideDevName": "details"
        });
        navEvt.fire();
    },

    doInit: function(component,event,helper){
        component.set('v.showFullDetailsButton',Boolean($A.get("e.force:navigateToSObject")));
    }
})
