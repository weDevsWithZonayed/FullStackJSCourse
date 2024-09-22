import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchProducts } from "../../hooks/useFetchProducts";
import { useUpdateProduct } from "../../hooks/useUpdateProduct";
import "./ProductDetailPage.css";
import { Container } from "../../components/common";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data: products } = useFetchProducts();
  const product = products?.find((item) => item.id === parseInt(id));

  const [editMode, setEditMode] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  useEffect(() => {
    if (!!product) {
      setUpdatedProduct({
        title: product?.title || "",
        price: product?.price || "",
        description: product?.description || "",
        image: product?.image || "",
        category: product?.category || "",
      });
    }
  }, [product]);

  const {
    mutate: updateProduct,
    isLoading: isUpdating,
    error: updateError,
  } = useUpdateProduct();

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    updateProduct({ id: product.id, productData: updatedProduct });
    setEditMode(false); // Exit edit mode after submission
  };

  const handleChange = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  };

  return product ? (
    <Container>
      <div className="product-detail-page">
        <div className="product-detail">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          {!editMode ? (
            <>
              <h3>{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
              <button onClick={() => setEditMode(true)}>Edit Product</button>
            </>
          ) : (
            <form onSubmit={handleUpdateProduct} className="edit-form">
              <input
                type="text"
                name="title"
                value={updatedProduct.title}
                onChange={handleChange}
                placeholder="Title"
                required
              />
              <input
                type="number"
                name="price"
                value={updatedProduct.price}
                onChange={handleChange}
                placeholder="Price"
                required
              />
              <textarea
                name="description"
                value={updatedProduct.description}
                onChange={handleChange}
                placeholder="Description"
                required
              />
              <button type="submit" disabled={isUpdating}>
                {isUpdating ? "Updating..." : "Update Product"}
              </button>
            </form>
          )}
          {updateError && <p>Error updating product</p>}
        </div>
      </div>
    </Container>
  ) : (
    <Container>
      <p className="product-not-found">Product not found</p>
    </Container>
  );
};

export default ProductDetailPage;
