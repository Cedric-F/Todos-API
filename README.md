# Todo API

A simple Express REST API to manage a todo list. It's connected to a Mongo database.

[Example](https://github.com/Cedric-F/Todos-VueJS)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installation

**Cloning the repository**
```
git clone https://github.com/Cedric-F/Todos-API.git
```

Browse to the `Todos-API` directory.

Install the dependencies using:

```
npm install
```

## Using the App

### MongoDB Atlas and .env file

You need a connection string to an active cluster that has the collection that will contain the list items.

Rename the ".envToFill" file to ".env" and provide the ATLAS variable with the cluster's connection string.

### Start

Use `npm start` to start the server and connect to the MongoDB collection.

The following message should appear:

```
[Express] Listening to port <Port>!
[MongoDB] Connection established to <Collection>!
```

### Routes

Get all the list items.

```
GET / HTTP/1.1
Host: localhost
Content-Type: application/json
```

Get the list items by id.

```
GET /:id HTTP/1.1
Host: localhost
Content-Type: application/json
```

Add an item to the list.

```
POST /add HTTP/1.1
Host: localhost
Content-Type: application/json
title=string
```

Update an item by id.

```
POST /update/:id HTTP/1.1
Host: localhost
Content-Type: application/json
id=string
```

Delete an item by id.

```
DELETE /:id HTTP/1.1
Host: localhost
Content-Type: application/json
id=string
```

Can be tested with [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/)

## Author

* **Cédric F** - [Profile](https://github.com/Cedric-F)

## License

This project is not licensed.

## Dependencies

- [ExpressJS](https://www.npmjs.com/package/express)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
- [morgan](https://www.npmjs.com/package/morgan)
