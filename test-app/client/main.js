import { Template } from 'meteor/templating';
import 'meteor/aldeed:collection2/static';
import SimpleSchema from 'meteor/aldeed:simple-schema';
import './main.html';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap';


SimpleSchema.extendOptions(['autoform']);


// Create a test collection
const TestCollection = new Mongo.Collection('test_collection');

// Define the schema with various field types
const TestSchema = new SimpleSchema({
  stringField: {
    type: String,
    label: 'String Field',
    max: 200
  },
  textField: {
    type: String,
    label: 'Text Field',
    max: 1000,
    autoform: {
      type: 'textarea',
      rows: 3
    }
  },
  numberField: {
    type: Number,
    label: 'Number Field',
    min: 0,
    max: 100
  },
  dateField: {
    type: Date,
    label: 'Date Field'
  },
  booleanField: {
    type: Boolean,
    label: 'Boolean Field'
  },
  selectField: {
    type: String,
    label: 'Select Field',
    allowedValues: ['option1', 'option2', 'option3'],
    autoform: {
      options: [
        {label: 'Option 1', value: 'option1'},
        {label: 'Option 2', value: 'option2'},
        {label: 'Option 3', value: 'option3'}
      ]
    }
  },
  radioField: {
    type: String,
    label: 'Radio Field',
    allowedValues: ['radio1', 'radio2', 'radio3'],
    autoform: {
      type: 'select-radio-inline',
      options: [
        {label: 'Radio 1', value: 'radio1'},
        {label: 'Radio 2', value: 'radio2'},
        {label: 'Radio 3', value: 'radio3'}
      ]
    }
  },
  checkboxField: {
    type: Array,
    label: 'Checkbox Field',
    autoform: {
      type: 'select-checkbox-inline',
      options: [
        {label: 'Check 1', value: 'check1'},
        {label: 'Check 2', value: 'check2'},
        {label: 'Check 3', value: 'check3'}
      ]
    }
  },
  'checkboxField.$': {
    type: String
  }
});

TestCollection.attachSchema(TestSchema);

Template.themeSection.helpers({
  collection() {
    return TestCollection;
  },
  formId() {
    return `insertForm_${this.template}`;
  }
});
