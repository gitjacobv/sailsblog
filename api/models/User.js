

module.exports = {

  attributes: {

    username : {
      type: 'string',
      required: true,
      unique: true
    },
    password : {
      type: 'string',
      required: true
    },
    firstname : {
      type: 'string',
      required: true
    },
    middlename : {
      type: 'string',
      required: true
    },
    lastname : {
      type: 'string',
      required: true
    }
  }
};
