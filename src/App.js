import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import Swal from 'sweetalert2';

import './App.css';
import Navbar from './components/Navbar';
import BG_IMAGE from './assets/cf_bg.jpg';
import Main from './components/Main';
import Loader from './global/Loader';

function App() {
    const [currentAccount, setCurrentAccount] = useState('');
    const [loading, setLoading] = useState('');
    const [projects, setProjects] = useState([]);

    const loadWeb3 = async () => {
        // Modern dapp browsers...
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            try {
                await window.ethereum.enable();
                const { web3 } = window;
                const accounts = await web3.eth.getAccounts();
                setCurrentAccount(accounts[0]);
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'User Rejected the Request!',
                });
            }
        }
        // Legacy dapp Browser...
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No browser wallet detected. You should consider trying MetaMask!',
            });
        }
    };

    useEffect(() => {
        console.log('App EFFECT!');
        loadWeb3();
    }, []);

    return (
        <div>
            <Navbar currentAccount={currentAccount} />
            <div className="container mt-5">
                <div className="row">
                    <main className="col-lg-12">
                        <div
                            className="p-md-5 mb-4 text-white rounded"
                            style={{
                                backgroundImage: `url(${BG_IMAGE})`,
                                height: '400px',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                            }}
                        />

                        {loading ? <Loader /> : <Main projects={projects} />}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;
