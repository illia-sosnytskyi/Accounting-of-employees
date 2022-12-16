import { useState, useMemo, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import { employeesFromServer } from '../../api/employees';

import './app.css';

const debounce = (f, delay) => {
  let timerId;

  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(f, delay, ...args);
  };
};

function App() {
  const [employees, setEmployees] = useState(employeesFromServer);
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [query, setQuery] = useState('');
  const [appliedQuery, setAppliedQuery] = useState('');
  const [filterOption, setFilterOption] = useState('all');

  const applyQuery = useCallback(
    debounce(setAppliedQuery, 500),
    []
  );

  const countOfEmployees = employees.length;
  const employeesWithPremia = employees.filter(employee => employee.liked).length;

  const filterEmployees = () => {
    const employeesByFilter = employees.filter(employee => {
      switch (filterOption) {
        case 'toRise':
          return employee.liked;

        case 'salaryMoreThen1000':
          return employee.salary > 1000;

        default:
          return employee;
      }
    });

    return employeesByFilter.filter(
      employee => (
        employee.name
          .toLowerCase()
          .includes(appliedQuery
            .trim()
            .toLowerCase()
          )
      ));
  }

  const visibleEmployees = useMemo(
    filterEmployees,
    [appliedQuery, filterOption, employees],
  );

  const onAddEmployee = () => {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      salary: salary,
      increased: false,
      liked: false,
    };

    setEmployees(currentEmployees => (
      [...currentEmployees, newEmployee]
    ));

    setName('');
    setSalary('');
  };

  const onDeleteEmployee = (employeeId) => {
    setEmployees(currentEmployees => (
      currentEmployees.filter(employee => employee.id !== employeeId)))
  };

  const onSetName = (e) => {
    setName(e.target.value);
  }

  const onSetSalary = (e) => {
    setSalary(e.target.value);
  }

  const onToggleProp = (id, prop) => {
    setEmployees(currentEmployees => (
      currentEmployees.map(employee => {
        if (employee.id === id) {
          return {
            ...employee,
            [prop]: !employee[prop],
          }
        }

        return employee;
      })
    ));
  };

  const onChangeSalary = (e, id) => {
    setEmployees(currentEmployees => (
      currentEmployees.map(employee => {
        if (employee.id === id) {
          return {
            ...employee,
            salary: e.target.value,
          }
        }

        return employee;
      })
    ));
  };

  const onChangeSearch = (e) => {
    setQuery(e.target.value);
    applyQuery(e.target.value);
  }

  const onFilterOption = (filterOption) => {
    setFilterOption(filterOption);
  }

  return (
    <div className="app">
      <AppInfo 
        countOfEmployees={countOfEmployees}
        employeesWithPremia={employeesWithPremia}
      />

      <div className="search-panel">
        <SearchPanel
          onChangeSearch={onChangeSearch}
          query={query}
        />
        <AppFilter
          filterOption={filterOption}
          onFilterOption={onFilterOption}
        />
      </div>
      
      <EmployeesList 
        employees={visibleEmployees}
        onDeleteEmployee={onDeleteEmployee}
        onToggleProp={onToggleProp}
        onChangeSalary={onChangeSalary}
      />
      <EmployeesAddForm 
        onAddEmployee={onAddEmployee}
        onSetName={onSetName}
        onSetSalary={onSetSalary}
        name={name}
        salary={salary}
      />
    </div>
  );
}

export default App;
