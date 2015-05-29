FROM debian:7
RUN apt-get update \
 && apt-get install -y redis-server \
 && apt-get clean \
 && apt-get autoremove \
 && rm -rf /var/lib/apt/lists/*

RUN service redis-server stop