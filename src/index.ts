import { Hono } from 'hono'
import { logger } from 'hono/logger';

const app = new Hono()

app.use('/api/*', logger());

app.get('/', (c) => {
  return c.json({
    message : "hello"
  })
})

export default app
