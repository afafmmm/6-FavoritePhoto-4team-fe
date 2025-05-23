
import PhotoBuyerSection from "@/components/PhotoBuyer/PhotoBuyerSection";

async function fetchPhotoDetail(id) {
  const res = await fetch(`${process.env.DATABASE_URL}/api/store/cards/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch photo detail");
  }
  return res.json();
}

export default async function PhotoDetailPage({ params }) {
  const photo = await fetchPhotoDetail(params.id);

  return (
    <section>
      <PhotoBuyerSection photo={photo} />
    </section>
  );
}
