.. title: Monitoring Events With Chromium
.. slug: monitoring-events-with-chromium
.. date: 2016-09-23 16:57:37 UTC-07:00
.. tags: web development
.. category: Web Development
.. link: 
.. description: How to monitor events in chromium.
.. type: text

If you have a chromium-based browser you can find out what events are affecting a particular item on you web-page using the `monitorEvents <https://developers.google.com/web/tools/chrome-devtools/debug/command-line/events?hl=en>`_ function.

Monitoring Events
-----------------

Inspect The Element
+++++++++++++++++++

First right-click on the element that you are interested in and pick "Inspect element" from the context-menu.

.. image:: inspect_element.png

Enter the Event Type
++++++++++++++++++++

There are multiple event types to chooske from (*mouse*, *key*, *touch*, and *control*). In this example I'll monitor mouse events. In the javascript console enter:

.. code:: javascript

   monitorEvents($0, "mouse")

.. note:: ``$0`` is a variable that refers to the element you are inspecting and ``"mouse"`` tells it to listen for mouse events

Now, as you do things with your mouse on the element, the console output will show you the the events as they happen.

.. image:: mouse_events.png          

           
Listing Event Listeners
-----------------------

To see the event-listeners associated with the element enter the following at the console.

.. code:: javascript

   getEventListeners($0)

.. image:: get_event_listeners.png

.. note:: The ``getEventListeners`` function doesn't work until you've run the ``monitorEvents`` function.


Picking Elements At The Console
-------------------------------

You don't have to use "Inspect this element" and ``$0``, you can grab an element at the console with javascript instead.

.. code:: javascript

   monitorEvents(document.getElementById("changing-what-you-monitor"), "mouse")

Will monitor mouse-events for the headline to this sub-section.
