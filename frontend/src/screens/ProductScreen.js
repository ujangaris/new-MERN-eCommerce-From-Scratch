import React from 'react'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = () => {
  // pasang use param dari react router-dom
  const { id } = useParams()
  // mencari berdasarkan id
  const product = products.find((p) => p._id === id)
  return (
    <>
      {/* link go back untuk ke halaman home */}
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        {/* menampilkan image */}
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        {/* Menampilkan teks produk, rating, harga, dan deskripsi dalam kolom ketiga. */}
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            {/* menampilkan rating */}
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            {/* menampilkan price */}
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            {/* menampilkan description */}
            <ListGroup.Item>Description: ${product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        {/* Menampilkan harga produk, status produk, dan tombol untuk menambahkan produk ke keranjang belanja */}
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen
