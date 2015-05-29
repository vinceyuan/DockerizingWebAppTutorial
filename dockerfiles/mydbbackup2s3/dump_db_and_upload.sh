#!/bin/bash
# A script to dump db and compress it and then upload the file to S3.
# should change mode like 'chmod 777 dump_db_and_sync.sh'
FILENAME=$(TZ=Asia/Hong_Kong date +"dump%Y-%m-%dT%H:%M:%S+0800.txt.gz")
FULLDIR="/db_dumps/"
FULLPATH="$FULLDIR$FILENAME"
S3PATH="s3://db_dumps/"
echo "Begin to dump mynodeappdb to $FULLPATH"
# We don't use $POSTGRES_PORT_5432_TCP_ADDR for host, but use postgres which is linked
# $POSTGRES_PORT_5432_TCP_ADDR will change, but link name postgres does not change.
# We also use the link name postgres in .pgpass
pg_dump -h postgres -U postgres mynodeappdb | gzip > $FULLPATH
echo "Done"
echo "Begin to upload the dump to $S3PATH"
s3cmd put $FULLPATH $S3PATH
echo "Done"
echo "Delete the local dump"
rm $FULLPATH
echo "Finished dump and upload"