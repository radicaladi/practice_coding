package interfaces_abstracts;

// if extending from an abstract it has to be abstract or implement the methods of the abstract super.
public class Accountant extends Employee {
    //constructor
    public Accountant(String name, String department){
        super(name, department);
    }

    // method
    public String work() {
        return "TPS reports drafted!";
    }

    // implemented methods,
    public String morningMeeting() {
        return "Accountants have morning meetings between 8:15AM and 8:45AM!";
    }

    public String lunchTime() {
        return "Accountants take their lunch from 1:00PM - 2:00PM or as requested and approved through the accounting manager!";
    }

    public int dailyPay() {
        return 500;
    }

    // monthlyWork method
    public String getPaid() {
        return "Arrived and received monthly wages!";
    }
}
