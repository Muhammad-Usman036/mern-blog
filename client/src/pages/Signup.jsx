import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react"; // Import from flowbite-react

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage,setErrorMessage] = useState(null);
const [loading,setLoading] = useState(false);
// 
const navigate = useNavigate();
  const handleChange = (e)=>{
    setFormData({...formData ,[e.target.id]: e.target.value.trim()});
    
  }
  // 
  const handleSubmit = async (e)=>{
   e.preventDefault ();
   if (!formData.username || !formData.password || !formData.email ) {
     return setErrorMessage("Please enter all required fields");
    }
    
   try {setLoading(true);
    setErrorMessage(null);
    const res = await fetch('/api/auth/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',

      },
      body:JSON.stringify(formData),
    })
    const data = await res.json();
   console.log(data);
    if (data.succes === false) {
      console.log('wrong');
      return setErrorMessage(data.message);
    }
    setLoading(false);
    if (res.ok) {
      navigate('/signin');
      
    }
   } catch (error) {
    setErrorMessage(data.message);
    setLoading(false);
   }
  }
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Usman's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5 ">
            This is a demo project of mern stack .
          </p>
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit}  className="flex flex-col gap-4 ">
            <div className="">
              <Label value="Your Username" />
              <TextInput onChange={handleChange} type="text" placeholder="username" id="username" />
            </div>{" "}
            <div className="">
              <Label value="Your email" />
              <TextInput onChange={handleChange} type="email" placeholder="name@company.com" id="email" />
            </div>
            <div className="">
              <Label value="Your Password" />
              <TextInput onChange={handleChange} type="password" placeholder="password" id="password" />
            </div>{" "}
            <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
              {loading ? (<>
               <Spinner size="sm" />
               <span className="pl-3">Loading...</span>
             </> ) : 'Sign Up'}
            </Button>
          </form>
          <div className=" flex gap-2 text-sm mt-5">
            <span>Have an account ?</span>
            <Link className="text-blue-500" to="/signin">Sign In</Link>
          </div>
          {errorMessage && (
            // <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
            <Alert className="mt-5 "color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
