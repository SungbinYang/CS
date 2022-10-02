const OPEN_API = 'https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&hourly=temperature_2m';
const draw = (res) => {
  const data = {
    labels: res.hourly.time,
    datasets: [
      {
        label: 'Dataset',
        data: res.hourly.temperature_2m,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointStyle: 'circle',
        pointRadius: 10,
        pointHoverRadius: 15,
      },
    ],
  };

  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
  });
};

/*
  load : 스타일시트 및 이미지와 같은 모든 종속 리소스를 포함하여 전체 페이지가 로드되면 이벤트가 시작됩니다 .
  DOMContentLoaded : 이는 리소스 로드가 완료될 때까지 기다리지 않고 페이지 DOM이 로드되는 즉시 실행되는 과 대조적 입니다.
*/
window.onload = async () => {
  const ret = await fetch(OPEN_API).then((res) => res.json());

  console.log(ret);

  draw(ret);
};