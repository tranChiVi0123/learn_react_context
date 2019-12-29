/*
 * Created by @tranphuquy19 on 07/12/2019
 * Email: tranphuquy19@gmail.com
 */
const objectInit = {number: 0, str: ''};

const objectReducer = (state , action) => {
    let obj = {...state};
    switch (action.type) {
        case 'TANG':
            obj.number++;
            return obj;
        case 'GIAM':
            obj.number--;
            return obj;
        case 'STR':
            obj.str = action.payload;
            return obj;
        default:
            return state;
    }
};
export {
    objectInit, objectReducer
}
