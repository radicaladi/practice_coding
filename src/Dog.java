public class Dog {
    public void speak()
    {
        System.out.println("woof!");
    }

    public static void main(String[] args)
    {
        Dog d = new Dog();
        d.speak();
        Dog b = new Beagle();
        b.speak();
    }
}

/* note 1:
    Created a dog object, Dog with the function of speak.
    when speak is called in the main, the return will be a print line of "Woof!"
    this is the dog speaking.
 */
/* not 2:
    create new dog object with Beagle subclass and call b.speak() to access Beagle version of speak() from main.
    Beagle speak being "arf arf!".
 */
