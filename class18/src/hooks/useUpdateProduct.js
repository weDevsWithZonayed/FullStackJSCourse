import { useMutation, useQueryClient } from "@tanstack/react-query";

const updateProduct = async ({ id, productData }) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "PUT", // You can change this to 'PATCH' if desired
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (!res.ok) {
    throw new Error("Error updating product");
  }

  return res.json(); // The updated product object
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      // Invalidate and refetch product queries to reflect the updated product data
      queryClient.invalidateQueries(["products"]);
    },
  });
};
