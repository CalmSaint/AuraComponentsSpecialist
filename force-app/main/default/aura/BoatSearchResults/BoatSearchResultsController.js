({
    doInit : function(component, event, helper) {
        helper.onSearch(component,event);
    },

    handleBoatSearch: function(component,event,helper){
        component.set('v.selectedType',event.getParam('boatType'));
        helper.onSearch(component,event);
    }
})
