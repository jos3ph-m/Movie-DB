import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT, useGlobalContext } from './context';

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  return <h2>single movie</h2>;
};

export default SingleMovie;
