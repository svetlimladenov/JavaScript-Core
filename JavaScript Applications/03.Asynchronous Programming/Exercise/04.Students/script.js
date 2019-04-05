function loadStudents() {
    const url = 'https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students';
    const $table = $('#results');
    $.get({
        url : url,
        headers : {
            'Authorization' : `Basic ${btoa('guest:guest')}`
        }
    }).then(students => {
        students.forEach((student,index)=> {
            let $tableRow =
                $('<tr>' +
                    `<td>${index}</td>` +
                    `<td>${student.FirstName}</td>` +
                    `<td>${student.LastName}</td>` +
                    `<td>${student.FacultyNumber}</td>` +
                    `<td>${student.Grade}</td>` +
                    '</tr>');
            $table.append($tableRow);
        })
    });
}
loadStudents();