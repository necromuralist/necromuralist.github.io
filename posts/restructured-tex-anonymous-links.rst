.. title: Restructured Text Anonymous Links
.. slug: restructured-text-anonymous-links
.. date: 2018-01-08 18:06:52 UTC-08:00
.. tags: restructuredtext
.. category: HowTo
.. link: 
.. description: Using anonymous links to re-use text in restructured text hyperlinks.
.. type: text

Background
----------

I'm creating an `annotated bibliography <https://en.wikipedia.org/wiki/Annotated_bibliography>`__ using nikola, and added links to the PDFs online so I could download them again if needed. I called them all `PDF Link` but when I built the web-page I found that there were some restructured text errors in it that looked like this.

.. image:: backlink_rst_error.png

This `stack overflow answer <https://stackoverflow.com/questions/5464627/how-to-have-same-text-in-two-links-with-restructured-text>`__ pointed me to anonymous links (which I had never heard of) to fix the problem.

Named and Anonymous Links
-------------------------

The form for hyperlinks that I learned used one underscore::

  `some link<http://some-target.com>`_

This creates both a hyperlink in the document and a target that other hyperlinks can use. In this case, you can create a link back to this hyperlink somewhere else in the document using this syntax::

  `some link`_

Unfortunately this means that the text used for the link has to be unique. In order to make multiple hyperlinks with the same text in them, use two underscores::

  `some link <http://some-target.com>`__

This fixed it for me. Of course now the internal targets are gone as well, but they wouldn't have worked anyway.

See the `Restructured Text Hyperlink Documentatation <http://docutils.sourceforge.net/docs/ref/rst/restructuredtext.html#hyperlink-references>`__ for more details.
