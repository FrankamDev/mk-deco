const Invoice = () => {
  const invoiceDate = new Date().toLocaleDateString("fr-FR");

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-green-700">
            Vermine Secret
          </h1>
          <p>690461830</p>
          <p>frankamdev@gmail.com</p>
          <p>Yaoundé, Cameroun</p>
        </div>

        <div className="text-right">
          <h2 className="text-2xl font-bold">FACTURE</h2>
          <p>Date : {invoiceDate}</p>
          <p>Facture N° : VS-{Date.now()}</p>
        </div>
      </div>

      {/* Client */}
      <div className="border-t pt-4 mb-8">
        <h3 className="font-bold text-lg mb-2">Facturé à :</h3>
        <p>Client : Non renseigné</p>
        <p>Ville : Yaoundé</p>
      </div>

      {/* Services */}
      <table className="w-full border-collapse mb-8">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3 text-left">Service</th>
            <th className="border p-3">Quantité</th>
            <th className="border p-3">Prix</th>
            <th className="border p-3">Total</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-3">
              Désinsectisation et dératisation
              <br />
              <span className="text-sm text-gray-500">
                Cafards et souris - 2 villas + 1 bureau
              </span>
            </td>
            <td className="border p-3 text-center">3</td>
            <td className="border p-3 text-center">
              25 000 FCFA
            </td>
            <td className="border p-3 text-center font-semibold">
              75 000 FCFA
            </td>
          </tr>
        </tbody>
      </table>

      {/* Total */}
      <div className="flex justify-end mb-8">
        <div className="w-64">
          <div className="flex justify-between border-b py-2">
            <span>Sous-total</span>
            <span>75 000 FCFA</span>
          </div>

          <div className="flex justify-between py-3 font-bold text-xl">
            <span>Total payé</span>
            <span className="text-green-700">
              75 000 FCFA
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t pt-6 text-center">
        <p className="font-semibold text-green-700">
          Merci pour votre confiance !
        </p>

        <p className="text-sm text-gray-500 mt-2">
          Vermine Secret - Solutions professionnelles de désinfection,
          désinsectisation et dératisation.
        </p>
      </div>
    </div>
  );
};

export default Invoice;