// Add / Update student to Google Sheets
function addOrUpdateStudent() {
  let data = {
    roll: document.getElementById("roll").value,
    name: document.getElementById("name").value,
    english: parseInt(document.getElementById("english").value),
    telugu: parseInt(document.getElementById("telugu").value),
    office: parseInt(document.getElementById("office").value),
    clanguage: parseInt(document.getElementById("clanguage").value),
    clab: parseInt(document.getElementById("clab").value),
    cfundamentals: parseInt(document.getElementById("cfundamentals").value)
  };

  // Basic validation
  if(!data.roll || !data.name || Object.values(data).slice(2).some(isNaN)){
    alert("Please fill all fields correctly");
    return;
  }

  fetch("YOUR_WEB_APP_URL_HERE", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(resp => {
    alert(resp);
    listStudents();
  })
  .catch(err => alert(err));
}

// Fetch and display students (Google Sheets)
function listStudents(){
  fetch("YOUR_WEB_APP_URL_HERE")
  .then(res => res.json())
  .then(data => {
    let html = "<table border='1' cellpadding='5'><tr><th>Roll</th><th>Name</th><th>English</th><th>Telugu/Sanskrit</th><th>Office Automation</th><th>C Language</th><th>C Lab</th><th>Computer Fundamentals Lab</th></tr>";
    data.forEach(st => {
      html += `<tr>
        <td>${st.roll}</td>
        <td>${st.name}</td>
        <td>${st.english}</td>
        <td>${st.telugu}</td>
        <td>${st.office}</td>
        <td>${st.clanguage}</td>
        <td>${st.clab}</td>
        <td>${st.cfundamentals}</td>
      </tr>`;
    });
    html += "</table>";
    document.getElementById("studentList").innerHTML = html;
  })
  .catch(err => console.log(err));
}

// Load students on page load
window.onload = listStudents;
