import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';

const Error = () => {
    return (
        <Hero>
            <Banner title="404" subtitle="Oops! page not found">
                <Link className="btn-primary" to="/rooms">
                    return home
                </Link>
            </Banner>
        </Hero>
    );
};

export default Error;
