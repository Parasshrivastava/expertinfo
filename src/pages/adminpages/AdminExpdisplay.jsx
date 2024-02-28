import React from 'react'
import Header from '../../components/commoncomponents/Header/Header'
import Footer from '../../components/commoncomponents/Footer/Footer'
import Adminsidebar from '../../components/admincomponents/Adminsidebar'
import AdminExpdisplaytable from '../../components/admincomponents/AdminExpdiaplaytable'

const AdminExpdisplay = () => {


  const data = [
    {
      "expid": 1,
      "expname": "Paras",
      "expemail": "one@one.com",
      "expphone": "938484839",
      "expertexp": 4,
      "catid": "1"
    },
    {
      "expid": 1,
      "expname": "Paras",
      "expemail": "one@one.com",
      "expphone": "938484839",
      "expertexp": 4,
      "catid": "2"
    },
    {
      "expid": 1,
      "expname": "Paras",
      "expemail": "one@one.com",
      "expphone": "938484839",
      "expertexp": 4,
      "catid": "3"
    },
    {
      "expid": 1,
      "expname": "Paras",
      "expemail": "one@one.com",
      "expphone": "938484839",
      "expertexp": 4,
      "catid": "4"
    },

  ]
  return (



    <div className='container'>
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <Adminsidebar />
        </div>
        <div className="col-9">
          <AdminExpdisplaytable data={data}/>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Footer />
        </div>
      </div>
    </div>




  )
}



export default AdminExpdisplay