import React from 'react';
import { Route } from 'react-router';

import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';

const BaseRouter = () => (
    <div>
        <Route exat path='/' component={ArticleList} />
        <Route exat path='/:articleID' component={ArticleDetail} />
    </div>
)


export default BaseRouter;