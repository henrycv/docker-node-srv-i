# docker-node-srv-i
Node server on Docker container for testing purposes

## Installation

Clone the repo from [Github](https://github.com/henrycv/docker-node-srv-i)

```bash
git clone https://github.com/henrycv/docker-node-srv-i.git
```

## Usage

Remove old versions of containers and the image
```bash
 docker stop node-srv-14; docker rm node-srv-14; docker rmi henrycv/node-srv-14   
```

Build the Docker image
```bash
 docker build -t henrycv/node-srv-14 -f docker/node/Dockerfile .  
```

Run the Docker container
```bash
 docker build -t henrycv/node-srv-14 -f docker/node/Dockerfile .   
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)