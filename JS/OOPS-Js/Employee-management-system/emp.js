class Employee {
  static arrEmp = [];
  constructor() {
    this.id = 0;
    this.type = "";
    this.name = "";
    this.mobileNo = "";
    this.DOB = "";
  }

  static isIdExists(id) {
    var emp = Employee.arrEmp.find((emp) => emp.id === id);
    if (emp === undefined) {
      return false;
    } else {
      return true;
    }
  }

  add() {
    if (Employee.isIdExists(this.id)) {
      throw { name: "Id Error", message: "Id already Exist" };
    } else {
      Employee.arrEmp.push(this);
    }
  }
  search(id) {
    var emp = Employee.arrEmp.find((emp) => emp.id === id);
    if (emp == undefined) {
      throw { name: "Id Not found Error", message: "Id not found" };
    }
    this.id = emp.id;
    this.type = emp.type;
    this.name = emp.name;
    this.mobileNo = emp.mobileNo;
    this.DOB = emp.DOB;
  }
  delete(id) {
    var emp = Employee.arrEmp.findIndex((emp) => emp.id === id);
    if (emp === -1) {
      throw { name: "Index Error", message: "Index not found" };
    }
    Employee.arrEmp.splice(emp, 1);
  }
  modify(id) {
    var emp = Employee.arrEmp.find((e) => e.id == id);
    if (emp == undefined) {
      throw { name: "Id Error", message: "Id Not found" };
    }
    emp.id = this.id;
    emp.type = this.type;
    emp.name = this.name;
    emp.mobileNo = this.mobileNo;
    emp.DOB = this.DOB;
  }

  static getObjectByid(id) {
    var emp = Employee.arrEmp.find((e) => e.id == id);
    //mistake:
    //The error is occurring because we are trying to access the share property on an undefined object.
    //The issue is in the getObjectByid method of the Employee class.

    //Solution:
    // The problem is that when we create a new instance of Director, Manager, or TT,
    // we are not setting the properties of these instances based on the properties of the existing emp object.
    // As a result, when we later try to access the share property in the Director class,
    // it throws an error because emp is undefined.
    // To fix this issue, we need to modify the getObjectByid method to pass the emp object to the constructor
    // of the respective classes.

    if (emp) {
      if (emp.type === "Dir") {
        const director = new Director();
        director.id = emp.id;
        director.type = emp.type;
        director.name = emp.name;
        director.mobileNo = emp.mobileNo;
        director.DOB = emp.DOB;
        director.share = emp.share;
        director.dirSpecial = emp.dirSpecial;
        return director;
      } else if (emp.type === "Mgr") {
        const manager = new Manager();
        manager.id = emp.id;
        manager.type = emp.type;
        manager.name = emp.name;
        manager.mobileNo = emp.mobileNo;
        manager.DOB = emp.DOB;
        manager.salary = emp.salary;
        manager.mgrSpecial = emp.mgrSpecial;
        return manager;
      } else if (emp.type === "TT") {
        const tt = new TT();
        tt.id = emp.id;
        tt.type = emp.type;
        tt.name = emp.name;
        tt.mobileNo = emp.mobileNo;
        tt.DOB = emp.DOB;
        tt.salary = emp.salary;
        tt.ttSpecial = emp.ttSpecial;
        return tt;
      }
    }
    return undefined;
  }

  static getArrayOfEmployee() {
    return Employee.arrEmp;
  }
}

class Director extends Employee {
  constructor() {
    super();
    this.share = "";
    this.dirSpecial = "";
  }
  add() {
    super.add();
  }
  search(id) {
    super.search(id);
    var emp = Employee.arrEmp.find((emp) => emp.id === id);
    this.share = emp.share;
    this.dirSpecial = emp.dirSpecial;
  }
  delete(id) {
    super.delete(id);
  }
  modify(id) {
    super.modify(id);
    var emp = Employee.arrEmp.find((emp) => emp.id === id);
    emp.share = this.share;
    emp.dirSpecial = this.dirSpecial;
  }
}

class Manager extends Employee {
  constructor() {
    super();
    this.salary = "";
    this.mgrSpecial = "";
  }
  add() {
    super.add();
  }
  search(id) {
    super.search(id);
    var emp = Employee.arrEmp.find((emp) => emp.id === id);
    this.salary = emp.salary;
    this.mgrSpecial = emp.mgrSpecial;
  }
  delete(id) {
    super.delete(id);
  }
  modify(id) {
    super.modify(id);
    var emp = Employee.arrEmp.find((emp) => emp.id === id);
    emp.salary = this.salary;
    emp.mgrSpecial = this.mgrSpecial;
  }
}

class TT extends Employee {
  constructor() {
    super();
    this.salary = "";
    this.ttSpecial = "";
  }
  add() {
    super.add();
  }
  search(id) {
    super.search(id);
    var emp = Employee.arrEmp.find((emp) => emp.id === id);
    emp.salary = this.salary;
    emp.ttSpecial = this.ttSpecial;
  }
  delete(id) {
    super.delete(id);
  }
  modify(id) {
    super.modify(id);
    var emp = Employee.arrEmp.find((emp) => emp.id === id);
    this.salary = emp.salary;
    this.ttSpecial = emp.ttSpecial;
  }
}

module.exports = {
  Employee: Employee,
  Director: Director,
  Manager: Manager,
  TT: TT,
};
