import "./Dostava.scss";

function Dostava(){
    return(
        <>
        <h1>Uvjeti dostave</h1>
        <div className="dostava-wrapper">
            <p>
            Booki.hr osigurava dostavu u Hrvatskoj i inozemstvu.
            </p>
        <p><strong>
        Za dostavu paketa unutar Hrvatske koristimo usluge dostavljačke službe DPD Croatia d.o.o.
        </strong></p>
        <p><strong>
        *Paket koji ste naručili stiže na vrata u roku od 3-7 radnih dana (ponedjeljak-petak). U iznimnom slučajevima u akcijskom razdoblju vrijeme isporuke se može produžiti do 10 radnih dana.
        </strong></p>
        <hr />
        <ul>
            <li>
            Za iznos do 25,00 € / 188,36 kn = Troškovi slanja: 3,50 € / 26,37 kn
            </li>
            <li>
            Za iznos iznad 25,00 € / 188,36 kn = Troškovi slanja: Gratis
            </li>
        </ul>
        <hr />
        <div className="dostava-tekst">
        Za dostavu paketa u inozemstvo koristimo usluge dostavljačke službe DHL Express (usluga dostave dostupna za cijeli svijet).
        <br />
        Trošak dostave ovisi o zemlji dostave i težini paketa, a obračunava se pri samoj narudžbi prema osnovnim cjenicima dostavljačke službe DHL Express. 
        <br />
        Cijena artikla i dostave ne uključuje eventualne carinske troškove niti bilo kakve posebne naknade odredišne države.
        <br />
        Rok isporuke je do 4 radna dana za dostavu putem DHL Express službe.
        <br />
        Služba dostave pakete će preuzeti po uspješnoj uplati, o čemu ćemo Vas obavijestiti putem e-mail koji ste naveli prilikom kupnje. Dostava se vrši samo radnim danima.
        <br />
        Za sva pitanja i obavijesti o dostavi naručenih proizvoda kontaktirajte nas na info@booki.hr ili 022/123 456.
        <br />
        Napomene za dostavu DHL dostavljačkom službom:
        <br /> 
        Dostava se vrši sukladno Uvjetima prijevoza DHL Express-a.
        <br />
        DHL Express ne dostavlja na P.O. Box (poštanski sandučić).
        <br />
        Cijena artikla i dostave ne uključuje eventualne carinske troškove niti bilo kakve posebne naknade odredišne države.
        </div>

        </div>
        </>
    )
}

export {Dostava}