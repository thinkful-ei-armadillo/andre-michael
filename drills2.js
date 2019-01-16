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