({
    doInit : function(component, event, helper) {
        //check if new button should be available
        component.set('v.showNewButton',Boolean($A.get("e.force:createRecord")));

        //get all boat types
        var action = component.get('c.getAvailableBoatTypes');
        action.setCallback(this,function(response){
            if(response.getState()==='SUCCESS'){
                component.set('v.boatTypes',response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },

    createNewBoat: function(component,event,helper){
        const boatType=component.get('v.selectedType');
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Boat__c",
            "defaultFieldValues": {
                'BoatType__c' : boatType
            }
        });
        createRecordEvent.fire();
    },

    onTypeChange: function(component,event,helper){
        component.set('v.selectedType',component.find('boatSelect').get('v.value'));
    },

    onFormSubmit: function(component,event,helper){
        let formSubmit = component.getEvent('formsubmit');
        let formData = { boatTypeId : component.get('v.selectedType')};
        formSubmit.setParams({'formData' : formData});
        formSubmit.fire();
    }
})