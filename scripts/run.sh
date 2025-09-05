#!/bin/bash
# Runtime-agnostic script runner
# Tries bun first, falls back to node

if command -v bun &> /dev/null; then
    echo "Using bun runtime"
    bun "$@"
elif command -v node &> /dev/null; then
    echo "Using node runtime"
    node "$@"
else
    echo "Error: Neither bun nor node is available"
    exit 1
fi