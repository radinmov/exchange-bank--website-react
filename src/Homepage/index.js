export default function Homepage() {
   
    fetch("https://cacore.liara.run/auth/users/me", {
        
        headers: {
          "Content-Type": "application/json",
          Authorization:"JWT "+ localStorage.getItem("Access"),
        },
    })
      .then(response => response.json())
      .then(resualt => console.log(resualt))
      .catch((err) => console.log(err))
    
    }


