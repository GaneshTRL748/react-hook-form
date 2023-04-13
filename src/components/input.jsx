import '../styles/input.css'
let Input=(props)=>
{
    return (
        <div className='inputbox'>
            <label >{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} 
             id={props.id} {...props.register} />
            <span>{props.errorMessage}</span>
        </div> 
    )
}
export default Input