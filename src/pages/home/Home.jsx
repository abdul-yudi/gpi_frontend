import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import './Home.css';

import Sidebar from '../../components/sidebar/Sidebar';
import CarouselSlider from '../../components/carousel/Carousel';
import newsApi from "../../utils/news.json"

const Home = () => {
  
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    setItems(newsApi)
  }, []);

  return (
    <Container className="page">
      <Row>
        <CarouselSlider/>
      </Row>
      <Row>
        <Col md="9 mb-4">
          <h2 className="main-title col-12">Latest News</h2>
          <Row className="cart-list">
            {items.slice(0, 3).map((item) => (
            <Col md="4" className="cart-item" key={item.id}>
              <Card className="news-list">
                <Link className="d-block" to={'/detail/'+item.id}>
                  <CardImg top={true} className="w-100 img-thumbnail" src={item.image} alt="" />
                </Link>
                <CardBody>
                  <CardTitle><h4><Link to={'/detail/'+item.id}>{item.title}</Link></h4></CardTitle>
                  <CardText>{item.body.slice(0, 130)}</CardText>
                  <Link to={'/detail/'+item.id}>Read More &raquo;</Link>
                </CardBody>
              </Card>
            </Col>
            ))}
            <Col md="12 text-center">
              <Link className="btn btn-success" to={'/news'}>View All</Link>
            </Col>
          </Row>
        </Col>
        <Sidebar/>
      </Row>
    </Container>
  )
}

export default Home;