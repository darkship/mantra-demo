import {Mongo} from 'meteor/mongo';

const CrawlerQueue = new Mongo.Collection(null);

export default CrawlerQueue;
