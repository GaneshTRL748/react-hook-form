import React, { useEffect } from "react";
import '../styles/relations.css'
const Relation =(props)=>{
    useEffect(()=>
    {
      props.setvalue1(props.datac)
    })
    const handleClick=()=>{
        props.setDatac([...props.datac,{Name:"",Type:""}])
    }
    const handleChange=(e,i)=>{ 
        const {name,value}=e.target
        const onchangeVal = [...props.datac]
        onchangeVal[i][name]=value
        props.setDatac(onchangeVal)
        props.trigger('Relations')
    }
    const handleDelete=(i)=>{
        console.log(i);
        const deleteVal = [...props.datac]
        deleteVal.splice(i,1) 
        props.setDatac(deleteVal)
    }
    return(
        <div className="relations">
            <label htmlFor="">Relations</label>
            <span className="rel_add"  onClick={handleClick}>+</span>
            {
                props.datac.map((val,i)=>
                <div>
                    <input  className="rel_input" placeholder="Enter the relation name" name="Name" value={val.Name} onChange={(e)=>handleChange(e,i)} />
                    <input  className="rel_inputt" placeholder="Enter the relation" name="Type" value={val.Type } onChange={(e)=>handleChange(e,i)}  />
                  
                  {
                      (props.datac.length>1)&&<span className="rel_del" onClick={()=>handleDelete(i)}>Delete</span>
                                
                  }
                </div>
                )
            }
            <div>
                <span>{props.errorMessage}</span>
            </div>
        </div>
    )
        }

export default Relation;