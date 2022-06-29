import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, Container, Row, Col} from 'reactstrap';
import './News.css';

import newsApi from "../../utils/news.json"
import Sidebar from '../../components/sidebar/Sidebar';

const News = () => {
  
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    setItems(newsApi)
  }, []);

  return (
    <Container className="page">
      <h1 className="main-title col-12">News</h1>
      <Row>
        <Col md="9">
          <Row className="cart-list">
            { items.map((item) => (
            <Col md="6" className="cart-item" key={item.id}>
              <Card className="news-list">
                <Link to={'/detail/'+item.id}>
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
          </Row>
        </Col>
        <Sidebar/>
      </Row>
    </Container>
  )
}

export default News;