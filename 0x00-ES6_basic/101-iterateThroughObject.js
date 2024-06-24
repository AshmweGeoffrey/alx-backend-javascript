export default function iterateThroughObject(reportWithIterator) {
  // Use the spread operator to create an array of employees
  const employeesArray = [...reportWithIterator];

  // Join the array elements with '|'
  const result = employeesArray.join(' | ');

  return result;
}
