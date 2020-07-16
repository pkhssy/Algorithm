#include<stdio.h>
#include<stdlib.h>
#include<math.h>

struct point {
	int x;
	int y;
};

long long result = 0;

struct point setPoint(int a, int b) {
	struct point returnvalue = { a,b };
	return returnvalue;
}

void chess(struct point *list, int n, int step, int end) {
	if (step < end) {
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (available(list, setPoint(i, j), step) == 1) {
					list[step] = setPoint(i, j);
					chess(list, n, step + 1, end);
				}
			}
		}
	}
	else
		result++;
}
int available(struct point* list, struct point compareValue, int index) {
	for (int i = 0; i < index; i++) {
		if (list[i].x == compareValue.x&&list[i].y == compareValue.y)
			return 0;
		if (list[i].x - compareValue.x == 0) {
		}
		else if ((float)(list[i].y - compareValue.y) / (float)(list[i].x - compareValue.x) == 1 || (float)(list[i].y - compareValue.y) / (float)(list[i].x - compareValue.x) == -1)
			return 0;
	}
	return 1;
}
int P(int n) {
	int result = 1;
	for (int i = 2; i <= n; i++)
		result *= i;
	return result;
}

void main() {
	struct point *p;
	FILE *fp;
	fp = fopen("input.txt", "r");

	if (fp == NULL) {
		printf("file could not be opened.\n");
		exit(0);
	}

	
	int n, b;

	for (fscanf(fp, "%d", &n), fscanf(fp, "%d", &b); n != 0 && b != 0; fscanf(fp, "%d", &n), fscanf(fp, "%d", &b)) {
		if (n < b) {
			printf("Too much bishop!\n");
		}
		else {
			p = malloc(sizeof(struct point)*n);
			chess(p, n, 0, b);
			if (result / P(b) <= (long long)pow(10, 15))
				printf("%lld\n", result / P(b));
			else
				printf("Over 10^15\n");
			result = 0;
			free(p);
		}
	}
}