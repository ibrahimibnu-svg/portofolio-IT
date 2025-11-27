const projects = [
  {
    title: "Kalkulator Zakat Emas",
    description: "Aplikasi zakat emas untuk menghitung kewajiban zakat berdasarkan berat emas.",
    image: "icon coding1.jpg",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://github.com/ibrahimibnu-svg/belajar-javascript/tree/main/kalkulator-zakat-emas",
  },
  {
    title: "kalkulator",
    description: "Kalkulator sederhana untuk melatih operasi dasar dan logika perhitungan.",
    image: "icon coding2.jpg",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://github.com/ibrahimibnu-svg/belajar-javascript/tree/main/kalkulator",
  },
  {
    title: "Lampu merah",
    description: "Simulasi lampu lalu lintas yang di buat menggunakan html,css dan javascript.",
    image: "icon coding3.jpg",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://github.com/ibrahimibnu-svg/belajar-javascript/tree/main/traffic-light",
  },
  {
    title: "Canva",
    description: "Tugas portofolio canva dibuat dengan penuh kesabaran dalam waktu yang lama",
    image: "icon canva.png",
    tags: "",
    link: "https://www.canva.com/design/DAG52qrx4zY/DFJOdwD5GsNRtSBS0nuDlA/edit?utm_content=DAG52qrx4zY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  }
];

const proyek = document.getElementById("proyek");

for (let i = 0; i < projects.length; i++) {
  let projek = projects[i];

  let card = document.createElement("div");
  card.className = "feature-card";

  let img = document.createElement("img");
  img.src = projek.image;
  img.className = "feature-icon1";

  let title = document.createElement("h3");
  title.textContent = projek.title;

  let description = document.createElement("p");
  description.textContent = projek.description;

  let link = document.createElement("a");
  link.href = projek.link;
  link.textContent = "lihat disini";
  link.className = "link";
  link.target = "_blank";

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(link);

  proyek.appendChild(card);
}
