const murid = [];
murid[0] = {
    name : "Monica",
    gender : "Female",
    age : 17, 
    email : "monica@dingdong.com",
    favoritColor : ["yellow", "pink", "white", "purple"],
    IsHavePet : "yes",
    education : [
        {
            name : "SD 01",
            City : "jakarta",
            graduate : 2016,

        },
        {
            name : "SMP 02",
            City : "jakarta",
            graduate : 2019,
        },
        {
            name : "SMA 03",
            City : "Tangerang",
        }
    ],
    favoritRestaurant : ["Bento", "sushi", 
    "pancake", "eggy", "tempura","eggy", 
    "padang", "Tteok"],
}
murid[1]={
    name : "Wendy",
    gender : "Male",
    age : 23, 
    email : "wendy@dingdong.com",
    favoritColor : ["blue", "black", "gray"],
    IsHavePet : "no",
    education : [
        {
            name : "SD 02",
            City : "jakarta",
            graduate : 2010,

        },
        {
            name : "SMP 03",
            City : "bogor",
            graduate : 2013,
        },
        {
            name : "SMA 01",
            City : "surabaya",
            graduate : "2016",
        },
        {
            name : "Universitas Maju",
            city : "Tangerang",
        }
    ],
    favoritRestaurant : ["tempura", "bento", "sushi", "pancake", "padang", 
                            "katsu", "geprek", "eggy"],
}

console.log("Nama              : " + murid[1].name);
console.log("SMA               : " + murid[1].education[2].name);
console.log("Kota              : " + murid[1].education[2].City);
console.log("Makanan Favorit   : " + murid[1].favoritRestaurant[5]);
console.log("warna Favorit     : " + murid[1].favoritColor[1]);
















