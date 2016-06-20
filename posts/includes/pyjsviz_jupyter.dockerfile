FROM ubuntu:latest
WORKDIR /code
RUN apt-get update && apt-get -y upgrade
RUN apt-get install -y build-essential python-dev
RUN apt-get install -y python python-distribute python-pip
RUN pip install pip --upgrade
ADD requirements.txt /code
RUN pip install -r requirements.txt
RUN mkdir /notebooks
CMD jupyter notebook --no-browser --ip 0.0.0.0 --port 8888 /notebooks
