.. title: Processing Test
.. slug: processing-test
.. date: 2016-03-02 12:53:31 UTC-08:00
.. tags: processing
.. category: processing
.. link: 
.. description: Experiments setting up P5 in nikola
.. type: text


This is a `p5 <http://p5js.org/>`_ test based on their `get started <http://p5js.org/get-started/>`_ tutorial. It's also an indirect test of using the `raw` directive to write HTML to pass to `nikola`.

First the link to the library.

.. code:: html

   <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.21/p5.js"></script>

.. raw:: html

   <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.21/p5.js"></script>


And now the sketch.

.. code:: html

   <div id="get_started">
       <script language="javascript" type="text/javascript" src='get_started.js'></script>
   </div>


         
.. raw:: html

   <div id="get_started">
   <script language="javascript" type="text/javascript" src='get_started.js'></script>
   </div>

         
.. listing:: get_started.js
   :code: javascript

Notes
-----

This was a little harder than I thought it would be. First, regarding the javascript file:

* In order to get it to the final HTML you need to put in the ``listings`` folder at the root of the nikola folder and use the `listing <https://www.getnikola.com/handbook.html#listing>`_ `reStructuredText` directive instead of ``include`` (this is a special *nikola* directive). 

And then there's the html trick:

* to get the sketch to stay in the post (instead of showing up on the bottom of the page), you have to use the div trick - create a `div` where you want the sketch to be and give it a unique ID (use the ``raw`` *reStructuredText* to put the HTML tags displayed above into the post), then set the parent in the sketch (``canvas.parent("get_started")`` in this example).

