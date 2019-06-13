import React from 'react'
import { Container, Title, Content, Link, Headshot } from './styling'
import SocialNav from './components/SocialNav'
import headshot from './hlm_v2.jpg'

const App = () => {
    return (
        <Container>
            <Title>I&rsquo;m Hannah</Title>
            <Headshot src={headshot} alt="hannahlmurray" />
            <Content>I&rsquo;m a Senior Front End Engineer based out of Brooklyn, NY. Currently working at <Link href="https://casper.com" target="_blank" rel="noopener noreferrer">Casper</Link>, previously at <Link href="https://mmlafleur.com" target="_blank" rel="noopener noreferrer">MM.LaFleur</Link>, <Link href="https://thecharlesnyc.com" target="_blank" rel="noopener noreferrer">The Charles</Link> and Time Inc. Originally from South Carolina, and studied Computer Science at the College of Charleston. Lover of running, cooking, Saturday Night Live, and Bravo.</Content>
            <SocialNav />
        </Container>
    )
}

export default App
