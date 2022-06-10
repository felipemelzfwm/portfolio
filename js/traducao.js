
    // At this point, we have Globalize loaded. But, before we can use it, we
    // need to feed it on the appropriate I18n content (Unicode CLDR). In order
    // to do so, we use `Globalize.load()` and pass the content. On this demo,
    // we made the things a little easier for you: we've embedded static JSON
    // into the demo. So, you don't need to actually fetch it elsewhere.
    Globalize.load({
      "main": {
        "en": {
          "identity": {
            "version": {
              "_cldrVersion": "25",
              "_number": "$Revision: 91 $"
            },
            "generation": {
              "_date": "$Date: 2014-03-13 22:27:12 -0500 (Thu, 13 Mar 2014) $"
            },
            "language": "en"
          },
          "dates": {
            "calendars": {
              "gregorian": {
                "days": {
                  "format": {
                    "wide": {
                      "sun": "Sunday",
                      "mon": "Monday",
                      "tue": "Tuesday",
                      "wed": "Wednesday",
                      "thu": "Thursday",
                      "fri": "Friday",
                      "sat": "Saturday"
                    }
                  }
                },
                "months": {
                  "format": {
                    "abbreviated": {
                      "1": "Jan",
                      "2": "Feb",
                      "3": "Mar",
                      "4": "Apr",
                      "5": "May",
                      "6": "Jun",
                      "7": "Jul",
                      "8": "Aug",
                      "9": "Sep",
                      "10": "Oct",
                      "11": "Nov",
                      "12": "Dec"
                    },
                    "wide": {
                      "1": "January",
                      "2": "February",
                      "3": "March",
                      "4": "April",
                      "5": "May",
                      "6": "June",
                      "7": "July",
                      "8": "August",
                      "9": "September",
                      "10": "October",
                      "11": "November",
                      "12": "December"
                    }
                  }
                },
                "dayPeriods": {
                  "format": {
                    "wide": {
                      "am": "AM",
                      "am-alt-variant": "am",
                      "noon": "noon",
                      "pm": "PM",
                      "pm-alt-variant": "pm"
                    }
                  }
                },
                "dateFormats": {
                  "full": "EEEE, MMMM d, y",
                  "medium": "MMM d, y"
                },
                "timeFormats": {
                  "full": "h:mm:ss a zzzz",
                  "medium": "h:mm:ss a",
                },
                "dateTimeFormats": {
                  "full": "{1} 'at' {0}",
                  "medium": "{1}, {0}"
                }
              }
            },
            "fields": {
              "second": {
                "displayName": "Second",
                "relative-type-0": "now",
                "relativeTime-type-future": {
                  "relativeTimePattern-count-one": "in {0} second",
                  "relativeTimePattern-count-other": "in {0} seconds"
                },
                "relativeTime-type-past": {
                  "relativeTimePattern-count-one": "{0} second ago",
                  "relativeTimePattern-count-other": "{0} seconds ago"
                }
              }
            },
            "timeZoneNames": {
              "metazone": {
                "Brasilia": {
                  "long": {
                    "generic": "Brasilia Time",
                    "standard": "Brasilia Standard Time",
                    "daylight": "Brasilia Summer Time"
                  }
                }
              }
            }
          },
          "numbers": {
            "currencies": {
              "USD": {
                "symbol": "$"
              }
            },
            "defaultNumberingSystem": "latn",
            "symbols-numberSystem-latn": {
              "decimal": ".",
              "exponential": "E",
              "group": ",",
              "infinity": "∞",
              "minusSign": "-",
              "nan": "NaN",
              "percentSign": "%",
              "perMille": "‰",
              "plusSign": "+",
              "timeSeparator": ":"
            },
            "decimalFormats-numberSystem-latn": {
              "standard": "#,##0.###",
              "short": {
                "decimalFormat": {
                  "1000-count-one": "0K",
                  "1000-count-other": "0K",
                  "10000-count-one": "00K",
                  "10000-count-other": "00K",
                  "100000-count-one": "000K",
                  "100000-count-other": "000K",
                  "1000000-count-one": "0M",
                  "1000000-count-other": "0M",
                  "10000000-count-one": "00M",
                  "10000000-count-other": "00M",
                  "100000000-count-one": "000M",
                  "100000000-count-other": "000M",
                  "1000000000-count-one": "0B",
                  "1000000000-count-other": "0B",
                  "10000000000-count-one": "00B",
                  "10000000000-count-other": "00B",
                  "100000000000-count-one": "000B",
                  "100000000000-count-other": "000B",
                  "1000000000000-count-one": "0T",
                  "1000000000000-count-other": "0T",
                  "10000000000000-count-one": "00T",
                  "10000000000000-count-other": "00T",
                  "100000000000000-count-one": "000T",
                  "100000000000000-count-other": "000T"
                }
              }
            },
            "currencyFormats-numberSystem-latn": {
              "currencySpacing": {
                "beforeCurrency": {
                  "currencyMatch": "[:^S:]",
                  "surroundingMatch": "[:digit:]",
                  "insertBetween": " "
                },
                "afterCurrency": {
                  "currencyMatch": "[:^S:]",
                  "surroundingMatch": "[:digit:]",
                  "insertBetween": " "
                }
              },
              "standard": "¤#,##0.00"
            }
          },
          "units": {
            "short": {
              "per": {
                "compoundUnitPattern": "{0}/{1}"
              },
              "speed-mile-per-hour": {
                "displayName": "miles/hour",
                "unitPattern-count-one": "{0} mph",
                "unitPattern-count-other": "{0} mph"
              }
            }
          }
        },
        "pt": {
          "identity": {
            "version": {
              "_cldrVersion": "25",
              "_number": "$Revision: 91 $"
            },
            "generation": {
              "_date": "$Date: 2014-03-13 22:27:12 -0500 (Thu, 13 Mar 2014) $"
            },
            "language": "pt"
          },
          "dates": {
            "calendars": {
              "gregorian": {
                "days": {
                  "format": {
                    "wide": {
                      "sun": "Sunday",
                      "mon": "Monday",
                      "tue": "Tuesday",
                      "wed": "Wednesday",
                      "thu": "Thursday",
                      "fri": "Friday",
                      "sat": "Saturday"
                    }
                  }
                },
                "months": {
                  "format": {
                    "abbreviated": {
                      "1": "Jan",
                      "2": "Feb",
                      "3": "Mar",
                      "4": "Apr",
                      "5": "May",
                      "6": "Jun",
                      "7": "Jul",
                      "8": "Aug",
                      "9": "Sep",
                      "10": "Oct",
                      "11": "Nov",
                      "12": "Dec"
                    },
                    "wide": {
                      "1": "January",
                      "2": "February",
                      "3": "March",
                      "4": "April",
                      "5": "May",
                      "6": "June",
                      "7": "July",
                      "8": "August",
                      "9": "September",
                      "10": "October",
                      "11": "November",
                      "12": "December"
                    }
                  }
                },
                "dayPeriods": {
                  "format": {
                    "wide": {
                      "am": "AM",
                      "am-alt-variant": "am",
                      "noon": "noon",
                      "pm": "PM",
                      "pm-alt-variant": "pm"
                    }
                  }
                },
                "dateFormats": {
                  "full": "EEEE, MMMM d, y",
                  "medium": "MMM d, y"
                },
                "timeFormats": {
                  "full": "h:mm:ss a zzzz",
                  "medium": "h:mm:ss a",
                },
                "dateTimeFormats": {
                  "full": "{1} 'at' {0}",
                  "medium": "{1}, {0}"
                }
              }
            },
            "fields": {
              "second": {
                "displayName": "Second",
                "relative-type-0": "now",
                "relativeTime-type-future": {
                  "relativeTimePattern-count-one": "in {0} second",
                  "relativeTimePattern-count-other": "in {0} seconds"
                },
                "relativeTime-type-past": {
                  "relativeTimePattern-count-one": "{0} second ago",
                  "relativeTimePattern-count-other": "{0} seconds ago"
                }
              }
            },
            "timeZoneNames": {
              "metazone": {
                "Brasilia": {
                  "long": {
                    "generic": "Brasilia Time",
                    "standard": "Brasilia Standard Time",
                    "daylight": "Brasilia Summer Time"
                  }
                }
              }
            }
          },
          "numbers": {
            "currencies": {
              "USD": {
                "symbol": "$"
              }
            },
            "defaultNumberingSystem": "latn",
            "symbols-numberSystem-latn": {
              "decimal": ".",
              "exponential": "E",
              "group": ",",
              "infinity": "∞",
              "minusSign": "-",
              "nan": "NaN",
              "percentSign": "%",
              "perMille": "‰",
              "plusSign": "+",
              "timeSeparator": ":"
            },
            "decimalFormats-numberSystem-latn": {
              "standard": "#,##0.###",
              "short": {
                "decimalFormat": {
                  "1000-count-one": "0K",
                  "1000-count-other": "0K",
                  "10000-count-one": "00K",
                  "10000-count-other": "00K",
                  "100000-count-one": "000K",
                  "100000-count-other": "000K",
                  "1000000-count-one": "0M",
                  "1000000-count-other": "0M",
                  "10000000-count-one": "00M",
                  "10000000-count-other": "00M",
                  "100000000-count-one": "000M",
                  "100000000-count-other": "000M",
                  "1000000000-count-one": "0B",
                  "1000000000-count-other": "0B",
                  "10000000000-count-one": "00B",
                  "10000000000-count-other": "00B",
                  "100000000000-count-one": "000B",
                  "100000000000-count-other": "000B",
                  "1000000000000-count-one": "0T",
                  "1000000000000-count-other": "0T",
                  "10000000000000-count-one": "00T",
                  "10000000000000-count-other": "00T",
                  "100000000000000-count-one": "000T",
                  "100000000000000-count-other": "000T"
                }
              }
            },
            "currencyFormats-numberSystem-latn": {
              "currencySpacing": {
                "beforeCurrency": {
                  "currencyMatch": "[:^S:]",
                  "surroundingMatch": "[:digit:]",
                  "insertBetween": " "
                },
                "afterCurrency": {
                  "currencyMatch": "[:^S:]",
                  "surroundingMatch": "[:digit:]",
                  "insertBetween": " "
                }
              },
              "standard": "¤#,##0.00"
            }
          },
          "units": {
            "short": {
              "per": {
                "compoundUnitPattern": "{0}/{1}"
              },
              "speed-mile-per-hour": {
                "displayName": "miles/hour",
                "unitPattern-count-one": "{0} mph",
                "unitPattern-count-other": "{0} mph"
              }
            }
          }
        }
      },
      "supplemental": {
        "version": {
          "_cldrVersion": "25",
          "_number": "$Revision: 91 $"
        },
        "currencyData": {
          "fractions": {
            "DEFAULT": {
              "_rounding": "0",
              "_digits": "2"
            }
          }
        },
        "likelySubtags": {
          "en": "en-Latn-US",
          "pt": "en-Latn-US"
        },
        "metaZones": {
          "metazoneInfo": {
            "timezone": {
              "America": {
                "Sao_Paulo": [
                  {
                    "usesMetazone": {
                      "_mzone": "Brasilia"
                    }
                  }
                ]
              }
            }
          }
        },
        "plurals-type-cardinal": {
          "en": {
            "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
            "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
          },
          "pt": {
            "pluralRule-count-one": "i = 1 and v = 0 @integer 1",
            "pluralRule-count-other": " @integer 0, 2~16, 100, 1000, 10000, 100000, 1000000, … @decimal 0.0~1.5, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, …"
          }
        }
      }
    });
    
    
    Globalize.loadMessages({
      "en": {
        "inicio": "Beggining",
        "resumo": "Briefing",
        "projrecentes": "Latest Projects",
        "softskills": "Soft Skills",
        "apresentacao": "Invitation",
        "contato": "Contact",
        "hobbies": "Hobbies",
        "cvbdemais": "Enjoying life is way good",
        "viajarrenova": "Take a trip",
        "amigos": "Friends",
        "scnjornada": "They are company in our jorney",
        "controlengineer": "Control and Automation Engineer",
        "tecsustentab": "Delighted about technology and sustainability",
        "jafuium": "I was an",
        "jafui": "I was",
        "projeletrico":  "electrical designer,",
        "tbmdediquei": "I was also a",
        "voluntario": " volunteer.",
        "pesquisador": " researcher,",
        "tbmfui": "as well as",
        "vendedor": " sales person.",
        "hojesou": "Now I am a",
        "devsoftw": " Software developer",
        "sempreserei": "and I will always be ",
        "humano": "human.",
        "mechamelinkedin": "Reach me on Linkedin: ",
        "projetos": "Latest",
        "recentes": "Projects",
        "dupsat": "Unveil some of the technologies ",
        "uapeqt": "used in projects I have worked recently.",
        "abrirdetalhes": "Open project",
        "linhabalanco": "Scheduling tool",
        "frontenddev": "Front-End developer",
	"fullstackdev": "Full Stack Developer",
        "productowner": "Product Owner",
        
        
        
        "descricaolinhabalanco": "Project design and development. Product: SPA Web application for Construction industry's scheduling and forecasting tool.",
        "descricaosunset": "Project design, development and unit and manual tests. Product: Universal form management system.",
        "descricaolotofacil": "Project design, development and unit tests. Product: SPA Web application for lotterie's statistical analysis and bet checking.",
        "descricaosmartforest": "Features development, architectural improvements, unit and manual tests. Product: Forest trees management system integrated with IoT (Internet of Things) devices.",
        "descricaoalientronics": "Project design, development, bed tests and field tests. Product: Tire management system integrated with IoT (Internet of Things) devices.",
        
        
        
        "descricaosoftskills": "Personal values are subjectivities that permeate our being.",
        "descricaotao": "Simplicity is weightless, sophisticated and it conforts.",
        "descricaohumildade": "A humble person is not a poor person, but is the one who is an ethernal apprentice.",
	"descricaotrabalhoacertivo": "It is not about hard working, it is about working the right way.",
	"descricaoserhumano": "The human being is capable to create, to observe and to improve.",
	"descricaomelhoria": "I look to improve myself on the things I already know about, and to get to know what is new to me.",
	
	
	"me": "",
	"convide": "Invite",
	"parao": " me to ",
	"seuprojeto": "your project",
	"descricaomeconvide": "Every moment is an opportunity to be taken.",
	"mensagem1meconvide": "Life cycles have these steps:",
	"mensagem2.1meconvide": "Beggining",
	"mensagem2.2meconvide": " - time to have expectations, curiosity, criativity and danger zones defined",
	"mensagem3.1meconvide": "Middle",
	"mensagem3.2meconvide": " - it may take a long time. Therefore it has to be breaked down into small steps, allowing its ups and downs to be manageable",
	"mensagem4.1meconvide": "Final",
	"mensagem4.2meconvide": " - time to have attention to details, checking and comparison amongst what has been planned and what have actually been realized. To learn. To make new plans for the next cycle. We do expect that people and environment have their energy restored and renewed, looking forward to a continuous improvement considering this new moment with new expectations and needs by the people that have now became a little more experienced and have evolved.",
	"mensagem5.1meconvide": "Come with me ",
	"mensagem5.2meconvide": "to the next cycle. I will be glad to colaborate in a good work environment that also values professional grow.",
	
	
	
	// PAGE 1.HTML
	'highlights': 'Highlights',
	'frontend': 'Front-End',
	'vanilladescription': "Data manipulation, user interface reactivity, user input data validation, plot's reactivity to user inputs.",
	'biblioteca': 'Library',
	'momentdescpr': "Date's type comparison, formatting and transformation.",
	'opdedata': 'Date operations',
	'opdedatadescrp': "Time interval calculation, comparison, transformation and formatting.",
	'plotlydescrp': "Plot's configuration setup, data load and updates.",
	'coresaut': 'Automatic Color',
	'coresautdescrp': "Color's automatic randomization used on plot's.",
	'reativo': 'Reactive',
	'reativodescrp': "Form's and plot's data validation, updates and render considering performance excellence.",
	'recursao': 'Recursion',
	'qualidade': 'Quality',
	'recursaodescrp': "Calendar's datetime calculations considering performance excellence.",
	'depcircular': 'Circular dependency',
	'depcirculardescrp': "Circular's dependency detection amongts all form inputs, firing alerts and progress lockages on specific business rules.",
	'es6descrp': 'Arrow functions, findIndex and Promises.',
	'prototipo': 'Prototype',
	'prototipodescrp': "Native javascript function's prototype proprieties and methods added.",
	'mapsortfilterdescrp': "Data manipulation taking advantage of these ES5's well performant native methods.",
	'orienteventos':'Event Driven',
	'arquitetura': 'Architecture',
	'orienteventosdescrp': 'Built event driven architecture in order to have a good user interface reactivity performance and software scalability.',
	
	
	// PAGE 2.HTML
	'vuedescrp': 'Web components development considering their lifecycle. Use of ES5 javascript modules.',
	'vuexdescrp': 'Client side application state management. CRUD methods flowing through Mutations. Data modeling using pure javascript.',
	'veevalidatedescrp': 'User inputs data validation, reactive validation and warning messages, progress lockages on invalid inputs.',
	'localizacao': 'Localization',
	'i18nextdescrp': "Automatic text translation according to user's language preference.",
	'clidescrp': "Vue's project management, files and folders management, git versioning and so on.",
	'npmdescrp': "Librarie's management.",
	'gitlabdescrp': "Versioning management. Use both on shell's script and via web's dashboard.",
	'css3descrp': 'Templates customization.',
	
	
	
	
	// PAGE 3.HTML
	'es6descrp-2': 'Use of Rest Parameter and other new available features.',
	'tabelahtml': 'Html table',
	'tabelahtmldescrp': 'Html table parsing in javascript.',
	'numeroacertos': 'Bet checking',
	'numeroacertosdescrp': 'Feature in which the user inputs the betting numbers and it looks up the whole betting historic draws searching for winning results.',
	'funcionalidade': 'Feature',
	'manipdados': 'Data manipulation',
	'ciencdados': 'Data Science',
	'manipdadosdescrp': 'Input reading and manipulation such as ordering, searching and so on.',
	'analisedados': 'Data analisys',
	'analisedadosdescrp': 'Histogram plotting.',
	'proceduraldescrp': 'Sequential steps taken in one thread.',
	
	
	// PAGE 4
	'apidescrp': 'Mobile app API.',
	'dashboarddescrp': 'Back-End and Front-End Dashboard development.',
	'cadastro': 'CRUD',
	'cadastrodescrp': 'A wide variety of CRUD operations.',
	'unittests': 'Unit tests',
	'integrationtests': 'Integration tests',
	'versioning': 'Versioning',
	'metodologia': 'Metodology',
	'desenvolvedor': 'Developer',
	'azuredescrp': 'Use of a variety of tools as a developer user.',
	'webperformancedescrp': "Use of web browser's profile/performance built-in tools.",
	'injecaodepdescrp': 'Dependency injection',
	'internacionalizacao': 'Internacionalization',
	'localizacaodescrp': 'Use of libraries and native javascript tools to make translation of texts, dates, units and so on.',
	
	
	// PAGE 5
	'sensorpneu': 'Tire Sensor',
	'sensorpneuhardwaredescrp': 'Eletronic sensor prototype design and building.',
	'sensorpneufirmwaredescrp': 'Firmware prototype design and development. Bed tests.',
	'modulocentral': 'Data Hub',
	'modulocentralharddescrp': 'Electronic PCB design of a communication and data storing board. Components: RF, microcontroller, power overload safety system, memory, bluetooth, serial ports.',
	'modulocentralfirmdescrp': 'Serial communication in both ways, RF communication, bluetooth data transfer and memory management.',
	'alientronicsapidescrp': "Design, bed and field tests. Tire sensor's data visualization and upload to the cloud.",
	'aliendashdescrp': 'Project design, unit, manual, integration and Beta tests. Vehicle fleet management, tire management system and danger warning messages.',
	'alertas': 'Warning system',
	'alertasdescrp': "Tire's malfunctioning detection and warning system.",
	'administracao': 'System management',
	'administracaodescrp': 'Customer, user, vehicle, tire, sensor and custom assets management. User permissions configuration. Historical data visualization. Tire maintenance management.',
	'mobileapp': 'Mobile application',
	'mobileappdescrp': 'User authentication. Bluetooth data transfer. API integration. Tire data visualizarion.'
	
	
	
	
        
      },
      "pt": {
        "inicio": "Início",
        "resumo": "Resumo",
        "projrecentes": "Projetos Recentes",
        "softskills": "Soft Skills",
        "apresentacao": "Apresentação",
        "contato": "Contato",
	"hobbies": "Hobbies",
        "cvbdemais": "Curtir a vida é bom demais",
        "viajarrenova": "Viajar renova",
        "amigos": "Amigos",
        "scnjornada": "São companheiros da nossa jornada",
        "controlengineer": "Engenheiro de Controle e Automação",
        "tecsustentab": "Apaixonado por tecnologia e sustentabilidade.",
        "jafuium": "Já fui",
        "jafui": "Já fui",
        "projeletrico":  "projetista elétrico,",
        "tbmdediquei": "também me dediquei",
        "voluntario": " como voluntário.",
        "pesquisador": " pesquisador,",
        "tbmfui": "também fui ",
        "vendedor": " vendedor.",
        "hojesou": "Hoje sou",
        "devsoftw": " Desenvolvedor de software",
        "sempreserei": "e sempre serei ",
        "humano": "humano.",
        "mechamelinkedin": "Me chame no Linkedin: ",
        "projetos": "Projetos",
        "recentes": "Recentes",
        "dupsat": "Descubra um pouco sobre as tecnologias ",
        "uapeqt": "usadas em alguns dos projetos em que trabalhei.",
        "abrirdetalhes": "Abrir detalhes",
        "linhabalanco": "Linha de balanço",
        "frontenddev": "Desenvolvedor Front-End",
        "fullstackdev": "Desenvolvedor Full Stack",
        "productowner": "Product Owner",
        
        
        
        
        
        "descricaolinhabalanco": "Projeto e desenvolvimento de software SPA Web para cálculo de linha de balanço de projetos de construção civil.",
        "descricaosunset": "Projeto, desenvolvimento e testes para sistema Web de cadastro e validação de formulários.",
        "descricaolotofacil": "Projeto, desenvolvimento e testes de sistema SPA Web para análise de histórico de sorteios da Lotofácil e funcionalidades para verificação de nº de acertos.",
        "descricaosmartforest": "Desenvolvimento de novas funcionalidades, de melhorias de arquitetura e de testes de software no sistema em operação comercial de gestão e controle de inventário florestal.",
        "descricaoalientronics": "Projeto, desenvolvimento, testes de bancada e de campo para um sistema de gestão de pneus IoT (Internet das coisas) para frotas de veículos pesados.",
        
        
        "descricaosoftskills": "Valores pessoais são subjetividades que permeiam o nosso ser.",
        "descricaotao": "A Simplicidade é leve, sofisticada e conforta.",
        "descricaohumildade": "Humildade não é ser pobre, mas sim se sentir na condição de aprendiz.",
	"descricaotrabalhoacertivo": "Não é sobre trabalhar muito, é sobre trabalhar certo.",
	"descricaoserhumano": "O ser humano é capaz de criar, observar e melhorar.",
	"descricaomelhoria": "Procuro melhorar naquilo que já sei e conhecer aquilo que é novo.",
	
	
	
	"me": "Me ",
	"convide": "Convide",
	"parao": " para o ",
	"seuprojeto": "seu projeto",
	"descricaomeconvide": "Cada momento é uma oportunidade para aproveitarmos.",
	"mensagem1meconvide": "Durante os ciclos da vida nós temos: ",
	"mensagem2.1meconvide": "Início",
	"mensagem2.2meconvide": " - período de expectativa, curiosidade, criatividade e definição de limites",
	"mensagem3.1meconvide": "Meio",
	"mensagem3.2meconvide": " - que pode ser demorado, portando devendo-se dividí-lo em partes menores para não nos perdermos em seus pontos altos e baixos",
	"mensagem4.1meconvide": "Final",
	"mensagem4.2meconvide": " - momento de atenção aos detalhes, checagem e comparação dos fatos/resultados com o que foi planejado/idealizado, aprendizagem, e de início também para planos de um próximo ciclo. Desejamos que seja de continuidade para as pessoas envolvidas, de continuidade de um ambiente, todos que foram impactados e de alguma forma alterados, tendo novas necessidades para o novo momento.",
	"mensagem5.1meconvide": "Venha comigo ",
	"mensagem5.2meconvide": "para este novo ciclo. Estarei contente em participar de um bom ambiente de trabalho e crescimento profissional.",
	
	
	
	// PAGE 1.HTML
	'highlights': 'Destaques',
	'frontend': 'Front-End',
	'vanilladescription': 'Utilização de funções para transformação de dados, computar entradas de usuário e atualizar a interface como gráficos e elementos de interação do usuário.',
	'biblioteca': 'Biblioteca',
	'momentdescpr': 'Uso para formatação, transformação e comparação de datas.',
	'opdedata': 'Operações de data',
	'opdedatadescrp': 'Cálculos de intervalo, comparações, transformações e formatações de objetos tipo data.',
	'plotlydescrp': 'Inicialização e atualização dos elementos gráficos para visualização e interação do usuário.',
	'coresaut': 'Cores automáticas',
	'coresautdescrp': 'Padrões de escolha automática de cores para os elementos dos gráficos.',
	'reativo': 'Reativo',
	'reativodescrp': 'Validação, atualização e renderização eficiente dos elementos gráficos a cada interação do usuário nas entradas de dados.',
	'recursao': 'Recursão',
	'qualidade': 'Qualidade',
	'recursaodescrp': 'Utilização de recursão para cálculo de calendário, com otimização de performance.',
	'depcircular': 'Dependência circular',
	'depcirculardescrp': 'Detecção de dependência circular entre as diversas entradas de usuário, com alerta e bloqueio de progresso em flag positiva.',
	'es6descrp': 'Utilização de recursos como Arrow functions, findIndex e Promises.',
	'prototipo': 'Protótipo',
	'prototipodescrp': 'Adição de funcionalidades e propriedades à funções nativas do Javascript para uso no escopo global.',
	'mapsortfilterdescrp': 'Utilização destas funcionalidades nativas do ES5 para manipulação de dados.',
	'orienteventos':'Orientado à evento',
	'arquitetura': 'Arquitetura',
	'orienteventosdescrp': 'Arquitetura focada na reatividade às interações de usuário.',
	
	
	// PAGE 2.HTML
	'vuedescrp': 'Uso de componentização, módulos, e cuidados com o ciclo de vida.',
	'vuexdescrp': 'Utilização para armazenamento do estados dos objetos com operações CRUD através de Mutations. Uso de recurso similar ao Typescript para modelos de objetos.',
	'veevalidatedescrp': 'Uso para validação, mensagens corretivas e bloqueio de progresso como reações à entradas de usuário.',
	'localizacao': 'Localização',
	'i18nextdescrp': 'Uso desta biblioteca para tradução automática dos elementos de interface com o usuário.',
	'clidescrp': 'Uso para gestão de projetos Vue, operações em arquivos e diretórios, editor de texto e controle de versionamento git, entre outros.',
	'npmdescrp': 'Para uso e atualização de pacotes.',
	'gitlabdescrp': 'Controle de versionamento via shell script e via dashboard web.',
	'css3descrp': 'Uso para customização de templates.',
	
	
	// PAGE 3.HTML
	'es6descrp-2': 'Utilização de recursos como Rest Parameter.',
	'tabelahtml': 'Tabela Html.',
	'tabelahtmldescrp': 'Leitura de dados de uma tabela html.',
	'numeroacertos': 'Número de acertos',
	'numeroacertosdescrp': 'Recurso em que o usuário insere os números apostados e o software aponta na série histórica os sorteios em que esta combinação de jogo seria premiada.',
	'funcionalidade': 'Funcionalidade',
	'manipdados': 'Manipulação de dados',
	'ciencdados': 'Ciência de dados',
	'manipdadosdescrp': 'Leitura, alteração, ordenamento e outras manipulações em conjunto de dados provindo de histórico de todos os sorteios.',
	'analisedados': 'Análise de dados',
	'analisedadosdescrp': 'Criação de histograma de números sorteados em todo o histórico.',
	'proceduraldescrp': 'Programa possui uma única thread em que efetua operações em sequencia sobre os dados de histórico de sorteio.',
	
	
	// PAGE 4
	'apidescrp': 'API de integração com aplicativo.',
	'dashboarddescrp': 'Desenvolvimento tanto do Back-End quanto do Front-End para apresentação dos dados florestais.',
	'cadastro': 'Cadastro',
	'cadastrodescrp': 'Cadastro CRUD para diversos tipos de objetos e componentes presentes no sistema.',
	'unittests': 'Testes Unitários',
	'integrationtests': 'Testes de Integração',
	'versioning': 'Versionamento',
	'metodologia': 'Metodologia',
	'desenvolvedor': 'Desenvolvedor',
	'azuredescrp': 'Utilização de diversas ferramentas.',
	'webperformancedescrp': 'Utilização das ferramentas built-in de browsers para otimização de código.',
	'injecaodepdescrp': 'Injeção de dependência',
	'internacionalizacao': 'Internacionalização',
	'localizacaodescrp': 'Utilização de bibliotecas e recursos nativos para tradução automática dos elementos de interface com o usuário.',
	
	
	// PAGE 5
	'sensorpneu': 'Sensor do Pneu',
	'sensorpneuhardwaredescrp': 'Projeto e prototipagem de sensor eletrônico para medição de pressão, temperatura, acelerações em dois eixos e nível de bateria, juntamente com envólucro de borracha para adesão ao pneu.',
	'sensorpneufirmwaredescrp': 'Projeto de firmware para aquisição de dados dos sensores pelo microcontrolador. Testes de bancada.',
	'modulocentral': 'Módulo central',
	'modulocentralharddescrp': 'Projeto e testes de bancada de PCB de integração de componentes de RF, microcontrolador, proteção elétrica, memória e comunicações bluetooth e seriais.',
	'modulocentralfirmdescrp': 'Projeto e testes de bancada de comunicações seriais e de RF, leitura e escrita nos módulos bluetooth e de memória.',
	'alientronicsapidescrp': 'Projeto, testes de bancada e de campo. Funcionalidades para upload de dados dos sensores de pneu.',
	'aliendashdescrp': 'Projeto, testes unitários, manuais, de integração e Beta. Funcionalidades para visualização da frota de veículos, seus respectivos pneus e alertas de manutenção.',
	'alertas': 'Alertas',
	'alertasdescrp': 'Detecção e disparo automático de alertas para usuários informando problemas nos pneus.',
	'administracao': 'Administração',
	'administracaodescrp': 'Cadastro de clientes, usuários, veículos, pneus, sensores e outros componentes. Gestão de regras de acesso por perfis de usuário. Acesso à histórico de dados de veículos e pneus. Gestão de troca de pneus dos veículos.',
	'mobileapp': 'Aplicativo',
	'mobileappdescrp': 'Autenticação de usuário. Comunicação <i>bluetooth</i> com o módulo central. Envio de dados para API. Visualização de dados dos sensores dos pneus.'
      }
    });
    
    
    /*
    "resumo"></a></li>
                        <li><a href="#featured" class="smoth" translate="projrecentes"></a></li>
                        <li><a href="#projects" class="smoth" translate="softskills"><i></i></a></li>
                        <li><a href="#video" class="smoth" translate="apresentacao"></a></li>
                        <!--li><a href="#blog">Blog Entries</a></li!-->
                        <li><a href="#contact" class="smoth" translate="contato
    */
    
    /*
    Globalize.loadTimeZone({
      "zoneData": {
        "America": {
          "Sao_Paulo": {
            "abbrs": [
              "LMT", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03",
              "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03",
              "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03",
              "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03",
              "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03",
              "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03",
              "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03",
              "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03",
              "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03",
              "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03",
              "-02", "-03", "-02", "-03", "-02", "-03", "-02", "-03", "-02"
            ],
            "untils": [
              -1767214412000, -1206957600000, -1191362400000, -1175374800000, -1159826400000,
              -633819600000, -622069200000, -602283600000, -591832800000, -570747600000,
              -560210400000, -539125200000, -531352800000, -195426000000, -184197600000,
              -155163600000, -150069600000, -128898000000, -121125600000, -99954000000, -89589600000,
              -68418000000, -57967200000, 499748400000, 511236000000, 530593200000, 540266400000,
              562129200000, 571197600000, 592974000000, 602042400000, 624423600000, 634701600000,
              656478000000, 666756000000, 687927600000, 697600800000, 719982000000, 728445600000,
              750826800000, 761709600000, 782276400000, 793159200000, 813726000000, 824004000000,
              844570800000, 856058400000, 876106800000, 888717600000, 908074800000, 919562400000,
              938919600000, 951616800000, 970974000000, 982461600000, 1003028400000, 1013911200000,
              1036292400000, 1045360800000, 1066532400000, 1076810400000, 1099364400000,
              1108864800000, 1129431600000, 1140314400000, 1162695600000, 1172368800000,
              1192330800000, 1203213600000, 1224385200000, 1234663200000, 1255834800000,
              1266717600000, 1287284400000, 1298167200000, 1318734000000, 1330221600000,
              1350788400000, 1361066400000, 1382238000000, 1392516000000, 1413687600000,
              1424570400000, 1445137200000, 1456020000000, 1476586800000, 1487469600000,
              1508036400000, 1518919200000, 1540090800000, 1550368800000, 1571540400000,
              1581818400000, 1602990000000, 1613872800000, 1634439600000, 1645322400000,
              1665889200000, 1677376800000, 1697338800000, 1708221600000, 1729393200000,
              1739671200000, 1760842800000, 1771725600000, 1792292400000, 1803175200000,
              1823742000000, 1834624800000, 1855191600000, 1866074400000, 1887246000000,
              1897524000000, 1918695600000, 1928973600000, 1950145200000, 1960423200000,
              1981594800000, 1992477600000, 2013044400000, 2024532000000, 2044494000000,
              2055376800000, 2076548400000, 2086826400000, 2107998000000, 2118880800000,
              2139447600000, null
            ],
            "offsets": [
              186.4667, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180,
              120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120,
              180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180,
              120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120,
              180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180,
              120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120,
              180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120, 180,
              120, 180, 120, 180, 120, 180, 120, 180, 120, 180, 120
            ],
            "isdsts": [
              0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
              0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
              1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
              0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
              1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1
            ]
          }
        }
      }
    });

*/
//    var en, like, number;

    // Instantiate "en".
//    en = Globalize( "en" );
/*
    // Use Globalize to format dates.
    document.getElementById( "date" ).textContent = en.formatDate( new Date(), {
      datetime: "medium"
    });

    // Use Globalize to format dates on specific time zone.
    document.getElementById( "zonedDate" ).textContent = en.formatDate( new Date(), {
      datetime: "full",
      timeZone: "America/Sao_Paulo"
    });

    // Use Globalize to format dates to parts.
    document.getElementById( "dateToParts" ).innerHTML = en.formatDateToParts( new Date(), {
      datetime: "medium"
    }).map(function( part ) {
      switch(part.type) {
        case "month": return "<strong>" + part.value + "<\/strong>";
        default: return part.value;
      }
    }).reduce(function( memo, value ) {
      return memo + value;
    });

    // Use Globalize to format numbers.
    number = en.numberFormatter();
    document.getElementById( "number" ).textContent = number( 12345.6789 );
    document.getElementById( "number-compact" ).textContent = en.formatNumber( 12345.6789, {
      compact: "short",
      minimumSignificantDigits: 1,
      maximumSignificantDigits: 3
    });

    // Use Globalize to format currencies.
    document.getElementById( "currency" ).textContent = en.formatCurrency( 69900, "USD" );

    // Use Globalize to get the plural form of a numeric value.
    document.getElementById( "plural-number" ).textContent = number( 12345.6789 );
    document.getElementById( "plural-form" ).textContent = en.plural( 12345.6789 );
*/
    // Use Globalize to format a message with plural inflection.
//    like = en.messageFormatter( "like" );
//    document.getElementById( "tr-inicio" ).textContent = like( 0 );
    /*document.getElementById( "message-1" ).textContent = like( 1 );
    document.getElementById( "message-2" ).textContent = like( 2 );
    document.getElementById( "message-3" ).textContent = like( 3 );

    // Use Globalize to format a relative time.
    document.getElementById( "relative-time" ).textContent = en.formatRelativeTime( -35, "second" );

    // Use Globalize to format a unit.
    document.getElementById( "unit" ).textContent = en.formatUnit( 60, "mile/hour", {
      form: "short"
    });

    document.getElementById( "requirements" ).style.display = "none";
    document.getElementById( "demo" ).style.display = "block";
    */
    
	/*let pt = Globalize( "pt" );
	likept = pt.messageFormatter( "like" );
	document.getElementById( "tr-inicio" ).textContent = likept( 0 );
	
	
	Globalize.locale('en');
	let msg = Globalize.formatMessage('like','0');
	console.log('msg: ', msg);
*/

	let language;
	let storage = window.localStorage;	
	
    	window.onload = () => {
    		language = storage.getItem('language');
    		console.log('a linguagem é: ', language);
    		if (!language) {
    			language = 'pt'
	    	}
    		updateLanguageButtons(language);
	    	
    	}
    	updateLanguageButtons = (value) => {
    		storage.setItem('language', value);
    		console.log('language updated to: ', value)
	    	btn1 = document.getElementById('language-toggle')    	
	    	btn2 = document.getElementById('language-toggle-2')
	    	btn1.checked = btn2.checked = value == 'en'
    		Globalize.locale(value);
	    	translateText()
    	}

    	btnEventListener = (e) => {
    		language = e.target.checked ? 'en' : 'pt';
    		updateLanguageButtons(language)
    	}
    	
    	btn1 = document.getElementById('language-toggle')    	
    	btn2 = document.getElementById('language-toggle-2')
    	btn1.addEventListener('change', btnEventListener)
    	btn2.addEventListener('change', btnEventListener)
    	

    	translateText = () => {
		htmlArray = $("[translate]")
		for (var i = 0; i < htmlArray.length; i++) {
			let key = htmlArray[i].getAttribute('translate')
			htmlArray[i].textContent = Globalize.formatMessage(key,'0')
		}
    	    
    	}

