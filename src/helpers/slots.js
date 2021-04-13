const slots = (start, number) => {

    const slots = []

    for (let index = 0; index < number; index++) {
        let minutes = index % 2 ? 30 : 0
        let hours = start + index / 2;
        var d = new Date(2020, 1, 1, hours, minutes, 0, 0);
        hours = String(d.getHours()).padStart(2,'0')
        minutes = String(d.getMinutes()).padStart(2,'0')
        slots.push(`${hours}:${minutes}`)
    }

    return slots
}

export default slots;