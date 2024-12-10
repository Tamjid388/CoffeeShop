import { useContext } from "react";
import { Authcontext } from "../Providers/AuthProvider";

export const SignUp = () => {

    const {createUser}=useContext(Authcontext)
    const handleSubmit = (e) => {
      e.preventDefault(); 
  
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirmPassword = e.target.confirmPassword.value;
  
      console.log('Form Submitted', { name, email, password, confirmPassword });

  createUser(email,password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
      
    };
  
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>
  
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>
  
            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
            </div>
  
            {/* Confirm Password Field */}
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="input input-bordered w-full"
              />
            </div>
  
            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-full">
              Sign Up
            </button>
          </form>
        </div> 
     
      </div>
    );
  };
  