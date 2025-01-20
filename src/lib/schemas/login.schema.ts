import * as Yup from 'yup'

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Email is required'),
    "password": Yup.string().required('Password is required.') ,
});

export default LoginSchema;