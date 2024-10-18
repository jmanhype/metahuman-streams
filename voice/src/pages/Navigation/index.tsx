import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import axios from "axios";
import { BASE_URL } from "../../constants";
import { useEffect } from "react";

const handleAuth = (
  route: { path: string; element: JSX.Element },
  key: any
) => {
  
  
  return <Route key={key} path={route.path} element={route.element}  />;
};

const Navigation = () => {
  const fetchData = async () => {
    const response = await axios.get(`${BASE_URL}/admin/misc`);

    if(response.data.statusCode === 200){
      localStorage.setItem('brand', response.data.data.brand);
      localStorage.setItem("logo", response.data.data.logo);
    }
  };

  useEffect(()=>{
    fetchData();
  },[])
  return <Routes>{routes.map((route, key) => handleAuth(route, key))}</Routes>;
};

export default Navigation;
