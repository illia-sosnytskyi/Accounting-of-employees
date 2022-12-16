import "./app-info.css";

const AppInfo = ({
  countOfEmployees,
  employeesWithPremia,
}) => {
  return (
    <div className="app-info">
      <h1>Accounting of employees in the company N</h1>

      <h2>
        Total number of employees: {countOfEmployees}
      </h2>

      <h2>
        The premium will be received: {employeesWithPremia}
      </h2>
    </div>
  );
};

export default AppInfo;
