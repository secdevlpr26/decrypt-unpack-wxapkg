package main

import (
    "crypto/aes"
    "crypto/cipher"
    "crypto/sha1"
    "flag"
    "fmt"
    "golang.org/x/crypto/pbkdf2"
    "io/ioutil"
    "log"
)


var (
    wxid string
    iv string
    salt string
    wxapkgPath string
    decWxapkgPath string
)

func main(){
    flag.StringVar(&wxid,"wxid","","miniapp id")
    flag.StringVar(&iv,"iv","the iv: 16 bytes","AES IV")
    flag.StringVar(&salt,"salt","saltiest","pbkdf2 salt")
    flag.StringVar(&wxapkgPath,"in","","WXPKG PATH")
    flag.StringVar(&decWxapkgPath,"out","","Decrypted PATH")
    flag.Parse()

    if wxid == ""{
        fmt.Println("NO id is given. Decryption failed")
        return
    }
    dec()
}

func dec(){
    dataByte,err := ioutil.ReadFile(wxapkgPath)
    if err != nil{
        log.Fatal(err)
    }

    dk := pbkdf2.Key([]byte(wxid),[]byte(salt),1000,32,sha1.New)
    block,_ := aes.NewCipher(dk)
    blockMode := cipher.NewCBCDecrypter(block,[]byte(iv))
    originData := make([]byte,1024)
    blockMode.CryptBlocks(originData,dataByte[6:1024+6])

    afData := make([]byte,len(dataByte) - 1024 - 6)
    var xorKey = byte(0x66)
    if len(wxid) >= 2 {
        xorKey = wxid[len(wxid) - 2]
    }
    for i,b := range dataByte[1024+6:]{
        afData[i] = b ^ xorKey
    }

    originData = append(originData[:1023],afData...)

    err = ioutil.WriteFile(decWxapkgPath,originData,0666)
    if err != nil{
        fmt.Println("No permission to write files. Try again.")
        return
    }
    fmt.Println("Great! PACKAGE Decrypted!")
}



