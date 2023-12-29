const validateName = (name) => {
    return (/^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i.test(name))
  }

  module.exports = { validateName}