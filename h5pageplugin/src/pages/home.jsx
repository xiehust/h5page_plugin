// SPDX-License-Identifier: MIT-0
import React, { useState,useEffect } from "react";
import {apiAuth} from "../utils/auth";
// import { Helmet } from 'react-helmet';

const Home = () => {
    const [userInfo, setUserInfo] = useState('');
    useEffect(() => {
      const res = apiAuth();
      console.log(res);
      setUserInfo(res);
      return () => {
       
      };
    }, []);
  
    return (
      <div>
        {"start:"+userInfo.name}
      </div>
    );
  };
  
  export default Home;