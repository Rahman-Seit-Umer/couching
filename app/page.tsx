const requests = [
  ['Тревога и напряжение', 'Когда мысли ходят по кругу, а тело словно всё время остаётся настороже.'],
  ['Перемены и решения', 'Смена работы, завершение или переустройство отношений, новый этап жизни.'],
  ['Внутренний критик', 'Стыд, самообесценивание, страх ошибки и ощущение «со мной что-то не так».'],
  ['Опора на себя', 'Неуверенность, трудность выбирать и доверять собственным ощущениям.'],
  ['Идентичность и смыслы', 'Вопросы личных ролей, принадлежности, ценностей и жизненного направления.'],
  ['Тело и эмоции', 'Желание лучше замечать телесные реакции и понимать их связь с переживаниями.'],
  ['Язык и самовыражение', 'Тревога и стыд, связанные с иностранным языком, речью и правом быть услышанным.'],
  ['Духовные вопросы', 'Ценностные и духовные темы — если такой контекст важен самому клиенту.'],
];

const principles = [
  ['Внимание к целому', 'Слушаем мысли и слова, замечаем эмоции, интонации и телесные ощущения.'],
  ['Уважение к темпу', 'Без давления, стыда и готовых советов. Вы определяете глубину и скорость работы.'],
  ['Честные границы', 'Сначала обсуждаем запрос. Если нужен другой формат или специалист, я прямо скажу об этом.'],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="На главную">
          <span>Роман Сейтумеров</span>
          <small>психолог-консультант</small>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#requests">С чем работаю</a>
          <a href="#about">Обо мне</a>
          <a href="#approach">Подход</a>
          <a className="nav-cta" href="#contact">Записаться</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Онлайн и очно в Санкт-Петербурге</p>
          <h1>Разобраться в том, что тревожит — с вниманием к мыслям, чувствам и телу</h1>
          <p className="hero-lead">
            Индивидуальная работа со взрослыми в интегративном подходе: тревога и напряжение,
            внутренний критик, жизненные перемены, отношения, идентичность и поиск опоры.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Записаться на встречу</a>
            <a className="button button-secondary" href="#requests">Посмотреть темы работы</a>
          </div>
          <p className="session-note">Сессия 90 минут · 2 500 ₽</p>
        </div>

        <div className="portrait-card" aria-label="Портрет Романа Сейтумерова">
          <img src="/images/roman-portrait-green.jpeg" alt="Роман Сейтумеров" />
          <div className="portrait-caption">
            <strong>Роман Сейтумеров</strong>
            <span>Психолог-консультант</span>
          </div>
        </div>
      </section>

      <section className="intro section-pad" aria-labelledby="intro-title">
        <p className="section-kicker">Пространство внимательного диалога</p>
        <h2 id="intro-title">Поддержка в период, когда привычные способы уже не помогают</h2>
        <div className="intro-grid">
          <p className="big-copy">
            На сессиях можно остановиться, рассмотреть происходящее без давления и постепенно
            найти больше ясности, свободы выбора и опоры на себя.
          </p>
          <p>
            Я задаю проясняющие вопросы и помогаю замечать не только содержание рассказа,
            но и то, как переживание проявляется в речи, эмоциях и теле. Мы не ищем
            «правильного» ответа — мы исследуем то, что действительно происходит с вами.
          </p>
        </div>
      </section>

      <section className="requests section-pad" id="requests" aria-labelledby="requests-title">
        <div className="section-heading">
          <p className="section-kicker">С чем можно обратиться</p>
          <h2 id="requests-title">Темы, с которыми я работаю</h2>
          <p>Перечень помогает сориентироваться, но не заменяет первичного обсуждения запроса.</p>
        </div>
        <div className="request-grid">
          {requests.map(([title, description], index) => (
            <article className="request-card" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="approach section-pad" id="approach" aria-labelledby="approach-title">
        <div className="approach-head">
          <p className="section-kicker light">Как проходит работа</p>
          <h2 id="approach-title">Бережно — не значит поверхностно</h2>
          <p>
            Для меня важны честный контакт, ясные границы и уважение к вашему мировоззрению.
            Конкретные инструменты выбираются под запрос, а не наоборот.
          </p>
        </div>
        <div className="principle-grid">
          {principles.map(([title, description]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about section-pad" id="about" aria-labelledby="about-title">
        <div className="about-photo">
          <img src="/images/roman-lakhta.jpeg" alt="Роман Сейтумеров в Санкт-Петербурге" />
        </div>
        <div className="about-copy">
          <p className="section-kicker">Обо мне</p>
          <h2 id="about-title">Профессиональный путь на пересечении психологии, образования и культуры</h2>
          <p>
            Я — Роман Сейтумеров. Веду индивидуальную работу со взрослыми и продолжаю обучение
            телесно-ориентированной психотерапии. В моём опыте соединяются медицинская подготовка,
            педагогика, коучинг, работа с иностранными языками и межкультурной коммуникацией.
          </p>
          <p>
            Этот путь помогает объяснять сложное понятным языком, слышать оттенки формулировок
            и оставаться внимательным к связи психики и тела. При этом психологическое
            консультирование не является медицинской услугой и не заменяет помощь врача.
          </p>
          <div className="credentials">
            <div>
              <strong>Сейчас</strong>
              <span>Обучение телесно-ориентированной психотерапии</span>
              <a href="https://mippip.ru/" target="_blank" rel="noreferrer">
                АНО ДПО МИППиП «Интеграция» ↗
              </a>
            </div>
            <div>
              <strong>2022</strong>
              <span>Professional Coach ICU</span>
              <span>NLP Practitioner</span>
            </div>
            <div>
              <strong>2023</strong>
              <span>Executive &amp; Business Coaching</span>
            </div>
          </div>
        </div>
      </section>

      <section className="spiritual section-pad" aria-labelledby="spiritual-title">
        <div className="spiritual-copy">
          <p className="section-kicker light">Духовно-чувствительный подход</p>
          <h2 id="spiritual-title">Место для ценностей, веры и личных смыслов</h2>
          <p>
            Если вам важно, чтобы в психологической работе было место духовным вопросам,
            мы можем обращаться к библейским сюжетам, архетипам и метафорам — только в той мере,
            в которой это соответствует вашему мировоззрению и помогает осмыслять опыт.
          </p>
          <p className="spiritual-note">Это не религиозное наставничество и не обязательная часть работы.</p>
          <a className="text-link" href="https://t.me/biblecoaching" target="_blank" rel="noreferrer">
            Канал «Коучинг и Личность» ↗
          </a>
        </div>
        <img src="/images/roman-ruins.jpeg" alt="Роман Сейтумеров у античного театра" />
      </section>

      <section className="format section-pad" aria-labelledby="format-title">
        <div className="section-heading compact">
          <p className="section-kicker">Формат</p>
          <h2 id="format-title">Первая встреча — это возможность понять, подходим ли мы друг другу</h2>
        </div>
        <div className="format-grid">
          <div><strong>90 минут</strong><span>Продолжительность сессии</span></div>
          <div><strong>2 500 ₽</strong><span>Стоимость встречи</span></div>
          <div><strong>Онлайн / СПб</strong><span>Дистанционно или очно</span></div>
        </div>
        <div className="faq">
          <details>
            <summary>Как начать?</summary>
            <p>Напишите или позвоните и коротко расскажите о запросе. Мы обсудим формат и договоримся о времени.</p>
          </details>
          <details>
            <summary>Что, если мой запрос вам не подходит?</summary>
            <p>Я скажу об этом прямо и, если возможно, порекомендую обратиться к специалисту подходящего профиля.</p>
          </details>
          <details>
            <summary>Можно ли работать без духовного контекста?</summary>
            <p>Конечно. Духовные образы и тексты появляются только по желанию клиента. Основой остаётся психологическое консультирование.</p>
          </details>
        </div>
      </section>

      <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
        <p className="section-kicker light">Связаться</p>
        <h2 id="contact-title">Можно начать с короткого сообщения о том, что вас беспокоит</h2>
        <p>Отвечу, подходит ли мой формат работы, и предложу следующий шаг.</p>
        <div className="contact-actions">
          <a className="button button-light" href="tel:+79818209948">Позвонить · +7 981 820-99-48</a>
          <a className="button button-outline-light" href="https://t.me/rseytumerov" target="_blank" rel="noreferrer">Написать в Telegram</a>
          <a className="button button-outline-light" href="https://max.ru/u/f9LHodD0cOLbostYlS0l8Wo6LPM5sf9l3O6Wb-iGfbFLsZbkeM8n9ajyuXU" target="_blank" rel="noreferrer">Написать в MAX</a>
        </div>
      </section>

      <section className="legal" aria-labelledby="legal-title">
        <div className="legal-details">
          <p className="legal-label" id="legal-title">Юридическая информация</p>
          <strong>ИП Сейтумеров Роман Расимович</strong>
          <span>ИНН 782618747007</span>
          <span>ОГРНИП 310784713800785</span>
        </div>
        <div className="legal-links" aria-label="Юридические документы">
          <a href="https://englishsite.tilda.ws/offer" target="_blank" rel="noreferrer">Договор-оферта ↗</a>
          <a href="https://englishsite.tilda.ws/page2583385.html" target="_blank" rel="noreferrer">Политика конфиденциальности ↗</a>
        </div>
      </section>

      <footer>
        <span>© 2026 Роман Сейтумеров</span>
        <span>Психологическое консультирование не заменяет медицинскую или экстренную помощь.</span>
      </footer>
    </main>
  );
}
