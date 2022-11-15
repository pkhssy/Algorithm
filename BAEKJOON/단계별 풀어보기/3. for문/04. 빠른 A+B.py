import sys
input = sys.stdin.readline

T = int(input())

for n in range(T):
    a,b = map(int, input().split())
    print(a+b)
