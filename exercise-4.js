var hari = 21;
var bulan = 1;
var tahun = 1945;

switch (bulan) {
    case 1:
        if (hari >= 1 && hari <= 31) {
            if (tahun >= 1900 && tahun <= 2200) {
            console.log(hari + ' '  + "Januari" + ' '  + tahun);
            }
            else {
            console.log('tahun berada diantara 1900-2200');
            }
        } else {
            console.log('tanggal di bulan januari hanya dari 1 sampai 31');
            }
        break;
    
    case 2:
    if (hari >= 1 && hari <= 28) {
        if (tahun >= 1900 && tahun <= 2200) {
        console.log(hari + ' '  + "Februari" + ' '  + tahun)
        }
        else {
        console.log('tahun berada diantara 1900-2200')
        }
    } else {
        console.log('tanggal di bulan februari hanya dari 1 sampai 28/29')
    }
    break;

    case 3:
    if (hari >= 1 && hari <= 31) {
        if (tahun >= 1900 && tahun <= 2200) {
        console.log(hari + ' '  + "Maret" + ' '  + tahun);
        }
        else {
        console.log('tahun berada diantara 1900-2200');
        }
    } else {
        console.log('tanggal di bulan maret hanya dari 1 sampai 31');
        }
    break;

    case 4:
    if (hari >= 1 && hari <= 30) {
        if (tahun >= 1900 && tahun <= 2200) {
        console.log(hari + ' '  + "April" + ' '  + tahun);
        }
        else {
        console.log('tahun berada diantara 1900-2200');
        }
    } else {
        console.log('tanggal di bulan april hanya dari 1 sampai 30');
        }
    break;

    case 5:
    if (hari >= 1 && hari <= 31) {
        if (tahun >= 1900 && tahun <= 2200) {
        console.log(hari + ' '  + "Mei" + ' '  + tahun);
        }
        else {
        console.log('tahun berada diantara 1900-2200');
        }
    } else {
        console.log('tanggal di bulan mei hanya dari 1 sampai 31');
        }
    break;
    
    case 6:
    if (hari >= 1 && hari <= 30) {
        if (tahun >= 1900 && tahun <= 2200) {
        console.log(hari + ' '  + "Juni" + ' '  + tahun);
        }
        else {
        console.log('tahun berada diantara 1900-2200');
        }
    } else {
        console.log('tanggal di bulan juni hanya dari 1 sampai 30');
        }
    break;

    case 7:
        if (hari >= 1 && hari <= 31) {
            if (tahun >= 1900 && tahun <= 2200) {
            console.log(hari + ' '  + "Juli" + ' '  + tahun);
            }
            else {
            console.log('tahun berada diantara 1900-2200');
            }
        } else {
            console.log('tanggal di bulan juli hanya dari 1 sampai 31');
            }
        break;
    
    case 8:
    if (hari >= 1 && hari <= 31) {
        if (tahun >= 1900 && tahun <= 2200) {
        console.log(hari + ' '  + "Agustus" + ' '  + tahun);
        }
        else {
        console.log('tahun berada diantara 1900-2200');
        }
    } else {
        console.log('tanggal di bulan agustus hanya dari 1 sampai 31');
        }
    break;
        
    case 9:
    if (hari >= 1 && hari <= 30) {
        if (tahun >= 1900 && tahun <= 2200) {
        console.log(hari + ' '  + "September" + ' '  + tahun);
        }
        else {
        console.log('tahun berada diantara 1900-2200');
        }
    } else {
        console.log('tanggal di bulan september hanya dari 1 sampai 30');
        }
    break;

    case 10:
    if (hari >= 1 && hari <= 31) {
        if (tahun >= 1900 && tahun <= 2200) {
        console.log(hari + ' '  + "Oktober" + ' '  + tahun);
        }
        else {
        console.log('tahun berada diantara 1900-2200');
        }
    } else {
        console.log('tanggal di bulan oktober hanya dari 1 sampai 31');
        }
    break;

    case 11:
    if (hari >= 1 && hari <= 30) {
        if (tahun >= 1900 && tahun <= 2200) {
        console.log(hari + ' '  + "November" + ' '  + tahun);
        }
        else {
        console.log('tahun berada diantara 1900-2200');
        }
    } else {
        console.log('tanggal di bulan november hanya dari 1 sampai 30');
        }
    break;
    
        
    default :
    if (hari >= 1 && hari <= 31) {
        if (tahun >= 1900 && tahun <= 2200) {
        console.log(hari + ' ' + "Januari" + ' ' + tahun)
        }
        else {
        console.log('tahun berada diantara 1900-2200')
        }
    }
    else {
        console.log('tanggal di bulan desember hanya dari 1 sampai 31')
    }
    break;
}