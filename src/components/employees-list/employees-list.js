import React from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = React.memo(({
  employees,
  onDeleteEmployee,
  onToggleProp,
  onChangeSalary
}) => {
  console.log('render')
  return (
    <ul className="app-list list-group">
      {
        employees.map(employee => (
          <EmployeesListItem
            key={employee.id}
            employee={employee}
            onDeleteEmployee={() => onDeleteEmployee(employee.id)}
            onToggleProp={(e) => {
              onToggleProp(
                employee.id,
                e.currentTarget.getAttribute('data-toggle')
              )
            }}
            onChangeSalary={(e) => onChangeSalary(e, employee.id)}
          />
        ))
      }
    </ul>
  );
});

export default EmployeesList;
