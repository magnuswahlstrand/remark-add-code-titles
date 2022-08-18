export const transform = () => {
    console.log("hej")
}

export const attacher = (config = {}) => {
    console.log(config)
    return transform;
};
