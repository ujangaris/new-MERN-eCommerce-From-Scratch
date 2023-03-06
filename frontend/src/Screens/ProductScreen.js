import React, { useEffect } from 'react'
import {
  Button,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import products from '../products'
import Rating from '../components/Rating'

const ProductScreen = () => {
  // pasang useParams untuk mengambil id dari url
  const { id } = useParams()
  //   cari product berdasarkan id
  const product = products.find((p) => p._id === id)
  //   judul web
  useEffect(() => {
    document.title = `${product.name} - Product Details`
  }, [product])

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h2>{product.name}</h2>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={` ${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price : $ {product.price}</ListGroupItem>
            <ListGroupItem>Description : {product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroupItem>
              <Row>
                <Col>Price</Col>
                <Col>$ {product.price}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>Stock</Col>
                <Col> {product.countInStock ? 'In Stock' : 'Of out Stock'}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Button
                className='btn-block'
                type='button'
                disabled={product.countInStock === 0}
              >
                Add to Cart
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
