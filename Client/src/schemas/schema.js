import * as Yup from 'yup'

export const LoginSchema = Yup.object({
  password: Yup.string().required('Password is required'),
  email: Yup.string().required('Email is Required'),
});

const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
export const RegisterSchema = Yup.object({
  name: Yup.string().required('Required'),
	phoneNumber: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  userRole: Yup.string().required('Required'),
	email: Yup.string().email('Invalid email').required('Required'),
	password: Yup.string()
		.required('Required')
		.min(6)
		.matches(passwordRule, { message: 'Please create a stronger password' }),
  confirmPassword: Yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    )
    })
});

export const HotelFormSchema = Yup.object({
    hotelName: Yup.string().required("Please enter hotel name"),
    location:Yup.string().required("Please enter the location of hotel"),
    rating:Yup.number().min(0).max(5).required("Enter the rating"),
    price:Yup.string().required("Enter the price of hotel per room per night")
  });

  