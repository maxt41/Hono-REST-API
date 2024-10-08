import { Hono } from 'hono';

const notes = new Hono();

notes.get('/:id', (c) => {
    const id: number = parseInt(c.req.param('id'), 10);

    if (isNaN(id)) {
        return c.json({ error: 'Provided ID was not an integer' })
    }

    return c.json({ note: `Note ID: ${id}` }, 200)
});

notes.get('/', (c) => {
    const notes = [{ id: 1, note: 'Hello world!' }, { id: 2, note: 'Goodbye world?' }]
    return c.json({ notes: notes })
})

export default notes;