module.exports = async function (context, req) {
    context.log('removecar');

    if (req.body && req.body.carID) {
        
        let cars = [];

        try {
            cars = require('../cars.json');
        } catch (error) {
            console.log.error('Error reading cars', error);
            context.res = {
                status: 500,
                body: 'Error'
            };
            return;
        }
        const carIDToRemove = req.params.id;
        const index = cars.filter(car => car.id === carIDToRemove);
        //cars.splice(index, 1);

        context.res = {
            status: 200,
            body: 'Car removed successfully'
        };
    } else {
        context.res = {
            status: 400,
            body: 'CarID is required'
        };
    }
}