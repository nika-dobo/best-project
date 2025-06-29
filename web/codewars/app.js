fetch("/api/challenges")
  .then((res) => res.json())
  .then((data) => {
    const listEl = document.getElementById("katalist");
    const completed = JSON.parse(localStorage.getItem("completedKatas")) || [];
    data.forEach((c) => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="challenge.html?id=${c.id}">${c.title}</a>`;
      if (completed.includes(c.id)) {
        li.style.textDecoration = "line-through";
      }
      listEl.appendChild(li);
    });
    document.getElementById(
      "progresi"
    ).textContent = `Progress: ${completed.length}/${data.length} completed`;
  });
