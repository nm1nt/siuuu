import Layout from './pages/layout/Layout'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  
} from 'react-router-dom'
import Home from './pages/main/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Forget from './pages/forgot-account/Forget'
import NotFound from './pages/page-not-found/NotFound'
import ChatRoom from './pages/chat/ChatRoom'
import Detail from './pages/detailPage/Detail'

const routers = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="forgot" element={<Forget />} />
      <Route path="chat" element={<ChatRoom />} />
      <Route path="detail" element={<Detail/>}></Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
)

function App() {
  return (
    <Layout>
      <RouterProvider router={routers} />
    </Layout>
  )
}

export default App
