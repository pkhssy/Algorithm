// Read your birth year and print your age.

package Chapter1;
import java.util.Scanner;

public class Ex1_2a {
    public static void main(String[] args){
        System.out.println("type your birth year");
        Scanner keyboard = new Scanner(System.in);
        int year, age;
        year = keyboard.nextInt();
        age = 2020 - year + 1;
        
        System.out.print(age);
    }    
}