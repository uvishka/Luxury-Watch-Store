import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import DefaultLayout from '../components/DefaultLayout';

const ShowWatch = () => {
  const [watch, setWatch] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/watches/${id}`)
      .then((response) => {
        setWatch(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id])

  const pageStyle = {
    display: "flex",
    justifyContent: "right",
    alignItems: "left",
    height: "90vh", 
    backgroundSize: "contain",
    backgroundPosition: "left",
    backgroundImage: `url(${watch.image})`,
    backgroundRepeat: "no-repeat", 
  };

  const detailsStyle = {
    backgroundColor: "rgba(173, 216, 230, 0.8)",
    padding: "16px",
    borderRadius: "4px",
    width: "400px",
    textAlign: "left",
    color: "black",
    maxHeight: "80vh",
    overflow: "auto",
  };



  return (
    <DefaultLayout className="p-2 bgc ">


      <button
        className="custom-button btn1 my-2"
        onClick={() => {
          window.history.back();
        }}
      >
        Go Back
      </button>
      <h2 className="text-3x1 my-2 text-center bs1">Show Watch</h2>
      <div style={pageStyle}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div style={detailsStyle}>
            <h2 className="detailsh2">Details</h2>
            <div className="my-4">
              <span className="text-x1 boldtext">ID:</span>
              <br />
              <hr />
              <span>{watch._id}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 boldtext">Brand:</span>
              <br />
              <hr />
              <span>{watch.brand}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 boldtext">Model:</span>
              <br />
              <hr />
              <span>{watch.model}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 boldtext">Reference No:</span>
              <br />
              <hr />
              <span>{watch.refno}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 boldtext">Year:</span>
              <br />
              <hr />
              <span>{watch.year}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 boldtext">Condition:</span>
              <br />
              <hr />
              <span>{watch.condition}</span>
            </div>
            <div className="my-4">
              <span className="text-x1 boldtext">Price:</span>
              <br />
              <hr />
              <span>{watch.price}</span>
            </div>
            <button className="p-2 bg-sky-300 w-100 text-black mt-2 btn1 my-2 boldtext">
              <Link to={`/watches/booking/${watch._id}`}>Book An Appointment</Link>
            </button>

          </div>
        )}
      </div>
    </DefaultLayout>
  )
}

export default ShowWatch