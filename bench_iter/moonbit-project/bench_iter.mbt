pub struct ClassRecord {
  class: Int
  members: Array[Record]
}

pub struct Record {
  id: Int
  name: String
  gender: Bool
  score: Int
}

fn grade(score: Int) -> String {
  if score >= 90 {
    "A"
  } else if score >= 80 {
    "B"
  } else if score >= 70 {
    "C"
  } else if score >= 60 {
    "D"
  } else {
    "F"
  }
}


pub fn run(data: Array[ClassRecord]) -> Int {
  data.as_iter()
    .flat_map(fn { c => c.members.as_iter() })
    .filter(fn { r => r.gender })
    .map(fn { r => @math.minimum(100, r.score + 5) })
    .map(fn { r => grade(r) })
    .filter(fn { g => g == "A" })
    .fold(fn { c, _ => c + 1 }, 0)
}
