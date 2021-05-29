public with sharing class ACS_HowWeRollCTRL {
    
    @AuraEnabled(cacheable=true)
    public static List<BoatType__c> getAvailableBoatTypes(){
        try{
            return [SELECT Id,Name FROM BoatType__c WITH SECURITY_ENFORCED];
        }
        catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
        
    }
}
