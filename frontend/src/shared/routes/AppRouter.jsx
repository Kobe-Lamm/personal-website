import {createBrowserRouter} from 'react-router-dom'
import HomePage from '../../homeModule/UI/HomePage'
import App from '../../App'
import AboutMe from '../../homeModule/components/AboutMe'
import ContactMe from '../../homeModule/components/ContactMe'
import Projects from '../../homeModule/components/Projects'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage/>,
                children: [
                    { path: '/about-me', element: <AboutMe /> }, 
                    { path: '/contact-me', element: <ContactMe /> },
                    { path: '/projects', element: <Projects /> },
                ]
            }
        ]
    }
])