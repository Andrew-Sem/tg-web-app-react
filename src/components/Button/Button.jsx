import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button className={"button " + props.className} {...props}/>
        </div>
    );
};

export default Button;