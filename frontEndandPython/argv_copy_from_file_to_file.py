from sys import argv
from os.path import exists

script, from_file, to_file = argv

print("Copying from Rev to new file")

#we could do these to on one line
in_file = open(from_file)
indata = in_file.read()

input()

out_file = open(to_file, 'w')
out_file.write(indata)

print("Alright, all done")

out_file.close()
in_file.close()
