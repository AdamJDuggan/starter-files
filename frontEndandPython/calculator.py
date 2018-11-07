
def add(a, b):
    print(a+b)
def sub(c, d):
    print (c - d)
def mul(e, f):
    print(e * f)
def divide(g, h):
    print(g / h)

print("Select operation: 1 to add, 2 to subtract 3 to multiply or 4 to divide")
choice = input("Choose 1,2,3 or 4: ")
num1 = int(input("First number: "))
num2 = int(input("Second number: "))

if choice == "1":
    print(num1, "+", num2 "=", add(num1, num2))

if choice == "2":
    print(num1, "-", num2 "=", sub(num1, num2))

if choice == "3":
    print(num1, "*", num2 "=", mul(num1, num2))

if choice == "4":
    print(num1, "/", num2 "=", divide(num1, num2))
