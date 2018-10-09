.. title: Removing Large Files From git Using BFG and a Local Repository
.. slug: removing-large-files-from-git-using-bfg-and-a-local-repository
.. date: 2018-01-14 13:55:37 UTC-08:00
.. tags: git, bfg
.. link: 
.. description: Removing committed files that haven't been pushed to a remote repository.
.. type: text
.. author: hades

1 Background
------------

This is about removinge large files that have been committed to a git repository. Github has a 100 MB file limit, and I'm using Century Link's ADSL (Fiber to the Node) so my upload speeds are much slower than my download speeds, so I'd like to keep large files out of the repository. The problem when working with data is that you can often end up with very large files that accidentally get committed, then need to be removed. Here's two cases I've run into:

- I accidentally committed some large files to a git repository and couldn't push my changes up to github, having exceeded their file-size limit

- I committed a folder that had some large files that were under the limit, but were just taking too long to upload.

I stumbled upon the `BFG Repo-Cleaner <https://rtyley.github.io/bfg-repo-cleaner/>`_ while looking for a solution and kept these notes so I don't forget what I did.

The instructions on the website are pretty clear, but it assumes that the large files are on a remote repository (I talk about that case `here <link://post_path/posts/pruning-large-files-from-git-with-bfg/>`__) but in my case my changes were local so I needed to change the first step from cloning the repository to cleaning the git repository (I'll call the repository ``big_files``). In this case I decided to remove anything bigger than 50 MegaBytes.

2 The Commands
--------------

For reference, these are all the commands. I'll go over them in the sections that follow. The ``java -jar`` line pointing to the BFG jar file will have to match your download file name and location.

.. code:: python

    cd big_files
    git gc
    cd ../
    java -jar bfg-1.12.7.jar --strip-blobs-bigger-than 50M big_files
    cd big_files
    git reflog expire --expire=now --all
    git gc --prune=now --aggressive

I'll break this down into three parts:

1. Clean the repository

2. Run BFG to remove the file from the git history

3. Clean the repository again

2.1 Clean The repository
~~~~~~~~~~~~~~~~~~~~~~~~

The `git gc <https://git-scm.com/docs/git-gc>`_ (garbage collection) command will clean up unnecessary files and perform some optimizations that will let us run BFG on it.

.. code:: sh

    cd big_files
    git gc
    cd ../

2.2 Run BFG
~~~~~~~~~~~

.. code:: sh

    java -jar bfg-1.12.7.jar --strip-blobs-bigger-than 50M big_files

- You have to run in the folder just above the git repository

- Change it to have the correct path to the jar (e.g. ``java -jar /home/username/bin/bfg-1.12.7.jar``).

- Then tell it to remove files bigger than 50 Megabytes (or whatever size limit you want) in the ``big_files`` folder

2.3 Clean Up the Git Repository Again
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

``BFG`` will tell you this part in it's output, although I'm not using bash so it worked better when I ran the commands separately, instead of all on one line using ``&&`` between the commands (fish doesn't support it). These are git commands so you have to change back into the repository folder.

.. code:: python

    cd big_files
    git reflog expire --expire=now --all
    git gc --prune=now --aggressive
