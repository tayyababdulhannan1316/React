import React from 'react';
import { ConfigProvider } from 'antd';
import { useAuthContext } from 'contexts/Auth';
import '@ant-design/v5-patch-for-react-19';
import './App.scss';
import ScreenLoader from 'components/ScreenLoader';
import Routes from "./pages/Routes"

function App() {
  const {isAppLoading} = useAuthContext()
  console.log('isAppLoading', isAppLoading)

  return (
    <>
    <ConfigProvider theme={{token:{colorPrimary:"#1d3557"}}}>
    {isAppLoading
    ? <ScreenLoader></ScreenLoader>
    :
    <Routes />
    }
    
    </ConfigProvider>
    
    </>
  );
}

export default App;
