/*populates database with user data*/

var Ian = {
  username: 'KINGKONG',
  firstName: 'Ian',
  lastName: 'BUlmer',
  password: '123456789',
  address: '225-fakeStreet',
  phone: '415-822-8222',
  email: 'jj@gmail.com'
};

var Suya = {
	username: 'PenguinPower',
  firstName: 'Suya',
  lastName: 'Xu',
  password: '123456789',
  address: '376-real-Street',
  phone: '904-344-2215',
  email: 'XUSuya@gmail.com'
};

var Richard = {
  username: 'Sparkles',
  firstName: 'Richard',
  lastName: 'Castro',
  password: '123456789',
  address: '376-real-Street',
  phone: '904-344-2215',
  email: 'XUSuya@gmail.com'
};

var Hahnbi = {
  username: 'HappyHippo',
  firstName: 'Hahnbi',
  lastName: 'Sun',
  password: '123456789',
  address: '222-moonwalkway',
  phone: '444-444-4444',
  email: 'Hahnnimal@gmail.com'
};

var userData = [Ian, Suya, Richard, Hahnbi];

//export our userData
module.exports = userData;
