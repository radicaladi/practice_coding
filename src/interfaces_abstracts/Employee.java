package interfaces_abstracts;

public abstract class Employee implements dailyWork, monthlyWork {
    // protected allows sub and super classes to access the field;
    protected String name;
    protected String department;

    // constructor
    public Employee(String name, String department) {
        this.name = name;
        this.department = department;
    }

    // getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    // method
//    public abstract String work(); // no longer needed because this class implements dailyWork (see: line 3)
}
