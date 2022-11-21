import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Head from './Head'

export default function Layout() {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      <Head />
      <div className='flex h-full'>
        <Sidebar />
        <div className='w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
