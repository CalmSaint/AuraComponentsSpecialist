({
    doInit:function(component,event,helper){
        helper.onInit(component,event);
    },

    onRecordUpdated : function(component, event, helper) {
        //record updated successfully
        if(Boolean($A.get('e.force:showToast'))){
            var resultsToast = $A.get("e.force:showToast");
            resultsToast.setParams({
                "title": "Updated",
                "message": "Record Updated Successfully."
            });
            resultsToast.fire();
        }
        else{
            alert('Record Updated Successfully');
        }
    },

    onSave: function(component,event,helper){
        /*var validation = component.find('boatReviewForm').reduce(function(validSoFar,inputCmp){
            inputCmp.reportValidity();
            return validSoFar && inputCmp.checkValidity();
        },true);*/


        if(component.find('boatReviewForm').checkValidity()){
            
            component.find('service').saveRecord(function(saveResult){
                if(saveResult.state==='SUCCESS' || saveResult.state==='DRAFT'){
                    //record is saved successfully
                    if(Boolean($A.get('e.force:showToast'))){
                        var resultsToast = $A.get("e.force:showToast");
                        resultsToast.setParams({
                            "title": "Saved",
                            "message": "Record Saved Successfully."
                        });
                        resultsToast.fire();
                    }
                    else{
                        alert('Record Saved Successfully');
                    }
                    //fire BoatReviewAdded event for BoatDetails to handler
                    component.getEvent('BoatReviewAdded').fire();
                    helper.onInit(component,event,helper);
                }
                else if (saveResult.state === "INCOMPLETE") {
                    // handle the incomplete state
                    console.log("User is offline, device doesn't support drafts.");
                } else if (saveResult.state === "ERROR") {
                    // handle the error state
                } 
            });
        }
    }
})
