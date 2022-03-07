public class Piano extends MusicalInstrument implements Tuneable, VolumeAdjustable {
    private int numberOfKeys;

    public Piano(String category, int numberOfKeys) {
        super(category);
        this.numberOfKeys = numberOfKeys;
    }

    public int getNumberOfKeys() {
        return numberOfKeys;
    }

    public void setNumberOfKeys(int numberOfKeys) {
        this.numberOfKeys = numberOfKeys;
    }

    @Override
    public void startMusic() {
        System.out.println("Piano starts to play...");
    }

    @Override
    public void stopMusic() {
        System.out.println("Piano play comes to an end...");
    }

    @Override
    public void tuneInstrument() {
        System.out.println("Piano wires adjusting...");
    }

    @Override
    public void detuneInstrument() {
        System.out.println("Piano wires de-adjusting...");
    }

    @Override
    public void volumeUp() {
        System.out.println("Piano noises intensifies...");
    }

    @Override
    public void volumeDown() {
        System.out.println("Piano noises lessens...");
    }
}
