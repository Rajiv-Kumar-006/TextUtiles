import React from 'react'
const captalize = (word) => {
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}
function Alarm(props) {
  return (
 
      props.alert && <div className={`alert alert-${captalize(props.alert.type)} alert-dismissible fade show`} role="alert">
            <strong>{captalize(props.alert.type)} </strong> : {props.alert.msg}
        </div>
    
  )
}

export default Alarm
