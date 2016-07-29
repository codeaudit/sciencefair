var requireDir = require('require-dir')

const DEVMODE = !!(process.env['SCIENCEFAIR_DEVMODE'])
if (DEVMODE) {
  require('debug-menu').install()
}

const choo = require('choo')
const app = choo()

app.model({
  state: {
    results: [
      {
        "identifier": [
          {
            "doi": "10.1234/56789"
          }
        ],
        "title": "Fluffier cat breeds have more powerful majick.",
        "abstract": "Kitty havana brown mouser but cheetah himalayan jaguar. Siamese havana brown so american bobtail. Maine coon kitten and munchkin tabby jaguar. Siamese cheetah persian so tabby tomcat malkin, norwegian forest. Tabby birman savannah puma. Cornish rex egyptian mau but turkish angora, and bengal for kitty but kitty.",
        "author": "A Kitteh, Me Owww, Puh Rrrr",
        "date": {
          "day": 2,
          "month": 5,
          "year": 2006
        },
        "tags": [
          "cats",
          "fluffiness"
        ]
      },
      {
        "identifier": [
          {
            "doi": "10.1234/23521"
          }
        ],
        "title": "Comparative cuteness of feline coat patterns.",
        "abstract": "Himalayan siberian but leopard. Maine coon egyptian mau so leopard american shorthair, bengal. Munchkin lynx. Ocelot egyptian mau, siamese, ragdoll tabby tabby but devonshire rex. Himalayan. Norwegian forest burmese and tabby siberian but grimalkin ragdoll mouser. Leopard tomcat, but havana brown thai. Sphynx cheetah but malkin. Savannah singapura. Bombay. Savannah devonshire rex or egyptian mau and maine coon bengal yet ragdoll kitty. Jaguar scottish fold kitten himalayan and american shorthair. Lynx bengal cheetah so panther jaguar. Devonshire rex russian blue bengal. Jaguar siberian russian blue so jaguar. Lynx kitty but ocicat but cheetah siamese yet tiger. Burmese egyptian mau. Persian tiger donskoy so tabby for turkish angora.",
        "author": "Fe Line",
        "date": {
          "day": 15,
          "month": 7,
          "year": 2013
        },
        "tags": [
          "cats"
        ]
      },
      {
        "identifier": [
          {
            "doi": "10.1234/kitteh"
          }
        ],
        "title": "Kittehs in world history: an analysis of the subversive influence of cats on their pet politicians. Also a lot more words to test the ellipsis thing.",
        "abstract": "Russian blue siberian yet siamese, bobcat havana brown and american bobtail. Burmese cougar yet devonshire rex. Lynx norwegian forest, munchkin norwegian forest. Scottish fold balinese for maine coon or jaguar. Savannah ragdoll bengal. Turkish angora maine coon. Scottish fold. Cheetah donskoy so bobcat burmese panther cornish rex and manx. Bobcat scottish fold. Cheetah ocicat. Maine coon bombay russian blue lion turkish angora. Thai. Abyssinian . Devonshire rex maine coon puma tomcat or thai panther. Bengal ocicat and norwegian forest. American shorthair. Tabby donskoy tabby and tabby. Malkin american shorthair panther yet persian burmese puma and panther. Bengal puma for balinese yet bobcat donskoy, so lion.",
        "author": "Ben Gal, Anne Gora, Bob Tail",
        "date": {
          "day": 21,
          "month": 2,
          "year": 1997
        },
        "tags": [
          "world history",
          "kittiluminati",
          "cats"
        ]
      }
    ],
    tags: { list: [], showAddField: false },
    datasources: [
      {
        name: 'eLife',
        search: (q) => { console.log(q) }
      }
    ],
    collection: require('./lib/localcollection'),
    detailshown: true,
    currentsearch: { query: '', tags: [] }
  },
  effects: requireDir('./effects'),
  reducers: requireDir('./reducers')
})

app.router('/', (route) => [
  route('/', require('./views/home'))
])

const tree = app.start()
document.body.appendChild(tree)
