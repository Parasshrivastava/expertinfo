import React from 'react'
import Header from '../../components/commoncomponents/Header/Header'
import Footer from '../../components/commoncomponents/Footer/Footer'
import Adminsidebar from '../../components/admincomponents/Adminsidebar'
import Admintable from '../../components/admincomponents/Admintable'

const AdminHomePage = () => {


    const data=[
        {
            "catid":1,
            "catname":"Mern",
            "catDesc":"Mern for web",
            "catimg":"/"
        },
        {
            "catid":2,
            "catname":"Mern",
            "catDesc":"Mern for web",
            "catimg":"/"
        },
        {
            "catid":3,
            "catname":"Mern",
            "catDesc":"Mern for web",
            "catimg":"/"
        },
        {
            "catid":4,
            "catname":"Mern",
            "catDesc":"Mern for web",
            "catimg":"/"
        },
    ]
  return (



    <div className='container'>
      <div className="row">
        <div className="col-12">
        <Header/>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
        <Adminsidebar />
        </div>
        <div className="col-9">
         <Admintable data={data}/>
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