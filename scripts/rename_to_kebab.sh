#!/bin/bash

export LC_ALL=C.UTF-8

folder=$1

if [ -z "$folder" ]; then
    echo "Usage: $0 <folder>"
    exit 1
fi

if [ ! -d "$folder" ]; then
    echo "Folder $folder does not exist"
    exit 1
fi

echo "Is this the correct folder: $folder? (y/n)"
read confirm

if [ "$confirm" != "y" ]; then
    echo "Aborted"
    exit 0
fi

echo "Files in $folder:"
ls "$folder" | head -10

echo "Proceed with renaming? (y/n)"
read confirm2

if [ "$confirm2" != "y" ]; then
    echo "Aborted"
    exit 0
fi

for file in "$folder"/*; do
    if [ -f "$file" ]; then
        base=$(basename "$file")
        newname=$(echo "$base" | iconv -f utf-8-mac -t utf-8 | tr '[:upper:]' '[:lower:]' | sed 's/[ _]/-/g' | sed 's/ä/ae/g; s/ö/oe/g; s/ü/ue/g; s/ß/ss/g')
        if [ "$base" != "$newname" ]; then
            mv "$file" "$folder/$newname"
            echo "Renamed $base to $newname"
        fi
    fi
done