import React from 'react'

function Alert(props) {
    /*const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt[0].toUpperCase() + lower.slice(1);
    }*/
    function getTitleCase(str) {
        const titleCase = str
          .toLowerCase()
          .split(' ')
          .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join(' ');
      
        return titleCase;
      }
  return (
    
       props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {getTitleCase(props.alert.type)}:{props.alert.msg}
        
        </div>
   
  )
}

export default Alert
