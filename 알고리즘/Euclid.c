#include <stdio.h>
int Euclid(int a, int b, int *x, int *y);

void main() {
	int a, b, x, y;
	
	printf("type two integers : ");
	scanf("%d %d", &a, &b);
	
	printf("%d %d %d\n", x, y, Euclid(a, b, &x, &y));
}

int Euclid(int a, int b, int *x, int *y) {
	int gcd, xx, yy;

	if (b == 0) {
		*x = 1;
		*y = 0;
		return a; // return (a,1,0)
	}

	else {
		gcd = Euclid(b, a%b, &xx, &yy); //(d',x',y') := Extended-Eculid (b,a mod b);
		*x = yy;
		*y = xx - (a / b) * yy; //(d,x,y):=(d',y',x'-¦¦a/b¦¥y');
		return gcd;  //return (d,x,y)
	}
}