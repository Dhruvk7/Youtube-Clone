import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Route, Routes, Navigate } from 'react-router-dom'

import './_app.scss'

const Layout = ({ children }) => {
    const [sidebar, toggleSidebar] = useState(false);

    const handleToggleSidebar = () => toggleSidebar(value => !value)

    let app_mainStyle = {
        width: "82vw"
    }
    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar} />
            <div className="app__container">
                <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />

                <Container fluid className='app_main' style={app_mainStyle}>
                    {children}
                </Container>
            </div>
        </>
    )
}

const App = () => {

    const { accessToken, loading } = useSelector(state => state.auth);

    const navigate = useNavigate();


    useEffect(() => {

        if (!loading && !accessToken) {
            navigate('/auth')
        }

    }, [accessToken, loading, navigate])






    return (

        <Routes>
            <Route path='/' element={
                <Layout>
                    <HomeScreen />
                </Layout>
            }>
            </Route>

            <Route path='/auth' element={
                <LoginScreen />
            }>
            </Route>

            <Route path='/search' element={
                <Layout>
                    <h1>Search Results</h1>
                </Layout>
            }>
            </Route>

            <Route path='*' element={
                <Navigate to='/' />
            }>
            </Route>
        </Routes>

    )
}

export default App