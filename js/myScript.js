
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
function addDepartment(){
    var ddl = document.getElementById("select-department");
    var option = document.createElement("OPTION");
    option.innerHTML = document.getElementById("moreDeparment").value;
    option.value = document.getElementById("moreDeparment").value;
    ddl.options.add(option);
    $('#myModal').modal('toggle');
}
function resetError(){
    $("#nameError").empty();
    $("#classError").empty();
    $("#mathError").empty();
    $("#physicError").empty();
    $("#chemicalError").empty();
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
