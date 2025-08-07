import { Hono } from 'hono'
import { logger } from 'hono/logger';
import { SubscriptionData } from './response/data.js';
import { SubscriptionSchema } from './zod/type.js';


const app = new Hono()

app.use('/api/*', logger());


app.get('/api/subscription-status', (c) => {
  const userId = c.req.query('userId');

  if (!userId) {
    return c.json({ error: "UserId is Required" }, 403);
  }


  const userSubscription = SubscriptionData.find((subscription) => subscription.subscription.userId === userId);



  if (!userSubscription) {
    return c.json({ error: 'User subscription not found' }, 404)
  }

  return c.json(userSubscription);
})


app.post('/api/update-subscription', async (c) => {
  const body = await c.req.json();
  console.log(body)
  const parsedData = SubscriptionSchema.safeParse(body);

  console.log(c.body);
  if (!parsedData.success) {
    return c.json({
      error: "Invalid Inputs"
    })
  }

  const { userId, newPlan, effectiveDate } = parsedData.data;


  const userSubscription = SubscriptionData.find((subscription) => subscription.subscription.userId === userId);


  if(!userSubscription){
    
    
    return c.json({
      error : "User Subscription is not found"
    }, 403);


  }

  userSubscription.subscription.plan = newPlan;
  userSubscription.subscription.expiresAt = effectiveDate;

  const currentdate = new Date()

  if(currentdate > new Date(userSubscription.subscription.expiresAt)){
    userSubscription.subscription.status = 'expired';   
  } else {
    userSubscription.subscription.status = 'active';   
  }


  return c.json(userSubscription);

})


export default app
