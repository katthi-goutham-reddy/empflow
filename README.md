# Employee Management System

A simple Employee Management Web Application built with Vue.js, Axios, and Bootstrap that performs CRUD operations using MockAPI.

## Features

- ✅ Add new employees
- ✅ View all employees in a table
- ✅ Update employee information
- ✅ Delete employees
- ✅ Responsive Bootstrap UI
- ✅ Error handling and validation

## Employee Data Fields

- Employee ID
- Name
- Designation
- Department
- Salary

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure MockAPI

1. Go to [MockAPI.io](https://mockapi.io/)
2. Create a new project
3. Create a new resource called `employees` with the following fields:
   - `name` (string)
   - `designation` (string)
   - `department` (string)
   - `salary` (number)
4. Copy your API endpoint URL

### 3. Update API Endpoint

Open `src/services/employeeService.js` and update the `API_URL` variable with your MockAPI endpoint:

```javascript
const API_URL = 'https://YOUR_MOCKAPI_URL/api/employees'
```

### 4. Run the Application

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## Project Structure

```
src/
├── App.vue                    # Main application component
├── services/
│   └── employeeService.js    # API calls to MockAPI
├── main.js                    # Vue app entry point
└── style.css                  # Global styles
```

## Technology Stack

- **Vue.js 3** - Frontend framework
- **Vite** - Build tool
- **Axios** - HTTP client
- **Bootstrap 5** - UI framework
- **MockAPI** - Fake REST API

## CRUD Operations

### Create
Click "Add New Employee" button, fill the form, and click Save.

### Read
View all employees in the table on the home page.

### Update
Click the "Edit" button next to any employee to modify their information.

### Delete
Click the "Delete" button to remove an employee from the system.

## Notes

- All data is stored in MockAPI (not persistent across server restarts)
- Requires internet connection to access MockAPI
- Form validation ensures all fields are filled before submission
