if (Cookies.get('visited') === 'true') {
    document.write('Welcome back!!');
    console.log('Visited before!');
} else {
    Cookies.set('visited', 'true', {
        expires: 8
    });
    document.write('Welcome!');
    console.log('First visit!');
};