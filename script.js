document.getElementById('personalizationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('uname').value;
    const uWork = document.getElementById('uWork').value;
    const exp = document.getElementById('uExp').value;

    const uDeteils = document.getElementById('uDeteils').value;
    const uFirma = Array.from(document.getElementsByName('uFirma[]')).map(input => input.value);
    const uRole = Array.from(document.getElementsByName('uRole[]')).map(input => input.value);
    const uFromYear = Array.from(document.getElementsByName('uFromYear[]')).map(input => input.value);
    const uToYear = Array.from(document.getElementsByName('uToYear[]')).map(input => input.value);
    const uProject = Array.from(document.getElementsByName('uProject[]')).map(input => input.value);
    const uProjectDesc = Array.from(document.getElementsByName('uProjectDesc[]')).map(input => input.value);
    const picture = document.getElementById('picture').files[0];

    const reader = new FileReader();
    reader.onload = function(e) {
        let experienceList = '';
    uFirma.forEach((firma, index) => {
        experienceList += `
            <li data-lang="de"><strong>${firma}</strong>  ${uRole[index]}  ( ${uFromYear[index]} -  ${uToYear[index]})</li>
            <li data-lang="en" style="display:none;"><strong>${firma}</strong> ${uRole[index]} ( ${uFromYear[index]} -  ${uToYear[index]})</li>
            <li data-lang="ku" style="display:none;"><strong>${firma}</strong> ${uRole[index]} ( ${uFromYear[index]} -  ${uToYear[index]})</li>
            <li data-lang="ar" style="display:none;"><strong>${firma}</strong>  (مارس 2022 - ديسمبر 2022) ${uRole[index]} </li>
        `;
    });

        let projectsList = '';
        uProject.forEach((project, index) => {
            projectsList += `
                <div class="project">
                    <h2 data-lang="de">Projekt ${project}</h2>
                    <h2 data-lang="en" style="display:none;">Project ${project}</h2>
                    <h2 data-lang="ku" style="display:none;">Projekta ${project}</h2>
                    <h2 data-lang="ar" style="display:none;">مشروع ${project}</h2>
                    <p data-lang="de">${uProjectDesc[index]}</p>
                    <p data-lang="en" style="display:none;">${uProjectDesc[index]}</p>
                    <p data-lang="ku" style="display:none;">${uProjectDesc[index]}</p>
                    <p data-lang="ar" style="display:none;">${uProjectDesc[index]}</p>
                </div>
            `;
        });

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
                    background-color: #5cb85c;
                    color: white;
                    cursor: pointer;
                }
                .project {
                    margin-bottom: 20px;
                }
                .project h2 {
                    margin-top: 0;
                }
            </style>
        </head>
        <body>
            <header>
                <nav>
                    <ul>
                        <li><a href="#about" data-lang="de">Über Mich</a></li>
                        <li><a href="#about" data-lang="en" style="display:none;">About</a></li>
                        <li><a href="#about" data-lang="ku" style="display:none;">Di Derbarê Min De</a></li>
                        <li><a href="#about" data-lang="ar" style="display:none;">معلومات عني</a></li>
                        <li><a href="#experience" data-lang="de">Erfahrung</a></li>
                        <li><a href="#experience" data-lang="en" style="display:none;">Experience</a></li>
                        <li><a href="#experience" data-lang="ku" style="display:none;">Tecrûbe</a></li>
                        <li><a href="#experience" data-lang="ar" style="display:none;">الخبرة</a></li>
                        <li><a href="#projects" data-lang="de">Projekte</a></li>
                        <li><a href="#projects" data-lang="en" style="display:none;">Projects</a></li>
                        <li><a href="#projects" data-lang="ku" style="display:none;">Projekter</a></li>
                        <li><a href="#projects" data-lang="ar" style="display:none;">المشاريع</a></li>
                        <li><a href="#contact" data-lang="de">Kontakt</a></li>
                        <li><a href="#contact" data-lang="en" style="display:none;">Contact</a></li>
                        <li><a href="#contact" data-lang="ku" style="display:none;">Têkilî</a></li>
                        <li><a href="#contact" data-lang="ar" style="display:none;">اتصل</a></li>
                        <li>
                            <select id="languageSelector">
                                <option value="de">DE</option>
                                <option value="en">EN</option>
                                <option value="ku">KU</option>
                                <option value="ar">AR</option>
                            </select>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="about">
                    <img src="${e.target.result}" alt="Profile Picture" class="profile-pic">
                    <h1 data-lang="de">Über mich</h1>
                    <h1 data-lang="en" style="display:none;">About Me</h1>
                    <h1 data-lang="ku" style="display:none;">Di derbarê min de</h1>
                    <h1 data-lang="ar" style="display:none;"> معلومات عنّي</h1>
                    <p data-lang="de">Ich bin ${name}, ein ${uWork} mit Erfahrung in ${exp}.</p>
                    <p data-lang="en" style="display:none;">I am ${name}, a ${uWork}  with experience in ${exp}.</p>
                    <p data-lang="ku" style="display:none;">Ez ${name} im, ${uWork}  bi tecrûbeyek di ${exp}.</p>
                    <p data-lang="ar" style="display:none;">أنا ${name} ${uWork}  ذو خبرة في ${exp}.</p>

                    <p data-lang="de">${uDeteils}</p>
                    <p data-lang="en" style="display:none;">${uDeteils}</p>
                    <p data-lang="ku" style="display:none;">${uDeteils}</p>
                    <p data-lang="ar" style="display:none;">${uDeteils}</p>
                </section>
                <section id="experience">
                    <h1 data-lang="de">Erfahrung</h1>
                    <h1 data-lang="en" style="display:none;">Experience</h1>
                    <h1 data-lang="ku" style="display:none;">Tecrûbe</h1>
                    <h1 data-lang="ar" style="display:none;">الخبرة</h1>
                    <ul>
                        ${experienceList}
                    </ul>
                </section>
                <section id="projects">
                    <h1 data-lang="de">Projekte</h1>
                    <h1 data-lang="en" style="display:none;">Projects</h1>
                    <h1 data-lang="ku" style="display:none;">Projekter</h1>
                    <h1 data-lang="ar" style="display:none;">المشاريع</h1>
                    ${projectsList}
                </section>
                <section id="contact">
                    <h1 data-lang="de">Kontakt</h1>
                    <h1 data-lang="en" style="display:none;">Contact</h1>
                    <h1 data-lang="ku" style="display:none;">Têkilî</h1>
                    <h1 data-lang="ar" style="display:none;">اتصل</h1>
                    <p data-lang="de">Email: beispiel@example.com</p>
                    <p data-lang="en" style="display:none;">Email: example@example.com</p>
                    <p data-lang="ku" style="display:none;">Email: nimûne@nimûne.com</p>
                    <p data-lang="ar" style="display:none;">Email: مثال@مثال.com</p>
                </section>
            </main>
            <script>
                document.getElementById('languageSelector').addEventListener('change', function() {
                    const selectedLanguage = this.value;
                    const elements = document.querySelectorAll('[data-lang]');
                    elements.forEach(element => {
                        element.style.display = element.getAttribute('data-lang') === selectedLanguage ? '' : 'none';
                    });
                });
            </script>
        </body>
        </html>
        `;

        const blob = new Blob([userPageContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${name}-portfolio.html`;
        a.click();
    };
    reader.readAsDataURL(picture);
});

document.getElementById('addCompany').addEventListener('click', function() {
    const companyFields = document.getElementById('companyFields');
    const newCompanyField = document.createElement('div');
    newCompanyField.classList.add('companyField');

    newCompanyField.innerHTML = `
        <div class="input-group">
                        <div class="input-item">
                            <label for="uFirma">
                                <span data-lang="de">Firma oder Institut:</span>
                                <span data-lang="en" style="display:none;">Company or Institute:</span>
                                <span data-lang="ku" style="display:none;">Şîrket an Enstîtu:</span>
                                <span data-lang="ar" style="display:none;">شركة أو معهد:</span>
                            </label>
                            <input type="text" name="uFirma[]" placeholder="z.B. BASF, Amazon, SAP, Lidl...">
                        </div>
                        <div class="input-item">
                            <label for="uRole">
                                <span data-lang="de">Beruf:</span>
                                <span data-lang="en" style="display:none;">Role:</span>
                                <span data-lang="ku" style="display:none;">Kar:</span>
                                <span data-lang="ar" style="display:none;">دور:</span>
                            </label>
                            <input type="text" name="uRole[]" placeholder="z.B. Softwareentwickler">
                        </div>
                       
                        <div class="input-item">
                            <label for="uFromYear">
                                <span data-lang="de">Vom:</span>
                                <span data-lang="en" style="display:none;">From:</span>
                                <span data-lang="ku" style="display:none;">Ji:</span>
                                <span data-lang="ar" style="display:none;">من :</span>
                            </label>
                            <input type="date" name="uFromYear[]" max="" id="fromYear" onchange="checkDate('fromYear', 'fromMonth')">
                        </div>
                        <div class="input-item">
                            <label for="uToYear">
                                <span data-lang="de">Bis :</span>
                                <span data-lang="en" style="display:none;">To :</span>
                                <span data-lang="ku" style="display:none;">Heta :</span>
                                <span data-lang="ar" style="display:none;">إلى:</span>
                            </label>
                            <input type="date" name="uToYear[]" max="" id="toYear" onchange="checkDate('toYear', 'toMonth')">
                        </div>
                    </div>
    `;
    companyFields.appendChild(newCompanyField);
});

document.getElementById('addProject').addEventListener('click', function() {
    const projectFields = document.getElementById('projectFields');
    const newProjectField = document.createElement('div');
    newProjectField.classList.add('project-entry');

    newProjectField.innerHTML = `
        <label for="uProject" data-lang="de">Projektname:</label>
        <label for="uProject" data-lang="en" style="display:none;">Project Name:</label>
        <label for="uProject" data-lang="ku" style="display:none;">Navê Projeyê:</label>
        <label for="uProject" data-lang="ar" style="display:none;">اسم المشروع:</label>
        <input type="text" name="uProject[]" placeholder="z.B. Webshop, Mobile App..." style="align-items: center ;width: 20%;">
        <label for="uProjectDesc" data-lang="de">Projektbeschreibung:</label>
        <label for="uProjectDesc" data-lang="en" style="display:none;">Project Description:</label>
        <label for="uProjectDesc" data-lang="ku" style="display:none;">Terîfa Projeyê:</label>
        <label for="uProjectDesc" data-lang="ar" style="display:none;">وصف المشروع:</label>
        <textarea name="uProjectDesc[]" placeholder="Beschreiben Sie das Projekt..."></textarea>
    `;
    projectFields.appendChild(newProjectField);
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
