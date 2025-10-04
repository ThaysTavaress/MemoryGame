# 🎮 MemoryGame

## 👥 Integrantes  
- **Thays Tavares**  
- **Ester Rodrigues**  

---

## 📖 Introdução  
Este projeto consiste na implementação de um **Jogo da Memória** utilizando **HTML, CSS e JavaScript**,  
O objetivo é construir um jogo interativo em que o usuário deve encontrar pares de cartas iguais, exercitando lógica de programação e fundamentos de desenvolvimento web.  

---

## ⚙️ Desenvolvimento  

### Estrutura (HTML)  
O arquivo `index.html` contém:  
- O título do jogo.  
- Um tabuleiro em formato de **grid** com 6 cartas (3 pares).  
- Um botão para **reiniciar** a partida.  
- Identificação dos integrantes, conforme solicitado.  

### Estilização (CSS)  
O arquivo `style.css` é responsável pela aparência do jogo, com os seguintes recursos:  
- **Flexbox** para centralizar os elementos.  
- **Grid Layout** para organizar o tabuleiro.  
- Animação de virar cartas com `transform: rotateY(180deg)` e `transition`.  
- Fundo em gradiente e botão estilizado com efeitos de clique.  

### Lógica (JavaScript)  
O arquivo `script.js` implementa as regras do jogo:  
1. As cartas podem ser viradas ao clique.  
2. Apenas duas cartas podem ser viradas por vez.  
3. Caso sejam iguais, permanecem abertas; caso contrário, voltam ao estado inicial após 1 segundo.  
4. O jogo **bloqueia cliques extras** enquanto as cartas estão sendo comparadas.  
5. O botão **Reiniciar** restaura o tabuleiro, permitindo uma nova rodada.  

### Estrutura de Pastas  

```bash
projeto-jogo-da-memoria
├── css
│   └── style.css
├── img
│   ├── img1.png
│   ├── img2.png
│   └── img3.png
├── js
│   └── script.js
├── index.html
└── README.md


📌 Conclusão

Este projeto permitiu colocar em prática conhecimentos de HTML, CSS e JavaScript, trabalhando com:
	-Estruturação de páginas web.
	-Estilização visual e animações.
	-Manipulação do DOM e lógica de jogo interativa.

