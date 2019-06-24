import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
const Home = () => {
    return (
        <Hero>
            <Banner title="luxurious rooms" subtitle="deluxe rooms starting as low as ₦5000 per night">
                <Link className="btn-primary" to="/rooms">
                    our rooms
                </Link>
            </Banner>
        </Hero>
    );
};

export default Home;
