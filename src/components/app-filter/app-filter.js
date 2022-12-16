import cn from 'classnames';
import "./app-filter.css";

const AppFilter = ({
  filterOption,
  onFilterOption,
}) => {
  const buttonsData = [
    {id: 1, name: 'all', label: 'All Employees'},
    {id: 2, name: 'toRise', label: 'To rise'},
    {id: 3, name: 'salaryMoreThen1000', label: 'Salary mory then $1000'},
  ]

  return (
    <div className="btn-group">
      {
        buttonsData.map(({id, name, label}) => (
          <button
            key={id}
            type="button"
            onClick={() => onFilterOption(`${name}`)}
            className={cn("btn", {
              'btn-light': filterOption === `${name}`,
              'btn-outline-light': filterOption !== `${name}`
            })}
          >
            {label}
          </button>
        ))
      }
    </div>
  );
};

export default AppFilter;
