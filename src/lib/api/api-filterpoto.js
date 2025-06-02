export const fetchPhotosByFilter = async (endpoint, filter) => {
  const queryParams = new URLSearchParams();

  Object.entries(filter).forEach(([key, value]) => {
    if (value === null || value === "") return;

    if (Array.isArray(value) && value.length > 0) {
      value.forEach((v) => queryParams.append(key, v));
    } else if (!Array.isArray(value)) {
      queryParams.append(key, value);
    }
  });

  const query = queryParams.toString();
  const res = await fetch(`${endpoint}?${query}`);

  if (!res.ok) throw new Error("필터된 데이터를 불러오는데 실패했습니다.");
  return res.json();
};
