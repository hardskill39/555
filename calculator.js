document.getElementById('stat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    fetch(`https://ru.warface.com/wiki/index.php/API?username=${username}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = `Статистика для ${username}: ${JSON.stringify(data)}`;
        })
        .catch(error => {
            document.getElementById('result').innerText = 'Ошибка при получении данных.';
        });
});
