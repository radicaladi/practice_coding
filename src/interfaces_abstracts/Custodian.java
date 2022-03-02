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
}
