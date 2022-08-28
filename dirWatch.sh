#! /bin/bash

DIR=`pwd`

inotifywait -m -e create,moved_to $1 | while read DIRECTORY EVENT FILE; do
    ./sendKindleEmail/sendKindleEmail.mjs $DIR/$FILE
done