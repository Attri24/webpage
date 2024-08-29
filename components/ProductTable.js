import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';

const ProductTable = ({ addToCompare }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products.map(product => ({ ...product, key: product.id })));
                setLoading(false);
            });
    }, []);

    const columns = [
        {
            title: 'Image',
            dataIndex: 'thumbnail',
            render: text => <img src={text} alt="Product" className="w-16 h-16" />,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            sorter: (a, b) => a.title.localeCompare(b.title),
        },
        {
            title: 'Description',
            dataIndex: 'description',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: 'Discount',
            dataIndex: 'discountPercentage',
            sorter: (a, b) => a.discountPercentage - b.discountPercentage,
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
        },
        {
            title: 'Category',
            dataIndex: 'category',
        },
        {
            title: 'Action',
            dataIndex: '',
            render: (record) => (
                <Button
                    onClick={() => addToCompare(record)}
                    disabled={record.isCompared}
                >
                    {record.isCompared ? 'In Compare' : 'Compare'}
                </Button>
            ),
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={products}
            rowKey="key"
            pagination={false}
            loading={loading}
        />
    );
};

export default ProductTable;

