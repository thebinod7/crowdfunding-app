export const calculatePercentage = (balance, target) => {
    return Math.round(
        (Number(window.web3.utils.fromWei(balance, 'ether')) /
            Number(window.web3.utils.fromWei(target, 'ether'))) *
            100,
    );
};

export const calculateDaysLeft = (endDate) => {
    return Math.ceil((Number(endDate) - new Date().getTime()) / 1000 / 60 / 60 / 24);
};
