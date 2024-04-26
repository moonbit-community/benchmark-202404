const grade = (score) => {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
};

export function run(data) {
    return data.values().flatMap(c => c.members)
        .filter(it => it.gender)
        .map(it => Math.min(100, it.score + 5))
        .map(it => grade(it))
        .filter(it => it === 'A')
        .reduce((acc, _) => acc + 1, 0);
}
