import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col} from 'reactstrap';
import './Detail.css';

import newsApi from "../../utils/news.json"
import Sidebar from '../../components/sidebar/Sidebar';

const Detail = () => {

  const params = useParams();
  const [item, setItem] = useState({});

  console.log(params.id);
  
  useEffect(() => {
    setItem(newsApi[params.id]);
  }, [])

  return (
    <Container className="page">
      <Row>
        <h2 className="main-title col-12">{item.title}</h2>
        <Col md="8">
          <img className="w-100 mb-4" src={item.image} alt=""/>
          <p>{item.body}</p>
        </Col>
        <Sidebar/>
      </Row>
    </Container>
  )
}

export default Detail;