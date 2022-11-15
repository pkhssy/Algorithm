a = int(input())
b = int(input())

five = int(a * int(b/100))
b = int(b%100)
four = int(a * int(b/10))
b = int(b%10)
three = int(a * b)

six = int(three + four*10 + five*100)

print(three)
print(four)
print(five)
print(six)
