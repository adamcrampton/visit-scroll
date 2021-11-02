#!/bin/bash

# Ask for loop count.
echo Enter number of page loads
read attempts

# Run Selenium tests using specified count.
counter=0
while [  $counter -lt $attempts ]; do
    let counter=counter+1
    echo Loading page $counter of $attempts ...
    node tests/test.js
done
echo All done.