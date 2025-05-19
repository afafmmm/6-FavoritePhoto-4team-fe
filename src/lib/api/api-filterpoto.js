export const fetchPhotosByFilter = async (filter) => {
  const queryParams = new URLSearchParams();

  Object.entries(filter).forEach(([key, value]) => {
    if (value === null || value === "") return;

    if (Array.isArray(value)) {
      value.forEach((v) => queryParams.append(key, v));
    } else {
      queryParams.append(key, value);
    }
  });

  const query = queryParams.toString();

  const res = await fetch(`/api/mock?${query}`);

  if (!res.ok) throw new Error("필터된 사진을 불러오는데 실패했습니다.");
  return res.json();
};
