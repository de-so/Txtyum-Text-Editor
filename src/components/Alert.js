import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.substr(1);
    }
  return (
    <>
    <div className='hide' id='newAlert' style={{height: '0px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} container py-2`} role="alert"><strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}</div>}
    </div>
    </>
  )
}
