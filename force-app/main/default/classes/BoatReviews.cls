public with sharing class BoatReviews {
    @AuraEnabled
    public static List<BoatReview__c> getAll(Id boatId){
        try{
            return [SELECT Id, 
                           Name, 
                           Comment__c, 
                           Rating__c, 
                           LastModifiedDate, 
                           CreatedDate,
                           CreatedBy.Id, 
                           CreatedBy.Name,
                           CreatedBy.SmallPhotoUrl,
                           CreatedBy.CompanyName 
                    FROM BoatReview__c WHERE Boat__c=:boatId];
        }
        catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }
}
