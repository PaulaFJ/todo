import { useState } from 'react'
import  { GlobalStyle } from '../styles/global'
import styled from 'styled-components'
import { Sidebar } from '../components/Sidebar'
import { Header } from '../components/Header'
import { Home } from './Home'


function App() {
    const [count, setCount] = useState(0)

    const Main = styled.main`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 100vh;

    `
    const Section = styled.section`
        display: flex;
        max-width: 80vw;
        flex: 1;
        flex-direction: column;
    `

    return (
        <>
            <GlobalStyle />
            <Main>
                <Sidebar />

                <Section>
                    <Header />

                    <Home />
                </Section>
            </Main>
        </>
    )
}

export default App
