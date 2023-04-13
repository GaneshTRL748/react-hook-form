import Input from "./input"
import '../styles/form.css'
import { useForm,Controller } from "react-hook-form"
import ReactDatePicker from "react-datepicker";
import { yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import img from '../images/boy.png'
import list from '../data/data'
import { useEffect, useState} from "react"
import Hobbies from "./hobies"
import Relation from "./relation"
import Gender from "./gender";
import Books from "./booksbox";
import { id } from "date-fns/locale";
import books from "../data/books"
let Form=()=>
{
  const [datac,setDatac]=useState([{Name:"",Type:""}])
  const [selectedValue, setSelectedValue] = useState([]);
  let [getbook,setbook]=useState([])
  const[bookdata]=useState(books)
   const [datas]=useState(list)
    const schema=yup.object({
      name:yup.string().required().min(6).matches(/^[a-zA-Z]/,"please enter the valid username"),
      email:yup.string().email().required().test("emailidrequirements","mail already exist",
      (value)=> {
        return !checkemail(value)
      }
      ),
      phonenumber:yup.string().required().matches(/^\d{10}$/,"please enter the valid phone number")
      .min(10,"please enter the valid phone number").max(10,"please enter the valid phone number"),
         hobbies:yup.array().min(1),
         gender:yup.string().required(),
         books:yup.array().min(1),
      
      // password:yup.string().required().min(6,"password should contain minimum six character")
      // .max(10,"Upto ten characters is allowed")
      // .test("passwordRequirements", "password should contain one uppercase and one special character", 
      // (value) =>
      // [/[a-z]/, /[A-Z]/, /[^a-zA-Z0-9]/].every((pattern) =>
      //   pattern.test(value))
      // ), 
      // confirmpassword:yup.string().required().oneOf([yup.ref("password")]
      // ,"please enter the same password"),
      // dateofbirth:yup.string().required().matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
      // age:yup.number().max(100).required('please enter the age').min(18,'please check your age')
   
    })
   
   
    const {trigger,handleSubmit,register,formState:{errors},reset,setValue,setError,clearErrors,control,resetField}=useForm(
       { resolver:yupResolver(schema)}
    );
   const checkemail=(email)=>
   {
      let check=false
       datas.forEach((value)=>{if(value.email===email){check=true}})
       return check
   }
   
    const formsubmit=(data)=>
    {   
        reset();
        console.log(data)
        setSelectedValue([])
        setbook([])
        setDatac([{Name:"",Type:""}])
      //   Object.entries(data).forEach(([key, value]) => {
      //       console.log(key + ' - ' + value) 
      // })
    }
    const setvalue=(value)=>
    {
      setValue('hobbies',value)
     
    }
     const setvalue1=(value)=>
     {
      setValue('Relations',value)
     }
     const addbook=(value)=>
     {
       
         setValue('books',value)
     }
    return(
        <div>
             <img src={img} alt="boyimg" className="boyimg" />
             <div className="react-hook-form" >
       
           <form onSubmit={handleSubmit(formsubmit)}>
                 <h1>Become a member</h1>
             <Input id="name" type='text' placeholder='username'
              label='Name' register={{...register("name",
              {onChange:()=>{ trigger('name')}}
              )}}
              errorMessage={errors.name?.message}/>
             <Input id="phoneno" type='text' placeholder='phonenumber'
              label='Phonenumber' register={{...register('phonenumber',
              {onChange:()=>{ trigger('phonenumber')}}
              )}}
              errorMessage={errors.phonenumber?.message}/>
             <Input id="email" type='mail' placeholder='mail id'
              label='E-mail' register={{...register('email' ,
              {onChange:()=>{ trigger('email')}}
              )}}
           errorMessage={errors.email?.message}/>
          <Gender register={{...register('gender')}} errorMessages={errors.gender?.message}/>
               




         
                {/* <Input id='dob' type='date' placeholder='dateobirth' 
               label='Dateofbirth' register={{...register('dateofbirth')}}
               errorMessage={errors.dateofbirth?.message}/>
               <Input id='age' type='text' placeholder='age'
               label ='Age' register={{...register('age')}
            } errorMessage={errors.age?.message}/>
             <Input id="password" type='text' placeholder='password' 
             label='Password' register={{...register('password')}}
             errorMessage={errors.password?.message}/>
             <Input id="confirmpassword" type='text' placeholder='confirm password'
              label='Confirm Password' register={{...register('confirmpassword')}}
              errorMessage={errors.confirmpassword?.message}/> */}
             
              <Hobbies 
                errorMessage={errors.hobbies?.message} 
                 setvalue={setvalue} setError={setError} clearErrors={clearErrors}  setSelectedValue={setSelectedValue} 
                 selectedValue={selectedValue}
                 trigger={trigger}  /> 
              
                <div>
                  <Relation datac={datac} setDatac={setDatac}
                   setvalue1={setvalue1} register={{...register('Relations')}}
                   errorMessage={errors.Relations?.message}
                   trigger={trigger}
                   />
                </div>
                   
                  <Books bookdata={bookdata} 
                   errorMessages={errors.books?.message} setbook={setbook}
                   getbook={getbook}  setValue={setValue} addbook={addbook}
                   clearErrors={clearErrors} 
                   trigger={trigger}
                   />

             <button className="submit_btn" type="submit">Register</button>
           </form>
        </div>
        </div>
        
    )
}
export default Form