const githubUsername = "soodi592";
const repoName = "downloads";
const branch = "main";

// این لیست دستی باید پر شه چون GitHub Pages API نداره که پوشه رو بخونه
const files = [
  "sample1.pdf",
  "photo.png",
  "example.mp3"
];

document.getElementById("view-files").onclick = () => {
  document.getElementById("file-view").classList.remove("hidden");
  document.getElementById("upload-form").classList.add("hidden");

  const container = document.getElementById("file-view");
  container.innerHTML = ""; // پاک کردن قبلی‌ها

  files.forEach(file => {
    const rawUrl = `https://raw.githubusercontent.com/${githubUsername}/${repoName}/${branch}/files/${file}`;
    const card = document.createElement("div");
    card.className = "file-card";
    card.innerHTML = `
      <h3>${file}</h3>
      <a href="${rawUrl}" target="_blank"><button>Download</button></a>
    `;
    container.appendChild(card);
  });
};

document.getElementById("send-file").onclick = () => {
  document.getElementById("file-view").classList.add("hidden");
  document.getElementById("upload-form").classList.remove("hidden");
};
