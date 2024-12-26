import { AutoFormThemeTailwind } from './autoform-tailwind'

AutoFormThemeTailwind.load = function () {
  return Promise.all([
    // Tailwind Template - General
    import('./templates/tailwind/tailwind.js'),

    // Tailwind Template - Components
    import('./templates/tailwind/components/quickForm/quickForm.html'),
    import('./templates/tailwind/components/afFormGroup/afFormGroup.html'),
    import('./templates/tailwind/components/afObjectField/afObjectField.html'),
    import('./templates/tailwind/components/afArrayField/afArrayField.html'),

    // Tailwind Template - Input Types
    import('./templates/tailwind/inputTypes/text/text.html'),
    import('./templates/tailwind/inputTypes/textarea/textarea.html'),
    import('./templates/tailwind/inputTypes/select/select.html'),
    import('./templates/tailwind/inputTypes/checkbox/checkbox.html'),
    import('./templates/tailwind/inputTypes/radio/radio.html'),
    import('./templates/tailwind/inputTypes/boolean-checkbox/boolean-checkbox.html'),
    import('./templates/tailwind/inputTypes/boolean-select/boolean-select.html'),
    import('./templates/tailwind/inputTypes/boolean-radio/boolean-radio.html')
  ])
}

export { AutoFormThemeTailwind }
