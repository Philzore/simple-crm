export class User {
    firstName: string;
    lastName: string;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;

    constructor(obj?: any) { //Fragezeichen ist um das objekt optional rein zu geben also kein muss
        
        this.firstName = obj ? obj.firstName : '' ; //hier ist das Fragezeichen eine if/else abfrage; wenn obj vorhanden dann schreibe obj.firstName auf variable else leerer string''
        this.lastName = obj ? obj.lastName : '' ;
        this.birthDate = obj ? obj.birthDate : '' ;
        this.street = obj ? obj.street : '' ;
        this.zipCode = obj ? obj.zipCode : '' ;
        this.city = obj ? obj.city : '' ;
    }
}