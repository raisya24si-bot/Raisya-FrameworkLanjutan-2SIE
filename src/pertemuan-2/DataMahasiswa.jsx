export default function DataMahasiswa(){

    const dataSaya = {
        nama: "Nur Afifah",
        nim: "2457301125",
        kelas: "2-SIE",
        hobi: "Makan",
    }

    return (
        <div>
            <h1>Halaman Data Mahasiswa</h1>

            <UserCard 
                nama="Raisya Revalina"
                nim="2457301120"
                kelas="2-SIE"
                hobi="Ngoding"
            />

            <UserCard 
                nama="Agnes Jesisca"
                nim="2457301010"
                kelas="2-SIE"
                hobi="Desain"
            />

            <UserCard {...dataSaya}/>
        </div>
    )
}
function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Kelas: {props.kelas}</p>
            <p>Hobi: {props.hobi}</p>
        </div>
    )
}