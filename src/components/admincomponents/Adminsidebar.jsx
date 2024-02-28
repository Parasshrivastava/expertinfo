import React from 'react'
import { Link } from 'react-router-dom'


Link
const Adminsidebar = () => {
  return (
    
       <div className='bg-gray-700 h-screen'>
         <div className='text-white m-4text-xl text-center font-serif p-4 '>Links</div>
         <div className='mb-7'>
         <div className='text-center bg-orange-400 hover:bg-orange-900 mb-3 p-2 hover:border text-white hover:rounded-md hover:shadow-lg' ><Link to="/admin/adminhome"
        > Home</Link></div>
         <div className='text-center mb-3 p-2  bg-orange-400 hover:bg-orange-900  hover:border text-white' ><Link to="/admin/expreg"
        > Expert-Register</Link></div>
         <div className='text-center mb-3 p-2  bg-orange-400 hover:bg-orange-900  hover:border text-white' ><Link to="/admin/expcatreg"
        > Expert-category-register</Link></div>
         <div className='text-center mb-3 p-2  bg-orange-400 hover:bg-orange-900  hover:border text-white' ><Link to="/admin/expdisplay"
        > Expert-Display</Link></div>
        <div className='text-center mb-3 p-2  bg-orange-400 hover:bg-orange-900  hover:border text-white' ><Link to="/admin/expcatdisplay"
        > Expert-categoryDisplay</Link></div>

       
        {/* <div className='text-center bg-orange-400 hover:bg-orange-900  hover:border text-white' >
          <Link to='/admin/exp-reg'><AdminExpreg /></Link> */}
        </div>
        </div>
      // </div>
     
   
  )
}

export default Adminsidebar