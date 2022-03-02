package interfaces_abstracts;

public interface dailyWork {
    // data type & name of method is how to write method in interface;
    // public and abstract are redundant due to interface
    // the interface will be implemented on a class elsewhere; (ex: employee)

    String work();

    // adding some more methods,
    String morningMeeting();
    String lunchTime();

    int dailyPay();

}
