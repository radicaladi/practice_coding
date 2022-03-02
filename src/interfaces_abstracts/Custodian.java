package interfaces_abstracts;

public class Custodian extends Employee {
    // constructor
    public Custodian(String name, String department){
        super(name, department);
    }

    // method
    public String work(){
        return "Maintaining the building!";
    }

    // implemented methods,
    public String morningMeeting() {
        return "Custodians have a direct report to the head of the maintenance department and schedule meetings as necessary!";
    }

    public String lunchTime() {
        return "12:00PM - 1:00PM in the cafeteria!";
    }

    public int dailyPay() {
        return 120;
    }

    // monthlyWork method
    public String getPaid() {
        return "Arrived and received monthly wages!";
    }
}
