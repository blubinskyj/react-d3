import './home.css';
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <img src="src/assets/console.jpg" alt="console" />
        <div>
          <h1>Проблеми JS</h1>
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quos repellat sunt! Debitis delectus dolor
            enim esse expedita hic ipsa ipsam iste nulla obcaecati praesentium quis repellendus saepe sapiente sunt
            tempore, velit veniam? A alias aliquid animi asperiores consequatur consequuntur culpa distinctio dolorem
            dolores doloribus eius eos esse expedita illo ipsa ipsam iste iure labore mollitia neque nesciunt officia
            omnis placeat quae quam quia reiciendis, repellat repudiandae saepe sapiente similique tempora tenetur totam
            ut velit veniam vitae. Aspernatur autem cum cupiditate eos esse, excepturi exercitationem expedita ipsa
            magnam, magni minus, non placeat sint. Adipisci at natus quae quos repudiandae suscipit?
          </div>
        </div>
      </div>

      <div className="textBlock">
        <p>
          Неоднаковість точності чисел з плаваючою комою: В JavaScript числа з плаваючою комою зберігаються у форматі
          двійкового числа з плаваючою комою, який не завжди дає точний результат. Наприклад, результат ділення 0.1 на
          0.2 у JavaScript буде не точним 0.5, а деяким дрібним числом, яке майже рівне 0.5.
        </p>
        <p>
          Великі обчислення можуть бути повільними: JavaScript є мовою програмування з інтерпретацією на клієнтському
          боці, що означає, що виконання складних обчислень може займати багато часу. Це може призвести до затримок у
          відображенні результатів або навіть до зависання веб-сторінки.
        </p>
        <p>
          Обмежені можливості оптимізації: JavaScript не має тих же рівнів оптимізації, які є у мовах програмування, що
          компілюються. Це означає, що швидкість виконання обчислень може бути обмежена.
        </p>
        <p>
          Вразливість до атак: JavaScript може бути вразливим до певних видів атак, таких як внедрення коду або
          міжсайтовий скриптінг (XSS). Це може призвести до витоку конфіденційної інформації або інших проблем з
          безпекою.
        </p>
        <p>
          Сумісність з різними браузерами: Різні браузери можуть мати різні реалізації JavaScript, що може призвести до
          несподіваних результатів на різних платформах.
        </p>
      </div>
    </div>
  );
};

export default Home;
