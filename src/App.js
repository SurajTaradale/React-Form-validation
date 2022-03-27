import { useState } from 'react';
import './App.css';
import Forminput from './components/forminput';

function App() {
  const [values, setvalue] = useState({
    username:'',
    email:'',
    password :'',
    confimpassword:''
  });
  const fileds = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"UserName",
      errorMessage:"Please enter UserName should be more then 3 characters",
      label:"username",
      pattern:"^[a-z0-9]{3,10}$",
      required : true,
    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"Please enter a valid email",
      label:"Email",
      required : true,
    },
    {
      id:3,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Password should be more then 8 characters it include at least one special character,one letter character and one number character",
      label:"Password",
      pattern:"^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!!@#$%^&*]{8,20}$",
      required : true,
    },
    {
      id:4,
      name:"confimpassword",
      type:"password",
      placeholder:"Confim Password",
      errorMessage:"Password miss match",
      label:"Confim Password",
      pattern:values.password,
      required : true,
    },
  ];
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  const onChange = (e) =>{
    setvalue({...values,[e.target.name]:e.target.value})
  }
  console.log(values)
  return (
    <div className="App">
     <form onSubmit={handleSubmit}>
     {fileds.map((field)=>(
     <Forminput key={field.id} {...field} value={values[field.name]} onChange={onChange} />
      
     ))}
     <button>submit</button>
     </form>
    </div>
  );
}

export default App;
