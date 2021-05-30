({
    doInit : function(component, event, helper) {
        helper.onInit(component,event,helper);
    },

    onUserInfoClick: function(component,event,helper){
        let dataSet = event.currentTarget.dataset;
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": dataSet.userid
        });
        navEvt.fire();
    }
})
