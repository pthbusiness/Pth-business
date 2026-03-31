let products = [
    {
    name : "hellasd",
    img : "4k Desktop Wallpapers Pc.jpg",
    des : "lorem ispum dolor sit ametsectutur constecutor adipiscising elit."
    },
    {
    name : "xsdjlkvdn",
    img : "4k Desktop Wallpapers Pc.jpg",
    des : "arebhk  ih ihgiu wuqier hgihdakg oi hi djo khgioad h."
    },
    {
    name : "xsdjlkvdn",
    img : "4k Desktop Wallpapers Pc.jpg",
    des : "arebhk  ih ihgiu wuqier hgihdakg oi hi djo khgioad h."
    },
    {
    name : "xsdjlkvdn",
    img : "4k Desktop Wallpapers Pc.jpg",
    des : "arebhk  ih ihgiu wuqier hgihdakg oi hi djo khgioad h."
    },
    {
    name : "xsdjlkvdn",
    img : "4k Desktop Wallpapers Pc.jpg",
    des : "arebhk  ih ihgiu wuqier hgihdakg oi hi djo khgioad h."
    }
    
]
const card = document.querySelector(".card");
products.forEach(item =>  {
    const con = document.createElement("span");
    con.setAttribute("class", "con");
    con.innerHTML = `
        <h2> ${item.name}</h1>
        <p> ${item.des}</p>
    `;
    card.appendChild(con);
});