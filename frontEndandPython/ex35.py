from sys import exit

def gold_room():
    print("This room is full of gold. How much do you take?")

    choice = input("> ")
    if "0" in choice or "1" in choice:
        how_much = int(choice)
    else:
        print("Man, learn to type a number")
        exit()
    if how_much < 50:
        print("You are not greedy")
        exit(0)
    else:
        print("You greedy sod!")

gold_room()
