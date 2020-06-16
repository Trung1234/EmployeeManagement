
function addRow(){
    resetError();
    var tableRows = $('#employee tr').length;
    var name = $("#name").val();
    var classOfStudent = $("#class").val();
    var math = Number($("#math").val());
    var physic = Number($("#physic").val());
    var chemical = Number($("#chemical").val());
    if(name.length==0){
        $("#nameError").css("color", "red").text("Họ tên bắt buộc phải nhập");
    }else{
        if(classOfStudent.length==0){       
            $("#classError").css("color", "red").text("Lớp học bắt buộc phải nhập");
        }else{
            if(math.length==0 || math <= 0 || math > 10){
                $("#mathError").css("color", "red").text("Điểm toán bắt buộc phải nhập và phải trong khoảng từ 0 đến 10");
            }else{
                if(physic.length==0 || physic <= 0 || physic > 10){
                    $("#physicError").css("color", "red").text("Điểm lý bắt buộc phải nhập và phải trong khoảng từ 0 đến 10");
                }else{
                    if(chemical.length==0 || chemical <= 0 || chemical > 10){
                        $("#chemicalError").css("color", "red").text("Điểm hóa bắt buộc phải nhập và phải trong khoảng từ 0 đến 10");
                    }else{
                        $(document).ready(function () {
                            $('#employee').append('<tr id="row'+tableRows+'"><td>'+tableRows+
                            '</td><td style="text-align:left;">'+name +'</td>'
                            +'<td>' +classOfStudent +'</td>'
                            +'<td class="math">'
                            +math
                            +'</td><td class="physic">'+physic
                            +'</td><td class="chemical">'+chemical
                            +'</td><td class="average">'+'?'+
                            '</td></tr>');
                        });
                    }
                }
            }
        }
    }    
}
function addEmployee(){
    resetError();
    var isValid = true;
    var tableRows = $('#employee tr').length;
    var name = $("#name").val();
    var radioGender = $("input[name='gender']:checked").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var location = $("#location").val();
    var department =  $('#select-department option:selected').text();
    if(isEmpty(name)){
        isValid = false;
        $("#nameError").css("color", "red").text("Please input name");
    }
    if(isEmpty(phone)){
        isValid= false;
        $("#phoneError").css("color", "red").text("Please input phone number");
    }
    if(isEmpty(email)){
        isValid = false;
        $("#emailError").css("color", "red").text("Please input email");
    }
    if(!isEmail(email)){
        isValid = false;
        $("#emailError").css("color", "red").text("Invalid email");
    }
    if(!isPhoneNumber(phone)){
        isValid= false;
        $("#phoneError").css("color", "red").text("Invalid phone number");
    }
}
function addDepartment(){   
    var department = document.getElementById("moreDeparment").value;
    if(!isEmpty(department)){
        var ddl = document.getElementById("select-department");
        var option = document.createElement("OPTION");
        option.innerHTML = department;
        option.value = department;
        ddl.options.add(option);
    }   
    $('#myModal').modal('toggle');
}
function resetError(){
    $("#nameError").empty();
    $("#titleError").empty();
    $("#mathError").empty();
    $("#phoneError").empty();
    $("#emailError").empty();
}

function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}
function isEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function isPhoneNumber(number) {
    var phoneno = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    return (phoneno.test(number)) ? true : false;
}
function caculate(){
    
    var rows = $('#employee tr').length;
    for (var i = 1; i<= rows; i++) {
        var math = Number($("#row"+i).find("td.math").text());
        var physic = Number($("#row"+i).find("td.physic").text());
        var chemical = Number($("#row"+i).find("td.chemical").text());
        var average  = ((math+physic+chemical)/3).toFixed(2);
        $("#row"+i).find("td.average").text(average );
    }
}
function findExcellent(){
    var rows = $('#employee tr').length;
    for (var i = 1; i<= rows; i++) {
        var average  = Number($("#row"+i).find("td.average").text());
        if(average >=8){
            $("#row"+i).css("background-color", "red");
        }
    }
}
