

const Subscriber = (Store) => {
    return () => {
        console.log(" >>>>> Observing From store >> subscriber.js >>>>>");
        console.log(Store.getState());
    }
}

export default Subscriber;