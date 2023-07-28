import { Navigate } from "react-router-dom"



export const Landing = () => <h2>Landing es una pagina publica</h2>

export const Home = ({user}) => /* {
 if (!user) {
  return <Navigate to = "/landing"/>
 }  */
 <h2>Home es una pagina privada</h2>
 

export const Dashboard = () => <h2>Dasboard es una pagina privada</h2>

export const Analityc  = () => <h2>Analityc es una pagiva privada, necesita permiso</h2>

export const Admin = () => <h2>Admin es una pagiva privada, necesita permiso</h2>