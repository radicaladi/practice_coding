package interfaces_abstracts;

public class Company {
    public static void main (String[] args){

        // creating accountant and custodian
        Employee numberMan = new Accountant("NumberMan", "Accounting");
        Employee cleanerMan = new Custodian("CleanerMan", "Maintenance");

        // calling their work method
        System.out.println("NumberMan at work: " + numberMan.work());
        System.out.println("NumberMan name: " + numberMan.getName());

        // getting their name
        System.out.println("CleanerMan at work: " + cleanerMan.work());
        System.out.println("CleanerMan name: " + cleanerMan.getName());
    }
}
