the_count = [1, 2, 3, 4, 5]
fruits = ["apples", "oranges", "pears", "apricots"]
change = [1, "pennies", 2, "dimes", 3, "quarters"]

#this kind of for loop goes through a list
for number in the_count:
    print("This is count {}".format(number))

#same as above
for adam in fruits:
    print("A fruit of type {}".format(adam))

#we can also go through mixed lists to:
#we have to use {} because we dont yet know what i is
for i in change:
    print("I got {}". format(i))

#we can also build lists. First start with an empty one:
elements = []

#then do a range function to do 0 to 5 counts
for i in range(0, 6):
    print("Adding {} to the list".format(i))
    #append is a function that lists Understand
    elements.append(i)

#we can now print them out to:
for i in elements:
    print("Element was: {}".format(i))
