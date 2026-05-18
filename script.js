document.addEventListener("DOMContentLoaded", () => {
    const informesSection = document.getElementById("informes");

    // Lista de informes pré-definidos
    const informes = [
        { titulo: "📊 Comparativo e atualização de dados e vendas",
             descricao: "Consiste em observar e comparar os dados de vendas por período, a fim de tomar decisões estratégicas e implementar ações com base nas informações obtidas.", link:"https://docs.google.com/spreadsheets/d/1GdZFQOlhC2s-HU5T49Milz3OoMOsiAonRXPToe6qrQ0/edit?usp=sharing"},
        { titulo: "🎓 Treinamento de produtos estratégias de vendas",
             descricao: "Orientar vendedores e gerentes sobre produtos.", link:"https://drive.google.com/file/d/1GUGYjOeu5YKUdAfWhYYMZRDqF_MKkyiK/view?usp=sharing"},
        { titulo: "💰Campanha comisão em dobro - AkzoNobel(Coral) 01/04/2026 a 30/06/2026", 
            descricao: "⏳ Trabalho realizado com vendedores e gerentes, resultados são passados semanalmente.", link:"https://docs.google.com/spreadsheets/d/1XDDSj8fK5gEoOk4y3iGRkRIgyDed9_r0RCKhvO-v8Kk/edit?usp=sharing"},
        { titulo: "Tratativas de vencimento",
             descricao: "Acompanhamento de validade e ações para para dar foco na venda dos itens presentes na lista.", link:"https://docs.google.com/spreadsheets/d/1xM8XrGBQ-9TThbljdo6eVLXjAGVJMXSovUC5qmEGPag/edit?usp=sharing"},
        { titulo: "💡 Introdução e divugação de produtos", 
            descricao: "Dar foco á produtos recem chegados ao estoque.", link:"https://drive.google.com/file/d/1m0p7XW-AJTktHZCTJ3yZWRI3rbO2kFdA/view?usp=sharing"},
        { titulo: "🤝 Sugestões ao setor de comoras", 
            descricao: "Sugerir introdução e reposição de trpodutos."},
        { titulo: "🖥️ Atualização do sitema tintométrico",
             descricao: "As atualizaçõs são feitas conforme os lançamentos de versõesdisponibilizadas pela Coral(Dinaxis). <br>Apos atualização das dosadoras é feita a atualização do tintométrico no ADM.", link:"https://shotcolor.com.br/"},
        { titulo: "🎨 Conferencia de colorantes", 
            descricao: "Conferências devem ser realizadas semanalmente.", link:"https://docs.google.com/spreadsheets/d/1HgA9Bw24EpIcqbb0lmuU0suosy2lMGs64FzYKYtnNjg/edit?usp=sharing"},  
        { titulo: "🛠️ Manutenção de ferramentas digitais",
             descricao: "As ferramentas digitais têm como objetivo oferecer ao setor de vendas acesso rápido e prático aos catálogos, além de facilitar o direcionamento durante o processo de vendas.", link:"https://valdineymartins.github.io/catalogos-e-manuais/index.html"},  
        { titulo: "🧪 Solicitação e personalização de formulas",
             descricao: "A solicitação de formas deve estar de acordo com o pedido da fórmula ao fabricante.<br>A personalização pode ser realizada de duas maneiras: Adaptação de uma fórmula já existente, com alterações apenas nos nomes ou detalhes específicos. Criação de uma nova fórmula não oficial, desenvolvida a partir de necessidades exclusivas.", link:"https://call.whatsapp.com/video/v4ei5M4EjbgraLIEnmRPAT"},
        { titulo: "📌 Gestão de grupo(Tintas - Operaciona)",
             descricao: "Fornecer instruções e acompanhar a manutenção de doadoras. <br>Instruir sobre movimentações de produtos."},
        { titulo: "📌 Gestão de grupos(Amigo pintor)",
             descricao: "Postar ofertas. <br>Responder questionamentos. <br>Divugar novidaes"},
        { titulo: "🌟Definir layaut de gondula",
             descricao: "Definir layaut. <br> Orientar na execuçãio e supervisionar a manutenção."},
        
             
        
        
    ];

    // Renderiza cada informe na página
    informes.forEach(informe => {
        const div = document.createElement("div");
        div.classList.add("informe");

        // Monta o HTML dinamicamente
        div.innerHTML = `
            <h3>${informe.titulo}</h3>
            ${informe.link ? `<a href="${informe.link}" target="_blank">Mais informações</a>` : ""}
            <p>${informe.descricao}</p>
        `;
        
        informesSection.appendChild(div);
    });
});
