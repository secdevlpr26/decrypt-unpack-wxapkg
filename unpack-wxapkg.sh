#!/bin/bash
read -p 'Enter the directory path: ' directory
for file in "$directory"/*; do
  echo "$file"
  node WXApp-Unpacker/wuWxapkg.js $file
  echo "------------------------------------------------------------------------------------------------------------------"
done
