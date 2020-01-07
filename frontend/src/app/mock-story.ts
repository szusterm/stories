import {BlockType, IStory} from '../../../shared/story-types';

const story: IStory = {
  _id: '365753',
  authorId: '123',
  title: 'My first story-reader',

  startTarget: {
    type: BlockType.TEXT,
    targetId: '01'
  },

  blocks: {
    texts: [
      {
        _id: '01',
        content: 'Budzisz się w środku nocy, straszne chce ci się pić więc idziesz do kuchni po szklankę wody. ' +
          'Kiedy przechodzisz przez salon by wrócić do sypialni słyszysz rozbijane okno na pierwszym piętrze.',
        target: {
          type: BlockType.CHOICE,
          targetId: '11'
        }
      },

      {
        _id: '02',
        content: 'Postanawiasz to zignorować i wmawiasz sobie że to tylko twoja wyobraźnia. ' +
          'Kiedy kładziesz się do łóżka czujesz że jest w nim coś jeszcze.',
        target: {
          type: BlockType.CHOICE,
          targetId: '12'
        }
      },

      {
        _id: '03',
        content: 'Natychmiast zmieniasz kierunek i kierujesz się do schodów. ' +
          'Na pierwszym piętrze rzeczywiście jest rozbite okno, spoglądasz przez nie, za oknem pada, ' +
          'postanawiasz wrócić do sypialni i jutro wezwać jakąś ekipę. ' +
          'Odwracasz się od okna i gołą stopą wyczuwasz mokrą plamę na podłodze, spoglądasz w dół i ' +
          'zauważasz że takich plam jest więcej i przypominają... ślady.',
        target: {
          type: BlockType.CHOICE,
          targetId: '13'
        }
      },

      {
        _id: '04',
        content: 'Szybkim ruchem odkrywasz kołdrę a z pod niej wyskakuję kobieta o białych oczach, ' +
          'ubrana w czarną suknię z nożem w ręku. Wskakuję na ciebie i łapie za gardło, ' +
          'ściska tak mocno że prawie mdlejesz, ale nagle cię puszcza. Czujesz ostry ból w klatce piersiowej, ' +
          'spoglądasz w dół, zauważasz nóż wystający z twej piersi. Zaczyna ogarniać cię mrok.'
      },

      {
        _id: '05',
        content: 'Wmawiasz sobie ponownie że to twoja wyobraźnia i idziesz spać. ' +
          'Budzisz się o 3.00, nie możesz się ruszyć, jedyne co widzisz to zegar ścienny i drzwi od twojej sypialni, ' +
          'drzwi powoli się otwierają ale nikt nie wchodzi. Nagle kołdra zaczyna się wypuklać, ' +
          'wypuklenie idzie cały czas w strone twojej twarzy, ' +
          'kołdra zsuwa się i zauważasz jedynie dużo krwi i nóż wbity w twoją pierś. Ogarnia cię ciemność.'
      },

      {
        _id: '06',
        content: 'Szybkim krokiem idziesz do salonu, ' +
          'bierzesz leżący na stoliku telefon i nerwowo wystukujesz numer na policje. ' +
          'Po kilku minutach przyjeżdża policja, tłumaczysz co się stało i funkcjonariusze zaczynają przeszukiwać dom. ' +
          'Po dobrej godzinie słychać krzyk kobiety i z twojej sypialni wychodzi policjant z zakutą w kajdanki ' +
          'kobietą w czarnej sukni. Funkcjonariusz mówi że jest to od dawna poszukiwana morderczyni, ' +
          'dziękują ci za współprace i odjeżdżają. Dzisiaj już nie zaśniesz. '
      },

      {
        _id: '07',
        content: 'Zaczynasz iść wzdłuż śladów, schodzisz do salonu, ślady prowadzą do... piwnicy.',
        target: {
          type: BlockType.CHOICE,
          targetId: '17'
        }
      },

      {
        _id: '08',
        content: 'Otwierasz drzwi do piwnicy, zapalasz światło ale nie działa, pewnie żarówka się przepaliła.',
        target: {
          type: BlockType.CHOICE,
          targetId: '18'
        }
      },

      {
        _id: '09',
        content: 'Myślisz że lepiej dmuchać na zimne i idziesz do kuchni po nóż, wracasz, ' +
          'otwierasz drzwi do piwnicy, zapalasz światło, nie działa, pewnie żarówka się spaliła. (OPCJA 9)',
        target: {
          type: BlockType.CHOICE,
          targetId: '19'
        }
      },

      {
        _id: '010',
        content: 'Zaczynasz schodzić po schodach kurczowo trzymając się poręczy próbując cokolwiek zobaczyć, ' +
          'niestety, potykasz się o coś i spadasz ze schodów skręcająć sobie przy okazji kark. Ogarnia cię ciemność.'
      },

      {
        _id: '011',
        content: 'Zapalasz latarkę w telefonie i schodzisz w gęsty mrok piwnicy, w ciszy słyszysz oddychanie, ' +
          'przełykasz ślinę i idziesz dalej, zauważasz uchylone wielkie metalowe drzwi.',
        target: {
          type: BlockType.CHOICE,
          targetId: '111'
        }
      },

      {
        _id: '012',
        content: 'Sprawnie prześlizgujesz się przez szparę w drzwiach i zauważasz plamę światła, ' +
          'w tej plamie klęczy jakaś kobieta w czarnej sukni przed pentagramem, na szczęście jest odwrócona tyłem.',
        target: {
          type: BlockType.CHOICE,
          targetId: '112'
        }
      },

      {
        _id: '014',
        content: 'Chwytasz pewniej nóż i powoli zbliżasz się do klęczącej kobiety. ' +
          'Ona wstała jakby wyczuła twą obecność, odwróciła się w twoją stronę i widząc nóż w twojej ręce zaczęła ' +
          'biec w twoją stronę z przerażającym krzykiem, a ty bez zastanowienia rzuciłeś nóż w jej stronę. ' +
          'Nóż trafił ją prosto w głowę. Kobieta padła bez życia w kałuże ' +
          'własnej krwi która już zdążyła się uformować.\n' +
          'Padłeś na kolana, ręce ci się trzęsą.',
      },

      {
        _id: '015',
        content: 'Zacząłeś podchodzić cicho do kobiety, kiedy byłeś blisko na metr ona gwałtownie wstała, ' +
          'obróciła się, spojrzała ci w oczy i wyciągając rękę powiedziała że zakon piekielnego kręgu ' +
          'obserwował cię już od dawna i stwierdzili że masz predyspozycje do zostania jego członkiem, ' +
          'potem dodała że jeśli się zgodzisz to otrzymasz wiedze i bogactwo o jakim ci się nie śniło.',
        target: {
          type: BlockType.CHOICE,
          targetId: '115'
        }
      },

      {
        _id: '016',
        content: 'Zgodziłeś się i podałeś kobiecie rękę, ale na jej ręce coś był, coś po czym straciłeś przytomność. ' +
          'Obudziłeś się na jakimś głazie do rytuałów, dookoła ciebie stały postacię w czarnych szatach, ' +
          'jedyne co dało się usłyszeć to słowa modlitwy w języku którego nie rozumiałeś, ' +
          'pocisz się, zauważasz brak ubrań na sobie. ' +
          'Nagle modlitwa się skończyła a ty poczułeś ostry ból na całym ciele. ' +
          'Dwadzieścia minut potem wszystko się skończyło, wyczerpany leżałeś na tym głazie gdy ' +
          'jakiś gruby męski głos powiedział "Witaj w zakonie piekielnego kręgu Amadeuszu".'
      },

      {
        _id: '017',
        content: 'Odmówiłeś, kobieta opuściła rękę i powiedziała że skoro nie jesteś członkiem ale ' +
          'wiesz o zakonie to trzeba cię wyeliminować.\nWtem jakieś męskie silne dłonie unieruchomiły cię, ' +
          'kobieta podeszła do ciebie wolno wyciągając nóż i poderżnęła ci gardło. Leżałeś na podłodze ' +
          'dławiąc się własną krwią dopóki nie nastała ciemność.'
      },
    ],

    choices: [
      {
        _id: '11',
        choices: [
          {
            _id: '7',
            name: 'Wracasz do sypialni i próbujesz ponownie zasnąć.',
            target: {
              type: BlockType.TEXT,
              targetId: '02'
            }
          },

          {
            _id: '7',
            name: 'Idziesz to sprawdzić.',
            target: {
              type: BlockType.TEXT,
              targetId: '03'
            }
          },
        ]
      },

      {
        _id: '12',
        choices: [
          {
            _id: '7',
            name: 'Odkrywasz kołdrę.',
            target: {
              type: BlockType.TEXT,
              targetId: '04'
            }
          },

          {
            _id: '7',
            name: 'Ignorujesz to.',
            target: {
              type: BlockType.TEXT,
              targetId: '05'
            }
          },

          {
            _id: '7',
            name: 'Powoli wychodzisz z łóżka i dzwonisz na policję.',
            target: {
              type: BlockType.TEXT,
              targetId: '06'
            }
          }
        ]
      },

      {
        _id: '13',
        choices: [
          {
            _id: '7',
            name: 'Dzwonisz na policje.',
            target: {
              type: BlockType.TEXT,
              targetId: '06'
            }
          },

          {
            _id: '7',
            name: 'Sprawdzasz dokąd prowadzą ślady.',
            target: {
              type: BlockType.TEXT,
              targetId: '07'
            }
          },
        ]
      },

      {
        _id: '17',
        choices: [
          {
            _id: '7',
            name: 'Schodzisz do piwnicy.',
            target: {
              type: BlockType.TEXT,
              targetId: '08'
            }
          },

          {
            _id: '7',
            name: 'Dzwonisz po policje.',
            target: {
              type: BlockType.TEXT,
              targetId: '06'
            }
          },

          {
            _id: '7',
            name: 'Postanawiasz najpierw się uzbroić.',
            target: {
              type: BlockType.TEXT,
              targetId: '09'
            }
          }
        ]
      },

      {
        _id: '18',
        choices: [
          {
            _id: '7',
            name: 'Schodzisz po ciemku.',
            target: {
              type: BlockType.TEXT,
              targetId: '010'
            }
          },

          {
            _id: '7',
            name: 'Dzwonisz po policje.',
            target: {
              type: BlockType.TEXT,
              targetId: '06'
            }
          },

          {
            _id: '7',
            name: 'Używasz latarki z telefonu.',
            target: {
              type: BlockType.TEXT,
              targetId: '011'
            }
          }
        ]
      },

      {
        _id: '19',
        choices: [
          {
            _id: '7',
            name: 'Schodzisz po ciemku.',
            target: {
              type: BlockType.TEXT,
              targetId: '010'
            }
          },

          {
            _id: '7',
            name: 'Używasz latarki z telefonu.',
            target: {
              type: BlockType.TEXT,
              targetId: '011'
            }
          }
        ]
      },

      {
        _id: '111',
        choices: [
          {
            _id: '7',
            name: 'Wchodzisz.',
            target: {
              type: BlockType.TEXT,
              targetId: '012'
            }
          },

          {
            _id: '7',
            name: 'Wracasz.',
            target: {
              type: BlockType.TEXT,
              targetId: '013'
            }
          },
        ]
      },

      {
        _id: '112',
        choices: [
          {
            _id: '7',
            name: 'Atakujesz (tylko jeśli wybrałeś opcje 9)',
            target: {
              type: BlockType.TEXT,
              targetId: '014'
            }
          },

          {
            _id: '7',
            name: 'Podchodzisz cicho.',
            target: {
              type: BlockType.TEXT,
              targetId: '015'
            }
          },

          {
            _id: '7',
            name: 'Postanawiasz wrócić... ale co to? Drzwi są zamknięte.',
            target: {
              type: BlockType.TEXT,
              targetId: '012'
            }
          }
        ]
      },

      {
        _id: '115',
        choices: [
          {
            _id: '7',
            name: 'Zgódź się',
            target: {
              type: BlockType.TEXT,
              targetId: '016'
            }
          },

          {
            _id: '7',
            name: 'Odmów',
            target: {
              type: BlockType.TEXT,
              targetId: '017'
            }
          }
        ]
      }
    ]
  }
};

export default story;
