
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
            '<a  href="#" onclick="deleteEmployee(this)">Delete</a>'+
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

function deleteEmployee(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("employees").deleteRow(i);
}