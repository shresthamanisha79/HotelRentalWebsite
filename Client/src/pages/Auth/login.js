import React from 'react'
import {Formik} from 'formik'
import { LoginSchema } from '../../schemas/schema'
import '../../App.css'
import { Link } from 'react-router-dom'

const Login = () =>{

    const loginUser = async(values, resetForm)=>{
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        const response = await fetch('http://localhost:4000/login', requestOptions);
        const data = await response.json()

        if(data.msg === 'login success'){
          alert('login success')
        }
    }

    return(
        <div className='main-div'>
            <h1>Login page</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginSchema}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                    errors.email = 'Email is required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { resetForm })=>{
                    loginUser(values)
                    resetForm()
                }}
                >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} className="auth-form">
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Enter your email"
                    />
                    {errors.email && touched.email ? (<div className="error">{errors.email}</div>) : null}
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Enter Password"
                    />
                    {errors.password && touched.password ? <div className="error">{errors.password}</div> : null}
                    <button type="submit" disabled={isSubmitting}>
                        Login
                    </button>
                    </form>
                )}
            </Formik> 
            <p style={{ marginTop: '10px' }}>Dont have an account? <Link to="/register">Register</Link> here</p>
        </div>
    )
}

export default Login