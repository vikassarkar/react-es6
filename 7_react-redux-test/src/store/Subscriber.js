

const Subscriber = (store) => {
    return () => {       
        console.log(" >>>>> Observing From store >> subscriber.js >>>>>");
        console.log(store.getState());
    }
}

export default Subscriber;