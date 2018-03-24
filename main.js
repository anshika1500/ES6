function check()
{
	var isEmpty = false;
	name = document.getElementById("name").value;
	rollno = document.getElementById("rollno").value;
	passout = document.getElementById("passout").value;
	stream = document.getElementById("stream").value;
	if(name === "")
	{
		alert("Name cannot be empty");
		isEmpty = true;
	}	
	else if(rollno === "")
	{
		alert("Roll Number cannot be empty");
		isEmpty = true;
	}
	else if(passout === "")
	{
		alert("Passout Year cannot be empty");
		isEmpty = true;
	}
	else if(stream === "")
	{
		alert("Stream cannot be empty");
		isEmpty = true;
	}
	return isEmpty;
}
function add()
{
	if(!check())
	{
		var name = document.getElementById("name").value;
		var rollno = document.getElementById("rollno").value;
		if(isNaN(rollno) || rollno.length != 10)
		{
			alert("Enter valid rollno");
		}
		else
		{
			var passout = document.getElementById("passout").value;
			var stream = document.getElementById("stream").value;
			var t = document.getElementById("table1");
			var chk="<input type='checkbox' id = 'chk1'/>";
			var newrow = t.insertRow(t.rows.length);
			var c1 = newrow.insertCell(0);
			var c2 = newrow.insertCell(1);
			var c3 = newrow.insertCell(2);
			var c4 = newrow.insertCell(3);
			var c5 = newrow.insertCell(4);
			c1.innerHTML = name;
			c2.innerHTML = rollno;
			c3.innerHTML = passout;
			c4.innerHTML = stream;
			c5.innerHTML = chk;
			document.getElementById("form1").reset();
		}
	}
}
function remove1()
{
	var x = document.getElementById('table1');
    var rowCount = x.rows.length;
	var i = 1;
    while(rowCount != 1 && i < rowCount)
	{
        var row = x.rows[i];
        var chkbox = row.cells[4].getElementsByTagName('input')[0];
        if(('checkbox' == chkbox.type) && (true == chkbox.checked)) 
		{
            x.deleteRow(i);
			rowCount--;
        }
		else
			i++;
    }
}
function editDetails()
{
	var x = document.getElementById('table1');
    var rowCount = x.rows.length;
	var i = 1;
	var c = 0;
    while(i < rowCount)
	{
        var row = x.rows[i];
        var chkbox = row.cells[4].getElementsByTagName('input')[0];
        if(('checkbox' == chkbox.type) && (true == chkbox.checked)) 
		{
			c++;
			i++;
        }
		else
		{
			i++;
		}
    }
	if(c > 1)
	{
		alert("You cannot update more than one row at a time");
	}
	else
	{
		let name1 = row.cells[0].innerHTML;
		let roll1 = row.cells[1].innerHTML;
		let pass1 = row.cells[2].innerHTML;
		let stream1 = row.cells[3].innerHTML;
		document.getElementById('name').value = name1;
		document.getElementById('rollno').value = roll1;
		document.getElementById('passout').value = pass1;
		document.getElementById('stream').value = stream1;
	}
}
function updateTable()
{
	var x = document.getElementById('table1');
	var row = x.rows[k];
	var chk1 = "<form><input type='checkbox'></form>";
	row.cells[0].innerHTML = document.getElementById("name").value;
	row.cells[1].innerHTML = document.getElementById("rollno").value;
	row.cells[2].innerHTML = document.getElementById("passout").value;
	row.cells[3].innerHTML = document.getElementById("stream").value;
	row.cells[4].innerHTML = chk1;
}