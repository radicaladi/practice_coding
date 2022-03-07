package menu_calculator;

public class Item {
    public String name;
    public double prices;

    public Item(String name, double price){
        this.name = name;
        this.prices = price;
    }

    public String getItemName(){
        return name;
    }

    public void setItemName(String name) {
        this.name = name;
    }

    public double getItemPrice(){
        return prices;
    }

    public void setItemPrice(double price){
        this.prices = price;
    }


    public static void main(String[] args) {
        Item ChickenStrips = new Item("Chicken Strips", 3.50);
        System.out.println(ChickenStrips.getItemName());
        System.out.println(ChickenStrips.getItemPrice());
        System.out.println("//////////");
        Item FrenchFries = new Item("French Frys", 2);
        FrenchFries.setItemName("French Fries");
        FrenchFries.setItemPrice(2.50);
        System.out.println(FrenchFries.getItemName());
        System.out.println(FrenchFries.getItemPrice());
    }

}
