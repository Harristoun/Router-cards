import React from 'react';

const HomePage = () => {
    const hanldeClick = () =>{
    
    }
    return (
        <div className='wrapp'>
            <h1 className='secondCover'>Cover</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium praesentium, veniam maiores</h3>
            <button className='button' onClick={hanldeClick}>Нажми на меня Если посмеешь!!!</button>
        
            <footer className='footer'>Cover template for <b>Bootstrap,</b>by<b>@mdo</b></footer>
        </div>
    );
};

export default HomePage;
