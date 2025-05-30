import React, { useEffect, useState } from "react";
import { createProducts } from "../services/products";

function CreateProducts() {
  const [form, setFormData] = useState({
    image: "",
    name: "",
    price: "",
    discount: "",
    bgcolor: "",
    textcolor: "",
    panelcolor: "",
  });
  // const [products,setProducts]=useState([]);
  function handleChange(e) {
    if (e.target.name === "image") {
      console.log(e.target.files[0]);
      setFormData((prev) => {
        return {
          ...prev,
          image: e.target.files[0],
        };
      });
    } else {
      setFormData((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      });
    }
  }

  async function handleSubmit(e) {
    // setProducts(prev=>[...prev,form])
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", form.image);
    formData.append("name", form.name);
    formData.append("price", form.price);
    formData.append("discount", form.discount);
    formData.append("bgcolor", form.bgcolor);
    formData.append("textcolor", form.textcolor);
    formData.append("panelcolor", form.panelcolor);
    console.log("form.image:", form.image); // Should show File object
    console.log("type:", typeof form.image);

    console.log(formData);
    let item = await createProducts(formData);
    console.log("product", item);
    if(item.data==="successfully added"){
      alert("successfully created product")
    }
    setFormData({
      image: "",
      name: "",
      price: "",
      discount: "",
      bgcolor: "",
      textcolor: "",
      panelcolor: "",
    });
  }
  useEffect(() => {
    console.log("form.image:", form.image);
    console.log("type:", typeof form.image);
  }, [form]);
  return (
    <div>
      <div class="min-h-screen flex flex-col">
        <div class="container px-10 py-20 flex flex-grow">
          <div class="w-[25%] flex h-screen flex-col items-start">
            <div class="flex flex-col">
              <a class="block w-fit mb-2" href="">
                All Products
              </a>
              <a class="block w-fit mb-2" href="">
                Create new product
              </a>
            </div>
          </div>
          <main class="w-3/4 bg-white p-8 shadow ml-4">
            <h2 class="text-xl font-bold mb-4">Create New Product</h2>
            <form
              autoComplete="off"
              action=""
              method="post"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div class="mb-6">
                <h3 class="text-lg font-semibold mb-2">Product Details</h3>
                <div class="mb-4">
                  <label class="block mb-2 font-medium">Product Image</label>
                  <input
                    name="image"
                    type="file"
                    //  accept="image/*"
                    class="py-2 px-4 rounded"
                    onChange={handleChange}
                  />
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <input
                    name="name"
                    type="text"
                    placeholder="Product Name"
                    class="border p-2 rounded w-full"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <input
                    name="price"
                    type="text"
                    placeholder="Product Price"
                    class="border p-2 rounded w-full"
                    value={form.price}
                    onChange={handleChange}
                  />
                  <input
                    name="discount"
                    type="text"
                    placeholder="Discount Price"
                    class="border p-2 rounded w-full"
                    value={form.discount}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <h3 class="text-lg font-semibold mb-2">Panel Details</h3>
                <div class="grid grid-cols-2 gap-4">
                  <input
                    name="bgcolor"
                    type="text"
                    placeholder="Background Color"
                    class="border p-2 rounded w-full"
                    value={form.bgcolor}
                    onChange={handleChange}
                  />
                  <input
                    name="panelcolor"
                    type="text"
                    placeholder="Panel Color"
                    class="border p-2 rounded w-full"
                    value={form.panelcolor}
                    onChange={handleChange}
                  />
                  <input
                    name="textcolor"
                    type="text"
                    placeholder="Text Color"
                    class="border p-2 rounded w-full"
                    value={form.textcolor}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <input
                class="px-5 py-2 rounded mt-3 bg-blue-500 text-white"
                type="submit"
                value="Create New Product"
              />
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default CreateProducts;
