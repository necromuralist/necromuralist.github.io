.. title: Vue Time Example
.. slug: vue-time-example
.. date: 2018-07-24 16:46:57 UTC-07:00
.. tags: vue web example
.. category: vue
.. link: 
.. description: Updating a display every second with vue.
.. type: text

.. raw:: html

   <div id="vue-timer-example">
     <p>Elapsed Seconds: {{ seconds }}</p>
   </div>

   <script>
    new Vue({
      el: '#vue-timer-example',
      data: {
        seconds: 0
      },
      created() {
        setInterval(() => {
          this.seconds++;
        }, 1000);
      }
    });
   </script>

The output above is created by an HTML snippet that looks like this.   
   
.. code:: html

   <div id="vue-timer-example">
     <p>Elapsed Seconds: {{ seconds }}</p>
   </div>

   <script>
    new Vue({
      el: '#vue-timer-example',
      data: {
        seconds: 0
      },
      created() {
        setInterval(() => {
          this.seconds++;
        }, 1000);
      }
    });
   </script>


Here's what I'm showing here:

 * We're using the ``seconds`` variable in the Vue data in the HTML template (``{{ seconds }}``)
 * We're binding the vue object to the HTML div using the ``id`` of the div and the ``el`` attribute in the Vue object
 * At creation, the ``created`` function is setting up a function to increment the ``seconds`` variable every second

The `setInterval <https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval>`__ function is a javascript built-in that repeatedly calls a function at a set interval. In this case we're passing it a lambda function that increments the ``seconds`` data once every 1,000 milliseconds (so every second).
