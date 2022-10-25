package time_date;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

public class WorkPeriods {
    // static utility methods of WorkPeriod

    public static WorkPeriod createFirstWorkPeriod() {
        LocalDateTime startDateTime;
        // alternative ways of creating a LocalDateTime
        startDateTime = LocalDateTime.of(1970,1,5,9,0);
        LocalDate startDate = LocalDate.of(1970,1,5);
        LocalTime startTime = LocalTime.of(9,5);
        startDateTime = LocalDateTime.of(startDate,startTime);

        Duration morningLength;
        // alternative ways of creating a Duration
        morningLength = Duration.ofHours(3).plusMinutes(30);
        morningLength = Duration.ofMinutes(210);

        LocalDateTime endDateTime;
        // alternative ways of creating a LocalDateTime
        endDateTime = startDateTime.with(LocalTime.of(12,30));
        endDateTime = startDateTime.plus(morningLength);

        // workperiod factory method
        WorkPeriod wp = WorkPeriod.of(startDateTime, endDateTime);
        return wp;
    }

}
