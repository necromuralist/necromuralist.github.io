A P5 (Processing) Test
======================

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

         
.. include:: files/posts/processing_test/get_started.js
   :code: javascript

Notes
-----

This was a little harder than I thought it would be. First, regarding the javascript file:

* In order to get it to the final HTML you need to create a folder with the same name is this post's file without extension (`files/posts/processing_test`) and put the javascript there.

* The link to the file somehow magically links the github URL so you can't update it locally and check, you have to push the build to github to see it.

I think that to test the sketches locally it would be better to embed the processing code directly into the post (as HTML) so that you can see it rendered, then move it to the external file when you're ready to push it to github. Maybe using `processing.js` would be easier.

Second, to get the sketch to stay in the post (instead of showing up on the bottom of the page), you have to use the div trick. The part about this that I don't like is that I'm giving the `div` an `id` in the post and then referring to it in the javascript. It seems to work, though.
