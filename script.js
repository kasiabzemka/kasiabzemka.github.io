function submit(question) {
    const answer = document.getElementById("answer").value;
    fetch(`https://9gu8mm7khg.execute-api.us-east-1.amazonaws.com/test/awesomebirthdayapi?answer=${answer}&question=${question}`, {headers: {
        'Content-Type': 'application/json'
        }})
        .then(response => { return response.json()})
        .then(response => {
            if (response.status === 200) {
                document.getElementById("instructions").style.display = "none";
                const correct = document.getElementById("correct");
                correct.style.display = "block";
                correct.innerHTML = response.message;
            } else if (response.status === 400) {
                const wrong = document.getElementById("wrong").style.display = "block";
                correct.style.display = "block";
            }
        })
};
