// Here goes the schema for the form
import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required('Username is required ya chump!')
    .min(3, 'Username has to be more than three characters ya chump!'),
  email: yup
    .string()
    .email('Must be a valid email address ya chump!')
    .required('Email is required ya chump'),
    password: yup
    .string()
    .required('Password is required ya chump'),
    agree: yup
    .boolean([true], "You must accept the terms and conditions")
})

export default formSchema;