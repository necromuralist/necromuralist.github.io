.. title: Vue Data
.. slug: vue-data
.. date: 2018-07-21 17:44:51 UTC-07:00
.. tags: vue howto
.. category: vue
.. link: 
.. description: Vue Data.
.. type: text

The HTML
--------

When using vue you need to create an area in the HTML where it can do its thing. The traditional way to do this is to create a ``<div>`` with and ``id`` of ``app``, but since I'm doing this in a blog there's the likelihood that more than one of them will show up on the same page so I'm going to give this snippet the id of ``vue-data`` .

.. code:: html

   <div id="vue-data">
     <p>{{ message }}</p>
     <p>{{ price }}</p>
   </div>

Besides the div you might notice that there are some strange paragraphs with double-braces around them (e.g. ``{{ messages }}``). Thses represent javascript variables that will be replaced by the values they contain when the HTML is rendered. If, for example, the ``message`` variable contains the string 'flugzeug', then when the page is rendered you will see ``flugzeug`` in the page.

The Javascript
--------------

To populate the variables in the HTML we need to create a ``vue`` object and populate two attributes:

 * ``el``: points to the HTML element that will contain our output - ``#vue-data`` in our example
 * ``data``: holds the variables that will be used in rendering the template

.. code:: javascript

  <script>
    const vue_data = new Vue({
      el: '#vue-data',
      data: {
       message: "go away",
       price: 42 + 8
      }
    })
  </script>

.. include:: files/posts/vue-data/vue_data.html
