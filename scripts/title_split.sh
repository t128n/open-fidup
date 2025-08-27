#!/bin/bash

folder=$1

if [ -z "$folder" ]; then
    echo "Usage: $0 <folder>"
    exit 1
fi

find "$folder" -name "*.md" -type f | while read -r file; do
    sed -i 's/^title: "\([^:]*\):.*"/title: "\1"/' "$file"
done