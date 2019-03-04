export const profileContent = {
    french: {
        title: 'Votre Profil',
        calendar: 'Calendrier',
        settings: 'Reglages',

        birthdays: {
            header: 'Dates Importantes',
            birthdayTag: 'Anniversaire',
            isturning: 'aura',
            siblings: [
                { name: 'Steve Ab', dob: '01/01/1983', age: '36 ans', },
                { name: 'Steve Ab', dob: '01/01/1983', age: '36 ans', },
                {name: 'Steve Ab', dob: '01/01/1983', age: '36 ans',}
            ],
        },

        events: {
            header: 'Événements à Venir',
            eventTag: 'Information',
            list: [
                { date: 'le 03/02/19', name: 'Paintball sentence', attendees: 'array', },
                { date: 'le 03/02/19', name: 'Paintball sentence', attendees: 'array', },
                {date: 'le 03/02/19', name: 'Paintball sentence', attendees: 'array',}
            ],
        },

        createEvent: {
            inputs: [
                {for: 'event_name', type: 'text', label: 'Nom', placeHolder: 'exp: Vacances à Rio'},
                {for: 'event_date', type: 'date', label: 'Date'},
                { for: 'event_details', type: 'text', label: 'Détails', placeHolder: 'Facultatif'}
              ],
            welcome: 'Créer un ÉVénement',
            eventTag: 'Information', 
            submit: 'Créer!'
        },
    }
  };