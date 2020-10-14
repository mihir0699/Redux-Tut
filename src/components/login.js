import React from 'react';
import axios from "axios"
import 'antd/dist/antd.css';
import "../App.css"
import { Typography } from 'antd';
import { Button } from 'antd';
import { GoogleOutlined} from '@ant-design/icons';

function Login() {
  const { Title } = Typography;
  return (
    <div className="login">
       <Title level={1}>Blogs App</Title>
   <a href="http://localhost:5000/auth/google"> <Button type="danger" size="large"style={{marginTop:"10%"}}> <GoogleOutlined />Login with Google</Button></a>
    </div>
  );
}

export default Login;
