#!/usr/bin/env bash

git stash 
git checkout 5carts
git pull upstream master
git merge 5carts
git stash pop

