package time_date;

import java.time.Duration;
import java.util.Arrays;
import java.util.List;

public class App {

    public static void main(String[] args) {
        List<Duration> durationList = Arrays.asList(
                Duration.ofSeconds(100), Duration.ofSeconds(200), Duration.ofSeconds(300)
        );
        // sum of the elements of durationList and also find the largest
        Duration runningTotal = Duration.ZERO;
        Duration largestSoFar = Duration.ofSeconds(Long.MIN_VALUE);
        for (Duration d : durationList) {
            runningTotal = runningTotal.plus(d);
            largestSoFar = largestSoFar.compareTo(d) > 0 ? largestSoFar : d;
        }
        System.out.printf("total = %s; largest = %s", runningTotal, largestSoFar);
    }
}
