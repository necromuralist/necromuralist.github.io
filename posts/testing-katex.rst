.. title: Testing KaTex
.. slug: testing-katex
.. date: 2016-03-02 14:43:41 UTC-08:00
.. tags: testing,nikola,katex
.. category: Nikola
.. link: 
.. description: 
.. type: text

This is a test to see if `KaTex <https://khan.github.io/KaTeX/>`_ is working.

.. math::

   f(x) = \pi r^2\\

The answer is no, but mathjax does seem to work.
   
Getting it Working
------------------

Edit the ``conf.py`` file.

 #. Uncomment the second ``MATHJAX_CONFIG`` default (the one with actual content instead of an empty string).
 #. Set ``EXTRA_HEAD_DATA`` to the mathjax CDN.

.. code:: python

   EXTRA_HEAD_DATA = '''
   <script type="text/javascript" async
     src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
   </script>
   '''

.. note:: The `documentation <https://getnikola.com/handbook.html#math>`_ says that you need to add the ``mathjax`` tag to the post, but the ``conf.py`` has ``HIDDEN_TAGS = ['mathjax']`` which I think makes it work anyway. The documentation also makes no mention of the need for the CDN (or installing the javascript) but nikola doesn't seem to come with `mathjax` otherwise.
