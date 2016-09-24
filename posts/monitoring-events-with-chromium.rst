.. title: Monitoring Events With Chromium
.. slug: monitoring-events-with-chromium
.. date: 2016-09-23 16:57:37 UTC-07:00
.. tags: web developer
.. category: how-to
.. link: 
.. description: How to monitor events in chromium.
.. type: text

If you have a chromium-based browser you can find out what events are affecting a particular item on you web-page using the `monitorEvents <https://developers.google.com/web/tools/chrome-devtools/debug/command-line/events?hl=en>`_ function.

Monitoring Events
-----------------

First right-click on the element that you are interested in and pick "Inspect element" from the context-menu. To monitor mouse-events enter `monitorEvents($0, "mouse")`.

 * ``$0`` is a variable that refers to the element you are inspecting
 * ``"mouse"`` tells it to listen for mouse events

Now, as you do things with your mouse on the element, the console output will show you the the events as they happen. 
   
Listing Event Listeners
-----------------------

To see the event-listeners associated with the element enter the following at the console.

.. code:: javascript

   getEventListeners($0)

.. note:: The ``getEventListeners`` function doesn't work until you've run the ``monitorEvents`` on the element.   
