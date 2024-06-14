import java.util.Scanner;

public class Fibonacci {

    public static void fiboSeries(int num){

        int a=0;
        int b=1;
        if(num ==0){
            return ;
        }
        if(num == 1){
            System.out.print(a+" ");
            return;
        }

        System.out.print(a+" ");
        if(num >= 2){
            System.out.print(b+" ");
        }

        while(true){
            int nextNumber = a+ b;
            if(nextNumber >= num){
                break;
            }

            System.out.print(nextNumber+" ");
            a=b;
            b=nextNumber;

        }
    }
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter Number: ");
        int number = scan.nextInt();
        fiboSeries(number);

        scan.close();
    }
}
