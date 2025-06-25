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

/*****************************
 * Step 4: Create Instances  *
 *****************************/
const emp1 = new Employee("Liam Carter", "Finance");
const emp2 = new Employee("Sofia Perez", "Marketing");
const emp3 = new Employee("Noah Kim", "Engineering");

const mgr1 = new Manager("Ava Thompson", "Finance");
const mgr2 = new Manager("Ethan Chen", "Engineering", [emp3]);

// Assign direct reports to managers
mgr1.addReport(emp1);
mgr1.addReport(emp2);

/****************************
 * Step 5: Company Class    *
 ****************************/
class Company {
  constructor(name) {
    this.name = name;
    this.employees = []; // Array of Employee or Manager
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.employees.push(employee);
    } else {
      console.warn("addEmployee expects an Employee or Manager.");
    }
  }

  listEmployees() {
    console.log(`\n Employee list for ${this.name}:`);
    this.employees.forEach(emp => console.log("• " + emp.describe()));
  }
}
/************************************
 * Step 6: Instantiate & Display    *
 ************************************/
const myCompany = new Company("TechNova");

myCompany.addEmployee(emp1);   // Liam Carter
myCompany.addEmployee(emp2);   // Sofia Perez
myCompany.addEmployee(emp3);   // Noah Kim
myCompany.addEmployee(mgr1);   // Ava Thompson
myCompany.addEmployee(mgr2);   // Ethan Chen

myCompany.listEmployees();