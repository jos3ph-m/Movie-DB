import React from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      search form
    </form>
  );
};

export default SearchForm;
