export default function BiodataDiri(){
  const dataSaya = {
    nama: "Raisya Revalina",
    foto: "img/foto.jpg",
    ttl: "Payakumbuh, 06 November 2006",
    jenisKelamin: "Perempuan",
    agama: "Islam",
    alamat: "Riau, Indonesia",
    hobi: ["Nonton"],
    email: "raisya@email.com",
    instagram: "raiss_yy",
    github: "raisya-24Si",
    pendidikan: "Politeknik Caltex Riau",
    motto: "Teruslah Ngoding Sampai Jadi Programmer Hebat"
  }

  return (
    <div>
      <h1>Biodata Diri</h1>
      <BiodataCard {...dataSaya}/>
    </div>
  )
}

/* ===== COMPONENT UTAMA ===== */
function BiodataCard(props){
  return (
    <div className="card">
      <Header nama={props.nama} foto={props.foto}/>
      <InfoPribadi 
        ttl={props.ttl}
        jenisKelamin={props.jenisKelamin}
        agama={props.agama}
        alamat={props.alamat}
      />
      <Hobi hobi={props.hobi}/>
      <Kontak 
        email={props.email}
        instagram={props.instagram}
        github={props.github}
      />
      <Pendidikan pendidikan={props.pendidikan}/>
      <Motto motto={props.motto}/>
    </div>
  )
}


// 1
function Header({ nama }){
  return (
    <div>
      <h2>{nama}</h2>
      <hr/>
    </div>
  )
}

// 2
function InfoPribadi({ ttl, jenisKelamin, agama, alamat }) {
  return (
    <div>
      <h2>Info Pribadi</h2>
      <ul>
        <li><span className="info-label">TTL</span>: {ttl}</li>
        <li><span className="info-label">Jenis Kelamin</span>: {jenisKelamin}</li>
        <li><span className="info-label">Agama</span>: {agama}</li>
        <li><span className="info-label">Alamat</span>: {alamat}</li>
      </ul>
      <hr />
    </div>
  );
}

// 3
function Hobi({ hobi }) {
  return (
    <div>
      <h2>Hobi</h2>
      <p>{hobi}</p>
      <hr />
    </div>
  );
}

// 4
function Kontak({ email, instagram, github }) {
  return (
    <div>
      <h2>Kontak</h2>
      <ul>
        <li><span className="info-label">Email</span>: {email}</li>
        <li><span className="info-label">Instagram</span>: @{instagram}</li>
        <li><span className="info-label">GitHub</span>: github.com/{github}</li>
      </ul>
      <hr />
    </div>
  );
}

// 5
function Pendidikan({ pendidikan }){
  return (
    <div>
      <h2>Pendidikan</h2>
      <p>{pendidikan}</p>
      <hr/>
    </div>
  )
}

// 6
function Motto({ motto }){
  return (
    <div>
      <h2>Motto</h2>
      <p>{motto}</p>
    </div>
  )
}