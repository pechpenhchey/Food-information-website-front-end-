import React, { useState } from 'react';
import TopBanner from '../components/TopBanner';
import { db } from '../firebase-config';
import { getDocs, query, where, collection } from "@firebase/firestore";

const SearchPage = ({ searchResults, handleResultClick }) => {
  return (
    <div>
      {searchResults.length > 0 ? (
        searchResults.map((result) => (
          <div key={result.id} onClick={() => handleResultClick(result.id)}>
            <p>{result.foodname}</p>
            {/* Add additional result details and click handler as needed */}
          </div>
        ))
      ) : (
        <p>No results found for your search.</p>
      )}
    </div>
  );
};

export default SearchPage;