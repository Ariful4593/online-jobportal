import React from 'react';
import './NewFreelancer.css'
const NewFreelancer = ({ newUser, handleBlur }) => {
    return (
        <div>
            {newUser && (
                <input
                    className='mb-2 w-100 enter-name'
                    onBlur={handleBlur}
                    type='text'
                    name='name'
                    placeholder='Enter Your Name'
                    required
                />
            )}


            {newUser && (
                <input
                    className='mb-2 w-100 enter-email'
                    onBlur={handleBlur}
                    type='text'
                    name='email'
                    placeholder='Enter email'
                    required
                />
            )}

            {newUser && (
                <input
                    className='mb-2 w-100 enter-pass'
                    onBlur={handleBlur}
                    type='password'
                    name='password'
                    placeholder='Enter password'
                    required
                />
            )}
        </div>
    );
};

export default NewFreelancer;