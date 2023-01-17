import React from 'react'
import {Formik} from 'formik'
import CountryData from '../../countries.json';
import { RegisterSchema } from '../../schemas/schema'
import '../../App.css'
import { useNavigate, Link } from 'react-router-dom'

const Register = () =>{
    const navigate = useNavigate()

    const RegisterUser = async(values, resetForm)=>{
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        const response = await fetch('http://localhost:4000/register', requestOptions);
        const data = await response.json()

        if(data){
            alert(data.msg)
            navigate('/')
        }
    }

    return(
        <div className='main-div'>
            <h1>Register page</h1>
            <Formik
                initialValues={{ 
                    name: '',
                    email: '',
                    phoneNumber: '',
                    address: '',
                    userRole: '',
                    password: '',
                    confirmPassword:'',
                    country: ''
                 }}
                validationSchema={RegisterSchema}
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
                    RegisterUser(values)
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
                                <input name="name" placeholder="Your Name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
								{errors.name && touched.name ? (<div className="error">{errors.name}</div>) : null}

                                <input name="email" placeholder="Your Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                                {errors.email && touched.email ? (<div className="error">{errors.email}</div>) : null}

                                <input name="phoneNumber" placeholder="Your Phone Number" value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} />
                                {errors.phoneNumber && touched.phoneNumber ? (<div className="error">{errors.phoneNumber}</div>) : null}

                                <input name="address" placeholder="Your address" value={values.address} onChange={handleChange} onBlur={handleBlur} />
                                {errors.address && touched.address ? (<div className="error">{errors.address}</div>) : null}

                                <select name="userRole" value={values.userRole} onChange={handleChange} onBlur={handleBlur}>
                                    <option value="" disabled="disabled" label="Select a Role"></option>
                                    <option value="user" label="User">User</option>
                                    <option value="rider" label="Rider">Rider</option>
                                </select>
                                {errors.userRole && touched.userRole ? (<div className="error">{errors.userRole}</div>) : null}

                                <input name="password" type="password" placeholder="Type Your password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                                {errors.password && touched.password ? (<div className="error">{errors.password}</div>) : null}

                                <input name="confirmPassword" type="password" placeholder="Confirm password" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur}/>
                                {errors.confirmPassword && touched.password ? (<div className="error">{errors.confirmPassword}</div>) : null}

                                <select name="country" value={values.country} onChange={handleChange} onBlur={handleBlur}>
                                    <option value="" disabled="disabled" label="Select a Country"></option>
                                    {CountryData.map(country => {
                                        const {name} = country
                                        return(
                                            <option value={name} label={name} key={name}></option>
                                        )
                                    })}
                                </select>
                                
                                {errors.country && touched.country ? (<div className="error">{errors.country}</div>) : null}

                            <button type="submit" disabled={isSubmitting}>
                                Register
                            </button>
                    </form>
                )}
            </Formik>  
            <p style={{ marginTop: '110px'}}>Already have an account? Please <Link to="/" >Login</Link> to continue</p>
        </div>
    )
}

export default Register