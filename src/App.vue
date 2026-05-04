<script setup>
import { ref, onMounted } from 'vue'
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from './services/employeeService'

const employees = ref([])
const loading = ref(false)
const error = ref(null)
const showForm = ref(false)
const editingId = ref(null)

const formData = ref({
  name: '',
  designation: '',
  department: '',
  salary: ''
})

const resetForm = () => {
  formData.value = {
    name: '',
    designation: '',
    department: '',
    salary: ''
  }
  editingId.value = null
  showForm.value = false
}

const loadEmployees = async () => {
  loading.value = true
  error.value = null
  try {
    employees.value = await getEmployees()
  } catch (err) {
    error.value = 'Failed to load employees'
  } finally {
    loading.value = false
  }
}

const handleSubmit = async () => {
  if (!formData.value.name || !formData.value.designation || !formData.value.department || !formData.value.salary) {
    alert('Please fill all fields')
    return
  }

  try {
    if (editingId.value) {
      await updateEmployee(editingId.value, formData.value)
      alert('Employee updated successfully')
    } else {
      await createEmployee(formData.value)
      alert('Employee added successfully')
    }
    await loadEmployees()
    resetForm()
  } catch (err) {
    alert('Error saving employee')
  }
}

const editEmployee = (employee) => {
  editingId.value = employee.id
  formData.value = { ...employee }
  showForm.value = true
}

const removeEmployee = async (id) => {
  if (confirm('Are you sure you want to delete this employee?')) {
    try {
      await deleteEmployee(id)
      await loadEmployees()
      alert('Employee deleted successfully')
    } catch (err) {
      alert('Error deleting employee')
    }
  }
}

onMounted(() => {
  loadEmployees()
})
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12">
        <h1 class="mb-4">Employee Management System</h1>

        <div v-if="error" class="alert alert-danger">
          {{ error }}
        </div>

        <button
          v-if="!showForm"
          @click="showForm = true"
          class="btn btn-primary mb-3"
        >
          Add New Employee
        </button>

        <!-- Form Section -->
        <div v-if="showForm" class="card mb-4">
          <div class="card-body">
            <h5 class="card-title">{{ editingId ? 'Edit Employee' : 'Add New Employee' }}</h5>
            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <label for="name" class="form-label">Name:</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  v-model="formData.name"
                  placeholder="Enter employee name"
                />
              </div>

              <div class="mb-3">
                <label for="designation" class="form-label">Designation:</label>
                <input
                  type="text"
                  class="form-control"
                  id="designation"
                  v-model="formData.designation"
                  placeholder="Enter designation"
                />
              </div>

              <div class="mb-3">
                <label for="department" class="form-label">Department:</label>
                <input
                  type="text"
                  class="form-control"
                  id="department"
                  v-model="formData.department"
                  placeholder="Enter department"
                />
              </div>

              <div class="mb-3">
                <label for="salary" class="form-label">Salary:</label>
                <input
                  type="number"
                  class="form-control"
                  id="salary"
                  v-model="formData.salary"
                  placeholder="Enter salary"
                />
              </div>

              <button type="submit" class="btn btn-success me-2">
                {{ editingId ? 'Update' : 'Save' }}
              </button>
              <button type="button" @click="resetForm" class="btn btn-secondary">
                Cancel
              </button>
            </form>
          </div>
        </div>

        <!-- Employees Table -->
        <div v-if="!loading" class="table-responsive">
          <table class="table table-striped table-hover">
            <thead class="table-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="employees.length === 0">
                <td colspan="6" class="text-center">No employees found</td>
              </tr>
              <tr v-for="emp in employees" :key="emp.id">
                <td>{{ emp.id }}</td>
                <td>{{ emp.name }}</td>
                <td>{{ emp.designation }}</td>
                <td>{{ emp.department }}</td>
                <td>₹{{ emp.salary }}</td>
                <td>
                  <button
                    @click="editEmployee(emp)"
                    class="btn btn-sm btn-warning me-2"
                  >
                    Edit
                  </button>
                  <button
                    @click="removeEmployee(emp.id)"
                    class="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div v-if="loading" class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: #333;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
}
</style>
