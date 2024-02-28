import React from 'react'
import Header from '../../components/commoncomponents/Header/Header'
import Footer from '../../components/commoncomponents/Footer/Footer'
import Adminsidebar from '../../components/admincomponents/Adminsidebar'
import Adminexpregcatform from '../../components/admincomponents/Adminexpregcatform'

const AdminHomePage = () => {
  return (



    <div className='container'>
      <div className="row">
        <div className="col-12">
        <Header/>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
        <Adminsidebar/>
        </div>
        <div className="col-9">
         <Adminexpregcatform/>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Footer/>
        </div>
      </div>
    </div>



    
  )
}

export default AdminHomePage