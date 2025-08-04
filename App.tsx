import {Component} from "react";
import {AppState} from "./src/appStat/appState.tsx"
import {Image, Text, TouchableOpacity, View} from "react-native";
import estilo from "./src/VielModel/Style/estilos.tsx"


class App extends Component<{}, AppState>{

    frases: string[];
    constructor(props: any) {
        super(props);
        this.state = {
            textRadon: 'Clique em ' + '"' + 'Quebrar biscoito'
                + '" ' + 'para acessar a mensagens de sorte' , //Acesso para as frases aletorias
            img: require('./src/VielModel/Assets/biscoito.png'), // Acessa a Imagem do biscoito Inteiro

        };

        //Ainda no construturo se cria esse metodo para conseguir referencia do this no quebrar
        this.quebra = this.quebra.bind(this);

        //Aqui é um Array para armazenar as frases
        this.frases = [
            'Siga os bons e aprenda com eles.',
            'O bom-senso vale mais do que muito conhecimento.',
            'Deixe de lado as preocupações e seja feliz',
            'Realize o obvio, ense no improvavel e conquiste o impossivel',
            'Acredite em milagres, mas não dependa deles',
            'A maior barreira para o sucesso é o medo do fracaso'
        ]
    }

    quebra() {
        /*Aqui se cria uma variavel 'numberRadom' aonde ele vai fazer a contagem das linhas de 0 à 5
          junto 'Math.floor' que indentifica as linha e o 'Math.radom' vai ler as frases
          aletoriamente.*/
        let numberRadon = Math.floor(Math.random() * this.frases.length);


        this.setState({
            /*
              Aqui é o processo depois da variavel 'numberRadom' faz a escolha aletoria
              vai apresentar dentro 'this.frases[numberRadon]' uma das linha do array.
            */
            textRadon: '"' + this.frases[numberRadon] + ' " ',
            /*
                No mesmo tempo que eu clico no 'Quebrar biscoito' a PNG vai alterar a imagem
                do biscoito para ele aberto.
             */
            img: require('./src/VielModel/Assets/biscoitoAberto.png'),
        })
    }


    render(){
        return(
            <View style={estilo.area}>

                <Image
                source={this.state.img}
                style={estilo.img}
                />
                {/*Aqui a se aloca o texto que vai ser alterado aletoriamente*/}
                <Text style={estilo.lbl}>{this.state.textRadon}</Text>
                <TouchableOpacity style={estilo.btn} onPress={this.quebra}>
                    <View style={estilo.btnArea}>
                        <Text style={estilo.btnText}>Quebrar biscoito</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}

export default App;