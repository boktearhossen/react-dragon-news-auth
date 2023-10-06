import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Login = () => {

  const {signInUser} = useContext(AuthContext)
  const navigate= useNavigate()
  const location = useLocation()

  
  const handleLogin =e => {
     e.preventDefault()
     const form = new FormData(e.currentTarget)
     const email = form.get('email')
     const password = form.get('password')
    //  console.log(form.get('password'));
     
    // signInUserEmailPassword
    signInUser(email, password)
    .then((result) => {
      console.log(result.user)

      //navigate after user login
      navigate(location?.state ? location.state : "/")



    })
     .catch(error => {
      console.log(error.message)
     })
  }



  return (
    <div>
      <Navbar></Navbar>


     <div className="w-full md:w-2/4 mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center mb-6">Please Login</h2>
     <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="mt-5">Do not have an acount please <Link className="text-green-500 font-bold" to={'/register'}>REGISTER</Link> </p>
     </div>
    </div>
  );
};

export default Login;
