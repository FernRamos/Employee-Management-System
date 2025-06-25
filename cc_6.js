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
/****************
 * Sub-class    *
 ****************/
class Manager extends Employee {
  /**
   * @param {string} name
   * @param {string} department
   * @param {Employee[]} [reports] – optional starting list of direct reports
   */
  constructor(name, department, reports = []) {
    super(name, department);          // call Employee constructor
    this.reports = reports;           // an array of Employee objects
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
