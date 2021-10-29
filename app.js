var app = new Vue ({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/green-sock.png',
        inventory: 9,
        information: ["80% cotton", "20% polyester", "Gender neutral"],

        variants: [
            {
                variantId: 2214,
                variantColor: "#28945C",
                variantImage: './assets/green-sock.png'
            },
            {
                variantId: 2215,
                variantColor: "#283749",
                variantImage: './assets/blue-sock.png'
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart++;
        },
        removeFromCart() {
            this.cart--;
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})