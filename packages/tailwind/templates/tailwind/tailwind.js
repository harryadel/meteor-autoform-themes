/* global AutoForm */
import { Template } from 'meteor/templating'

/*
 * Template helpers for "tailwind" templates
 */

Template.registerHelper('attsPlusTailwindClass', function attsPlusTailwindClass() {
  let atts = { ...this.atts }
  // Add Tailwind classes
  atts = AutoForm.Utility.addClass(atts, 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm')
  return atts
})

Template.registerHelper('attsPlusTailwindButtonClass', function attsPlusTailwindButtonClass() {
  let atts = { ...this.atts }
  // Add Tailwind button classes
  atts = AutoForm.Utility.addClass(atts, 'inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2')
  return atts
})
