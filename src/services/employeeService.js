import axios from 'axios'

// Note: You need to create your own MockAPI resource at mockapi.io
// Create a resource called "employees" with fields: id, name, designation, department, salary
const API_URL = 'https://67d0cdc9cf994d8f2e0b9ee3.mockapi.io/api/employees'

export const getEmployees = async () => {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    console.error('Error fetching employees:', error)
    throw error
  }
}

export const createEmployee = async (employee) => {
  try {
    const response = await axios.post(API_URL, employee)
    return response.data
  } catch (error) {
    console.error('Error creating employee:', error)
    throw error
  }
}

export const updateEmployee = async (id, employee) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, employee)
    return response.data
  } catch (error) {
    console.error('Error updating employee:', error)
    throw error
  }
}

export const deleteEmployee = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`)
    return response.data
  } catch (error) {
    console.error('Error deleting employee:', error)
    throw error
  }
}
