import * as React from 'react';
import styled from 'styled-components';




const ProductsAdmin =()=>{
    return(
        <div>
             <form action="http://5.144.96.71:66/api/product" method="post" encType="multipart/form-data"
               >
                <label htmlFor="title">Name</label>
                <input type="text" name="name" id="name" required />
                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price" required />
                <label htmlFor="description">description</label>
                <input type="text" name="description" id="description" />
                <label htmlFor="status">status</label>
                <input type="text" name="status" id="status" />
                <label htmlFor="qty_step">qty_step</label>
                <input type="number" name="qty_step" id="qty_step" />
                <label htmlFor="qty_step">moq</label>
                <input type="number" name="moq" id="moq" />
                <label htmlFor="file">Img</label>
                <input type="file" name="img" id="img" />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default ProductsAdmin