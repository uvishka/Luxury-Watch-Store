import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout';

const EditWatches = () => {

  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [refno, setRefno] = useState('');
  const [condition, setCondition] = useState('');
  const [year, setYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/watches/${id}`)
      .then((response) => {
        const { brand, model, price, image, refno, year, condition } = response.data;
        setBrand(brand);
        setModel(model);
        setPrice(price);
        setImage(image);
        setRefno(refno);
        setYear(year);
        setCondition(condition);
        setLoading(false);
      })
      .catch((error) => {

        setLoading(false);
        alert('An error happend.Please Check console');
        console.log(error);
      });
  }, [])

  const handleEditWatch = () => {
    const data = {
      brand,
      model,
      price,
      image,
      refno,
      year,
      condition,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/watches/${id}`, data)
      .then(() => {

        setLoading(false);
        navigate('/');

      })
      .catch((error) => {

        setLoading(false);
        alert('An error happend.Please Check console');
        console.log(error);
      });
  };
  const pageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',

  };



  return (
    <div style={pageStyle}>
      <DefaultLayout className='p-4'>
        <BackButton />
        <h2 className='text-3x1 my-4 text-center bs1'>Edit Watch</h2>
        {loading ? <Spinner /> : ''}
        <div className='flex flex-col border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          <div className='my-4'>
            <label className='text-xl mr-4 text-black-500'>Brand</label>
            <input
              type='text'
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
              style={{ backgroundColor: 'black', color: 'white' }}
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-black-500'>Model</label>
            <input
              type='text'
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
              style={{ backgroundColor: 'black', color: 'white' }}
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-white-500'>Reference No.</label>
            <input
              type='text'
              value={refno}
              onChange={(e) => setRefno(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
              style={{ backgroundColor: 'black', color: 'white' }}
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-white-500'>Year</label>
            <input
              type='text'
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
              style={{ backgroundColor: 'black', color: 'white' }}
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-black-500'>Condition</label>
            <input
              type='text'
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
              style={{ backgroundColor: 'black', color: 'white' }}
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-white-500'>Price</label>
            <input
              type='text'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
              style={{ backgroundColor: 'black', color: 'white' }}
            />
          </div>
          <div className='my-4'>
            <label className='text-xl mr-4 text-white-500'>Image</label>
            <input
              type='text'
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className='border-2 border-gray-500 px-4 py-2 w-full'
              style={{ backgroundColor: 'black', color: 'white' }}
            />
          </div>

          <button className='p-2 bg-sky-300 m-8 btn1' onClick={handleEditWatch}>
            Save
          </button>
        </div>
      </DefaultLayout>
    </div>
  );

}

export default EditWatches