#include<stdio.h>

//information of elephant
struct elephant {
    int weight;
    int iq;
    int index;
}e[100], temp, list[100];

void main() {
    int order = 0;  
    int a, b, length_max = 0, index_max = 0, k = -1;
    int sequence[10][10];   //store the max length's iq sequence

    FILE *fp;
    fp = fopen("input.txt", "r");

    //if file is error
    if (fp == NULL) {
        printf("file could not be opened\n");
    }
    else {
        printf("weight\tiq\tindex\n");
        while (fscanf(fp, "%d %d", &e[order].weight, &e[order].iq) != EOF) { //until end of file
            e[order].index = order + 1;
            printf("%d\t%d\t%d\n", e[order].weight, e[order].iq, e[order].index); //print the information of elephant
            order++;
        }
    }

    //malloc the length which is the length of sequence
    int *length = (int *)malloc(sizeof(int) * order);
    for (int i = 0; i < order; i++)
        length[i] = 1;

    //ascending by weight
    for (int i = 0; i < order; i++) {
        for (int j = i + 1; j < order; j++) {
            if (e[i].weight > e[j].weight) {
                temp = e[i];
                e[i] = e[j];
                e[j] = temp;
            }
        }
    }
    int max = order;    //number of elephant's information

    //store the order by ascending by weight
    for (int i = 0; i < max; i++) {
        list[i] = e[i];
    }

    order = 0;

    printf("\n");
    //find the sequence of descending iq
    for (int i = order; i < max; i++) {
        a = e[i].iq;
        sequence[i][0] = a;
        for (int j = order + 1; j < max; j++) {
            b = e[j].iq;
            if (a > b) { ///when in ordering iq by descending
                a = b;
                sequence[i][k] = a;
                k++;
                length[i]++;
            }
            else //when in not ordering iq by descending
                continue;
        }
        order++;
    }
    

    //find the longest length's index number
    for (int i = 0; i < max; i++) {
        if (length_max < length[i]) {
            length_max = length[i];
            index_max = i;
        }
    }

    //print the sequence
    printf("\nlength : %d\n", length_max);
    for (int i = 0; i < length_max; i++) {
        printf("%d -> ", sequence[index_max][i]);
    }
    printf("\n");
    fclose(fp);
}