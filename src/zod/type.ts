import {z} from "zod"



export const SubscriptionSchema = z.object({
    userId : z.string(),
    newPlan : z.enum(['monthly_spiritual', 'annual_spiritual', 'free']),
    effectiveDate : z.string().refine(date => !isNaN(Date.parse(date)), {
      message: "Effective date must be a valid date string"
    })
})