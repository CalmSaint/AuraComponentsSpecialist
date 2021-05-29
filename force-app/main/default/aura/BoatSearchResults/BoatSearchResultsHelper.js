({
    onSearch : function(component,event) {
        //get all boat types
        var action = component.get('c.getBoats');
        action.setParams({'boatTypeId':component.get('v.boatTypeId')});
        action.setCallback(this,function(response){
            if(response.getState()==='SUCCESS'){
               console.log(response.getReturnValue());
               component.set('v.boats',response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
   }
})
