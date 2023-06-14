import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  let nav = useNavigate();
  let [massage,setmassage] = useState('')
  async function handel(values){
    let {data} = await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',values).catch((errr)=>{
      setmassage(`${errr.response.data.param} : ${errr.response.data.msg}`)
    })
    console.log(data.message)
    if(data.message === 'success'){
      nav('/Login')
    }
  }

 let validation  = yup.object({
  name:yup.string().required('name is required').min(3,'min length is 3').max(10,'max length is 10'),
  email:yup.string().email('email is invalid').required('email is required'),
  phone:yup.string().required('phone is required').matches(/^01[0125][0-9]{8}$/,'phone start with 01(0,1,2,5) and max length is 11'),
  password:yup.string().required('password is required').matches(/^[a-z0-9]{5,10}$/,'password must start uppercase and minlength is 5 and maxlength is 10'),
  rePassword:yup.string().required('rePassword is required').oneOf([yup.ref('password')] ,'password and rePasword dosent match'),
 });
  let formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      phone:'',
      password:'',
      rePassword:'',
    },
    validationSchema:validation,
    onSubmit:handel,
  });
  return <>
    <div className='row gx-0 w-100 vh-100 bg-dark'>
      <div className="container h-100 d-flex p-5 w-75">
        <div className="col col-md-6 px-5">
          <img className='w-100 'height={'350px'} src="https://th.bing.com/th/id/OIP.0NfEkqlO5lVkyIz2qqgWmQHaEK?pid=ImgDet&rs=1" alt=""/>
        </div>
        <div className="col col-md-6">
          <form onSubmit={formik.handleSubmit} className='w-100' action=''>
            <h5 className='text-center mb-3'>Create My Account!</h5>
            <div className='col col-md-12'>
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='name' value={formik.values.name} type='text' className='form-control px-2 py-1 mb-3' name='name'/>
              {formik.errors.name  && formik.touched.name? <div className="alert alert-danger">{formik.errors.name}</div> : null}
            </div>
            <div className='col col-md-12'>
   
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='email' value={formik.values.email} type='email' className='form-control px-2 py-1 mb-3' name='email'/>
              {formik.errors.email  && formik.touched.email? <div className="alert alert-danger">{formik.errors.email}</div> : null}
              {massage ? <div className="alert alert-danger">{massage}</div> :null}
              
            </div>
            <div className='col col-md-12'>
      
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='phone' value={formik.values.phone} type='tel' className='form-control px-2 py-1 mb-3' name='phone'/>
              {formik.errors.phone  && formik.touched.phone? <div className="alert alert-danger">{formik.errors.phone}</div> : null}
            </div>
            <div className='col col-md-12'>
  
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='password' value={formik.values.password} type='password' className='form-control px-2 py-1 mb-3' name='password'/>
              {formik.errors.password  && formik.touched.password? <div className="alert alert-danger">{formik.errors.password}</div> : null}
            </div>
            <div className='col col-md-12'>
           
              <input onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='rePassword' value={formik.values.rePassword} type='Password' className='form-control px-2 py-1 mb-3' name='rePassword'/>
              {formik.errors.rePassword  && formik.touched.rePassword? <div className="alert alert-danger">{formik.errors.rePassword}</div> : null}
            </div>
            <button type='submit' className='btn btn-danger w-100'>submit</button>
          </form>
        </div>
      </div>
    </div>
  </>
}
