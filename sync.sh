#!/usr/bin/env zsh

set -e

git checkout staging
git rebase master
git push -f
git checkout master
