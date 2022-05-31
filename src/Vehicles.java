import java.util.ArrayList;
import java.util.List;

/*

	Task:
		Implement logic within the setSummaryReport() method that categorizes the Vehicles by type and populates
		the VehicleReportSummary object.

	Example output:
		Sedans [Toyota Corolla (SEDAN), Tesla Model S (SEDAN)]
		Trucks [Ford F-150 (TRUCK)]
		Motorcycles []
		Compacts []
		SUVs [Chevrolet Equinox (SUV), Dodge Durango (SUV)]

 */

public class Vehicles {

    public static void main(String[] args) {

        // Create test vehicles data
        Vehicle v1 = new Vehicle(VehicleTypeEnum.SUV, "blue", "Chevrolet", "Equinox");
        Vehicle v2 = new Vehicle(VehicleTypeEnum.SEDAN, "metallic grey", "Toyota", "Corolla");
        Vehicle v3 = new Vehicle(VehicleTypeEnum.TRUCK, "red", "Ford", "F-150");
        Vehicle v4 = new Vehicle(VehicleTypeEnum.SUV, "black", "Dodge", "Durango");
        Vehicle v5 = new Vehicle(VehicleTypeEnum.SEDAN, "pink", "Tesla", "Model S");

        List<Vehicle> vehicles = new ArrayList<>();

        vehicles.add(v1);
        vehicles.add(v2);
        vehicles.add(v3);
        vehicles.add(v4);
        vehicles.add(v5);

        VehicleSummaryReport report = new VehicleSummaryReport(); // Create vehicle summary report

        setSummaryReport(vehicles, report); // process the summary report

        System.out.println(report); // print out summary report object
    }


    /**
     * Processes the list of vehicles for the vehicle summary report.
     *
     * @param vehicles The input list of vehicles
     * @param report   The summary report of vehicles
     */
    public static void setSummaryReport(List<Vehicle> vehicles, VehicleSummaryReport report) {

        // TODO Write your solution here
        for (Vehicle vehicle : vehicles) {
            if (vehicle.getType() == VehicleTypeEnum.SEDAN) {
                report.getSedans().add(vehicle);
            }
            if (vehicle.getType() == VehicleTypeEnum.SUV) {
                report.getSuvs().add(vehicle);
            }
            if (vehicle.getType() == VehicleTypeEnum.TRUCK) {
                report.getTrucks().add(vehicle);
            }
        }
    }


    //##############   Enumerations   ################
    public enum VehicleTypeEnum {
        SEDAN, TRUCK, MOTORCYCLE, COMPACT, SUV
    }


    //##############   Classes   ##############
    public static class Vehicle {

        private VehicleTypeEnum type;
        private String color;
        private String make;
        private String model;

        public Vehicle(VehicleTypeEnum type, String color, String make, String model) {
            this.type = type;
            this.color = color;
            this.make = make;
            this.model = model;
        }


        public VehicleTypeEnum getType() {
            return this.type;
        }

        public void setType(VehicleTypeEnum type) {
            this.type = type;
        }


        public String getColor() {
            return this.color;
        }

        public void setColor(String color) {
            this.color = color;
        }


        public String getMake() {
            return this.make;
        }

        public void setMake(String make) {
            this.make = make;
        }


        public String getModel() {
            return this.model;
        }

        public void setModel(String model) {
            this.model = model;
        }

        public String toString() {
            return this.make + " " + this.model + " (" + this.type + ")";
        }
    }

    public static class VehicleSummaryReport {

        private final ArrayList<Vehicle> sedans = new ArrayList<>();
        private final ArrayList<Vehicle> trucks = new ArrayList<>();
        private final ArrayList<Vehicle> motorcycles = new ArrayList<>();
        private final ArrayList<Vehicle> compacts = new ArrayList<>();
        private final ArrayList<Vehicle> suvs = new ArrayList<>();

        public VehicleSummaryReport() {
        }

        public ArrayList<Vehicle> getSedans() {
            return this.sedans;
        }

        public ArrayList<Vehicle> getTrucks() {
            return this.trucks;
        }

        public ArrayList<Vehicle> getMotorcycles() {
            return this.motorcycles;
        }

        public ArrayList<Vehicle> getCompacts() {
            return this.compacts;
        }

        public ArrayList<Vehicle> getSuvs() {
            return this.suvs;
        }

        /**
         * Print the formatted summary report of vehicles
         */
        @Override
        public String toString() {
            String sedansSummary = "Sedans " + this.sedans.toString() + "";
            String trucksSummary = "Trucks " + this.trucks.toString() + "";
            String motorcycleSummary = "Motorcycles " + this.motorcycles.toString() + "";
            String compactSummary = "Compacts " + this.compacts.toString() + "";
            String suvSummary = "SUVs " + this.suvs.toString() + "";
            return sedansSummary + "\n" + trucksSummary + "\n" + motorcycleSummary + "\n" + compactSummary + "\n" + suvSummary;
        }
    }
}
