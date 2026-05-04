# Employee Management System - Setup Guide

## Overview

This project is a complete Employee Management System built with:
- **Vue.js 3** (Frontend Framework)
- **Axios** (HTTP Client)
- **MockAPI** (Fake REST API)
- **Bootstrap 5** (UI Framework)

## Assignment Requirements Checklist

### Part 1: Vue Project Setup ✅
- [x] Created Vue project with Vite
- [x] Installed Axios for API calls
- [x] Installed Bootstrap for styling
- [x] Configured main.js with Bootstrap CSS

### Part 2: MockAPI Integration ✅
- [x] Created `employeeService.js` with API endpoints
- [x] Implemented HTTP methods (GET, POST, PUT, DELETE)
- [x] Set up API URL configuration

### Part 3: Application Development ✅
- [x] Created employee form (Add & Edit)
- [x] Implemented employee data table
- [x] CRUD Operations:
  - [x] **Create** - Add new employees
  - [x] **Read** - Display all employees
  - [x] **Update** - Edit employee information
  - [x] **Delete** - Remove employees

### Part 4: UI Design ✅
- [x] Bootstrap responsive layout
- [x] Mobile-friendly design
- [x] Professional styling
- [x] User-friendly interface

### Part 5: Code Quality ✅
- [x] Clean and readable Vue code
- [x] Proper component structure
- [x] Error handling
- [x] Form validation

## Step-by-Step Setup

### Step 1: Create MockAPI Resource

1. Go to [MockAPI.io](https://mockapi.io/)
2. Click "Create your first API"
3. Enter project name: `employees-system`
4. Click "Create"
5. Click "Create Resource"
6. Name it: `employees`
7. Click "Create" with default settings

### Step 2: Add Fields to MockAPI Resource

In MockAPI dashboard, for the `employees` resource, ensure these fields exist:
- `name` (string)
- `designation` (string)
- `department` (string)
- `salary` (number)

### Step 3: Get Your API URL

Your API URL will look like:
```
https://YOUR_PROJECT_ID.mockapi.io/api/employees
```

### Step 4: Update employeeService.js

Open `src/services/employeeService.js` and replace the API_URL:

```javascript
const API_URL = 'https://YOUR_PROJECT_ID.mockapi.io/api/employees'
```

### Step 5: Run the Application

```bash
npm install
npm run dev
```

Visit `http://localhost:5173/` in your browser.

## Testing the Application

### Adding an Employee
1. Click "Add New Employee"
2. Fill in the form:
   - Name: John Doe
   - Designation: Software Engineer
   - Department: IT
   - Salary: 50000
3. Click "Save"
4. Should see success message and employee in table

### Viewing Employees
- All employees display in the table on page load
- Shows Employee ID, Name, Designation, Department, and Salary

### Updating an Employee
1. Click "Edit" button on any employee
2. Form will populate with employee data
3. Make changes
4. Click "Update"
5. Table updates with new data

### Deleting an Employee
1. Click "Delete" button on any employee
2. Confirm deletion
3. Employee removed from table

## File Structure

```
empflow-app/
├── src/
│   ├── App.vue                 # Main application component
│   ├── main.js                 # Vue app entry point
│   ├── style.css               # Global styles
│   ├── services/
│   │   └── employeeService.js  # API service
│   └── assets/
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
├── index.html                  # HTML entry point
└── README.md                   # Project documentation
```

## Troubleshooting

### API Connection Error
- Check if API_URL is correct
- Ensure internet connection is active
- Verify MockAPI project is created

### Form Not Submitting
- Ensure all fields are filled
- Check browser console for errors
- Verify API endpoint is accessible

### Data Not Displaying
- Check if employees exist in MockAPI
- Verify API_URL configuration
- Check browser network tab for API calls

## Key Features

1. **Form Validation** - All fields required before submission
2. **Loading States** - Spinner shown while fetching data
3. **Error Handling** - Try-catch blocks for API calls
4. **Responsive Design** - Works on mobile and desktop
5. **User Feedback** - Alert messages for success/error

## Important Notes

- MockAPI has rate limits, so test carefully
- All data is stored in MockAPI, not locally
- Requires internet connection to function
- Each instance is separate on MockAPI

## GitHub Repository

Instructions for GitHub submission:

1. Initialize git (already done)
2. Create GitHub repository
3. Push code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/empflow-app.git
   git branch -M main
   git push -u origin main
   ```
4. Include screenshots of:
   - Application homepage
   - Add employee form
   - Updated employee table
   - Edit form
   - Delete confirmation

## Support

If you encounter issues:
1. Check browser console (F12 > Console tab)
2. Verify API endpoint in Network tab
3. Ensure all dependencies are installed
4. Clear browser cache and reload
