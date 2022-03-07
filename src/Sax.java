public class Sax extends MusicalInstrument implements Tuneable, VolumeAdjustable {
    private int saxType;

    public Sax(String category, int saxType){
        super(category);
        this.saxType = saxType;
    }

    public int getSaxType() {
        return saxType;
    }

    public void setSaxType(int saxType) {
        this.saxType = saxType;
    }

    @Override
    public void startMusic() {
        System.out.println("a harmonic Sax tune plays...");
    }

    @Override
    public void stopMustic() {
        System.out.println("Sax play winds to an end...");
    }

    @Override
    public void tuneInstrument() {
        System.out.println("Sax pitch adjusting...");
    }

    @Override
    public void detuneInstrument() {
        System.out.println("Sax pitch re-adjusting...");
    }

    @Override
    public void volumeUp() {
        System.out.println("Sax noises intensifies...");
    }

    @Override
    public void volumeDown() {
        System.out.println("Sax noises lessens...");
    }
}
