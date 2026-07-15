import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LandingLayout } from '@/layouts/LandingLayout'
import { DashboardLayout } from '@/layouts/DashboardLayout'

import Landing from '@/pages/Landing'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import Dashboard from '@/pages/Dashboard'
import Learn from '@/pages/Learn'
import SubjectDetail from '@/pages/SubjectDetail'
import Practice from '@/pages/Practice'
import Clinic from '@/pages/Clinic'
import AiMentor from '@/pages/AiMentor'
import Community from '@/pages/Community'
import Research from '@/pages/Research'
import Wildlife from '@/pages/Wildlife'
import Career from '@/pages/Career'
import Profile from '@/pages/Profile'
import Settings from '@/pages/Settings'
import NotFound from '@/pages/NotFound'

const router = createBrowserRouter([
  {
    element: <LandingLayout />,
    children: [
      { path: '/', element: <Landing /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/learn', element: <Learn /> },
      { path: '/learn/:subjectId', element: <SubjectDetail /> },
      { path: '/practice', element: <Practice /> },
      { path: '/clinic', element: <Clinic /> },
      { path: '/ai', element: <AiMentor /> },
      { path: '/community', element: <Community /> },
      { path: '/research', element: <Research /> },
      { path: '/wildlife', element: <Wildlife /> },
      { path: '/career', element: <Career /> },
      { path: '/profile', element: <Profile /> },
      { path: '/settings', element: <Settings /> },
    ],
  },
  { path: '*', element: <NotFound /> },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
