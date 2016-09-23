
import express from 'express';

import main_routes from './routes/main.routes';
import api_routes from './routes/api.routes';
import bootstrap from './helpers/bootstrap';


const app = express();

//bootstrap the app
bootstrap();


app.use('/api', api_routes);
app.use(main_routes);

const server = app.listen(3000, () => {

  const {address, port} = server.address();


  console.log(`Example app listening at http://${address}:${port}`);
});
