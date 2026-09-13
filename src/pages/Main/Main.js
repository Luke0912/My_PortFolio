import React from 'react'
import { Helmet } from 'react-helmet'
import {
  Navbar, Footer, Landing, About, Skills,
  Experience, Contacts, Projects, Architecture,
  AIVoice
} from '../../components'

function Main() {
  return (
    <div>
      <Helmet>
        <title>Shubham Dubey | Full Stack Engineer</title>
        <meta
          name="description"
          content="Full Stack Engineer building scalable SaaS, AI-powered platforms, and real-time systems."
        />
      </Helmet>

      <Navbar />
      <main id="main-content">
        <Landing />
        <About />
        <Experience />
        <Skills />
        <Architecture />
        <AIVoice />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default Main
