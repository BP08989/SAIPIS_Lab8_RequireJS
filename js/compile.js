require.config({
    paths: {
        "jquery" : "./lib/jquery-3.2.1.min",
        'averageSalary' : 'salary/averageSalary',
        "index" : "module/index",
        'validation' : 'module/validation',
        'employee' : 'module/employee',
        'countSalary' : 'salary/countSalary',
        'timeIncrease' : 'salary/timeIncrease',
        'defect' : 'salary/defect',
        'creditRate' : 'salary/creditRate',
        "database" : "module/database",
        'template' : 'module/template',
        'mustache' : 'lib/mustache',
    }
});

require(['index', 'jquery', 'validation', 'employee', 'averageSalary', 'countSalary', 'database', 'template'], 
    function (index, $, validation, Employee, averageSalary, calculateSalary,  database, template) {
    database.openDB();
    database.reSelect();
    $('#calculate-salary').bind("click", function() {
        var employee = new Employee();
        if (validation.checkForm()){
            calculateSalary.calculateSalary(employee);
            database.addRecord(employee);
            database.reSelect();
        }
    });

    $('#delete-button').bind("click", function(){
        database.deleteRecord($('#selectId').val());
        database.reSelect();
    });

    $('#average-salary').bind("click", function(){
        var Employees = [];
        database.getEmployees(function(Employees){
            template.buildTableAverage(Employees);
        });
    });

    $('#show-table').bind("click", function(){
        database.showRecors();
    });
});
