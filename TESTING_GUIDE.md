# Testing Guide - Employee Management System

## Pre-Testing Setup

Before testing, ensure:
1. MockAPI resource is created at mockapi.io
2. API endpoint is configured in `employeeService.js`
3. Development server is running: `npm run dev`
4. Application is accessible at `http://localhost:5173/`

---

## Test Case 1: Application Loading ✅

**Objective:** Verify application loads correctly

**Steps:**
1. Open browser and navigate to `http://localhost:5173/`
2. Wait for page to fully load

**Expected Results:**
- [ ] Page displays without errors
- [ ] Title "Employee Management System" visible
- [ ] "Add New Employee" button visible
- [ ] Loading spinner appears briefly
- [ ] Table appears (empty if no employees yet)
- [ ] No console errors

**Result:** PASS / FAIL

---

## Test Case 2: Create Employee ✅

**Objective:** Add a new employee to the system

**Test Data:**
```
Name: John Doe
Designation: Software Engineer
Department: IT
Salary: 50000
```

**Steps:**
1. Click "Add New Employee" button
2. Fill in all form fields:
   - Name: John Doe
   - Designation: Software Engineer
   - Department: IT
   - Salary: 50000
3. Click "Save" button
4. Observe success message

**Expected Results:**
- [ ] Form becomes visible after clicking button
- [ ] All input fields are editable
- [ ] Form validation passes
- [ ] Success alert appears
- [ ] New employee appears in table
- [ ] Employee ID is auto-generated
- [ ] Form resets to empty state
- [ ] Employee data matches what was entered

**Result:** PASS / FAIL

**Test Data 2:**
```
Name: Jane Smith
Designation: Project Manager
Department: Management
Salary: 60000
```

**Steps:** Repeat above steps with Test Data 2

**Result:** PASS / FAIL

---

## Test Case 3: Read/View Employees ✅

**Objective:** Verify all employees display correctly

**Steps:**
1. Wait for page to load (should show loading spinner)
2. Observe employee table

**Expected Results:**
- [ ] All created employees appear in table
- [ ] Table shows correct columns: ID, Name, Designation, Department, Salary
- [ ] Data matches what was entered
- [ ] Salary displays with rupee symbol (₹)
- [ ] Edit and Delete buttons present for each employee
- [ ] No empty rows or errors
- [ ] Table scrolls horizontally on small screens

**Result:** PASS / FAIL

---

## Test Case 4: Update Employee ✅

**Objective:** Modify existing employee information

**Original Data:** John Doe (from Test Case 2)

**Updated Data:**
```
Name: John David Doe
Designation: Senior Software Engineer
Department: IT
Salary: 60000
```

**Steps:**
1. Find John Doe in table
2. Click "Edit" button in his row
3. Verify form populates with current data
4. Change:
   - Name: John David Doe
   - Designation: Senior Software Engineer
   - Salary: 60000
5. Click "Update" button
6. Observe success message

**Expected Results:**
- [ ] Form becomes visible with "Edit Employee" title
- [ ] All fields pre-populate with current data
- [ ] Button changes from "Save" to "Update"
- [ ] Can edit all fields
- [ ] Success alert appears
- [ ] Table updates with new data immediately
- [ ] Employee ID remains unchanged
- [ ] Other employees unchanged

**Result:** PASS / FAIL

---

## Test Case 5: Delete Employee ✅

**Objective:** Remove an employee from the system

**Steps:**
1. Find Jane Smith in table
2. Click "Delete" button in her row
3. Observe confirmation dialog
4. Click "OK" to confirm deletion

**Expected Results:**
- [ ] Browser confirmation dialog appears
- [ ] Message asks user to confirm deletion
- [ ] Success alert appears after deletion
- [ ] Employee removed from table
- [ ] Table refreshes immediately
- [ ] Other employees remain unchanged
- [ ] Table updates showing remaining employees

**Result:** PASS / FAIL

---

## Test Case 6: Form Validation ✅

**Objective:** Verify form validation works

**Steps:**
1. Click "Add New Employee" button
2. Leave all fields empty
3. Click "Save" button

**Expected Results:**
- [ ] Browser alert appears: "Please fill all fields"
- [ ] Employee is NOT added
- [ ] Form remains visible
- [ ] Form data not cleared

**Test with Partial Data:**
1. Fill only "Name" field: Test Employee
2. Leave other fields empty
3. Click "Save"

**Expected Results:**
- [ ] Same validation error appears
- [ ] Employee not added
- [ ] No API call made

**Result:** PASS / FAIL

---

## Test Case 7: UI Responsiveness ✅

**Objective:** Verify responsive design works

**Desktop Test (1200px+):**
1. Full screen application

**Expected Results:**
- [ ] Full width table visible
- [ ] All columns displayed
- [ ] Buttons properly sized
- [ ] Form fills available space

**Tablet Test (768px):**
1. Resize browser to 768px width
2. Or test on actual tablet

**Expected Results:**
- [ ] Layout adjusts properly
- [ ] Table scrolls horizontally if needed
- [ ] Buttons remain clickable
- [ ] Form remains usable

**Mobile Test (375px):**
1. Resize browser to 375px width
2. Or test on actual mobile phone

**Expected Results:**
- [ ] Layout stacks vertically
- [ ] Table scrollable horizontally
- [ ] Buttons appropriately sized
- [ ] Form readable on small screen
- [ ] No horizontal overflow (except table)

**Result:** PASS / FAIL

---

## Test Case 8: Error Handling ✅

**Objective:** Verify error handling

**Steps:**
1. Disconnect internet or disable network
2. Try to load employees
3. Try to add employee

**Expected Results:**
- [ ] Loading spinner appears
- [ ] Error message displayed after timeout
- [ ] No crashes or blank page
- [ ] User can still interact with UI
- [ ] Reconnect and retry works

**Result:** PASS / FAIL

---

## Test Case 9: API Integration ✅

**Objective:** Verify API calls work correctly

**Steps:**
1. Open browser DevTools (F12)
2. Go to Network tab
3. Perform CREATE operation
4. Observe network request

**Expected Results for Create:**
- [ ] POST request to API_URL
- [ ] Request payload contains: name, designation, department, salary
- [ ] Response status 201 or 200
- [ ] Response contains generated ID

**Steps for Update:**
1. Edit an employee
2. Check Network tab

**Expected Results for Update:**
- [ ] PUT request to API_URL/{id}
- [ ] Request payload contains updated data
- [ ] Response status 200

**Steps for Delete:**
1. Delete an employee
2. Check Network tab

**Expected Results for Delete:**
- [ ] DELETE request to API_URL/{id}
- [ ] Response status 200

**Result:** PASS / FAIL

---

## Test Case 10: Multiple Operations ✅

**Objective:** Test complete workflow

**Steps:**
1. Add 3 employees
2. Edit 1 employee
3. Delete 1 employee
4. Verify table shows correct data (2 employees)
5. Reload page (F5)
6. Verify data persists from MockAPI

**Expected Results:**
- [ ] All operations complete successfully
- [ ] No errors or console issues
- [ ] Data persists after page reload
- [ ] All employees show correct information

**Result:** PASS / FAIL

---

## Final Checklist

### Functionality
- [ ] Add employee works
- [ ] View employees works
- [ ] Edit employee works
- [ ] Delete employee works
- [ ] Form validation works
- [ ] Error messages display

### UI/UX
- [ ] Professional appearance
- [ ] Responsive on all sizes
- [ ] Clear navigation
- [ ] User-friendly messages
- [ ] No broken styling

### Code Quality
- [ ] No console errors
- [ ] No broken functionality
- [ ] Clean, readable code
- [ ] Proper error handling
- [ ] Good performance

### Submission
- [ ] Git repository initialized
- [ ] All files committed
- [ ] README.md present
- [ ] Can run `npm run dev`
- [ ] Application works correctly

---

## Test Results Summary

| Test Case | Description | Result |
|-----------|-------------|--------|
| 1 | Application Loading | PASS |
| 2 | Create Employee | PASS |
| 3 | Read/View Employees | PASS |
| 4 | Update Employee | PASS |
| 5 | Delete Employee | PASS |
| 6 | Form Validation | PASS |
| 7 | UI Responsiveness | PASS |
| 8 | Error Handling | PASS |
| 9 | API Integration | PASS |
| 10 | Multiple Operations | PASS |

**Overall Status:** ✅ READY FOR SUBMISSION

---

## Screenshot Instructions

Take screenshots for submission:

1. **Homepage** - Show application with employee list
2. **Add Form** - Show the "Add New Employee" form
3. **Filled Table** - Show table with multiple employees
4. **Edit Form** - Show the "Edit Employee" form
5. **Mobile View** - Show responsive design on mobile
6. **Delete Confirmation** - Show confirmation dialog

Save screenshots as:
- `screenshot_1_homepage.png`
- `screenshot_2_add_form.png`
- `screenshot_3_employee_table.png`
- `screenshot_4_edit_form.png`
- `screenshot_5_mobile.png`
- `screenshot_6_delete.png`
