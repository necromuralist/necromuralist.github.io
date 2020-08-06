.. title: How To Change The Nikola Bootswatch Theme
.. slug: how-to-change-the-nikola-bootswatch-theme
.. date: 2017-08-13 15:58
.. tags: how-to,nikola
.. category: Nikola
.. link: 
.. description: How to change the nikola theme using customized CSS and HTML.
.. type: text
.. author: hades

I had my theme for this site set to use `Spacelab <http://nickmccurdy.com/bootswatch/spacelab/>`_, which I liked, but the gradients were starting to annoy me so I decided to switch to `Journal <http://nickmccurdy.com/bootswatch/journal/>`_, which matches my aesthetic tastes a little better. This took more work than I thought it would (mostly because I don't mess with the *nikola* configuration very often). So these are my notes for the next time.

Overview
--------

#. Install the `bootswatch 3 <https://themes.getnikola.com/#bootstrap3>`_ nikola theme (if you haven't already) (``nikola install_theme bootstrap3``).

#. Install the `journal bootswatch theme <https://bootswatch.com/journal/>`_  (``nikola bootswatch_theme -s journal``).

#. Get the base template (``nikola theme -c base.tmpl``).

#. In ``base.tmpl``, change ``navbar-inverse`` to ``navbar-default``.

#. Change the anchor color in ``bootstrap.css`` to something less creamsicle (and do whatever other CSS adjustments you need to do).

#. If you need to, minify the CSS (``cleancss -o bootstrap.min.css bootstrap.css``).

#. Build the posts (``nikola build``).

#. Admire the fruits of your (well, other people's) labor.

Installing the theme
--------------------

The Bootswatch 3 Theme
~~~~~~~~~~~~~~~~~~~~~~

I already had the bootswatch 3 theme installed, since I was using *Spacelab*, but if you don't have it installed this is how to set the base theme:

::

    nikola install_theme bootstrap3

The Journal Theme
~~~~~~~~~~~~~~~~~

Since I want to change the theme to *Journal* this is the next step (you can also specify a parent theme, but the default is ``bootstrap3``, which is what I wanted anyway):

::

    nikola bootswatch_theme -s journal

This will set up the default bootstrap theme, but you need to re-build the HTML to have it show up on the development-server's web-page (something that I didn't realize initially, causing me to think something was broken).

::

    nikola build

Updating the Template
---------------------

On re-loading the page I found that it mostly worked, but for some reason it looked more orange than I expected. It turns out that the *nikola* developer decided that ``navbar-inverse`` should be the default style for the navbar (instead of ``navbar-default``) and the section headers are hyperlinks, which in the *Journal* theme are orange (by orange I really mean something closer to a creamsicle). Following the instructions in this `bug report <https://github.com/getnikola/nikola/issues/2552>`_ (which says that it isn't a bug, it's a feature) I copied the base template from the *nikola* installation (in ``site-packages``) into the site using a built-in *nikola* command.

::

    nikola theme -c base.tmpl

This command creates a file (``themes/custom/templates/base.tmpl``) which you can edit to override the built-in base template. I opened it up and changed the ``navbar-inverse`` CSS class to ``navbar-default``.

.. code:: html

   <nav class="navbar navbar-default navbar-static-top">

The I re-built the *nikola* posts, and reloaded the page and there it was, the white navbar I wanted.

Updating the CSS
----------------

Fixing the Headline Color
~~~~~~~~~~~~~~~~~~~~~~~~~

"Fixing" the headlines was more straight-forward. When you install the *journal* theme it creates a file at ``themes/custom/assets/css/bootstrap.css`` (along with a mini-fied version) which you can edit. I decided to leave the anchor-hover value the same but changed the plain anchor color to ``#990033`` so that it's more of a blood red than a creamsicle. 

Changing the Font
~~~~~~~~~~~~~~~~~

Since I was editing the CSS anyway I made some other changes. First, I changed the text-font to *Goudy Bookletter*. It's a little old-fashioned looking, but I've always liked Goudy's fonts. To do this I first added a link to the font:

.. code:: css

    @import url("https://fonts.googleapis.com/css?family=Goudy+Bookletter+1911:400,700");

Then I updated the *font-family*.

.. code:: css

    body {
      font-family: "Goudy Bookletter 1911", "EB Garamond",  Georgia, "Times New Roman", Times, serif;
      font-size: 3em;
      line-height: 1.42857143;
      color: #777777;
      background-color: #ffffff;
    }

Fixing the headline
~~~~~~~~~~~~~~~~~~~

For some reason the title of the site has a CSS rule (``.navbar-brand #blog-title``) that sets the top padding to 15 px even though the other elements have a padding of 19.5 px so I overrode it to make it align with the other elementes.

.. code:: css

    .navbar-header .navbar-brand #blog-title {
        padding-top: 19.5px;
    }

Minifying
~~~~~~~~~

When I wrote this originally, editing the ``bootstrap.css`` file worked, but on one of `my other sites <https://necromuralist.github.io/data_science/>`_ the CSS file that is being created uses the ``bootstrap.mini.css`` file instead. While this seems like it would be preferable, anyway, the change came about unexpectedly - I still don't know why Nikola is doing it on that site and not this one (I guess maybe I'll have to read the manual one of these days). So for that case, after editing the ``bootstrap.css`` file you have to minify it (or just make a copy called ``bootstrap.min.css``). To minify it I use `Clean CSS CLI <https://github.com/jakubpawlowicz/clean-css-cli>`_.

.. code:: bash

   npm install clean-css-cli -g
   cd themes/custom_theme/assets/css/
   cleancss -o bootstrap.min.css bootstrap.css

Where the ``themes`` folder is in the root of my nikola repository, next to the ``conf.py`` file.

Deploy
------

This isn't really to do with theme-changing, but for completeness, I'll mention it anyway.

.. code:: bash

   nikola github_deploy

Summary
-------

Changing the bootswatch theme isn't as hard as it seemed, in retrospect. You just have to know the basic commands (``nikola install_theme bootstrap3``, ``nikola bootswatch_theme -s journal``), know that the inverse navbar is the default (and how to change it - ``nikola theme -c base.tmpl``), know how to update the CSS to whatever you want (by editing ``bootstrap.css`` and minifying it if necessary), and understand that you have to build the site to see the changes on the development server (``nikola build``).
