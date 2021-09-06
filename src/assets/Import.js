// Création d'une classe Import qui sert à importer les images pour un tag <img src:"" /> par exemple

// On lui donne 2 propriété value et path, on les appelles comme on veut 
const Import = (value, path) => {
    return (
        // On lui demande de nous retourner des valeurs
        // Ex : si Import("monLogo.png", "desktop/")
        // La fonction retourne ./dekstop/monLogo.png
        require('./' + path + value).default
    );
}

export default Import;