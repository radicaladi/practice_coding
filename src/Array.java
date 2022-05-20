import java.util.Arrays;

public class Array {
    public static void main(String[] args) {

        // Java Arrays requirements:
        // * Must have length of array defined before using it
        // * All arrays store the same data type

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
        System.out.println();
        // error -- array out of bounds as follows,
//        System.out.println(weather[5]); // throws exception because index of 5 does not exist on this array


        // array that holds daily steps
        int[] dailySteps = {10000, 12000, 22000};
        System.out.println(Arrays.toString(dailySteps));
        System.out.println();

        // an array of ints and print out the array
        int[] customers = {100, 50, 160};
        System.out.println(Arrays.toString(customers));
        System.out.println();

        // TODO: create a method (nums) that returns the sum of all integers in an int array
        // [5, 2, 3, 1] // 11

        /*
            step 1: create method (nums)
                1a: what's the method signature
                1b: what data type is being returned
            step 2: create array of ints
                2a: what's the length
                2b: where does this array go
            step 3: assign values to array
                3a: how to initialize array of ints
                3b: array literal {} or array declaration of new []
            step 4: iterate through elements of array
                4a: traditional for loop -or- enhanced for
            step 5: create variable to store sum of array elements
            step 6: add logic that will add each element to itself
                6a: sum variable = sum + index of element
         */

//        int sum = 0;
//        int[] nums = {5, 7, 9};

        // traditional for loop
//        for (int i = 0; i < nums.length; i++)
//        {
//            sum += nums[i];
//            System.out.println(sum);
//        }

        // enhanced java for loop
//        for (int num: nums)
//        {
//            sum += num;
//            System.out.println(sum);
//        }

        // TODO: MATRIX
        int[][] myMatrix = {
                {5, 7, 9},
                {1, 5, 9},
                {2, 2, 7}
        };
        System.out.println(Arrays.deepToString(myMatrix));

        //print every nested element in matrix
        for (int[] rows : myMatrix) {
            System.out.println("-------new row----");
            for (int column : rows) {
                System.out.println(column);
            }
        }

        System.out.println();
        nums(5, 7, 9); // calling the nums method to return results
        System.out.println(Arrays.toString(solution));
        numNums(arrayToSum);
    }

    static int[] arrayToSum = {2, 4, 8, 5, 1, 2};

    static int[] solution = numNums(arrayToSum);

    // TODO: The same method, for loop, iteration as above but using a public method with parameters...
    static int[] nums; // static int array variable
    static int sum = 0; // static int variable for sum of array

    public static void nums(int indexEins, int indexZwei, int indexDrei) {
        nums = new int[]{indexEins, indexZwei, indexDrei};
        for (int num : nums) {
            sum += num;
//            System.out.println(sum); // if placed here, it will show each iteration calculation
        }
        System.out.println(sum); // placed here, displays only last iteration calculation
        System.out.println();
    }


    // TODO: 1 March 2022 warmup--
    //  Write a program that creates an array, and then prints the sum of the even and odd integers in a new array [sumOdd, sumEven]
    // step 1: make method
    // step 2: establish odd and even variable set to 0, and the array to calculate
    // step 3: make for-loop for iterating array to calculate
    // step 4: make if-statement for separating even and odd numbers in array
    // step 5: add logic to sum even numbers stored in even variable, and odd numbers stored in odd variable
    // step 6: make new array with variables holding the sums
    // step 7: print new array to view result; use Arrays.toString() to see in human readable output
    // refactor:
    // array now allows arguments to pass various arrays to the method and return calculations
    public static int[] numNums(int[] ogArr) {
        int odd = 0;
        int even = 0;
        for (int n : ogArr) {
            if (n % 2 == 0) {
                even += n;
            } else {
                odd += n;
            }
        }
        int[] newN = {even, odd};
        System.out.println(Arrays.toString(newN));
        return newN;
    }

    public static boolean isBalanced(String s) {
        int len = s.length();
        if (len == 0 || s == null) return true;
        Stack<Character> stack = new Stack<Character>();
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') stack.push(s.charAt(i));
            else if (s.charAt(i) == ')' && !stack.empty() && stack.peek() == '(') stack.pop();
            else if (s.charAt(i) == ']' && !stack.empty() && stack.peek() == '[') stack.pop();

            else if (s.charAt(i) == '}' && !stack.empty() && stack.peek() == '{') stack.pop();
            else return false;


        }
        return stack.empty();
    }

    /*
    * import java.util.*;
      import java.util.Scanner;

        // Write your code here. DO NOT use an access modifier in your class declaration.

        class Parser{
            static boolean isBalanced(String s)
            {
                if (s == null || ((s.length() % 2) != 0)) {
                    return false;
                    }
                else {
                    char[] check = s.toCharArray();
                    for (char a : check) {
                        if (!(a == '{' || a == '['  || a == '(' || a == '}'  || a == ']' || a == ')' ))
                        return false;
                    }
                }
                while (s.contains("()") || s.contains("[]") || s.contains("{}")) {
                    s = s.replaceAll("\\(\\)", "")
                    .replaceAll("\\[\\]", "")
                    .replaceAll("\\{\\}", "");
                }
                return (s.length() == 0);
            }
        }


        class Solution {

        	public static void main(String[] args) {
        		Parser parser = new Parser();

        		Scanner in = new Scanner(System.in);

        		while (in.hasNext()) {
        			System.out.println(parser.isBalanced(in.next()));
        		}

        		in.close();
        	}
        }
    *
    * */

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        for (int a0 = 0; a0 < t; a0++) {
            String expression = in.next();
            System.out.println((isBalanced(expression)) ? "YES" : "NO");
        }
    }
}

}
