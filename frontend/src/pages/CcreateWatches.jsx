import React, { useState } from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout';
import DefaultLayout2 from '../components/DefaultLayout2';

const CcreateWatches = () => {

    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [refno, setRefno] = useState('');
    const [condition, setCondition] = useState('');
    const [year, setYear] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaveWatch = () => {
        const data = {
            brand,
            model,
            price,
            image,
            refno,
            condition,
            year,
        };
        setLoading(true);
        axios
            .post('http://localhost:5555/watches', data)
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

    



    return (
        <DefaultLayout2 className='p-4'>
            <BackButton />
            <h2 className='text-3xl my-4 text-center bs1'>Create Watch</h2>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Brand</label>
                    <input
                        type='text'
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                        style={{ backgroundColor: 'black', color: 'white' }}
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Model</label>
                    <input
                        type='text'
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                        style={{ backgroundColor: 'black', color: 'white' }}
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Reference No.</label>
                    <input
                        type='text'
                        value={refno}
                        onChange={(e) => setRefno(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                        style={{ backgroundColor: 'black', color: 'white' }}
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Year</label>
                    <input
                        type='text'
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                        style={{ backgroundColor: 'black', color: 'white' }}
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Condition</label>
                    <input
                        type='text'
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                        style={{ backgroundColor: 'black', color: 'white' }}
                    />
                </div>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Price</label>
                    <input
                        type='text'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                        style={{ backgroundColor: 'black', color: 'white' }}
                    />
                </div>

                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Image</label>
                    <input
                        type='text'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                        style={{ backgroundColor: 'black', color: 'white' }}
                    />
                </div>

                <button className='p-2 bg-sky-300 m-8 btn1' onClick={handleSaveWatch}>
                    Save
                </button>
            </div>
        </DefaultLayout2>
    );
}

export default CcreateWatches