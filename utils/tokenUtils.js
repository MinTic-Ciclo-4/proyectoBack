const jwt = require('jsonwebtoken')

const validateToken = (token) => {
  if(token){
    const verification = jwt.verify(token, 'secret', (err, data) => {
      if(data){
        return {
          data: data,
        }
      }
      if(err){
        return {
          error: err,
        }
      }
    });
    return verification;
  }
}

const generateToken = (payload) => {
  return jwt.sign(payload, 'secret', {
    expiresIn: '24h',
  });
}

exports.generateToken = generateToken, exports.validateToken = validateToken;