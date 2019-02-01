export const loginContent = {
  french: {
    inputs: [
      {for: 'username', type: 'text', label: 'Nom d\'Utilisateur', placeHolder: 'exp: JpAbouem'},
      {for: 'email', type: 'email', label: 'Email', placeHolder: 'exp: fake@gmail.com'},
      {for: 'password', type: 'password', label: 'Mot de Passe', placeHolder: '*****'},
      {for: 'password_confirm', type: 'password', label: 'Confirmation du Mot de Passe', placeHolder: '*****'},
    ],
    welcome: 'Veuillez-vous enregistrer ci-dessous.',
    processChangeTag: 'Vous etes un nouvel utilisateur?',
    processChange: 'Enregistrez-vous ici!',
  }
};

export const signUpContent = {
  french: {
    inputs: [
      {for: 'username', type: 'text', label: 'Nom d\'Utilisateur', placeHolder: 'exp: JJacques'},
      {for: 'email', type: 'email', label: 'Email', placeHolder: 'exp: your@email.com'},
      {for: 'password', type: 'password', label: 'Mot de Passe', placeHolder: '*****'},
      {for: 'password_confirm', type: 'password', label: 'Confirmation du Mot de Passe', placeHolder: '*****'},
      {for: 'dob', type: 'date', label: 'Date de Naissance'},
      {for: 'location', type: '', label: 'Ville', placeHolder: 'exp: Yaounde'},
      {for: 'country', type: '', label: 'Pays', placeHolder: 'exp: Cameroun'},
    ],
    welcome: 'Veuillez-vous enregistrer ci-dessous. Ces information ne seront partagees avec aucun service tiers.',
    processChangeTag: 'Vous etes deja un utilisateur?',
    processChange: 'Connectez-vous ici!',
  }
};

/* =============== HELPERS =============== */
const countries = {//https://www.w3schools.com/howto/howto_js_autocomplete.asp
    french: [],
    english: ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"],
}
