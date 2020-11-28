//import Joi from "joi";

// const loginSchema = Joi.object({
//     username: Joi.string()
//       .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
//     password: Joi.string()
//         .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
// }).with("username", "password");

const isValidate = (username, password) => {
  return true; //loginSchema.validate({ username, password });
};

export { isValidate };

