init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      console.log("continue btn clicked from index.js")
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

