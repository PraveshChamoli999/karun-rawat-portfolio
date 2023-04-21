import apiService from "./apiService";

export const getAllNews = async () => {
  const res = await apiService.get(`/service/news`);
  if (!res.error && !res.data?.error) {
    res.data = res.data.data;
  } else {
    res.error = res.data.error.message;
    alert(res.error);
  }
  return res;
};

export const getAllPublications = async (type) => {
  const res = await apiService.get(`/dashboard/publication?type=${type}`);
console.log(res);
  if (!res.error && !res.data?.error) {
    res.data = res.data.data;
  } else {
    res.error = res.data.error.message;
    alert(res.error);
  }
  return res;
};
