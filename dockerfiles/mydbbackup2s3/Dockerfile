FROM mys3cmd

COPY .pgpass /root/
COPY .s3cfg /root/
COPY dump_db_and_upload.sh /root/
RUN chmod 600 /root/.pgpass

VOLUME /db_dumps

CMD ["/root/dump_db_and_upload.sh"]