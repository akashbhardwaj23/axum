import { Hono } from 'hono'
import { logger } from 'hono/logger';
import { SubscriptionData } from './response/data.js';


const app = new Hono()

app.use('/api/*', logger());


app.get('/api/subscription-status', (c) => {
  const userId = c.req.query('userId');

  if(!userId){
    return c.json({error : "UserId is Required"}, 403);
  }


  const userSubscription = SubscriptionData.find((subscription) => subscription.subscription.userId === userId);


  if(!userSubscription){
    return c.json({ error: 'User subscription not found'}, 404)
  }

  return c.json(userSubscription);
})



export default app
