import Card from "react-bootstrap/Card";
import React from "react";
import AxiosInstance from "../Axios Instance/AxiosInstance";
import { useState, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Categories.css";

// react component for creating beautiful carousel
const Categories = () => {
  const [Categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await AxiosInstance.get("categories.json");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      <Container className="container">
        <Row xs={1} md={2} className="g-4">
          {Categories.map((category) => (
            <Col key={category.id}>
              <Link to={`/categories/${category.id}`}>
                <Card
                  className="custom-card"
                  style={{ width: "18rem", height: "auto" }}
                >
                  <Image src={category.image} alt={category.title} />
                </Card>
              </Link>
              <Card.Body>{category.title}</Card.Body>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Categories;
