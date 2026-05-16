document.addEventListener("DOMContentLoaded", () => {
    const informesSection = document.getElementById("informes");

    // Lista de informes pré-definidos
    const informes = [
        { titulo: "Treinameto de produtos estrategias de vendas", descricao: "Orientar vendedores e gerentes sobre produtos.", link:"https://drive.google.com/file/d/1GUGYjOeu5YKUdAfWhYYMZRDqF_MKkyiK/view?usp=sharing"},
        { titulo: "Campanha comisão em dobro - AkzoNobel(Coral) 01/04/2026 a 30/06/2026", descricao: "Trabalho realizado com vendedores e gerentes, resultados são passados semanalmente.", link:"https://docs.google.com/spreadsheets/d/1XDDSj8fK5gEoOk4y3iGRkRIgyDed9_r0RCKhvO-v8Kk/edit?usp=sharing"},
        { titulo: "Tratativas de vencimento", descricao: "Acompanhamento de validade e ações para para dar foco na venda dos itens presentes na lista.", link:"https://docs.google.com/spreadsheets/d/1xM8XrGBQ-9TThbljdo6eVLXjAGVJMXSovUC5qmEGPag/edit?usp=sharing"},
        { titulo: "Introdução e divugação de produtos", descricao: "Dar foco á produtos recem chegados ao estoque.", link:"https://drive.google.com/file/d/1m0p7XW-AJTktHZCTJ3yZWRI3rbO2kFdA/view?usp=sharing"},
        { titulo: "Atualização do sitema tintométrico", descricao: "As atualizaçõs são feitas conforme os lançamentos de versõesdisponibilizadas pela Coral(Dinaxis). Apos atualização das dosadoras é feita a atualização do tintométrico no ADM.", link:"https://shotcolor.com.br/"},
        { titulo: "Conferencia de colorantes", descricao: "Conferências devem ser realizadas semanalmente.", link:"https://docs.google.com/spreadsheets/d/1HgA9Bw24EpIcqbb0lmuU0suosy2lMGs64FzYKYtnNjg/edit?usp=sharing"},  
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
