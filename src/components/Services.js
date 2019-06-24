import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import { FaCocktail, FaShuttleVan, FaShoppingCart, FaHamburger } from 'react-icons/fa';

class Services extends Component {
    state = {
        services: [
            {
                icon: <FaHamburger />,
                title: 'Amazing Foods',
                description:
                    'Nigerian™ food is one of the best in the world. Enjoy the chilly and spicy local foods such Amala and Ewedu, Egusi and Pounded Yam, Nkwobi, Abacha, Tuwo Shinkafa, Masa, Dambu Nama and many more.'
            },
            {
                icon: <FaCocktail />,
                title: 'Resorts & Relax Centers',
                description:
                    'There is always one or two "Owanbe" - events on the weekends where people will eat and drink for free. Yes for "FREE". BYOB is not in our own culture.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'Amazing Sightseeing',
                description:
                    'We are proud of our heritage. Come and see the beginning of the old African civilization, Nigeria™ is the right destination for you. Come for amazing natures - safari, waterfalls, museums and so in great and nice company'
            },
            {
                icon: <FaShoppingCart />,
                title: 'Go Shopping',
                description:
                    'For your most authentic African custom made attires and outfits, your best and right stop is Nigeria™. We have amazing designers here. They know how to do only one thing - how to make Nigerian™ and African design GREAT AGAIN.'
            }
        ]
    };
    render() {
        return (
            <section className="services">
                <SectionTitle title="services" />
                <div className="services-center">
                    {this.state.services.map((service, index) => {
                        const { icon, title, description } = service;
                        return (
                            <article key={index} className="service">
                                <span>{icon}</span>
                                <h6>{title}</h6>
                                <p>{description}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}

export default Services;
