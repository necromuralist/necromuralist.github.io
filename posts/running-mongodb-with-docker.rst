.. title: Running MongoDB With Docker
.. slug: running-mongodb-with-docker
.. date: 2016-06-19 20:01:17 UTC-07:00
.. tags: docker,mongodb
.. category: MongoDB
.. link: 
.. description: How to run MongoDB using Docker on a local machine.
.. type: text

I am working through O'Reilly's `Data Visualization with Python and JavaScript` and the chapter on reading and writing data uses MongoDB (among other things) as an example. I've wanted to isolate my exploratory/development software installation as much as possible. With python this is fairly easy (thanks to `virtualenv`), and `npm` can make isolating javascript installations easier, but I wanted to try and use Docker to isolate any other things I had to install so this is a first step. It's actuall a second step, since I already have a Redis container, but I didnt' take any notes when I installed it so I don't really remember doing it, and I'm going to extend the use of docker to handle all the intallations I make while reading this book so it's a first-step for this reason, at least.

Anyway, here's what to do.

First pull the `mongo` docker image.

.. code:: bash

   docker pull mongo

To check that it's there after everything is done you can run ``docker images`` and you should see something like this.

.. code:: bash

   REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
   mongo               latest              282fd552add6        2 days ago          336.1 MB
   redis               latest              be9c5a746699        5 weeks ago         184.9 MB

In this case I want the connection to Mongo DB to be available so I'm going to bind its local port (27017) to my host. I'm also going mount my local data file in the container so it will save its data my local folder.

.. code:: bash

   docker run --name mongo -p 27017:27017 -v $PWD/data:/data/db -d mongo

The ``--name`` flag gives the name that you'll see if you run ``docker ps`` to see the running containers. ``-p 27017:27017`` makes it available to my host machine via ``localhost:27017``. ``-v $PWD/data:/data/db`` mounts the ``data`` folder in the directory where I ran the docker command inside the container at ``/data/db``. ``-d`` says to run it as a daemon. Finally the last argument ``mongo`` identifies the image for the container.

At this point MongoDb is accessible from my host machine, so, using ``pymongo`` I can connect to it using something like this.

.. code:: python

   from pymongo import MongoClient

   client = MongoClient('localhost', 27017)

And that's it.

   
