import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { API_ENDPOINT, useGlobalContext } from './context';

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });

  const fetchMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
  };

  useEffect(() => {
    fetch(`${API_ENDPOINT}&i=${id}`);
  }, [id]);

  return <h2>single movie</h2>;
};

export default SingleMovie;
