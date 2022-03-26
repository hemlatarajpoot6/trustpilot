import React from "react";
import { Table } from 'antd';

const Tables = () =>{

    const columns = [
        {
          title: 'SKU',
          dataIndex: 'name',
          filters: [
            {
              text: 'Joe',
              value: 'Joe',
            },
            {
              text: 'Category 1',
              value: 'Category 1',
              children: [
                {
                  text: 'Yellow',
                  value: 'Yellow',
                },
                {
                  text: 'Pink',
                  value: 'Pink',
                },
              ],
            },
            {
              text: 'Category 2',
              value: 'Category 2',
              children: [
                {
                  text: 'Green',
                  value: 'Green',
                },
                {
                  text: 'Black',
                  value: 'Black',
                },
              ],
            },
          ],
          filterMode: 'tree',
          filterSearch: true,
          onFilter: (value, record) => record.name.includes(value),
          width: '30%',
        },
        {
          title: 'Product name',
          dataIndex: 'age',
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: 'Product URL',
          dataIndex: 'address',
          filters: [
            {
              text: 'London',
              value: 'London',
            },
            {
              text: 'New York',
              value: 'New York',
            },
          ],
          onFilter: (value, record) => record.address.startsWith(value),
          filterSearch: true,
          width: '40%',
        },
        {
            title: 'Product image URL',
            dataIndex: 'imageurl',
            sorter: (a, b) => a.imageurl - b.imageurl,
          },
          {
            title: 'Price',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price,
          },
          {
            title: 'Currency',
            dataIndex: 'corrency',
            sorter: (a, b) => a.corrency - b.corrency,
          },
          {
            title: 'GTIN',
            dataIndex: 'gtin',
            sorter: (a, b) => a.gtin - b.gtin,
          },
          {
            title: 'Brand',
            dataIndex: 'brand',
            sorter: (a, b) => a.brand - b.brand,
          },
          {
            title: 'MPN',
            dataIndex: 'mpn',
            sorter: (a, b) => a.mpn - b.mpn,
          },
          {
            title: 'Google Merchant Center product ID',
            dataIndex: 'googlemerchant',
            sorter: (a, b) => a.googlemerchant - b.googlemerchant,
          },
          {
            title: 'Product category',
            dataIndex: 'producycategory',
            sorter: (a, b) => a.producycategory - b.producycategory,
          },
          {
            title: 'Variant group ID',
            dataIndex: 'variantgroup',
            sorter: (a, b) => a.variantgroup - b.variantgroup,
          },
          {
            title: 'Variant size',
            dataIndex: 'variantsize',
            sorter: (a, b) => a.variantsize - b.variantsize,
          },
          {
            title: 'Variant color',
            dataIndex: 'variantcolor',
            sorter: (a, b) => a.variantcolor - b.variantcolor,
          },
          {
            title: 'Variant material',
            dataIndex: 'variantmaterial',
            sorter: (a, b) => a.variantmaterial - b.variantmaterial,
          },
          {
            title: 'Variant pattern',
            dataIndex: 'variantpattern',
            sorter: (a, b) => a.variantpattern - b.variantpattern,
          },
          {
            title: 'Variant age group',
            dataIndex: 'variantage',
            sorter: (a, b) => a.variantage - b.variantage,
          },
          {
            title: 'Variant gender',
            dataIndex: 'variantgender',
            sorter: (a, b) => a.variantgender - b.variantgender,
          },
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          imageurl: "https://example.com/toy-car-1.jpg",
          price: "9.90",
          corrency: 'EUR',
          gtin: '012345678901',
          brand: 'Brand1',
          mpn: 'MPN1',
          googlemerchant: 'GoogleMerchantCenterProductId1',
          producycategory: 'Toy Cars',
          variantgroup: 'toycars',
          variantsize: 'small',
          variantcolor: 'red',
          variantmaterial: '',
          variantpattern: '',
          variantage: 'kids',
          variantgender: 'unisex'
        },
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            imageurl: "https://example.com/toy-car-1.jpg",
            price: "9.90",
            corrency: 'EUR',
            gtin: '012345678901',
            brand: 'Brand1',
            mpn: 'MPN1',
            googlemerchant: 'GoogleMerchantCenterProductId1',
            producycategory: 'Toy Cars',
            variantgroup: 'toycars',
            variantsize: 'small',
            variantcolor: 'red',
            variantmaterial: '',
            variantpattern: '',
            variantage: 'kids',
            variantgender: 'unisex'
          },
          {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            imageurl: "https://example.com/toy-car-1.jpg",
            price: "9.90",
            corrency: 'EUR',
            gtin: '012345678901',
            brand: 'Brand1',
            mpn: 'MPN1',
            googlemerchant: 'GoogleMerchantCenterProductId1',
            producycategory: 'Toy Cars',
            variantgroup: 'toycars',
            variantsize: 'small',
            variantcolor: 'red',
            variantmaterial: '',
            variantpattern: '',
            variantage: 'kids',
            variantgender: 'unisex'
          },
      ];
      
      function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
      }

    return(
        <React.Fragment>
            <Table columns={columns} dataSource={data} onChange={onChange} className="table-content" />
        </React.Fragment>
    )
};

export default Tables;