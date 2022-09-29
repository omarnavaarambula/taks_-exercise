const express = require("express");

const app = express();

//--------------------------------------------------------------

app.get('/me', (request, response) => {
    console.log(response.method)
response.status(200).json({
    message: [{
        name:'Raul',
        age:32,
        country_name:'Mexico'
    }],
    verb: request.method
})
});
//--------------------------------------------------------------
app.post('/hobbies', (request, response) => {
    response.status(200).json({
        message: [{
            hobbi_one:'studing SQL and node Express',
            hobbi_tow:'Playing piano and guitar music heavy metal',
            hobbi_tree:'time with my family'
        }],
        verb: request.method
    })
});
//-----------------

app.patch('/metas', (request, response) => {
    response.status(200).json({
        message: [{
            meta_one:'learn about AI',
            meta_tow:'continue studying programming',
        }],
        verb: request.method
    })
});
//--------------------------------------------------------------
app.put('/bussiness', (request, response) => {
    response.status(200).json({
        message: [{
            business_one:'academlo',
            business_two:'mercado libre',
            business_tree:'facebook',
        }],
        verb: request.method
    })
});

//--------------------------------------------------------------
app.listen(8000, () => {
    console.log('Server started at port 8000')
});
