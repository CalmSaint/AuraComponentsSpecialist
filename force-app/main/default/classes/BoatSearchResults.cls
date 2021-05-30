public with sharing class BoatSearchResults {
    
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
        try {
            String query='SELECT Id, Name, Contact__r.Name, Picture__c, Geolocation__latitude__s, Geolocation__longitude__s  FROM Boat__c ';
            if(String.isNotBlank(boatTypeId)){
                query+=' WHERE BoatType__c=:boatTypeId ';
            }
            return (List<Boat__c>)Database.query(query);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
