import java.util.Scanner;

public class PrintPattern {
    public static void printPattern(int number){
        
        for (int i = 1; i <= number; i++) {
            printLine(i);
        }
        for (int i = number - 1; i >= 1; i--) {
            printLine(i);
        }
    }

    public static void printLine(int line){
        for (int i = 1; i <= line * 2 - 1; i += 2) {
            System.out.print(i + " ");
        }
        for (int i = 0; i < line - 1; i++) {
            System.out.print((char) ('A' + i) + " ");
        }
        System.out.println();
    }
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter Number: ");
        int number = scan.nextInt();
        printPattern(number);

        scan.close();
    }
}
