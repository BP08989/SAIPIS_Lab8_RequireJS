define("template", ['mustache', 'jquery'], function(Mustache, $){
    return {
        buildTableAverage: function buildTable1(employees){
            var averageSalary ={"average": 0};
            for(var i = 0; i < employees.length; i++){
                averageSalary.average += +employees[i];
            }
            averageSalary.average /= employees.length;
            var template = "<table><tr><td><p style='color: white;'>Средняя зарплата по отделу: {{average}}</p></td></tr></table>";
            $('#tableData').html(Mustache.render(template, averageSalary));
        }
    }
});