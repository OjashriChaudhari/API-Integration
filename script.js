
const fetchButton = document.getElementById("fetchUsers");

fetchButton.addEventListener("click" , function(){
    const URL = "https://jsonplaceholder.typicode.com/users";
    fetch(URL).then((response) =>{
        return response.json();  // convert respose to json
    })
    .then((data) =>{
         displayUsers(data); //pass data to function
   
    });
})

//function to display user
function displayUsers(users) {
    const userList = document.getElementById("userList");
    userList.innerHTML = ""; // Clear previous users

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        userCard.innerHTML = `<h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
            <p><strong>Phone No.:</strong> ${user.phone}</p>
            <p><strong>Company Name:</strong> ${user.company.name}</p>`;

        userList.appendChild(userCard);
    });
}



