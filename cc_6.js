// Step 2: Base class
class Employee {
  /**
   * @param {string} name       - The employee's full name
   * @param {string} department - The department the employee belongs to
   */
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  /**
  /** Return a simple sentence describing the employee */
  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}
/****************************************
 * Step 3: Manager Class (sub-class)    *
 ****************************************/
class Manager extends Employee {
  constructor(name, department, reports = []) {
    super(name, department);          // Inherit name and department
    this.reports = reports;           // Array of Employee instances
  }

  /** Add a direct report to the manager */
  addReport(employee) {
    if (employee instanceof Employee) {
      this.reports.push(employee);
    } else {
      console.warn("addReport expects an Employee instance");
    }
  } 
  /** Override describe(): mention direct-report count */
  describe() {
    const base = super.describe(); // reuse text from Employee
    const count = this.reports.length;
    return `${base} They manage ${count} direct report${count === 1 ? "" : "s"}.`;
  }
}
