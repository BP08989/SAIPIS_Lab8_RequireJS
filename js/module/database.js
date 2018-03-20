//This script contains database methods
define("database", ['jquery'], function($){
    return {
        myDb: null,
        openDB: function(){
            myDb = openDatabase("employeeDb", "0.1", "Employee Database", 200000);
            myDb.transaction(function (tx) {
                tx.executeSql("CREATE TABLE IF NOT EXISTS Employee (id REAL UNIQUE, firstName TEXT, secondName TEXT, department TEXT,position TEXT, salary Text)");
            });
        },

        addRecord:function (employee) {
            if (myDb !== null){
                myDb.transaction(function(tx) {
                    var id = Math.round(Math.random() * 1000);
                    tx.executeSql("INSERT INTO Employee (id, firstName, secondName, department, position, salary) values(?, ?, ?, ?, ?, ?)",
                        [id,
                            employee.firstName,
                            employee.secondName,
                            employee.department,
                            employee.position,
                            employee.salary], null, null);
                });
            } else {
                alert("Бд не найдена");
            }
        },

        showRecors:function showRecords(){
            $("#showTable").html('');
            $("#showTable").append(
                $('<tr><td>ID</td>' +
                    '<td>FirstName</td>' +
                    '<td>SecondName</td>' +
                    '<td>Department</td>' +
                    '<td>Position</td><' +
                    '<td>Salary</td></tr>'));
            myDb.transaction(function(tx) {
                tx.executeSql("SELECT * FROM Employee", [], function(tx, result) {
                    for(var i = 0; i < result.rows.length; i++) {
                        $("#showTable").
                        append( $('<tr' +
                            '><td>'+ result.rows.item(i)['id'] +'</td>' +
                            '<td>'+result.rows.item(i)['firstName']+'</td>' +
                            '<td>'+result.rows.item(i)['secondName']+'</td>' +
                            '<td>'+result.rows.item(i)['department']+'</td>' +
                            '<td>'+result.rows.item(i)['position']+'</td>' +
                            '<td>'+result.rows.item(i)['salary']+'</td>' +
                            '</tr>'));
                    }}, null)});
    },

        deleteRecord:function(id) {
        myDb.transaction(function(tx) {
            tx.executeSql("DELETE FROM Employee WHERE id=?",[id],
                null,
                null
            )
        });
    },

        reSelect:function reSelect(){
        $("#selectId").html('');
        myDb.transaction(function(tx) {
            tx.executeSql("SELECT * FROM Employee", [], function(tx, result) {
                for(var i = 0; i < result.rows.length; i++) {
                    $("#selectId").append( $('<option>'+ result.rows.item(i)['id'] +'</option>'));
                }}, null)}
                );
    },

        getEmployees: function getDB(callback){
            if (myDb) {
                myDb.transaction(function (t) {
                    t.executeSql("SELECT * FROM Employee", [], function(tx, result){
                        var Employees = [];
                        for(var i=0; i < result.rows.length; i++){
                            var row = result.rows.item(i)['salary'];
                            Employees.push(row);
                        }
                        callback(Employees);
                    });
                });
            } else {
                alert("База данных не найдена!");
            }
        }
    }
});
