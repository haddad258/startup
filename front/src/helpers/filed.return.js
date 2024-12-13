export function formatDataFK(id, list, field) {
    const item = list.find(element => element.id === id);
    if (item) {
        return item[field];
    } else {
        return null; // ou undefined, ou un message d'erreur, selon vos besoins
    }
}

export function formatDataFKSecond(id, list) {
    const item = list.find(element => element.id === id);
    return item ? item.name : id; // ou undefined, ou un message d'erreur, selon vos besoins
}

////we will use useMemo