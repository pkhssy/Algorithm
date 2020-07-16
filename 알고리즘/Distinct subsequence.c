#include<stdio.h>
#include<string.h>

void main() {
    int testnum, cnt=0, length, a=0, check=0;
    char seq[10000], sub[100];

    FILE *fp; //pointer of file, fp = input.txt
    fp = fopen("input.txt", "r");   //open the read file. if you cna't exit program
    if (fp == NULL) {
        printf("file could not be opened.\n"); 
        exit(0);
    }
    fscanf(fp, "%d", &testnum); //read the number of test
    
    //execute the while during the testnum is over than 0
    while (testnum > 0) {
        fscanf(fp, "%s %s", seq, sub);  //read the word and word to find

        length = strlen(seq);   //length of string seq

        //find all powerset of word seq
        for (int i = 1; i < 1 << length; i++) {
            for (int j = 0; j < length; j++) {
                if (i & (1 << j)) {
                    //if the character of sub same as the character of seq than plus check
                    if (sub[a] == seq[j]) { 
                        check++;
                        a++;
                    }
                    else
                        check = 100;
                }
            }
            //when check and length of sub is same plus the cnt
            if (check == strlen(sub))
                cnt++;
            a = 0;  //initialize a to 0
            check = 0;  //initialize check to 0
        }
        printf("%d\n", cnt);
        cnt = 0;    //initialize cnt to 0
        testnum--;
    }
    fclose(fp);
}