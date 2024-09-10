async function login(username, password){
    const url = "https://jdp55ynqtg.execute-api.us-east-1.amazonaws.com/test/login";
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            })

        });
        if (!response.ok) {
            throw new Error("Response Stats: " + response.status);
        }

        const json = await response.json();
        console.log(json);
    }
    catch(error){
        console.error(error.message);
    }

}

export async function register(name, username, email, password){
    const url = "https://jdp55ynqtg.execute-api.us-east-1.amazonaws.com/test/register";
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name: name,
                username: username,
                email: email,
                password: password,
            }),

        });
        if (!response.ok) {
            throw new Error("Response Stats: " + response.status);
        }

        const json = await response.json();
        console.log(json);
    }
    catch(error){
        console.error(error.message);
    }

}

