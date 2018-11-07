# here we are importing the argv fuction from the sys library
from sys import argv
#these are te two argv arguments to be put in the command line
script, input_file = argv
#a fucntion called print_all with an argument of f
def print_all(f):
    # read f and print it
    print(f.read())

def rewind(f):
    #o is the reference point from the file. 0 is the start
    f.seek(0)
# this function has two arguemnts
def print_a_line(line_count, f):

    print(line_count, f.readline())

current_file = open(input_file)

print("First lets print the whole file: \n")

print_all(current_file)

print("Now lets rewind, like a tape.")

rewind(current_file)

print("Lets print three lines")

current_line = 1


current_line = current_line + 1
print_a_line(current_line, current_file)

current_file = current_line + 1
print_a_line(current_line, current_file)
