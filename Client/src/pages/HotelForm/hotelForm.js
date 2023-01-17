// import React from "react"
// import './hotelForm.css'
// import { Formik } from 'formik';
// import { HotelFormSchema } from "../../schemas/schema"

// const HotelForm = () => {

//     const loginUser = async(values, resetForm)=>{
//         const requestOptions = {
//             method: "POST",
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(values)
//         };

//         const response = await fetch('http://localhost:5000/login', requestOptions);
//         const data = await response.json()

//         if(data.msg === 'login success'){
//           alert('login success')
//         }
//     }

//     return(
//         <div className="main-div-hotel">
//             <h1>REGISTER HOTEL</h1>
//             <form onSubmit={formik.handleSubmit} className="hotel-form">
//                 <input
//                     id="hotelName"
//                     name="hotelName"
//                     type="text"
//                     placeholder="Enter the name of hotel"
//                     onChange={formik.handleChange}
//                     value={formik.values.hotelName}
//                 />
//                 <input
//                     id="location"
//                     name="location"
//                     type="text"
//                     placeholder="Enter location of hotel"
//                     onChange={formik.handleChange}
//                     value={formik.values.location}
//                 />
//                 <input
//                     id="rating"
//                     name="rating"
//                     type="text"
//                     placeholder="Rate the hotel 1-5"
//                     onChange={formik.handleChange}
//                     value={formik.values.rating}
//                 />
//                 <input
//                     id="price"
//                     name="price"
//                     type="text"
//                     placeholder="Enter Price per room per night"
//                     onChange={formik.handleChange}
//                     value={formik.values.price}
//                 />
//                 <button type="submit">Submit</button>
//             </form>
            
//         </div>
//     )
// }
// export default HotelForm