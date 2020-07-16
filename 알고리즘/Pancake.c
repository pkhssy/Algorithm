#include<stdio.h>

//flip the array which is position from 0 to num
void do_flip(int *list, int length, int num) {
    int swap;

    for (int i = 0; i < num--; i++) {
        swap = list[i];
        list[i] = list[num];
        list[num] = swap;
    }
}

int pancake_sort(int *list, int length) {
    int max_pos;    //max number's index value
    int moves = 0;  // count the number of flip

                    //if the number of pancakes are less than 2
    if (length<2)
        return 0;

    else {
        for (int i = length; i > 1; i--) {
            max_pos = 0;
            //Find the number of index value
            for (int j = 0; j < i; j++) {
                if (list[j] > list[max_pos])
                    max_pos = j;
            }

            if (max_pos == i - 1)   // max number is the last index, so skip
                continue;

            //move the max number to the beginning of the list
            if (max_pos) {
                moves++;    // count the number of flip
                do_flip(list, length, max_pos + 1);
            }

            //flip over as a whole
            moves++;    // count the number of flip
            do_flip(list, length, i);
        }
    }
    return moves;
}

void main() {
    int num;    //number of pancakes
    int pancakes[20];
    int i;

    printf("Type the number of pancakes : ");   //read the number of pancakes
    scanf("%d", &num);
    printf("\nType the pancakes's diameter : ");    // read pancake's diameter
    for (int i = 0; i < num; i++) {
        scanf("%d", &pancakes[i]);
    }

    printf("\nmoves %d times",pancake_sort(pancakes, num));    //execute function
    printf("\nSorted List by Pancake Sort :\n");
    //print the result of sorting
    for (int i = 0; i < num; i++) {
        printf("%d ", pancakes[i]);
    }
    printf("\n");
}