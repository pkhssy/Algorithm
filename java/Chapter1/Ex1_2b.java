// Read two integers and display the number of integers between them, including themselves
package Chapter1;
import java.util.Scanner;

public class Ex1_2b {
    public static void main(String[] args){
        int n1, n2, num;
        System.out.println("type the integers");
        Scanner keyboard = new Scanner(System.in);
        n1 = keyboard.nextInt();
        n2 = keyboard.nextInt();
        num = n2 - n1 + 1;
        System.out.println(num);

    }
}