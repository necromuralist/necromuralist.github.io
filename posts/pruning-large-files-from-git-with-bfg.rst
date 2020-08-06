.. title: Pruning Large Files From Git with BFG
.. slug: pruning-large-files-from-git-with-bfg
.. date: 2018-01-14 12:57:59 UTC-08:00
.. tags: git,bfg,how-to
.. category: Git
.. link: 
.. description: How to prune large files from a git repository after pushing changes with BFG.
.. type: text
.. author: hades

These are my notes on removing large files from a git repository with the `BFG Repo-Cleaner <https://rtyley.github.io/bfg-repo-cleaner/>`_. It assumes that you have already pushed it to a remote repository. If you've committed the changes but haven't pushed them, see `this post <link://post_path/posts/removing-large-files-from-git-using-bfg-and-a-local-repository/>`__.

1 Background
------------

I accidentally committed an 89 MB file to git and pushed it upstream to github. This is within the allowed file-size limit, but when I looked in the file it was filled with the same error message over and over again, so it wasn't useful to keep, anyway. I was just working with small log-files, so any large files indicated an error, anyway, so I decided to clean anything over 50 MB from the repository using *BFG*. The instructions on the home page mostly work, but didn't exactly work so I'm making some notes here for the next time.

2 The Process
-------------

Assuming you've downloaded the BFG jar file, this is what you need to do.

.. code:: sh

    git clone --mirror <remote git address>

The ``--mirror`` flag creates a bare repository so it will look a little odd (the top level has the contents of what are normally in the ``.git`` folder). When I first tried this I thought I could clone my local copy but when I ran BFG on the clone it said that it couldn't find any large files. As noted in `this bug-report <https://github.com/rtyley/bfg-repo-cleaner/issues/65>`_ the large files would be in the packfile if you clone it from a remote repository, but not necessarily in the local repository, so I had to clone it from github.

Next run the BFG.

.. code:: sh

    java -jar BFG-1.12.15.jar --strip-blobs-bigger-than 50M <path to cloned mirror>

Now you have to change into the cloned repository and execute some commands to update it.

.. code:: sh

    git reflog expire --expire-now --all
    git gc --prune=now --aggressive

Now push it back to github.

.. code:: sh

    git push

At this point the original local copy of the repository will still have the large file(s) in the history so if you just do a git pull it will think you are ahead of the remote, so you have to remove your original local repository and re-clone the remote.

.. code:: sh

    rm -r <original local repository>
    git clone <remote repository>

One thing that tripped me up a little was that I had removed the *master* branch but the *BFG* re-added it, so it originally looked like I had lost some changes. Once I changed back into my working branch everything was as I had expected.
