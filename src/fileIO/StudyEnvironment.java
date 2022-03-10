package fileIO;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

public class StudyEnvironment {
    public static void printPoem(Path filePath) throws IOException {
        System.out.println();
        List<String> fileContents = Files.readAllLines(filePath); //We need List as .readAllLines returns List datatype
        for (int i = 0; i < fileContents.size(); i++) {
            System.out.printf("%d: %s\n", i + 1, fileContents.get(i));
        }
    }

    public static void main(String[] args) throws IOException {
        String myString = "This is a string";

        Path poemToPath = Paths.get("src/fileIO/wcw.txt");

        System.out.println("path to poem = " + poemToPath);

        System.out.println("Files.exist(poemToPath) = " + Files.exists(poemToPath));

        printPoem(poemToPath);
    }

}
