import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrolltoTop = () => {
const {pathname} = useLocation();
useEffect(() => {
    window.scrollTo({top:0, behavior: 'smooth'});
}, [pathname]);
return null;
};

export default ScrolltoTop;