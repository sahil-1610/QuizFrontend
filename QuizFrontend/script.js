// Mock user data (replace with your backend authentication)
const users = [
    { username: "user1", email: "user1@example.com" },
    { username: "user2", email: "user2@example.com" },
    { username: "omi", email: "sahilkumartiwari.120372@marwadiuniversity.ac.in" },
    { username: "sahil", email: "sahilkumartiwari.120372@marwadiuniversity.ac.in"},
    { username: "omji", email: "sahilkumartiwari.120372@marwadiuniversity.ac.in" },
    { username: "tiwari", email: "sahilkumartiwari.120372@marwadiuniversity.ac.in" },
];

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
   

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const loginEmail = document.getElementById("login-email").value;
        const username = document.getElementById("username").value;

        const user = users.find((u) => u.email === loginEmail && u.username === username);
        if (user) {
       window.location.href = "quizz.html";
      } 
        else {
         alert("Invalid login credentials.");
      }

      });

    });

   
