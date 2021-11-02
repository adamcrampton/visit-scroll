#!/bin/bash
# Run Selenium tests using specified count.
counter=0
attempts=3
while [  $counter -lt $attempts ]; do
    let counter=counter+1
    echo Running test $counter of $attempts ...
    node tests/test.js
done
echo Tests complete.