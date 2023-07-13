# POC-FILEPOND

I discovered `Filepond` recently, a simple library for uploading files to a server. With many plugins available, the functionnalities of the libraries can be enhanced.

## Pocs

- **Poc3**: Default component - only upload
- **Poc4**: Restrict upload depending of file extension (server side)
- **Poc5**: Restrict upload depending of file extension (client side)
- **Poc6**: Restrict size of image (client side) [Work only with image]
- **Poc7**: Restrict size of file (server side)

## Running

For running the project, use the command in the _package.json_:

```bash
$ nx run-many --parallel --target=serve --projects=app,server
```

## System

Ubuntu Version: Ubuntu 22.04.2
Node Version: v18.12.0

```bash
# Get the version of node
$ node -v

# Get the latest version of ubuntu
$ lsb_release -a
```
