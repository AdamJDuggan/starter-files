import sys
script, input_encoding, error = sys.argv
# Main meat of this code is a function called main.
# We will call it at end of script to get things going along.
def main(languages_file, encoding, errors):
    line = languages_file.readline() #read one line from language file given.
# the if statement starts a loop.
    if line:
        print_line(line, encoding, errors)
        return main(languages_file, encoding, errors) # calling the main function INSIDE main makes it jump to the top and loop

# this function sets up the print of the line of text, its byte code and if there are errors
def print_line(line, encoding, errors):
    next_lang = line.strip()
    raw_bytes = next_lang.encode(encoding, errors=errors)
    cooked_string = raw_bytes.decode(encoding)

    print(raw_bytes, "<===>", cooked_string)


languages = open("languages.txt", encoding= "utf-8")

main(languages, input_encoding, error)
