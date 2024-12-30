export function returnhtml(total, status, customer, items,) {

    let ListProduct = '';
    let ListTableTotal = `
        <div class="footer">
            <p>Sous-total: ${total.toFixed(2)} TND</p>
            <p>Remise: 10%</p>
            <p>Timbre: 1.6 TND</p>
            <p>Frais de livraison: ${status} TND</p>
            <p><strong>Total:"" TND</strong></p>
            <p>Note: Réduction appliquée sur le prix total.</p>
        </div>
    `;

    let userDetails = `
        <div class="row">
            <div class="column">
                <div class="title">
                    <h4>Vendeur: Iysaal ERP</h4>
                    <p>Téléphone: 71870031</p>
                </div>
            </div>
            <div class="column">
                <div class="title">
                    <h5>MF</h5>
                    <p>Tunis</p>
                    <h5>Adresse</h5>
                    <p>Manar</p>
                </div>
            </div>
        </div>
    `;

    items.forEach((element) => {

        ListProduct += `
            <tr>
                <td class="tableitem"> ${element.item_code}</td>
                <td class="tableitem">${element.qty}</td>
                <td class="tableitem">${element.amount}</td>
                
            </tr>
        `;
    });

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Invoice</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f8f9fa;
                }
                #invoice-POS {
                    max-width: 60mm;
                    margin: 0 auto;
                    padding: 10px;
                    background-color: #fff;
                }
                .row {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                }
                .column {
                    flex: 1;
                    padding: 5px;
                }
                .header img {
                    max-width: 100%;
                }
                .info p {
                    font-size: 12px;
                    margin: 2px 0;
                }
                .title h4, .title h5 {
                    margin: 5px 0;
                    text-align: left;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 10px;
                }
                th, td {
                    font-size: 12px;
                    padding: 5px;
                    text-align: left;
                    border: 1px solid #ccc;
                }
                th {
                    background-color: #8894c9;
                    color: white;
                }
                .footer p {
                    font-size: 12px;
                    margin: 5px 0;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div id="invoice-POS">
                <div class="row">
                    <div class="column">
                        <div class="header">
                            <img src="https://i.ibb.co/sQ1d8Rb/images.jpg" alt="Logo">
                        </div>
                    </div>
                    <div class="column">
                        <div class="info">
                            <p>Grossiste STE</p>
                            <p>Tunis Manar</p>
                            <p>71 870 031</p>
                            <p>www.iteslab.tn</p>
                        </div>
                    </div>
                </div>

                ${userDetails}

                <center>
                    <h4>Bon de Livraison</h4>
                    <p>17887-06</p>
                    <p>Client: ${customer}</p>
                    <p>Ben Arous, Tunis - MF 1099JAM00</p>
                </center>

                <table>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Quantité</th>
                            <th>TTC</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${ListProduct}
                    </tbody>
                </table>

                <hr>

                ${ListTableTotal}

                <div class="footer">
                    <p><strong>Merci pour votre confiance!</strong></p>
                    <p>Contact: 71870031 : iteslab@gmail.com</p>
                </div>
            </div>
        </body>
        </html>
    `;
}
