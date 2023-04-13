import { useState,useEffect } from "react"
import '../styles/books.css'
let Books=(props)=>
{
   
    const handleClick=(data)=>
    {
        let flag=false
        props.getbook.map(value=>{
            if(value.id===data.id)
            {
                flag=true
            }
        })
        if(!flag)
        {
            props.setbook([...props.getbook,data])
        }
        else{
              props.setbook(
                   props.getbook.filter((value)=>
                   {
                    if(value.id!=data.id){
                        return value
                    }
                   })
              )
        }
        if(!props.getbook==0)
        {
            props.clearErrors('books')
        }
        props.trigger('books')
    }
    return (
        <div className="books">
            <label >Books</label>
            <div>
            {
                  props.bookdata.map((data)=>
                    <label className="books_name"><input type="checkbox" 
                     value={data}
                    onClick={()=>{handleClick(data)}}
                       onBlur={props.addbook(props.getbook)}
                    />{data.name}</label>
                  )
            }
            </div>
           <span>{props.errorMessages}</span>
        </div>
    )
}
export default Books 