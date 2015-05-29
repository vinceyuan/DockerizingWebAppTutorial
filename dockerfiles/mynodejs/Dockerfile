FROM myredispgclient
RUN apt-get update \
 && apt-get install -y --force-yes --no-install-recommends \
      apt-transport-https \
      build-essential \
      curl \
      ca-certificates \
      git \
      lsb-release \
      python-all \
      rlwrap \
 && apt-get clean \
 && apt-get autoremove \
 && rm -rf /var/lib/apt/lists/*

RUN curl https://deb.nodesource.com/node/pool/main/n/nodejs/nodejs_0.10.30-1nodesource1~wheezy1_amd64.deb > node.deb \
 && dpkg -i node.deb \
 && rm node.deb

RUN npm install -g express@3.4.7 \
 && npm install -g forever \
 && npm cache clear

ENV NODE_ENV production
