import '../styles/gender.css'
let Gender=(props)=>
{
    return(
        <div className="gender"> 
              <div>

              <label htmlFor="">
                    Gender
                <div className='gender_names'>
          <label htmlFor="gender" className='gender_names' ><input type="radio" name='gender' {...props.register} value={'others'}/> others</label> 
           <label htmlFor="gender" className='gender_names' ><input type="radio" name='gender' {...props.register} value={'female'}/> female</label> 
           <label htmlFor="gender" className='gender_names' ><input type="radio" name='gender' {...props.register}  value={'male'}/> male</label> 
                </div>
                </label>
                </div> 
                <span>{props.errorMessages}</span>
               
        </div>
     
    )
}
export default Gender