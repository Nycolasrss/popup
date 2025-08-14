const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");

button1.onclick = email;
button2.onclick = cmd;
button3.onclick = roteadores;

function popup(){
    update(locations[0]);
}
function email(){
    update(locations[1]);
}
function cmd(){
    update(locations[2]);
}
function roteadores(){
    update(locations[3]);
}

const locations = [

    {
       name: "popup",
       "button text":["📧 E-mail", " 💻 CMD","🌐 roteadores"],
       "button functions":[email, cmd, roteadores],
       text: ""
    },
    {
        name:"email",
        "button text":["💻 CMD","🌐 Roteadores", "Voltar"],
        "button functions":[cmd,roteadores,popup],
        text: `
            
             <h4>Verificações Básicas:</h4>
            <ul>
                <li>Verificar espaço de armazenamento</li>
                <li>Testar acesso pelo webmail e outros gerenciadores</li>
                <li>Verificação de portas, SSL e servidor utilizado</li>
                
            </ul>
            <h3>📧 Suporte de E-mail</h3>
            <h4>Configurações Básicas:</h4>
            <ul>
                <li>IMAP: PortaS de entrada com SSL 995 ,sem SSL 143 </li>
                <li>POP1: PortaS de entrada com SSL 993 ,sem SSL 110 </li>
                <li>IMAP/POP: Portas de saída com SSL 465 , sem SSL 587 , 25</li>
                <li>Servidor Entrada/Saída: ds03.engeplusempresas.com.br</li>
                
            </ul>
            <ul>
                <li><b>Error:Domain xxxx has exceeded the max defers and faillures pr hour (75/75(59%)) allowed. Message discarded.</b>
                Muitos emails enviado em pouco tempo, para email inválidos também, colodado na geladeira. Passar ao N2 para ajustar.<li><br>
            </ul>

            <h4>🛡️ Reputação de Domínio e Spam</h4>
            <h5>Problemas de Blacklist:</h5>
            <p><b>Erro Comum:</b> E-mails não chegam, ou vão para spam com mensagens como "Blocked by SPAMHAUS".</p>
            <p><b>Verificação:</b></p>
            <ul>
                
                <li><a href="https://mxtoolbox.com/blacklists.aspx" target="_blank">MXToolbox Blacklist Check</a></li>
            </ul>

            <h5>Problemas de Entrega (SPF/DKIM/DMARC):</h5>
            <p><b>Erro Comum:</b> E-mails marcados como "não confiáveis" ou spam.</p>
            <p><b>Verificação:</b></p>
            <ul>
                <li><a href="https://mxtoolbox.com/" target="_blank">MXToolbox (para SPF/DKIM/DMARC)</a></li>
                <li><a href="https://www.dmarcanalyzer.com/dmarc-checker/" target="_blank">DMARC Analyzer</a></li>
            </ul>

            <h5>Verificação WHOIS:</h5>
            <p><b>Erro Comum:</b> Dúvidas sobre propriedade, expiração de domínio ou contato.</p>
            <p><b>Verificação:</b></p>
            <ul>
                <li><a href="https://www.whois.com/whois/" target="_blank">WHOIS.com (Global)</a></li>
                <li><a href="https://registro.br/cgi-bin/whois/" target="_blank">Registro.br WHOIS (para domínios .br)</a></li>
        `


    },
    {
        name:"CMD",
        "button text":["📧 E-mail","🌐 Roteadores","Voltar"],
        "button functions":[email, roteadores, popup],
        text:    `
            <h3>💻 Comandos CMD </h3>
            <p>Use esses comandos CMD do Windows para diagnósticos de rede.</p>

            <h4>ping [endereço IP ou domínio]</h4>
            <ul>
                <li><b>Função:</b> Testa conectividade e tempo de resposta.</li>
                <li><b>Exemplo:</b> <code>ping google.com</code></li>
                <li><b>Uso:</b> Verificar acesso a sites/servidores.</li>
            </ul>

            <h4>tracert [endereço IP ou domínio]</h4>
            <ul>
                <li><b>Função:</b> Rastreia a rota dos pacotes até o destino.</li>
                <li><b>Exemplo:</b> <code>tracert mail.seudominio.com.br</code></li>
                <li><b>Uso:</b> O que faz: Rastreia a rota que os pacotes de dados percorrem desde o seu computador até um destino específico. Ele mostra cada "salto" (router ou dispositivo de rede) no caminho, com o tempo de resposta para cada um. Ajuda a identificar onde uma conexão está falhando ou onde há lentidão..</li>
            </ul>

            <h4>nslookup [domínio]</h4>
            <ul>
                <li><b>Função:</b> Consulta informações DNS (IP, MX).</li>
                <li><b>Exemplo:</b> <code>nslookup -type=mx meu-dominio.com</code></li>
                <li><b>Uso:</b> Verificar registros de domínio, IPs de servidores de e-mail.</li>
            </ul>

            <h4>ipconfig /all</h4>
            <ul>
                <li><b>Função:</b> Mostra todas as configurações de rede local.</li>
                <li><b>Uso:</b> Obter IP do PC, gateway, DNS usados.</li>
            </ul>

            <h4>ipconfig /flushdns</h4>
            <ul>
                <li><b>Função:</b> Limpa o cache DNS local do Windows.</li>
                <li><b>Uso:</b> Resolver problemas de acesso a sites após mudanças de DNS.</li>
            </ul>


            <h4>Verificar Velocidade da Placa de Rede |PowerShell| (Fast/Giga)</h4>
            <p>Get-NetAdapter | Format-Table Name, InterfaceDescription, LinkSpeed</p>
            <ul>
                <li><b>Ex:</b> <code>100/100 (Mbps)</code> = Fast Ethernet</li>
                <li><b>Ex:</b> <code>1000/1000 (Mbps)</code> = Gigabit Ethernet</li>

        `

    },
    {
        name:"Roteadores",
        "button text":["📧 E-mail","💻 CMD","Voltar"],
        "button functions":[email, cmd, popup],
        text:`<h4>📡 roteadores </h4>

              <h4>Configuração de router: </h4>
  <ul>
    <li>Comodato: Reconfiguração direto pelo siaf</li>
    
    <li>Próprio do cliente:</li>
    <ul>
    <liConectar cabo de rede no aparelho caso tenha</li>
    <li>buscar no browser por 192.168.0.1(padrão) || pelo nome da marca EX: tplinkwifi.net.</li>
    <li>Fornecer User/Passowrd PPPOE </li>
       </ul>
     <li>Para a rede Mesh é necessário os routers de mesmo modelo(basta configurar o primeiro e conectar o cabo ao segundo)




    </ul>

    


            
        
        
        
        
        
        
    
        
        `
    }
];


function update(location){
    button1.innerText=location["button text"][0];
    button2.innerText=location["button text"][1];
    button3.innerText=location["button text"][2];
    button1.onclick=location["button functions"][0];
    button2.onclick=location["button functions"][1];
    button3.onclick=location["button functions"][2];
    text.innerHTML=location.text;
    
}

