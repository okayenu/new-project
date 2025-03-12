
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
