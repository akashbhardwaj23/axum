# PowerOfAum Subscription Status Management

## 📋 Overview
This repository contains backend API module for managing user subscription statuses.

**Developer**: Akash Bhardwaj  
**Repository**: [candidate-00X-powerofaum-module-subscriptionstatus](https://github.com/akashbhardwaj23/candidate-00X-powerofaum-module-subscriptionstatus)

## 🔗 Quick Links

- **GitHub Repository**: [akashbhardwaj23/candidate-00X-powerofaum-module-subscriptionstatus](https://github.com/akashbhardwaj23/candidate-00X-powerofaum-module-subscriptionstatus)
- **Live Demo**: [Vercel Deployment](https://candidate-00-x-powerofaum-module-su-two.vercel.app/)
- **API Base URL**: `https://candidate-00-x-powerofaum-module-su-two.vercel.app/`

## 🚀 Features

- **Get Subscription Status**: Retrieve current subscription information for any user
- **Update Subscription**: Modify user subscription plans with effective date tracking
- **In-Memory Storage**: Mock data storage for development and testing
- **RESTful API**: Clean, predictable API endpoints
- **Error Handling**: Comprehensive error responses
- **CORS Support**: Cross-origin resource sharing enabled

## 📡 API Endpoints

### 1. Get Subscription Status
```http
GET /api/subscription-status?userId=USER_001
```

**Response:**
```json
{
  "success": true,
  "subscription": {
    "userId": "USER_001",
    "plan": "annual_spiritual",
    "status": "active",
    "expiresAt": "2026-06-05T00:00:00Z"
  }
}
```

### 2. Update Subscription
```http
POST /api/update-subscription
Content-Type: application/json

{
  "userId": "USER_001",
  "newPlan": "monthly_spiritual",
  "effectiveDate": "2025-07-01T00:00:00Z"
}
```

**Response:**
```json
{
  "success": true,
  "subscription": {
    "userId": "USER_001",
    "plan": "monthly_spiritual",
    "status": "active",
    "effectiveDate": "2025-07-01T00:00:00Z"
  }
}
```

## 🛠️ Tech Stack

- **Runtime**: Bun.js
- **Framework**: Hono.js
- **Language**: TypeScript
- **Storage**: In-memory (development)
- **Deployment**: Vercel

## 📁 Project Structure

```
powerofaum-module-e/
├── src/
│   ├── index.ts            # Development Server
│   ├── types/              # TypeScript type definitions
│   ├── routes/             # API route handlers
│   ├── zod/types           # Handle Input Validations
│   └── data/               # Mock data store
├── tests/
│   └── api.test.ts         # API tests
├── docs/
│   ├── postman.json
├── package.json
├── tsconfig.json
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Bun.js (latest version)
- Node.js 18+ (for deployment)
- Git,
- Hono

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/akashbhardwaj23/candidate-00X-powerofaum-module-subscriptionstatus.git
   cd candidate-00X-powerofaum-module-subscriptionstatus
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start development server:**
   ```bash
   bun run dev
   ```

4. **Server will be running at:**
   ```
   http://localhost:3000
   ```

### Testing the API

#### Using curl:

**Test locally:**
```bash
curl "http://localhost:3000/api/subscription-status?userId=USER_001"
```

**Test production:**
```bash
curl "https://candidate-00x-powerofaum-module-subscriptionstatus.vercel.app/api/subscription-status?userId=USER_001"
```

**Update subscription locally:**
```bash
curl -X POST http://localhost:3000/api/update-subscription \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "USER_001",
    "newPlan": "monthly_spiritual",
    "effectiveDate": "2025-07-01T00:00:00Z"
  }'
```

**Update subscription production:**
```bash
curl -X POST https://candidate-00x-powerofaum-module-subscriptionstatus.vercel.app/api/update-subscription \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "USER_001",
    "newPlan": "monthly_spiritual",
    "effectiveDate": "2025-07-01T00:00:00Z"
  }'
```


### Environment Variables
No environment variables required for this module (uses in-memory storage).

## 📊 API Documentation

### Error Responses

**400 Bad Request:**
```json
{
  "success": false,
  "error": "Missing required field: userId"
}
```

**404 Not Found:**
```json
{
  "success": false,
  "error": "User not found"
}
```

**403 Not Available**
```json
{
  "success": false,
  "error": "Not Available"
}
```

### Data Models

**Subscription:**
```typescript
interface Subscription {
  userId: string;
  plan: 'free' | 'monthly_spiritual' | 'annual_spiritual';
  status: 'active' | 'inactive' | 'expired' | 'cancelled';
  expiresAt?: string;
  effectiveDate?: string;
  createdAt: string;
  updatedAt: string;
}
```

## 🧪 Testing

### Run Tests
```bash
bun run test
```

### Import Postman Collection
Import `docs/postman.json` into Postman for comprehensive API testing.


## 🔒 Security Considerations

- Input validation on all endpoints
- CORS configured for cross-origin requests
- Error messages don't expose sensitive information

## 🚧 Limitations & Future Enhancements

**Current Limitations:**
- In-memory storage (data lost on restart)
- No authentication/authorization
- No database persistence

**Planned Enhancements:**
- Database integration (PostgreSQL/MongoDB)
- JWT-based authentication

## 📄 License

This project is proprietary software for PowerOfAum platform.

## 🤝 Contributing

This is Not for Contribution


**Repository**: [akashbhardwaj23/candidate-00X-powerofaum-module-subscriptionstatus](https://github.com/akashbhardwaj23/candidate-00X-powerofaum-module-subscriptionstatus)  
**Live Demo**: [https://candidate-00-x-powerofaum-module-su-two.vercel.app](https://candidate-00-x-powerofaum-module-su-two.vercel.app/)  
**Developer**: Akash Bhardwaj  
**Module**: Subscription Status Management  
**Version**: 1.0.0