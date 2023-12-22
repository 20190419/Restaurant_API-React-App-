import React, { useEffect, useState } from "react";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AxiosInstance from "../Axios Instance/AxiosInstance";

const Products = () => {
  const { categoryId } = useParams();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

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

  const addToCart = (product) => {
    setSelectedProducts((prevSelectedProducts) => [
      ...prevSelectedProducts,
      product,
    ]);
  };

  useEffect(() => {
    // Calculate the total cost whenever the selectedProducts array changes
    let total = 0;
    selectedProducts.forEach((product) => {
      total += product.avgBudget;
    });
    setTotalCost(total);
  }, [selectedProducts]);

  return (
    <>
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

      <Row
        xs={1}
        md={2}
        className="g-4"
        style={{ textAlign: "left", padding: "20px", marginLeft: "200px" }}
      >
        {products.map((product) => (
          <Col key={product.id}>
            <Card
              className="border border-light rounded-3 shadow-sm"
              style={{
                width: "18rem",
                height: "auto",
                textAlign: "center",
              }}
            >
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
            <Card.Body>{product.title}</Card.Body>
            <Card.Body
              className="budget"
              style={{
                color: "lightGray",
                fontSize: "14px",
                textAlign: "inherit",
              }}
            >
              {product.minBudget}$~{product.maxBudget}$
            </Card.Body>
            <Button variant="success" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>{" "}
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Products;
