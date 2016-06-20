.. title: Fatal Python Error
.. slug: fatal-platform-error
.. date: 2016-06-19 12:53:31 UTC-08:00
.. tags: python errors
.. category: python
.. link: 
.. description: A fatal error that was raised when I ran nikola.
.. type: text
      

I was going to make my first `nikola` post in a few months but when I tride the ``nikola new_post`` command I got the following error.

.. code:: bash

   Could not find platform independent libraries <prefix>
   Could not find platform dependent libraries <exec_prefix>
   Consider setting $PYTHONHOME to <prefix>[:<exec_prefix>]
   Fatal Python error: Py_Initialize: Unable to get the locale encoding
   ImportError: No module named 'encodings'

I had no idea what this meant so I tried searching the web for the error and found people saying different things about what it meant to them when they encountered it, but the one that pointed the way for me was a `bug report for virtualenv <https://github.com/pypa/virtualenv/issues/161>`_ where a user reported that he got this error because, it turned out, the Windows version didn't work with symlinks if the window was opened as an administrator.

I'm not using Windows, but when  I changed into the directory for my `nikola` `virtualenv` installation, ``ls -l`` showed that all my symbolic links were broken. I don't know how it happened... maybe something got moved, but the point of this post was to make a note for myself if I see this error again - check the sym-links for the virtualenv installation.
