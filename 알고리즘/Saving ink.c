#include<stdio.h>
#include<stdlib.h>
#include<math.h>
int prims(float G[20][20], float spanning[20][20], int num);

// store the data of the position x, y
struct vertex {
    float x;
    float y;
};

int main()
{
    FILE *fp;
    struct vertex *v;
    int i, j;
    fp = fopen("input.txt", "r");
    float G[20][20], spanning[20][20];
    int num;

    if (fp == NULL) {
        printf("file could not be opened.\n");
        exit(0);
    }

    else {
        fscanf(fp, "%d", &num); // receive the number of vertexs

        v = (struct vertex *)malloc(num * sizeof(struct vertex));

        // while file end, receive the data from the file and print if to the prompt
        while (!feof(fp)) {
            for (int i = 0; i < num; i++) {
                fscanf(fp, "%f %f", &v[i].x, &v[i].y);
                printf("%f %f\n", v[i].x, v[i].y);
            }
        }
    }

    // calculate the distance between the vertexs
    for (int i = 0; i < num; i++) {
        for (int j = 0; j < num; j++) {
            G[i][j] = sqrt(pow(v[i].x - v[j].x, 2) + pow(v[i].y - v[j].y, 2));
        }
    }
    prims(G, spanning, num); // execute the function prims()

    free(v);
    fclose(fp);
    return 0;
}

int prims(float G[20][20], float spanning[20][20], int num) {
    float cost[20][20], min_distance, distance[20], total=0;
    int u, v, edges, from[20], visited[20];

    //create cost[][] matrix, spanning[][]
    for (int i = 0; i < num; i++) {
        for (int j = 0; j < num; j++) {
            if (G[i][j] == 0)
                cost[i][j] = 9999; // expression of infinity
            else
                cost[i][j] = G[i][j];
            spanning[i][j] = 0;
        }
    }

    //initialise distance[], visited[], from[]
    distance[0] = 0;
    visited[0] = 1;
    for (int i = 1; i<num; i++) {
        distance[i] = cost[0][i];
        from[i] = 0;
        visited[i] = 0;
    }

    edges = num - 1;  // edges to be added

    while (edges > 0) {
        //find the vertex at minimum distance from the tree
        min_distance = 9999;    // initialize min_distance into infinity
        for (int i = 1; i < num; i++) {
            if (visited[i] == 0 && distance[i] < min_distance) {
                v = i;
                min_distance = distance[i];
            }
        }
        u = from[v];

        //insert the edge in spanning tree
        spanning[u][v] = distance[v];
        spanning[v][u] = distance[v];
        edges--;
        visited[v] = 1;

        //updated the distance[] array
        for (int i = 1; i < num; i++) {
            if (visited[i] == 0 && cost[i][v] < distance[i]) {
                distance[i] = cost[i][v];
                from[i] = v;
            }
        }
    }

    // calculate the minimum total length
    for (int i = 0; i<num; i++) {
        for (int j = 0; j < num; j++)
            total += spanning[i][j];
    }
    printf("\nTotal cost of spanning tree = %f\n",total/2);

}