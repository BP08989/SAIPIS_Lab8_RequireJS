define("defect", ['jquery'], function($){
    return {
        getDefectFrom: function(){
            return (1 - $('#defect').val());
        },
    };
});