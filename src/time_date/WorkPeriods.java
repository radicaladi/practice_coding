package time_date;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

public class WorkPeriods {
    // static utility methods of WorkPeriod

    public static final LocalTime AM_START_TIME = LocalTime.of(9,5);
    public static final Duration WORK_PERIOD_LENGTH = Duration.ofHours(3).plusMinutes(30);

    public static WorkPeriod createMorningWorkPeriod(LocalDate date) {
        LocalDateTime startDateTime = LocalDateTime.of(date, AM_START_TIME);
        LocalDateTime endDateTime  = startDateTime.plus(WORK_PERIOD_LENGTH);
        return WorkPeriod.of(startDateTime, endDateTime);
    }

}
