const productos = [
    {
        id: '8392678',
        titulo: 'Foregrow EP',
        artista: 'John Frusciante',
        categoria: 'Vinilo',
        anio: '2016',
        img: '../../assets/covers/R-8392678-1460792762-1145.jpg',
        stock: 100,
        precio: 19.95,
        sello: 'Acid Test',
        genero: 'Electrónica',
        desripcion: '12\ - 33 ? RPM 45 RPM EP Record Store Day'
    },
    
]

export const getDiscos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2500)
    })
}