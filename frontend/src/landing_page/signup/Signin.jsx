// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { ToastContainer, toast } from "react-toastify";
// function Login() {
//   const navigate = useNavigate();
//   const [inputValue, setInputValue] = useState({
//     email: "",
//     password: "",
//   });
//   const { email, password } = inputValue;
//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({
//       ...inputValue,
//       [name]: value,
//     });
//   };

//   const handleError = (err) =>
//     toast.error(err, {
//       position: "bottom-left",
//     });
//   const handleSuccess = (msg) =>
//     toast.success(msg, {
//       position: "bottom-left",
//     });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         "http://localhost:3002/login",
//         {
//           ...inputValue,
//         },
//         { withCredentials: true }
//       );
//       // await axios
//       //   .get("http://localhost:3002/test", { withCredentials: true })
//       //   .then((response) => console.log("Backend test:", response.data))
//       //   .catch((error) => console.error("Backend test failed:", error));

//       console.log(data);
//       const { success, message, token } = data;
//       console.log(token);
//       if (success) {
//         handleSuccess(message);
//         Cookies.set("Token", token);
//         setTimeout(() => {
//           navigate("/");
//         }, 250);
//       } else {
//         handleError(message);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     setInputValue({
//       ...inputValue,
//       email: "",
//       password: "",
//     });
//   };

//   return (
//     <div className="container text-center d-flex justify-content-center p-5  ">
//       <div
//         className="login-box border border-black"
//         style={{
//           width: "40%",
//           borderRadius: "8px",
//           boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
//         }}
//       >
//         <h2 className="my-5">Login Account</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="row d-flex justify-content-center mb-5">
//             <label
//               htmlFor="email"
//               className="pt-1 fs-5 fw-normal"
//               style={{ width: "80px" }}
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               placeholder="Enter your email"
//               onChange={handleOnChange}
//               style={{
//                 width: "18rem",
//                 marginLeft: "2.5rem",
//                 height: "2.5rem",
//                 border: "1px solid black",
//                 borderRadius: "8px",
//               }}
//               required
//             />
//           </div>

//           <div className="row d-flex justify-content-center mb-5">
//             <label
//               htmlFor="password"
//               className="pt-1 fs-5 fw-normal"
//               style={{ width: "80px" }}
//             >
//               Password
//             </label>

//             <input
//               type="password"
//               name="password"
//               value={password}
//               placeholder="Enter your password"
//               onChange={handleOnChange}
//               style={{
//                 width: "18rem",
//                 marginLeft: "2.5rem",
//                 height: "2.5rem",
//                 border: "1px solid black",
//                 borderRadius: "8px",
//               }}
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             className="btn btn-primary mb-3"
//             style={{ width: "10rem", borderRadius: "8px" }}
//           >
//             Login
//           </button>
//           <p className="mb-5">
//             Don't have an account?{" "}
//             <Link to={"/signup"} style={{ textDecoration: "none" }}>
//               Sign up
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;
