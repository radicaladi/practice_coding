package interfaces_abstracts;

public class Company {
    public static void main (String[] args){

        // creating accountant and custodian
        Employee numberMan = new Accountant("NumberMan", "Accounting");
        Employee cleanerMan = new Custodian("CleanerMan", "Maintenance");

        // calling their work method
        System.out.println("What's your name and department? \n\t" + numberMan.getName() + " | " + numberMan.getDepartment());
        System.out.println("NumberMan starting work day: \n\t" + numberMan.morningMeeting());
        System.out.println("NumberMan at work: \n\t" + numberMan.work());
        System.out.println("NumberMan at lunch: \n\t" + numberMan.lunchTime());
        System.out.println("NumberMan day wage: \n\t$" + numberMan.dailyPay());
        System.out.println("NumberMan on pay day: \n\t" + numberMan.getPaid());
//        System.out.println("NumberMan name: " + numberMan.getName());
        System.out.println();

        System.out.println("What's your name and department? \n\t" + cleanerMan.getName() + " | " + cleanerMan.getDepartment());
        System.out.println("CleanerMan starting work day: \n\t" + cleanerMan.morningMeeting());
        System.out.println("CleanerMan at work: \n\t" + cleanerMan.work());
        System.out.println("CleanerMan at lunch: \n\t" + cleanerMan.lunchTime());
        System.out.println("CleanerMan day wage: \n\t$" + cleanerMan.dailyPay());
        System.out.println("CleanerMan on pay day: \n\t" + cleanerMan.getPaid());
//        System.out.println("CleanerMan name: " + cleanerMan.getName());
        System.out.println();





    }
}
