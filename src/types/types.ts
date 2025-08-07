
export type SubscriptionSchema = {
    success: boolean,
    subscription: {
      userId: string,
      plan: string,
      status: string,
      expiresAt: string
    }
}