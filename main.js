        // --- 1. ПЕРЕВОДЫ ---
        const translations = {
            ru: {
                nav_main: "Главная", nav_start: "Как начать", nav_rules: "Правила", nav_map: "Карта", nav_donate: "Донат",
                hero_desc: "Твой лучший SMP опыт",
                status_loading: "⌛ Загрузка статуса...",
                status_online: "🟢 ОНЛАЙН: {online} / {max}",
                status_offline: "🔴 ОФФЛАЙН",
                status_unknown: "❓ Статус неизвестен",
                steps_title_1: "Как начать", steps_title_2: "Играть?",
                step_1_title: "Скопируй IP", step_1_desc: "Нажми на адрес сервера выше, чтобы скопировать его в буфер обмена.",
                step_2_title: "Версия 1.21.11", step_2_desc: "Запусти Minecraft на версии 1.21.11",
                step_3_title: "Заходи", step_3_desc: "Добавь сервер в список, подключайся и начинай выживание!",
                rules_title_1: "Правила", rules_title_2: "Сервера", rules_sub: "Соблюдай их, чтобы не получить бан",
                rule_1_title: "НЕ ГРИФЕРИТЬ", rule_1_desc: "Запрещено ломать постройки других игроков и воровать ресурсы в заприваченных регионах.",
                rule_2_title: "НЕ УБИВАТЬ", rule_2_desc: "Убийство без причины (RDM) запрещено. PvP разрешено только по обоюдному согласию.",
                rule_3_title: "НЕ ОСКОРБЛЯТЬ", rule_3_desc: "Будьте вежливы. Запрещены оскорбления, токсичность, спам и реклама других проектов.",
                map_title_1: "Карта", map_title_2: "BlueMap", map_desc: "Открой карту сервера прямо здесь или во вкладке.", map_open: "Открыть",
                shop_title_1: "Магазин", shop_title_2: "Доната", btn_buy: "Купить", hit_badge: "ХИТ",
                game_title_1: "Мини-Игра:", game_title_2: "Змейка", game_score: "Счет", game_start: "ИГРАТЬ", game_controls: "Управление: Стрелочки или WASD",
                game_over: "ИГРА ОКОНЧЕНА", game_restart: "Нажми ИГРАТЬ",
                skin_unlock: "Поздравляем! Вы получили ЗОЛОТОЙ скин!",
                tetris_splash: "Нажми START TETRIS",
                toast_ip_copied: "IP скопирован!",
                toast_copy_fail: "Не удалось скопировать",
                 
                // MODAL
                modal_title: "ВАЖНО!",
                modal_btn: "Я ПОНЯЛ, ОПЛАТИТЬ",
                modal_template: "В сообщении к донату укажите ваш <span class='modal-highlight'>НИК</span>, точную цену <span class='modal-highlight'>{price}</span> и название товара <span class='modal-highlight'>{item}</span>!",

                feat_alchemist: `<li><b>/back</b> - Вернуться на смерть</li><li><b>/home</b> - Точка дома</li><li><b>/near</b> - Игроки рядом</li><li><b>/top</b> - Телепорт наверх</li>`,
                feat_hero: `<li><b>/enderchest</b> - Эндер-сундук</li><li><b>/beezoka</b> - Стрелять пчелами</li><li><b>/anvil</b> - Наковальня</li><li><b>/repair</b> - Починка</li>`,
                feat_poseidon: `<li><b>/feed</b> - Утолить голод</li><li><b>/heal</b> - Вылечиться</li><li><b>/hat</b> - Блок на голову</li><li>+ <b>Все</b> права Hero</li>`,
                feat_legend: `<li><b>/tp</b> - Телепортация к игроку</li><li><b>/vanish</b> - Невидимость</li><li><b>Уникальный</b> префикс в табе</li><li><b>Все</b> команды предыдущих</li>`,
                feat_zevs: `<li><b>/kittycannon</b> - Кото-пушка</li><li><b>/setwarp</b> - Создание варпов</li><li><b>/repairall</b> - Починить всё</li><li><b>/time</b> - Менять время</li>`,
                feat_king: `<li><b>ВСЕ ВОЗМОЖНОСТИ ZEVS</b></li><li><b>Уникальный</b> статус Короля</li><li>Максимальный респект</li><li>Самый крутой префикс</li>`,
                feat_case: `<li><b>???</b> - Случайная привилегия</li><li><b>Высокий</b> шанс на Legend</li><li><b>Низкая</b> цена</li><li>Испытай удачу!</li>`
            },
            uk: {
                nav_main: "Головна", nav_start: "Як почати", nav_rules: "Правила", nav_map: "Карта", nav_donate: "Донат",
                hero_desc: "Твій найкращий SMP досвід",
                status_loading: "⌛ Завантаження статусу...",
                status_online: "🟢 ОНЛАЙН: {online} / {max}",
                status_offline: "🔴 ОФЛАЙН",
                status_unknown: "❓ Статус невідомий",
                steps_title_1: "Як почати", steps_title_2: "Грати?",
                step_1_title: "Скопіюй IP", step_1_desc: "Натисни на адресу сервера вище, щоб скопіювати її в буфер обміну.",
                step_2_title: "Версія 1.21.11", step_2_desc: "Запусти Minecraft на версії 1.21.11",
                step_3_title: "Заходь", step_3_desc: "Додай сервер у список, підключайся і починай виживання!",
                rules_title_1: "Правила", rules_title_2: "Сервера", rules_sub: "Дотримуйся їх, щоб не отримати бан",
                rule_1_title: "НЕ ГРІФЕРИТИ", rule_1_desc: "Заборонено ламати споруди інших гравців та красти ресурси у запривачених регіонах.",
                rule_2_title: "НЕ ВБИВАТИ", rule_2_desc: "Вбивство без причини (RDM) заборонено. PvP дозволено лише за обопільною згодою.",
                rule_3_title: "НЕ ОБРАЖАТИ", rule_3_desc: "Будьте ввічливі. Заборонені образи, токсичність, спам та реклама інших проектів.",
                map_title_1: "Карта", map_title_2: "BlueMap", map_desc: "Відкрий карту сервера прямо тут або у вкладці.", map_open: "Відкрити",
                shop_title_1: "Магазин", shop_title_2: "Донату", btn_buy: "Купити", hit_badge: "ХІТ",
                game_title_1: "Міні-Гра:", game_title_2: "Змійка", game_score: "Рахунок", game_start: "ГРАТИ", game_controls: "Управління: Стрілочки або WASD",
                game_over: "ГРУ ЗАКІНЧЕНО", game_restart: "Натисни ГРАТИ",
                skin_unlock: "Вітаємо! Ви отримали ЗОЛОТИЙ скін!",
                tetris_splash: "Натисни START TETRIS",
                toast_ip_copied: "IP скопійовано!",
                toast_copy_fail: "Не вдалося скопіювати",

                modal_title: "ВАЖЛИВО!",
                modal_btn: "Я ЗРОЗУМІВ, ОПЛАТИТИ",
                modal_template: "У повідомленні до донату вкажіть ваш <span class='modal-highlight'>НІК</span>, точну ціну <span class='modal-highlight'>{price}</span> та назву товару <span class='modal-highlight'>{item}</span>!",

                feat_alchemist: `<li><b>/back</b> - Повернутися на смерть</li><li><b>/home</b> - Точка дому</li><li><b>/near</b> - Гравці поруч</li><li><b>/top</b> - Телепорт нагору</li>`,
                feat_hero: `<li><b>/enderchest</b> - Ендер-скриня</li><li><b>/beezoka</b> - Стріляти бджолами</li><li><b>/anvil</b> - Ковадло</li><li><b>/repair</b> - Лагодження</li>`,
                feat_poseidon: `<li><b>/feed</b> - Втамувати голод</li><li><b>/heal</b> - Вилікуватися</li><li><b>/hat</b> - Блок на голову</li><li>+ <b>Всі</b> права Hero</li>`,
                feat_legend: `<li><b>/tp</b> - Телепортація до гравця</li><li><b>/vanish</b> - Невидимість</li><li><b>Унікальний</b> префікс в табі</li><li><b>Всі</b> команди попередніх</li>`,
                feat_zevs: `<li><b>/kittycannon</b> - Кото-гармата</li><li><b>/setwarp</b> - Створення варпів</li><li><b>/repairall</b> - Полагодити все</li><li><b>/time</b> - Змінити час</li>`,
                feat_king: `<li><b>ВСІ МОЖЛИВОСТІ ZEVS</b></li><li><b>Унікальний</b> статус Короля</li><li>Максимальный респект</li><li>Найкрутіший префікс</li>`,
                feat_case: `<li><b>???</b> - Випадковий привілей</li><li><b>Високий</b> шанс на Legend</li><li><b>Низька</b> ціна</li><li>Випробуй удачу!</li>`
            },
            en: {
                nav_main: "Home", nav_start: "How to Start", nav_rules: "Rules", nav_map: "Map", nav_donate: "Store",
                hero_desc: "Your best SMP experience",
                status_loading: "⌛ Loading status...",
                status_online: "🟢 ONLINE: {online} / {max}",
                status_offline: "🔴 OFFLINE",
                status_unknown: "❓ Status unknown",
                steps_title_1: "How to", steps_title_2: "Start?",
                step_1_title: "Copy IP", step_1_desc: "Click the server address above to copy it to clipboard.",
                step_2_title: "Version 1.21.11", step_2_desc: "Launch Minecraft version 1.21.11",
                step_3_title: "Join Us", step_3_desc: "Add server to your list, connect and start surviving!",
                rules_title_1: "Server", rules_title_2: "Rules", rules_sub: "Follow them to avoid being banned",
                rule_1_title: "NO GRIEFING", rule_1_desc: "Destroying other players' builds and stealing in claimed areas is forbidden.",
                rule_2_title: "NO RDM", rule_2_desc: "Killing without reason (RDM) is forbidden. PvP is allowed only by mutual consent.",
                rule_3_title: "BE RESPECTFUL", rule_3_desc: "Be polite. Insults, toxicity, spam, and advertising other projects are forbidden.",
                map_title_1: "Server", map_title_2: "Map", map_desc: "Open the server map right here or in a new tab.", map_open: "Open",
                shop_title_1: "Donation", shop_title_2: "Store", btn_buy: "Buy", hit_badge: "HIT",
                game_title_1: "Mini-Game:", game_title_2: "Snake", game_score: "Score", game_start: "START GAME", game_controls: "Controls: Arrows or WASD",
                game_over: "GAME OVER", game_restart: "Press START GAME",
                skin_unlock: "Congratulations! You unlocked the GOLD skin!",
                tetris_splash: "Press START TETRIS",
                toast_ip_copied: "IP copied!",
                toast_copy_fail: "Copy failed",

                modal_title: "IMPORTANT!",
                modal_btn: "I UNDERSTAND, PAY",
                modal_template: "In the donation message specify your <span class='modal-highlight'>NICK</span>, exact price <span class='modal-highlight'>{price}</span> and item <span class='modal-highlight'>{item}</span>!",

                feat_alchemist: `<li><b>/back</b> - Return to death</li><li><b>/home</b> - Home point</li><li><b>/near</b> - Nearby players</li><li><b>/top</b> - Teleport to top</li>`,
                feat_hero: `<li><b>/enderchest</b> - Ender Chest</li><li><b>/beezoka</b> - Shoot bees</li><li><b>/anvil</b> - Anvil</li><li><b>/repair</b> - Repair item</li>`,
                feat_poseidon: `<li><b>/feed</b> - Satisfy hunger</li><li><b>/heal</b> - Heal yourself</li><li><b>/hat</b> - Block on head</li><li>+ <b>All</b> Hero perms</li>`,
                feat_legend: `<li><b>/tp</b> - Teleport to player</li><li><b>/vanish</b> - Invisibility</li><li><b>Unique</b> prefix in tab</li><li><b>All</b> previous commands</li>`,
                feat_zevs: `<li><b>/kittycannon</b> - Kitty Cannon</li><li><b>/setwarp</b> - Create warps</li><li><b>/repairall</b> - Repair all</li><li><b>/time</b> - Change time</li>`,
                feat_king: `<li><b>ALL ZEVS FEATURES</b></li><li><b>Unique</b> King Status</li><li>Maximum Respect</li><li>Coolest Prefix</li>`,
                feat_case: `<li><b>???</b> - Random Rank</li><li><b>High</b> chance for Legend</li><li><b>Low</b> price</li><li>Try your luck!</li>`
            }
        };

        let currentLang = 'ru';
        try {
            const storedLang = localStorage.getItem('voxel_lang');
            const browserLangRaw = (navigator.language || '').slice(0, 2).toLowerCase();
            const browserLang = browserLangRaw === 'ua' ? 'uk' : browserLangRaw;

            if (storedLang && translations[storedLang]) currentLang = storedLang;
            else if (translations[browserLang]) currentLang = browserLang;
        } catch (_) {}

        function setLang(lang) {
            if (!translations[lang]) return;
            currentLang = lang;

            try { localStorage.setItem('voxel_lang', lang); } catch (_) {}
            document.documentElement.lang = lang;

            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            const activeBtn = document.getElementById('btn-' + lang);
            if (activeBtn) activeBtn.classList.add('active');

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if(translations[lang][key]) el.innerHTML = translations[lang][key];
            });

            document.querySelectorAll('[data-i18n-html]').forEach(el => {
                const key = el.getAttribute('data-i18n-html');
                if(translations[lang][key]) el.innerHTML = translations[lang][key];
            });

            renderSnakeSplash();
            renderTetrisSplash();
            updateServerStatus(true);
        }

        // --- ЛОГИКА MODAL ---
        const modal = document.getElementById('paymentModal');
        const modalText = document.getElementById('modalText');
        const donationLink = "https://www.donationalerts.com/r/riisyyy";
        let lastActiveElement = null;
        
        function openDonateModal(itemName, itemPrice) {
            const tmpl = translations[currentLang]['modal_template'];
            // Вставляем название и цену в шаблон
            const finalText = tmpl.replace('{item}', itemName).replace('{price}', itemPrice);
            
            modalText.innerHTML = finalText;
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('modal-open');

            lastActiveElement = document.activeElement;
            const focusTarget = modal.querySelector('.modal-btn') || modal.querySelector('.modal-close') || modal.querySelector('.modal-window');
            if (focusTarget && typeof focusTarget.focus === 'function') setTimeout(() => focusTarget.focus(), 0);
        }

        function closeModal() {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('modal-open');

            if (lastActiveElement && typeof lastActiveElement.focus === 'function') lastActiveElement.focus();
            lastActiveElement = null;
        }

        function proceedToPayment() {
            window.open(donationLink, '_blank');
            closeModal();
        }

        window.addEventListener('click', (event) => {
            if (event.target === modal) closeModal();
        });

        document.addEventListener('keydown', (event) => {
            if (!modal.classList.contains('active')) return;

            if (event.key === 'Escape') {
                closeModal();
                return;
            }

            if (event.key !== 'Tab') return;
            const focusable = modal.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex=\"-1\"])');
            const focusableVisible = Array.from(focusable).filter(el => !el.hasAttribute('disabled') && el.getAttribute('aria-hidden') !== 'true' && el.offsetParent !== null);
            if (focusableVisible.length === 0) return;

            const first = focusableVisible[0];
            const last = focusableVisible[focusableVisible.length - 1];
            const active = document.activeElement;

            if (event.shiftKey && active === first) {
                event.preventDefault();
                last.focus();
                return;
            }
            if (!event.shiftKey && active === last) {
                event.preventDefault();
                first.focus();
            }
        });

        // --- ОБЩИЕ СКРИПТЫ ---
        const toastEl = document.getElementById('toast');
        let toastTimer;
        function showToast(message) {
            if (!toastEl) return;
            toastEl.textContent = message;
            toastEl.classList.add('show');
            clearTimeout(toastTimer);
            toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2200);
        }

        async function copyIp() {
            const ip = "213.171.18.138:30307";
            const icon = document.getElementById('ip-icon');
            const tr = translations[currentLang] || translations['ru'];
            let copied = false;

            try {
                await navigator.clipboard.writeText(ip);
                copied = true;
            } catch (err) {
                try {
                    const temp = document.createElement('textarea');
                    temp.value = ip;
                    temp.style.position = 'fixed';
                    temp.style.opacity = '0';
                    document.body.appendChild(temp);
                    temp.focus();
                    temp.select();
                    document.execCommand('copy');
                    document.body.removeChild(temp);
                    copied = true;
                } catch (_) {
                    copied = false;
                }
            }

            if (copied) {
                if (icon) icon.innerText = "✅";
                showToast(tr.toast_ip_copied || "IP copied!");
            } else {
                if (icon) icon.innerText = "❌";
                showToast(tr.toast_copy_fail || "Copy failed");
            }
            if (icon) setTimeout(() => (icon.innerText = "📋"), 2000);
        }

        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }

        function initReveal() {
            const reveals = document.querySelectorAll(".reveal");
            if (!('IntersectionObserver' in window)) {
                window.addEventListener("scroll", reveal);
                reveal();
                return;
            }
            const observer = new IntersectionObserver((entries, obs) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    entry.target.classList.add("active");
                    obs.unobserve(entry.target);
                }
            }, { threshold: 0.12 });
            reveals.forEach(el => observer.observe(el));
        }
        initReveal();

        // --- NAV (MOBILE) ---
        const nav = document.querySelector('nav');
        const navToggle = document.getElementById('navToggle');
        const navLinks = document.getElementById('navLinks');

        function setNavOpen(open) {
            if (!nav || !navToggle) return;
            nav.classList.toggle('open', open);
            navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            const icon = navToggle.querySelector('.nav-toggle-icon');
            if (icon) icon.textContent = open ? '✕' : '☰';
        }

        if (nav && navToggle && navLinks) {
            navToggle.addEventListener('click', () => setNavOpen(!nav.classList.contains('open')));
            navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setNavOpen(false)));
            document.addEventListener('click', (e) => {
                if (!nav.classList.contains('open')) return;
                if (nav.contains(e.target)) return;
                setNavOpen(false);
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') setNavOpen(false);
            });
        }

        function updateNavScrolled() {
            if (!nav) return;
            nav.classList.toggle('scrolled', window.scrollY > 8);
        }
        window.addEventListener('scroll', updateNavScrolled, { passive: true });
        updateNavScrolled();

        function setActiveNavLink(id) {
            if (!navLinks) return;
            navLinks.querySelectorAll('a[href^=\"#\"]').forEach(a => {
                const isActive = a.getAttribute('href') === `#${id}`;
                a.classList.toggle('active', isActive);
                if (isActive) a.setAttribute('aria-current', 'page');
                else a.removeAttribute('aria-current');
            });
        }

        function initScrollSpy() {
            if (!navLinks) return;
            const anchors = Array.from(navLinks.querySelectorAll('a[href^=\"#\"]'));
            const sections = anchors.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
            if (sections.length === 0) return;
            let ticking = false;

            function getOffset() {
                const navHeight = nav ? nav.getBoundingClientRect().height : 0;
                return Math.round(navHeight + 24);
            }

            function update() {
                ticking = false;
                const fromTop = window.scrollY + getOffset();
                let currentId = sections[0].id;
                for (const section of sections) {
                    if (section.offsetTop <= fromTop) currentId = section.id;
                }
                setActiveNavLink(currentId);
            }

            function onScroll() {
                if (ticking) return;
                ticking = true;
                requestAnimationFrame(update);
            }

            window.addEventListener('scroll', onScroll, { passive: true });
            window.addEventListener('resize', onScroll, { passive: true });
            update();
        }
        initScrollSpy();

        (function initPointerGlow() {
            if (!window.matchMedia || !window.matchMedia('(hover: hover)').matches) return;

            let x = Math.round(window.innerWidth / 2);
            let y = Math.round(window.innerHeight / 3);
            let raf = 0;

            function apply() {
                raf = 0;
                document.documentElement.style.setProperty('--pointer-x', `${x}px`);
                document.documentElement.style.setProperty('--pointer-y', `${y}px`);
            }

            apply();

            window.addEventListener('pointermove', (e) => {
                x = e.clientX;
                y = e.clientY;
                if (raf) return;
                raf = requestAnimationFrame(apply);
            }, { passive: true });
        })();

        // --- ЛОГИКА СТАТУСА СЕРВЕРА (API) ---
        async function updateServerStatus(force = false) {
            const statusDiv = document.getElementById('server-status');
            const ip = "213.171.18.138";
            const port = "30307";
            const tr = translations[currentLang] || translations['ru'];

            if (force && statusDiv) {
                statusDiv.classList.remove('online', 'offline');
                statusDiv.innerHTML = tr.status_loading || "⌛ Loading status...";
            } else if (statusDiv && !statusDiv.classList.contains('online') && !statusDiv.classList.contains('offline')) {
                statusDiv.innerHTML = tr.status_loading || "⌛ Loading status...";
            }

            try {
                const response = await fetch(`https://api.mcsrvstat.us/2/${ip}:${port}`);
                const data = await response.json();

                if (data.online) {
                    const tmpl = tr.status_online || "🟢 ONLINE: {online} / {max}";
                    statusDiv.innerHTML = tmpl.replace('{online}', data.players.online).replace('{max}', data.players.max);
                    statusDiv.classList.add('online');
                    statusDiv.classList.remove('offline');
                } else {
                    statusDiv.innerHTML = tr.status_offline || "🔴 OFFLINE";
                    statusDiv.classList.add('offline');
                    statusDiv.classList.remove('online');
                }
            } catch (error) {
                console.error("Ошибка при получении статуса:", error);
                statusDiv.innerHTML = tr.status_unknown || "❓ Status unknown";
            }
        }
        setInterval(updateServerStatus, 60000);

        // --- ИЗОБРАЖЕНИЕ ГОЛОВЫ ---
        const headImage = new Image(); headImage.src = 'head.png'; 

        // --- ЛОГИКА ЗМЕЙКИ ---
        const canvas = document.getElementById('snakeCanvas');
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;
        const tileCount = 20; 
        const gridSize = canvas.width / tileCount; 
        
        const eatSound = new Audio('sound.MP3');

        let goldSkin = localStorage.getItem('voxel_snake_gold') === 'true';

        let headX = 10; let headY = 10;
        let xVelocity = 0; let yVelocity = 0;
        let appleX = 5; let appleY = 5;
        let isGoldApple = false; 
        let trail = []; let tail = 5;
        let score = 0; let gameRunning = false;
        let gameInterval; let currentFPS = 6;

        function startSnake() {
            if(gameRunning) return;
            gameRunning = true; score = 0; tail = 5;
            headX = 10; headY = 10; xVelocity = 0; yVelocity = 0; currentFPS = 6; 
            document.getElementById('snakeScore').innerText = score;
            document.getElementById('snakeScore').style.color = "var(--secondary)";
            
            window.addEventListener("keydown", preventScrollSnake, false);
            document.addEventListener("keydown", keyDown);
            spawnApple(); 
            clearInterval(gameInterval);
            gameInterval = setInterval(gameLoop, 1000 / currentFPS);
        }

        function spawnApple() {
            appleX = Math.floor(Math.random() * tileCount);
            appleY = Math.floor(Math.random() * tileCount);
            isGoldApple = Math.random() < 0.30;
        }

        function preventScrollSnake(e) {
             if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) e.preventDefault();
        }

        function gameLoop() {
            headX += xVelocity; headY += yVelocity;
            if(headX < 0) headX = tileCount - 1; if(headX > tileCount - 1) headX = 0;
            if(headY < 0) headY = tileCount - 1; if(headY > tileCount - 1) headY = 0;

            ctx.fillStyle = '#0f172a'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            let padding = 2;
            if (isGoldApple) {
                ctx.fillStyle = (Math.floor(Date.now() / 100) % 2 === 0) ? '#fbbf24' : '#fff';
                ctx.shadowBlur = 15; ctx.shadowColor = '#fbbf24';
            } else {
                ctx.fillStyle = '#ef4444';
                ctx.shadowBlur = 0;
            }
            ctx.fillRect(appleX * gridSize + padding, appleY * gridSize + padding, gridSize - padding*2, gridSize - padding*2);
            ctx.shadowBlur = 0; 

            ctx.fillStyle = goldSkin ? '#fbbf24' : '#22c55e'; 
            for(let i = 0; i < trail.length; i++) {
                ctx.fillRect(trail[i].x * gridSize + 1, trail[i].y * gridSize + 1, gridSize - 2, gridSize - 2);
                if(trail[i].x == headX && trail[i].y == headY && gameRunning && (xVelocity != 0 || yVelocity != 0)) { gameOver(); return; }
            }

            if (headImage.complete && gameRunning) { 
                ctx.drawImage(headImage, headX * gridSize, headY * gridSize, gridSize, gridSize); 
            } else if (gameRunning) { 
                ctx.fillStyle = '#ffffff'; ctx.fillRect(headX * gridSize, headY * gridSize, gridSize, gridSize); 
            }

            if (gameRunning) { trail.push({x: headX, y: headY}); while(trail.length > tail) trail.shift(); }

            if(appleX == headX && appleY == headY) {
                if (isGoldApple) {
                    score += 5; tail += 2; currentFPS += 2; 
                } else {
                    score++; tail++;
                    if (score % 3 === 0 && currentFPS < 18) currentFPS++; 
                }
                updateScore(score);
                if(score >= 30 && !goldSkin) {
                    goldSkin = true;
                    localStorage.setItem('voxel_snake_gold', 'true');
                    document.getElementById('unlockMsg').style.display = 'block';
                }
                eatSound.pause(); eatSound.currentTime = 0; eatSound.play();
                spawnApple();
                clearInterval(gameInterval);
                gameInterval = setInterval(gameLoop, 1000 / currentFPS);
            }
        }

        function updateScore(newScore) {
            const scoreEl = document.getElementById('snakeScore'); scoreEl.innerText = newScore;
            if (newScore >= 30) scoreEl.style.color = "var(--gold)";
            else if (newScore > 0 && newScore % 10 === 0) scoreEl.style.color = "var(--primary)";
        }

        function gameOver() {
            tail = 5; score = 0; xVelocity = 0; yVelocity = 0; gameRunning = false;
            clearInterval(gameInterval);
            const lang = currentLang; 
            const txtOver = translations[lang]['game_over'] || "GAME OVER";
            const txtRestart = translations[lang]['game_restart'] || "Press START";

            document.getElementById('snakeScore').innerText = txtOver;
            document.getElementById('snakeScore').style.color = "var(--red)";
            window.removeEventListener("keydown", preventScrollSnake);

            ctx.fillStyle = 'rgba(0,0,0,0.8)'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ef4444'; ctx.font = "30px VT323"; ctx.textAlign = "center";
            ctx.fillText(txtOver, canvas.width/2, canvas.height/2);
            ctx.fillStyle = 'white'; ctx.font = "20px VT323";
            ctx.fillText(txtRestart, canvas.width/2, canvas.height/2 + 40);
        }

        function keyDown(evt) {
            if(!gameRunning) return;
            switch(evt.keyCode) {
                case 37: case 65: if(xVelocity == 1) return; xVelocity = -1; yVelocity = 0; break;
                case 38: case 87: if(yVelocity == 1) return; xVelocity = 0; yVelocity = -1; break;
                case 39: case 68: if(xVelocity == -1) return; xVelocity = 1; yVelocity = 0; break;
                case 40: case 83: if(yVelocity == -1) return; xVelocity = 0; yVelocity = 1; break;
            }
        }

        function renderSnakeSplash() {
            if (gameRunning) return;
            const txt = (translations[currentLang] && translations[currentLang]['game_restart']) || "Press START GAME";
            ctx.fillStyle = '#0f172a'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'white'; ctx.font = "22px VT323"; ctx.textAlign = "center";
            ctx.fillText(txt, canvas.width/2, canvas.height/2);
        }


        // --- ЛОГИКА ТЕТРИСА (HEAD TETRIS) ---
        const tetrisCanvas = document.getElementById('tetrisCanvas');
        const tCtx = tetrisCanvas.getContext('2d');
        tCtx.imageSmoothingEnabled = false;
        const tTile = 20; 
        const tRows = 20;
        const tCols = 12;

        let dropCounter = 0;
        let dropInterval = 1000;
        let lastTime = 0;
        let tetrisScore = 0;
        let tetrisRunning = false;

        const arena = createMatrix(tCols, tRows);

        const player = {
            pos: {x: 0, y: 0},
            matrix: null,
            score: 0,
        };

        function createMatrix(w, h) {
            const matrix = [];
            while (h--) {
                matrix.push(new Array(w).fill(0));
            }
            return matrix;
        }

        function createPiece(type) {
            if (type === 'I') {
                return [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]];
            } else if (type === 'L') {
                return [[0, 2, 0], [0, 2, 0], [0, 2, 2]];
            } else if (type === 'J') {
                return [[0, 3, 0], [0, 3, 0], [3, 3, 0]];
            } else if (type === 'O') {
                return [[4, 4], [4, 4]];
            } else if (type === 'Z') {
                return [[5, 5, 0], [0, 5, 5], [0, 0, 0]];
            } else if (type === 'S') {
                return [[0, 6, 6], [6, 6, 0], [0, 0, 0]];
            } else if (type === 'T') {
                return [[0, 7, 0], [7, 7, 7], [0, 0, 0]];
            }
        }

        function drawTetris() {
            tCtx.fillStyle = '#0f172a';
            tCtx.fillRect(0, 0, tetrisCanvas.width, tetrisCanvas.height);

            drawMatrix(arena, {x: 0, y: 0});
            drawMatrix(player.matrix, player.pos);
        }

        function drawMatrix(matrix, offset) {
            matrix.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        // РИСУЕМ ГОЛОВУ ВМЕСТО ЦВЕТА
                        if(headImage.complete) {
                            tCtx.drawImage(headImage, (x + offset.x) * tTile, (y + offset.y) * tTile, tTile, tTile);
                        } else {
                            tCtx.fillStyle = 'purple';
                            tCtx.fillRect((x + offset.x) * tTile, (y + offset.y) * tTile, tTile, tTile);
                        }
                    }
                });
            });
        }

        function merge(arena, player) {
            player.matrix.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        arena[y + player.pos.y][x + player.pos.x] = value;
                    }
                });
            });
        }

        function rotate(matrix, dir) {
            for (let y = 0; y < matrix.length; ++y) {
                for (let x = 0; x < y; ++x) {
                    [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
                }
            }
            if (dir > 0) {
                matrix.forEach(row => row.reverse());
            } else {
                matrix.reverse();
            }
        }

        function playerDrop() {
            player.pos.y++;
            if (collide(arena, player)) {
                player.pos.y--;
                merge(arena, player);
                playerReset();
                arenaSweep();
                updateTetrisScore();
            }
            dropCounter = 0;
        }

        function playerMove(offset) {
            player.pos.x += offset;
            if (collide(arena, player)) {
                player.pos.x -= offset;
            }
        }

        function playerReset() {
            const pieces = 'TJLOSZI';
            player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
            player.pos.y = 0;
            player.pos.x = (arena[0].length / 2 | 0) - (player.matrix[0].length / 2 | 0);
            if (collide(arena, player)) {
                arena.forEach(row => row.fill(0));
                tetrisScore = 0;
                updateTetrisScore();
            }
        }

        function playerRotate(dir) {
            const pos = player.pos.x;
            let offset = 1;
            rotate(player.matrix, dir);
            while (collide(arena, player)) {
                player.pos.x += offset;
                offset = -(offset + (offset > 0 ? 1 : -1));
                if (offset > player.matrix[0].length) {
                    rotate(player.matrix, -dir);
                    player.pos.x = pos;
                    return;
                }
            }
        }

        function collide(arena, player) {
            const m = player.matrix;
            const o = player.pos;
            for (let y = 0; y < m.length; ++y) {
                for (let x = 0; x < m[y].length; ++x) {
                    if (m[y][x] !== 0 &&
                       (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) {
                        return true;
                    }
                }
            }
            return false;
        }

        function arenaSweep() {
            let rowCount = 1;
            outer: for (let y = arena.length - 1; y > 0; --y) {
                for (let x = 0; x < arena[y].length; ++x) {
                    if (arena[y][x] === 0) {
                        continue outer;
                    }
                }
                const row = arena.splice(y, 1)[0].fill(0);
                arena.unshift(row);
                ++y;

                tetrisScore += rowCount * 10;
                rowCount *= 2;
            }
        }

        function updateTetrisScore() {
            document.getElementById('tetrisScore').innerText = tetrisScore;
        }

        function tetrisUpdate(time = 0) {
            if(!tetrisRunning) return;
            const deltaTime = time - lastTime;
            lastTime = time;
            dropCounter += deltaTime;
            if (dropCounter > dropInterval) {
                playerDrop();
            }
            drawTetris();
            requestAnimationFrame(tetrisUpdate);
        }

        function startTetris() {
            if(tetrisRunning) return;
            tetrisRunning = true;
            playerReset();
            updateTetrisScore();
            window.addEventListener('keydown', handleTetrisInput);
            tetrisUpdate();
        }

        function handleTetrisInput(event) {
            if(event.keyCode === 37) playerMove(-1);
            else if(event.keyCode === 39) playerMove(1);
            else if(event.keyCode === 40) playerDrop();
            else if(event.keyCode === 38) playerRotate(1);
            
            // Prevent scrolling for tetris keys
            if([37,38,39,40].indexOf(event.keyCode) > -1) {
                event.preventDefault();
            }
        }

        function renderTetrisSplash() {
            if (tetrisRunning) return;
            const txt = (translations[currentLang] && translations[currentLang]['tetris_splash']) || "Press START TETRIS";
            tCtx.fillStyle = '#0f172a';
            tCtx.fillRect(0, 0, tetrisCanvas.width, tetrisCanvas.height);
            tCtx.fillStyle = 'white'; tCtx.font = "22px VT323"; tCtx.textAlign = "center";
            tCtx.fillText(txt, tetrisCanvas.width/2, tetrisCanvas.height/2);
        }

        // --- SPOTLIGHT EFFECT ---
        document.querySelectorAll('.donate-card, .step-card, .rule-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });
        });

        setLang(currentLang);

    
