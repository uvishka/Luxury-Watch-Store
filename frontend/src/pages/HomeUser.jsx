//newest code

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import DefaultLayout from '../components/DefaultLayout';

const Home = () => {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    if (searchTerm) {
      const results = watches.filter((watch) =>
        watch.brand.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults(watches);
    }
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/watches')
      .then((response) => {
        setWatches(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setSearchResults(watches); 
  }, [searchTerm]);

  return (
    <DefaultLayout className="p-4">
      <div className="flex justify-between items-center bgc">
        <h2 className="text-3xl my-8 text-center bs1">Luxury Watches List</h2>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by Brand"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ color: 'black' }}
          />
          <button onClick={handleSearch}>Search</button>
          
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md text-center">No</th>
              <th className="border border-slate-600 rounded-md text-center">Image</th>
              <th className="border border-slate-600 rounded-md text-center">Brand</th>
              <th className="border border-slate-600 rounded-md max-md:hidden text-center">Model</th>
              <th className="border border-slate-600 rounded-md max-md:hidden text-center">Price</th>
              <th className="border border-slate-600 rounded-md text-center">Operations</th>
            </tr>
          </thead>
          <tbody>
            {(searchTerm ? searchResults : watches).map((watch, index) => (
              <tr key={watch._id} className={`h-8 ${searchTerm && 'highlighted'}`}>
                <td className="border border-slate-700 rounded-md text-center bgc">{index + 1}</td>
                <td className="border border-slate-700 rounded-md text-center vertical-center bgc">
                  <img src={watch.image} alt={watch.brand} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </td>
                <td className="border border-slate-700 rounded-md text-center">{watch.brand}</td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">{watch.model}</td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">{watch.price}</td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/watches/details/${watch._id}`}>
                      <BsInfoCircle className="text-2xl text-green-400" />
                    </Link>
                    
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </DefaultLayout>
  );
};

export default Home;
