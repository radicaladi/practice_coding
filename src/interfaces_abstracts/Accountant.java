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
}
