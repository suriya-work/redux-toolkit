import React from 'react';
//styled
import { MyHeader, Text, Lists, ListItems } from "../styles/HeaderStyled";
// const pages = ['About', 'Product', 'Store']
const Header = () => {
    return (
        <MyHeader>
            <Text>
                OnlineShope
            </Text>
            <ListItems>
                <Lists>About</Lists>
                <Lists>Product</Lists>
                <Lists>Store</Lists>
            </ListItems>
           
            
        </MyHeader>
    );
};

export default Header;