// Equivalant à Import.js, on crée une classe qu'on pourra importer et utiliser
// Ici le but est d'obtenir un entier (INT) que l'on pourra utiliser pour calculer si une annonce est récente ou non.
// Pour info la var today retourne une valeure de ce style : 20210901

const MyDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today = yyyy + mm + dd;

    return (
        today
    );
}

export default MyDate;