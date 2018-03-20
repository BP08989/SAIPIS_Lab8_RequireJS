define("countSalary", ['jquery', 'timeIncrease', 'defect', 'creditRate'],function($, yi, wc, cr){
    return {
        calculateSalary: function(employee){
            let timeIncrease = yi.getTimeIncreaseFrom();
            let defect = wc.getDefectFrom();
            let creditRate = cr.getCreditRateFrom();
            let rate =  $('#rate').val();
            employee.salary = rate * timeIncrease * defect * creditRate;
        }
    };
});