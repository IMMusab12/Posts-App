import { db } from "../firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

document.getElementById("post-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Form submitted");
  const title = document.getElementById("post-title").value;
  const description = document.getElementById("post-description").value;

  try {
    console.log("Adding post:", title, description);
    await addDoc(collection(db, "myposts"), {
      title,
      description,
      timestamp: new Date().toISOString()
    });
    Swal.fire({
      title: "Post Submitted",
      text: "Your post has been submitted successfully!",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#1a73e8" 
    }).then((result) => {
      if (result.isConfirmed) {
    window.location.href = "dashboard.html"; 
      }
    });
  } catch (error) {
    console.error("Error submitting post:", error);
    alert("Error: " + error.message);
  }
});
document.getElementById("go-to-dashboard-btn")?.addEventListener("click", () => {
  window.location.href = "dashboard.html";
});

// Submit Post for User Posts
document.getElementById("user-post-form")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("user-post-title").value;
  const description = document.getElementById("user-post-description").value;

  try {
    await addDoc(collection(db, "userposts"), {
      title,
      description,
      timestamp: new Date().toISOString()
    });
    Swal.fire({
      title: "Post Submitted",
      text: "Your post has been submitted successfully!",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#1a73e8" // Optional: Customize button color
    }).then((result) => {
      if (result.isConfirmed) {
    window.location.href = "dashboard.html"; 
      }
    });// direct to dashboard
  } catch (error) {
    alert("Error: " + error.message);
  }
});

// Go to Dashboard button
document.getElementById("back-to-dashboard-btn")?.addEventListener("click", () => {
  window.location.href = "dashboard.html";
});
