FROM myredispgclient

RUN apt-get update \
 && wget -O- -q http://s3tools.org/repo/deb-all/stable/s3tools.key | apt-key add - \
 && wget -O/etc/apt/sources.list.d/s3tools.list http://s3tools.org/repo/deb-all/stable/s3tools.list \
 && apt-get update \
 && apt-get install -y --force-yes --no-install-recommends s3cmd=1.0.0-4 \
 && apt-get clean \
 && apt-get autoremove \
 && rm -rf /var/lib/apt/lists/*