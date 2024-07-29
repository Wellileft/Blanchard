var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

const validation = new window.JustValidate('#form', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid #D11616',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: '#D11616',
  },
  focusInvalidField: true,
  lockForm: true,
});

validation
.addField('#name', [
  {
    rule: 'minLength',
    value: 3,
    errorMessage: 'От 3 до 30 символов'
  },
  {
    rule: 'maxLength',
    value: 30,
    errorMessage: 'Не более 30 символов'
  },
  {
    rule: 'required',
    errorMessage: 'Вы не ввели имя'
  }
])
.addField('#tel', [
  {
    validator: () => {
      const phone = selector.inputmask.unmaskedvalue();
      const result = Number(phone) && phone.length === 10;
      return result === 0 ? false : result;
    },
    errorMessage: 'Вы не ввели телефон',
  }
]);
