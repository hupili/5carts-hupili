#!/usr/bin/env bash

#dir_input="."
dir_output="_site"

rm -rf $dir_output
jekyll --safe --no-auto $dir_output

