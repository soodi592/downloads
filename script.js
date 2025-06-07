document.getElementById("view-files").onclick = () => {
  const list = document.getElementById("file-list");
  const form = document.getElementById("upload-form");
  form.classList.add("hidden");
  list.classList.remove("hidden");
  list.innerHTML = "<p>Loading files...</p>";

  // Replace this with actual GitHub repo structure if needed
  const files = [
    "files/example1.pdf",
    "files/example2.zip",
    "files/example3.png"
  ];

  list.innerHTML = '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:15px;">' +
    files.map(f => `
      <div style="background:#111;padding:15px;border-radius:10px;">
        <p>${f.split('/').pop()}</p>
        <a href="${f}" target="_blank"><button class="main-btn">Download</button></a>
      </div>
    `).join('') +
  '</div>';
};

document.getElementById("send-file").onclick = () => {
  document.getElementById("file-list").classList.add("hidden");
  document.getElementById("upload-form").classList.remove("hidden");
};
