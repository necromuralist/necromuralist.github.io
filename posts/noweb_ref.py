class FirstClass(object):
    """a class that is first
    Parameters
    ----------

    name: string
      some kind of identifier
    """
    def __init__(self, name):
        self.name = name
        return

    def __call__(self):
        """prints the name"""
        print(self.name)
        return

if __name__ == "__main__":
    thing = FirstClass("Bob")
    thing()
