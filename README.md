# Reverse proxy example using Express/node.js

A simple example for a local development reverse proxy.


## Requirements

- [mkcert](https://github.com/FiloSottile/mkcert)
- node
- yarn

## Setup

1. modify `/etc/hosts` and include your desired domain to `127.0.0.1`. [More details](https://provisiondata.com/kb/using-etchosts-file-custom-domains-development/).

2. modify `create-certs.sh` and replace `{{CHANGE_TO_REQUIRED_DOMAIN}}` to whatever domain you setup in step 1.

3. modify `index.js` with your required routing layout. See [this repo](https://github.com/http-party/node-http-proxy) for all options.
4. run `yarn`
5. run `yarn start`
6. your application with be available at `https://your_domain`