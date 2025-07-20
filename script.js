// 화면 전환 함수
function showSection(id) {
  document.querySelectorAll('.content').forEach(sec => sec.classList.remove('active'));
  const section = document.getElementById(id);
  if (section) section.classList.add('active');
}

// DNA 차트 초기화
window.onload = () => {
  showSection('chart');
  new Chart(document.getElementById("dnaChart"), {
    type: 'bar',
    data: {
      labels: ['A', 'T', 'G', 'C'],
      datasets: [{
