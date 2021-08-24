const coin = {
    
    
    state : function() {
        return Math.floor(Math.random() * 2);
        
      // Use "this.state" para acessar a propriedade "state".
      // Configure de forma randômica a propriedade “state” do
      // seu objeto moeda. "STATE" deve receber somente os valores 0 ou 1.
    },
  
    toString: function () {
        let state = this.state();
        if(state === 0){
            let text = document.createElement("p");
            text.innerHTML = "Cara";
            document.querySelector('#text-content').appendChild(text);
            return "Cara"
        } 
        if(state === 1){
            let text = document.createElement("p");
            text.innerHTML = "Coroa";
            document.querySelector('#text-content').appendChild(text);
            return "Coroa"
        }
      // Se o valor de "state" for 0, retorne "Heads"
      // Se o valor de "state" for 1, retorne "Tails"
    },
  
    toHTML: function () {
        let state = this.state();
        if(state === 0){
            let image = document.createElement("img");
            image.src = "./images/cara.jpg";
            image.alt = "Cara";
            document.querySelector('#image-content').appendChild(image);
        }
        if (state === 1){
            let image = document.createElement("img");
            image.src = "./images/coroa.png";
            image.alt = "Coroa";
            document.querySelector('#image-content').appendChild(image);
        }
        return state
    },
  };

  function display20Flips() {
    let r = 0
    let results = [];
        for(let i = 0; i < 20; i++){
            r = coin.toString();
            results.push(r)
        }
    return results
    // Use um loop para arremessar a moeda 20 vezes.
    // Depois que o seu loop terminar, exiba o resultado na página no formato de TEXTO.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
  }
  
  function display20Images() {
    let r = 0
    let results = [];
        for(let i = 0; i < 20; i++){
            r = coin.toHTML();
            results.push(r)
        }
    return results
    // Use um loop para arremessar a moeda 20 vezes.
    // Depois que o seu loop terminar, exiba o resultado na página no formato de IMAGEM.
    // Além de exibir os resultados na página, não esqueça
    // de retornar o valor de "results".
    // Caso esqueça de retornar "results", sua função não
    // irá passar nos testes.
  }

const button1 = document.getElementById("sorttext");
button1.addEventListener('click', function clicar1(){
    reset();
    display20Flips();
})

const button2 = document.getElementById("sortimage");
button2.addEventListener('click', function clicar2(){
    reset();
    display20Images();
})

const buttonreset = document.getElementById("reset");
buttonreset.addEventListener('click', function breset(){
    reset();
})


function reset(){
    const textcontent = document.getElementById("text-content");
    textcontent.innerHTML ="";
    const imagecontent = document.getElementById("image-content");
    imagecontent.innerHTML ="";
}
