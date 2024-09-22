import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products"); // Replace with your API endpoint
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export const useFetchProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
