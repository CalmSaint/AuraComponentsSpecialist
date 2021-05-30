({
    onInit : function(component,event,helper) {
        var action = component.get('c.getAll');
        action.setParams({'boatId':component.get('v.boat.Id')});
        action.setCallback(this,function(response){
            let state = response.getState();
            if(state==='SUCCESS' && response.getReturnValue()){
                component.set('v.boatReviews',response.getReturnValue());
            }
            else{
                if(Boolean($A.get('e.force:showToast'))){
                    var resultsToast = $A.get("e.force:showToast");
                    resultsToast.setParams({
                        "title": "Error",
                        "message": "Error in getting records",
                        "type" : 'error'
                    });
                    resultsToast.fire();
                }
            }
        });
        $A.enqueueAction(action);
    }
})
