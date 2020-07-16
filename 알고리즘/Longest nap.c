#include<stdio.h>

struct Nap {
    int sh; //start hour
    int sm; //start minute
    int eh; //end hour
    int em; //end minute
    char doing[255]; // doing schedule
}nap[100];

void main() {
    FILE *fp;
    int num;        //the number of schedule
    int index;      //store the longest break time's index
    int max = 0;    //to find the longest break time
    int day = 1;    //the date
    int starth[5], startm[5], endh[5], endm[5];     // store the hour and minute
    int lasth[5], lastm[5];     // store the break time's hour and minute
    int longest[5];             // store the break time's in minute

    fp = fopen("nap.txt", "r"); //file open
    if (fp == NULL) {
        printf("File could not be opened\n");
    }
    else {
        while (fscanf(fp, "%d", &num) != EOF) { //check the file is over or until not over
            if (num < 100) { // check the number of schedule
                for (int i = 0; i < num; i++) { // read during the number of schedule
                    fscanf(fp, "%d:%d %d:%d", &nap[i].sh, &nap[i].sm, &nap[i].eh, &nap[i].em);  // read hour and minute from file
                    fgets(nap[i].doing, 255, fp); // read schedule from file
                    if (nap[i].sh >= 10 && nap[i].sh <= 18 && nap[i].sm >= 0 && nap[i].sm < 60 && nap[i].eh >= 10 && nap[i].eh <= 18 && nap[i].em >= 0 && nap[i].em < 60) { // check hour and minute 
                        for (int j = 0; j < num; j++) { // during the number of schedule
                           /* store the hour and minute in a new array.
                              in start array, store the hour and minute from the struct and store time 18:00 in end array
                              in end array, store the hour and minute from the struct and store time 10:00 in first array.
                           */
                            starth[j] = nap[j].sh;
                            startm[j] = nap[j].sm;
                            endh[j + 1] = nap[j].eh;
                            endm[j + 1] = nap[j].em;
                        }
                        starth[num] = 18;
                        startm[num] = 0;
                        endh[0] = 10;
                        endm[0] = 0;
                    }
                }
                for (int i = 0; i <= num; i++) {
                    // calculate the break time
                    if (startm[i] >= endm[i]) { // when the start minute is bigger than end minute
                        lasth[i] = starth[i] - endh[i];
                        lastm[i] = startm[i] - endm[i];
                    }
                    else { // when the start minute is smaller than end minute
                        lasth[i] = starth[i] - 1 - endh[i];
                        lastm[i] = startm[i] + 60 - endm[i];
                    }
                    longest[i] = lasth[i] * 60 + lastm[i]; // store the break time into minute
                    // find the longest break time
                    if (longest[i] > max) {
                            max = longest[i];
                            index = i;
                    }
                }
                
                if (lasth[index]>0) { // when the break time is bigger than one hour
                    printf("Day %d : the longest nap starts at %d:%d and will last for %d hours and %d minutes.\n\n", day, endh[index], endm[index], lasth[index], lastm[index]);
                }
                else { // when the break time is smaller than one hour
                    printf("Day %d : the longest nap starts at %d:%d and will last for %d minutes.\n\n", day, endh[index], endm[index], lastm[index]);
                }
                day++;
                max = 0;
            }
            else
                printf("the number of doing should be less than 100\n");
        }
    }
    fclose(fp);
}