#!/bin/bash
read -p 'Enter the Input path: ' path
#count = 1
for file in "$path"/*; do
   #echo "$count"
   echo "$file"
   tmpfile=$(echo $file | cut -d'.' -f 1)
   tmpfile=$(echo $tmpfile | cut -d'-' -f 1)
   wxid=$(echo $tmpfile | cut -d'/' -f 2)
   echo "$wxid"
   export GOPATH=/home/supraja/go/pkg/mod
   go run /home/supraja/1MiniApps/dataset/Decryptor/wxapkg_decrypt.go -wxid $wxid -in $file -out "decrypted_files/${wxid}-out.wxapkg"
   #count=$(( count+1 ))
   directory="decrypted_files/${wxid}-out.wxapkg"
   echo "$directory"
   node WXApp-Unpacker/wuWxapkg.js $directory
   echo "------------------------------------------------------------------------------------------------------------------"
   done
done
	
