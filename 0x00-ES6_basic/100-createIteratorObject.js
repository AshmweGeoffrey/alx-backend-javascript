export default function createIteratorObject(report) {
  // Define a generator function to iterate through employees
  function* iterateEmployees() {
    // Iterate over departments in the report
    for (const department in report.allEmployees) {
      // Check if the property belongs to the object
      if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
        // Iterate over employees in the current department
        for (const employee of report.allEmployees[department]) {
          // Yield each employee
          yield employee;
        }
      }
    }
  }

  // Create an iterator object
  const iterator = {
    [Symbol.iterator]: iterateEmployees,
  };

  return iterator;
}
