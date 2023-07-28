import { Navigate, Outlet } from "react-router-dom"


export const ProtectedPages = ({isAllowed, children, redirectTo= '/landing'}) => {
  if (!isAllowed) {
   return <Navigate to = {redirectTo}/>
  } 
  return children ? children : <Outlet/>

}