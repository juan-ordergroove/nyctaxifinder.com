#!/bin/bash

# Replace these three settings.
PROJDIR="/var/run/nyctaxifinder.com"
PIDFILE="$PROJDIR/juanngy.com.pid"
#SOCKET="$PROJDIR/nyctaxifinder.com.sock"

cd $PROJDIR
if [ -f $PIDFILE ]; then
    kill `cat -- $PIDFILE`
    rm -f -- $PIDFILE
fi

/opt/pythonenv/nyctaxifinder-env/bin/python /opt/pythonenv/nyctaxifinder-env/nyctaxifinder.com/manage.py runfcgi pidfile=$PIDFILE method=threaded host=127.0.0.1 port=8181
