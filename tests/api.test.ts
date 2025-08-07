import { testClient } from 'hono/testing'
import { describe, it, expect, test } from 'vitest'
import app from '../src/index.js'


describe('Subscription Api Get Request', () => {

    const client = testClient(app)


  test('GET Requests', async () => {
    const res = await app.request('/api/subscription-status?userId=USER_001')
    expect(res.status).toBe(200)
    const data = await res.json()
    expect(data.success).toBe(true)
  })

  test('Post Requests', async () => {
    const res = await app.request('/api/update-subscription', {
        method : 'POST',
        body : JSON.stringify({
           userId : "USER_005",
           newPlan : "free",
           effectiveDate: "2025-07-30T00:00:00Z"
        })
    })
    expect(res.status).toBe(200)
    const data = await res.json()
    console.log(data)
    expect(data.success).toBe(true)
  })
})