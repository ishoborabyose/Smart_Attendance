import Joi from 'joi';

const validation = (req, res, next) =>{
    const accessSchema = Joi.object({
        classRoom: Joi.string().required(),
        moduleName: Joi.string().required(),
        device: Joi.number().required()
    });

    const schema = accessSchema.validate(req.body);
    if(schema.error) {
        const error = [];
        for(let i = 0; i < schema.error.details.length; i += 1) {
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