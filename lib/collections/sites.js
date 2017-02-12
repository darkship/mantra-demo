import {Mongo} from 'meteor/mongo';
import {Class} from 'meteor/jagi:astronomy';

const Sites = Class.create({
  name: 'Site',
  secured: false,
  collection: new Mongo.Collection('sites'),
  fields: {
    title: {
      type: String,
    },
    pageUrl: {
      type: String,
      optional: true,
      default: '',
      index: 1,
    },
    minPage: {
      type: Number,
      default: 1,
      validators: [
        {
          type: 'gt',
          param: 0,
        },
        {
          type: 'lte',
          resolveParam(arg) {
            return arg.doc.maxPage||100000;
          },
        },
      ],
    },
    maxPage: {
      type: Number,
      default: 1,
      validators: [
        {
          type: 'gte',
          resolveParam(arg) {
            return arg.doc.minPage||1;
          },
        },
      ],
    },
    videoUrlRegex: {
      type: String,
      optional: true,
      default: '',
      index: 1,
    },
    tagSelector: {
      type: String,
      optional: true,
      default: '',
    },
    actorSelector: {
      type: String,
      optional: true,
      default: '',

    },
    unsafe: {
      type: Boolean,
      optional: true,
      default: false,
    },
  },
});

export default Sites;
