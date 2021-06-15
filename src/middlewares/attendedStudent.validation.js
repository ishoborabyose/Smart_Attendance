import Joi from 'joi';

const validation = (req, res, next) =>{
    const studentSchema = Joi.object({
        regNumber:Joi.number().required(),
        studentNames:Joi.string().required(),
        moduleName:Joi.string().required(),
        location:Joi.string().required(),
        lecturer:Joi.string().required(),
    });

    const schema = studentSchema.validate(req.body);
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
