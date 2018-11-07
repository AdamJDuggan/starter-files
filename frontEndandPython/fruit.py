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


class Fruit:
    def __init__(self, name, color, flavour, poisonous):
        self.name = name
        self. color = color
        self.flavour = flavour
        self.poisonous = poisonous
    def description():
        print("I am a {} and I taste "" ")
    def is_edible():
        if Fruit != 'poisonous':
            print("Dont eat me I am super poisonous")
        else:
            print("I am edible")


class Polygon:
    def __init__(self, no_of_sides):
        self.n = no_of_sides
        self.sides = [0 for i in range(no_of_sides)]
    def inputSides(self):
        self.sides = [float(input("Enter side " + str(i+1) + " : ")) for i in range(self.n)]
    def dipSides(self):
        for i in range(self.n):
            print("Side", i + 1, "is", self.sides[i])


class Triangle:
    def __init__(self):
        Polygon.__init__(self, 3)

def findArea(self):
    a, b, c = self.sides
    #calculate the semi perimeter
    s = (a + b + c) / 2
    area = (s* (s-a) * (s-b) * (s-c)) ** 0.5
    print("The area of the triangle is %0.2f" %area)

ob1 = inputSides()
ob2 = dispSides()
ob3 = findArea()


class smallGroup:
    def _init_(self, fname, sname, email, phone):
    self.fname = fname
    self.sname = sname
    self.email = email
    self.phone = phone

s1("", "", "".companyname.com, "")
s2("Joe", "Blogs", ""@companyname.com, 07"511191871")
