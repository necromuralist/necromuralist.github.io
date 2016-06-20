.. title: Running Redis in Docker
.. slug: running-redis-in-docker
.. date: 2016-06-19 20:25:26 UTC-07:00
.. tags: docker redis how-to
.. category: how-to
.. link: 
.. description: How to run redis in docker.
.. type: text

These are the quick notes.

.. note:: Redis uses port 6379 as the default, which is where those ports in the command come from.   

Install
-------

.. code:: bash

   docker pull redis
   docker run -d -p 6379:6379 --name redis redis

Use it with python-redis
------------------------

.. code:: python

   import redis
   server = redis.Redis("localhost", 6379)
   server.keys()

The ``server.keys()`` is a double-check. The ``server`` object won't actually try to connect to the server until you call it.
