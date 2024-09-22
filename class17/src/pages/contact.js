import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email password")
    .required("Field Required"),
  password: Yup.string()
    .min(8, "Must be at least 8 characters long!")
    .required("Password is Required"),
});

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log({ values })}
      >
        <div>
          <Form>
            <div>
              <label>Email</label>
              <Field type="email" name="email" placeholder="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label>Password</label>
              <Field type="password" placeholder="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default Contact;
