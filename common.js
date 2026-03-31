let products = [
    {
    name : "hellasd",
    img : "STScI-01EVT7X0BR54ZWDP1AG2DA54RA.jpg",
    des : "lorem ispum dolor sit ametsectutur constecutor adipiscising elit."
    },
    {
    name : "xsdjlkvdn",
    img : "STScI-01EVT7X0BR54ZWDP1AG2DA54RA.jpg",
    des : "arebhk  ih ihgiu wuqier hgihdakg oi hi djo khgioad h."
    },
    {
    name : "xsdjlkvdn",
    img : "STScI-01EVT7X0BR54ZWDP1AG2DA54RA.jpg",
    des : "arebhk  ih ihgiu wuqier hgihdakg oi hi djo khgioad h."
    },
    {
    name : "xsdjlkvdn",
    img : "STScI-01EVT7X0BR54ZWDP1AG2DA54RA.jpg",
    des : "arebhk  ih ihgiu wuqier hgihdakg oi hi djo khgioad h."
    },
    {
    name : "xsdjlkvdn",
    img : "STScI-01EVT7X0BR54ZWDP1AG2DA54RA.jpg",
    des : "arebhk  ih ihgiu wuqier hgihdakg oi hi djo khgioad h."
    }
    
]
const container = document.querySelector(".container");
products.forEach(item =>  {
    const card = document.createElement("span");
    card.setAttribute("class", "con");
    card.innerHTML = `
        <div class="img"></div>
        <h2> ${item.name}</h2>
        <p> ${item.des}</p>
        <style>
            .img {
                background: url("${item.img}");
                height: 60%;
                width: 60%;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                margin-left: 21%;
                border-radius: 5px;
            }
        </style>
    `;
    container.appendChild(card);
});