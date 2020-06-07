N, X = map(int, input().split())

listA = list(map(int, input().split()))

for i in range(N):
    if (listA[i] < X):
        print(listA[i], end=" ")
