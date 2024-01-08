import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { getDocs, collection, where, query } from 'firebase/firestore'; // Ensure correct import statement

import SearchResults from './SearchResults';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase-config';

const TopBanner = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const performSearch = async (query) => {
    try {
      console.log('Start of performSearch');

      const q = query(
        collection(db, 'food'),
        where('foodname', '>=', query.toLowerCase())
      );
      const querySnapshot = await getDocs(q);

      console.log('Query Snapshot:', querySnapshot);

      const results = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log('Search Results:', results);

      return results;
    } catch (error) {
      console.error('Error fetching search results:', error);
      throw error;
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const searchResults = await performSearch(searchQuery);
      setSearchResults(searchResults);
      setShowResults(true);
      navigate('/search-results');
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  const handleResultClick = (foodId) => {
    console.log('Result clicked:', foodId);
    navigate(`/food-details/${foodId}`);
  };

  return (
    <section id="home">
      <div className="container-fluid top-banner">
        <div className="container">
          <div className="row">
            <div>
              <Container className="">
                <Row className="justify-content-center">
                  <div className='row'>
                    <Form onSubmit={handleSearch} className="d-flex justify-content-center align-items-center">
                      <Col lg={5} md={10} sm={12} className="mb-lg-0">
                        <Form.Control
                          type="search"
                          placeholder="Search foods by title, category"
                          className="me-2 search-input"
                          aria-label="Search"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </Col>
                      <div className="col-lg-1 d-flex">
                        <Button type="submit" className='main-btn p-1 mx-1'>
                          &nbsp;<i className="fa-solid fa-magnifying-glass"></i>&nbsp;
                        </Button>
                      </div>
                    </Form>
                  </div>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>

      {showResults && <SearchResults searchResults={searchResults} onResultClick={handleResultClick} />}
    </section>
  );
};

export default TopBanner;