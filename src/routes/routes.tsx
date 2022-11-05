import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../layouts';
import { HeaderAuth } from '../layouts';
import { HomePageScreen, MyQuestionsScreen, ProfileScreen, RegAuthScreen, LoginAuthScreen, AskQuestionScreen, QuestionScreen, EditQuestionScreen, AboutUsScreen, SearchScreen, NotFound, ForgotPasswordScreen, StrangerProfileScreen } from '../pages';

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
        <Route path='/' element={<HeaderAuth />}>
            <Route path='/auth/login' element={<LoginAuthScreen />} />
            <Route path='/auth/register' element={<RegAuthScreen />} />
            <Route path='/auth/forgot' element={<ForgotPasswordScreen />} />
        </Route>
    </Routes>
);

export default ScreensRoot;