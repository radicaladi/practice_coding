public class MusicTest {
    static MusicalInstrument Piano = new Piano("cordophone", 88);
    static MusicalInstrument Sax = new Sax("woodwind", 4);

    public static void detuneRetune (Tuneable tuneableObj) {
        tuneableObj.detuneInstrument();
        tuneableObj.tuneInstrument();
    }

    public static void makeTwoStaccatoSounds(VolumeAdjustable va) {
        va.volumeUp();
        va.volumeDown();
        va.volumeUp();
        va.volumeDown();
    }

    public static void main(String[] args) {
        detuneRetune((Tuneable) Piano); // call Piano tuning method
        System.out.println();
        makeTwoStaccatoSounds((VolumeAdjustable) Piano); // call Piano volume methods
        System.out.println();
        detuneRetune((Tuneable) Sax); // call Sax tuning method
        System.out.println();
        makeTwoStaccatoSounds((VolumeAdjustable) Sax); // call Sax volume methods
    }
}
