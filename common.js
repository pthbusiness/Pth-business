

const container = document.querySelector(".container");
fetch('products.json')
    .then(response => response.json()) // 2. Convert the raw file data into a JS object
    .then(products => {
        // 3. Now run your existing loop inside here
        

        products.forEach(item => {
            const card = document.createElement("span");
            card.setAttribute("class", "con");
            card.innerHTML = `
        <div class="img");"></div>
        <style>
            .img {
                background: url("${item.img}");
                height: 60%;
                width: 90%;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                margin-left: 6%;
                border-radius: 5px;
                margin-bottom: 5%;
            }
        </style>
                <h2>${item.name}</h2>
                <p>${item.des}</p>
        
        `;
            const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { 
    threshold: 0.15
});

document.querySelectorAll('.con').forEach(div => {
    scrollObserver.observe(div);
});
        container.appendChild(card);

        card.addEventListener('click', () => {
                const url = `product page.html?name=${encodeURIComponent(item.name)}&img=${encodeURIComponent(item.img)}&des=${encodeURIComponent(item.des)}`;
                window.open(url, '_blank');
            });
        });
    })
    .catch(error => console.error("Error loading products:", error));

