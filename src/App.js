import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'

const App = () => {
    return (

        <>
            <Header />
            <div className="app_container border border_info">
                <Sidebar />

                <Container fluid className='app_main border border_warning'>
                    <HomeScreen />
                </Container>
            </div>
        </>
    )
}

export default App