/* eslint-disable indent */
'use strict';

function makeStudentReport(data){
  const report = [];
  for (let i=0; i<data.length; i++){
    const item = data[i];
    report.push(`${item.name}: ${item.grade}`);
  }
  return report;
}

const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

function enrollInSummerSchool(students){
  return students.map(student => {
    return {
      name: student.name,
      status: 'In Summer School',
      course: student.course,
    };
  });
}

const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];

function findById(items, idNum) {
  return items.find((item) => item.id === idNum);
}


function validateKeys(object, expectedKeys) {
    if(Object.keys(object).length === expectedKeys.length) {
        for(let i = 0; i < expectedKeys.length; i++) {
            let key = expectedKeys[i];

            if(!object.hasOwnProperty(key)) {
                return false;
            }
        }
    } else {
        return false;
    }

    return true;
}

const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };
  
  // running the function with `objectB` and `expectedKeys`
  // should return `false`
  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };
  
  const expectedKeys = ['id', 'name', 'age', 'city'];