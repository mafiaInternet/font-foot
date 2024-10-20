import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { getProducts } from '../../state/Product/Action';
import Card from './components/Card';


const Product = () => {
    const product = useSelector(store => store.product)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    console.log(product)
    return (
        <div className='product w-4/5 mx-auto'>
            <div className='product--title flex justify-between py-3 text-green-600'>
                <h4 className='text-2xl font-bold'>Tất cả sản phẩm</h4>
                <Link to='san-pham'>Xem thêm</Link>
            </div>
            <Carousel  showArrows={true} emulateTouch={true}>
            {product && product.products.length > 0 && product.products.map((item, index) => {
                // Kiểm tra nếu đã đến cuối danh sách để không gây lỗi
                const length = index + 1;

                const nextProduct = length < product.products.length ? product.products[index + 1] : product.products[0];

                return (
                    <div className='carousels-item flex' key={index}>
                    <Link to={`product--details/${item.id}`} className='item w-1/5'>
                                <Card product={item} />
                            </Link>
                        {nextProduct  && ( // Kiểm tra nếu có sản phẩm tiếp theo
                            <Link to={`product--details/${item.id}`} className='item w-1/5'>
                                <Card product={nextProduct} />
                            </Link>
                        )}
                    </div>
                );
            })}
        </Carousel>
        </div>
    );
}

export default Product;
