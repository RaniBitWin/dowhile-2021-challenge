const LinksSocialMedia = {
  github: 'RaniBitWin',
  youtube: 'channel/UCO0jnL7E5hjfr32JSzWrMfA',
  facebook: 'ranieler',
  instagram: 'raniboywin',
  twitter: 'RaniWin19398237'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()

function mission() {
  document.getElementById('textMission').innerHTML =
    ' MISSÃO: <br><br>Sentimos que <em>nossa missão</em> é: contribuir para melhorar o acesso a educação, especialmente educacão profissional, através da indicação de escolas online que primam pela democratização do conhecimento e, portanto, oferecem de todo ou em parte ensino gratuito em suas plataformas.<br><br> CONTEXTO: <br><br>"A pandemia exerceu um forte impacto na educação básica, afinal, as escolas tiveram que se adaptar tecnologicamente para suprir a demanda de um ensino a distância.<br><br> Em um país com 11 milhões de analfabetos, as barreiras atuais de acesso à educação e o quadro econômico com pouca verba destinada para a educação... <br><br>A perspectiva é que essa geração tenha problemas em se destacar no futuro, pois há uma lacuna preocupante na construção de competências técnicas e socioemocionais.<br><br> Especialmente para quem reside em áreas rurais, periferias, regiões de risco, encosta de rios e demais localidades, <em>a ida à escola é quase um trabalho hercúleo</em>.<br><br> Outra questão que impede o acesso à educação é a realidade socioeconômica das famílias, porque populações de baixa renda nem sempre podem focar nos estudos.<br><br> Ainda tem gente com fome no país e os esforços dos familiares são para sobreviver em primeiro lugar, sendo que muitas crianças e jovens acabam ajudando na renda.<br><br> A falta de igualdade de oportunidades na sociedade faz com que nem todas as famílias tenham acesso à educação básica, ensino técnico ou ensino superior." <a href="https://www.oxfam.org.br/blog/acesso-a-educacao-no-brasil-os-desafios-da-luta-pela-igualdade/" class="change" style="display: contents;" target="_blank">(OXFAM)</a>'
}

function rocketseat() {
  document.getElementById('rocketseat').innerHTML =
    'A escola <a class="change" style="display: contents;" href="https://www.rocketseat.com.br/" target="_blank">Rocketseat</a> através do  <a class="change" style="display: contents;"  href="https://www.rocketseat.com.br/discover" target="_blank"> Discover</a>  diponibiliza  uma plataforma gratuita de aprendizado para dominio completo dos fundamentos em programação com mais de 600 aulas.'
}

function grasshopper() {
  document.getElementById('grasshopper').innerHTML =
    'O programa cresça com Google pelo  <a class="change" style="display: contents;" href="https://grasshopper.app/pt_br/" target="_blank"> Grasshopper </a> disponibiliza um  <a class="change" style="display: contents;" href="https://learn.grasshopper.app/" target="_blank"> app </a>  que oferece um ambiente  para iniciantes em programação, com aulas práticas e interativas de javaScript, SVG e <a class="change" style="display: contents;" href="https://d3js.org/" target="_blank"> d3.js. </a> '
}

function euCapacito() {
  document.getElementById('euCapacito').innerHTML =
    'O <a class="change" style="display: contents;" href="https://www.eucapacito.com.br" target="_blank">Eu Capacito</a> é um projeto social que realiza a capacitação profissional gratuita em quatro áreas principais:   <a class="change" style="display: contents;"  href="https://eucapacito.com.br/cursos/" target="_blank"> Tech, Empreendedorismo, Soft Skills e Fluência Digital.</a> '
}

function escolaVirtual() {
  document.getElementById('escolaVirtual').innerHTML =
    'A <a class="change" style="display: contents;" href="https://www.ev.org.br/" target="_blank">Fundação Bradesco</a> através de sua Escola Virtual disponibiliza cursos gratuitos nas áreas:  <a class="change" style="display: contents;"  href="https://www.ev.org.br/#cursos" target="_blank">Administração, Contabilidade, Desenvolvimento Pessoal e Profissional, Educação Básica e Teconologia.</a> '
}

function courses() {
  rocketseat()
  grasshopper()
  euCapacito()
  escolaVirtual()
}

function referenceLinks() {
  document.getElementById('referenceUrls').innerHTML =
    'Rocketseat: <a class="change" style="display: contents;" href="https://www.rocketseat.com.br/" target="_blank">https://www.rocketseat.com.br/</a><br><br>Discover: <a class="change" style="display: contents;"  href="https://www.rocketseat.com.br/discover" target="_blank"> https://www.rocketseat.com.br/discover</a><br><br>Grasshopper: <a class="change" style="display: contents;" href="https://grasshopper.app/pt_br/" target="_blank"> https://grasshopper.app/pt_br/ </a> <br><br> Learn Grasshopper: <a class="change" style="display: contents;" href="https://learn.grasshopper.app/" target="_blank"> https://learn.grasshopper.app </a> <br><br>Eu Capacito: <a class="change" style="display: contents;" href="https://www.eucapacito.com.br" target="_blank">https://www.eucapacito.com.br</a> <br><br>Eu Capacito Cursos: <a class="change" style="display: contents;"  href="https://eucapacito.com.br/cursos/" target="_blank">https://eucapacito.com.br/cursos/</a> <br><br>Fundação Bradesco: <a class="change" style="display: contents;" href="https://www.ev.org.br/" target="_blank">https://www.ev.org.br/ </a> <br><br>Escola Virtual:  <a class="change" style="display: contents;"  href="https://www.ev.org.br/#cursos" target="_blank">https://www.ev.org.br/#cursos</a><br><br> d3.js: <a class="change" style="display: contents;" href="https://d3js.org/" target="_blank"> https://d3js.org/ </a> <br><br>OXFAM: <a href="https://www.oxfam.org.br/blog/acesso-a-educacao-no-brasil-os-desafios-da-luta-pela-igualdade/" class="change" style="display: contents;" target="_blank">https://www.oxfam.org.br/blog/acesso-a-educacao-no-brasil-os-desafios-da-luta-pela-igualdade/</a> '
}

function setZCourse(_zIndex) {
  document.getElementById('rocketseat').style.zIndex = _zIndex
  document.getElementById('grasshopper').style.zIndex = _zIndex
  document.getElementById('euCapacito').style.zIndex = _zIndex
  document.getElementById('escolaVirtual').style.zIndex = _zIndex
}

function clearHome() {
  document.getElementById('textMission').innerHTML = ''
  document.getElementById('rocketseat').innerHTML = ''
  document.getElementById('grasshopper').innerHTML = ''
  document.getElementById('euCapacito').innerHTML = ''
  document.getElementById('escolaVirtual').innerHTML = ''
  document.getElementById('referenceUrls').innerHTML = ''
  document.getElementById('animation').style.backgroundColor =
    'rgb(248, 76, 105)'
  document.getElementById('animation').style.zIndex = 0
}

function clearCourses() {
  setZCourse(1)
  document.getElementById('textMission').innerHTML = ''
  document.getElementById('referenceUrls').innerHTML = ''

  document.getElementById('animation').style.backgroundColor = 'transparent'
  document.getElementById('textMission').style.zIndex = 0
  document.getElementById('referenceUrls').style.zIndex = 0
  document.getElementById('animation').style.zIndex = 0
}

function clearMission() {
  setZCourse(0)
  document.getElementById('referenceUrls').style.zIndex = 0
  document.getElementById('textMission').style.zIndex = 1
  document.getElementById('rocketseat').innerHTML = ''
  document.getElementById('grasshopper').innerHTML = ''
  document.getElementById('euCapacito').innerHTML = ''
  document.getElementById('escolaVirtual').innerHTML = ''
  document.getElementById('referenceUrls').innerHTML = ''
  document.getElementById('animation').style.zIndex = 0
  document.getElementById('animation').style.backgroundColor = 'transparent'
}

function clearLinks() {
  setZCourse(0)
  document.getElementById('referenceUrls').style.zIndex = 1
  document.getElementById('textMission').style.zIndex = 0
  document.getElementById('textMission').innerHTML = ''
  document.getElementById('rocketseat').innerHTML = ''
  document.getElementById('grasshopper').innerHTML = ''
  document.getElementById('euCapacito').innerHTML = ''
  document.getElementById('escolaVirtual').innerHTML = ''
  document.getElementById('animation').style.zIndex = 0
  document.getElementById('animation').style.backgroundColor = 'transparent'
}

function clearContacts() {
  document.getElementById('textMission').innerHTML = ''
  document.getElementById('rocketseat').innerHTML = ''
  document.getElementById('grasshopper').innerHTML = ''
  document.getElementById('euCapacito').innerHTML = ''
  document.getElementById('escolaVirtual').innerHTML = ''
  document.getElementById('referenceUrls').innerHTML = ''
  document.getElementById('animation').style.backgroundColor = '#ffc323'
  document.getElementById('animation').style.zIndex = 0
}
