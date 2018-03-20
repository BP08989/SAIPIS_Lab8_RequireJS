define("validation", ['jquery'], function($){
    return {
        checkForm: function validationForm(){
            var state;
            try{
                if($("input[id='firstName']").val()==""){
                    throw new SyntaxError("Заполните поле имя!");
                }
                if($("input[id='secondName']").val()==""){
                    throw new SyntaxError("Заполните поле фамилия!");
                }
                if($("input[id='department']").val()==""){
                    throw new SyntaxError("Заполните поле отдел!");
                }
                if($("input[id='position']").val()==""){
                    throw new SyntaxError("Заполните поле должность!");
                }
                if($("input[id='timeIncrease']").val()=="Выслуга лет"){
                    throw new SyntaxError("Заполните поле \"Выслуга лет\"!");
                }
                if($("input[id='defect']").val()==""){
                    throw new SyntaxError("Заполните поле \"Надбавка за профессиональное мастерство\"!");
                }
                if($("input[id='rate']").val()==""){
                    throw new SyntaxError("Зполните поле ставка!");
                }
                state = true;
            }
            catch(ex){
                alert(ex);
                state = false;
                return false;
            }
            return state;
        }
    }
});