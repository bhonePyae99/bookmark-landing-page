import Joi from "joi-browser";
import { useState } from "react";

const ContactInput = () => {
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const schema = { email: Joi.string().email().required() };
    const inputObj = { email: e.target.email.value };
    const { error } = Joi.validate(inputObj, schema);
    if (error) {
      setErrors({ email: "Whoops, make sure it's an email" });
      return;
    }
    setErrors({});
  };
  return (
    <div className="mt-5 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-2">
        <div className="col-span-2 row-span-2">
          <input
            type="text"
            name="email"
            className={
              Object.keys(errors).length !== 0
                ? "py-2 rounded px-4 focus:outline-2 w-full outline-none border-2 border-softRed focus:outline-blue-500"
                : "py-2 rounded px-4 focus:outline-2 outline-none focus:outline-blue-500 w-full"
            }
            placeholder="Enter your email address"
          />
          {Object.keys(errors).length !== 0 && (
            <p className="bg-softRed border border-softRed p-2 text-white italic text-sm">
              {errors.email}
            </p>
          )}
        </div>

        <button className="px-4 py-2 border border-softRed hover:bg-white hover:text-softRed md:col-span-1 col-span-2 bg-softRed text-white rounded">
          Contact Us
        </button>
      </form>
    </div>
  );
};

export default ContactInput;
