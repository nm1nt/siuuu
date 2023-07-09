import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Content from '../../components/content/Content'

const Layout = (props) => {
  return (
    <div className='flex flex-1 flex-col h-screen w-screen bg-slate-100 overflow-y-auto'>
        <Navbar 
          title={'JSI-07'}
          dropDownOptions = {
            {
              Setting : "Settings",
              Contact : 'Contact',
              Social : 'Social',
              Logout : 'Logout'
            }
          }
        />
        <div className='w-full h-full bg-white overflow-y-auto'>
          {/* {props.children} */}
          <Content>
            {props.children}
          </Content>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default Layout