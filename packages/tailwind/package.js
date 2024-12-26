Package.describe({
  name: 'communitypackages:autoform-tailwind',
  version: '0.0.1',
  summary: 'Tailwind CSS theme for AutoForm',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom(['1.3', '2.7.3', '3.0.1']);
  api.use('ecmascript');
  api.use('templating');
  api.use('aldeed:autoform@7.0.0 || 8.0.0-rc.3');

  api.addFiles([
    'autoform-tailwind.js',
    'templates/tailwind/tailwind.js',
    'templates/tailwind/components/quickForm/quickForm.html',
    'templates/tailwind/components/quickForm/quickForm.js',
    'templates/tailwind/components/afFormGroup/afFormGroup.html',
    'templates/tailwind/components/afObjectField/afObjectField.html',
    'templates/tailwind/components/afArrayField/afArrayField.html',
    'templates/tailwind/inputTypes/text/text.html',
    'templates/tailwind/inputTypes/select/select.html',
    'templates/tailwind/inputTypes/textarea/textarea.html',
    'templates/tailwind/inputTypes/checkbox/checkbox.html',
    'templates/tailwind/inputTypes/radio/radio.html',
    'templates/tailwind/inputTypes/boolean-checkbox/boolean-checkbox.html',
    'templates/tailwind/inputTypes/boolean-select/boolean-select.html',
    'templates/tailwind/inputTypes/boolean-radio/boolean-radio.html',
    'static.js',
    'dynamic.js'
  ], 'client');
});
