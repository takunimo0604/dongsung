const projects = [
  {t: "할 일 앱", d: "JavaScript로 만든 투두 리스트"},
  {t: "날씨 사이트", d: "API를 활용한 날씨 조회"},
  {t: "블로그", d: "HTML/CSS 기반 개인 블로그"}
];
document.querySelector(".cards").innerHTML = projects
  .map(p => `<div class="card"><h3>${p.t}</h3><p>${p.d}</p></div>`)
  .join("");
const btn = document.getElementById("mode");
btn.onclick = () => {
  const dark = document.body.classList.toggle("dark");
  btn.textContent = dark ? "☀️ 라이트모드" : "🌙 다크모드";
};
