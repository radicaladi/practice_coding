package time_date;

import java.time.*;
import java.util.*;
import java.util.stream.Stream;

import static java.time.DayOfWeek.SATURDAY;
import static java.time.DayOfWeek.SUNDAY;
import static java.util.stream.Collectors.toList;

public class WorkPeriods {
    // static utility methods of WorkPeriod

    public static final LocalTime AM_START_TIME = LocalTime.of(9,5);
    public static final Duration WORK_PERIOD_LENGTH = Duration.ofHours(3).plusMinutes(30);

    public static WorkPeriod createMorningWorkPeriod(LocalDate date) {
        LocalDateTime startDateTime = LocalDateTime.of(date, AM_START_TIME);
        LocalDateTime endDateTime  = startDateTime.plus(WORK_PERIOD_LENGTH);
        return WorkPeriod.of(startDateTime, endDateTime);
    }

    public static WorkPeriod createAfternoonWorkPeriod(LocalDate date) {
        LocalDateTime startDateTime = LocalDateTime.of(date, PM_START_TIME);
        LocalDateTime endDateTime  = startDateTime.plus(WORK_PERIOD_LENGTH);
        return WorkPeriod.of(startDateTime, endDateTime);
    }

    public static List<WorkPeriod> generateWorkingPeriods(LocalDate startDate, int dayCount) {
        List<LocalDate> workingDays = generateWorkingDays(startDate, dayCount);
        return generateWorkingPeriods(workingDays);
    }

    // creates new stream for each element and flattens that stream into my stream using flatmap
    private static List<WorkPeriod> generateWorkingPeriods(List<LocalDate> workingDays) {
        return workingDays.stream()
                .flatMap(d -> Stream.of(createMorningWorkPeriod(d), createAfternoonWorkPeriod(d)))
                .collect(toList());
    }

    private static List<LocalDate> generateWorkingDays(LocalDate startDate, int dayCount) {
       return Stream.iterate(startDate, d -> d.plusDays(d))
                .filter(d -> isWorkingDay(d))
                .limit(dayCount)
                .collect(toList());
    }

    private static boolean isWorkingDay(LocalDate d) {
        DayOfWeek dayOfWeek = d.getDayOfWeek();
        return ! (dayOfWeek == SATURDAY || dayOfWeek == SUNDAY);
    }


}
