/*
* Real time private chatting app using Angular 2, Nodejs, mongodb and Socket.io
* @author Shashank Tiwari
*/
 
"use strict";
/*requiring mongodb node modules */
const mongodb = require('mongodb');
const assert = require('assert');

class Db{

	constructor(){
		this.mongoClient = mongodb.MongoClient;
		this.ObjectID = mongodb.ObjectID;
		this.mongoURL = 'mongodb://localhost:27017/local';
	}

	onConnect(callback){
		this.mongoClient.connect(this.mongoURL, (err, db) => {
			assert.equal(null, err);
			callback(db,this.ObjectID);
		});
	}
}
module.exports = new Db();