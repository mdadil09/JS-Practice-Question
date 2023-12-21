const prompt = require("prompt-sync")();
const Emp = require("./emp");
while (true) {
  console.log("1. Add Employee");
  console.log("2. Search Employee");
  console.log("3. Modify Employee");
  console.log("4. Delete Employee");
  console.log("5. Show All Employee");
  console.log("0. Exit");
  var choice = prompt("Enter Your Choice");
  choice = parseInt(choice);
  switch (choice) {
    case 1:
      while (true) {
        console.log("1. Add Director");
        console.log("2. Add Manager");
        console.log("3. Add Trainer");
        console.log("0. Exit");

        var choice2 = prompt("Enter Your choice");
        choice2 = parseInt(choice2);
        if (choice2 == 1) {
          try {
            var objDir = new Emp.Director();
            objDir.type = "Dir";
            objDir.id = prompt("Enter Id: ");
            objDir.name = prompt("Enter Name: ");
            objDir.mobileNo = prompt("Enter Mobile No: ");
            objDir.DOB = prompt("Enter Date of Birth: ");
            objDir.share = prompt("Enter Share % of Director: ");
            objDir.dirSpecial = prompt("Enter Director Special: ");
            objDir.add();
            console.log("Director Added Succesfully:");
          } catch (error) {
            console.log(error.message);
          }
        } else if (choice2 == 2) {
          try {
            var objMgr = new Emp.Manager();
            objMgr.type = "Mgr";
            objMgr.id = prompt("Enter Id: ");
            objMgr.name = prompt("Enter Name: ");
            objMgr.mobileNo = prompt("Enter Mobile No: ");
            objMgr.DOB = prompt("Enter Date of Birth: ");
            objMgr.salary = prompt("Enter Salary of Manager: ");
            objMgr.mgrSpecial = prompt("Enter Manager Special: ");
            objMgr.add();
            console.log("Manager Added Succesfully:");
          } catch (error) {
            console.log(error.message);
          }
        } else if (choice2 == 3) {
          try {
            var objTT = new Emp.TT();
            objTT.type = "TT";
            objTT.id = prompt("Enter Id: ");
            objTT.name = prompt("Enter Name: ");
            objTT.mobileNo = prompt("Enter Mobile No: ");
            objTT.DOB = prompt("Enter Date of Birth: ");
            objTT.salary = prompt("Enter Salary of Trainer: ");
            objTT.ttSpecial = prompt("Enter Trainer Special: ");
            objTT.add();
            console.log("Technical Trainer Added Succesfully:");
          } catch (error) {
            console.log(error.message);
          }
        } else if (choice2 == 0) {
          break;
        }
        break;
      }
      break;
    case 2:
      try {
        id = prompt("Enter Employee ID");
        var emp = Emp.Employee.getObjectByid(id);
        emp.search(id);
        console.log(emp);
      } catch (error) {
        console.log(error.message);
      }
      break;
    case 3:
      try {
        id = prompt("Enter Employee ID");
        var emp = Emp.Employee.getObjectByid(id);
        var newEmp = new Emp.Employee();
        emp.name = prompt("Enter Employee Name: ");
        emp.mobileNo = prompt("Enter Employee Mobile No: ");
        emp.DOB = prompt("Enter Employee Date of Birth: ");
        if (emp.type === "Dir") {
          emp.share = prompt("Enter Share % of director: ");
          emp.dirSpecial = prompt("Enter Director Special: ");
          emp.modify(id);
          console.log("Director Modified Successfully");
          console.log(emp);
        } else if (emp.type === "Mgr") {
          emp.salary = prompt("Enter Salary of Manager: ");
          emp.mgrSpecial = prompt("Enter Year of experience: ");
          emp.modify(id);
          console.log("Manager Modified Successfully");
          console.log(emp);
        } else if (emp.type === "TT") {
          emp.salary = prompt("Enter the salary of Trainer: ");
          emp.ttSpecial = prompt("Enter Year of experience: ");
          console.log("Technical trainer Modified Successfully");
          console.log(emp);
        }
      } catch (error) {
        console.log(error.message);
      }
      break;
    case 4:
      try {
        id = prompt("Enter Employee ID");
        var emp = Emp.Employee.getObjectByid(id);
        emp.delete(id);
        console.log(emp);
      } catch (error) {
        console.log(error.message);
      }
      break;
    case 5:
      try {
        var arrEmp = Emp.Employee.getArrayOfEmployee();
        for (let e of arrEmp) {
          if (arrEmp.length > 0) {
            console.log(arrEmp);
          } else {
            console.log("User not exist");
          }
        }
      } catch (error) {
        console.log(error.message);
      }
      break;
    case 0:
      return;
  }
}
