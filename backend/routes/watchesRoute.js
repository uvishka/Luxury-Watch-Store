import express from 'express';
import { Watch } from '../models/watchModel.js';

const router = express.Router();

// Route for Save a new Watch

router.post('/', async (request, response) => {

    try {
        // Check if all required fields are provided
        const requiredFields = ['brand', 'model', 'price', 'image', 'year', 'refno', 'condition'];
        const missingFields = requiredFields.filter(field => !request.body[field]);

        if (missingFields.length > 0) {
            return response.status(400).send({
                message: `Missing required fields: ${missingFields.join(', ')}`,
            });
        }
        const newWatch = {
            brand: request.body.brand,
            model: request.body.model,
            price: request.body.price,
            image: request.body.image,
            year: request.body.year,
            refno: request.body.refno,
            condition: request.body.condition,

        };
        const watch = await Watch.create(newWatch);
        return response.status(201).send(watch);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }

});

// Route for get all watches from database

router.get('/', async (request, response) => {

    try {
        const watches = await Watch.find({});
        return response.status(200).json({
            count: watches.length,
            data: watches

        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }

});

//Route for Get One Watch from database by id

router.get('/:id', async (request, response) => {

    try {

        const { id } = request.params;

        const watch = await Watch.findById(id);

        return response.status(200).json(watch);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }

});

//route for update a Watch

router.put('/:id', async (request, response) => {

    try {
        const requiredFields = ['brand', 'model', 'price', 'image' , 'year', 'refno', 'condition'];
        const missingFields = requiredFields.filter(field => !request.body[field]);

        if (missingFields.length > 0) {
            return response.status(400).send({
                message: `Missing required fields: ${missingFields.join(', ')}`,
            });
        }

        const { id } = request.params;

        // Build the updated watch object with all fields
        const updatedWatch = {
            brand: request.body.brand,
            model: request.body.model,
            price: request.body.price,
            image: request.body.image,
            year: request.body.year,
            refno: request.body.refno,
            condition: request.body.condition,

        };

        const result = await Watch.findByIdAndUpdate(id, updatedWatch);

        if (!result) {
            return response.status(404).json({ message: 'Watch not Found' });
        }
        return response.status(200).json({ message: 'Watch Updated Successfully' });

    } catch (error) {

        console.log(error.message);
        response.status(500).send({ message: error.message });
    }

});

//router for delete a watch

router.delete('/:id', async (request, response) => {

    try {

        const { id } = request.params;

        const result = await Watch.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Watch not Found' });
        }
        return response.status(200).json({ message: 'Watch Deleted Successfully' });

    } catch (error) {

        console.log(error.message);
        response.status(500).send({ message: error.message });
    }

});

export default router;