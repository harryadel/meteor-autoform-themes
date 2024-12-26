import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import SimpleSchema from 'meteor/aldeed:simple-schema';
import 'meteor/aldeed:collection2/static';
import 'meteor/aldeed:autoform/static';
import { AutoFormThemeBootstrap5 } from 'meteor/communitypackages:autoform-bootstrap5/static'
import { AutoFormThemeBootstrap4 } from 'meteor/communitypackages:autoform-bootstrap4/static'
import { AutoFormThemeBootstrap3 } from 'meteor/communitypackages:autoform-bootstrap3/static'
import { AutoFormPlainTheme } from 'meteor/communitypackages:autoform-plain/static'
import { AutoFormThemeTailwind } from 'meteor/communitypackages:autoform-tailwind/static'

import './main.html';

SimpleSchema.extendOptions(['autoform']);

// Import packages
AutoFormThemeBootstrap5.load()
AutoFormThemeBootstrap4.load()
AutoFormThemeBootstrap3.load()
AutoFormPlainTheme.load()
AutoFormThemeTailwind.load()

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Create a test collection
const TestCollection = new Mongo.Collection('test_collection');

// Helper function to get current theme
function getCurrentTheme() {
  return currentTheme.get();
}

// Create a schema for the test collection
const TestSchema = new SimpleSchema({
  // Text inputs
  firstName: {
    type: String,
    label: 'First Name',
    max: 200
  },
  lastName: {
    type: String,
    label: 'Last Name',
    max: 200
  },
  email: {
    type: String,
    label: 'Email',
    regEx: SimpleSchema.RegEx.Email
  },
  website: {
    type: String,
    label: 'Website',
    regEx: SimpleSchema.RegEx.Url,
    optional: true
  },
  
  // Number inputs
  age: {
    type: Number,
    label: 'Age',
    min: 0,
    max: 150
  },
  rating: {
    type: Number,
    label: 'Rating',
    min: 0,
    max: 5,
    optional: true
  },

  // Select inputs
  country: {
    type: String,
    label: 'Country',
    allowedValues: ['USA', 'Canada', 'Mexico', 'Other'],
    autoform: {
      type: 'select',
      options: 'allowed'
    }
  },
  interests: {
    type: Array,
    label: 'Interests',
    optional: true,
    autoform: {
      type: 'select-multiple',
      options: function() {
        return [
          {label: "Reading", value: "reading"},
          {label: "Gaming", value: "gaming"},
          {label: "Sports", value: "sports"},
          {label: "Coding", value: "coding"}
        ];
      }
    }
  },
  'interests.$': {
    type: String
  },

  // Radio inputs
  gender: {
    type: String,
    label: 'Gender',
    allowedValues: ['Male', 'Female', 'Other', 'Prefer not to say'],
    autoform: function() {
      const theme = getCurrentTheme();
      return {
        type: theme.startsWith('bootstrap') ? 'radio-inline' : 'radio'
      };
    }
  },

  // Checkbox inputs
  subscribe: {
    type: Boolean,
    label: 'Subscribe to newsletter',
    defaultValue: false,
    autoform: {
      type: 'boolean-checkbox'
    }
  },
  terms: {
    type: Boolean,
    label: 'I agree to the terms and conditions',
    defaultValue: false,
    autoform: {
      type: 'boolean-radios',
      options: [
        {label: 'Yes', value: true},
        {label: 'No', value: false}
      ]
    }
  },

  // Textarea inputs
  bio: {
    type: String,
    label: 'Bio',
    optional: true,
    max: 1000,
    autoform: {
      type: 'textarea',
      rows: 5
    }
  },
  comments: {
    type: String,
    label: 'Additional Comments',
    optional: true,
    autoform: {
      type: 'textarea',
      rows: 3
    }
  },

  // Date inputs
  birthDate: {
    type: Date,
    label: 'Birth Date',
    optional: true,
    autoform: {
      type: 'date'
    }
  },
  registrationDate: {
    type: Date,
    label: 'Registration Date and Time',
    optional: true,
    autoform: {
      type: 'datetime-local'
    }
  },

  // Object fields
  address: {
    type: Object,
    label: 'Address'
  },
  'address.street': {
    type: String,
    label: 'Street'
  },
  'address.city': {
    type: String,
    label: 'City'
  },
  'address.state': {
    type: String,
    label: 'State'
  },
  'address.zip': {
    type: String,
    label: 'ZIP Code'
  },

  // Array of objects
  education: {
    type: Array,
    optional: true,
    label: 'Education History'
  },
  'education.$': {
    type: Object
  },
  'education.$.school': {
    type: String,
    label: 'School Name'
  },
  'education.$.degree': {
    type: String,
    label: 'Degree'
  },
  'education.$.graduationYear': {
    type: Number,
    label: 'Graduation Year',
    min: 1900,
    max: new Date().getFullYear() + 10
  }
});

// Attach schema to collection
TestCollection.attachSchema(TestSchema);

// Initialize theme
const currentTheme = new ReactiveVar('bootstrap3');

Template.mainLayout.helpers({
  currentTheme() {
    return currentTheme.get();
  },
  collection() {
    return TestCollection;
  },
  isActiveTab(theme) {
    return currentTheme.get() === theme ? 'border-blue-500 text-blue-600' : 'border-transparent';
  }
});

Template.mainLayout.events({
  'click .theme-button'(event) {
    event.preventDefault();
    const theme = event.currentTarget.getAttribute('data-theme');
    currentTheme.set(theme);
    console.log(theme);
  }
});
