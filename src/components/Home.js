import React , { useEffect } from 'react';
import { useDispatch } from "react-redux";
//API
import { cartSliceApi , useGetAllCartQuery } from '../redux/features/cartSliceApi';

const Home = () => {
    // const { items, status } = useSelector(state => state.carts)
    const dispatch = useDispatch()
    const { data, error, isLoading } = useGetAllCartQuery();
    // useEffect(() => {
    //     dispatch(useGetAllCartQuery())
    // }, [])
    return (
        <div>
            {
                isLoading ? (
                    <p>در حال بارگذاری...</p>
                ) : error ? (
                    <p>خطا...</p>
                ) : (
                    <>
                        <h2>محصولات جدید</h2>
                        <div>
                            {
                                data.map(cart => <div key={cart.id}>
                                    <h3>{cart.name}</h3>
                                    <img src={cart.image} alt={cart.name} />
                                </div>)
                            }

                        </div>
                    </>
                )}
        </div>
    );
};

export default Home;