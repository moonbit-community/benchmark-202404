import kotlin.math.min

external interface ClassRecord {
    @JsName("class")
    val clazz: Int

    val members: Array<MemberRecord>
}
external interface MemberRecord {
    val id: Int
    val name: String
    val gender: Boolean
    val score: Int
}

val data = js("""
  [
    {
      "class": 0,
      "members": [
        {
          "id": 0,
          "name": "Figueroa",
          "gender": true,
          "score": 28
        },
        {
          "id": 1,
          "name": "Sharpe",
          "gender": false,
          "score": 30
        },
        {
          "id": 2,
          "name": "George",
          "gender": false,
          "score": 9
        },
        {
          "id": 3,
          "name": "Good",
          "gender": true,
          "score": 75
        },
        {
          "id": 4,
          "name": "Douglas",
          "gender": true,
          "score": 57
        },
        {
          "id": 5,
          "name": "Pena",
          "gender": false,
          "score": 83
        },
        {
          "id": 6,
          "name": "Crosby",
          "gender": false,
          "score": 1
        },
        {
          "id": 7,
          "name": "Higgins",
          "gender": false,
          "score": 30
        },
        {
          "id": 8,
          "name": "Potts",
          "gender": true,
          "score": 43
        },
        {
          "id": 9,
          "name": "Pickett",
          "gender": false,
          "score": 77
        },
        {
          "id": 10,
          "name": "Rice",
          "gender": false,
          "score": 30
        },
        {
          "id": 11,
          "name": "Raymond",
          "gender": true,
          "score": 91
        },
        {
          "id": 12,
          "name": "Lang",
          "gender": false,
          "score": 32
        },
        {
          "id": 13,
          "name": "Rogers",
          "gender": false,
          "score": 91
        },
        {
          "id": 14,
          "name": "Hudson",
          "gender": false,
          "score": 71
        },
        {
          "id": 15,
          "name": "Spence",
          "gender": false,
          "score": 87
        },
        {
          "id": 16,
          "name": "Yang",
          "gender": false,
          "score": 13
        },
        {
          "id": 17,
          "name": "Collins",
          "gender": false,
          "score": 43
        },
        {
          "id": 18,
          "name": "Conner",
          "gender": false,
          "score": 66
        },
        {
          "id": 19,
          "name": "Haley",
          "gender": true,
          "score": 94
        },
        {
          "id": 20,
          "name": "Curtis",
          "gender": true,
          "score": 4
        },
        {
          "id": 21,
          "name": "Simon",
          "gender": true,
          "score": 67
        },
        {
          "id": 22,
          "name": "Finley",
          "gender": true,
          "score": 67
        },
        {
          "id": 23,
          "name": "Mcconnell",
          "gender": true,
          "score": 33
        },
        {
          "id": 24,
          "name": "Gay",
          "gender": false,
          "score": 74
        },
        {
          "id": 25,
          "name": "Hodges",
          "gender": true,
          "score": 97
        },
        {
          "id": 26,
          "name": "Reynolds",
          "gender": true,
          "score": 26
        },
        {
          "id": 27,
          "name": "Burton",
          "gender": false,
          "score": 43
        },
        {
          "id": 28,
          "name": "Knapp",
          "gender": false,
          "score": 64
        },
        {
          "id": 29,
          "name": "Burris",
          "gender": true,
          "score": 33
        },
        {
          "id": 30,
          "name": "Moran",
          "gender": false,
          "score": 3
        },
        {
          "id": 31,
          "name": "Norris",
          "gender": true,
          "score": 46
        },
        {
          "id": 32,
          "name": "Santiago",
          "gender": true,
          "score": 27
        },
        {
          "id": 33,
          "name": "Johnson",
          "gender": true,
          "score": 72
        },
        {
          "id": 34,
          "name": "Rivas",
          "gender": false,
          "score": 52
        },
        {
          "id": 35,
          "name": "Nash",
          "gender": true,
          "score": 45
        }
      ]
    },
    {
      "class": 1,
      "members": [
        {
          "id": 0,
          "name": "Blankenship",
          "gender": false,
          "score": 24
        },
        {
          "id": 1,
          "name": "Serrano",
          "gender": true,
          "score": 45
        },
        {
          "id": 2,
          "name": "Powers",
          "gender": false,
          "score": 14
        },
        {
          "id": 3,
          "name": "Logan",
          "gender": false,
          "score": 55
        },
        {
          "id": 4,
          "name": "Romero",
          "gender": false,
          "score": 73
        },
        {
          "id": 5,
          "name": "Adams",
          "gender": false,
          "score": 42
        },
        {
          "id": 6,
          "name": "Giles",
          "gender": false,
          "score": 45
        },
        {
          "id": 7,
          "name": "Scott",
          "gender": false,
          "score": 7
        },
        {
          "id": 8,
          "name": "Evans",
          "gender": false,
          "score": 94
        },
        {
          "id": 9,
          "name": "Cantu",
          "gender": true,
          "score": 35
        },
        {
          "id": 10,
          "name": "Leblanc",
          "gender": false,
          "score": 19
        },
        {
          "id": 11,
          "name": "Hull",
          "gender": true,
          "score": 60
        },
        {
          "id": 12,
          "name": "Boyle",
          "gender": true,
          "score": 55
        },
        {
          "id": 13,
          "name": "Daniels",
          "gender": true,
          "score": 58
        },
        {
          "id": 14,
          "name": "Clarke",
          "gender": false,
          "score": 68
        },
        {
          "id": 15,
          "name": "Klein",
          "gender": false,
          "score": 33
        },
        {
          "id": 16,
          "name": "Lambert",
          "gender": false,
          "score": 87
        },
        {
          "id": 17,
          "name": "Strong",
          "gender": false,
          "score": 58
        },
        {
          "id": 18,
          "name": "Noble",
          "gender": false,
          "score": 73
        },
        {
          "id": 19,
          "name": "Merrill",
          "gender": true,
          "score": 46
        },
        {
          "id": 20,
          "name": "Gallagher",
          "gender": true,
          "score": 45
        },
        {
          "id": 21,
          "name": "Jones",
          "gender": true,
          "score": 14
        },
        {
          "id": 22,
          "name": "Hill",
          "gender": true,
          "score": 4
        },
        {
          "id": 23,
          "name": "Barron",
          "gender": true,
          "score": 32
        },
        {
          "id": 24,
          "name": "Dunn",
          "gender": false,
          "score": 76
        },
        {
          "id": 25,
          "name": "Wolfe",
          "gender": false,
          "score": 98
        },
        {
          "id": 26,
          "name": "Booker",
          "gender": true,
          "score": 3
        },
        {
          "id": 27,
          "name": "Vaughan",
          "gender": true,
          "score": 48
        },
        {
          "id": 28,
          "name": "Snyder",
          "gender": false,
          "score": 74
        },
        {
          "id": 29,
          "name": "Mooney",
          "gender": true,
          "score": 55
        },
        {
          "id": 30,
          "name": "Velasquez",
          "gender": true,
          "score": 0
        },
        {
          "id": 31,
          "name": "Johnston",
          "gender": true,
          "score": 2
        },
        {
          "id": 32,
          "name": "Rowland",
          "gender": false,
          "score": 48
        },
        {
          "id": 33,
          "name": "Lee",
          "gender": false,
          "score": 55
        },
        {
          "id": 34,
          "name": "Mclean",
          "gender": false,
          "score": 26
        },
        {
          "id": 35,
          "name": "Prince",
          "gender": false,
          "score": 6
        },
        {
          "id": 36,
          "name": "Meadows",
          "gender": true,
          "score": 99
        },
        {
          "id": 37,
          "name": "Herman",
          "gender": false,
          "score": 54
        },
        {
          "id": 38,
          "name": "Bender",
          "gender": true,
          "score": 12
        },
        {
          "id": 39,
          "name": "Fletcher",
          "gender": true,
          "score": 83
        },
        {
          "id": 40,
          "name": "Robertson",
          "gender": true,
          "score": 50
        },
        {
          "id": 41,
          "name": "Todd",
          "gender": false,
          "score": 83
        },
        {
          "id": 42,
          "name": "Best",
          "gender": true,
          "score": 67
        }
      ]
    },
    {
      "class": 2,
      "members": [
        {
          "id": 0,
          "name": "Hurst",
          "gender": false,
          "score": 46
        },
        {
          "id": 1,
          "name": "Waters",
          "gender": true,
          "score": 47
        },
        {
          "id": 2,
          "name": "Langley",
          "gender": false,
          "score": 3
        },
        {
          "id": 3,
          "name": "Wyatt",
          "gender": true,
          "score": 82
        },
        {
          "id": 4,
          "name": "Hicks",
          "gender": false,
          "score": 29
        },
        {
          "id": 5,
          "name": "Harrell",
          "gender": true,
          "score": 100
        },
        {
          "id": 6,
          "name": "Patel",
          "gender": true,
          "score": 8
        },
        {
          "id": 7,
          "name": "White",
          "gender": true,
          "score": 9
        },
        {
          "id": 8,
          "name": "Galloway",
          "gender": false,
          "score": 58
        },
        {
          "id": 9,
          "name": "Herrera",
          "gender": false,
          "score": 79
        },
        {
          "id": 10,
          "name": "Thompson",
          "gender": true,
          "score": 64
        },
        {
          "id": 11,
          "name": "Bean",
          "gender": true,
          "score": 15
        },
        {
          "id": 12,
          "name": "Lindsey",
          "gender": false,
          "score": 82
        },
        {
          "id": 13,
          "name": "Phillips",
          "gender": false,
          "score": 9
        },
        {
          "id": 14,
          "name": "Abbott",
          "gender": true,
          "score": 88
        },
        {
          "id": 15,
          "name": "Franklin",
          "gender": false,
          "score": 87
        },
        {
          "id": 16,
          "name": "Calhoun",
          "gender": false,
          "score": 59
        },
        {
          "id": 17,
          "name": "Bennett",
          "gender": false,
          "score": 27
        },
        {
          "id": 18,
          "name": "Cummings",
          "gender": true,
          "score": 19
        },
        {
          "id": 19,
          "name": "Buchanan",
          "gender": false,
          "score": 29
        },
        {
          "id": 20,
          "name": "Sawyer",
          "gender": false,
          "score": 68
        },
        {
          "id": 21,
          "name": "Melendez",
          "gender": true,
          "score": 11
        },
        {
          "id": 22,
          "name": "Hutchinson",
          "gender": false,
          "score": 0
        },
        {
          "id": 23,
          "name": "Reed",
          "gender": false,
          "score": 55
        },
        {
          "id": 24,
          "name": "Thornton",
          "gender": false,
          "score": 51
        },
        {
          "id": 25,
          "name": "Shepard",
          "gender": false,
          "score": 55
        },
        {
          "id": 26,
          "name": "Freeman",
          "gender": false,
          "score": 24
        },
        {
          "id": 27,
          "name": "Stone",
          "gender": true,
          "score": 6
        },
        {
          "id": 28,
          "name": "Durham",
          "gender": true,
          "score": 72
        },
        {
          "id": 29,
          "name": "Mcneil",
          "gender": false,
          "score": 4
        },
        {
          "id": 30,
          "name": "Conley",
          "gender": false,
          "score": 89
        },
        {
          "id": 31,
          "name": "Sparks",
          "gender": false,
          "score": 27
        },
        {
          "id": 32,
          "name": "Hopkins",
          "gender": true,
          "score": 71
        },
        {
          "id": 33,
          "name": "Crane",
          "gender": true,
          "score": 22
        },
        {
          "id": 34,
          "name": "Ferrell",
          "gender": false,
          "score": 59
        },
        {
          "id": 35,
          "name": "Miles",
          "gender": true,
          "score": 1
        },
        {
          "id": 36,
          "name": "Santos",
          "gender": false,
          "score": 30
        },
        {
          "id": 37,
          "name": "Villarreal",
          "gender": false,
          "score": 15
        },
        {
          "id": 38,
          "name": "Perry",
          "gender": false,
          "score": 76
        },
        {
          "id": 39,
          "name": "Gilbert",
          "gender": true,
          "score": 85
        },
        {
          "id": 40,
          "name": "Mccarthy",
          "gender": false,
          "score": 8
        },
        {
          "id": 41,
          "name": "Mcfadden",
          "gender": false,
          "score": 37
        }
      ]
    },
    {
      "class": 3,
      "members": [
        {
          "id": 0,
          "name": "Castaneda",
          "gender": true,
          "score": 36
        },
        {
          "id": 1,
          "name": "Swanson",
          "gender": true,
          "score": 42
        },
        {
          "id": 2,
          "name": "Pate",
          "gender": true,
          "score": 78
        },
        {
          "id": 3,
          "name": "Ford",
          "gender": false,
          "score": 41
        },
        {
          "id": 4,
          "name": "Baird",
          "gender": false,
          "score": 91
        },
        {
          "id": 5,
          "name": "Houston",
          "gender": false,
          "score": 1
        },
        {
          "id": 6,
          "name": "Quinn",
          "gender": false,
          "score": 93
        },
        {
          "id": 7,
          "name": "Gordon",
          "gender": false,
          "score": 35
        },
        {
          "id": 8,
          "name": "Randolph",
          "gender": false,
          "score": 24
        },
        {
          "id": 9,
          "name": "Brock",
          "gender": false,
          "score": 0
        },
        {
          "id": 10,
          "name": "Reese",
          "gender": true,
          "score": 43
        },
        {
          "id": 11,
          "name": "Murray",
          "gender": false,
          "score": 68
        },
        {
          "id": 12,
          "name": "Owens",
          "gender": true,
          "score": 84
        },
        {
          "id": 13,
          "name": "Reeves",
          "gender": false,
          "score": 87
        },
        {
          "id": 14,
          "name": "Wise",
          "gender": false,
          "score": 22
        },
        {
          "id": 15,
          "name": "Huber",
          "gender": true,
          "score": 50
        },
        {
          "id": 16,
          "name": "Tyson",
          "gender": false,
          "score": 82
        },
        {
          "id": 17,
          "name": "Nolan",
          "gender": true,
          "score": 20
        },
        {
          "id": 18,
          "name": "Dyer",
          "gender": false,
          "score": 7
        },
        {
          "id": 19,
          "name": "Knowles",
          "gender": false,
          "score": 90
        },
        {
          "id": 20,
          "name": "Berg",
          "gender": true,
          "score": 63
        },
        {
          "id": 21,
          "name": "Dennis",
          "gender": true,
          "score": 43
        },
        {
          "id": 22,
          "name": "Stuart",
          "gender": true,
          "score": 39
        },
        {
          "id": 23,
          "name": "Ingram",
          "gender": true,
          "score": 9
        },
        {
          "id": 24,
          "name": "Colon",
          "gender": true,
          "score": 52
        },
        {
          "id": 25,
          "name": "Cunningham",
          "gender": true,
          "score": 23
        },
        {
          "id": 26,
          "name": "Rosales",
          "gender": true,
          "score": 50
        },
        {
          "id": 27,
          "name": "Jordan",
          "gender": true,
          "score": 10
        },
        {
          "id": 28,
          "name": "Molina",
          "gender": false,
          "score": 12
        },
        {
          "id": 29,
          "name": "Mercer",
          "gender": true,
          "score": 18
        },
        {
          "id": 30,
          "name": "Leach",
          "gender": false,
          "score": 17
        },
        {
          "id": 31,
          "name": "Howard",
          "gender": false,
          "score": 92
        },
        {
          "id": 32,
          "name": "Bernard",
          "gender": true,
          "score": 38
        },
        {
          "id": 33,
          "name": "Sexton",
          "gender": true,
          "score": 60
        },
        {
          "id": 34,
          "name": "Pruitt",
          "gender": true,
          "score": 72
        },
        {
          "id": 35,
          "name": "Mcclain",
          "gender": false,
          "score": 10
        },
        {
          "id": 36,
          "name": "Petty",
          "gender": true,
          "score": 50
        }
      ]
    },
    {
      "class": 4,
      "members": [
        {
          "id": 0,
          "name": "Gilliam",
          "gender": false,
          "score": 63
        },
        {
          "id": 1,
          "name": "Byrd",
          "gender": true,
          "score": 76
        },
        {
          "id": 2,
          "name": "Guy",
          "gender": false,
          "score": 17
        },
        {
          "id": 3,
          "name": "Mason",
          "gender": false,
          "score": 34
        },
        {
          "id": 4,
          "name": "Poole",
          "gender": false,
          "score": 48
        },
        {
          "id": 5,
          "name": "Small",
          "gender": true,
          "score": 67
        },
        {
          "id": 6,
          "name": "Massey",
          "gender": false,
          "score": 90
        },
        {
          "id": 7,
          "name": "Burns",
          "gender": true,
          "score": 70
        },
        {
          "id": 8,
          "name": "Nixon",
          "gender": true,
          "score": 10
        },
        {
          "id": 9,
          "name": "Frazier",
          "gender": false,
          "score": 67
        },
        {
          "id": 10,
          "name": "Barrera",
          "gender": false,
          "score": 17
        },
        {
          "id": 11,
          "name": "Mejia",
          "gender": true,
          "score": 52
        },
        {
          "id": 12,
          "name": "Peterson",
          "gender": false,
          "score": 11
        },
        {
          "id": 13,
          "name": "Lewis",
          "gender": true,
          "score": 74
        },
        {
          "id": 14,
          "name": "Sweeney",
          "gender": true,
          "score": 58
        },
        {
          "id": 15,
          "name": "Lucas",
          "gender": true,
          "score": 34
        },
        {
          "id": 16,
          "name": "Vance",
          "gender": false,
          "score": 100
        },
        {
          "id": 17,
          "name": "Roberts",
          "gender": false,
          "score": 16
        },
        {
          "id": 18,
          "name": "Montoya",
          "gender": false,
          "score": 5
        },
        {
          "id": 19,
          "name": "Duncan",
          "gender": false,
          "score": 93
        },
        {
          "id": 20,
          "name": "Mcmahon",
          "gender": false,
          "score": 17
        },
        {
          "id": 21,
          "name": "Maynard",
          "gender": true,
          "score": 43
        },
        {
          "id": 22,
          "name": "Garrett",
          "gender": false,
          "score": 14
        },
        {
          "id": 23,
          "name": "Levine",
          "gender": false,
          "score": 7
        },
        {
          "id": 24,
          "name": "Hogan",
          "gender": true,
          "score": 69
        },
        {
          "id": 25,
          "name": "Brown",
          "gender": true,
          "score": 100
        },
        {
          "id": 26,
          "name": "Edwards",
          "gender": false,
          "score": 24
        },
        {
          "id": 27,
          "name": "Morton",
          "gender": false,
          "score": 80
        },
        {
          "id": 28,
          "name": "Stein",
          "gender": false,
          "score": 19
        },
        {
          "id": 29,
          "name": "Valenzuela",
          "gender": true,
          "score": 16
        },
        {
          "id": 30,
          "name": "Sanders",
          "gender": true,
          "score": 41
        }
      ]
    }
  ]
""") as Array<ClassRecord>

fun grade(score: Int): String {
    return if (score >= 90) {
        "A";
    } else if (score >= 80) {
        "B";
    } else if (score >= 70) {
        "C";
    } else if (score >= 60) {
        "D";
    } else {
        "F";
    }
}

fun performanceNow(): Double {
    return js("performance.now()") as Double
}

@OptIn(ExperimentalJsExport::class)
@JsExport
fun run(data: Array<ClassRecord>): Int {
    return data.asSequence()
        .flatMap { it -> it.members.asSequence() }
        .filter { it -> it.gender }
        .map { it -> min(100, it.score + 5) }
        .map { it -> grade(it) }
        .filter { it -> it == "A" }
        .count()
}

fun main() {
    val now = performanceNow()
    for (i in 1..100000) {
        run(data)
    }
    println(performanceNow() - now)
}
