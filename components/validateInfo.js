import valid from 'card-validator'

export default function validateInfo(values) {
  let errors = {}
  let creditCard = valid.number(values.number)

  creditCard.expiration = valid.expirationDate(values.expiration)
  creditCard.cardholderName = valid.cardholderName(values.name)
  creditCard.cvv = valid.cvv(values.cvc)

  console.log(creditCard)
  console.log(number)

  errors.show = true
  errors.variant = 'danger'
  errors.message = 'An unknown error occured. Please try again later.'
  errors.cname = false
  errors.cnumber = false
  errors.cexp = false
  errors.ccvv = false

  // Card CVC
  if (values.cvc === null || !values.cvc.trim()) {
    errors.message = 'Credit card CVC is not complete'
  } else if (creditCard.cvv.isValid) {
    errors.ccvc = true
  } else {
    errors.message = 'Credit card CVC is invalid'
  }

  // Card Expiration
  if (values.expiration === null || !values.expiration.trim()) {
    errors.message = 'Credit card expiration date is not complete'
  } else if (creditCard.expiration.isValid) {
    errors.cexp = true
  } else {
    errors.message = 'Credit card expiration date is invalid'
  }

  // Card Number
  if (values.number === null || !values.number.trim()) {
    errors.message = 'Credit card number is not complete'
  } else if (creditCard.isValid) {
    errors.cnumber = true
  } else {
    errors.message = 'Credit card number is not valid'
  }

  // Cardholder Name
  if (values.name === null || !values.name.trim()) {
    errors.message = 'Cardholder Name is not valid'
  } else if (creditCard.cardholderName.isValid) {
    errors.cname = true
  } else {
    errors.message = 'Credit card name is invalid'
  }

  if (errors.cname && errors.cnumber && errors.ccvc && errors.cexp) {
    errors.variant = 'success'
    errors.message = 'Credit card is valid'
  }

  return errors
}
