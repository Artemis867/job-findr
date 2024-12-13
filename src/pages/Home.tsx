import React, {useEffect, useCallback, useState} from "react";
import { USER_ROUTE } from "@/common/user.common";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});


  useEffect(() => {
    let isMounted = true;
    const user = localStorage.getItem('user') ?? '';
    const userData = {user};

    const fetchUserCredential = async (userData) => {
      const headers = {
        authorization: localStorage.getItem('token'),
      }
  
      try {
        const result = await axios.post(`${USER_ROUTE}/info`, userData, {headers});
        if(result.data?.user) {
          setUserData(result.data?.user);
        }
  
      } catch(err) {
        if(err.response.data?.redirect) {
          navigate('/');
        }
      }
    };

    if(isMounted) fetchUserCredential(userData);

    return () => {
      isMounted = false;
    }
  }, []);


  useEffect(() => {
    if(userData) {
      console.log('[TRACK] userData');
      console.log(userData);
    }
  }, [userData]);

  return (
    <>Home component</>
  );
}