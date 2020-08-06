.. title: Linking Two Docker Containers
.. slug: linking-two-docker-containers
.. date: 2016-06-19 20:31:20 UTC-07:00
.. tags: docker,how-to 
.. category: Docker
.. link: 
.. description: How to link two docker containers.
.. type: text

I think this is the deprecated to do it, now that they have `docker connect`, but it works, so I'll keep the notes.

My goal was to link a container that I'd set up to run a `Jupyter Notebook` server to a `Mongo DB` server. I'll leave out the installation notes and just assume that there's a docker image named ``mongo`` for `MongoDB` and one named ``jupyter`` for my `Jupyter` server. 

First I'll run MongoDB. `MongoDB` is going to use ``/data/db`` to store its data-files so I'm going to mount my `data` directory there.

.. code:: bash

   docker run --name mongo -v $PWD/data:/data/db -d mongo

Next I'll run the `Jupyter` container, using the ``--link`` option to point it to the ``mongo`` container. The jupyter notebook is running on port 8888 and looking for notebooks in the ``/notebooks`` directory so I'll mount my current working director there. 

.. code:: bash

   docker run --name jupyter -v $PWD:/notebooks -p 8888:8888 --link mongo -d jupyter

At this point, opening a browser at ``http://localhost:8888`` should open up the jupyter-server's home.
