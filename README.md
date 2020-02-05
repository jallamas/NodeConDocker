# NodeConDocker

## 1. Primero creamos los ficheros Dockerfile y .dockerignore

## 2. Ejecutamos el siguiente comando en el terminal para crear la imagen:

```docker
docker build -t jallamas/tienda .
```

## 3. Creamos y ejecutamos el contenedor con el comando:

###     docker run --name nodejs-tienda -p 80:8080 -d jallamas/tienda
