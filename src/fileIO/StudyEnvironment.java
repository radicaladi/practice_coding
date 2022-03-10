package fileIO;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.ArrayList;
import java.util.Arrays;
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
        System.out.println();

        //Alright - looks good, I can get to an existing file with some of these new classes in interesting ways.What if
        //I wanted to create a file and a directory / path to that file ?
        //First: A string representing where I want a directory to go
        String directory = "./src/fileIO/data";
        //Second: how a about a string representing the name of the file as I would like it?
        String fileName = "groceryList.txt";

        Path dataDirectory = Paths.get(directory); //Path-ify that String with the directory!
        Path dataDirectoryAndFile = Paths.get(directory, fileName); //Combining both Strings into one 'Path'!

        System.out.println();
//        System.out.println("dataDirectory = " + dataDirectory);
//        System.out.println("dataDirectoryAndFile = " + dataDirectoryAndFile);

//        if(Files.notExists(dataDirectory)){
//            Files.createDirectories(dataDirectory);
//        }

        if (Files.notExists(dataDirectoryAndFile)) {
            Files.createDirectories(dataDirectory);

            Files.createFile(dataDirectoryAndFile);
        }

        //File IO part 3 - okay, I've gotten to something that exists, I've created directories and files that did not exist, now how do I manipulate what is INSIDE of a file?
        System.out.println("dataDirectoryAndFile = " + dataDirectoryAndFile);

        //First let's set up something we want to WRITE into our text file - how about some groceries we need?
        List<String> groceryList = Arrays.asList("coffee", "cat food", "roast beef", "carrots", "potatoes", "onions", "bread");

        System.out.println("groceryList = " + groceryList);

        Files.write(dataDirectoryAndFile, groceryList);

        //Okay - let's do one that's just an UPDATE
        List<String> forgotAGrocery = Arrays.asList("muenster cheese", "gouda cheese", "colby jack cheese");

        Files.write(dataDirectoryAndFile, forgotAGrocery, StandardOpenOption.APPEND);

        //Alright - we've updated the text file with various Strings of information - how do I get that back out of the text file??
        List<String> printGroceryList = Files.readAllLines(dataDirectoryAndFile);

        System.out.println();
        System.out.println("printGroceryList = " + printGroceryList);
        for (int i = 0; i < printGroceryList.size(); i++) {
            System.out.println((i + 1) + " : " + printGroceryList.get(i));

        }
//Let's do a more complicated example - replacing a found element with a new element!
        //First: Let's get the grocery list from the text file as it exists now
        List<String> printGroceryList2 = Files.readAllLines(dataDirectoryAndFile);
        //Second: Let's set up a second array list to hold the updated list we want to write to the text file
        List<String> newList = new ArrayList<>();


        //In English : Look inside of ONE LINE from ALL OF THESE LINES I got from my text file
        for (String line : printGroceryList2) {

            if (line.equalsIgnoreCase("gouda cheese")) {
                newList.add("vegan cheese");
                continue;
            }

            newList.add(line);

        }

        System.out.println("printGroceryList2 = " + printGroceryList2);
        System.out.println("newList = " + newList);
        printGroceryList2 = newList;
        System.out.println("printGroceryList2 (overwrite experiment) = " + printGroceryList2);

        Files.write(dataDirectoryAndFile, newList);

    }

}
