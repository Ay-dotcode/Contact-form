function query() {
    queryActive(general);
    queryActive(support);
}
function queryActive(section) {
    for (const child of section.children) {
        if (child.id === 'general-enq' || child.id === 'sprt-req') {
            if (child.checked)
                section.style.backgroundColor = 'hsl(148, 38%, 91%)';
            else section.style.backgroundColor = 'white';
        }
    }
}
export { query };
