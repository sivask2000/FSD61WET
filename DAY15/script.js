const delay = (ms, callback) => setTimeout(callback, ms);

delay(1000, () => {
    console.log(10);
    delay(1000, () => {
        console.log(9);
        delay(1000, () => {
            console.log(8);
            delay(1000, () => {
                console.log(7);
                delay(1000, () => {
                    console.log(6);
                    delay(1000, () => {
                        console.log(5);
                        delay(1000, () => {
                            console.log(4);
                            delay(1000, () => {
                                console.log(3);
                                delay(1000, () => {
                                    console.log(2);
                                    delay(1000, () => {
                                        console.log(1);
                                        delay(1000, () => {
                                            document.body.innerHTML = '<h1>Happy Independence Day</h1>';
                                            console.log("Happy Independence Day");
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});