import { ADDPRODUCT, VIEWPRODUCT } from "./actions"

const initialState = {
    product: [{
        id: 1,
        name: "Jeans",
        price: 11,
        category: "Women",
        description: "abefjfjejfn",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSdTuUe7dOEt4toKb8ViKmYq9xXXFhc2_w0yvxgLmUmzDe-4baXHgca-nWVw0ZpISWxLeGlPonGEXEgbmJD16dvthgVrHb7BNMpOu4zRDH83Hmpg_LG7v2KDSWm5SQ4F9y0zEx_cWo&usqp=CAc",
    },
    {
        id: 2,
        name: "T-shirt",
        price: 31,
        category: "Men",
        description: "ththhhdfhdfhdff",
        image: "data:image/webp;base64,UklGRq4KAABXRUJQVlA4IKIKAACwNQCdASqYAJgAPkUcjEUioSeSGKZUeAREs4HYDykmkkolZGYhibeVb99wCBh3FXy/sM7pdsH+8cI9z3+rf7vje7lXjsfs3/A9gb9Dehtodeof/B7i360/9PsWmy6Ecclbn9Fq+vdYxAMZuP5thYQ2M+cFqxAAs/bSdnFY1yAd1p3zTA+hxi9qaWsOBjOKHw7+z0DC3ThbPC+rPdz4QL9K26G2z0MGGdbSuUSt6zGymtkLfXHMs7voZd3Nx77FVsQg308gVj18/9uzj6PbvvGGQaHfcshsaOiLbuRK71S8Jv6YBUNcZUz44F7P8xrYIkWs5RMDA+prKyNWKPk1RCUZ7HJqcEgEybIGqJLGzQ3xmIXQhZeU2x4c3w/iiVMyDHFVChH6qDPvtEaTHPUyplVblXEYd1qdjJrzPSRgvVKAyEn56RA2d7cIqXok3F2R0kdBJ+5TQRFrEn82W09TSMHgewOFdT5DNgtfVMStLpvF/uu3BT8XoPpZU4KhhZJ+3l5IwrSRluuJoXmXbGIHoG6Q7Obn0Td1+pSVDrC4jTPigfepzOeUofBaW51f9ou38QuYfvmKdOAA/v2jnErWGphIITpNDI3JdMaXsfPZiCGBAI01XwMuYa+pcms0lsreU64smKWdqkk6hnf1zPVXV98r3/yQw0d3eZZZ7OzRMKYm8gaxgaPo5BviH/2XzJO1jRmM7JWpFeEXUwn/5sIKwUc3JxssFrilNiNSx8mtRj7kIZxzyRuKJLMDArIH0uI8L0H+YOx5wePdwx/oURw+1V3ZkcdN4ZpjlM4kbRyDSSQbTOYWu3M+iMtZFJ48/IcaT6niJtZ1vVuOWApDLomRbO+IqXyJWEEX3ICj8f/edB2kIHxMOLNu3Tr32eAQ+3bGXqe1r/Z9/x3ZGdy7/FEOCOC93FeuTXSepFkBYyjx1Szb0etXgJznPQschxOUdUP+rktRsCXJr3lf+JDJdubaKsPxV9V0frBPLggiJmYm+71deXKU0EAVp7jwm6QsnEeGcc9qQC6nzCYkU3tAzMsBMDep7MH2yeC8PauE6bXsBsFeduwYadbCTRF8TfNkAe1GOK30Q3v6zi35OUNyvO/M99N5NU9UO17oyXjuyK/yjApBGVZ5GWBsO/bfBm+7xEn5qm9YKMgaUY4sEC2O54lyl1co7OdCtjZdPkCy9mE9NhiIgRdx27UqG/GAQSAL9J3MhrgZaqm9kQ7GsR2X72EOk93BY4D6nURTq7WDER5vweAtUfxoPtg1eun8yc5L9LMzcLo+FGgdgnOX7AcaiN/qEKhjFPdg8WzC5EIA223lE8pyyp94sDW7DIe8UBYqyGk/JSWLgLIHTrjDxifxIOCm7LXXluzDHxutQgWTahvdS4rD+C92AEASAIBGzQlTouTG5MvBcgfe/b1hkV0antEamQnz0TU5Vhariq7BfHpBDy6XCRQBPkE7ywl5zkFjJruU/unsnSkad/iB/1w5HH0MM3lglYIahrPP5V7/nraRC+0PfGCmDCM6XKCcNPa7yn4EY2NeHr6rhoI1Nb3z37Ro9vS4EUJBvAIr48yrILGlh/9N5rxzn3itG6JCvZJA57OFGaxjH/66n1VJtwuDnqURhRMcHNHQhOgcCLWlDcSgvtPfVRW7a0pWh9/coEHAJuvfuDHX3oF7juD56wxW+fCt6h2UjEqqjxMIoojqowBrDxuLcnPe6C83dhbCYQ7/JDZ+IlA4qG+G9raKfacbKtKF7JYkCz8LQj48QLDB2FCfSiE04GBKPhndryRbDzAnAFMmnzqKLKqwmnmqHxFc0xUB88mGBRFdWlLP+LDnwp6UnjzS5FfdV9zqqra4TP1W6Qr59ctGWBMjbD3wsu5ULhk61EbXmCkEGntvoQ8kx2GGgf9CqZ8Fa1u3lsQXKTiPU19V0tGRAlt80d6Lt7lijBUa1dNa+FcXtb6U5LFw+2vdJz1bTAFkYKeykCDAHwXnhTHC1VL9qooEtDi76FUdRZp+3xma81ONyZ+ngZ2t+9XrDo3rJz62IEF9PTNu4Ras9zIrrABA5bMufuRmLiHFWONyFNH3AQQSJv3KcF5fNn8+UmWa6ApmIdC2Ry9k1Ph28NggVetWHggDrpkhaz9nPVZkqgENVARA0I0FcS/x5kTr3HuegZNywuO2veEVqHpjow7U4ImzWIlLRn8tACu4edrf6Rtjd5Prxb7RVlUytn8m0Ss5waHspPsJqJPUbT1YpgwRx8tBrXRciz68UsHlmrZTur9b141V1VsPvtKm63+s5A8vXzoX7lTu3wUzwbFSkNltbM9rGnA4c1WJEWqYunf5vWNfC/z/xbNjIydh0zzQJrWku5oP4oy1j0t9Kxt97lQscpl1VJ3uPezQ7SKD/v66KsSRUxxB0sdoUQ86JuIWQEWZo/AGlvc5+ZqnNrR/6apXmymeXqlhtrr8uJqw5aJjKOLtsgywbn8F3/n+3+X3JJEduDXqMJHZswxs+aaexC7cGIPQQryFPjYIDfNECQEhlCcZ70itg47WfdohumVjrItS5aY0wrhMC0s36w8IMfUTD9cmKuMC/4T9M2YqxwZ4PePdzcoD35fyT4AwZgpvxwtX03C2U8/T6+AB5sUdPhF8b0UeFi2aXk167miRM8VsgvwynEY58SI7tOnj9rGxegSR+PQhnGfYaoMwtZEWVkI2nref6xj2VhO7fBaoCcep6g2GyQco3+vfpsJo6j8tFkWZIovuKkF9zw2d/RZYRspgAqzzFvMWzHHNAZ0VyK3cK2+sZFoLQeSALoLCXkQ/EAvVEhNTZ/aiYx37mXE5zWD176Ts2WCM98/qvv6rj3KUc6ffOQfE7RbzwJ6O6D+Q16gcYPhIUhQX5ChIDNYJt+HvMsxRy1YlDoAbR/oYTuakNEEXr1x0en5TDz1ki/IcdMQAZUZahvnP7UknpB4UoVFTp4dyZw6kovpbAjFhcoAYBTra5j01npgFjijwYwQce+UiIN5HXLt+shpe1dxGTCtMLFzpm/iPS/8NnMgJhuutf7tixJkTUrmDufvRqYX7yReQ9C5VXDkU7yK3S/x8uuO9nIdawZHJM+TWU+Cv287mf3/oZ/MCmLYXEAtpyX78HRzc0oKa0jR0hkGtUL51eP3Z7j4Kvz0TTMfQlMiXc5XLzsrWZ40ASUCAA39mbNRujYI4QSrlcc4iPH+VG6OdXmXYPskyNCCWHQvIFgcF+LLTKsDqdG2GESsqBcCnHJ19WgWBtoUsWxjG9Sz/yVDEybn0DAUWefRIfvERbGaDZLgtosT6aR9uTJ129WuhjGNnKlpMsRoRFstZbLOUkEp66P+6x0d99JQ8H8xgQrF8MRH0oLd/sqNLPSu0xCdwlLjplGc2ZC/RYpbgd2D0196t9cRt/ewj32ImrCoay5CeV1k9anqB/5Q9Rb3qx0u/XW/mMZCFWNaOcR/B1YxqhIirxfQtXTYwxHIM5eukZv1UD4TtT6tjNAfBe1nq+H4V9Lym34aEXD4/eSmjoydYJSw5Tmh3v+82czM97lgEBAJ9D3+sINSWgX/Q4Frmrl8cd4h+4aOFt+nyUtsZJGhtW2DUpi5LIJC9x7pNxc3mYEjqgpW/ZvIb0R7+QpXKoenmnxIrMQjioAAA",
    },
    {
        id: 3,
        name: "T-shirt",
        price: 51,
        category: "Women",
        description: "ytuio6rjyutyth",
        image: "https://www.bonkerscorner.com/cdn/shop/files/red-signature-oversized-heavyweight-hoodie-fleece-xs-bonkerscorner-store-33689144623204.jpg?v=1728983063",
    },
    {
        category: "Men",
        description: "uhuhuhuhujh",
        id: 4,
        image: "https://assets.ajio.com/medias/sys_master/root/20241211/U7X6/67595c05c148fa1b302dc9e3/-473Wx593H-466921131-black-MODEL.jpg",
        name: "T-shirt",
        price: "12"
    },
    {
        category: "Men",
        description: "vgvgvgv",
        id: 5,
        image: "https://www.highonsoda.com/wp-content/uploads/2025/01/Good-Vibes-Oversized-Printed-T-Shirt-For-Men-Half-Sleeve.jpg",
        name: "T-shirt",
        price: "77"
    },
    {
        category: "Women",
        description: "gygygy",
        id: 6,
        image: "https://www.bonkerscorner.com/cdn/shop/files/sports-dept-oversized-t-shirt-xxs-bonkerscorner-store-33690223411300.jpg?v=1728980782",
        name: "T-shirt",
        price: "33"
    }
    ]
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case VIEWPRODUCT:
            {
                return state;
            }
        case ADDPRODUCT:
            {
                return { ...state, product: [...state.product, action.payload] };
            }
        default:
            {
                return state;
            }
    }
}

export default ProductReducer;