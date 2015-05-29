FROM myredisclient
RUN apt-get update \
 && apt-get install -y wget \
 && echo 'deb http://apt.postgresql.org/pub/repos/apt/ wheezy-pgdg main' >> /etc/apt/sources.list.d/pgdg.list \
 && wget --no-check-certificate --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add - \
 && apt-get update \
 && apt-get install -y --force-yes postgresql-client \
 && apt-get clean \
 && apt-get autoremove \
 && rm -rf /var/lib/apt/lists/*

