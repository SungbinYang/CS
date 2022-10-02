const ghibli = {
  name: 'Ghibli',
  OST_list: [
    {
      name: '마녀 배달부 키키',
      song: '따스함에 둘러쌓인다면',
    },
    {
      name: '하울의 움직이는 성',
      song: '세계의 약속',
    },
  ],
};

console.log(ghibli);
console.log(ghibli.OST_list[0]);
console.log(ghibli.OST_list[0].name);
console.log(ghibli.OST_list[0]['song']);
