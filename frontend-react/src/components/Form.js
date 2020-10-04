import React from 'react';
import { Form, Input, Button } from 'antd';

import axios from "axios";


const FormItem = Form.Item;

class CustomForm extends React.Component {


    handleSubmit(e, requestType, articleID) {
        e.preventDefault();
        const title = e.target.elements.title.value;
        const content = e.target.elements.content.value;

        switch (requestType) {
            case "post":
                return axios.post("http://127.0.0.1:8000/api/", {
                    title: title,
                    content: content
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))

            case "put":
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            default:
                break;
        }

    }

    render() {
        return (
            <div>
                <Form onSubmitCapture={(event) => this.handleSubmit(event, this.props.requestType, this.props.articleID)}>

                    <FormItem label="Title" style={{ marginLeft: "25px" }} >
                        <Input name="title" placeholder="Put a Title here" />
                    </FormItem>

                    <FormItem label="Content">
                        <Input name="content" placeholder="Enter some content here" />
                    </FormItem>


                    <FormItem >
                        <Button type="primary" htmlType="submit"> Submit</Button>
                    </FormItem>
                </Form>
            </div >
        )
    }
}

export default CustomForm;