
exports.handler = async function(event, context) {
  const jokes = [
    { "question": "Tại sao con mèo lại chia tay với bạn trai?", "answer": "Vì nó phát hiện anh ta là một con chuột đội lốt!" },
    { "question": "Cà phê thì đắng, còn bạn thì ngọt, vậy mình hợp nhau như gì?", "answer": "Như cà phê sữa!" },
    { "question": "Tại sao phi hành gia chia tay với bạn gái?", "answer": "Vì anh ấy cần không gian riêng!" },
    { "question": "Con cá nói gì khi đâm vào tường?", "answer": "'Đau đầu quá, quên bơi lùi!'" },
    { "question": "Tại sao cái cây lại hay bị bạn bè trêu?", "answer": "Vì nó cứ đứng im thin thít!" },
    { "question": "Môn học nào dễ nhất ở trường?", "answer": "Hóa học, vì chỉ cần có 'phản ứng' là đủ!" },
    { "question": "Tại sao quả chuối lại thích hát?", "answer": "Vì nó muốn trở thành 'chuối rốc'!" },
    { "question": "Bạn thân là gì?", "answer": "Là đứa biết bạn thích ăn gì và sẵn sàng để bạn ăn ké!" },
    { "question": "Tại sao con gà không bao giờ nói dối?", "answer": "Vì nó chỉ biết 'cục tác' sự thật!" },
    { "question": "Câu hỏi mà học sinh sợ nhất là gì?", "answer": "'Hôm nay ai chưa làm bài tập?'" },
    { "question": "Tại sao chiếc xe đạp không đi được?", "answer": "Vì nó mệt, cần 'đạp' thêm động lực!" },
    { "question": "Người yêu không có, nhưng cái gì thì phải mạnh?", "answer": "Wifi!" },
    { "question": "Tại sao con chó không làm ca sĩ?", "answer": "Vì nó chỉ biết sủa hit, không hát hit!" },
    { "question": "Cái gì càng ăn càng nhỏ đi?", "answer": "Cái bánh, vì ăn xong là hết!" },
    { "question": "Tại sao con bò lại hay cười?", "answer": "Vì nó nghe kể chuyện 'bò' đùa!" },
    { "question": "Tại sao trà sữa lại đắt?", "answer": "Vì nó chứa cả 'trân châu' lẫn tình yêu!" },
    { "question": "Cái gì bay trên trời mà không có cánh?", "answer": "Thời gian, vì nó trôi nhanh lắm!" },
    { "question": "Tại sao cái bàn lại ghét ghế?", "answer": "Vì ghế cứ được ngồi, còn bàn chỉ bị đè!" },
    { "question": "Mưa thì ướt, nắng thì khô, còn crush thì làm gì với tim mình?", "answer": "Làm tim mình 'lơ lửng'!" },
    { "question": "Tại sao con ốc sên chạy chậm?", "answer": "Vì nó mang cả 'nhà' trên lưng!" }
  ];
  
  return {
    statusCode: 200,
    body: JSON.stringify(jokes),
  };
};