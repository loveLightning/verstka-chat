import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../layouts';
import { HomePageScreen } from '../pages';
import { QuestionScreen } from '../pages/question-screen';


const ScreensRoot = () => (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePageScreen />} />
            <Route path='question/:id' element={<QuestionScreen />} />
        </Route>
        <Route>
            <Route path='/new-question' />
            <Route path='/auth/register' />
            <Route path='/auth/login' />
            <Route path='/profile' />
            <Route path='/question/edit' />
        </Route>
    </Routes>
);

export default ScreensRoot;