.. title: Converting Nikola from a Blog to a Site
.. slug: converting-nikola-from-a-blog-to-a-site
.. date: 2016-03-02 12:53:31 UTC-08:00
.. tags: nikola,how-to
.. category: Nikola
.. link: 
.. description: Notes on converting this site from a blog to a web-site.
.. type: text

These are my notes on converting this site to be a web-site first (with a blog on the side). There is an official page on `creating a site instead of a blog <https://getnikola.com/creating-a-site-not-a-blog-with-nikola.html>`_, but I had a little bit of a hard time figuring out what was going on so these are the main points in case I need to do it again.

In a nutshell:

   #. Get rid of the sub-folder argument in the ``PAGES`` variable in ``conf.py``
   #. Set ``INDEX_PATH`` to point to the `posts` sub-folder
   #. Create an index page for the site.   

conf.py
-------

The main things to do are to edit the `conf.py` file so that the pages you create get copied over as the root of the `output` folder (instead of in a sub-folder called `stories`) and moving the blog-index down into a sub-folder.

Making 'pages' the Site
~~~~~~~~~~~~~~~~~~~~~~~~~

To make the pages you create the root of the site you need to change the ``PAGES`` variable to not have a sub-folder as the target (this is the second-entry in the tuple). So if it originally was:

.. code:: python
          
   PAGES = (
       ("pages/*.rst", "pages", "story.tmpl"),
   )

You would change the second value in the tuple to an empty string:

.. code:: python
          
   PAGES = (
       ("pages/*.rst", "", "story.tmpl"),
   )

Now when you build the site (``nikola build``) the ``output`` folder will have your 'stories' at the top-level. This means that when you refer to pages (e.g. in the navigation configuration) you don't add 'pages/' as a prefix anymore.

Moving the Blog-index
~~~~~~~~~~~~~~~~~~~~~

Since Nikola assumes that the blog is your main-page you need to tell it to create the index in a sub-folder by setting the ``INDEX_PATH`` to the name of the sub-folder. If, for example, the blog-posts are being put into ``posts``, the setting would be:

.. code:: python

   INDEX_PATH = "posts"

.. note:: This was commented out by default so uncomment it and make the change.

Creating the Home Page
----------------------

At this point if you build the site and navigate to it you'll find that your home-page is now a directory of your ``output`` folder. You can navigate to a page by going through the folders, but this is probably not the intended way to get around. The easiest way (that I found) to create the home-page is to create a new-page (``nikola new_page``) and when prompted for a title, call it ``index``. This will create ``pages/index.rst`` which you can edit to become your home page (make sure to change the title if you don't want the page headline to be 'index').

.. note:: Some other things might need to be re-done in the ``conf.py`` as well, since the folder structure has changed. These are only the basic steps to switch. The ``NAVIGATION_LINKS`` in particular may need updating.
