    
// let nomeProduto = document.querySelector("#nomeProduto");
// let quantidadeProduto = document.querySelector("#quantidadeProduto");
// let valorProduto = document.querySelector("#valorProduto");
// let tipoUnidadeProduto = document.querySelector("#tipoUnidadeProduto");
// let btnSalvar = document.querySelector("#salvarProduto");
        
// btnSalvar.addEventListener('click', event => {
           
//     $.ajax({
//         url:'php_action/createProduto.php',
//         type:'POST',
//         data: {
//             objNomeProduto: nomeProduto.value,
//             objQuantidadeProduto: quantidadeProduto.value,
//             objValorProduto: valorProduto.value,
//             objTipoUnidadeProduto: tipoUnidadeProduto.selectedOptions[0].value
//         },

//         success: (data) => {
                
//             if(data == 1){
                   
//                 alert('Produto Cadastrado com Sucesso');
//                 retornaProdutos();
                   
//             } else {
                    
//                 alert('Falha ao Cadastrar o produto');
                    
//             }
                
//         }
//     });
            
// });
       
// $(document).ready(function (){
           
//     retornaProdutos();
            
// });
        
// function retornaProdutos(){
            
//     $.ajax({
//         url:'php_action/listarProdutos.php',
//         type:'POST',
//         success: (data) => {
                        
//             let produtos = JSON.parse(data);
//             let linhaProduto;
//             let contadorProduto = 0;
                            
//             while (contadorProduto < produtos.length){
                                
//                 linhaProduto += `
//                     <tr>
// 						<th scope="row">${produtos[contadorProduto].nm_produto}</th>
// 						<th>${(produtos[contadorProduto].qtd_produto == null) ? 0 : produtos[contadorProduto].qtd_produto}</th>
// 						<th>${produtos[contadorProduto].tp_produto}</th>
// 						<th>${produtos[contadorProduto].vl_produto}</th>
// 						<td>
// 							<button class="btn-block btn-warning" id="alterarProduto" data-toggle="modal" data-target="#alterarProduto">ALTERAR</button>
// 						</td>
// 					</tr>`;
                                
//                 contadorProduto++;
                                
//             }
                            
//             document.querySelector("#listaProdutos").innerHTML = linhaProduto;
                          
//         } 
            
//     });       
// }

// // $(document).on("click", "#alterarProduto", function(){
// //     $.ajax({
// //         url:'php_action/listarUmProduto.php',
// //         type:'POST',
// //         success: (data) => {

// //             let produtos = JSON.parse(data);
// //             let linhaProduto;
                                
// //             linhaProduto += `
// //                 $("#nomeProduto").val(${produtos[contadorProduto].nm_produto});
// //                 $("#quantidadeProduto").val(${produtos[contadorProduto].qtd_produto});
// //                 $("#valorProduto").val(${produtos[contadorProduto].tp_produto});
// //                 $("#tipoUnidadeProduto").val(${produtos[contadorProduto].vl_produto});
// //             `               
// //         }
        
// //     });
// // });
        
// function alterarProdutos(codigoProduto){
        
//     $.ajax({
//         url:'php_action/alterarProdutos.php',
//         type:'POST',
//         data: {codigoProduto: codigoProduto},
//         success: (data) => {

//             let produtos = JSON.parse(data);
//             let linhaProduto;
                            
//             while (contadorProduto < produtos.length){
                                
//                 linhaProduto += `
//                     $("#nomeProduto").val(${produtos[contadorProduto].nm_produto});
//                     $("#quantidadeProduto").val(${produtos[contadorProduto].qtd_produto});
//                     $("#valorProduto").val(${produtos[contadorProduto].tp_produto});
//                     $("#tipoUnidadeProduto").val(${produtos[contadorProduto].vl_produto});
//                 `
                                
//                 contadorProduto++;
                                
//             }
                
//             /*if(data == 1){
                    
//                 alert("produto alterado com sucesso");
//                 retornaProdutos();
                    
//             } else {
                    
//                 alert("Falha ao alterar as informações do produto");
                    
//             }*/
                
//         }
//     });
            
// }
