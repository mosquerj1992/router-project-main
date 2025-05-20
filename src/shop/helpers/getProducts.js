export const getProducts = async (query = 'fashion', orientation = 'landscape') => {


  const url = `https://api.pexels.com/v1/search?query=${query}&orientation=${orientation}`;
  console.log(url);
  const request = await fetch(url, {
    method: "GET",
    headers: {
      Authorization:
        "uAsZ69pYggoyX3batfPQ7tS7UqZGNNP3CqFGmkYyBIWrB9NxJ0ZqoVpC",
    },
  });

  const { photos, total_results, page } = await request.json();
  
  return { photos, total_results, page };
}