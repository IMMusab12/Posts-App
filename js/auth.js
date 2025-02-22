// Import Firebase authentication
import { auth } from "../firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Sign Up
document.getElementById("signup-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    Swal.fire({
      title: "Signup Successful",
      text: "Your account has been created successfully!",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#1a73e8" // Optional: Color customization
    });
    window.location.href = "pages/dashboard.html"; // Redirect after signup
  } catch (error) {
    alert("Error: " + error.message);
  }
});
// Login
document.getElementById("login-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    Swal.fire({
      title: "login Successful",
      text: "Your account has been logged successfully!",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#1a73e8" // Optional: Color customization
    })
    window.location.href = "pages/dashboard.html"; // Redirect after login
  } catch (error) {
    alert("Error: " + error.message);
  }
});

// Logout
document.getElementById("logout-btn")?.addEventListener("click", async () => {
  try {
    await signOut(auth);
    alert("Logged out successfully!");
    window.location.href = "../index.html"; // Redirect to login page
  } catch (error) {
    alert("Error logging out: " + error.message);
  }
});

// Check Auth State
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is logged in:", user.email);
  } else {
    console.log("User is not logged in.");
  }
})