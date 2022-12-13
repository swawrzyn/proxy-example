#!/bin/bash

declare loc=$(pwd);

function createCerts() {
  if command -v mkcert 2>/dev/null; then
    mkcert -install && mkcert -cert-file cert.pem -key-file key.pem {{CHANGE_TO_REQUIRED_DOMAIN}}
  else
    echo "please install mkcert"
  fi
}

if [[ ! -f cert.pem ]] && [[ ! -f key.pem ]]
then
  echo "Generating SSL certs"
  createCerts;
fi