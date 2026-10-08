// ==========================================
// NGÂN HÀNG ĐỀ ÔN TẬP CUỐI KÌ 1 - HÓA HỌC 12 (KẾT NỐI TRI THỨC)
// Cấu trúc chuẩn 2025: 
// - PHẦN I: 18 câu Trắc nghiệm nhiều phương án (4,5 điểm - 0,25đ/câu)
// - PHẦN II: 4 câu Trắc nghiệm Đúng / Sai (4,0 điểm - tối đa 1,0đ/câu)
// - PHẦN III: 6 câu Trắc nghiệm trả lời ngắn (1,5 điểm - 0,25đ/câu)
// Tổng điểm: 10,0 điểm
// ==========================================

var questionsDeCK1 = [
  // ----------------------------------------------------
  // PHẦN I. CÂU HỎI TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN LỰA CHỌN (18 CÂU)
  // ----------------------------------------------------
  {
    part: "PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (4,5 ĐIỂM)",
    type: "mcq",
    q: "Chất không có khả năng làm xanh quỳ tím là",
    options: [
      "ammonia.",
      "lysine.",
      "aniline.",
      "methyl amine."
    ],
    answer: 2,
    exp: "Aniline (C₆H₅NH₂) có tính base rất yếu do gốc phenyl (-C₆H₅) hút electron làm giảm mật độ electron trên nguyên tử nitrogen, vì vậy dung dịch aniline không làm đổi màu quỳ tím. Ammonia, lysine và methyl amine đều làm quỳ tím hóa xanh."
  },
  {
    part: "PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (4,5 ĐIỂM)",
    type: "mcq",
    q: "Cặp oxi hoá - khử nào sau đây có giá trị thế điện cực chuẩn lớn hơn 0?",
    options: [
      "K⁺/K.",
      "Li⁺/Li.",
      "Ba²⁺/Ba.",
      "Cu²⁺/Cu."
    ],
    answer: 3,
    exp: "Cặp Cu²⁺/Cu có giá trị thế điện cực chuẩn E°(Cu²⁺/Cu) = +0,34 V > 0. Các cặp oxi hóa - khử của kim loại mạnh (K⁺/K: -2,93V; Li⁺/Li: -3,04V; Ba²⁺/Ba: -2,91V) đều có thế điện cực chuẩn âm sâu."
  },
  {
    part: "PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (4,5 ĐIỂM)",
    type: "mcq",
    q: "Phát biểu nào sau đây là đúng khi nói về pin Galvani?",
    options: [
      "Anode là điện cực dương.",
      "Ở điện cực âm xảy ra quá trình oxi hoá.",
      "Cathode là điện cực âm.",
      "Dòng electron di chuyển từ cathode sang anode."
    ],
    answer: 1,
    exp: "Trong pin Galvani: Cực âm là anode (xảy ra quá trình oxi hóa kim loại thành ion, giải phóng e); Cực dương là cathode (xảy ra quá trình khử ion, nhận e). Ở mạch ngoài, dòng electron di chuyển từ anode sang cathode."
  },
  {
    part: "PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (4,5 ĐIỂM)",
    type: "mcq",
    q: "Hai hợp chất hữu cơ X và Y có cùng công thức phân tử là C₃H₇NO₂, đều là chất rắn ở điều kiện thường. Chất X phản ứng với dung dịch NaOH, giải phóng khí. Chất Y có phản ứng trùng ngưng. Các chất X và Y lần lượt là",
    options: [
      "ammonium acrylate và 2-aminopropionic acid.",
      "vinylammonium formate và ammoni acrylate.",
      "2-aminopropionic acid và 3-aminopropionic acid.",
      "2-aminopropionic acid và ammonium acrylate."
    ],
    answer: 0,
    exp: "Chất X tác dụng NaOH giải phóng khí NH₃ nên X là muối ammonium: CH₂=CH-COONH₄ (ammonium acrylate). Chất Y tham gia phản ứng trùng ngưng tạo polymer peptide nên Y là amino acid: CH₃-CH(NH₂)-COOH (2-aminopropionic acid hay alanine)."
  },
  {
    part: "PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (4,5 ĐIỂM)",
    type: "mcq",
    q: "Polymer nào sau đây thuộc loại polymer tổng hợp?",
    options: [
      "Tơ visco.",
      "Poly(vinyl chloride).",
      "Cellulose.",
      "Tinh bột."
    ],
    answer: 1,
    exp: "Poly(vinyl chloride) (PVC) là polymer tổng hợp điều chế bằng phản ứng trùng hợp vinyl chloride. Tơ visco là polymer bán tổng hợp (nhân tạo); cellulose và tinh bột là polymer thiên nhiên."
  },
  {
    part: "PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (4,5 ĐIỂM)",
    type: "mcq",
    q: "Sức điện động chuẩn của pin điện hoá gồm hai điện cực M²⁺/M và Ag⁺/Ag bằng 1,056 V. Cho bảng thế điện cực chuẩn: Fe²⁺/Fe (-0,44 V), Ni²⁺/Ni (-0,257 V), Sn²⁺/Sn (-0,137 V), Cu²⁺/Cu (+0,34 V), Ag⁺/Ag (+0,799 V). Kim loại M phù hợp là",
    options: [
      "Sn.",
      "Fe.",
      "Cu.",
      "Ni."
    ],
    answer: 3,
    exp: "Sức điện động chuẩn của pin: E°pin = E°(Ag⁺/Ag) - E°(M²⁺/M) = 1,056 V ⇒ E°(M²⁺/M) = 0,799 - 1,056 = -0,257 V. Đối chiếu bảng thế điện cực chuẩn, giá trị -0,257 V ứng với cặp Ni²⁺/Ni, do đó kim loại M là Ni."
  },
  {
    part: "PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (4,5 ĐIỂM)",
    type: "mcq",
    q: "Chất nào sau đây là ester?",
    options: [
      "CH₃CH₂CHO.",
      "CH₃COOCH₃.",
      "CH₃OH.",
      "CH₃COOH."
    ],
    answer: 1,
    exp: "CH₃COOCH₃ (methyl acetate) là một ester được tạo thành từ acetic acid và methyl alcohol."
  },
  {
    part: "PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (4,5 ĐIỂM)",
    type: "mcq",
    q: "Cho 2 cặp oxi hoá – khử và thế điện cực chuẩn tương ứng: Fe²⁺/Fe (-0,440 V) và Cu²⁺/Cu (+0,340 V). Sức điện động chuẩn của pin điện hoá tạo bởi hai cặp oxi hoá - khử này là",
    options: [
      "+1,56 (V).",
      "-0,10 (V).",
      "+0,78 (V).",
      "-0,87 (V)."
    ],
    answer: 2,
    exp: "E°pin = E°(cathode) - E°(anode) = E°(Cu²⁺/Cu) - E°(Fe²⁺/Fe) = +0,340 - (-0,440) = +0,780 (V)."
  },
  {
    part: "PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (4,5 ĐIỂM)",
    type: "mcq",
    q: "Những hợp chất hữu cơ tạp chức, trong phân tử chứa đồng thời nhóm amino (-NH₂) và nhóm carboxyl (-COOH) là",
    options: [
      "acid béo.",
      "amino acid.",
      "lipid.",
      "amine."
    ],
    answer: 1,
    exp: "Theo định nghĩa chuẩn SGK Hóa học 12: Amino acid là loại hợp chất hữu cơ tạp chức mà trong phân tử chứa đồng thời nhóm amino (-NH₂) và nhóm carboxyl (-COOH)."
  },
  {
    part: "PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (4,5 ĐIỂM)",
    type: "mcq",
    q: "Trong chế biến thực phẩm, người ta hydrogen hoá chất béo lỏng để được chất béo rắn. Để tác dụng hết với a mol triolein (C₁₇H₃₃COO)₃C₃H₅ cần tối đa 0,6 mol H₂. Giá trị của a là bao nhiêu?",
    options: [
      "0,4.",
      "0,2.",
      "0,1.",
      "0,3."
    ],
    answer: 1,
    exp: "Triolein (C₁₇H₃₃COO)₃C₃H₅ chứa 3 gốc oleate chưa no, mỗi gốc có 1 nối đôi C=C, do đó phân tử có 3 liên kết C=C. Phản ứng hydrogen hóa: 1 mol triolein phản ứng với 3 mol H₂. Suy ra: a = n(H₂) / 3 = 0,6 / 3 = 0,2 mol."
  },
  {
    part: "PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (4,5 ĐIỂM)",
    type: "mcq",
    q: "Polymer nào sau đây không phải là thành phần chính của chất dẻo?",
    options: [
      "Poly(vinyl chloride).",
      "Polyethylene.",
      "Polyacrylonitrile.",
      "Poly(methyl methacrylate)."
    ],
    answer: 2,
    exp: "Polyacrylonitrile ([-CH₂-CH(CN)-]ₙ) được dùng để sản xuất tơ nitron (tơ olon) thuộc nhóm tơ tổng hợp, không phải là thành phần chính của chất dẻo. Ba polymer còn lại đều là các chất dẻo quan trọng."
  },
  {
    part: "PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (4,5 ĐIỂM)",
    type: "mcq",
    q: "Trong pin điện hóa, quá trình khử",
    options: [
      "xảy ra ở cực âm và cực dương.",
      "xảy ra ở cực âm.",
      "không xảy ra ở cả cực âm và cực dương.",
      "xảy ra ở cực dương."
    ],
    answer: 3,
    exp: "Trong mọi pin điện hóa: Cực dương (cathode) là nơi xảy ra quá trình khử (chất oxi hóa nhận electron); Cực âm (anode) là nơi xảy ra quá trình oxi hóa (chất khử nhường electron)."
  },
  {
    part: "PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (4,5 ĐIỂM)",
    type: "mcq",
    q: "Các peptide có từ hai liên kết peptide trở lên phản ứng với thuốc thử biuret (Cu(OH)₂ trong môi trường kiềm) tạo phức chất màu",
    options: [
      "trắng.",
      "vàng.",
      "xanh lam.",
      "tím."
    ],
    answer: 3,
    exp: "Các phân tử peptide có từ 2 liên kết peptide trở lên phản ứng với Cu(OH)₂ trong môi trường kiềm tạo hợp chất phức chất màu tím đặc trưng (phản ứng màu biuret)."
  },
  {
    part: "PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (4,5 ĐIỂM)",
    type: "mcq",
    q: "Đun nóng chất H₂N-CH₂-CONH-CH(CH₃)-CONH-CH₂-COOH trong dung dịch HCl (dư), sau khi các phản ứng kết thúc thu được sản phẩm là:",
    options: [
      "H₂N-CH₂-COOH, H₂N-CH(CH₃)-COOH.",
      "H₃N⁺-CH₂-COOH Cl⁻, H₃N⁺-CH(CH₃)-COOH Cl⁻.",
      "H₃N⁺-CH₂-COOH Cl⁻, H₃N⁺-CH₂-CH₂-COOH Cl⁻.",
      "H₂N-CH₂-COOH, H₂N-CH₂-CH₂-COOH."
    ],
    answer: 1,
    exp: "Tripeptide Gly-Ala-Gly khi bị thủy phân hoàn toàn trong dung dịch HCl dư: Liên kết peptide bị cắt đứt sinh ra amino acid tự do (Gly và Ala), sau đó nhóm -NH₂ phản ứng với HCl dư tạo muối: Cl⁻ H₃N⁺-CH₂-COOH và Cl⁻ H₃N⁺-CH(CH₃)-COOH."
  },
  {
    part: "PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (4,5 ĐIỂM)",
    type: "mcq",
    q: "Phát biểu nào sau đây đúng?",
    options: [
      "Poly(methyl methacrylate) được điều chế bằng phản ứng trùng hợp.",
      "Poly(phenol formaldehyde) được điều chế bằng phản ứng trùng hợp.",
      "Poly(vinyl chloride) được điều chế bằng phản ứng cộng HCl vào ethylene.",
      "Polyethylene được điều chế bằng phản ứng trùng ngưng."
    ],
    answer: 0,
    exp: "Poly(methyl methacrylate) được điều chế bằng phản ứng trùng hợp methyl methacrylate CH₂=C(CH₃)COOCH₃. Poly(phenol formaldehyde) điều chế bằng phản ứng trùng ngưng; PVC điều chế bằng trùng hợp vinyl chloride; PE điều chế bằng trùng hợp ethylene."
  },
  {
    part: "PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (4,5 ĐIỂM)",
    type: "mcq",
    q: "Carbohydrate nào dưới đây không có nhóm –OH hemiacetal hoặc nhóm –OH hemiketal?",
    options: [
      "Saccharose.",
      "Fructose.",
      "Maltose.",
      "Glucose."
    ],
    answer: 0,
    exp: "Phân tử saccharose liên kết gốc α-glucose và β-fructose qua cầu nối α-1,2-glycosidic nối trực tiếp nhóm -OH hemiacetal ở C₁ (glucose) với nhóm -OH hemiketal ở C₂ (fructose). Do đó saccharose không còn nhóm -OH hemiacetal hay hemiketal tự do, không thể mở vòng tráng bạc."
  },
  {
    part: "PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (4,5 ĐIỂM)",
    type: "mcq",
    q: "Khi pin Galvani Zn–Cu hoạt động thì",
    options: [
      "dòng điện chạy từ Cu sang Zn.",
      "ở điện cực âm, anode xảy ra quá trình khử Zn.",
      "Zn đóng vai trò cực âm, Cu đóng vai trò cực dương.",
      "ở điện cực dương, cathode xảy ra quá trình oxi hóa Cu."
    ],
    answer: 2,
    exp: "Trong pin Galvani Zn-Cu: Zn có tính khử mạnh hơn nên đóng vai trò là cực âm (anode, xảy ra oxi hóa Zn → Zn²⁺ + 2e), Cu đóng vai trò là cực dương (cathode, xảy ra khử Cu²⁺ + 2e → Cu)."
  },
  {
    part: "PHẦN I. TRẮC NGHIỆM NHIỀU PHƯƠNG ÁN (4,5 ĐIỂM)",
    type: "mcq",
    q: "Cho dãy sắp xếp các kim loại theo chiều giảm dần tính khử: Na, Mg, Al, Fe. Trong số các cặp oxi hoá - khử sau, cặp nào có giá trị thế điện cực chuẩn nhỏ nhất?",
    options: [
      "Na⁺/Na.",
      "Mg²⁺/Mg.",
      "Fe²⁺/Fe.",
      "Al³⁺/Al."
    ],
    answer: 0,
    exp: "Kim loại có tính khử càng mạnh thì thế điện cực chuẩn E° của cặp oxi hoá - khử tương ứng càng nhỏ (càng âm). Trong dãy đã cho, kim loại Na có tính khử mạnh nhất nên cặp Na⁺/Na có giá trị E° nhỏ nhất (E° = -2,71 V)."
  },

  // ----------------------------------------------------
  // PHẦN II. CÂU HỎI TRẮC NGHIỆM ĐÚNG / SAI (4 CÂU)
  // ----------------------------------------------------
  {
    part: "PHẦN II. TRẮC NGHIỆM ĐÚNG - SAI (4,0 ĐIỂM)",
    type: "true_false",
    passage: "Hóa học các hợp chất hữu cơ: Ester, Lipid và Carbohydrate trong chương trình lớp 12.",
    q: "Xét tính đúng hay sai của mỗi phát biểu sau:",
    items: [
      {
        label: "a",
        text: "Ester no, đơn chức, mạch hở có công thức phân tử CₙH₂ₙO₂, với n ≥ 2.",
        correct: true,
        exp: "Đúng. Công thức tổng quát của ester no, đơn chức, mạch hở là CₙH₂ₙO₂ với n ≥ 2 (nhỏ nhất là methyl formate HCOOCH₃ với n = 2)."
      },
      {
        label: "b",
        text: "Dầu mỡ để lâu bị ôi là do liên kết đôi C=C trong chất béo bị oxi hóa chậm bởi oxygen không khí tạo chất có mùi khó chịu.",
        correct: true,
        exp: "Đúng. Các gốc acid béo chưa no chứa liên kết C=C bị oxygen không khí oxi hóa chậm tạo peroxide, sau đó phân hủy thành các aldehyde và ketone có mùi ôi khét khó chịu."
      },
      {
        label: "c",
        text: "Glucose, fructose, saccharose đều tác dụng được với Cu(OH)₂ và có khả năng tham gia phản ứng tráng bạc.",
        correct: false,
        exp: "Sai. Cả 3 chất đều hòa tan Cu(OH)₂ tạo dung dịch màu xanh lam, nhưng saccharose không có nhóm hemiacetal/hemiketal tự do nên không tham gia phản ứng tráng bạc."
      },
      {
        label: "d",
        text: "Phân tử cellulose được cấu tạo bởi nhiều đơn vị β-glucose.",
        correct: true,
        exp: "Đúng. Phân tử cellulose là polymer thiên nhiên tạo nên từ nhiều mắt xích β-glucose liên kết với nhau qua liên kết β-1,4-glycosidic tạo chuỗi mạch thẳng kéo dài."
      }
    ]
  },
  {
    part: "PHẦN II. TRẮC NGHIỆM ĐÚNG - SAI (4,0 ĐIỂM)",
    type: "true_false",
    passage: "Hợp chất hữu cơ chứa nitrogen: Amine, Amino acid và Peptide.",
    q: "Xét tính đúng hay sai của mỗi phát biểu sau:",
    items: [
      {
        label: "a",
        text: "Aniline tác dụng với nước bromine tạo thành kết tủa vàng.",
        correct: false,
        exp: "Sai. Aniline tác dụng với nước bromine tạo kết tủa TRẮNG của 2,4,6-tribromoaniline."
      },
      {
        label: "b",
        text: "Dipeptide phản ứng với Cu(OH)₂ trong môi trường kiềm tạo thành phức chất màu tím.",
        correct: false,
        exp: "Sai. Phản ứng màu biuret chỉ xảy ra với những peptide có từ 2 liên kết peptide trở lên (tripeptide trở lên). Dipeptide chỉ có 1 liên kết peptide nên không có phản ứng biuret."
      },
      {
        label: "c",
        text: "Ở điều kiện thường, các amine là chất khí: methylamine, ethylamine, dimethylamine, trimethylamine.",
        correct: true,
        exp: "Đúng. Bốn amine trên ở điều kiện thường là chất khí, có mùi khai khó chịu, độc và tan nhiều trong nước."
      },
      {
        label: "d",
        text: "Glutamic acid là một α-amino acid chứa đồng thời 1 nhóm amino (-NH₂), 2 nhóm carboxyl (-COOH) và có công thức phân tử là C₅H₉NO₄.",
        correct: true,
        exp: "Đúng. Công thức cấu tạo của glutamic acid là HOOC-CH₂-CH₂-CH(NH₂)-COOH, công thức phân tử là C₅H₉NO₄."
      }
    ]
  },
  {
    part: "PHẦN II. TRẮC NGHIỆM ĐÚNG - SAI (4,0 ĐIỂM)",
    type: "true_false",
    passage: "Vật liệu polymer và phản ứng tổng hợp polymer trong công nghiệp.",
    q: "Xét tính đúng hay sai của mỗi phát biểu sau:",
    items: [
      {
        label: "a",
        text: "Số mắt xích trong đoạn tơ nylon-6,6 có khối lượng 5,6 gam là 1,5.10²².",
        correct: true,
        exp: "Đúng. Khối lượng 1 mắt xích nylon-6,6 [-NH(CH₂)₆NHCO(CH₂)₄CO-] là M = 226 g/mol. Số mol mắt xích = 5,6 / 226 ≈ 0,024778 mol. Số mắt xích = 0,024778 × 6,022.10²³ ≈ 1,5.10²²."
      },
      {
        label: "b",
        text: "Điều kiện để tham gia phản ứng trùng ngưng là monomer tham gia phản ứng có ít nhất hai nhóm chức có khả năng phản ứng.",
        correct: true,
        exp: "Đúng. Theo SGK Hóa học 12: Điều kiện cần để một chất tham gia phản ứng trùng ngưng là phân tử phải chứa từ 2 nhóm chức có khả năng phản ứng trở lên."
      },
      {
        label: "c",
        text: "Cao su lưu hoá còn có tên gọi là cao su buna-S.",
        correct: false,
        exp: "Sai. Cao su buna-S là sản phẩm đồng trùng hợp giữa buta-1,3-diene và styrene, không phải là cao su lưu hóa."
      },
      {
        label: "d",
        text: "Bản chất của việc lưu hoá cao su là tạo ra cầu nối disulfide -S-S- giữa các mạch cao su.",
        correct: true,
        exp: "Đúng. Khi đun nóng cao su thô với lưu huỳnh, các nguyên tử lưu huỳnh tạo ra các cầu nối disulfide -S-S- liên kết các mạch phân tử polymer tạo thành mạng không gian 3 chiều có tính đàn hồi cao."
      }
    ]
  },
  {
    part: "PHẦN II. TRẮC NGHIỆM ĐÚNG - SAI (4,0 ĐIỂM)",
    type: "true_false",
    passage: "Pin Galvani được tạo nên từ hai cặp oxi hóa - khử Fe²⁺/Fe và Ag⁺/Ag. Cho biết: E°(Fe²⁺/Fe) = -0,440 V và E°(Ag⁺/Ag) = +0,799 V.",
    q: "Mỗi phát biểu sau về pin Galvani này là đúng hay sai?",
    items: [
      {
        label: "a",
        text: "Sức điện động chuẩn của pin bằng 1,239 V.",
        correct: true,
        exp: "Đúng. E°pin = E°(cathode) - E°(anode) = E°(Ag⁺/Ag) - E°(Fe²⁺/Fe) = 0,799 - (-0,440) = 1,239 V."
      },
      {
        label: "b",
        text: "Kim loại sắt đóng vai trò là cực dương (cathode) của pin vì sắt là kim loại mạnh hơn. Bạc đóng vai trò là cực âm (anode) của pin vì bạc là kim loại yếu hơn.",
        correct: false,
        exp: "Sai. Sắt có tính khử mạnh hơn nên đóng vai trò là cực ÂM (anode); Bạc có tính khử yếu hơn nên đóng vai trò là cực DƯƠNG (cathode)."
      },
      {
        label: "c",
        text: "Kim loại sắt đóng vai trò là cực âm (anode) của pin vì sắt là kim loại mạnh hơn. Bạc đóng vai trò là cực dương (cathode) của pin vì bạc là kim loại yếu hơn.",
        correct: true,
        exp: "Đúng. Trong pin Galvani, kim loại có tính khử mạnh hơn luôn đóng vai trò là cực âm (anode)."
      },
      {
        label: "d",
        text: "Trong pin Galvani, phản ứng oxi hóa-khử được sử dụng để chuyển đổi hóa năng thành điện năng.",
        correct: true,
        exp: "Đúng. Pin Galvani là thiết bị chuyển hóa năng lượng của phản ứng oxi hóa - khử tự phát thành dòng điện một chiều (hóa năng thành điện năng)."
      }
    ]
  },

  // ----------------------------------------------------
  // PHẦN III. CÂU HỎI TRẮC NGHIỆM YÊU CẦU TRẢ LỜI NGẮN (6 CÂU)
  // ----------------------------------------------------
  {
    part: "PHẦN III. CÂU HỎI TRẢ LỜI NGẮN (1,5 ĐIỂM)",
    type: "short_answer",
    q: "Sức điện động chuẩn của pin Cu²⁺/Cu và Ag⁺/Ag là E°pin = 0,46 V; biết E°(Cu²⁺/Cu) = +0,34 V. Xác định thế điện cực chuẩn của cặp oxi hóa – khử Ag⁺/Ag (theo đơn vị V).",
    correctAnswers: ["0.8", "0,8", "0.80", "0,80", "+0.8", "+0,8"],
    displayAnswer: "0,8",
    exp: "Do Cu có tính khử mạnh hơn Ag nên Cu là anode, Ag là cathode. Ta có: E°pin = E°(Ag⁺/Ag) - E°(Cu²⁺/Cu) ⇒ E°(Ag⁺/Ag) = E°pin + E°(Cu²⁺/Cu) = 0,46 + 0,34 = 0,80 V."
  },
  {
    part: "PHẦN III. CÂU HỎI TRẢ LỜI NGẮN (1,5 ĐIỂM)",
    type: "short_answer",
    q: "Phản ứng tổng hợp glucose trong cây xanh cần được cung cấp năng lượng là 2813 kJ cho mỗi mol glucose tạo thành: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂. Nếu trong một phút, mỗi cm² lá xanh nhận được khoảng 2,09 J năng lượng mặt trời, nhưng chỉ 10% được sử dụng vào phản ứng tổng hợp glucose. Với một ngày nắng (từ 6h00 – 17h00) diện tích lá xanh là 1 m², lượng glucose tổng hợp được x,2659 gam. Giá trị của x là bao nhiêu?",
    correctAnswers: ["88"],
    displayAnswer: "88",
    exp: "Thời gian nắng: 17h - 6h = 11 giờ = 660 phút. Diện tích lá: 1 m² = 10 000 cm². Tổng năng lượng nhận được = 2,09 × 10 000 × 660 = 13 794 000 J = 13 794 kJ. Năng lượng thực tế sử dụng = 13 794 × 10% = 1 379,4 kJ. Số mol glucose = 1 379,4 / 2813 ≈ 0,490366 mol. Khối lượng glucose = 0,490366 × 180 ≈ 88,2659 gam. Vậy giá trị của x là 88."
  },
  {
    part: "PHẦN III. CÂU HỎI TRẢ LỜI NGẮN (1,5 ĐIỂM)",
    type: "short_answer",
    q: "Valine là một loại amino acid thiết yếu, cần được cung cấp từ nguồn thực phẩm bên ngoài, cơ thể không tự tổng hợp được. Khi cho 1,404 gam valine hòa tan trong nước được dung dịch. Dung dịch này phản ứng vừa đủ với 12 mL dung dịch NaOH có nồng độ C (mol/L), thu được 1,668 gam muối. Giá trị của C là bao nhiêu?",
    correctAnswers: ["1", "1.0", "1,0", "1M", "1 M"],
    displayAnswer: "1",
    exp: "Khối lượng mol của valine (C₅H₁₁NO₂) là M = 117 g/mol ⇒ n(valine) = 1,404 / 117 = 0,012 mol. Do phân tử valine chứa 1 nhóm -COOH nên n(NaOH) = n(valine) = 0,012 mol. Thể tích dung dịch NaOH = 12 mL = 0,012 L. Nồng độ mol C = n / V = 0,012 / 0,012 = 1 mol/L."
  },
  {
    part: "PHẦN III. CÂU HỎI TRẢ LỜI NGẮN (1,5 ĐIỂM)",
    type: "short_answer",
    q: "Bradykinin có tác dụng làm giảm huyết áp, đó là một nonapeptide có công thức là: Arg–Pro–Pro–Gly–Phe–Ser–Pro–Phe–Arg. Khi thủy phân không hoàn toàn peptide này có thể thu được bao nhiêu tripeptide mà trong thành phần có Phenylalanine (Phe)?",
    correctAnswers: ["5"],
    displayAnswer: "5",
    exp: "Đánh số vị trí trong nonapeptide: 1-Arg, 2-Pro, 3-Pro, 4-Gly, 5-Phe, 6-Ser, 7-Pro, 8-Phe, 9-Arg. Các đoạn gồm 3 gốc amino acid liên tiếp có chứa Phe (vị trí 5 hoặc 8) là: (1) Pro-Gly-Phe (3-4-5); (2) Gly-Phe-Ser (4-5-6); (3) Phe-Ser-Pro (5-6-7); (4) Ser-Pro-Phe (6-7-8); (5) Pro-Phe-Arg (7-8-9). Tất cả 5 đoạn này đều phân biệt. Vậy có 5 tripeptide chứa Phe."
  },
  {
    part: "PHẦN III. CÂU HỎI TRẢ LỜI NGẮN (1,5 ĐIỂM)",
    type: "short_answer",
    q: "Cellulose triacetate (CTA, [C₆H₇O₂(OOCCH₃)₃]ₙ) là polymer được sử dụng để sản xuất tơ sợi chống nhăn, màng cho màn hình tinh thể lỏng,... Một đoạn mạch cellulose triacetate có phân tử khối là 345 600 thì chứa bao nhiêu mắt xích?",
    correctAnswers: ["1200", "1.200"],
    displayAnswer: "1200",
    exp: "Phân tử khối của 1 mắt xích cellulose triacetate C₆H₇O₂(OOCCH₃)₃: M = 12×6 + 7 + 16×2 + 3×(12×2 + 3 + 16×2) = 288 g/mol. Số lượng mắt xích n = 345 600 / 288 = 1200."
  },
  {
    part: "PHẦN III. CÂU HỎI TRẢ LỜI NGẮN (1,5 ĐIỂM)",
    type: "short_answer",
    q: "Có bao nhiêu amine bậc 1 ứng với amine có công thức phân tử C₃H₉N?",
    correctAnswers: ["2"],
    displayAnswer: "2",
    exp: "Amine bậc 1 có dạng R-NH₂ với gốc R là -C₃H₇. Gốc propyl có 2 đồng phân mạch carbon tạo nên 2 amine bậc 1: CH₃-CH₂-CH₂-NH₂ (propan-1-amine) và CH₃-CH(NH₂)-CH₃ (propan-2-amine). Vậy có 2 amine bậc 1."
  }
];
