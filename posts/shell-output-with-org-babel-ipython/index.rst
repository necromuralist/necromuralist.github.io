.. title: Shell Output With Org-Babel Ipython
.. slug: shell-output-with-org-babel-ipython
.. date: 2017-10-11 12:49:19 UTC-07:00
.. tags: emacs,python,orgmode
.. category: HowTo
.. link: 
.. description: How to include shell output in ob-ipython blocks
.. type: text

One of the nice things about ipython is the ability to run shell commands with ``!``. When you use it in an `ob-ipython <https://github.com/gregsexton/ob-ipython>`_ block, though, it will dump the output into a popup rather than in the same emacs org-file. One alternative is to use a shell block instead. I wrote earlier that this requires you to put an echo command in the block to prevent the text going to a pop-up.

.. code:: bash

   #+BEGIN_SRC sh
   head Future_Connections.csv
   echo
   #+END_SRC
   
   #+RESULTS:
   |            | Future Connection |
   | (6, 840)   |               0.0 |
   | (4, 197)   |               0.0 |
   | (620, 979) |               0.0 |
   | (519, 872) |               0.0 |
   | (382, 423) |               0.0 |
   | (97, 226)  |               1.0 |
   | (349, 905) |               0.0 |
   | (429, 860) |               0.0 |
   | (309, 989) |               0.0 |
          
It turns out that there's a similar solution to the ob-ipython popup, only since it's in python you have to use a print this time.


.. code:: python

   #+BEGIN_SRC ipython :session futures :results output
   !head Future_Connections.csv
   print()
   #+END_SRC
   
   #+RESULTS:
   #+begin_example
   ,Future Connection
   "(6, 840)",0.0
   "(4, 197)",0.0
   "(620, 979)",0.0
   "(519, 872)",0.0
   "(382, 423)",0.0
   "(97, 226)",1.0
   "(349, 905)",0.0
   "(429, 860)",0.0
   "(309, 989)",0.0
   
   #+end_example

I actually prefer the shell version, and since this is org-babel it makes more sense to use it, but I forgot about it just now and it took me a little while to figure out how to get the ob-ipython block to work so ***note to future self:** *This is how to make it work, but use a shell block instead.*
