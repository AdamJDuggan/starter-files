def break_words(stuff):
    words = stuff.split(' ')
    return words

def sort_words(words):
    return sorted(words)

def print_first_word(words):
    word = words.pop(2)

def print_last_word(words):
    word = words.pop(-2)

def sort_sentance(sentance):
    words = break_words(sentance)
    return sort_words(words)

def print_first_and_last_sorted(sentance):
    words = break_words(sentance)
    print_first_word(words)
    print_last_word(words)
