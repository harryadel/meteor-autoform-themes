Package.describe({
  name: 'communitypackages:autoform-tailwind',
  version: '0.0.1',
  summary: 'Tailwind CSS theme for AutoForm',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('2.13.3');
  api.use('ecmascript');
  api.use('templating@1.4.2');
  api.use('aldeed:autoform@7.0.0');

  api.addFiles([
    'autoform-tailwind.js',
    'static.js',
    'dynamic.js',
    'templates/tailwind/components/afFormGroup/afFormGroup.html',
    'templates/tailwind/components/afObjectField/afObjectField.html',
    'templates/tailwind/components/afArrayField/afArrayField.html',
    'templates/tailwind/components/quickForm/quickForm.html',
    // Input types
    'templates/tailwind/inputTypes/text/text.html',
    'templates/tailwind/inputTypes/textarea/textarea.html',
    'templates/tailwind/inputTypes/select/select.html',
    'templates/tailwind/inputTypes/checkbox/checkbox.html',
    'templates/tailwind/inputTypes/radio/radio.html',
    'templates/tailwind/inputTypes/boolean-checkbox/boolean-checkbox.html',
    'templates/tailwind/inputTypes/boolean-select/boolean-select.html',
    'templates/tailwind/inputTypes/boolean-radio/boolean-radio.html',
  ], 'client');
});
