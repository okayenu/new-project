
## Delivery Visibility

> Task: Add developer docs for delivery visibility setup, endpoint contracts, and local test commands in `do

### Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

### Endpoint Contracts

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/delivery-visibility` | List all delivery-visibility items |
| GET | `/api/delivery-visibility/:id` | Get single item |
| POST | `/api/delivery-visibility` | Create item |
| PUT | `/api/delivery-visibility/:id` | Update item |
| DELETE | `/api/delivery-visibility/:id` | Remove item |

### Request / Response shapes

**POST /api/delivery-visibility**
```json
{
  "status": "active",
  "metadata": {}
}
```

**Response 201**
```json
{
  "data": {
    "id": "<uuid>",
    "status": "active",
    "createdAt": "<iso>",
    "updatedAt": "<iso>",
    "metadata": {}
  }
}
```

### Local test commands

```bash
npx jest tests/delivery-visibility
npx jest tests/delivery-visibility-integration
```

---

## Review Relevance

> Task: Add developer docs for review relevance setup, endpoint contracts, and local test commands in `docs/

### Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

### Endpoint Contracts

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/review-relevance` | List all review-relevance items |
| GET | `/api/review-relevance/:id` | Get single item |
| POST | `/api/review-relevance` | Create item |
| PUT | `/api/review-relevance/:id` | Update item |
| DELETE | `/api/review-relevance/:id` | Remove item |

### Request / Response shapes

**POST /api/review-relevance**
```json
{
  "status": "active",
  "metadata": {}
}
```

**Response 201**
```json
{
  "data": {
    "id": "<uuid>",
    "status": "active",
    "createdAt": "<iso>",
    "updatedAt": "<iso>",
    "metadata": {}
  }
}
```

### Local test commands

```bash
npx jest tests/review-relevance
npx jest tests/review-relevance-integration
```

---

## Search And Discovery

> Task: Add developer docs for search and discovery setup, endpoint contracts, and local test commands in `d

### Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

### Endpoint Contracts

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/search-and-discovery` | List all search-and-discovery items |
| GET | `/api/search-and-discovery/:id` | Get single item |
| POST | `/api/search-and-discovery` | Create item |
| PUT | `/api/search-and-discovery/:id` | Update item |
| DELETE | `/api/search-and-discovery/:id` | Remove item |

### Request / Response shapes

**POST /api/search-and-discovery**
```json
{
  "status": "active",
  "metadata": {}
}
```

**Response 201**
```json
{
  "data": {
    "id": "<uuid>",
    "status": "active",
    "createdAt": "<iso>",
    "updatedAt": "<iso>",
    "metadata": {}
  }
}
```

### Local test commands

```bash
npx jest tests/search-and-discovery
npx jest tests/search-and-discovery-integration
```

---

## Merchant Operations

> Task: Add developer docs for merchant operations setup, endpoint contracts, and local test commands in `do

### Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

### Endpoint Contracts

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/merchant-operations` | List all merchant-operations items |
| GET | `/api/merchant-operations/:id` | Get single item |
| POST | `/api/merchant-operations` | Create item |
| PUT | `/api/merchant-operations/:id` | Update item |
| DELETE | `/api/merchant-operations/:id` | Remove item |

### Request / Response shapes

**POST /api/merchant-operations**
```json
{
  "status": "active",
  "metadata": {}
}
```

**Response 201**
```json
{
  "data": {
    "id": "<uuid>",
    "status": "active",
    "createdAt": "<iso>",
    "updatedAt": "<iso>",
    "metadata": {}
  }
}
```

### Local test commands

```bash
npx jest tests/merchant-operations
npx jest tests/merchant-operations-integration
```

---

## Community Experiences

> Task: Add developer docs for community experiences setup, endpoint contracts, and local test commands in `

### Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

### Endpoint Contracts

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/community-experiences` | List all community-experiences items |
| GET | `/api/community-experiences/:id` | Get single item |
| POST | `/api/community-experiences` | Create item |
| PUT | `/api/community-experiences/:id` | Update item |
| DELETE | `/api/community-experiences/:id` | Remove item |

### Request / Response shapes

**POST /api/community-experiences**
```json
{
  "status": "active",
  "metadata": {}
}
```

**Response 201**
```json
{
  "data": {
    "id": "<uuid>",
    "status": "active",
    "createdAt": "<iso>",
    "updatedAt": "<iso>",
    "metadata": {}
  }
}
```

### Local test commands

```bash
npx jest tests/community-experiences
npx jest tests/community-experiences-integration
```

---

## Recommendation Quality

> Task: Add developer docs for recommendation quality setup, endpoint contracts, and local test commands in 

### Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

### Endpoint Contracts

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/recommendation-quality` | List all recommendation-quality items |
| GET | `/api/recommendation-quality/:id` | Get single item |
| POST | `/api/recommendation-quality` | Create item |
| PUT | `/api/recommendation-quality/:id` | Update item |
| DELETE | `/api/recommendation-quality/:id` | Remove item |

### Request / Response shapes

**POST /api/recommendation-quality**
```json
{
  "status": "active",
  "metadata": {}
}
```

**Response 201**
```json
{
  "data": {
    "id": "<uuid>",
    "status": "active",
    "createdAt": "<iso>",
    "updatedAt": "<iso>",
    "metadata": {}
  }
}
```

### Local test commands

```bash
npx jest tests/recommendation-quality
npx jest tests/recommendation-quality-integration
```

---

## Checkout Orchestration

> Task: Add developer docs for checkout orchestration setup, endpoint contracts, and local test commands in 

### Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

### Endpoint Contracts

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/checkout-orchestration` | List all checkout-orchestration items |
| GET | `/api/checkout-orchestration/:id` | Get single item |
| POST | `/api/checkout-orchestration` | Create item |
| PUT | `/api/checkout-orchestration/:id` | Update item |
| DELETE | `/api/checkout-orchestration/:id` | Remove item |

### Request / Response shapes

**POST /api/checkout-orchestration**
```json
{
  "status": "active",
  "metadata": {}
}
```

**Response 201**
```json
{
  "data": {
    "id": "<uuid>",
    "status": "active",
    "createdAt": "<iso>",
    "updatedAt": "<iso>",
    "metadata": {}
  }
}
```

### Local test commands

```bash
npx jest tests/checkout-orchestration
npx jest tests/checkout-orchestration-integration
```

---

## Personalization

> Task: Add developer docs for personalization setup, endpoint contracts, and local test commands in `docs/o

### Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

### Endpoint Contracts

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/personalization` | List all personalization items |
| GET | `/api/personalization/:id` | Get single item |
| POST | `/api/personalization` | Create item |
| PUT | `/api/personalization/:id` | Update item |
| DELETE | `/api/personalization/:id` | Remove item |

### Request / Response shapes

**POST /api/personalization**
```json
{
  "status": "active",
  "metadata": {}
}
```

**Response 201**
```json
{
  "data": {
    "id": "<uuid>",
    "status": "active",
    "createdAt": "<iso>",
    "updatedAt": "<iso>",
    "metadata": {}
  }
}
```

### Local test commands

```bash
npx jest tests/personalization
npx jest tests/personalization-integration
```

---

## Delivery Visibility

> Task: Add developer docs for delivery visibility setup, endpoint contracts, and local test commands in `do

### Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

### Endpoint Contracts

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/delivery-visibility` | List all delivery-visibility items |
| GET | `/api/delivery-visibility/:id` | Get single item |
| POST | `/api/delivery-visibility` | Create item |
| PUT | `/api/delivery-visibility/:id` | Update item |
| DELETE | `/api/delivery-visibility/:id` | Remove item |

### Request / Response shapes

**POST /api/delivery-visibility**
```json
{
  "status": "active",
  "metadata": {}
}
```

**Response 201**
```json
{
  "data": {
    "id": "<uuid>",
    "status": "active",
    "createdAt": "<iso>",
    "updatedAt": "<iso>",
    "metadata": {}
  }
}
```

### Local test commands

```bash
npx jest tests/delivery-visibility
npx jest tests/delivery-visibility-integration
```

---

## Review Relevance

> Task: Add developer docs for review relevance setup, endpoint contracts, and local test commands in `docs/

### Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

### Endpoint Contracts

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/review-relevance` | List all review-relevance items |
| GET | `/api/review-relevance/:id` | Get single item |
| POST | `/api/review-relevance` | Create item |
| PUT | `/api/review-relevance/:id` | Update item |
| DELETE | `/api/review-relevance/:id` | Remove item |

### Request / Response shapes

**POST /api/review-relevance**
```json
{
  "status": "active",
  "metadata": {}
}
```

**Response 201**
```json
{
  "data": {
    "id": "<uuid>",
    "status": "active",
    "createdAt": "<iso>",
    "updatedAt": "<iso>",
    "metadata": {}
  }
}
```

### Local test commands

```bash
npx jest tests/review-relevance
npx jest tests/review-relevance-integration
```

---

## Search And Discovery

> Task: Add developer docs for search and discovery setup, endpoint contracts, and local test commands in `d

### Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

### Endpoint Contracts

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/search-and-discovery` | List all search-and-discovery items |
| GET | `/api/search-and-discovery/:id` | Get single item |
| POST | `/api/search-and-discovery` | Create item |
| PUT | `/api/search-and-discovery/:id` | Update item |
| DELETE | `/api/search-and-discovery/:id` | Remove item |

### Request / Response shapes

**POST /api/search-and-discovery**
```json
{
  "status": "active",
  "metadata": {}
}
```

**Response 201**
```json
{
  "data": {
    "id": "<uuid>",
    "status": "active",
    "createdAt": "<iso>",
    "updatedAt": "<iso>",
    "metadata": {}
  }
}
```

### Local test commands

```bash
npx jest tests/search-and-discovery
npx jest tests/search-and-discovery-integration
```

---

## Merchant Operations

> Task: Add developer docs for merchant operations setup, endpoint contracts, and local test commands in `do

### Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

### Endpoint Contracts

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/merchant-operations` | List all merchant-operations items |
| GET | `/api/merchant-operations/:id` | Get single item |
| POST | `/api/merchant-operations` | Create item |
| PUT | `/api/merchant-operations/:id` | Update item |
| DELETE | `/api/merchant-operations/:id` | Remove item |

### Request / Response shapes

**POST /api/merchant-operations**
```json
{
  "status": "active",
  "metadata": {}
}
```

**Response 201**
```json
{
  "data": {
    "id": "<uuid>",
    "status": "active",
    "createdAt": "<iso>",
    "updatedAt": "<iso>",
    "metadata": {}
  }
}
```

### Local test commands

```bash
npx jest tests/merchant-operations
npx jest tests/merchant-operations-integration
```

---

## Community Experiences

> Task: Add developer docs for community experiences setup, endpoint contracts, and local test commands in `

### Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

### Endpoint Contracts

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/community-experiences` | List all community-experiences items |
| GET | `/api/community-experiences/:id` | Get single item |
| POST | `/api/community-experiences` | Create item |
| PUT | `/api/community-experiences/:id` | Update item |
| DELETE | `/api/community-experiences/:id` | Remove item |

### Request / Response shapes

**POST /api/community-experiences**
```json
{
  "status": "active",
  "metadata": {}
}
```

**Response 201**
```json
{
  "data": {
    "id": "<uuid>",
    "status": "active",
    "createdAt": "<iso>",
    "updatedAt": "<iso>",
    "metadata": {}
  }
}
```

### Local test commands

```bash
npx jest tests/community-experiences
npx jest tests/community-experiences-integration
```

---

## Recommendation Quality

> Task: Add developer docs for recommendation quality setup, endpoint contracts, and local test commands in 

### Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

### Endpoint Contracts

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/recommendation-quality` | List all recommendation-quality items |
| GET | `/api/recommendation-quality/:id` | Get single item |
| POST | `/api/recommendation-quality` | Create item |
| PUT | `/api/recommendation-quality/:id` | Update item |
| DELETE | `/api/recommendation-quality/:id` | Remove item |

### Request / Response shapes

**POST /api/recommendation-quality**
```json
{
  "status": "active",
  "metadata": {}
}
```

**Response 201**
```json
{
  "data": {
    "id": "<uuid>",
    "status": "active",
    "createdAt": "<iso>",
    "updatedAt": "<iso>",
    "metadata": {}
  }
}
```

### Local test commands

```bash
npx jest tests/recommendation-quality
npx jest tests/recommendation-quality-integration
```

---

## Checkout Orchestration

> Task: Add developer docs for checkout orchestration setup, endpoint contracts, and local test commands in 

### Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

### Endpoint Contracts

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/checkout-orchestration` | List all checkout-orchestration items |
| GET | `/api/checkout-orchestration/:id` | Get single item |
| POST | `/api/checkout-orchestration` | Create item |
| PUT | `/api/checkout-orchestration/:id` | Update item |
| DELETE | `/api/checkout-orchestration/:id` | Remove item |

### Request / Response shapes

**POST /api/checkout-orchestration**
```json
{
  "status": "active",
  "metadata": {}
}
```

**Response 201**
```json
{
  "data": {
    "id": "<uuid>",
    "status": "active",
    "createdAt": "<iso>",
    "updatedAt": "<iso>",
    "metadata": {}
  }
}
```

### Local test commands

```bash
npx jest tests/checkout-orchestration
npx jest tests/checkout-orchestration-integration
```

---

## Personalization

> Task: Add developer docs for personalization setup, endpoint contracts, and local test commands in `docs/o

### Setup

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

### Endpoint Contracts

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/personalization` | List all personalization items |
| GET | `/api/personalization/:id` | Get single item |
| POST | `/api/personalization` | Create item |
| PUT | `/api/personalization/:id` | Update item |
| DELETE | `/api/personalization/:id` | Remove item |

### Request / Response shapes

**POST /api/personalization**
```json
{
  "status": "active",
  "metadata": {}
}
```

**Response 201**
```json
{
  "data": {
    "id": "<uuid>",
    "status": "active",
    "createdAt": "<iso>",
    "updatedAt": "<iso>",
    "metadata": {}
  }
}
```

### Local test commands

```bash
npx jest tests/personalization
npx jest tests/personalization-integration
```

---
