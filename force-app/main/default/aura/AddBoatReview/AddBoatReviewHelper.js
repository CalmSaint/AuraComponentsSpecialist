({
    onInit : function(component,event) {
        //get a new record
        component.find('service').getNewRecord('BoatReview__c',null,false,$A.getCallback(function(){
            //var record = component.get('v.boatReview');
            //var error = component.get('v.recordError');
            /*if(error || (record === null)) {
                console.log("Error initializing record template: " + error);
                return;
            }*/
            component.set('v.boatReview.Boat__c',component.get('v.boat.Id'));
        }));
        
    }
})
