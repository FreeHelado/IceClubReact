const productos = [
    {
        id: '1',
        titulo: 'Pet Sounds',
        artista: 'The Beach Boys',
        categoria: 'Vinilo',
        anio: '1966',
        img: 'https://i.discogs.com/yHDkZ0vAaV15mObTKnLtK1QZM8Hnp6EGrMUhKHS3PpE/rs:fit/g:sm/q:90/h:598/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNTQ0/NzktMTM0NjM4NzAy/Ny00Nzc0LmpwZWc.jpeg',
        stock: 100,
        precio: 25,
        desripcion: 'Descripción del Pet Sounds'
    },
    {
        id: '2',
        titulo: 'Cold Fact',
        artista: 'Rodriguez',
        categoria: 'Vinilo',
        anio: '1970',
        img: 'https://i.discogs.com/pPEr1gCcvEs_FOrNgJH8e_hBsyQwMCoMBZLtR4jj2U0/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0MDU4/NTMzLTE2MzAxNjM3/MTEtOTAzNy5qcGVn.jpeg',
        stock: 100,
        precio: 50,
        desripcion: 'Descripción de rodriguez'
    },
    {
        id: '3',
        titulo: 'Eddie Cochran',
        artista: 'Eddie Cochran',
        categoria: 'Vinilo',
        anio: '1960',
        img: 'https://i.discogs.com/XX0YHIXXkeYQ0H9yE6vwoIXS6JuxJg2Va7ffCfCaWCY/rs:fit/g:sm/q:90/h:598/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4NjY3/NjAtMTM0NzQzMDQ4/OS0xODg2LmpwZWc.jpeg',
        stock: 100,
        precio: 50,
        desripcion: 'Descripción de Cochran'
    }
]

export const getDiscos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 5000)
    })
}