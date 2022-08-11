const express = require('express');
const app = express();

app.set("view engine", "ejs")

app.use(express.static('./styles'));

app.use(express.static('./images'));

app.get('/', (req, res) => {

    let data = [
        { post: 'vk.avif', title: "Vikrant Rona", lang: "Kannada,Hindi,tamil,telgu" },
        { post: 'lsg.avif', title: "Lala Singh Chadda", lang: "Hindi,tamil,telgu" },
        { post: 'sr.avif', title: "Sita Ramam", lang: "Hindi,tamil,telgu,malayalam" },
        { post: 'b.avif', title: "Bimbasara", lang: "telgu" },
        { post: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NDBrIGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00317972-gflbwpunba-portrait.jpg', title: "Macherla Niyojkavargam", lang: "telgu,tamil" }

    ]

    let data2 = [{ post: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTQwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshops-collection-202007231330.png" },
    { post: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/fitness-collection-2020081150.png" },
    { post: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-collection-202007220710.png" },
    { post: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-collection-202007220710.png" },
    { post: "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MSBFdmVudA%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202007220710.png" }]
    res.render('home', { title: "Bookmyshow", data,data2 })
})

app.listen(3000, () => {
    console.log("listening to server at port 3000");
})