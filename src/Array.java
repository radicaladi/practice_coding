import java.util.Arrays;

public class Array {
    public static void main(String[] args) {

        // Java Arrays requirements:
        // * Must have length of array defined before using it
        // * All arrays

        // step 1: create variable of array type.
        // String[] name; int[] name; etc
        // step 2: assign same typing as a new array (right side)
        // new String[]; new int[]; etc
        // step 3: assign length of array; (number inside brackets)
        // [3]; [5]; etc

        String[] weather = new String[3];
        weather[0] = "sunny";
        weather[1] = "cloudy";
        weather[2] = "rainy";
        System.out.println(weather[0]);
        // error -- array out of bounds as follows,
//        System.out.println(weather[5]); // throws exception because index of 5 does not exist on this array


        // array that holds daily steps
        int[] dailySteps = {10000, 12000, 22000};
        System.out.println(Arrays.toString(dailySteps));

        // an array of ints and print out the array
        int[] customers = {100, 50, 160};
        System.out.println(Arrays.toString(customers));

        // create a method (nums) that returns the sum of all integers in an int array
        // [5, 2, 3, 1] // 11
    }
}
