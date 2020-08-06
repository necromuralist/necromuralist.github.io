.. title: Building a Jupyter Docker Container
.. slug: building-a-jupyter-docker-container
.. date: 2016-06-19 20:48:21 UTC-07:00
.. tags: docker,jupyter,how-to
.. category: Docker
.. link: 
.. description: This is what my docker file looks like.
.. type: text

This is how I built a docker container to run a jupyter server. The reason why I did it was that I wanted to isolate any non-python dependencies I needed to install, but so far I haven't done any, so this could actually be done more easily using `virtualenv`, but this is a starting point.

The Dockerfile
--------------

This is the configuration for building the docker image.
   
.. include:: posts/includes/pyjsviz_jupyter.dockerfile
   :code: dockerfile

The ``FROM`` line shows that I'm building my container using an ubuntu image (the latest image). The ``WORKDIR`` sets the current working directory so commands that are run will look there for files. The next set of ``RUN`` lines just say to update ``apt-get`` and install some basic python packages. The ``ADD`` line takes the ``requirements.txt`` file in the directory where I'm going to run this and put it in ``/CODE`` which I pointed to with the ``WORKDIR`` line. The next ``RUN`` commands install my python dependencies and make a folder called ``/notebooks`` to put the jupyter notebooks in. The last line (``CMD``) is what will be executed when the container is run.

Building the Image
------------------

If the docker-file is stored in a file named ``jupyter.dockerfile`` next to the ``requirements.txt`` file, both of which are in the directory where I run the build command. To build it (and name the image ``jupyter``) I'd run the command:

.. code:: bash

   docker -f jupyter.dockerfile -t jupyter:latest .

Running the Server
------------------

To run the server in the same directory where the notebooks should be stored and using the default port of 8888:

.. code:: bash

   docker --name jupyter -p 8888:8888 -v $PWD:/notebooks -d jupyter

Now the server should be reachable at ``http://localhost:8888``.
