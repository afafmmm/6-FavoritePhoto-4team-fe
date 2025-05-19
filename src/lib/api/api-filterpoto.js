export const fetchPhotosByFilter = async (filter) => {
  const query = new URLSearchParams(
    Object.entries(filter).filter(([_, v]) => v !== null && v !== "").map(([k, v]) => [k, v])
  ).toString();

  const res = await fetch(`/api/mock?${query}`);

  if (!res.ok) throw new Error("필터된 사진을 불러오는데 실패했습니다.");
  return res.json();
};
