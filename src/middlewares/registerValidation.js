import Joi from 'joi';

const validation = (req, res, next) =>{
    const lectureSchema = Joi.object({
        email: Joi.string().email().required(),
          password: Joi.string().regex(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/).required(),
          names: Joi.string().required(),
          gender: Joi.string().required(),
          faculty: Joi.string().required(),
          department: Joi.string().required(),
          school: Joi.string().required(),
          college: Joi.string().required(),
          contact: Joi.number().required()
    });

    const schema = lectureSchema.validate(req.body);
    if(schema.error) {
      const error = [];
      for (let i = 0; i < schema.error.details.length; i += 1) {
          error.push(schema.error.details[i].message.split('"').join(' '));

      }
      return res.status(400).json({
          status: 400,
          error: error[0]
      })
  }
  next();
  };

export default validation;