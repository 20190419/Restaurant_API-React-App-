import Card from "react-bootstrap/Card";
import React from "react";
import AxiosInstance from "../Axios Instance/AxiosInstance";
import { useState, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Categories.css";

// React component for displaying categories
const Categories = () => {
  // State for storing categories
  const [Categories, setCategories] = useState([]);

  // Fetch categories when the component mounts
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
      {/* Display categories */}
      <Container className="container">
        <Row xs={1} md={2} className="g-4">
          {Categories.map((category) => (
            <Col key={category.id}>
              {/* Link to the category's products */}
              <Link to={`/categories/${category.id}`}>
                {/* Category card */}
                <Card className="custom-card" style={{ width: "18rem", height: "auto" }}>
                  {/* Category image */}
                  <Image src={category.image} alt={category.title} />
                </Card>
              </Link>

              {/* Category title */}
              <Card.Body>{category.title}</Card.Body>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Categories;
