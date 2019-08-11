#!/bin/sh

set -e

yarn ci

if [[ $(git diff --stat) ]]; then
  echo "Uncommitted changes! Make sure they weren't because of CI."
  exit 1
else
  git push
  netlify watch
  notify -t Midway Website -m 'The site is deployed!'
fi
