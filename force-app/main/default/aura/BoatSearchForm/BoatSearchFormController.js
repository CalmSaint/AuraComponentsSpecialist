({
    doInit : function(component, event, helper) {
        //check if new button should be available
        component.set('v.showNewButton',Boolean($A.get("e.force:createRecord")));

        //get all boat types
        var action = component.get('c.getAvailableBoatTypes');
        action.setCallback(this,function(response){
            if(response.getState()==='SUCCESS'){
                console.log(response.getReturnValue());
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
    }
})