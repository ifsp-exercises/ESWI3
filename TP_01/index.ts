import express from 'express';

import routes from './routes';

const app = express();
app.use(express.json());

app.use('/v1', routes);

app.get('/', (_, response) =>
  response.json({
    ok: true,
    message: 'Access /v1',
    available_routes: ['/products', '/clients'],
  }),
);

app.listen(3333, () => console.log('Server is running at 3333'));
