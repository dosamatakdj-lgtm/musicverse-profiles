const MUSICVERSE_GROUPS = [
    {
        name: "PANDORA",
        company: "Starship Entertainment",
        debut: "Pandora",
        members: [
            "Jiwoo",
            "Jeemin",
            "Kylie",
            "Hinari",
            "Ruby",
            "Bonnie"
        ],
        page: "pandora.html"
    },

    {
        name: "ELLEVEN",
        company: "Aurelia Entertainment",
        debut: "Lion",
        members: [
            "Ruka",
            "Pharita",
            "Asa",
            "Ahyeon",
            "Yuha",
            "Stella",
            "Rami",
            "Rora",
            "Juun",
            "A-na",
            "Chiquita"
        ],
        page: "elleven.html"
    },

    {
        name: "PINKPUNK",
        company: "LUX Entertainment",
        debut: "Whistle",
        members: [
            "Jisoo",
            "Jennie",
            "Miyeon",
            "Rosé",
            "Mina",
            "Lisa",
            "Minnie"
        ],
        page: "pinkpunk.html"
    },

    {
        name: "STEELROSE",
        company: "XG Labels",
        debut: "Jump",
        members: [
            "Belle",
            "Sooin",
            "Gawon",
            "Garam",
            "Anna",
            "Ella"
        ],
        page: "steelrose.html"
    },

    {
        name: "LESSERAFIM",
        company: "Aurelia Entertainment",
        debut: "HYLT",
        members: [
            "Winter",
            "Yujin",
            "Liz",
            "Haerin",
            "Eunchae",
            "Narin"
        ],
        page: "lesserafim.html"
    },

    {
        name: "ONCE",
        company: "MDX Entertainment",
        debut: "One Spark",
        members: [
            "Sana",
            "Jihyo",
            "Dahyun",
            "Chaeyoung",
            "Tzuyu"
        ],
        page: "once.html"
    },

    {
        name: "GARLS",
        company: "Aurelia Entertainment",
        debut: "Black Mamba",
        members: [
            "Karina",
            "Chaeryeong",
            "Ningning",
            "Yuna",
            "Hanni"
        ],
        page: "garls.html"
    },

    {
        name: "TWOON",
        company: "NOVA Entertainment",
        debut: "Like-OH-Ah",
        members: [
            "Soojin",
            "Soyeon",
            "Yeri",
            "Yuqi",
            "Yeji"
        ],
        page: "twoon.html"
    }
];


const MUSICVERSE_IDOLS = [
    {name:"Jiwoo", group:"PANDORA", company:"Starship Entertainment", image:"jiwoo.jpg", page:"jiwoo.html", positions:"Lead Vocalist · Unnie"},
    {name:"Jeemin", group:"PANDORA", company:"Starship Entertainment", image:"jeemin.jpg", page:"jeemin.html", positions:"Visual · Sub Dancer · Sub Rapper"},
    {name:"Kylie", group:"PANDORA", company:"Starship Entertainment", image:"kylie.jpg", page:"kylie.html", positions:"Main Vocalist"},
    {name:"Hinari", group:"PANDORA", company:"Starship Entertainment", image:"hinari.jpg", page:"hinari.html", positions:"Main Rapper · Lead Dancer"},
    {name:"Ruby", group:"PANDORA", company:"Starship Entertainment", image:"ruby.jpg", page:"ruby.html", positions:"Main Dancer · Lead Rapper · Lead Vocalist · Visual"},
    {name:"Bonnie", group:"PANDORA", company:"Starship Entertainment", image:"bonnie.jpg", page:"bonnie.html", positions:"Maknae · Lead Dancer · Lead Vocalist"},

    {name:"Ruka", group:"ELLEVEN", company:"Aurelia Entertainment", image:"ruka.jpg", page:"ruka.html"},
    {name:"Pharita", group:"ELLEVEN", company:"Aurelia Entertainment", image:"pharita.jpg", page:"pharita.html"},
    {name:"Asa", group:"ELLEVEN", company:"Aurelia Entertainment", image:"asa.jpg", page:"asa.html"},
    {name:"Ahyeon", group:"ELLEVEN", company:"Aurelia Entertainment", image:"ahyeon.jpg", page:"ahyeon.html"},
    {name:"Yuha", group:"ELLEVEN", company:"Aurelia Entertainment", image:"yuha.jpg", page:"yuha.html"},
    {name:"Stella", group:"ELLEVEN", company:"Aurelia Entertainment", image:"stella.jpg", page:"stella.html"},
    {name:"Rami", group:"ELLEVEN", company:"Aurelia Entertainment", image:"rami.jpg", page:"rami.html"},
    {name:"Rora", group:"ELLEVEN", company:"Aurelia Entertainment", image:"rora.jpg", page:"rora.html"},
    {name:"Juun", group:"ELLEVEN", company:"Aurelia Entertainment", image:"juun.jpg", page:"juun.html"},
    {name:"A-na", group:"ELLEVEN", company:"Aurelia Entertainment", image:"a-na.jpg", page:"a-na.html"},
    {name:"Chiquita", group:"ELLEVEN", company:"Aurelia Entertainment", image:"chiquita.jpg", page:"chiquita.html"},

    {name:"Jisoo", group:"PINKPUNK", company:"LUX Entertainment", image:"jisoo.jpg", page:"jisoo.html"},
    {name:"Jennie", group:"PINKPUNK", company:"LUX Entertainment", image:"jennie.jpg", page:"jennie.html"},
    {name:"Miyeon", group:"PINKPUNK", company:"LUX Entertainment", image:"miyeon.jpg", page:"miyeon.html"},
    {name:"Rosé", group:"PINKPUNK", company:"LUX Entertainment", image:"rose.jpg", page:"rose.html"},
    {name:"Mina", group:"PINKPUNK", company:"LUX Entertainment", image:"mina.jpg", page:"mina.html"},
    {name:"Lisa", group:"PINKPUNK", company:"LUX Entertainment", image:"lisa.jpg", page:"lisa.html"},
    {name:"Minnie", group:"PINKPUNK", company:"LUX Entertainment", image:"minnie.jpg", page:"minnie.html"},

    {name:"Belle", group:"STEELROSE", company:"XG Labels", image:"belle.jpg", page:"belle.html"},
    {name:"Sooin", group:"STEELROSE", company:"XG Labels", image:"sooin.jpg", page:"sooin.html"},
    {name:"Gawon", group:"STEELROSE", company:"XG Labels", image:"gawon.jpg", page:"gawon.html"},
    {name:"Garam", group:"STEELROSE", company:"XG Labels", image:"garam.jpg", page:"garam.html"},
    {name:"Anna", group:"STEELROSE", company:"XG Labels", image:"anna.jpg", page:"anna.html"},
    {name:"Ella", group:"STEELROSE", company:"XG Labels", image:"ella.jpg", page:"ella.html"},

    {name:"Winter", group:"LESSERAFIM", company:"Aurelia Entertainment", image:"winter.jpg", page:"winter.html", positions:"Lead Vocalist · Unnie · Visual"},
    {name:"Yujin", group:"LESSERAFIM", company:"Aurelia Entertainment", image:"yujin.jpg", page:"yujin.html", positions:"Main-Lead Dancer · Lead-Sub Vocalist"},
    {name:"Liz", group:"LESSERAFIM", company:"Aurelia Entertainment", image:"liz.jpg", page:"liz.html", positions:"Main Vocalist · Visual"},
    {name:"Haerin", group:"LESSERAFIM", company:"Aurelia Entertainment", image:"haerin.jpg", page:"haerin.html", positions:"Main Dancer · Sub Vocalist"},
    {name:"Eunchae", group:"LESSERAFIM", company:"Aurelia Entertainment", image:"eunchae.jpg", page:"eunchae.html", positions:"Lead Rapper · Lead-Sub Dancer"},
    {name:"Narin", group:"LESSERAFIM", company:"Aurelia Entertainment", image:"narin.jpg", page:"narin.html", positions:"Maknae · Lead Vocalist · Main Rapper · Lead Dancer"},

    {name:"Sana", group:"ONCE", company:"MDX Entertainment", image:"sana.jpg", page:"sana.html"},
    {name:"Jihyo", group:"ONCE", company:"MDX Entertainment", image:"jihyo.jpg", page:"jihyo.html"},
    {name:"Dahyun", group:"ONCE", company:"MDX Entertainment", image:"dahyun.jpg", page:"dahyun.html"},
    {name:"Chaeyoung", group:"ONCE", company:"MDX Entertainment", image:"chaeyoung.jpg", page:"chaeyoung.html"},
    {name:"Tzuyu", group:"ONCE", company:"MDX Entertainment", image:"tzuyu.jpg", page:"tzuyu.html"},

    {name:"Karina", group:"GARLS", company:"Aurelia Entertainment", image:"karina.jpg", page:"karina.html", positions:"Leader · Main Dancer · Lead Rapper · Visual"},
    {name:"Chaeryeong", group:"GARLS", company:"Aurelia Entertainment", image:"chaeryeong.jpg", page:"chaeryeong.html", positions:"Main Dancer · Lead Vocalist"},
    {name:"Ningning", group:"GARLS", company:"Aurelia Entertainment", image:"ningning.jpg", page:"ningning.html", positions:"Main Vocalist"},
    {name:"Yuna", group:"GARLS", company:"Aurelia Entertainment", image:"yuna.jpg", page:"yuna.html", positions:"Lead Dancer · Sub Vocalist · Visual"},
    {name:"Hanni", group:"GARLS", company:"Aurelia Entertainment", image:"hanni.jpg", page:"hanni.html", positions:"Lead Vocalist · Lead Dancer"},

    {name:"Soojin", group:"TWOON", company:"NOVA Entertainment", image:"soojin.jpg", page:"soojin.html", positions:"Main Dancer · Lead Vocalist · Visual"},
    {name:"Soyeon", group:"TWOON", company:"NOVA Entertainment", image:"soyeon.jpg", page:"soyeon.html", positions:"Leader · Main Rapper · Lead Vocalist"},
    {name:"Yeri", group:"TWOON", company:"NOVA Entertainment", image:"yeri.jpg", page:"yeri.html", positions:"Lead Vocalist · Sub Dancer"},
    {name:"Yuqi", group:"TWOON", company:"NOVA Entertainment", image:"yuqi.jpg", page:"yuqi.html", positions:"Main Vocalist · Lead Dancer"},
    {name:"Yeji", group:"TWOON", company:"NOVA Entertainment", image:"yeji.jpg", page:"yeji.html", positions:"Main Dancer · Lead Rapper · Lead Vocalist"}
];
