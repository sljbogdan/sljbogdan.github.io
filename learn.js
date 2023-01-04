console.info("salut");
	console.debug(132/2);

	var name = 'Nicolae';
	console.info("Nume:" + name);

	var age = 12 + 7;
	console.info(name,":", age, "ani");

	var skills = ['html','css','js'];
	console.info("skills:", skills);

	name = "Nick";
	console.info("Name:" + name);

	var person ={
		employed: true,
		age:29,
	};
	console.info(person.age);

	

	var m = document.getElementById("job-title");
	console.info('my motto', m.innerText);
	
	m.onclick = function () {
		if(m.innerText == "Electrician auto @ BlueByte Performance") {
			m.innerText = "Trainer @ FastTrackIT";
			m.style.color = "#1144dd";
		}
		else{
			m.innerHTML = "<strong>Electrician auto</strong> @ <i>BlueByte Performance</i>";
			m.style.color = '';
		}
	}
