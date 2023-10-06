import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
   
  const {createUser} = useContext(AuthContext)
  console.log(createUser)

    const handleRegister = e => {
      e.preventDefault()
      const form = new FormData(e.currentTarget)
      // const name = e.target.name.value  or
      const name = form.get('name')
      const photo = form.get('photo')
      const email = form.get('email')
      const password = form.get('password')
      console.log(name, photo, email, password);
    
      
       //createUser
       createUser(email, password)
       .then((result) => {
        console.log(result.user)
      })
       .catch(error => {
        console.log(error.message)
       })

    }




    return (
        <div>
        <Navbar></Navbar>
  
  
       <div className="w-full md:w-2/4 mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center mb-6">Please Register</h2>
       <form onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input 
            type="text" name="name" placeholder="Name" className="input input-bordered" required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input 
            type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input 
            type="email" name="email" placeholder="email" className="input input-bordered" required
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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="mt-5"> have an acount please <Link className="text-green-500 font-bold" to={'/login'}>Login</Link> </p>
       </div>
      </div>
    );
};

export default Register;