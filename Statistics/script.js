const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

db.collection("events").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            let count = 0;
            for(index in data) {
              count += 1;
            }
            document.getElementById('table').innerHTML += `
              <tr id="row">
                <td>${doc.id}</td>
                <td>${count}</td>
              </tr>
              `
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });