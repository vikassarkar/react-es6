

const Subscriber = (Store) => {
    return () => {
        //const { application } = store.getState();        
        console.log(" >>>>> From store >> subscriber.js >>>>>");
        console.log(Store.getState())
        // switch (application.status) {
        //     case ApplicationStatus.Uninitialized:
        // }
    }
}

export default Subscriber;