import axios from 'axios';
import React from 'react';

import { Card } from 'antd';

class ArticleDetail extends React.Component {

    state = {
        article: {}
    }

    componentDidMount() {
        const articleID = this.props.match.params.articleID;

        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                this.setState({
                    article: res.data
                });

            })
    }



    render() {
        return (
            <Card title={this.state.article.title} style={{ backgroundColor: '#28D322' }}>
                <p>{this.state.article.content}</p>
            </Card>
        )

    }
}

export default ArticleDetail;