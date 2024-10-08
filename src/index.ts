import { Hono } from 'hono';
import notes from './routes/notes';

const app = new Hono();

// Use routes from notes directory
app.route('/notes', notes);

app.notFound((c) => {
  return c.json({ error: '404 Not Found' }, 404);
});

export default app;