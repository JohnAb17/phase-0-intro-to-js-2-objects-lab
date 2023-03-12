// Write your solution in this file!
const employee = {
    name: "Jimmy",
    streetAddress: "15 Sydney",
};


function updateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    const newObj = {...employee };
    newObj[streetAddress] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value) {
    employee[name] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, name) {
    const newObj = {...employee };
    delete newObj[name];
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    
    delete employee[name]
    return employee;
}

