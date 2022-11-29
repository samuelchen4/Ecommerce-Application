import jwt from 'jsonwebtoken';

//process.env allows you to get stuff from the .env file
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export default generateToken;
