define("averageSalary", ['jquery', 'database'], function($, database){
    return {
        calculateAverageSalary: function(){
            let salaries = [];
            database.findAll(salaries);
            let averageSalary = 0;
            for(var i = 0; i < salaries.length; i++)
                averageSalary += salaries[i].salary;
            averageSalary /= salaries.length;
        }
    };
});