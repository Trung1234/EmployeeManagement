
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
    var name = $("#name").val();
    var chkArray = [];

    var birthday = $('#birth').val();
    var tableRows = $('#employees tr').length;
    /* look for all checkboes that have a class 'chk' attached to it and check if it was checked */
	$(".chk:checked").each(function() {
		chkArray.push($(this).val());
    });
    var language = "";
    var i;
    for (i = 0; i < chkArray.length; i++) {
        language  += chkArray[i] + "<br>";
    }

    var radioGender = $("input[name='gender']:checked").val();
    var department =  $('#select-department option:selected').text();
    if(isEmpty(name)){
        isValid = false;
        $("#nameError").css("color", "red").text("Please input name");
    }
    if(isValid){
        $(document).ready(function () {
            $('#employees').append('<tr id="row'+tableRows+'">'
            +'<td>'+name +'</td>'
            +'<td class="">'+ department+'</td>'
            +'<td class="">'+birthday+'</td>'
            +'<td class="">'+radioGender+'</td>'
            +'<td class="">'
            + language 
            +'</td>'
            +'<td class="">'+
            '<a  href="#" onclick="deleteEmployee('+tableRows+')">Delete</a>'+
            '</td></tr>');
        });
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
}

function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
}

function deleteEmployee(row) {
    document.getElementById("employees").deleteRow(row);
}