import photos from '../../../../public/mock/photos.json'

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const grade = searchParams.get("grade");
  const genre = searchParams.get("genre");
  const sale = searchParams.get("sale");

  const filtered = photos.filter(photo => {
    return (
      (grade ? photo.grade === grade : true) &&
      (genre ? photo.genre === genre : true) &&
      (sale ? photo.sale === sale : true)
    );
  });

  return new Response(JSON.stringify(filtered), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
