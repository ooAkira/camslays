import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Camslays Chat</span>
      <div className="user">
        <img src="http://www.imgworlds.com/wp-content/uploads/2015/11/1-PLANYOURVISIT-ticketbookings420X290.jpg" alt="" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar;