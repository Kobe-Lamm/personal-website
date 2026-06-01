import { Outlet } from 'react-router-dom'
import NavBar from '../../shared/components/NavBar'

const HomePage = () => {
  return (
    <div>
        <div> <NavBar/> </div>
        <div className='mt-15'>
            <Outlet />
        </div>
    </div>
  )
}

export default HomePage