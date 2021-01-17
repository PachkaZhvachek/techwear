/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./ShippingScreen.module.css";
import UkraineMap from "../../assets/images/ukraine-map.jpg";
import KyivMap from "../../assets/images/kyiv-map.png";
import WorldMap from "../../assets/images/world-map.png";

const ShippingScreen = () => {
  return (
    <>
      <div className={styles.shipping}>
        <div className={styles.ukraine}>
          <div>
            <span>Доставка по Украине</span>
            <p>
              Во все города Украины действует курьерская доставка транспортной
              компанией "Новая почта".
            </p>
            <p>Стоимость доставки в любой город Украины составляет ₴ 100.00.</p>
            <p>
              Срок доставки зависит от Вашего местоположения и составляет от 2
              до 15 дней.
            </p>
            <p>
              Сразу после обработки заказа вы получите трекинг номер
              отправления. Вы сможете отслеживать движение Вашей посылки на{" "}
              <a href="https://novaposhta.ua/">официальном сайте</a>.
            </p>
            <p>
              Примерка перед покупкой — вы можете примерить одежду перед
              покупкой и не оплачивать товар в случае, если он не подошел вам по
              любым причинам.
            </p>
          </div>
          <img src={UkraineMap} alt="Контур карты Украины" width="400" />
        </div>
        <div className={styles.kyiv}>
          <img src={KyivMap} alt="Контур карты Киева" width="350" />
          <div>
            <span>Доставка по Киеву и области</span>
            <p>
              В Киеве и Киевской области действует курьерская доставка до двери.
            </p>{" "}
            <p>
              Стоимость доставки в Киеве и городах Киевской области составляет ₴
              50.00.
            </p>{" "}
            <p>
              Наши курьеры привезут заказ в согласованную дату и удобное для вас
              время. Срок доставки зависит от загруженности курьеров и
              составляет от 1 до 3 дней.
            </p>
            <p>
              Примерка перед покупкой — вы можете примерить одежду перед
              покупкой и не оплачивать товар в случае, если он не подошел вам по
              любым причинам.
            </p>
          </div>
        </div>
        <div className={styles.world}>
          <p>
            <span>Доставка по миру</span>
            <p>
              Международные заказы доставляются транспортными компаниями EMS,
              UPS и FedEx.
            </p>{" "}
            <p>Стоимость международной доставки составляет ₴ 700.00.</p>{" "}
            <p>
              Срок доставки зависит от Вашего местоположения и составляет от 6
              до 15 рабочих дней.
            </p>{" "}
            <p>
              Сразу после обработки заказа вы получите трекинг-номер посылки. Вы
              сможете отслеживать движение Вашей посылки на официальном сайте
              транспортной компании.
            </p>{" "}
            <p>
              Обратите внимание, что все таможенные расходы, если они существует
              в стране назначения, покупатель оплачивает самостоятельно.
            </p>
          </p>
          <img src={WorldMap} alt="Контур карты мира" width="500" />
        </div>
      </div>
      <div className={styles.payment}>
        <span>Способы оплаты заказов</span>
        <ul>
          <li>
            <span>Банковской картой на сайте</span>
            <p>
              Вы можете оплатить заказ на сайте во время оформления. Возможна
              оплата банковскими картами, системами МоноБанк, Приват24, EasyPay.
            </p>
          </li>
          <li>
            <span>Наличными при получении</span>
            <p>
              Все заказы по Киеву и Украине могут быть оплачены наличными
              курьеру при получении. Вы сможете примерить одежду перед покупкой
              и не оплачивать товар в случае, если он не подошел Вам по любым
              причинам.
            </p>
          </li>
          <li>
            <span>Со счета PayPal</span>
            <p>
              Все заказы можно оплатить с помощью сервиса PayPal — при выборе
              этого варианта во время оформлении заказа вы будете перенаправлены
              на сайт PayPal для оплаты.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShippingScreen;
