document.getElementById('personalizationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('uname').value;
    const picture = document.getElementById('picture').files[0];
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const userPageContent = `
        <!DOCTYPE html>
        <html lang="de">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="styles.css">
            <title>${name} - Portfolio</title>
            <style>
                body {
                    font-family: 'Roboto', sans-serif;
                    margin: 0;
                    padding: 0;
                    background: url('${e.target.result}') no-repeat center center fixed;
                    background-size: cover;
                    color: white;
                }
                header nav ul {
                    list-style: none;
                    padding: 0;
                }
                header nav ul li {
                    display: inline;
                    margin-right: 15px;
                }
                header nav ul li a {
                    color: white;
                    text-decoration: none;
                    font-weight: bold;
                }
                section {
                    padding: 50px;
                    background: rgba(0, 0, 0, 0.7);
                    margin: 20px;
                    border-radius: 10px;
                }
                .profile-pic {
                    display: block;
                    margin: 0 auto 20px auto;
                    max-width: 200px;
                    border-radius: 50%;
                }
                form label {
                    display: block;
                    margin-bottom: 5px;
                }
                form input, form textarea {
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 20px;
                    border: none;
                    border-radius: 5px;
                }
                form button {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    background-color: #333;
                    color: white;
                    cursor: pointer;
                }
                select {
                    background-color: #333;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    padding: 5px;
                }
            </style>
        </head>
        <body>
            <header>
                <nav>
                    <ul>
                        <li><a href="#about">Über mich</a></li>
                        <li><a href="#experience">Erfahrung</a></li>
                        <li><a href="#projects">Projekte</a></li>
                        <li><a href="#contact">Kontakt</a></li>
                        <li><a href="#new">info</a></li>
                        <li>
                            <select id="languageSelector">
                                <option value="de">Deutsch</option>
                                <option value="en">English</option>
                                <option value="ku">Kurdish</option>
                                <option value="ar">العربية</option>
                            </select>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="about">
                    <h1 data-lang="de">Über mich</h1>
                    <h1 data-lang="en" style="display:none;">About Me</h1>
                    <h1 data-lang="ku" style="display:none;">Di derbarê min de</h1>
                    <h1 data-lang="ar" style="display:none;"> معلومات عنّي</h1>
                    <img src="${e.target.result}" alt="Bild von Jalal Sarokhan" class="profile-pic">
                    <p data-lang="de">Ich bin ${name}, ein Softwareentwickler mit Erfahrung in Java, JavaScript, C#, und teilweise auch Python.</p>
                    <p data-lang="en" style="display:none;">I am ${name}, a software developer with experience in Java, JavaScript, C#, and some Python.</p>
                    <p data-lang="ku" style="display:none;">Ez ${name} im, pêşketina nivîsarê bi tecrûbeyek di Java, JavaScript, C#, û hinek Python de.</p>
                    <p data-lang="ar" style="display:none;">أنا ${name} مطور برمجيات ذو خبرة في Java، JavaScript، C#، وبعض Python.</p>
                    <p data-lang="de">Technologien wie Git, Docker, Kubernetes sowie automatisierte Test-Tools wie Jenkins sind mir ebenfalls vertraut.</p>
                    <p data-lang="en" style="display:none;">Technologies like Git, Docker, Kubernetes, and automated testing tools like Jenkins are also familiar to me.</p>
                    <p data-lang="ku" style="display:none;">Tehnolojiyên wek Git, Docker, Kubernetes, û amûrên testkirina otomatîk wek Jenkins jî min têne nas kirin.</p>
                    <p data-lang="ar" style="display:none;">التقنيات مثل Git و Docker و Kubernetes وأدوات الاختبار التلقائي مثل Jenkins مألوفة أيضًا بالنسبة لي.</p>
                </section>
                <section id="experience">
                    <h1 data-lang="de">Erfahrung</h1>
                    <h1 data-lang="en" style="display:none;">Experience</h1>
                    <h1 data-lang="ku" style="display:none;">Têcrûbeyê</h1>
                    <h1 data-lang="ar" style="display:none;">الخبرة</h1>
                    <ul>
                        <li data-lang="de"><strong>Firma ${name}</strong> - Junior Entwickler (März 2022 - December 2022)</li>
                        <li data-lang="en" style="display:none;"><strong>Company ${name}</strong> - Junior Developer (March 2022 - December 2022 )</li>
                        <li data-lang="ku" style="display:none;"><strong>Şîrket ${name}</strong> - Pêşkeftina Nivîsarê ya Bêrî (Adar 2022 - Berfanbar 2022)</li>
                        <li data-lang="ar" style="display:none;"><strong>شركة ${name}</strong> -  (مارس 2022 - ديسمبر 2022) مطور مبتدئ</li>
                        <li data-lang="de"><strong>Firma ${name} GmbH</strong> - Softwareentwickler (Mai 2023 - Heute)</li>
                        <li data-lang="en" style="display:none;"><strong>Company ${name} GmbH</strong> - Software Developer (March 2023 - Present)</li>
                        <li data-lang="ku" style="display:none;"><strong>Şîrket ${name} GmbH</strong> - Pêşkeftina Nivîsar (Cozerdan 2023 - Niha)</li>
                        <li data-lang="ar" style="display:none;"><strong>شركة ${name} GmbH</strong> - مطور برمجيات (مايو 2023 -  الآن)</li>
                    </ul>
                </section>
                <section id="projects">
                    <h1 data-lang="de">Projekte</h1>
                    <h1 data-lang="en" style="display:none;">Projects</h1>
                    <h1 data-lang="ku" style="display:none;">Projekten</h1>
                    <h1 data-lang="ar" style="display:none;">المشاريع</h1>
                    <div class="project">
                        <h2 data-lang="de">Projekt ${name}</h2>
                        <h2 data-lang="en" style="display:none;">Project ${name}</h2>
                        <h2 data-lang="ku" style="display:none;">Projekta ${name}</h2>
                        <h2 data-lang="ar" style="display:none;">مشروع ${name}</h2>
                        <p data-lang="de">Portfolio-Webseite</p>
                        <p data-lang="en" style="display:none;">Portfolio Website</p>
                        <p data-lang="ku" style="display:none;">Malpera Portfolio</p>
                        <p data-lang="ar" style="display:none;">موقع المحفظة</p>
                        <a href="https://jalal-sarokhan.github.io/civi/" target="_blank" rel="noopener noreferrer" data-lang="de">Mehr erfahren</a>
                        <a href="https://jalal-sarokhan.github.io/civi/" target="_blank" rel="noopener noreferrer" data-lang="en" style="display:none;">Learn More</a>
                        <a href="https://jalal-sarokhan.github.io/civi/" target="_blank" rel="noopener noreferrer" data-lang="ku" style="display:none;">Zêdetir Fêr Bibe</a>
                        <a href="https://jalal-sarokhan.github.io/civi/" target="_blank" rel="noopener noreferrer" data-lang="ar" style="display:none;">أعرف أكثر</a>
                    </div>
                    <div class="project">
                        <h2 data-lang="de">Angular Test</h2>
                        <h2 data-lang="en" style="display:none;">Angular Test</h2>
                        <h2 data-lang="ku" style="display:none;">Angular Test</h2>
                        <h2 data-lang="ar" style="display:none;">اختبار Angular</h2>
                        <p data-lang="de">Beschreibung der grundlegenden Eigenschaften von Angular</p>
                        <p data-lang="en" style="display:none;">Description of the basic features of Angular</p>
                        <p data-lang="ku" style="display:none;">Pêşandana taybetmendiyên bingehîn yên Angularê</p>
                        <p data-lang="ar" style="display:none;">وصف الميزات الأساسية لـ Angular</p>
                        <a href="https://jalal-sarokhan.github.io/J-S/" target="_blank" rel="noopener noreferrer" data-lang="de">Mehr erfahren</a>
                        <a href="https://jalal-sarokhan.github.io/J-S/" target="_blank" rel="noopener noreferrer" data-lang="en" style="display:none;">Learn More</a>
                        <a href="https://jalal-sarokhan.github.io/J-S/" target="_blank" rel="noopener noreferrer" data-lang="ku" style="display:none;">Zêdetir Fêr Bibe</a>
                        <a href="https://jalal-sarokhan.github.io/J-S/" target="_blank" rel="noopener noreferrer" data-lang="ar" style="display:none;">أعرف أكثر</a>
                    </div>
                    <div class="project">
                        <h2 data-lang="de">News</h2>
                        <h2 data-lang="en" style="display:none;">News</h2>
                        <h2 data-lang="ku" style="display:none;">Nûçe</h2>
                        <h2 data-lang="ar" style="display:none;">الأخبار</h2>
                        <p data-lang="de">Nachrichten API, wobei die API wird in GITHUB aus Datenschutz-richtlinien nicht funktionieren!</p>
                        <p data-lang="en" style="display:none;">News API, the API will not work on GITHUB due to privacy policies!</p>
                        <p data-lang="ku" style="display:none;">API-ya Nûçeyan, API li GITHUB-an nayê xebitandin ji bo politikayên taybetmendiyê!</p>
                        <p data-lang="ar" style="display:none;">واجهة برمجة تطبيقات الأخبار، لن تعمل واجهة برمجة التطبيقات على GITHUB بسبب سياسات الخصوصية!</p>
                        <a href="https://jalal-sarokhan.github.io/news/" target="_blank" rel="noopener noreferrer" data-lang="de">Mehr erfahren</a>
                        <a href="https://jalal-sarokhan.github.io/news/" target="_blank" rel="noopener noreferrer" data-lang="en" style="display:none;">Learn More</a>
                        <a href="https://jalal-sarokhan.github.io/news/" target="_blank" rel="noopener noreferrer" data-lang="ku" style="display:none;">Zêdetir Fêr Bibe</a>
                        <a href="https://jalal-sarokhan.github.io/news/" target="_blank" rel="noopener noreferrer" data-lang="ar" style="display:none;">أعرف أكثر</a>
                    </div>
                </section>
                <section id="contact">
                    <h1 data-lang="de">Kontakt</h1>
                    <h1 data-lang="en" style="display:none;">Contact</h1>
                    <h1 data-lang="ku" style="display:none;">Têkilî</h1>
                    <h1 data-lang="ar" style="display:none;">تواصل</h1>
                    <form id="contact-form" action="https://formspree.io/f/mzbnqznd" method="POST">
                        <label for="name" data-lang="de">Name:</label>
                        <label for="name" data-lang="en" style="display:none;">Name:</label>
                        <label for="name" data-lang="ku" style="display:none;">Nav:</label>
                        <label for="name" data-lang="ar" style="display:none;">اسم:</label>
                        <input type="text" id="name" name="name" required>
                        <label for="email" data-lang="de">E-Mail:</label>
                        <label for="email" data-lang="en" style="display:none;">Email:</label>
                        <label for="email" data-lang="ku" style="display:none;">E-name:</label>
                        <label for="email" data-lang="ar" style="display:none;">البريد الإلكتروني:</label>
                        <input type="email" id="email" name="email" required>
                        <label for="message" data-lang="de">Nachricht:</label>
                        <label for="message" data-lang="en" style="display:none;">Message:</label>
                        <label for="message" data-lang="ku" style="display:none;">Peyama:</label>
                        <label for="message" data-lang="ar" style="display:none;">رسالة:</label>
                        <textarea id="message" name="message" required></textarea>
                        <button type="submit" data-lang="de">Senden</button>
                        <button type="submit" data-lang="en" style="display:none;">Send</button>
                        <button type="submit" data-lang="ku" style="display:none;">Şandin</button>
                        <button type="submit" data-lang="ar" style="display:none;">إرسال</button>
                    </form>
            </main>
            <footer>
                <p>&copy; 2024 Jalal Sarokhan</p>
                <p>Diese Seite dient lediglich als Testversion für eine Portfolio-Webseite und kann Fehler oder falsche Informationen enthalten.</p>
            </footer>
            <script>
                document.getElementById('contact-form').addEventListener('submit', function(event) {
                    event.preventDefault(); // Verhindert das Standard-Formularverhalten
                    const form = event.target;
                    const formData = new FormData(form);
        
                    fetch(form.action, {
                        method: form.method,
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    }).then(response => {
                        if (response.ok) {
                            alert('Nachricht erfolgreich gesendet!');
                            form.reset();
                        } else {
                            response.json().then(data => {
                                if (Object.hasOwn(data, 'errors')) {
                                    alert(data["errors"].map(error => error["message"]).join(", "));
                                } else {
                                    alert('Es gab ein Problem beim Senden der Nachricht.');
                                }
                            });
                        }
                    }).catch(error => {
                        alert('Es gab ein Problem beim Senden der Nachricht.');
                    });
                });
        
                document.getElementById('languageSelector').addEventListener('change', function() {
                    var selectedLang = this.value;
                    var elements = document.querySelectorAll('[data-lang]');
                    
                    elements.forEach(function(element) {
                        if (element.getAttribute('data-lang') === selectedLang) {
                            element.style.display = 'block';
                        } else {
                            element.style.display = 'none';
                        }
                    });
                });
            </script>
            
            <script src="script.js"></script>
        
           
        </body>
        </html>
        `;
        const userPageCss = `
        footer {
            height: 65px;
        }
        header {
            height: 40px; 
        }
        
        
        body {
            padding-top: 110px; /* Headerhöhe + 10px */
            padding-bottom: 60px; /* Footerhöhe + 10px */
            margin: 0;
        }
        
        /* Stellt sicher, dass der Inhalt des Body mindestens 10px von oben und unten positioniert ist */
        body::before,
        body::after {
            content: "";
            display: block;
            height: 10px;
            width: 100%;
        }
        
        /* Es setzet Inhalt von ::before oben und ::after unten */
        body::before {
            margin-top: -10px;
        }
        
        body::after {
            margin-bottom: -10px;
        }
        
        
        header {
        
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px;
            position: fixed;
            top:0;
            width: 100%;
        
        }
        
        nav ul {
            list-style-type: none;
            padding: 0;
        }
        
        nav ul li {
            display: inline;
            margin-right: 20px;
        }
        
        nav ul li a {
            color: #fff;
            text-decoration: none;
        }
        
        section {
            padding: 20px;
        }
        
        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
        nav ul li a.active {
            color: #ff9900; /* Farbe des aktiven Links */
            font-weight: bold; /* Schriftstil des aktiven Links */
        }
        
        .about-info {
            display: flex; /* Nutzt Flexbox für das Layout */
        }
        
        .personal-info {
            margin-left: 20px; /* Fügt Abstand zwischen Bild und Informationen hinzu */
        }
        img {
            height: 140px; 
            width: 140px;
        }`;
        
        downloadHTML(userPageContent, `${name}_personalized_page.html`);
        downloadCSS(userPageCss,`styles.css`);
    }
    reader.readAsDataURL(picture);
});

function downloadHTML(content, filename) {
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
function downloadCSS(content, filename) {
    const blob = new Blob([content], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
