# SmartSpend AI – Intelligent Expense Tracking & Financial Insights Platform

## Project Overview

SmartSpend AI is a next-generation expense management platform designed to help users track, analyze, and optimize their spending habits through intelligent financial insights.

Unlike traditional expense trackers, SmartSpend AI combines cloud-based expense management, real-time analytics, and AI-driven features to provide users with a smarter approach to personal finance. The platform enables users to record expenses, monitor spending patterns, visualize financial trends, and receive intelligent recommendations for better budgeting decisions.

The project is built using the MERN stack with MongoDB Atlas for cloud storage and is designed to support future AI-powered enhancements such as receipt scanning, automated categorization, spending prediction, and personalized financial recommendations.

---

## Key Features

### Expense Management

* Add, view, and manage expenses
* Categorize expenses by type
* Real-time expense tracking
* Persistent cloud-based storage using MongoDB Atlas

### Financial Analytics

* Total spending calculation
* Category-wise expense analysis
* Monthly and yearly spending summaries
* Interactive charts and visualizations

### Smart Budgeting

* Budget monitoring system
* Spending alerts and notifications
* Savings goal tracking
* Expense trend analysis

### Cloud-Based Architecture

* Secure MongoDB Atlas integration
* RESTful API architecture
* Scalable backend design
* Cross-platform accessibility

### Future AI Enhancements

* OCR-based receipt scanning
* Automatic expense extraction from bills
* ML-powered expense categorization
* Personalized budgeting recommendations
* Spending prediction using machine learning
* AI financial assistant chatbot

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* JavaScript (ES6+)

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Development Tools

* Visual Studio Code
* Git & GitHub
* Postman / Thunder Client

---

## System Architecture

User Interface (React.js)

↓

REST API (Express.js)

↓

Business Logic Layer

↓

MongoDB Atlas Database

↓

Analytics & Insights Engine

---

## Project Structure

SMART-EXPENSE-TRACKER/

├── frontend/

│ ├── src/

│ │ ├── components/

│ │ ├── pages/

│ │ ├── App.jsx

│ │ └── main.jsx

│ ├── package.json

│ └── vite.config.js

│

├── backend/

│ ├── config/

│ │ └── db.js

│ ├── controllers/

│ │ └── expenseController.js

│ ├── models/

│ │ └── Expense.js

│ ├── routes/

│ │ └── expenseRoutes.js

│ ├── server.js

│ └── .env

│

└── README.md

---

## API Endpoints

### Add Expense

POST /api/expenses

Request Body:

```json
{
  "expenseName": "Lunch",
  "amount": 250,
  "category": "Food"
}
```

### Get All Expenses

GET /api/expenses

### Delete Expense

DELETE /api/expenses/:id

---

## Database Schema

### Expense

```javascript
{
  expenseName: String,
  amount: Number,
  category: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

## Future Scope

SmartSpend AI is designed as a scalable financial management platform. Planned enhancements include:

* AI-powered receipt digitization
* OCR-based bill processing
* Machine Learning expense prediction
* Personalized savings recommendations
* Financial health scoring
* AI chatbot for financial guidance
* PDF and CSV report generation
* Email-based monthly financial summaries

---

## Installation

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
node server.js
```

### Environment Variables

```env
PORT=5001

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

---

## Author

P. Jyothika

Computer Science Engineering

CVR College of Engineering

---

## License

This project is licensed under the MIT License.
