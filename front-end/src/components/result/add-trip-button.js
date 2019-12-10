import React from 'react';

function AddButton ( {type, add} ) {

  return (type === 'add' ?
    <button className="btn" onClick={ () => {add()}} >
      <svg viewBox="0 0 24 24" width="54" height="54" stroke="#E0E1E4" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
    </button>
    :
    <button className="btn" onClick={ () => {add()}}>
      <svg viewBox="0 0 24 24" width="54" height="54" stroke="#E0E1E4" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    </button>
  )
}

export default AddButton;