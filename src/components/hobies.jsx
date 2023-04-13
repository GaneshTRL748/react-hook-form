import { useState,useEffect } from 'react'
import '../styles/hobies.css'
import Select from 'react-select';
let Hobbies=(props)=>
{
    const data = [
        {
          value: 'reading',
          label: 'reading',
        },
        {
          value: 'writing',
          label: 'writing',
        },
        {
          value: 'dancing',
          label: 'dancing',
        },
        {
          value: 'singing',
          label: 'singing',
        },
        {
          value: 'horce riding',
          label: 'horce riding',
        },
        {
          value: 'swimmig',
          label: 'swimming',
        },
      ];
     
      const handleChange = (values) => {
         props.setSelectedValue(Array.isArray(values) ? values.map((x) => x.value) : [])
          if(!props.selectedValue==0)
         {
          props.clearErrors('hobbies')
         }  
         props.trigger('hobbies')
      };
      useEffect(()=>
      {
        props.setvalue(props.selectedValue)
         
      },[props.selectedValue])
      
      return (
        <div className="hobies">
            <div>
            <label htmlFor="">Hobbies</label>
              <Select 
              className="dropdown"
              placeholder="Select Option"
              value={data.filter((obj) => props.selectedValue.includes(obj.value))} // set selected values
              options={data} 
              onChange={handleChange}
              isMulti
              isClearable
            />
           <span>{props.errorMessage}</span>
          </div>
        </div>
      
      );
}
export default Hobbies