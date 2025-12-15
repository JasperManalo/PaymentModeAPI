# PaymentModeAPI Documentation

## Overview
PaymentModeAPI is a Node.js RESTful API for managing payment modes. This guide will help you set up, run, and use the project.

---

## Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [GitHub account](https://github.com/) (for cloning and version control)
- [Neon](https://neon.tech/) account (for managed PostgreSQL database)

---

## Installation

1. **Clone the repository** (if not already):
   ```sh
   git clone https://github.com/<your-username>/<your-repo>.git
   cd PaymentModeAPI
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure the database:**
   - Create a PostgreSQL database on [Neon](https://neon.tech/).
   - Copy your Neon connection string.
   - Edit `config/db.js` and update the connection string to use your Neon PostgreSQL credentials.

---

## Running the Project

Start the server with:
```sh
npm start
```

By default, the API runs on [http://localhost:3001](http://localhost:3001).

---

## API Documentation

Swagger UI is available for interactive API documentation:
- Visit: [http://localhost:3001/api-docs](http://localhost:3001/api-docs)

---

## Project Structure

- `app.js` - Main application entry point
- `config/` - Configuration files (e.g., database connection)
- `controllers/` - Business logic for payment modes
- `models/` - Database models (PostgreSQL/Sequelize or similar)
- `routes/` - API route definitions
- `swaggerdocs/` - Swagger documentation setup

---

## Example Usage

### Get All Payment Modes
```
GET /api/paymentmodes
```

### Add a Payment Mode
```
POST /api/paymentmodes
Content-Type: application/json
{
   "name": "Credit Card"
}
```

### Update a Payment Mode
```
PUT /api/paymentmodes/:id
Content-Type: application/json
{
   "name": "Updated Name"
}
```

---

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## License
Specify your license here.
