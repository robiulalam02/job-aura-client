import React from 'react';
import { MoonLoader } from 'react-spinners';

const Loading = ({ loading }) => {
    return (
        <div className='flex justify-center h-dvh items-center'>
            <MoonLoader color='#289db9' loading={loading} />
        </div>
    );
};

export default Loading;