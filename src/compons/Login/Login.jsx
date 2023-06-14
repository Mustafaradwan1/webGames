import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


export default function Login({sentdata}) {
  let nav = useNavigate();
  async function handel(values){
    let {data} = await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',values)
    if(data.message === 'success'){
      localStorage.setItem('userToken',data.token);
      sentdata()
      nav('/Home')
    }
  }

 let validation  = yup.object({
  email:yup.string().email('email is invalid').required('email is required'),
  password:yup.string().required('password is required').matches(/^[a-z0-9]{5,10}$/,'password must start uppercase and minlength is 5 and maxlength is 10'),
 });
  let formik = useFormik({
    initialValues:{
      email:'',
      password:'',

    },
    validationSchema:validation,
    onSubmit:handel,
  });
  return <>
    <div className='row all bg-dark gx-0 w-100'>
      <div className="container py w-75 h-100 d-flex">
        <div className="col col-md-6 px-1">
          <img className='w-100 'height={'350px'} src="https://th.bing.com/th/id/OIP.0NfEkqlO5lVkyIz2qqgWmQHaEK?pid=ImgDet&rs=1" alt=""/>
        </div>
        <div className="col upcol col-md-6 ps-4">
        <form onSubmit={formik.handleSubmit} className='w-100 m-0 text-center' action=''>
          <h5 className='text-white mb-3'>Log in to GameOver</h5>
      <div className='col col-md-12'>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} type='email' className='form-control px-2 py-1 mb-2' name='email'/>
        {formik.errors.email  && formik.touched.email? <div className="alert alert-danger">{formik.errors.email}</div> : null}
      </div>
      <div className='col col-md-12'>
        <input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} type='password' className='form-control px-2 py-1 mb-2' name='password'/>
        {formik.errors.password  && formik.touched.password? <div className="alert alert-danger">{formik.errors.password}</div> : null}
      </div>
      <button type='submit' className='btn btn-danger w-100'>submit</button>
      <p className='mt-3'>Not a member yet? <Link to='/Register' className='ms-2'>Create Account</Link></p>
      </form>
        </div>
      </div>
    </div>
  </>
}
