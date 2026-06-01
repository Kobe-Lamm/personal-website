import {createBrowserRouter} from 'react-router-dom';
import Home from './HomePage/Home';
// Importing elements
import Projects from './HomePage/components/Projects';
import Skills from './HomePage/components/Skills';
import ContactMe from './HomePage/components/ContactMe';
import AboutMe from './HomePage/components/AboutMe';
import Blogs from './HomePage/components/Blogs';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        children: [
            { path: '/projects', element: <Projects /> },
            { path: '/skills', element: <Skills /> },
            { path: '/contact', element: <ContactMe /> },
            { path: '/about-me', element: <AboutMe />},
            { path: '/blogs', element: <Blogs /> },
        ]
    },
])

export default router;