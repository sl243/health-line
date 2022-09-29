import React from 'react';
import './QuestionAns.css'

const QuestionAns = () => {
    return (
        <div className='question-answer'>
            <div className='first-qa'>
                <h2 className='question'>How Does React Works ?</h2>
                <p className='answer'>ReactJS is one of the most popular JavaScript libraries for mobile and web application development. Created by Facebook, React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.</p>
                <p className='answer'>It's important to note that ReactJS is not a JavaScript framework. That's because it's only responsible for rendering the components of an application's view layer. React is an alternative to frameworks like Angular and Vue, which all allow to create complex functions.</p>
                <p className='answer'>React has some core features that make it stand out from other JavaScript libraries. The following sections will introduce you to these features and explain how they contribute to mobile and web application development.</p>
                <p className='answer'>JSX</p>
                <p className='answer'>Virtual DOM</p>
                <p className='answer'>Components and Props</p>
                <p className='answer'>State Management</p>
                <p className='answer'>Programmatic Navigation</p>
            </div>
            
        </div>
    );
};

export default QuestionAns;