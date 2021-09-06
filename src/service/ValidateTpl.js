import Vue from 'vue'
// vee validate
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate'
// eslint-disable-next-line camelcase
import { alpha_num, email } from 'vee-validate/dist/rules'

localize({
  en: {
    messages: {
      required: 'The field is required',
      alpha_num: 'The field must be in the correct format.',
      min: 'The field must have no less than {length} characters',
      // max: (_, { length }) => `this field must have no more than ${length} characters`
      minmax: 'The field must have {min}~{max} characters',
      is_email: 'Email Address must be a valid',
      is_tel: 'The field must be in the correct format.'
    }
  },
  jp: {
    messages: {
      required: '必須項目です',
      alpha_num: '正しい形式で入力してください',
      min: '{length}文字以上で入力してください',
      // max: (_, { length }) => `this field must have no more than ${length} characters`,
      minmax: '{min}~{max}文字で入力してください',
      is_email: 'メールアドレス形式で入力してください',
      is_tel: '正しい形式で入力してください'
    }
  }
})

extend('required', {
  validate (value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    }
  },
  computesRequired: true
  // message: '{_field_}は必須です。'
})

extend('alpha_num', {
  // eslint-disable-next-line camelcase
  ...alpha_num
  // message: '正しい形式で入力してください。'
})

extend('min', {
  validate (value, { length }) {
    return value.length >= length
  },
  params: ['length']
})

// extend('max', {
//   validate (value, { length }) {
//     return value.length <= length
//   },
//   params: ['length'],
//   message: '入力文字数の最大は{length}文字です'
// })

extend('minmax', {
  validate (value, { min, max }) {
    return value.length >= min && value.length <= max
  },
  params: ['min', 'max'],
  message: '{min}~{max}文字内で入力してください'
})

// extend('confirmed', {
//   ...confirmed,
//   message: 'パスワードが一致しません。'
// })

// extend('is_katakana', {
//   validate (value) {
//     return /^[ァ-ヾ\d]+$/u.test(value)
//   },
//   message: 'カタカナで入力してください'
// })

extend('is_email', {
  // eslint-disable-next-line camelcase
  ...email
  // },
})

extend('is_tel', {
  validate (value) {
    console.log('is_tel', value.startsWith(0))
    return value.startsWith(0)
  },
  message: '正しい形式で入力してください。'
})

extend('is_number', {
  validate (value) {
    console.log('number', /^([0-9]\d*|0)$/.test(value))
    return /^([0-9]\d*|0)$/.test(value)
  },
  message: '半角数字で入力してください'
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
