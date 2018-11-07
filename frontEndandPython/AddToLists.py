ten_things = ("Meditation, Prayer, Scripture, Fasting, Service, Giving")
print("Wait, that is not ten")
stuff = ten_things.split(' ')
more_stuff = ["Diet", "Exercise", "Discipleship", "Books"]

while len(stuff) != 10:
    next_one = more_stuff.pop()
    print("Adding: ", next_one)
    stuff.append(next_one)
    print("There are {} now".format(len.stuff))
print("There we go: ", stuff)
