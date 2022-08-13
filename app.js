var list_yourcuts=[
    {
        img: "./images/users/user1.png",
        title: "Lập trình không khó"
    },
    {
        img: "./images/users/user2.png",
        title: "Luyện thi Toeic 2022"
    },
    {
        img: "./images/users/user3.png",
        title: "Music Vpop 2022"
    },
    {
        img: "./images/users/user4.png",
        title: "Hóng hớt Cần Thơ"
    },
    {
        img: "./images/users/user5.png",
        title: "Luyện thi Toeic 2022"
    },
    {
        img: "./images/users/user2.png",
        title: "Luyện thi Toeic 2022"
    }
]

var shotcut=list_yourcuts.map(function (item){
    return `<li>
                <div class="shortcut">
                    <img src="${item.img}" class="img_shortcut" alt="">
                    <p>${item.title}</p>
                </div>
            </li>`;
        
});
var list_group = document.querySelector(".your_shortcuts ul");
list_group.innerHTML=shotcut.join('')

