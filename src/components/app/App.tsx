import React from 'react'
import Container from 'react-bootstrap/container'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/col'
import Root from '../common/Root'

export default function App() {
  return (
    <Root>
      <div>
        <Container className='p-3' fluid>
          <Row>
            <Col className='col-12 col-md-3'>
              <div className="d-flex pb-1">
                <div className="flex-fill">
                  <h6 className="mt-1 text-light">
                    Collabs
                  </h6>
                </div>
              <a href="./newCollab" className="btn btn-primary btn-sm align-self-end">
                New
              </a>
            </div>
            <div>
              <ul id="recent-collabs" className="list-group"></ul>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Root>
  )
}