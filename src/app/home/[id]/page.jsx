
import PhotoBuyerSection from "@/components/PhotoBuyer/PhotoBuyerSection";
import { cookieFetch } from "@/lib/api/fetch-client";

const API_BASE_URL = "https://six-favoritephoto-4team-be.onrender.com";
async function fetchPhotoDetail(id) {
  const res = await cookieFetch(`${API_BASE_URL}/api/store/cards/${id}`);
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
