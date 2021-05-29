public with sharing class FetchAllBoatTypes {
    
    @AuraEnabled(cacheable=true)
    public static List<BoatType__c> getAvailableBoatTypes(){
        return [SELECT Id,Name FROM BoatType__c WITH SECURITY_ENFORCED];
    }
}
