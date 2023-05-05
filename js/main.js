/**
 * Khối 1: Input
 * điểm chuẩn, điểm 3 môn thi, khuVuc,doiTuong
 * 
 * Khối 2 :
 * Phân tíchfunction cho chương trình
 * +kiemTraKhuVuc,
 * + kiemTraDoiTUong,
 * + Tinh tong diem
 *
 * 
 * Khối 3 : Output
 * Tính tổng điểm và đậu hay rớt
 */
function ManageAdmissions() {
    var diemChuan = document.getElementById("inputDiemChuan").value;
    var diemMon1 = Number(document.getElementById("inputMon1").value);
    var diemMon2 = Number(document.getElementById("inputMon2").value);
    var diemMon3 = Number(document.getElementById("inputMon3").value);

    var khuVuc = document.getElementById("selKV").value;
    var doiTuong = document.getElementById("selDT").value;

    var diemUuTienKV = "";
    switch (khuVuc) {
        case "A":
            diemUuTienKV = 2;
            break;
        case "B":
            diemUuTienKV = 1;
            break;
        case "C":
            diemUuTienKV = 0.5;
            break;
        case "X":
            diemUuTienKV = 0;
            break;
        default:
            alert("Bạn chưa chọn khu vực")
            return"";
    }

    var diemUuTienDT = "";
    switch (doiTuong) {
        case "1":
            diemUuTienDT = 2.5;
            break;
        case "2":
            diemUuTienDT = 1.5;
            break;
        case "3":
            diemUuTienDT = 1;
            break;
        case "0":
            diemUuTienDT = 0;
            break;
        default:
            alert("Bạn chưa chọn đối tượng")
            return"";
            
    }

    var tongDiem = 0;
    tongDiem = diemMon1 + diemMon2 + diemMon3 + diemUuTienKV + diemUuTienDT;

    if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
        document.getElementById("txtKetQua").innerHTML = "Tổng điểm đạt được: " + tongDiem + ";"+ "  Bạn đã rớt vì có một môn điểm 0.";
        console.log("Thí sinh thi rớt.");
    } else if (tongDiem >= diemChuan) {
        document.getElementById("txtKetQua").innerHTML = "Tổng điểm đạt được: " + tongDiem + ";"+"  Bạn đã đậu";
    } else {
        document.getElementById("txtKetQua").innerHTML = "Tổng điểm đạt được  " + tongDiem +";"+ "  Bạn đã rớt.";
    }

}

/**
 * Khối 1: Input
 * hoTen, soKW
 * 
 * Khối 2 :
 * Phân tích function cho chương trình
 * +Khai báo bảng giá 
 * +tính tiền theo kw
 * 
 * Khối 3 : Output
 * Tính thành tiền
 */
function calcElec() {

    const KW_DAU = 500;
    const KW_50_100 = 650;
    const KW_100_200 = 850;
    const KW_200_350 = 1100;
    const KW_TREN350 = 1300;

    var name = document.getElementById("inputName").value;
    var soKW = document.getElementById("inputKW").value;

    var total = 0;
    if (0 < soKW && soKW <= 50) {
        total = soKW * KW_DAU;
    } else if (50 < soKW && soKW <= 100) {
        total = 50 * KW_DAU + (soKW - 50) * KW_50_100
    } else if (100 < soKW && soKW <= 200) {
        total = 50 * KW_DAU + 50 * KW_50_100 + (soKW - 100) * KW_100_200
    } else if (200 < soKW && soKW <= 350) {
        total = 50 * KW_DAU + 50 * KW_50_100 + 100 * KW_100_200 + (soKW - 200) * KW_200_350
    } else if (soKW > 350) {
        total = 50 * KW_DAU + 50 * KW_50_100 + 100 * KW_100_200 + 150 * KW_200_350 + (soKW - 350) * KW_TREN350
    } else {
        alert("Bạn nhập sai số kw không hợp lệ!")
        return"";
    }
    total = new Intl.NumberFormat("vn-VN").format(total)

    document.getElementById("txtElc").innerHTML = "Họ tên: " + name + ";" + " Tiền điện: " + total + "VNĐ";
}

/**
 * Khối 1: Input
 * ten, thunhap, songuoi
 * 
 * Khối 2 :
 * Phân tích các function cho chương trình
 * + khai báo bảng thuế
 * +tính tiền thuế theo thu nhập 
 * 
 * Khối 3 : Output
 * Tính thành tiền
 */

function calcTax() {
    const TAX0_60 = 0.05;
    const TAX60_120 = 0.1;
    const TAX120_210 = 0.15;
    const TAX210_384 = 0.2;
    const TAX384_624 = 0.25;
    const TAX624_960 = 0.3;
    const TAX_TREN960 = 0.35;

    var name = document.getElementById("inputHT").value;
    var thuNhap = document.getElementById("inputTN").value;



    var total = 0;
    if (0 < thuNhap && thuNhap <= 60e6) {
        total = (thuNhap * TAX0_60);
    } if (60e+6 < thuNhap && thuNhap <= 120e6) {
        total = 60e+6 * TAX0_60 + (thuNhap - 60e+6) * TAX60_120;
    } if (120e+6 < thuNhap && thuNhap <= 210e6) {
        total = 60e6 * TAX0_60 + 60e6 * TAX60_120 + (thuNhap - 120e6) * TAX120_210;
    } if (210e+6 < thuNhap && thuNhap <= 384e6) {
        total = 60e+6 * TAX0_60 + 60e6 * TAX60_120 + 90e6 * TAX120_210 + (thuNhap - 210e+6) * TAX210_384;
    } if (384e+6 < thuNhap && thuNhap <= 624e6) {
        total = 60e+6 * TAX0_60 + 60e6 * TAX60_120 + 90e6 * TAX120_210 + 174e6 * TAX210_384 + (thuNhap - 384e+6) * TAX384_624;
    } if (624e+6 < thuNhap && thuNhap <= 960e6) {
        total = 60e+6 * TAX0_60 + 60e6 * TAX60_120 + 90e6 * TAX120_210 + 174e6 * TAX210_384 + 240e6 * TAX384_624 + (thuNhap - 624e+6) * TAX624_960;
    } if (thuNhap > 960e+6) {
        total = 60e+6 * TAX0_60 + 60e6 * TAX60_120 + 90e6 * TAX120_210 + 174e6 * TAX210_384 + 240e6 * TAX384_624 + 336e6 * TAX624_960 + (thuNhap - 960e+6) * TAX_TREN960;
    }else{
        alert("Bạn nhập số thu nhập không hợp lệ!")
        return"";
    }

    total = new Intl.NumberFormat("vn-VN").format(total)


    document.getElementById("txtTax").innerHTML = "Họ tên: " + name + ";" + " Tiền thuế thu nhập cá nhân: " + total + "VNĐ";

}

/**
 * Khối 1: Input
 * loaiKH, maKH, soKenh , soKetNoi
 * 
 * Khối 2 :
 * Phân tích các function cho chương trình
 * +phi xu ly hoa don
 * + phi dich vu co ban
 * + tien thue kenh
 * + Tinhtienhoadon
 *
 * 
 * Khối 3 : Output
 * Tính thành tiền
 */
function clalcCap() {
    const PHI_HD_ND = 4.5;
    const PHI_DV_ND = 20.5;
    const PHI_THUE_KENH_ND = 7.5;

    const PHI_HD_DN = 15;
    const PHI_DV_DN = 75
    const PHI_THUE_KENH_DN = 50

    var loaiKH = document.getElementById("selCustomer").value;
    var maKH = document.getElementById("inputID").value;
    var soKenh = document.getElementById("inputChanel").value;
    var soKN = document.getElementById("inputConnect").value;

    var total = 0;
    switch (loaiKH) {
        case "user":
            total = PHI_DV_ND + PHI_HD_ND + PHI_THUE_KENH_ND * soKenh;
            break;
        case "company":
            if (soKN < 10) {
                total = PHI_DV_DN + PHI_HD_DN + PHI_THUE_KENH_DN * soKenh;
            } else {
                total = PHI_DV_DN + (soKN - 10) * 5 + PHI_HD_DN + PHI_THUE_KENH_DN * soKenh;
            }
            break
        default:
            alert("Vui lòng chọn loại khách hàng!")
            return"";
    }
    total = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(total);

    document.getElementById("txtCap").innerHTML = "Mã khách hàng: " + maKH + ";" + " Tiền thuê cáp: " + total;
}





function reset(){
    document.getElementById("txtKetQua").innerHTML = "";
}

function reset2(){
    document.getElementById("txtElc").innerHTML = "";
}

function reset3(){
    document.getElementById("txtTax").innerHTML = "";
}

function reset4(){
    document.getElementById("txtCap").innerHTML = "";
}



