// 1. Get the name from the URL
const params = new URLSearchParams(window.location.search);
const targetName = params.get('name');

// 2. Fetch the JSON again on this page
fetch('products.json')
    .then(res => res.json())
    .then(products => {
        // 3. SORT the products by name (A-Z)
        products.sort((a, b) => a.name.localeCompare(b.name));

        // 4. FIND the specific product that matches the URL name
        const product = products.find(p => p.name === targetName);

        if (product) {
            document.getElementById('product-name').innerText = product.name;
            document.getElementById('product-des').innerText = product.des;
        }
    });

    const slider = document.querySelector(".display");
const slides = document.querySelectorAll('.img');
let  idx = 0;

right.addEventListener('click', () => {
    if (idx < slides.length - 1) {
        idx++;
        slides.forEach((slide) => { 
            slide.style.transform = `translateX(-${idx * 100}%)`;
        });
    }
});

left.addEventListener('click', () => {
    if (idx > 0) {
        idx--;
        slides.forEach((slide) => { 
            slide.style.transform = `translateX(-${idx * 100}%)`;
        });
    }
});