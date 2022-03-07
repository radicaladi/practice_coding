public abstract class MusicalInstrument implements Playable {
    private String instrumentClassification;

    public MusicalInstrument(String category) {
        this.instrumentClassification = category;
    }

    public String getInstrumentClassification() {
        return instrumentClassification;
    }

    public void setInstrumentClassification(String instrumentClassification) {
        this.instrumentClassification = instrumentClassification;
    }

    public abstract void stopMusic();
}
