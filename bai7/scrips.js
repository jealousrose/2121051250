let danhSachPhim = [
  {
    id: 1,
    tenPhim: "Mưa đỏ",
    namPhatHanh: 2025,
    thoiLuong: 2,
    quocGia: "Việt Nam",
    poster: "muado.jpg",
    theLoai: "Phim chiếu rạp"
  },
  {
    id: 2,
    tenPhim: "Conan",
    namPhatHanh: 2025,
    thoiLuong: 1.5,
    quocGia: "Nhật Bản",
    poster: "conan.jpg",
    theLoai: "Phim hoạt hình"
  },
  {
    id: 3,
    tenPhim: "Avengers 5",
    namPhatHanh: 2025,
    thoiLuong: 2.5,
    quocGia: "Mỹ",
    poster: "avengers.jpg",
    theLoai: "Hành động"
  },
  {
    id: 4,
    tenPhim: "Doraemon Movie",
    namPhatHanh: 2024,
    thoiLuong: 1.7,
    quocGia: "Nhật Bản",
    poster: "doraemon.jpg",
    theLoai: "Thiếu nhi"
  }
];

const banner = document.getElementById("banner");
const movieList = document.getElementById("movieList");

function hienThiPhim() {
  danhSachPhim.forEach(phim => {
    const div = document.createElement("div");
    div.className = "movie-item";
    div.innerHTML = `
      <img src="${phim.poster}" alt="${phim.tenPhim}">
      <div class="movie-info">
        <h3>${phim.tenPhim}</h3>
        <p>${phim.theLoai} | ${phim.quocGia}</p>
      </div>
    `;
    div.addEventListener("click", () => chonPhim(phim.id));
    movieList.appendChild(div);
  });
}

function chonPhim(idPhim) {
  const phim = danhSachPhim.find(p => p.id === idPhim);
  if (phim) {
    banner.style.backgroundImage = `url(${phim.poster})`;
  }
}

hienThiPhim();
