document.getElementById('stat-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Предотвращаем отправку формы по умолчанию

    const username = document.getElementById('username').value;
    const apiUrl = `https://api.warface.com/statistics?nickname=${encodeURIComponent(username)}`;  // Пример API URL, замените на актуальный

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка сети: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Проверка наличия данных
            if (!data || data.length === 0) {
                document.getElementById('result').innerText = 'Данные не найдены для введенного ника.';
                return;
            }

            // Пример обработки данных, измените в зависимости от структуры API
            const stats = data.player;  // Это пример, измените на реальное поле в API
            document.getElementById('result').innerHTML = `
                <h3>Статистика для игрока: ${stats.nickname}</h3>
                <p>Ранг: ${stats.rank}</p>
                <p>Количество убийств: ${stats.kills}</p>
                <p>Количество побед: ${stats.wins}</p>
                <p>K/D: ${(stats.kills / stats.deaths).toFixed(2)}</p>
            `;
        })
        .catch(error => {
            document.getElementById('result').innerText = `Ошибка при получении данных: ${error.message}`;
        });
});
