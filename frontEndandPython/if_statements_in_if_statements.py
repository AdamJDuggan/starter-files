print("You enter a dark room with two doors. Do you go through door 1 or 2?")


door = input("> ")

if door == "1":
    print("There is a giant bear eating a cheesecake")
    print("What do you do?")
    print("1. Take the cake")
    print ("2. Scream at the bear")

    bear = input("> ")

    if bear == "1":
        print("The bear eats your head")
    elif bear == "2":
        print("The bear eats your legs")
    else:
        print("Well, doing {} is probably better".format(bear))
        print ("Bears runs away")

elif door == "2":
    print("You state into the endless abyss")
    print("1. Blueberries")
    print("2. Yellow jacket clothesspin")
    print("3. Understanding revolvers yelling melodies")

    insanity = input("> ")

    if insanity == "1" or insanity == "2":
        print("Your body survives powered by a mind of jello")
        print("Good job")

    else:
        print("The insanity roots your eyes into a pool of muck")

else:
    print("You stumble around and fall on a knife and die")
