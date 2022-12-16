import cn from 'classnames';
import './employees-list-item.css';

const EmployeesListItem = ({
  employee,
  onDeleteEmployee,
  onToggleProp,
  onChangeSalary,
}) => {
  const {
    name,
    salary,
    increased,
    liked
  } = employee;

  return (
    <li className={
      cn("list-group-item d-flex justify-content-between", {
        increase: increased,
        like: liked,
      })
    }
    >
      <span
        className="list-group-item-label"
        data-toggle="liked"
        onClick={onToggleProp}
      >
        {name}
      </span>

      <input
        type="text"
        className="list-group-item-input"
        value={salary}
        onChange={onChangeSalary}
      />

      <div className='d-flex justify-content-center align-items-center'>
        <button 
          type="button"
          className="btn-cookie btn-sm"
          data-toggle="increased"
          onClick={onToggleProp}
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button 
          type="button"
          className="btn-trash btn-sm"
          onClick={onDeleteEmployee}
        >
          <i className="fas fa-trash"></i>
        </button>

        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}

export default EmployeesListItem;
