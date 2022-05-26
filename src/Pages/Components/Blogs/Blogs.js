import React from 'react';

const Blogs = () => {
    return (
        <div className='text-left mx-auto w-11/12 md:w-10/12 '>
            <div>
                <h2 className='text-3xl text-primary mb-12 font-bold mt-20'>THE WAY TO INPROVE REACT PERFORMANCE</h2>
                <strong className='text-xl '>We can inprove the performance using the methods :</strong>
                <ul className='mt-6 list-disc'>
                    <li>By Using Immutable Data Structures</li>
                    <li>By optimizing defendency</li>
                    <li>By Using React.Fragments to Avoid Additional HTML Element Wrappers</li>
                    <li> By using React.PureComponent</li>
                    <li>Using of React.memo() . It is used to memoize/cache functional components.</li>
                </ul>
            </div>
            <div>
                <h2 className='text-3xl text-primary mb-12 font-bold mt-20'>
                different ways to manage a state in a React application
                </h2>
                <strong className='text-xl mb-56'>We can use this method :</strong>
                <ul className='mt-6 list-disc'>
                    <li>Url state </li>
                    <li>local state</li>
                    <li>Server state</li>
                    <li>Global state</li>
                    <li>Lifted state</li>
                </ul>
            </div>
            <div>
                <h2 className='text-3xl text-primary mb-12 font-bold mt-20'>
                How does prototypical inheritance work
                    
                </h2>
                <p>
                   If we simply describe this, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We know that JavaScript objects have a link to a prototype object. When trying to access a property of an object in JavaScript, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.
                    </p>
            </div>
            <div>
                <h2 className='text-3xl text-primary mb-12 font-bold mt-20'> Using state vs variable</h2>
                <p>Suppose there have this:
                const [products, setProducts] = useState([]).
                 Why we do not set products = [...] instead, you use the setProducts?

                 So we can use the state to store the data and use the setProducts to update the data. Variable do the same thing but state is more efficient. state is easy to easy to update and re-render.state is usefull for using props. we can set value in another components by using props that is passed to the component using state.
                </p>
            </div>

            <div>
                <h2 className='text-3xl text-primary mb-12 font-bold mt-20'>What is unit test</h2>
                <p>Unit test is a way of testing a smallest unit code. It can be logically isolated in a system.This testing methodology is done during the development process by the software developers
                    Why we use this?
                    Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.the bugs of software are often caused by this.It is also important  for ensuring the code
                </p>
            </div>
            
        </div>
    );
};

export default Blogs;