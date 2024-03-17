import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header/Header'
import Main from './assets/components/Main/Main'
import Sidebar from './assets/components/Sidebar/Sidebar'
function App() {
  const [sidebar, setSidebar] = useState([]);

  const btnToAddSidebar = recipe =>{
    const newSidebar = [...sidebar, recipe]
    setSidebar(newSidebar);
  }

  return (
    <>
      <div>
        <Header></Header>
        <div className='flex'>
        <Main btnToAddSidebar={btnToAddSidebar}></Main>
        <Sidebar sidebar={sidebar}></Sidebar>
        </div>
      </div>
    </>
  )
}

export default App
