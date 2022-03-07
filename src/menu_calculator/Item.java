package menu_calculator;

import java.util.ArrayList;

public class Item {
    public String name;
    public ArrayList<Double> prices;

    public Item(String name){
        this.name = name;
        this.prices = new ArrayList<>();
    }

    public String getItemName(){
        return name;
    }

    public void addPrice(double price) {
        prices.add((price));
    }

    public ArrayList<Double> getItemPrice() {
        return prices;
    }

    public static void main(String[] args) {
        Item ChickenStrips = new Item("Chicken Strips");
        System.out.println(ChickenStrips.getItemName());
        ChickenStrips.addPrice(3.50);
        System.out.println(ChickenStrips.getItemPrice());
    }

}
