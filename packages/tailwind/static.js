import { AutoFormThemeTailwind } from './autoform-tailwind'

AutoFormThemeTailwind.load = function () {
  // Tailwind Template - General
  require('./templates/tailwind/tailwind.js')

  // Tailwind Template - Components
  require('./templates/tailwind/components/quickForm/quickForm.html')
  require('./templates/tailwind/components/afFormGroup/afFormGroup.html')
  require('./templates/tailwind/components/afObjectField/afObjectField.html')
  require('./templates/tailwind/components/afArrayField/afArrayField.html')

  // Tailwind Template - Input Types
  require('./templates/tailwind/inputTypes/text/text.html')
  require('./templates/tailwind/inputTypes/textarea/textarea.html')
  require('./templates/tailwind/inputTypes/select/select.html')
  require('./templates/tailwind/inputTypes/checkbox/checkbox.html')
  require('./templates/tailwind/inputTypes/radio/radio.html')
  require('./templates/tailwind/inputTypes/boolean-checkbox/boolean-checkbox.html')
  require('./templates/tailwind/inputTypes/boolean-select/boolean-select.html')
  require('./templates/tailwind/inputTypes/boolean-radio/boolean-radio.html')
}

export { AutoFormThemeTailwind }
