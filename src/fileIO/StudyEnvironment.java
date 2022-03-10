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
        // the basic way of creating a string
        String myString = "This is a string";

        // using paths.get to get a file and store it in a Path variable
        Path poemToPath = Paths.get("src/fileIO/wcw.txt");

        // printing to console the content of the variable (the path)
        System.out.println("path to poem = " + poemToPath);

        // printing to the console whether the file exists
        System.out.println("Files.exist(poemToPath) = " + Files.exists(poemToPath));

        // print the file (poem) if it exists
        printPoem(poemToPath);
    }

}
