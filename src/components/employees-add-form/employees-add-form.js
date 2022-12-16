import './employees-add-form.css';

const EmployeesAddForm = ({
  onAddEmployee,
  onSetName,
  onSetSalary,
  salary,
  name,
}) => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    onAddEmployee();
  }

  return (
    <div className="app-add-form">
      <h3>Add new employee</h3>
      <form
        className="add-form d-flex"
        onSubmit={handleSubmitForm}
      >
        <input
          required
          type="text"
          className="form-control new-post-label"
          placeholder="Name ?"
          name="name"
          value={name}
          onChange={onSetName} 
        />
        <input
          required
          type="number"
          className="form-control new-post-label"
          placeholder="Salary in $ ?"
          name="salary"
          value={salary}
          onChange={onSetSalary} 
        />

        <button
          type="submit"
          className="btn btn-outline-light"
        >
          Add employee
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
