"""A docstring for the literate.py module"""

# imports
import sys
from argparse import ArgumentParser

# constants

# exception classes

# interface funchtions

# classes


class LiterateClass(object):
    """A class to be substituted above

    Parameters
    ----------

    String who: name of user
    """
    def __init__(self, who):
        self.who = who
        return

    def __call__(self):
        print("Who: {0}".format(self.who))

# internal functions & classes

def main():
    parser = ArgumentParser(description="literate caller")
    parser.add_argument("-w", "--who", type=str,
                        default="me", help="who are you?")
    args = parser.parse_args()
    who = args.who
    thing = LiterateClass(who)
    thing()
    return 0


if __name__ == "__main__":
    status = main()
    sys.exit(status)
