# Notes App API

A RESTful API for managing notes with full CRUD operations built with Node.js, Express, and MongoDB.

## Live Demo

**Base URL:** https://notes-app-assignment-0gep.onrender.com

## Postman Documentation

https://rishab11250-8664884.postman.co/workspace/Rishab's-Workspace~91eef1b1-6e79-4e01-849a-bfcde19fed8d/documentation/50839472-f22e9d9c-0652-4b07-99de-b95140b866b1

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/notes` | Create a single note |
| POST | `/api/notes/bulk` | Create multiple notes |
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get note by ID |
| PUT | `/api/notes/:id` | Replace a note |
| PATCH | `/api/notes/:id` | Update specific fields |
| DELETE | `/api/notes/:id` | Delete a note |
| DELETE | `/api/notes/bulk` | Delete multiple notes |

## Note Schema

```json
{
  "title": "string (required)",
  "content": "string (required)",
  "category": "work | personal | study (default: personal)",
  "isPinned": "boolean (default: false)"
}
```

## API Response Format

```json
{
  "success": true,
  "message": "Success message",
  "data": { ... }
}
```

## Examples

### Create Note
```bash
POST /api/notes
Content-Type: application/json

{
  "title": "Meeting Notes",
  "content": "Discussed project timeline",
  "category": "work",
  "isPinned": true
}
```

### Create Bulk Notes
```bash
POST /api/notes/bulk
Content-Type: application/json

{
  "notes": [
    { "title": "Note 1", "content": "Content 1", "category": "work" },
    { "title": "Note 2", "content": "Content 2", "category": "personal" }
  ]
}
```

### Update Specific Fields
```bash
PATCH /api/notes/:id
Content-Type: application/json

{
  "isPinned": false
}
```

### Delete Bulk Notes
```bash
DELETE /api/notes/bulk
Content-Type: application/json

{
  "ids": ["noteId1", "noteId2", "noteId3"]
}
```

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (Mongoose)
- **Deployment:** Render

## Getting Started

### Prerequisites
- Node.js
- MongoDB connection string

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd notes-app-assignment

# Install dependencies
pnpm install

# Create .env file
cp .env.example .env
# Edit .env with your MongoDB URI

# Run development server
pnpm run dev

# Run production server
pnpm start
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```
