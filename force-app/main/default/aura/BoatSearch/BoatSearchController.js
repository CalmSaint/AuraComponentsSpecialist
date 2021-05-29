({
    onFormSubmit : function(component, event, helper) {
        component.find('bsr').search(event.getParam('formData').boatTypeId);
    }
})
