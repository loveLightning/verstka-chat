import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../layouts';
import { HomePageScreen, MyQuestionsScreen, ProfileScreen, AskQuestionScreen, QuestionScreen, EditQuestionScreen, AboutUsScreen, SearchScreen, NotFound, StrangerProfileScreen, LoginScreen } from '../pages';

const ScreensRoot = () => (
    <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePageScreen />} />
            <Route path='/question/:id' element={<QuestionScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/my-questions' element={<MyQuestionsScreen />} />
            <Route path='/about-us' element={<AboutUsScreen />} />
            <Route path='/search' element={<SearchScreen />} />
            <Route path='/stranger-profile' element={<StrangerProfileScreen />} />
        </Route>
        <Route path='/'>
            <Route path='/ask-question' element={<AskQuestionScreen />} />
            <Route path='/edit-question' element={<EditQuestionScreen />} />
        </Route>
        <Route path='/auth'>
            <Route path='/auth' element={<LoginScreen />} />
        </Route>
    </Routes>
);

export default ScreensRoot;