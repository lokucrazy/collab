import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

interface PropTypes {
  children: JSX.Element
}

export default function({ children }: PropTypes) {
  return (
    <div id='root' className="bg-dark" style={{minHeight: '100vh'}}>
      <Navbar className='mb-2' bg='primary' expand='lg' variant='dark'>
        <Navbar.Brand href='/'>Collab!</Navbar.Brand>
        <Navbar.Collapse id='collab-navbar'>
          <Nav className='mr-auto'>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/collabs'>My Collabs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        {children}
      </div>
    </div>
  )
}