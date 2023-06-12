export const data = (state) => {
    // console.log(state.json_data);
    let json_data = [
        {
            form : [
                {
                    title : "header",
                    initialData : [
                        {id: 0, name: "Home"},
                        {id: 1, name: "About"},
                        {id: 2, name: "Contact"},
                        {id: 3, name: "Features"}
                    ]
                }
            ]
    },
    {
        form : [
            {
                title : "content",
                initialData : [
                    {id: 0, name: "Hotel", img: "images/hotel.png"},
                    {id: 1, name: "Flight", img: "images/flight.png"},
                    {id: 2, name: "Car Hire", img: "images/car.png"},
                    {id: 3, name: "Boat", img: "images/ship.png"},
                    {id: 4, name: "Train", img: "images/car.png"},
                {id: 5, name: "Bus", img: "images/car.png"}
                ]
            }
        ]
    },
    {
        form : [
            {
                title : "sidebar",
                initialData : [
                    {id: 0, name: "Dashboard", img: "images/pin.png"},
                    {id: 1, name: "Booking", img: "images/wallet.png"},
                    {id: 2, name: "Online Consultants", img: "images/files.png"},
                    {id: 3, name: "Refer a friend", img: "images/call.png"},
                    {id: 4, name: "Support", img: "images/phone.png"},
                    {id: 5, name: "Offer", img: "images/wheel.png"}
                ]
            }
        ]   

    }
]
const title = json_data[0]?.form[0]?.initialData
const title2 = json_data[1]?.form[0]?.initialData
const title3 = json_data[2]?.form[0]?.initialData
console.log(title, title2, title3);
    return json_data
}
export const json_data = data();