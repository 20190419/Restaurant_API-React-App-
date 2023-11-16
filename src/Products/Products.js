import React, { useEffect, useState } from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AxiosInstance from "../Axios Instance/AxiosInstance";

const Products = () => {
  // Extracting categoryId from route parameters
  const { categoryId } = useParams();
  
  // State for products, selected products, and total cost
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  // Fetch products based on categoryId when categoryId changes
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await AxiosInstance.get(
          `categories/${categoryId}.json`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  // Add a product to the cart
  const addToCart = (product) => {
    setSelectedProducts((prevSelectedProducts) => [
      ...prevSelectedProducts,
      product,
    ]);
  };

  // Update total cost whenever selectedProducts change
  useEffect(() => {
    let total = 0;
    selectedProducts.forEach((product) => {
      total += product.avgBudget;
    });
    setTotalCost(total);
  }, [selectedProducts]);

  return (
    <>
      <div className="container">
        {/* Display the total cost */}
        <Row>
          <Col
            style={{
              fontWeight: "bold",
              color: "ActiveBorder",
              textAlign: "center",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            Total Cost is = {totalCost}$
          </Col>
        </Row>

        {/* Display products */}
        <Row xs={1} md={2} className="g-4" style={{ textAlign: "left", padding: "20px", marginLeft: "200px" }}>
          {products.map((product) => (
            <Col key={product.id}>
              <Card className="border border-light rounded-3 shadow-sm" style={{ width: "18rem", height: "auto", textAlign: "center" }}>
                {/* Product image */}
                <Image
                  src={`${product.image}`}
                  alt=""
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0",
                    marginBottom: "10px",
                    alignContent: "center",
                    textAlign: "center",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                />
              </Card>

              {/* Product title */}
              <Card.Body>{product.title}</Card.Body>

              {/* Budget range */}
              <Card.Body className="budget" style={{ color: "lightGray", fontSize: "14px", textAlign: "inherit" }}>
                {product.minBudget}$~{product.maxBudget}$
              </Card.Body>

              {/* Button to add the product to the cart */}
              <Button variant="success" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>{" "}
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Products;
