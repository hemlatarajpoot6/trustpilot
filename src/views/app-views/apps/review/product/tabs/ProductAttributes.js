import { Button, Card, Col, Divider, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";

const ProductAttributes = () =>{

    return(
        <React.Fragment>
<h3>You're collecting attribute ratings in these categories
</h3>
<Row>
    <Col xs={24} sm={24} md={24} lg={24}>
    <Card>
        <h3>Toys & Games</h3>
        <Divider />
        <p>Stuffed Animals2 products</p>
        <Button><PlusCircleOutlined /> Add attribute</Button>
        <Divider />
        <p>Toy Cars2 products</p>
        <Button><PlusCircleOutlined /> Add attribute</Button>
    </Card>
    </Col>
</Row>
<Row>
    <Col xs={24} sm={24} md={24} lg={25}>
    <Card>
        <p>Uncategorized3 products</p>
        <Button><PlusCircleOutlined /> Add attribute</Button>
        <div>
        <p><b>Tip</b>: Got different products?  <Link to="">Organize 
            your products into categories</Link>  so you can easily add more attributes.</p>
        </div>
    </Card>
    </Col>
</Row>
        </React.Fragment>
    )
};
 
export default ProductAttributes;