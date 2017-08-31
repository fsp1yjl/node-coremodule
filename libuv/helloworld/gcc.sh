#!/bin/bash

gcc -v  -I/usr/local/include   main.c /usr/local/lib/libuv.a  -o  t
