define("creditRate", [],function(){
    return {
        getCreditRateFrom: function(){
            let radioGroupElements = document.getElementsByName("credit");
            for (let i = 0; i < radioGroupElements.length; i++) {
                if (radioGroupElements[i].checked) {
                    return radioGroupElements[i].value;
                }
            }
            return "None";
        },
    };
});