const fs = require('fs');
module.exports = async function (context, req) {
    context.log('addcar');
    if (req.body){
        let cars = [];
        try{
            cars = require('../cars.json');
        } catch (error){
            console.log.error('error reading car'.error)
            context.res = {
                status: 500,
                body: 'Error'
            };
            return;
        }
        const newCar = req.body;
        cars.push(newCar);

    try{
    fs.writeFileSync('../cars.json',JSON.stringify(cars,null,4));
    }catch(error){
        console.log.error('error writing car',error)
            context.res = {
                status: 500,
                body: 'Error'
            };
            return;
    }
    

    context.res = {
        status: 201,
        body: 'new car'
    };
}else{
    context.res={
        body: responseMessage
    };
}
};