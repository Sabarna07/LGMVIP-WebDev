import React from 'react'
import Layout from './Layout'

const Home = () => {
    return (
        <Layout>
            <div className="container">
                <div className="container__wrapper">
                    <div className="info__text">
                        <h1>Welcome To Infinity Family</h1>
                        <a href="/users">See Users</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home
