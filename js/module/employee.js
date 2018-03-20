define("employee", ['jquery'], function($){
    return 	function Person(salary){
        // alert($("input[id='firstName']").val());
        this.firstName = $("input[id='firstName']").val();
        this.secondName = $("input[id='secondName']").val();
        this.department = $("input[id='department']").val();
        this.position = $("input[id='position']").val();
        this.salary = salary;
    }
});