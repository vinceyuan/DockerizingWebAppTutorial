FROM mynodejs

COPY . /src
RUN cd /src && npm install

VOLUME /log
CMD ["forever", "-l", "/log/forever.log", "-o", "/log/out.log", "-e", "/log/err.log", "/src/app.js"]
