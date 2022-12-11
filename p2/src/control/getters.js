import axios from "axios"
import Cookies from "universal-cookie";
const cookies = new Cookies();
const numberOfFlowers = { value: 0 }



export const getUserName = async () => {

    try {
        const res = await axios.get('/userName')
        return res.data

    }

    catch (e) {
        console.log(e)
    }
}


export const getNumberOfFlowers = async () => {

    const res = await axios.get('/getNumberOfFlowers');

    numberOfFlowers.value = parseInt(res.data.value / 8);

    if (res.data.value % 8 !== 0)  numberOfFlowers.value += 1

    return numberOfFlowers

}


var init = []


export const getFlowerArrayForCart = async () => {

    var indexes = [];

    if (cookies.get(("cart")))

        init = cookies.get(("cart"));

    for (let i = 0; i < init.length; i++) {

        if (init[i]) indexes.push(i + 1)

    }

    try {

        const res = await axios.get('/cart', {

            params: {
                cart: indexes
            }

        })
        return res.data;

    }
    catch (e) {

        console.log(e)
    }

}
export const getFlowerArray = async (id,numberOfFlowers) => {

    if ((parseInt(id)>0&&id<numberOfFlowers+1)) {
        
    try {
        
            const res = await axios.get('/flower', {
            params: {
                page: id
            }
        })
        return res.data;
    }

    catch (e) {
        console.log(e)
    }
}
else return (404)

}