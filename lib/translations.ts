export type Language = 'ro' | 'en'

export const translations = {
  ro: {
    // Header
    header: {
      services: 'Servicii',
      trackRepair: 'Urmărește Reparația',
      testimonials: 'Testimoniale',
      contact: 'Contact',
      emergencyRepair: 'Reparație Urgentă',
    },
    
    // Hero
    hero: {
      badge: 'Reparații de urgență disponibile 24/7',
      headline1: 'Laptop Mort?',
      headline2: 'Nu Intra în Panică.',
      headline3: 'Noi Înviem Tech-ul.',
      subheadline: 'Suntem calmul din furtuna ta digitală. Reparații plăci de bază, curățare după lichide vărsate, recuperare date—dacă e stricat, știm cum să-l reparăm.',
      trust1: 'Nu Repari, Nu Plătești',
      trust2: 'Service În Aceeași Zi',
      trust3: 'Garanție 90 Zile',
      emergencyCTA: 'Reparație Urgentă (Aceeași Zi)',
      standardCTA: 'Solicitare Standard',
      callUs: 'Sau sună-ne direct:',
      techTrinity: 'Trinitatea Tech: Răspundem. Reparăm. Tu te relaxezi.',
      supportLabel: 'Suport',
      expertLabel: 'Expert',
      panicLabel: 'Mod Panică',
      devicesSaved: 'Dispozitive Salvate',
      emergencyLine: 'Linie de Urgență',
    },
    
    // Services
    services: {
      title: 'Ce Reparăm',
      subtitle: 'De la plăci de bază la malware. Dacă e stricat, știm cum să-l reparăm.',
      emergency: 'Urgență',
      standard: 'Standard',
      lowPriority: 'Prioritate Scăzută',
      customDiagnostic: 'Nu vezi problema ta? Probabil tot o reparăm.',
      requestCustom: 'Solicită Diagnostic Personalizat',
      getFixed: 'Repară Asta',
      
      motherboard: {
        title: 'Reparații Plăci de Bază',
        subtitle: 'BGA Reballing & Vrăjitorie cu Chipset-uri',
        description: 'Laptop mort? Ecran negru? Intrăm adânc. Rework BGA, înlocuire chipset, reparații circuite de alimentare. Dacă e lipit, putem să-l reparăm. Asta nu e treabă pentru amatori—vorbim de precizie la nivel de microscop aici.',
        features: [
          'BGA reballing & reflow',
          'Înlocuire GPU/CPU',
          'Reparație IC alimentare',
          'Diagnosticare scurtcircuite',
          'Reparații la nivel de componente'
        ],
        time: '2-5 zile',
        price: '300-800 RON'
      },
      
      liquidDamage: {
        title: 'Curățare După Lichide',
        subtitle: 'Cafea pe Tastatură? Te Avem.',
        description: 'Oprește-l. Adu-l. ACUM. Cu cât ajungem mai repede la el, cu atât mai bine. Dezasamblăm complet, curățăm ultrasonic placa de bază, înlocuim componentele corodate și testăm tot. Cafea, bere, apă—nu contează. Frecăm placa de bază ca să nu trebuiască să cumperi unul nou.',
        features: [
          'Dezasamblare & inspecție completă',
          'Curățare ultrasonică plăci',
          'Îndepărtare coroziune',
          'Înlocuire componente',
          'Rezolvare urgentă în 48h'
        ],
        time: '24-48 ore',
        price: '200-600 RON'
      },
      
      screenReplacement: {
        title: 'Înlocuire Ecran',
        subtitle: 'Spart, Clipește sau Mort? Reparat Rapid.',
        description: 'L-ai scăpat? Am văzut mai rău. Fie că e panel spart, defecțiune backlight sau linii misterioase pe ecran, avem majoritatea panourilor comune în stoc și putem procura rapid cele rare. LED, OLED, touch—le rezolvăm pe toate.',
        features: [
          'Panouri LCD/LED/OLED',
          'Digitizere touchscreen',
          'Reparație backlight',
          'Reparații cablu & conectori',
          'Service în aceeași zi disponibil'
        ],
        time: '2-4 ore',
        price: '250-800 RON'
      },
      
      thermalCleaning: {
        title: 'Rezolvare Supraîncălzire',
        subtitle: 'Pastă Termică & Curățare Profundă',
        description: 'Laptop-ul sună ca un avion de vânătoare? Se oprește aiurea? Asta e throttling termic care strigă după ajutor. Îl desfacem complet, spulberăm mizeria, înlocuim pasta termică uscată și aducem sistemul de răcire înapoi la starea de fabrică. CPU-ul tău o să ne mulțumească.',
        features: [
          'Dezasamblare completă & îndepărtare praf',
          'Aplicare pastă termică de calitate',
          'Curățare sau înlocuire ventilatoare',
          'Inspecție heat pipe',
          'Testare stres post-reparație'
        ],
        time: '1-2 ore',
        price: '100-250 RON'
      },
      
      dataRecovery: {
        title: 'Recuperare Date',
        subtitle: 'HDD Mort? S-ar Putea să-l Mai Salvăm.',
        description: 'Hard disk face click? SSD nedetectat? Formatat din greșeală? Folosim unelte profesionale pentru a recupera poze, documente și fișiere de pe drive-uri defecte sau moarte. Nu promitem miracole, dar am reușit niște reînvieri care ne-au șocat chiar și pe noi.',
        features: [
          'Recuperare HDD & SSD',
          'Restaurare fișiere șterse',
          'Reparație partiții corupte',
          'Reparație fizică drive',
          'Suport drive-uri criptate'
        ],
        time: '1-7 zile',
        price: '200-1000 RON'
      },
      
      softwareInstall: {
        title: 'Instalare OS & Software',
        subtitle: 'Windows, Linux, Drivere—Făcut Corect.',
        description: 'Lent ca melcul? Plin de viruși? Blue screen pe repeat? Îl ștergem complet și reinstalăm totul curat. Windows 10/11, distro-uri Linux, vânătoare de drivere—ne asigurăm că totul merge. Include optimizare și setup software esențial.',
        features: [
          'Instalare OS curată (Windows/Linux)',
          'Instalare & update drivere',
          'Optimizare software',
          'Backup & transfer date',
          'Setup antivirus'
        ],
        time: '2-4 ore',
        price: '80-200 RON'
      }
    },
    
    // Repair Tracker
    tracker: {
      title: 'Urmărește-ți Reparația',
      subtitle: 'Introdu numărul tichetului pentru a vedea statusul actual al reparației',
      cardTitle: 'Căutare Status Reparație',
      cardDescription: 'Numărul tichetului se găsește pe chitanța de reparație (ex: TI-260131-001)',
      placeholder: 'TI-260131-001',
      buttonTrack: 'Verifică Statusul',
      searching: 'Se caută...',
      currentStatus: 'Status Curent',
      emergency: 'URGENȚĂ',
      standard: 'STANDARD',
      progress: 'Progres Complet',
      deviceInfo: 'Informații Dispozitiv',
      device: 'Dispozitiv',
      serviceType: 'Tip Serviciu',
      timeline: 'Cronologie',
      received: 'Primit',
      estimatedCompletion: 'Finalizare Estimată',
      readyNotice: 'Dispozitivul tău este gata de ridicat!',
      readyDetails: 'Te rugăm să aduci numărul tichetului și actul de identitate. Suntem deschis Luni-Vineri, 10:00-18:00.',
      estimatedCost: 'Cost Estimat:',
      finalCostNote: '* Costul final poate varia în funcție de piese și manoperă',
      cantFind: 'Nu găsești tichetul?',
      contactUs: 'Contactează-ne la',
      errorNotFound: 'Tichet negăsit. Verifică numărul tichetului.',
      errorGeneral: 'A apărut o eroare. Te rugăm să încerci din nou.',
      enterTicket: 'Te rugăm să introduci un număr de tichet',
      
      statuses: {
        received: 'Primit',
        diagnosing: 'În Diagnostic',
        parts_ordered: 'Piese Comandate',
        repairing: 'În Reparare',
        testing: 'În Testare',
        fixed: 'Reparat',
        ready_for_pickup: 'Gata de Ridicat',
        completed: 'Finalizat',
        cancelled: 'Anulat'
      }
    },
    
    // Trust Badges
    trust: {
      title: 'De Ce Să Ne Ai Încredere?',
      subtitle: 'Pentru că am fost în locul tău. Și știm ce contează.',
      noFixNoPay: {
        title: 'Nu Repari, Nu Plătești',
        description: 'Dacă nu-l putem repara, nu plătești. Simplu.'
      },
      sameDay: {
        title: 'Urgențe În Aceeași Zi',
        description: 'Reparații critice finalizate în ore, nu zile.'
      },
      certified: {
        title: 'Tehnicieni Certificați',
        description: 'Ani de experiență în reparații la nivel de placă de bază.'
      },
      warranty: {
        title: 'Garanție 90 Zile',
        description: 'Toate reparațiile sunt garantate de calitatea noastră.'
      },
      repairsCompleted: 'Reparații Completate',
      customerRating: 'Rating Clienți',
      inBusiness: 'În Business'
    },
    
    // Testimonials
    testimonials: {
      title: 'Nu Ne Lua Pe Cuvânt',
      subtitle: 'Clienți reali. Salvări reale. Rezultate reale.'
    },
    
    // Contact Form
    contact: {
      title: 'Începe Reparația',
      subtitle: 'Completează formularul de mai jos și te contactăm în 30 de minute.',
      cardTitle: 'Solicită o Reparație',
      cardDescription: 'Spune-ne despre dispozitivul tău și care e problema. Cu cât mai multe detalii, cu atât mai bine.',
      fullName: 'Nume Complet',
      fullNamePlaceholder: 'Ion Popescu',
      email: 'Email',
      emailPlaceholder: 'ion@example.com',
      phone: 'Telefon',
      phonePlaceholder: '0712345678',
      deviceBrand: 'Marca Dispozitiv',
      deviceBrandPlaceholder: 'ex: Dell, HP, Lenovo',
      model: 'Model',
      modelPlaceholder: 'ex: XPS 15, ThinkPad X1',
      whatsWrong: 'Care e Problema?',
      selectService: 'Selectează un serviciu...',
      additionalDetails: 'Detalii Adiționale (Opțional)',
      detailsPlaceholder: 'Descrie ce s-a întâmplat, mesaje de eroare, etc...',
      isEmergency: 'Asta e o urgență (Service în aceeași zi necesar)',
      submitButton: 'Trimite Solicitarea',
      submitting: 'Se trimite...',
      successMessage: 'Solicitare trimisă! Te contactăm în 30 de minute.',
      errorMessage: 'Ceva n-a mers bine. Te rugăm să ne suni direct la 0123 456 789.',
      
      services: {
        motherboard_repair: 'Reparație Placă de Bază (Mort/Nu Pornește)',
        liquid_damage: 'Deteriorare cu Lichide (Cafea/Apă Vărsată)',
        screen_replacement: 'Înlocuire Ecran (Spart/Stricat)',
        thermal_cleaning: 'Probleme Supraîncălzire',
        software_install: 'Probleme Software/OS',
        data_recovery: 'Recuperare Date',
        diagnostic: 'Nu Sunt Sigur - Am Nevoie de Diagnostic'
      },
      
      validation: {
        nameMin: 'Numele trebuie să aibă minim 2 caractere',
        emailInvalid: 'Adresă de email invalidă',
        phoneMin: 'Numărul de telefon trebuie să aibă minim 10 cifre',
        deviceBrandMin: 'Te rugăm să introduci marca dispozitivului',
        deviceModelMin: 'Te rugăm să introduci modelul dispozitivului'
      }
    },
    
    // Footer
    footer: {
      tagline: 'Suntem calmul din furtuna ta digitală. Servicii profesionale de reparații laptop în București.',
      quickLinks: 'Link-uri Rapide',
      serviceAreas: 'Zone Deservite',
      contact: 'Contact',
      copyright: '© 2026 Tech Intervention. Toate drepturile rezervate.',
      privacy: 'Politica de Confidențialitate',
      terms: 'Termeni și Condiții'
    }
  },
  
  en: {
    // Header
    header: {
      services: 'Services',
      trackRepair: 'Track Repair',
      testimonials: 'Testimonials',
      contact: 'Contact',
      emergencyRepair: 'Emergency Repair',
    },
    
    // Hero
    hero: {
      badge: 'Emergency Repairs Available 24/7',
      headline1: 'Laptop Dead?',
      headline2: 'Don\'t Panic.',
      headline3: 'We Resurrect Tech.',
      subheadline: 'We are the calm in your digital storm. Motherboard repair, liquid damage cleanup, data recovery—if it\'s broken, we know how to fix it.',
      trust1: 'No Fix, No Pay',
      trust2: 'Same-Day Service',
      trust3: '90-Day Warranty',
      emergencyCTA: 'Emergency Repair (Same Day)',
      standardCTA: 'Standard Inquiry',
      callUs: 'Or call us directly:',
      techTrinity: 'The Tech Trinity: We answer. We fix. You relax.',
      supportLabel: 'Support',
      expertLabel: 'Expert',
      panicLabel: 'Panic Mode',
      devicesSaved: 'Devices Saved',
      emergencyLine: 'Emergency Line',
    },
    
    // Services
    services: {
      title: 'What We Fix',
      subtitle: 'From motherboards to malware. If it\'s broken, we know how to fix it.',
      emergency: 'Emergency',
      standard: 'Standard',
      lowPriority: 'Low Priority',
      customDiagnostic: 'Don\'t see your problem? We probably still fix it.',
      requestCustom: 'Request Custom Diagnostic',
      getFixed: 'Get This Fixed',
      
      motherboard: {
        title: 'Motherboard Repair',
        subtitle: 'BGA Reballing & Chipset Wizardry',
        description: 'Dead laptop? Black screen? We dive deep. BGA rework, chipset replacement, power circuit fixes. If it\'s soldered, we can fix it. This isn\'t a job for amateurs—we\'re talking microscope-level precision here.',
        features: [
          'BGA reballing & reflow',
          'GPU/CPU replacement',
          'Power IC repair',
          'Short circuit diagnostics',
          'Component-level repair'
        ],
        time: '2-5 days',
        price: '300-800 RON'
      },
      
      liquidDamage: {
        title: 'Liquid Damage Cleanup',
        subtitle: 'Coffee on Keyboard? We Got You.',
        description: 'Turn it off. Bring it in. NOW. The faster we get to it, the better your chances. We disassemble completely, ultrasonic clean the motherboard, replace corroded components, and test everything. Coffee, beer, water—doesn\'t matter. We scrub the motherboard so you don\'t have to buy a new one.',
        features: [
          'Full disassembly & inspection',
          'Ultrasonic motherboard cleaning',
          'Corrosion removal',
          'Component replacement',
          '48-hour emergency turnaround'
        ],
        time: '24-48 hours',
        price: '200-600 RON'
      },
      
      screenReplacement: {
        title: 'Screen Replacement',
        subtitle: 'Cracked, Flickering, or Dead? Fixed Fast.',
        description: 'Dropped it? We\'ve seen worse. Whether it\'s a shattered panel, backlight failure, or mysterious lines across the screen, we stock most common panels and can get rare ones fast. LED, OLED, touch—we handle them all.',
        features: [
          'LCD/LED/OLED panels',
          'Touch screen digitizers',
          'Backlight repair',
          'Cable & connector fixes',
          'Same-day service available'
        ],
        time: '2-4 hours',
        price: '250-800 RON'
      },
      
      thermalCleaning: {
        title: 'Overheating Fix',
        subtitle: 'Thermal Paste & Deep Cleaning',
        description: 'Laptop sounds like a jet engine? Shutting down randomly? That\'s thermal throttling screaming for help. We tear it down, blast out the dust bunnies, replace the crusty thermal paste, and get your cooling system back to factory-fresh. Your CPU will thank us.',
        features: [
          'Complete disassembly & dust removal',
          'Quality thermal paste application',
          'Fan cleaning or replacement',
          'Heat pipe inspection',
          'Stress testing post-repair'
        ],
        time: '1-2 hours',
        price: '100-250 RON'
      },
      
      dataRecovery: {
        title: 'Data Recovery',
        subtitle: 'Dead Drive? We Might Still Save It.',
        description: 'Hard drive clicking? SSD not detected? Accidentally formatted? We use professional-grade tools to recover photos, documents, and files from failing or dead drives. Can\'t promise miracles, but we\'ve pulled off some resurrections that shocked even us.',
        features: [
          'HDD & SSD recovery',
          'Deleted file restoration',
          'Corrupt partition repair',
          'Physical drive repair',
          'Encrypted drive support'
        ],
        time: '1-7 days',
        price: '200-1000 RON'
      },
      
      softwareInstall: {
        title: 'OS & Software Install',
        subtitle: 'Windows, Linux, Drivers—Done Right.',
        description: 'Slow as molasses? Virus-ridden? Blue screen of death on repeat? We\'ll nuke it from orbit and reinstall everything clean. Windows 10/11, Linux distros, driver hunting—we make sure everything just works. Includes optimization and essential software setup.',
        features: [
          'Clean OS installation (Windows/Linux)',
          'Driver installation & updates',
          'Software optimization',
          'Data backup & transfer',
          'Anti-virus setup'
        ],
        time: '2-4 hours',
        price: '80-200 RON'
      }
    },
    
    // Repair Tracker
    tracker: {
      title: 'Track Your Repair',
      subtitle: 'Enter your ticket number to see the current status of your repair',
      cardTitle: 'Repair Status Lookup',
      cardDescription: 'Your ticket number can be found on your repair receipt (e.g., TI-260131-001)',
      placeholder: 'TI-260131-001',
      buttonTrack: 'Track Status',
      searching: 'Searching...',
      currentStatus: 'Current Status',
      emergency: 'EMERGENCY',
      standard: 'STANDARD',
      progress: 'Complete',
      deviceInfo: 'Device Information',
      device: 'Device',
      serviceType: 'Service Type',
      timeline: 'Timeline',
      received: 'Received',
      estimatedCompletion: 'Estimated Completion',
      readyNotice: 'Your device is ready for pickup!',
      readyDetails: 'Please bring your ticket number and ID. We\'re open Monday-Friday, 10:00-18:00.',
      estimatedCost: 'Estimated Cost:',
      finalCostNote: '* Final cost may vary based on parts and labor',
      cantFind: 'Can\'t find your ticket?',
      contactUs: 'Contact us at',
      errorNotFound: 'Ticket not found. Please check your ticket number.',
      errorGeneral: 'An error occurred. Please try again.',
      enterTicket: 'Please enter a ticket number',
      
      statuses: {
        received: 'Received',
        diagnosing: 'Diagnosing',
        parts_ordered: 'Parts Ordered',
        repairing: 'Repairing',
        testing: 'Testing',
        fixed: 'Fixed',
        ready_for_pickup: 'Ready for Pickup',
        completed: 'Completed',
        cancelled: 'Cancelled'
      }
    },
    
    // Trust Badges
    trust: {
      title: 'Why Trust Us With Your Tech?',
      subtitle: 'Because we\'ve been in your shoes. And we know what matters.',
      noFixNoPay: {
        title: 'No Fix, No Pay',
        description: 'If we can\'t fix it, you don\'t pay. Simple as that.'
      },
      sameDay: {
        title: 'Same-Day Emergency',
        description: 'Critical repairs done in hours, not days.'
      },
      certified: {
        title: 'Certified Technicians',
        description: 'Years of motherboard-level repair experience.'
      },
      warranty: {
        title: '90-Day Warranty',
        description: 'All repairs backed by our quality guarantee.'
      },
      repairsCompleted: 'Repairs Completed',
      customerRating: 'Customer Rating',
      inBusiness: 'In Business'
    },
    
    // Testimonials
    testimonials: {
      title: 'Don\'t Take Our Word For It',
      subtitle: 'Real customers. Real rescues. Real results.'
    },
    
    // Contact Form
    contact: {
      title: 'Get Your Repair Started',
      subtitle: 'Fill out the form below and we\'ll get back to you within 30 minutes.',
      cardTitle: 'Request a Repair',
      cardDescription: 'Tell us about your device and what\'s wrong. The more details, the better.',
      fullName: 'Full Name',
      fullNamePlaceholder: 'John Doe',
      email: 'Email',
      emailPlaceholder: 'john@example.com',
      phone: 'Phone',
      phonePlaceholder: '0712345678',
      deviceBrand: 'Device Brand',
      deviceBrandPlaceholder: 'e.g., Dell, HP, Lenovo',
      model: 'Model',
      modelPlaceholder: 'e.g., XPS 15, ThinkPad X1',
      whatsWrong: 'What\'s Wrong?',
      selectService: 'Select a service...',
      additionalDetails: 'Additional Details (Optional)',
      detailsPlaceholder: 'Describe what happened, any error messages, etc...',
      isEmergency: 'This is an emergency (Same-day service needed)',
      submitButton: 'Submit Repair Request',
      submitting: 'Submitting...',
      successMessage: 'Request submitted! We\'ll contact you within 30 minutes.',
      errorMessage: 'Something went wrong. Please call us directly at 0123 456 789.',
      
      services: {
        motherboard_repair: 'Motherboard Repair (Dead/Won\'t Boot)',
        liquid_damage: 'Liquid Damage (Spilled Coffee/Water)',
        screen_replacement: 'Screen Replacement (Cracked/Broken)',
        thermal_cleaning: 'Overheating Issues',
        software_install: 'Software/OS Issues',
        data_recovery: 'Data Recovery',
        diagnostic: 'Not Sure - Need Diagnostic'
      },
      
      validation: {
        nameMin: 'Name must be at least 2 characters',
        emailInvalid: 'Invalid email address',
        phoneMin: 'Phone number must be at least 10 digits',
        deviceBrandMin: 'Please enter device brand',
        deviceModelMin: 'Please enter device model'
      }
    },
    
    // Footer
    footer: {
      tagline: 'We are the calm in your digital storm. Professional laptop repair services in Bucharest.',
      quickLinks: 'Quick Links',
      serviceAreas: 'Service Areas',
      contact: 'Contact',
      copyright: '© 2026 Tech Intervention. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  }
}

export function getTranslation(lang: Language) {
  return translations[lang]
}
