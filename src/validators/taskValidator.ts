import Joi from 'joi';


export const createTaskSchema = Joi.object({
    title: Joi.string().required().min(3).max(50).trim(),
});
