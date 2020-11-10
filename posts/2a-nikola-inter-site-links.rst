.. title: Nikola Inter-Site Links
.. slug: 2-nikola-inter-site-links
.. date: 2018-01-14 14:56:00 UTC-08:00
.. tags: nikola,how-to
.. link: 
.. description: How to add inter-site links in nikola.
.. type: text
.. author: hades

Background
----------

While creating a bibliography using nikola I found about nikola `path handlers <https://getnikola.com/path-handlers.html>`__. It allows you to make reference to other posts without needing the full address (e.g. ``http://necromuralist.github.io/pages/nikola-inter-site-links``).

Instead you can use the special `link://` protocol and nikola will resolve it for you. It uses the form:

   ``link://<kind>/<name>/``

There is (of course) another form that lets you doc it using the ``:doc:`` restructured text directive. This form is more succinct, and is what I'll probably stick with in the future. I originally went with the ``link`` version because I thought it would work with other markup languages, but it didn't (or at least not with org-mode).

Post-Paths
----------

In this case I'm trying to link to another post so the link `kind` is ``post_path``, which will resolve to either posts or pages. Because it can be either one, you need to extend the path to this form:

.. code::

   link://post_path/posts/<post-slug>/

.. note:: You can get the slug in the meta-data in the post itself.

.. warning:: When I forgot the last forward-slash (after the slug) nikola couldn't resolve it and returned a 404 error.

Example
~~~~~~~

Here's how to link to another post that I titled **Pruning Large Files From Git with BFG**, with a slug of ``pruning-large-files-from-git-with-bfg``.

.. code:: rst

   `link <link://post_path/posts/pruning-large-files-from-git-with-bfg/>`__

This creates this `link <link://post_path/posts/pruning-large-files-from-git-with-bfg/>`__.

Doc Role
--------

`This <https://www.getnikola.com/handbook.html#doc>`__ is a restructured-text role that nikola supports to make it easier to install links. The previous example using this style would be done like this:

  ``:doc:`link <pruning-large-files-from-git-with-bfg>```

Which creates this :doc:`link <pruning-large-files-from-git-with-bfg>`.
     
Conclusion
----------

The ``doc`` method  seems much easier for posts, but the ``links`` method covers many other cases and might be useful otherwise. It should be noted that both methods work for pages as well (stories), although the link version will need the path changed. In my case, all the pages are under the ``stories`` folder so the link would be change to something like:

 ```link <link://post_path/stories/story-slug/>`__``
