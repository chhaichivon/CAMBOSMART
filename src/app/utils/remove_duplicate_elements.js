export const remove = (list) => {
    list.filter(function (item, index, inputArray) {
        return inputArray.indexOf(item) == index;
    })
};

