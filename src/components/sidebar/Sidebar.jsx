import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Col } from 'reactstrap';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <Col md="3" className="mt-2">
      <ListGroup className="list_div">
        <ListGroupItem>
          <h5>Usefull Links</h5>
        </ListGroupItem>
        <ListGroupItem>
          <div className="image-div">
              <img src="/assets/images/placeholder.jpg" className="image-left w-100" alt="Card image cap" />
          </div>
          <div className="image-title">
              <h2 className="font14"><Link to="#">Lorem Ipsum Dolor</Link></h2>
          </div>
        </ListGroupItem>
        <ListGroupItem>
          <div className="image-div">
              <img src="/assets/images/placeholder.jpg" className="image-left w-100" alt="Card image cap" />
          </div>
          <div className="image-title">
              <h2 className="font14"><Link to="#">Lorem Ipsum Dolor</Link></h2>
          </div>
        </ListGroupItem>
        <ListGroupItem>
          <div className="image-div">
              <img src="/assets/images/placeholder.jpg" className="image-left w-100" alt="Card image cap" />
          </div>
          <div className="image-title">
              <h2 className="font14"><Link to="#">Lorem Ipsum Dolor</Link></h2>
          </div>
        </ListGroupItem>
        <ListGroupItem>
          <div className="image-div">
              <img src="/assets/images/placeholder.jpg" className="image-left w-100" alt="Card image cap" />
          </div>
          <div className="image-title">
              <h2 className="font14"><Link to="#">Lorem Ipsum Dolor</Link></h2>
          </div>
        </ListGroupItem>
        <ListGroupItem>
          <div className="image-div">
              <img src="/assets/images/placeholder.jpg" className="image-left w-100" alt="Card image cap" />
          </div>
          <div className="image-title">
              <h2 className="font14"><Link to="#">Lorem Ipsum Dolor</Link></h2>
          </div>
        </ListGroupItem>
      </ListGroup>
    </Col>
  )
}

export default Sidebar;