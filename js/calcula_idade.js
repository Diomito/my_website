                //essa função retonna a idade atual//
                function calcula_idade_atual(Idade){
                    var idade = new Date(Idade);
                    var anoAtual = new Date();
                    idade_atual = anoAtual - idade;
                    var Idade = Math.floor(idade_atual / (365.25 * 24 * 60 * 60 * 1000));
                                            
                    return Idade;
                    }
                
                var Idade = "1996-11-19"
                var age = calcula_idade_atual(Idade);                 
                document.addEventListener("DOMContentLoaded", function() {
                document.getElementById("result").innerHTML = age;})