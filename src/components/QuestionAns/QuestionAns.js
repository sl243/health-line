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
            <div>
                <h2 className='question'>Difference between State and Props</h2>
                <p className='answer'>1. Props are read-only. and 	State changes can be asynchronous.</p>
                <p className='answer'>2. Props are immutable. and 	State is mutable.</p>
                <p className='answer'>3. Props allow you to pass data from one component to other components as an argument. and State holds information about the components.</p>
                <p className='answer'>4. Props can be accessed by the child component. and State cannot be accessed by child components.</p>
                <p className='answer'>5. Props are used to communicate between components. and States can be used for rendering dynamic changes with the component.</p>
                <p className='answer'>6. Stateless component can have Props. and Stateless components cannot have State.</p>
                <p className='answer'>7. Props make components reusable. and State cannot make components reusable.</p>
                <p className='answer'>8. Props are external and controlled by whatever renders the component. and The State is internal and controlled by the React Component itself.</p>
            </div>
            <div>
                <h2 className='question'>What are work useeffect in react ?</h2>
                <p className='answer'>JSX</p>
            </div>
        </div>
    );
};

export default QuestionAns;