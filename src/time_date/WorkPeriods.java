package time_date;

import java.time.*;
import java.time.temporal.Temporal;
import java.time.temporal.TemporalAccessor;
import java.time.temporal.TemporalAdjuster;
import java.time.temporal.TemporalAdjusters;
import java.util.*;
import java.util.stream.Stream;

import static java.time.DayOfWeek.*;
import static java.time.temporal.ChronoUnit.DAYS;
import static java.util.stream.Collectors.toList;

public class WorkPeriods {
    // static utility methods of WorkPeriod

    public static final LocalTime AM_START_TIME = LocalTime.of(9,5);
    public static final LocalTime PM_START_TIME = LocalTime.of(9,5);
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

    private static List<WorkPeriod> generateWorkingPeriods(List<LocalDate> workingDays) {
        return workingDays.stream()
                .flatMap(d -> Stream.of(createMorningWorkPeriod(d), createAfternoonWorkPeriod(d)))
                .collect(toList());
    }

    private static List<LocalDate> generateWorkingDays(LocalDate startDate, int dayCount) {
       return Stream.iterate(startDate, d -> d.plusDays(1))
                .filter(WorkPeriods::isWorkingDay)
                .limit(dayCount)
                .collect(toList());
    }

    private static boolean isWorkingDay(LocalDate d) {
        DayOfWeek dayOfWeek = d.getDayOfWeek();
        return ! (dayOfWeek == SATURDAY || dayOfWeek == SUNDAY);
    }

    public static void main(String[] args) {
        // mock unit test, generates 3 days of work periods, starting at epoch and printing each
        List<WorkPeriod> workPeriods = generateWorkingPeriods(LocalDate.ofEpochDay(0), 3);
        workPeriods.forEach(System.out::println);
    }

}
