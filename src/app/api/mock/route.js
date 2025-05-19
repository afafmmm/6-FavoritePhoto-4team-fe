import photos from '../../../../public/mock/photos.json'

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const grades = searchParams.getAll("grade"); // 배열로 받기
  const genres = searchParams.getAll("genre");
  const sales = searchParams.getAll("sale");

  const filtered = photos.filter(photo => {
    //?값을 넣어야 각 값의 갯수들의 합으로 나옴 안하면 단일 값
    const gradeMatch = grades.length === 0 ? true : grades.includes(photo.grade);
    const genreMatch = genres.length === 0 ? true : genres.includes(photo.genre);
    const saleMatch = sales.length === 0 ? true : sales.includes(String(photo.sale)); 
    

    return gradeMatch && genreMatch && saleMatch;
  });

  return new Response(JSON.stringify(filtered), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
