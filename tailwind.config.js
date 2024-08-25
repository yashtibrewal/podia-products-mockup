/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                white: {
                    DEFAULT:'#FFFFFF',
                    lotion: '#F9FBFD',
                },
                blue: {
                    ocean: '#4B2AAD',
                },
                voilet: {
                    ube: '#9484c6',
                    russian: '#201445',
                },
                yellow:{
                    isabelline:'#F5EFEB'
                }

            }
        },
    },
    plugins: [],
}